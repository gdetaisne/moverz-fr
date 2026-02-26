import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import { getPricePostForCity, getPublishedPostBySlug } from "@/lib/blog";
import { getCityBySlug } from "@/lib/cities";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getCorridorPricesForMeta, getPrixIndicatifsForContent } from "@/lib/pricing-corridors";
import { estimateRoadDistanceKm, formatDistance, formatDurationFromKm } from "@/lib/corridors";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import { buildTunnelUrl } from "@/lib/tunnel-url";

export type CorridorPageProps = {
  originCitySlug: string;
  originCityName: string;
  destination: string;
  destinationSlug?: string;
  // Props optionnels (calculés automatiquement si non fournis)
  distance?: string;
  tempsMoyen?: string;
  periodeConseillee?: string;
  prixIndicatifs?: Array<{
    type: string;
    prix: string;
    description: string;
  }>;
  accesArrivee?: string;
  conseils?: string[];
  faq?: Array<{
    question: string;
    answer: string;
  }>;
};

function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Génère metadata optimisée pour pages corridors
 * 
 * Optimisations SEO (2026-02-27):
 * - USP homepage alignés : "1 contact" + "0 harcèlement" + "Note 4.9/5" + checkmarks ✓
 * - Distance dans title → pertinence immédiate SERP
 * - Fourchettes prix T1/T2/Maison dans description → forte différenciation
 * - Calcul prix basé sur formules officielles tunnel (pricing-corridors.ts)
 * - Format compact cohérent avec pages villes (v3.1)
 * 
 * Format title: "Déménagement {Ville A} → {Ville B} ({Distance}km) | Devis 5–7j · {Année}"
 * Format desc: "✓ 1 contact ✓ 0 harcèlement · {A}→{B} ({X}km) : T1 X€, T2 Y€, Maison Z€ · Note 4.9/5 · Gratuit"
 */
export function generateCorridorMetadata(
  originCitySlug: string,
  originCityName: string,
  destination: string,
  destinationSlug?: string
): Metadata {
  const year = new Date().getFullYear();
  const destSlug = destinationSlug ?? slugify(destination);
  const path = `${originCitySlug}-vers-${destSlug}`;
  
  // Calcul distance + prix réels (formules officielles)
  const priceData = getCorridorPricesForMeta(originCitySlug, destSlug);
  
  if (priceData) {
    // ✅ Version optimisée (USP homepage + distance + prix)
    const title = `Déménagement ${originCityName} → ${destination} (${priceData.distanceKm}km) | Devis 5–7j · ${year}`;
    
    // Description alignée villes v3.1 : checkmarks ✓ + USP stack + prix + social proof
    const description = `✓ 1 contact ✓ 0 harcèlement · ${originCityName}→${destination} (${priceData.distanceKm}km) : T1 ${priceData.t1}, T2 ${priceData.t2}, Maison ${priceData.house} · Note 4.9/5 · Gratuit`;
    
    return getFullMetadata(path, title, description);
  }
  
  // Fallback (si calcul prix impossible) - aligné sur USP homepage
  const title = `Déménagement ${originCityName} → ${destination} : Devis & Prix ${year}`;
  const description = `✓ 1 contact ✓ 0 harcèlement · ${originCityName}→${destination} : devis gratuits, pros contrôlés · Note 4.9/5 · Sans démarchage`;

  return getFullMetadata(path, title, description);
}

