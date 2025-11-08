import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface IceCreamCardProps {
  name: string;
  description?: string;
  imageUrl: string;
  color: string;
}

const IceCreamCard = ({ name, description, imageUrl, color }: IceCreamCardProps) => {
  const phoneNumber = "573164485701";
  const whatsappMessage = encodeURIComponent(`Hola Oasis, quiero pedir un helado de ${name} 🍧`);

  return (
    <div className="group relative">
      <div 
        className="bg-card rounded-3xl p-6 shadow-lg hover-lift border-2 border-border overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
        }}
      >
        {/* Floating background element */}
        <div 
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-2xl transition-all group-hover:scale-150"
          style={{ backgroundColor: color }}
        ></div>
        
        <div className="relative z-10">
          {/* Image Container */}
          <div className="mb-4 flex justify-center animate-float-slow group-hover:animate-bounce-subtle">
            <div className="relative">
              <img 
                src={imageUrl} 
                alt={`Helado de ${name}`}
                className="w-48 h-48 object-contain drop-shadow-2xl"
              />
              {/* Drip effect */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-8 rounded-full opacity-0 group-hover:opacity-60 transition-opacity"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="text-center">
            <h3 
              className="text-2xl font-playful font-bold mb-2"
              style={{ color: color }}
            >
              {name}
            </h3>
            {description && (
              <p className="text-muted-foreground text-sm mb-4">
                {description}
              </p>
            )}
            
            <Button
              className="w-full rounded-full font-playful hover-lift"
              style={{
                backgroundColor: color,
                color: 'white',
              }}
              asChild
            >
              <a 
                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Pedir este sabor
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IceCreamCard;
