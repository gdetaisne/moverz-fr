import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";

/**
 * Génère les metadata Next.js pour les pages génériques
 * @param path - Le chemin de la page (sans le leading slash)
 * @param title - Le titre SEO de la page
 * @param description - La description SEO de la page
 * @returns Metadata Next.js
 */
export function generateMetadata(
  path: string,
  title: string,
  description: string
): Metadata {
  return getFullMetadata(path, title, description);
}

