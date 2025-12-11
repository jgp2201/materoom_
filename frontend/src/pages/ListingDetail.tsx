import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, IndianRupee, Check } from "lucide-react";
import { apiGetListing } from "../lib/api";
import { Sparkles } from "lucide-react";
import { useAuth } from "../App";

const DEFAULT_AVATAR = "https://randomuser.me/api/portraits/men/32.jpg";

const PREFERENCE_ICONS: Record<string, string> = {
  "Night Owl": "🦉",
  "Early Bird": "🌿",
  "Studious": "📚",
  "Sporty": "🏃‍♂️",
  "Wanderer": "🚗",
  "Party Lover": "🥳",
  "Pet Lover": "🐕",
  "Music Lover": "🎸",
};

const AMENITY_ICONS: Record<string, string> = {
  "Fridge": "📦",
  "Kitchen": "🍳",
  "Machina": "📦",
  "Ac": "❄️",
  "PowerBackup": "🔋",
  "Cook": "👨‍🍳",
  "Parking": "🚲",
};

export default function ListingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const [listing, setListing] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      apiGetListing(id)
        .then(setListing)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="text-sm text-muted-foreground mb-4">
          <span className="text-foreground">Home</span> / Looking for Roommate / {listing.user?.name || listing.userName || 'Tanvi Niwal'}
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-6 mb-8">
              <img
                src={listing.user?.avatar || DEFAULT_AVATAR}
                alt="avatar"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-semibold">
                  {listing.user?.name || listing.userName || "Tanvi Niwal"}
                </h1>
                {listing.userId !== user?.id && token && (
                  <div className="flex gap-3 mt-2">
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="gap-2 bg-primary hover:bg-primary-dark"
                      onClick={() => navigate(`/chat?userId=${listing.userId}`)}
                    >
                      <MessageCircle className="h-4 w-4" /> Chat
                    </Button>
                    {listing.phoneVisibility === "public" && (
                      <Button variant="default" size="sm" className="gap-2 bg-primary hover:bg-primary-dark">
                        <Phone className="h-4 w-4" /> Call
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Location</h2>
              <p className="text-muted-foreground flex items-center gap-1">
                <MapPin className="h-4 w-4" /> {listing.location || "PANCHDHARA PLAZA, Niyojan Nagar, Nehru Nagar, Ambawadi, Ahmedabad, Gujarat, India"}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Basic Info</h2>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Gender</div>
                  <div className="font-semibold flex items-center gap-1">
                    ♀ Female
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Approx Rent</div>
                  <div className="font-semibold flex items-center gap-1">
                    <IndianRupee className="h-4 w-4" /> {listing.approxRent || "22000"}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Occupancy</div>
                  <div className="font-semibold">📊 {listing.occupancy || "Shared"}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Looking For</div>
                  <div className="font-semibold">♀ Female</div>
                </div>
              </div>
            </div>

            {listing.images?.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3">Pictures</h2>
                <div className="grid grid-cols-3 gap-4">
                  {listing.images.map((img: string, idx: number) => (
                    <img key={idx} src={img} alt="" className="w-full h-48 object-cover rounded-lg" />
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Preferences</h2>
              <div className="grid grid-cols-6 gap-6">
                {Object.entries(PREFERENCE_ICONS).map(([key, emoji]) => (
                  <div key={key} className="text-center">
                    <div className="text-3xl mb-2">{emoji}</div>
                    <div className="text-sm">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Highlights</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Attached washroom",
                  "Market nearby", 
                  "Attached balcony",
                  "Public transport nearby",
                  "House keeping",
                  "Gym nearby",
                  "Separate washrooms",
                  "No Restriction",
                  "Gated society",
                  "Park nearby"
                ].map((h: string) => (
                  <div key={h} className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full text-sm">
                    <Check className="h-3.5 w-3.5 text-primary" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Amenities</h2>
              <div className="grid grid-cols-6 gap-6">
                {Object.entries(AMENITY_ICONS).map(([key, emoji]) => (
                  <div key={key} className="text-center">
                    <div className="text-3xl mb-2">{emoji}</div>
                    <div className="text-sm">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Description</h2>
              {listing.description ? (
                <p className="text-muted-foreground">{listing.description}</p>
              ) : (
                <div className="flex items-center gap-2 text-sm text-yellow-600 bg-yellow-50 p-3 rounded-lg">
                  <Sparkles className="h-4 w-4" />
                  You must be premium user in order to view description.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}