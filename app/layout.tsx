import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import "./globals.css";
import { MOVERZ_REVIEWS, getAverageRating, getTotalReviews } from "@/lib/reviews";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ContentSquare from "@/components/ContentSquare";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { ConversionIntentTracker } from "@/components/ConversionIntentTracker";
import { JsonLd } from "@/components/schema/JsonLd";

const inter = localFont({
  src: "../public/fonts/inter-latin.woff2",
  display: "swap",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://moverz.fr'),
  title: {
    default: "Comparateur Déménagement | Jusqu'à 5 devis | Contrôlés · Gratuit",
    template: "%s | Moverz"
  },
  description: "Comparez jusqu'à 5 devis comparables de déménageurs vérifiés sous 5 à 7 jours. Dossier anonyme, 0 harcèlement. 100% gratuit.",
  keywords: [
    "devis déménagement gratuit",
    "comparateur déménageurs fiable",
    "devis déménagement sans appel",
    "anti-arnaque déménagement",
    "déménageurs vérifiés assurés",
    "devis comparables déménagement",
    "devis déménagement anonyme",
    "comparateur déménagement pas d'appel",
    "trouver déménageur vérifié",
    "devis déménagement rapide",
    "comparateur déménagement fiable",
    "logiciel déménageur",
    "SaaS déménagement"
  ],
  authors: [{ name: "Moverz", url: "https://moverz.fr" }],
  creator: "Moverz",
  publisher: "Moverz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: "Moverz",
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://moverz.fr/",
    siteName: "Moverz",
    title: "Comparateur Déménagement | Jusqu'à 5 devis | Contrôlés · Gratuit",
    description: "Comparez jusqu'à 5 devis comparables de déménageurs vérifiés sous 5 à 7 jours. Dossier anonyme, 0 harcèlement. 100% gratuit.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Moverz - Comparateur Déménagement · Jusqu'à 5 devis · Contrôlés · Gratuit · Note 4.9/5",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@moverz",
    creator: "@moverz",
    title: "Comparateur Déménagement | Jusqu'à 5 devis | Contrôlés · Gratuit",
    description: "Comparez jusqu'à 5 devis comparables de déménageurs vérifiés sous 5 à 7 jours. Dossier anonyme, 0 harcèlement. 100% gratuit.",
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
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://moverz.fr/',
    languages: {
      'fr-FR': 'https://moverz.fr/',
    },
  },
  category: 'déménagement',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0F172A' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
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
        {/* (Unsplash retiré) */}
        
        {/* Preload du logo (ressource critique) */}
        <link
          rel="preload"
          href="/logo.png"
          as="image"
          type="image/png"
        />
        
        <JsonLd
          id="organization-schema"
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://moverz.fr/#organization",
            name: "Moverz",
            url: "https://moverz.fr",
            logo: {
              "@type": "ImageObject",
              url: "https://moverz.fr/logo.png",
              width: 512,
              height: 512,
            },
            description:
              "Comparateur de déménagement anti-arnaque. Comparez jusqu'à 5 devis comparables de déménageurs vérifiés sous 5 à 7 jours, sans harcèlement.",
            foundingDate: "2023",
            address: {
              "@type": "PostalAddress",
              addressCountry: "FR",
              addressLocality: "Paris",
              addressRegion: "Île-de-France",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: getAverageRating(MOVERZ_REVIEWS),
              reviewCount: getTotalReviews(),
              bestRating: 5,
              worstRating: 1,
            },
            review: MOVERZ_REVIEWS.map((review) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: review.author.split(" — ")[0] || review.author,
              },
              reviewBody: review.body,
              reviewRating: {
                "@type": "Rating",
                ratingValue: review.rating,
                bestRating: 5,
                worstRating: 1,
              },
            })),
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Service",
              email: "contact@moverz.fr",
              availableLanguage: "French",
            },
            sameAs: ["https://www.linkedin.com/company/109778731/"],
            areaServed: {
              "@type": "Country",
              name: "France",
            },
            serviceType: ["Comparateur de déménagement", "Devis déménageurs"],
            knowsAbout: ["Déménagement", "Comparaison de devis", "Déménageurs professionnels"],
          }}
        />

        <JsonLd
          id="website-schema"
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://moverz.fr/#website",
            url: "https://moverz.fr/",
            name: "Moverz",
            publisher: { "@id": "https://moverz.fr/#organization" },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://moverz.fr/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }}
        />

        {/* Analytics / session replay (prod only) */}
        <ContentSquare />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ConversionIntentTracker />
        <ExitIntentPopup />
        {/* Header Premium 2026 */}
        <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-xl border-b border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
            <a href="/" className="group flex items-center gap-3" title="Moverz - Comparateur de déménagement">
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="Logo Moverz" 
                  width={48}
                  height={48}
                  priority
                  className="h-10 w-10 md:h-12 md:w-12 transition-transform duration-300 group-hover:scale-105"
                />
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-full bg-brand-turquoise/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0F172A] via-[#0F172A] to-brand-accent bg-clip-text text-transparent">Moverz</span>
            </a>
            <div className="flex items-center gap-6">
              <a href="/pourquoi-moverz/" className="group text-sm font-medium text-[#1E293B]/70 hover:text-brand-turquoise transition-all duration-300 hidden md:block relative">
                <span>Pourquoi Moverz</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-turquoise to-brand-accent group-hover:w-full transition-all duration-300" />
              </a>
              <a href="/comment-ca-marche/" className="group text-sm font-medium text-[#1E293B]/70 hover:text-brand-turquoise transition-all duration-300 hidden md:block relative">
                <span>Comment ça marche</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-turquoise to-brand-accent group-hover:w-full transition-all duration-300" />
              </a>
              <a href="/faq/" className="group text-sm font-medium text-[#1E293B]/70 hover:text-brand-turquoise transition-all duration-300 hidden md:block relative">
                <span>FAQ</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-turquoise to-brand-accent group-hover:w-full transition-all duration-300" />
              </a>
              <a href="/blog/" className="group text-sm font-medium text-[#1E293B]/70 hover:text-brand-turquoise transition-all duration-300 hidden md:block relative">
                <span>Blog</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-turquoise to-brand-accent group-hover:w-full transition-all duration-300" />
              </a>
              <a
                href="https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=header"
                rel="nofollow"
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-turquoise via-brand-turquoise to-brand-accent px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_16px_rgba(107,207,207,0.3)] hover:shadow-[0_6px_24px_rgba(107,207,207,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Obtenir des devis</span>
                <span className="relative z-10 text-base group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer Premium 2026 avec Violet */}
        <footer className="relative bg-gradient-to-br from-[#0F172A] via-[#1a2332] to-[#0F172A] border-t border-white/10 text-white overflow-hidden">
          {/* Background glow effects avec violet */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-turquoise/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-brand-accent/15 rounded-full blur-[120px]" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]" />
          
          <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 mb-16">
              {/* Colonne 1 : Marque avec glow */}
              <div className="space-y-5">
                <a href="/" className="group inline-flex items-center gap-3" title="Moverz - Comparateur de déménagement">
                  <div className="relative">
                    <Image 
                      src="/logo.png" 
                      alt="Logo Moverz" 
                      width={48}
                      height={48}
                      className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Glow turquoise + violet */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-turquoise/30 to-brand-accent/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-white via-brand-turquoise to-brand-accent bg-clip-text text-transparent">Moverz</span>
                </a>
                <p className="text-sm text-white/80 leading-relaxed">
                  Le comparateur anti-arnaque. Devis comparables, pros contrôlés, sans démarchage.
                </p>
                <form action="/search" method="get" className="mt-4 flex gap-2">
                  <label className="sr-only" htmlFor="footer-search-q">
                    Rechercher sur Moverz
                  </label>
                  <input
                    id="footer-search-q"
                    name="q"
                    placeholder="Rechercher…"
                    className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-xl bg-gradient-to-r from-brand-turquoise to-brand-accent p-2.5 text-white hover:scale-105 transition-all duration-300 shadow-[0_4px_16px_rgba(107,207,207,0.3)]"
                    aria-label="Rechercher"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Colonne 2 : Liens utiles avec hover violet */}
              <div>
                <h3 className="font-bold mb-5 text-white flex items-center gap-2">
                  <span className="w-1 h-4 bg-gradient-to-b from-brand-turquoise to-brand-accent rounded-full" />
                  Liens utiles
                </h3>
                <ul className="space-y-3 text-sm">
                  <li><a href="/pourquoi-moverz/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-accent transition-all duration-300">
                    <span className="w-0 h-px bg-brand-accent group-hover:w-4 transition-all duration-300" />
                    Pourquoi Moverz
                  </a></li>
                  <li><a href="/comment-ca-marche/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-accent transition-all duration-300">
                    <span className="w-0 h-px bg-brand-accent group-hover:w-4 transition-all duration-300" />
                    Comment ça marche
                  </a></li>
                  <li><a href="/blog/eviter-arnaques-demenagement/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-accent transition-all duration-300">
                    <span className="w-0 h-px bg-brand-accent group-hover:w-4 transition-all duration-300" />
                    Éviter les arnaques
                  </a></li>
                  <li><a href="/blog/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-accent transition-all duration-300">
                    <span className="w-0 h-px bg-brand-accent group-hover:w-4 transition-all duration-300" />
                    Blog déménagement
                  </a></li>
                  <li><a href="/villes/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-accent transition-all duration-300">
                    <span className="w-0 h-px bg-brand-accent group-hover:w-4 transition-all duration-300" />
                    Nos villes
                  </a></li>
                  <li><a href="/faq/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-accent transition-all duration-300">
                    <span className="w-0 h-px bg-brand-accent group-hover:w-4 transition-all duration-300" />
                    FAQ
                  </a></li>
                  <li><a href="/contact/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-accent transition-all duration-300">
                    <span className="w-0 h-px bg-brand-accent group-hover:w-4 transition-all duration-300" />
                    Contact
                  </a></li>
                  <li><a href="/a-propos/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-accent transition-all duration-300">
                    <span className="w-0 h-px bg-brand-accent group-hover:w-4 transition-all duration-300" />
                    À propos
                  </a></li>
                </ul>
              </div>

              {/* Colonne 3 : Professionnels avec accent violet */}
              <div>
                <h3 className="font-bold mb-5 text-white flex items-center gap-2">
                  <span className="w-1 h-4 bg-gradient-to-b from-brand-accent to-brand-turquoise rounded-full" />
                  Professionnels
                </h3>
                <ul className="space-y-3 text-sm">
                  <li><a href="/partenaires/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-turquoise transition-all duration-300">
                    <span className="w-0 h-px bg-brand-turquoise group-hover:w-4 transition-all duration-300" />
                    Devenir partenaire
                  </a></li>
                  <li><a href="/verifications-partenaires/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-turquoise transition-all duration-300">
                    <span className="w-0 h-px bg-brand-turquoise group-hover:w-4 transition-all duration-300" />
                    Critères de sélection
                  </a></li>
                  <li><a href="/cgv-partenaires/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-turquoise transition-all duration-300">
                    <span className="w-0 h-px bg-brand-turquoise group-hover:w-4 transition-all duration-300" />
                    CGV Partenaires
                  </a></li>
                </ul>
              </div>

              {/* Colonne 4 : Nos villes */}
              <div>
                <h3 className="font-bold mb-5 text-white flex items-center gap-2">
                  <span className="w-1 h-4 bg-gradient-to-b from-brand-turquoise to-brand-accent rounded-full" />
                  Nos villes
                </h3>
                <ul className="space-y-3 text-sm">
                  <li><a href="/demenagement/nice/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-accent transition-all duration-300">
                    <span className="w-0 h-px bg-brand-accent group-hover:w-4 transition-all duration-300" />
                    Nice
                  </a></li>
                  <li><a href="/demenagement/lyon/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-accent transition-all duration-300">
                    <span className="w-0 h-px bg-brand-accent group-hover:w-4 transition-all duration-300" />
                    Lyon
                  </a></li>
                  <li><a href="/demenagement/marseille/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-accent transition-all duration-300">
                    <span className="w-0 h-px bg-brand-accent group-hover:w-4 transition-all duration-300" />
                    Marseille
                  </a></li>
                  <li><a href="/demenagement/toulouse/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-accent transition-all duration-300">
                    <span className="w-0 h-px bg-brand-accent group-hover:w-4 transition-all duration-300" />
                    Toulouse
                  </a></li>
                  <li><a href="/villes/" className="group inline-flex items-center gap-2 text-brand-accent hover:text-white font-semibold transition-all duration-300">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    Voir toutes les villes
                  </a></li>
                </ul>
              </div>

              {/* Colonne 5 : Légal */}
              <div>
                <h3 className="font-bold mb-5 text-white flex items-center gap-2">
                  <span className="w-1 h-4 bg-gradient-to-b from-brand-accent to-brand-turquoise rounded-full" />
                  Informations légales
                </h3>
                <ul className="space-y-3 text-sm">
                  <li><a href="/mentions-legales/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-turquoise transition-all duration-300">
                    <span className="w-0 h-px bg-brand-turquoise group-hover:w-4 transition-all duration-300" />
                    Mentions légales
                  </a></li>
                  <li><a href="/politique-confidentialite/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-turquoise transition-all duration-300">
                    <span className="w-0 h-px bg-brand-turquoise group-hover:w-4 transition-all duration-300" />
                    Confidentialité
                  </a></li>
                  <li><a href="/cgu/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-turquoise transition-all duration-300">
                    <span className="w-0 h-px bg-brand-turquoise group-hover:w-4 transition-all duration-300" />
                    CGU
                  </a></li>
                  <li><a href="/cgv/" className="group inline-flex items-center gap-2 text-white/70 hover:text-brand-turquoise transition-all duration-300">
                    <span className="w-0 h-px bg-brand-turquoise group-hover:w-4 transition-all duration-300" />
                    CGV Clients
                  </a></li>
                </ul>
                <div className="mt-6 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-xs text-white/60 leading-relaxed space-y-1">
                  <p className="text-brand-accent font-semibold">Propriétaire du site :</p>
                  <p>GSLV EURL</p>
                  <p>SIREN : 914499876</p>
                  <p>RCS : La Rochelle</p>
                  <p className="text-white/50">5 Rue Jean Coyttar, 17290 Thairé, France</p>
                  <p className="text-white/50">contact@moverz.fr</p>
                </div>
              </div>
            </div>

            {/* Bas du footer avec gradient accent */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/70">
                © {new Date().getFullYear()} <span className="font-semibold text-brand-accent">Moverz</span> – GSLV EURL (SIREN 914499876). Tous droits réservés.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-white/70">Fait en France</span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-brand-turquoise/10 to-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-semibold">
                  ✓ Premium 2026
                </span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

