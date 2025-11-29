/**
 * Pricing Utility Functions
 * Fase 5.3: Funciones centralizadas para cálculos de pricing
 * 
 * Evita duplicación de lógica de cálculo y garantiza consistencia
 */

import { PRICING } from '@/constants/pricing';

/**
 * Calcula el costo total de la Membresía Familiar para N años
 * @param years - Número de años (debe ser >= 1)
 * @returns Costo total en USD
 */
export const calculateFamiliarTotal = (years: number): number => {
  if (years < 1) {
    throw new Error('Years must be at least 1');
  }
  
  return PRICING.FAMILIAR.ENTRADA + (PRICING.FAMILIAR.ANUAL * years);
};

/**
 * Calcula el costo total de la Membresía VIP (constante)
 * @returns Costo total en USD
 */
export const calculateVIPTotal = (): number => {
  return PRICING.VIP.TOTAL;
};

/**
 * Calcula la diferencia entre Familiar y VIP
 * @param years - Número de años
 * @returns Diferencia (positivo = Familiar cuesta más, negativo = VIP cuesta más)
 */
export const calculateDifference = (years: number): number => {
  return calculateFamiliarTotal(years) - calculateVIPTotal();
};

/**
 * Calcula el ahorro anual con VIP después del punto de equilibrio
 * @param years - Número de años
 * @returns Ahorro anual en USD (0 si aún no alcanzó equilibrio)
 */
export const calculateAnnualSavings = (years: number): number => {
  // Solo hay ahorro si alcanzó el punto de equilibrio y Familiar cuesta más
  if (years >= PRICING.EQUILIBRIO_ANOS && calculateDifference(years) > 0) {
    return PRICING.FAMILIAR.ANUAL;
  }
  return 0;
};

/**
 * Determina el status de la comparación VIP vs Familiar
 * @param years - Número de años
 * @returns Status: 'desfavorable' | 'equilibrio' | 'ahorro'
 */
export const getPricingStatus = (years: number): 'desfavorable' | 'equilibrio' | 'ahorro' => {
  if (years < PRICING.EQUILIBRIO_ANOS) {
    return 'desfavorable'; // VIP aún es más caro
  }
  
  if (years === PRICING.EQUILIBRIO_ANOS) {
    return 'equilibrio'; // Punto donde VIP comienza a compensar
  }
  
  return 'ahorro'; // VIP ahorra
};

/**
 * Obtiene el color del status para UI
 * @param status - Status del pricing
 * @returns Color en formato hexadecimal
 */
export const getStatusColor = (status: 'desfavorable' | 'equilibrio' | 'ahorro'): string => {
  const colors = {
    desfavorable: '#F59E0B', // Orange
    equilibrio: '#3B82F6',   // Blue
    ahorro: '#10B981',       // Green
  };
  
  return colors[status];
};

/**
 * Valida si un número de años está dentro del rango permitido
 * @param years - Número de años a validar
 * @param min - Mínimo permitido (default: 1)
 * @param max - Máximo permitido (default: 30)
 * @returns Número de años validado dentro del rango
 */
export const validateYears = (years: number, min: number = 1, max: number = 30): number => {
  return Math.max(min, Math.min(max, years));
};

/**
 * Calcula el descuento de pago al contado para Familiar
 * @param totalAmount - Valor total antes del descuento
 * @returns Valor del descuento en USD
 */
export const calculateCashDiscount = (totalAmount: number): number => {
  return totalAmount * PRICING.FAMILIAR.DESCONTO_CONTADO;
};
