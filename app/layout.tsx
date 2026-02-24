import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { MOVERZ_REVIEWS, getAverageRating } from "@/lib/reviews";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ContentSquare from "@/components/ContentSquare";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { ConversionIntentTracker } from "@/components/ConversionIntentTracker";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildTunnelUrl } from "@/lib/tunnel-url";
import MobileMenu from "@/components/MobileMenu";
import { Footer } from "@/components/premium/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
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
  },
  twitter: {
    card: "summary_large_image",
    site: "@moverz",
    creator: "@moverz",
    title: "Comparateur Déménagement | Jusqu'à 5 devis | Contrôlés · Gratuit",
    description: "Comparez jusqu'à 5 devis comparables de déménageurs vérifiés sous 5 à 7 jours. Dossier anonyme, 0 harcèlement. 100% gratuit.",
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
      <body className={`${inter.variable} ${sora.variable} ${inter.className}`}>
        <GoogleAnalytics />
        <ConversionIntentTracker />
        <ExitIntentPopup />
        {/* Header */}
        <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/85 border-b shadow-sm transition-all" style={{ borderColor: "var(--color-border)" }}>
          <nav className="mx-auto flex h-14 md:h-16 max-w-7xl items-center justify-between px-4 md:px-8">
            <a href="/" className="flex items-center gap-2.5" title="Moverz - Comparateur de déménagement">
              <Image 
                src="/logo.png" 
                alt="Logo Moverz" 
                width={40}
                height={40}
                priority
                className="h-9 w-9 md:h-10 md:w-10"
              />
              <span className="font-heading text-xl md:text-2xl font-bold" style={{ color: "var(--color-text)" }}>Moverz</span>
            </a>
            <div className="flex items-center gap-6">
              <a href="/pourquoi-moverz/" className="text-sm font-medium transition-all duration-300 hover:opacity-80 hidden md:block" style={{ color: "var(--color-text-secondary)" }}>
                Pourquoi Moverz
              </a>
              <a href="/comment-ca-marche/" className="text-sm font-medium transition-all duration-300 hover:opacity-80 hidden md:block" style={{ color: "var(--color-text-secondary)" }}>
                Comment ça marche
              </a>
              <a href="/faq/" className="text-sm font-medium transition-all duration-300 hover:opacity-80 hidden md:block" style={{ color: "var(--color-text-secondary)" }}>
                FAQ
              </a>
              <a href="/blog/" className="text-sm font-medium transition-all duration-300 hover:opacity-60 hidden md:block opacity-70" style={{ color: "var(--color-text-muted)" }}>
                Blog
              </a>
              <a
                href={buildTunnelUrl({ from: "header" })}
                rel="nofollow"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_24px_rgba(14,165,166,0.3)] hover:-translate-y-0.5 active:scale-[0.98]"
                style={{ 
                  background: "var(--color-accent)",
                  boxShadow: "0 2px 8px rgba(14,165,166,0.2)"
                }}
              >
                <span>Recevoir ma sélection</span>
                <span className="text-base">→</span>
              </a>
              {/* Mobile menu hamburger */}
              <MobileMenu />
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}

