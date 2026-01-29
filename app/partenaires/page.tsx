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
  "Devenir partenaire Moverz : recevez des dossiers qualifiés",
  "Rejoignez le réseau Moverz et recevez des dossiers complets (photos + infos) pour envoyer vos devis. Paiement uniquement au succès, pas d'abonnement."
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
    question: "Y a-t-il un engagement ?",
    answer: "Non : pas d'abonnement, pas de volume minimum, vous répondez quand vous le souhaitez."
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
