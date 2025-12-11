import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CompatibilitySection from "@/components/CompatibilitySection";
import PricingInsights from "@/components/PricingInsights";
import Footer from "@/components/Footer";
import { useAuth } from "../App";

const Index = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      {isAuthenticated && (
        <>
          <Features />
          {/* <CompatibilitySection /> */}
          <PricingInsights />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
