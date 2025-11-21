import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/lib/currency';

const FAMILIAR_ENTRADA = 1500;
const FAMILIAR_MENSUAL = 480; // 40/mes * 12 meses
const VIP_TOTAL = 4500;

export const InteractiveCalculator = () => {
  const [years, setYears] = useState([9]); // Start at equilibrium point

  // Fase 6.2: Validação de entrada - garante valores dentro do range permitido
  const currentYears = Math.max(1, Math.min(30, years[0]));
  
  // Calculate totals com valores validados
  const familiarTotal = FAMILIAR_ENTRADA + (FAMILIAR_MENSUAL * currentYears);
  const vipTotal = VIP_TOTAL;
  const difference = familiarTotal - vipTotal;
  
  // Fase 6.2: Economia anual só começa a partir do ano 9 (ponto de equilibrio)
  const annualSavings = currentYears >= 9 && difference > 0 ? FAMILIAR_MENSUAL : 0;

  // Fase 6.2: Status atualizado - equilibrio é no ano 9, não baseado em diferença pequena
  const getStatus = () => {
    // Antes do ano 9: VIP é mais caro (desfavorable)
    if (currentYears < 9) return 'desfavorable';
    // Ano 9: ponto de equilibrio onde VIP começa a compensar
    if (currentYears === 9) return 'equilibrio';
    // Após ano 9: VIP economiza
    return 'ahorro';
  };

  const status = getStatus();

  return (
    <Card className="p-6 mt-8 bg-gradient-to-br from-purple-50 to-cyan-50">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Calculadora Interactiva
        </h3>
        <p className="text-sm text-muted-foreground">
          Ajusta los años para ver cómo cambia el ahorro VIP
        </p>
      </div>

      {/* Slider */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <label className="text-sm font-semibold text-foreground">
            Años de membresía:
          </label>
          <Badge variant="secondary" className="text-lg font-bold px-4 py-2">
            {currentYears} {currentYears === 1 ? 'año' : 'años'}
          </Badge>
        </div>
        <Slider
          value={years}
          onValueChange={(value) => {
            // Fase 6.2: Validação adicional no onChange
            const validatedValue = Math.max(1, Math.min(30, value[0]));
            setYears([validatedValue]);
          }}
          min={1}
          max={30}
          step={1}
          className="w-full"
          aria-label="Selecciona el número de años de membresía"
          aria-valuemin={1}
          aria-valuemax={30}
          aria-valuenow={currentYears}
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>1 año</span>
          <span>30 años</span>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* Familiar Total */}
        <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
          <p className="text-sm text-muted-foreground mb-1">Membresía Familiar</p>
          <p className="text-3xl font-black text-orange-600">
            {formatCurrency(familiarTotal)}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            USD 1.500 + (USD 480/año × {currentYears})
          </p>
        </div>

        {/* VIP Total */}
        <div className="bg-white rounded-lg p-4 border-2 border-cyan-200">
          <p className="text-sm text-muted-foreground mb-1">Membresía VIP</p>
          <p className="text-3xl font-black text-cyan-600">
            {formatCurrency(vipTotal)}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Pago único - Sin cuota mensual
          </p>
        </div>
      </div>

      {/* Difference Display */}
      <div className={cn(
        "rounded-xl p-6 text-center transition-all duration-300",
        status === 'desfavorable' && "bg-orange-100 border-2 border-orange-300",
        status === 'equilibrio' && "bg-cyan-100 border-2 border-cyan-300",
        status === 'ahorro' && "bg-emerald-100 border-2 border-emerald-300"
      )}>
        <div className="flex items-center justify-center gap-2 mb-2">
          {status === 'desfavorable' && <TrendingDown className="w-6 h-6 text-orange-600" />}
          {status === 'equilibrio' && <Scale className="w-6 h-6 text-cyan-600" />}
          {status === 'ahorro' && <TrendingUp className="w-6 h-6 text-emerald-600" />}
          
          <h4 className={cn(
            "text-lg font-bold",
            status === 'desfavorable' && "text-orange-700",
            status === 'equilibrio' && "text-cyan-700",
            status === 'ahorro' && "text-emerald-700"
          )}>
            {status === 'desfavorable' && 'VIP más caro'}
            {status === 'equilibrio' && 'Punto de Equilibrio'}
            {status === 'ahorro' && 'VIP ahorra'}
          </h4>
        </div>

        <p className={cn(
          "text-4xl font-black mb-2",
          status === 'desfavorable' && "text-orange-600",
          status === 'equilibrio' && "text-cyan-600",
          status === 'ahorro' && "text-emerald-600"
        )}>
          {difference > 0 ? '+' : ''}{formatCurrency(Math.abs(difference))}
        </p>

        {annualSavings > 0 && (
          <p className="text-sm text-muted-foreground">
            Ahorras {formatCurrency(annualSavings)}/año desde ahora
          </p>
        )}
        
        {status === 'desfavorable' && (
          <p className="text-sm text-muted-foreground mt-2">
            El equilibrio llega en el año 9
          </p>
        )}
      </div>

      {/* Info Message */}
      <div className="mt-4 text-center text-xs text-muted-foreground">
        💡 El punto de equilibrio es en el <strong>año 9</strong>. 
        Desde ahí, VIP ahorra USD 480 cada año.
      </div>
    </Card>
  );
};
