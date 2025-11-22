import { useScrollDirection } from "@/hooks/useScrollDirection";
import { RippleButton } from "@/components/ui/ripple-button";
import { ColoredRipple } from "@/components/ui/colored-ripple";
import { cn, navigateToSection } from "@/lib/utils";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import logoYCC from "@/assets/logo-ycc-waterpark-new.png";
import { Calendar, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TopBar = React.memo(() => {
  const { scrollY } = useScrollDirection();
  const isScrolled = scrollY > 50;
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
              {/* Atracciones Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button 
                  className="text-white font-semibold hover:text-white/80 active:text-white/70 transition-all text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-600 rounded-md px-3 py-2 min-h-[44px] touch-manipulation flex items-center gap-1"
                  aria-label="Menú de atracciones"
                >
                  Atracciones
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform",
                    isDropdownOpen && "rotate-180"
                  )} />
                </button>
                
                {/* Backdrop */}
                {isDropdownOpen && (
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsDropdownOpen(false)}
                    aria-hidden="true"
                  />
                )}
                
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-border z-50 overflow-hidden">
                    <ColoredRipple
                      color="rgb(59, 130, 246)"
                      onClick={() => {
                        navigate('/atracciones/acuaticas');
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 transition-all duration-300 text-foreground font-medium border-b border-border/50 border-l-4 border-l-transparent hover:border-l-blue-500 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 hover:text-blue-600 hover:shadow-[0_4px_12px_rgba(59,130,246,0.2)]"
                      ariaLabel="Ir a atracciones acuáticas"
                    >
                      Atracciones Acuáticas
                    </ColoredRipple>
                    <ColoredRipple
                      color="rgb(168, 85, 247)"
                      onClick={() => {
                        navigate('/atracciones/spa');
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 transition-all duration-300 text-foreground font-medium border-b border-border/50 border-l-4 border-l-transparent hover:border-l-purple-500 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-400/10 hover:text-purple-600 hover:shadow-[0_4px_12px_rgba(168,85,247,0.2)]"
                      ariaLabel="Ir a spa y relax"
                    >
                      Spa & Relax
                    </ColoredRipple>
                    <ColoredRipple
                      color="rgb(16, 185, 129)"
                      onClick={() => {
                        navigate('/atracciones/deportes');
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 transition-all duration-300 text-foreground font-medium border-b border-border/50 border-l-4 border-l-transparent hover:border-l-green-500 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-600/10 hover:text-green-600 hover:shadow-[0_4px_12px_rgba(16,185,129,0.2)]"
                      ariaLabel="Ir a deportes"
                    >
                      Deportes
                    </ColoredRipple>
                    <ColoredRipple
                      color="rgb(249, 115, 22)"
                      onClick={() => {
                        navigate('/atracciones/gastronomia');
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 transition-all duration-300 text-foreground font-medium border-b border-border/50 border-l-4 border-l-transparent hover:border-l-orange-500 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-amber-500/10 hover:text-orange-600 hover:shadow-[0_4px_12px_rgba(249,115,22,0.2)]"
                      ariaLabel="Ir a gastronomía"
                    >
                      Gastronomía
                    </ColoredRipple>
                    <ColoredRipple
                      color="rgb(236, 72, 153)"
                      onClick={() => {
                        navigate('/atracciones/kids');
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 transition-all duration-300 text-foreground font-medium border-b border-border/50 border-l-4 border-l-transparent hover:border-l-pink-500 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-rose-500/10 hover:text-pink-600 hover:shadow-[0_4px_12px_rgba(236,72,153,0.2)]"
                      ariaLabel="Ir a kids zone"
                    >
                      Kids Zone
                    </ColoredRipple>
                    <ColoredRipple
                      color="rgb(217, 119, 6)"
                      onClick={() => {
                        navigate('/atracciones/bungalows');
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 transition-all duration-300 text-foreground font-medium border-l-4 border-l-transparent hover:border-l-amber-600 hover:bg-gradient-to-r hover:from-amber-600/10 hover:to-yellow-600/10 hover:text-amber-600 hover:shadow-[0_4px_12px_rgba(217,119,6,0.2)]"
                      ariaLabel="Ir a bungalows VIP"
                    >
                      Bungalows VIP
                    </ColoredRipple>
                  </div>
                )}
              </div>

              <button 
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection('plan-visit-form', 80);
                }}
                className="text-white font-semibold hover:text-white/80 active:text-white/70 transition-all text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-600 rounded-md px-3 py-2 min-h-[44px] touch-manipulation"
                aria-label="Agendar visita guiada"
              >
                Visitar
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection('contact', 80);
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
                navigateToSection('plan-visit-form', 80);
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
