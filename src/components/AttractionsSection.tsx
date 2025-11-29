import { useState } from "react";
import { Users, Baby, Zap, Waves, ListFilter, Ruler, Flame, Accessibility } from "lucide-react";
// Using public paths for images moved to public/assets/
const wavePoolImg = "/assets/attractions/wave-pool.webp";
const waterSlidesImg = "/assets/attractions/water-slides.webp";
const hydroSpaImg = "/assets/attractions/hydro-spa.webp";
const restaurantImg = "/assets/attractions/restaurant.webp";
const tennisCourtsImg = "/assets/attractions/tennis-courts.webp";
const naturalLakesImg = "/assets/attractions/natural-lakes.webp";
// Keeping ES6 imports for images still in src/assets/
import lazyRiverImg from "@/assets/attractions/lazy-river.webp";
import bungalowsImg from "@/assets/attractions/bungalows.webp";
import recreationalPoolsImg from "@/assets/attractions/recreational-pools.webp";
import kidsZoneImg from "@/assets/attractions/kids-zone.webp";
import ecoTrailsImg from "@/assets/attractions/eco-trails.webp";
import bbqAreaImg from "@/assets/attractions/bbq-area.webp";
import { Badge } from "@/components/ui/badge";
import { OptimizedPicture } from "@/components/OptimizedPicture";

interface Attraction {
  id: number;
  title: string;
  description: string;
  status: 'construccion' | 'disponible';
  badge: string;
  image: string;
  altText: string;
  categories: ('familia' | 'infantil' | 'radical' | 'relax')[];
  metadata?: {
    minHeight?: number; // em cm
    adrenalineLevel?: 1 | 2 | 3; // 1=leve, 2=moderado, 3=radical
    wheelchairAccessible?: boolean;
  };
}

const attractions: Attraction[] = [
  // EN CONSTRUCCIÓN
  {
    id: 1,
    title: "Piscina de Ondas",
    description: "La única piscina de olas del Paraguay",
    status: "construccion",
    badge: "Próximamente",
    image: wavePoolImg,
    altText: "Piscina de olas con aguas cristalinas turquesa en ambiente tropical con palmeras",
    categories: ['familia', 'radical'],
    metadata: {
      adrenalineLevel: 2
    }
  },
  {
    id: 2,
    title: "Toboganes de Adrenalina",
    description: "Caídas de alta velocidad para valientes",
    status: "construccion",
    badge: "Próximamente",
    image: waterSlidesImg,
    altText: "Toboganes acuáticos coloridos de alta velocidad con tubos en espiral",
    categories: ['radical'],
    metadata: {
      minHeight: 120,
      adrenalineLevel: 3
    }
  },
  {
    id: 3,
    title: "Ríos Lentos",
    description: "Relax total flotando en corrientes tropicales",
    status: "construccion",
    badge: "Próximamente",
    image: lazyRiverImg,
    altText: "Río lento tranquilo con flotadores en ambiente tropical con vegetación exuberante",
    categories: ['familia', 'relax'],
    metadata: {
      wheelchairAccessible: true
    }
  },
  {
    id: 4,
    title: "HidroSPA",
    description: "Hidroterapia y relajación en nivel premium",
    status: "construccion",
    badge: "Próximamente",
    image: hydroSpaImg,
    altText: "Spa lujoso con piscinas de hidromasaje y jacuzzi en diseño moderno",
    categories: ['relax'],
    metadata: {
      wheelchairAccessible: true
    }
  },
  {
    id: 5,
    title: "Restaurante Completo",
    description: "Sabores exclusivos con vista al parque",
    status: "construccion",
    badge: "Próximamente",
    image: restaurantImg,
    altText: "Restaurante moderno al aire libre con mesas bajo sombrillas y vista panorámica del parque",
    categories: ['familia', 'relax'],
    metadata: {
      wheelchairAccessible: true
    }
  },
  {
    id: 6,
    title: "Bungalows",
    description: "Tu hogar de vacaciones frente al agua",
    status: "construccion",
    badge: "Próximamente",
    image: bungalowsImg,
    altText: "Bungalows de madera lujosos frente al agua rodeados de palmeras en ambiente tropical",
    categories: ['familia', 'relax']
  },
  // YA DISPONIBLES
  {
    id: 7,
    title: "Piscinas Recreativas",
    description: "Diversión familiar en piscinas cristalinas",
    status: "disponible",
    badge: "Disponible Hoy",
    image: recreationalPoolsImg,
    altText: "Piscinas recreativas con agua cristalina azul, familias nadando y sombrillas coloridas",
    categories: ['familia', 'infantil'],
    metadata: {
      wheelchairAccessible: true
    }
  },
  {
    id: 8,
    title: "Zona Kids",
    description: "Juegos de agua seguros para los niños",
    status: "disponible",
    badge: "Disponible Hoy",
    image: kidsZoneImg,
    altText: "Área acuática infantil colorida con toboganes pequeños y niños jugando",
    categories: ['infantil', 'familia'],
    metadata: {
      adrenalineLevel: 1,
      wheelchairAccessible: true
    }
  },
  {
    id: 9,
    title: "Canchas de Tenis",
    description: "Deporte y competencia al aire libre",
    status: "disponible",
    badge: "Disponible Hoy",
    image: tennisCourtsImg,
    altText: "Quadras de tênis profissionais cercadas por palmeiras em ambiente tropical",
    categories: ['familia'],
    metadata: {
      wheelchairAccessible: true
    }
  },
  {
    id: 10,
    title: "Lagos Naturales",
    description: "Paisajes de lago ideales para desconectar",
    status: "disponible",
    badge: "Disponible Hoy",
    image: naturalLakesImg,
    altText: "Lagos naturales serenos con reflejos en el cielo, vegetación exuberante y pájaros",
    categories: ['relax', 'familia'],
    metadata: {
      wheelchairAccessible: true
    }
  },
  {
    id: 11,
    title: "Senderos Ecológicos",
    description: "Caminatas tranquilas en plena naturaleza",
    status: "disponible",
    badge: "Disponible Hoy",
    image: ecoTrailsImg,
    altText: "Sendero ecológico de madera a través de bosque tropical con vegetación verde exuberante",
    categories: ['relax', 'familia'],
    metadata: {
      wheelchairAccessible: true
    }
  },
  {
    id: 12,
    title: "Churrasqueiras",
    description: "Espacios equipados para asados en familia",
    status: "disponible",
    badge: "Disponible Hoy",
    image: bbqAreaImg,
    altText: "Área de parrillas al aire libre con mesas de picnic y áreas con sombra",
    categories: ['familia', 'relax'],
    metadata: {
      wheelchairAccessible: true
    }
  }
];

