import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Linkedin, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Call: 7904557490</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>sparkzcp@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Facebook className="h-4 w-4 hover:text-primary cursor-pointer transition-colors" />
            <Instagram className="h-4 w-4 hover:text-primary cursor-pointer transition-colors" />
            <Linkedin className="h-4 w-4 hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            SPARKZ INFOTECH
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
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
            
            {/* Courses Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 font-medium text-gray-700 hover:text-primary transition-colors">
                <span>Courses</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 bg-white">
                {courses.map((course) => (
                  <DropdownMenuItem key={course.path} asChild>
                    <Link
                      to={course.path}
                      className="w-full px-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      {course.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

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

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-primary hover:bg-primary-dark text-white px-6 py-2">
              Request Call Back ➜
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-700 hover:text-primary">
                Home
              </Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-primary">
                About Us
              </Link>
              <div className="space-y-2">
                <div className="font-medium text-gray-700">Courses</div>
                <div className="pl-4 space-y-2">
                  {courses.map((course) => (
                    <Link
                      key={course.path}
                      to={course.path}
                      className="block text-sm text-gray-600 hover:text-primary"
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              </div>
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
              <Button className="bg-primary hover:bg-primary-dark text-white">
                Request Call Back ➜
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;