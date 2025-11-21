import React from 'react';
import { Button } from "@/components/ui/button";
import { smoothScrollToElement } from "@/lib/utils";
import { Waves, Trophy, Shield, Trees, Sparkles, Heart, Dumbbell, Calendar } from "lucide-react";

const Membresias = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Fase 2 */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-28 md:py-32">
          {/* Badge promocional */}
          <div className="inline-flex items-center justify-center mb-6 sm:mb-8">
            <div className="bg-destructive text-destructive-foreground px-6 py-2.5 rounded-full shadow-lg animate-pulse">
              <span className="text-sm sm:text-base font-bold tracking-wide">
                🎉 Promoción de lanzamiento - 50% OFF
              </span>
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Membresías YCC Water Park
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-semibold max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 drop-shadow-md leading-relaxed">
            Acceso ilimitado para toda tu familia al mayor parque acuático del Paraguay
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={() => smoothScrollToElement('comparison-section')}
            className="bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 rounded-full shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Ver Opciones de Membresía
          </Button>
        </div>
      </section>

      {/* Benefits Section - Fase 3 */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
              ¿Qué incluye tu membresía?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Acceso completo a todas las instalaciones actuales y futuras
            </p>
          </div>

          {/* Grid de benefícios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Benefício 1 - Acceso ilimitado */}
            <div className="group bg-card border-2 border-border rounded-2xl p-6 hover:bg-accent/5 hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Waves className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Acceso ilimitado
              </h3>
              <p className="text-sm text-muted-foreground">
                Piscinas recreativas y lagos naturales
              </p>
            </div>

            {/* Benefício 2 - Deportes */}
            <div className="group bg-card border-2 border-border rounded-2xl p-6 hover:bg-accent/5 hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="bg-secondary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <Trophy className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Deportes
              </h3>
              <p className="text-sm text-muted-foreground">
                Canchas de tenis, fútbol, básquet, vóley
              </p>
            </div>

            {/* Benefício 3 - Zona kids */}
            <div className="group bg-card border-2 border-border rounded-2xl p-6 hover:bg-accent/5 hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Shield className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Zona kids 100% segura
              </h3>
              <p className="text-sm text-muted-foreground">
                Áreas infantiles supervisadas
              </p>
            </div>

            {/* Benefício 4 - Áreas verdes */}
            <div className="group bg-card border-2 border-border rounded-2xl p-6 hover:bg-accent/5 hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Trees className="w-7 h-7 text-green-700" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Áreas verdes
              </h3>
              <p className="text-sm text-muted-foreground">
                Senderos ecológicos y churrasqueras
              </p>
            </div>

            {/* Benefício 5 - Water Park Premium */}
            <div className="group bg-card border-2 border-border rounded-2xl p-6 hover:bg-accent/5 hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <Sparkles className="w-7 h-7 text-purple-700" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Water Park Premium
              </h3>
              <p className="text-sm text-muted-foreground">
                Piscina de olas, toboganes (en construcción)
              </p>
            </div>

            {/* Benefício 6 - HidroSPA */}
            <div className="group bg-card border-2 border-border rounded-2xl p-6 hover:bg-accent/5 hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="bg-pink-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-200 transition-colors">
                <Heart className="w-7 h-7 text-pink-700" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                HidroSPA
              </h3>
              <p className="text-sm text-muted-foreground">
                Saunas, jacuzzis, masajes (próximamente)
              </p>
            </div>

            {/* Benefício 7 - Gimnasio moderno */}
            <div className="group bg-card border-2 border-border rounded-2xl p-6 hover:bg-accent/5 hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                <Dumbbell className="w-7 h-7 text-orange-700" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Gimnasio moderno
              </h3>
              <p className="text-sm text-muted-foreground">
                Equipamiento de última generación (en construcción)
              </p>
            </div>

            {/* Benefício 8 - Eventos exclusivos */}
            <div className="group bg-card border-2 border-border rounded-2xl p-6 hover:bg-accent/5 hover:border-primary hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Calendar className="w-7 h-7 text-blue-700" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Eventos exclusivos
              </h3>
              <p className="text-sm text-muted-foreground">
                Acceso prioritario a eventos
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comparison Section - Fase 4 */}
      <section id="comparison-section" className="py-16">
        {/* Placeholder para Fase 4 */}
      </section>
    </div>
  );
};

export default Membresias;
