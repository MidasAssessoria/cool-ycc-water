import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';
import type { VIPComparisonData } from './VIPComparisonTable';

interface SavingsChartProps {
  data: VIPComparisonData[];
}

export const SavingsChart = ({ data }: SavingsChartProps) => {
  // Transform data for recharts
  const chartData = data.map(item => ({
    years: item.years,
    Familiar: item.familiarTotal,
    VIP: item.vipTotal,
    Ahorro: item.difference > 0 ? item.difference : 0,
  }));

  return (
    <Card className="p-6 mt-8">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-foreground mb-2">
          Evolución de Costos a Largo Plazo
        </h3>
        <p className="text-sm text-muted-foreground">
          Visualiza cómo el ahorro VIP crece con el tiempo
        </p>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis 
            dataKey="years" 
            label={{ value: 'Años', position: 'insideBottom', offset: -5 }}
            className="text-xs"
          />
          <YAxis 
            label={{ value: 'USD', angle: -90, position: 'insideLeft' }}
            className="text-xs"
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--background))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
            formatter={(value: number) => `USD ${value.toLocaleString()}`}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="Familiar" 
            stroke="hsl(16, 100%, 60%)" 
            strokeWidth={3}
            dot={{ fill: 'hsl(16, 100%, 60%)', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="VIP" 
            stroke="hsl(187, 100%, 42%)" 
            strokeWidth={3}
            dot={{ fill: 'hsl(187, 100%, 42%)', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="Ahorro" 
            stroke="hsl(142, 76%, 36%)" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: 'hsl(142, 76%, 36%)', r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-4 flex flex-wrap gap-4 justify-center text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[hsl(16,100%,60%)]" />
          <span className="text-muted-foreground">Membresía Familiar</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[hsl(187,100%,42%)]" />
          <span className="text-muted-foreground">Membresía VIP</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-1 bg-[hsl(142,76%,36%)]" />
          <span className="text-muted-foreground">Ahorro Acumulado</span>
        </div>
      </div>
    </Card>
  );
};
