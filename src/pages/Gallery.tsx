import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: "/placeholder.svg", alt: "Student Success Story", category: "events" },
    { id: 2, src: "/placeholder.svg", alt: "Workshop Session", category: "workshops" },
    { id: 3, src: "/placeholder.svg", alt: "Campus Life", category: "student-life" },
    { id: 4, src: "/placeholder.svg", alt: "Certification Ceremony", category: "events" },
    { id: 5, src: "/placeholder.svg", alt: "Online Training", category: "workshops" },
    { id: 6, src: "/placeholder.svg", alt: "Study Group", category: "student-life" },
    { id: 7, src: "/placeholder.svg", alt: "Guest Lecture", category: "events" },
    { id: 8, src: "/placeholder.svg", alt: "Practical Session", category: "workshops" },
    { id: 9, src: "/placeholder.svg", alt: "Campus Tour", category: "student-life" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Banner Section */}
      <section className="pt-32 pb-16 bg-gradient-hero bg-geometric">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Gallery
          </h1>
          <nav className="text-gray-600">
            <span>Home</span> <span className="mx-2">&gt;</span> <span className="text-primary">Gallery</span>
          </nav>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 mb-8">
              Explore our gallery and register for courses to start your medical coding journey
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

export default Gallery;