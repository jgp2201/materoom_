import { Server as HTTPServer } from 'http';
import { Server as SocketServer, Socket } from 'socket.io';
import jwt from 'jsonwebtoken';
import { prisma } from './config/prisma';

interface AuthenticatedSocket extends Socket {
  userId?: string;
}

export function initializeSocket(httpServer: HTTPServer) {
  const io = new SocketServer(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
      credentials: true,
      allowedHeaders: ['Authorization', 'Content-Type'],
    },
    transports: ['websocket', 'polling'],
    allowEIO3: true, // Allow Engine.IO v3 clients
  });

  console.log('✅ Socket.IO server initialized');

  // Middleware to authenticate socket connections
  io.use(async (socket: AuthenticatedSocket, next) => {
    try {
      const token = socket.handshake.auth.token || socket.handshake.headers.authorization?.replace('Bearer ', '');
      
      if (!token) {
        return next(new Error('Authentication error: No token provided'));
      }

      const payload = jwt.verify(token, process.env.JWT_SECRET || 'dev-secret-change') as { sub: string };
      socket.userId = payload.sub;
      next();
    } catch (err) {
      next(new Error('Authentication error: Invalid token'));
    }
  });

  // Map to store user ID to socket ID mapping
  const userSocketMap = new Map<string, string>();
  // Map to store socket ID to user ID mapping
  const socketUserMap = new Map<string, string>();

  io.on('connection', async (socket: AuthenticatedSocket) => {
    const userId = socket.userId!;
    console.log(`User ${userId} connected with socket ${socket.id}`);

    // Store user-socket mapping
    userSocketMap.set(userId, socket.id);
    socketUserMap.set(socket.id, userId);

    // Join user's personal room for notifications
    socket.join(`user:${userId}`);

    // Notify user's contacts that they're online
    const userConversations = await prisma.conversation.findMany({
      where: {
        OR: [
          { user1Id: userId },
          { user2Id: userId },
        ],
      },
    });

    userConversations.forEach((conv) => {
      const otherUserId = conv.user1Id === userId ? conv.user2Id : conv.user1Id;
      io.to(`user:${otherUserId}`).emit('user:online', { userId });
    });

    // Handle join conversation
    socket.on('conversation:join', async (data: { conversationId: string }) => {
      const { conversationId } = data;
      
      // Verify user is part of conversation
      const conversation = await prisma.conversation.findUnique({
        where: { id: conversationId },
      });

      if (conversation && (conversation.user1Id === userId || conversation.user2Id === userId)) {
        socket.join(`conversation:${conversationId}`);
        console.log(`User ${userId} joined conversation ${conversationId}`);
        
        // Mark messages as read when user joins conversation
        await prisma.message.updateMany({
          where: {
            conversationId,
            senderId: { not: userId },
            read: false,
          },
          data: { read: true },
        });

        // Emit read receipts
        const unreadMessages = await prisma.message.findMany({
          where: {
            conversationId,
            senderId: { not: userId },
            read: true,
          },
        });

        socket.emit('messages:read', { conversationId, messageIds: unreadMessages.map(m => m.id) });
      }
    });

    // Handle leave conversation
    socket.on('conversation:leave', (data: { conversationId: string }) => {
      socket.leave(`conversation:${data.conversationId}`);
    });

    // Handle send message
    socket.on('message:send', async (data: { conversationId: string; content: string }) => {
      const { conversationId, content } = data;

      try {
        // Verify user is part of conversation
        const conversation = await prisma.conversation.findUnique({
          where: { id: conversationId },
        });

        if (!conversation) {
          socket.emit('error', { message: 'Conversation not found' });
          return;
        }

        if (conversation.user1Id !== userId && conversation.user2Id !== userId) {
          socket.emit('error', { message: 'Unauthorized' });
          return;
        }

        // Create message
        const message = await prisma.message.create({
          data: {
            conversationId,
            senderId: userId,
            content,
            read: false,
          },
          include: {
            sender: {
              select: { id: true, name: true, email: true },
            },
          },
        });

        // Update conversation timestamp
        await prisma.conversation.update({
          where: { id: conversationId },
          data: { updatedAt: new Date() },
        });

        // Emit to all users in the conversation room
        io.to(`conversation:${conversationId}`).emit('message:new', message);

        // Notify the other user if they're not in the conversation room
        const otherUserId = conversation.user1Id === userId ? conversation.user2Id : conversation.user1Id;
        const otherUserSocketId = userSocketMap.get(otherUserId);
        
        if (otherUserSocketId && !socket.rooms.has(`conversation:${conversationId}`)) {
          io.to(`user:${otherUserId}`).emit('conversation:new-message', {
            conversationId,
            message,
          });
        }
      } catch (error: any) {
        console.error('Error sending message:', error);
        socket.emit('error', { message: error?.message || 'Failed to send message' });
      }
    });

    // Handle typing indicator
    socket.on('typing:start', (data: { conversationId: string }) => {
      const { conversationId } = data;
      socket.to(`conversation:${conversationId}`).emit('typing:start', {
        conversationId,
        userId,
      });
    });

    socket.on('typing:stop', (data: { conversationId: string }) => {
      const { conversationId } = data;
      socket.to(`conversation:${conversationId}`).emit('typing:stop', {
        conversationId,
        userId,
      });
    });

    // Handle mark messages as read
    socket.on('messages:read', async (data: { conversationId: string; messageIds?: string[] }) => {
      const { conversationId, messageIds } = data;

      try {
        const conversation = await prisma.conversation.findUnique({
          where: { id: conversationId },
        });

        if (!conversation || (conversation.user1Id !== userId && conversation.user2Id !== userId)) {
          return;
        }

        if (messageIds && messageIds.length > 0) {
          await prisma.message.updateMany({
            where: {
              id: { in: messageIds },
              conversationId,
              senderId: { not: userId },
            },
            data: { read: true },
          });
        } else {
          // Mark all unread messages in conversation as read
          await prisma.message.updateMany({
            where: {
              conversationId,
              senderId: { not: userId },
              read: false,
            },
            data: { read: true },
          });
        }

        // Emit read receipts to conversation room
        io.to(`conversation:${conversationId}`).emit('messages:read', {
          conversationId,
          userId,
        });
      } catch (error) {
        console.error('Error marking messages as read:', error);
      }
    });

    // Handle disconnect
    socket.on('disconnect', async () => {
      console.log(`User ${userId} disconnected`);
      userSocketMap.delete(userId);
      socketUserMap.delete(socket.id);

      // Get user's conversations for offline notification
      const userConversations = await prisma.conversation.findMany({
        where: {
          OR: [
            { user1Id: userId },
            { user2Id: userId },
          ],
        },
      });

      // Notify user's contacts that they're offline
      userConversations.forEach((conv) => {
        const otherUserId = conv.user1Id === userId ? conv.user2Id : conv.user1Id;
        io.to(`user:${otherUserId}`).emit('user:offline', { userId });
      });
    });
  });

  return io;
}

