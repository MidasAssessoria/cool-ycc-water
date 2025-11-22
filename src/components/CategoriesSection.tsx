import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/attractions-data";
import { useNavigate } from "react-router-dom";
import { Waves, Sparkles } from "lucide-react";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";

const CategoriesSection = () => {
  const navigate = useNavigate();
  const { elementRef: heroRef, isVisible: heroVisible } = useIntersectionAnimation({ threshold: 0.1 });
  const { elementRef: gridRef, isVisible: gridVisible } = useIntersectionAnimation({ threshold: 0.05 });

  const handleCategoryClick = (slug: string) => {
    navigate(`/atracciones/${slug}`);
  };

  return (
    <div className="bg-background py-16 md:py-24">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className={`relative pb-16 md:pb-20 overflow-hidden transition-all duration-700 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-10">
          <Waves className="w-24 h-24 text-primary" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <Sparkles className="w-20 h-20 text-secondary" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nuestras <span className="text-primary">Atracciones</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Explora un mundo de diversión, relajación y aventura. 
              Desde emocionantes toboganes acuáticos hasta tratamientos de spa de lujo.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div ref={gridRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`transition-all duration-700 ${
                gridVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: gridVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <CategoryCard
                name={category.name}
                description={category.description}
                heroImage={category.heroImage}
                icon={category.icon}
                color={category.color}
                totalAttractions={category.totalAttractions}
                onClick={() => handleCategoryClick(category.slug)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
