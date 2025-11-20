import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://moverz.fr'),
  title: "Comparateur Déménagement — Devis Comparables | Moverz",
  description: "Comparez 5+ devis de déménageurs contrôlés (solvabilité + 0 litige). Un seul inventaire IA → des devis vraiment comparables. 100% gratuit, sans harcèlement.",
  keywords: ["comparateur déménagement", "devis déménageurs", "déménagement France", "comparateur devis", "déménageurs contrôlés"],
  authors: [{ name: "Moverz" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://moverz.fr/",
    siteName: "Moverz",
    title: "Moverz — Comparateur Déménagement Intelligent",
    description: "Enfin des devis comparables : 5+ pros contrôlés chiffrent LE MÊME inventaire",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Moverz - Comparateur de déménagement anti-arnaque",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moverz — Comparateur Déménagement Intelligent",
    description: "Comparez 5+ devis de déménageurs contrôlés sur toute la France",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://moverz.fr/',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Moverz",
              "url": "https://moverz.fr",
              "logo": "https://moverz.fr/logo.png",
              "description": "Comparateur de déménagement anti-arnaque. Comparez 5+ devis de déménageurs contrôlés sur toute la France.",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "contact@moverz.fr",
                "availableLanguage": "French"
              },
              "sameAs": [],
              "areaServed": {
                "@type": "Country",
                "name": "France"
              },
              "serviceType": ["Comparateur de déménagement", "Devis déménageurs"],
              "knowsAbout": ["Déménagement", "Comparaison de devis", "Déménageurs professionnels"]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Header */}
        <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-[#04163a]/90 border-b border-white/10">
          <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
            <a href="/" className="flex items-center gap-3" title="Moverz - Comparateur de déménagement">
              <Image 
                src="/logo.png" 
                alt="Logo Moverz" 
                width={48}
                height={48}
                priority
                className="h-10 w-10 md:h-12 md:w-12"
              />
              <span className="text-2xl md:text-3xl font-bold text-white">Moverz</span>
            </a>
            <div className="flex items-center gap-6">
              <a href="/villes/" className="text-sm font-medium text-white/80 hover:text-white transition-colors hidden md:block">
                Villes
              </a>
              <a href="/faq/" className="text-sm font-medium text-white/80 hover:text-white transition-colors hidden md:block">
                FAQ
              </a>
              <a
                href="/choisir-ville/"
                className="inline-flex items-center gap-1 rounded-xl bg-gradient-to-r from-[#6BCFCF] to-[#4FB8B8] px-4 py-2 text-sm font-semibold text-[#04141f] hover:scale-105 transition-transform duration-300"
              >
                <span>Obtenir des devis</span>
                <span className="text-base">→</span>
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-[#04163a] border-t border-white/10 text-white">
          <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {/* Colonne 1 : Marque */}
              <div className="space-y-4">
                <a href="/" className="flex items-center gap-3" title="Moverz - Comparateur de déménagement">
                  <Image 
                    src="/logo.png" 
                    alt="Logo Moverz" 
                    width={48}
                    height={48}
                    className="h-10 w-10 md:h-12 md:w-12"
                  />
                  <span className="text-2xl md:text-3xl font-bold text-white">Moverz</span>
                </a>
                <p className="text-sm text-white/70 leading-relaxed">
                  Le comparateur anti-arnaque. Devis comparables, pros contrôlés, 0 spam.
                </p>
              </div>

              {/* Colonne 2 : Liens utiles */}
              <div>
                <h3 className="font-semibold mb-4 text-white">Liens utiles</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/comment-ca-marche/" className="text-white/70 hover:text-white transition-colors">Comment ça marche</a></li>
                  <li><a href="/villes/" className="text-white/70 hover:text-white transition-colors">Nos villes</a></li>
                  <li><a href="/faq/" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="/contact/" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
                  <li><a href="/a-propos/" className="text-white/70 hover:text-white transition-colors">À propos</a></li>
                </ul>
              </div>

              {/* Colonne 3 : Nos villes */}
              <div>
                <h3 className="font-semibold mb-4 text-white">Nos villes</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://devis-demenageur-nice.fr" className="text-white/70 hover:text-white transition-colors">Nice</a></li>
                  <li><a href="https://devis-demenageur-lyon.fr" className="text-white/70 hover:text-white transition-colors">Lyon</a></li>
                  <li><a href="https://devis-demenageur-marseille.fr" className="text-white/70 hover:text-white transition-colors">Marseille</a></li>
                  <li><a href="https://devis-demenageur-toulousain.fr" className="text-white/70 hover:text-white transition-colors">Toulouse</a></li>
                  <li><a href="/villes/" className="text-[#6BCFCF] hover:text-white transition-colors">Voir toutes les villes →</a></li>
                </ul>
              </div>

              {/* Colonne 4 : Légal */}
              <div>
                <h3 className="font-semibold mb-4 text-white">Informations légales</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/mentions-legales/" className="text-white/70 hover:text-white transition-colors">Mentions légales</a></li>
                  <li><a href="/politique-confidentialite/" className="text-white/70 hover:text-white transition-colors">Confidentialité</a></li>
                  <li><a href="/cgu/" className="text-white/70 hover:text-white transition-colors">CGU</a></li>
                  <li><a href="/cgv/" className="text-white/70 hover:text-white transition-colors">CGV</a></li>
                </ul>
              </div>
            </div>

            {/* Bas du footer */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} Moverz. Tous droits réservés.
              </p>
              <p className="text-sm text-white/60">
                Fait en France
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

