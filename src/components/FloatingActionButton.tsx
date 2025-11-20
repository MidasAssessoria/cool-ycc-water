import React from 'react';
import { MessageCircle, Ticket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { smoothScrollToElement } from '@/lib/utils';

interface FloatingActionButtonProps {
  variant?: 'whatsapp' | 'booking';
  className?: string;
}

export const FloatingActionButton = ({ 
  variant = 'whatsapp',
  className 
}: FloatingActionButtonProps) => {
  const isWhatsApp = variant === 'whatsapp';
  
  const handleClick = () => {
    if (isWhatsApp) {
      window.open(
        'https://wa.me/595994306666?text=¡Hola!%20Me%20gustaría%20obtener%20más%20información%20sobre%20YCC%20Water%20Park',
        '_blank',
        'noopener,noreferrer'
      );
    } else {
      smoothScrollToElement('booking', 80);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        // Base styles
        "fixed bottom-6 right-6 z-40",
        "w-14 h-14 rounded-full",
        "flex items-center justify-center",
        "shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]",
        "transition-all duration-300",
        "hover:scale-110 active:scale-95",
        "md:hidden", // Visível apenas no mobile
        "touch-manipulation",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2",
        // Variant styles
        isWhatsApp 
          ? "bg-[#25D366] hover:bg-[#20BA5A] focus-visible:ring-[#25D366]/50" 
          : "bg-gradient-to-r from-coral to-coral-dark hover:from-coral-dark hover:to-[hsl(4,90%,58%)] focus-visible:ring-coral/50",
        className
      )}
      aria-label={isWhatsApp ? "Contactar por WhatsApp" : "Agendar visita"}
    >
      {isWhatsApp ? (
        <MessageCircle className="w-7 h-7 text-white" strokeWidth={2.5} />
      ) : (
        <Ticket className="w-7 h-7 text-white" strokeWidth={2.5} />
      )}
      
      {/* Pulse animation ring */}
      <span 
        className={cn(
          "absolute inset-0 rounded-full animate-ping opacity-75",
          isWhatsApp ? "bg-[#25D366]" : "bg-coral"
        )}
        style={{ animationDuration: '2s' }}
        aria-hidden="true"
      />
    </button>
  );
};
