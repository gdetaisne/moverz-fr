import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";

export const metadata: Metadata = getFullMetadata(
  "partenaires",
  "Devenir partenaire Moverz : recevez des dossiers qualifiés",
  "Rejoignez le réseau Moverz et recevez des dossiers complets (photos + infos) pour envoyer vos devis. Paiement uniquement au succès, pas d'abonnement."
);

export default function PartenairesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
