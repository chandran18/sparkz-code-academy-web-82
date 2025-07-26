import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, BookOpen, CheckCircle } from "lucide-react";

const About = () => {
  const stats = [
    { number: "5K+", label: "Students Enrolled" },
    { number: "10K+", label: "Classes Completed" },
    { number: "20+", label: "Top Instructors" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  const features = [
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "CPC Certified Trainers",
      description: "Learn from industry-certified professionals with 8+ years of experience"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      title: "Free Study Materials",
      description: "Comprehensive study materials and resources provided at no extra cost"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Exclusive Mock Exams",
      description: "Practice with real exam scenarios and get detailed performance feedback"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Banner Section */}
      <section className="pt-32 pb-16 bg-gradient-hero bg-geometric">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            About Us
          </h1>
          <nav className="text-gray-600">
            <span>Home</span> <span className="mx-2">&gt;</span> <span className="text-primary">About Us</span>
          </nav>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Provide Best Education Services For You.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                SPARKZ INFOTECH has established itself as a premier medical coding training institute 
                since its inception. We are committed to providing comprehensive, industry-relevant 
                training that prepares our students for successful careers in medical coding.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our institute combines theoretical knowledge with practical application, ensuring 
                that every student graduates with the skills and confidence needed to excel in 
                the rapidly growing healthcare industry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With our experienced faculty, modern teaching methodologies, and strong industry 
                connections, we have successfully trained thousands of medical coders who are 
                now working with leading healthcare organizations worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up">
              <img 
                src="/placeholder.svg" 
                alt="Students studying" 
                className="rounded-lg shadow-md hover-lift"
              />
              <img 
                src="/placeholder.svg" 
                alt="Online learning" 
                className="rounded-lg shadow-md hover-lift mt-8"
              />
              <img 
                src="/placeholder.svg" 
                alt="Certification" 
                className="rounded-lg shadow-md hover-lift -mt-8"
              />
              <img 
                src="/placeholder.svg" 
                alt="Success" 
                className="rounded-lg shadow-md hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover-lift">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide high-quality medical coding training with personalized strategies 
                that empower students to achieve their career goals and contribute meaningfully 
                to the healthcare industry.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md hover-lift">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading ISO certified medical coding training institute with 
                100% placement assistance, setting the benchmark for excellence in 
                healthcare education across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 stats-strip">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in-up">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Best Beneficial Side of Sparkzinfotech
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the preferred choice for medical coding education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-8 shadow-md hover-lift">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-cta text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Medical Coding Journey?</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <span className="font-semibold">Email:</span>
                <span className="ml-2">sparkzcp@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold">Phone:</span>
                <span className="ml-2">7904557490</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Our Students Say</h3>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <p className="text-gray-600 leading-relaxed mb-4">
                  "The training at SPARKZ INFOTECH was comprehensive and practical. The instructors 
                  were very supportive and helped me understand complex medical coding concepts 
                  with ease. I'm now successfully working as a certified medical coder."
                </p>
                <div className="flex items-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Ankita Malshikhare" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ankita Malshikhare</h4>
                    <p className="text-gray-600 text-sm">CPC Certified Graduate</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Students studying" 
                className="rounded-xl shadow-md hover-lift"
              />
              <div className="text-center mt-6">
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                  Learn more about the Campus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;