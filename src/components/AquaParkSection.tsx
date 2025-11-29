import { Ticket, CalendarCheck, MessageCircle } from "lucide-react";
import { smoothScrollToElement } from "@/lib/utils";
import backgroundImage from "@/assets/waterpark-hero-bg.jpg";
const AquaParkSection = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "595994306666";
    const message = "Hola, me gustaría más información sobre YCC Water Park.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return <section className="relative w-full pb-[100px] md:pb-[140px] lg:pb-[180px]">
      
      {/* Background com overlay escuro */}
      <div className="absolute inset-0">
        <img src={backgroundImage} alt="Parque acuático con toboganes coloridos y piscinas" className="h-full w-full object-cover" />
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
                Más de 30 atracciones, club y resort acuático para disfrutar en familia.<br />
                Elige cómo quieres empezar tu experiencia YCC.
              </p>
            </div>
          </div>

          {/* 3 Botões brancos */}
          <nav className="space-y-2.5 md:space-y-0 md:flex md:flex-row md:gap-2 lg:gap-3 xl:gap-4">
            
            {/* Botão 1: Membresías - Touch optimized */}
            <div onClick={() => window.location.href = '/membresias'} className="flex items-center justify-start gap-2 md:gap-3 bg-white rounded-2xl px-3 md:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 min-h-[52px] shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer [@media(hover:hover)]:hover:scale-[1.02] md:flex-1 touch-manipulation">
              <div className="bg-orange-500 p-2 md:p-2.5 lg:p-3 rounded-full transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                <Ticket className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-gray-900 font-semibold text-sm md:text-base lg:text-lg truncate min-w-0 max-w-[140px] md:max-w-none">
                Membresías
              </span>
              <button className="bg-orange-500 px-4 md:px-5 lg:px-6 py-1.5 md:py-2 rounded-full text-white font-bold text-[10px] md:text-xs lg:text-sm uppercase hover:bg-orange-600 active:bg-orange-700 transition-colors duration-300 flex-shrink-0 ml-auto flex items-center gap-1.5 min-h-[36px]" aria-label="Ver planes de membresías">
                VER PLANES
              </button>
            </div>

            {/* Botão 2: Visita gratis - Touch optimized */}
            <div onClick={() => smoothScrollToElement('plan-visit-form', 80)} className="flex items-center justify-start gap-2 md:gap-3 bg-white rounded-2xl px-3 md:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 min-h-[52px] shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer [@media(hover:hover)]:hover:scale-[1.02] md:flex-1 touch-manipulation">
              <div className="bg-orange-500 p-2 md:p-2.5 lg:p-3 rounded-full transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                <CalendarCheck className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-gray-900 font-semibold text-sm md:text-base lg:text-lg truncate min-w-0 max-w-[140px] md:max-w-none">
                Visita gratis
              </span>
              <button className="bg-orange-500 px-4 md:px-5 lg:px-6 py-1.5 md:py-2 rounded-full text-white font-bold text-[10px] md:text-xs lg:text-sm uppercase hover:bg-orange-600 active:bg-orange-700 transition-colors duration-300 flex-shrink-0 ml-auto flex items-center gap-1.5 min-h-[36px]" aria-label="Agendar visita guiada">
                AGENDAR
              </button>
            </div>

            {/* Botão 3: WhatsApp - Touch optimized */}
            <div onClick={handleWhatsApp} className="flex items-center justify-start gap-2 md:gap-3 bg-white rounded-2xl px-3 md:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 min-h-[52px] shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer [@media(hover:hover)]:hover:scale-[1.02] md:flex-1 touch-manipulation">
              <div className="bg-orange-500 p-2 md:p-2.5 lg:p-3 rounded-full transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-gray-900 font-semibold text-sm md:text-base lg:text-lg truncate min-w-0 max-w-[140px] md:max-w-none">
                Whatsapp
              </span>
              <button className="bg-orange-500 px-4 md:px-5 lg:px-6 py-1.5 md:py-2 rounded-full text-white font-bold text-[10px] md:text-xs lg:text-sm uppercase hover:bg-orange-600 active:bg-orange-700 transition-colors duration-300 flex-shrink-0 ml-auto flex items-center gap-1.5 min-h-[36px]" aria-label="Hablar por WhatsApp">
                ESCRIBIR
              </button>
            </div>

          </nav>

        </div>
      </div>

      {/* EFEITO ONDA NA TRANSIÇÃO */}
      

    </section>;
};
export default AquaParkSection;