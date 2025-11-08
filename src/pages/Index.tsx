import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import OrderSection from "@/components/OrderSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Catalog />
      <OrderSection />
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
