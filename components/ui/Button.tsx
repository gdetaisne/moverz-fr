"use client";

import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp";
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
    sm: "px-4 py-2.5 text-sm",
    md: "px-5 py-3 text-sm",
  };

  const radii: Record<ButtonRadius, string> = {
    pill: "rounded-full",
    "2xl": "rounded-2xl",
  };

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-r from-[var(--brand-deep)] via-[var(--brand-teal-2)] to-[var(--brand-teal)] text-[#04141f] shadow-[0_12px_40px_rgba(107,207,207,0.28)] hover:shadow-[0_16px_60px_rgba(107,207,207,0.38)] hover:scale-[1.01] active:scale-[0.99]",
    secondary:
      "bg-white/10 text-white hover:bg-white/15 border border-white/14",
    ghost:
      "bg-transparent text-white/85 hover:text-white hover:bg-white/10 border border-white/12",
    whatsapp:
      "bg-white/10 text-white hover:bg-white/15 border border-white/14",
  };

  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200";

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


