import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
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
  "Comment ça marche ? Photos, IA & Devis Comparables | Moverz",
  "Découvrez comment l'IA Moverz analyse vos photos pour estimer la volumétrie de votre déménagement et préparer 3 à 5 devis vraiment comparables, en quelques minutes et sans spam."
);

export default function CommentCaMarchePage() {
  return (
    <main className="bg-white min-h-screen">
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
        title="Prêt à envoyer vos photos ?"
        subtitle="Démarrez en 3 minutes. L'IA analyse vos photos et prépare des devis comparables, sans spam."
        source="moverz.fr"
        from="/comment-ca-marche/"
      />
    </main>
  );
}
