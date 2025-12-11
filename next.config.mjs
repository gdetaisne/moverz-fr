/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  trailingSlash: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  compress: true,
  
  // Optimisation images pour Core Web Vitals
  images: {
    unoptimized: false, // Active l'optimisation Next.js
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // Cache 1 an
  },

  // Optimisation compilation
  swcMinify: true,
  
  // Experimental features pour performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          // Preconnect pour Google Analytics
          {
            key: 'Link',
            value: '<https://www.googletagmanager.com>; rel=preconnect; crossorigin'
          },
        ],
      },
      // Cache agressif pour assets statiques (images)
      {
        source: '/:path*.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.jpg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.jpeg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      // Redirection inventaire-ia → choisir-ville
      {
        source: '/inventaire-ia',
        destination: '/choisir-ville/',
        permanent: true,
      },
      {
        source: '/inventaire-ia/',
        destination: '/choisir-ville/',
        permanent: true,
      },

      // Redirections anciennes URLs villes → nouvelles pages /demenagement/[slug]/
      // Nice
      {
        source: '/nice',
        destination: '/demenagement/nice/',
        permanent: true,
      },
      {
        source: '/nice/',
        destination: '/demenagement/nice/',
        permanent: true,
      },
      {
        source: '/villes/nice',
        destination: '/demenagement/nice/',
        permanent: true,
      },
      {
        source: '/villes/nice/',
        destination: '/demenagement/nice/',
        permanent: true,
      },
      // Lyon
      {
        source: '/lyon',
        destination: '/demenagement/lyon/',
        permanent: true,
      },
      {
        source: '/lyon/',
        destination: '/demenagement/lyon/',
        permanent: true,
      },
      {
        source: '/villes/lyon',
        destination: '/demenagement/lyon/',
        permanent: true,
      },
      {
        source: '/villes/lyon/',
        destination: '/demenagement/lyon/',
        permanent: true,
      },
      // Marseille
      {
        source: '/marseille',
        destination: '/demenagement/marseille/',
        permanent: true,
      },
      {
        source: '/marseille/',
        destination: '/demenagement/marseille/',
        permanent: true,
      },
      {
        source: '/villes/marseille',
        destination: '/demenagement/marseille/',
        permanent: true,
      },
      {
        source: '/villes/marseille/',
        destination: '/demenagement/marseille/',
        permanent: true,
      },
      // Toulouse
      {
        source: '/toulouse',
        destination: '/demenagement/toulouse/',
        permanent: true,
      },
      {
        source: '/toulouse/',
        destination: '/demenagement/toulouse/',
        permanent: true,
      },
      {
        source: '/villes/toulouse',
        destination: '/demenagement/toulouse/',
        permanent: true,
      },
      {
        source: '/villes/toulouse/',
        destination: '/demenagement/toulouse/',
        permanent: true,
      },
      // Bordeaux
      {
        source: '/bordeaux',
        destination: '/demenagement/bordeaux/',
        permanent: true,
      },
      {
        source: '/bordeaux/',
        destination: '/demenagement/bordeaux/',
        permanent: true,
      },
      {
        source: '/villes/bordeaux',
        destination: '/demenagement/bordeaux/',
        permanent: true,
      },
      {
        source: '/villes/bordeaux/',
        destination: '/demenagement/bordeaux/',
        permanent: true,
      },
      // Lille
      {
        source: '/lille',
        destination: '/demenagement/lille/',
        permanent: true,
      },
      {
        source: '/lille/',
        destination: '/demenagement/lille/',
        permanent: true,
      },
      {
        source: '/villes/lille',
        destination: '/demenagement/lille/',
        permanent: true,
      },
      {
        source: '/villes/lille/',
        destination: '/demenagement/lille/',
        permanent: true,
      },
      // Strasbourg
      {
        source: '/strasbourg',
        destination: '/demenagement/strasbourg/',
        permanent: true,
      },
      {
        source: '/strasbourg/',
        destination: '/demenagement/strasbourg/',
        permanent: true,
      },
      {
        source: '/villes/strasbourg',
        destination: '/demenagement/strasbourg/',
        permanent: true,
      },
      {
        source: '/villes/strasbourg/',
        destination: '/demenagement/strasbourg/',
        permanent: true,
      },
      // Nantes
      {
        source: '/nantes',
        destination: '/demenagement/nantes/',
        permanent: true,
      },
      {
        source: '/nantes/',
        destination: '/demenagement/nantes/',
        permanent: true,
      },
      {
        source: '/villes/nantes',
        destination: '/demenagement/nantes/',
        permanent: true,
      },
      {
        source: '/villes/nantes/',
        destination: '/demenagement/nantes/',
        permanent: true,
      },
      // Rennes
      {
        source: '/rennes',
        destination: '/demenagement/rennes/',
        permanent: true,
      },
      {
        source: '/rennes/',
        destination: '/demenagement/rennes/',
        permanent: true,
      },
      {
        source: '/villes/rennes',
        destination: '/demenagement/rennes/',
        permanent: true,
      },
      {
        source: '/villes/rennes/',
        destination: '/demenagement/rennes/',
        permanent: true,
      },
      // Rouen
      {
        source: '/rouen',
        destination: '/demenagement/rouen/',
        permanent: true,
      },
      {
        source: '/rouen/',
        destination: '/demenagement/rouen/',
        permanent: true,
      },
      {
        source: '/villes/rouen',
        destination: '/demenagement/rouen/',
        permanent: true,
      },
      {
        source: '/villes/rouen/',
        destination: '/demenagement/rouen/',
        permanent: true,
      },
      // Montpellier
      {
        source: '/montpellier',
        destination: '/demenagement/montpellier/',
        permanent: true,
      },
      {
        source: '/montpellier/',
        destination: '/demenagement/montpellier/',
        permanent: true,
      },
      {
        source: '/villes/montpellier',
        destination: '/demenagement/montpellier/',
        permanent: true,
      },
      {
        source: '/villes/montpellier/',
        destination: '/demenagement/montpellier/',
        permanent: true,
      },
      // Paris
      {
        source: '/paris',
        destination: '/demenagement/paris/',
        permanent: true,
      },
      {
        source: '/paris/',
        destination: '/demenagement/paris/',
        permanent: true,
      },
      {
        source: '/villes/paris',
        destination: '/demenagement/paris/',
        permanent: true,
      },
      {
        source: '/villes/paris/',
        destination: '/demenagement/paris/',
        permanent: true,
      },
      // Île-de-France
      {
        source: '/ile-de-france',
        destination: '/demenagement/ile-de-france/',
        permanent: true,
      },
      {
        source: '/ile-de-france/',
        destination: '/demenagement/ile-de-france/',
        permanent: true,
      },
      {
        source: '/villes/ile-de-france',
        destination: '/demenagement/ile-de-france/',
        permanent: true,
      },
      {
        source: '/villes/ile-de-france/',
        destination: '/demenagement/ile-de-france/',
        permanent: true,
      },
      // Grenoble
      {
        source: '/grenoble',
        destination: '/demenagement/grenoble/',
        permanent: true,
      },
      {
        source: '/grenoble/',
        destination: '/demenagement/grenoble/',
        permanent: true,
      },
      {
        source: '/villes/grenoble',
        destination: '/demenagement/grenoble/',
        permanent: true,
      },
      {
        source: '/villes/grenoble/',
        destination: '/demenagement/grenoble/',
        permanent: true,
      },
      // Toulon
      {
        source: '/toulon',
        destination: '/demenagement/toulon/',
        permanent: true,
      },
      {
        source: '/toulon/',
        destination: '/demenagement/toulon/',
        permanent: true,
      },
      {
        source: '/villes/toulon',
        destination: '/demenagement/toulon/',
        permanent: true,
      },
      {
        source: '/villes/toulon/',
        destination: '/demenagement/toulon/',
        permanent: true,
      },
      // Dijon
      {
        source: '/dijon',
        destination: '/demenagement/dijon/',
        permanent: true,
      },
      {
        source: '/dijon/',
        destination: '/demenagement/dijon/',
        permanent: true,
      },
      {
        source: '/villes/dijon',
        destination: '/demenagement/dijon/',
        permanent: true,
      },
      {
        source: '/villes/dijon/',
        destination: '/demenagement/dijon/',
        permanent: true,
      },
      // Angers
      {
        source: '/angers',
        destination: '/demenagement/angers/',
        permanent: true,
      },
      {
        source: '/angers/',
        destination: '/demenagement/angers/',
        permanent: true,
      },
      {
        source: '/villes/angers',
        destination: '/demenagement/angers/',
        permanent: true,
      },
      {
        source: '/villes/angers/',
        destination: '/demenagement/angers/',
        permanent: true,
      },
      // Clermont-Ferrand
      {
        source: '/clermont-ferrand',
        destination: '/demenagement/clermont-ferrand/',
        permanent: true,
      },
      {
        source: '/clermont-ferrand/',
        destination: '/demenagement/clermont-ferrand/',
        permanent: true,
      },
      {
        source: '/villes/clermont-ferrand',
        destination: '/demenagement/clermont-ferrand/',
        permanent: true,
      },
      {
        source: '/villes/clermont-ferrand/',
        destination: '/demenagement/clermont-ferrand/',
        permanent: true,
      },
      // Tours
      {
        source: '/tours',
        destination: '/demenagement/tours/',
        permanent: true,
      },
      {
        source: '/tours/',
        destination: '/demenagement/tours/',
        permanent: true,
      },
      {
        source: '/villes/tours',
        destination: '/demenagement/tours/',
        permanent: true,
      },
      {
        source: '/villes/tours/',
        destination: '/demenagement/tours/',
        permanent: true,
      },
      // Reims
      {
        source: '/reims',
        destination: '/demenagement/reims/',
        permanent: true,
      },
      {
        source: '/reims/',
        destination: '/demenagement/reims/',
        permanent: true,
      },
      {
        source: '/villes/reims',
        destination: '/demenagement/reims/',
        permanent: true,
      },
      {
        source: '/villes/reims/',
        destination: '/demenagement/reims/',
        permanent: true,
      },
      // Le Havre
      {
        source: '/le-havre',
        destination: '/demenagement/le-havre/',
        permanent: true,
      },
      {
        source: '/le-havre/',
        destination: '/demenagement/le-havre/',
        permanent: true,
      },
      {
        source: '/villes/le-havre',
        destination: '/demenagement/le-havre/',
        permanent: true,
      },
      {
        source: '/villes/le-havre/',
        destination: '/demenagement/le-havre/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
