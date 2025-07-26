import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, Download, Share2, CheckCircle } from "lucide-react";

const CourseDetail = () => {
  const { courseId } = useParams();

  // Course data mapping
  const courseData: Record<string, any> = {
    bmct: {
      title: "Basic Medical Coding Training (BMCT)",
      duration: "45 Days",
      mode: "Online / Offline",
      rating: 4.8,
      fee: "₹15,000",
      description: "Comprehensive introduction to medical coding fundamentals covering anatomy, physiology, and basic coding principles."
    },
    cpc: {
      title: "CPC Certification Training",
      duration: "60 Days", 
      mode: "Online / Offline",
      rating: 4.9,
      fee: "₹20,000",
      description: "Professional CPC certification training with hands-on practice and exam preparation."
    },
    cmct: {
      title: "Comprehensive Medical Coding Training (CMCT)",
      duration: "90 Days",
      mode: "Online / Offline", 
      rating: 4.9,
      fee: "₹25,000",
      description: "Complete medical coding program covering all aspects from basics to advanced specializations."
    },
    ipdrg: {
      title: "IPDRG Speciality Training",
      duration: "30 Days",
      mode: "Online",
      rating: 4.7,
      fee: "₹12,000",
      description: "Specialized training in Inpatient Diagnosis Related Groups for hospital coding."
    },
    em: {
      title: "E&M Speciality Training", 
      duration: "30 Days",
      mode: "Online",
      rating: 4.8,
      fee: "₹12,000",
      description: "Focused training on Evaluation and Management coding for physician services."
    },
    ed: {
      title: "ED Speciality Training",
      duration: "30 Days", 
      mode: "Online",
      rating: 4.7,
      fee: "₹12,000",
      description: "Emergency Department coding specialization with case studies and practical scenarios."
    },
    crc: {
      title: "Certified Risk Adjustment Coder (CRC)",
      duration: "45 Days",
      mode: "Online / Offline",
      rating: 4.8,
      fee: "₹18,000", 
      description: "Specialized training in risk adjustment coding for healthcare quality and payment systems."
    },
    ccs: {
      title: "Certified Coding Specialist (CCS)",
      duration: "75 Days",
      mode: "Online / Offline",
      rating: 4.9,
      fee: "₹22,000",
      description: "Advanced hospital-based coding certification focusing on ICD-10-CM/PCS systems."
    }
  };

  const course = courseData[courseId || 'bmct'];

  const benefits = [
    "Industry-relevant certification",
    "100% placement support", 
    "Personalized mentorship",
    "Live doubt resolution sessions",
    "Free study materials",
    "Mock exams and assessments"
  ];

  const courseContent = [
    "Medical Terminology & Anatomy",
    "ICD-10-CM/PCS Coding Systems", 
    "CPT and HCPCS Coding",
    "Medical Chart Reading",
    "Coding Guidelines & Compliance",
    "Practical Coding Exercises"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Course Banner */}
      <section className="pt-32 pb-16 bg-gradient-hero bg-geometric">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                {course.title}
              </h1>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-gray-600">{course.mode}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-gray-600">{course.rating}/5</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-primary hover:bg-primary-dark text-white px-6 py-2">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" className="px-6 py-2">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">{course.fee}</div>
                <p className="text-gray-600">Course Fee</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mode:</span>
                  <span className="font-semibold">{course.mode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating:</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                    <span className="font-semibold">{course.rating}/5</span>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary-dark text-white py-3 text-lg">
                Enroll Now ➜
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Description</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {course.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This comprehensive training program is designed to provide you with the essential 
                  skills and knowledge required to excel in medical coding. Our expert instructors 
                  bring years of industry experience to ensure you receive practical, hands-on training.
                </p>
              </div>

              {/* What You'll Learn */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courseContent.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who is this course for */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Is This Course For?</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Recent graduates looking to start a career in healthcare</li>
                  <li>• Healthcare professionals seeking certification</li>
                  <li>• Career switchers interested in medical coding</li>
                  <li>• Students pursuing healthcare administration</li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Image */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Get In Touch</h3>
                  <Button className="w-full bg-success hover:bg-success/90 text-white">
                    WhatsApp Us
                  </Button>
                </div>
              </div>

              {/* Course Features */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Course Features</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>✓ Live online classes</li>
                  <li>✓ Recorded sessions access</li>
                  <li>✓ Industry expert instructors</li>
                  <li>✓ Certification upon completion</li>
                  <li>✓ Job placement assistance</li>
                  <li>✓ 24/7 doubt support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;