import { useScrollDirection } from "@/hooks/useScrollDirection";
import { RippleButton } from "@/components/ui/ripple-button";
import { cn, smoothScrollToElement } from "@/lib/utils";
import React from "react";
import MobileMenu from "./MobileMenu";
import logoYCC from "@/assets/logo-ycc-waterpark-new.png";
import { Calendar } from "lucide-react";

const TopBar = React.memo(() => {
  const { scrollY } = useScrollDirection();
  const isScrolled = scrollY > 50;

  return (
    <div className={cn(
      "sticky top-0 z-50 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white shadow-lg safe-area-inset transition-all duration-300",
      isScrolled ? "shadow-2xl" : "",
      "h-16 sm:h-18 md:h-20"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full gap-4">
          {/* Logo - Left */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <button 
              onClick={() => window.location.href = '/'}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md transition-transform active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Ir para página inicial"
            >
              <img 
                src={logoYCC} 
                alt="YCC Water Park" 
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transition-all duration-300"
              />
            </button>
          </div>

          {/* Desktop - Nav Links Center + CTAs Right */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
            {/* Nav Links */}
            <nav className="flex items-center gap-6" aria-label="Navegação principal">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollToElement('attractions', 80);
                }}
                className="text-white font-semibold hover:text-white/80 active:text-white/70 transition-all text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-600 rounded-md px-3 py-2 min-h-[44px] touch-manipulation"
                aria-label="Ir a la sección de atracciones"
              >
                Atracciones
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollToElement('plan-visit-form', 80);
                }}
                className="text-white font-semibold hover:text-white/80 active:text-white/70 transition-all text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-600 rounded-md px-3 py-2 min-h-[44px] touch-manipulation"
                aria-label="Agendar visita guiada"
              >
                Visitar
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollToElement('contact', 80);
                }}
                className="text-white font-semibold hover:text-white/80 active:text-white/70 transition-all text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-600 rounded-md px-3 py-2 min-h-[44px] touch-manipulation"
                aria-label="Ir a la sección de contacto"
              >
                Contacto
              </button>
            </nav>

            {/* Secondary CTA - Agendar Visita */}
            <button
              onClick={(e) => {
                e.preventDefault();
                smoothScrollToElement('plan-visit-form', 80);
              }}
              className="border-2 border-white bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-semibold px-5 py-2.5 rounded-full min-h-[44px] touch-manipulation transition-all flex items-center gap-2"
              aria-label="Agendar visita guiada"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Visita</span>
            </button>

          </div>

          {/* Mobile - Menu */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Menu Hambúrguer */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
});

TopBar.displayName = "TopBar";

export default TopBar;
