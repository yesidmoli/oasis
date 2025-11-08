import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, MapPin } from "lucide-react";

const OrderSection = () => {
  const phoneNumber = "573164485701";
  const whatsappMessage = encodeURIComponent("¡Hola Oasis! Quiero hacer un pedido de helados 🍦");

  return (
    <section className="py-20 bg-gradient-tropical relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-playful font-bold text-primary mb-4">
              ¡Haz tu pedido ahora! 📞
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Contacta con nosotros por WhatsApp y recibe tus helados frescos
            </p>
            
            <div className="inline-flex items-center gap-3 bg-[#25D366]/10 border-2 border-[#25D366] px-8 py-4 rounded-full mb-8">
              <MessageCircle className="h-8 w-8 text-[#25D366]" />
              <span className="text-3xl font-playful font-bold text-[#25D366]">
                316 448 5701
              </span>
            </div>
            
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-playful text-xl px-10 py-7 rounded-full shadow-xl hover-lift"
              asChild
            >
              <a 
                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Abrir WhatsApp
              </a>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-2xl">
              <div className="bg-tropical-turquoise p-3 rounded-full">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-playful font-semibold text-lg mb-1">Horarios</h3>
                <p className="text-muted-foreground">
                  Lunes a Domingo<br />
                  10:00 AM - 8:00 PM
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-2xl">
              <div className="bg-secondary p-3 rounded-full">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-playful font-semibold text-lg mb-1">Delivery</h3>
                <p className="text-muted-foreground">
                  Entregas rápidas<br />
                  en toda la ciudad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
