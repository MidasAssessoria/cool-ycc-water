// Estrutura de dados completa de todas as categorias e atrações do YCC Water Park

export interface Attraction {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  icon?: string;
  duration?: string;
  capacity?: string;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  heroImage: string;
  icon: string;
  color: string;
  totalAttractions: number;
}

// ========================================
// CATEGORIAS PRINCIPAIS
// ========================================
export const categories: Category[] = [
  {
    id: 'acuaticas',
    name: 'Atracciones Acuáticas',
    slug: 'acuaticas',
    description: 'Toboganes, piscinas de olas, ríos lentos y más diversión acuática para toda la familia',
    heroImage: '/assets/attractions/wave-pool.webp',
    icon: 'Waves',
    color: 'from-blue-500 to-cyan-500',
    totalAttractions: 12
  },
  {
    id: 'spa',
    name: 'Spa & Relax',
    slug: 'spa',
    description: 'Tratamientos de relajación, masajes, sauna y bienestar para renovar cuerpo y mente',
    heroImage: '/assets/attractions/hydro-spa.webp',
    icon: 'Sparkles',
    color: 'from-purple-500 to-pink-500',
    totalAttractions: 6
  },
  {
    id: 'deportes',
    name: 'Deportes',
    slug: 'deportes',
    description: 'Canchas deportivas, gimnasio, crossfit y actividades para mantenerte activo',
    heroImage: '/assets/attractions/tennis-courts.webp',
    icon: 'Trophy',
    color: 'from-green-500 to-emerald-500',
    totalAttractions: 8
  },
  {
    id: 'gastronomia',
    name: 'Gastronomía',
    slug: 'gastronomia',
    description: 'Restaurantes, bares acuáticos y patio de comidas con sabores para todos',
    heroImage: '/assets/attractions/restaurant.webp',
    icon: 'UtensilsCrossed',
    color: 'from-orange-500 to-red-500',
    totalAttractions: 3
  },
  {
    id: 'kids',
    name: 'Kids Zone',
    slug: 'kids',
    description: 'Área exclusiva de juegos, castillos, playa infantil y diversión segura para niños',
    heroImage: '/assets/attractions/kids-zone.webp',
    icon: 'Baby',
    color: 'from-yellow-500 to-amber-500',
    totalAttractions: 5
  },
  {
    id: 'bungalows',
    name: 'Bungalows VIP',
    slug: 'bungalows',
    description: 'Apartamentos exclusivos con amenidades premium, gimnasio VIP, spa privado y más',
    heroImage: '/assets/attractions/bungalows.webp',
    icon: 'Home',
    color: 'from-indigo-500 to-purple-500',
    totalAttractions: 14
  }
];

