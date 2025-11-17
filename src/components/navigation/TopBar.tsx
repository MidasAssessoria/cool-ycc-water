import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search, User, Globe, MapPin, Sun, Package, Ticket, Waves, Hotel, Sparkles, Moon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useAccessibility } from "@/hooks/useAccessibility";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { RippleButton } from "@/components/ui/ripple-button";
import { cn } from "@/lib/utils";
import React from "react";
import MobileMenu from "./MobileMenu";
import logoYCC from "@/assets/logo-ycc-waterpark.png";

const TopBar = React.memo(() => {
  const { highContrast, toggleHighContrast } = useAccessibility();
  const { scrollY } = useScrollDirection();
  const isScrolled = scrollY > 50;

  return (
    <div className={cn(
      "bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white shadow-lg safe-area-inset transition-all duration-300",
      isScrolled ? "h-14 md:h-16" : "h-16 md:h-20"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo - Always on left */}
          <div className="flex items-center flex-shrink-0">
            <button 
              onClick={() => window.location.href = '/'}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              aria-label="Ir para página inicial"
            >
              <img 
                src={logoYCC} 
                alt="YCC Water Park Resort" 
                className={cn(
                  "w-auto transition-all duration-300",
                  isScrolled ? "h-8 sm:h-10 md:h-12" : "h-10 sm:h-12 md:h-16"
                )}
              />
            </button>
          </div>

          {/* Desktop Navigation Menu - Center */}
          <div className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-white/90 bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10">
                    <Waves className="w-4 h-4 mr-2 text-blue-400" />
                    PARQUES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] grid grid-cols-2 gap-4 p-4 bg-background shadow-2xl border border-border z-[100] animate-slide-down-fade">
                      {/* Image Column */}
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img 
                          src="/placeholder.svg" 
                          alt="YCC Water Park"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Options Column */}
                      <div className="space-y-2">
                        <NavigationMenuLink className="block p-3 hover:bg-muted rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all hover:scale-105">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-foreground">YCC Water Park</span>
                            <Badge variant="popular">POPULAR</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Diversão para toda a família</p>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink className="block p-3 hover:bg-muted rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all hover:scale-105">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-foreground">Área Kids</span>
                            <Badge variant="novo">NOVO</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Tobogãs para crianças</p>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-white/90 bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10">
                    <Hotel className="w-4 h-4 mr-2 text-green-400" />
                    RESORTS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] grid grid-cols-2 gap-4 p-4 bg-background shadow-2xl border border-border z-[100] animate-slide-down-fade">
                      {/* Image Column */}
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img 
                          src="/placeholder.svg" 
                          alt="YCC Resort"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Options Column */}
                      <div className="space-y-2">
                        <NavigationMenuLink className="block p-3 hover:bg-muted rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all hover:scale-105">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-foreground">YCC Resort</span>
                            <Badge variant="popular">POPULAR</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Conforto e diversão</p>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink className="block p-3 hover:bg-muted rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all hover:scale-105">
                          <div className="font-semibold text-foreground">Suítes Premium</div>
                          <p className="text-sm text-muted-foreground">Acomodações exclusivas</p>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-white/90 bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10">
                    <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                    EXPERIÊNCIAS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] grid grid-cols-2 gap-4 p-4 bg-background shadow-2xl border border-border z-[100] animate-slide-down-fade">
                      {/* Image Column */}
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img 
                          src="/placeholder.svg" 
                          alt="Experiências Especiais"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Options Column */}
                      <div className="space-y-2">
                        <NavigationMenuLink className="block p-3 hover:bg-muted rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all hover:scale-105">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-foreground">Pacotes Família</span>
                            <Badge variant="novo">NOVO</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Economia e diversão</p>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink className="block p-3 hover:bg-muted rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all hover:scale-105">
                          <div className="font-semibold text-foreground">Aniversários</div>
                          <p className="text-sm text-muted-foreground">Festas inesquecíveis</p>
                        </NavigationMenuLink>
                        
                        <NavigationMenuLink className="block p-3 hover:bg-muted rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all hover:scale-105">
                          <div className="font-semibold text-foreground">Eventos Corporativos</div>
                          <p className="text-sm text-muted-foreground">Confraternizações</p>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile - Location + Temperature - Center */}
          <div className="lg:hidden flex-1 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-2 min-w-0 overflow-hidden">
            <div className="flex items-center gap-1 text-white/95 flex-shrink-0">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
              <span className="font-medium whitespace-nowrap">Fortaleza</span>
            </div>
            <div className="w-px h-3 sm:h-4 bg-white/30 flex-shrink-0"></div>
            <div className="flex items-center gap-1 text-white/95 flex-shrink-0">
              <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
              <span className="font-medium whitespace-nowrap">32°C</span>
            </div>
          </div>

          {/* Desktop - CTA Buttons + Icons - Right */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Location + Temperature */}
            <div className="flex items-center gap-4 mr-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Fortaleza - CE</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full">
                <Sun className="w-4 h-4" />
                <span className="text-sm font-medium">32°C</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <RippleButton 
              className="bg-[hsl(16,100%,60%)] hover:bg-[hsl(16,100%,55%)] text-white font-bold px-4 shadow-md hover:shadow-xl [@media(hover:hover)]:hover:scale-105 transition-all flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 bg-[length:200%_100%] [@media(hover:hover)]:animate-gradient-shift"
              size="sm"
              aria-label="Ver pacotes disponíveis"
            >
              <Package className="w-4 h-4" />
              PACOTES
            </RippleButton>
            <RippleButton 
              className="bg-[hsl(293,84%,61%)] hover:bg-[hsl(293,84%,56%)] text-white font-bold px-4 shadow-md hover:shadow-xl [@media(hover:hover)]:hover:scale-105 transition-all flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 bg-[length:200%_100%] [@media(hover:hover)]:animate-gradient-shift"
              size="sm"
              aria-label="Comprar ingressos"
            >
              <Ticket className="w-4 h-4" />
              INGRESSOS
            </RippleButton>

            {/* Utility Icons */}
            <div className="flex items-center gap-2 ml-2">
              <button 
                onClick={toggleHighContrast}
                className="hover:bg-white/10 p-2 rounded-full transition-all [@media(hover:hover)]:hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px] min-w-[44px] flex items-center justify-center" 
                aria-label={highContrast ? "Desativar alto contraste" : "Ativar alto contraste"}
                aria-pressed={highContrast}
              >
                {highContrast ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                className="hover:bg-white/10 p-2 rounded-full transition-all [@media(hover:hover)]:hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px] min-w-[44px] flex items-center justify-center" 
                aria-label="Selecionar idioma"
              >
                <Globe className="w-5 h-5" />
              </button>
              <button 
                className="hover:bg-white/10 p-2 rounded-full transition-all [@media(hover:hover)]:hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px] min-w-[44px] flex items-center justify-center" 
                aria-label="Acessar conta"
              >
                <User className="w-5 h-5" />
              </button>
              <button 
                className="hover:bg-white/10 p-2 rounded-full transition-all [@media(hover:hover)]:hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px] min-w-[44px] flex items-center justify-center" 
                aria-label="Buscar"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile - INGRESSOS Button + Hamburger - Right */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <RippleButton 
              className="bg-[hsl(293,84%,61%)] hover:bg-[hsl(293,84%,56%)] active:bg-[hsl(293,84%,51%)] text-white font-bold px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm shadow-md transition-all min-h-[44px] min-w-[44px] touch-manipulation will-change-transform [@media(hover:hover)]:hover:scale-105"
              size="sm"
              aria-label="Comprar ingressos"
            >
              INGRESSOS
            </RippleButton>
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
});

TopBar.displayName = "TopBar";

export default TopBar;
