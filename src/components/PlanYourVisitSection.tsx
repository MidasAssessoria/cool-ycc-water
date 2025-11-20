import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { 
  Calendar as CalendarIcon, 
  User, 
  Phone as PhoneIcon,
  MapPin,
  Users,
  Gift,
  ExternalLink,
  Check,
  Star,
  Home,
  Globe,
  Sunrise,
  Sunset
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

import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Image imports
import waterparkHeroBg from "@/assets/waterpark-hero-bg.jpg";
import bungalowsImg from "@/assets/attractions/bungalows.jpg";
import heroWaterpark from "@/assets/hero-waterpark.jpg";
import wavePoolImg from "@/assets/attractions/wave-pool.jpg";

const PlanYourVisitSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 25,
      align: 'center',
      containScroll: 'trimSnaps',
    },
    [Autoplay({ 
      delay: 7000,
      stopOnInteraction: false,
      stopOnMouseEnter: false
    })]
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneValue, setPhoneValue] = useState("+595");
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    },
  });

  const { formatPhoneNumber, handlePhonePaste, handlePhoneBackspace } = usePhoneMask();
  const selectedDate = watch("visitDate");
  const selectedTime = watch("visitTime");
  const numberOfPeople = watch("numberOfPeople");

  // Hero carousel images
  const heroImages = [
    {
      src: waterparkHeroBg,
      alt: "Vista aérea do parque aquático YCC",
    },
    {
      src: bungalowsImg,
      alt: "Bungalows modernos e luxuosos",
    },
    {
      src: heroWaterpark,
      alt: "Família aproveitando os tobogãs aquáticos",
    },
    {
      src: wavePoolImg,
      alt: "Experiência completa no parque",
    },
  ];


  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
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
        title: "❌ Error al Agendar",
        description: "Ocurrió un error al procesar tu solicitud. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full">
      {/* PART 1: HERO VISUAL SECTION - Mobile optimized */}
      <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[45vh] min-h-[280px] sm:min-h-[320px] md:min-h-[380px] max-h-[450px] overflow-hidden bg-gray-900">
        {/* Preload first image */}
        <link rel="preload" as="image" href={heroImages[0].src} />
        
        {/* Carousel Container */}
        <div className="absolute inset-0 overflow-hidden gpu-accelerated" ref={emblaRef}>
          <div className="flex h-full touch-pan-y">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className="relative flex-[0_0_100%] min-w-0 h-full"
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center will-change-transform"
                    loading={index === 0 ? "eager" : "lazy"}
                    draggable="false"
                    style={{ pointerEvents: 'none' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-10" />

        {/* Floating Badge (top-right) - Mobile optimized */}

        {/* Center Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            {/* Main Heading - Mobile optimized */}
            <motion.h1
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                font-bold 
                text-white
                mb-3 sm:mb-4
                [text-shadow:_0_2px_10px_rgba(0,0,0,0.3)]
                leading-tight
                px-4
              "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Planea tu Tour VIP Gratuito
            </motion.h1>

            {/* Subheading - Mobile optimized */}
            <motion.p
              className="
                text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
                font-normal
                text-white/90
                [text-shadow:_0_1px_8px_rgba(0,0,0,0.3)]
                px-4
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Ven a visitar el  YCC Water Park, el proyecto completo y tus opciones de inversión en una visita guiada
            </motion.p>
          </div>
        </div>

        {/* Carousel Dots - Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300 touch-manipulation",
                selectedIndex === index
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75 w-2"
              )}
              aria-label={`Ir a la diapositiva ${index + 1}`}
              aria-current={selectedIndex === index ? "true" : "false"}
            />
          ))}
        </div>

      </div>

      {/* PART 2: BOOKING FORM + INFO SIDEBAR - Mobile optimized spacing */}
      <div 
        id="plan-visit-form"
        className="
          w-full 
          bg-gray-50
          py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8
          scroll-mt-20 md:scroll-mt-24
        "
      >
        <div className="max-w-7xl mx-auto">
          {/* CENTERED HEADER WITH BADGE - Mobile optimized */}
          <div className="text-center mb-10 sm:mb-12">
            {/* Badge */}

            {/* Title */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Planea tu Tour VIP Gratuito
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ven a visitar el  YCC Water Park, el proyecto completo y tus opciones de inversión en una visita guiada
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-6 lg:gap-8 items-start">
            {/* LEFT: Smart Booking Form - Mobile: order-2 (appears FIRST), Desktop: order-1 */}
            <motion.div 
              className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-100 order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Form Header */}
              <div role="heading" aria-level={2}>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Reserva tu Tour Gratuito
                </h2>
                <p className="text-base sm:text-lg text-gray-500 mb-1">
                  Completa en 30 segundos ⚡
                </p>
                <p className="text-sm text-gray-500 mb-4 sm:mb-6">
                  Cupos limitados por horario.
                </p>
              </div>


              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                {/* Date + Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date Picker */}
                  <div className="space-y-2">
                  <Label htmlFor="visitDate" className="text-gray-700">Fecha de la Visita *</Label>
                  <Popover>
                    <PopoverTrigger asChild aria-label="Seleccionar fecha de la visita">
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal h-12 border-2 focus:border-coral touch-manipulation",
                          !selectedDate && "text-muted-foreground"
                        )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? (
                            format(selectedDate, "dd/MM/yyyy", { locale: ptBR })
                          ) : (
                            <span>Selecciona una fecha</span>
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

                  {/* Time Button Group */}
                  <div className="space-y-2">
                  <Label className="text-gray-700">Horario *</Label>
                  <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Selecciona el horario de la visita">
                      {/* Morning Button */}
                      <button
                        type="button"
                        onClick={() => setValue("visitTime", "morning")}
                        role="radio"
                        aria-checked={selectedTime === "morning"}
                        aria-label="Mañana - 9 a 12 horas"
                        className={cn(
                          "h-12 px-3 rounded-lg border-2 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 flex items-center justify-center gap-1.5 sm:gap-2 touch-manipulation",
                          selectedTime === "morning"
                            ? "bg-coral text-white border-coral shadow-lg"
                            : "bg-white text-gray-700 border-gray-300 hover:border-coral"
                        )}
                      >
                        <Sunrise className="w-4 h-4 sm:w-5 sm:h-5" />
                        <div className="flex flex-col items-start">
                          <span className="text-xs sm:text-sm font-semibold">Mañana</span>
                          <span className="text-[10px] sm:text-xs opacity-90">9-12h</span>
                        </div>
                      </button>

                      {/* Afternoon Button */}
                      <button
                        type="button"
                        onClick={() => setValue("visitTime", "afternoon")}
                        role="radio"
                        aria-checked={selectedTime === "afternoon"}
                        aria-label="Tarde - 14 a 17 horas"
                        className={cn(
                          "h-12 px-3 rounded-lg border-2 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2 flex items-center justify-center gap-1.5 sm:gap-2 touch-manipulation",
                          selectedTime === "afternoon"
                            ? "bg-coral text-white border-coral shadow-lg"
                            : "bg-white text-gray-700 border-gray-300 hover:border-coral"
                        )}
                      >
                        <Sunset className="w-4 h-4 sm:w-5 sm:h-5" />
                        <div className="flex flex-col items-start">
                          <span className="text-xs sm:text-sm font-semibold">Tarde</span>
                          <span className="text-[10px] sm:text-xs opacity-90">14-17h</span>
                        </div>
                      </button>
                    </div>
                    {errors.visitTime && (
                      <p className="text-sm text-red-600">{errors.visitTime.message}</p>
                    )}
                  </div>
                </div>

                {/* Name Input */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-gray-700">Nombre Completo *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" aria-hidden="true" />
                    <Input
                      id="fullName"
                      {...register("fullName")}
                      placeholder="Tu nombre"
                      className="h-12 pl-10 border-2 focus:border-coral touch-manipulation"
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-sm text-red-600" id="fullName-error" role="alert">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">Tu WhatsApp *</Label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" aria-hidden="true" />
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
                      className="h-12 pl-10 border-2 focus:border-coral touch-manipulation"
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-sm text-red-600" id="phone-error" role="alert">{errors.phone.message}</p>
                  )}
                </div>

                {/* Number of People */}
                <div className="space-y-2">
                  <Label className="text-gray-700">Número de Personas *</Label>
                  <div className="flex gap-2" role="radiogroup" aria-label="Selecciona el número de personas">
                    {(["1-2", "3-4", "5+"] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setValue("numberOfPeople", option)}
                        role="radio"
                        aria-checked={numberOfPeople === option}
                        aria-label={`${option} personas`}
                        className={cn(
                          "flex-1 py-3 px-4 rounded-full border-2 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2",
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

                {/* Submit Button */}
                <div className="space-y-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-coral to-coral-dark hover:from-coral-dark hover:to-coral active:from-coral active:to-coral-dark text-white font-bold text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all touch-manipulation"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Enviando...
                      </>
                    ) : (
                      "Confirmar mi Tour VIP"
                    )}
                  </Button>
                  
                  {/* Helper Text */}
                  <p className="text-center text-sm text-gray-600 flex items-center justify-center gap-1">
                    <span className="text-coral">⚡</span>
                    Confirmación en hasta 2 horas
                  </p>
                </div>
              </form>
            </motion.div>

            {/* RIGHT: Info Sidebar - Mobile: order-1 (appears AFTER form), Desktop: order-2 */}
            <motion.div 
              className="flex flex-col gap-4 sm:gap-5 md:gap-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* CARD 1: Interactive Google Maps - Mobile optimized height */}
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200" role="region" aria-label="Mapa de ubicación">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57844.84976851745!2d-57.5634!3d-25.2834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da5b16e52b7a1%3A0x8e4b51e9e0c8f0c8!2sYpan%C3%A9%2C%20Paraguay!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación YCC Water Park - Ypané, Paraguay"
                  className="w-full h-full"
                />
                
                {/* Button Overlay */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ypané,Paraguay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2
                    flex items-center gap-1.5 sm:gap-2
                    bg-white hover:bg-gray-50
                    shadow-lg hover:shadow-xl
                    rounded-full
                    px-4 sm:px-5 py-2 sm:py-2.5
                    text-xs sm:text-sm font-bold text-gray-900
                    transition-all duration-200
                    [@media(hover:hover)]:hover:scale-105
                    border border-gray-200
                    touch-manipulation
                    min-h-[44px]
                  "
                >
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-coral" />
                  <span className="whitespace-nowrap">Ver en Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* CARD 2: Essential Info Grid (4 Quick Cards) - Mobile optimized */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl border border-gray-200">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-coral" />
                  Información Esencial
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {/* Info Item 1: Horários */}
                  <div className="bg-white rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-coral/20 flex items-center justify-center">
                      <Sunrise className="w-5 h-5 sm:w-6 sm:h-6 text-coral" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-medium text-gray-600">Horarios</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-900">Sáb–Dom, turnos mañana y tarde</p>
                    </div>
                  </div>

                  {/* Info Item 2: Localização */}
                  <div className="bg-white rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-turquoise/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-turquoise" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-medium text-gray-600">Ubicación</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-900">Ypané, a solo 25 min de Asunción</p>
                    </div>
                  </div>

                  {/* Info Item 3: Experiência */}
                  <div className="bg-white rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-coral/20 flex items-center justify-center">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-coral" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-medium text-gray-600">Duração</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-900">Tour guiado de aprox. 2 horas</p>
                    </div>
                  </div>

                  {/* Info Item 4: Incluído */}
                  <div className="bg-white rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-medium text-gray-600">Bonus</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-900">Snack y bebidas de cortesía</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 3: What's Included Checklist - Mobile optimized */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border-2 border-coral/20">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-coral" />
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    ✨ Qué está incluido
                  </h3>
                </div>
                <ul className="space-y-2.5 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-coral/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-coral" />
                    </div>
                    <span className="font-medium">Recorrido guiado por el parque y áreas del proyecto</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-coral/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-coral" />
                    </div>
                    <span className="font-medium">Presentación del masterplan, maquetas y bungalows premium</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-coral/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-coral" />
                    </div>
                    <span className="font-medium">Explicación de las membresías y del sistema de time share</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-coral/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-coral" />
                    </div>
                    <span className="font-medium">Asesoría personalizada para elegir tu mejor opción</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-coral/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-coral" />
                    </div>
                    <span className="font-medium">Snack y bebidas de cortesía</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    </div>
                    <span className="font-medium">100% gratuito y sin compromiso de compra</span>
                  </li>
                </ul>
                
                {/* Disclaimer Text */}
                <p className="mt-4 text-xs text-gray-500 italic">
                  La visita es comercial y no incluye uso de las atracciones del parque.
                </p>
              </div>

              {/* CARD 4: Quick Contact WhatsApp - Mobile optimized */}
              <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">¿Dudas? Contáctanos</p>
                <p className="text-[10px] sm:text-xs text-gray-600 truncate">Respuesta rápida por WhatsApp</p>
              </div>
              <a
                href="https://wa.me/595994306666?text=¡Hola!%20Me%20gustaría%20saber%20más%20sobre%20el%20Tour%20VIP%20en%20YCC%20Water%20Park"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center
                    w-11 h-11 sm:w-12 sm:h-12
                    bg-green-500 hover:bg-green-600 active:bg-green-700
                    text-white
                    rounded-full
                    transition-all
                    [@media(hover:hover)]:hover:scale-110
                    active:scale-95
                    shadow-md hover:shadow-lg
                    touch-manipulation
                    flex-shrink-0
                  "
                  aria-label="Contactar por WhatsApp"
                >
                  <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* PART 3: TRUST BAR - Mobile optimized spacing */}
      <div className="w-full min-h-16 bg-white border-t border-gray-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {/* Stat 1: Famílias */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-coral" aria-hidden="true" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Familias</p>
              </div>
            </div>

            {/* Stat 2: Avaliação */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-600" aria-hidden="true" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-gray-900">4.8/5</p>
                <p className="text-sm text-gray-600">Valoración</p>
              </div>
            </div>

            {/* Stat 3: Bungalows */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-turquoise/20 flex items-center justify-center">
                <Home className="w-5 h-5 text-turquoise" aria-hidden="true" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-gray-900">64</p>
                <p className="text-sm text-gray-600">Bungalows</p>
              </div>
            </div>

            {/* Stat 4: Destinos */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-blue-600" aria-hidden="true" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-gray-900">4.000+</p>
                <p className="text-sm text-gray-600">Destinos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanYourVisitSection;
