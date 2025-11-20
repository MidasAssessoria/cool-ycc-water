import { Home, TrendingUp, Globe } from "lucide-react";
import { exteriorFront02 } from "@/assets/bungalows";

interface BungalowsCompactSectionProps {
  onCTAClick?: () => void;
  className?: string;
}


const BungalowsCompactSection = ({ 
  onCTAClick,
  className = "" 
}: BungalowsCompactSectionProps) => {
  const handleCTAClick = () => {
    if (onCTAClick) {
      onCTAClick();
    } else {
      const planVisitSection = document.getElementById('booking');
      if (planVisitSection) {
        planVisitSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  };

  return (
    <section 
      aria-labelledby="bungalows-compact-title"
      className={`relative ${className}`}
    >
      {/* PART 1: Split Hero - Mobile optimized height */}
      <div 
        className="h-[35vh] sm:h-[40vh] md:h-[40vh] min-h-[300px] sm:min-h-[350px] md:min-h-[420px] grid grid-cols-1 md:grid-cols-2 gap-0 bg-white"
        role="region" 
        aria-label="Presentación de los bungalows A-frame"
      >
        {/* LEFT SIDE: Text Content */}
        <div className="relative flex flex-col justify-center px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-0 order-2 md:order-1">
          {/* Floating Badge - Mobile optimized positioning */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-6 md:right-6 lg:top-8 lg:right-8 z-10 animate-pulse">
            <span className="inline-block bg-gradient-to-r from-coral to-red-600 text-white font-bold text-[10px] sm:text-xs px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full shadow-lg flex-shrink-0">
              🔥 64 Unidades Exclusivas
            </span>
          </div>

          {/* Content Container */}
          <div className="max-w-full md:max-w-[90%] mx-auto md:mx-0 mt-2 sm:mt-4 md:mt-0">
            {/* Main Title - Mobile optimized */}
            <h2 
              id="bungalows-compact-title"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-charcoal leading-tight mb-1.5 sm:mb-2"
            >
              Bungalows A-Frame
            </h2>

            {/* Subtitle - Mobile optimized */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-3 sm:mb-4 md:mb-6">
              Tu hogar de vacaciones dentro del parque.
            </p>

            {/* Specs Pills (3 inline) - Mobile optimized padding */}
            <div className="flex flex-nowrap gap-1.5 sm:gap-2">
              <span className="flex-shrink-0 bg-turquoise/10 border-2 border-turquoise/30 text-turquoise px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                🏠 81m²
              </span>
              <span className="flex-shrink-0 bg-turquoise/10 border-2 border-turquoise/30 text-turquoise px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                👥 6 personas
              </span>
              <span className="flex-shrink-0 bg-turquoise/10 border-2 border-turquoise/30 text-turquoise px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                🛁 Hidro
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Hero Image */}
        <div className="relative h-full order-1 md:order-2">
          <img
            src={exteriorFront02}
            alt="Bungalow A-frame con fachada de vidrio, deck de madera y estructura triangular característica - YCC Water Park"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-b-3xl md:rounded-b-none md:rounded-l-3xl shadow-2xl"
          />
        </div>
      </div>

      {/* PART 2: Value Cards - Mobile optimized spacing */}
      <div className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 items-stretch"
            role="list" 
            aria-label="Opciones de uso del bungalow"
          >
            {/* Card 1: USE */}
            <article 
              className="group bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-5 md:p-6 text-center [@media(hover:hover)]:hover:scale-102 [@media(hover:hover)]:hover:shadow-xl transition-all duration-300"
              role="listitem"
              aria-labelledby="use-card-title"
            >
              {/* Icon Container */}
              <div className="bg-coral/10 rounded-full p-3 sm:p-4 mx-auto mb-3 sm:mb-4 w-fit">
                <Home className="h-6 w-6 sm:h-8 sm:w-8 text-coral" />
              </div>

              {/* Title - Mobile optimized */}
              <h3 id="use-card-title" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                USAR
              </h3>

              {/* Description - Mobile optimized */}
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3">
                Disfruta tu propio bungalow con tu familia durante 50 años.
              </p>

              {/* Stat Badge - Mobile optimized */}
              <span className="inline-block bg-blue-50 text-blue-600 font-semibold text-[10px] sm:text-xs md:text-sm px-2.5 sm:px-3 py-1 rounded-full">
                50 años de derecho de uso
              </span>
            </article>

            {/* Card 2: ALUGUE (FEATURED) - Mobile: no scale, Desktop: scale-105 */}
            <article 
              className="group relative bg-white border-3 border-green-500 rounded-2xl p-5 sm:p-6 md:p-8 text-center scale-100 md:scale-105 shadow-lg md:shadow-2xl [@media(hover:hover)]:hover:scale-102 md:[@media(hover:hover)]:hover:scale-108 [@media(hover:hover)]:hover:shadow-xl md:[@media(hover:hover)]:hover:shadow-3xl transition-all duration-300"
              role="listitem"
              aria-labelledby="alugue-card-title"
            >
              {/* Featured Badge - Mobile optimized */}
              <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white font-bold text-[9px] sm:text-[10px] md:text-xs px-2.5 sm:px-3 md:px-4 py-1 sm:py-1 md:py-1.5 rounded-full shadow-md flex-shrink-0">
                ⭐ MÁS POPULAR
              </div>

              {/* Icon Container */}
              <div className="bg-green-100 rounded-full p-3 sm:p-4 mx-auto mb-3 sm:mb-4 w-fit">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
              </div>

              {/* Title - Mobile optimized */}
              <h3 id="alugue-card-title" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                ALQUILAR
              </h3>

              {/* ROI Display (LARGE) - Mobile optimized */}
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-green-600 leading-none mb-1">
                Hasta 29,4%
              </div>

              {/* ROI Label - Mobile optimized */}
              <p className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-600 mb-2 sm:mb-3">ROI neto al año*</p>

              {/* Description - Mobile optimized */}
              <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-2 sm:mb-3">
                Genera ingresos en dólares con gestión profesional incluida.
              </p>

              {/* Stat Badge - Mobile optimized */}
              <span className="inline-block bg-green-100 text-green-700 font-bold text-[10px] sm:text-xs md:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                80% de la renta es tuya
              </span>
            </article>

            {/* Card 3: INTERCAMBIE */}
            <article 
              className="group bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-5 md:p-6 text-center [@media(hover:hover)]:hover:scale-102 [@media(hover:hover)]:hover:shadow-xl transition-all duration-300"
              role="listitem"
              aria-labelledby="intercambie-card-title"
            >
              {/* Icon Container */}
              <div className="bg-turquoise/10 rounded-full p-3 sm:p-4 mx-auto mb-3 sm:mb-4 w-fit">
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-turquoise" />
              </div>

              {/* Title - Mobile optimized */}
              <h3 id="intercambie-card-title" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                INTERCAMBIAR
              </h3>

              {/* Description - Mobile optimized */}
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3">
                Viaja por el mundo usando las semanas de tu bungalow.
              </p>

              {/* Stat Badge - Mobile optimized */}
              <span className="inline-block bg-turquoise/10 text-turquoise font-semibold text-[10px] sm:text-xs md:text-sm px-2.5 sm:px-3 py-1 rounded-full">
                4.000+ destinos en 110 países
              </span>
            </article>
          </div>
        </div>
      </div>

      {/* PART 3: CTA Bar - Mobile optimized spacing */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 sm:py-10 px-4 sm:px-6 text-center">
        {/* CTA Button */}
        <button
          onClick={handleCTAClick}
          className="max-w-lg mx-auto w-full h-14 bg-gradient-to-r from-coral to-red-600 hover:from-coral/90 hover:to-red-600/90 active:from-coral/80 active:to-red-600/80 text-white font-bold text-base sm:text-lg rounded-full shadow-xl [@media(hover:hover)]:hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-coral/50 focus-visible:ring-offset-2 touch-manipulation"
          aria-label="Conocer el proyecto de bungalows - agendar tour guiado"
        >
          Conocer el proyecto de Bungalows
        </button>

        {/* Helper Text - Mobile optimized */}
        <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3 px-4">
          ✨ Tour guiado + presentación del proyecto sin compromiso
        </p>

        {/* REAL Casas Credit - Mobile optimized */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm px-4">
          <span className="text-gray-500">En alianza con</span>
          <div className="flex items-center gap-2 bg-coral/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-coral/20">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-coral rounded flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-[10px] sm:text-xs">R</span>
            </div>
            <span className="font-bold text-coral text-xs sm:text-sm">REAL Casas Pré Fabricadas</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default BungalowsCompactSection;
