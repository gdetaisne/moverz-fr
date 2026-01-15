import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, getCityBySlug } from "@/lib/cities";
import { getFullMetadata } from "@/lib/canonical-helper";
import { CorridorPage } from "@/components/templates/CorridorPage";
import {
  estimateRoadDistanceKm,
  formatDistance,
  formatDurationFromKm,
  estimatePriceRanges,
} from "@/lib/corridors";

type PageProps = {
  params: {
    from: string;
    to: string;
  };
};

export const dynamicParams = true;

export function generateMetadata({ params }: PageProps): Metadata {
  const from = getCityBySlug(params.from);
  const to = getCityBySlug(params.to);

  if (!from || !to || from.slug === to.slug) {
    return {};
  }

  const path = `${from.slug}-vers-${to.slug}`;
  const title = `Déménagement ${from.nameCapitalized} → ${to.nameCapitalized} : Devis & Prix 2025 | Moverz`;
  const description = `Déménagement ${from.nameCapitalized} vers ${to.nameCapitalized} : devis gratuits, prix indicatifs, conseils d'experts. 5+ déménageurs contrôlés · 0€ · Sans démarchage`;

  return getFullMetadata(path, title, description);
}

export default function CorridorAutoPage({ params }: PageProps) {
  const from = getCityBySlug(params.from);
  const to = getCityBySlug(params.to);

  if (!from || !to || from.slug === to.slug) {
    notFound();
    return null;
  }

  const km = estimateRoadDistanceKm(from.slug, to.slug) ?? 300;
  const distance = formatDistance(km);
  const tempsMoyen = formatDurationFromKm(km);
  const prixIndicatifs = estimatePriceRanges(km);

  const periodeConseillee = "Avr-Sept";
  const accesArrivee = `${to.nameCapitalized} a des contraintes d'accès variables selon le quartier (stationnement, rues étroites, zones piétonnes, immeubles sans ascenseur). Nos partenaires anticipent l'autorisation de stationnement, le portage et le matériel adapté (protection, diable, monte-meubles si besoin).`;
  const conseils = [
    "Anticipez votre date (fin de mois et été = plus de demande).",
    "Faites estimer votre volume précisément pour éviter les suppléments le jour J.",
    "Préparez des photos des accès (escaliers, ascenseur, rue) pour un devis juste.",
    "Demandez l'autorisation de stationnement si nécessaire (mairie / syndic).",
  ];

  const faq = [
    {
      question: `Quels sont les délais pour un déménagement ${from.nameCapitalized} → ${to.nameCapitalized} ?`,
      answer:
        "En moyenne 7 à 14 jours selon la période. En semaine et hors haute saison, certains déménageurs peuvent intervenir plus rapidement. Le plus fiable est de comparer plusieurs disponibilités.",
    },
    {
      question: `Quels sont les tarifs pour ${from.nameCapitalized} → ${to.nameCapitalized} ?`,
      answer:
        "Les tarifs dépendent du volume (m³), des accès (étage, ascenseur, portage), de la période et de la formule (éco/standard/confort). Les fourchettes ci-dessus donnent un ordre d'idée, puis le devis final est personnalisé.",
    },
    {
      question: "Comment éviter les mauvaises surprises le jour J ?",
      answer:
        "La clé : un volume précis + des accès bien décrits. Avec Moverz, l'IA aide à estimer le volume et votre dossier est partagé à plusieurs déménageurs sur la même base, pour des devis comparables.",
    },
  ];

  return (
    <CorridorPage
      originCitySlug={from.slug}
      originCityName={from.nameCapitalized}
      destination={to.nameCapitalized}
      destinationSlug={to.slug}
      distance={distance}
      tempsMoyen={tempsMoyen}
      periodeConseillee={periodeConseillee}
      prixIndicatifs={prixIndicatifs}
      accesArrivee={accesArrivee}
      conseils={conseils}
      faq={faq}
    />
  );
}


