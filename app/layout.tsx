import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { MOVERZ_REVIEWS, getAverageRating, getTotalReviews } from "@/lib/reviews";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://moverz.fr'),
  title: "Déménagement : Comparez 3 à 5 devis en 3 min (0€, 0 spam) | Moverz",
  description: "✓ 3 à 5 devis comparables ✓ Pros contrôlés (assurances + 0 litige) ✓ Dossier anonyme ✓ 100% gratuit · 2847 clients · Note 4.8/5 → Comparez maintenant",
  keywords: ["comparateur déménagement", "devis déménageurs", "déménagement France", "comparateur devis", "déménageurs contrôlés", "devis gratuit déménagement"],
  authors: [{ name: "Moverz" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://moverz.fr/",
    siteName: "Moverz",
    title: "Déménagement : Comparez 3 à 5 devis de pros contrôlés | Moverz",
    description: "Note 4.8/5 · 2847 clients · Comparez 3 à 5 devis de déménageurs contrôlés · 100% gratuit · 0 spam · Dossier anonyme",
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
    title: "Déménagement : Comparez 3 à 5 devis en 3 min (0€, 0 spam)",
    description: "Note 4.8/5 · Comparez 3 à 5 devis de pros contrôlés · 100% gratuit · Dossier anonyme",
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
        {/* Favicons */}
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        
        {/* Preconnect aux domaines externes pour performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Preload du logo (ressource critique) */}
        <link
          rel="preload"
          href="/logo.png"
          as="image"
          type="image/png"
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://moverz.fr/#organization",
              "name": "Moverz",
              "url": "https://moverz.fr",
              "logo": "https://moverz.fr/logo.png",
              "description": "Comparateur de déménagement anti-arnaque. Comparez 3 à 5 devis de déménageurs contrôlés sur toute la France.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": getAverageRating(MOVERZ_REVIEWS),
                "reviewCount": getTotalReviews(),
                "bestRating": 5,
                "worstRating": 1
              },
              "review": MOVERZ_REVIEWS.map((review) => ({
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": review.author.split(" — ")[0] || review.author
                },
                "reviewBody": review.body,
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": review.rating,
                  "bestRating": 5,
                  "worstRating": 1
                }
              })),
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
        <GoogleAnalytics />
        <FloatingWhatsApp />
        <ExitIntentPopup />
        {/* Header */}
        <header className="sticky top-0 z-40 w-full bg-white border-b border-[#E3E5E8] shadow-sm">
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
              <span className="text-2xl md:text-3xl font-bold text-[#0F172A]">Moverz</span>
            </a>
            <div className="flex items-center gap-6">
              <a href="/pourquoi-moverz/" className="text-sm font-medium text-[#1E293B]/70 hover:text-[#0F172A] transition-colors hidden md:block">
                Pourquoi Moverz
              </a>
              <a href="/comment-ca-marche/" className="text-sm font-medium text-[#1E293B]/70 hover:text-[#0F172A] transition-colors hidden md:block">
                Comment ça marche
              </a>
              <a href="/faq/" className="text-sm font-medium text-[#1E293B]/70 hover:text-[#0F172A] transition-colors hidden md:block">
                FAQ
              </a>
              <a href="/blog/" className="text-sm font-medium text-[#1E293B]/70 hover:text-[#0F172A] transition-colors hidden md:block">
                Blog
              </a>
              <a
                href="/pro/"
                className="inline-flex items-center gap-1 rounded-full border-2 border-[#0F172A] px-4 py-2 text-sm font-semibold text-[#0F172A] hover:bg-gray-50 transition-colors hidden md:inline-flex"
              >
                <span>Pro</span>
                <span className="text-base">→</span>
              </a>
              <a
                href="https://devis.moverz.fr/?source=moverz.fr&from=header"
                className="inline-flex items-center gap-1 rounded-full bg-[#0F172A] px-4 py-2 text-sm font-semibold text-white hover:scale-105 transition-all duration-200 shadow-sm"
              >
                <span>Obtenir des devis</span>
                <span className="text-base">→</span>
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-[#0F172A] border-t border-white/10 text-white">
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
                  <li><a href="/pourquoi-moverz/" className="text-white/70 hover:text-white transition-colors">Pourquoi Moverz</a></li>
                  <li><a href="/comment-ca-marche/" className="text-white/70 hover:text-white transition-colors">Comment ça marche</a></li>
                  <li><a href="/blog/eviter-arnaques-demenagement/" className="text-white/70 hover:text-white transition-colors">Éviter les arnaques</a></li>
                  <li><a href="/blog/" className="text-white/70 hover:text-white transition-colors">Blog déménagement</a></li>
                  <li><a href="/villes/" className="text-white/70 hover:text-white transition-colors">Nos villes</a></li>
                  <li><a href="/pro/" className="text-white/70 hover:text-white transition-colors">Offre Pro</a></li>
                  <li><a href="/faq/" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="/contact/" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
                  <li><a href="/a-propos/" className="text-white/70 hover:text-white transition-colors">À propos</a></li>
                </ul>
              </div>

              {/* Colonne 3 : Nos villes */}
              <div>
                <h3 className="font-semibold mb-4 text-white">Nos villes</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/demenagement/nice/" className="text-white/70 hover:text-white transition-colors">Nice</a></li>
                  <li><a href="/demenagement/lyon/" className="text-white/70 hover:text-white transition-colors">Lyon</a></li>
                  <li><a href="/demenagement/marseille/" className="text-white/70 hover:text-white transition-colors">Marseille</a></li>
                  <li><a href="/demenagement/toulouse/" className="text-white/70 hover:text-white transition-colors">Toulouse</a></li>
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
                <div className="mt-4 text-xs text-white/60 leading-relaxed space-y-0.5">
                  <p>Propriétaire du site :</p>
                  <p>Entreprise : GSLV EURL</p>
                  <p>SIREN : 914499876</p>
                  <p>RCS : La Rochelle</p>
                  <p>Adresse du siège : 5 Rue Jean Coyttar, 17290 Thairé, France</p>
                  <p>Site web : https://moverz.fr</p>
                  <p>Email : contact@moverz.fr</p>
                </div>
              </div>
            </div>

            {/* Bas du footer */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/60">
                © {new Date().getFullYear()} Moverz – GSLV EURL (SIREN 914499876). Tous droits réservés.
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

