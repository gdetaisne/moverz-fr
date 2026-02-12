"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  loading?: boolean;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center gap-2 font-medium transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        // Variants
        {
          "bg-[rgb(var(--primary))] text-[rgb(var(--primary-contrast))] hover:bg-[rgb(var(--primary))]/90 active:scale-[0.98] focus-visible:ring-[rgb(var(--primary))]":
            variant === "primary",
          "border-2 border-[rgb(var(--primary))] bg-transparent text-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))]/5 focus-visible:ring-[rgb(var(--primary))]":
            variant === "secondary",
          "bg-transparent text-[rgb(var(--text-2))] hover:bg-[rgb(var(--border))] focus-visible:ring-[rgb(var(--text-2))]":
            variant === "ghost",
        },
        // Sizes
        {
          "h-11 rounded-btn px-5 text-sm": size === "md",
          "h-14 rounded-btn px-7 text-base": size === "lg",
        },
        className
      )}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
