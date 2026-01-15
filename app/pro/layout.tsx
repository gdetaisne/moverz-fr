import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";

export const metadata: Metadata = getFullMetadata(
  "pro",
  "Moverz Pro : dossier digital opposable pour chiffrer sans visite technique",
  "SaaS pour déménageurs : dossier client (photos + inventaire IA + déclaration de valeur) · relances automatiques · exports PDF/Excel · WhatsApp (Pro) · module devis."
);

export default function ProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

