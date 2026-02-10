import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Moverz - Comparateur Déménagement',
    short_name: 'Moverz',
    description: 'Comparateur de déménagement anti-arnaque. Comparez des devis comparables de déménageurs contrôlés.',
    start_url: '/',
    display: 'standalone',
    background_color: '#04163a',
    theme_color: '#6BCFCF',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}

