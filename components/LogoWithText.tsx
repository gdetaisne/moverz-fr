"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Logo Moverz : icône + mot "Moverz" (font Sora, teal, souligné orange)
 * Transparent, lisible sur fond clair ou sombre
 * Responsive : plus petit sur mobile, plus grand sur desktop
 */
interface LogoWithTextProps {
  /** header = responsive header, footer = responsive footer, sm/md/lg = fixes */
  size?: "sm" | "md" | "lg" | "header" | "footer";
  /** Sur fond sombre (footer) : texte clair */
  variant?: "light" | "dark";
  /** En tant que lien vers / */
  asLink?: boolean;
  /** Masquer le texte (icône seule) — ex: footer sobre */
  showText?: boolean;
  className?: string;
}

const sizes: Record<string, { icon: string; text: string }> = {
  sm: { icon: "h-12", text: "text-2xl" },
  md: { icon: "h-14", text: "text-2xl" },
  lg: { icon: "h-16 md:h-20", text: "text-3xl md:text-4xl" },
  /** Header : bien visible mobile + desktop */
  header: { icon: "h-16 md:h-24", text: "text-2xl md:text-4xl" },
  /** Footer : plus grand, bien lisible */
  footer: { icon: "h-20 md:h-28", text: "text-3xl md:text-5xl" },
};

export function LogoWithText({
  size = "md",
  variant = "dark",
  asLink = true,
  showText = true,
  className = "",
}: LogoWithTextProps) {
  const s = sizes[size];
  const isDarkBg = variant === "light"; // "light" = fond sombre, texte blanc

  const isVertical = size === "footer" && showText;

  const content = (
    <span
      className={`inline-flex gap-2 ${isVertical ? "flex-col items-start" : "items-center"} ${className}`}
      style={{ fontFamily: "var(--font-sora), Sora, system-ui, sans-serif" }}
    >
      <Image
        src="/logo-transparent.png"
        alt="Moverz"
        width={1024}
        height={1024}
        className={`${s.icon} w-auto object-contain`}
        priority
        unoptimized={false}
        sizes="(max-width: 768px) 80px, 96px"
      />
      {showText && (
        <span
          className={`font-extrabold tracking-tight ${s.text}`}
          style={{
            color: isDarkBg ? "#ffffff" : "#0EA5A6",
            textDecoration: "underline",
            textDecorationColor: "#F59E0B",
            textUnderlineOffset: "4px",
            textDecorationThickness: "2px",
          }}
        >
          {size === "footer" ? "MOVERZ" : "Moverz"}
        </span>
      )}
    </span>
  );

  if (asLink) {
    return (
      <Link href="/" title="Moverz - Accueil" className="hover:opacity-90 transition-opacity">
        {content}
      </Link>
    );
  }
  return content;
}
