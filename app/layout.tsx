import { buildTunnelUrl } from "@/lib/tunnel-url";
import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { MOVERZ_REVIEWS, getAverageRating, getTotalReviews } from "@/lib/reviews";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ContentSquare from "@/components/ContentSquare";
import DeferredClientFeatures from "@/components/DeferredClientFeatures";
import { JsonLd } from "@/components/schema/JsonLd";

// ===== Fonts V4 Radical =====
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moverz.fr"),
  title: {
    default: "Comparateur Déménagement | Jusqu'à 5 devis | Contrôlés · Gratuit",
    template: "%s | Moverz",
  },
  description:
    "Comparez jusqu'à 5 devis comparables de déménageurs vérifiés sous 5 à 7 jours. Dossier anonyme, 0 harcèlement. 100% gratuit.",
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
    description:
      "Comparez jusqu'à 5 devis comparables de déménageurs vérifiés sous 5 à 7 jours. Dossier anonyme, 0 harcèlement. 100% gratuit.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Moverz - Comparateur Déménagement · Jusqu'à 5 devis · Contrôlés · Gratuit",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@moverz",
    creator: "@moverz",
    title: "Comparateur Déménagement | Jusqu'à 5 devis | Contrôlés · Gratuit",
    description:
      "Comparez jusqu'à 5 devis comparables de déménageurs vérifiés sous 5 à 7 jours. Dossier anonyme, 0 harcèlement. 100% gratuit.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://moverz.fr/",
    languages: {
      "fr-FR": "https://moverz.fr/",
    },
  },
  category: "déménagement",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F14" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/logo-ui.png" />
        <link rel="apple-touch-icon" href="/logo-ui.png" />
        <link rel="preload" href="/logo-ui.png" as="image" type="image/png" />

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
            knowsAbout: [
              "Déménagement",
              "Comparaison de devis",
              "Déménageurs professionnels",
            ],
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

        <ContentSquare />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <DeferredClientFeatures />

        {/* ===== HEADER V4 — Un seul, sticky, propre ===== */}
        <header
          className="sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all"
          style={{
            background: "rgba(250, 250, 250, 0.8)",
            borderColor: "var(--color-border)",
          }}
        >
          <nav className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-5 md:px-6 lg:px-8">
            <a href="/" className="flex items-center gap-2.5" title="Moverz">
              <Image
                src="/logo-ui.png"
                alt="Logo Moverz"
                width={32}
                height={32}
                priority
                className="h-8 w-8"
              />
              <span className="text-lg font-semibold" style={{ color: "var(--color-text)", fontFamily: "var(--font-sora)" }}>
                Moverz
              </span>
            </a>

            <div className="flex items-center gap-5">
              <a
                href="/pourquoi-moverz/"
                className="hidden md:block text-[13px] font-medium transition-colors hover:opacity-70"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Pourquoi Moverz
              </a>
              <a
                href="/comment-ca-marche/"
                className="hidden md:block text-[13px] font-medium transition-colors hover:opacity-70"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Comment ça marche
              </a>
              <a
                href="/faq/"
                className="hidden md:block text-[13px] font-medium transition-colors hover:opacity-70"
                style={{ color: "var(--color-text-secondary)" }}
              >
                FAQ
              </a>
              <a
                href="/blog/"
                className="hidden md:block text-[13px] font-medium transition-colors hover:opacity-70"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Blog
              </a>
              <a
                href={buildTunnelUrl({ from: "header" })}
                rel="nofollow"
                className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] px-4 py-2 text-[13px] font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
                style={{ background: "var(--color-text)" }}
              >
                Obtenir des devis
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* ===== FOOTER V4 — Sobre, clair, pas de doublon dark ===== */}
        <footer
          className="border-t"
          style={{ background: "var(--color-bg)", borderColor: "var(--color-border)" }}
        >
          <div className="mx-auto max-w-[1200px] px-5 md:px-6 lg:px-8 py-12 md:py-14">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 mb-10">
              {/* Col 1: Brand */}
              <div className="col-span-2 md:col-span-1 space-y-3">
                <a href="/" className="inline-flex items-center gap-2" title="Moverz">
                  <Image src="/logo-ui.png" alt="Logo Moverz" width={28} height={28} className="h-7 w-7" />
                  <span
                    className="text-base font-semibold"
                    style={{ color: "var(--color-text)", fontFamily: "var(--font-sora)" }}
                  >
                    Moverz
                  </span>
                </a>
                <p className="text-[13px] leading-relaxed max-w-[200px]" style={{ color: "var(--color-text-muted)" }}>
                  Le comparateur anti-arnaque.
                  <br />
                  Devis comparables, pros contrôlés.
                </p>
              </div>

              {/* Col 2: Liens utiles */}
              <div>
                <h3 className="text-[13px] font-semibold mb-3" style={{ color: "var(--color-text)" }}>Liens utiles</h3>
                <ul className="space-y-2 text-[13px]">
                  <li><a href="/pourquoi-moverz/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>Pourquoi Moverz</a></li>
                  <li><a href="/comment-ca-marche/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>Comment ça marche</a></li>
                  <li><a href="/blog/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>Blog</a></li>
                  <li><a href="/villes/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>Nos villes</a></li>
                  <li><a href="/faq/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>FAQ</a></li>
                  <li><a href="/contact/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>Contact</a></li>
                </ul>
              </div>

              {/* Col 3: Pros */}
              <div>
                <h3 className="text-[13px] font-semibold mb-3" style={{ color: "var(--color-text)" }}>Professionnels</h3>
                <ul className="space-y-2 text-[13px]">
                  <li><a href="/partenaires/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>Devenir partenaire</a></li>
                  <li><a href="/verifications-partenaires/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>Critères de sélection</a></li>
                  <li><a href="/cgv-partenaires/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>CGV Partenaires</a></li>
                </ul>
              </div>

              {/* Col 4: Villes */}
              <div>
                <h3 className="text-[13px] font-semibold mb-3" style={{ color: "var(--color-text)" }}>Nos villes</h3>
                <ul className="space-y-2 text-[13px]">
                  <li><a href="/demenagement/nice/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>Nice</a></li>
                  <li><a href="/demenagement/lyon/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>Lyon</a></li>
                  <li><a href="/demenagement/marseille/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>Marseille</a></li>
                  <li><a href="/demenagement/toulouse/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>Toulouse</a></li>
                  <li><a href="/villes/" className="font-medium transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>Toutes les villes →</a></li>
                </ul>
              </div>

              {/* Col 5: Légal */}
              <div>
                <h3 className="text-[13px] font-semibold mb-3" style={{ color: "var(--color-text)" }}>Légal</h3>
                <ul className="space-y-2 text-[13px]">
                  <li><a href="/mentions-legales/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>Mentions légales</a></li>
                  <li><a href="/politique-confidentialite/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>Confidentialité</a></li>
                  <li><a href="/cgu/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>CGU</a></li>
                  <li><a href="/cgv/" className="transition-colors hover:opacity-70" style={{ color: "var(--color-text-secondary)" }}>CGV Clients</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div
              className="border-t pt-5 flex flex-col md:flex-row items-center justify-between gap-2"
              style={{ borderColor: "var(--color-border)" }}
            >
              <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                © {new Date().getFullYear()} Moverz – GSLV EURL · SIREN 914499876 · RCS La Rochelle
              </p>
              <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                contact@moverz.fr · Fait en France
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
