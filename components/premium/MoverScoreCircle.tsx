"use client";

import Image from "next/image";

interface MoverScoreCircleProps {
  score: number;
  label: string;
  size?: number;
}

function getScoreColor(score: number): string {
  if (score >= 80) return "#0EA5A6";
  if (score >= 60) return "#F59E0B";
  return "#EF4444";
}

export function MoverScoreCircle({ score, label, size = 72 }: MoverScoreCircleProps) {
  const color = getScoreColor(score);
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;
  const center = size / 2;

  return (
    <div className="flex items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold" style={{ color: "var(--color-text)" }}>
            {score}
          </span>
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold" style={{ color }}>
          {label}
        </p>
        <div className="flex items-center gap-1.5">
          <p className="text-xs text-slate-600">Score</p>
          <Image src="/logo.png" alt="Moverz" width={14} height={14} className="h-3.5 w-3.5" />
          <p className="text-xs font-bold" style={{ color: "var(--color-accent)" }}>Moverz</p>
        </div>
      </div>
    </div>
  );
}
