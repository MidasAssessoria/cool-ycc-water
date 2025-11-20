import { Menu } from "lucide-react";
import { RippleButton } from "@/components/ui/ripple-button";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logoYCC from "@/assets/logo-ycc-waterpark.png";

const MobileMenu = React.memo(() => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-foreground hover:bg-accent active:bg-accent/80 min-w-[44px] min-h-[44px] touch-manipulation"
          aria-label="Abrir menu de navegação"
          aria-expanded="false"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      
      <SheetContent 
        side="right" 
        className="w-[85vw] sm:w-[400px] overflow-y-auto p-0 safe-area-inset animate-slide-in-right flex flex-col"
        aria-label="Menu de navegação principal"
      >
        {/* Header com gradiente laranja */}
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white p-6">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-center">
              <img 
                src={logoYCC} 
                alt="YCC Water Park" 
                className="h-12 w-auto"
              />
            </SheetTitle>
          </SheetHeader>
        </div>
        
        {/* Nav Links */}
        <div className="flex flex-col p-6 bg-background flex-1">
          <nav className="flex flex-col gap-2" aria-label="Menu principal">
            <button
              onClick={() => {
                window.location.href = '/#attractions';
              }}
              className="py-4 text-lg font-semibold text-foreground hover:bg-accent rounded-md transition-colors text-left px-4 min-h-[48px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Atrações
            </button>
            <button
              onClick={() => {
                window.location.href = '/#booking';
              }}
              className="py-4 text-lg font-semibold text-foreground hover:bg-accent rounded-md transition-colors text-left px-4 min-h-[48px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Ingressos
            </button>
            <button
              onClick={() => {
                window.location.href = '/#contact';
              }}
              className="py-4 text-lg font-semibold text-foreground hover:bg-accent rounded-md transition-colors text-left px-4 min-h-[48px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Contato
            </button>
          </nav>
        </div>

        {/* CTA at bottom */}
        <div className="p-6 bg-background border-t border-border">
          <RippleButton 
            className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#EE5A52] hover:from-[#EE5A52] hover:to-[#DD4A42] text-white font-bold text-lg py-4 rounded-full shadow-xl min-h-[56px] touch-manipulation"
            aria-label="Comprar ingressos"
          >
            🎟️ Comprar Ingressos
          </RippleButton>
        </div>
      </SheetContent>
    </Sheet>
  );
});

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
