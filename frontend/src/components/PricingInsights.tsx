import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  TrendingUp,
  TrendingDown,
  MapPin,
  IndianRupee,
  BarChart3,
  Target,
  CheckCircle,
  AlertCircle,
  Home,
  BedDouble,
  Wifi,
  Droplets,
  Utensils,
  Users,
  Shield,
  Tv,
  ParkingCircle,
  Fan,
  Refrigerator,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const demoImages = [
  "/src/assets/hero-image.jpg",
  "/src/assets/hero-image-new.jpg",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
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
  { label: "1 Male Needed", color: "bg-blue-100 text-blue-800" },
  { label: "2 Female Needed", color: "bg-pink-100 text-pink-800" },
  { label: "1 Any", color: "bg-green-100 text-green-800" },
  { label: "2 Any", color: "bg-green-100 text-green-800" },
  { label: "1 Female Needed", color: "bg-pink-100 text-pink-800" },
  { label: "1 Male Needed", color: "bg-blue-100 text-blue-800" },
];

function getRandomProperties(area: string) {
  return Array.from({ length: 6 }).map((_, i) => {
    const img = demoImages[Math.floor(Math.random() * demoImages.length)];
    const price = 6000 + Math.floor(Math.random() * 5000);
    const vacancy = demoVacancies[Math.floor(Math.random() * demoVacancies.length)];
    const amenities = demoAmenities.sort(() => 0.5 - Math.random()).slice(0, 6);
    return {
      id: `${area}-${i}`,
      name: `${area} PG/Flat #${i + 1}`,
      image: img,
      price,
      vacancy,
      amenities,
      allAmenities: demoAmenities,
      description: `Spacious and well-furnished PG/Flat in ${area} with all modern amenities. Ideal for students and working professionals.`,
    };
  });
}

const PricingInsights = () => {
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [properties, setProperties] = useState<any[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<any | null>(null);

  const areaData = [
    {
      area: "Mumbai",
      avgRent: 16000,
      trend: "up",
      change: "+12%",
      demand: "High",
      properties: 45,
      prediction: 17920,
    },
    {
      area: "Pune",
      avgRent: 12000,
      trend: "down",
      change: "-5%",
      demand: "Medium",
      properties: 67,
      prediction: 11400,
    },
    {
      area: "Bangalore",
      avgRent: 20000,
      trend: "up",
      change: "+8%",
      demand: "High",
      properties: 89,
      prediction: 21600,
    },
  ];

  const priceFactors = [
    "Location proximity to tech hubs",
    "Metro connectivity",
    "Amenities included",
    "Property age and condition",
    "Market demand trends",
    "Seasonal variations",
  ];

  const handleAreaClick = (area: string) => {
    navigate(`/area/${encodeURIComponent(area)}`);
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Smart Pricing
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Insights & Predictions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Make informed decisions with AI-powered rent predictions and market analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {areaData.map((area, index) => (
            <Card
              key={index}
              className={`group hover:shadow-card hover:scale-105 transition-all duration-300 border-border/50 cursor-pointer`}
              onClick={() => handleAreaClick(area.area)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{area.area}</CardTitle>
                  </div>
                  <Badge
                    variant={area.demand === "High" ? "default" : "secondary"}
                    className={area.demand === "High" ? "bg-gradient-secondary" : ""}
                  >
                    {area.demand} Demand
                  </Badge>
                </div>
                <CardDescription>{area.properties} active properties</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Current Avg. Rent</span>
                    <div className="flex items-center space-x-1">
                      <IndianRupee className="h-4 w-4 text-foreground" />
                      <span className="font-semibold text-lg">{area.avgRent.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Market Trend</span>
                    <div className="flex items-center space-x-1">
                      {area.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                      <span
                        className={`text-sm font-medium ${
                          area.trend === "up" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {area.change}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <span className="text-sm text-muted-foreground">AI Prediction (3 months)</span>
                    <div className="flex items-center space-x-1">
                      <Target className="h-4 w-4 text-primary" />
                      <span className="font-semibold bg-gradient-primary bg-clip-text text-transparent">
                        ₹{area.prediction.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Property Detail Modal */}
        <Dialog open={!!selectedProperty} onOpenChange={() => setSelectedProperty(null)}>
          <DialogContent>
            {selectedProperty && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedProperty.name}</DialogTitle>
                  <DialogDescription>{selectedProperty.description}</DialogDescription>
                </DialogHeader>
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    <IndianRupee className="h-4 w-4 text-primary" />
                    <span className="font-bold text-primary text-lg">
                      {selectedProperty.price.toLocaleString()}
                    </span>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full font-semibold text-xs ${selectedProperty.vacancy.color} border-2 border-primary`}>
                    {selectedProperty.vacancy.label}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-foreground">Amenities:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProperty.allAmenities.map((am: any) => (
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
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Price Analysis Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-white/80 backdrop-blur-sm border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Rent Prediction Analysis</span>
                </CardTitle>
                <CardDescription>
                  Based on 10,000+ property listings and market trends
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-primary/10 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold text-foreground">Fair Price Alert</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The property at ₹7,500 in mumbai is <span className="text-green-600 font-medium">₹1,000 below market average</span>. This is a great deal!
                  </p>
                </div>

                <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                    <span className="font-semibold text-foreground">Price Watch</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Rents in Electronic City are predicted to rise by <span className="text-accent font-medium">8% next quarter</span>. Book now to lock current rates.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Factors We Analyze
              </h3>
              <p className="text-muted-foreground mb-6">
                Our AI considers multiple factors to provide accurate rent predictions and help you make informed decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {priceFactors.map((factor, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg border border-border/50">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">{factor}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <Button variant="default" size="lg" className="w-full">
                Get Personalized Price Insights
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Set Price Alerts
              </Button>
            </div>

            {/* <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  95% prediction accuracy
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingInsights;