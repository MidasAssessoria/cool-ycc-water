/**
 * Pricing Constants - Single Source of Truth
 * Fase 5.1: Constantes centralizadas para evitar inconsistências
 * 
 * Todas as configurações de preços e cálculos de membresía
 * devem usar estas constantes para manter consistência
 */

export const PRICING = {
  FAMILIAR: {
    ENTRADA: 1500,
    MENSUAL: 40,
    ANUAL: 480, // 40 * 12 meses
    DESCONTO_CONTADO: 0.1, // 10% desconto pagamento à vista
  },
  VIP: {
    TOTAL: 4500,
    MENSUAL: 0, // VIP não tem mensalidade
  },
  // Ponto de equilibrio onde VIP começa a compensar vs Familiar
  EQUILIBRIO_ANOS: 9,
} as const;

// Tipos derivados das constantes para type safety
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

// Validação das constantes (executada em build time)
if (PRICING.FAMILIAR.ANUAL !== PRICING.FAMILIAR.MENSUAL * 12) {
  throw new Error('Pricing validation failed: ANUAL deve ser MENSUAL * 12');
}

if (PRICING.EQUILIBRIO_ANOS < 1 || PRICING.EQUILIBRIO_ANOS > 30) {
  throw new Error('Pricing validation failed: EQUILIBRIO_ANOS deve estar entre 1 e 30');
}
