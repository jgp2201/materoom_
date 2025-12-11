import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, MapPin, Users, Phone, Mail, User, MessageCircle } from "lucide-react";
import { apiGetRequirement, apiUpdateRequirement, RequirementInput, apiDeleteRequirement } from "../lib/api";
import { useAuth } from "../App";
import { Input } from "@/components/ui/input";

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
  "Non Alcoholic": "🚫🍷",
  "Vegan": "🥗",
  "Fitness Freak": "💪",
};

export default function SeekerDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [seeker, setSeeker] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const { token, user } = useAuth();
  const [form, setForm] = useState<RequirementInput | null>(null);

  useEffect(() => {
    if (!id) return;
    apiGetRequirement(id)
      .then(setSeeker)
      .catch(() => setSeeker(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!seeker) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Seeker Not Found</h1>
          <Button onClick={() => navigate("/listings")}>Back to Listings</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="p-6 space-y-4">
          <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(seeker.user?.name || 'Member')}`} alt={seeker.user?.name || 'Member'} className="w-40 h-40 rounded-full mx-auto bg-muted" />
          <div className="text-center text-xl font-semibold">{seeker.user?.name || 'Member'}</div>
          <div className="flex gap-3 justify-center">
            {seeker.userId !== user?.id && token && (
              <>
                <button 
                  onClick={() => navigate(`/chat?userId=${seeker.userId}`)}
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
                >
                  <MessageCircle className="h-4 w-4" /> Chat
                </button>
                {seeker.phoneVisibility === 'public' && (
                  <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
                    <Phone className="h-4 w-4" /> Call
                  </button>
                )}
              </>
            )}
          </div>
        </Card>

        <Card className="lg:col-span-2 p-6 space-y-8">
          {/* Owner Controls */}
          {user?.id === seeker.userId && (
            <div className="flex justify-end gap-2">
              {!isEditing ? (
                <Button variant="secondary" onClick={() => { setForm({
                  location: seeker.location,
                  approxRent: seeker.approxRent,
                  lookingFor: seeker.lookingFor,
                  occupancy: seeker.occupancy,
                  highlights: seeker.highlights ?? [],
                  interestedInPg: seeker.interestedInPg ?? false,
                  phoneVisibility: seeker.phoneVisibility,
                  interestedInTeams: seeker.interestedInTeams ?? false,
                  description: seeker.description || "",
                }); setIsEditing(true); }}>Edit Listing</Button>
              ) : (
                <Button onClick={() => setIsEditing(false)}>Cancel</Button>
              )}
              <Button variant="destructive" onClick={async () => {
                if (!token) return; if (!confirm('Delete this listing permanently?')) return;
                await apiDeleteRequirement(token, seeker.id);
                navigate('/listings');
              }}>Remove Listing</Button>
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Looking For</div>
                  <Input value={form.lookingFor} onChange={e=>setForm({ ...form!, lookingFor: e.target.value as any })} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Occupancy</div>
                  <Input value={form.occupancy} onChange={e=>setForm({ ...form!, occupancy: e.target.value as any })} />
                </div>
              </div>
              <div>
                <div className="text-sm font-medium">Choose Highlights for your property</div>
                <div className="flex flex-wrap gap-3 mt-3">
                  {["Working full time","College student","25+ age","<25 age","Working night shifts","Have 2 wheeler","Have 4 wheeler","Will shift immediately","Have pets","Need no furnishing","Pure vegetarian"].map((h) => {
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
              <Button onClick={async () => {
                if (!token || !form) return;
                await apiUpdateRequirement(token, seeker.id, form);
                const updated = await apiGetRequirement(seeker.id);
                setSeeker(updated);
                setIsEditing(false);
              }}>Save Changes</Button>
            </div>
          ) : (
          <>
          <div>
            <div className="text-xl font-semibold mb-2">Location</div>
            <div className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" /> {seeker.location}</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Gender</div>
              <div className="font-medium">{seeker.lookingFor || 'Any'}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Approx Rent</div>
              <div className="font-medium flex items-center gap-1"><IndianRupee className="h-4 w-4 text-primary" /> {seeker.approxRent}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Occupancy</div>
              <div className="font-medium">{seeker.occupancy}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Looking For</div>
              <div className="font-medium">Room</div>
            </div>
          </div>

          <div>
            <div className="text-xl font-semibold mb-3">Preferences</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.isArray(seeker.preferenceLabels) && seeker.preferenceLabels.length > 0 ? (
                seeker.preferenceLabels.map((p: string) => (
                  <div key={p} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-2 flex items-center justify-center text-2xl">
                      {PREFERENCE_ICONS[p] || "👤"}
                    </div>
                    <div className="text-sm text-muted-foreground">{p}</div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-muted-foreground">No preferences saved.</div>
              )}
            </div>
          </div>

          <div>
            <div className="text-xl font-semibold mb-3">Highlights</div>
            <div className="flex flex-wrap gap-3">
              {Array.isArray(seeker.highlights) && seeker.highlights.length > 0 ? (
                seeker.highlights.map((h: string) => (
                  <span key={h} className="px-3 py-1 rounded-full bg-muted text-sm">{h}</span>
                ))
              ) : (
                <div className="text-sm text-muted-foreground">No highlights listed.</div>
              )}
            </div>
          </div>

          {seeker.description && (
            <div>
              <div className="text-xl font-semibold mb-3">About</div>
              <p className="text-sm text-muted-foreground">{seeker.description}</p>
            </div>
          )}
          </>
          )}
        </Card>
      </div>
      <Footer />
    </div>
  );
}
