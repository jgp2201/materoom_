import { Button } from "@/components/ui/button";
import { Home, Menu, X, User, Settings, Pencil, LogOut } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../App";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  const navLinks = [
    { label: "Listings", href: "/listings" },
    // { label: "Find Flatmate", href: "#flatmates" },
    { label: "Post Need", href: "/post" },
    { label: "My Team", href: "/my-team" },
    { label: "Chat", href: "/chat" },
    { label: "Price Predictor", href: "#pricing" },
    { label: "Rent Agreement", href: "/rent-agreement" },
  ];

  // Helper function to check if a link is active
  const isActiveLink = (href: string) => {
    if (href.startsWith("#")) return false; // External links are never active
    if (href === "/" && location.pathname === "/") return true; // Home page exact match
    if (href !== "/") {
      return location.pathname === href || location.pathname.startsWith(href + "/");
    }
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Home className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MateRoom
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              return link.href.startsWith("/") ? (
                <Link 
                  key={link.label} 
                  to={link.href} 
                  className={`relative text-black hover:text-accent-light transition-colors duration-300 font-medium py-2 px-1 ${
                    isActive ? 'text-primary' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full transform scale-x-100 transition-transform duration-300"></div>
                  )}
                </Link>
              ) : (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="relative text-black hover:text-accent-light transition-colors duration-300 font-medium py-2 px-1"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="default" className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    {user?.name || user?.email?.split("@")[0] || "Account"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Hi {user?.name || user?.email?.split("@")[0] || "there"}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/preferences" className="flex items-center gap-2">
                      <Settings className="h-4 w-4" /> My Preferences
                    </Link>
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem asChild>
                    <Link to="/post/need-room" className="flex items-center gap-2">
                      <Pencil className="h-4 w-4" /> Edit Listing
                    </Link>
                  </DropdownMenuItem> */}
                  {/* <DropdownMenuItem asChild>
                    <Link to="/post/need-room" className="flex items-center gap-2 text-red-600">
                      Remove Listing
                    </Link>
                  </DropdownMenuItem> */}
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center gap-2">
                      <User className="h-4 w-4" /> My Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-600 focus:text-red-600">
                    <LogOut className="h-4 w-4 mr-2" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="secondary" size="default" asChild>
                  <Link to="/signin" className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Sign In
                  </Link>
                </Button>
                <Button variant="default" size="default" asChild>
                  <Link to="/get-started">Get Started</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);
                return link.href.startsWith("/") ? (
                  <Link 
                    key={link.label} 
                    to={link.href} 
                    className={`relative text-white hover:text-accent-light transition-colors duration-300 font-medium py-2 px-2 ${
                      isActive ? 'text-accent-light' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full"></div>
                    )}
                  </Link>
                ) : (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    className="text-white hover:text-accent-light transition-colors duration-300 font-medium py-2 px-2" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
                {isAuthenticated ? (
                  <>
                    <div className="px-2 text-sm">Hi {user?.name || user?.email?.split("@")[0]}</div>
                    <Button variant="secondary" size="default" className="justify-start" asChild>
                      <Link to="/preferences" onClick={() => setIsMenuOpen(false)}>
                        <Settings className="h-4 w-4 mr-2" /> My Preferences
                      </Link>
                    </Button>
                    <Button variant="secondary" size="default" className="justify-start" asChild>
                      <Link to="/post-requirement" onClick={() => setIsMenuOpen(false)}>
                        <Pencil className="h-4 w-4 mr-2" /> Edit Listing
                      </Link>
                    </Button>
                    <Button variant="secondary" size="default" className="justify-start" asChild>
                      <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                        <User className="h-4 w-4 mr-2" /> My Profile
                      </Link>
                    </Button>
                    <Button variant="secondary" size="default" className="justify-start text-red-600" onClick={() => { logout(); setIsMenuOpen(false); }}>
                      <LogOut className="h-4 w-4 mr-2" /> Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="secondary" size="default" className="justify-start" asChild>
                      <Link to="/signin" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                        <User className="h-5 w-5" />
                        Sign In
                      </Link>
                    </Button>
                    <Button variant="default" size="default" className="justify-start" asChild>
                      <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;