import Image from "next/image";
import Link from "next/link";

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
    <footer
      className="border-t border-white/10"
      style={{ background: "var(--color-bg-dark)" }}
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-6 lg:px-8 py-10 md:py-14">
        {/* Brand + CTA en haut - Mobile */}
        <div className="mb-8 md:hidden">
          <a href="/" className="inline-flex items-center gap-2.5 mb-4" title="Moverz">
            <Image src="/logo.png" alt="Logo Moverz" width={32} height={32} className="h-8 w-8" />
            <span className="font-heading text-xl font-bold text-white">
              Moverz
            </span>
          </a>
          
          <div className="space-y-2 mb-5">
            <p className="text-sm font-semibold text-white leading-snug">
              Le comparateur anti-arnaque du déménagement :
            </p>
            <p className="text-xs text-white/60 leading-snug">
              Zéro harcèlement · 3+ devis fiables sous 5 jours · 100% gratuit
            </p>
          </div>
          
          <a
            href="https://devis.moverz.fr/devis-gratuits?source=moverz.fr&from=footer"
            className="flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ 
              background: "#F59E0B",
              boxShadow: "0 2px 8px rgba(245,158,11,0.25)"
            }}
          >
            Obtenir mes devis
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 md:gap-8 mb-10">
          {/* Col 1: Brand + Texte + CTA - Desktop uniquement */}
          <div className="hidden md:block md:col-span-1 space-y-4">
            <a href="/" className="inline-flex items-center gap-2.5" title="Moverz">
              <Image src="/logo.png" alt="Logo Moverz" width={32} height={32} className="h-8 w-8" />
              <span className="font-heading text-xl font-bold text-white">
                Moverz
              </span>
            </a>
            
            {/* Texte sous le logo */}
            <div className="space-y-1.5">
              <p className="text-sm font-semibold text-white leading-snug">
                Le comparateur anti-arnaque du déménagement :
              </p>
              <p className="text-xs text-white/60 leading-snug">
                Zéro harcèlement · 3+ devis fiables sous 5 jours · 100% gratuit
              </p>
            </div>
            
            {/* CTA Obtenir devis */}
            <a
              href="https://devis.moverz.fr/devis-gratuits?source=moverz.fr&from=footer"
              className="flex items-center justify-center gap-2 w-full rounded-xl px-4 py-2 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ 
                background: "#F59E0B",
                boxShadow: "0 2px 8px rgba(245,158,11,0.25)"
              }}
            >
              Obtenir mes devis
            </a>
          </div>

          {/* Colonnes 2-5 : Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="md:col-span-1">
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base text-white">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={
                        link.label === "Voir toutes les villes"
                          ? "hover:text-white transition-colors"
                          : "text-white/70 hover:text-white transition-colors"
                      }
                      style={
                        link.label === "Voir toutes les villes"
                          ? { color: "var(--color-accent)" }
                          : undefined
                      }
                    >
                      {link.label}
                      {link.label === "Voir toutes les villes" && " →"}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 6 : Search bar - Desktop uniquement */}
          <div className="hidden md:block md:col-span-1">
            <form action="/search" method="get" className="flex gap-2">
              <label className="sr-only" htmlFor="footer-search-q">
                Rechercher dans le blog
              </label>
              <input
                id="footer-search-q"
                name="q"
                placeholder="Rechercher..."
                className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)]"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl p-2.5 text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: "var(--color-accent)" }}
                aria-label="Rechercher dans le blog"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Section légale - Plus compacte en mobile */}
        <div className="mb-8 md:mb-10">
          <div className="text-xs text-white/60 leading-relaxed">
            <p className="mb-1">
              <span className="font-medium text-white/80">Propriétaire :</span> GSLV EURL · SIREN 914499876 · RCS La Rochelle
            </p>
            <p>5 Rue Jean Coyttar, 17290 Thairé, France · contact@moverz.fr</p>
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
  );
}
