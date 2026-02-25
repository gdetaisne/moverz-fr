import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import PourquoiMoverzContent from "./PourquoiMoverzContent";

export const metadata: Metadata = getFullMetadata(
  'pourquoi-moverz',
  "Pourquoi Moverz ? Zéro harcèlement, pros vérifiés",
  "Dossier 100% anonyme, vous choisissez qui contacter. 3 analyses de risque /100 (avis Google, financier Creditsafe, juridique Pappers). Zéro harcèlement garanti. Gratuit."
);

export default function PourquoiMoverzPage() {
  return <PourquoiMoverzContent />;
}
