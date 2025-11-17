import { Menu, X, MapPin, Sun, Globe, User, Search, Waves, Hotel, Sparkles, Compass, Package, Ticket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AccessibilityControls } from "@/components/accessibility/AccessibilityControls";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { NavLink } from "@/components/NavLink";
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
        className="w-[85vw] sm:w-[400px] overflow-y-auto p-0 safe-area-inset animate-slide-in-right"
        aria-label="Menu de navegação principal"
      >
        {/* Header com gradiente laranja */}
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white p-6 pb-4">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-center mb-4">
              <img 
                src={logoYCC} 
                alt="YCC Water Park" 
                className="h-12 w-auto"
              />
            </SheetTitle>
          </SheetHeader>
          
          {/* Location + Temperature */}
          <div className="flex items-center justify-center gap-4 text-sm mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">Fortaleza - CE</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full">
              <Sun className="w-4 h-4" />
              <span className="font-medium">32°C</span>
            </div>
          </div>
          
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar atrações, pacotes..."
              className="pl-10 bg-white/95 border-none text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>
        
        <div className="flex flex-col gap-2 p-6 bg-background">
          {/* Hero CTA Button */}
          <RippleButton 
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-base min-h-[56px] touch-manipulation transition-all shadow-lg hover:shadow-xl [@media(hover:hover)]:hover:scale-105 flex items-center justify-center gap-2 bg-[length:200%_100%]"
            aria-label="Encontre suas férias perfeitas"
          >
            <Compass className="w-5 h-5" />
            ENCONTRE SUAS FÉRIAS
          </RippleButton>
          
          {/* Secondary Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-2 mb-4">
            <RippleButton 
              className="w-full bg-[hsl(16,100%,60%)] hover:bg-[hsl(16,100%,55%)] active:bg-[hsl(16,100%,50%)] text-white font-semibold min-h-[48px] touch-manipulation transition-all shadow-md hover:shadow-lg [@media(hover:hover)]:hover:scale-105 flex items-center justify-center gap-2"
              aria-label="Ver pacotes disponíveis"
            >
              <Package className="w-4 h-4" />
              PACOTES
            </RippleButton>
            <RippleButton 
              className="w-full bg-[hsl(293,84%,61%)] hover:bg-[hsl(293,84%,56%)] active:bg-[hsl(293,84%,51%)] text-white font-semibold min-h-[48px] touch-manipulation transition-all shadow-md hover:shadow-lg [@media(hover:hover)]:hover:scale-105 flex items-center justify-center gap-2"
              aria-label="Comprar ingressos"
            >
              <Ticket className="w-4 h-4" />
              INGRESSOS
            </RippleButton>
          </div>

          <Separator className="my-2" />

          {/* Navigation Sections with Accordions and Icons */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="parques" className="border-b">
              <AccordionTrigger 
                className="text-base font-semibold hover:no-underline py-4 min-h-[48px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary group"
                aria-label="Menu de parques"
              >
                <div className="flex items-center gap-3">
                  <Waves className="w-5 h-5 text-blue-500 group-data-[state=open]:animate-bounce-icon transition-transform" />
                  <span>PARQUES</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-4 pb-4 space-y-2">
                <NavLink 
                  to="/ycc-water-park" 
                  className="flex items-center justify-between py-3 min-h-[44px] text-sm text-muted-foreground hover:text-foreground active:text-primary transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2"
                  activeClassName="text-primary font-medium"
                >
                  <span>YCC Water Park</span>
                  <Badge variant="popular" className="text-xs">POPULAR</Badge>
                </NavLink>
                <NavLink 
                  to="/area-kids" 
                  className="flex items-center justify-between py-3 min-h-[44px] text-sm text-muted-foreground hover:text-foreground active:text-primary transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2"
                  activeClassName="text-primary font-medium"
                >
                  <span>Área Kids</span>
                  <Badge variant="novo" className="text-xs">NOVO</Badge>
                </NavLink>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="resorts" className="border-b">
              <AccordionTrigger 
                className="text-base font-semibold hover:no-underline py-4 min-h-[48px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary group"
                aria-label="Menu de resorts"
              >
                <div className="flex items-center gap-3">
                  <Hotel className="w-5 h-5 text-green-500 group-data-[state=open]:animate-bounce-icon transition-transform" />
                  <span>RESORTS</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-4 pb-4 space-y-2">
                <NavLink 
                  to="/ycc-resort" 
                  className="flex items-center justify-between py-3 min-h-[44px] text-sm text-muted-foreground hover:text-foreground active:text-primary transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2"
                  activeClassName="text-primary font-medium"
                >
                  <span>YCC Resort</span>
                  <Badge variant="popular" className="text-xs">POPULAR</Badge>
                </NavLink>
                <NavLink 
                  to="/suites-premium" 
                  className="block py-3 min-h-[44px] text-sm text-muted-foreground hover:text-foreground active:text-primary transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2"
                  activeClassName="text-primary font-medium"
                >
                  Suítes Premium
                </NavLink>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="experiencias" className="border-b-0">
              <AccordionTrigger 
                className="text-base font-semibold hover:no-underline py-4 min-h-[48px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Menu de experiências"
              >
                EXPERIÊNCIAS
              </AccordionTrigger>
              <AccordionContent className="pl-4 pb-4">
                <NavLink 
                  to="/pacotes-especiais" 
                  className="block py-3 min-h-[44px] text-sm text-muted-foreground hover:text-foreground active:text-primary transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  activeClassName="text-primary font-medium"
                >
                  Pacotes Especiais
                </NavLink>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Separator className="my-2" />

          {/* Direct Links */}
          <nav className="flex flex-col gap-1" aria-label="Links diretos">
            <NavLink 
              to="/vacation-club" 
              className="py-3 px-2 min-h-[48px] text-base font-semibold text-foreground hover:bg-accent active:bg-accent/80 rounded-md transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              activeClassName="bg-accent text-primary"
            >
              VACATION CLUB
            </NavLink>
            <NavLink 
              to="/ycc-card" 
              className="py-3 px-2 min-h-[48px] text-base font-semibold text-foreground hover:bg-accent active:bg-accent/80 rounded-md transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              activeClassName="bg-accent text-primary"
            >
              YCC CARD
            </NavLink>
            <NavLink 
              to="/blog" 
              className="py-3 px-2 min-h-[48px] text-base font-semibold text-foreground hover:bg-accent active:bg-accent/80 rounded-md transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              activeClassName="bg-accent text-primary"
            >
              BLOG
            </NavLink>
            <NavLink 
              to="/contato" 
              className="py-3 px-2 min-h-[48px] text-base font-semibold text-foreground hover:bg-accent active:bg-accent/80 rounded-md transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              activeClassName="bg-accent text-primary"
            >
              CONTATO
            </NavLink>
          </nav>

          <Separator className="my-4" />

          {/* Footer Info */}
          <div className="flex flex-col gap-3 text-sm text-muted-foreground px-6">
            <button 
              className="flex items-center gap-2 min-h-[44px] hover:text-foreground active:text-foreground transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded text-left"
              aria-label="Alterar idioma"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              <span>PT-BR</span>
            </button>
            <button 
              className="flex items-center gap-2 min-h-[44px] hover:text-foreground active:text-foreground transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded text-left"
              aria-label="Acessar minha conta"
            >
              <User className="h-4 w-4" aria-hidden="true" />
              <span>Minha Conta</span>
            </button>
          </div>

          {/* Accessibility Controls */}
          <AccessibilityControls />
        </div>
      </SheetContent>
    </Sheet>
  );
});

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
