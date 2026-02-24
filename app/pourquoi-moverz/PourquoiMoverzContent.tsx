"use client";

import PourquoiHero from "@/components/pourquoi-moverz/PourquoiHero";
import MarketRisks from "@/components/pourquoi-moverz/MarketRisks";
import CreditsafeScoring from "@/components/pourquoi-moverz/CreditsafeScoring";
import ComparatorsProblems from "@/components/pourquoi-moverz/ComparatorsProblems";
import MoverzVsOthers from "@/components/pourquoi-moverz/MoverzVsOthers";
import { FinalCTAV4 } from "@/components/sections/FinalCTAV4";

export default function PourquoiMoverzContent() {
  return (
    <main className="min-h-screen" style={{ background: "#FFFFFF" }}>
      {/* Hero with dark premium bg + 3 cards + WhatsApp CTA */}
      <PourquoiHero />

      {/* Section 1: Market risks with mockup dashboard */}
      <MarketRisks />

      {/* Section 2: Creditsafe scoring with mockup app */}
      <CreditsafeScoring />

      {/* Section 3: Comparators problems with mockup */}
      <ComparatorsProblems />

      {/* Section 4: Moverz vs Others with mockup */}
      <MoverzVsOthers />

      {/* Section 5: Legal info */}
      <section className="relative py-12 border-t border-[var(--color-border)] overflow-hidden" style={{ background: "#FAFBFC" }}>
        {/* Grain texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
          }}
        />
        <div className="container relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-[var(--color-text-secondary)]/70">
            <span className="font-semibold text-[var(--color-text)]">Moverz</span> est une marque exploitée par{" "}
            <span className="font-semibold text-[var(--color-text)]">GSLV EURL</span> (SIREN 914499876, RCS La Rochelle).
          </p>
          <p className="text-sm text-[var(--color-text-secondary)]/50 mt-2">
            Siège social : 5 Rue Jean Coyttar, 17290 Thairé, France
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <FinalCTAV4 />
    </main>
  );
}
