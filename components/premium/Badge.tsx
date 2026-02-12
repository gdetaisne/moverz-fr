import { ReactNode } from "react";
import { clsx } from "clsx";

interface BadgeProps {
  variant?: "subtle" | "accent" | "verified";
  children: ReactNode;
  className?: string;
}

export function Badge({ variant = "subtle", children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        {
          "bg-[rgb(var(--bg))] text-[rgb(var(--text-2))] border border-[rgb(var(--border))]":
            variant === "subtle",
          "bg-[rgb(var(--accent))]/10 text-[rgb(var(--accent-2))] border border-[rgb(var(--accent))]/20":
            variant === "accent",
          "bg-[rgb(var(--success))]/10 text-[rgb(var(--success))] border border-[rgb(var(--success))]/20":
            variant === "verified",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
