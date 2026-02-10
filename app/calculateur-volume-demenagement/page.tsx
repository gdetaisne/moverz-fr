import type { Metadata } from "next";
import { generateMetadata as baseGenerateMetadata } from "@/lib/metadata";
import VolumeCalculator from "@/components/calculator/VolumeCalculator";
import WidgetActionSection from "@/components/WidgetActionSection";
import { WebApplicationSchema } from "@/components/schema/WebApplicationSchema";
import { getAverageRating, getTotalReviews } from "@/lib/reviews";

export const metadata: Metadata = baseGenerateMetadata(
  "calculateur-volume-demenagement",
  "Calculateur de Volume de Déménagement Gratuit | Estimez vos m³",
  "Calculez gratuitement le volume de votre déménagement en m³. Sélectionnez votre logement, ajoutez vos meubles, obtenez une estimation précise instantanée. Outil gratuit et sans inscription."
);

export default function CalculateurVolumePage() {
  return (
    <main className="bg-white min-h-screen">
      <WebApplicationSchema
        name="Calculateur de Volume de Déménagement"
        description="Calculez gratuitement le volume de votre déménagement en m³. Sélectionnez votre logement, ajoutez vos meubles, obtenez une estimation précise instantanée par IA."
        url="https://moverz.fr/calculateur-volume-demenagement/"
        applicationCategory="UtilitiesApplication"
        offers={{
          price: "0",
          priceCurrency: "EUR",
        }}
        aggregateRating={{
          ratingValue: getAverageRating(),
          reviewCount: getTotalReviews(),
        }}
      />

      {/* Calculator */}
      <VolumeCalculator />

      {/* CTA Final */}
      <WidgetActionSection
        title="Obtenez des devis basés sur ce volume"
        subtitle="On peut affiner l’estimation à partir de votre dossier, puis vous recevez 5+ devis comparés de pros contrôlés."
        source="moverz.fr"
        from="/calculateur-volume-demenagement/"
      />
    </main>
  );
}

