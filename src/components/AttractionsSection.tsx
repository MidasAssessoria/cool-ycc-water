import wavePoolImg from "@/assets/attractions/wave-pool.jpg";
import waterSlidesImg from "@/assets/attractions/water-slides.jpg";
import lazyRiverImg from "@/assets/attractions/lazy-river.jpg";
import hydroSpaImg from "@/assets/attractions/hydro-spa.jpg";
import restaurantImg from "@/assets/attractions/restaurant.jpg";
import bungalowsImg from "@/assets/attractions/bungalows.jpg";
import recreationalPoolsImg from "@/assets/attractions/recreational-pools.jpg";
import kidsZoneImg from "@/assets/attractions/kids-zone.jpg";
import tennisCourtsImg from "@/assets/attractions/tennis-courts.jpg";
import naturalLakesImg from "@/assets/attractions/natural-lakes.jpg";
import ecoTrailsImg from "@/assets/attractions/eco-trails.jpg";
import bbqAreaImg from "@/assets/attractions/bbq-area.jpg";

interface Attraction {
  id: number;
  title: string;
  description: string;
  status: 'construccion' | 'disponible';
  badge: string;
  image: string;
  altText: string;
}

const attractions: Attraction[] = [
  // EN CONSTRUCCIÓN
  {
    id: 1,
    title: "Piscina de Ondas",
    description: "La única piscina de ondas de Paraguay",
    status: "construccion",
    badge: "Próximamente",
    image: wavePoolImg,
    altText: "Piscina de ondas com águas cristalinas turquesa em ambiente tropical com palmeiras"
  },
  {
    id: 2,
    title: "Toboganes de Adrenalina",
    description: "Experiencias extremas de alta velocidad",
    status: "construccion",
    badge: "Próximamente",
    image: waterSlidesImg,
    altText: "Tobogãs aquáticos coloridos de alta velocidade com tubos em espiral"
  },
  {
    id: 3,
    title: "Ríos Lentos",
    description: "Relajación total en corrientes tropicales",
    status: "construccion",
    badge: "Próximamente",
    image: lazyRiverImg,
    altText: "Rio lento tranquilo com boias flutuando em ambiente tropical com vegetação exuberante"
  },
  {
    id: 4,
    title: "HidroSPA",
    description: "Bienestar y relajación premium",
    status: "construccion",
    badge: "Próximamente",
    image: hydroSpaImg,
    altText: "Spa luxuoso com piscinas de hidromassagem e jacuzzi em design moderno"
  },
  {
    id: 5,
    title: "Restaurante Completo",
    description: "Gastronomía exclusiva con vista al parque",
    status: "construccion",
    badge: "Próximamente",
    image: restaurantImg,
    altText: "Restaurante moderno ao ar livre com mesas sob guarda-sóis e vista panorâmica do parque"
  },
  {
    id: 6,
    title: "Bungalows RCI",
    description: "Tu hogar de vacaciones en Paraguay",
    status: "construccion",
    badge: "Próximamente",
    image: bungalowsImg,
    altText: "Bangalôs de madeira luxuosos à beira d'água cercados por palmeiras em ambiente tropical"
  },
  // YA DISPONIBLES
  {
    id: 7,
    title: "Piscinas Recreativas",
    description: "Diversión familiar en aguas cristalinas",
    status: "disponible",
    badge: "Disponible Hoy",
    image: recreationalPoolsImg,
    altText: "Piscinas recreativas com água cristalina azul, famílias nadando e guarda-sóis coloridos"
  },
  {
    id: 8,
    title: "Zona Kids",
    description: "Área infantil segura y divertida",
    status: "disponible",
    badge: "Disponible Hoy",
    image: kidsZoneImg,
    altText: "Área aquática infantil colorida com escorregadores pequenos e crianças brincando"
  },
  {
    id: 9,
    title: "Canchas de Tenis",
    description: "Deporte y entretenimiento",
    status: "disponible",
    badge: "Disponible Hoy",
    image: tennisCourtsImg,
    altText: "Quadras de tênis profissionais cercadas por palmeiras em ambiente tropical"
  },
  {
    id: 10,
    title: "Lagos Naturales",
    description: "Paisajes naturales para relajarse",
    status: "disponible",
    badge: "Disponible Hoy",
    image: naturalLakesImg,
    altText: "Lagos naturais serenos com reflexos no céu, vegetação exuberante e pássaros"
  },
  {
    id: 11,
    title: "Senderos Ecológicos",
    description: "Caminatas en contacto con la naturaleza",
    status: "disponible",
    badge: "Disponible Hoy",
    image: ecoTrailsImg,
    altText: "Trilha ecológica de madeira através de floresta tropical com vegetação verde exuberante"
  },
  {
    id: 12,
    title: "Churrasqueiras",
    description: "Espacios para reuniones familiares",
    status: "disponible",
    badge: "Disponible Hoy",
    image: bbqAreaImg,
    altText: "Área de churrasqueiras ao ar livre com mesas de piquenique e áreas sombreadas"
  }
];

import { Badge } from "@/components/ui/badge";

interface AttractionCardProps {
  attraction: Attraction;
  index: number;
}

const AttractionCard = ({ attraction, index }: AttractionCardProps) => {
  const statusText = attraction.status === 'construccion' 
    ? 'Em construção' 
    : 'Disponível agora';
  
  return (
    <article 
      className="group bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-aqua-primary/20 hover:scale-[1.02] animate-fade-in will-change-transform focus-within:ring-2 focus-within:ring-aqua-primary focus-within:ring-offset-2 focus-within:ring-offset-background"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'backwards'
      }}
      role="article"
      aria-labelledby={`attraction-title-${attraction.id}`}
      aria-describedby={`attraction-desc-${attraction.id} attraction-status-${attraction.id}`}
      tabIndex={0}
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
        <img
          src={attraction.image}
          alt={attraction.altText}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {/* Badge */}
        <Badge 
          variant={attraction.status === 'construccion' ? 'construccion' : 'disponible'}
          className="absolute top-3 right-3"
          id={`attraction-status-${attraction.id}`}
          role="status"
          aria-label={`Status da atração: ${statusText}`}
        >
          {attraction.badge}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
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
      </div>
    </article>
  );
};

const AttractionsSection = () => {
  return (
    <section 
      className="relative z-10 bg-background py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="attractions-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 
            id="attractions-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4"
          >
            Atrações
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Descubra tudo o que YCC Water Park tem para oferecer
          </p>
        </header>

        {/* Grid Container - Responsive: 1 col mobile / 2 cols tablet / 3 cols desktop */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          role="list"
          aria-label="Lista de atrações do parque"
        >
          {attractions.map((attraction, index) => (
            <AttractionCard key={attraction.id} attraction={attraction} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
