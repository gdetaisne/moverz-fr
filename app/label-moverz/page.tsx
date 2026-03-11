import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import { LabelMoverzHero } from "@/components/label-moverz/LabelMoverzHero";
import { LabelScoringExplainer } from "@/components/label-moverz/LabelScoringExplainer";
import { LabelComparison } from "@/components/label-moverz/LabelComparison";
import { LabelStats } from "@/components/label-moverz/LabelStats";
import { LabelCTA } from "@/components/label-moverz/LabelCTA";
import { ScoringChecker } from "@/components/label-moverz/ScoringChecker";
import { RecentScores } from "@/components/label-moverz/RecentScores";

// La carte utilise Google Maps JS — chargée uniquement côté client
const MoverzMap = dynamic(
  () => import("@/components/label-moverz/MoverzMap").then((m) => ({ default: m.MoverzMapInner })),
  { ssr: false },
);

export const metadata: Metadata = {
  title: "Label Moverz : Score /100 (3 dimensions) · 0 faillite",
  description: "Vérifiez en 30 secondes si votre déménageur est fiable : score /100 automatique calculé sur la santé financière, le casier juridique et les avis clients des 12 derniers mois. 3 000+ déménageurs analysés, 0 faillite depuis janvier 2026.",
  keywords: [
    "vérifier déménageur fiable",
    "label déménagement certifié",
    "score déménageur",
    "déménageur sérieux France",
    "comment choisir déménageur",
    "arnaque déménagement",
    "déménageur certifié",
    "avis déménageur authentiques",
    "santé financière déménageur",
  ],
  alternates: {
    canonical: "https://moverz.fr/label-moverz/",
  },
  openGraph: {
    title: "Label Moverz : Vérifiez la fiabilité de votre déménageur en 30 secondes",
    description: "Score /100 automatique : santé financière, casier juridique, avis clients analysés par IA. 3 000+ déménageurs vérifiés. 0 faillite depuis janvier 2026.",
    type: "website",
    url: "https://moverz.fr/label-moverz/",
    images: [{ url: "https://moverz.fr/label-moverz/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Label Moverz : Vérifiez la fiabilité de votre déménageur",
    description: "Score /100 automatique · santé financière + avis clients + alertes. 3 000+ déménageurs vérifiés, 0 faillite.",
    images: ["https://moverz.fr/label-moverz/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function LabelMoverzPage() {
  const faqItems = [
    { question: "Qu'est-ce que le Label Moverz ?", answer: "Le Label Moverz est une certification automatique basée sur un score de 0 à 100 calculé à partir de 3 dimensions : (1) Fiabilité légale 25% (santé financière + casier juridique via Pappers), (2) Satisfaction clients 40% (note Google + analyse automatisée de tous les avis des 12 derniers mois), (3) Alertes 35% (détection de 6 catégories de problèmes récurrents : casses, vols, retards, prix modifiés…). Score < 50/100 = exclusion automatique." },
    { question: "Comment est calculé le score ?", answer: "Le score Moverz agrège 5 sous-scores indépendants : Score Financier 12,5% (bilans, trésorerie via Pappers), Score Juridique 12,5% (BODACC, décisions de justice), Score Google 20% (note pondérée par le volume), Score Réputation 20% (ratio avis positifs/négatifs authentiques sur 12 mois), Score Vigilance 35% (analyse automatisée de 6 catégories d'alertes). Le tout est recalculé automatiquement tous les 7 jours ou à chaque nouveau bilan." },
    { question: "Quelle est la différence avec les certifications classiques (NF Service, Qualipro) ?", answer: "Le Label Moverz vérifie la santé financière en continu via Pappers (bilans, trésorerie, dettes) — les autres certifications ne le font pas. Il analyse automatiquement tous les avis Google des 12 derniers mois pour détecter les problèmes récurrents. Le monitoring est continu (7 jours) vs annuel pour les autres. L'exclusion est automatique en cas de score < 50/100. Et le label est gratuit pour les déménageurs." },
    { question: "Avec quelle fréquence les déménageurs sont-ils vérifiés ?", answer: "Le scoring est recalculé automatiquement tous les 7 jours (nouveaux avis Google via SearchAPI.io) et tous les 30 jours (nouvelles données financières Pappers). En cas de score passant sous 50/100 ou d'alerte critique détectée, l'exclusion est immédiate et automatique. Aucun déménageur Label Moverz n'a fait faillite depuis janvier 2026." },
  ];

  return (
    <>
      <WebPageSchema
        name="Label Moverz : Score /100 (3 dimensions) · 0 faillite"
        description="Vérifiez en 30 secondes si votre déménageur est fiable : score /100 automatique calculé sur la santé financière, le casier juridique et les avis clients des 12 derniers mois."
        url="https://moverz.fr/label-moverz/"
        about="Certification déménageurs"
      />
      <FAQSchema faqs={faqItems} />

      {/* HowTo Schema — surfacé par Google et LLM pour "comment vérifier un déménageur" */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Comment vérifier si un déménageur est fiable",
            "description": "Vérifiez la fiabilité d'un déménageur en 30 secondes avec le Label Moverz : score /100 automatique calculé sur 3 dimensions indépendantes.",
            "totalTime": "PT30S",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "0" },
            "tool": [{ "@type": "HowToTool", "name": "Label Moverz — gratuit, sans inscription" }],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Recherchez votre déménageur",
                "text": "Saisissez le nom, la ville, le code postal ou le SIRET de votre déménageur dans le moteur de recherche Label Moverz.",
                "url": "https://moverz.fr/label-moverz/#scoring-checker-section",
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Consultez le score /100",
                "text": "Le score global /100 s'affiche immédiatement, calculé à partir de 5 sources de données : Pappers (finances), BODACC (judiciaire), Google Places (note), analyse IA des avis clients (réputation et alertes).",
                "url": "https://moverz.fr/label-moverz/#scoring-checker-section",
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Interprétez les 3 dimensions",
                "text": "Analysez les 3 dimensions détaillées : Fiabilité légale (25%), Satisfaction clients (40%), Alertes (35%). Un score sous 50/100 signifie que le déménageur est exclu du Label Moverz.",
                "url": "https://moverz.fr/label-moverz/#scoring-checker-section",
              },
            ],
          }),
        }}
      />

      {/* Service Schema — permet aux LLM de référencer Moverz comme service de vérification */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Label Moverz — Vérification déménageurs",
            "description": "Service gratuit de vérification de la fiabilité des déménageurs français. Score /100 automatique calculé sur la santé financière (Pappers), le casier juridique (BODACC) et les avis clients (Google + IA). Monitoring continu, 3 000+ déménageurs analysés.",
            "serviceType": "VerificationService",
            "provider": {
              "@type": "Organization",
              "name": "Moverz",
              "url": "https://moverz.fr",
              "logo": "https://moverz.fr/logo.png",
            },
            "areaServed": { "@type": "Country", "name": "France" },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
              "description": "Consultation gratuite, sans inscription, jusqu'à 3 déménageurs par mois.",
            },
            "url": "https://moverz.fr/label-moverz/",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://moverz.fr/label-moverz/",
              "serviceType": "En ligne",
            },
          }),
        }}
      />
      <LabelMoverzHero />
      <LabelScoringExplainer />
      <MoverzMap />
      <div id="scoring-checker-section">
        <ScoringChecker />
      </div>
      <RecentScores />
      <LabelStats />
      <LabelComparison />
      <LabelCTA />
    </>
  );
}
