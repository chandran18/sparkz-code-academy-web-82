import { Facebook, Instagram, Linkedin, Youtube, CheckCircle } from "lucide-react";

const Footer = () => {
  const courses = [
    "CPC Certification - 60 Days",
    "IPDRG Training - 30 Days", 
    "CRC Certification - 45 Days",
    "CCS Training - 75 Days",
    "Basic Medical Coding - 45 Days",
    "E&M Speciality - 30 Days",
    "ED Speciality - 30 Days",
    "Comprehensive Training - 90 Days"
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary opacity-90"></div>
      <div className="absolute inset-0 bg-dots opacity-20"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Company Tagline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary via-secondary-light to-secondary bg-clip-text text-transparent">
              Be Educated! Feel Empowered!
            </span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Your journey to becoming a certified medical coder starts here
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo + Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/599dbea7-cb8e-4927-9f35-3946214389bd.png" 
                alt="Nexgen Healthcare Solutions" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-secondary">
                  Ne<span className="text-primary-foreground">X</span>gen Healthcare
                </h3>
                <p className="text-xs text-primary-foreground/70">Solutions</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Nexgen Healthcare Solutions is a trusted name in medical coding training, helping students become certified professionals with career-ready skills.
            </p>
            <p className="text-secondary font-semibold italic">
              "Training Coders. Transforming Careers."
            </p>
          </div>

          {/* Column 2 - Courses Offered */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Courses Offered</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                  <a 
                    href="/courses" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm leading-relaxed"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info + Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              {/* Phone */}
              <div>
                <p className="font-medium text-secondary mb-1">Call/WhatsApp:</p>
                <p className="text-primary-foreground/80 text-sm">
                  <a href="tel:+919582258292" className="hover:text-secondary transition-colors">+91 95822 58292</a>,{" "}
                  <a href="tel:+918525894771" className="hover:text-secondary transition-colors">+91 85258 94771</a>
                </p>
              </div>

              {/* Email */}
              <div>
                <p className="font-medium text-secondary mb-1">Email:</p>
                <p className="text-primary-foreground/80 text-sm">
                  <a href="mailto:Nexgenhealthcare@gmail.com" className="hover:text-secondary transition-colors">
                    Nexgenhealthcare@gmail.com
                  </a>
                </p>
              </div>

              {/* Social Media */}
              <div>
                <p className="font-medium text-secondary mb-3">Follow Us:</p>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/nexgen.healthcare?igsh=ZHFhNmE3YWNjNzNv" target="_blank" rel="noopener noreferrer" className="group">
                    <Instagram className="h-6 w-6 text-pink-400 hover:text-pink-300 cursor-pointer transition-all duration-300 hover:scale-110 group-hover:animate-pulse" />
                  </a>
                  <a href="https://www.linkedin.com/company/nexgenhealthcoding/" target="_blank" rel="noopener noreferrer" className="group">
                    <Linkedin className="h-6 w-6 text-blue-400 hover:text-blue-300 cursor-pointer transition-all duration-300 hover:scale-110 group-hover:animate-pulse" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCNJJ-j7gVqu13-MeALnmjuA" target="_blank" rel="noopener noreferrer" className="group">
                    <Youtube className="h-6 w-6 text-red-400 hover:text-red-300 cursor-pointer transition-all duration-300 hover:scale-110 group-hover:animate-pulse" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Nexgen Healthcare Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
