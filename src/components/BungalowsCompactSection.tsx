import { Home } from "lucide-react";

interface BungalowsCompactSectionProps {
  onCTAClick?: () => void;
  className?: string;
}

const BungalowsCompactSection = ({ 
  onCTAClick,
  className = "" 
}: BungalowsCompactSectionProps) => {
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
    </section>
  );
};

export default BungalowsCompactSection;
