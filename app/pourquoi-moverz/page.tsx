import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import PourquoiMoverzContent from "./PourquoiMoverzContent";

export const metadata: Metadata = getFullMetadata(
  'pourquoi-moverz',
  "Pourquoi Moverz ? Comparateur de Déménagement Fiable | Moverz",
  "Découvrez pourquoi Moverz est différent : estimation par photos WhatsApp, dossier standardisé, vérification financière des entreprises (Creditsafe). Le seul comparateur qui compare aussi la fiabilité."
);

export default function PourquoiMoverzPage() {
  return <PourquoiMoverzContent />;
}
