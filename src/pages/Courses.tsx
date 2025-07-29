import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const coursesData = [
  {
    id: "bmct",
    title: "Basic Medical Coding Training (BMCT)",
    duration: "35 Days",
    mode: "Classroom / Online Training",
    description: "Comprehensive foundation course covering essential medical coding principles, anatomy, and basic ICD-10-CM coding skills for beginners.",
    image: "/placeholder.svg",
    category: "Foundation"
  },
  {
    id: "amct",
    title: "Advance Medical Coding Training (AMCT)",
    duration: "60 Days",
    mode: "Online Training",
    description: "Advanced coding techniques, complex case studies, and specialized coding scenarios for experienced professionals.",
    image: "/placeholder.svg",
    category: "Advanced"
  },
  {
    id: "cpc",
    title: "CPC - Certified Professional Coder Certification Training (AAPC)",
    duration: "90 Days",
    mode: "Classroom / Online Training",
    description: "Complete AAPC CPC certification preparation with exam strategies, practice tests, and professional coding standards.",
    image: "/placeholder.svg",
    category: "Certification"
  },
  {
    id: "cmct",
    title: "Comprehensive Medical Coding Training (CMCT)",
    duration: "120 Days",
    mode: "Online Training",
    description: "All-inclusive medical coding program covering multiple specialties, certifications, and industry best practices.",
    image: "/placeholder.svg",
    category: "Comprehensive"
  },
  {
    id: "ipdrg",
    title: "IPDRG - In-Patient Diagnosis-Related Group Training",
    duration: "45 Days",
    mode: "Online Training",
    description: "Specialized training in inpatient coding, DRG optimization, and hospital revenue cycle management.",
    image: "/placeholder.svg",
    category: "Specialty"
  },
  {
    id: "em",
    title: "Evaluation and Management Training (E&M)",
    duration: "30 Days",
    mode: "Classroom / Online Training",
    description: "Master E&M coding guidelines, documentation requirements, and audit-proof coding practices.",
    image: "/placeholder.svg",
    category: "Specialty"
  },
  {
    id: "cpma",
    title: "CPMA - Certified Professional Medical Auditor Training",
    duration: "75 Days",
    mode: "Online Training",
    description: "Professional medical auditing skills, compliance protocols, and quality assurance methodologies.",
    image: "/placeholder.svg",
    category: "Certification"
  },
  {
    id: "crc",
    title: "CRC - Certified Risk Adjustment Coder Training",
    duration: "60 Days",
    mode: "Online Training",
    description: "Risk adjustment coding expertise for Medicare Advantage, HCC coding, and quality metrics.",
    image: "/placeholder.svg",
    category: "Certification"
  },
  {
    id: "ccs",
    title: "CCS - Certified Coding Specialist Training",
    duration: "90 Days",
    mode: "Classroom / Online Training",
    description: "AHIMA CCS certification preparation with hospital coding, ICD-10-PCS, and advanced clinical scenarios.",
    image: "/placeholder.svg",
    category: "Certification"
  }
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Foundation", "Advanced", "Certification", "Specialty", "Comprehensive"];
  
  const filteredCourses = selectedCategory === "All" 
    ? coursesData 
    : coursesData.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Gradient */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6 opacity-90">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Courses</span>
          </nav>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">All Courses</h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Comprehensive medical coding training programs designed for your success
              </p>
            </div>
            <div className="text-center">
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-white/20 text-white border-white/30">
                {coursesData.length} Courses
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Course Filter Tabs */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:gap-6">
            {filteredCourses.map((course, index) => (
              <Card 
                key={course.id} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in border-0 shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Course Image */}
                    <div className="md:w-1/3 lg:w-1/4">
                      <div className="h-64 md:h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-l-lg flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <Users className="h-8 w-8 text-white" />
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {course.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    {/* Course Details */}
                    <div className="md:w-2/3 lg:w-3/4 p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                          <CardTitle className="text-xl md:text-2xl text-primary group-hover:text-blue-600 transition-colors">
                            {course.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-2 sm:mt-0">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium text-muted-foreground">
                              {course.duration}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <Globe className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-green-600 font-medium">
                            {course.mode}
                          </span>
                        </div>
                        
                        <CardDescription className="text-base leading-relaxed">
                          {course.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        <Link to={`/courses/${course.id}`}>
                          <Button 
                            variant="outline" 
                            className="group/btn hover:bg-primary hover:text-white transition-all duration-300"
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                          <p className="text-2xl font-bold text-primary">₹15,000</p>
                          <p className="text-xs text-muted-foreground">EMI available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Medical Coding Journey?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful medical coders who started their careers with NexXgen Healthcare Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enrollment">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Enroll Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;