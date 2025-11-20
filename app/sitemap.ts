import { MetadataRoute } from 'next'
import { CITIES } from '@/lib/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://moverz.fr'
  
  // Pages statiques
  const staticPages = [
    '',
    '/comment-ca-marche',
    '/villes',
    '/choisir-ville',
    '/faq',
    '/contact',
    '/a-propos',
    '/mentions-legales',
    '/politique-confidentialite',
    '/cgu',
    '/cgv',
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return staticPages
}

