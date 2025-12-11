import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Star, 
  TrendingUp, 
  Wrench, 
  MapPin, 
  Users,
  Clock,
  Shield,
  Heart
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Lifestyle Compatibility",
      description: "Advanced matching algorithm analyzes your lifestyle preferences to find perfect roommate matches.",
      highlight: "85% Match Rate",
      color: "bg-gradient-primary",
    },
    {
      icon: Star,
      title: "Food & Housekeeping Ratings",
      description: "Real-time ratings from residents help you choose PGs with the best food and cleaning services.",
      highlight: "4.8/5 Avg Rating",
      color: "bg-gradient-secondary",
    },
    {
      icon: TrendingUp,
      title: "AI Price Prediction",
      description: "Smart pricing insights help you avoid overpaying with area-based rent predictions.",
      highlight: "Save ₹2000/month",
      color: "bg-gradient-primary",
    },
    {
      icon: Wrench,
      title: "Maintenance Tracking",
      description: "Submit and track maintenance requests with owners through our integrated ticketing system.",
      highlight: "24hr Response",
      color: "bg-gradient-secondary",
    },
    {
      icon: MapPin,
      title: "Commute Calculator",
      description: "Find PGs within your preferred commute time to work or college with live traffic data.",
      highlight: "Under 30 mins",
      color: "bg-gradient-primary",
    },
    {
      icon: Shield,
      title: "Verified Properties",
      description: "All properties are verified for safety, amenities, and authenticity before listing.",
      highlight: "100% Verified",
      color: "bg-gradient-secondary",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Smart Features for
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Smarter Living
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our AI-powered platform revolutionizes the way you find and live in PG accommodations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card hover:scale-105 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 ${feature.color} rounded-xl`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary">
                      {feature.highlight}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Heart className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-foreground">
              Join 50,000+ happy residents
            </span>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to find your perfect roommate?
            </h3>
            <Button variant="hero" size="lg" className="group">
              <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Start Matching Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;