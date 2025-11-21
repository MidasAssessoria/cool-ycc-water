import { Calendar, Menu } from "lucide-react";
import { RippleButton } from "@/components/ui/ripple-button";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logoYCC from "@/assets/logo-ycc-waterpark.png";
import { smoothScrollToElement } from "@/lib/utils";

const MobileMenu = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    smoothScrollToElement(sectionId, 80);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="lg:hidden text-white hover:bg-white/10 active:bg-white/20 min-h-[44px] touch-manipulation flex items-center gap-2 px-3"
          aria-label="Abrir menú de navegación"
          aria-expanded={isOpen}
        >
          <Menu className="h-5 w-5" />
          <span className="font-semibold text-sm">Menú</span>
        </Button>
      </SheetTrigger>
      
      <SheetContent 
        side="right" 
        className="w-[280px] sm:w-[320px] md:w-[400px] overflow-y-auto p-0 safe-area-inset flex flex-col"
        aria-label="Menú de navegación principal"
      >
        {/* Header com gradiente laranja */}
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white p-4 sm:p-6 shadow-lg">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-center">
              <img 
                src={logoYCC} 
                alt="YCC Water Park" 
                className="h-10 sm:h-12 w-auto"
              />
            </SheetTitle>
          </SheetHeader>
        </div>
        
        {/* Nav Links */}
        <div className="flex flex-col p-4 sm:p-6 bg-background flex-1">
          <nav className="flex flex-col gap-1" aria-label="Menú principal">
            <button
              onClick={() => handleNavigation('hero')}
              className="py-3.5 text-base sm:text-lg font-semibold text-foreground hover:bg-accent active:bg-accent/80 rounded-lg transition-all text-left px-4 min-h-[52px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              🏠 Inicio
            </button>
            <button
              onClick={() => handleNavigation('attractions')}
              className="py-3.5 text-base sm:text-lg font-semibold text-foreground hover:bg-accent active:bg-accent/80 rounded-lg transition-all text-left px-4 min-h-[52px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              🎢 Atracciones
            </button>
            <button
              onClick={() => handleNavigation('plan-visit-form')}
              className="py-3.5 text-base sm:text-lg font-semibold text-foreground hover:bg-accent active:bg-accent/80 rounded-lg transition-all text-left px-4 min-h-[52px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              📅 Visitar
            </button>
            <button
              onClick={() => handleNavigation('bungalows')}
              className="py-3.5 text-base sm:text-lg font-semibold text-foreground hover:bg-accent active:bg-accent/80 rounded-lg transition-all text-left px-4 min-h-[52px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              🏡 Bungalows
            </button>
            <button
              onClick={() => handleNavigation('membership')}
              className="py-3.5 text-base sm:text-lg font-semibold text-foreground hover:bg-accent active:bg-accent/80 rounded-lg transition-all text-left px-4 min-h-[52px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              💎 Membresias
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="py-3.5 text-base sm:text-lg font-semibold text-foreground hover:bg-accent active:bg-accent/80 rounded-lg transition-all text-left px-4 min-h-[52px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              📞 Contacto
            </button>
            
            {/* Separator */}
            <div className="border-t border-border my-2" />
            
            {/* Agendar Visita - Destaque */}
            <button
              onClick={() => handleNavigation('plan-visit-form')}
              className="py-3.5 text-base sm:text-lg font-semibold text-coral hover:bg-coral/10 active:bg-coral/20 rounded-lg transition-all text-left px-4 min-h-[52px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span>📅 Agendar Visita</span>
            </button>
          </nav>
        </div>

      </SheetContent>
    </Sheet>
  );
});

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
