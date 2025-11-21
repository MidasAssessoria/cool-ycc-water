import React, { useState, lazy, Suspense, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { smoothScrollToElement, cn } from "@/lib/utils";
import { Sparkles, Heart, Dumbbell, Calendar, Calculator, CheckCircle2, ExternalLink, HelpCircle, Phone, Instagram, MapPin, Sun } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { VIPComparisonTable } from "@/components/pricing/VIPComparisonTable";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";
import MembresiaPricingSection from "@/components/pricing/MembresiaPricingSection";
import Navigation from "@/components/navigation/Navigation";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";
import { SEOHead } from "@/components/SEOHead";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import logoYCC from "@/assets/logo-ycc-waterpark.png";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { getTimelineData } from "@/data/timeline-data";

// Code splitting: lazy load Timeline component
const Timeline = lazy(() => import("@/components/ui/timeline").then(m => ({ default: m.Timeline })));

const Membresias = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'familiar' | 'vip' | null>(null);
  
  // Performance: detect reduced motion preference
  const prefersReducedMotion = usePrefersReducedMotion();

  // Intersection observers para cards timeline
  const card1Animation = useIntersectionAnimation({ threshold: 0.2 });
  const card2Animation = useIntersectionAnimation({ threshold: 0.2 });
  const card3Animation = useIntersectionAnimation({ threshold: 0.2 });
  const card4Animation = useIntersectionAnimation({ threshold: 0.2 });

  const handleOpenModal = (plan: 'familiar' | 'vip') => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleContinue = () => {
    // URL real de registro de membresías
    window.open('https://yccwaterpark.com.py/registro-membresias', '_blank');
    setIsModalOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    smoothScrollToElement(sectionId, 80);
  };

  // Memoize timelineData to prevent recreation on every render
  const timelineData = useMemo(
    () =>
      getTimelineData(prefersReducedMotion, {
        card1: card1Animation,
        card2: card2Animation,
        card3: card3Animation,
        card4: card4Animation,
      }),
    [prefersReducedMotion, card1Animation, card2Animation, card3Animation, card4Animation]
  );

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <SEOHead
        title="Membresías - Acceso Ilimitado para toda tu Familia"
        description="Elige entre Membresía Familiar o VIP y disfruta de acceso ilimitado al mayor parque acuático del Paraguay. Desde USD 1.500 con beneficios exclusivos."
        image="/assets/hero-waterpark.jpg"
        url="https://yccwaterpark.com.py/membresias"
      />

      {/* Skip Navigation for Keyboard Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-white focus:rounded-md focus:top-4 focus:left-4 focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Saltar al contenido principal
      </a>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section - Responsive: min-h adjusts per breakpoint */}
      <section 
        id="main-content"
        className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh] xl:min-h-[80vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-18 md:pt-20"
        aria-label="Hero section"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/hero-waterpark.jpg')`,
          }}
          role="img"
          aria-label="Parque acuático YCC Water Park"
        />
        
        {/* Gradient Overlay - Diagonal - Using exact colors from prompt */}
        <div className="absolute inset-0 bg-gradient-to-br from-hero-cyan/80 via-hero-cyan/60 to-hero-orange/70" />
        
        {/* Floating Elements - respects prefers-reduced-motion */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Circle 1 - Top Left - Cyan */}
            <div 
              className="absolute top-16 left-8 w-48 h-48 bg-cyan-400/40 rounded-full blur-[100px] animate-float will-change-transform"
              style={{ animationDelay: '0s', animationDuration: '6s' }}
            />
            
            {/* Circle 2 - Bottom Right - Orange */}
            <div 
              className="absolute bottom-32 right-16 w-64 h-64 bg-orange-400/35 rounded-full blur-[120px] animate-float will-change-transform"
              style={{ animationDelay: '1.5s', animationDuration: '7s' }}
            />
            
            {/* Circle 3 - Center Left - White/Cyan */}
            <div 
              className="absolute top-1/2 left-1/4 w-56 h-56 bg-white/30 rounded-full blur-[110px] animate-float will-change-transform"
              style={{ animationDelay: '3s', animationDuration: '8s' }}
            />
            
            {/* Circle 4 - Top Right - Additional depth */}
            <div 
              className="absolute top-24 right-1/4 w-40 h-40 bg-cyan-300/25 rounded-full blur-[90px] animate-float will-change-transform"
              style={{ animationDelay: '2s', animationDuration: '5.5s' }}
            />
          </div>
        )}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16 md:py-20 lg:py-24">

          {/* Título principal - Responsive font sizing */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-4 sm:mb-6 md:mb-8 drop-shadow-lg">
            Membresías YCC Water Park
          </h1>

          {/* Subtítulo - Responsive font sizing */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-semibold max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14 drop-shadow-md leading-relaxed px-4">
            Acceso ilimitado para toda tu familia al mayor parque acuático del Paraguay
          </p>

          {/* CTA Button - Responsive sizing */}
          <Button
            size="lg"
            onClick={() => smoothScrollToElement('comparison-section')}
            tabIndex={0}
            aria-label="Ver opciones de membresía - scroll a la sección de comparación"
            className="bg-white text-primary hover:bg-white/90 font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 lg:px-12 py-5 sm:py-6 md:py-7 rounded-full shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          >
            Ver Opciones de Membresía
          </Button>
        </div>
      </section>

      {/* Timeline Benefits Section - Code Splitting with Lazy Loading */}
      <ErrorBoundary fallback={
        <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="text-center space-y-4 p-8">
            <p className="text-lg font-semibold text-muted-foreground">Error al cargar la línea de tiempo</p>
            <Button onClick={() => window.location.reload()} variant="outline">Recargar página</Button>
          </div>
        </div>
      }>
        <Suspense fallback={
          <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-lg font-semibold text-muted-foreground">Cargando beneficios...</p>
            </div>
          </div>
        }>
          <Timeline data={timelineData} />
        </Suspense>
      </ErrorBoundary>

      {/* Comparison Section - Nova versão com animações */}
      <MembresiaPricingSection 
        onContratarFamiliar={() => handleOpenModal('familiar')}
        onContratarVIP={() => handleOpenModal('vip')}
      />
      
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
            {/* ========== GRUPO 1: COBERTURA Y BENEFICIOS ========== */}
            <div className="text-xs font-bold text-cyan-600 uppercase tracking-wider mt-4 mb-2 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-cyan-600/30"></span>
              <span>Cobertura y Beneficios</span>
              <span className="flex-1 h-0.5 bg-cyan-600/30"></span>
            </div>

            {/* P1 */}
            <AccordionItem value="item-1" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Quiénes están cubiertos en la membresía?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Titular + padres + cónyuge + todos los hijos menores de 18 años. 
                Puedes agregar suegros por USD 250 cada uno + USD 20/mes.
              </AccordionContent>
            </AccordionItem>

            {/* P4 */}
            <AccordionItem value="item-4" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Puedo transferir o heredar mi membresía?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, ambas membresías son transferibles a herederos o terceros.
              </AccordionContent>
            </AccordionItem>

            {/* ========== GRUPO 2: ACTIVACIÓN Y USO ========== */}
            <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mt-8 mb-2 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-orange-600/30"></span>
              <span>Activación y Uso</span>
              <span className="flex-1 h-0.5 bg-orange-600/30"></span>
            </div>

            {/* P2 */}
            <AccordionItem value="item-2" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Cuándo puedo comenzar a usar el parque?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Tras pagar el 50% de la membresía, recibes tu carnet y acceso inmediato.
              </AccordionContent>
            </AccordionItem>

            {/* ========== GRUPO 3: OPCIONES DE PAGO ========== */}
            <div className="text-xs font-bold text-cyan-600 uppercase tracking-wider mt-8 mb-2 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-cyan-600/30"></span>
              <span>Opciones de Pago</span>
              <span className="flex-1 h-0.5 bg-cyan-600/30"></span>
            </div>

            {/* P9 */}
            <AccordionItem value="item-9" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Cuáles son las opciones de pago para la Membresía Familiar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Puedes pagar en contado (USD 1.350 con 10% de descuento) o parcelado (USD 300 de entrada + 12 cuotas de USD 100). El precio total es USD 1.500.
              </AccordionContent>
            </AccordionItem>

            {/* P10 */}
            <AccordionItem value="item-10" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Cuáles son las opciones de pago para la Membresía VIP?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Puedes pagar en contado (USD 4.500 en pago único) o parcelado (USD 1.000 de entrada + 10 cuotas de USD 400).
              </AccordionContent>
            </AccordionItem>

            {/* P11 */}
            <AccordionItem value="item-11" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Qué métodos de pago aceptan?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Aceptamos tarjetas de crédito (Visa, Mastercard, Amex), transferencia bancaria, billeteras digitales (QR Bancard, Tigo Money, Personal Pay) y cheques diferidos. La conversión de USD a Guaraníes se realiza según la cotización del BCP del día.
              </AccordionContent>
            </AccordionItem>

            {/* P12 */}
            <AccordionItem value="item-12" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Hay descuento por pago en contado?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, la Membresía Familiar ofrece un 10% de descuento en pago contado (USD 1.350 en lugar de USD 1.500), ahorrando USD 150. La Membresía VIP mantiene el mismo precio de USD 4.500.
              </AccordionContent>
            </AccordionItem>

            {/* P13 */}
            <AccordionItem value="item-13" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Puedo pagar en Guaraníes?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, todos los precios en dólares pueden pagarse en Guaraníes según la cotización del BCP del día del pago.
              </AccordionContent>
            </AccordionItem>

            {/* ========== GRUPO 4: PROCESO DE CONTRATACIÓN ========== */}
            <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mt-8 mb-2 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-orange-600/30"></span>
              <span>Proceso de Contratación</span>
              <span className="flex-1 h-0.5 bg-orange-600/30"></span>
            </div>

            {/* P14 */}
            <AccordionItem value="item-14" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Cómo funciona el proceso de contratación?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                El proceso tiene 4 pasos simples: 1) Elegir tu membresía (Familiar o VIP), 2) Completar el registro online en nuestro sistema externo para generar tu recibo digital, 3) Realizar el pago presencialmente en YCC Water Park (Ruta 1 Km 13.5, Ypané), y 4) Activación inmediata tras pagar el 50% - recibes tu carnet y acceso al parque.
              </AccordionContent>
            </AccordionItem>

            {/* P15 */}
            <AccordionItem value="item-15" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿El pago se puede hacer online?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No, el pago se realiza presencialmente en YCC Water Park. El registro online solo genera tu recibo digital, pero debes visitarnos en Ruta 1 Km 13.5, Ypané para efectuar el pago.
              </AccordionContent>
            </AccordionItem>

            {/* P17 */}
            <AccordionItem value="item-17" className="bg-muted/30 rounded-xl border-2 border-border px-6">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                ¿Dónde realizo el pago presencial?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                El pago se realiza en YCC Water Park, ubicado en Ruta 1 Km 13.5, Ypané, Paraguay. Lleva tu recibo digital generado en el registro online.
              </AccordionContent>
            </AccordionItem>

            {/* P18 */}
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

      {/* Footer - Igual ao da página principal */}
      <footer className="bg-charcoal text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            {/* Column 1: Logo + Contact */}
            <div className="space-y-4">
              <img src={logoYCC} alt="YCC Water Park" className="h-12 w-auto mb-2" />
              <p className="text-white/80 text-sm mb-4">
                Club, resort y parque acuático premium para toda la familia.
              </p>
              <div className="space-y-2 text-white/70">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Ruta 1 Km 13,5 – Ypané, Paraguay</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">A solo 25 minutos de Asunción</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="font-bold text-white text-base">Navegación rápida</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => window.location.href = '/'}
                    className="text-white/70 hover:text-white active:text-white/90 transition-colors text-sm text-left py-2 min-h-[44px] w-full touch-manipulation"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.location.href = '/#attractions'}
                    className="text-white/70 hover:text-white active:text-white/90 transition-colors text-sm text-left py-2 min-h-[44px] w-full touch-manipulation"
                  >
                    Atracciones
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('faq-section')}
                    className="text-white/70 hover:text-white active:text-white/90 transition-colors text-sm text-left py-2 min-h-[44px] w-full touch-manipulation"
                  >
                    Preguntas Frecuentes
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.location.href = '/#bungalows'}
                    className="text-white/70 hover:text-white active:text-white/90 transition-colors text-sm text-left py-2 min-h-[44px] w-full touch-manipulation"
                  >
                    Bungalows
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.location.href = '/#booking'}
                    className="text-white/70 hover:text-white active:text-white/90 transition-colors text-sm text-left py-2 min-h-[44px] w-full touch-manipulation"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center text-white/50 pt-8 border-t border-white/10">
            <p className="text-sm">
              © 2025 YCC Water Park. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal de Redirecionamento - Sub-Fase 2.4 */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent 
          className="sm:max-w-md"
          aria-describedby="modal-description"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Vas a ser redirigido</DialogTitle>
            <DialogDescription id="modal-description" className="text-base pt-2">
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
              tabIndex={0}
              aria-label="Cancelar redirección"
              className="w-full sm:w-auto order-2 sm:order-1"
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleContinue}
              tabIndex={0}
              aria-label={`Continuar a registro de membresía ${selectedPlan === 'familiar' ? 'Familiar' : 'VIP'}`}
              className={`w-full sm:w-auto gap-2 order-1 sm:order-2 ${
                selectedPlan === 'familiar' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-purple-600 hover:bg-purple-700'
              }`}
            >
              Continuar al Registro
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Membresias;
