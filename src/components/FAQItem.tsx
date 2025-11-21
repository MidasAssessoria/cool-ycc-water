import React, { memo } from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
  categoryLabel: string;
  categoryColor: 'cyan' | 'orange';
  showCategoryHeader: boolean;
  isFirstInCategory: boolean;
  highlightText: (text: string) => React.ReactNode;
}

/**
 * Memoized FAQ Item Component
 * Only re-renders when props actually change
 * Improves performance for large FAQ lists
 */
export const FAQItem = memo<FAQItemProps>(({
  id,
  question,
  answer,
  categoryLabel,
  categoryColor,
  showCategoryHeader,
  isFirstInCategory,
  highlightText
}) => {
  return (
    <>
      {showCategoryHeader && (
        <div className={cn(
          "text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2",
          isFirstInCategory && "mt-6 sm:mt-8",
          categoryColor === 'cyan' ? "text-cyan-700" : "text-orange-700"
        )}>
          <span className={cn(
            "w-6 sm:w-8 h-0.5",
            categoryColor === 'cyan' ? "bg-cyan-600/30" : "bg-orange-600/30"
          )}></span>
          <span>{categoryLabel}</span>
          <span className={cn(
            "flex-1 h-0.5",
            categoryColor === 'cyan' ? "bg-cyan-600/30" : "bg-orange-600/30"
          )}></span>
        </div>
      )}
      
      <AccordionItem 
        value={id} 
        className="bg-muted/30 rounded-xl border-2 border-border px-3 sm:px-6"
      >
        <AccordionTrigger className="text-left font-bold text-foreground hover:text-primary transition-colors py-5 sm:py-4 text-base sm:text-lg leading-tight sm:leading-normal">
          {highlightText(question)}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          {highlightText(answer)}
        </AccordionContent>
      </AccordionItem>
    </>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function for memo
  // Only re-render if these specific props change
  return (
    prevProps.id === nextProps.id &&
    prevProps.question === nextProps.question &&
    prevProps.answer === nextProps.answer &&
    prevProps.showCategoryHeader === nextProps.showCategoryHeader &&
    prevProps.isFirstInCategory === nextProps.isFirstInCategory
  );
});

FAQItem.displayName = 'FAQItem';
