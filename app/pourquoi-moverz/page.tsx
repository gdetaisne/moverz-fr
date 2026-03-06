import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import PourquoiMoverzContent from "./PourquoiMoverzContent";

export const metadata: Metadata = getFullMetadata(
  'pourquoi-moverz',
  "Pourquoi Moverz ? Comparateur de déménagement vérifiés, zéro harcèlement",
  "Moverz vérifie chaque déménageur (solidité financière, juridique, avis Google) avant de vous présenter des devis comparables. Dossier anonyme, zéro appel non sollicité. Gratuit."
);

export default function PourquoiMoverzPage() {
  return <PourquoiMoverzContent />;
}