type CategoryType = 'all' | 'familia' | 'infantil' | 'radical' | 'relax';

interface FilterChipProps {
  label: string;
  icon: React.ElementType;
  category: CategoryType;
  isActive: boolean;
  onClick: () => void;
  count: number;
}

const FilterChip = ({ label, icon: Icon, category, isActive, onClick, count }: FilterChipProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <button
      onClick={onClick}
      onKeyDown={handleKeyDown}
      style={{ scrollSnapAlign: 'center' }}
      className={`
        flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm
        transition-all duration-300 whitespace-nowrap
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        ${isActive 
          ? 'bg-primary text-primary-foreground shadow-md scale-105' 
          : 'bg-card border-2 border-border text-muted-foreground hover:border-primary hover:text-foreground [@media(hover:hover)]:hover:scale-105'
        }
      `}
      role="tab"
      aria-label={`Filtrar por ${label} - ${count} ${count === 1 ? 'atracción' : 'atracciones'}`}
      aria-selected={isActive}
      aria-controls="attractions-grid"
      tabIndex={0}
    >
      <Icon className="w-4 h-4" aria-hidden="true" />
      <span>{label}</span>
      <span className={`
        px-2 py-0.5 rounded-full text-xs font-bold
        ${isActive ? 'bg-primary-foreground/20' : 'bg-muted'}
      `}>
        {count}
      </span>
    </button>
  );
};

interface AttractionMetadataIconsProps {
  minHeight?: number;
  adrenalineLevel?: 1 | 2 | 3;
  wheelchairAccessible?: boolean;
}

const AttractionMetadataIcons = ({ minHeight, adrenalineLevel, wheelchairAccessible }: AttractionMetadataIconsProps) => {
  if (!minHeight && !adrenalineLevel && !wheelchairAccessible) {
    return null;
  }

  return (
    <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border/50" role="list" aria-label="Información de la atracción">
      {/* Altura mínima */}
      {minHeight && (
        <div className="flex items-center gap-1.5 text-muted-foreground" role="listitem" title={`Altura mínima: ${minHeight}cm`}>
          <Ruler className="w-4 h-4" aria-hidden="true" />
          <span className="text-xs font-medium">{minHeight}cm</span>
        </div>
      )}

      {/* Nivel de adrenalina */}
      {adrenalineLevel && (
        <div className="flex items-center gap-0.5 text-orange-500" role="listitem" title={`Nivel de adrenalina: ${adrenalineLevel}/3`}>
          {Array.from({ length: adrenalineLevel }).map((_, i) => (
            <Flame key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
          ))}
          <span className="sr-only">Nivel de adrenalina: {adrenalineLevel} de 3</span>
        </div>
      )}

      {/* Accesible para sillas de ruedas */}
      {wheelchairAccessible && (
        <div className="flex items-center gap-1.5 text-green-600" role="listitem" title="Accesible para sillas de ruedas">
          <Accessibility className="w-4 h-4" aria-hidden="true" />
          <span className="sr-only">Accesible para sillas de ruedas</span>
        </div>
      )}
    </div>
  );
};

interface AttractionCardProps {
  attraction: Attraction;
  index: number;
}

