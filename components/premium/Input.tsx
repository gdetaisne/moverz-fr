"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "h-12 w-full rounded-input border bg-[rgb(var(--surface))] px-4 text-base",
          "text-[rgb(var(--text))] placeholder:text-[rgb(var(--muted))]",
          "transition-all duration-150",
          "focus:outline-none focus:ring-2 focus:ring-offset-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          {
            "border-[rgb(var(--border))] focus:border-[rgb(var(--accent))] focus:ring-[var(--focus)]":
              !error,
            "border-[rgb(var(--danger))] focus:border-[rgb(var(--danger))] focus:ring-[rgb(var(--danger))]/20":
              error,
          },
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
