import React from 'react';
import { Button } from "@/components/ui/button";
import { smoothScrollToElement } from "@/lib/utils";

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
      
      {/* Comparison Section - Fase 4 */}
      <section id="comparison-section" className="py-16">
        {/* Placeholder para Fase 4 */}
      </section>
    </div>
  );
};

export default Membresias;
