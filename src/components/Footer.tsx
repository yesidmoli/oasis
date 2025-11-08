import { Instagram, Facebook, MessageCircle } from "lucide-react";
import oasisLogo from "@/assets/oasis-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "573164485701";

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <img 
              src={oasisLogo} 
              alt="Oasis Logo" 
              className="w-32 h-32 mx-auto md:mx-0 mb-4"
            />
            <p className="text-sm opacity-90">
              Helados artesanales cremosos con los sabores más exóticos
            </p>
          </div>
          
          {/* Contact */}
          <div className="text-center">
            <h3 className="font-playful font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-2">
              <a 
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:text-tropical-sun transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>316 448 5701</span>
              </a>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="font-playful font-semibold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-4 justify-center md:justify-end">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover-lift"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover-lift"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all hover-lift"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {currentYear} Oasis Helados Cremosos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
