const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export type AuthUser = { id: string; email: string; name?: string | null };

export async function apiSignup(input: { email: string; password: string; name?: string }) {
  const res = await fetch(`${API_URL}/api/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error((await res.json()).error || 'Signup failed');
  return (await res.json()) as { token: string; user: AuthUser };
}

export async function apiLogin(input: { email: string; password: string }) {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error((await res.json()).error || 'Login failed');
  return (await res.json()) as { token: string; user: AuthUser };
}

export async function apiMe(token: string) {
  const res = await fetch(`${API_URL}/api/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Me failed');
  return (await res.json()) as AuthUser;
}

export type UserPreferences = {
  budgetMin?: number;
  budgetMax?: number;
  preferredLocation?: string;
  bedrooms?: number;
  bathrooms?: number;
};

export async function apiGetPreferences(token: string) {
  const res = await fetch(`${API_URL}/api/preferences`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch preferences');
  return (await res.json()) as UserPreferences | {};
}

export async function apiSavePreferences(token: string, prefs: UserPreferences) {
  const res = await fetch(`${API_URL}/api/preferences`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(prefs),
  });
  if (!res.ok) throw new Error('Failed to save preferences');
  return (await res.json()) as UserPreferences;
}

export type Property = {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  imageUrl?: string | null;
};

export async function apiListProperties() {
  const res = await fetch(`${API_URL}/api/properties`);
  if (!res.ok) throw new Error('Failed to list properties');
  return (await res.json()) as Property[];
}

export async function apiGetProperty(id: string) {
  const res = await fetch(`${API_URL}/api/properties/${id}`);
  if (!res.ok) throw new Error('Failed to get property');
  return (await res.json()) as Property;
}

export type RequirementInput = {
  location: string;
  approxRent: number;
  lookingFor: 'Male' | 'Female' | 'Any';
  occupancy: 'Single' | 'Shared' | 'Any';
  highlights?: string[];
  interestedInPg: boolean;
  phoneVisibility: 'public' | 'private';
  interestedInTeams: boolean;
  description: string;
};

export async function apiCreateRequirement(token: string, input: RequirementInput) {
  const res = await fetch(`${API_URL}/api/requirements`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(input),
  });
  if (!res.ok) {
    try {
      const data = await res.json();
      throw new Error(data?.error || 'Failed to submit requirement');
    } catch {
      throw new Error('Failed to submit requirement');
    }
  }
  return await res.json();
}

export type ListingInput = {
  location: string;
  approxRent: number;
  occupancy: 'Single' | 'Shared' | 'Any';
  highlights?: string[];
  amenities?: string[];
  phoneVisibility: 'public' | 'private';
  description: string;
};

