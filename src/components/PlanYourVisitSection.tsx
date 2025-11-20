import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { 
  ChevronDown, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone as PhoneIcon, 
  ChevronDown as ChevronDownIcon,
  MapPin,
  Users,
  Gift,
  ExternalLink,
  MessageCircle,
  Check
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { planVisitSchema, type PlanVisitFormData } from "@/lib/validation/plan-visit-schema";
import { usePhoneMask } from "@/hooks/usePhoneMask";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const PlanYourVisitSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 30,
    },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [phoneValue, setPhoneValue] = useState("+595");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<PlanVisitFormData>({
    resolver: zodResolver(planVisitSchema),
    defaultValues: {
      numberOfPeople: "3-4",
      message: "",
    },
  });

  const { formatPhoneNumber, handlePhonePaste, handlePhoneBackspace } = usePhoneMask();
  const selectedDate = watch("visitDate");
  const selectedTime = watch("visitTime");
  const numberOfPeople = watch("numberOfPeople");

  // Hero carousel images
  const heroImages = [
    {
      src: "/src/assets/waterpark-hero-bg.jpg",
      alt: "Vista aérea do parque aquático YCC",
    },
    {
      src: "/src/assets/attractions/bungalows.jpg",
      alt: "Bungalows modernos e luxuosos",
    },
    {
      src: "/src/assets/hero-waterpark.jpg",
      alt: "Família aproveitando os tobogãs aquáticos",
    },
    {
      src: "/src/assets/attractions/wave-pool.jpg",
      alt: "Experiência completa no parque",
    },
  ];

  const scrollToForm = useCallback(() => {
    const formSection = document.getElementById("plan-visit-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      // Carousel selection logic can be added here if needed
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const onSubmit = async (data: PlanVisitFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", data);
      
      toast({
        title: "✅ Visita Agendada com Sucesso!",
        description: `Sua visita foi confirmada para ${format(data.visitDate, "dd/MM/yyyy", { locale: ptBR })} no período da ${data.visitTime === "morning" ? "manhã" : "tarde"}. Em breve entraremos em contato via WhatsApp.`,
      });
      
      // Reset form could be added here if needed
    } catch (error) {
      toast({
        title: "❌ Erro ao Agendar",
        description: "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full">
      {/* PART 1: HERO VISUAL SECTION */}
      <div className="relative w-full h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        {/* Carousel Container */}
        <div className="absolute inset-0" ref={emblaRef}>
          <div className="flex h-full">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className="relative flex-[0_0_100%] min-w-0 h-full"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover animate-ken-burns"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-10" />

        {/* Floating Badge (top-right) */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 animate-fade-in">
          <div
            className="
              relative
              backdrop-blur-md 
              bg-white/20 
              border border-white/30
              text-white
              px-6 py-2
              rounded-full
              text-sm font-semibold
              shadow-lg
              animate-pulse
              cursor-default
            "
          >
            🎟️ Tour VIP Guiado
          </div>
        </div>

        {/* Center Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1
              className="
                text-5xl md:text-6xl lg:text-7xl
                font-bold 
                text-white
                mb-4
                animate-fade-in
                [text-shadow:_0_2px_10px_rgba(0,0,0,0.3)]
              "
              style={{ animationDelay: "500ms", animationFillMode: "backwards" }}
            >
              Planeje Sua Visita VIP
            </h1>

            {/* Subheading */}
            <p
              className="
                text-xl md:text-2xl lg:text-3xl
                font-normal
                text-white/90
                animate-fade-in
                [text-shadow:_0_1px_8px_rgba(0,0,0,0.3)]
              "
              style={{ animationDelay: "700ms", animationFillMode: "backwards" }}
            >
              Tour guiado + Parque + Bungalows + Oportunidade de investimento
            </p>
          </div>
        </div>

        {/* Scroll Indicator (bottom center) */}
        <button
          onClick={scrollToForm}
          className="
            absolute 
            bottom-6 
            left-1/2 
            -translate-x-1/2 
            z-10
            flex flex-col items-center
            text-white/70
            hover:text-white
            transition-colors
            cursor-pointer
            group
          "
          aria-label="Rolar para o formulário de agendamento"
        >
          <span className="text-sm mb-2">Role para agendar</span>
          <ChevronDown 
            className="w-6 h-6 animate-bounce-slow group-hover:text-white" 
            strokeWidth={2}
          />
        </button>
      </div>

      {/* PART 2: BOOKING FORM + INFO SIDEBAR */}
      <div 
        id="plan-visit-form"
        className="
          w-full 
          bg-gradient-to-b from-white to-blue-50
          py-12 px-6
        "
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT: Smart Booking Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              {/* Form Header */}
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Reserve Seu Tour Gratuito
              </h2>
              <p className="text-lg text-gray-500 mb-6">
                Preencha em 30 segundos ⚡
              </p>

              {/* Quick Benefit Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
                  ✓ 100% Gratuito
                </span>
                <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
                  ✓ Sem Compromisso
                </span>
                <span className="bg-green-50 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
                  ✓ 2h de Experiência
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Date + Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date Picker */}
                  <div className="space-y-2">
                    <Label htmlFor="visitDate">Data da Visita</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal h-12 border-2 focus:border-coral",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? (
                            format(selectedDate, "dd/MM/yyyy", { locale: ptBR })
                          ) : (
                            <span>Selecione a data</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => setValue("visitDate", date as Date)}
                          disabled={(date) => {
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            const maxDate = new Date();
                            maxDate.setDate(maxDate.getDate() + 90);
                            return date < today || date > maxDate;
                          }}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.visitDate && (
                      <p className="text-sm text-red-600">{errors.visitDate.message}</p>
                    )}
                  </div>

                  {/* Time Select */}
                  <div className="space-y-2">
                    <Label htmlFor="visitTime">Horário</Label>
                    <Select
                      value={selectedTime}
                      onValueChange={(value) => setValue("visitTime", value as "morning" | "afternoon")}
                    >
                      <SelectTrigger className="h-12 border-2 focus:border-coral">
                        <Clock className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Selecione o horário" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Manhã (9-12h)</SelectItem>
                        <SelectItem value="afternoon">Tarde (14-17h)</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.visitTime && (
                      <p className="text-sm text-red-600">{errors.visitTime.message}</p>
                    )}
                  </div>
                </div>

                {/* Name Input */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nome Completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      id="fullName"
                      {...register("fullName")}
                      placeholder="Seu nome"
                      className="h-12 pl-10 border-2 focus:border-coral"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-sm text-red-600">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <Label htmlFor="phone">WhatsApp</Label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      id="phone"
                      type="tel"
                      value={phoneValue}
                      onChange={(e) => {
                        const formatted = formatPhoneNumber(e.target.value);
                        setPhoneValue(formatted);
                        setValue("phone", formatted);
                      }}
                      onPaste={(e) => handlePhonePaste(e, (value) => {
                        setPhoneValue(value);
                        setValue("phone", value);
                      })}
                      onKeyDown={(e) => handlePhoneBackspace(e, phoneValue, (value) => {
                        setPhoneValue(value);
                        setValue("phone", value);
                      })}
                      placeholder="+595 XXX XXX XXX"
                      className="h-12 pl-10 border-2 focus:border-coral"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Number of People */}
                <div className="space-y-2">
                  <Label>Pessoas</Label>
                  <div className="flex gap-2">
                    {(["1-2", "3-4", "5+"] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setValue("numberOfPeople", option)}
                        className={cn(
                          "flex-1 py-3 px-4 rounded-full border-2 font-medium transition-all",
                          numberOfPeople === option
                            ? "bg-coral text-white border-coral"
                            : "bg-white text-gray-700 border-gray-300 hover:border-coral"
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {errors.numberOfPeople && (
                    <p className="text-sm text-red-600">{errors.numberOfPeople.message}</p>
                  )}
                </div>

                {/* Optional Message (Expandable) */}
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setShowMessage(!showMessage)}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-coral transition-colors"
                  >
                    💬 Adicionar mensagem (opcional)
                    <ChevronDownIcon
                      className={cn(
                        "h-4 w-4 transition-transform",
                        showMessage && "rotate-180"
                      )}
                    />
                  </button>
                  {showMessage && (
                    <Textarea
                      {...register("message")}
                      placeholder="Alguma necessidade especial?"
                      maxLength={200}
                      className="border-2 focus:border-coral resize-none"
                      rows={3}
                    />
                  )}
                  {errors.message && (
                    <p className="text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-coral to-[#E63946] hover:from-coral/90 hover:to-[#E63946]/90 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Agendando...
                    </>
                  ) : (
                    <>🎯 Confirmar Visita Gratuita</>
                  )}
                </Button>

                {/* Helper Text */}
                <p className="text-xs text-gray-500 text-center mt-3">
                  ⚡ Confirmação em até 2 horas | 🔒 Dados protegidos
                </p>
              </form>
            </div>

            {/* RIGHT: Info Sidebar */}
            <div className="flex flex-col gap-6">
              {/* CARD 1: Interactive Map */}
              <div className="relative h-64 rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57844.84976851745!2d-57.5634!3d-25.2834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da5b16e52b7a1%3A0x8e4b51e9e0c8f0c8!2sYpan%C3%A9%2C%20Paraguay!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização YCC Water Park - Ypané, Paraguay"
                  className="w-full h-full"
                />
                
                {/* Button Overlay */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ypané,Paraguay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    absolute bottom-4 left-1/2 -translate-x-1/2
                    flex items-center gap-2
                    bg-white hover:bg-gray-50
                    shadow-lg hover:shadow-xl
                    rounded-full
                    px-4 py-2
                    text-sm font-semibold text-gray-900
                    transition-all duration-200
                    hover:scale-105
                  "
                >
                  <MapPin className="w-4 h-4 text-coral" />
                  Abrir no Google Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* CARD 2: Essential Info Grid */}
              <div className="bg-gradient-to-br from-blue-50 to-turquoise-50 rounded-2xl p-6 shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Info Item 1: Horários */}
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-coral" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Horários</p>
                      <p className="text-base font-bold text-gray-900">Sáb-Dom 8h-18h</p>
                    </div>
                  </div>

                  {/* Info Item 2: Localização */}
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-turquoise/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-turquoise" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Localização</p>
                      <p className="text-base font-bold text-gray-900">Ypané, 30min de Asunción</p>
                    </div>
                  </div>

                  {/* Info Item 3: Experiência */}
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-coral" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Experiência</p>
                      <p className="text-base font-bold text-gray-900">Tour guiado 2 horas</p>
                    </div>
                  </div>

                  {/* Info Item 4: Incluído */}
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Gift className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Incluído</p>
                      <p className="text-base font-bold text-gray-900">Entrada + Guia + Cortesia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 3: Quick Contact */}
              <div className="bg-white rounded-xl p-4 shadow-md flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Dúvidas? Fale no WhatsApp</p>
                </div>
                <a
                  href="https://wa.me/595981234567?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Tour%20VIP%20no%20YCC%20Water%20Park"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center
                    w-12 h-12
                    bg-green-500 hover:bg-green-600
                    text-white
                    rounded-full
                    transition-all
                    hover:scale-110
                    shadow-md hover:shadow-lg
                  "
                  aria-label="Contatar via WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>

              {/* What to Expect Section */}
              <div className="bg-white rounded-xl p-5 shadow-md">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  O Que Você Vai Ver:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                    <Check className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                    <span>🏞️ Todas as atrações do parque</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                    <Check className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                    <span>🏡 Bungalows mobiliados de 66m²</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                    <Check className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                    <span>💼 Oportunidade de investimento fracionado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 3: TRUST BAR */}
      <div className="w-full h-16 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
          <p className="text-gray-400 text-sm">
            Trust Bar será implementada na Fase 4
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanYourVisitSection;
