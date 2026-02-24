import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/schema/JsonLd";
import { TrendingUp, AlertTriangle, Shield, BarChart3, ExternalLink } from "lucide-react";

export const metadata: Metadata = getFullMetadata(
  "chiffres-cles",
  "Chiffres clés du déménagement en France (2026) : marché, prix, arnaques",
  "Statistiques officielles sur le marché du déménagement en France : 3M de déménagements/an, prix moyens, taux d'arnaques, entreprises en difficulté. Sources : INSEE, Creditsafe, DGCCRF."
);

export default function ChiffresClesPage() {
  return (
    <div className="bg-hero min-h-screen">
      <JsonLd
        id="chiffres-cles"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://moverz.fr/chiffres-cles/",
          name: "Chiffres clés du déménagement en France (2026)",
          description: "Statistiques officielles sur le marché du déménagement : volume, prix, arnaques, entreprises en difficulté. Sources vérifiées.",
          url: "https://moverz.fr/chiffres-cles/",
          inLanguage: "fr-FR",
          isPartOf: { "@id": "https://moverz.fr/#website" },
        }}
      />
      <div className="halo" />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #111827 100%)"
        }} />
        
        <div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-v4-accent/12 blur-[120px]" />
        <div className="absolute -bottom-20 right-1/4 h-96 w-96 rounded-full bg-v4-accent/12 blur-[120px]" />
        
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-white">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Chiffres clés", href: "/chiffres-cles/" }
            ]}
          />

          <div className="mt-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm">
              <BarChart3 className="h-4 w-4 text-v4-accent" />
              Données officielles · Sources vérifiées
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05]">
              Chiffres clés du{" "}
              <span className="text-v4-accent">déménagement</span>{" "}
              en France
            </h1>

            <p className="mt-5 text-lg text-white/80 max-w-3xl">
              Statistiques officielles sur le marché du déménagement : volume, prix moyens, taux d'arnaques, 
              entreprises en difficulté. Toutes les sources sont citées et vérifiables.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-light">
        <div className="container max-w-6xl">
          {/* Market Overview */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-v4-accent to-[#0D9B9B] text-white shadow-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-v4-text">Le marché du déménagement en France</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Stat card 1 */}
              <div className="group rounded-3xl border border-v4-border bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="relative">
                  <p className="text-sm font-semibold text-v4-text-secondary uppercase tracking-wider">Volume annuel</p>
                  <p className="mt-3 text-4xl font-bold text-v4-text">~3M</p>
                  <p className="mt-2 text-sm text-[#1E293B]/75">
                    Environ 3 millions de déménagements par an en France (particuliers + entreprises)
                  </p>
                  <a 
                    href="https://www.insee.fr/fr/statistiques" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-v4-accent hover:underline"
                  >
                    Source : INSEE <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Stat card 2 */}
              <div className="group rounded-3xl border border-v4-border bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="relative">
                  <p className="text-sm font-semibold text-v4-text-secondary uppercase tracking-wider">Nombre d'entreprises</p>
                  <p className="mt-3 text-4xl font-bold text-v4-text">~3000</p>
                  <p className="mt-2 text-sm text-[#1E293B]/75">
                    Environ 3000 entreprises de déménagement actives en France (capacité de transport vérifiée)
                  </p>
                  <a 
                    href="https://www.data.gouv.fr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-v4-accent hover:underline"
                  >
                    Source : Data.gouv.fr <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Stat card 3 */}
              <div className="group rounded-3xl border border-v4-border bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="relative">
                  <p className="text-sm font-semibold text-v4-text-secondary uppercase tracking-wider">Prix moyen T2/T3 local</p>
                  <p className="mt-3 text-4xl font-bold text-v4-text">800-1500€</p>
                  <p className="mt-2 text-sm text-[#1E293B]/75">
                    Prix moyen pour un déménagement T2/T3 local (moins 30 km), formule standard
                  </p>
                  <a 
                    href="/blog/prix-demenagement-2026/" 
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-v4-accent hover:underline"
                  >
                    Voir le guide complet
                  </a>
                </div>
              </div>

              {/* Stat card 4 */}
              <div className="group rounded-3xl border border-v4-border bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="relative">
                  <p className="text-sm font-semibold text-v4-text-secondary uppercase tracking-wider">Prix moyen longue distance</p>
                  <p className="mt-3 text-4xl font-bold text-v4-text">2000-4000€</p>
                  <p className="mt-2 text-sm text-[#1E293B]/75">
                    Prix moyen pour un déménagement T2/T3 longue distance (300-500 km), formule standard
                  </p>
                  <a 
                    href="/blog/prix-demenagement-2026/" 
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-v4-accent hover:underline"
                  >
                    Voir le guide complet
                  </a>
                </div>
              </div>

              {/* Stat card 5 */}
              <div className="group rounded-3xl border border-v4-border bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="relative">
                  <p className="text-sm font-semibold text-v4-text-secondary uppercase tracking-wider">Période haute</p>
                  <p className="mt-3 text-4xl font-bold text-v4-text">+20-30%</p>
                  <p className="mt-2 text-sm text-[#1E293B]/75">
                    Surcoût moyen en période haute (juin-août, fins de mois, week-ends)
                  </p>
                  <p className="mt-4 text-xs text-[#1E293B]/60">
                    Étude sectorielle 2024-2025
                  </p>
                </div>
              </div>

              {/* Stat card 6 */}
              <div className="group rounded-3xl border border-v4-border bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="relative">
                  <p className="text-sm font-semibold text-v4-text-secondary uppercase tracking-wider">Volume moyen</p>
                  <p className="mt-3 text-4xl font-bold text-v4-text">25-35m³</p>
                  <p className="mt-2 text-sm text-[#1E293B]/75">
                    Volume moyen d'un déménagement T2/T3 (varie selon le mobilier et les objets)
                  </p>
                  <a 
                    href="/blog/estimer-volume-demenagement-guide-complet/" 
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-v4-accent hover:underline"
                  >
                    Calculer votre volume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Financial difficulties */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-v4-text">Entreprises en difficulté</h2>
            </div>

            <div className="rounded-3xl border border-orange-200 bg-gradient-to-b from-orange-50 to-white p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <p className="text-5xl font-bold text-orange-600">15-20%</p>
                  <p className="mt-2 font-semibold text-v4-text">En difficulté financière</p>
                  <p className="mt-2 text-sm text-[#1E293B]/75">
                    Des entreprises de déménagement présentent des signaux de fragilité (dettes, trésorerie tendue, retards de paiement)
                  </p>
                  <a 
                    href="https://www.creditsafe.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:underline"
                  >
                    Source : Creditsafe <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div>
                  <p className="text-5xl font-bold text-orange-600">5-8%</p>
                  <p className="mt-2 font-semibold text-v4-text">En procédure collective</p>
                  <p className="mt-2 text-sm text-[#1E293B]/75">
                    Chaque année, 5 à 8% des entreprises entrent en redressement ou liquidation judiciaire (BODACC)
                  </p>
                  <a 
                    href="https://www.bodacc.fr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:underline"
                  >
                    Source : BODACC <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div>
                  <p className="text-5xl font-bold text-orange-600">40-50%</p>
                  <p className="mt-2 font-semibold text-v4-text">Avec suppléments jour J</p>
                  <p className="mt-2 text-sm text-[#1E293B]/75">
                    Des déménagements subissent des ajustements de prix le jour J (+200-800€ en moyenne) dus à une mauvaise estimation du volume
                  </p>
                  <p className="mt-4 text-xs text-[#1E293B]/60">
                    Études UFC-Que Choisir, retours terrain
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-orange-300 bg-white p-6">
                <p className="text-sm font-semibold text-v4-text mb-2">Comment se protéger</p>
                <p className="text-sm text-[#1E293B]/75">
                  Vérifiez toujours la solvabilité (score Creditsafe), les procédures en cours (BODACC), et exigez un dossier précis 
                  pour éviter les suppléments. <a href="/blog/comprendre-score-creditsafe-demenageur/" className="font-semibold text-v4-accent hover:underline">Guide complet</a>
                </p>
              </div>
            </div>
          </div>

          {/* Scams */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg">
                <Shield className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-v4-text">Arnaques et litiges</h2>
            </div>

            <div className="rounded-3xl border border-red-200 bg-gradient-to-b from-red-50 to-white p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <p className="text-5xl font-bold text-red-600">500-800</p>
                  <p className="mt-2 font-semibold text-v4-text">Plaintes DGCCRF/an</p>
                  <p className="mt-2 text-sm text-[#1E293B]/75">
                    Plaintes déposées chaque année auprès de la Direction Générale de la Concurrence, de la Consommation et de la Répression des Fraudes
                  </p>
                  <a 
                    href="https://www.economie.gouv.fr/dgccrf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:underline"
                  >
                    Source : DGCCRF <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div>
                  <p className="text-5xl font-bold text-red-600">8-12%</p>
                  <p className="mt-2 font-semibold text-v4-text">Taux de litiges</p>
                  <p className="mt-2 text-sm text-[#1E293B]/75">
                    Des déménagements donnent lieu à un litige (casse non indemnisée, supplément abusif, retard de livraison, affaires en otage)
                  </p>
                  <p className="mt-4 text-xs text-[#1E293B]/60">
                    Études sectorielles, UFC-Que Choisir
                  </p>
                </div>

                <div>
                  <p className="text-5xl font-bold text-red-600">1500-3000€</p>
                  <p className="mt-2 font-semibold text-v4-text">Préjudice moyen</p>
                  <p className="mt-2 text-sm text-[#1E293B]/75">
                    Montant moyen du préjudice subi en cas d'arnaque ou de litige grave (biens endommagés, supplément abusif, affaires perdues)
                  </p>
                  <p className="mt-4 text-xs text-[#1E293B]/60">
                    Retours consommateurs, études 2024-2025
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-red-300 bg-white p-6">
                <p className="text-sm font-semibold text-v4-text mb-2">Comment éviter les arnaques</p>
                <p className="text-sm text-[#1E293B]/75">
                  Vérifiez la capacité de transport, l'assurance RC Pro, la solvabilité (Creditsafe), les avis Google, 
                  et exigez un devis détaillé avec volume précis. <a href="/blog/eviter-arnaques-demenagement/" className="font-semibold text-v4-accent hover:underline">Guide complet</a>
                </p>
              </div>
            </div>
          </div>

          {/* Moverz minimal section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-v4-accent to-[#0D9B9B] text-white shadow-lg">
                <Shield className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-v4-text">Moverz en bref</h2>
            </div>

            <div className="rounded-3xl border border-v4-border bg-gradient-to-b from-white to-[#FAFBFC] p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <p className="text-5xl font-bold text-v4-accent">2024</p>
                  <p className="mt-2 font-semibold text-v4-text">Année de lancement</p>
                  <p className="mt-2 text-sm text-[#1E293B]/75">
                    Projet lancé en 2024 avec pour mission de standardiser les dossiers et vérifier les déménageurs
                  </p>
                </div>

                <div>
                  <p className="text-5xl font-bold text-v4-accent">3</p>
                  <p className="mt-2 font-semibold text-v4-text">Analyses de risque /100</p>
                  <p className="mt-2 text-sm text-[#1E293B]/75">
                    Chaque déménageur est évalué selon 3 critères : expérience client (Google), risque financier (Creditsafe + Pappers), risque juridique (Pappers Décisions)
                  </p>
                  <a 
                    href="/verifications-partenaires/" 
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-v4-accent hover:underline"
                  >
                    Voir nos vérifications
                  </a>
                </div>

                <div>
                  <p className="text-5xl font-bold text-v4-accent">100%</p>
                  <p className="mt-2 font-semibold text-v4-text">Couverture nationale</p>
                  <p className="mt-2 text-sm text-[#1E293B]/75">
                    Service disponible dans toutes les principales villes françaises et corridors (Paris, Lyon, Marseille, Bordeaux, etc.)
                  </p>
                  <a 
                    href="/villes/" 
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-v4-accent hover:underline"
                  >
                    Voir les villes
                  </a>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-v4-accent/25 bg-white p-6">
                <p className="text-sm font-semibold text-v4-text mb-2">Notre différence</p>
                <p className="text-sm text-[#1E293B]/75">
                  Moverz ne compare pas seulement des devis. Nous comparons des entreprises, leur fiabilité et le risque associé. 
                  Nous standardisons votre dossier pour obtenir des devis vraiment comparables, et nous excluons automatiquement 
                  les déménageurs avec alertes financières ou juridiques.
                </p>
                <a 
                  href="/pourquoi-moverz/" 
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-v4-accent hover:underline"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>

          {/* Sources section */}
          <div className="mt-16 rounded-3xl border border-v4-border bg-white p-8 md:p-10">
            <h3 className="text-xl font-bold text-v4-text mb-6">Sources et méthodologie</h3>
            <div className="space-y-4 text-sm text-[#1E293B]/75">
              <div>
                <p className="font-semibold text-v4-text">Marché du déménagement</p>
                <ul className="mt-2 ml-4 space-y-1 list-disc">
                  <li>Volume annuel : INSEE (Enquête Logement, données mobilité résidentielle)</li>
                  <li>Nombre d'entreprises : Data.gouv.fr (Registre des entreprises de transport)</li>
                  <li>Prix moyens : Études sectorielles 2024-2025, analyses comparatives multi-opérateurs</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-v4-text">Difficultés financières</p>
                <ul className="mt-2 ml-4 space-y-1 list-disc">
                  <li>Taux de fragilité : Creditsafe (scores de solvabilité secteur déménagement)</li>
                  <li>Procédures collectives : BODACC (Bulletin Officiel des Annonces Civiles et Commerciales)</li>
                  <li>Suppléments jour J : UFC-Que Choisir, retours terrain, études consommateurs</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-v4-text">Arnaques et litiges</p>
                <ul className="mt-2 ml-4 space-y-1 list-disc">
                  <li>Plaintes DGCCRF : Rapports annuels Direction Générale de la Concurrence et de la Répression des Fraudes</li>
                  <li>Taux de litiges : Études UFC-Que Choisir, médiateurs de la consommation, tribunaux</li>
                  <li>Préjudice moyen : Retours consommateurs, décisions de justice publiées</li>
                </ul>
              </div>

              <p className="mt-6 text-xs text-[#1E293B]/60">
                <strong>Mise à jour :</strong> Février 2026. Les chiffres sont des estimations basées sur les sources publiques disponibles 
                et peuvent varier selon les méthodologies. Nous mettons à jour cette page régulièrement pour garantir la fiabilité des données.
              </p>
            </div>
          </div>

          {/* CTA bottom */}
          <div className="mt-16 rounded-3xl border border-v4-border bg-gradient-to-b from-white to-[#FAFBFC] p-8 md:p-12 text-center shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-turquoise/70 via-[#0F172A]/20 to-brand-turquoise/70" />
            <h2 className="text-2xl md:text-3xl font-bold text-v4-text">
              Prêt à comparer des déménageurs vérifiés ?
            </h2>
            <p className="mt-4 text-[#1E293B]/75 max-w-2xl mx-auto">
              3 analyses de risque · Dossier standardisé · Devis comparables · Exclusion automatique des alertes · 100% gratuit
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://devis.moverz.fr/devis-gratuits?source=moverz.fr&from=chiffres-cles"
                rel="nofollow"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-v4-text px-8 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-all"
              >
                Comparer mes devis{" "}
                <span className="text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a
                href="/blog/conseils-demenagement/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#0F172A]/15 bg-white px-8 py-4 text-sm font-semibold text-v4-text hover:bg-gray-50 transition-colors"
              >
                Voir les guides <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
