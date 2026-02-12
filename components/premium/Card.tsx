import { ReactNode } from "react";
import { clsx } from "clsx";

interface CardProps {
  children: ReactNode;
  shadow?: boolean;
  className?: string;
}

export function Card({ children, shadow = false, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-card border border-[rgb(var(--border))] bg-[rgb(var(--surface))]",
        {
          "shadow-md": shadow,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
