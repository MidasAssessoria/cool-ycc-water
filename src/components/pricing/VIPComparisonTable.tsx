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
import { XCircle, CheckCircle, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

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

// Cálculos:
// Familiar: USD 1.350 entrada + USD 480/año (40/mes)
// VIP: USD 4.500 pagamento único
// Punto de equilibrio: año 8
const comparisonData: VIPComparisonData[] = [
  {
    id: "1",
    years: 1,
    familiarTotal: 1830,
    vipTotal: 4500,
    difference: -2670,
    annualSavings: 0,
    status: 'desfavorable',
    statusColor: '#F59E0B',
    description: 'VIP más caro inicialmente'
  },
  {
    id: "2",
    years: 3,
    familiarTotal: 2790,
    vipTotal: 4500,
    difference: -1710,
    annualSavings: 0,
    status: 'desfavorable',
    statusColor: '#F59E0B',
    description: 'Aún desfavorable'
  },
  {
    id: "3",
    years: 5,
    familiarTotal: 3750,
    vipTotal: 4500,
    difference: -750,
    annualSavings: 0,
    status: 'desfavorable',
    statusColor: '#F59E0B',
    description: 'Acercándose al equilibrio'
  },
  {
    id: "4",
    years: 7,
    familiarTotal: 4710,
    vipTotal: 4500,
    difference: 210,
    annualSavings: 480,
    status: 'ahorro',
    statusColor: '#10B981',
    description: 'VIP comienza a ahorrar'
  },
  {
    id: "5",
    years: 8,
    familiarTotal: 5190,
    vipTotal: 4500,
    difference: 690,
    annualSavings: 480,
    status: 'equilibrio',
    statusColor: '#3B82F6',
    description: 'Punto de equilibrio'
  },
  {
    id: "6",
    years: 9,
    familiarTotal: 5670,
    vipTotal: 4500,
    difference: 1170,
    annualSavings: 480,
    status: 'ahorro',
    statusColor: '#10B981',
    description: 'Ahorro creciente'
  },
  {
    id: "7",
    years: 10,
    familiarTotal: 6150,
    vipTotal: 4500,
    difference: 1650,
    annualSavings: 480,
    status: 'ahorro',
    statusColor: '#10B981',
    description: 'Ahorro significativo'
  },
  {
    id: "8",
    years: 12,
    familiarTotal: 7110,
    vipTotal: 4500,
    difference: 2610,
    annualSavings: 480,
    status: 'ahorro',
    statusColor: '#10B981',
    description: 'Ahorro considerable'
  },
  {
    id: "9",
    years: 15,
    familiarTotal: 8550,
    vipTotal: 4500,
    difference: 4050,
    annualSavings: 480,
    status: 'ahorro',
    statusColor: '#10B981',
    description: 'Gran ahorro acumulado'
  },
  {
    id: "10",
    years: 20,
    familiarTotal: 10950,
    vipTotal: 4500,
    difference: 6450,
    annualSavings: 480,
    status: 'ahorro',
    statusColor: '#10B981',
    description: 'Ahorro muy significativo'
  },
  {
    id: "11",
    years: 25,
    familiarTotal: 13350,
    vipTotal: 4500,
    difference: 8850,
    annualSavings: 480,
    status: 'ahorro',
    statusColor: '#10B981',
    description: 'Ahorro sustancial'
  },
  {
    id: "12",
    years: 30,
    familiarTotal: 15750,
    vipTotal: 4500,
    difference: 11250,
    annualSavings: 480,
    status: 'ahorro',
    statusColor: '#10B981',
    description: 'Máximo ahorro a largo plazo'
  },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('es-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

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
        <TableColumnHeader column={column} title="Diferencia" />
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
    <div className="w-full animate-fade-in">
      {/* Scroll indicator for mobile */}
      <div className="mb-3 flex items-center justify-center gap-2 text-xs text-muted-foreground md:hidden">
        <span>← Desliza para ver más →</span>
      </div>
      
      <div className="relative max-h-[60vh] overflow-auto rounded-lg border-2 border-border shadow-xl">
        {/* Gradient overlay for scroll indication */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-8 bg-gradient-to-l from-background to-transparent md:hidden" />
        
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
      
      {/* Legend with animation */}
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
    </div>
  );
};
