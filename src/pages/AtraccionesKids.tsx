import Navigation from "@/components/navigation/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { AttractionCard } from "@/components/AttractionCard";
import { AttractionBreadcrumb } from "@/components/AttractionBreadcrumb";
import { kidsZone } from "@/data/attractions-data";
import { Button } from "@/components/ui/button";
import { Baby, Shield, Heart, Sparkles, Star } from "lucide-react";

const AtraccionesKids = () => {
  return (
    <>
      <SEOHead 
        title="Kids Zone - YCC Water Park"
        description="Descubre nuestra zona infantil con 5 atracciones seguras y divertidas: Salón de Juegos, Castillo Infantil, Playa de Niños, Body Slide y Área de Rompecabezas."
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <AttractionBreadcrumb categoryName="Kids Zone" />
        
        {/* Hero Section */}
        <section className="relative pb-20 bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-orange-500/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
                <Baby className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-medium text-yellow-500">Kids Zone</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Diversión Segura para
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500">
                  Los Más Pequeños
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Una zona mágica diseñada especialmente para niños, con atracciones seguras, 
                supervisión constante y diversión sin límites. ¡Tu tranquilidad, su felicidad!
              </p>

              <div className="flex flex-wrap gap-3 justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-500">100% Seguro</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <Heart className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-500">Supervisado</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium text-purple-500">Educativo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
            🎈
          </div>
          <div className="absolute top-40 right-20 text-5xl opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
            ⭐
          </div>
          <div className="absolute bottom-20 left-1/4 text-4xl opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
            🌈
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gradient-to-r from-yellow-500/5 via-amber-500/5 to-orange-500/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-background border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Máxima Seguridad</h3>
                <p className="text-sm text-muted-foreground">
                  Instalaciones diseñadas con estándares de seguridad infantil
                </p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-background border-2 border-amber-500/20 hover:border-amber-500/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Personal Capacitado</h3>
                <p className="text-sm text-muted-foreground">
                  Equipo especializado en cuidado infantil
                </p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-background border-2 border-orange-500/20 hover:border-orange-500/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Diversión Educativa</h3>
                <p className="text-sm text-muted-foreground">
                  Juegos que estimulan el desarrollo y creatividad
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Attractions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Atracciones Infantiles
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {kidsZone.length} áreas diseñadas especialmente para la diversión de los más pequeños
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {kidsZone.map((attraction) => (
                <AttractionCard key={attraction.id} {...attraction} />
              ))}
            </div>
          </div>
        </section>

        {/* Age Groups Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-500/5 via-background to-amber-500/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Edades Recomendadas
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-background border-2 border-blue-500/20 text-center">
                  <div className="text-5xl mb-4">👶</div>
                  <h3 className="font-bold text-xl mb-2">2-4 años</h3>
                  <p className="text-sm text-muted-foreground">
                    Playa de Niños, Área de Rompecabezas
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-background border-2 border-green-500/20 text-center">
                  <div className="text-5xl mb-4">🧒</div>
                  <h3 className="font-bold text-xl mb-2">5-8 años</h3>
                  <p className="text-sm text-muted-foreground">
                    Castillo Infantil, Body Slide, Salón de Juegos
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-background border-2 border-purple-500/20 text-center">
                  <div className="text-5xl mb-4">👦</div>
                  <h3 className="font-bold text-xl mb-2">9-12 años</h3>
                  <p className="text-sm text-muted-foreground">
                    Todas las atracciones + Áreas acuáticas principales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Info */}
        <section className="py-16 bg-blue-500/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="w-16 h-16 text-blue-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Tu Tranquilidad es Nuestra Prioridad
              </h3>
              <p className="text-muted-foreground mb-6">
                Todas nuestras áreas infantiles cuentan con supervisión constante, 
                equipamiento certificado y protocolos de seguridad estrictos. 
                Los niños menores de 8 años deben estar acompañados por un adulto responsable.
              </p>
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10">
                  <span className="text-green-500">✓</span>
                  <span>Pulseras de identificación</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10">
                  <span className="text-green-500">✓</span>
                  <span>Salvavidas certificados</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10">
                  <span className="text-green-500">✓</span>
                  <span>Primeros auxilios</span>
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
                ¡Crea Recuerdos Inolvidables!
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Trae a tus pequeños a disfrutar de un día lleno de diversión segura y aprendizaje
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Planear Visita
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Ver Normas de Seguridad
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AtraccionesKids;
