"use client";

/**
 * TrustBadgeMinimal - Bandeau ultra minimal avec note Google
 * Design discret cohérent V4
 */

import { Star } from "lucide-react";

export function TrustBadgeMinimal() {
  return (
    <div className="border-y py-4" style={{ background: "var(--color-bg)", borderColor: "var(--color-border)" }}>
      <div className="container">
        <a
          href="https://www.google.com/maps/place/Moverz/@46.881154,3.0417412,6z/data=!3m1!4b1!4m6!3m5!1s0x65777ea3ad50b1c1:0xdcc12b2e04254f4!8m2!3d46.881154!4d3.0417412!16s%2Fg%2F11ylmz4jk6?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 transition-opacity hover:opacity-70"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold" style={{ color: "var(--color-text)" }}>4,5+</span>
            <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>sur Google</span>
          </div>
        </a>
      </div>
    </div>
  );
}
