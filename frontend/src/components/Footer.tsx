import { Button } from "@/components/ui/button";
import { 
  Home, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    platform: [
      { label: "Listings", href: "/listings" },
      { label: "Post Need", href: "/post" },
      { label: "My Team", href: "/my-team" },
      { label: "Rent Agreement", href: "/rent-agreement" },
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Safety Tips", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Report Issue", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                MateRoom
              </span>
            </div>
            <p className="text-background/80 text-lg leading-relaxed max-w-md">
              The smartest way to find PG accommodations and compatible roommates. 
              Join thousands of happy residents who found their perfect living space with us.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-background/80">hello@materoom.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-background/80">Ahmedabad, Gujarat</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-background">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-background">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-background">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-background/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-background mb-2">
                Stay Updated
              </h3>
              <p className="text-background/80">
                Get the latest property listings and roommate matches delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-background/80">
              <span>© 2024 MateRoom. Made with</span>
              <Heart className="h-4 w-4 text-accent fill-current" />
              <span>in India. All rights reserved.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-background/10 rounded-lg hover:bg-gradient-primary transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5 text-background" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;