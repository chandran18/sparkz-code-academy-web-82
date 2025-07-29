import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Phone, MessageCircle, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Enrollment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6 opacity-90">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/courses" className="hover:text-blue-200 transition-colors">Courses</Link>
            <span className="mx-2">/</span>
            <span>Enrollment</span>
          </nav>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Start Your Enrollment</h1>
            <p className="text-lg md:text-xl opacity-90 mb-6 max-w-3xl mx-auto">
              Take the first step towards your medical coding career. Choose your preferred enrollment method below.
            </p>
          </div>
        </div>
      </section>

      {/* Enrollment Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Online Form */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">Online Application Form</CardTitle>
                <CardDescription>
                  Fill out our comprehensive online enrollment form with course selection and personal details.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a 
                  href="https://forms.gle/1XEsfKj1P5hBBk6t9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button className="w-full group-hover:bg-primary-dark transition-colors">
                    Fill Application Form
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-3">
                  Secure online form • Takes 5-10 minutes
                </p>
              </CardContent>
            </Card>

            {/* WhatsApp Contact */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">WhatsApp Assistance</CardTitle>
                <CardDescription>
                  Get instant help and guidance from our admission counselors via WhatsApp.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a 
                  href="https://wa.me/919582258292" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Chat on WhatsApp
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-3">
                  +91 95822 58292 • Instant response
                </p>
              </CardContent>
            </Card>

            {/* Phone Call */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">Direct Phone Call</CardTitle>
                <CardDescription>
                  Speak directly with our admission team for personalized guidance and course recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a href="tel:+917904557490" className="inline-block w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Call Now
                    <Phone className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-3">
                  +91 79045 57490 • Mon-Sat 9AM-7PM
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-primary mb-4">
                  Learn More About Our Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  
                  {/* YouTube Channel */}
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <Youtube className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Watch Our Videos</h3>
                    <p className="text-muted-foreground mb-4">
                      Explore our YouTube channel for course previews, student testimonials, and career guidance.
                    </p>
                    <a 
                      href="https://www.youtube.com/channel/UCNJJ-j7gVqu13-MeALnmjuA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                        Visit YouTube Channel
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>

                  {/* Quick Facts */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Why Choose NexXgen?</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>100% Job Placement Assistance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Industry Expert Trainers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Flexible Payment Plans (EMI Available)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Live + Recorded Classes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>AAPC & AHIMA Certification Prep</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back to Courses */}
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button variant="outline" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enrollment;