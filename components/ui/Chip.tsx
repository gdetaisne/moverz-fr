type ChipProps = {
  children: React.ReactNode;
  tone?: "teal" | "brand" | "neutral" | "dark" | "light";
  size?: "sm" | "md";
  className?: string;
};

export default function Chip({ children, tone = "teal", size = "md", className = "" }: ChipProps) {
  const base = "inline-flex items-center gap-1.5 rounded-full font-semibold";
  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs",
  };
  const tones: Record<NonNullable<ChipProps["tone"]>, string> = {
    teal: "border border-[var(--brand-teal)]/30 bg-[var(--brand-teal)]/12 text-[#E6FFFA]",
    brand: "border border-[var(--brand-teal)]/25 bg-[var(--brand-teal)]/10 text-[var(--brand-deep)]",
    neutral: "border border-black/10 bg-white/70 text-[var(--text-muted)]",
    dark: "border border-white/15 bg-white/8 text-white/85",
    light: "border border-[#6BCFCF]/25 bg-[#6BCFCF]/10 text-[#0F172A]",
  };

  return <span className={`${base} ${sizes[size]} ${tones[tone]} ${className}`}>{children}</span>;
}


