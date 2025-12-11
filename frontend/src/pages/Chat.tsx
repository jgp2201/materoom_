import { useEffect, useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Circle } from "lucide-react";
import { useAuth } from "../App";
import { 
  apiGetConversations, 
  apiGetMessages, 
  apiCreateOrGetConversation,
  apiSendMessage,
  Conversation,
  Message 
} from "../lib/api";
import { format } from "date-fns";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export default function Chat() {
  const { token, user } = useAuth();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const conversationId = searchParams.get('conversation');
  const otherUserId = searchParams.get('userId');
  
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(conversationId || null);
  const [messageInput, setMessageInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [typing, setTyping] = useState<{ [key: string]: boolean }>({});
  const [onlineUsers, setOnlineUsers] = useState<Set<string>>(new Set());
  const [socketConnected, setSocketConnected] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const processedUserIdRef = useRef<string | null>(null);

  // Reset processed userId when otherUserId changes
  useEffect(() => {
    if (otherUserId !== processedUserIdRef.current) {
      processedUserIdRef.current = null;
    }
  }, [otherUserId]);

  // Initialize Socket.io connection
  useEffect(() => {
    if (!token) {
      navigate("/signin");
      return;
    }

    let connectionAttempts = 0;
    const MAX_ATTEMPTS = 5;

    // Connect to Socket.io server - try polling first, then websocket
    const socket = io(API_URL, {
      auth: {
        token: token,
      },
      transports: ['polling', 'websocket'], // Try polling first as it's more reliable
      reconnection: true,
      reconnectionAttempts: MAX_ATTEMPTS,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 10000, // Increased timeout
      forceNew: false,
      autoConnect: true,
    });

    socketRef.current = socket;

    // Connection events
    socket.on('connect', () => {
      console.log('✅ Connected to chat server');
      setSocketConnected(true);
      connectionAttempts = 0; // Reset on successful connection
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from chat server');
      setSocketConnected(false);
    });

    socket.on('connect_error', (error) => {
      connectionAttempts++;
      
      // Log connection attempts for debugging
      if (connectionAttempts === 1) {
        console.log('⚠️ Socket.IO connecting...', error.message);
      } else if (connectionAttempts <= 3) {
        console.log(`⚠️ Socket.IO retry attempt ${connectionAttempts}/${MAX_ATTEMPTS}`);
      }
      
      // Try switching transport if websocket fails
      if (connectionAttempts === 2 && socket.io.opts.transports[0] === 'websocket') {
        socket.io.opts.transports = ['polling'];
        console.log('⚠️ Switching to polling transport...');
      }
      
      if (connectionAttempts >= MAX_ATTEMPTS) {
        console.log('⚠️ Socket.IO connection failed after max attempts, using REST API fallback');
        setSocketConnected(false);
        // Don't disconnect, let it keep trying in background
      }
    });

    socket.on('reconnect_attempt', () => {
      // Silently handle reconnect attempts
    });

    socket.on('reconnect_failed', () => {
      console.log('Socket.IO reconnection failed, using REST API fallback');
      setSocketConnected(false);
      socket.disconnect();
    });

    socket.on('error', (error: { message: string }) => {
      // Only log actual errors, not connection failures
      if (!error.message?.includes('websocket') && !error.message?.includes('transport')) {
        console.error('Socket error:', error);
      }
    });

    // Receive new message
    socket.on('message:new', (message: Message) => {
      setMessages((prev) => {
        // Avoid duplicates
        if (prev.some((m) => m.id === message.id)) {
          return prev;
        }
        return [...prev, message];
      });

      // Update conversation list
      loadConversations();
    });

    // Receive conversation update
    socket.on('conversation:new-message', (data: { conversationId: string; message: Message }) => {
      // Update conversations if message is from another conversation
      if (data.conversationId !== selectedConversation) {
        loadConversations();
      }
    });

    // Typing indicators
    socket.on('typing:start', (data: { conversationId: string; userId: string }) => {
      if (data.conversationId === selectedConversation) {
        setTyping((prev) => ({ ...prev, [data.userId]: true }));
      }
    });

    socket.on('typing:stop', (data: { conversationId: string; userId: string }) => {
      if (data.conversationId === selectedConversation) {
        setTyping((prev) => {
          const updated = { ...prev };
          delete updated[data.userId];
          return updated;
        });
      }
    });

    // Online/offline status
    socket.on('user:online', (data: { userId: string }) => {
      setOnlineUsers((prev) => new Set(prev).add(data.userId));
    });

    socket.on('user:offline', (data: { userId: string }) => {
      setOnlineUsers((prev) => {
        const updated = new Set(prev);
        updated.delete(data.userId);
        return updated;
      });
    });

    // Read receipts
    socket.on('messages:read', (data: { conversationId: string; userId?: string; messageIds?: string[] }) => {
      if (data.conversationId === selectedConversation) {
        if (data.messageIds && data.messageIds.length > 0) {
          setMessages((prev) =>
            prev.map((msg) =>
              data.messageIds!.includes(msg.id) ? { ...msg, read: true } : msg
            )
          );
        } else {
          // Mark all received messages as read
          setMessages((prev) =>
            prev.map((msg) =>
              msg.senderId !== user?.id ? { ...msg, read: true } : msg
            )
          );
        }
      }
    });

    // Cleanup on unmount
    return () => {
      socket.disconnect();
    };
  }, [token, navigate, selectedConversation, user?.id]);

  // Load conversations
  useEffect(() => {
    if (!token) return;
    loadConversations();
  }, [token]);

  // Handle starting new conversation from URL
  useEffect(() => {
    if (otherUserId && token && !selectedConversation && !conversationId) {
      // Check if we've already processed this userId
      if (processedUserIdRef.current === otherUserId) return;
      
      // If conversations are still loading, wait a moment
      if (loading) {
        const timer = setTimeout(() => {
          // Check if conversation exists now
          const existingConv = conversations.find(
            (conv) => conv.otherUser.id === otherUserId
          );
          if (existingConv && !selectedConversation) {
            processedUserIdRef.current = otherUserId;
            setSelectedConversation(existingConv.id);
            setSearchParams({ conversation: existingConv.id });
          } else if (!selectedConversation) {
            startConversation(otherUserId);
          }
        }, 300);
        return () => clearTimeout(timer);
      }
      
      // Conversations loaded, check if exists
      const existingConv = conversations.find(
        (conv) => conv.otherUser.id === otherUserId
      );
      
      if (existingConv) {
        processedUserIdRef.current = otherUserId;
        setSelectedConversation(existingConv.id);
        setSearchParams({ conversation: existingConv.id });
      } else {
        // Create new conversation
        startConversation(otherUserId);
      }
    }
  }, [otherUserId, token, conversationId, conversations, loading, selectedConversation]);

  // Load messages and join conversation room when selected
  useEffect(() => {
    if (selectedConversation && token) {
      loadMessages(selectedConversation);
      
      // Join conversation room if socket is connected
      if (socketRef.current && socketConnected) {
        socketRef.current.emit('conversation:join', { conversationId: selectedConversation });
        socketRef.current.emit('messages:read', { conversationId: selectedConversation });
      }

      return () => {
        // Leave conversation room if socket is connected
        if (socketRef.current && socketConnected) {
          socketRef.current.emit('conversation:leave', { conversationId: selectedConversation });
        }
      };
    }
  }, [selectedConversation, token, socketConnected]);

  // Poll for new messages when Socket.IO is not connected
  useEffect(() => {
    if (!socketConnected && selectedConversation && token) {
      const interval = setInterval(() => {
        loadMessages(selectedConversation);
        loadConversations();
      }, 3000); // Poll every 3 seconds

      return () => clearInterval(interval);
    }
  }, [socketConnected, selectedConversation, token]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const loadConversations = async () => {
    try {
      const data = await apiGetConversations(token!);
      setConversations(data);
      
      // If we have a conversationId but no selected conversation, select it
      if (conversationId && !selectedConversation) {
        setSelectedConversation(conversationId);
      }
      
      // If we have otherUserId from URL, check if conversation exists now
      if (otherUserId && !selectedConversation && processedUserIdRef.current !== otherUserId) {
        const existingConv = data.find(
          (conv) => conv.otherUser.id === otherUserId
        );
        if (existingConv) {
          processedUserIdRef.current = otherUserId;
          setSelectedConversation(existingConv.id);
          setSearchParams({ conversation: existingConv.id });
        }
      }
    } catch (error) {
      console.error("Error loading conversations:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMessages = async (convId: string) => {
    try {
      const data = await apiGetMessages(token!, convId);
      setMessages(data);
    } catch (error) {
      console.error("Error loading messages:", error);
    }
  };

  const startConversation = async (userId: string) => {
    try {
      console.log('Starting conversation with user:', userId);
      
      // Early validation before API call
      if (!userId || userId.trim() === '') {
        alert('Invalid user ID. Please select a valid user to chat with.');
        return;
      }
      
      // For mock PG owners (owner-pg-*), these are demo listings without real users
      if (userId.startsWith('owner-')) {
        alert('This is a demo PG listing. To chat with real users, go to the "Roommates" tab and click "Chat" on listings from real users like jayvardhan or aman bodila.');
        return;
      }
      
      setSending(true); // Show loading state
      
      const conv = await apiCreateOrGetConversation(token!, userId);
      console.log('Conversation created/retrieved:', conv);
      
      processedUserIdRef.current = userId;
      setSelectedConversation(conv.id);
      setSearchParams({ conversation: conv.id, userId: userId });
      
      // Load messages for the new conversation
      await loadMessages(conv.id);
      
      // Reload conversations to get the new one in the list
      await loadConversations();
      
      // Join the conversation room via socket if connected
      if (socketRef.current && socketConnected) {
        socketRef.current.emit('conversation:join', { conversationId: conv.id });
        socketRef.current.emit('messages:read', { conversationId: conv.id });
      }
    } catch (error: any) {
      console.error("Error starting conversation:", error);
      
      // Extract meaningful error message
      let errorMessage = 'Failed to start conversation.';
      if (error?.message) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      // Show user-friendly alert
      alert(errorMessage + '\n\nTip: Make sure you are trying to chat with a real user from the Roommates or Seekers tab, not a demo PG listing.');
      
      processedUserIdRef.current = null; // Reset on error
    } finally {
      setSending(false);
    }
  };

  const sendMessage = async () => {
    if (!messageInput.trim() || !selectedConversation || sending) return;

    const content = messageInput.trim();
    setSending(true);
    
    try {
      // Try Socket.IO first if connected, otherwise use REST API
      if (socketRef.current && socketConnected) {
        socketRef.current.emit('message:send', {
          conversationId: selectedConversation,
          content,
        });
        
        // Clear typing indicator
        socketRef.current.emit('typing:stop', { conversationId: selectedConversation });
      } else {
        // Fallback to REST API
        const newMessage = await apiSendMessage(token!, selectedConversation, content);
        
        // Add message to local state immediately for better UX
        setMessages((prev) => {
          if (prev.some((m) => m.id === newMessage.id)) {
            return prev;
          }
          return [...prev, newMessage];
        });
        
        // Refresh conversations to update last message
        loadConversations();
      }
      
      setMessageInput("");
      
      // Refresh messages after a short delay to ensure we have the latest
      setTimeout(() => {
        loadMessages(selectedConversation);
        loadConversations();
      }, 300);
    } catch (error) {
      console.error("Error sending message:", error);
      alert('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Handle typing indicator
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(e.target.value);

    if (!selectedConversation || !socketRef.current || !socketConnected) return;

    // Emit typing start
    socketRef.current.emit('typing:start', { conversationId: selectedConversation });

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Stop typing after 2 seconds of no input
    typingTimeoutRef.current = setTimeout(() => {
      if (socketRef.current && socketConnected) {
        socketRef.current.emit('typing:stop', { conversationId: selectedConversation });
      }
    }, 2000);
  };

  const getOtherUser = () => {
    if (!selectedConversation) return null;
    const conv = conversations.find((c) => c.id === selectedConversation);
    return conv?.otherUser || null;
  };

  const getTypingUsers = () => {
    if (!selectedConversation) return [];
    const otherUser = getOtherUser();
    if (!otherUser) return [];
    
    const typingUserIds = Object.keys(typing);
    return typingUserIds
      .map((userId) => {
        if (userId === otherUser.id) {
          return otherUser.name;
        }
        return null;
      })
      .filter((name): name is string => name !== null);
  };

  if (!token) {
    return null;
  }

  const otherUser = getOtherUser();
  const isOtherUserOnline = otherUser ? onlineUsers.has(otherUser.id) : false;
  const typingUsers = getTypingUsers();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ height: 'calc(100vh - 200px)' }}>
          {/* Conversations List */}
          <Card className="p-0 overflow-hidden flex flex-col">
            <div className="p-4 border-b bg-gradient-primary">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Messages
                </h2>
                {socketConnected ? (
                  <div className="flex items-center gap-1 text-xs text-white/80">
                    <Circle className="h-2 w-2 fill-green-400 text-green-400" />
                    Online
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-xs text-white/60">
                    <Circle className="h-2 w-2 fill-gray-400 text-gray-400" />
                    Offline
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {loading ? (
                <div className="p-4 text-center text-muted-foreground">Loading conversations...</div>
              ) : conversations.length === 0 ? (
                <div className="p-4 text-center text-muted-foreground">
                  <MessageCircle className="h-12 w-12 mx-auto mb-2 text-muted-foreground opacity-50" />
                  <p>No conversations yet</p>
                  <p className="text-sm">Start chatting with someone!</p>
                </div>
              ) : (
                conversations.map((conv) => {
                  const isOnline = onlineUsers.has(conv.otherUser.id);
                  return (
                    <div
                      key={conv.id}
                      onClick={() => {
                        setSelectedConversation(conv.id);
                        setSearchParams({ conversation: conv.id });
                      }}
                      className={`p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors ${
                        selectedConversation === conv.id ? "bg-primary/10 border-l-4 border-l-primary" : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold flex-shrink-0">
                            {conv.otherUser.name.charAt(0).toUpperCase()}
                          </div>
                          {isOnline && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold truncate">{conv.otherUser.name}</h3>
                            {conv.unreadCount > 0 && (
                              <span className="bg-primary text-white text-xs rounded-full px-2 py-0.5">
                                {conv.unreadCount}
                              </span>
                            )}
                          </div>
                          {conv.lastMessage && (
                            <p className="text-sm text-muted-foreground truncate">
                              {conv.lastMessage.senderId === user?.id ? "You: " : ""}
                              {conv.lastMessage.content}
                            </p>
                          )}
                          {conv.lastMessage && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {format(new Date(conv.lastMessage.createdAt), "MMM d, h:mm a")}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </Card>

          {/* Chat Window */}
          <div className="lg:col-span-2 flex flex-col" style={{ minHeight: 0, height: '100%' }}>
            {selectedConversation ? (
              <Card className="flex flex-col p-0 overflow-hidden" style={{ height: '100%', minHeight: 0 }}>
                {/* Chat Header */}
                <div className="p-4 border-b bg-gradient-primary flex-shrink-0">
                  {otherUser && (
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center font-semibold">
                          {otherUser.name.charAt(0).toUpperCase()}
                        </div>
                        {isOtherUserOnline && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{otherUser.name}</h3>
                        <p className="text-sm text-white/80">
                          {isOtherUserOnline ? (
                            <span className="flex items-center gap-1">
                              <Circle className="h-2 w-2 fill-green-400 text-green-400" />
                              Online
                            </span>
                          ) : (
                            otherUser.email
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Messages */}
                <div
                  ref={messagesContainerRef}
                  className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20"
                  style={{ minHeight: 0, flex: '1 1 auto' }}
                >
                  {messages.length === 0 ? (
                    <div className="text-center text-muted-foreground py-8">
                      <MessageCircle className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>No messages yet. Start the conversation!</p>
                    </div>
                  ) : (
                    <>
                      {messages.map((message) => {
                        const isOwn = message.senderId === user?.id;
                        return (
                          <div
                            key={message.id}
                            className={`flex ${isOwn ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[70%] rounded-lg px-4 py-2 ${
                                isOwn
                                  ? "bg-primary text-white rounded-br-none"
                                  : "bg-white border border-border rounded-bl-none"
                              }`}
                            >
                              {!isOwn && (
                                <div className="text-xs font-medium mb-1 text-muted-foreground">
                                  {message.sender.name}
                                </div>
                              )}
                              <p className={isOwn ? "text-white" : "text-foreground"}>
                                {message.content}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <p
                                  className={`text-xs ${
                                    isOwn ? "text-white/80" : "text-muted-foreground"
                                  }`}
                                >
                                  {format(new Date(message.createdAt), "h:mm a")}
                                </p>
                                {isOwn && (
                                  <span className={`text-xs ${message.read ? 'text-white/80' : 'text-white/60'}`}>
                                    {message.read ? '✓✓' : '✓'}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {typingUsers.length > 0 && (
                        <div className="flex justify-start">
                          <div className="bg-white border border-border rounded-lg px-4 py-2 rounded-bl-none">
                            <div className="flex items-center gap-1">
                              <div className="flex gap-1">
                                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              </div>
                              <span className="text-xs text-muted-foreground ml-2">
                                {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Message Input */}
                <div className="p-4 border-t bg-white flex-shrink-0">
                  <div className="flex gap-2">
                    <Input
                      value={messageInput}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      placeholder="Type a message..."
                      className="flex-1"
                      autoFocus
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={!messageInput.trim() || sending}
                      className="bg-primary hover:bg-primary-dark text-white flex-shrink-0"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="flex-1 flex items-center justify-center">
                <div className="text-center text-muted-foreground px-6">
                  <MessageCircle className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold mb-2">Select a conversation to start chatting</p>
                  <p className="text-sm mb-4">or click "Chat" on someone's profile</p>
                  <div className="bg-muted/50 rounded-lg p-4 text-left max-w-md mx-auto">
                    <p className="text-xs font-semibold mb-2">💡 How to chat:</p>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li>• Go to "Listings" tab on Find PG page</li>
                      <li>• Find listings from real users (jayvardhan, aman bodila, etc.)</li>
                      <li>• Click "Chat" button on their listing card</li>
                      <li>• The conversation will open automatically</li>
                    </ul>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
