import Navigation from "@/components/navigation/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { AttractionCard } from "@/components/AttractionCard";
import { AttractionBreadcrumb } from "@/components/AttractionBreadcrumb";
import BungalowsHeroSection from "@/components/BungalowsHeroSection";
import { bungalowsAmenities } from "@/data/attractions-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle2, 
  TrendingUp, 
  Calendar, 
  Globe, 
  Users,
  Home,
  DollarSign,
  Award,
  Shield,
  Sparkles,
  Key,
  FileText
} from "lucide-react";

const AtraccionesBungalows = () => {
  return (
    <>
      <SEOHead 
        title="Bungalows VIP Exclusivos - YCC Water Park | Compra de Fração 28 Dias"
        description="Adquira sua fração de bungalow premium no YCC Water Park. 50 anos de direito, 28 dias/ano de uso, ROI até 29,4%. Intercâmbio global em 4.000+ destinos."
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <AttractionBreadcrumb categoryName="Bungalows VIP" />
        
        {/* Reusing the complete BungalowsHeroSection */}
        <BungalowsHeroSection />

        {/* What is Fractional Ownership Section */}
        <section className="py-20 bg-gradient-to-br from-bungalow-primary/5 via-background to-bungalow-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  O que é a Compra de Fração?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Sistema inteligente de propriedade compartilhada
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Explanation */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-bungalow-primary mb-4">
                      Sistema de Fração Inteligente
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      A compra de fração permite que você adquira o direito de uso de um bungalow premium 
                      por <strong className="text-foreground">50 anos</strong>, utilizando-o por 
                      <strong className="text-foreground"> 28 dias por ano</strong>.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      É a forma mais inteligente de ter sua propriedade de férias sem os custos 
                      e responsabilidades de uma propriedade integral. Você paga apenas uma fração 
                      do valor total e desfruta de todos os benefícios!
                    </p>
                  </div>
                </div>

                {/* Right Column - Visual Card */}
                <Card className="border-2 border-bungalow-primary/20 shadow-xl">
                  <CardHeader className="bg-gradient-to-br from-bungalow-primary/10 to-bungalow-secondary/10">
                    <CardTitle className="text-center text-2xl">Como Funciona?</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="text-center p-6 rounded-2xl bg-bungalow-primary/5 border border-bungalow-primary/20">
                        <Calendar className="w-12 h-12 text-bungalow-primary mx-auto mb-3" />
                        <div className="text-4xl font-bold text-bungalow-primary mb-2">28 dias/ano</div>
                        <p className="text-sm text-muted-foreground">Uso garantido</p>
                      </div>
                      
                      <div className="flex items-center justify-center gap-4 text-2xl font-bold text-muted-foreground">
                        <span>×</span>
                      </div>
                      
                      <div className="text-center p-6 rounded-2xl bg-bungalow-secondary/5 border border-bungalow-secondary/20">
                        <Key className="w-12 h-12 text-bungalow-secondary mx-auto mb-3" />
                        <div className="text-4xl font-bold text-bungalow-secondary mb-2">50 anos</div>
                        <p className="text-sm text-muted-foreground">Direito total</p>
                      </div>

                      <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                        <p className="text-center text-sm font-medium">
                          <strong className="text-green-600">1 ano = 365 dias ÷ 13 frações = 28 dias</strong>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                <div className="p-6 rounded-2xl bg-background border-2 border-green-500/20 hover:border-green-500/40 transition-colors">
                  <DollarSign className="w-12 h-12 text-green-500 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Custo Reduzido</h4>
                  <p className="text-sm text-muted-foreground">
                    Fração do preço de uma propriedade completa
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-background border-2 border-blue-500/20 hover:border-blue-500/40 transition-colors">
                  <Calendar className="w-12 h-12 text-blue-500 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Sistema Rotativo</h4>
                  <p className="text-sm text-muted-foreground">
                    Períodos variados cada ano para máxima flexibilidade
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-background border-2 border-purple-500/20 hover:border-purple-500/40 transition-colors">
                  <TrendingUp className="w-12 h-12 text-purple-500 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Rentabilidade</h4>
                  <p className="text-sm text-muted-foreground">
                    80% da renda de aluguel é sua quando não usar
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-background border-2 border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                  <Globe className="w-12 h-12 text-cyan-500 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Intercâmbio Global</h4>
                  <p className="text-sm text-muted-foreground">
                    4.000+ destinos em 110 países disponíveis
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-background border-2 border-orange-500/20 hover:border-orange-500/40 transition-colors">
                  <Users className="w-12 h-12 text-orange-500 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Transferível</h4>
                  <p className="text-sm text-muted-foreground">
                    Pode ser herdado ou vendido legalmente
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-background border-2 border-pink-500/20 hover:border-pink-500/40 transition-colors">
                  <Shield className="w-12 h-12 text-pink-500 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Zero Manutenção</h4>
                  <p className="text-sm text-muted-foreground">
                    Gestão profissional incluída no pacote
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Timeline */}
        <section className="py-20 bg-gradient-to-b from-background to-bungalow-warm-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Como Funciona?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Seu caminho para a propriedade de férias perfeita
                </p>
              </div>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    1
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Escolha seu Bungalow</h3>
                    <p className="text-lg text-muted-foreground">
                      64 unidades exclusivas de 81m², todas com acabamentos premium, hidromassagem privada 
                      e vista privilegiada. Cada uma totalmente equipada e pronta para uso.
                    </p>
                  </div>
                </div>

                {/* Connector */}
                <div className="ml-8 h-12 w-0.5 bg-gradient-to-b from-cyan-500 to-green-500"></div>

                {/* Step 2 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    2
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Adquira sua Fração</h3>
                    <p className="text-lg text-muted-foreground">
                      Contrato legal de 50 anos garantindo 28 dias de uso anual. Escritura registrada 
                      em cartório com toda segurança jurídica. Investimento acessível comparado à propriedade integral.
                    </p>
                  </div>
                </div>

                {/* Connector */}
                <div className="ml-8 h-12 w-0.5 bg-gradient-to-b from-emerald-500 to-purple-500"></div>

                {/* Step 3 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    3
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Reserve seus Períodos</h3>
                    <p className="text-lg text-muted-foreground">
                      Sistema rotativo inteligente online garante que você tenha acesso a diferentes períodos 
                      do ano. Reserve com antecedência e planeje suas férias com total flexibilidade.
                    </p>
                  </div>
                </div>

                {/* Connector */}
                <div className="ml-8 h-12 w-0.5 bg-gradient-to-b from-pink-500 to-orange-500"></div>

                {/* Step 4 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    4
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Use, Alugue ou Troque</h3>
                    <p className="text-lg text-muted-foreground">
                      Máxima flexibilidade: use nos seus 28 dias, alugue para terceiros (80% da renda é sua), 
                      ou troque por destinos globais em 4.000+ propriedades pelo mundo através do programa de intercâmbio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 14 Exclusive Amenities */}
        <section className="py-20 bg-gradient-to-br from-bungalow-secondary/5 via-background to-bungalow-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bungalow-primary/10 border border-bungalow-primary/20 mb-6">
                <Sparkles className="w-5 h-5 text-bungalow-primary" />
                <span className="text-sm font-medium text-bungalow-primary">14 Amenidades VIP</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Amenidades Exclusivas VIP
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Acesso ilimitado a instalações premium durante sua estadia
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {bungalowsAmenities.map((amenity) => (
                <AttractionCard key={amenity.id} {...amenity} />
              ))}
            </div>
          </div>
        </section>

        {/* Financial Advantages */}
        <section className="py-20 bg-gradient-to-b from-bungalow-warm-white to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Vantagens Financeiras
                </h2>
                <p className="text-xl text-muted-foreground">
                  Compare e veja por que a fração é a escolha inteligente
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Traditional Ownership */}
                <Card className="border-2 border-red-500/30 relative overflow-hidden">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                    TRADICIONAL
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Propriedade Tradicional</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-red-500">USD 80.000</span>
                      <span className="text-muted-foreground">Investimento total</span>
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t">
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-muted-foreground">Manutenção anual elevada (USD 2.000+/ano)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-muted-foreground">Impostos e taxas integrais</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-muted-foreground">Uso limitado (geralmente 2-3 semanas/ano)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-muted-foreground">Sem retorno financeiro quando não usa</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-muted-foreground">Responsabilidade total de gestão</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Fractional Ownership */}
                <Card className="border-2 border-green-500/50 relative overflow-hidden shadow-xl">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    RECOMENDADO
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Fração de Bungalow VIP</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-green-500">USD 16.800</span>
                      <span className="text-muted-foreground">Investimento acessível</span>
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">Zero manutenção (incluída no pacote)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">28 dias garantidos + intercâmbio global</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">ROI de até 29,4% ao ano com aluguel</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">80% da renda de aluguel é sua</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">Gestão profissional completa incluída</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl">
                      <p className="text-center font-bold text-green-600">
                        Economize USD 63.200 no investimento inicial!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Floor Plans and Specifications */}
        <section className="py-20 bg-gradient-to-br from-background via-bungalow-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Plantas e Especificações
                </h2>
                <p className="text-xl text-muted-foreground">
                  Conheça cada detalhe do seu futuro bungalow
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Ground Floor */}
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-br from-bungalow-primary/10 to-bungalow-secondary/10">
                    <CardTitle className="text-xl">Planta Térrea</CardTitle>
                    <p className="text-sm text-muted-foreground">58,70m² + deck 13,61m²</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <Home className="w-16 h-16 text-muted-foreground/30" />
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Living/Jantar integrado</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Cozinha completa equipada</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Banheiro social</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Deck com hidromassagem privada</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Upper Floor */}
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-br from-bungalow-secondary/10 to-bungalow-primary/10">
                    <CardTitle className="text-xl">Planta Superior</CardTitle>
                    <p className="text-sm text-muted-foreground">22,32m² + sacada 3,94m²</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <Home className="w-16 h-16 text-muted-foreground/30" />
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Suite master com closet</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Dormitório adicional</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Banheiro privativo</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Sacada privativa com vista</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Technical Specifications */}
              <Card className="border-2 border-bungalow-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Especificações Técnicas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-bungalow-primary/10 flex items-center justify-center flex-shrink-0">
                        📐
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Área Total</p>
                        <p className="text-sm text-muted-foreground">81m² construídos</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-bungalow-primary/10 flex items-center justify-center flex-shrink-0">
                        🛏️
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Capacidade</p>
                        <p className="text-sm text-muted-foreground">6 pessoas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-bungalow-primary/10 flex items-center justify-center flex-shrink-0">
                        ❄️
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Climatização</p>
                        <p className="text-sm text-muted-foreground">Ar em todos ambientes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-bungalow-primary/10 flex items-center justify-center flex-shrink-0">
                        🌊
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Hidromassagem</p>
                        <p className="text-sm text-muted-foreground">Na terraza privada</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-bungalow-primary/10 flex items-center justify-center flex-shrink-0">
                        📶
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Conectividade</p>
                        <p className="text-sm text-muted-foreground">WiFi alta velocidade</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-bungalow-primary/10 flex items-center justify-center flex-shrink-0">
                        📺
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Entretenimento</p>
                        <p className="text-sm text-muted-foreground">Smart TV</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-bungalow-primary/10 flex items-center justify-center flex-shrink-0">
                        🍳
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Cozinha</p>
                        <p className="text-sm text-muted-foreground">Totalmente equipada</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-bungalow-primary/10 flex items-center justify-center flex-shrink-0">
                        🏠
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Mobília</p>
                        <p className="text-sm text-muted-foreground">Completa e moderna</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Global Exchange Program */}
        <section className="py-20 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <Globe className="w-20 h-20 text-bungalow-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Intercambie seu Bungalow em 110 Países
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Através do programa Férias Fácil, troque seus dias de uso por estadias em milhares 
                de propriedades ao redor do mundo. Uma semana aqui, outra em Paris, outra em Miami!
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="p-8 rounded-2xl bg-background border-2 border-cyan-500/20">
                  <div className="text-5xl font-bold text-cyan-500 mb-2">4.000+</div>
                  <p className="text-lg text-muted-foreground">Destinos disponíveis</p>
                </div>
                
                <div className="p-8 rounded-2xl bg-background border-2 border-blue-500/20">
                  <div className="text-5xl font-bold text-blue-500 mb-2">110</div>
                  <p className="text-lg text-muted-foreground">Países participantes</p>
                </div>
                
                <div className="p-8 rounded-2xl bg-background border-2 border-purple-500/20">
                  <div className="text-5xl font-bold text-purple-500 mb-2">∞</div>
                  <p className="text-lg text-muted-foreground">Possibilidades de viagem</p>
                </div>
              </div>

              <Button size="lg" className="text-lg px-8">
                Conheça os Destinos Disponíveis
              </Button>
            </div>
          </div>
        </section>

        {/* Guarantees Section */}
        <section className="py-20 bg-gradient-to-b from-background to-bungalow-warm-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Garantias e Segurança Jurídica
                </h2>
                <p className="text-xl text-muted-foreground">
                  Seu investimento protegido por lei
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center border-2 border-blue-500/20 hover:border-blue-500/40 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-blue-500" />
                    </div>
                    <CardTitle>Escritura Registrada</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Contrato legal de 50 anos protocolado em cartório de registro de imóveis
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-2 border-green-500/20 hover:border-green-500/40 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-green-500" />
                    </div>
                    <CardTitle>Segurança Jurídica</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Todos os direitos garantidos por lei, com assessoria jurídica completa
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-2 border-purple-500/20 hover:border-purple-500/40 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-purple-500" />
                    </div>
                    <CardTitle>Herança Familiar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Transferível para herdeiros ou terceiros, preservando o patrimônio familiar
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Final CTA */}
        <section className="py-24 bg-gradient-to-br from-bungalow-primary via-bungalow-secondary to-bungalow-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Reserve seu Bungalow VIP Hoje
              </h2>
              <p className="text-xl md:text-2xl mb-4 opacity-90">
                Vagas limitadas - Apenas 64 unidades exclusivas
              </p>
              <p className="text-lg mb-10 opacity-80">
                Garanta agora seu investimento com ROI comprovado e férias garantidas por 50 anos
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-6 bg-white text-bungalow-primary hover:bg-white/90 shadow-2xl"
                >
                  Agendar Visita Virtual
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-10 py-6 bg-transparent border-2 border-white text-white hover:bg-white/10"
                >
                  Baixar Prospecto PDF
                </Button>
              </div>

              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Alta demanda - Últimas unidades disponíveis</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AtraccionesBungalows;