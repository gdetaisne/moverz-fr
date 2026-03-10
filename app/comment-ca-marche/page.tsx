import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import { HowToSchema } from "@/components/schema/HowToSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import HowItWorksHero from "@/components/comment-ca-marche/HowItWorksHero";
import HowItWorksSteps from "@/components/comment-ca-marche/HowItWorksSteps";
import HowItWorksIA from "@/components/comment-ca-marche/HowItWorksIA";
import HowItWorksDevis from "@/components/comment-ca-marche/HowItWorksDevis";
import HowItWorksNoSurprises from "@/components/comment-ca-marche/HowItWorksNoSurprises";
import HowItWorksTransparency from "@/components/comment-ca-marche/HowItWorksTransparency";
import HowItWorksWhyDifferent from "@/components/comment-ca-marche/HowItWorksWhyDifferent";
import HowItWorksFAQ from "@/components/comment-ca-marche/HowItWorksFAQ";
import { FinalCTAV4 } from "@/components/sections/FinalCTAV4";

export const metadata: Metadata = getFullMetadata(
  'comment-ca-marche',
  "Comment ça marche ? Comparer des devis de déménagement en 3 étapes",
  "En 3 minutes, remplissez un dossier guidé et recevez 3 à 5 devis comparables de déménageurs vérifiés sous 5 jours. Dossier anonyme, zéro appel non sollicité, 100% gratuit."
);

export default function CommentCaMarchePage() {
  const faqItems = [
    { question: "Combien ça coûte ?", answer: "Le service Moverz est 100% gratuit pour les particuliers. Vous ne payez que le déménageur que vous choisissez." },
    { question: "Comment choisissez-vous les déménageurs ?", answer: "Nous sélectionnons uniquement des déménageurs disponibles à vos dates exactes, vérifiés financièrement et juridiquement (Creditsafe + Pappers), avec expérience sur votre trajet." },
    { question: "Vais-je recevoir des appels de spam ?", answer: "Non. Votre dossier est 100% anonyme. Vous recevez des devis écrits et comparables, puis vous décidez si et qui vous souhaitez contacter." },
    { question: "Combien de devis vais-je recevoir ?", answer: "Nous nous engageons à vous présenter 3 à 5 devis comparables sous 5 jours ouvrés." },
    { question: "Mes données sont-elles protégées ?", answer: "Oui. Nous appliquons le RGPD et ne transmettons votre dossier qu'aux déménageurs sollicités pour établir un devis, dans le cadre de votre demande." },
  ];

  return (
    <main className="bg-white min-h-screen">
      <WebPageSchema
        name="Comment ça marche ? Comparer des devis de déménagement en 3 étapes"
        description="En 3 minutes, remplissez un dossier guidé et recevez 3 à 5 devis comparables de déménageurs vérifiés sous 5 jours. Dossier anonyme, zéro appel non sollicité, 100% gratuit."
        url="https://moverz.fr/comment-ca-marche/"
        about="Comparateur de déménagement"
      />
      <FAQSchema faqs={faqItems} />
      {/* HowTo schema — rich snippet Google "étapes" */}
      <HowToSchema
        title="Comment comparer des devis de déménagement avec Moverz"
        description="Obtenez jusqu'à 5 devis comparables de déménageurs vérifiés en 3 étapes simples. 100% gratuit, sans démarchage."
        totalTime="PT3M"
        estimatedCost={{ value: "0", currency: "EUR" }}
        steps={[
          {
            name: "Décrivez votre déménagement",
            text: "Renseignez votre ville de départ et d'arrivée, la date souhaitée et le type de logement (studio, T2, T3, maison…). 30 secondes suffisent.",
            url: "https://moverz.fr/comment-ca-marche/",
          },
          {
            name: "Complétez le dossier",
            text: "Ajoutez les détails d'accès (étage, ascenseur, distance parking-entrée), une description précise de votre logement (pièces, meubles volumineux), et les prestations souhaitées (emballage, monte-meuble). Chaque déménageur reçoit les mêmes informations complètes pour établir un devis fiable.",
          },
          {
            name: "Recevez et comparez vos devis",
            text: "Recevez 3 à 5 devis comparables sous 5 à 7 jours. Tous les déménageurs ont reçu le même dossier : vous comparez sur une base claire, sans surprise. Vous choisissez librement, sans pression.",
          },
        ]}
      />
      {/* Hero premium */}
      <HowItWorksHero />

      {/* No surprises intro */}
      <HowItWorksNoSurprises />

      {/* Steps with mockups */}
      <HowItWorksSteps />

      {/* IA Analysis section */}
      <HowItWorksIA />

      {/* Devis comparison section */}
      <HowItWorksDevis />

      {/* Transparency / choose */}
      <HowItWorksTransparency />

      {/* Why different */}
      <HowItWorksWhyDifferent />

      {/* FAQ */}
      <HowItWorksFAQ />

      {/* Widget CTA final */}
      <FinalCTAV4 />
    </main>
  );
}
