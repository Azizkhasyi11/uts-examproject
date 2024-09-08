import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Hero from "./Hero";
import Testimonial from "./testimonial";
import Highlights from "./highlights";
import Features from "./features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <Testimonial />
      <Footer />
    </>
  );
}
