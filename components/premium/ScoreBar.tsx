"use client";

interface ScoreBarProps {
  label: string;
  value: number;
}

function getBarColor(value: number): string {
  if (value >= 80) return "#0EA5A6";
  if (value >= 60) return "#F59E0B";
  return "#EF4444";
}

export function ScoreBar({ label, value }: ScoreBarProps) {
  const color = getBarColor(value);

  return (
    <div className="flex items-center gap-2">
      <span
        className="w-[72px] shrink-0 text-xs"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {label}
      </span>
      <div className="relative h-2 flex-1 rounded-full bg-gray-100">
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
      <span
        className="w-7 shrink-0 text-right text-xs font-semibold tabular-nums"
        style={{ color: "var(--color-text)" }}
      >
        {value}
      </span>
    </div>
  );
}
