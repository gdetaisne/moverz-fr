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
  "Comment ça marche ? Dossier guidé & Devis Comparables",
  "Comparez des devis comparables sous 5 à 7 jours. Dossier anonyme, 0 harcèlement. Déménageurs contrôlés et assurés. 100% gratuit."
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
        title="Prêt à comparer vos devis ?"
        subtitle="Démarrez en 3 minutes. On standardise votre dossier pour obtenir des devis comparables, sans spam."
        source="moverz.fr"
        from="/comment-ca-marche/"
      />
    </main>
  );
}