export function CorridorPage({
  originCitySlug,
  originCityName,
  destination,
  destinationSlug,
  distance: distanceProp,
  tempsMoyen: tempsMoyenProp,
  periodeConseillee: periodeConseilleeProp,
  prixIndicatifs: prixIndicatifsProp,
  accesArrivee: accesArriveeProp,
  conseils: conseilsProp,
  faq: faqProp,
}: CorridorPageProps) {
  const destSlug = destinationSlug ?? slugify(destination);
  
  // ============================================
  // Calcul automatique des données (si non fournies)
  // ============================================
  const km = estimateRoadDistanceKm(originCitySlug, destSlug) ?? 300;
  
  const distance = distanceProp ?? formatDistance(km);
  const tempsMoyen = tempsMoyenProp ?? formatDurationFromKm(km);
  const periodeConseillee = periodeConseilleeProp ?? "Avr-Sept";
  const prixIndicatifs = prixIndicatifsProp ?? getPrixIndicatifsForContent(km);
  
  const accesArrivee = accesArriveeProp ?? 
    `${destination} a des contraintes d'accès variables selon le quartier (stationnement, rues étroites, zones piétonnes, immeubles sans ascenseur). Nos partenaires anticipent l'autorisation de stationnement, le portage et le matériel adapté (protection, diable, monte-meubles si besoin).`;
  
  const conseils = conseilsProp ?? [
    "Anticipez votre date (fin de mois et été = plus de demande).",
    "Faites estimer votre volume précisément pour éviter les suppléments le jour J.",
    "Décrivez précisément les accès (escaliers, ascenseur, stationnement) pour un devis juste.",
    "Demandez l'autorisation de stationnement si nécessaire (mairie / syndic).",
  ];
  
  const faq = faqProp ?? [
    {
      question: `Quels sont les délais pour un déménagement ${originCityName} → ${destination} ?`,
      answer:
        "En moyenne 7 à 14 jours selon la période. En semaine et hors haute saison, certains déménageurs peuvent intervenir plus rapidement. Le plus fiable est de comparer plusieurs disponibilités.",
    },
    {
      question: `Quels sont les tarifs pour ${originCityName} → ${destination} ?`,
      answer:
        "Les tarifs dépendent du volume (m³), des accès (étage, ascenseur, portage), de la période et de la formule (éco/standard/confort). Les fourchettes ci-dessus donnent un ordre d'idée, puis le devis final est personnalisé.",
    },
    {
      question: "Comment éviter les mauvaises surprises le jour J ?",
      answer:
        "La clé : des infos précises (accès, contraintes, options). Avec Moverz, votre dossier est partagé à plusieurs déménageurs sur la même base, pour des devis comparables.",
    },
  ];
  
  // ============================================
  // Reste du composant (inchangé)
  // ============================================
  const quoteUrl = buildTunnelUrl({ citySlug: originCitySlug, from: `/${originCitySlug}-vers-${destSlug}/` });
  const destinationCity = getCityBySlug(destSlug);
  const originPricePost = getPricePostForCity(originCitySlug);
  const destPricePost = destinationCity ? getPricePostForCity(destinationCity.slug) : undefined;
  const longDistancePricePost = getPublishedPostBySlug("prix-demenagement-longue-distance-france");

  return (
    <main className="bg-white">
      {/* WebPage schema: contexte page corridor */}
      <WebPageSchema
        name={`Déménagement ${originCityName} → ${destination}`}
        description={`Comparez des devis comparables pour votre déménagement de ${originCityName} vers ${destination}. Distance, prix, conseils.`}
        url={`https://moverz.fr/${originCitySlug}-vers-${destSlug}/`}
        about={`Déménagement ${originCityName} vers ${destination}`}
      />
      
      <div className="bg-v4-text">
        <div className="container max-w-7xl pt-6">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Villes", href: "/villes/" },
              { label: `Déménagement ${originCityName}`, href: `/demenagement/${originCitySlug}/` },
              { label: `${originCityName} → ${destination}`, href: `/${originCitySlug}-vers-${destSlug}/` },
            ]}
          />
        </div>
      </div>
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-v4-text via-[#1E293B] to-v4-text" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          {/* Breadcrumb / lien retour ville */}
          <div className="mb-6 max-w-4xl mx-auto">
            <a
              href={`/demenagement/${originCitySlug}/`}
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <span>←</span>
              <span>Retour à Déménagement {originCityName}</span>
            </a>
            <span className="mx-2 text-white/40">·</span>
            {destinationCity ? (
              <a
                href={`/demenagement/${destinationCity.slug}/`}
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <span>Voir Déménagement {destinationCity.nameCapitalized}</span>
                <span>→</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm text-white/60">
                <span>Destination : {destination}</span>
              </span>
            )}
          </div>
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
              Longue distance
            </div>

            {/* Titre */}
            <h1 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl">
              {originCityName} → {destination}<br />
              <span className="text-v4-accent">Devis gratuits en 3 min</span>
            </h1>

            {/* Infos rapides */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base text-white/80">
              <span className="flex items-center gap-2">
                <span className="text-v4-accent">📍</span> {distance}
              </span>
              <span>·</span>
              <span className="flex items-center gap-2">
                <span className="text-v4-accent">⏱</span> ~{tempsMoyen}
              </span>
              <span>·</span>
              <span className="flex items-center gap-2">
                <span className="text-v4-accent">📅</span> Idéal {periodeConseillee}
              </span>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href={quoteUrl}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm md:text-base font-semibold text-v4-text shadow-lg hover:bg-[#F3F4F6] transition-colors"
              >
                <span>Comparer les déménageurs</span>
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Prix indicatifs */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#fdfeff] via-[#f9fdff] to-[#f5fbfc]">
        <div className="container mx-auto max-w-6xl px-4 space-y-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-v4-accent/10 px-4 py-1.5 text-xs font-medium text-v4-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
              Prix indicatifs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-v4-text">
              Combien coûte un déménagement<br />{originCityName} → {destination} ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {prixIndicatifs.map((prix, index) => (
              <div
                key={index}
                className="rounded-2xl border border-v4-border bg-white p-6 space-y-3"
              >
                <div className="text-sm font-semibold text-v4-accent uppercase tracking-wider">
                  {prix.type}
                </div>
                <div className="text-3xl font-bold text-v4-text">{prix.prix}</div>
                <p className="text-sm text-v4-text-secondary">{prix.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-v4-text-secondary max-w-2xl mx-auto">
              Prix indicatifs pour {distance} de trajet. Le prix final dépend du volume exact, des accès et de la période.
            </p>
          </div>

          {/* Maillage interne : guides prix liés */}
          {(originPricePost || destPricePost) && (
            <div className="rounded-2xl border border-v4-border bg-white p-6 md:p-8 text-center space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-v4-accent">
                Guides liés
              </p>
              <p className="text-sm text-v4-text-secondary">
                Pour aller plus loin sur les tarifs et la lecture des devis.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                {originPricePost && (
                  <a
                    href={`/blog/${originPricePost.slug}/`}
                    className="inline-flex items-center gap-2 rounded-full bg-v4-text px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-colors"
                  >
                    <span>Prix à {originCityName}</span>
                    <span>→</span>
                  </a>
                )}
                {destPricePost && (
                  <a
                    href={`/blog/${destPricePost.slug}/`}
                    className="inline-flex items-center gap-2 rounded-full border border-v4-border bg-white px-6 py-3 text-sm font-semibold text-v4-text hover:border-v4-accent/60 hover:bg-[#FAFAFA] transition-colors"
                  >
                    <span>Prix à {destinationCity?.nameCapitalized}</span>
                    <span>→</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Accès arrivée */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-v4-accent/10 px-4 py-1.5 text-xs font-medium text-v4-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
              Accès & Contraintes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-v4-text">
              Arriver à {destination}
            </h2>
          </div>
          <p className="text-base md:text-lg text-[#4b5c6b] leading-relaxed">
            {accesArrivee}
          </p>
        </div>
      </section>

      {/* Conseils */}
      {conseils.length > 0 && (
        <section className="py-12 md:py-20 bg-gradient-to-br from-[#fdfeff] via-[#f9fdff] to-[#f5fbfc]">
          <div className="container mx-auto max-w-4xl px-4 space-y-10">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-v4-accent/10 px-4 py-1.5 text-xs font-medium text-v4-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
                Conseils pratiques
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-v4-text">
                Réussir votre déménagement
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {conseils.map((conseil, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-xl border border-v4-border bg-white p-4"
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-v4-accent/10 text-v4-accent text-sm font-bold">
                    ✓
                  </span>
                  <p className="text-sm text-[#4b5c6b]">{conseil}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 space-y-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-v4-accent/10 px-4 py-1.5 text-xs font-medium text-v4-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
              Questions fréquentes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-v4-text">
              FAQ {originCityName} → {destination}
            </h2>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-base md:text-lg font-bold text-v4-text">
                  {item.question}
                </h3>
                <p className="text-sm md:text-base text-v4-text-secondary leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Maillage SEO : "à lire ensuite" (2 liens max) */}
          <div className="pt-2">
            <div className="rounded-2xl border border-v4-border bg-gradient-to-br from-white to-[#FAFAFA] p-6 md:p-8 text-center space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-v4-accent">
                À lire ensuite
              </p>
              <p className="text-sm text-v4-text-secondary max-w-2xl mx-auto">
                Deux ressources clés pour comprendre les prix et préparer votre déménagement longue distance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={
                    longDistancePricePost
                      ? `/blog/${longDistancePricePost.slug}/`
                      : "/blog/prix-et-devis/"
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-v4-text px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-colors"
                >
                  <span>
                    {longDistancePricePost
                      ? "Prix déménagement longue distance"
                      : "Guides prix & devis"}
                  </span>
                  <span>→</span>
                </a>
                <a
                  href="/blog/checklists-et-guides/"
                  className="inline-flex items-center gap-2 rounded-full border border-v4-border bg-white px-6 py-3 text-sm font-semibold text-v4-text hover:border-v4-accent/60 hover:bg-white transition-colors"
                >
                  <span>Checklists & guides</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-v4-text via-[#1E293B] to-v4-text text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
            Gratuit · Sans spam · Sans engagement
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Prêt à déménager<br />de {originCityName} vers {destination} ?
          </h2>

          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Créez votre dossier en 3 minutes et recevez des devis de déménageurs contrôlés.
          </p>

          <div className="pt-4">
            <a
              href={quoteUrl}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm md:text-base font-semibold text-v4-text shadow-lg hover:bg-[#F3F4F6] transition-colors"
            >
              <span>Lancer mon comparateur</span>
              <span className="text-lg leading-none">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


