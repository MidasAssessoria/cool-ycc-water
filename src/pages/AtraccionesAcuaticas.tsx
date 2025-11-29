import { SEOHead } from "@/components/SEOHead";
import Navigation from "@/components/navigation/Navigation";
import { AttractionCard } from "@/components/AttractionCard";
import { AquaticsBreadcrumb } from "@/components/AquaticsBreadcrumb";
import { AnimatedSwimmerIcon } from "@/components/aquatics/AnimatedSwimmerIcon";
import { StatsBadges } from "@/components/aquatics/StatsBadges";
import { WaveDecoration } from "@/components/aquatics/WaveDecoration";
import { FloatingDrops } from "@/components/aquatics/FloatingDrops";
import { atraccionesAcuaticas } from "@/data/attractions-data";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
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
        <AquaticsBreadcrumb />
        
        {/* Hero Section */}
        <section className="relative pt-8 pb-20 md:pt-12 md:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
          <FloatingDrops />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center space-y-8 md:space-y-10">
              <div className="flex justify-center">
                <AnimatedSwimmerIcon />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4 bg-gradient-to-r from-deepblue to-primary bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(59,130,246,0.3)]">
                Atracciones Acuáticas
              </h1>
              <StatsBadges />
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto px-4 leading-relaxed">
                Disfruta de nuestras 12 atracciones acuáticas diseñadas para toda la familia. 
                Desde emocionantes toboganes hasta relajantes piscinas.
              </p>
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/80 backdrop-blur-sm border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <MapPin className="w-5 h-5" />
                  Ver no Mapa
                </Button>
              </div>
            </div>
          </div>
          <WaveDecoration />
        </section>

        {/* Attractions Grid */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {atraccionesAcuaticas.map((attraction, index) => (
                <AttractionCard
                  key={index}
                  name={attraction.name}
                  description={attraction.description}
                  image={attraction.image}
                  duration={attraction.duration}
                  capacity={attraction.capacity}
                  badge={attraction.badge}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground px-4">
              ¿Listo para la Diversión?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4 max-w-2xl mx-auto">
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
