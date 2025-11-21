import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, XCircle, CheckCircle, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { VIPComparisonData } from '@/data/membership-comparison';
import { formatCurrency } from '@/lib/currency';

interface VIPComparisonCardProps {
  data: VIPComparisonData;
  index: number;
}

const StatusIcon = ({ status }: { status: 'desfavorable' | 'equilibrio' | 'ahorro' }) => {
  const iconProps = { className: "h-6 w-6" };
  
  switch (status) {
    case 'desfavorable':
      return <XCircle {...iconProps} className={cn(iconProps.className, "text-orange-500")} />;
    case 'equilibrio':
      return <Scale {...iconProps} className={cn(iconProps.className, "text-yellow-500")} />;
    case 'ahorro':
      return <CheckCircle {...iconProps} className={cn(iconProps.className, "text-emerald-500")} />;
  }
};

export const VIPComparisonCard = ({ data, index }: VIPComparisonCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const { years, familiarTotal, vipTotal, difference, annualSavings, status, description } = data;
  
  // Cálculos para exibir no detalhamento
  const familiarEntrada = 1350;
  const familiarAnual = 480;
  const vipPagamentoUnico = 4500;
  
  return (
    <Card 
      className={cn(
        "relative overflow-hidden",
        "border-2 border-border",
        "shadow-lg hover:shadow-xl",
        "transition-all duration-300",
        "bg-gradient-to-br from-background to-muted/20",
        "animate-fade-in"
      )}
      style={{ 
        animationDelay: `${index * 50}ms`,
        animationFillMode: 'both'
      }}
    >
      {/* Status indicator bar */}
      <div 
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{
          background: status === 'ahorro' 
            ? 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--chart-2)))' 
            : status === 'equilibrio'
            ? 'linear-gradient(90deg, hsl(var(--chart-4)), hsl(var(--chart-5)))'
            : 'linear-gradient(90deg, hsl(var(--chart-1)), hsl(var(--destructive)))'
        }}
      />
      
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <Badge 
            variant="outline" 
            className="text-base font-bold px-3 py-1 border-2"
          >
            ⭐ {years} {years === 1 ? 'año' : 'años'}
          </Badge>
          <StatusIcon status={status} />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 pb-4">
        {/* Familiar section */}
        <div className="bg-orange-500/10 rounded-lg p-4 border-l-4 border-orange-500 transition-all duration-200 hover:shadow-md">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
            Membresía Familiar
          </p>
          <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
            {formatCurrency(familiarTotal)}
          </p>
          {isExpanded && (
            <p className="text-xs text-muted-foreground mt-2 animate-fade-in">
              ${familiarEntrada.toLocaleString()} entrada + ${familiarAnual.toLocaleString()}/año × {years}
            </p>
          )}
        </div>
        
        {/* VIP section */}
        <div className="bg-cyan-500/10 rounded-lg p-4 border-l-4 border-cyan-500 transition-all duration-200 hover:shadow-md">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
            Membresía VIP
          </p>
          <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
            {formatCurrency(vipTotal)}
          </p>
          {isExpanded && (
            <p className="text-xs text-muted-foreground mt-2 animate-fade-in">
              ${vipPagamentoUnico.toLocaleString()} pago único (sin cuotas)
            </p>
          )}
        </div>
        
        {/* Difference highlight */}
        <div 
          className={cn(
            "rounded-lg p-4 border-2 transition-all duration-200 hover:shadow-lg",
            difference > 0 
              ? "bg-emerald-500/10 border-emerald-500" 
              : difference === 0
              ? "bg-yellow-500/10 border-yellow-500"
              : "bg-orange-500/10 border-orange-500"
          )}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-sm">
              {difference > 0 ? '✅ Ahorro VIP' : difference === 0 ? '⚖️ Equilibrio' : '❌ VIP más caro'}
            </span>
            <span 
              className={cn(
                "text-2xl font-bold",
                difference > 0 
                  ? "text-emerald-600 dark:text-emerald-400" 
                  : difference === 0
                  ? "text-yellow-600 dark:text-yellow-400"
                  : "text-orange-600 dark:text-orange-400"
              )}
            >
              {formatCurrency(Math.abs(difference))}
            </span>
          </div>
          
          {annualSavings > 0 && (
            <div className="flex items-center justify-between pt-2 border-t border-border/50">
              <span className="text-xs text-muted-foreground">
                Ahorro anual proyectado
              </span>
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                💰 {formatCurrency(annualSavings)}/año
              </span>
            </div>
          )}
          
          {isExpanded && (
            <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border/50 animate-fade-in">
              {description}
            </p>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button
          variant="ghost"
          size="sm"
          className="w-full group hover:bg-accent/50 transition-all duration-200"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="text-sm font-medium">
            {isExpanded ? 'Ocultar detalles' : 'Ver cálculo detallado'}
          </span>
          {isExpanded ? (
            <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          ) : (
            <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
