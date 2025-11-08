import IceCreamCard from "./IceCreamCard";

const iceCreamFlavors = [
  {
    name: "Fresa y Crema",
    description: "Deliciosa combinación de fresas frescas con crema suave",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
    color: "#FF69B4",
  },
  {
    name: "Maní",
    description: "Cremoso helado con el irresistible sabor del maní",
    imageUrl: "https://images.unsplash.com/photo-1633933358116-a27b902fad35?w=400",
    color: "#8B4513",
  },
  {
    name: "Coco",
    description: "Refrescante sabor tropical de coco natural",
    imageUrl: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400",
    color: "#F5F5DC",
  },
  {
    name: "Aguacate",
    description: "Único y cremoso, perfecto para los amantes de lo diferente",
    imageUrl: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400",
    color: "#90EE90",
  },
  {
    name: "Queso y Bocadillo",
    description: "La tradicional combinación colombiana en helado",
    imageUrl: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400",
    color: "#FFE4B5",
  },
  {
    name: "Arequipe",
    description: "Dulce de leche cremoso que derrite tu corazón",
    imageUrl: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=400",
    color: "#D2691E",
  },
  {
    name: "Maracuyá",
    description: "Explosión tropical de sabor ácido y refrescante",
    imageUrl: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400",
    color: "#FFD700",
  },
  {
    name: "Mora",
    description: "Intenso y delicioso sabor de moras naturales",
    imageUrl: "https://images.unsplash.com/photo-1560008581-09b22e518f5d?w=400",
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
