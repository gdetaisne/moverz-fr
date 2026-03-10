import type { Metadata } from "next";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import { LabelMoverzHero } from "@/components/label-moverz/LabelMoverzHero";
import { LabelScoresShowcase } from "@/components/label-moverz/LabelScoresShowcase";
import { LabelComparison } from "@/components/label-moverz/LabelComparison";
import { LabelStats } from "@/components/label-moverz/LabelStats";
import { LabelCTA } from "@/components/label-moverz/LabelCTA";
import { ScoringChecker } from "@/components/label-moverz/ScoringChecker";

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
    { question: "Qu'est-ce que le Label Moverz ?", answer: "Le Label Moverz est une certification automatique basée sur un score de 0 à 100 calculé à partir de 3 dimensions : (1) Fiabilité légale 25% (santé financière + casier juridique via Pappers), (2) Satisfaction clients 40% (note Google + analyse IA de tous les avis des 12 derniers mois), (3) Alertes 35% (détection de 6 catégories de problèmes récurrents : casses, vols, retards, prix modifiés…). Score < 50/100 = exclusion automatique." },
    { question: "Comment est calculé le score ?", answer: "Le score Moverz agrège 5 sous-scores indépendants : Score Financier 12,5% (bilans, trésorerie via Pappers), Score Juridique 12,5% (BODACC, décisions de justice), Score Google 20% (note pondérée par le volume), Score Réputation 20% (ratio avis positifs/négatifs authentiques sur 12 mois), Score Vigilance 35% (analyse IA de 6 catégories d'alertes). Le tout est recalculé automatiquement tous les 7 jours ou à chaque nouveau bilan." },
    { question: "Quelle est la différence avec les certifications classiques (NF Service, Qualipro) ?", answer: "Le Label Moverz vérifie la santé financière en continu via Pappers (bilans, trésorerie, dettes) — les autres certifications ne le font pas. Il analyse automatiquement tous les avis Google des 12 derniers mois avec IA pour détecter les problèmes récurrents. Le monitoring est continu (7 jours) vs annuel pour les autres. L'exclusion est automatique en cas de score < 50/100. Et le label est gratuit pour les déménageurs." },
    { question: "Avec quelle fréquence les déménageurs sont-ils vérifiés ?", answer: "Le scoring est recalculé automatiquement tous les 7 jours (nouveaux avis Google via SearchAPI.io) et tous les 30 jours (nouvelles données financières Pappers). En cas de score passant sous 50/100 ou d'alerte critique détectée, l'exclusion est immédiate et automatique. Aucun déménageur Label Moverz n'a fait faillite depuis janvier 2026." },
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
      <ScoringChecker />
      <LabelStats />
      <LabelComparison />
      <LabelCTA />
    </>
  );
}
