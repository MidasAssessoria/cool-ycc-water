import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { 
  exteriorFront01, 
  exteriorFront02,
  exteriorSide01,
  interiorLiving01,
  interiorBalcony01,
  interiorLiving02,
  floorPlanGround,
  floorPlanUpper
} from "@/assets/bungalows";

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  description: string;
  alt: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: exteriorFront01,
    title: "Vista Exterior",
    description: "Arquitetura A-frame com fachada de vidro",
    alt: "Bungalow A-frame com fachada frontal de vidro, deck de madeira e vegetação ao redor",
  },
  {
    id: 2,
    image: exteriorFront02,
    title: "Fachada Frontal",
    description: "Design icônico com telhado triangular",
    alt: "Vista frontal do bungalow A-frame mostrando estrutura triangular característica",
  },
  {
    id: 3,
    image: interiorLiving01,
    title: "Interior Pé-Direito Duplo",
    description: "Amplitude e conforto com madeira natural",
    alt: "Interior do bungalow com pé-direito duplo, revestimento em madeira e escada para mezanino",
  },
  {
    id: 4,
    image: interiorBalcony01,
    title: "Varanda Privativa",
    description: "Espaço de relaxamento integrado",
    alt: "Varanda interna com porta de madeira e vista para a área externa",
  },
  {
    id: 5,
    image: exteriorSide01,
    title: "Vista Lateral Completa",
    description: "Estrutura premium em madeira e vidro",
    alt: "Vista lateral do bungalow mostrando telhado, paredes e janelas panorâmicas",
  },
  {
    id: 6,
    image: floorPlanGround,
    title: "Planta Térrea",
    description: "Layout: 58,70m² construídos + deck 13,61m²",
    alt: "Planta baixa do pavimento térreo com medidas detalhadas e distribuição dos ambientes",
  },
  {
    id: 7,
    image: floorPlanUpper,
    title: "Planta Superior",
    description: "Mezanino: 22,32m² + sacada 3,94m²",
    alt: "Planta do pavimento superior mostrando mezanino e sacada com dimensões",
  },
];

const BungalowCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 30,
      dragFree: false,
    },
    [
      Autoplay({ 
        delay: 5000, 
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollPrev, scrollNext]);

  return (
    <div 
      className="relative h-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Embla Carousel Container */}
      <div className="overflow-hidden h-full rounded-3xl" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0 h-full relative"
            >
              {/* Image with Ken Burns Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover animate-ken-burns"
                  loading={slide.id === 1 ? "eager" : "lazy"}
                  fetchPriority={slide.id === 1 ? "high" : "auto"}
                />
                
                {/* Gradient Overlay - Dark bottom to transparent top */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Glass Morphism Overlay on Hover */}
                <div 
                  className={`absolute inset-0 bg-white/5 backdrop-blur-[2px] transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              {/* Slide Content */}
              <div className="absolute bottom-20 left-6 right-6 z-10 text-white">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 drop-shadow-lg">
                  {slide.title}
                </h3>
                <p className="text-sm md:text-base lg:text-lg opacity-90 drop-shadow-md">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-white/30 hover:scale-110 transition-all duration-300 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-white/30 hover:scale-110 transition-all duration-300 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Progress Indicators / Thumbnails */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-8 bg-white shadow-lg"
                : "w-2 bg-white/50 hover:bg-white/75 hover:w-4"
            }`}
            aria-label={`Ir para slide ${index + 1}: ${slide.title}`}
            aria-current={index === selectedIndex ? "true" : "false"}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-20 bg-black/30 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-3 py-1.5 rounded-full">
        {selectedIndex + 1} / {slides.length}
      </div>
    </div>
  );
};

export default BungalowCarousel;
