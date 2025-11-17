import { useState } from "react";

export const usePhoneMask = () => {
  const formatPhoneNumber = (value: string): string => {
    // Remove todos os caracteres não-numéricos, exceto o +
    let cleaned = value.replace(/[^\d+]/g, '');
    
    // Garante que sempre comece com +595
    if (!cleaned.startsWith('+595')) {
      // Remove qualquer + existente e adiciona +595
      cleaned = cleaned.replace(/\+/g, '');
      cleaned = '+595' + cleaned;
    }
    
    // Extrai apenas os dígitos após +595
    const digitsOnly = cleaned.substring(4).replace(/\D/g, '');
    
    // Limita a 9 dígitos
    const limitedDigits = digitsOnly.substring(0, 9);
    
    // Aplica a máscara: +595 XXX XXX XXX
    let formatted = '+595';
    
    if (limitedDigits.length > 0) {
      formatted += ' ' + limitedDigits.substring(0, 3);
    }
    
    if (limitedDigits.length > 3) {
      formatted += ' ' + limitedDigits.substring(3, 6);
    }
    
    if (limitedDigits.length > 6) {
      formatted += ' ' + limitedDigits.substring(6, 9);
    }
    
    return formatted;
  };

  const handlePhonePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    e.preventDefault();
    
    // Captura o valor colado
    const pastedValue = e.clipboardData.getData('text');
    
    // Formata o valor
    const formatted = formatPhoneNumber(pastedValue);
    
    // Atualiza o campo
    onChange(formatted);
  };

  const handlePhoneBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    currentValue: string,
    onChange: (value: string) => void
  ) => {
    if (e.key === 'Backspace') {
      const input = e.currentTarget;
      const cursorPosition = input.selectionStart || 0;
      
      // Se o cursor está em um espaço, remove o dígito anterior
      if (currentValue[cursorPosition - 1] === ' ' && cursorPosition > 5) {
        e.preventDefault();
        
        // Remove o espaço e o dígito anterior
        const newValue = 
          currentValue.substring(0, cursorPosition - 2) + 
          currentValue.substring(cursorPosition);
        
        const formatted = formatPhoneNumber(newValue);
        onChange(formatted);
        
        // Reposiciona o cursor
        setTimeout(() => {
          input.setSelectionRange(cursorPosition - 2, cursorPosition - 2);
        }, 0);
      }
    }
  };

  return { 
    formatPhoneNumber, 
    handlePhonePaste, 
    handlePhoneBackspace 
  };
};
