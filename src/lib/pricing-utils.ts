/**
 * Pricing Utility Functions
 * Fase 5.3: Funções centralizadas para cálculos de pricing
 * 
 * Evita duplicação de lógica de cálculo e garante consistência
 */

import { PRICING } from '@/constants/pricing';

/**
 * Calcula o custo total da Membresía Familiar para N anos
 * @param years - Número de anos (deve ser >= 1)
 * @returns Custo total em USD
 */
export const calculateFamiliarTotal = (years: number): number => {
  if (years < 1) {
    throw new Error('Years must be at least 1');
  }
  
  return PRICING.FAMILIAR.ENTRADA + (PRICING.FAMILIAR.ANUAL * years);
};

/**
 * Calcula o custo total da Membresía VIP (constante)
 * @returns Custo total em USD
 */
export const calculateVIPTotal = (): number => {
  return PRICING.VIP.TOTAL;
};

/**
 * Calcula a diferença entre Familiar e VIP
 * @param years - Número de anos
 * @returns Diferença (positivo = Familiar custa mais, negativo = VIP custa mais)
 */
export const calculateDifference = (years: number): number => {
  return calculateFamiliarTotal(years) - calculateVIPTotal();
};

/**
 * Calcula a economia anual com VIP após o ponto de equilibrio
 * @param years - Número de anos
 * @returns Economia anual em USD (0 se ainda não atingiu equilibrio)
 */
export const calculateAnnualSavings = (years: number): number => {
  // Só há economia se atingiu o ponto de equilibrio e Familiar custa mais
  if (years >= PRICING.EQUILIBRIO_ANOS && calculateDifference(years) > 0) {
    return PRICING.FAMILIAR.ANUAL;
  }
  return 0;
};

/**
 * Determina o status da comparação VIP vs Familiar
 * @param years - Número de anos
 * @returns Status: 'desfavorable' | 'equilibrio' | 'ahorro'
 */
export const getPricingStatus = (years: number): 'desfavorable' | 'equilibrio' | 'ahorro' => {
  if (years < PRICING.EQUILIBRIO_ANOS) {
    return 'desfavorable'; // VIP ainda é mais caro
  }
  
  if (years === PRICING.EQUILIBRIO_ANOS) {
    return 'equilibrio'; // Ponto onde VIP começa a compensar
  }
  
  return 'ahorro'; // VIP economiza
};

/**
 * Obtém a cor do status para UI
 * @param status - Status do pricing
 * @returns Cor em formato hexadecimal
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
 * Valida se um número de anos está dentro do range permitido
 * @param years - Número de anos a validar
 * @param min - Mínimo permitido (default: 1)
 * @param max - Máximo permitido (default: 30)
 * @returns Número de anos validado dentro do range
 */
export const validateYears = (years: number, min: number = 1, max: number = 30): number => {
  return Math.max(min, Math.min(max, years));
};

/**
 * Calcula o desconto de pagamento à vista para Familiar
 * @param totalAmount - Valor total antes do desconto
 * @returns Valor do desconto em USD
 */
export const calculateCashDiscount = (totalAmount: number): number => {
  return totalAmount * PRICING.FAMILIAR.DESCONTO_CONTADO;
};
