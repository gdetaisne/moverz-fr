import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";

export const metadata: Metadata = getFullMetadata(
  "pro",
  "Moverz Pro : Widget IA Volumétrie en Marque Blanche | Économisez 3h/dossier",
  "Solution SaaS pour déménageurs : Widget IA en marque blanche · Intégration 5 min · 0 dev · Précision 95% · Dashboard complet · Support FR < 2h · Essai 30j gratuit"
);

export default function ProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

