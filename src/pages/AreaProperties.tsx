import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { IndianRupee, BedDouble, Wifi, Droplets, Utensils, Users, Shield, Tv, ParkingCircle, Fan, Refrigerator, Phone, MessageCircle, MapPin, User, Dumbbell, Car, Leaf, Wine, Music, Cigarette, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import { apiListProperties } from "../lib/api";

const demoAvatars = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/women/47.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/men/51.jpg",
];

const demoNames = [
  "Unnati Jaiswal",
  "Jayshree Musale",
  "Shivani",
  "Vihan Rathod",
  "Amit Patel",
  "Rohan Mehta",
];

const demoAddresses = [
  "Kurla, Mumbai, Maharashtra, India",
  "Kalina, Santacruz East, Mumbai, Maharashtra, India",
  "Spencers Gym, Kalina Village Road, Geeta vihar road...",
  "Skyview Castle, Nehru Nagar, Kurla, Mumbai, Maharashtra...",
  "Andheri West, Mumbai, Maharashtra, India",
  "Powai, Mumbai, Maharashtra, India",
];

const demoAmenities = [
  { icon: BedDouble, label: "Bed" },
  { icon: Wifi, label: "WiFi" },
  { icon: Droplets, label: "Water" },
  { icon: Utensils, label: "Mess" },
  { icon: Users, label: "Room Sharing" },
  { icon: Shield, label: "Security" },
  { icon: Tv, label: "TV" },
  { icon: ParkingCircle, label: "Parking" },
  { icon: Fan, label: "Fan" },
  { icon: Refrigerator, label: "Refrigerator" },
];

const demoVacancies = [
  { label: "Female", color: "text-pink-700" },
  { label: "Male", color: "text-blue-700" },
  { label: "Any", color: "text-green-700" },
];

const demoPreferences = [
  { icon: Dumbbell, label: "Fitness Freak", color: "bg-blue-500" },
  { icon: Car, label: "Wanderer", color: "bg-sky-500" },
  { icon: Leaf, label: "Vegan", color: "bg-green-500" },
  { icon: Wine, label: "Non Alcoholic", color: "bg-red-500" },
  { icon: Music, label: "Music Lover", color: "bg-purple-500" },
  { icon: Cigarette, label: "Non Smoker", color: "bg-red-500" },
];

function getRandomListings(area: string) {
  return Array.from({ length: 6 }).map((_, i) => {
    const avatar = demoAvatars[i % demoAvatars.length];
    const name = demoNames[i % demoNames.length];
    const address = demoAddresses[i % demoAddresses.length];
    const price = 10000 + Math.floor(Math.random() * 10000);
    const lookingFor = demoVacancies[Math.floor(Math.random() * demoVacancies.length)];
    const distance = (0.8 + Math.random() * 1.2).toFixed(1);
    const amenities = demoAmenities.sort(() => 0.5 - Math.random()).slice(0, 6);
    const preferences = demoPreferences.sort(() => 0.5 - Math.random()).slice(0, 4);
    return {
      id: `${area}-${i}`,
      name,
      avatar,
      address,
      price,
      lookingFor,
      distance,
      amenities,
      preferences,
      allAmenities: demoAmenities,
      description: `Spacious and well-furnished PG/Flat in ${area} with all modern amenities. Ideal for students and working professionals.`,
    };
  });
}

export default function AreaProperties() {
  const { areaName } = useParams();
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState<any | null>(null);
  const [listings, setListings] = useState<any[]>([]);
  const storedPrefLabels: string[] = (() => {
    try {
      return JSON.parse(localStorage.getItem("userPreferenceLabels") || "[]");
    } catch {
      return [];
    }
  })();

  function calcMatch(prefLabels: string[]): number {
    if (!storedPrefLabels.length) return 0;
    const userSet = new Set(storedPrefLabels.map((s) => s.toLowerCase()));
    const overlap = prefLabels.filter((p) => userSet.has(p.toLowerCase())).length;
    return Math.round((overlap / userSet.size) * 100);
  }

  // Fetch properties and scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    apiListProperties()
      .then((props) => {
        setListings(
          props.map((p) => ({
            id: p.id,
            name: p.title,
            avatar: demoAvatars[Number(BigInt('0x' + p.id.slice(-4)) % BigInt(demoAvatars.length))],
            address: `${p.location}`,
            price: p.price,
            lookingFor: demoVacancies[Math.floor(Math.random() * demoVacancies.length)],
            distance: (0.8 + Math.random() * 1.2).toFixed(1),
            amenities: demoAmenities.sort(() => 0.5 - Math.random()).slice(0, 6),
            preferences: demoPreferences.sort(() => 0.5 - Math.random()).slice(0, 4),
            allAmenities: demoAmenities,
            description: p.description,
          }))
        );
      })
      .catch(() => setListings(getRandomListings(areaName || 'Area')));
  }, [areaName]);

  const handlePropertyClick = (propertyId: string) => {
    navigate(`/property/${propertyId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center mt-10">Properties in {areaName}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {listings.map((prop) => (
              <Card
                key={prop.id}
                className="flex flex-col md:flex-row items-center md:items-stretch p-4 gap-4 hover:shadow-card transition-all duration-300 border-border/50 cursor-pointer"
                onClick={() => handlePropertyClick(prop.id)}
              >
                <img
                  src={prop.avatar}
                  alt={prop.name}
                  className="w-28 h-28 rounded-full object-cover bg-muted border md:my-auto"
                />
                <CardContent className="flex-1 flex flex-col justify-between p-0">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div className="font-bold text-lg text-foreground">{prop.name}</div>
                      <div className="flex items-center space-x-1">
                        <IndianRupee className="h-4 w-4 text-primary" />
                        <span className="font-bold text-primary text-lg">{prop.price.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <span className="truncate max-w-xs">{prop.address}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <div className="text-sm">
                        Looking for <span className={`font-semibold ${prop.lookingFor.color}`}>{prop.lookingFor.label}</span>
                      </div>
                      <div className="text-sm">
                        Looking for <span className="font-semibold text-primary">Roommate</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                      {prop.amenities.map((am: any) => (
                        <span
                          key={am.label}
                          className="inline-flex items-center px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground"
                        >
                          <am.icon className="h-3 w-3 mr-1" />
                          {am.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-muted-foreground">
                      {prop.distance} km from your search
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {calcMatch(prop.preferences.map((p:any)=>p.label))}% Match
                      </span>
                      <button className="p-2 rounded-full hover:bg-muted transition"><Phone className="h-4 w-4 text-primary" /></button>
                      <button className="p-2 rounded-full hover:bg-muted transition"><MessageCircle className="h-4 w-4 text-primary" /></button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 