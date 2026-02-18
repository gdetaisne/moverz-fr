import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import PourquoiMoverzContent from "./PourquoiMoverzContent";

export const metadata: Metadata = getFullMetadata(
  'pourquoi-moverz',
  "Pourquoi Moverz ? Le comparateur qui vérifie",
  "Moverz évalue chaque déménageur selon 3 analyses de risque notées /100 (avis Google, financier, juridique) et standardise votre dossier. Alertes = exclusion automatique. Devis comparables, sans harcèlement. Gratuit."
);

export default function PourquoiMoverzPage() {
  return <PourquoiMoverzContent />;
}
