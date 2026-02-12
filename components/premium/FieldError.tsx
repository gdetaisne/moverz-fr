import { clsx } from "clsx";
import { AlertCircle } from "lucide-react";

interface FieldErrorProps {
  children: React.ReactNode;
  className?: string;
}

export function FieldError({ children, className }: FieldErrorProps) {
  if (!children) return null;
  
  return (
    <div className={clsx("mt-1.5 flex items-center gap-1.5 text-sm text-[rgb(var(--danger))]", className)}>
      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
      <span>{children}</span>
    </div>
  );
}
