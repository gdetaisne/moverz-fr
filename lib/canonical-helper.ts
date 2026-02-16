import { env } from '@/lib/env';

/**
 * Génère une URL canonique complète
 * @param path - Chemin relatif (ex: "choisir-ville", "faq")
 * @returns URL canonique complète avec trailing slash
 */
export function getCanonicalUrl(path: string = ''): string {
  const baseUrl = env.SITE_URL.replace(/\/$/, ''); // Enlever trailing slash de base
  const cleanPath = path.replace(/^\//, '').replace(/\/$/, ''); // Nettoyer le path
  
  if (!cleanPath) {
    return `${baseUrl}/`;
  }
  
  return `${baseUrl}/${cleanPath}/`;
}

/**
 * Génère l'objet alternates pour Next.js metadata
 */
export function getCanonicalAlternates(path: string = '') {
  return {
    canonical: getCanonicalUrl(path),
  };
}

/**
 * Génère les metadata OpenGraph
 */
export function getOpenGraphMetadata(
  path: string,
  title: string,
  description: string
) {
  const baseUrl = env.SITE_URL.replace(/\/$/, "");
  return {
    title,
    description,
    url: getCanonicalUrl(path),
    siteName: 'Moverz',
    images: [
      {
        url: `${baseUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Moverz - Comparateur de déménagement',
      },
    ],
    type: 'website' as const,
  };
}

/**
 * Génère un objet metadata complet pour une page
 */
export function getFullMetadata(
  path: string,
  title: string,
  description: string
) {
  // Strip trailing "| Moverz" to avoid duplication with layout.tsx title.template "%s | Moverz"
  const normalizedTitle = title.replace(/\s*\|\s*Moverz\s*$/i, '').trim();
  return {
    title: normalizedTitle,
    description,
    alternates: getCanonicalAlternates(path),
    openGraph: getOpenGraphMetadata(path, normalizedTitle, description),
  };
}

