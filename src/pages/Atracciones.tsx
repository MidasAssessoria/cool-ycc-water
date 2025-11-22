import { SEOHead } from "@/components/SEOHead";
import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/data/attractions-data";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import { Waves, Sparkles } from "lucide-react";

const Atracciones = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (slug: string) => {
    if (slug === 'bungalows') {
      navigate('/bungalows');
    } else {
      navigate(`/atracciones/${slug}`);
    }
  };

  return (
    <>
      <SEOHead 
        title="Atracciones - YCC Water Park"
        description="Descubre todas las atracciones acuáticas, deportes, spa, gastronomía y zona kids del YCC Water Park. Diversión y relajación para toda la familia."
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 opacity-10">
            <Waves className="w-32 h-32 text-primary" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-10">
            <Sparkles className="w-24 h-24 text-secondary" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Nuestras <span className="text-primary">Atracciones</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explora un mundo de diversión, relajación y aventura. 
                Desde emocionantes toboganes acuáticos hasta tratamientos de spa de lujo.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                  <div className="text-3xl font-bold text-primary mb-1">12</div>
                  <div className="text-sm text-muted-foreground">Atracciones Acuáticas</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                  <div className="text-3xl font-bold text-primary mb-1">8</div>
                  <div className="text-sm text-muted-foreground">Deportes</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                  <div className="text-3xl font-bold text-primary mb-1">6</div>
                  <div className="text-sm text-muted-foreground">Tratamientos Spa</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                  <div className="text-3xl font-bold text-primary mb-1">5</div>
                  <div className="text-sm text-muted-foreground">Zonas Kids</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  name={category.name}
                  description={category.description}
                  heroImage={category.heroImage}
                  icon={category.icon}
                  color={category.color}
                  totalAttractions={category.totalAttractions}
                  onClick={() => handleCategoryClick(category.slug)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ¿Listo para la aventura?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agenda tu visita y descubre todo lo que YCC Water Park tiene para ofrecer
            </p>
            <button
              onClick={() => navigate('/#plan-visit-form')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all hover:scale-105"
            >
              Agendar Visita
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Atracciones;
