import { useFormContext } from "react-hook-form";
import { CheckCircle2, XCircle } from "lucide-react";

interface ValidationIconProps {
  name: string;
}

export const ValidationIcon = ({ name }: ValidationIconProps) => {
  const { formState: { touchedFields, errors } } = useFormContext();
  
  // Get nested field values using dot notation (e.g., "address.street")
  const isTouched = name.split('.').reduce((obj: any, key) => obj?.[key], touchedFields);
  const error = name.split('.').reduce((obj: any, key) => obj?.[key], errors);
  
  if (!isTouched) return null;
  
  if (error) {
    return (
      <XCircle 
        className="absolute right-0 top-0 h-4 w-4 text-destructive" 
        aria-hidden="true"
      />
    );
  }
  
  return (
    <CheckCircle2 
      className="absolute right-0 top-0 h-4 w-4 text-green-600 dark:text-green-400" 
      aria-hidden="true"
    />
  );
};
