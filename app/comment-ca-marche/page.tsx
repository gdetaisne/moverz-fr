import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import { HowToSchema } from "@/components/schema/HowToSchema";
import HowItWorksHero from "@/components/comment-ca-marche/HowItWorksHero";
import HowItWorksSteps from "@/components/comment-ca-marche/HowItWorksSteps";
import HowItWorksIA from "@/components/comment-ca-marche/HowItWorksIA";
import HowItWorksDevis from "@/components/comment-ca-marche/HowItWorksDevis";
import HowItWorksNoSurprises from "@/components/comment-ca-marche/HowItWorksNoSurprises";
import HowItWorksTransparency from "@/components/comment-ca-marche/HowItWorksTransparency";
import HowItWorksWhyDifferent from "@/components/comment-ca-marche/HowItWorksWhyDifferent";
import HowItWorksFAQ from "@/components/comment-ca-marche/HowItWorksFAQ";
import WidgetActionSection from "@/components/WidgetActionSection";

export const metadata: Metadata = getFullMetadata(
  'comment-ca-marche',
  "Comment ça marche ? Devis comparables en 3 étapes",
  "Décrivez votre déménagement, l'IA calibre le volume, recevez des devis comparables sous 5–7j. Anonyme, gratuit, sans démarchage."
);

export default function CommentCaMarchePage() {
  return (
    <main className="bg-white min-h-screen">
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
            name: "Complétez le dossier standardisé",
            text: "Ajoutez les détails d'accès (étage, ascenseur, distance parking-entrée), les options (emballage, monte-meuble) et éventuellement des photos. L'IA estime le volume pour que chaque devis soit basé sur les mêmes données.",
          },
          {
            name: "Recevez et comparez vos devis",
            text: "Recevez jusqu'à 5 devis comparables sous 5 jours. Tous les déménageurs ont reçu le même dossier : vous comparez sur une base claire, sans surprise. Vous choisissez librement, sans pression.",
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
      <WidgetActionSection
        title="Prêt à comparer vos devis ?"
        subtitle="Démarrez en 3 minutes. On standardise votre dossier pour obtenir des devis comparables, sans spam."
        source="moverz.fr"
        from="/comment-ca-marche/"
      />
    </main>
  );
}
