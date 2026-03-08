import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildTunnelUrl } from "@/lib/tunnel-url";
import { AUTHORS } from "@/lib/authors";
import {
  ShieldCheck,
  EyeOff,
  Zap,
  ArrowRight,
  Linkedin,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "À propos de Moverz : notre histoire, notre mission, notre équipe",
  description:
    "Guillaume et Lucie ont fondé Moverz après un déménagement cauchemar. Mission : rendre le déménagement transparent, sans harcèlement, avec des déménageurs vérifiés.",
  alternates: { canonical: "https://moverz.fr/a-propos/" },
  openGraph: {
    title: "À propos de Moverz : notre histoire, notre mission, notre équipe",
    description:
      "Guillaume et Lucie ont fondé Moverz après un déménagement cauchemar. Mission : rendre le déménagement transparent, sans harcèlement, avec des déménageurs vérifiés.",
    url: "https://moverz.fr/a-propos/",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://moverz.fr/#organization",
  name: "Moverz",
  url: "https://moverz.fr/",
  logo: "https://moverz.fr/logo.png",
  description:
    "Moverz est le seul comparateur de déménagement zéro démarchage en France. Dossier standardisé, déménageurs vérifiés (Creditsafe + Pappers + avis Google), 3-5 devis comparables.",
  foundingDate: "2022",
  founders: [
    { "@id": "https://moverz.fr/#person-guillaume-stehelin" },
    { "@id": "https://moverz.fr/#person-lucie-veltz" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 Rue Jean Coyttar",
    addressLocality: "Thairé",
    postalCode: "17290",
    addressCountry: "FR",
  },
  sameAs: ["https://www.linkedin.com/company/moverz/"],
};

const guillaumeSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://moverz.fr/#person-guillaume-stehelin",
  name: "Guillaume Stehelin de Taisne",
  jobTitle: "Co-fondateur & Logistics Specialist",
  url: "https://moverz.fr/auteurs/guillaume/",
  worksFor: { "@id": "https://moverz.fr/#organization" },
  sameAs: ["https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/"],
  knowsAbout: ["Logistique déménagement", "Vérification déménageurs", "Stratégie produit"],
};

const lucieSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://moverz.fr/#person-lucie-veltz",
  name: "Lucie Veltz",
  jobTitle: "Marketing & Relocation Expert",
  url: "https://moverz.fr/auteurs/lucie/",
  worksFor: { "@id": "https://moverz.fr/#organization" },
  sameAs: ["https://www.linkedin.com/in/lucieveltz/"],
  knowsAbout: ["Relocation", "Protection consommateur", "Guides déménagement"],
};

