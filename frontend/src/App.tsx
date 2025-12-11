import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import GetStarted from "./pages/GetStarted";
import React, { createContext, useContext, useEffect, useState } from "react";
import { apiMe } from "./lib/api";
import AreaProperties from "./pages/AreaProperties";
import PropertyDetails from "./pages/PropertyDetails";
import Preferences from "./pages/Preferences";
import PostRequirement from "./pages/PostRequirement";
import NeedRoomForm from "./pages/NeedRoomForm";
import NeedRoommateForm from "./pages/NeedRoommateForm";
import FindPG from "./pages/FindPG";
import RoommateDetails from "./pages/RoommateDetails";
import SeekerDetails from "./pages/SeekerDetails";
import MyTeam from "./pages/MyTeam";
import CreateTeam from "./pages/CreateTeam";
import RentAgreement from "./pages/RentAgreement";
import Chat from "./pages/Chat";

const queryClient = new QueryClient();

// Auth Context
export const AuthContext = createContext({
  isAuthenticated: false,
  token: undefined as string | undefined,
  user: undefined as { id: string; email: string; name?: string | null } | undefined,
  login: (_t: string, _u: { id: string; email: string; name?: string | null }) => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | undefined>(() => localStorage.getItem("token") || undefined);
  const [user, setUser] = useState<{ id: string; email: string; name?: string | null } | undefined>(() => {
    const u = localStorage.getItem("user");
    return u ? JSON.parse(u) : undefined;
  });

  const isAuthenticated = !!token;

  useEffect(() => {
    if (token && !user) {
      apiMe(token).then(setUser).catch(() => {
        setToken(undefined);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      });
    }
  }, [token]);

  const login = (newToken: string, newUser: { id: string; email: string; name?: string | null }) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(newUser));
  };
  const logout = () => {
    setToken(undefined);
    setUser(undefined);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/post" element={<PostRequirement />} />
            <Route path="/post/need-room" element={<NeedRoomForm />} />
            <Route path="/post/need-roommate" element={<NeedRoommateForm />} />
            <Route path="/listings" element={<FindPG />} />
            <Route path="/roommate/:id" element={<RoommateDetails />} />
            <Route path="/seeker/:id" element={<SeekerDetails />} />
            <Route path="/my-team" element={<MyTeam />} />
            <Route path="/create-team" element={<CreateTeam />} />
            <Route path="/rent-agreement" element={<RentAgreement />} />
            <Route path="/area/:areaName" element={<AreaProperties />} />
            <Route path="/property/:propertyId" element={<PropertyDetails />} />
            <Route path="/chat" element={<Chat />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
