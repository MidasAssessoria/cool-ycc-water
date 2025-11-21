import { useState, useMemo } from 'react';
import { VIPComparisonCard } from './VIPComparisonCard';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VIPComparisonData {
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

interface MobileCardsViewProps {
  data: VIPComparisonData[];
}

type SortField = 'years' | 'difference' | 'familiarTotal' | 'annualSavings';
type SortDirection = 'asc' | 'desc';

export const MobileCardsView = ({ data }: MobileCardsViewProps) => {
  const [sortField, setSortField] = useState<SortField>('years');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  // Handle sorting
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // Toggle direction if same field
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      // New field, default to ascending
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Sort data based on current sort field and direction
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];
      
      const multiplier = sortDirection === 'asc' ? 1 : -1;
      
      if (aValue < bValue) return -1 * multiplier;
      if (aValue > bValue) return 1 * multiplier;
      return 0;
    });
  }, [data, sortField, sortDirection]);

  // Get sort icon based on current state
  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="h-4 w-4" />;
    }
    return sortDirection === 'asc' 
      ? <ArrowUp className="h-4 w-4" /> 
      : <ArrowDown className="h-4 w-4" />;
  };

  const sortButtons = [
    { field: 'years' as SortField, label: 'Tiempo', icon: '⏱️' },
    { field: 'difference' as SortField, label: 'Ahorro', icon: '💰' },
    { field: 'familiarTotal' as SortField, label: 'Familiar', icon: '👨‍👩‍👧‍👦' },
    { field: 'annualSavings' as SortField, label: 'Ahorro/año', icon: '📊' },
  ];

  return (
    <div className="w-full space-y-6 animate-fade-in">
      {/* Mobile Sorting Controls */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide px-1">
          Ordenar por
        </h3>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {sortButtons.map(({ field, label, icon }) => (
            <Button
              key={field}
              variant={sortField === field ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleSort(field)}
              className={cn(
                "flex-shrink-0 gap-2 min-h-[44px] px-4 transition-all duration-200",
                "hover:scale-105 active:scale-95",
                sortField === field && "shadow-lg"
              )}
            >
              <span className="text-base">{icon}</span>
              <span className="font-medium">{label}</span>
              {getSortIcon(field)}
            </Button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between px-1">
        <p className="text-sm text-muted-foreground">
          {sortedData.length} {sortedData.length === 1 ? 'resultado' : 'resultados'}
        </p>
        <p className="text-xs text-muted-foreground">
          {sortDirection === 'asc' ? '↑ Menor a mayor' : '↓ Mayor a menor'}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedData.map((item, index) => (
          <VIPComparisonCard
            key={item.id}
            data={item}
            index={index}
          />
        ))}
      </div>

      {/* Helper text */}
      <div className="text-center pt-4 pb-2">
        <p className="text-xs text-muted-foreground">
          💡 Toca en "Ver cálculo detallado" para más información
        </p>
      </div>
    </div>
  );
};