export async function apiCreateListing(token: string, input: ListingInput) {
  const res = await fetch(`${API_URL}/api/listings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(input),
  });
  if (!res.ok) {
    try {
      const data = await res.json();
      throw new Error(data?.error || 'Failed to submit listing');
    } catch {
      throw new Error('Failed to submit listing');
    }
  }
  return await res.json();
}

export async function apiListRoomListings() {
  const res = await fetch(`${API_URL}/api/listings`);
  if (!res.ok) throw new Error('Failed to list listings');
  return await res.json();
}

export async function apiGetListing(id: string) {
  const res = await fetch(`${API_URL}/api/listings/${id}`);
  if (!res.ok) throw new Error('Failed to get listing');
  return await res.json();
}

export async function apiListRequirements() {
  const res = await fetch(`${API_URL}/api/requirements`);
  if (!res.ok) throw new Error('Failed to list requirements');
  return await res.json();
}

export async function apiGetRequirement(id: string) {
  const res = await fetch(`${API_URL}/api/requirements/${id}`);
  if (!res.ok) throw new Error('Failed to get requirement');
  return await res.json();
}

export async function apiDeleteRequirement(token: string, id: string) {
  const res = await fetch(`${API_URL}/api/requirements/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to delete requirement');
  return await res.json();
}

export async function apiDeleteListing(token: string, id: string) {
  const res = await fetch(`${API_URL}/api/listings/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to delete listing');
  return await res.json();
}

// Team Request Types
export type TeamRequest = {
  id: string;
  senderId: string;
  receiverId: string;
  status: 'pending' | 'accepted' | 'rejected';
  message?: string;
  createdAt: string;
  updatedAt: string;
  sender?: { id: string; name: string; email: string };
  receiver?: { id: string; name: string; email: string };
};

export type CreateTeamRequestInput = {
  receiverId: string;
  message?: string;
};

// Team Request API Functions
export async function apiCreateTeamRequest(token: string, input: CreateTeamRequestInput) {
  const res = await fetch(`${API_URL}/api/team-requests`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}` 
    },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error('Failed to send team request');
  return (await res.json()) as TeamRequest;
}

export async function apiGetSentRequests(token: string) {
  const res = await fetch(`${API_URL}/api/team-requests/sent`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch sent requests');
  return (await res.json()) as TeamRequest[];
}

export async function apiGetReceivedRequests(token: string) {
  const res = await fetch(`${API_URL}/api/team-requests/received`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch received requests');
  return (await res.json()) as TeamRequest[];
}

export async function apiUpdateTeamRequest(token: string, id: string, status: 'accepted' | 'rejected') {
  const res = await fetch(`${API_URL}/api/team-requests/${id}`, {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}` 
    },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error('Failed to update team request');
  return (await res.json()) as TeamRequest;
}

export async function apiDeleteTeamRequest(token: string, id: string) {
  const res = await fetch(`${API_URL}/api/team-requests/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to delete team request');
  return await res.json();
}

export async function apiUpdateRequirement(token: string, id: string, input: RequirementInput) {
  const res = await fetch(`${API_URL}/api/requirements/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error('Failed to update requirement');
  return await res.json();
}

export type ListingUpdateInput = ListingInput;

export async function apiUpdateListing(token: string, id: string, input: ListingUpdateInput) {
  const res = await fetch(`${API_URL}/api/listings/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error('Failed to update listing');
  return await res.json();
}

// Chat Types
export type Conversation = {
  id: string;
  otherUser: {
    id: string;
    name: string;
    email: string;
  };
  lastMessage: {
    content: string;
    senderId: string;
    createdAt: string;
  } | null;
  unreadCount: number;
  updatedAt: string;
};

export type Message = {
  id: string;
  conversationId: string;
  senderId: string;
  sender: {
    id: string;
    name: string;
    email: string;
  };
  content: string;
  read: boolean;
  createdAt: string;
};

// Chat API Functions
export async function apiGetConversations(token: string) {
  const res = await fetch(`${API_URL}/api/chat/conversations`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch conversations');
  return (await res.json()) as Conversation[];
}

export async function apiCreateOrGetConversation(token: string, otherUserId: string) {
  // Validate userId format
  if (!otherUserId || typeof otherUserId !== 'string' || otherUserId.trim() === '') {
    throw new Error('Invalid user ID provided');
  }

  // Check for mock/demo user IDs
  if (otherUserId.startsWith('owner-')) {
    throw new Error('This is a demo listing. Please chat with real users from the "Roommates" tab.');
  }

  const res = await fetch(`${API_URL}/api/chat/conversations`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}` 
    },
    body: JSON.stringify({ otherUserId }),
  });
  
  if (!res.ok) {
    let errorMessage = 'Failed to create conversation';
    try {
      const errorData = await res.json();
      errorMessage = errorData.error || errorMessage;
      
      // Provide more specific error messages
      if (res.status === 404) {
        errorMessage = errorData.error || 'The user you are trying to chat with does not exist.';
      } else if (res.status === 400) {
        errorMessage = errorData.error || 'Invalid request. Cannot create conversation.';
      }
    } catch (e) {
      // If JSON parsing fails, use status text
      errorMessage = res.statusText || errorMessage;
    }
    throw new Error(errorMessage);
  }
  
  return (await res.json()) as { id: string; otherUser: { id: string; name: string; email: string } };
}

export async function apiGetMessages(token: string, conversationId: string) {
  const res = await fetch(`${API_URL}/api/chat/conversations/${conversationId}/messages`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch messages');
  return (await res.json()) as Message[];
}

export async function apiSendMessage(token: string, conversationId: string, content: string) {
  const res = await fetch(`${API_URL}/api/chat/conversations/${conversationId}/messages`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}` 
    },
    body: JSON.stringify({ content }),
  });
  if (!res.ok) throw new Error('Failed to send message');
  return (await res.json()) as Message;
}


