import type { Metadata } from "next";
import { generateMetadata as baseGenerateMetadata } from "@/lib/metadata";
import ComparisonTable from "@/components/comparison/ComparisonTable";
import ComparisonHero from "@/components/comparison/ComparisonHero";
import WidgetActionSection from "@/components/WidgetActionSection";

export const metadata: Metadata = baseGenerateMetadata(
  "comparateur-demenageurs",
  "Comparateur de Déménageurs : Moverz vs Autres Solutions | Guide 2025",
  "Recevez 5+ devis comparés sous 5 à 7 jours. Dossier anonyme, 0 harcèlement. Déménageurs contrôlés et assurés. 100% gratuit."
);

export default function ComparateurDemenageursPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <ComparisonHero />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* CTA Final */}
      <WidgetActionSection
        title="Prêt à essayer Moverz ?"
        subtitle="Créez votre dossier en 3 minutes. L'IA analyse vos photos et vous obtenez 3 devis minimum comparables de pros contrôlés."
        source="moverz.fr"
        from="/comparateur-demenageurs/"
      />
    </main>
  );
}

