import Navigation from "@/components/navigation/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { AttractionCard } from "@/components/AttractionCard";
import { AttractionBreadcrumb } from "@/components/AttractionBreadcrumb";
import { gastronomia } from "@/data/attractions-data";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, ChefHat, Wine } from "lucide-react";

const AtraccionesGastronomia = () => {
  return (
    <>
      <SEOHead 
        title="Gastronomía - YCC Water Park"
        description="Descubre nuestras opciones gastronómicas: Restaurante Lago, Bar Acuático y Patio de Comida. Sabores deliciosos con vistas espectaculares."
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <AttractionBreadcrumb categoryName="Gastronomía" />
        
        {/* Hero Section */}
        <section className="relative pb-20 bg-gradient-to-br from-orange-500/10 via-background to-red-500/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <UtensilsCrossed className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium text-orange-500">Gastronomía</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Sabores que Complementan
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Tu Experiencia
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Disfruta de opciones gastronómicas para todos los gustos, desde cocina internacional 
                hasta snacks rápidos, todo con vistas al lago y ambiente único.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-background border border-border/50">
                <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Chefs Profesionales</h3>
                <p className="text-sm text-muted-foreground">
                  Cocina preparada por chefs expertos con ingredientes frescos
                </p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-background border border-border/50">
                <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                  <Wine className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Variedad de Bebidas</h3>
                <p className="text-sm text-muted-foreground">
                  Desde cócteles tropicales hasta bebidas naturales
                </p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-background border border-border/50">
                <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                  <UtensilsCrossed className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Opciones para Todos</h3>
                <p className="text-sm text-muted-foreground">
                  Menú variado con opciones vegetarianas y para niños
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
                Nuestras Opciones Gastronómicas
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {gastronomia.length} espacios diseñados para satisfacer tu paladar
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {gastronomia.map((attraction) => (
                <AttractionCard key={attraction.id} {...attraction} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500/5 via-background to-red-500/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Listo para Disfrutar?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Reserva tu visita y descubre la mejor gastronomía en un entorno paradisíaco
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Reservar Ahora
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Ver Menú Completo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AtraccionesGastronomia;
