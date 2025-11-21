"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

interface Plan {
  name: string;
  description: string;
  precioOriginal: number;
  precioDescuento: number;
  mensualidad: number;
  badge: string;
  badgeColor: "blue" | "purple";
  popular?: boolean;
  cobertura: string;
  opcional?: string;
  beneficios: string[];
}

const planes: Plan[] = [
  {
    name: "Membresía Familiar",
    description: "Ideal para familias que buscan acceso ilimitado con pagos flexibles",
    precioOriginal: 3000,
    precioDescuento: 1500,
    mensualidad: 40,
    badge: "Más Popular",
    badgeColor: "blue",
    cobertura: "Titular + padres + cónyuge + hijos <18 años",
    opcional: "Suegros +USD 250 c/u + USD 20/mes",
    beneficios: [
      "Acceso ilimitado a todas las instalaciones",
      "30% descuento en hospedaje",
      "10% descuento en restaurante",
      "20% descuento en estacionamiento",
      "Transferible y heredable",
      "Vitalicia (renovación anual)"
    ]
  },
  {
    name: "Membresía VIP",
    description: "Mejor valor a largo plazo - Sin cuota mensual NUNCA",
    precioOriginal: 9000,
    precioDescuento: 4500,
    mensualidad: 0,
    badge: "0% Mantenimiento",
    badgeColor: "purple",
    popular: true,
    cobertura: "Titular + padres + cónyuge + hijos <18 años",
    beneficios: [
      "Todo lo de Familiar +",
      "Sin cuota mensual NUNCA",
      "Prioridad en reservas VIP",
      "Punto de equilibrio: año 8",
      "Ahorro de USD 480/año desde año 9"
    ]
  }
];

interface MembresiaPricingSectionProps {
  onContratarFamiliar: () => void;
  onContratarVIP: () => void;
}

export default function MembresiaPricingSection({ 
  onContratarFamiliar, 
  onContratarVIP 
}: MembresiaPricingSectionProps) {
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <div
      id="comparison-section"
      className="min-h-screen mx-auto relative bg-gradient-to-br from-gray-900 via-blue-900/40 to-gray-900 overflow-x-hidden py-16 sm:py-20 md:py-24"
      ref={pricingRef}
    >
      {/* Grid pattern background */}
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        <SparklesComp
          density={1200}
          direction="bottom"
          speed={1}
          color="#0ea5e9"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>

      {/* Gradient blur effect */}
      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-[-114px] w-full h-[113.625vh] flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0"
      >
        <div className="framer-1i5axl2">
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] flex-none rounded-full"
            style={{
              border: "200px solid hsl(var(--primary))",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
            data-border="true"
          ></div>
        </div>
      </TimelineContent>

      <article className="text-center mb-12 pt-16 max-w-3xl mx-auto space-y-4 relative z-50 px-4">
        <h2 className="text-4xl sm:text-5xl font-black text-white">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Elige tu membresía ideal
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-gray-300 text-lg"
        >
          Acceso ilimitado para toda tu familia con beneficios exclusivos
        </TimelineContent>
      </article>

      {/* Radial gradient overlay */}
      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, hsl(var(--primary) / 0.3) 0%, transparent 70%)`,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />

      <div className="grid md:grid-cols-2 max-w-6xl gap-8 py-6 mx-auto px-4 relative z-10">
        {planes.map((plan, index) => {
          const handleClick = index === 0 ? onContratarFamiliar : onContratarVIP;
          
          return (
            <TimelineContent
              key={plan.name}
              as="div"
              animationNum={2 + index}
              timelineRef={pricingRef}
              customVariants={revealVariants}
            >
              <Card
                className={cn(
                  "relative text-white border-2 flex flex-col h-full",
                  plan.popular
                    ? "bg-gradient-to-r from-purple-900/90 via-purple-800/90 to-purple-900/90 shadow-[0px_-13px_200px_0px_hsl(var(--secondary)/0.5)] border-purple-600 md:scale-105"
                    : "bg-gradient-to-r from-blue-900/90 via-blue-800/90 to-blue-900/90 border-blue-600"
                )}
              >
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className={cn(
                    "px-6 py-2 rounded-full shadow-lg",
                    plan.badgeColor === "blue" ? "bg-blue-600" : "bg-purple-600"
                  )}>
                    <span className="text-sm font-bold text-white">{plan.badge}</span>
                  </div>
                </div>

                <CardHeader className="text-left pt-8">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-2xl sm:text-3xl font-black">{plan.name}</h3>
                  </div>

                  {/* Precio */}
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-xl text-gray-400 line-through">
                        USD {plan.precioOriginal.toLocaleString()}
                      </span>
                      <span className={cn(
                        "text-4xl sm:text-5xl font-black",
                        plan.badgeColor === "blue" ? "text-blue-400" : "text-purple-400"
                      )}>
                        USD{" "}
                        <NumberFlow value={plan.precioDescuento} />
                      </span>
                    </div>
                    
                    {/* Mensualidad */}
                    <div className={cn(
                      "inline-flex items-center self-start px-4 py-2 rounded-full",
                      plan.badgeColor === "blue" ? "bg-blue-900/50" : "bg-purple-900/50"
                    )}>
                      <span className="font-bold text-sm">
                        {plan.mensualidad === 0 
                          ? "USD 0/mes PARA SIEMPRE" 
                          : `USD ${plan.mensualidad}/mes`}
                      </span>
                    </div>
                    
                    {plan.mensualidad > 0 && (
                      <p className="text-xs text-gray-400">(comienza tras pagar 50%)</p>
                    )}
                  </div>

                  <p className="text-sm text-gray-300 mb-4">{plan.description}</p>

                  {/* Cobertura */}
                  <div className={cn(
                    "p-4 rounded-xl mb-4",
                    plan.badgeColor === "blue" ? "bg-blue-900/30" : "bg-purple-900/30"
                  )}>
                    <p className="text-sm font-semibold">
                      {plan.cobertura}
                    </p>
                    {plan.opcional && (
                      <p className="text-xs text-gray-400 mt-1">
                        Opcional: {plan.opcional}
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-0 flex-1 flex flex-col">
                  <button
                    onClick={handleClick}
                    className={cn(
                      "w-full mb-6 p-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105",
                      plan.badgeColor === "blue"
                        ? "bg-gradient-to-t from-blue-500 to-blue-600 shadow-lg shadow-blue-800/50 border border-blue-500 text-white hover:shadow-blue-700/70"
                        : "bg-gradient-to-t from-purple-500 to-purple-600 shadow-lg shadow-purple-800/50 border border-purple-500 text-white hover:shadow-purple-700/70"
                    )}
                  >
                    Contratar {index === 0 ? "Familiar" : "VIP"}
                  </button>

                  <div className="space-y-3 pt-4 border-t border-gray-700 flex-1">
                    <h4 className="font-bold text-base mb-3">
                      Beneficios incluidos:
                    </h4>
                    <ul className="space-y-2">
                      {plan.beneficios.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <Check className={cn(
                            "w-5 h-5 flex-shrink-0 mt-0.5",
                            plan.badgeColor === "blue" ? "text-blue-400" : "text-purple-400"
                          )} />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TimelineContent>
          );
        })}
      </div>
    </div>
  );
}
