"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Logo Moverz : icône + mot "Moverz" (font Sora, teal, souligné orange)
 * Transparent, lisible sur fond clair ou sombre
 */
interface LogoWithTextProps {
  /** Taille : sm = header mobile, md = header desktop, lg = footer */
  size?: "sm" | "md" | "lg";
  /** Sur fond sombre (footer) : texte clair */
  variant?: "light" | "dark";
  /** En tant que lien vers / */
  asLink?: boolean;
  className?: string;
}

const sizes = {
  sm: { icon: "h-10", text: "text-2xl" },
  md: { icon: "h-14", text: "text-3xl" },
  lg: { icon: "h-16", text: "text-4xl" },
};

export function LogoWithText({
  size = "md",
  variant = "dark",
  asLink = true,
  className = "",
}: LogoWithTextProps) {
  const s = sizes[size];
  const isDarkBg = variant === "light"; // "light" = fond sombre, texte blanc

  const content = (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      style={{ fontFamily: "var(--font-sora), Sora, system-ui, sans-serif" }}
    >
      <Image
        src="/logo-transparent.png"
        alt=""
        width={1024}
        height={1024}
        className={`${s.icon} w-auto`}
        priority
        unoptimized={false}
        sizes="(max-width: 768px) 80px, 96px"
      />
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
        Moverz
      </span>
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
