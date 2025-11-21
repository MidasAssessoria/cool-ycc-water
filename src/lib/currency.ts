/**
 * Currency formatting utility with memoization
 * Optimized to avoid recreating the formatter on every render
 */

// Create a singleton Intl.NumberFormat instance
const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/**
 * Format a number as USD currency
 * @param value - The number to format
 * @returns Formatted currency string (e.g., "$1,500")
 */
export function formatCurrency(value: number): string {
  return currencyFormatter.format(value);
}
