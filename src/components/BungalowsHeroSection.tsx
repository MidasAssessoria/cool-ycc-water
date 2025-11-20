import { Home, Sparkles, Calendar, Globe, TrendingUp, Key } from "lucide-react";
import bungalowsImage from "@/assets/attractions/bungalows.jpg";

const BungalowsHeroSection = () => {
  return (
    <section 
      className="relative min-h-screen py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-bungalow-warm-white overflow-hidden"
      aria-labelledby="bungalows-title"
    >
      {/* Floating Badge */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
        <div className="bg-bungalow-coral/10 backdrop-blur-sm border border-bungalow-coral/30 text-bungalow-coral px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
          64 unidades disponíveis
        </div>
      </div>

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
          
          {/* Left Side - Image Carousel Placeholder (60%) */}
          <div className="lg:col-span-3">
            <article className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              {/* Hero Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={bungalowsImage}
                  alt="Vista exterior de bungalows modernos com paisagismo tropical"
                  className="w-full h-full object-cover transition-transform duration-[20000ms] group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient Overlay - Dark bottom to transparent top */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Carousel Navigation Placeholder */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === 0 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Image Caption */}
              <div className="absolute bottom-20 left-6 right-6 text-white z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Bungalows Modernos</h3>
                <p className="text-sm md:text-base opacity-90">66m² de conforto e exclusividade</p>
              </div>
            </article>
          </div>

          {/* Right Side - Feature Cards (40%) */}
          <aside className="lg:col-span-2 space-y-4">
            {/* Feature Card 1 */}
            <div className="bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-bungalow-primary/10 rounded-xl group-hover:bg-bungalow-primary/20 transition-colors">
                  <Home className="w-6 h-6 text-bungalow-primary" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-bungalow-charcoal mb-2">66m² de Conforto</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 1 dormitório + 1 suíte com closet</li>
                    <li>• Acomoda até 6 pessoas</li>
                    <li>• Totalmente mobiliado e equipado</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-bungalow-secondary/10 rounded-xl group-hover:bg-bungalow-secondary/20 transition-colors">
                  <Sparkles className="w-6 h-6 text-bungalow-secondary" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-bungalow-charcoal mb-2">Comodidades Premium</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ar condicionado em todos os ambientes</li>
                    <li>• Hidromassagem no terraço privado</li>
                    <li>• WiFi, TV, cozinha completa</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-bungalow-coral/10 rounded-xl group-hover:bg-bungalow-coral/20 transition-colors">
                  <Calendar className="w-6 h-6 text-bungalow-coral" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-bungalow-charcoal mb-2">Flexibilidade Total</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Contrato de 50 anos</li>
                    <li>• Use, alugue ou intercambie</li>
                    <li>• Sistema rotativo inteligente</li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Feature Cards Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Globe Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:scale-[1.02] group">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 bg-gradient-to-br from-bungalow-primary to-bungalow-secondary rounded-2xl group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-bungalow-charcoal mb-2">Intercâmbio Global</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Acesso a 4.000+ destinos</li>
                  <li>110 países disponíveis</li>
                  <li>Programa Férias Fácil incluído</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ROI Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:scale-[1.02] group">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-bungalow-charcoal mb-2">ROI Atrativo</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Retorno de até 29,4% ao ano</li>
                  <li>Payback entre 3,4 e 5,2 anos</li>
                  <li>Gestão profissional inclusa</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Property Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:scale-[1.02] group">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 bg-gradient-to-br from-bungalow-coral to-orange-500 rounded-2xl group-hover:scale-110 transition-transform">
                <Key className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-bungalow-charcoal mb-2">Propriedade Inteligente</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Transferível e herdável</li>
                  <li>80% da renda para você</li>
                  <li>Zero preocupações operacionais</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner - Placeholder for Phase 3 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border/50">
          <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-bungalow-primary mb-2">64</div>
            <div className="text-sm md:text-base text-muted-foreground">Unidades Exclusivas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-bungalow-secondary mb-2">50</div>
            <div className="text-sm md:text-base text-muted-foreground">Anos de Direito</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-bungalow-coral mb-2">80%</div>
            <div className="text-sm md:text-base text-muted-foreground">Renda do Proprietário</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-2">4.000+</div>
            <div className="text-sm md:text-base text-muted-foreground">Destinos</div>
          </div>
        </div>

        {/* ROI Comparison Cards - Placeholder for Phase 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1 - 100% Occupancy */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="text-sm font-semibold text-green-700 mb-2">Ocupação 100%</div>
              <div className="text-6xl md:text-7xl font-bold text-green-600 mb-2">29,4%</div>
              <div className="text-lg text-green-700 mb-4">Retorno Anual</div>
              <div className="text-sm text-green-600 bg-white/80 rounded-full px-4 py-2 inline-block">
                USD 4.940/ano líquido
              </div>
              <div className="mt-4 pt-4 border-t border-green-200">
                <div className="text-xs text-green-700 bg-green-100 rounded-full px-3 py-1 inline-block">
                  Payback: 3,4 anos
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - 70% Occupancy */}
          <div className="bg-gradient-to-br from-blue-50 to-sky-50 border-2 border-blue-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="text-sm font-semibold text-blue-700 mb-2">Cenário Conservador (70%)</div>
              <div className="text-6xl md:text-7xl font-bold text-blue-600 mb-2">19,4%</div>
              <div className="text-lg text-blue-700 mb-4">Retorno Anual</div>
              <div className="text-sm text-blue-600 bg-white/80 rounded-full px-4 py-2 inline-block">
                USD 3.260/ano líquido
              </div>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <div className="text-xs text-blue-700 bg-blue-100 rounded-full px-3 py-1 inline-block">
                  Payback: 5,2 anos
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Placeholder for Phase 4 */}
        <footer className="text-center" aria-label="Ações de contato">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-bungalow-coral hover:bg-bungalow-coral/90 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
              Agendar Visita Virtual
            </button>
            <button className="border-2 border-bungalow-primary text-bungalow-primary hover:bg-bungalow-primary hover:text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 w-full sm:w-auto">
              Ver Detalhes Completos
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-bungalow-primary rounded-full" />
              <span>Gestão Profissional</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-bungalow-secondary rounded-full" />
              <span>Contrato Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-bungalow-coral rounded-full" />
              <span>Suporte 24/7</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Wave Separator - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 -mb-1">
        <svg className="w-full h-20 md:h-24 text-background" viewBox="0 0 1440 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};

export default BungalowsHeroSection;
