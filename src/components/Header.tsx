import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Linkedin, Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const courses = [
  { name: "Basic Medical Coding Training (BMCT)", path: "/courses/bmct" },
  { name: "CPC Certification Training", path: "/courses/cpc" },
  { name: "Comprehensive Medical Coding Training (CMCT)", path: "/courses/cmct" },
  { name: "IPDRG Speciality Training", path: "/courses/ipdrg" },
  { name: "E&M Speciality Training", path: "/courses/em" },
  { name: "ED Speciality Training", path: "/courses/ed" },
  { name: "Certified Risk Adjustment Coder (CRC)", path: "/courses/crc" },
  { name: "Certified Coding Specialist (CCS)", path: "/courses/ccs" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isActivePath = (path: string) => location.pathname === path;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-lg border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-3 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call: +91 95822 58292</span>
              <span className="sm:hidden">+91 95822 58292</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Nexgenhealthcare@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-4 w-4 hover:text-secondary cursor-pointer transition-colors" />
            </a>
            <a href="https://www.instagram.com/nexgen.healthcare" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-4 w-4 hover:text-secondary cursor-pointer transition-colors" />
            </a>
            <a href="https://www.linkedin.com/company/nexgenhealthcoding/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 hover:text-secondary cursor-pointer transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/599dbea7-cb8e-4927-9f35-3946214389bd.png" 
              alt="Nexgen Healthcare Solutions" 
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                Ne<span className="text-secondary">X</span>gen Healthcare
              </span>
              <span className="text-xs text-muted-foreground italic">Solutions</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-primary ${
                isActivePath("/") ? "text-primary" : "text-gray-700"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-primary ${
                isActivePath("/about") ? "text-primary" : "text-gray-700"
              }`}
            >
              About Us
            </Link>
            
            {/* Courses Link */}
            <Link
              to="/courses"
              className={`font-medium transition-colors hover:text-primary ${
                isActivePath("/courses") ? "text-primary" : "text-gray-700"
              }`}
            >
              Courses
            </Link>

            {/* Admission Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 font-medium text-gray-700 hover:text-primary transition-colors">
                <span>Admission</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white">
                <DropdownMenuItem asChild>
                  <Link
                    to="/enrollment"
                    className="w-full px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    Enroll Now
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/refer-friend"
                    className="w-full px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    Refer a Friend
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/results"
              className={`font-medium transition-colors hover:text-primary ${
                isActivePath("/results") ? "text-primary" : "text-gray-700"
              }`}
            >
              Our Results
            </Link>
            <Link
              to="/gallery"
              className={`font-medium transition-colors hover:text-primary ${
                isActivePath("/gallery") ? "text-primary" : "text-gray-700"
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/career"
              className={`font-medium transition-colors hover:text-primary ${
                isActivePath("/career") ? "text-primary" : "text-gray-700"
              }`}
            >
              Career
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-primary ${
                isActivePath("/contact") ? "text-primary" : "text-gray-700"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full p-0 hover:bg-muted hover:scale-110 transition-all duration-300"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Request Call Back ➜
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full p-0"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <button
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-border pt-4 bg-background/95 backdrop-blur-sm rounded-lg mx-4 mb-4 shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              <Link to="/" className="font-medium text-gray-700 hover:text-primary">
                Home
              </Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-primary">
                About Us
              </Link>
              <Link to="/courses" className="font-medium text-gray-700 hover:text-primary">
                Courses
              </Link>
              <div className="space-y-2">
                <div className="font-medium text-gray-700">Admission</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/enrollment"
                    className="block text-sm text-gray-600 hover:text-primary"
                  >
                    Enroll Now
                  </Link>
                  <Link
                    to="/refer-friend"
                    className="block text-sm text-gray-600 hover:text-primary"
                  >
                    Refer a Friend
                  </Link>
                </div>
              </div>
              <Link to="/results" className="font-medium text-gray-700 hover:text-primary">
                Our Results
              </Link>
              <Link to="/gallery" className="font-medium text-gray-700 hover:text-primary">
                Gallery
              </Link>
              <Link to="/career" className="font-medium text-gray-700 hover:text-primary">
                Career
              </Link>
              <Link to="/contact" className="font-medium text-gray-700 hover:text-primary">
                Contact Us
              </Link>
              <Link to="/contact" className="w-full">
                <Button className="bg-primary hover:bg-primary-dark text-primary-foreground w-full">
                  Request Call Back ➜
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;