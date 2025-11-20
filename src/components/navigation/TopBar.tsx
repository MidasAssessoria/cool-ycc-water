import { useScrollDirection } from "@/hooks/useScrollDirection";
import { RippleButton } from "@/components/ui/ripple-button";
import { cn } from "@/lib/utils";
import React from "react";
import MobileMenu from "./MobileMenu";
import logoYCC from "@/assets/logo-ycc-waterpark.png";

const TopBar = React.memo(() => {
  const { scrollY } = useScrollDirection();
  const isScrolled = scrollY > 50;

  return (
    <div className={cn(
      "sticky top-0 z-50 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white shadow-lg safe-area-inset transition-all duration-300",
      isScrolled ? "shadow-2xl" : "",
      "h-14 sm:h-16 md:h-20"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo - Left */}
          <div className="flex items-center flex-shrink-0">
            <button 
              onClick={() => window.location.href = '/'}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              aria-label="Ir para página inicial"
            >
              <img 
                src={logoYCC} 
                alt="YCC Water Park" 
                className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto transition-all duration-300"
              />
            </button>
          </div>

          {/* Desktop - Nav Links Center + CTA Right */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {/* Nav Links */}
            <nav className="flex items-center gap-8">
              <button 
                onClick={() => window.location.href = '/#attractions'}
                className="text-white font-semibold hover:text-white/80 transition-colors text-base"
              >
                Atrações
              </button>
              <button 
                onClick={() => window.location.href = '/#booking'}
                className="text-white font-semibold hover:text-white/80 transition-colors text-base"
              >
                Ingressos
              </button>
              <button 
                onClick={() => window.location.href = '/#contact'}
                className="text-white font-semibold hover:text-white/80 transition-colors text-base"
              >
                Contato
              </button>
            </nav>

            {/* Primary CTA - Responsive sizing */}
            <RippleButton 
              className="bg-gradient-to-r from-coral to-coral-dark hover:from-coral-dark hover:to-[hsl(4,90%,58%)] text-white font-bold text-base md:text-lg lg:text-xl px-6 md:px-8 py-2.5 md:py-3.5 rounded-full shadow-xl hover:shadow-2xl [@media(hover:hover)]:hover:scale-110 transition-all"
              aria-label="Comprar ingressos"
            >
              🎟️ Comprar Ingressos
            </RippleButton>
          </div>

          {/* Mobile - Hamburger Only */}
          <div className="lg:hidden flex items-center">
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
});

TopBar.displayName = "TopBar";

export default TopBar;
