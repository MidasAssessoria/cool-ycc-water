import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import logoYCC from "@/assets/logo-ycc-waterpark-new.png";
import { navigateToSection } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [atraccionesOpen, setAtraccionesOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    setOpen(false);
    setTimeout(() => {
      navigateToSection(sectionId, 80);
    }, 100);
  };

  const handleNavigateToPage = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="p-2 text-white hover:bg-white/10 rounded-md transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Abrir menú de navegação"
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-[300px] sm:w-[400px] bg-background border-l border-border overflow-y-auto"
      >
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="text-left">
            <img 
              src={logoYCC} 
              alt="YCC Water Park" 
              className="h-12 w-auto"
            />
          </SheetTitle>
        </SheetHeader>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 mt-8">
          {/* Atracciones with Submenu */}
          <div className="border-b border-border pb-2">
            <button
              onClick={() => setAtraccionesOpen(!atraccionesOpen)}
              className="w-full flex items-center justify-between text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-accent"
            >
              Atracciones
              <ChevronDown className={cn(
                "w-5 h-5 transition-transform",
                atraccionesOpen && "rotate-180"
              )} />
            </button>
            
            {atraccionesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <button
                  onClick={() => handleNavigateToPage('/atracciones/acuaticas')}
                  className="w-full text-left text-base text-muted-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-accent"
                >
                  🌊 Atracciones Acuáticas
                </button>
                <button
                  onClick={() => handleNavigateToPage('/atracciones/spa')}
                  className="w-full text-left text-base text-muted-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-accent"
                >
                  ✨ Spa & Relax
                </button>
                <button
                  onClick={() => handleNavigateToPage('/atracciones/deportes')}
                  className="w-full text-left text-base text-muted-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-accent"
                >
                  🏆 Deportes
                </button>
                <button
                  onClick={() => handleNavigateToPage('/atracciones/gastronomia')}
                  className="w-full text-left text-base text-muted-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-accent"
                >
                  🍽️ Gastronomía
                </button>
                <button
                  onClick={() => handleNavigateToPage('/atracciones/kids')}
                  className="w-full text-left text-base text-muted-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-accent"
                >
                  🎈 Kids Zone
                </button>
                <button
                  onClick={() => handleNavigateToPage('/atracciones/bungalows')}
                  className="w-full text-left text-base text-muted-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-accent"
                >
                  🏡 Bungalows VIP
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavigation('plan-visit-form')}
            className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-accent"
          >
            Visitar
          </button>
          <button
            onClick={() => handleNavigation('contact')}
            className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-accent"
          >
            Contacto
          </button>
          <button
            onClick={() => handleNavigateToPage('/membresias')}
            className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-accent"
          >
            Membresías
          </button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
