import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiGetListing, apiUpdateListing, apiDeleteListing, ListingUpdateInput } from "../lib/api";
import { IndianRupee, MapPin, MessageCircle, Phone, Wifi, Fan, Tv, Refrigerator, ParkingCircle, Shield, Car } from "lucide-react";
import { useAuth } from "../App";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Amenity icons mapping
const amenityIcons: Record<string, any> = {
  'WiFi': Wifi,
  'AC': Fan,
  'TV': Tv,
  'Fridge': Refrigerator,
  'Parking': ParkingCircle,
  'Security': Shield,
  'Car': Car,
};

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

export default function RoommateDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<any>();
  const { token, user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState<ListingUpdateInput | null>(null);

  useEffect(() => {
    if (id) apiGetListing(id).then(setData).catch(() => navigate("/listings"));
  }, [id, navigate]);

  if (!data) return null;

  const name = data.user?.name || 'MateRoom User';
  const pref = (data.preferenceLabels as string[]) || [];
  const highlights = (data.highlights as string[]) || [];
  const amenities = (data.amenities as string[]) || [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="p-6 space-y-4">
          <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`} alt={name} className="w-40 h-40 rounded-full mx-auto bg-muted" />
          <div className="text-center text-xl font-semibold">{name}</div>
          {data.userId !== user?.id && token && (
            <div className="flex gap-3 justify-center">
              <button 
                onClick={() => navigate(`/chat?userId=${data.userId}`)}
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
              >
                <MessageCircle className="h-4 w-4" /> Chat
              </button>
              {data.phoneVisibility === 'public' && (
                <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
                  <Phone className="h-4 w-4" /> Call
                </button>
              )}
            </div>
          )}
        </Card>

        <Card className="lg:col-span-2 p-6 space-y-8">
          {user?.id === data?.userId && (
            <div className="flex justify-end gap-2">
              {!isEditing ? (
                <Button variant="secondary" onClick={() => { setForm({
                  location: data.location,
                  approxRent: data.approxRent,
                  occupancy: data.occupancy,
                  highlights: data.highlights ?? [],
                  amenities: data.amenities ?? [],
                  phoneVisibility: data.phoneVisibility,
                  description: data.description || '',
                }); setIsEditing(true); }}>Edit Listing</Button>
              ) : (
                <Button onClick={() => setIsEditing(false)}>Cancel</Button>
              )}
              <Button variant="destructive" onClick={async () => { if (!token) return; if (!confirm('Delete this listing permanently?')) return; await apiDeleteListing(token, String(id)); navigate('/listings'); }}>Remove Listing</Button>
            </div>
          )}

          {isEditing && form ? (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Location</div>
                  <Input value={form.location} onChange={e=>setForm({ ...form!, location: e.target.value })} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Approx Rent</div>
                  <Input type="number" value={form.approxRent} onChange={e=>setForm({ ...form!, approxRent: Number(e.target.value) })} />
                </div>
              </div>
              <div>
                <div className="text-sm font-medium">Choose Highlights for your room</div>
                <div className="flex flex-wrap gap-3 mt-3">
                  {["Attached washroom","Market nearby","Attached balcony","Close to metro station","Public transport nearby","Gated society","No Restriction","Newly built","Separate washrooms","House keeping","Gym nearby","Park nearby"].map((h) => {
                    const active = (form.highlights || []).includes(h);
                    return (
                      <button type="button" key={h} onClick={() => {
                        const current = form.highlights || [];
                        const next = active ? current.filter((x) => x !== h) : [...current, h];
                        setForm({ ...form!, highlights: next });
                      }} className={`px-3 py-1 rounded-full text-sm border ${active ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                        {h}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Description</div>
                <Input value={form.description} onChange={e=>setForm({ ...form!, description: e.target.value })} />
              </div>
              <Button onClick={async () => { if (!token || !form) return; await apiUpdateListing(token, String(id), form); const updated = await apiGetListing(String(id)); setData(updated); setIsEditing(false); }}>Save Changes</Button>
            </div>
          ) : (
            <>
              <div>
                <div className="text-xl font-semibold mb-2">Location</div>
                <div className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" /> {data.location}</div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Gender</div>
                  <div className="font-medium">{data.lookingFor || 'Any'}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Approx Rent</div>
                  <div className="font-medium flex items-center gap-1"><IndianRupee className="h-4 w-4 text-primary" /> {data.approxRent}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Occupancy</div>
                  <div className="font-medium">{data.occupancy}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Looking For</div>
                  <div className="font-medium">Roommate</div>
                </div>
              </div>

              <div>
                <div className="text-xl font-semibold mb-3">Preferences</div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {pref.map((p: string) => (
                    <div key={p} className="text-center">
                      <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-2 flex items-center justify-center text-2xl">
                        {PREFERENCE_ICONS[p] || "👤"}
                      </div>
                      <div className="text-sm text-muted-foreground">{p}</div>
                    </div>
                  ))}
                  {!pref.length && <div className="text-sm text-muted-foreground">No preferences saved.</div>}
                </div>
              </div>

              <div>
                <div className="text-xl font-semibold mb-3">Highlights</div>
                <div className="flex flex-wrap gap-3">
                  {highlights.map((h: string) => (
                    <span key={h} className="px-3 py-1 rounded-full bg-muted text-sm">{h}</span>
                  ))}
                  {!highlights.length && <div className="text-sm text-muted-foreground">No highlights listed.</div>}
                </div>
              </div>

              <div>
                <div className="text-xl font-semibold mb-3">Amenities</div>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                  {amenities.map((a: string) => {
                    const IconComponent = amenityIcons[a];
                    return (
                      <div key={a} className="text-center">
                        <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-2 flex items-center justify-center">
                          {IconComponent ? <IconComponent className="h-6 w-6 text-muted-foreground" /> : <span className="text-2xl">🏠</span>}
                        </div>
                        <div className="text-sm text-muted-foreground">{a}</div>
                      </div>
                    );
                  })}
                  {!amenities.length && <div className="text-sm text-muted-foreground">No amenities listed.</div>}
                </div>
              </div>
            </>
          )}
        </Card>
      </div>
      <Footer />
    </div>
  );
}


