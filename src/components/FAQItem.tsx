import React, { memo } from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn, smoothScrollToElement } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
  categoryLabel: string;
  categoryColor: 'cyan' | 'orange';
  icon: LucideIcon;
  showCategoryHeader: boolean;
  isFirstInCategory: boolean;
  highlightText: (text: string) => React.ReactNode;
  actionButton?: {
    label: string;
    action: 'scroll-pricing' | 'whatsapp';
    href?: string;
  };
}

/**
 * Memoized FAQ Item Component with icons and action buttons
 * Only re-renders when props actually change
 * Improves performance for large FAQ lists
 * Includes accessibility improvements (aria-labels, keyboard navigation)
 */
export const FAQItem = memo<FAQItemProps>(({
  id,
  question,
  answer,
  categoryLabel,
  categoryColor,
  icon: Icon,
  showCategoryHeader,
  isFirstInCategory,
  highlightText,
  actionButton
}) => {
  const handleActionClick = () => {
    if (!actionButton) return;
    
    if (actionButton.action === 'scroll-pricing') {
      smoothScrollToElement('comparison-section', 80);
    } else if (actionButton.action === 'whatsapp' && actionButton.href) {
      window.open(actionButton.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {showCategoryHeader && (
        <div 
          className={cn(
            "text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-5 flex items-center gap-2 py-2",
            isFirstInCategory && "mt-8 sm:mt-10 md:mt-12",
            categoryColor === 'cyan' ? "text-cyan-700" : "text-orange-700"
          )}
          role="separator"
          aria-label={`Categoría: ${categoryLabel}`}
        >
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
        className="bg-muted/30 rounded-xl border-2 border-border px-4 sm:px-5 md:px-6 lg:px-7"
      >
        <AccordionTrigger 
          className="text-left font-bold text-foreground hover:text-primary transition-colors py-4 sm:py-5 md:py-6 text-base sm:text-lg leading-tight sm:leading-normal"
          aria-label={question}
        >
          <div className="flex items-start gap-3 w-full">
            <Icon 
              className={cn(
                "w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5",
                categoryColor === 'cyan' ? "text-cyan-600" : "text-orange-600"
              )} 
              aria-hidden="true"
            />
            <span className="flex-1">{highlightText(question)}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          <div className="pl-8 sm:pl-9 pr-2 sm:pr-4 pt-2 pb-1">
            <p className="mb-3">{highlightText(answer)}</p>
            
            {actionButton && (
              <Button
                size="sm"
                variant="outline"
                onClick={handleActionClick}
                className="mt-2 text-xs sm:text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={actionButton.label}
              >
                {actionButton.label}
              </Button>
            )}
          </div>
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
    prevProps.isFirstInCategory === nextProps.isFirstInCategory &&
    prevProps.actionButton?.label === nextProps.actionButton?.label
  );
});

FAQItem.displayName = 'FAQItem';
