"use client";

/**
 * TrustBadgeMinimal - Bandeau ultra minimal avec note Google + stats concrètes
 * Design discret cohérent V4
 */

import { Star, TrendingDown, Shield } from "lucide-react";

export function TrustBadgeMinimal() {
  return (
    <div className="border-y py-4" style={{ background: "var(--color-bg)", borderColor: "var(--color-border)" }}>
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {/* Note Google */}
          <a
            href="https://www.google.com/maps/place/Moverz/@46.881154,3.0417412,6z/data=!3m1!4b1!4m6!3m5!1s0x65777ea3ad50b1c1:0xdcc12b2e04254f4!8m2!3d46.881154!4d3.0417412!16s%2Fg%2F11ylmz4jk6?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold" style={{ color: "var(--color-text)" }}>4,5+</span>
            <span style={{ color: "var(--color-text-secondary)" }}>sur Google</span>
          </a>

          <span className="text-[var(--color-text-muted)] hidden sm:inline">·</span>

          {/* Économie moyenne */}
          <div className="inline-flex items-center gap-2">
            <TrendingDown className="w-3.5 h-3.5" style={{ color: "var(--color-accent)" }} />
            <span className="font-semibold" style={{ color: "var(--color-text)" }}>450€</span>
            <span style={{ color: "var(--color-text-secondary)" }}>d'économie moyenne</span>
          </div>

          <span className="text-[var(--color-text-muted)] hidden sm:inline">·</span>

          {/* Déménageurs vérifiés */}
          <div className="inline-flex items-center gap-2">
            <Shield className="w-3.5 h-3.5" style={{ color: "var(--color-accent)" }} />
            <span className="font-semibold" style={{ color: "var(--color-text)" }}>3 analyses /100</span>
            <span style={{ color: "var(--color-text-secondary)" }}>par déménageur</span>
          </div>
        </div>
      </div>
    </div>
  );
}
