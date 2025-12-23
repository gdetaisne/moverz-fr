type ChipProps = {
  children: React.ReactNode;
  tone?: "teal" | "neutral" | "dark";
  className?: string;
};

export default function Chip({ children, tone = "teal", className = "" }: ChipProps) {
  const base = "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold";
  const tones: Record<NonNullable<ChipProps["tone"]>, string> = {
    teal: "border border-[var(--brand-teal)]/30 bg-[var(--brand-teal)]/12 text-[#E6FFFA]",
    neutral: "border border-black/10 bg-white/70 text-[var(--text-muted)]",
    dark: "border border-white/15 bg-white/8 text-white/85",
  };

  return <span className={`${base} ${tones[tone]} ${className}`}>{children}</span>;
}