const AttractionCard = ({ attraction, index }: AttractionCardProps) => {
  const statusText = attraction.status === 'construccion' 
    ? 'En construcción' 
    : 'Disponible ahora';
  
  return (
    <article 
      className="group bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-aqua-primary/20 [@media(hover:hover)]:hover:scale-[1.02] animate-fade-in will-change-transform focus-within:ring-2 focus-within:ring-aqua-primary focus-within:ring-offset-2 focus-within:ring-offset-background"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'backwards'
      }}
      role="article"
      aria-labelledby={`attraction-title-${attraction.id}`}
      aria-describedby={`attraction-desc-${attraction.id} attraction-status-${attraction.id}`}
      tabIndex={0}
    >
      {/* Image Container - 16:9 Aspect Ratio */}
      <div className="relative w-full aspect-video overflow-hidden bg-muted">
        <OptimizedPicture
          src={attraction.image}
          alt={attraction.altText}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {/* Badge */}
        <Badge 
          variant={attraction.status === 'construccion' ? 'construccion' : 'disponible'}
          className="absolute top-3 right-3"
          id={`attraction-status-${attraction.id}`}
          role="status"
          aria-label={`Estado de la atracción: ${statusText}`}
        >
          {attraction.badge}
        </Badge>
      </div>

      {/* Content - Mobile optimized padding */}
      <div className="p-4 sm:p-5 md:p-6">
        <h3 
          id={`attraction-title-${attraction.id}`}
          className="text-lg sm:text-xl font-semibold text-card-foreground mb-2 line-clamp-2"
        >
          {attraction.title}
        </h3>
        <p 
          id={`attraction-desc-${attraction.id}`}
          className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3"
        >
          {attraction.description}
        </p>

        {/* Metadata Icons */}
        <AttractionMetadataIcons 
          minHeight={attraction.metadata?.minHeight}
          adrenalineLevel={attraction.metadata?.adrenalineLevel}
          wheelchairAccessible={attraction.metadata?.wheelchairAccessible}
        />
      </div>
    </article>
  );
};

const AttractionsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');

  const getFilteredAttractions = () => {
    if (selectedCategory === 'all') return attractions;
    return attractions.filter(attraction => 
      attraction.categories.includes(selectedCategory as 'familia' | 'infantil' | 'radical' | 'relax')
    );
  };

  const getCategoryCount = (category: CategoryType) => {
    if (category === 'all') return attractions.length;
    return attractions.filter(attraction => 
      attraction.categories.includes(category as 'familia' | 'infantil' | 'radical' | 'relax')
    ).length;
  };

  const filteredAttractions = getFilteredAttractions();

  const filterCategories = [
    { label: 'Todas', icon: ListFilter, category: 'all' as CategoryType },
    { label: 'Familia', icon: Users, category: 'familia' as CategoryType },
    { label: 'Infantil', icon: Baby, category: 'infantil' as CategoryType },
    { label: 'Radical', icon: Zap, category: 'radical' as CategoryType },
    { label: 'Relax', icon: Waves, category: 'relax' as CategoryType },
  ];

  return (
    <section 
      className="relative z-10 bg-background py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="attractions-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-10">
          <h1 
            id="attractions-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4"
          >
            Atracciones
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Atracciones para disfrutar en familia todo el año
          </p>
        </header>

        {/* Filter Chips - Mobile optimized with scroll-snap */}
        <div className="mb-8 sm:mb-12 relative">
          {/* Scroll gradient indicators - Always visible, responsive width */}
          <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-8 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" aria-hidden="true" />
          <div className="absolute right-0 top-0 bottom-0 w-4 sm:w-8 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" aria-hidden="true" />
          
          <div 
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory',
              scrollPadding: '16px'
            }}
          >
            <div 
              className="flex gap-3 px-4 pb-2 min-w-max mx-auto w-fit"
              role="tablist"
              aria-label="Filtros de categoría de atracciones"
            >
              {filterCategories.map((filter) => (
                <FilterChip
                  key={filter.category}
                  label={filter.label}
                  icon={filter.icon}
                  category={filter.category}
                  isActive={selectedCategory === filter.category}
                  onClick={() => setSelectedCategory(filter.category)}
                  count={getCategoryCount(filter.category)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground">
            Mostrando <span className="font-semibold text-foreground">{filteredAttractions.length}</span> {filteredAttractions.length === 1 ? 'atracción' : 'atracciones'}
          </p>
        </div>

        {/* Grid Container or Empty State */}
        {filteredAttractions.length > 0 ? (
          <div 
            id="attractions-grid"
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            role="tabpanel"
            aria-label={`Atracciones de la categoría ${filterCategories.find(f => f.category === selectedCategory)?.label}`}
          >
            {filteredAttractions.map((attraction, index) => (
              <AttractionCard key={attraction.id} attraction={attraction} index={index} />
            ))}
          </div>
        ) : (
          <div 
            className="text-center py-16 sm:py-20 animate-fade-in"
            role="status"
            aria-live="polite"
          >
            <div className="max-w-md mx-auto px-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <ListFilter className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No se encontraron atracciones
              </h3>
              <p className="text-muted-foreground">
                No encontramos atracciones para esta categoría. Intenta seleccionar otro filtro.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AttractionsSection;
