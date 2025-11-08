import IceCreamCard from "./IceCreamCard";

const iceCreamFlavors = [
  {
    name: "Fresa y Crema",
    description: "Deliciosa combinación de fresas frescas con crema suave",
    imageUrl: "/Oasis Screan/Fresacrema.png",
    color: "#FF69B4",
  },
  {
    name: "Maní",
    description: "Cremoso helado con el irresistible sabor del maní",
    imageUrl: "/Oasis Screan/Mani.png",
    color: "#8B4513",
  },
  {
    name: "Coco",
    description: "Refrescante sabor tropical de coco natural",
    imageUrl: "/Oasis Screan/coco.png",
    color: "#8B6F47",
  },
  {
    name: "Aguacate",
    description: "Único y cremoso, perfecto para los amantes de lo diferente",
    imageUrl: "/Oasis Screan/aguacate.png",
    color: "#90EE90",
  },
  {
    name: "Queso y Bocadillo",
    description: "La tradicional combinación colombiana en helado",
    imageUrl: "/Oasis Screan/quesoboca.png",
    color: "#CD853F",
  },
  {
    name: "Arequipe",
    description: "Dulce de leche cremoso que derrite tu corazón",
    imageUrl: "/Oasis Screan/arequipe.png",
    color: "#D2691E",
  },
  {
    name: "Maracuyá",
    description: "Explosión tropical de sabor ácido y refrescante",
    imageUrl: "/Oasis Screan/maracuya.png",
    color: "#FFD700",
  },
  {
    name: "Mora",
    description: "Intenso y delicioso sabor de moras naturales",
    imageUrl: "/Oasis Screan/mora.png",
    color: "#8B008B",
  },
];

const Catalog = () => {
  return (
    <section id="catalogo" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playful font-bold text-primary mb-4">
            Helados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestros deliciosos sabores artesanales, hechos con ingredientes naturales y mucho amor
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {iceCreamFlavors.map((flavor, index) => (
            <div 
              key={flavor.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <IceCreamCard {...flavor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
