import { ReactNode } from "react";
import { clsx } from "clsx";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "space-y-3",
        {
          "text-left": align === "left",
          "text-center": align === "center",
        },
        className
      )}
    >
      {eyebrow && (
        <div className="text-sm font-semibold uppercase tracking-wider text-[rgb(var(--accent-2))]">
          {eyebrow}
        </div>
      )}
      <h2 className="font-heading text-3xl font-bold leading-tight text-[rgb(var(--text))] md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-base text-[rgb(var(--text-2))] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
