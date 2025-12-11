import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { apiGetSentRequests, apiGetReceivedRequests, apiUpdateTeamRequest, apiDeleteTeamRequest, TeamRequest } from "../lib/api";
import { useAuth } from "../App";
import { toast } from "sonner";

export default function MyTeam() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [activeTab, setActiveTab] = useState<"team" | "requests">("team");
  const [requestType, setRequestType] = useState<"received" | "sent" | "accepted">("received");
  const [sentRequests, setSentRequests] = useState<TeamRequest[]>([]);
  const [receivedRequests, setReceivedRequests] = useState<TeamRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequests = async () => {
      if (!token) return;
      
      setLoading(true);
      try {
        const [sent, received] = await Promise.all([
          apiGetSentRequests(token),
          apiGetReceivedRequests(token)
        ]);
        setSentRequests(sent);
        setReceivedRequests(received);
      } catch (error) {
        console.error('Error fetching requests:', error);
      } finally {
        setLoading(false);
      }
    };

    if (activeTab === "requests") {
      fetchRequests();
    }
  }, [token, activeTab]);

  // Handle accepting a team request
  const handleAcceptRequest = async (requestId: string, senderName: string) => {
    if (!token) return;
    
    setActionLoading(requestId);
    try {
      await apiUpdateTeamRequest(token, requestId, 'accepted');
      toast.success(`Team request accepted!`, {
        description: `You've successfully accepted ${senderName}'s team-up request. You can now collaborate to find a flat together.`,
        duration: 5000,
      });
      
      // Refresh the requests
      const [sent, received] = await Promise.all([
        apiGetSentRequests(token),
        apiGetReceivedRequests(token)
      ]);
      setSentRequests(sent);
      setReceivedRequests(received);
    } catch (error) {
      toast.error('Failed to accept request', {
        description: 'There was an error accepting the team request. Please try again.',
      });
    } finally {
      setActionLoading(null);
    }
  };

  // Handle rejecting a team request
  const handleRejectRequest = async (requestId: string, senderName: string) => {
    if (!token) return;
    
    setActionLoading(requestId);
    try {
      await apiUpdateTeamRequest(token, requestId, 'rejected');
      toast.success(`Team request declined`, {
        description: `You've declined ${senderName}'s team-up request.`,
        duration: 4000,
      });
      
      // Refresh the requests
      const [sent, received] = await Promise.all([
        apiGetSentRequests(token),
        apiGetReceivedRequests(token)
      ]);
      setSentRequests(sent);
      setReceivedRequests(received);
    } catch (error) {
      toast.error('Failed to decline request', {
        description: 'There was an error declining the team request. Please try again.',
      });
    } finally {
      setActionLoading(null);
    }
  };

  // Handle canceling a sent request
  const handleCancelRequest = async (requestId: string, receiverName: string) => {
    if (!token) return;
    
    setActionLoading(requestId);
    try {
      await apiDeleteTeamRequest(token, requestId);
      toast.success(`Team request cancelled`, {
        description: `Your team request to ${receiverName} has been successfully cancelled.`,
        duration: 4000,
      });
      
      // Refresh the requests
      const [sent, received] = await Promise.all([
        apiGetSentRequests(token),
        apiGetReceivedRequests(token)
      ]);
      setSentRequests(sent);
      setReceivedRequests(received);
    } catch (error) {
      toast.error('Failed to cancel request', {
        description: 'There was an error cancelling the team request. Please try again.',
      });
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex space-x-8 mb-8">
            <button
              onClick={() => setActiveTab("team")}
              className={`text-lg font-medium pb-2 border-b-2 transition-colors ${
                activeTab === "team"
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent"
              }`}
            >
              My Team
            </button>
            <button
              onClick={() => setActiveTab("requests")}
              className={`text-lg font-medium pb-2 border-b-2 transition-colors ${
                activeTab === "requests"
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent"
              }`}
            >
              Requests
            </button>
          </div>

          {/* Content based on active tab */}
          {activeTab === "team" ? (
            <div className="text-center">
              {/* Team Illustration */}
              <div className="mb-8">
                <div className="w-96 h-80 mx-auto relative">
                  {/* Puzzle pieces */}
                  <div className="absolute top-0 left-0 w-48 h-40 bg-primary rounded-lg transform rotate-12"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-40 bg-accent rounded-lg transform -rotate-12"></div>
                  <div className="absolute bottom-0 right-0 w-48 h-40 bg-primary-light rounded-lg transform rotate-12"></div>
                  <div className="absolute top-0 right-0 w-48 h-40 bg-accent-light rounded-lg transform -rotate-12"></div>
                  
                  {/* People figures */}
                  <div className="absolute top-2 left-2 w-8 h-8 bg-primary-foreground rounded-full"></div>
                  <div className="absolute top-2 right-2 w-8 h-8 bg-accent-foreground rounded-full"></div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 bg-primary-foreground rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-8 h-8 bg-accent-foreground rounded-full"></div>
                  <div className="absolute top-1/2 right-0 w-8 h-8 bg-primary-foreground rounded-full"></div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-6 h-6 bg-secondary rounded-full"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary rounded-full"></div>
                  <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-secondary rounded-full"></div>
                </div>
              </div>

              {/* Main Content */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary mb-4">
                  Two heads are better than one
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  If you are unable to find a pre-occupied flat for yourself, you can make a team with other user and find flat together.
                </p>
              </div>

              {/* CTA Button */}
              <Button 
                onClick={() => navigate('/create-team')}
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg"
              >
                Create Team Now
              </Button>

              {/* Footer Note */}
              <p className="text-muted-foreground text-sm mt-8">
                Note: 56,000+ people got helped by forming a team with other users. It makes it easier to quickly meet your needs.
              </p>
            </div>
          ) : (
            <div>
              {/* Toggle Switch */}
              <div className="flex justify-center mb-8">
                <div className="flex bg-gray-200 rounded-full p-1">
                  <button
                    onClick={() => setRequestType("received")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      requestType === "received"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    Received
                  </button>
                  <button
                    onClick={() => setRequestType("sent")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      requestType === "sent"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    Sent
                  </button>
                  <button
                    onClick={() => setRequestType("accepted")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      requestType === "accepted"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    Accepted
                  </button>
                </div>
              </div>

              {/* Requests Content */}
              {loading ? (
                <div className="text-center py-8">
                  <div className="text-muted-foreground">Loading requests...</div>
                </div>
              ) : (
                <>
                  {requestType === "received" && (
                    receivedRequests.filter(r => r.status === 'pending').length > 0 ? (
                      <div className="space-y-4">
                        {receivedRequests.filter(r => r.status === 'pending').map((request) => (
                          <Card key={request.id} className="border-border/50 shadow-card">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="text-lg font-semibold text-foreground">
                                    {request.sender?.name || 'User'} wants to team up
                                  </h3>
                                  <p className="text-muted-foreground text-sm mt-1">
                                    {request.message || "No message provided"}
                                  </p>
                                  <p className="text-xs text-muted-foreground mt-2">
                                    Sent on {new Date(request.createdAt).toLocaleDateString()}
                                  </p>
                                </div>
                                <div className="flex space-x-2">
                                  <Button 
                                    size="sm" 
                                    className="bg-primary hover:bg-primary-dark text-primary-foreground"
                                    onClick={() => handleAcceptRequest(request.id, request.sender?.name || 'User')}
                                    disabled={actionLoading === request.id}
                                  >
                                    {actionLoading === request.id ? 'Accepting...' : 'Accept'}
                                  </Button>
                                  <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                      <Button 
                                        size="sm" 
                                        variant="outline"
                                        disabled={actionLoading === request.id}
                                      >
                                        {actionLoading === request.id ? 'Declining...' : 'Reject'}
                                      </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                      <AlertDialogHeader>
                                        <AlertDialogTitle>Decline Team Request</AlertDialogTitle>
                                        <AlertDialogDescription>
                                          Are you sure you want to decline {request.sender?.name || 'this user'}'s team-up request? This action cannot be undone.
                                        </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction
                                          onClick={() => handleRejectRequest(request.id, request.sender?.name || 'User')}
                                          className="bg-red-600 hover:bg-red-700"
                                        >
                                          Decline Request
                                        </AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center">
                        {/* No Requests Illustration */}
                        <div className="mb-8">
                          <div className="w-80 h-64 mx-auto relative">
                            {/* Phone */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-56 bg-secondary rounded-2xl border-4 border-border">
                              <div className="w-full h-full bg-background rounded-xl p-2">
                                <div className="w-8 h-6 bg-primary rounded mb-2"></div>
                                <div className="w-12 h-4 bg-muted rounded mb-2"></div>
                                <div className="w-10 h-4 bg-muted rounded"></div>
                              </div>
                            </div>
                            
                            {/* People */}
                            <div className="absolute top-4 left-8 w-12 h-12 bg-secondary rounded-full border-2 border-border"></div>
                            <div className="absolute top-4 right-8 w-12 h-12 bg-accent rounded-full border-2 border-accent-dark"></div>
                            
                            {/* Speech bubbles */}
                            <div className="absolute top-2 left-16 w-4 h-4 bg-muted rounded-full"></div>
                            <div className="absolute top-2 right-16 w-4 h-4 bg-muted rounded-full"></div>
                            
                            {/* Decorative elements */}
                            <div className="absolute top-8 left-4 w-3 h-3 bg-muted rounded-full"></div>
                            <div className="absolute bottom-8 right-4 w-3 h-3 bg-muted rounded-full"></div>
                            <div className="absolute top-1/2 left-2 w-2 h-2 bg-muted rounded-full"></div>
                          </div>
                        </div>

                        <h2 className="text-2xl font-bold text-primary mb-2">No Request Found</h2>
                        <p className="text-muted-foreground">No new request received for team up</p>
                      </div>
                    )
                  )}

                  {requestType === "sent" && (
                    sentRequests.filter(r => r.status === 'pending').length > 0 ? (
                      <div className="space-y-4">
                        {sentRequests.filter(r => r.status === 'pending').map((request) => (
                          <Card key={request.id} className="border-border/50 shadow-card">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="text-lg font-semibold text-foreground">
                                    Team request sent to {request.receiver?.name || 'User'}
                                  </h3>
                                  <p className="text-muted-foreground text-sm mt-1">
                                    Status: <span className={`font-medium ${
                                      request.status === 'pending' ? 'text-yellow-600' :
                                      request.status === 'accepted' ? 'text-green-600' :
                                      'text-red-600'
                                    }`}>
                                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                                    </span>
                                  </p>
                                  <p className="text-xs text-muted-foreground mt-2">
                                    Sent on {new Date(request.createdAt).toLocaleDateString()}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                      <Button 
                                        size="sm" 
                                        variant="outline"
                                        disabled={actionLoading === request.id}
                                      >
                                        {actionLoading === request.id ? 'Cancelling...' : 'Cancel'}
                                      </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                      <AlertDialogHeader>
                                        <AlertDialogTitle>Cancel Team Request</AlertDialogTitle>
                                        <AlertDialogDescription>
                                          Are you sure you want to cancel your team request to {request.receiver?.name || 'this user'}? This action cannot be undone.
                                        </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter>
                                        <AlertDialogCancel>Keep Request</AlertDialogCancel>
                                        <AlertDialogAction
                                          onClick={() => handleCancelRequest(request.id, request.receiver?.name || 'User')}
                                          className="bg-orange-600 hover:bg-orange-700"
                                        >
                                          Cancel Request
                                        </AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center">
                        {/* No Requests Illustration */}
                        <div className="mb-8">
                          <div className="w-80 h-64 mx-auto relative">
                            {/* Phone */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-56 bg-secondary rounded-2xl border-4 border-border">
                              <div className="w-full h-full bg-background rounded-xl p-2">
                                <div className="w-8 h-6 bg-primary rounded mb-2"></div>
                                <div className="w-12 h-4 bg-muted rounded mb-2"></div>
                                <div className="w-10 h-4 bg-muted rounded"></div>
                              </div>
                            </div>
                            
                            {/* People */}
                            <div className="absolute top-4 left-8 w-12 h-12 bg-secondary rounded-full border-2 border-border"></div>
                            <div className="absolute top-4 right-8 w-12 h-12 bg-accent rounded-full border-2 border-accent-dark"></div>
                            
                            {/* Speech bubbles */}
                            <div className="absolute top-2 left-16 w-4 h-4 bg-muted rounded-full"></div>
                            <div className="absolute top-2 right-16 w-4 h-4 bg-muted rounded-full"></div>
                            
                            {/* Decorative elements */}
                            <div className="absolute top-8 left-4 w-3 h-3 bg-muted rounded-full"></div>
                            <div className="absolute bottom-8 right-4 w-3 h-3 bg-muted rounded-full"></div>
                            <div className="absolute top-1/2 left-2 w-2 h-2 bg-muted rounded-full"></div>
                          </div>
                        </div>

                        <h2 className="text-2xl font-bold text-primary mb-2">No Pending Request</h2>
                        <p className="text-muted-foreground">No sent request is pending for team up</p>
                      </div>
                    )
                  )}

                  {requestType === "accepted" && (
                    [...receivedRequests.filter(r => r.status === 'accepted'), ...sentRequests.filter(r => r.status === 'accepted')].length > 0 ? (
                      <div className="space-y-4">
                        {[...receivedRequests.filter(r => r.status === 'accepted'), ...sentRequests.filter(r => r.status === 'accepted')].map((request) => (
                          <Card key={request.id} className="border-primary/30 bg-primary/10 shadow-card">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4-4" className="stroke-primary" strokeWidth={2} />
                                    </svg>
                                    Team up with {request.sender?.name || request.receiver?.name || 'User'}
                                  </h3>
                                  <p className="text-primary/80 text-sm mt-1">
                                    {request.message || "No message provided"}
                                  </p>
                                  <p className="text-xs text-primary mt-2">
                                    Accepted on {new Date(request.updatedAt).toLocaleDateString()}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <Button 
                                    size="sm" 
                                    className="bg-primary hover:bg-primary-dark text-white"
                                    onClick={() => {
                                      toast.success("Team connection established!", {
                                        description: "You can now collaborate with your teammate to find a flat together.",
                                        duration: 5000,
                                      });
                                    }}
                                  >
                                    View Team
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center">
                        {/* No Accepted Requests Illustration */}
                        <div className="mb-8">
                          <div className="w-80 h-64 mx-auto relative">
                            {/* Success checkmark */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                                <div className="text-white text-2xl font-bold">✓</div>
                              </div>
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute top-8 left-8 w-6 h-6 bg-green-200 rounded-full"></div>
                            <div className="absolute top-8 right-8 w-6 h-6 bg-green-200 rounded-full"></div>
                            <div className="absolute bottom-8 left-8 w-6 h-6 bg-green-200 rounded-full"></div>
                            <div className="absolute bottom-8 right-8 w-6 h-6 bg-green-200 rounded-full"></div>
                          </div>
                        </div>

                        <h2 className="text-2xl font-bold text-primary mb-2">No Accepted Requests</h2>
                        <p className="text-muted-foreground">No team requests have been accepted yet</p>
                      </div>
                    )
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
