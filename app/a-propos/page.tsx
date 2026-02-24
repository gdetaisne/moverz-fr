import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import { JsonLd } from "@/components/schema/JsonLd";
import { buildTunnelUrl } from "@/lib/tunnel-url";
import {
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Scale,
  BadgeCheck,
  Camera,
  ArrowRight,
  Linkedin,
  Cat,
} from "lucide-react";

export const metadata: Metadata = getFullMetadata(
  'a-propos',
  "À propos de Moverz : Comparateur Anti-Arnaque [Notre Mission]",
  "Qui sommes-nous ? Notre mission : simplifier le déménagement avec un comparateur transparent · Pros contrôlés · Devis comparables · Sans démarchage · Découvrez notre équipe"
);

export default function AProposPage() {
  return (
    <main className="bg-hero min-h-screen">
      <JsonLd
        id="person-lucie-veltz"
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://moverz.fr/#person-lucie-veltz",
          name: "Lucie Veltz",
          url: "https://moverz.fr/a-propos/",
          worksFor: { "@id": "https://moverz.fr/#organization" },
          sameAs: ["https://www.linkedin.com/in/lucieveltz/"],
        }}
      />
      <JsonLd
        id="person-guillaume-stehelin"
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://moverz.fr/#person-guillaume-stehelin",
          name: "Guillaume Stehelin de Taisne",
          url: "https://moverz.fr/a-propos/",
          worksFor: { "@id": "https://moverz.fr/#organization" },
          sameAs: ["https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/"],
        }}
      />
      <div className="halo" />
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0" style={{ 
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #111827 100%)"
        }} />
        
        {/* Radial gradients for depth */}
        <div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-v4-accent/12 blur-[120px]" />
        <div className="absolute -bottom-20 right-1/4 h-96 w-96 rounded-full bg-v4-accent/12 blur-[120px]" />
        
        {/* Grain texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
          }}
        />
        
        {/* Subtle radial overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(14,165,166,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-white">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "À propos", href: "/a-propos/" }
            ]}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-v4-accent" />
                Anti-arnaque · 100% orienté clarté
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05]">
                On rend le déménagement{" "}
                <span className="text-v4-accent">simple</span>,{" "}
                <span className="text-v4-accent">clair</span>,{" "}
                <span className="text-v4-accent">sans stress</span>.
              </h1>

              <p className="mt-5 text-lg text-white/80 max-w-xl">
                Moverz n’est pas un “formulaire à leads”. On standardise votre dossier (accès,
                contraintes) pour obtenir des devis comparables — et on vous évite les mauvaises
                surprises.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={buildTunnelUrl({ from: "a-propos-cta" })}
                  rel="nofollow"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-v4-text shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-all"
                >
                  Comparer mes devis{" "}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15 transition-all"
                >
                  Nous contacter <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/70">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
                  Sans démarchage
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
                  Dossier anonyme
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
                  Devis comparables
                </span>
              </div>
            </div>

            {/* Right: mini cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="group rounded-3xl border backdrop-blur-xl p-7 transition-all hover:border-white/25 hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)" }}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-v4-accent/20 text-v4-accent mb-5 group-hover:bg-v4-accent/25 transition-colors">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <p className="text-base font-bold text-white">On déteste les surprises</p>
                <p className="mt-2.5 text-sm leading-relaxed text-white/75">
                  Volume, accès, étages… on met ça noir sur blanc, avant le jour J.
                </p>
              </div>
              <div className="group rounded-3xl border backdrop-blur-xl p-7 transition-all hover:border-white/25 hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)" }}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-v4-accent/20 text-v4-accent mb-5 group-hover:bg-v4-accent/25 transition-colors">
                  <Scale className="h-6 w-6" />
                </div>
                <p className="text-base font-bold text-white">On compare proprement</p>
                <p className="mt-2.5 text-sm leading-relaxed text-white/75">
                  Même cahier des charges = devis comparables = décision plus simple.
                </p>
              </div>
              <div className="group rounded-3xl border backdrop-blur-xl p-7 transition-all hover:border-white/25 hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)" }}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-v4-accent/20 text-v4-accent mb-5 group-hover:bg-v4-accent/25 transition-colors">
                  <Camera className="h-6 w-6" />
                </div>
                <p className="text-base font-bold text-white">Les détails, c'est la vérité</p>
                <p className="mt-2.5 text-sm leading-relaxed text-white/75">
                  Ils évitent 90% des malentendus ("ah, il y avait une cave…").
                </p>
              </div>
              <div className="group rounded-3xl border backdrop-blur-xl p-7 transition-all hover:border-white/25 hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)" }}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-v4-accent/20 text-v4-accent mb-5 group-hover:bg-v4-accent/25 transition-colors">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <p className="text-base font-bold text-white">Pros contrôlés</p>
                <p className="mt-2.5 text-sm leading-relaxed text-white/75">
                  Solvabilité, signaux faibles : on filtre avant de vous présenter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="group relative rounded-3xl border backdrop-blur-sm p-8 md:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300" style={{ background: "rgba(255,255,255,0.98)", borderColor: "rgba(14,165,166,0.15)" }}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(240,253,250,0.5) 0%, rgba(224,242,254,0.5) 100%)" }} />
              <div className="relative">
                <h2 className="text-2xl font-bold text-v4-text">Notre mission</h2>
                <p className="mt-4 text-[#1E293B]/75 leading-relaxed">
                  Transformer un moment stressant en une décision simple: un dossier clair, des devis
                  comparables, et zéro zone grise.
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl border backdrop-blur-sm p-8 md:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300" style={{ background: "rgba(255,255,255,0.98)", borderColor: "rgba(14,165,166,0.15)" }}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(240,253,250,0.5) 0%, rgba(224,242,254,0.5) 100%)" }} />
              <div className="relative">
                <h2 className="text-2xl font-bold text-v4-text">Notre promesse</h2>
                <p className="mt-4 text-[#1E293B]/75 leading-relaxed">
                  Vous aider à choisir un déménageur fiable — pas juste "le moins cher" — sans démarchage
                  ni surprise.
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl border backdrop-blur-sm p-8 md:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300" style={{ background: "rgba(255,255,255,0.98)", borderColor: "rgba(14,165,166,0.15)" }}>
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(240,253,250,0.5) 0%, rgba(224,242,254,0.5) 100%)" }} />
              <div className="relative">
                <h2 className="text-2xl font-bold text-v4-text">Notre obsession</h2>
                <p className="mt-4 text-[#1E293B]/75 leading-relaxed">
                  Les détails qui font exploser les prix (étages, accès, cave, objets lourds). On les
                  capture avant de comparer.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            {/* Full-width anti-scam block (évite le “trou” de grid) */}
            <div className="relative overflow-hidden rounded-3xl border border-v4-border bg-gradient-to-b from-white to-[#FAFBFC] p-7 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-turquoise/70 via-[#0F172A]/20 to-brand-turquoise/70" />
              <h3 className="text-xl md:text-2xl font-bold text-v4-text">
                Comment on évite les arnaques (vraiment)
              </h3>
              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-v4-accent/15 text-v4-accent">
                    <BadgeCheck className="h-4 w-4" />
                  </span>
                  <div className="text-[#1E293B]/75">
                    <p className="font-semibold text-v4-text">Contrôles</p>
                    <p className="text-sm">Pro, solvabilité, signaux faibles — avant de vous faire choisir.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-v4-accent/15 text-v4-accent">
                    <Camera className="h-4 w-4" />
                  </span>
                  <div className="text-[#1E293B]/75">
                    <p className="font-semibold text-v4-text">Dossier clair</p>
                    <p className="text-sm">Pour limiter les “ajustements” de dernière minute.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-v4-accent/15 text-v4-accent">
                    <Scale className="h-4 w-4" />
                  </span>
                  <div className="text-[#1E293B]/75">
                    <p className="font-semibold text-v4-text">Comparaison propre</p>
                    <p className="text-sm">Même cahier des charges, mêmes options.</p>
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <a
                  href="/verifications-partenaires/"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0F172A]/15 bg-white px-5 py-2.5 text-sm font-semibold text-v4-text hover:bg-gray-50 transition-colors"
                >
                  Voir nos vérifications <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Team block */}
            <div className="rounded-3xl border border-v4-border bg-white p-7 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-v4-text">
                    Qui est derrière Moverz ?
                  </h3>
                  <p className="mt-1 text-sm text-[#1E293B]/70">
                    Deux humains, zéro blabla, beaucoup de check-lists.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {/* Lucie */}
                <div className="rounded-2xl border border-v4-border bg-[#FAFBFC] p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-v4-border bg-white">
                      <Image
                        src="/lucie-profile.jpg"
                        alt="Lucie, cofondateur Moverz"
                        width={56}
                        height={56}
                        className="h-14 w-14 object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-v4-text">
                          Lucie <span className="text-v4-text-secondary font-medium">· Cofondateur</span>
                        </p>
                        <a
                          href="https://www.linkedin.com/in/lucieveltz/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-[#0F172A]/10 bg-white px-3 py-1.5 text-xs font-semibold text-v4-text hover:bg-gray-50 transition-colors"
                          aria-label="LinkedIn de Lucie"
                        >
                          <Linkedin className="h-3.5 w-3.5" />
                          LinkedIn
                        </a>
                      </div>
                      <p className="mt-2 text-sm text-[#1E293B]/70">
                        Obsédée par le “dossier clair” (pour que le prix du devis soit le prix final).
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 rounded-xl border border-v4-accent/25 bg-white p-4 text-sm text-v4-text">
                    <p className="font-semibold">Fun fact</p>
                    <p className="mt-1 text-v4-text/75">
                      Lucie et ses déménagements “intempestifs” : elle a un talent rare pour trouver un
                      appart… puis décider de partir 3 mois après. Résultat: la check-list cartons est devenue
                      une seconde langue.
                    </p>
                  </div>
                </div>

                {/* Guillaume */}
                <div className="rounded-2xl border border-v4-border bg-[#FAFBFC] p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-v4-border bg-white">
                      <Image
                        src="/guillaume-profile.jpg"
                        alt="Guillaume, cofondateur Moverz"
                        width={56}
                        height={56}
                        className="h-14 w-14 object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-v4-text">
                          Guillaume{" "}
                          <span className="text-v4-text-secondary font-medium">· Cofondateur</span>
                        </p>
                        <a
                          href="https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-[#0F172A]/10 bg-white px-3 py-1.5 text-xs font-semibold text-v4-text hover:bg-gray-50 transition-colors"
                          aria-label="LinkedIn de Guillaume"
                        >
                          <Linkedin className="h-3.5 w-3.5" />
                          LinkedIn
                        </a>
                      </div>
                      <p className="mt-2 text-sm text-[#1E293B]/70">
                        Fan de process simples et de décisions nettes: “on compare proprement, point”.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 rounded-xl border border-v4-accent/25 bg-white p-4 text-sm text-v4-text">
                    <p className="font-semibold inline-flex items-center gap-2">
                      Fun fact <Cat className="h-4 w-4 text-v4-accent" />
                    </p>
                    <p className="mt-1 text-v4-text/75">
                      Guillaume ne déménage <strong>jamais</strong> sans ses chats. Le camion peut être en retard,
                      les cartons pas finis… mais les chats, eux, ont toujours leur “kit premium” (coussin + croquettes + plan d’évacuation).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-v4-text px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-colors"
                >
                  Nous écrire <span aria-hidden="true">→</span>
                </a>
                <a
                  href="/partenaires/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#0F172A]/15 bg-white px-6 py-3 text-sm font-semibold text-v4-text hover:bg-gray-50 transition-colors"
                >
                  Devenir partenaire <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-v4-border bg-white p-7 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-v4-text">Notre histoire (version courte)</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-v4-border bg-[#FAFBFC] p-6">
                <p className="text-xs font-semibold text-v4-text-secondary uppercase tracking-wider">Constat</p>
                <p className="mt-2 font-semibold text-v4-text">Devis incomparables</p>
                <p className="mt-2 text-sm text-[#1E293B]/70">
                  Trop de “détails” oubliés, et des surprises qui tombent à la fin.
                </p>
              </div>
              <div className="rounded-2xl border border-v4-border bg-[#FAFBFC] p-6">
                <p className="text-xs font-semibold text-v4-text-secondary uppercase tracking-wider">Solution</p>
                <p className="mt-2 font-semibold text-v4-text">Dossier standardisé</p>
                <p className="mt-2 text-sm text-[#1E293B]/70">
                  Infos + contraintes + règles de comparaison : on compare “à cahier des charges égal”.
                </p>
              </div>
              <div className="rounded-2xl border border-v4-border bg-[#FAFBFC] p-6">
                <p className="text-xs font-semibold text-v4-text-secondary uppercase tracking-wider">Aujourd’hui</p>
                <p className="mt-2 font-semibold text-v4-text">Anti-arnaque + Pro</p>
                <p className="mt-2 text-sm text-[#1E293B]/70">
                  On aide les particuliers à choisir mieux, et les pros à chiffrer plus vite.
                </p>
              </div>
            </div>
            <div className="mt-6 text-xs text-v4-text-secondary">
              Société: <span className="text-v4-text font-medium">GSLV EURL</span> · 5 Rue Jean Coyttar · 17290 Thairé (FR)
            </div>
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            On avance. Avec vous.
          </h2>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Un déménagement à préparer ? Un doute sur un devis ? Un déménageur à évaluer ?
            On vous répond vite.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/contact/"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-turquoise via-[#4FB8B8] to-[#3DA5A5] px-8 py-4 text-base font-semibold text-[#04141f] shadow-[0_8px_30px_rgba(107,207,207,0.35)] hover:shadow-[0_12px_50px_rgba(107,207,207,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <span className="relative">Contact</span>
              <span className="relative text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

