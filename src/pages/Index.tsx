import { Button } from "@/components/ui/button";
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
      <section className="relative h-screen overflow-hidden pt-[104px] sm:pt-[110px] lg:pt-[136px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/80" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4 sm:mb-6 animate-float drop-shadow-2xl leading-tight">
            YCC WATER PARK
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-6 sm:mb-8 max-w-3xl drop-shadow-lg font-medium px-4">
            Mergulhe na diversão! O maior parque aquático da região
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('booking')}
              className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 text-accent-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-glow transition-transform hover:scale-105 w-full sm:w-auto"
            >
              Comprar Ingressos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('attractions')}
              className="bg-white/10 hover:bg-white/20 text-white border-white/50 backdrop-blur-sm font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full transition-transform hover:scale-105 w-full sm:w-auto"
            >
              Ver Atrações
            </Button>
          </div>
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
