"use client";
import { buildTunnelUrl } from "@/lib/tunnel-url";

/**
 * V4 RADICAL — Final CTA
 * Minimal. Titre court + bouton noir.
 */

import { ArrowRight } from "lucide-react";
import { FadeUpSection } from "@/components/motion";

export function FinalCTAV4() {
  return (
    <FadeUpSection
      className="py-20 md:py-28"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="container max-w-2xl text-center space-y-6">
        <h2
          className="font-heading text-[clamp(32px,5vw,52px)] font-bold tracking-[-0.02em] leading-[1.1]"
          style={{ color: "var(--color-text)" }}
        >
          <span style={{ color: "var(--color-accent)" }}>3</span> minutes. <span style={{ color: "var(--color-accent)" }}>3</span> devis.
          <br />
          <span style={{ color: "var(--color-accent)" }}>1</span> seule décision.
        </h2>

        <a
          href={buildTunnelUrl({ from: "final-cta-v4", devisRange: "3" })}
          className="group inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{ background: "var(--color-text)" }}
        >
          Obtenir mes devis
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>

        <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
          Gratuit · Sans engagement · Sans appels
        </p>
      </div>
    </FadeUpSection>
  );
}
