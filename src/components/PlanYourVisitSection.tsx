import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronDown } from "lucide-react";

const PlanYourVisitSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 30,
    },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  // Hero carousel images
  const heroImages = [
    {
      src: "/src/assets/waterpark-hero-bg.jpg",
      alt: "Vista aérea do parque aquático YCC",
    },
    {
      src: "/src/assets/attractions/bungalows.jpg",
      alt: "Bungalows modernos e luxuosos",
    },
    {
      src: "/src/assets/hero-waterpark.jpg",
      alt: "Família aproveitando os tobogãs aquáticos",
    },
    {
      src: "/src/assets/attractions/wave-pool.jpg",
      alt: "Experiência completa no parque",
    },
  ];

  const scrollToForm = useCallback(() => {
    const formSection = document.getElementById("plan-visit-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      // Carousel selection logic can be added here if needed
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative w-full">
      {/* PART 1: HERO VISUAL SECTION */}
      <div className="relative w-full h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        {/* Carousel Container */}
        <div className="absolute inset-0" ref={emblaRef}>
          <div className="flex h-full">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className="relative flex-[0_0_100%] min-w-0 h-full"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover animate-ken-burns"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-10" />

        {/* Floating Badge (top-right) */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 animate-fade-in">
          <div
            className="
              relative
              backdrop-blur-md 
              bg-white/20 
              border border-white/30
              text-white
              px-6 py-2
              rounded-full
              text-sm font-semibold
              shadow-lg
              animate-pulse
              cursor-default
            "
          >
            🎟️ Tour VIP Guiado
          </div>
        </div>

        {/* Center Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1
              className="
                text-5xl md:text-6xl lg:text-7xl
                font-bold 
                text-white
                mb-4
                animate-fade-in
                [text-shadow:_0_2px_10px_rgba(0,0,0,0.3)]
              "
              style={{ animationDelay: "500ms", animationFillMode: "backwards" }}
            >
              Planeje Sua Visita VIP
            </h1>

            {/* Subheading */}
            <p
              className="
                text-xl md:text-2xl lg:text-3xl
                font-normal
                text-white/90
                animate-fade-in
                [text-shadow:_0_1px_8px_rgba(0,0,0,0.3)]
              "
              style={{ animationDelay: "700ms", animationFillMode: "backwards" }}
            >
              Tour guiado + Parque + Bungalows + Oportunidade de investimento
            </p>
          </div>
        </div>

        {/* Scroll Indicator (bottom center) */}
        <button
          onClick={scrollToForm}
          className="
            absolute 
            bottom-6 
            left-1/2 
            -translate-x-1/2 
            z-10
            flex flex-col items-center
            text-white/70
            hover:text-white
            transition-colors
            cursor-pointer
            group
          "
          aria-label="Rolar para o formulário de agendamento"
        >
          <span className="text-sm mb-2">Role para agendar</span>
          <ChevronDown 
            className="w-6 h-6 animate-bounce-slow group-hover:text-white" 
            strokeWidth={2}
          />
        </button>
      </div>

      {/* PART 2: BOOKING FORM + INFO SIDEBAR */}
      <div 
        id="plan-visit-form"
        className="
          w-full 
          bg-gradient-to-b from-white to-blue-50
          py-12 px-6
        "
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT: Smart Booking Form (placeholder) */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Reserve Seu Tour Gratuito
              </h2>
              <p className="text-lg text-gray-500 mb-6">
                Preencha em 30 segundos ⚡
              </p>
              <div className="text-gray-400 text-center py-12">
                Formulário será implementado na Fase 2
              </div>
            </div>

            {/* RIGHT: Info Sidebar (placeholder) */}
            <div className="flex flex-col gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-turquoise-50 rounded-2xl p-6 shadow-lg">
                <p className="text-gray-400 text-center py-12">
                  Sidebar de informações será implementada na Fase 3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 3: TRUST BAR */}
      <div className="w-full h-16 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
          <p className="text-gray-400 text-sm">
            Trust Bar será implementada na Fase 4
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanYourVisitSection;
