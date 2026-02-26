import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import PartenairesHero from "@/components/partenaires/PartenairesHero";
import PartenairesHowItWorks from "@/components/partenaires/PartenairesHowItWorks";
import PartenairesWhyYou from "@/components/partenaires/PartenairesWhyYou";
import PartenairesExpectations from "@/components/partenaires/PartenairesExpectations";
import PartenairesWhatClientReceives from "@/components/partenaires/PartenairesWhatClientReceives";
import PartenairesIfChosen from "@/components/partenaires/PartenairesIfChosen";
import PartenairesCommission from "@/components/partenaires/PartenairesCommission";
import PartenairesFAQ from "@/components/partenaires/PartenairesFAQ";
import PartenairesFinalCTA from "@/components/partenaires/PartenairesFinalCTA";
import { FAQSchema } from "@/components/schema/FAQSchema";

export const metadata: Metadata = getFullMetadata(
  "partenaires",
  "Devenir partenaire Moverz : dossiers qualifiés",
  "Rejoignez le réseau Moverz : dossiers complets et standardisés. Paiement au succès, pas d'abonnement."
);

const FAQ_DATA = [
  {
    question: "Puis-je refuser un dossier ?",
    answer: "Oui. Un « non » rapide vaut mieux qu'un devis tardif."
  },
  {
    question: "Puis-je demander des précisions ?",
    answer: "Oui, et c'est recommandé si un point impacte le prix ou la faisabilité."
  },
  {
    question: "Comment Moverz vérifie-t-elle ses partenaires ?",
    answer: "Chaque déménageur est évalué selon 3 analyses de risque notées /100 : expérience client (avis Google), risque financier (Creditsafe + Pappers + analyse interne), risque juridique (décisions de justice). Consultez nos <a href='/verifications-partenaires/' class='text-v4-accent hover:underline'>critères de vérification détaillés</a>."
  },
  {
    question: "Quels sont les critères pour rejoindre le réseau ?",
    answer: "Licence de transport valide, assurance RC Pro (≥ 1,5 M€), SIREN actif, absence d'alertes financières ou juridiques, et engagement à respecter les délais de réponse (5-7 jours). Voir notre <a href='/verifications-partenaires/' class='text-v4-accent hover:underline'>page vérifications</a>."
  },
  {
    question: "Est-ce que je vois les autres devis ?",
    answer: "Non, pour garder une mise en concurrence saine et éviter les guerres de prix."
  },
  {
    question: "Le client me contacte directement ?",
    answer: "Non. Moverz centralise tant que le client n'a pas choisi."
  },
  {
    question: "Quand suis-je mis en relation ?",
    answer: "Uniquement si le client vous choisit."
  },
  {
    question: "Quel est le profil des clients Moverz ?",
    answer: "Particuliers et entreprises qui privilégient la transparence et la comparaison claire. Dossiers complets (volume, accès, contraintes), ce qui réduit les aller-retours et les visites inutiles."
  },
  {
    question: "Combien de concurrents sur chaque dossier ?",
    answer: "Jusqu'à 5 déménageurs maximum par dossier. Vous êtes en concurrence, mais sur une base équitable : tous reçoivent le même dossier standardisé."
  },
  {
    question: "Y a-t-il un engagement ?",
    answer: "Non : pas d'abonnement, pas de volume minimum, vous répondez quand vous le souhaitez."
  },
  {
    question: "Comment calculer rapidement un volume pour un devis ?",
    answer: "Notre <a href='/blog/estimer-volume-demenagement-guide-complet/' class='text-v4-accent hover:underline'>guide d'estimation de volume</a> fournit les moyennes par type de logement (T1: 15-20m³, T2: 25-35m³, T3: 40-50m³, etc.)."
  },
  {
    question: "Comment sont gérées les données (RGPD) ?",
    answer: "Les infos sont transmises uniquement aux entreprises consultées sur le dossier, dans le cadre de l'estimation et de la mise en relation si choix du client."
  }
];

export default function PartenairesPage() {
  return (
    <main className="min-h-screen bg-white">
      <FAQSchema faqs={FAQ_DATA} />
      <PartenairesHero />
      <PartenairesHowItWorks />
      <PartenairesWhyYou />
      <PartenairesExpectations />
      <PartenairesWhatClientReceives />
      <PartenairesIfChosen />
      <PartenairesCommission />
      <PartenairesFAQ faqs={FAQ_DATA} />
      <PartenairesFinalCTA />
    </main>
  );
}
