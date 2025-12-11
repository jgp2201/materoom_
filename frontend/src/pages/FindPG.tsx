import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, MapPin, Search, Phone, MessageCircle, Wifi, Car, Shield, Tv, Refrigerator, Fan, ParkingCircle, Users, Puzzle, UtensilsCrossed, Shirt, Dumbbell } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { apiListRoomListings, Property, apiListProperties, apiListRequirements, apiGetPreferences } from "../lib/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../App";

const avatarPool = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/47.jpg",
];

// Predefined PGs data
const predefinedPGs = [
  // Ahmedabad
  {
    id: 'pg-ahm-1',
    title: 'Elite PG for Men',
    location: 'Ahmedabad, Gujarat',
    price: 4500,
    approxRent: 4500,
    description: 'Spacious AC rooms with WiFi, food, and laundry facilities. Located in prime area with good connectivity.',
    imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400',
    amenities: ['WiFi', 'AC', 'Food', 'Laundry', 'Parking', 'Security'],
    occupancy: 'Shared',
    lookingFor: 'Male',
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 'pg-ahm-2',
    title: 'Comfortable Ladies PG',
    location: 'Ahmedabad, Gujarat',
    price: 5000,
    approxRent: 5000,
    description: 'Safe and secure PG for working women. All modern amenities included.',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
    amenities: ['WiFi', 'AC', 'Food', 'Security', 'TV', 'Fridge'],
    occupancy: 'Shared',
    lookingFor: 'Female',
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 'pg-ahm-3',
    title: 'Modern Co-living Space',
    location: 'Ahmedabad, Gujarat',
    price: 5500,
    approxRent: 5500,
    description: 'Fully furnished rooms with all amenities. Close to IT parks and universities.',
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400',
    amenities: ['WiFi', 'AC', 'Food', 'Parking', 'Gym', 'Security'],
    occupancy: 'Single',
    lookingFor: 'Any',
    bedrooms: 1,
    bathrooms: 1,
  },
  // Pune
  {
    id: 'pg-pune-2',
    title: 'Budget-Friendly PG',
    location: 'Pune, Maharashtra',
    price: 4000,
    approxRent: 4000,
    description: 'Affordable PG with basic amenities. Good for students and working professionals.',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400',
    amenities: ['WiFi', 'Fridge', 'Security', 'Parking'],
    occupancy: 'Shared',
    lookingFor: 'Any',
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 'pg-pune-3',
    title: 'Co-living PG Kothrud',
    location: 'Pune, Maharashtra',
    price: 5800,
    approxRent: 5800,
    description: 'Modern co-living space with community areas and modern amenities.',
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400',
    amenities: ['WiFi', 'AC', 'Food', 'TV', 'Parking', 'Security'],
    occupancy: 'Shared',
    lookingFor: 'Any',
    bedrooms: 2,
    bathrooms: 2,
  },
  // Surat
  {
    id: 'pg-surat-1',
    title: 'Executive PG Surat',
    location: 'Surat, Gujarat',
    price: 4200,
    approxRent: 4200,
    description: 'Comfortable PG accommodation in heart of Surat. All amenities included.',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
    amenities: ['WiFi', 'AC', 'Food', 'Laundry', 'Security'],
    occupancy: 'Shared',
    lookingFor: 'Male',
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: 'pg-surat-3',
    title: 'Student-Friendly PG',
    location: 'Surat, Gujarat',
    price: 3500,
    approxRent: 3500,
    description: 'Budget PG perfect for students. Clean rooms with basic facilities.',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400',
    amenities: ['WiFi', 'Food', 'Parking', 'Security'],
    occupancy: 'Shared',
    lookingFor: 'Any',
    bedrooms: 3,
    bathrooms: 2,
  },
  // Bangalore
  {
    id: 'pg-blr-1',
    title: 'Elite PG Koramangala',
    location: 'Bangalore, Karnataka',
    price: 7500,
    approxRent: 7500,
    description: 'Premium PG in prime location. Fully furnished with all modern amenities.',
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400',
    amenities: ['WiFi', 'AC', 'Food', 'Laundry', 'Parking', 'Gym', 'Security', 'TV'],
    occupancy: 'Single',
    lookingFor: 'Any',
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: 'pg-blr-2',
    title: 'Co-living Space Whitefield',
    location: 'Bangalore, Karnataka',
    price: 6800,
    approxRent: 6800,
    description: 'Modern co-living accommodation near IT parks. Perfect for professionals.',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400',
    amenities: ['WiFi', 'AC', 'Food', 'Parking', 'Gym', 'Security', 'Fridge'],
    occupancy: 'Shared',
    lookingFor: 'Any',
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 'pg-blr-3',
    title: 'Budget PG Indiranagar',
    location: 'Bangalore, Karnataka',
    price: 5500,
    approxRent: 5500,
    description: 'Affordable PG with good connectivity. Suitable for students and working professionals.',
    imageUrl: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=400',
    amenities: ['WiFi', 'AC', 'Food', 'Security', 'Parking'],
    occupancy: 'Shared',
    lookingFor: 'Any',
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: 'pg-blr-4',
    title: 'Luxury PG MG Road',
    location: 'Bangalore, Karnataka',
    price: 8500,
    approxRent: 8500,
    description: 'Luxury accommodation in heart of Bangalore. All premium facilities included.',
    imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
    amenities: ['WiFi', 'AC', 'Food', 'Laundry', 'Parking', 'Gym', 'Security', 'TV', 'Fridge'],
    occupancy: 'Single',
    lookingFor: 'Any',
    bedrooms: 1,
    bathrooms: 1,
  },
  // Hyderabad
  {
    id: 'pg-hyd-1',
    title: 'Premium PG Hitech City',
    location: 'Hyderabad, Telangana',
    price: 7000,
    approxRent: 7000,
    description: 'Modern PG near IT hub. Fully furnished with all amenities for professionals.',
    imageUrl: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=400',
    amenities: ['WiFi', 'AC', 'Food', 'Laundry', 'Parking', 'Gym', 'Security'],
    occupancy: 'Single',
    lookingFor: 'Any',
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: 'pg-hyd-2',
    title: 'Comfortable PG Gachibowli',
    location: 'Hyderabad, Telangana',
    price: 6200,
    approxRent: 6200,
    description: 'Well-maintained PG accommodation with good facilities. Close to tech parks.',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    amenities: ['WiFi', 'AC', 'Food', 'Parking', 'Security', 'TV'],
    occupancy: 'Shared',
    lookingFor: 'Any',
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 'pg-hyd-3',
    title: 'Student PG Secunderabad',
    location: 'Hyderabad, Telangana',
    price: 4500,
    approxRent: 4500,
    description: 'Budget-friendly PG for students. Clean and safe accommodation with basic amenities.',
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400',
    amenities: ['WiFi', 'Food', 'Security', 'Parking'],
    occupancy: 'Shared',
    lookingFor: 'Any',
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 'pg-hyd-4',
    title: 'Ladies PG Banjara Hills',
    location: 'Hyderabad, Telangana',
    price: 6800,
    approxRent: 6800,
    description: 'Secure and comfortable PG exclusively for women. All modern facilities available.',
    imageUrl: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400',
    amenities: ['WiFi', 'AC', 'Food', 'Security', 'TV', 'Fridge', 'Parking'],
    occupancy: 'Shared',
    lookingFor: 'Female',
    bedrooms: 2,
    bathrooms: 2,
  },
];

