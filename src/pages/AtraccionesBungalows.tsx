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
        title="Bungalows VIP Exclusivos - YCC Water Park | Compra de Fracción 28 Días"
        description="Adquiere tu fracción de bungalow premium en YCC Water Park. 50 años de derecho, 28 días/año de uso, ROI hasta 29,4%. Intercambio global en 4.000+ destinos."
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
                  ¿Qué es la Compra de Fracción?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Sistema inteligente de propiedad compartida
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Explanation */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-bungalow-primary mb-4">
                      Sistema de Fracción Inteligente
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      La compra de fracción te permite adquirir el derecho de uso de un bungalow premium 
                      por <strong className="text-foreground">50 años</strong>, utilizándolo por 
                      <strong className="text-foreground"> 28 días por año</strong>.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Es la forma más inteligente de tener tu propiedad de vacaciones sin los costos 
                      y responsabilidades de una propiedad completa. ¡Pagas solo una fracción 
                      del valor total y disfrutas de todos los beneficios!
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
                        <p className="text-sm text-muted-foreground">Uso garantizado</p>
                      </div>
                      
                      <div className="flex items-center justify-center gap-4 text-2xl font-bold text-muted-foreground">
                        <span>×</span>
                      </div>
                      
                      <div className="text-center p-6 rounded-2xl bg-bungalow-secondary/5 border border-bungalow-secondary/20">
                        <Key className="w-12 h-12 text-bungalow-secondary mx-auto mb-3" />
                        <div className="text-4xl font-bold text-bungalow-secondary mb-2">50 anos</div>
                        <p className="text-sm text-muted-foreground">Derecho total</p>
                      </div>

                      <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                        <p className="text-center text-sm font-medium">
                          <strong className="text-green-600">1 año = 365 días ÷ 13 fracciones = 28 días</strong>
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
                  <h4 className="font-bold text-lg mb-2">Costo Reducido</h4>
                  <p className="text-sm text-muted-foreground">
                    Fracción del precio de una propiedad completa
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-background border-2 border-blue-500/20 hover:border-blue-500/40 transition-colors">
                  <Calendar className="w-12 h-12 text-blue-500 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Sistema Rotativo</h4>
                  <p className="text-sm text-muted-foreground">
                    Períodos variados cada año para máxima flexibilidad
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-background border-2 border-purple-500/20 hover:border-purple-500/40 transition-colors">
                  <TrendingUp className="w-12 h-12 text-purple-500 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Rentabilidad</h4>
                  <p className="text-sm text-muted-foreground">
                    80% de los ingresos de alquiler son tuyos cuando no lo uses
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-background border-2 border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                  <Globe className="w-12 h-12 text-cyan-500 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Intercambio Global</h4>
                  <p className="text-sm text-muted-foreground">
                    4.000+ destinos en 110 países disponibles
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-background border-2 border-orange-500/20 hover:border-orange-500/40 transition-colors">
                  <Users className="w-12 h-12 text-orange-500 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Transferible</h4>
                  <p className="text-sm text-muted-foreground">
                    Puede ser heredado o vendido legalmente
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-background border-2 border-pink-500/20 hover:border-pink-500/40 transition-colors">
                  <Shield className="w-12 h-12 text-pink-500 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Cero Mantenimiento</h4>
                  <p className="text-sm text-muted-foreground">
                    Gestión profesional incluida en el paquete
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
                  ¿Cómo Funciona?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Tu camino hacia la propiedad de vacaciones perfecta
                </p>
              </div>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    1
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Elige tu Bungalow</h3>
                    <p className="text-lg text-muted-foreground">
                      64 unidades exclusivas de 81m², todas con acabados premium, hidromasaje privado 
                      y vista privilegiada. Cada una totalmente equipada y lista para usar.
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
                    <h3 className="text-2xl font-bold text-foreground mb-2">Adquiere tu Fracción</h3>
                    <p className="text-lg text-muted-foreground">
                      Contrato legal de 50 años garantizando 28 días de uso anual. Escritura registrada 
                      en escribanía con toda seguridad jurídica. Inversión accesible comparada a la propiedad completa.
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
                    <h3 className="text-2xl font-bold text-foreground mb-2">Reserva tus Períodos</h3>
                    <p className="text-lg text-muted-foreground">
                      Sistema rotativo inteligente online garantiza que tengas acceso a diferentes períodos 
                      del año. Reserva con anticipación y planea tus vacaciones con total flexibilidad.
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
                    <h3 className="text-2xl font-bold text-foreground mb-2">Usa, Alquila o Intercambia</h3>
                    <p className="text-lg text-muted-foreground">
                      Máxima flexibilidad: usa tus 28 días, alquila a terceros (80% de los ingresos son tuyos), 
                      o intercambia por destinos globales en 4.000+ propiedades por el mundo a través del programa de intercambio.
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
                Acceso ilimitado a instalaciones premium durante tu estadía
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
                  Ventajas Financieras
                </h2>
                <p className="text-xl text-muted-foreground">
                  Compara y descubre por qué la fracción es la elección inteligente
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Traditional Ownership */}
                <Card className="border-2 border-red-500/30 relative overflow-hidden">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                    TRADICIONAL
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Propiedad Tradicional</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-red-500">USD 80.000</span>
                      <span className="text-muted-foreground">Inversión total</span>
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t">
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-muted-foreground">Mantenimiento anual elevado (USD 2.000+/año)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-muted-foreground">Impuestos y tasas completas</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-muted-foreground">Uso limitado (generalmente 2-3 semanas/año)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-muted-foreground">Sin retorno financiero cuando no lo usas</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-muted-foreground">Responsabilidad total de gestión</span>
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
                    <CardTitle className="text-2xl">Fracción de Bungalow VIP</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-green-500">USD 16.800</span>
                      <span className="text-muted-foreground">Inversión accesible</span>
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">Cero mantenimiento (incluido en el paquete)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">28 días garantizados + intercambio global</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">ROI de hasta 29,4% al año con alquiler</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">80% de los ingresos de alquiler son tuyos</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">Gestión profesional completa incluida</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl">
                      <p className="text-center font-bold text-green-600">
                        ¡Ahorra USD 63.200 en la inversión inicial!
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
                  Plantas y Especificaciones
                </h2>
                <p className="text-xl text-muted-foreground">
                  Conoce cada detalle de tu futuro bungalow
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Ground Floor */}
                <Card className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-br from-bungalow-primary/10 to-bungalow-secondary/10">
                    <CardTitle className="text-xl">Planta Baja</CardTitle>
                    <p className="text-sm text-muted-foreground">58,70m² + deck 13,61m²</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <Home className="w-16 h-16 text-muted-foreground/30" />
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Living/Comedor integrado</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Cocina completa equipada</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Baño social</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Deck con hidromasaje privado</span>
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
                        <span className="text-sm">Suite master con vestidor</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Dormitorio adicional</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Baño privado</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Balcón privado con vista</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Technical Specifications */}
              <Card className="border-2 border-bungalow-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Especificaciones Técnicas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-bungalow-primary/10 flex items-center justify-center flex-shrink-0">
                        📐
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Área Total</p>
                        <p className="text-sm text-muted-foreground">81m² construidos</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-bungalow-primary/10 flex items-center justify-center flex-shrink-0">
                        🛏️
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Capacidad</p>
                        <p className="text-sm text-muted-foreground">6 personas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-bungalow-primary/10 flex items-center justify-center flex-shrink-0">
                        ❄️
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Climatización</p>
                        <p className="text-sm text-muted-foreground">Aire en todos los ambientes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-bungalow-primary/10 flex items-center justify-center flex-shrink-0">
                        🌊
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Hidromasaje</p>
                        <p className="text-sm text-muted-foreground">En la terraza privada</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-bungalow-primary/10 flex items-center justify-center flex-shrink-0">
                        📶
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Conectividad</p>
                        <p className="text-sm text-muted-foreground">WiFi alta velocidad</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-bungalow-primary/10 flex items-center justify-center flex-shrink-0">
                        📺
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Entretenimiento</p>
                        <p className="text-sm text-muted-foreground">Smart TV</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-bungalow-primary/10 flex items-center justify-center flex-shrink-0">
                        🍳
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Cocina</p>
                        <p className="text-sm text-muted-foreground">Totalmente equipada</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-bungalow-primary/10 flex items-center justify-center flex-shrink-0">
                        🏠
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Mobiliario</p>
                        <p className="text-sm text-muted-foreground">Completo y moderno</p>
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
                Intercambia tu Bungalow en 110 Países
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                A través del programa Férias Fácil, cambia tus días de uso por estadías en miles 
                de propiedades alrededor del mundo. ¡Una semana aquí, otra en París, otra en Miami!
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="p-8 rounded-2xl bg-background border-2 border-cyan-500/20">
                  <div className="text-5xl font-bold text-cyan-500 mb-2">4.000+</div>
                  <p className="text-lg text-muted-foreground">Destinos disponibles</p>
                </div>
                
                <div className="p-8 rounded-2xl bg-background border-2 border-blue-500/20">
                  <div className="text-5xl font-bold text-blue-500 mb-2">110</div>
                  <p className="text-lg text-muted-foreground">Países participantes</p>
                </div>
                
                <div className="p-8 rounded-2xl bg-background border-2 border-purple-500/20">
                  <div className="text-5xl font-bold text-purple-500 mb-2">∞</div>
                  <p className="text-lg text-muted-foreground">Posibilidades de viaje</p>
                </div>
              </div>

              <Button size="lg" className="text-lg px-8">
                Conoce los Destinos Disponibles
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
                  Garantías y Seguridad Jurídica
                </h2>
                <p className="text-xl text-muted-foreground">
                  Tu inversión protegida por ley
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
                      Contrato legal de 50 años protocolado en escribanía de registro de inmuebles
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-2 border-green-500/20 hover:border-green-500/40 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-green-500" />
                    </div>
                    <CardTitle>Seguridad Jurídica</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Todos los derechos garantizados por ley, con asesoría jurídica completa
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-2 border-purple-500/20 hover:border-purple-500/40 transition-colors">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-purple-500" />
                    </div>
                    <CardTitle>Herencia Familiar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Transferible a herederos o terceros, preservando el patrimonio familiar
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
                Reserva tu Bungalow VIP Hoy
              </h2>
              <p className="text-xl md:text-2xl mb-4 opacity-90">
                Vacantes limitadas - Solo 64 unidades exclusivas
              </p>
              <p className="text-lg mb-10 opacity-80">
                Asegura ahora tu inversión con ROI comprobado y vacaciones garantizadas por 50 años
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
                  Descargar Prospecto PDF
                </Button>
              </div>

              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Alta demanda - Últimas unidades disponibles</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AtraccionesBungalows;