import { Home, TrendingUp, Globe } from "lucide-react";

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
      {/* PART 1: Split Hero (40vh) */}
      <div 
        className="h-[40vh] min-h-[400px] grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-white via-white to-blue-50"
        role="region" 
        aria-label="Apresentação dos bungalows A-frame"
      >
        {/* LEFT SIDE: Text Content */}
        <div className="relative flex flex-col justify-center px-6 md:px-12 py-8 md:py-0 order-2 md:order-1">
          {/* Floating Badge */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10 animate-pulse">
            <span className="inline-block bg-gradient-to-r from-coral to-red-600 text-white font-bold text-xs px-4 py-2 rounded-full shadow-lg">
              🔥 64 Unidades Exclusivas
            </span>
          </div>

          {/* Content Container */}
          <div className="max-w-[90%] mx-auto md:mx-0 mt-8 md:mt-0">
            {/* Main Title */}
            <h2 
              id="bungalows-compact-title"
              className="text-4xl md:text-5xl font-black text-charcoal leading-tight mb-2"
            >
              Bungalows A-Frame
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Design único + Investimento inteligente
            </p>

            {/* Specs Pills (3 inline) */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-turquoise/10 border-2 border-turquoise/30 text-turquoise px-3 py-1.5 rounded-full text-sm font-semibold">
                🏠 66m²
              </span>
              <span className="bg-turquoise/10 border-2 border-turquoise/30 text-turquoise px-3 py-1.5 rounded-full text-sm font-semibold">
                👥 6 pessoas
              </span>
              <span className="bg-turquoise/10 border-2 border-turquoise/30 text-turquoise px-3 py-1.5 rounded-full text-sm font-semibold">
                🛁 Hidro
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Hero Image */}
        <div className="relative h-full order-1 md:order-2">
          <img
            src="https://www.genspark.ai/api/files/s/9DAMjy5a"
            alt="Bungalow A-frame exclusivo com fachada de vidro no YCC Water Park"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-b-3xl md:rounded-b-none md:rounded-l-3xl shadow-2xl"
          />
        </div>
      </div>

      {/* PART 2: Value Cards */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
            role="list" 
            aria-label="Opções de uso do bungalow"
          >
            {/* Card 1: USE */}
            <article 
              className="group bg-gradient-to-b from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-6 text-center hover:scale-102 hover:shadow-xl transition-all duration-300"
              role="listitem"
              aria-labelledby="use-card-title"
            >
              {/* Icon Container */}
              <div className="bg-coral/10 rounded-full p-4 mx-auto mb-4 w-fit">
                <Home className="h-8 w-8 text-coral" />
              </div>

              {/* Title */}
              <h3 id="use-card-title" className="text-2xl font-bold text-gray-900 mb-2">
                USE
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 mb-3">
                Suas férias em grande estilo
              </p>

              {/* Stat Badge */}
              <span className="inline-block bg-blue-50 text-blue-600 font-semibold text-sm px-3 py-1 rounded-full">
                50 anos de direito
              </span>
            </article>

            {/* Card 2: ALUGUE (FEATURED) */}
            <article 
              className="group relative bg-gradient-to-b from-green-50 to-white border-3 border-green-300 rounded-2xl p-8 text-center md:scale-105 shadow-2xl hover:scale-108 hover:shadow-3xl transition-all duration-300"
              role="listitem"
              aria-labelledby="alugue-card-title"
            >
              {/* Featured Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-xs px-4 py-1.5 rounded-full shadow-md">
                ⭐ MAIS POPULAR
              </div>

              {/* Icon Container */}
              <div className="bg-green-100 rounded-full p-4 mx-auto mb-4 w-fit">
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>

              {/* Title */}
              <h3 id="alugue-card-title" className="text-2xl font-bold text-gray-900 mb-3">
                ALUGUE
              </h3>

              {/* ROI Display (LARGE) */}
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent leading-none mb-1">
                29,4%
              </div>

              {/* ROI Label */}
              <p className="text-sm font-medium text-gray-600 mb-3">ao ano líquido</p>

              {/* Description */}
              <p className="text-base text-gray-700 mb-3">
                Renda passiva gerenciada 100% por nós
              </p>

              {/* Stat Badge */}
              <span className="inline-block bg-green-100 text-green-700 font-bold text-sm px-3 py-1.5 rounded-full">
                80% da renda é sua
              </span>
            </article>

            {/* Card 3: INTERCAMBIE */}
            <article 
              className="group bg-gradient-to-b from-turquoise/10 to-white border-2 border-turquoise/20 rounded-2xl p-6 text-center hover:scale-102 hover:shadow-xl transition-all duration-300"
              role="listitem"
              aria-labelledby="intercambie-card-title"
            >
              {/* Icon Container */}
              <div className="bg-turquoise/10 rounded-full p-4 mx-auto mb-4 w-fit">
                <Globe className="h-8 w-8 text-turquoise" />
              </div>

              {/* Title */}
              <h3 id="intercambie-card-title" className="text-2xl font-bold text-gray-900 mb-2">
                INTERCAMBIE
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 mb-3">
                Viaje o mundo com seu bungalow
              </p>

              {/* Stat Badge */}
              <span className="inline-block bg-turquoise/10 text-turquoise font-semibold text-sm px-3 py-1 rounded-full">
                4.000+ destinos em 110 países
              </span>
            </article>
          </div>
        </div>
      </div>

      {/* PART 3: CTA Bar */}
      <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 py-8 px-6 text-center">
        {/* CTA Button */}
        <button
          onClick={handleCTAClick}
          className="max-w-lg mx-auto w-full h-14 bg-gradient-to-r from-coral to-red-600 hover:from-coral/90 hover:to-red-600/90 text-white font-bold text-lg rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-coral/50 focus-visible:ring-offset-2"
          aria-label="Conhecer os bungalows pessoalmente - agendar tour guiado"
        >
          🎯 Conhecer os Bungalows Pessoalmente
        </button>

        {/* Helper Text */}
        <p className="text-sm text-gray-500 mt-3">
          ✨ Tour guiado + Apresentação sem compromisso
        </p>
      </footer>
    </section>
  );
};

export default BungalowsCompactSection;
