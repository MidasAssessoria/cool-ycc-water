import { Home, Sparkles, Calendar, Globe, TrendingUp, Key } from "lucide-react";
import BungalowCarousel from "./bungalows/BungalowCarousel";
import StatsCounter from "./bungalows/StatsCounter";
import ROICard from "./bungalows/ROICard";
import FeatureCard from "./bungalows/FeatureCard";
import CTAButtons from "./bungalows/CTAButtons";
import TrustBadges from "./bungalows/TrustBadges";
import FloatingBadge from "./bungalows/FloatingBadge";
import WaveSeparator from "./bungalows/WaveSeparator";

const BungalowsHeroSection = () => {
  return (
    <section 
      className="relative min-h-screen py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-bungalow-warm-white overflow-hidden"
      aria-labelledby="bungalows-title"
    >
      {/* Floating Badge */}
      <FloatingBadge />

      {/* Decorative Wave Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="currentColor" fill="none" strokeWidth="2" className="text-bungalow-primary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <header className="text-center mb-12 md:mb-16">
          <h1 
            id="bungalows-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-bungalow-charcoal mb-4 md:mb-6 animate-fade-in"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
          >
            Bungalows Exclusivos
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-bungalow-primary/80 font-light max-w-3xl mx-auto animate-fade-in">
            Seu Refúgio Privado
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Propriedade compartilhada inteligente com retorno garantido
          </p>
        </header>

        {/* Main Content Grid - 60/40 Split on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          
          {/* Left Side - Image Carousel (60%) */}
          <div className="lg:col-span-3">
            <article className="relative h-[400px] sm:h-[500px] lg:h-[600px] shadow-2xl">
              <BungalowCarousel />
            </article>
          </div>

          {/* Right Side - Feature Cards (40%) with Glass Morphism */}
          <aside className="lg:col-span-2 space-y-4">
            {/* Feature Card 1 */}
            <div className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-bungalow-primary/20 backdrop-blur-sm rounded-xl group-hover:bg-bungalow-primary/30 transition-all duration-300 group-hover:scale-110">
                  <Home className="w-6 h-6 text-bungalow-primary drop-shadow-lg" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-bungalow-charcoal mb-2 drop-shadow-sm">66m² de Conforto</h3>
                  <ul className="text-sm text-foreground/80 space-y-1">
                    <li>• 1 dormitório + 1 suíte com closet</li>
                    <li>• Acomoda até 6 pessoas</li>
                    <li>• Totalmente mobiliado e equipado</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-bungalow-secondary/20 backdrop-blur-sm rounded-xl group-hover:bg-bungalow-secondary/30 transition-all duration-300 group-hover:scale-110">
                  <Sparkles className="w-6 h-6 text-bungalow-secondary drop-shadow-lg" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-bungalow-charcoal mb-2 drop-shadow-sm">Comodidades Premium</h3>
                  <ul className="text-sm text-foreground/80 space-y-1">
                    <li>• Ar condicionado em todos os ambientes</li>
                    <li>• Hidromassagem no terraço privado</li>
                    <li>• WiFi, TV, cozinha completa</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-bungalow-coral/20 backdrop-blur-sm rounded-xl group-hover:bg-bungalow-coral/30 transition-all duration-300 group-hover:scale-110">
                  <Calendar className="w-6 h-6 text-bungalow-coral drop-shadow-lg" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-bungalow-charcoal mb-2 drop-shadow-sm">Flexibilidade Total</h3>
                  <ul className="text-sm text-foreground/80 space-y-1">
                    <li>• Contrato de 50 anos</li>
                    <li>• Use, alugue ou intercambie</li>
                    <li>• Sistema rotativo inteligente</li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Feature Cards Grid - 3 Columns with Enhanced Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            icon={Globe}
            title="Intercâmbio Global"
            features={[
              "Acesso a 4.000+ destinos",
              "110 países disponíveis",
              "Programa Férias Fácil incluído",
            ]}
            colorClass="bg-gradient-to-br from-bungalow-primary to-bungalow-secondary"
            bgClass="bg-gradient-to-br from-bungalow-primary/10 to-bungalow-secondary/10"
            delay={0}
          />

          <FeatureCard
            icon={TrendingUp}
            title="ROI Atrativo"
            features={[
              "Retorno de até 29,4% ao ano",
              "Payback entre 3,4 e 5,2 anos",
              "Gestão profissional inclusa",
            ]}
            colorClass="bg-gradient-to-br from-green-500 to-emerald-600"
            bgClass="bg-gradient-to-br from-green-500/10 to-emerald-600/10"
            delay={100}
          />

          <FeatureCard
            icon={Key}
            title="Propriedade Inteligente"
            features={[
              "Transferível e herdável",
              "80% da renda para você",
              "Zero preocupações operacionais",
            ]}
            colorClass="bg-gradient-to-br from-bungalow-coral to-orange-500"
            bgClass="bg-gradient-to-br from-bungalow-coral/10 to-orange-500/10"
            delay={200}
          />
        </div>

        {/* Stats Banner with Animated Counters */}
        <div className="glass-card-strong rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatsCounter
              end={64}
              label="Unidades Exclusivas"
              color="text-bungalow-primary"
              duration={2000}
            />
            <StatsCounter
              end={50}
              label="Anos de Direito"
              color="text-bungalow-secondary"
              duration={2200}
            />
            <StatsCounter
              end={80}
              suffix="%"
              label="Renda do Proprietário"
              color="text-bungalow-coral"
              duration={2400}
            />
            <StatsCounter
              end={4000}
              suffix="+"
              label="Destinos"
              color="text-green-600"
              duration={2600}
            />
          </div>
        </div>

        {/* ROI Comparison Cards - Enhanced with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <ROICard
            occupancy="Ocupação 100%"
            percentage="29,4%"
            subtitle="Retorno Anual"
            annualReturn="USD 4.940/ano líquido"
            payback="Payback: 3,4 anos"
            variant="green"
          />

          <ROICard
            occupancy="Cenário Conservador (70%)"
            percentage="19,4%"
            subtitle="Retorno Anual"
            annualReturn="USD 3.260/ano líquido"
            payback="Payback: 5,2 anos"
            variant="blue"
          />
        </div>

        {/* CTA Section with Premium Buttons */}
        <footer className="text-center" aria-label="Ações de contato">
          <CTAButtons />

          {/* Trust Indicators with Icons */}
          <TrustBadges />
        </footer>
      </div>

      {/* Animated Wave Separator - Bottom */}
      <WaveSeparator />
    </section>
  );
};

export default BungalowsHeroSection;
