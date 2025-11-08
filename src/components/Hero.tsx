import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import oasisLogo from "@/assets/oasis-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const phoneNumber = "573164485701";
  const whatsappMessage = encodeURIComponent("¡Hola Oasis! Quiero hacer un pedido de helados cremosos 🍦");

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-secondary/70 to-tropical-turquoise/60"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-tropical-sun/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-20 w-24 h-24 bg-tropical-turquoise/30 rounded-full blur-xl animate-float-slow"></div>
      <div className="absolute top-40 right-32 w-20 h-20 bg-secondary/30 rounded-full blur-xl animate-bounce-subtle"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex justify-center mb-8 animate-float-slow">
          <div className="relative">
            {/* Glow effect background */}
            <div className="absolute inset-0 bg-white/40 rounded-full blur-3xl scale-110 animate-pulse-glow"></div>
            
            {/* Logo with multiple shadows */}
            <img 
              src={oasisLogo} 
              alt="Oasis Helados Cremosos Logo" 
              className="relative z-10 w-64 h-64 md:w-80 md:h-80"
              style={{
                filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 80px rgba(62, 218, 215, 0.4))',
              }}
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-playful font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
          Refresca tu día con el sabor
          <span className="block text-tropical-cream mt-2">de un Oasis 🍦</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
          Helados artesanales cremosos con los sabores más exóticos y deliciosos
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-tropical-palm hover:bg-tropical-palm/90 text-white font-playful text-lg px-8 py-6 rounded-full shadow-xl hover-lift"
            asChild
          >
            <a 
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Haz tu pedido ahora
            </a>
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary font-playful text-lg px-8 py-6 rounded-full shadow-xl hover-lift"
            onClick={() => {
              document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver Sabores
          </Button>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-3 text-white">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <MessageCircle className="h-5 w-5" />
            <span className="font-playful font-semibold">316 448 5701</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
