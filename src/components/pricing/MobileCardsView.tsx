import { VIPComparisonCard } from './VIPComparisonCard';
import type { VIPComparisonData } from './VIPComparisonTable';

interface MobileCardsViewProps {
  data: VIPComparisonData[];
}

export const MobileCardsView = ({ data }: MobileCardsViewProps) => {
  return (
    <div className="space-y-4 px-2">
      {data.map((item, index) => (
        <VIPComparisonCard key={item.id} data={item} index={index} />
      ))}
    </div>
  );
};
