import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

const footerSections = [
  {
    title: "Liens utiles",
    links: [
      { href: "/pourquoi-moverz/", label: "Pourquoi Moverz" },
      { href: "/comment-ca-marche/", label: "Comment ça marche" },
      { href: "/blog/eviter-arnaques-demenagement/", label: "Éviter les arnaques" },
      { href: "/blog/", label: "Blog déménagement" },
      { href: "/villes/", label: "Nos villes" },
      { href: "/faq/", label: "FAQ" },
      { href: "/contact/", label: "Contact" },
      { href: "/a-propos/", label: "À propos" },
    ],
  },
  {
    title: "Professionnels",
    links: [
      { href: "/partenaires/", label: "Devenir partenaire" },
      { href: "/verifications-partenaires/", label: "Critères de sélection" },
      { href: "/cgv-partenaires/", label: "CGV Partenaires" },
    ],
  },
  {
    title: "Nos villes",
    links: [
      { href: "/demenagement/nice/", label: "Nice" },
      { href: "/demenagement/lyon/", label: "Lyon" },
      { href: "/demenagement/marseille/", label: "Marseille" },
      { href: "/demenagement/toulouse/", label: "Toulouse" },
      { href: "/villes/", label: "Voir toutes les villes" },
    ],
  },
  {
    title: "Informations légales",
    links: [
      { href: "/mentions-legales/", label: "Mentions légales" },
      { href: "/politique-confidentialite/", label: "Confidentialité" },
      { href: "/cgu/", label: "CGU" },
      { href: "/cgv/", label: "CGV Clients" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 text-white" style={{ background: "#070A12" }}>
      {/* Subtle noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative z-10">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-12 mb-16">
            {/* Colonne 1 : Marque */}
            <div className="space-y-5">
              <Link href="/" className="group inline-flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Logo Moverz"
                  width={48}
                  height={48}
                  className="h-12 w-12 transition-transform duration-300 group-hover:scale-105"
                />
                <span className="font-heading text-3xl font-bold text-white">Moverz</span>
              </Link>
              <p className="text-sm leading-relaxed text-white/70">
                Le comparateur anti-arnaque. Devis comparables, pros contrôlés, sans démarchage.
              </p>
              <form action="/search" method="get" className="flex gap-2">
                <label className="sr-only" htmlFor="footer-search-q">
                  Rechercher dans le blog
                </label>
                <input
                  id="footer-search-q"
                  name="q"
                  placeholder="Rechercher dans le blog..."
                  className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/50 backdrop-blur-sm focus:border-[#14B8A6] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/50 transition-all"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-[#14B8A6] p-2.5 text-white transition-all hover:bg-[#0D9488] active:scale-95"
                  aria-label="Rechercher dans le blog"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Colonnes 2-5 : Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-5 font-semibold text-white">{section.title}</h3>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-block text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Legal info card */}
          <div className="mb-8 rounded-lg border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-white/60 backdrop-blur-sm">
            <p className="mb-1 font-semibold text-white/80">Propriétaire du site :</p>
            <p>GSLV EURL • SIREN : 914499876 • RCS : La Rochelle</p>
            <p>5 Rue Jean Coyttar, 17290 Thairé, France • contact@moverz.fr</p>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm md:flex-row">
            <p className="text-white/70">
              © {new Date().getFullYear()} <span className="font-semibold text-white">Moverz</span> – GSLV EURL (SIREN 914499876). Tous droits réservés.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/70">
              <span>Fait en France</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
