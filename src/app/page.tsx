import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Highlights from "./highlights";
import Features from "./features";
import Hero from "./hero";
import TestimonialSection from "./testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-white">
        <Highlights />
        <Features />
        <TestimonialSection />
        <Footer />
      </div>
    </>
  );
}
