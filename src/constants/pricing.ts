/**
 * Pricing Constants - Single Source of Truth
 * Fase 5.1: Constantes centralizadas para evitar inconsistencias
 * 
 * Todas las configuraciones de precios y cálculos de membresía
 * deben usar estas constantes para mantener consistencia
 */

export const PRICING = {
  FAMILIAR: {
    ENTRADA: 1500,
    MENSUAL: 40,
    ANUAL: 480, // 40 * 12 meses
    DESCONTO_CONTADO: 0.1, // 10% descuento pago al contado
  },
  VIP: {
    TOTAL: 4500,
    MENSUAL: 0, // VIP no tiene mensualidad
  },
  // Punto de equilibrio donde VIP comienza a compensar vs Familiar
  EQUILIBRIO_ANOS: 9,
} as const;

// Tipos derivados de las constantes para type safety
export type MembershipType = 'familiar' | 'vip';

export interface PricingConfig {
  readonly FAMILIAR: {
    readonly ENTRADA: number;
    readonly MENSUAL: number;
    readonly ANUAL: number;
    readonly DESCONTO_CONTADO: number;
  };
  readonly VIP: {
    readonly TOTAL: number;
    readonly MENSUAL: number;
  };
  readonly EQUILIBRIO_ANOS: number;
}

// Validación de las constantes (ejecutada en build time)
if (PRICING.FAMILIAR.ANUAL !== PRICING.FAMILIAR.MENSUAL * 12) {
  throw new Error('Pricing validation failed: ANUAL debe ser MENSUAL * 12');
}

if (PRICING.EQUILIBRIO_ANOS < 1 || PRICING.EQUILIBRIO_ANOS > 30) {
  throw new Error('Pricing validation failed: EQUILIBRIO_ANOS debe estar entre 1 y 30');
}
