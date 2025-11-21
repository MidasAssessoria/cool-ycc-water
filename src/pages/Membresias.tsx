import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { smoothScrollToElement } from "@/lib/utils";
import { Waves, Trophy, Shield, Trees, Sparkles, Heart, Dumbbell, Calendar, Check, Calculator, CheckCircle2, CreditCard, Banknote, Smartphone, FileText, ExternalLink, HelpCircle, Phone, Instagram, MapPin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";
import MembresiaPricingSection from "@/components/pricing/MembresiaPricingSection";
import Navigation from "@/components/navigation/Navigation";
import { Timeline } from "@/components/ui/timeline";

const Membresias = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'familiar' | 'vip' | null>(null);

  const handleOpenModal = (plan: 'familiar' | 'vip') => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleContinue = () => {
    // Placeholder URL - será substituído posteriormente
    window.open('https://example.com/registro-membresias', '_blank');
    setIsModalOpen(false);
  };

  const timelineData = [
    {
      title: "Hoy",
      content: (
        <div>
          {/* Badge DISPONIBLE HOY */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-6 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            DISPONIBLE HOY
          </div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Disfruta desde el primer día de todas estas instalaciones incluidas en tu membresía
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Card 1: Acceso Ilimitado */}
            <div className="group relative bg-gradient-to-br from-white to-cyan-50/30 border border-cyan-200/50 rounded-3xl p-6 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-4">
                <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl">🌊</div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-cyan-700 transition-colors">
                    Acceso ilimitado
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Piscinas recreativas y lagos naturales para toda la familia
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Deportes */}
            <div className="group relative bg-gradient-to-br from-white to-orange-50/30 border border-orange-200/50 rounded-3xl p-6 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-400 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-4">
                <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl">🏆</div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors">
                    Deportes
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Canchas de tenis, fútbol, básquet, vóley
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Zona Kids */}
            <div className="group relative bg-gradient-to-br from-white to-green-50/30 border border-green-200/50 rounded-3xl p-6 hover:shadow-2xl hover:shadow-green-500/20 hover:border-green-400 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-4">
                <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl">🛡️</div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                    Zona kids 100% segura
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Áreas infantiles supervisadas con salvavidas
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Áreas Verdes */}
            <div className="group relative bg-gradient-to-br from-white to-emerald-50/30 border border-emerald-200/50 rounded-3xl p-6 hover:shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-400 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-4">
                <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl">🌳</div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    Áreas verdes
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Senderos ecológicos y churrasqueras
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Galeria moderna com overlay */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-video">
              <img
                src="/assets/attractions/natural-lakes.jpg"
                alt="Lagos naturales"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-bold text-lg">Lagos Naturales</p>
                  <p className="text-sm opacity-90">3 lagos cristalinos</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-video">
              <img
                src="/assets/attractions/tennis-courts.jpg"
                alt="Canchas deportivas"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-bold text-lg">Canchas Deportivas</p>
                  <p className="text-sm opacity-90">Tenis, fútbol y más</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025-2026",
      content: (
        <div>
          {/* Badge 2025-2026 */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 text-orange-700 text-xs font-bold rounded-full mb-6 shadow-sm">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            EN CONSTRUCCIÓN 2025-2026
          </div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-4">
            Instalaciones en construcción que estarán disponibles durante tu membresía
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex items-center gap-3 text-neutral-700 text-sm md:text-base">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-purple-700" />
              </div>
              <div>
                <span className="font-bold">Water Park Premium</span>
                <p className="text-xs text-muted-foreground">Piscina de olas, toboganes gigantes</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-neutral-700 text-sm md:text-base">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Dumbbell className="w-5 h-5 text-orange-700" />
              </div>
              <div>
                <span className="font-bold">Gimnasio moderno</span>
                <p className="text-xs text-muted-foreground">Equipamiento de última generación</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-video">
              <img
                src="/assets/attractions/wave-pool.jpg"
                alt="Piscina de olas"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-bold text-lg">Piscina de Olas</p>
                  <p className="text-sm opacity-90">Emociones garantizadas</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-video">
              <img
                src="/assets/attractions/water-slides.jpg"
                alt="Toboganes"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-bold text-lg">Toboganes Gigantes</p>
                  <p className="text-sm opacity-90">Adrenalina pura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Próximamente",
      content: (
        <div>
          {/* Badge PRÓXIMAMENTE */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100 text-purple-700 text-xs font-bold rounded-full mb-6 shadow-sm">
            <Sparkles className="w-3 h-3" />
            PRÓXIMAMENTE
          </div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-4">
            Expansiones planificadas incluidas en tu membresía sin costo adicional
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex items-center gap-3 text-neutral-700 text-sm md:text-base">
              <div className="bg-pink-100 p-2 rounded-lg">
                <Heart className="w-5 h-5 text-pink-700" />
              </div>
              <div>
                <span className="font-bold">HidroSPA</span>
                <p className="text-xs text-muted-foreground">Saunas, jacuzzis, masajes terapéuticos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-neutral-700 text-sm md:text-base">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <span className="font-bold">Eventos exclusivos para miembros</span>
                <p className="text-xs text-muted-foreground">Acceso prioritario a fiestas temáticas y festivales</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-video">
              <img
                src="/assets/attractions/hydro-spa.jpg"
                alt="HidroSPA"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-bold text-lg">HidroSPA</p>
                  <p className="text-sm opacity-90">Relax y bienestar</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-video">
              <img
                src="/assets/attractions/restaurant.jpg"
                alt="Eventos exclusivos"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-bold text-lg">Eventos Exclusivos</p>
                  <p className="text-sm opacity-90">Solo para miembros</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-cyan-50 to-orange-50 border-l-4 border-cyan-500 p-6 rounded-r-xl">
            <p className="text-sm md:text-base text-foreground font-semibold">
              💎 <span className="text-cyan-700">Tu membresía te garantiza acceso de por vida</span> a todas las mejoras futuras del parque
            </p>
          </div>

          {/* Seção de destaque final */}
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-gradient-to-br from-cyan-50 to-orange-50 border-2 border-cyan-200 rounded-3xl p-8 md:p-12">
                <div className="text-5xl md:text-6xl mb-4">🎉</div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  ¡Todo esto y más con tu membresía!
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  Tu inversión de hoy te garantiza acceso de por vida a todas las mejoras futuras
                </p>
                <div className="flex items-center justify-center gap-2 text-cyan-700 font-bold">
                  <span className="text-3xl">∞</span>
                  <span className="text-lg">Valor ilimitado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-18 md:pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/src/assets/hero-waterpark.jpg')`,
          }}
        />
        
        {/* Gradient Overlay - Diagonal */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/80 via-cyan-600/60 to-orange-500/70" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Circle 1 */}
          <div 
            className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '0s' }}
          />
          
          {/* Circle 2 */}
          <div 
            className="absolute bottom-40 right-20 w-48 h-48 bg-orange-400/30 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '1s' }}
          />
          
          {/* Circle 3 */}
          <div 
            className="absolute top-1/2 left-1/3 w-40 h-40 bg-cyan-400/25 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20 md:py-24">

          {/* Título principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 sm:mb-8 drop-shadow-lg">
            Membresías YCC Water Park
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-semibold max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-14 drop-shadow-md leading-relaxed">
            Acceso ilimitado para toda tu familia al mayor parque acuático del Paraguay
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={() => smoothScrollToElement('comparison-section')}
            className="bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 rounded-full shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          >
            Ver Opciones de Membresía
          </Button>
        </div>
      </section>

      {/* Timeline Benefits Section */}
      <Timeline data={timelineData} />

      {/* Comparison Section - Nova versão com animações */}
      <MembresiaPricingSection 
        onContratarFamiliar={() => handleOpenModal('familiar')}
        onContratarVIP={() => handleOpenModal('vip')}
      />
      
      {/* Calculadora de Ahorro VIP - Sub-Fase 2.1 */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
              <Calculator className="w-5 h-5 mr-2" />
              <span className="text-sm font-bold">Calculadora de Ahorro</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
              ¿Por qué elegir VIP?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Ahorro acumulado comparado con Membresía Familiar
            </p>
          </div>

          {/* Tabla comparativa */}
          <div className="overflow-x-auto rounded-2xl border-2 border-border shadow-lg mb-6">
            <Table>
              <TableCaption className="sr-only">
                Comparación de costos acumulados entre Membresía Familiar y VIP a lo largo del tiempo
              </TableCaption>
              <TableHeader>
                <TableRow className="bg-muted hover:bg-muted">
                  <TableHead className="font-bold text-foreground text-base">Tiempo</TableHead>
                  <TableHead className="font-bold text-foreground text-base">Familiar Total</TableHead>
                  <TableHead className="font-bold text-foreground text-base">VIP Total</TableHead>
                  <TableHead className="font-bold text-foreground text-base">Diferencia</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* 5 años - Desfavorável */}
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-semibold">5 años</TableCell>
                  <TableCell>USD 3.750</TableCell>
                  <TableCell>USD 4.500</TableCell>
                  <TableCell className="text-orange-600 font-semibold">+USD 750</TableCell>
                </TableRow>

                {/* 8 años - Punto de equilibrio */}
                <TableRow className="bg-yellow-50 hover:bg-yellow-100 border-l-4 border-yellow-500">
                  <TableCell className="font-bold">8 años</TableCell>
                  <TableCell className="font-bold">USD 5.550</TableCell>
                  <TableCell className="font-bold">USD 4.500</TableCell>
                  <TableCell className="font-bold text-yellow-700 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Equilibrio
                  </TableCell>
                </TableRow>

                {/* 10 años - Economía */}
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-semibold">10 años</TableCell>
                  <TableCell>USD 6.150</TableCell>
                  <TableCell>USD 4.500</TableCell>
                  <TableCell className="text-green-600 font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    -USD 1.650
                  </TableCell>
                </TableRow>

                {/* 20 años - Economía grande */}
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-semibold">20 años</TableCell>
                  <TableCell>USD 10.950</TableCell>
                  <TableCell>USD 4.500</TableCell>
                  <TableCell className="text-green-600 font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    -USD 6.450
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Texto explicativo */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
            <p className="text-base sm:text-lg text-purple-900 font-semibold text-center">
              💡 A partir del año 9, VIP ahorra USD 480 anuales
            </p>
          </div>
        </div>
      </section>

      {/* Formas de Pago - Sub-Fase 2.2 */}
      <section className="bg-muted py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
              Opciones de pago
            </h2>
          </div>

          {/* Grid de 2 cards - Familiar e VIP */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Card Membresía Familiar */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Membresía Familiar</h3>
                <p className="text-3xl font-black text-foreground">USD 1.500</p>
              </div>

              <div className="space-y-4">
                {/* Opción Contado */}
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-bold text-foreground">Contado</span>
                    </div>
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Ahorra USD 150
                    </div>
                  </div>
                  <p className="text-2xl font-black text-green-700 ml-7">USD 1.350</p>
                  <p className="text-sm text-muted-foreground ml-7">(10% de descuento)</p>
                </div>

                {/* Opción Parcelado */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="font-bold text-foreground">Parcelado</span>
                  </div>
                  <div className="ml-7 space-y-1">
                    <p className="text-lg font-semibold text-foreground">
                      USD 300 <span className="text-sm text-muted-foreground font-normal">entrada</span>
                    </p>
                    <p className="text-lg font-semibold text-blue-600">
                      + 12 × USD 100
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Membresía VIP */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">Membresía VIP</h3>
                <p className="text-3xl font-black text-foreground">USD 4.500</p>
              </div>

              <div className="space-y-4">
                {/* Opción Contado */}
                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="font-bold text-foreground">Contado</span>
                  </div>
                  <p className="text-2xl font-black text-purple-700 ml-7">USD 4.500</p>
                  <p className="text-sm text-muted-foreground ml-7">Pago único</p>
                </div>

                {/* Opción Parcelado */}
                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="font-bold text-foreground">Parcelado</span>
                  </div>
                  <div className="ml-7 space-y-1">
                    <p className="text-lg font-semibold text-foreground">
                      USD 1.000 <span className="text-sm text-muted-foreground font-normal">entrada</span>
                    </p>
                    <p className="text-lg font-semibold text-purple-600">
                      + 10 × USD 400
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Métodos de pago aceitos */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">Métodos de pago aceptados</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
              {/* Tarjetas de crédito */}
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                  <CreditCard className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-sm text-foreground mb-1">Tarjetas</h4>
                <p className="text-xs text-muted-foreground">Visa, Mastercard, Amex</p>
              </div>

              {/* Transferencia bancaria */}
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                  <Banknote className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-sm text-foreground mb-1">Transferencia</h4>
                <p className="text-xs text-muted-foreground">Bancaria</p>
              </div>

              {/* Billeteras digitales */}
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                  <Smartphone className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-sm text-foreground mb-1">Billeteras Digitales</h4>
                <p className="text-xs text-muted-foreground">QR Bancard, Tigo Money, Personal Pay</p>
              </div>

              {/* Cheques diferidos */}
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                  <FileText className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-semibold text-sm text-foreground mb-1">Cheques</h4>
                <p className="text-xs text-muted-foreground">Diferidos</p>
              </div>

            </div>
          </div>

          {/* Nota de conversão */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            💱 Conversión USD → Gs según cotización BCP del día
          </p>
        </div>
      </section>

      {/* Cómo Funciona - Timeline - Sub-Fase 2.3 */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
              Proceso de contratación
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              4 pasos simples para tu membresía
            </p>
          </div>

          {/* Timeline - Desktop: horizontal, Mobile: vertical */}
          <div className="relative">
            
            {/* Linha conectora - Desktop */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200" style={{ width: 'calc(100% - 8rem)', marginLeft: '4rem' }}></div>
            
            {/* Grid de passos */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
              
              {/* Paso 1: Elegir Membresía */}
              <div className="flex flex-col items-center text-center relative">
                {/* Linha vertical mobile */}
                <div className="md:hidden absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-purple-200"></div>
                
                {/* Círculo numerado */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                
                {/* Ícone */}
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-7 h-7 text-blue-600" />
                </div>
                
                {/* Conteúdo */}
                <h3 className="text-lg font-bold text-foreground mb-2">Elegir Membresía</h3>
                <p className="text-sm text-muted-foreground">
                  Selecciona Familiar o VIP según tus necesidades
                </p>
              </div>

              {/* Paso 2: Registro Online */}
              <div className="flex flex-col items-center text-center relative">
                {/* Linha vertical mobile */}
                <div className="md:hidden absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 to-green-200"></div>
                
                {/* Círculo numerado */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                
                {/* Ícone */}
                <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-3">
                  <FileText className="w-7 h-7 text-purple-600" />
                </div>
                
                {/* Conteúdo */}
                <h3 className="text-lg font-bold text-foreground mb-2">Registro Online</h3>
                <p className="text-sm text-muted-foreground">
                  Completa tus datos en sistema externo y genera recibo digital
                </p>
              </div>

              {/* Paso 3: Pago Presencial */}
              <div className="flex flex-col items-center text-center relative">
                {/* Linha vertical mobile */}
                <div className="md:hidden absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-green-200 to-orange-200"></div>
                
                {/* Círculo numerado */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                
                {/* Ícone */}
                <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-3">
                  <Banknote className="w-7 h-7 text-green-600" />
                </div>
                
                {/* Conteúdo */}
                <h3 className="text-lg font-bold text-foreground mb-2">Pago Presencial</h3>
                <p className="text-sm text-muted-foreground">
                  Visita YCC en Ruta 1 Km 13.5, Ypané y realiza el pago
                </p>
              </div>

              {/* Paso 4: Activación */}
              <div className="flex flex-col items-center text-center relative">
                {/* Círculo numerado */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                
                {/* Ícone */}
                <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-3">
                  <Trophy className="w-7 h-7 text-orange-600" />
                </div>
                
                {/* Conteúdo */}
                <h3 className="text-lg font-bold text-foreground mb-2">Activación</h3>
                <p className="text-sm text-muted-foreground">
                  Tras pagar 50%, recibes carnet y acceso inmediato
                </p>
              </div>

            </div>
          </div>

          {/* Nota destacada */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mt-12">
            <p className="text-base sm:text-lg text-blue-900 font-semibold">
              📝 <strong>Importante:</strong> El pago se realiza presencialmente. El registro online genera tu recibo.
            </p>
          </div>
        </div>
      </section>


      {/* FAQ Section - Sub-Fase 3.1 */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full mb-4">
              <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
              <span className="text-sm font-bold text-blue-700">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Resuelve tus dudas sobre las membresías
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* Pregunta 1 */}
            <AccordionItem value="item-1" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Quiénes están cubiertos en la membresía?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Titular + padres + cónyuge + todos los hijos menores de 18 años. 
                Puedes agregar suegros por USD 250 cada uno + USD 20/mes.
              </AccordionContent>
            </AccordionItem>

            {/* Pregunta 2 */}
            <AccordionItem value="item-2" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Cuándo puedo comenzar a usar el parque?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Tras pagar el 50% de la membresía, recibes tu carnet y acceso inmediato.
              </AccordionContent>
            </AccordionItem>

            {/* Pregunta 3 */}
            <AccordionItem value="item-3" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿La membresía es vitalicia?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, se renueva anualmente mediante el pago de la cuota de mantenimiento (Familiar: USD 40/mes, VIP: USD 0).
              </AccordionContent>
            </AccordionItem>

            {/* Pregunta 4 */}
            <AccordionItem value="item-4" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Puedo transferir o heredar mi membresía?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, ambas membresías son transferibles a herederos o terceros.
              </AccordionContent>
            </AccordionItem>

            {/* Pregunta 5 */}
            <AccordionItem value="item-5" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Hay reembolso si cancelo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No. Tras firmar el contrato, no hay devolución de valores pagados.
              </AccordionContent>
            </AccordionItem>

            {/* Pregunta 6 */}
            <AccordionItem value="item-6" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Qué pasa si no pago la cuota de mantenimiento?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Atraso de 90+ días: YCC puede rescindir contrato y retener valores pagados.
              </AccordionContent>
            </AccordionItem>

            {/* Pregunta 7 */}
            <AccordionItem value="item-7" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Cuál membresía me conviene más?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Familiar: ideal si prefieres pagos menores iniciales. VIP: mejor a largo plazo (equilibrio en año 8, ahorras desde año 9).
              </AccordionContent>
            </AccordionItem>

            {/* Pregunta 8 */}
            <AccordionItem value="item-8" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Puedo cambiar de Familiar a VIP después?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Consulta con nuestro equipo comercial sobre opciones de upgrade.
              </AccordionContent>
            </AccordionItem>

            {/* Divisor - Opciones de Pago */}
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-8 mb-4">
              Opciones de Pago
            </div>

            {/* Pregunta 9 */}
            <AccordionItem value="item-9" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Cuáles son las opciones de pago para la Membresía Familiar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Puedes pagar en contado (USD 1.350 con 10% de descuento) o parcelado (USD 300 de entrada + 12 cuotas de USD 100). El precio total es USD 1.500.
              </AccordionContent>
            </AccordionItem>

            {/* Pregunta 10 */}
            <AccordionItem value="item-10" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Cuáles son las opciones de pago para la Membresía VIP?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Puedes pagar en contado (USD 4.500 en pago único) o parcelado (USD 1.000 de entrada + 10 cuotas de USD 400).
              </AccordionContent>
            </AccordionItem>

            {/* Pregunta 11 */}
            <AccordionItem value="item-11" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Qué métodos de pago aceptan?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Aceptamos tarjetas de crédito (Visa, Mastercard, Amex), transferencia bancaria, billeteras digitales (QR Bancard, Tigo Money, Personal Pay) y cheques diferidos. La conversión de USD a Guaraníes se realiza según la cotización del BCP del día.
              </AccordionContent>
            </AccordionItem>

            {/* Pregunta 12 */}
            <AccordionItem value="item-12" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Hay descuento por pago en contado?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, la Membresía Familiar ofrece un 10% de descuento en pago contado (USD 1.350 en lugar de USD 1.500), ahorrando USD 150. La Membresía VIP mantiene el mismo precio de USD 4.500.
              </AccordionContent>
            </AccordionItem>

            {/* Pregunta 13 */}
            <AccordionItem value="item-13" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Puedo pagar en Guaraníes?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, todos los precios en dólares pueden pagarse en Guaraníes según la cotización del BCP del día del pago.
              </AccordionContent>
            </AccordionItem>

            {/* Divisor - Proceso de Contratación */}
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-8 mb-4">
              Proceso de Contratación
            </div>

            {/* Pregunta 14 */}
            <AccordionItem value="item-14" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Cómo funciona el proceso de contratación?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                El proceso tiene 4 pasos simples: 1) Elegir tu membresía (Familiar o VIP), 2) Completar el registro online en nuestro sistema externo para generar tu recibo digital, 3) Realizar el pago presencialmente en YCC Water Park (Ruta 1 Km 13.5, Ypané), y 4) Activación inmediata tras pagar el 50% - recibes tu carnet y acceso al parque.
              </AccordionContent>
            </AccordionItem>

            {/* Pregunta 15 */}
            <AccordionItem value="item-15" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿El pago se puede hacer online?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No, el pago se realiza presencialmente en YCC Water Park. El registro online solo genera tu recibo digital, pero debes visitarnos en Ruta 1 Km 13.5, Ypané para efectuar el pago.
              </AccordionContent>
            </AccordionItem>

            {/* Pregunta 16 */}
            <AccordionItem value="item-16" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Cuándo recibo mi carnet de membresía?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Recibes tu carnet y acceso inmediato al parque tras pagar el 50% del valor total de tu membresía. No necesitas esperar a completar el pago total para comenzar a disfrutar.
              </AccordionContent>
            </AccordionItem>

            {/* Pregunta 17 */}
            <AccordionItem value="item-17" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Dónde realizo el pago presencial?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                El pago se realiza en YCC Water Park, ubicado en Ruta 1 Km 13.5, Ypané, Paraguay. Lleva tu recibo digital generado en el registro online.
              </AccordionContent>
            </AccordionItem>

            {/* Pregunta 18 */}
            <AccordionItem value="item-18" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Necesito llevar algo al momento del pago?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, debes llevar tu recibo digital generado durante el registro online y el método de pago elegido (tarjeta, efectivo, cheques, etc.).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Final Section - Sub-Fase 3.2 */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">
              ¿Listo para disfrutar del parque todo el año?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 drop-shadow-md">
              Elige tu membresía y comienza a crear recuerdos con tu familia
            </p>
          </div>

          {/* Botões CTA lado a lado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => handleOpenModal('familiar')}
              className="w-full h-16 bg-white text-blue-600 hover:bg-white/90 font-bold text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Contratar Membresía Familiar
            </Button>
            <Button
              size="lg"
              onClick={() => handleOpenModal('vip')}
              className="w-full h-16 bg-white text-purple-600 hover:bg-white/90 font-bold text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Contratar Membresía VIP
            </Button>
          </div>

          {/* Seção de contato alternativo */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              ¿Tienes dudas? Habla con nosotros
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/595994306666" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white/20 hover:bg-white/30 p-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                  <Phone className="w-8 h-8 text-white mb-3 mx-auto" />
                  <p className="text-white font-semibold text-center mb-1">WhatsApp</p>
                  <p className="text-white/80 text-sm text-center">+595 994 306666</p>
                </div>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/yccwaterparkpy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white/20 hover:bg-white/30 p-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                  <Instagram className="w-8 h-8 text-white mb-3 mx-auto" />
                  <p className="text-white font-semibold text-center mb-1">Instagram</p>
                  <p className="text-white/80 text-sm text-center">@yccwaterparkpy</p>
                </div>
              </a>

              {/* Ubicación */}
              <div className="bg-white/20 p-6 rounded-xl">
                <MapPin className="w-8 h-8 text-white mb-3 mx-auto" />
                <p className="text-white font-semibold text-center mb-1">Ubicación</p>
                <p className="text-white/80 text-sm text-center">Ruta 1 Km 13.5, Ypané</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Redirecionamento - Sub-Fase 2.4 */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Vas a ser redirigido</DialogTitle>
            <DialogDescription className="text-base pt-2">
              Serás redirigido a nuestro sistema de registro externo. Completa tus datos para generar tu recibo y confirmar el pago presencialmente en YCC Water Park.
            </DialogDescription>
          </DialogHeader>

          {/* Info del plan seleccionado */}
          {selectedPlan && (
            <div className={`p-5 rounded-xl border-2 ${
              selectedPlan === 'familiar' 
                ? 'bg-blue-50 border-blue-200' 
                : 'bg-purple-50 border-purple-200'
            }`}>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Membresía seleccionada:</p>
                <p className={`text-2xl font-black ${
                  selectedPlan === 'familiar' ? 'text-blue-600' : 'text-purple-600'
                }`}>
                  {selectedPlan === 'familiar' ? 'Membresía Familiar' : 'Membresía VIP'}
                </p>
                <div className="flex items-baseline gap-2 pt-1">
                  <span className="text-sm text-muted-foreground">Precio:</span>
                  <span className="text-xl font-bold text-foreground">
                    USD {selectedPlan === 'familiar' ? '1.500' : '4.500'}
                  </span>
                </div>
                {selectedPlan === 'familiar' && (
                  <p className="text-sm text-muted-foreground">+ USD 40/mes tras pagar 50%</p>
                )}
                {selectedPlan === 'vip' && (
                  <p className="text-sm font-semibold text-purple-700">Sin cuota mensual NUNCA</p>
                )}
              </div>
            </div>
          )}

          <DialogFooter className="flex-col sm:flex-row gap-3 sm:gap-2">
            <Button 
              variant="outline" 
              onClick={() => setIsModalOpen(false)}
              className="w-full sm:w-auto order-2 sm:order-1"
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleContinue}
              className={`w-full sm:w-auto gap-2 order-1 sm:order-2 ${
                selectedPlan === 'familiar' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-purple-600 hover:bg-purple-700'
              }`}
            >
              Continuar al Registro
              <ExternalLink className="w-4 h-4" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Membresias;
