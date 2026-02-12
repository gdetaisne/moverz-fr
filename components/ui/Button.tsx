"use client";

import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";
type ButtonRadius = "pill" | "2xl";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
  className?: string;
  ariaLabel?: string;
};

type ButtonAsButtonProps = BaseProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

type ButtonAsLinkProps = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  radius = "pill",
  className = "",
  ariaLabel,
  ...rest
}: ButtonProps) {
  const sizes: Record<ButtonSize, string> = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3.5 text-base",
  };

  const radii: Record<ButtonRadius, string> = {
    pill: "rounded-full",
    "2xl": "rounded-xl",
  };

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-r from-brand-turquoise via-brand-turquoise to-brand-turquoise text-white shadow-glow-turquoise hover:shadow-glow-turquoise-lg hover:scale-[1.03] active:scale-[0.98] border border-white/20",
    secondary:
      "bg-white text-[var(--color-text)] border-2 border-[var(--color-border)] hover:border-brand-turquoise-200 hover:shadow-md hover:shadow-brand-turquoise-100/50 hover:scale-[1.02]",
    ghost:
      "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/30 hover:scale-[1.02]",
  };

  const base =
    "inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 relative overflow-hidden group";

  const cls = `${base} ${radii[radius]} ${sizes[size]} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, target, rel } = rest;
    return (
      <a href={href} target={target} rel={rel} className={cls} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  const { onClick, type = "button" } = rest as ButtonAsButtonProps;
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}