// ========================================
// ATRACCIONES ACUÁTICAS (12)
// ========================================
export const atraccionesAcuaticas: Attraction[] = [
  {
    id: 'piscina-olas',
    name: 'Piscina de Olas',
    description: 'Experimenta la emoción del mar con olas artificiales de hasta 1.5 metros',
    image: '/assets/attractions/wave-pool.webp',
    category: 'acuaticas',
    icon: '🌊',
    capacity: '200 personas'
  },
  {
    id: 'tobogan-kamikaze',
    name: 'Tobogán Kamikaze',
    description: 'Caída vertical extrema para los más aventureros',
    image: '/assets/attractions/water-slides.webp',
    category: 'acuaticas',
    icon: '🎢',
    duration: '15 segundos',
    badge: 'Extremo'
  },
  {
    id: 'tobogan-speed-6',
    name: 'Tobogán Speed 6 Lugares',
    description: 'Competición familiar en tobogán con 6 pistas simultáneas',
    image: '/assets/attractions/water-slides.webp',
    category: 'acuaticas',
    icon: '🏁',
    capacity: '6 pistas'
  },
  {
    id: 'rio-lento',
    name: 'Río Lento',
    description: 'Relájate flotando en el río de corriente suave que rodea el parque',
    image: '/assets/attractions/lazy-river.webp',
    category: 'acuaticas',
    icon: '🏞️',
    duration: '20 minutos'
  },
  {
    id: 'rio-suave',
    name: 'Río Suave',
    description: 'Recorrido tranquilo ideal para familias y niños',
    image: '/assets/attractions/lazy-river.webp',
    category: 'acuaticas',
    icon: '🚣',
    duration: '15 minutos'
  },
  {
    id: 'pileta-adultos',
    name: 'Pileta Adultos',
    description: 'Piscina recreativa exclusiva para adultos con área de descanso',
    image: '/assets/attractions/recreational-pools.webp',
    category: 'acuaticas',
    icon: '🏊',
    capacity: '100 personas',
    badge: 'Solo adultos'
  },
  {
    id: 'piscina-caliente',
    name: 'Piscina Caliente',
    description: 'Piscina temperada para relajación en cualquier época del año',
    image: '/assets/attractions/hydro-spa.webp',
    category: 'acuaticas',
    icon: '♨️',
    capacity: '50 personas'
  },
  {
    id: 'jacuzzi',
    name: 'Jacuzzi',
    description: 'Hidromasaje con chorros terapéuticos y agua temperada',
    image: '/assets/attractions/hydro-spa.webp',
    category: 'acuaticas',
    icon: '💆',
    capacity: '15 personas'
  },
  {
    id: 'parque-flotante',
    name: 'Parque Flotante',
    description: 'Obstáculos inflables y juegos acuáticos para toda la familia',
    image: '/assets/attractions/recreational-pools.webp',
    category: 'acuaticas',
    icon: '🎈',
    badge: 'Nuevo'
  },
  {
    id: 'mirador-lago',
    name: 'Mirador del Lago',
    description: 'Vistas panorámicas espectaculares del lago natural',
    image: '/assets/attractions/natural-lakes.webp',
    category: 'acuaticas',
    icon: '🔭'
  },
  {
    id: 'terrazas-lago',
    name: 'Terrazas del Lago',
    description: 'Área de descanso con vistas al lago y espacios sombreados',
    image: '/assets/attractions/natural-lakes.webp',
    category: 'acuaticas',
    icon: '🌅'
  },
  {
    id: 'area-camaratas',
    name: 'Área de Camaratas',
    description: 'Zona de camarotes privados con acceso directo al lago',
    image: '/assets/attractions/natural-lakes.webp',
    category: 'acuaticas',
    icon: '🏕️',
    badge: 'Premium'
  }
];

// ========================================
// SPA & RELAX (6)
// ========================================
export const spaRelax: Attraction[] = [
  {
    id: 'exfoliacion',
    name: 'Exfoliación',
    description: 'Tratamiento de renovación celular para piel suave y luminosa',
    image: '/assets/attractions/hydro-spa.webp',
    category: 'spa',
    icon: '✨',
    duration: '45 minutos',
    badge: 'Popular'
  },
  {
    id: 'limpieza-facial',
    name: 'Limpieza Facial',
    description: 'Limpieza profunda y purificación de la piel del rostro',
    image: '/assets/attractions/hydro-spa.webp',
    category: 'spa',
    icon: '🧖',
    duration: '60 minutos'
  },
  {
    id: 'hidratacion',
    name: 'Hidratación',
    description: 'Tratamiento intensivo de hidratación corporal completa',
    image: '/assets/attractions/hydro-spa.webp',
    category: 'spa',
    icon: '💧',
    duration: '50 minutos'
  },
  {
    id: 'sauna',
    name: 'Sauna',
    description: 'Sauna tradicional para desintoxicación y relajación muscular',
    image: '/assets/attractions/hydro-spa.webp',
    category: 'spa',
    icon: '♨️',
    duration: '30 minutos',
    capacity: '8 personas'
  },
  {
    id: 'masaje',
    name: 'Masaje',
    description: 'Masajes terapéuticos y relajantes por profesionales certificados',
    image: '/assets/attractions/hydro-spa.webp',
    category: 'spa',
    icon: '💆',
    duration: '60 minutos',
    badge: 'Recomendado'
  },
  {
    id: 'bano-pies',
    name: 'Baño de Pies',
    description: 'Reflexología y tratamiento relajante para pies cansados',
    image: '/assets/attractions/hydro-spa.webp',
    category: 'spa',
    icon: '🦶',
    duration: '30 minutos'
  }
];

