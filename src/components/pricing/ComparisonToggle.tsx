import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table2, LayoutGrid, GitCompare } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ComparisonMode = 'table' | 'cards' | 'compare';

interface ComparisonToggleProps {
  mode: ComparisonMode;
  onModeChange: (mode: ComparisonMode) => void;
}

export const ComparisonToggle = ({ mode, onModeChange }: ComparisonToggleProps) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="inline-flex rounded-lg border border-border bg-muted p-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onModeChange('table')}
          className={cn(
            "gap-2 transition-all",
            mode === 'table' && "bg-background shadow-sm"
          )}
        >
          <Table2 className="w-4 h-4" />
          <span className="hidden sm:inline">Tabla</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onModeChange('cards')}
          className={cn(
            "gap-2 transition-all",
            mode === 'cards' && "bg-background shadow-sm"
          )}
        >
          <LayoutGrid className="w-4 h-4" />
          <span className="hidden sm:inline">Cards</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onModeChange('compare')}
          className={cn(
            "gap-2 transition-all",
            mode === 'compare' && "bg-background shadow-sm"
          )}
        >
          <GitCompare className="w-4 h-4" />
          <span className="hidden sm:inline">Comparar</span>
        </Button>
      </div>
    </div>
  );
};
