import Navigation from "@/components/navigation/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { AttractionCard } from "@/components/AttractionCard";
import { AttractionBreadcrumb } from "@/components/AttractionBreadcrumb";
import { deportes } from "@/data/attractions-data";
import { Button } from "@/components/ui/button";
import { Trophy, Dumbbell, Heart, Zap } from "lucide-react";

const AtraccionesDeportes = () => {
  return (
    <>
      <SEOHead 
        title="Deportes - YCC Water Park"
        description="Descubre nuestras 8 modalidades deportivas: fútbol, voleybol, basketball, tenis, padel, natación, crossfit y gimnasio. Mantente activo mientras disfrutas."
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <AttractionBreadcrumb categoryName="Deportes" />
        
        {/* Hero Section */}
        <section className="relative pb-20 bg-gradient-to-br from-green-500/10 via-background to-emerald-500/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <Trophy className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-green-500">Deportes</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Mantente Activo
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
                  Mientras Te Diviertes
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                8 modalidades deportivas con instalaciones profesionales. Desde deportes de equipo 
                hasta entrenamientos personales, tenemos todo para tu actividad física.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-background border border-border/50">
                <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="font-bold text-2xl mb-1">8</h3>
                <p className="text-sm text-muted-foreground">Modalidades Deportivas</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-background border border-border/50">
                <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="font-bold text-2xl mb-1">100+</h3>
                <p className="text-sm text-muted-foreground">Equipos Profesionales</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-background border border-border/50">
                <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="font-bold text-2xl mb-1">24/7</h3>
                <p className="text-sm text-muted-foreground">Gimnasio Disponible</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-background border border-border/50">
                <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="font-bold text-2xl mb-1">Pro</h3>
                <p className="text-sm text-muted-foreground">Instructores Certificados</p>
              </div>
            </div>
          </div>
        </section>

        {/* Attractions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nuestras Instalaciones Deportivas
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {deportes.length} modalidades para mantenerte en forma y activo
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {deportes.map((attraction) => (
                <AttractionCard key={attraction.id} {...attraction} />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-green-500/5 via-background to-emerald-500/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Beneficios de Nuestras Instalaciones
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Equipamiento Profesional</h3>
                    <p className="text-muted-foreground text-sm">
                      Instalaciones y equipos de última generación para tu mejor rendimiento
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Dumbbell className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Clases Grupales</h3>
                    <p className="text-muted-foreground text-sm">
                      Entrenamientos guiados por instructores certificados
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Ambiente Familiar</h3>
                    <p className="text-muted-foreground text-sm">
                      Actividades deportivas para todas las edades
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Horarios Flexibles</h3>
                    <p className="text-muted-foreground text-sm">
                      Acceso disponible durante todo el horario del parque
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Listo para Activarte?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Entrena, juega y diviértete en nuestras instalaciones deportivas de primera clase
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Reservar Cancha
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Ver Horarios
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AtraccionesDeportes;
