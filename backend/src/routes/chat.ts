import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../config/prisma';
import { requireAuth, AuthenticatedRequest } from '../middleware/auth';

export const router = Router();

// Get all conversations for current user
router.get('/conversations', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.userId!;
    
    const conversations = await prisma.conversation.findMany({
      where: {
        OR: [
          { user1Id: userId },
          { user2Id: userId },
        ],
      },
      include: {
        user1: {
          select: { id: true, name: true, email: true },
        },
        user2: {
          select: { id: true, name: true, email: true },
        },
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
      orderBy: { updatedAt: 'desc' },
    });

    // Format conversations to show the other user
    const formatted = conversations.map((conv) => {
      const otherUser = conv.user1Id === userId ? conv.user2 : conv.user1;
      const lastMessage = conv.messages[0] || null;
      
      // Count unread messages
      const unreadCount = conv.messages.filter(
        (m) => !m.read && m.senderId !== userId
      ).length;

      return {
        id: conv.id,
        otherUser: {
          id: otherUser.id,
          name: otherUser.name || otherUser.email.split('@')[0],
          email: otherUser.email,
        },
        lastMessage: lastMessage
          ? {
              content: lastMessage.content,
              senderId: lastMessage.senderId,
              createdAt: lastMessage.createdAt,
            }
          : null,
        unreadCount,
        updatedAt: conv.updatedAt,
      };
    });

    res.json(formatted);
  } catch (error: any) {
    console.error('Error fetching conversations:', error);
    res.status(500).json({ error: error?.message || 'Internal server error' });
  }
});

// Get or create conversation between two users
router.post('/conversations', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.userId!;
    const { otherUserId } = z.object({ otherUserId: z.string() }).parse(req.body);

    if (userId === otherUserId) {
      return res.status(400).json({ error: 'Cannot create conversation with yourself' });
    }

    // Validate that the other user exists
    const otherUser = await prisma.user.findUnique({
      where: { id: otherUserId },
      select: { id: true, name: true, email: true },
    });

    if (!otherUser) {
      return res.status(404).json({ error: 'User not found. The user you are trying to chat with does not exist.' });
    }

    // Check if conversation exists
    let conversation = await prisma.conversation.findFirst({
      where: {
        OR: [
          { user1Id: userId, user2Id: otherUserId },
          { user1Id: otherUserId, user2Id: userId },
        ],
      },
      include: {
        user1: {
          select: { id: true, name: true, email: true },
        },
        user2: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    if (!conversation) {
      // Create new conversation (always store with smaller ID first for consistency)
      const [user1Id, user2Id] = userId < otherUserId ? [userId, otherUserId] : [otherUserId, userId];
      
      try {
        conversation = await prisma.conversation.create({
          data: {
            user1Id,
            user2Id,
          },
          include: {
            user1: {
              select: { id: true, name: true, email: true },
            },
            user2: {
              select: { id: true, name: true, email: true },
            },
          },
        });
      } catch (createError: any) {
        // Handle unique constraint violation (conversation might have been created by another request)
        if (createError.code === 'P2002') {
          conversation = await prisma.conversation.findFirst({
            where: {
              OR: [
                { user1Id: userId, user2Id: otherUserId },
                { user1Id: otherUserId, user2Id: userId },
              ],
            },
            include: {
              user1: {
                select: { id: true, name: true, email: true },
              },
              user2: {
                select: { id: true, name: true, email: true },
              },
            },
          });
        } else {
          throw createError;
        }
      }
    }

    if (!conversation) {
      return res.status(500).json({ error: 'Failed to create or retrieve conversation' });
    }

    const conversationOtherUser = conversation.user1Id === userId ? conversation.user2 : conversation.user1;
    
    res.json({
      id: conversation.id,
      otherUser: {
        id: conversationOtherUser.id,
        name: conversationOtherUser.name || conversationOtherUser.email.split('@')[0],
        email: conversationOtherUser.email,
      },
    });
  } catch (error: any) {
    console.error('Error creating conversation:', error);
    
    // Provide more specific error messages
    if (error.code === 'P2003') {
      return res.status(400).json({ error: 'Invalid user ID. One of the users does not exist.' });
    }
    
    // Handle Zod validation errors
    if (error.name === 'ZodError') {
      return res.status(400).json({ error: 'Invalid request. Please provide a valid user ID.' });
    }
    
    // More specific error message
    const errorMessage = error?.message || 'Internal server error';
    const statusCode = error.code === 'P2003' ? 400 : 500;
    
    res.status(statusCode).json({ error: errorMessage });
  }
});

// Get messages in a conversation
router.get('/conversations/:conversationId/messages', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.userId!;
    const { conversationId } = req.params as { conversationId: string };

    // Verify user is part of conversation
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId },
    });

    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    if (conversation.user1Id !== userId && conversation.user2Id !== userId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const messages = await prisma.message.findMany({
      where: { conversationId },
      include: {
        sender: {
          select: { id: true, name: true, email: true },
        },
      },
      orderBy: { createdAt: 'asc' },
    });

    // Mark messages as read
    await prisma.message.updateMany({
      where: {
        conversationId,
        senderId: { not: userId },
        read: false,
      },
      data: { read: true },
    });

    res.json(messages);
  } catch (error: any) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: error?.message || 'Internal server error' });
  }
});

// Send a message
router.post('/conversations/:conversationId/messages', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.userId!;
    const { conversationId } = req.params as { conversationId: string };
    const { content } = z.object({ content: z.string().min(1) }).parse(req.body);

    // Verify user is part of conversation
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId },
    });

    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    if (conversation.user1Id !== userId && conversation.user2Id !== userId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const message = await prisma.message.create({
      data: {
        conversationId,
        senderId: userId,
        content,
      },
      include: {
        sender: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    // Update conversation updatedAt
    await prisma.conversation.update({
      where: { id: conversationId },
      data: { updatedAt: new Date() },
    });

    res.status(201).json(message);
  } catch (error: any) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: error?.message || 'Internal server error' });
  }
});