// ========================================
// DEPORTES (8)
// ========================================
export const deportes: Attraction[] = [
  {
    id: 'futbol',
    name: 'Fútbol',
    description: 'Canchas de césped natural y sintético para partidos y entrenamientos',
    image: '/assets/attractions/tennis-courts.webp',
    category: 'deportes',
    icon: '⚽',
    capacity: '22 jugadores'
  },
  {
    id: 'voleybol',
    name: 'Voleybol',
    description: 'Canchas de voleybol y voley de playa con arena',
    image: '/assets/attractions/tennis-courts.webp',
    category: 'deportes',
    icon: '🏐',
    capacity: '12 jugadores'
  },
  {
    id: 'basketball',
    name: 'Basketball',
    description: 'Cancha profesional de basketball para juegos y práctica',
    image: '/assets/attractions/tennis-courts.webp',
    category: 'deportes',
    icon: '🏀',
    capacity: '10 jugadores'
  },
  {
    id: 'tenis',
    name: 'Tenis',
    description: 'Canchas de tenis con pista dura y equipamiento completo',
    image: '/assets/attractions/tennis-courts.webp',
    category: 'deportes',
    icon: '🎾',
    capacity: '4 jugadores',
    badge: 'Popular'
  },
  {
    id: 'padel',
    name: 'Padel',
    description: 'Canchas de padel techadas para disfrutar en cualquier clima',
    image: '/assets/attractions/tennis-courts.webp',
    category: 'deportes',
    icon: '🎾',
    capacity: '4 jugadores',
    badge: 'Nuevo'
  },
  {
    id: 'natacion',
    name: 'Natación',
    description: 'Clases y entrenamientos de natación con instructores profesionales',
    image: '/assets/attractions/recreational-pools.webp',
    category: 'deportes',
    icon: '🏊',
    duration: '45 minutos'
  },
  {
    id: 'crossfit',
    name: 'Crossfit',
    description: 'Área de crossfit equipada para entrenamientos funcionales',
    image: '/assets/attractions/tennis-courts.webp',
    category: 'deportes',
    icon: '💪',
    capacity: '15 personas'
  },
  {
    id: 'gimnasio-publico',
    name: 'Gimnasio Público',
    description: 'Gimnasio completo con equipamiento profesional de última generación',
    image: '/assets/attractions/tennis-courts.webp',
    category: 'deportes',
    icon: '🏋️',
    capacity: '30 personas',
    badge: 'Premium'
  }
];

// ========================================
// GASTRONOMÍA (3)
// ========================================
export const gastronomia: Attraction[] = [
  {
    id: 'restaurante-lago',
    name: 'Restaurante Lago',
    description: 'Restaurante principal con vistas al lago y cocina internacional',
    image: '/assets/attractions/restaurant.webp',
    category: 'gastronomia',
    icon: '🍽️',
    capacity: '120 personas',
    badge: 'Premium'
  },
  {
    id: 'bar-acuatico',
    name: 'Bar Acuático',
    description: 'Bar dentro de la piscina con bebidas refrescantes y snacks',
    image: '/assets/attractions/restaurant.webp',
    category: 'gastronomia',
    icon: '🍹',
    capacity: '40 personas',
    badge: 'Popular'
  },
  {
    id: 'patio-comida',
    name: 'Patio de Comida',
    description: 'Variedad de opciones gastronómicas rápidas y económicas',
    image: '/assets/attractions/restaurant.webp',
    category: 'gastronomia',
    icon: '🍕',
    capacity: '80 personas'
  }
];

// ========================================
// KIDS ZONE (5)
// ========================================
export const kidsZone: Attraction[] = [
  {
    id: 'salon-juegos',
    name: 'Salón de Juegos',
    description: 'Área cubierta con videojuegos, juegos de mesa y entretenimiento infantil',
    image: '/assets/attractions/kids-zone.webp',
    category: 'kids'
  },
  {
    id: 'castillo-infantil',
    name: 'Castillo Infantil',
    description: 'Castillo acuático con toboganes y juegos para los más pequeños',
    image: '/assets/attractions/kids-zone.webp',
    category: 'kids'
  },
  {
    id: 'playa-ninos',
    name: 'Playa de Niños',
    description: 'Piscina de profundidad gradual tipo playa, segura para niños',
    image: '/assets/attractions/kids-zone.webp',
    category: 'kids'
  },
  {
    id: 'body-slide-kids',
    name: 'Body Slide',
    description: 'Toboganes adaptados para niños con seguridad garantizada',
    image: '/assets/attractions/water-slides.webp',
    category: 'kids'
  },
  {
    id: 'area-rompecas',
    name: 'Área de Rompecas',
    description: 'Zona de juegos didácticos y rompecabezas gigantes',
    image: '/assets/attractions/kids-zone.webp',
    category: 'kids'
  }
];