export default function AProposPage() {
  const lucie = AUTHORS.lucie;
  const guillaume = AUTHORS.guillaume;

  return (
    <main className="min-h-screen" style={{ background: "var(--color-bg-page)" }}>
      <JsonLd id="organization-schema" data={organizationSchema} />
      <JsonLd id="person-guillaume" data={guillaumeSchema} />
      <JsonLd id="person-lucie" data={lucieSchema} />

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #0B0F14 0%, #111820 100%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(14,165,166,0.13) 0%, transparent 65%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative container max-w-4xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold mb-6"
            style={{ background: "rgba(14,165,166,0.12)", color: "#0EA5A6" }}
          >
            Notre histoire
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
            Révolutionner le déménagement.{" "}
            <span style={{ color: "#0EA5A6" }}>Ensemble.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Rendre le déménagement simple, transparent et digital — pour que chaque
            particulier parte avec les mêmes armes qu'un professionnel.
          </p>

          {/* Stats inline */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { value: "3 millions", label: "de déménagements/an en France" },
              { value: "257", label: "faillites de déménageurs en 2024" },
              { value: "64 %", label: "d'anomalies (DGCCRF 2023)" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-white/50 mt-0.5 max-w-[120px]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LE PROBLÈME QU'ON A DÉCIDÉ DE RÉSOUDRE ─── */}
      <section className="section section-light">
        <div className="container max-w-4xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.3em] mb-3"
                style={{ color: "#0EA5A6" }}
              >
                L'idée fondatrice
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: "var(--color-text)" }}>
                Tout a commencé par un déménagement raté
              </h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                <p>
                  En 2021, Guillaume déménage de Paris à La Rochelle. Il remplit 4 formulaires
                  en ligne. Résultat : 5 devis avec des volumes si différents qu'ils sont
                  impossibles à comparer — l'un estime 18 m³, un autre 32 m³ pour le même
                  appartement. Et dans les 48 heures qui suivent, son téléphone ne s'arrête
                  pas de sonner.
                </p>
                <p>
                  Trois jours avant le déménagement, l'une des entreprises disparaît.
                  Injoignable. Acompte perdu.
                </p>
                <p>
                  Lucie, de son côté, accompagnait des cadres en relocation depuis plusieurs
                  années. Elle voyait les mêmes dégâts se répéter : des clients bien informés
                  s'en sortaient, les autres non. Le problème n'était pas le marché — c'était
                  l'accès à l'information.
                </p>
                <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                  L'idée : standardiser le dossier <em>avant</em> de le transmettre aux
                  déménageurs. Même volume calculé, mêmes contraintes d'accès, mêmes options —
                  pour que les devis reçus soient enfin comparables.
                </p>
              </div>
            </div>

            {/* Carte visuelle "avant / après" */}
            <div className="space-y-3">
              {[
                {
                  icon: AlertTriangle,
                  label: "Constat",
                  text: "Devis incomparables, harcèlement téléphonique, entreprises non vérifiées.",
                  bad: true,
                },
                {
                  icon: Zap,
                  label: "Idée",
                  text: "Standardiser le dossier avant transmission. Même base = devis réellement comparables.",
                  bad: false,
                },
                {
                  icon: CheckCircle,
                  label: "Aujourd'hui",
                  text: "1 000+ déménageurs vérifiés. 0 harcèlement. 0 faillite dans notre réseau depuis janvier 2026.",
                  bad: false,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border p-5 flex gap-4 items-start"
                  style={{
                    background: item.bad ? "rgba(239,68,68,0.04)" : "rgba(14,165,166,0.04)",
                    borderColor: item.bad ? "rgba(239,68,68,0.15)" : "rgba(14,165,166,0.15)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{
                      background: item.bad ? "rgba(239,68,68,0.1)" : "rgba(14,165,166,0.1)",
                    }}
                  >
                    <item.icon
                      className="w-4 h-4"
                      style={{ color: item.bad ? "#EF4444" : "#0EA5A6" }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-1"
                      style={{ color: item.bad ? "#EF4444" : "#0EA5A6" }}
                    >
                      {item.label}
                    </p>
                    <p className="text-sm leading-snug" style={{ color: "var(--color-text)" }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section
        className="section"
        style={{ background: "#F8FFFE", borderTop: "1px solid rgba(14,165,166,0.1)" }}
      >
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em] mb-3"
              style={{ color: "#0EA5A6" }}
            >
              Ce qu'on fait, vraiment
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
              Notre mission
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
              Réduire l'asymétrie d'information entre le client et les déménageurs. Le client
              part avec un dossier solide, des devis comparables, et une visibilité sur la
              fiabilité financière des entreprises.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                Icon: EyeOff,
                title: "Zéro harcèlement",
                text: "Dossier 100% anonyme. Vos coordonnées ne sont jamais partagées sans votre accord. Vous choisissez qui peut vous contacter — pas l'inverse.",
              },
              {
                Icon: ShieldCheck,
                title: "Déménageurs vérifiés",
                text: "3 analyses de risque /100 : solidité financière (Creditsafe + Pappers), avis clients (Google), risque juridique (Pappers Décisions). Alertes = exclusion automatique.",
              },
              {
                Icon: TrendingDown,
                title: "Devis comparables",
                text: "Même volume calculé, mêmes contraintes, mêmes options pour tous les déménageurs. Les devis reçus reposent sur la même base. Fini les surprises jour J.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border p-6"
                style={{ background: "white", borderColor: "rgba(14,165,166,0.2)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(14,165,166,0.1)" }}
                >
                  <item.Icon className="w-5 h-5" style={{ color: "#0EA5A6" }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: "var(--color-text)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Stat forte */}
          <div
            className="mt-8 rounded-2xl border p-6 text-center"
            style={{ background: "rgba(14,165,166,0.06)", borderColor: "rgba(14,165,166,0.2)" }}
          >
            <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
              <span className="text-2xl font-bold" style={{ color: "#0EA5A6" }}>0 faillite</span>{" "}
              chez les déménageurs du réseau Moverz depuis janvier 2026.
              Contre 257 faillites sur le marché général en 2024.
            </p>
          </div>
        </div>
      </section>

      {/* ─── L'ÉQUIPE ─── */}
      <section className="section section-light">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em] mb-3"
              style={{ color: "#0EA5A6" }}
            >
              Les personnes derrière Moverz
            </p>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--color-text)" }}>
              L'équipe
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[guillaume, lucie].map((author) => (
              <div
                key={author.slug}
                className="rounded-2xl border p-7 flex flex-col"
                style={{ background: "white", borderColor: "var(--color-border)" }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <a
                    href={`/auteurs/${author.slug}/`}
                    className="relative flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2"
                    style={{ borderColor: "rgba(14,165,166,0.3)" }}
                  >
                    <span
                      className="absolute inset-0 flex items-center justify-center text-xl font-bold"
                      style={{ background: "rgba(14,165,166,0.1)", color: "#0EA5A6", zIndex: 0 }}
                    >
                      {author.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                    <Image
                      src={author.photoUrl}
                      alt={author.name}
                      fill
                      className="object-cover"
                      style={{ zIndex: 1 }}
                    />
                  </a>
                  <div>
                    <a
                      href={`/auteurs/${author.slug}/`}
                      className="font-bold text-base hover:underline"
                      style={{ color: "var(--color-text)" }}
                    >
                      {author.name}
                    </a>
                    <p className="text-sm mt-0.5 font-medium" style={{ color: "#0EA5A6" }}>
                      {author.role}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--color-text-secondary)" }}>
                  {author.bioLong}
                </p>

                <div className="flex gap-4 pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
                  <a
                    href={`/auteurs/${author.slug}/`}
                    className="text-sm font-semibold hover:underline"
                    style={{ color: "var(--color-text)" }}
                  >
                    Ses articles →
                  </a>
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                    style={{ color: "#0EA5A6" }}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CE QU'ON N'EST PAS ─── */}
      <section
        className="section"
        style={{ background: "#F8FFFE", borderTop: "1px solid rgba(14,165,166,0.1)" }}
      >
        <div className="container max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--color-text)" }}>
              Ce qu'on n'est pas
            </h2>
            <p className="text-sm mt-2" style={{ color: "var(--color-text-secondary)" }}>
              La clarté, ça commence par dire ce qu'on ne fait pas.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Pas un déménageur",
                text: "On ne transporte rien. On ne stocke rien. On met en relation des particuliers avec des professionnels vérifiés.",
              },
              {
                title: "Pas un formulaire à leads",
                text: "On ne revend pas vos coordonnées à 15 déménageurs. Votre dossier est anonyme jusqu'à ce que vous décidiez de contacter quelqu'un.",
              },
              {
                title: "Pas un vendeur de données",
                text: "Aucune donnée personnelle n'est vendue ou partagée à des fins marketing. Hébergement EU, conformité RGPD.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border p-5"
                style={{ background: "white", borderColor: "var(--color-border)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(239,68,68,0.1)" }}
                  >
                    <X className="w-3.5 h-3.5 text-red-500" strokeWidth={3} />
                  </div>
                  <h3 className="font-bold text-sm" style={{ color: "var(--color-text)" }}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CHIFFRES ─── */}
      <section className="section section-light">
        <div className="container max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--color-text)" }}>
              En chiffres
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "1 000+", label: "déménageurs vérifiés" },
              { value: "3", label: "analyses de risque /100" },
              { value: "0 €", label: "pour les particuliers" },
              { value: "0", label: "appel non sollicité" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border p-5 text-center"
                style={{ background: "white", borderColor: "rgba(14,165,166,0.2)" }}
              >
                <div
                  className="text-2xl md:text-3xl font-bold font-heading mb-1"
                  style={{ color: "#0EA5A6" }}
                >
                  {s.value}
                </div>
                <div className="text-xs font-medium leading-tight" style={{ color: "var(--color-text-secondary)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xs text-center" style={{ color: "var(--color-text-secondary)" }}>
            Société : <span style={{ color: "var(--color-text)" }} className="font-medium">GSLV EURL</span>
            {" · "}SIREN 914499876
            {" · "}5 Rue Jean Coyttar, 17290 Thairé
            {" · "}
            <a href="/cgu/" className="hover:underline" style={{ color: "#0EA5A6" }}>CGU</a>
            {" · "}
            <a href="/politique-confidentialite/" className="hover:underline" style={{ color: "#0EA5A6" }}>Confidentialité</a>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section section-contrast">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Un déménagement à préparer ?
          </h2>
          <p className="text-white/70 mb-6 text-base">
            Dossier en 3 minutes. Déménageurs vérifiés. 3–5 devis comparables sous 5 jours.
            Dossier anonyme, sans démarchage. 100% gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={buildTunnelUrl({ from: "a-propos-cta" })}
              rel="nofollow"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg hover:opacity-90 transition-all"
              style={{ background: "#F59E0B", boxShadow: "0 4px 16px rgba(245,158,11,0.3)" }}
            >
              Obtenir mes devis gratuits
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-semibold text-white hover:bg-white/15 transition-all"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
