import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "573164485701";
  const whatsappMessage = encodeURIComponent("¡Hola Oasis! Quiero hacer un pedido 🍦");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Button
        size="lg"
        className="rounded-full w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl animate-pulse-glow group-hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl">
          ¡Haz tu pedido!
          <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
