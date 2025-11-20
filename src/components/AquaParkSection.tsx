import { useState } from "react";
import { Ticket, CalendarCheck, Waves, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import backgroundImage from "@/assets/waterpark-hero-bg.jpg";

const AquaParkSection = () => {
  const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setLoadingButton(buttonName);
    
    // Simular processamento
    setTimeout(() => {
      toast({
        title: `${buttonName} seleccionado`,
        description: "Pronto serás redirigido...",
      });
      setLoadingButton(null);
    }, 1500);
  };

  return (
    <section className="relative w-full pb-[100px] md:pb-[140px] lg:pb-[180px]">
      
      {/* Background com overlay escuro */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt="Parque aquático com toboáguas coloridos e piscinas" 
          className="h-full w-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Card branco com contraste adequado */}
      <div className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[90%] md:max-w-[75%] lg:max-w-[80%] xl:max-w-[1200px] mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border-4 border-coral">
          
          {/* Grid 2 colunas (desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mb-6 md:mb-8 lg:mb-10">
            
            {/* Título - Mobile optimized */}
            <div className="flex items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
                ¿Listo para vivir la experiencia YCC?
              </h2>
            </div>

            {/* Parágrafo - Mobile optimized */}
            <div className="flex items-center">
              <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
                Elegido mejor parque acuático de las Américas (Travellers' Choice 2024 - Best of the Best de TripAdvisor), YCC cuenta con más de 30 atracciones para que toda la familia disfrute.
              </p>
            </div>
          </div>

          {/* 3 Botões brancos */}
          <nav className="space-y-2.5 md:space-y-0 md:flex md:flex-row md:gap-2 lg:gap-3 xl:gap-4">
            
            {/* Botão 1: Comprar Entradas - Touch optimized */}
            <div 
              onClick={() => handleButtonClick("Comprar Entradas")}
              className="flex items-center justify-start gap-2 md:gap-3 bg-white rounded-2xl px-3 md:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 min-h-[52px] shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer [@media(hover:hover)]:hover:scale-[1.02] md:flex-1 touch-manipulation"
            >
              <div className="bg-orange-500 p-2 md:p-2.5 lg:p-3 rounded-full transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                <Ticket className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-gray-900 font-semibold text-sm md:text-base lg:text-lg truncate min-w-0 max-w-[140px] md:max-w-none">
                Comprar Entradas
              </span>
              <button 
                disabled={loadingButton === "Comprar Entradas"}
                className="bg-orange-500 px-4 md:px-5 lg:px-6 py-1.5 md:py-2 rounded-full text-white font-bold text-[10px] md:text-xs lg:text-sm uppercase hover:bg-orange-600 active:bg-orange-700 transition-colors duration-300 flex-shrink-0 ml-auto disabled:opacity-70 flex items-center gap-1.5 min-h-[36px]"
                aria-label="Comprar entradas"
              >
                {loadingButton === "Comprar Entradas" && <Loader2 className="w-3 h-3 animate-spin" />}
                COMPRAR
              </button>
            </div>

            {/* Botão 2: Calendario - Touch optimized */}
            <div 
              onClick={() => handleButtonClick("Calendario de Eventos")}
              className="flex items-center justify-start gap-2 md:gap-3 bg-white rounded-2xl px-3 md:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 min-h-[52px] shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer [@media(hover:hover)]:hover:scale-[1.02] md:flex-1 touch-manipulation"
            >
              <div className="bg-orange-500 p-2 md:p-2.5 lg:p-3 rounded-full transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                <CalendarCheck className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-gray-900 font-semibold text-sm md:text-base lg:text-lg truncate min-w-0 max-w-[140px] md:max-w-none">
                Calendario de Eventos
              </span>
              <button 
                disabled={loadingButton === "Calendario de Eventos"}
                className="bg-orange-500 px-4 md:px-5 lg:px-6 py-1.5 md:py-2 rounded-full text-white font-bold text-[10px] md:text-xs lg:text-sm uppercase hover:bg-orange-600 active:bg-orange-700 transition-colors duration-300 flex-shrink-0 ml-auto disabled:opacity-70 flex items-center gap-1.5 min-h-[36px]"
                aria-label="Acceder al calendario de eventos"
              >
                {loadingButton === "Calendario de Eventos" && <Loader2 className="w-3 h-3 animate-spin" />}
                ACCEDER
              </button>
            </div>

            {/* Botão 3: Atracciones - Touch optimized */}
            <div 
              onClick={() => handleButtonClick("Nuestras Atracciones")}
              className="flex items-center justify-start gap-2 md:gap-3 bg-white rounded-2xl px-3 md:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 min-h-[52px] shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer [@media(hover:hover)]:hover:scale-[1.02] md:flex-1 touch-manipulation"
            >
              <div className="bg-orange-500 p-2 md:p-2.5 lg:p-3 rounded-full transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                <Waves className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-gray-900 font-semibold text-sm md:text-base lg:text-lg truncate min-w-0 max-w-[140px] md:max-w-none">
                Nuestras Atracciones
              </span>
              <button 
                disabled={loadingButton === "Nuestras Atracciones"}
                className="bg-orange-500 px-4 md:px-5 lg:px-6 py-1.5 md:py-2 rounded-full text-white font-bold text-[10px] md:text-xs lg:text-sm uppercase hover:bg-orange-600 active:bg-orange-700 transition-colors duration-300 flex-shrink-0 ml-auto disabled:opacity-70 flex items-center gap-1.5 min-h-[36px]"
                aria-label="Conocer atracciones"
              >
                {loadingButton === "Nuestras Atracciones" && <Loader2 className="w-3 h-3 animate-spin" />}
                CONOCER
              </button>
            </div>

          </nav>

        </div>
      </div>

      {/* EFEITO ONDA NA TRANSIÇÃO */}
      <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          className="relative block w-full h-[100px] md:h-[140px] lg:h-[180px] pointer-events-none" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white"
          />
        </svg>
      </div>

    </section>
  );
};

export default AquaParkSection;
