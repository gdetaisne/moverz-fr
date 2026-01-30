import type { Metadata } from "next";
import { generateMetadata as baseGenerateMetadata } from "@/lib/metadata";
import VolumeCalculator from "@/components/calculator/VolumeCalculator";
import WidgetActionSection from "@/components/WidgetActionSection";

export const metadata: Metadata = baseGenerateMetadata(
  "calculateur-volume-demenagement",
  "Calculateur de Volume de Déménagement Gratuit | Estimez vos m³",
  "Calculez gratuitement le volume de votre déménagement en m³. Sélectionnez votre logement, ajoutez vos meubles, obtenez une estimation précise instantanée. Outil gratuit et sans inscription."
);

export default function CalculateurVolumePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Calculator */}
      <VolumeCalculator />

      {/* CTA Final */}
      <WidgetActionSection
        title="Obtenez des devis basés sur ce volume"
        subtitle="L'IA Moverz analysera vos photos pour affiner l'estimation et vous recevrez 5+ devis comparés de pros contrôlés."
        source="moverz.fr"
        from="/calculateur-volume-demenagement/"
      />
    </main>
  );
}

