import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Catalog />
      <Locations />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
