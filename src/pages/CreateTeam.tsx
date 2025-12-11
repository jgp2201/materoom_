import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, IndianRupee, Users, Puzzle, X, Phone, MessageCircle } from "lucide-react";
import { apiListRoomListings, apiListRequirements, apiCreateTeamRequest } from "../lib/api";
import { useAuth } from "../App";
import { toast } from "sonner";

// Avatar pool for users without profile pictures
const avatarPool = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/47.jpg",
];

// Preference emoji map
const PREFERENCE_ICONS: Record<string, string> = {
  "Night Owl": "🦉",
  "Early Bird": "🌿",
  "Studious": "📚",
  "Sporty": "🏃‍♂️",
  "Wanderer": "🚗",
  "Party Lover": "🥳",
  "Pet Lover": "🐕",
  "Music Lover": "🎸",
  "Non Smoker": "🚭",
  "Fitness Freak": "💪",
};

export default function CreateTeam() {
  const { user, token } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [potentialTeammates, setPotentialTeammates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [sendingRequest, setSendingRequest] = useState(false);

  useEffect(() => {
    const fetchPotentialTeammates = async () => {
      try {
        // Fetch both room listings and requirements
        const [listings, requirements] = await Promise.all([
          apiListRoomListings(),
          apiListRequirements()
        ]);

        // Combine and filter out current user's listings
        const allListings = [
          ...listings.map((item: any) => ({ ...item, type: 'roommate' })),
          ...requirements.map((item: any) => ({ ...item, type: 'room' }))
        ].filter((item: any) => item.userId !== user?.id);

        // Add match percentage and avatar
        const teammatesWithMatch = allListings.map((item: any, index: number) => ({
          ...item,
          match: Math.floor(Math.random() * 50) + 30, // Random match between 30-80%
          avatar: avatarPool[index % avatarPool.length],
          teamSize: 1
        }));

        setPotentialTeammates(teammatesWithMatch);
      } catch (error) {
        console.error('Error fetching potential teammates:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchPotentialTeammates();
    }
  }, [user]);

  const handleJoinTeam = (user: any) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleConfirmJoin = async () => {
    if (!token || !selectedUser) return;
    
    setSendingRequest(true);
    try {
      await apiCreateTeamRequest(token, {
        receiverId: selectedUser.userId,
        message: `Hi! I'd like to team up with you to find a flat. Let's connect!`
      });
      
      // Show success message
      toast.success("Great! Your request is sent to the person for team up", {
        duration: 4000,
        position: "top-center",
      });
      
      setShowModal(false);
      setSelectedUser(null);
    } catch (error) {
      console.error('Error sending team request:', error);
      toast.error("Failed to send team request. Please try again.");
    } finally {
      setSendingRequest(false);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Create Your Team</h1>
            <p className="text-muted-foreground text-lg">
              Users interested in making <span className="text-primary font-semibold underline">Team</span> to find flat.
            </p>
          </div>

          {/* User Cards Grid */}
          {loading ? (
            <div className="text-center py-8">
              <div className="text-muted-foreground">Loading potential teammates...</div>
            </div>
          ) : potentialTeammates.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-muted-foreground">No potential teammates found.</div>
              <div className="text-sm text-muted-foreground mt-2">
                There are no other users with listings at the moment.
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {potentialTeammates.map((teammate) => (
                <Card key={teammate.id} className="border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Avatar */}
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img 
                          src={teammate.avatar} 
                          alt={teammate.user?.name || 'User'} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* User Info */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {teammate.user?.name || 'User'}
                        </h3>
                        
                        {/* Location */}
                        <div className="flex items-center text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{teammate.location}</span>
                        </div>
                        
                        {/* Rent */}
                        <div className="flex items-center text-foreground mb-2">
                          <IndianRupee className="h-4 w-4 text-primary mr-1" />
                          <span className="font-medium">₹ {teammate.approxRent}</span>
                        </div>
                        
                        {/* Team Size */}
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Users className="h-4 w-4 mr-1" />
                          <span className="text-sm">Team of: {teammate.teamSize.toString().padStart(2, '0')}</span>
                        </div>
                        
                        {/* Match Percentage */}
                        <div className="flex items-center text-muted-foreground mb-3">
                          <Puzzle className="h-4 w-4 mr-1" />
                          <span className="text-sm">Match: {teammate.match}%</span>
                        </div>
                        
                        {/* Looking For Badge */}
                        <div className="mb-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            Looking for {teammate.type === 'roommate' ? 'Roommate' : 'Room'}
                          </span>
                        </div>
                        
                        {/* Preferences */}
                        {teammate.preferenceLabels && teammate.preferenceLabels.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {teammate.preferenceLabels.slice(0, 3).map((pref: string) => (
                              <span key={pref} className="text-lg">
                                {PREFERENCE_ICONS[pref] || "👤"}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        {/* Action Buttons */}
                        <div className="flex space-x-2">
                          <Button 
                            onClick={() => handleJoinTeam(teammate)}
                            className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground"
                          >
                            Join Team
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Phone className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={handleCancel}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Content */}
            <div className="text-center">
              {/* Illustration */}
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto relative">
                  {/* Three people connected */}
                  <div className="absolute top-2 left-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">
                    👤
                  </div>
                  <div className="absolute top-2 right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">
                    👤
                  </div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">
                    👤
                  </div>
                  
                  {/* Connecting arrows */}
                  <div className="absolute top-4 left-1/2 w-8 h-0.5 bg-muted transform -translate-x-1/2"></div>
                  <div className="absolute top-6 left-1/2 w-0.5 h-8 bg-muted transform -translate-x-1/2"></div>
                  
                  {/* Chat bubble in center */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Decorative dots */}
                  <div className="absolute -top-2 -left-2 w-2 h-2 bg-destructive rounded-full"></div>
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-destructive rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-destructive rounded-full"></div>
                  <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-destructive rounded-full"></div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-primary mb-4">Ready to team up?</h2>
              
              {/* Confirmation Message */}
              <p className="text-muted-foreground mb-6">
                Are you sure that you want to team up with <span className="font-semibold text-foreground">{selectedUser.user?.name || 'User'}</span>?
              </p>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button
                  onClick={handleConfirmJoin}
                  disabled={sendingRequest}
                  className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground"
                >
                  {sendingRequest ? "Sending..." : "Join Team"}
                </Button>
                <Button
                  onClick={handleCancel}
                  disabled={sendingRequest}
                  variant="secondary"
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