// Amenity icons mapping
const amenityIcons: Record<string, any> = {
  'WiFi': Wifi,
  'AC': Fan,
  'TV': Tv,
  'Fridge': Refrigerator,
  'Parking': ParkingCircle,
  'Security': Shield,
  'Car': Car,
  'Food': UtensilsCrossed,
  'Laundry': Shirt,
  'Gym': Dumbbell,
};

// Mock amenities for demo
const getRandomAmenities = () => {
  const amenities = ['WiFi', 'AC', 'TV', 'Fridge', 'Parking', 'Security'];
  return amenities.slice(0, Math.floor(Math.random() * 3) + 2);
};

// Preference emoji map (same as detail page)
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

export default function FindPG() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [listings, setListings] = useState<any[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [requirements, setRequirements] = useState<any[]>([]);
  const [userPreferences, setUserPreferences] = useState<any>(null);
  const { token, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    apiListRoomListings().then(setListings).catch(() => setListings([]));
    apiListProperties().then(setProperties).catch(() => setProperties([]));
    apiListRequirements().then(setRequirements).catch(() => setRequirements([]));
    
    // Fetch user preferences if authenticated
    if (token) {
      apiGetPreferences(token).then(setUserPreferences).catch(() => setUserPreferences(null));
    }
  }, [token]);

  // Enhanced search function
  const searchItems = (items: any[], type: 'property' | 'listing' | 'requirement') => {
    return items.filter((item) => {
      const locationMatch = !city || String(item.location).toLowerCase().includes(city.toLowerCase());
      
      if (!query) return locationMatch;
      
      const searchTerm = query.toLowerCase();
      const searchableFields = [
        item.title || '',
        item.description || '',
        item.location || '',
        item.user?.name || '',
        item.user?.email || '',
        // Search in highlights
        ...(Array.isArray(item.highlights) ? item.highlights : []),
        // Search in amenities
        ...(Array.isArray(item.amenities) ? item.amenities : []),
        // Search in preferences
        ...(Array.isArray(item.preferenceLabels) ? item.preferenceLabels : []),
        // Search in occupancy
        item.occupancy || '',
        // Search in looking for
        item.lookingFor || ''
      ];
      
      const textMatch = searchableFields.some(field => 
        String(field).toLowerCase().includes(searchTerm)
      );
      
      return locationMatch && textMatch;
    });
  };

  const filteredProperties = useMemo(() => {
    return searchItems(properties, 'property');
  }, [properties, query, city]);

  const filteredListings = useMemo(() => {
    return searchItems(listings, 'listing');
  }, [listings, query, city]);

  const filteredRequirements = useMemo(() => {
    return searchItems(requirements, 'requirement');
  }, [requirements, query, city]);

  // Filter predefined PGs
  const filteredPGs = useMemo(() => {
    return searchItems(predefinedPGs, 'property');
  }, [query, city]);

  // Card component matching the design from image
  const PropertyCard = ({ item, type, idx, ownerUserId: itemOwnerId }: { item: any; type: 'listing' | 'requirement' | 'property'; idx: number; ownerUserId?: string }) => {
    const isRoom = type === 'requirement' || type === 'property';
    const isRoommate = type === 'listing';
    const amenities = type === 'listing'
      ? (Array.isArray(item.amenities) ? item.amenities : (item.amenities ? String(item.amenities).split(',') : getRandomAmenities()))
      : (Array.isArray(item.amenities) ? item.amenities : (item.amenities ? String(item.amenities).split(',') : getRandomAmenities()));
    const matchPercentage = Math.floor(Math.random() * 50) + 20; // Mock match percentage
    const distance = (Math.random() * 2 + 0.5).toFixed(1); // Mock distance
    
    // Get owner userId - for PGs use mock ID, for listings/requirements use actual userId
    const ownerUserId = itemOwnerId || (type === 'property' && item.id?.startsWith('pg-') 
      ? `owner-${item.id}` 
      : (item.userId || item.user?.id));
    const isOwnListing = ownerUserId && token && user && user.id === ownerUserId;

    return (
      <Card className="hover:shadow-lg transition-all duration-200 border-border/60 cursor-pointer group">
        <CardContent className="p-0">
          {/* Image Section */}
          <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
            {type === 'property' ? (
              <img 
                src={item.imageUrl || `https://picsum.photos/400/300?random=${idx}`} 
                alt="Property" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src={avatarPool[idx % avatarPool.length]} 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
            )}
            {/* Match percentage badge */}
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 text-xs font-medium">
              <Puzzle className="h-3 w-3" />
              {matchPercentage}% Match
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4">
            {/* Name/Title */}
            <h3 className="font-semibold text-lg mb-1">
              {type === 'property'
                ? item.title
                : (item.user?.name || (item.user?.email ? String(item.user.email).split('@')[0] : 'Member'))}
            </h3>

            {/* Location */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
              <MapPin className="h-3 w-3" />
              <span className="truncate">{item.location}</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-1 mb-3">
              <IndianRupee className="h-4 w-4 text-primary" />
              <span className="font-bold text-primary text-lg">₹{item.approxRent || item.price}</span>
            </div>

            {/* Looking For - Hide for PG/property type */}
            {type !== 'property' && (
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="text-xs">
                  Looking for {isRoom ? 'Room' : 'Roommate'}
                </Badge>
                {isRoommate && item.lookingFor && (
                  <Badge variant="outline" className="text-xs">
                    {item.lookingFor}
                  </Badge>
                )}
              </div>
            )}

            {/* Amenities */}
            <div className="flex items-center gap-2 mb-3">
              {amenities.slice(0, 3).map((amenity: string, amenityIdx: number) => {
                const IconComponent = amenityIcons[amenity] || Wifi;
                return (
                  <div key={amenityIdx} className="flex items-center gap-1 text-xs text-muted-foreground">
                    <IconComponent className="h-3 w-3" />
                    <span>{amenity}</span>
                  </div>
                );
              })}
              {amenities.length > 3 && (
                <span className="text-xs text-muted-foreground">+{amenities.length - 3} more</span>
              )}
            </div>

            {/* Preferences (from signup) */}
            {Array.isArray(item.preferenceLabels) && item.preferenceLabels.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {item.preferenceLabels.slice(0, 6).map((label: string, i: number) => (
                  <div key={`${label}-${i}`} className="flex items-center gap-1 px-2 py-1 bg-muted rounded-full text-xs">
                    <span>{PREFERENCE_ICONS[label] ?? '✨'}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Distance and Contact */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{distance} km from your search</span>
              {!isOwnListing && token && ownerUserId && (
                <div className="flex items-center gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="h-8 w-8 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Call functionality - can be extended later
                    }}
                  >
                    <Phone className="h-3 w-3" />
                  </Button>
                  {ownerUserId && !ownerUserId.startsWith('owner-') && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-8 w-8 p-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/chat?userId=${ownerUserId}`);
                      }}
                    >
                      <MessageCircle className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        {/* Enhanced Search Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Find Your Perfect Match</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="relative flex-1">
              <Input 
                value={query} 
                onChange={e=>setQuery(e.target.value)} 
                placeholder="Search by keywords, amenities, preferences..." 
                className="pl-10 h-12" 
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <div className="relative w-full md:w-64">
              <Input 
                value={city} 
                onChange={e=>setCity(e.target.value)} 
                placeholder="Enter city name" 
                className="pl-9 h-12" 
              />
              <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Button 
              onClick={() => {
                // Trigger search (already handled by state changes)
                console.log('Searching for:', { query, city });
              }}
              className="px-8 h-12 bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              Search
            </Button>
          </div>
          
          {/* Search Tips */}
          {/* <div className="mt-4 text-sm text-muted-foreground">
            <p className="mb-2">💡 <strong>Search tips:</strong></p>
            <div className="flex flex-wrap gap-4">
              <span>• Try: "WiFi", "AC", "Parking"</span>
              <span>• Try: "Non Smoker", "Pet Lover"</span>
              <span>• Try: "Shared", "Single"</span>
              <span>• Try: "Male", "Female", "Any"</span>
            </div>
          </div> */}
          
          {/* Active Filters Display */}
          {(query || city) && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {query && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Keyword: "{query}"
                  <button 
                    onClick={() => setQuery('')}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {city && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  City: "{city}"
                  <button 
                    onClick={() => setCity('')}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>

          {/* Results Summary */}
          {(query || city) && (
            <div className="mb-4 p-3 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Found <strong>{filteredListings.length + filteredRequirements.length + filteredProperties.length + filteredPGs.length}</strong> results
                {query && ` for "${query}"`}
                {city && ` in ${city}`}
              </p>
            </div>
          )}

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="all">
              All Listings ({filteredListings.length + filteredRequirements.length + filteredProperties.length + filteredPGs.length})
            </TabsTrigger>
            <TabsTrigger value="rooms">
              Rooms ({filteredRequirements.length + filteredProperties.length})
            </TabsTrigger>
            <TabsTrigger value="roommates">
              Roommates ({filteredListings.length})
            </TabsTrigger>
            <TabsTrigger value="pg">
              PG ({filteredPGs.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            {/* User Preferences Display */}
            {userPreferences && (
              <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">Your Preferences</h3>
                <div className="flex flex-wrap gap-2">
                  {userPreferences.preferredLocation && (
                    <Badge variant="outline">{userPreferences.preferredLocation}</Badge>
                  )}
                  {userPreferences.budgetMin && userPreferences.budgetMax && (
                    <Badge variant="outline">₹{userPreferences.budgetMin} - ₹{userPreferences.budgetMax}</Badge>
                  )}
                  {userPreferences.bedrooms && (
                    <Badge variant="outline">{userPreferences.bedrooms} Bedrooms</Badge>
                  )}
                  {userPreferences.bathrooms && (
                    <Badge variant="outline">{userPreferences.bathrooms} Bathrooms</Badge>
                  )}
                </div>
              </div>
            )}
            
            {/* Results or No Results */}
            {filteredListings.length + filteredRequirements.length + filteredProperties.length + filteredPGs.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground mb-4">
                  {query || city 
                    ? `No listings match your search criteria${query ? ` for "${query}"` : ''}${city ? ` in ${city}` : ''}.`
                    : 'No listings available at the moment.'
                  }
                </p>
                {(query || city) && (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Try:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Button variant="outline" size="sm" onClick={() => setQuery('')}>
                        Clear keyword search
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setCity('')}>
                        Clear city filter
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => { setQuery(''); setCity(''); }}>
                        Clear all filters
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredListings.map((l, idx) => (
                  <div key={l.id} onClick={() => navigate(`/roommate/${l.id}`)}>
                    <PropertyCard item={l} type="listing" idx={idx} />
                  </div>
                ))}
                {filteredRequirements.map((r, idx) => (
                  <div key={r.id} onClick={() => navigate(`/seeker/${r.id}`)}>
                    <PropertyCard item={r} type="requirement" idx={idx} />
                  </div>
                ))}
                {filteredProperties.map((p, idx) => (
                  <div key={p.id} onClick={() => navigate(`/property/${p.id}`)}>
                    <PropertyCard item={p} type="property" idx={idx} />
                  </div>
                ))}
                {filteredPGs.map((pg, idx) => (
                  <div key={pg.id} onClick={() => navigate(`/property/${pg.id}`)}>
                    <PropertyCard item={pg} type="property" idx={idx + 100} />
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="rooms" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Properties (rooms available) */}
              {/* {filteredProperties.map((p, idx) => (
                <div key={p.id} onClick={() => navigate(`/property/${p.id}`)}>
                  <PropertyCard item={p} type="property" idx={idx} />
                </div>
              ))} */}
              {/* Requirements (people looking for rooms) */}
              {filteredRequirements.map((r, idx) => (
                <div key={r.id} onClick={() => navigate(`/seeker/${r.id}`)}>
                  <PropertyCard item={r} type="requirement" idx={idx} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="roommates" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredListings.map((l, idx) => (
                <div key={l.id} onClick={() => navigate(`/roommate/${l.id}`)}>
                  <PropertyCard item={l} type="listing" idx={idx} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pg" className="mt-6">
            {filteredPGs.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold mb-2">No PG listings found</h3>
                <p className="text-muted-foreground">
                  {query || city 
                    ? `No PG listings match your search criteria${query ? ` for "${query}"` : ''}${city ? ` in ${city}` : ''}.`
                    : 'No PG listings available at the moment.'
                  }
                </p>
                {(query || city) && (
                  <div className="mt-4">
                    <Button variant="outline" size="sm" onClick={() => { setQuery(''); setCity(''); }}>
                      Clear all filters
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPGs.map((pg, idx) => (
                  <div key={pg.id} onClick={() => navigate(`/property/${pg.id}`)}>
                    <PropertyCard item={pg} type="property" idx={idx + 100} />
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}


