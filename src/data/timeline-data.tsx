/**
 * Timeline data for membership benefits
 * Extracted for performance optimization - prevents recreation on every render
 */

import { Sparkles, Dumbbell, Heart, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

// Using absolute paths from public folder for reliable image loading
const naturalLakesImg = "/assets/attractions/natural-lakes.webp";
const tennisCourtsImg = "/assets/attractions/tennis-courts.webp";
const wavePoolImg = "/assets/attractions/wave-pool.webp";
const waterSlidesImg = "/assets/attractions/water-slides.webp";
const hydroSpaImg = "/assets/attractions/hydro-spa.webp";
const restaurantImg = "/assets/attractions/restaurant.webp";

interface TimelineDataItem {
  title: string;
  content: JSX.Element;
}

/**
 * Generate timeline data
 * @param prefersReducedMotion - Whether user prefers reduced motion
 * @param animations - Animation refs from useIntersectionAnimation hooks
 * @param forceVisible - Force cards to be visible (fallback after timeout)
 */
export const getTimelineData = (
  prefersReducedMotion: boolean,
  animations: {
    card1: { elementRef: React.RefObject<HTMLDivElement>; isVisible: boolean };
    card2: { elementRef: React.RefObject<HTMLDivElement>; isVisible: boolean };
    card3: { elementRef: React.RefObject<HTMLDivElement>; isVisible: boolean };
    card4: { elementRef: React.RefObject<HTMLDivElement>; isVisible: boolean };
  },
  forceVisible = false
): TimelineDataItem[] => [
  {
    title: "Hoy",
    content: (
      <div>
        {/* Badge DISPONIBLE HOY */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-6 shadow-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          DISPONIBLE HOY
        </div>
        <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
          Disfruta desde el primer día de todas estas instalaciones incluidas en tu membresía
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Card 1: Acceso Ilimitado */}
          <div 
            ref={animations.card1.elementRef}
            className={cn(
              "group relative bg-gradient-to-br from-white to-cyan-50/30 border border-cyan-200/50 rounded-3xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-300 transition-all duration-500 hover:-translate-y-0.5",
              !prefersReducedMotion && !animations.card1.isVisible && !forceVisible && "opacity-0 translate-y-4"
            )}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-start gap-4">
              <div className={cn(
                "relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300",
                !prefersReducedMotion && "group-hover:scale-105"
              )}>
                <div className="text-4xl">🌊</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-cyan-700 transition-colors">
                  Acceso ilimitado
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Piscinas recreativas y lagos naturales para toda la familia
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Deportes */}
          <div 
            ref={animations.card2.elementRef}
            className={cn(
              "group relative bg-gradient-to-br from-white to-orange-50/30 border border-orange-200/50 rounded-3xl p-6 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-300 transition-all duration-500 hover:-translate-y-0.5",
              !prefersReducedMotion && !animations.card2.isVisible && !forceVisible && "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: prefersReducedMotion ? '0ms' : '100ms' }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-start gap-4">
              <div className={cn(
                "relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300",
                !prefersReducedMotion && "group-hover:scale-105"
              )}>
                <div className="text-4xl">🏆</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors">
                  Deportes
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Canchas de tenis, fútbol, básquet, vóley
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Zona Kids */}
          <div 
            ref={animations.card3.elementRef}
            className={cn(
              "group relative bg-gradient-to-br from-white to-green-50/30 border border-green-200/50 rounded-3xl p-6 hover:shadow-xl hover:shadow-green-500/10 hover:border-green-300 transition-all duration-500 hover:-translate-y-0.5",
              !prefersReducedMotion && !animations.card3.isVisible && !forceVisible && "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: prefersReducedMotion ? '0ms' : '200ms' }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-start gap-4">
              <div className={cn(
                "relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300",
                !prefersReducedMotion && "group-hover:scale-105"
              )}>
                <div className="text-4xl">🛡️</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  Zona kids 100% segura
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Áreas infantiles supervisadas con salvavidas
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Áreas Verdes */}
          <div 
            ref={animations.card4.elementRef}
            className={cn(
              "group relative bg-gradient-to-br from-white to-emerald-50/30 border border-emerald-200/50 rounded-3xl p-6 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-300 transition-all duration-500 hover:-translate-y-0.5",
              !prefersReducedMotion && !animations.card4.isVisible && !forceVisible && "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: prefersReducedMotion ? '0ms' : '300ms' }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-start gap-4">
              <div className={cn(
                "relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300",
                !prefersReducedMotion && "group-hover:scale-105"
              )}>
                <div className="text-4xl">🌳</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  Áreas verdes
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Senderos ecológicos y churrasqueras
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Galeria moderna com overlay */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-video bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse">
            <img
              src={naturalLakesImg}
              alt="Lagos naturales"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              onLoad={(e) => {
                e.currentTarget.classList.remove('opacity-0');
                e.currentTarget.classList.add('opacity-100');
                e.currentTarget.parentElement?.classList.remove('animate-pulse', 'bg-gradient-to-br', 'from-gray-100', 'to-gray-200');
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-bold text-lg">Lagos Naturales</p>
                <p className="text-sm opacity-90">3 lagos cristalinos</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-video bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse">
            <img
              src={tennisCourtsImg}
              alt="Canchas deportivas"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              onLoad={(e) => {
                e.currentTarget.classList.remove('opacity-0');
                e.currentTarget.classList.add('opacity-100');
                e.currentTarget.parentElement?.classList.remove('animate-pulse', 'bg-gradient-to-br', 'from-gray-100', 'to-gray-200');
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-bold text-lg">Canchas Deportivas</p>
                <p className="text-sm opacity-90">Tenis, fútbol y más</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2025-2026",
    content: (
      <div>
        {/* Badge 2025-2026 */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 text-orange-700 text-xs font-bold rounded-full mb-6 shadow-sm">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          EN CONSTRUCCIÓN 2025-2026
        </div>
        <p className="text-neutral-800 text-xs md:text-sm font-normal mb-4">
          Instalaciones en construcción que estarán disponibles durante tu membresía
        </p>
        <div className="mb-8 space-y-3">
          <div className="flex items-center gap-3 text-neutral-700 text-sm md:text-base">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Sparkles className="w-5 h-5 text-purple-700" />
            </div>
            <div>
              <span className="font-bold">Water Park Premium</span>
              <p className="text-xs text-muted-foreground">Piscina de olas, toboganes gigantes</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-neutral-700 text-sm md:text-base">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Dumbbell className="w-5 h-5 text-orange-700" />
            </div>
            <div>
              <span className="font-bold">Gimnasio moderno</span>
              <p className="text-xs text-muted-foreground">Equipamiento de última generación</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-video bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse">
            <img
              src={wavePoolImg}
              alt="Piscina de olas"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              onLoad={(e) => {
                e.currentTarget.classList.remove('opacity-0');
                e.currentTarget.classList.add('opacity-100');
                e.currentTarget.parentElement?.classList.remove('animate-pulse', 'bg-gradient-to-br', 'from-gray-100', 'to-gray-200');
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-bold text-lg">Piscina de Olas</p>
                <p className="text-sm opacity-90">Emociones garantizadas</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-video bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse">
            <img
              src={waterSlidesImg}
              alt="Toboganes"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              onLoad={(e) => {
                e.currentTarget.classList.remove('opacity-0');
                e.currentTarget.classList.add('opacity-100');
                e.currentTarget.parentElement?.classList.remove('animate-pulse', 'bg-gradient-to-br', 'from-gray-100', 'to-gray-200');
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-bold text-lg">Toboganes Gigantes</p>
                <p className="text-sm opacity-90">Adrenalina pura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Próximamente",
    content: (
      <div>
        {/* Badge PRÓXIMAMENTE */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100 text-purple-700 text-xs font-bold rounded-full mb-6 shadow-sm">
          <Sparkles className="w-3 h-3" />
          PRÓXIMAMENTE
        </div>
        <p className="text-neutral-800 text-xs md:text-sm font-normal mb-4">
          Expansiones planificadas incluidas en tu membresía sin costo adicional
        </p>
        <div className="mb-8 space-y-3">
          <div className="flex items-center gap-3 text-neutral-700 text-sm md:text-base">
            <div className="bg-pink-100 p-2 rounded-lg">
              <Heart className="w-5 h-5 text-pink-700" />
            </div>
            <div>
              <span className="font-bold">HidroSPA</span>
              <p className="text-xs text-muted-foreground">Saunas, jacuzzis, masajes terapéuticos</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-neutral-700 text-sm md:text-base">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <span className="font-bold">Eventos exclusivos para miembros</span>
              <p className="text-xs text-muted-foreground">Acceso prioritario a fiestas temáticas y festivales</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-video bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse">
            <img
              src={hydroSpaImg}
              alt="HidroSPA"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              onLoad={(e) => {
                e.currentTarget.classList.remove('opacity-0');
                e.currentTarget.classList.add('opacity-100');
                e.currentTarget.parentElement?.classList.remove('animate-pulse', 'bg-gradient-to-br', 'from-gray-100', 'to-gray-200');
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-bold text-lg">HidroSPA</p>
                <p className="text-sm opacity-90">Relax y bienestar</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl shadow-xl aspect-video bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse">
            <img
              src={restaurantImg}
              alt="Eventos exclusivos"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              onLoad={(e) => {
                e.currentTarget.classList.remove('opacity-0');
                e.currentTarget.classList.add('opacity-100');
                e.currentTarget.parentElement?.classList.remove('animate-pulse', 'bg-gradient-to-br', 'from-gray-100', 'to-gray-200');
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-bold text-lg">Eventos Exclusivos</p>
                <p className="text-sm opacity-90">Solo para miembros</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
