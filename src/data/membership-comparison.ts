/**
 * VIP vs Familiar membership comparison data
 * Extracted for performance optimization - prevents recalculation on re-renders
 * 
 * Cálculos:
 * - Familiar: USD 1.500 entrada + USD 480/año (40/mes)
 * - VIP: USD 4.500 pago único
 * - Punto de equilibrio: año 9
 */

export interface VIPComparisonData {
  id: string;
  years: number;
  familiarTotal: number;
  vipTotal: number;
  difference: number;
  annualSavings: number;
  status: 'desfavorable' | 'equilibrio' | 'ahorro';
  statusColor: string;
  description: string;
}

export const comparisonData: VIPComparisonData[] = [
  {
    id: "1",
    years: 1,
    familiarTotal: 1980,  // 1500 + 480
    vipTotal: 4500,
    difference: -2520,
    annualSavings: 0,
    status: 'desfavorable',
    statusColor: '#F59E0B',
    description: 'VIP más caro inicialmente'
  },
  {
    id: "2",
    years: 3,
    familiarTotal: 2940,  // 1500 + (480 * 3)
    vipTotal: 4500,
    difference: -1560,
    annualSavings: 0,
    status: 'desfavorable',
    statusColor: '#F59E0B',
    description: 'Aún desfavorable'
  },
  {
    id: "3",
    years: 5,
    familiarTotal: 3900,  // 1500 + (480 * 5)
    vipTotal: 4500,
    difference: -600,
    annualSavings: 0,
    status: 'desfavorable',
    statusColor: '#F59E0B',
    description: 'Acercándose al equilibrio'
  },
  {
    id: "4",
    years: 7,
    familiarTotal: 4860,  // 1500 + (480 * 7)
    vipTotal: 4500,
    difference: 360,
    annualSavings: 480,
    status: 'ahorro',
    statusColor: '#10B981',
    description: 'VIP comienza a ahorrar'
  },
  {
    id: "5",
    years: 8,
    familiarTotal: 5340,  // 1500 + (480 * 8)
    vipTotal: 4500,
    difference: 840,
    annualSavings: 480,
    status: 'ahorro',
    statusColor: '#10B981',
    description: 'Ahorro significativo'
  },
  {
    id: "6",
    years: 9,
    familiarTotal: 5820,  // 1500 + (480 * 9)
    vipTotal: 4500,
    difference: 1320,
    annualSavings: 480,
    status: 'equilibrio',
    statusColor: '#3B82F6',
    description: 'Punto de equilibrio'
  },
  {
    id: "7",
    years: 10,
    familiarTotal: 6300,  // 1500 + (480 * 10)
    vipTotal: 4500,
    difference: 1800,
    annualSavings: 480,
    status: 'ahorro',
    statusColor: '#10B981',
    description: 'Ahorro creciente'
  },
  {
    id: "8",
    years: 12,
    familiarTotal: 7260,  // 1500 + (480 * 12)
    vipTotal: 4500,
    difference: 2760,
    annualSavings: 480,
    status: 'ahorro',
    statusColor: '#10B981',
    description: 'Ahorro considerable'
  },
  {
    id: "9",
    years: 15,
    familiarTotal: 8700,  // 1500 + (480 * 15)
    vipTotal: 4500,
    difference: 4200,
    annualSavings: 480,
    status: 'ahorro',
    statusColor: '#10B981',
    description: 'Gran ahorro acumulado'
  },
  {
    id: "10",
    years: 20,
    familiarTotal: 11100,  // 1500 + (480 * 20)
    vipTotal: 4500,
    difference: 6600,
    annualSavings: 480,
    status: 'ahorro',
    statusColor: '#10B981',
    description: 'Ahorro muy significativo'
  },
  {
    id: "11",
    years: 25,
    familiarTotal: 13500,  // 1500 + (480 * 25)
    vipTotal: 4500,
    difference: 9000,
    annualSavings: 480,
    status: 'ahorro',
    statusColor: '#10B981',
    description: 'Ahorro sustancial'
  },
  {
    id: "12",
    years: 30,
    familiarTotal: 15900,  // 1500 + (480 * 30)
    vipTotal: 4500,
    difference: 11400,
    annualSavings: 480,
    status: 'ahorro',
    statusColor: '#10B981',
    description: 'Máximo ahorro a largo plazo'
  }
];
