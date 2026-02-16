import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import PourquoiMoverzContent from "./PourquoiMoverzContent";

export const metadata: Metadata = getFullMetadata(
  'pourquoi-moverz',
  "Pourquoi Moverz ? Le comparateur qui vérifie",
  "Moverz vérifie chaque déménageur (Creditsafe) et standardise votre dossier. Devis comparables, sans harcèlement. Gratuit."
);

export default function PourquoiMoverzPage() {
  return <PourquoiMoverzContent />;
}
