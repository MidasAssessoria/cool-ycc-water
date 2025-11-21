import { useState, useMemo } from 'react';
import { VIPComparisonCard } from './VIPComparisonCard';
import type { VIPComparisonData } from '@/data/membership-comparison';
import { MobileSortingControls } from './MobileSortingControls';

interface MobileCardsViewProps {
  data: VIPComparisonData[];
}

export const MobileCardsView = ({ data }: MobileCardsViewProps) => {
  const [sortBy, setSortBy] = useState<'years' | 'difference' | 'familiarTotal'>('years');

  const handleSort = (key: 'years' | 'difference' | 'familiarTotal') => {
    setSortBy(key);
  };

  const sortedData = useMemo(() => {
    const sorted = [...data].sort((a, b) => {
      if (sortBy === 'years') {
        return a.years - b.years; // Ascendente para años
      } else {
        return b[sortBy] - a[sortBy]; // Descendente para ahorro y familiar
      }
    });
    return sorted;
  }, [data, sortBy]);

  return (
    <div>
      <MobileSortingControls sortBy={sortBy} onSort={handleSort} />
      <div className="space-y-4 px-2">
        {sortedData.map((item, index) => (
          <VIPComparisonCard key={item.id} data={item} index={index} />
        ))}
      </div>
    </div>
  );
};
