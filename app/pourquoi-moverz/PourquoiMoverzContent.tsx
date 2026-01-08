"use client";

import PourquoiHero from "@/components/pourquoi-moverz/PourquoiHero";
import MarketRisks from "@/components/pourquoi-moverz/MarketRisks";
import CreditsafeScoring from "@/components/pourquoi-moverz/CreditsafeScoring";
import ComparatorsProblems from "@/components/pourquoi-moverz/ComparatorsProblems";
import MoverzVsOthers from "@/components/pourquoi-moverz/MoverzVsOthers";
import FinalCTA from "@/components/FinalCTA";

export default function PourquoiMoverzContent() {
  return (
    <main className="bg-white min-h-screen">
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
      <section className="py-12 bg-[#F8F9FA] border-t border-[#E3E5E8]">
        <div className="container max-w-3xl mx-auto px-4 text-center">
            <p className="text-[#1E293B]/70">
              <span className="font-semibold text-[#0F172A]">Moverz</span> est une marque exploitée par{" "}
              <span className="font-semibold text-[#0F172A]">GSLV EURL</span> (SIREN 914499876, RCS La Rochelle).
            </p>
          <p className="text-sm text-[#1E293B]/50 mt-2">
              Siège social : 5 Rue Jean Coyttar, 17290 Thairé, France
            </p>
        </div>
      </section>

      {/* CTA Final */}
      <FinalCTA source="pourquoi-moverz" />
    </main>
  );
}
