import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import logoYCC from "@/assets/logo-ycc-waterpark-new.png";
import { navigateToSection } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ColoredRipple } from "@/components/ui/colored-ripple";

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
              <div className="ml-4 mt-2 space-y-2 animate-slide-in-right">
                <ColoredRipple
                  color="rgb(59, 130, 246)"
                  onClick={() => handleNavigateToPage('/atracciones/acuaticas')}
                  className="w-full text-left text-base text-foreground hover:font-bold transition-all duration-300 py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 hover:text-blue-600 flex items-center gap-3 group"
                  ariaLabel="Ir a atracciones acuáticas"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-150 transition-transform duration-300"></span>
                  Atracciones Acuáticas
                </ColoredRipple>
                <ColoredRipple
                  color="rgb(168, 85, 247)"
                  onClick={() => handleNavigateToPage('/atracciones/spa')}
                  className="w-full text-left text-base text-foreground hover:font-bold transition-all duration-300 py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-400/10 hover:text-purple-600 flex items-center gap-3 group"
                  ariaLabel="Ir a spa y relax"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 group-hover:scale-150 transition-transform duration-300"></span>
                  Spa & Relax
                </ColoredRipple>
                <ColoredRipple
                  color="rgb(16, 185, 129)"
                  onClick={() => handleNavigateToPage('/atracciones/deportes')}
                  className="w-full text-left text-base text-foreground hover:font-bold transition-all duration-300 py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-600/10 hover:text-green-600 flex items-center gap-3 group"
                  ariaLabel="Ir a deportes"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 group-hover:scale-150 transition-transform duration-300"></span>
                  Deportes
                </ColoredRipple>
                <ColoredRipple
                  color="rgb(249, 115, 22)"
                  onClick={() => handleNavigateToPage('/atracciones/gastronomia')}
                  className="w-full text-left text-base text-foreground hover:font-bold transition-all duration-300 py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-amber-500/10 hover:text-orange-600 flex items-center gap-3 group"
                  ariaLabel="Ir a gastronomía"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 group-hover:scale-150 transition-transform duration-300"></span>
                  Gastronomía
                </ColoredRipple>
                <ColoredRipple
                  color="rgb(236, 72, 153)"
                  onClick={() => handleNavigateToPage('/atracciones/kids')}
                  className="w-full text-left text-base text-foreground hover:font-bold transition-all duration-300 py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-rose-500/10 hover:text-pink-600 flex items-center gap-3 group"
                  ariaLabel="Ir a kids zone"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 group-hover:scale-150 transition-transform duration-300"></span>
                  Kids Zone
                </ColoredRipple>
                <ColoredRipple
                  color="rgb(217, 119, 6)"
                  onClick={() => handleNavigateToPage('/atracciones/bungalows')}
                  className="w-full text-left text-base text-foreground hover:font-bold transition-all duration-300 py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-amber-600/10 hover:to-yellow-600/10 hover:text-amber-600 flex items-center gap-3 group"
                  ariaLabel="Ir a bungalows VIP"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-amber-600 to-yellow-600 group-hover:scale-150 transition-transform duration-300"></span>
                  Bungalows VIP
                </ColoredRipple>
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
