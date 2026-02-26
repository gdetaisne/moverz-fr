import type { Metadata } from "next";
import { LabelMoverzHero } from "@/components/label-moverz/LabelMoverzHero";
import { LabelScoresShowcase } from "@/components/label-moverz/LabelScoresShowcase";
import { LabelComparison } from "@/components/label-moverz/LabelComparison";
import { LabelStats } from "@/components/label-moverz/LabelStats";
import { LabelCTA } from "@/components/label-moverz/LabelCTA";

export const metadata: Metadata = {
  title: "Label Moverz : 3 analyses de risque /100 pour choisir sans stress",
  description: "Label Moverz vérifie automatiquement 3 risques /100 (financier Creditsafe, juridique Pappers, avis Google). Monitoring continu, 0 faillite depuis janvier 2026.",
  openGraph: {
    title: "Label Moverz : 3 analyses de risque /100",
    description: "Le seul label qui vérifie la santé financière ET juridique des déménageurs. 0 faillite depuis janvier 2026.",
    type: "website",
  },
};

export default function LabelMoverzPage() {
  return (
    <>
      <LabelMoverzHero />
      <LabelScoresShowcase />
      <LabelStats />
      <LabelComparison />
      <LabelCTA />
    </>
  );
}
