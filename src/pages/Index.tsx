import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-waterpark.jpg";
import Navigation from "@/components/navigation/Navigation";
import AquaParkSection from "@/components/AquaParkSection";
import AttractionsSection from "@/components/AttractionsSection";
// BungalowsHeroSection disponível para uso futuro em página dedicada /bungalows
// import BungalowsHeroSection from "@/components/BungalowsHeroSection";
import BungalowsCompactSection from "@/components/BungalowsCompactSection";
import PlanYourVisitSection from "@/components/PlanYourVisitSection";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden pt-[64px] sm:pt-[80px] lg:pt-[80px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          {/* USP Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6 animate-fade-in">
            🏆 Maior Parque Aquático do Paraguai
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            Diversão Para Toda a Família
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl drop-shadow-lg">
            Toboáguas, piscinas, áreas kids em 25 hectares
          </p>

          {/* CTAs with Clear Hierarchy */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* PRIMARY CTA - Extra large and prominent */}
            <Button 
              size="lg"
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-to-r from-[#FF6B6B] to-[#EE5A52] hover:from-[#EE5A52] hover:to-[#DD4A42] text-white font-bold text-xl px-10 py-8 h-16 rounded-full shadow-2xl hover:scale-110 transition-all animate-gentle-pulse"
            >
              🎟️ Comprar Ingressos
            </Button>

            {/* SECONDARY CTA - Smaller and less prominent */}
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('attractions')}
              className="bg-white/20 hover:bg-white/30 text-white border-white/50 backdrop-blur-sm font-semibold text-lg px-8 py-6 h-14 rounded-full hover:scale-105 transition-all"
            >
              Ver Atrações
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 text-background" viewBox="0 0 1440 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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


      {/* Footer */}
      <footer className="bg-card py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">YCC Water Park</h3>
          <p className="text-muted-foreground">
            © 2025 YCC Water Park. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
