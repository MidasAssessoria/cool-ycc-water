import React, { useEffect, useState } from 'react';
import { Clock, Info, Car, Bus, Plane, Navigation, Phone } from 'lucide-react';

const LocationSection = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Add preconnect for Google Maps performance optimization
  useEffect(() => {
    const preconnectLink1 = document.createElement('link');
    preconnectLink1.rel = 'preconnect';
    preconnectLink1.href = 'https://maps.googleapis.com';
    
    const preconnectLink2 = document.createElement('link');
    preconnectLink2.rel = 'preconnect';
    preconnectLink2.href = 'https://maps.gstatic.com';
    preconnectLink2.crossOrigin = 'anonymous';
    
    document.head.appendChild(preconnectLink1);
    document.head.appendChild(preconnectLink2);
    
    return () => {
      document.head.removeChild(preconnectLink1);
      document.head.removeChild(preconnectLink2);
    };
  }, []);

  // Add structured data (Schema.org JSON-LD) for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'ycc-location-schema';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "name": "YCC Water Park",
      "description": "El mayor parque acuático de la región con más de 25 hectáreas de diversión para toda la familia",
      "image": "https://yccwaterpark.lovable.app/hero-waterpark.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ypané",
        "addressCountry": "PY"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-25.2834",
        "longitude": "-57.5234"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Parking",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Restaurant",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Swimming Pool",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Water Slides",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Wave Pool",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Kids Area",
          "value": true
        }
      ],
      "priceRange": "$$",
      "publicAccess": true,
      "isAccessibleForFree": false
    });
    
    document.head.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.getElementById('ycc-location-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section 
      className="py-16 sm:py-20 lg:py-20 px-4 sm:px-6 bg-background"
      aria-labelledby="location-heading"
      role="region"
    >
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 
            id="location-heading"
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4"
          >
            Ubicación y Cómo Llegar
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Encuentra YCC Water Park en el corazón de Ypané, Paraguay
          </p>
        </header>

        {/* Main Grid - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Map (60% - 3fr) */}
          <div className="lg:col-span-3" role="complementary" aria-label="Mapa e información de ubicación">
            {/* Map Container */}
            <div className="map-wrapper relative rounded-xl overflow-hidden shadow-2xl mb-6 animate-fade-in transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              {/* Loading Skeleton */}
              {!isMapLoaded && (
                <div className="absolute inset-0 bg-muted animate-pulse z-10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
                      <p className="text-sm text-muted-foreground font-medium">Cargando mapa...</p>
                    </div>
                  </div>
                  {/* Skeleton map elements */}
                  <div className="absolute top-4 left-4 w-32 h-8 bg-background/50 rounded" />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <div className="w-10 h-10 bg-background/50 rounded" />
                    <div className="w-10 h-10 bg-background/50 rounded" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 h-6 bg-background/50 rounded" />
                </div>
              )}
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.24434633756!2d-57.58546683281251!3d-25.2834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da5d63e3fb44b%3A0x3e8c9a61d5e2e3b0!2sYpan%C3%A9%2C%20Paraguay!5e0!3m2!1sen!2spy!4v1234567890123"
                title="Mapa de ubicación YCC Water Park en Ypané, Paraguay"
                aria-label="Mapa interactivo mostrando la ubicación del YCC Water Park en Ypané, Paraguay. Usa las teclas de flecha para navegar por el mapa."
                className="w-full h-[280px] sm:h-[300px] md:h-[400px] lg:h-[450px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex={0}
                onLoad={() => setIsMapLoaded(true)}
              />
              {/* Overlay gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 pointer-events-none" />
            </div>

            {/* Address Card */}
            <article 
              className="address-card flex items-center gap-3 sm:gap-4 bg-card p-4 sm:p-5 rounded-xl shadow-lg border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-200 animate-fade-in focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2" 
              style={{ animationDelay: '100ms' }}
              role="article"
              aria-labelledby="address-title"
              tabIndex={0}
            >
              <div className="icon-wrapper flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 text-primary" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="img"
                >
                  <title>Ícono de ubicación</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="address-content">
                <h4 id="address-title" className="font-semibold text-foreground text-base sm:text-lg mb-1">YCC Water Park</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">Ypané, Paraguay</p>
                <p className="text-muted-foreground/80 text-xs mt-1">+25 hectáreas de diversión</p>
              </div>
            </article>
          </div>

          {/* Right Column - Information (40% - 2fr) */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6" role="complementary" aria-label="Información de horarios y transporte">
            {/* Horários de Visita Card */}
            <article 
              className="info-card bg-card p-5 sm:p-6 rounded-xl shadow-lg border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-200 animate-fade-in focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2" 
              style={{ animationDelay: '200ms' }}
              role="article"
              aria-labelledby="schedule-title"
              tabIndex={0}
            >
              <h3 id="schedule-title" className="text-lg sm:text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" aria-hidden="true" role="img" />
                <span>Horarios de Visita</span>
              </h3>
              <div className="schedule space-y-3" role="list" aria-label="Horarios de funcionamiento">
                <div className="day-item flex justify-between items-center py-3 border-b border-border" role="listitem">
                  <span className="font-medium text-foreground text-sm sm:text-base">Sábados y Domingos</span>
                  <span className="font-bold text-primary text-base sm:text-lg" aria-label="Horario de 8 horas de la mañana a 18 horas de la tarde">8:00 - 18:00</span>
                </div>
                <div className="note flex items-start gap-2 bg-primary/5 p-3 rounded-lg mt-4" role="note" aria-label="Información importante">
                  <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" role="img" />
                  <span className="text-xs sm:text-sm text-muted-foreground">Visitas programadas únicamente</span>
                </div>
              </div>
            </article>

            {/* Como Chegar Card */}
            <article 
              className="transport-options bg-card p-5 sm:p-6 rounded-xl shadow-lg border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-200 animate-fade-in focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2" 
              style={{ animationDelay: '300ms' }}
              role="article"
              aria-labelledby="transport-title"
              tabIndex={0}
            >
              <h3 id="transport-title" className="text-lg sm:text-xl font-bold text-foreground mb-4">Cómo Llegar</h3>
              
              <div role="list" aria-label="Opciones de transporte">
                {/* Opção 1: Carro */}
                <div 
                  className="transport-item flex items-start gap-3 sm:gap-4 py-3 sm:py-4 border-b border-border transition-all duration-200 hover:bg-accent/5 hover:pl-2 rounded-lg focus-within:bg-accent/5 focus-within:pl-2"
                  role="listitem"
                  tabIndex={0}
                  aria-label="Opción de transporte en automóvil"
                >
                  <div className="icon-wrapper flex-shrink-0 mt-1">
                    <Car className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 transition-transform duration-200 hover:scale-110" aria-hidden="true" role="img" />
                  </div>
                  <div className="transport-content">
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">En Automóvil</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Desde Asunción: 30 minutos por Ruta 2</p>
                    <p className="text-xs sm:text-sm text-muted-foreground/80">Estacionamiento gratuito disponible</p>
                  </div>
                </div>

                {/* Opção 2: Ônibus */}
                <div 
                  className="transport-item flex items-start gap-3 sm:gap-4 py-3 sm:py-4 border-b border-border transition-all duration-200 hover:bg-accent/5 hover:pl-2 rounded-lg focus-within:bg-accent/5 focus-within:pl-2"
                  role="listitem"
                  tabIndex={0}
                  aria-label="Opción de transporte público"
                >
                  <div className="icon-wrapper flex-shrink-0 mt-1">
                    <Bus className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 transition-transform duration-200 hover:scale-110" aria-hidden="true" role="img" />
                  </div>
                  <div className="transport-content">
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Transporte Público</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Líneas de ómnibus para Ypané</p>
                    <p className="text-xs sm:text-sm text-muted-foreground/80">Parada: Terminal Ypané Centro</p>
                  </div>
                </div>

                {/* Opção 3: Avião */}
                <div 
                  className="transport-item flex items-start gap-3 sm:gap-4 py-3 sm:py-4 transition-all duration-200 hover:bg-accent/5 hover:pl-2 rounded-lg focus-within:bg-accent/5 focus-within:pl-2"
                  role="listitem"
                  tabIndex={0}
                  aria-label="Opción de transporte desde el aeropuerto"
                >
                  <div className="icon-wrapper flex-shrink-0 mt-1">
                    <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 transition-transform duration-200 hover:scale-110" aria-hidden="true" role="img" />
                  </div>
                  <div className="transport-content">
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Desde el Aeropuerto</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Aeropuerto Silvio Pettirossi: 45 minutos</p>
                    <p className="text-xs sm:text-sm text-muted-foreground/80">Taxi o transfer disponible</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Contact Actions - CTA Buttons */}
            <div className="contact-actions space-y-3 animate-fade-in" style={{ animationDelay: '400ms' }} role="navigation" aria-label="Acciones de contacto y navegación">
              <button 
                className="primary-btn flex items-center justify-center gap-2 w-full px-5 sm:px-6 py-3 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-95 text-sm sm:text-base"
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Ypané,Paraguay+YCC+Water+Park', '_blank')}
                aria-label="Abrir ubicación del YCC Water Park en Google Maps en nueva pestaña"
                type="button"
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" role="img" />
                <span>Abrir en Google Maps</span>
              </button>
              
              <button 
                className="secondary-btn flex items-center justify-center gap-2 w-full px-5 sm:px-6 py-3 sm:py-4 bg-transparent text-primary font-semibold border-2 border-primary rounded-lg hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-95 text-sm sm:text-base"
                aria-label="Solicitar servicio de transfer para el YCC Water Park"
                type="button"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" role="img" />
                <span>Solicitar Transfer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
