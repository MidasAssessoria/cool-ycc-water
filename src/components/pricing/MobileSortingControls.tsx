import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

interface MobileSortingControlsProps {
  sortBy: 'years' | 'difference' | 'familiarTotal';
  onSort: (key: 'years' | 'difference' | 'familiarTotal') => void;
}

export const MobileSortingControls = ({ sortBy, onSort }: MobileSortingControlsProps) => {
  return (
    <div className="mb-4 pb-2">
      <p className="text-xs text-muted-foreground mb-2 px-2">Ordenar por:</p>
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        <Button
          variant={sortBy === 'years' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onSort('years')}
          className="flex-shrink-0 min-w-[100px] touch-manipulation active:scale-95 transition-transform"
        >
          Tiempo {sortBy === 'years' && <ArrowUpDown className="ml-1 h-3 w-3" />}
        </Button>
        <Button
          variant={sortBy === 'difference' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onSort('difference')}
          className="flex-shrink-0 min-w-[100px] touch-manipulation active:scale-95 transition-transform"
        >
          Ahorro {sortBy === 'difference' && <ArrowUpDown className="ml-1 h-3 w-3" />}
        </Button>
        <Button
          variant={sortBy === 'familiarTotal' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onSort('familiarTotal')}
          className="flex-shrink-0 min-w-[120px] touch-manipulation active:scale-95 transition-transform"
        >
          Familiar {sortBy === 'familiarTotal' && <ArrowUpDown className="ml-1 h-3 w-3" />}
        </Button>
      </div>
    </div>
  );
};
