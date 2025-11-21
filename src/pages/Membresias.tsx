import React from 'react';
import { Button } from "@/components/ui/button";
import { smoothScrollToElement } from "@/lib/utils";
import { Waves, Trophy, Shield, Trees, Sparkles, Heart, Dumbbell, Calendar, Check } from "lucide-react";

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
      <section id="comparison-section" className="bg-muted py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
              Elige tu membresía ideal
            </h2>
          </div>

          {/* Grid de cards - Mobile empilhados, Desktop lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            
            {/* CARD 1: Membresía Familiar */}
            <div className="relative bg-card rounded-3xl shadow-xl border-2 border-border hover:shadow-2xl transition-all duration-300 flex flex-col">
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-bold">Más Popular</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Preços */}
                <div className="text-center mb-6 pt-4">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl text-muted-foreground line-through">USD 3.000</span>
                    <span className="text-5xl font-black text-blue-600">USD 1.500</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Precio de lanzamiento</p>
                  
                  <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                    <span className="font-bold text-base">USD 40/mes</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">(comienza tras pagar 50%)</p>
                </div>

                {/* Cobertura */}
                <div className="mb-6 p-4 bg-muted rounded-xl">
                  <p className="text-sm font-semibold text-foreground mb-2">
                    Cobertura: Titular + padres + cónyuge + hijos &lt;18 años
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Opcional: Suegros +USD 250 c/u + USD 20/mes
                  </p>
                </div>

                {/* Benefícios */}
                <div className="flex-1 mb-6">
                  <h3 className="font-bold text-foreground mb-4">Beneficios incluidos:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">Acceso ilimitado a todas las instalaciones</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">30% descuento en hospedaje</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">10% descuento en restaurante</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">20% descuento en estacionamiento</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">Transferible y heredable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">Vitalicia (renovación anual)</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  disabled
                  size="lg"
                  className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full opacity-50 cursor-not-allowed"
                >
                  Contratar Familiar
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">Próximamente disponible</p>
              </div>
            </div>

            {/* CARD 2: Membresía VIP */}
            <div className="relative bg-card rounded-3xl shadow-xl border-3 border-purple-200 hover:shadow-2xl transition-all duration-300 flex flex-col lg:scale-105">
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-bold">0% Mantenimiento</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Preços */}
                <div className="text-center mb-6 pt-4">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl text-muted-foreground line-through">USD 9.000</span>
                    <span className="text-5xl font-black text-purple-600">USD 4.500</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Precio de lanzamiento</p>
                  
                  <div className="inline-flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full">
                    <span className="font-bold text-base">USD 0/mes PARA SIEMPRE</span>
                  </div>
                  <p className="text-sm text-purple-700 font-semibold mt-2">Sin cuota mensual NUNCA</p>
                </div>

                {/* Cobertura */}
                <div className="mb-6 p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <p className="text-sm font-semibold text-foreground">
                    Cobertura: Titular + padres + cónyuge + hijos &lt;18 años
                  </p>
                </div>

                {/* Benefícios */}
                <div className="flex-1 mb-6">
                  <h3 className="font-bold text-foreground mb-4">Beneficios incluidos:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground font-semibold">Todo lo de Familiar +</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">Sin cuota mensual NUNCA</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">Prioridad en reservas VIP</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">Punto de equilibrio: año 8</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">Ahorro de USD 480/año desde año 9</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  disabled
                  size="lg"
                  className="w-full h-14 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-full opacity-50 cursor-not-allowed"
                >
                  Contratar VIP
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">Próximamente disponible</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Membresias;
