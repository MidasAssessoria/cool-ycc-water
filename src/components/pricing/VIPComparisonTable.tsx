import { useState } from "react";
import {
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHead,
  TableHeader,
  TableHeaderGroup,
  TableProvider,
  TableRow,
} from "@/components/ui/data-table";
import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { XCircle, CheckCircle, Scale, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobileTable } from "@/hooks/useResponsiveTable";
import { MobileCardsView } from "./MobileCardsView";
import { SavingsChart } from "./SavingsChart";
import { InteractiveCalculator } from "./InteractiveCalculator";
import { ComparisonToggle, type ComparisonMode } from "./ComparisonToggle";
import { comparisonData, type VIPComparisonData } from "@/data/membership-comparison";
import { formatCurrency } from "@/lib/currency";

const StatusIcon = ({ status }: { status: VIPComparisonData['status'] }) => {
  if (status === 'desfavorable') {
    return <XCircle className="h-5 w-5 text-orange-500" />;
  }
  if (status === 'equilibrio') {
    return <Scale className="h-5 w-5 text-cyan-500" />;
  }
  return <CheckCircle className="h-5 w-5 text-emerald-500" />;
};

export const VIPComparisonTable = () => {
  const isMobile = useIsMobileTable();
  const [comparisonMode, setComparisonMode] = useState<ComparisonMode>('table');
  const columns: ColumnDef<VIPComparisonData>[] = [
    {
      accessorKey: "years",
      header: ({ column }) => (
        <TableColumnHeader column={column} title="Tiempo" />
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2 transition-transform duration-200 hover:scale-105">
          {row.original.status === 'equilibrio' ? (
            <Badge variant="default" className="bg-cyan-500 hover:bg-cyan-600 font-bold shadow-md transition-all duration-200 hover:shadow-lg">
              ⭐ {row.original.years} {row.original.years === 1 ? 'año' : 'años'}
            </Badge>
          ) : (
            <span className="font-medium">
              {row.original.years} {row.original.years === 1 ? 'año' : 'años'}
            </span>
          )}
        </div>
      ),
    },
    {
      accessorKey: "familiarTotal",
      header: ({ column }) => (
        <TableColumnHeader column={column} title="Familiar Total" />
      ),
      cell: ({ row }) => (
        <span className="font-semibold text-orange-600 transition-all duration-200 hover:text-orange-700">
          {formatCurrency(row.original.familiarTotal)}
        </span>
      ),
    },
    {
      accessorKey: "vipTotal",
      header: ({ column }) => (
        <TableColumnHeader column={column} title="VIP Total" />
      ),
      cell: ({ row }) => (
        <span className="font-semibold text-cyan-600 transition-all duration-200 hover:text-cyan-700">
          {formatCurrency(row.original.vipTotal)}
        </span>
      ),
    },
    {
      accessorKey: "difference",
      header: ({ column }) => (
        <div className="flex items-center gap-2">
          <TableColumnHeader column={column} title="Diferencia" />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button" className="cursor-help">
                  <HelpCircle className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                </button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="text-sm">
                  <strong className="text-emerald-600">Positivo:</strong> VIP ahorra ese monto<br/>
                  <strong className="text-orange-600">Negativo:</strong> VIP cuesta más
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ),
      cell: ({ row }) => {
        const diff = row.original.difference;
        const isPositive = diff > 0;
        
        return (
          <div className="flex items-center gap-2 transition-all duration-200 hover:scale-105">
            <StatusIcon status={row.original.status} />
            <span className={cn(
              "font-bold transition-colors duration-200",
              isPositive ? "text-emerald-600 hover:text-emerald-700" : "text-orange-600 hover:text-orange-700"
            )}>
              {isPositive ? '+' : ''}{formatCurrency(Math.abs(diff))}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "annualSavings",
      header: ({ column }) => (
        <TableColumnHeader column={column} title="Ahorro/año" />
      ),
      cell: ({ row }) => {
        const savings = row.original.annualSavings;
        
        return (
          <span className={cn(
            "font-medium",
            savings > 0 ? "text-emerald-600" : "text-muted-foreground"
          )}>
            {savings > 0 ? formatCurrency(savings) : '—'}
          </span>
        );
      },
    },
  ];

  return (
    <div className="w-full animate-fade-in space-y-6">
      {/* Toggle Mode - Only on desktop */}
      {!isMobile && (
        <ComparisonToggle mode={comparisonMode} onModeChange={setComparisonMode} />
      )}

      {/* Interactive Calculator */}
      {comparisonMode === 'compare' && !isMobile ? (
        <InteractiveCalculator />
      ) : isMobile ? (
        // 📱 Mobile: Cards empilháveis
        <MobileCardsView data={comparisonData} />
      ) : comparisonMode === 'cards' ? (
        // 🃏 Desktop Cards Mode
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {comparisonData.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg",
                item.status === 'equilibrio' && "bg-cyan-50 border-cyan-300",
                item.status === 'ahorro' && "bg-emerald-50 border-emerald-300",
                item.status === 'desfavorable' && "bg-orange-50 border-orange-300"
              )}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="text-base font-bold">
                  {item.years} {item.years === 1 ? 'año' : 'años'}
                </Badge>
                <StatusIcon status={item.status} />
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground">Familiar</p>
                  <p className="text-xl font-bold text-orange-600">
                    {formatCurrency(item.familiarTotal)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">VIP</p>
                  <p className="text-xl font-bold text-cyan-600">
                    {formatCurrency(item.vipTotal)}
                  </p>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-xs text-muted-foreground">Diferencia</p>
                  <p className={cn(
                    "text-2xl font-black",
                    item.difference > 0 ? "text-emerald-600" : "text-orange-600"
                  )}>
                    {item.difference > 0 ? '+' : ''}{formatCurrency(Math.abs(item.difference))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // 💻 Desktop/Tablet: Tabela completa
        <>
          {/* Scroll indicator para tablet */}
          <div className="mb-3 flex items-center justify-center gap-2 text-xs text-muted-foreground lg:hidden">
            <span>← Desliza para ver más →</span>
          </div>
          
          <div className="relative max-h-[60vh] overflow-auto rounded-lg border-2 border-border shadow-xl">
            {/* Gradient overlay for scroll indication */}
            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-8 bg-gradient-to-l from-background to-transparent lg:hidden" />
            
            <TableProvider
              columns={columns}
              data={comparisonData}
              className="border-0"
            >
              <TableHeader className="bg-muted/50 sticky top-0 z-10 backdrop-blur-sm">
                {({ headerGroup }) => (
                  <TableHeaderGroup key={headerGroup.id} headerGroup={headerGroup}>
                    {({ header }) => (
                      <TableHead 
                        key={header.id} 
                        header={header}
                        className="font-bold text-foreground transition-colors duration-200 hover:bg-muted/70"
                      />
                    )}
                  </TableHeaderGroup>
                )}
              </TableHeader>
              <TableBody>
                {({ row }) => {
                  const rowData = row.original as VIPComparisonData;
                  const rowIndex = parseInt(row.id);
                  
                  return (
                    <TableRow 
                      key={row.id} 
                      row={row}
                      className={cn(
                        "transition-all duration-300 animate-fade-in hover:shadow-md",
                        rowData.status === 'equilibrio' && "bg-cyan-500/10 hover:bg-cyan-500/20 border-l-4 border-cyan-500",
                        rowData.status === 'ahorro' && "hover:bg-emerald-500/5",
                        rowData.status === 'desfavorable' && "hover:bg-orange-500/5"
                      )}
                      style={{
                        animationDelay: `${rowIndex * 50}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      {({ cell }) => (
                        <TableCell 
                          key={cell.id} 
                          cell={cell}
                          className="py-4 transition-all duration-200"
                        />
                      )}
                    </TableRow>
                  );
                }}
              </TableBody>
            </TableProvider>
          </div>
        </>
      )}
      
      {/* Legend com animação - sempre visível */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
        <div className="flex items-center gap-2 transition-all duration-200 hover:scale-105">
          <XCircle className="h-4 w-4 text-orange-500" />
          <span>Desfavorable</span>
        </div>
        <div className="flex items-center gap-2 transition-all duration-200 hover:scale-105">
          <Scale className="h-4 w-4 text-cyan-500" />
          <span>Punto de Equilibrio</span>
        </div>
        <div className="flex items-center gap-2 transition-all duration-200 hover:scale-105">
          <CheckCircle className="h-4 w-4 text-emerald-500" />
          <span>Ahorro VIP</span>
        </div>
      </div>

      {/* Charts - Only in table mode on desktop */}
      {comparisonMode === 'table' && !isMobile && (
        <>
          <SavingsChart data={comparisonData} />
          <InteractiveCalculator />
        </>
      )}
    </div>
  );
};
