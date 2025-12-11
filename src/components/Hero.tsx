import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Users, Star, Search } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image-new.jpg";

const Hero = () => {
  const stats = [
    { icon: Users, label: "Happy Residents", value: "50K+" },
    { icon: MapPin, label: "Verified Properties", value: "5K+" },
    { icon: Star, label: "Average Rating", value: "4.8" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern PG accommodation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary-dark/50 to-secondary/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-primary/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent leading-tight">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
                MateRoom
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
              Smart PG & flatmate matching based on lifestyle compatibility. 
              Find roommates who truly match your vibe.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/listings">
                <Search className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Find My Perfect Room
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/post">
                List Your Need
              </Link>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center space-x-3">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Floating decoration elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-secondary rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-accent/20 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;