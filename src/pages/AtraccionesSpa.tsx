import { SEOHead } from "@/components/SEOHead";
import Navigation from "@/components/navigation/Navigation";
import { AttractionCard } from "@/components/AttractionCard";
import { AttractionBreadcrumb } from "@/components/AttractionBreadcrumb";
import { spaRelax } from "@/data/attractions-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { navigateToSection } from "@/lib/utils";

const AtraccionesSpa = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Spa & Relax - YCC Water Park"
        description="Renueva cuerpo y mente con nuestros 6 tratamientos de spa: exfoliación, masajes, sauna, limpieza facial y más. Bienestar y relajación garantizados."
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <AttractionBreadcrumb categoryName="Spa & Relax" />
        
        {/* Hero Section */}
        <section className="relative pb-16 px-4 bg-gradient-to-b from-purple-500/5 via-pink-500/5 to-background">
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
              <div className="inline-block mb-4">
                <Sparkles className="w-16 h-16 text-purple-500 mx-auto" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Spa & Relax
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Renueva tu cuerpo y mente con nuestros exclusivos tratamientos de spa. 
                Bienestar, relajación y cuidado profesional en un ambiente único.
              </p>
            </div>
          </div>
        </section>

        {/* Treatments Grid - Layout Elegante 2 Columnas */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {spaRelax.map((treatment, index) => (
                <AttractionCard
                  key={index}
                  name={treatment.name}
                  description={treatment.description}
                  image={treatment.image}
                  duration={treatment.duration}
                  capacity={treatment.capacity}
                  badge={treatment.badge}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Beneficios del Spa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🧘</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Relajación</h3>
                <p className="text-muted-foreground">
                  Reduce el estrés y la tensión muscular
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💆</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Bienestar</h3>
                <p className="text-muted-foreground">
                  Mejora la circulación y oxigenación
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Renovación</h3>
                <p className="text-muted-foreground">
                  Piel radiante y cuerpo revitalizado
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Reserva tu Experiencia de Relajación
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Agenda tu visita y descubre el bienestar que mereces
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

export default AtraccionesSpa;
