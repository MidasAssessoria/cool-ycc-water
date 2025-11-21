import React, { useState, lazy, Suspense, useMemo, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { smoothScrollToElement, cn } from "@/lib/utils";
import { Sparkles, Heart, Dumbbell, Calendar, Calculator, CheckCircle2, ExternalLink, HelpCircle, Phone, Instagram, MapPin, Sun, Search, X, MessageCircle } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { VIPComparisonTable } from "@/components/pricing/VIPComparisonTable";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";
import MembresiaPricingSection from "@/components/pricing/MembresiaPricingSection";
import Navigation from "@/components/navigation/Navigation";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";
import { SEOHead } from "@/components/SEOHead";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useLazyAccordion } from "@/hooks/useLazyAccordion";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { FAQItem } from "@/components/FAQItem";
import { faqData } from "@/data/faq-data";
import logoYCC from "@/assets/logo-ycc-waterpark.png";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { getTimelineData } from "@/data/timeline-data";
import { OptimizedPicture } from "@/components/OptimizedPicture";
import { HeroBackground } from "@/components/HeroBackground";

// Code splitting: lazy load Timeline component
const Timeline = lazy(() => import("@/components/ui/timeline").then(m => ({ default: m.Timeline })));

const Membresias = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'familiar' | 'vip' | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Performance: detect reduced motion preference
  const prefersReducedMotion = usePrefersReducedMotion();

  // Prefetch Timeline component on mount for faster loading
  useEffect(() => {
    let isCancelled = false;
    
    // Prefetch Timeline after initial render - otimizado para 200ms (Fase 1.3)
    const timer = setTimeout(() => {
      if (!isCancelled) {
        import("@/components/ui/timeline").catch(() => {
          // Silently fail if prefetch fails
        });
      }
    }, 200); // Otimizado de 500ms para 200ms
    
    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, []);

  // Intersection observers para cards timeline - chamada direta de hooks
  const card1Animation = useIntersectionAnimation({ threshold: 0.2 });
  const card2Animation = useIntersectionAnimation({ threshold: 0.2 });
  const card3Animation = useIntersectionAnimation({ threshold: 0.2 });
  const card4Animation = useIntersectionAnimation({ threshold: 0.2 });

  // Lazy rendering for FAQ Accordion - otimizado para 8 itens iniciais (Fase 1.2)
  const { renderedCount, containerRef } = useLazyAccordion(faqData.length, 8);

  // Debounce search term to reduce re-renders (300ms delay)
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);

  // Filter FAQs based on debounced search term and active category
  // Using debounced value prevents excessive re-renders during typing
  const filteredFAQs = useMemo(() => {
    let filtered = faqData;

    // Filter by category
    if (activeCategory) {
      filtered = filtered.filter(faq => faq.category === activeCategory);
    }

    // Filter by debounced search term (300ms delay)
    if (debouncedSearchTerm.trim()) {
      const searchLower = debouncedSearchTerm.toLowerCase().trim();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(searchLower) ||
        faq.answer.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [faqData, debouncedSearchTerm, activeCategory]);

  // Highlight search terms - Memoized callback
  const highlightText = useCallback((text: string) => {
    if (!debouncedSearchTerm.trim()) return text;
    
    const parts = text.split(new RegExp(`(${debouncedSearchTerm})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === debouncedSearchTerm.toLowerCase() 
        ? <mark key={index} className="bg-yellow-200 text-foreground font-semibold px-0.5 rounded">{part}</mark>
        : part
    );
  }, [debouncedSearchTerm]);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(faqData.map(faq => faq.category)));
    return uniqueCategories.map(cat => {
      const faq = faqData.find(f => f.category === cat)!;
      return {
        id: cat,
        label: faq.categoryLabel,
        color: faq.categoryColor
      };
    });
  }, [faqData]);

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

  // Memoize timelineData com todas as dependências corretas
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
        {/* Background Image with WebP support */}
        <HeroBackground aria-label="Parque acuático YCC Water Park" />
        
        {/* Gradient Overlay - Simplified for better performance */}
        <div className="absolute inset-0 bg-gradient-to-br from-hero-cyan/75 to-hero-orange/65" />
        
        {/* Floating Elements - respects prefers-reduced-motion */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Circle 1 - Top Left - Cyan - Optimized blur */}
            <div 
              className="absolute top-16 left-8 w-48 h-48 bg-cyan-400/40 rounded-full blur-[60px] animate-float will-change-transform"
              style={{ animationDelay: '0s', animationDuration: '6s' }}
            />
            
            {/* Circle 2 - Bottom Right - Orange - Optimized blur */}
            <div 
              className="absolute bottom-32 right-16 w-64 h-64 bg-orange-400/35 rounded-full blur-[70px] animate-float will-change-transform"
              style={{ animationDelay: '1.5s', animationDuration: '7s' }}
            />
            
            {/* Circle 3 - Center Left - White/Cyan - Optimized blur */}
            <div 
              className="absolute top-1/2 left-1/4 w-56 h-56 bg-white/30 rounded-full blur-[65px] animate-float will-change-transform"
              style={{ animationDelay: '3s', animationDuration: '8s' }}
            />
            
            {/* Circle 4 - Top Right - Additional depth - Optimized blur */}
            <div 
              className="absolute top-24 right-1/4 w-40 h-40 bg-cyan-300/25 rounded-full blur-[50px] animate-float will-change-transform"
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
          <div className="flex items-center justify-center min-h-[400px] py-20 bg-white">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm font-medium text-muted-foreground">Cargando beneficios...</p>
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
      
      {/* Skip link for FAQ section - Accessibility */}
      <a
        href="#faq-section"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-white focus:rounded-md focus:top-20 focus:left-4 focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Saltar a preguntas frecuentes
      </a>

      {/* FAQ Section - Interactive with Search & Filtering + A11y */}
      <section 
        id="faq-section" 
        className="bg-white py-12 sm:py-16 md:py-20"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full mb-4">
              <HelpCircle className="w-5 h-5 mr-2 text-blue-600" aria-hidden="true" />
              <span className="text-sm font-bold text-blue-700">FAQ</span>
            </div>
            <h2 
              id="faq-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 sm:mb-4 leading-tight"
            >
              Preguntas frecuentes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Resuelve tus dudas sobre las membresías
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 sm:mb-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <Input
                type="text"
                placeholder="Buscar preguntas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-10 py-6 text-base border-2 focus:border-primary rounded-xl"
                aria-label="Buscar en preguntas frecuentes"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
                  aria-label="Limpiar búsqueda"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>
            
            {/* Results Counter */}
            {(searchTerm || activeCategory) && (
              <div className="mt-3 text-sm text-muted-foreground text-center" role="status" aria-live="polite">
                {filteredFAQs.length === 0 
                  ? 'No se encontraron resultados' 
                  : `${filteredFAQs.length} ${filteredFAQs.length === 1 ? 'pregunta encontrada' : 'preguntas encontradas'}`
                }
              </div>
            )}
          </div>

          {/* Category Index */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "px-3 py-3 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 border-2",
                !activeCategory
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-background text-foreground border-border hover:border-primary/50 hover:bg-muted"
              )}
            >
              Todas
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-3 py-3 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 border-2",
                  activeCategory === cat.id
                    ? cat.color === 'cyan'
                      ? "bg-cyan-600 text-white border-cyan-600 shadow-md"
                      : "bg-orange-600 text-white border-orange-600 shadow-md"
                    : "bg-background text-foreground border-border hover:border-primary/50 hover:bg-muted"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion with filtered FAQs - Optimized with React.memo + A11y */}
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12 px-4 bg-blue-50 rounded-xl border-2 border-blue-100">
              <HelpCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" aria-hidden="true" />
              <p className="text-lg font-semibold mb-2 text-foreground">No se encontraron preguntas</p>
              <p className="text-sm text-muted-foreground mb-6">
                Intenta con otros términos de búsqueda o categorías
              </p>
              <div className="p-4 bg-white rounded-lg border border-blue-200 max-w-md mx-auto">
                <p className="text-sm text-foreground mb-3 font-medium">
                  ¿No encontraste lo que buscabas?
                </p>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => window.open('https://wa.me/595981123456', '_blank', 'noopener,noreferrer')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  aria-label="Contactar por WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                  Contacta con nosotros por WhatsApp
                </Button>
              </div>
            </div>
          ) : (
            <Accordion 
              type="single" 
              collapsible 
              className="w-full space-y-4 sm:space-y-5 md:space-y-6"
              aria-label={`Acordeón de preguntas frecuentes con ${filteredFAQs.length} preguntas`}
            >
              <div ref={containerRef} className="space-y-4 sm:space-y-5">
                {filteredFAQs.map((faq, index) => {
                  // Only render category headers when not filtering
                  const showCategoryHeader = !debouncedSearchTerm && !activeCategory && 
                    (index === 0 || filteredFAQs[index - 1].category !== faq.category);
                  
                  // Lazy loading logic - render first 5, then load more
                  const shouldRender = index < 5 || renderedCount > index;
                  
                  if (!shouldRender) return null;

                  return (
                    <FAQItem
                      key={faq.id}
                      id={faq.id}
                      question={faq.question}
                      answer={faq.answer}
                      categoryLabel={faq.categoryLabel}
                      categoryColor={faq.categoryColor}
                      icon={faq.icon}
                      showCategoryHeader={showCategoryHeader}
                      isFirstInCategory={index > 0}
                      highlightText={highlightText}
                      actionButton={faq.actionButton}
                    />
                  );
                })}
              </div>
            </Accordion>
          )}
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
          onOpenAutoFocus={(e) => {
            // Focus first interactive element (Continuar button) for better UX
            e.preventDefault();
            const target = e.currentTarget as HTMLElement;
            const continueButton = target.querySelector('[aria-label*="Continuar"]') as HTMLElement;
            continueButton?.focus();
          }}
          onCloseAutoFocus={(e) => {
            // Prevent auto-focus on close to avoid unwanted scroll
            e.preventDefault();
          }}
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
