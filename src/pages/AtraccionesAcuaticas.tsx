import { SEOHead } from "@/components/SEOHead";
import Navigation from "@/components/navigation/Navigation";
import { AttractionCard } from "@/components/AttractionCard";
import { AttractionBreadcrumb } from "@/components/AttractionBreadcrumb";
import { atraccionesAcuaticas } from "@/data/attractions-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { navigateToSection } from "@/lib/utils";

const AtraccionesAcuaticas = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Atracciones Acuáticas - YCC Water Park"
        description="Descubre nuestras 12 atracciones acuáticas: piscinas recreativas, toboganes, río lento, piscina de olas y más. Diversión garantizada para toda la familia."
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <AttractionBreadcrumb categoryName="Atracciones Acuáticas" />
        
        {/* Hero Section */}
        <section className="relative pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate('/atracciones')}
              className="mb-6 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Atracciones
            </Button>
            
            <div className="text-center mb-12">
              <div className="inline-block text-6xl mb-4">🌊</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Atracciones Acuáticas
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Disfruta de nuestras 12 atracciones acuáticas diseñadas para toda la familia. 
                Desde emocionantes toboganes hasta relajantes piscinas.
              </p>
            </div>
          </div>
        </section>

        {/* Attractions Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {atraccionesAcuaticas.map((attraction, index) => (
                <AttractionCard
                  key={index}
                  name={attraction.name}
                  description={attraction.description}
                  image={attraction.image}
                  icon={attraction.icon}
                  duration={attraction.duration}
                  capacity={attraction.capacity}
                  badge={attraction.badge}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Listo para la Diversión?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Agenda tu visita guiada y descubre todas nuestras atracciones acuáticas
            </p>
            <Button
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                setTimeout(() => navigateToSection('plan-visit-form', 80), 100);
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Visita Guiada
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AtraccionesAcuaticas;
