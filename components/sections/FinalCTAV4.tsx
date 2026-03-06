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
      style={{ background: "#0B0F14" }}
    >
      <div className="container max-w-2xl text-center space-y-6">
        <h2
          className="font-heading text-[clamp(32px,5vw,52px)] font-bold tracking-[-0.02em] leading-[1.1] text-white"
        >
          <span style={{ color: "#0EA5A6" }}>3</span> minutes. <span style={{ color: "#0EA5A6" }}>3</span> devis.
          <br />
          <span style={{ color: "#0EA5A6" }}>1</span> seule décision.
        </h2>

        <a
          href={buildTunnelUrl({ from: "final-cta-v4", devisRange: "3" })}
          className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
          style={{ background: "#F59E0B", boxShadow: "0 4px 20px rgba(245,158,11,0.3)" }}
        >
          Obtenir mes devis
        </a>

        <p className="text-xs text-white/30">
          Gratuit · Sans engagement · Sans appels
        </p>
      </div>
    </FadeUpSection>
  );
}
