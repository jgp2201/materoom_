import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function PostRequirement() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">Post Your Requirement</h1>
        <p className="text-muted-foreground text-center mb-10">
          Find your perfect roommate or room with MateRoom. Choose what you need to get started.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-border/60 shadow-elegant overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary/5 p-6 h-40 flex items-center justify-center">
                <Building2 className="h-16 w-16 text-primary" />
              </div>
              <div className="p-6 space-y-2">
                <div className="text-xl font-semibold">Need Room/Flat</div>
                <p className="text-sm text-muted-foreground">with roommate</p>
                <Button asChild className="mt-4">
                  <Link to="/post/need-room">Fill requirement</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-elegant overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-secondary/20 p-6 h-40 flex items-center justify-center">
                <Users className="h-16 w-16 text-secondary-foreground" />
              </div>
              <div className="p-6 space-y-2">
                <div className="text-xl font-semibold">Need Roommate</div>
                <p className="text-sm text-muted-foreground">for your room</p>
                <Button variant="secondary" asChild className="mt-4">
                  <Link to="/post/need-roommate">Create a listing</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-10 text-center text-xs text-muted-foreground">
          Beware of scams. Verify flatmates/tenants before proceeding.
        </div>
      </div>
      <Footer />
    </div>
  );
}


