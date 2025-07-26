import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index";
import About from "./pages/About";
import Career from "./pages/Career";
import Gallery from "./pages/Gallery";
import Results from "./pages/Results";
import Contact from "./pages/Contact";
import CourseDetail from "./pages/CourseDetail";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <PageTransition>
              <Index />
            </PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition>
              <About />
            </PageTransition>
          } />
          <Route path="/career" element={
            <PageTransition>
              <Career />
            </PageTransition>
          } />
          <Route path="/gallery" element={
            <PageTransition>
              <Gallery />
            </PageTransition>
          } />
          <Route path="/results" element={
            <PageTransition>
              <Results />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } />
          <Route path="/courses" element={
            <PageTransition>
              <CourseDetail />
            </PageTransition>
          } />
          <Route path="/courses/:courseId" element={
            <PageTransition>
              <CourseDetail />
            </PageTransition>
          } />
          <Route path="/registration" element={
            <PageTransition>
              <Registration />
            </PageTransition>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