// ========================================
// BUNGALOWS VIP (14 amenidades exclusivas)
// ========================================
export const bungalowsAmenities: Attraction[] = [
  {
    id: 'recepcion-vip',
    name: 'Recepción VIP',
    description: 'Recepción exclusiva 24/7 para residentes de bungalows',
    image: '/assets/attractions/bungalows.webp',
    category: 'bungalows'
  },
  {
    id: 'bloque-apartamentos',
    name: 'Bloque de Apartamentos',
    description: 'Apartamentos de 2 plantas con acabados premium',
    image: '/assets/attractions/bungalows.webp',
    category: 'bungalows'
  },
  {
    id: 'servicio-concierge',
    name: 'Servicio de Concierge',
    description: 'Atención personalizada y servicios a la carta',
    image: '/assets/attractions/bungalows.webp',
    category: 'bungalows'
  },
  {
    id: 'hidromassagem-privada',
    name: 'Hidromassagem Privada',
    description: 'Cada bungalow cuenta con jacuzzi privado',
    image: '/assets/attractions/hydro-spa.webp',
    category: 'bungalows'
  },
  {
    id: 'salon-spa-vip',
    name: 'Salón & SPA Exclusivo',
    description: 'Spa privado solo para residentes con tratamientos premium',
    image: '/assets/attractions/hydro-spa.webp',
    category: 'bungalows'
  },
  {
    id: 'cancha-cubierta',
    name: 'Cancha Cubierta',
    description: 'Cancha deportiva techada de uso exclusivo',
    image: '/assets/attractions/tennis-courts.webp',
    category: 'bungalows'
  },
  {
    id: 'salon-convivencia',
    name: 'Salón de Convivencia',
    description: 'Espacio social para eventos y reuniones familiares',
    image: '/assets/attractions/bungalows.webp',
    category: 'bungalows'
  },
  {
    id: 'gimnasio-vip',
    name: 'Gimnasio VIP Bungalows',
    description: 'Gimnasio privado equipado exclusivo para residentes',
    image: '/assets/attractions/tennis-courts.webp',
    category: 'bungalows'
  },
  {
    id: 'sala-cine',
    name: 'Sala de Cine',
    description: 'Cine privado con pantalla grande y sonido envolvente',
    image: '/assets/attractions/bungalows.webp',
    category: 'bungalows'
  },
  {
    id: 'bar-restaurante-vip',
    name: 'Bar y Restaurante VIP',
    description: 'Restaurante exclusivo con menú gourmet para residentes',
    image: '/assets/attractions/restaurant.webp',
    category: 'bungalows'
  },
  {
    id: 'parrilla-privada',
    name: 'Parrilla',
    description: 'Área de parrillas y quincho para eventos privados',
    image: '/assets/attractions/bbq-area.webp',
    category: 'bungalows'
  },
  {
    id: 'salon-eventos',
    name: 'Salón de Eventos',
    description: 'Salón para celebraciones y eventos especiales',
    image: '/assets/attractions/bungalows.webp',
    category: 'bungalows'
  },
  {
    id: 'fuentes-ornamentales',
    name: 'Fuentes',
    description: 'Fuentes ornamentales y espacios ajardinados',
    image: '/assets/attractions/natural-lakes.webp',
    category: 'bungalows'
  },
  {
    id: 'senderismo',
    name: 'Senderismo',
    description: 'Rutas de senderismo privadas alrededor del complejo',
    image: '/assets/attractions/eco-trails.webp',
    category: 'bungalows'
  }
];

// ========================================
// HELPERS
// ========================================
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(cat => cat.id === id);
};

export const getAttractionsByCategory = (categoryId: string): Attraction[] => {
  switch (categoryId) {
    case 'acuaticas':
      return atraccionesAcuaticas;
    case 'spa':
      return spaRelax;
    case 'deportes':
      return deportes;
    case 'gastronomia':
      return gastronomia;
    case 'kids':
      return kidsZone;
    case 'bungalows':
      return bungalowsAmenities;
    default:
      return [];
  }
};

export const getAllAttractions = (): Attraction[] => {
  return [
    ...atraccionesAcuaticas,
    ...spaRelax,
    ...deportes,
    ...gastronomia,
    ...kidsZone,
    ...bungalowsAmenities
  ];
};
