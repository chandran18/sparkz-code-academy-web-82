import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Star } from "lucide-react";

const Results = () => {
  const topPerformers = [
    { name: "ISHA", score: "98%", achievement: "Outstanding Performance", image: "/placeholder.svg" },
    { name: "PRIYA", score: "95%", achievement: "Excellent Results", image: "/placeholder.svg" },
    { name: "KEERTHI", score: "94%", achievement: "Top Scorer", image: "/placeholder.svg" },
    { name: "ANITHA", score: "93%", achievement: "Merit Certificate", image: "/placeholder.svg" },
    { name: "RAJESH", score: "92%", achievement: "Distinguished Performance", image: "/placeholder.svg" },
    { name: "KAVYA", score: "91%", achievement: "Honors Graduate", image: "/placeholder.svg" },
  ];

  const stats = [
    { number: "5K+", label: "Students Enrolled" },
    { number: "10K+", label: "Classes Completed" },
    { number: "20+", label: "Top Instructors" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Banner Section */}
      <section className="pt-32 pb-16 bg-gradient-hero bg-geometric">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Our Results
          </h1>
          <nav className="text-gray-600">
            <span>Home</span> <span className="mx-2">&gt;</span> <span className="text-primary">Our Results</span>
          </nav>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Meet Our Star Performers Who Made It Big
          </p>
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

      {/* Call to Action for Registration */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Be part of our amazing results and start your journey to becoming a certified medical coding professional
            </p>
            <a href="/registration">
              <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg">
                Register Now for Courses
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Results;