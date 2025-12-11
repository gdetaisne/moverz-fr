import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";

export const metadata: Metadata = getFullMetadata(
  "pro",
  "Moverz Pro : Calculateur IA Volumétrie en Marque Blanche pour Déménageurs",
  "Intégrez l'IA Moverz sur votre site de déménagement. Vos clients calculent leur volume en 1 min, vous recevez des dossiers précis avec photos. Outil en marque blanche, API simple, 0 dev."
);

export default function ProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

