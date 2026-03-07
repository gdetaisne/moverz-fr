import type { Metadata } from "next";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import { LabelMoverzHero } from "@/components/label-moverz/LabelMoverzHero";
import { LabelScoresShowcase } from "@/components/label-moverz/LabelScoresShowcase";
import { LabelComparison } from "@/components/label-moverz/LabelComparison";
import { LabelStats } from "@/components/label-moverz/LabelStats";
import { LabelCTA } from "@/components/label-moverz/LabelCTA";

export const metadata: Metadata = {
  title: "Label Moverz : 3 analyses /100 · 0 faillite",
  description: "Label Moverz vérifie automatiquement 3 risques /100 (financier Creditsafe, juridique Pappers, avis Google). Monitoring continu, 0 faillite depuis janvier 2026.",
  alternates: {
    canonical: "https://moverz.fr/label-moverz/",
  },
  openGraph: {
    title: "Label Moverz : 3 analyses de risque /100",
    description: "Le seul label qui vérifie la santé financière ET juridique des déménageurs. 0 faillite depuis janvier 2026.",
    type: "website",
    url: "https://moverz.fr/label-moverz/",
  },
};

export default function LabelMoverzPage() {
  const faqItems = [
    { question: "Qu'est-ce que le Label Moverz ?", answer: "Le Label Moverz est une certification automatique attribuée aux déménageurs qui passent 3 analyses de risque notées /100 : (1) Risque expérience client via avis Google, (2) Risque financier via Creditsafe et Pappers, (3) Risque juridique via Pappers Décisions. Les déménageurs avec alertes financières ou juridiques sont exclus automatiquement." },
    { question: "Combien de déménageurs sont exclus par le Label Moverz ?", answer: "18% des déménageurs analysés sont exclus automatiquement car ils présentent des alertes financières (risque de faillite) ou juridiques (litiges, sanctions). Aucun déménageur Label Moverz n'a fait faillite depuis janvier 2026." },
    { question: "Quelle est la différence avec les certifications classiques (NF Service, Qualipro) ?", answer: "Le Label Moverz vérifie la solvabilité financière (Creditsafe + Pappers + ratio cash/dettes) — les autres certifications ne le font pas. Le monitoring est continu (toutes les 48-72h) vs annuel pour les autres. L'exclusion est automatique en cas d'alerte, pas une simple note. Et le label est gratuit pour les déménageurs." },
    { question: "Avec quelle fréquence les déménageurs sont-ils vérifiés ?", answer: "Chaque déménageur est analysé automatiquement toutes les 48 à 72 heures. En cas d'alerte financière ou juridique détectée, l'exclusion est immédiate et automatique." },
  ];

  return (
    <>
      <WebPageSchema
        name="Label Moverz : 3 analyses de risque /100 · 0 faillite"
        description="Label Moverz vérifie automatiquement 3 risques /100 (financier Creditsafe, juridique Pappers, avis Google). Monitoring continu, 0 faillite depuis janvier 2026."
        url="https://moverz.fr/label-moverz/"
        about="Certification déménageurs"
      />
      <FAQSchema faqs={faqItems} />
      <LabelMoverzHero />
      <LabelScoresShowcase />
      <LabelStats />
      <LabelComparison />
      <LabelCTA />
    </>
  );
}
