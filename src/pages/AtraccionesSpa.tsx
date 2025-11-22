import { SEOHead } from "@/components/SEOHead";
import Navigation from "@/components/navigation/Navigation";
import { AttractionCard } from "@/components/AttractionCard";
import { AttractionBreadcrumb } from "@/components/AttractionBreadcrumb";
import { spaRelax } from "@/data/attractions-data";
import { SpaIcon } from "@/components/spa/SpaIcon";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { navigateToSection } from "@/lib/utils";

const AtraccionesSpa = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Spa & Relax - YCC Water Park"
        description="Renueva cuerpo y mente con nuestros 6 tratamientos de spa: exfoliación, masajes, sauna, limpieza facial y más. Bienestar y relajación garantizados."
      />
      
      <div className="min-h-screen bg-spa-cream">
        <Navigation />
        <AttractionBreadcrumb categoryName="Spa & Relax" />
        
        {/* Hero Section - Elegante e Sereno */}
        <section className="relative pb-12 px-4 bg-gradient-to-b from-spa-sand via-spa-cream to-spa-cream">
          <div className="max-w-7xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate('/atracciones')}
              className="mb-8 text-spa-dark hover:text-spa-brown hover:bg-spa-sand/50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Atracciones
            </Button>
            
            <div className="text-center mb-12">
              {/* Icon decorativo */}
              <div className="inline-block mb-6 animate-float">
                <SpaIcon variant="lotus" className="w-20 h-20 text-spa-accent" />
              </div>
              
              {/* Ornamental line */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-spa-accent"></div>
                <div className="w-2 h-2 rotate-45 bg-spa-accent"></div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-spa-accent"></div>
              </div>
              
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-spa-dark mb-6">
                Spa & Relax
              </h1>
              
              <p className="font-cormorant text-xl md:text-2xl italic text-spa-text max-w-3xl mx-auto mb-4">
                Un viaje hacia el equilibrio y la armonía interior
              </p>
              
              <p className="text-base md:text-lg text-spa-text/80 max-w-2xl mx-auto leading-relaxed">
                Renueva tu cuerpo y mente con nuestros exclusivos tratamientos de spa. 
                Bienestar, relajación y cuidado profesional en un ambiente único.
              </p>
              
              {/* Ornamental line */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-spa-accent"></div>
                <div className="w-2 h-2 rotate-45 bg-spa-accent"></div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-spa-accent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="py-12 px-4 bg-spa-cream">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-spa-dark mb-4">
                Nuestros Tratamientos
              </h2>
              <p className="font-cormorant text-lg text-spa-text/70 italic">
                Experiencias diseñadas para tu bienestar
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {spaRelax.map((treatment, index) => (
                <div 
                  key={index}
                  className="transform transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AttractionCard
                    name={treatment.name}
                    description={treatment.description}
                    image={treatment.image}
                    duration={treatment.duration}
                    capacity={treatment.capacity}
                    badge={treatment.badge}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - Redesign com Ícones */}
        <section className="py-20 px-4 bg-gradient-to-br from-spa-sand via-spa-cream to-spa-sand relative overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10">
              <SpaIcon variant="lotus" className="w-32 h-32 text-spa-dark" />
            </div>
            <div className="absolute bottom-10 right-10">
              <SpaIcon variant="lotus" className="w-32 h-32 text-spa-dark" />
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Ornamental line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-spa-brown"></div>
              <div className="w-2 h-2 rotate-45 bg-spa-brown"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-spa-brown"></div>
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-spa-dark mb-4">
              Beneficios del Spa
            </h2>
            
            <p className="font-cormorant text-xl text-center text-spa-text/70 italic mb-16">
              Transforma tu bienestar con cada visita
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Benefit 1 */}
              <div className="text-center group">
                <div className="mb-6 inline-block transform transition-transform duration-300 group-hover:scale-110">
                  <SpaIcon variant="meditation" className="w-16 h-16 text-spa-brown" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-spa-dark mb-3">
                  Relajación Profunda
                </h3>
                <p className="text-spa-text/80 leading-relaxed">
                  Reduce el estrés y la tensión muscular, alcanzando un estado de calma total
                </p>
              </div>
              
              {/* Benefit 2 */}
              <div className="text-center group">
                <div className="mb-6 inline-block transform transition-transform duration-300 group-hover:scale-110">
                  <SpaIcon variant="wellness" className="w-16 h-16 text-spa-brown" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-spa-dark mb-3">
                  Bienestar Integral
                </h3>
                <p className="text-spa-text/80 leading-relaxed">
                  Mejora la circulación y oxigenación, revitalizando todo tu organismo
                </p>
              </div>
              
              {/* Benefit 3 */}
              <div className="text-center group">
                <div className="mb-6 inline-block transform transition-transform duration-300 group-hover:scale-110">
                  <SpaIcon variant="lotus" className="w-16 h-16 text-spa-brown" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-spa-dark mb-3">
                  Renovación Total
                </h3>
                <p className="text-spa-text/80 leading-relaxed">
                  Piel radiante y cuerpo revitalizado desde el interior
                </p>
              </div>
            </div>
            
            {/* Ornamental line */}
            <div className="flex items-center justify-center gap-4 mt-16">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-spa-brown"></div>
              <div className="w-2 h-2 rotate-45 bg-spa-brown"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-spa-brown"></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-spa-brown via-spa-dark to-spa-brown relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 animate-float">
              <SpaIcon variant="aromatherapy" className="w-24 h-24 text-spa-cream" />
            </div>
            <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
              <SpaIcon variant="water" className="w-24 h-24 text-spa-cream" />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Ornamental line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-spa-accent"></div>
              <div className="w-2 h-2 rotate-45 bg-spa-accent"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-spa-accent"></div>
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-spa-cream mb-6">
              Reserva tu Experiencia
            </h2>
            
            <p className="font-cormorant text-2xl italic text-spa-sand mb-4">
              de Relajación
            </p>
            
            <p className="text-lg text-spa-sand/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              Agenda tu visita y descubre el bienestar que mereces en un espacio 
              diseñado para tu tranquilidad y renovación
            </p>
            
            <Button
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                setTimeout(() => navigateToSection('plan-visit-form', 80), 100);
              }}
              className="bg-spa-accent hover:bg-spa-accent/90 text-spa-dark font-semibold px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Agendar Visita Guiada
            </Button>
            
            {/* Ornamental line */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-spa-accent"></div>
              <div className="w-2 h-2 rotate-45 bg-spa-accent"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-spa-accent"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AtraccionesSpa;
