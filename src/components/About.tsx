import { Sparkles, Heart, Leaf } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-tropical-sun rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-tropical-turquoise rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playful font-bold text-primary mb-4">
              Sobre Oasis
            </h2>
            <div className="w-24 h-1 bg-gradient-tropical mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-card rounded-3xl shadow-xl p-8 md:p-12 mb-8">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              <span className="font-playful font-semibold text-primary text-xl">Oasis Helados Cremosos</span> nace 
              del amor por crear momentos dulces y refrescantes. Somos una marca artesanal dedicada a elaborar 
              helados con <span className="text-tropical-orange font-semibold">ingredientes naturales</span> y 
              sabores únicos que te transportan a un verdadero oasis tropical.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Cada helado es preparado con dedicación y cariño, utilizando frutas frescas y recetas tradicionales 
              que resaltan los <span className="text-tropical-palm font-semibold">sabores auténticos</span> de 
              nuestra tierra. Desde el cremoso aguacate hasta la explosión tropical del maracuyá, cada bocado 
              es una experiencia refrescante.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 text-center shadow-lg hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tropical-sun/10 rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-tropical-sun" />
              </div>
              <h3 className="font-playful font-semibold text-lg mb-2">Artesanales</h3>
              <p className="text-muted-foreground text-sm">
                Elaborados con técnicas tradicionales y mucho cuidado
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 text-center shadow-lg hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-playful font-semibold text-lg mb-2">Con Amor</h3>
              <p className="text-muted-foreground text-sm">
                Cada helado es hecho con pasión y dedicación
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 text-center shadow-lg hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tropical-palm/10 rounded-full mb-4">
                <Leaf className="h-8 w-8 text-tropical-palm" />
              </div>
              <h3 className="font-playful font-semibold text-lg mb-2">Naturales</h3>
              <p className="text-muted-foreground text-sm">
                Ingredientes frescos y naturales en cada sabor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
