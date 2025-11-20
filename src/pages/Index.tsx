import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Sun, Globe, User, Search } from "lucide-react";
import heroImage from "@/assets/hero-waterpark.jpg";
import logoYCC from "@/assets/logo-ycc-waterpark.png";

import Navigation from "@/components/navigation/Navigation";
import AquaParkSection from "@/components/AquaParkSection";
import AttractionsSection from "@/components/AttractionsSection";
// BungalowsHeroSection disponível para uso futuro em página dedicada /bungalows
// import BungalowsHeroSection from "@/components/BungalowsHeroSection";
import BungalowsCompactSection from "@/components/BungalowsCompactSection";
import PlanYourVisitSection from "@/components/PlanYourVisitSection";
import { smoothScrollToElement } from "@/lib/utils";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    smoothScrollToElement(sectionId, 80);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section - FASE 2: Mobile optimized (60vh) */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] min-h-[500px] sm:min-h-[600px] overflow-hidden pt-[64px] sm:pt-[72px] lg:pt-[80px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          {/* USP Badge - Mobile optimized with better touch targets */}
          <div 
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-coral/90 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4 md:mb-6 animate-fade-in shadow-lg min-h-[36px]"
            role="status"
            aria-label="Destaque: Maior Parque Aquático do Paraguai"
          >
            🏆 Maior Parque Aquático do Paraguai
          </div>

          {/* Headline - Mobile optimized with tighter line-height */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-3 md:mb-4 drop-shadow-2xl leading-[1.1] sm:leading-tight px-2">
            Diversão Para Toda a Família
          </h1>

          {/* Subheadline - Mobile optimized spacing */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-8 max-w-2xl drop-shadow-lg px-4 leading-relaxed">
            Toboáguas, piscinas, áreas kids em 25 hectares
          </p>

          {/* CTAs - Mobile: stacked full-width, Desktop: inline auto-width */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto max-w-md sm:max-w-none px-4">
            {/* PRIMARY CTA - Touch optimized with min-h-[56px] */}
            <Button 
              size="lg"
              onClick={() => scrollToSection('booking')}
              className="w-full sm:w-auto bg-gradient-to-r from-coral to-coral-dark hover:from-coral-dark hover:to-[hsl(4,90%,58%)] active:from-[hsl(4,90%,58%)] active:to-coral-dark text-white font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 min-h-[56px] sm:min-h-[60px] md:h-16 rounded-full shadow-2xl [@media(hover:hover)]:hover:scale-105 active:scale-95 transition-all animate-gentle-pulse touch-manipulation"
            >
              🎟️ Comprar Ingressos
            </Button>

            {/* SECONDARY CTA - Touch optimized */}
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('attractions')}
              className="w-full sm:w-auto bg-white/20 hover:bg-white/30 active:bg-white/40 text-white border-2 border-white/50 backdrop-blur-sm font-semibold text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-3.5 sm:py-4 md:py-5 min-h-[52px] sm:min-h-[56px] md:h-14 rounded-full [@media(hover:hover)]:hover:scale-105 active:scale-95 transition-all touch-manipulation"
            >
              Ver Atrações
            </Button>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden sm:block absolute bottom-32 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 sm:h-20 md:h-24 text-background" viewBox="0 0 1440 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </svg>
        </div>
      </section>

      {/* Attractions Section */}
      <section id="attractions">
        <AttractionsSection />
      </section>

      {/* Aqua Park Hero Section */}
      <AquaParkSection />

      {/* Plan Your Visit Section - Replaces Booking Form + Location */}
      <section id="booking">
        <PlanYourVisitSection />
      </section>

      {/* Bungalows Compact Section */}
      <section id="bungalows">
        <BungalowsCompactSection />
      </section>


      {/* Footer Expandido - FASE 7: Touch targets optimized */}
      <footer className="bg-charcoal text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            {/* Column 1: Logo + Contact */}
            <div className="space-y-4">
              <img src={logoYCC} alt="YCC Water Park" className="h-12 w-auto mb-4" />
              <div className="space-y-2 text-white/70">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">Fortaleza - CE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">32°C - Clima perfeito!</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h4 className="font-bold text-white text-base">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('attractions')}
                    className="text-white/70 hover:text-white active:text-white/90 transition-colors text-sm text-left py-2 min-h-[44px] w-full touch-manipulation"
                  >
                    Atrações
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('booking')}
                    className="text-white/70 hover:text-white active:text-white/90 transition-colors text-sm text-left py-2 min-h-[44px] w-full touch-manipulation"
                  >
                    Contato
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('bungalows')}
                    className="text-white/70 hover:text-white active:text-white/90 transition-colors text-sm text-left py-2 min-h-[44px] w-full touch-manipulation"
                  >
                    Bungalows
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center text-white/50 pt-8 border-t border-white/10">
            <p className="text-sm">
              © 2025 YCC Water Park. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
