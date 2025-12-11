import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { IndianRupee, MapPin, Phone, MessageCircle, Wifi, Fan, Tv, Refrigerator, ParkingCircle, Shield, UtensilsCrossed, Shirt, Dumbbell, Battery } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { apiGetProperty } from "../lib/api";
import { useAuth } from "../App";

// Predefined PGs data (shared with FindPG.tsx)
const predefinedPGs = [
  // Ahmedabad
  { id: 'pg-ahm-1', title: 'Elite PG for Men', location: 'Ahmedabad, Gujarat', price: 4500, approxRent: 4500, description: 'Spacious AC rooms with WiFi, food, and laundry facilities. Located in prime area with good connectivity.', imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400', amenities: ['WiFi', 'AC', 'Food', 'Laundry', 'Parking', 'Security'], occupancy: 'Shared', lookingFor: 'Male', bedrooms: 2, bathrooms: 2 },
  { id: 'pg-ahm-2', title: 'Comfortable Ladies PG', location: 'Ahmedabad, Gujarat', price: 5000, approxRent: 5000, description: 'Safe and secure PG for working women. All modern amenities included.', imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400', amenities: ['WiFi', 'AC', 'Food', 'Security', 'TV', 'Fridge'], occupancy: 'Shared', lookingFor: 'Female', bedrooms: 2, bathrooms: 2 },
  { id: 'pg-ahm-3', title: 'Modern Co-living Space', location: 'Ahmedabad, Gujarat', price: 5500, approxRent: 5500, description: 'Fully furnished rooms with all amenities. Close to IT parks and universities.', imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400', amenities: ['WiFi', 'AC', 'Food', 'Parking', 'Gym', 'Security'], occupancy: 'Single', lookingFor: 'Any', bedrooms: 1, bathrooms: 1 },
  // Pune
  { id: 'pg-pune-2', title: 'Budget-Friendly PG', location: 'Pune, Maharashtra', price: 4000, approxRent: 4000, description: 'Affordable PG with basic amenities. Good for students and working professionals.', imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400', amenities: ['WiFi', 'Fridge', 'Security', 'Parking'], occupancy: 'Shared', lookingFor: 'Any', bedrooms: 3, bathrooms: 2 },
  { id: 'pg-pune-3', title: 'Co-living PG Kothrud', location: 'Pune, Maharashtra', price: 5800, approxRent: 5800, description: 'Modern co-living space with community areas and modern amenities.', imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400', amenities: ['WiFi', 'AC', 'Food', 'TV', 'Parking', 'Security'], occupancy: 'Shared', lookingFor: 'Any', bedrooms: 2, bathrooms: 2 },
  // Surat
  { id: 'pg-surat-1', title: 'Executive PG Surat', location: 'Surat, Gujarat', price: 4200, approxRent: 4200, description: 'Comfortable PG accommodation in heart of Surat. All amenities included.', imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400', amenities: ['WiFi', 'AC', 'Food', 'Laundry', 'Security'], occupancy: 'Shared', lookingFor: 'Male', bedrooms: 2, bathrooms: 1 },
  { id: 'pg-surat-3', title: 'Student-Friendly PG', location: 'Surat, Gujarat', price: 3500, approxRent: 3500, description: 'Budget PG perfect for students. Clean rooms with basic facilities.', imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400', amenities: ['WiFi', 'Food', 'Parking', 'Security'], occupancy: 'Shared', lookingFor: 'Any', bedrooms: 3, bathrooms: 2 },
  // Bangalore
  { id: 'pg-blr-1', title: 'Elite PG Koramangala', location: 'Bangalore, Karnataka', price: 7500, approxRent: 7500, description: 'Premium PG in prime location. Fully furnished with all modern amenities.', imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400', amenities: ['WiFi', 'AC', 'Food', 'Laundry', 'Parking', 'Gym', 'Security', 'TV'], occupancy: 'Single', lookingFor: 'Any', bedrooms: 1, bathrooms: 1 },
  { id: 'pg-blr-2', title: 'Co-living Space Whitefield', location: 'Bangalore, Karnataka', price: 6800, approxRent: 6800, description: 'Modern co-living accommodation near IT parks. Perfect for professionals.', imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400', amenities: ['WiFi', 'AC', 'Food', 'Parking', 'Gym', 'Security', 'Fridge'], occupancy: 'Shared', lookingFor: 'Any', bedrooms: 2, bathrooms: 2 },
  { id: 'pg-blr-3', title: 'Budget PG Indiranagar', location: 'Bangalore, Karnataka', price: 5500, approxRent: 5500, description: 'Affordable PG with good connectivity. Suitable for students and working professionals.', imageUrl: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=400', amenities: ['WiFi', 'AC', 'Food', 'Security', 'Parking'], occupancy: 'Shared', lookingFor: 'Any', bedrooms: 2, bathrooms: 1 },
  { id: 'pg-blr-4', title: 'Luxury PG MG Road', location: 'Bangalore, Karnataka', price: 8500, approxRent: 8500, description: 'Luxury accommodation in heart of Bangalore. All premium facilities included.', imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400', amenities: ['WiFi', 'AC', 'Food', 'Laundry', 'Parking', 'Gym', 'Security', 'TV', 'Fridge'], occupancy: 'Single', lookingFor: 'Any', bedrooms: 1, bathrooms: 1 },
  // Hyderabad
  { id: 'pg-hyd-1', title: 'Premium PG Hitech City', location: 'Hyderabad, Telangana', price: 7000, approxRent: 7000, description: 'Modern PG near IT hub. Fully furnished with all amenities for professionals.', imageUrl: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=400', amenities: ['WiFi', 'AC', 'Food', 'Laundry', 'Parking', 'Gym', 'Security'], occupancy: 'Single', lookingFor: 'Any', bedrooms: 1, bathrooms: 1 },
  { id: 'pg-hyd-2', title: 'Comfortable PG Gachibowli', location: 'Hyderabad, Telangana', price: 6200, approxRent: 6200, description: 'Well-maintained PG accommodation with good facilities. Close to tech parks.', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400', amenities: ['WiFi', 'AC', 'Food', 'Parking', 'Security', 'TV'], occupancy: 'Shared', lookingFor: 'Any', bedrooms: 2, bathrooms: 2 },
  { id: 'pg-hyd-3', title: 'Student PG Secunderabad', location: 'Hyderabad, Telangana', price: 4500, approxRent: 4500, description: 'Budget-friendly PG for students. Clean and safe accommodation with basic amenities.', imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400', amenities: ['WiFi', 'Food', 'Security', 'Parking'], occupancy: 'Shared', lookingFor: 'Any', bedrooms: 3, bathrooms: 2 },
  { id: 'pg-hyd-4', title: 'Ladies PG Banjara Hills', location: 'Hyderabad, Telangana', price: 6800, approxRent: 6800, description: 'Secure and comfortable PG exclusively for women. All modern facilities available.', imageUrl: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400', amenities: ['WiFi', 'AC', 'Food', 'Security', 'TV', 'Fridge', 'Parking'], occupancy: 'Shared', lookingFor: 'Female', bedrooms: 2, bathrooms: 2 },
];

// Amenity icons mapping
const amenityIcons: Record<string, any> = {
  'WiFi': Wifi,
  'AC': Fan,
  'Ac': Fan,
  'TV': Tv,
  'Fridge': Refrigerator,
  'Parking': ParkingCircle,
  'Security': Shield,
  'Food': UtensilsCrossed,
  'Laundry': Shirt,
  'Gym': Dumbbell,
  'PowerBackup': Battery,
};

// Preference icons (matching the image style)
const PREFERENCE_ICONS: Record<string, { emoji: string; bgColor: string }> = {
  "Wanderer": { emoji: "🚗", bgColor: "bg-red-100" },
  "Non Smoker": { emoji: "🚭", bgColor: "bg-red-100" },
  "Early Bird": { emoji: "🌿", bgColor: "bg-green-100" },
  "Studious": { emoji: "📚", bgColor: "bg-blue-100" },
  "Non Alcoholic": { emoji: "🚫", bgColor: "bg-purple-100" },
  "Vegan": { emoji: "🌱", bgColor: "bg-purple-100" },
  "Sporty": { emoji: "🏃‍♂️", bgColor: "bg-yellow-100" },
};

// Default highlights for PGs
const defaultHighlights = [
  "Attached washroom",
  "Separate washrooms",
  "Gym nearby",
  "Park nearby",
  "Public transport nearby",
  "Attached balcony",
  "No Restriction",
  "Market nearby",
  "Gated society",
];

// Get initials from name
const getInitials = (name: string): string => {
  const parts = name.trim().split(' ');
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

// Extract owner name from title or generate from location
const getOwnerName = (pg: any): string => {
  // Extract from title or location
  const locationParts = pg.location.split(',');
  const city = locationParts[locationParts.length - 1]?.trim() || locationParts[0];
  const names: Record<string, string> = {
    'Ahmedabad': 'Girish Patel',
    'Gujarat': 'Girish Patel',
    'Pune': 'Rajesh Kumar',
    'Maharashtra': 'Rajesh Kumar',
    'Surat': 'Priya Shah',
    'Bangalore': 'Arjun Reddy',
    'Karnataka': 'Arjun Reddy',
    'Hyderabad': 'Sneha Rao',
    'Telangana': 'Sneha Rao',
  };
  return names[city] || 'PG Owner';
};

export default function PropertyDetails() {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const [pgData, setPgData] = useState<any>(null);
  const [isPG, setIsPG] = useState(false);
  const [ownerUserId, setOwnerUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!propertyId) {
      setError('Property ID is required');
      setLoading(false);
      return;
    }
    
    setLoading(true);
    setError(null);
    
    // Check if it's a PG
    if (propertyId.startsWith('pg-')) {
      const pg = predefinedPGs.find(p => p.id === propertyId);
      if (pg) {
        setPgData(pg);
        setIsPG(true);
        setLoading(false);
      } else {
        setError(`PG with ID "${propertyId}" not found`);
        setLoading(false);
      }
    } else {
      // Try to fetch from API
      apiGetProperty(propertyId)
        .then((p) => {
          setPgData({ ...p, title: p.title, location: p.location, price: p.price });
          setIsPG(false);
          setLoading(false);
        })
        .catch((err) => {
          setError(`Property not found: ${err.message || 'Unknown error'}`);
          setLoading(false);
        });
    }
  }, [propertyId]);

  // For PGs, generate a consistent owner ID based on PG ID (mock owner)
  // For real properties, get userId from API if available
  useEffect(() => {
    if (isPG) {
      // Generate consistent mock user ID for PGs
      setOwnerUserId(`owner-${propertyId}`);
    } else if (pgData && 'userId' in pgData) {
      setOwnerUserId(pgData.userId);
    }
  }, [isPG, pgData, propertyId]);
  
  // For PGs, use the title; for other properties, use name or title
  const displayName = pgData ? (isPG ? pgData.title : (pgData.name || pgData.title || 'Owner')) : '';
  const initials = displayName ? getInitials(displayName) : '';
  
  // Extract more specific location (e.g., "Vastrapur, Ahmedabad" from "Ahmedabad, Gujarat")
  // Use useMemo to prevent re-renders from Math.random()
  const location = useMemo(() => {
    if (!pgData) return 'Location not specified';
    let loc = pgData.location || pgData.address || 'Location not specified';
    if (isPG && loc.includes('Ahmedabad')) {
      // For Ahmedabad, use a more specific location
      const specificAreas = ['Vastrapur', 'Navrangpura', 'CG Road', 'Maninagar', 'Satellite'];
      // Use propertyId as seed for consistent area selection per property
      const seed = propertyId ? propertyId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : 0;
      const randomArea = specificAreas[seed % specificAreas.length];
      loc = `${randomArea}, ${loc}`;
    }
    return loc;
  }, [pgData?.location, pgData?.address, isPG, propertyId]);
  
  // Get the image URL for PG
  const pgImageUrl = isPG && pgData ? pgData.imageUrl : null;
  
  const price = pgData ? (pgData.approxRent || pgData.price || 0) : 0;
  
  // Use useMemo for amenities to prevent re-renders from Math.random()
  const amenities = useMemo(() => {
    if (!pgData) return [];
    let amens = Array.isArray(pgData.amenities) ? pgData.amenities : [];
    // Add PowerBackup to some PGs for variety (using propertyId as seed for consistency)
    if (isPG && !amens.includes('PowerBackup')) {
      const seed = propertyId ? propertyId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : 0;
      if (seed % 2 === 0) {
        amens = [...amens, 'PowerBackup'];
      }
    }
    return amens;
  }, [pgData?.amenities, isPG, propertyId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="text-2xl font-semibold mb-2">Loading...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !pgData) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="text-2xl font-semibold mb-2">Property Not Found</div>
            <p className="text-muted-foreground mb-4">{error || 'The property you are looking for does not exist.'}</p>
            <button 
              onClick={() => navigate('/listings')}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg"
            >
              Back to Listings
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Generate preferences (mock data for now)
  const preferences = ['Wanderer', 'Non Smoker', 'Early Bird', 'Studious', 'Non Alcoholic', 'Vegan', 'Sporty'];
  
  // Get highlights (use description or default)
  const highlights = defaultHighlights.slice(0, 9);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Section */}
          <Card className="p-6">
            <div className="text-center space-y-4">
              {/* Image or Initials Circle */}
              {isPG && pgImageUrl ? (
                <div className="w-32 h-32 rounded-full mx-auto overflow-hidden bg-red-500 border-4 border-red-500">
                  <img 
                    src={pgImageUrl} 
                    alt={displayName}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-32 h-32 rounded-full bg-red-500 mx-auto flex items-center justify-center">
                  <span className="text-white text-3xl font-semibold">{initials}</span>
                </div>
              )}
              
              {/* Title/Name */}
              <h2 className="text-xl font-semibold">{displayName}</h2>
              
              {/* Contact Buttons - Hide if it's user's own listing or if it's a demo PG */}
              {ownerUserId && ownerUserId !== user?.id && token && !ownerUserId.startsWith('owner-') && (
                <div className="flex gap-3 justify-center">
                  <button 
                    onClick={() => navigate(`/chat?userId=${ownerUserId}`)}
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg flex items-center gap-2 transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat
                  </button>
                  <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg flex items-center gap-2 transition">
                    <Phone className="h-4 w-4" />
                    Call
                  </button>
                </div>
              )}
              {/* Show message for demo PGs */}
              {ownerUserId && ownerUserId.startsWith('owner-') && (
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">This is a demo listing</p>
                  <p className="text-xs text-muted-foreground">
                    To chat with real users, check out the <button onClick={() => navigate('/listings')} className="text-primary underline">Roommates</button> tab
                  </p>
                </div>
              )}
            </div>
              </Card>

          {/* Right Column - Details Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Location Section */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
            </div>

            {/* Key Information Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Gender</div>
                <div className="font-semibold">{pgData.lookingFor || 'Any'}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Approx Rent</div>
                <div className="font-semibold flex items-center gap-1">
                  <IndianRupee className="h-4 w-4 text-primary" />
                  {price.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Occupancy</div>
                <div className="font-semibold">{pgData.occupancy || 'Shared'}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Looking For</div>
                <div className="font-semibold">Roommate</div>
              </div>
            </div>

            {/* Preferences Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Preferences</h3>
              <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
                {preferences.map((pref) => {
                  const prefData = PREFERENCE_ICONS[pref] || { emoji: '✨', bgColor: 'bg-gray-100' };
                  return (
                    <div key={pref} className="text-center">
                      <div className={`w-16 h-16 rounded-full ${prefData.bgColor} mx-auto mb-2 flex items-center justify-center text-2xl`}>
                        {prefData.emoji}
                      </div>
                      <div className="text-sm text-muted-foreground">{pref}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Highlights Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Highlights</h3>
              <div className="flex flex-wrap gap-3">
                {highlights.map((highlight) => (
                  <span 
                    key={highlight} 
                    className="px-3 py-1.5 bg-muted rounded-full text-sm text-foreground"
                  >
                    {highlight}
                  </span>
                  ))}
                </div>
              </div>

            {/* Amenities Section */}
              <div>
              <h3 className="text-xl font-semibold mb-4">Amenities</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                {amenities.map((amenity: string) => {
                  const IconComponent = amenityIcons[amenity];
                  return (
                    <div key={amenity} className="text-center">
                      <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-2 flex items-center justify-center">
                        {IconComponent ? (
                          <IconComponent className="h-6 w-6 text-muted-foreground" />
                        ) : (
                          <span className="text-2xl">🏠</span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">{amenity}</div>
                    </div>
                  );
                })}
                {amenities.length === 0 && (
                  <div className="text-sm text-muted-foreground col-span-full">No amenities listed.</div>
                )}
              </div>
            </div>

            {/* Description Section */}
            {pgData.description && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p className="text-muted-foreground">{pgData.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 
