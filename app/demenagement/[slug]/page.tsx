import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CITIES, getCityBySlug } from "@/lib/cities";
import { getPricePostForCity, PUBLISHED_BLOG_POSTS } from "@/lib/blog";
import { cityData } from "@/lib/cityData";
import { getCityReviewsBySlug } from "@/lib/city-reviews";
import { buildCityFaqs } from "@/lib/seo-faq";
import { getCityPageMetadata } from "@/lib/seo/metadata";
import { CityHero } from "@/components/city/CityHero";
import { CityLocalInsights } from "@/components/city/CityLocalInsights";
// import { CityLongFormGuide } from "@/components/city/CityLongFormGuide"; // Temporarily disabled - causes build timeout
import { CityStats } from "@/components/city/CityStats";
import { CityPricing } from "@/components/city/CityPricing";
import { CityPricingTable } from "@/components/city/CityPricingTable";
import { CityFinalCTA } from "@/components/city/CityFinalCTA";
import { FAQ } from "@/components/FAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import FlowAndIA from "@/components/FlowAndIA";
import TrustSignals from "@/components/TrustSignals";
import ProblemSolution from "@/components/ProblemSolution";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { getLocalPricesForMeta } from "@/lib/pricing-corridors";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return CITIES.map((city) => ({ slug: city.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const city = getCityBySlug(params.slug);

  if (!city) {
    return {};
  }
  return getCityPageMetadata(city);
}

export default function CityMovingPage({ params }: PageProps) {
  const city = getCityBySlug(params.slug);

  if (!city) {
    notFound();
    return null;
  }

  const isParis = city.slug === "paris";

  const quoteUrl = `https://devis.moverz.fr/devis-gratuits-v3?city_slug=${city.slug}&source=moverz.fr&from=/demenagement/${city.slug}/`;
  const pricePost = getPricePostForCity(city.slug);
  const cityGuides = PUBLISHED_BLOG_POSTS
    .filter((post) => post.citySlug === city.slug && post.slug !== pricePost?.slug)
    .slice(0, 3);

  // Pages quartiers : uniquement disponibles pour certaines villes (routes /{ville}/{quartier}/)
  const NEIGHBORHOOD_PAGE_CITIES = new Set([
    "nice",
    "toulouse",
    "strasbourg",
    "nantes",
    "rennes",
    "rouen",
    "montpellier",
  ]);
  const popularNeighborhoods =
    NEIGHBORHOOD_PAGE_CITIES.has(city.slug) && cityData[city.slug]?.neighborhoods?.length
      ? cityData[city.slug].neighborhoods.slice(0, 5)
      : [];

  // Corridors (liens internes) — on limite à quelques destinations pour éviter des pages "listing" gigantesques.
  // Exclure ile-de-france (région) car pas un corridor ville→ville.
  const corridorCandidates = CITIES
    .map((c) => c.slug)
    .filter((s) => s !== city.slug && s !== "ile-de-france");

  // Destinations prioritaires "business" (ordre)
  const preferred = [
    "paris",
    "lyon",
    "marseille",
    "toulouse",
    "bordeaux",
    "lille",
    "nantes",
    "strasbourg",
    "nice",
    "montpellier",
    "rennes",
    "rouen",
  ].filter((s) => s !== city.slug);

  const corridorDestinations = [
    ...preferred.filter((s) => corridorCandidates.includes(s)),
    ...corridorCandidates,
  ]
    // unique
    .filter((v, i, arr) => arr.indexOf(v) === i)
    // limiter (SEO/UX)
    .slice(0, 6);

  // Quartiers principaux (pour SEO)
  const neighborhoods: Record<string, string[]> = {
    marseille: ["Vieux-Port", "Le Panier", "Joliette", "Cours Julien", "Prado", "Endoume"],
    paris: ["1er arr.", "2e arr.", "3e arr.", "4e arr.", "5e arr.", "6e arr.", "7e arr.", "8e arr.", "9e arr.", "10e arr.", "11e arr.", "12e arr.", "13e arr.", "14e arr.", "15e arr.", "16e arr.", "17e arr.", "18e arr.", "19e arr.", "20e arr."],
    lyon: ["Presqu'île", "Vieux Lyon", "Croix-Rousse", "Part-Dieu", "Confluence", "Gerland"],
    nice: ["Vieux-Nice", "Carré d'Or", "Promenade", "Cimiez", "Riquier", "Fabron"],
    toulouse: ["Capitole", "Saint-Cyprien", "Carmes", "Minimes", "Borderouge"],
    bordeaux: ["Chartrons", "Saint-Pierre", "Saint-Michel", "Caudéran", "Bacalan"],
    grenoble: ["Centre-ville", "Europole", "Île Verte", "Championnet", "Grand Place", "Mistral"],
    "ile-de-france": ["Paris", "Hauts-de-Seine", "Seine-Saint-Denis", "Val-de-Marne", "Seine-et-Marne", "Yvelines", "Essonne", "Val-d'Oise"],
  };

  const suburbs: Record<string, string[]> = {
    marseille: ["Aix-en-Provence", "Aubagne", "Allauch", "La Ciotat", "Cassis"],
    paris: ["Boulogne-Billancourt", "Levallois-Perret", "Neuilly-sur-Seine", "Saint-Denis", "Montreuil", "Vincennes", "Issy-les-Moulineaux", "Versailles"],
    lyon: ["Villeurbanne", "Caluire-et-Cuire", "Oullins", "Écully"],
    nice: ["Saint-Laurent-du-Var", "Cagnes-sur-Mer", "Villefranche", "Beaulieu"],
    toulouse: ["Blagnac", "Colomiers", "Tournefeuille", "Balma"],
    bordeaux: ["Mérignac", "Pessac", "Talence", "Bègles"],
    grenoble: ["Échirolles", "Saint-Martin-d'Hères", "Fontaine", "Meylan", "Seyssinet-Pariset"],
    "ile-de-france": ["Versailles", "Créteil", "Nanterre", "Cergy", "Évry", "Melun", "Saint-Denis", "Boulogne-Billancourt"],
  };

  const cityNeighborhoods = neighborhoods[city.slug] || [];
  const citySuburbs = suburbs[city.slug] || [];

  const cityFAQs = buildCityFaqs({
    citySlug: city.slug,
    cityName: city.nameCapitalized,
    extra: cityData[city.slug]?.faqs || [],
  });

  // Maillage interne "villes proches / même région" (6–10 liens)
  const sameRegion = CITIES.filter((c) => c.region === city.region && c.slug !== city.slug).slice(0, 10);
  const fallback = CITIES.filter((c) => c.slug !== city.slug && c.slug !== "ile-de-france")
    .filter((c) => !sameRegion.some((s) => s.slug === c.slug))
    .slice(0, Math.max(0, 10 - sameRegion.length));
  const nearbyCities = [...sameRegion, ...fallback].slice(0, 10);

  const SERVICE_CARDS = [
    {
      href: `/demenagement/${city.slug}/garde-meuble/`,
      title: `Garde-meuble à ${city.nameCapitalized}`,
      desc: "Box, self-stockage, sécurité, tarifs.",
    },
    {
      href: `/demenagement/${city.slug}/location-camion/`,
      title: "Location camion déménagement",
      desc: "Volumes, prix, stationnement, alternatives.",
    },
    {
      href: `/demenagement/${city.slug}/pas-cher/`,
      title: "Déménagement pas cher",
      desc: "Leviers concrets pour payer moins.",
    },
    {
      href: `/demenagement/${city.slug}/petit-demenagement/`,
      title: "Petit déménagement (petit volume)",
      desc: "Options rapides et économiques.",
    },
    {
      href: `/demenagement/${city.slug}/aide-demenagement/`,
      title: "Aide au déménagement",
      desc: "Main d’œuvre, matériel, monte-meuble.",
    },
    {
      href: `/demenagement/${city.slug}/entreprise/`,
      title: "Déménagement d’entreprise",
      desc: "Transfert de bureaux, méthode, assurance.",
    },
    {
      href: `/demenagement/${city.slug}/piano/`,
      title: "Déménagement de piano",
      desc: "Transport sécurisé et précautions.",
    },
    {
      href: `/demenagement/${city.slug}/international/`,
      title: "Déménagement international",
      desc: "Europe/monde, formalités, assurance.",
    },
  ];

  return (
    <main className="bg-white">
      {/* WebPage schema: contexte page ville */}
      <WebPageSchema
        name={`Déménagement ${city.nameCapitalized}`}
        description={`Comparez des devis comparables pour votre déménagement à ${city.nameCapitalized}. Pros contrôlés, 0 harcèlement, 100% gratuit.`}
        url={`https://moverz.fr/demenagement/${city.slug}/`}
        about={`Déménagement à ${city.nameCapitalized}`}
      />
      
      {/* Service schema: local SEO */}
      <ServiceSchema
        cityName={city.nameCapitalized}
        citySlug={city.slug}
        priceRange={(() => {
          const prices = getLocalPricesForMeta(city.slug);
          return `${prices.t1}-${prices.house}`;
        })()}
      />
      
      {/* FAQ schema: featured answers ChatGPT/AI Overviews */}
      <FAQSchema faqs={cityFAQs} />
      
      <div className="bg-[var(--color-bg-dark)]">
        <div className="container max-w-4xl pt-6">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Villes", href: "/villes/" },
              { label: `Déménagement ${city.nameCapitalized}`, href: `/demenagement/${city.slug}/` },
            ]}
          />
        </div>
      </div>
      {/* Hero */}
      <CityHero city={city} quoteUrl={quoteUrl} />

      {/* Tableau prix optimisé featured snippet */}
      <CityPricingTable cityName={city.nameCapitalized} />

      {/* Stats locales */}
      <CityStats cityName={city.nameCapitalized} />

      {/* Comment ça marche - Process avec IA */}
      <FlowAndIA />

      {/* Prix indicatifs */}
      <CityPricing cityName={city.nameCapitalized} />

      {/* Bloc local unique + CTA */}
      <CityLocalInsights citySlug={city.slug} cityName={city.nameCapitalized} quoteUrl={quoteUrl} />

      {/* Guide long-form (SEO) — 2000+ mots, replié par défaut pour préserver la conversion */}
      {/* Temporarily disabled - causes build timeout on CapRover */}
      {/* <CityLongFormGuide citySlug={city.slug} cityName={city.nameCapitalized} quoteUrl={quoteUrl} /> */}

      {/* Guide long-form (SEO) — servi depuis JSON pré-généré (Option A) */}
      <section className="section section-light">
        <div className="container max-w-4xl">
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 md:p-10 space-y-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-turquoise">Guide local</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
              Guide complet : déménager à {city.nameCapitalized}
            </h2>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              2000+ mots ultra pratiques : devis comparables, accès & stationnement, checklists, méthode jour J.
            </p>
            <div className="pt-1">
              <Link
                href={"/demenagement/" + city.slug + "/guide/"}
                className="inline-flex items-center justify-center rounded-full border border-[#0F172A] bg-white px-7 py-3 text-sm font-semibold text-[var(--color-text)] shadow-sm transition-colors hover:bg-[#F8FAFC]"
              >
                Lire le guide (2000+ mots) →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Villes proches / même région */}
      {nearbyCities.length > 0 && (
        <section className="section section-light">
          <div className="container max-w-4xl">
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 md:p-10 space-y-6">
              <div className="text-center space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-turquoise">
                  Maillage local
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
                  Villes proches de {city.nameCapitalized}
                </h2>
                <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                  Guides utiles à consulter si vous déménagez dans la région (prix, accès, conseils) — et pour comparer des devis sur une base claire.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {nearbyCities.map((c) => (
                  <a
                    key={c.slug}
                    href={`/demenagement/${c.slug}/`}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-xs text-[var(--color-text)] hover:border-brand-turquoise/50 hover:bg-white transition-colors"
                  >
                    Déménagement {c.nameCapitalized}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services à la carte (scalable) */}
      <section className="section section-light">
        <div className="container max-w-4xl">
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 md:p-10 space-y-6">
            <div className="text-center space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-turquoise">
                Services à {city.nameCapitalized}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
                Besoin d&apos;un service spécifique ?
              </h2>
              <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Pages dédiées par intention (garde-meuble, petit volume, piano…). Lisez, puis comparez des devis sur une base claire.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {SERVICE_CARDS.map((card) => (
                <a
                  key={card.href}
                  href={card.href}
                  className="group rounded-2xl border border-[var(--color-border)] bg-white p-5 hover:border-brand-turquoise/50 hover:shadow-sm transition-all"
                >
                  <p className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[#2B7A78]">
                    {card.title}
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-text-secondary)]">{card.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maillage interne : guide prix lié à la ville */}
      {pricePost && (
        <section className="section section-light">
          <div className="container max-w-4xl">
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 md:p-10 text-center space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-turquoise">
                Guide prix
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
                Prix d&apos;un déménagement à {city.nameCapitalized}
              </h2>
              <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Fourchettes, facteurs qui font varier le tarif, et conseils pour obtenir un devis fiable.
              </p>
              <a
                href={`/blog/${pricePost.slug}/`}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-dark)] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[var(--color-bg-dark)] transition-colors"
              >
                <span>Lire le guide : {pricePost.title}</span>
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Maillage SEO : hubs + guides liés */}
      <section className="section section-light">
        <div className="container max-w-4xl">
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 md:p-10 space-y-6">
            <div className="text-center space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-turquoise">
                Guides & ressources
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
                Mieux préparer votre déménagement à {city.nameCapitalized}
              </h2>
              <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Prix, checklists et conseils: les pages à lire ensuite pour faire les bons choix et comparer des devis sur une base solide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
              <a
                href="/blog/prix-et-devis/"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-dark)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-bg-dark)] transition-colors"
              >
                <span>Guides prix & devis</span>
                <span>→</span>
              </a>
              <a
                href="/blog/checklists-et-guides/"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-brand-turquoise/60 hover:bg-[var(--color-bg)] transition-colors"
              >
                <span>Checklists & guides</span>
                <span>→</span>
              </a>
              <a
                href="/blog/conseils-demenagement/"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-brand-turquoise/60 hover:bg-[var(--color-bg)] transition-colors"
              >
                <span>Conseils déménagement</span>
                <span>→</span>
              </a>
              <a
                href="/blog/demenagement-par-ville/"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-brand-turquoise/60 hover:bg-[var(--color-bg)] transition-colors"
              >
                <span>Articles par ville</span>
                <span>→</span>
              </a>
            </div>

            {cityGuides.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-base md:text-lg font-semibold text-[var(--color-text)] text-center">
                  Guides liés à {city.nameCapitalized}
                </h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {cityGuides.map((post) => (
                    <a
                      key={post.slug}
                      href={`/blog/${post.slug}/`}
                      className="group rounded-2xl border border-[var(--color-border)] bg-white p-4 hover:border-brand-turquoise/50 hover:shadow-sm transition-all"
                    >
                      <p className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[#2B7A78] line-clamp-2">
                        {post.title}
                      </p>
                      <p className="mt-1 text-xs text-[var(--color-text-secondary)] line-clamp-2">
                        {post.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Signals - Réassurance */}
      <TrustSignals />

      {/* Zones couvertes - SEO ENRICHI */}
      {(cityNeighborhoods.length > 0 || citySuburbs.length > 0) && (
        <section className="section section-light">
          <div className="container max-w-4xl">
            <div className="text-center mb-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-turquoise/10 px-4 py-1.5 text-xs font-medium text-brand-turquoise">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-turquoise" />
                Zones couvertes
              </div>
              <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-[var(--color-text)]">
                On déménage partout<br />à {city.nameCapitalized}
              </h2>
              <p className="text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
                Nos déménageurs partenaires couvrent l'ensemble de {city.nameCapitalized} et sa métropole. 
                Que vous déménagiez depuis le centre-ville, un {isParis ? "arrondissement" : "quartier"} périphérique 
                ou une commune limitrophe, vous bénéficiez du même service de qualité. 
                Ils connaissent les contraintes locales : accès difficiles, stationnement réglementé, 
                horaires de circulation, et peuvent vous conseiller sur les démarches administratives 
                (autorisation de stationnement, réservation d'emplacement, etc.).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {cityNeighborhoods.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-3">
                    {isParis ? "Arrondissements" : "Quartiers principaux"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cityNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1.5 text-xs text-[var(--color-text)]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {citySuburbs.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-secondary)] mb-3">
                    Communes limitrophes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {citySuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1.5 text-xs text-[var(--color-text)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Lien vers hub quartiers + info SEO */}
              <div className="md:col-span-2 mt-8 space-y-6">
                <div className="rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-white to-[#FAFAFA] p-8 text-center">
                  <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
                    Déménagement sur mesure à {city.nameCapitalized}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    Chaque {isParis ? "arrondissement" : "quartier"} a ses spécificités : ruelles étroites, 
                    immeubles haussmanniens sans ascenseur, zones piétonnes, parkings souterrains, etc. 
                    Nos déménageurs locaux adaptent leur intervention selon votre situation. 
                    Ils anticipent les contraintes d'accès, prévoient le matériel adapté (monte-meubles, 
                    protection des parties communes) et gèrent les formalités auprès de votre mairie ou syndic.
                  </p>
                  <a
                    href={`/quartiers-${city.slug}/`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#2B7A78] hover:text-[#205a5a] transition-colors"
                  >
                    <span>Découvrir tous les quartiers de {city.nameCapitalized}</span>
                    <span>→</span>
                  </a>
                </div>

                {/* Corridors (villes → villes) */}
                {corridorDestinations.length > 0 && (
                  <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8">
                    <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                      Déménager depuis {city.nameCapitalized} vers…
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-5">
                      Longue distance ? Voici les trajets les plus demandés, avec devis gratuits et déménageurs contrôlés.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {corridorDestinations.map((dest) => (
                        <a
                          key={dest}
                          href={`/${city.slug}-vers-${dest}/`}
                          className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-xs text-[var(--color-text)] hover:border-brand-turquoise/50 hover:bg-white transition-colors"
                        >
                          {city.nameCapitalized} → {getCityBySlug(dest)?.nameCapitalized ?? dest}
                        </a>
                      ))}
                    </div>
                    <div className="mt-5 text-center">
                      <a
                        href={`/corridor/${city.slug}/`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#2B7A78] hover:text-[#205a5a] transition-colors"
                      >
                        <span>Voir tous les trajets depuis {city.nameCapitalized}</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Quartiers populaires (liens entrants vers pages quartier) */}
                {popularNeighborhoods.length > 0 && (
                  <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8">
                    <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                      Quartiers populaires à {city.nameCapitalized}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-5">
                      Quelques pages quartier à lire en priorité (accès, stationnement, conseils locaux).
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {popularNeighborhoods.map((q) => (
                        <a
                          key={q.slug}
                          href={`/${city.slug}/${q.slug}/`}
                          className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-xs text-[var(--color-text)] hover:border-brand-turquoise/50 hover:bg-white transition-colors"
                        >
                          Déménagement {q.name} ({city.nameCapitalized})
                        </a>
                      ))}
                    </div>
                    <div className="mt-5 text-center">
                      <a
                        href={`/quartiers-${city.slug}/`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#2B7A78] hover:text-[#205a5a] transition-colors"
                      >
                        <span>Voir tous les quartiers de {city.nameCapitalized}</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Problem/Solution - Montrer la valeur */}
      <ProblemSolution />

      {/* Avis clients - Ultra simplifié */}
      <section className="section section-contrast">
        <div className="container max-w-4xl">
          <div className="text-center mb-12 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-turquoise" />
              Avis clients
            </div>
            <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-white">
              Ça marche vraiment
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {getCityReviewsBySlug(city.slug).map((review) => (
              <div
                key={review.name}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
              >
                <p className="text-sm text-white/80 mb-4">"{review.text}"</p>
                <div className="text-xs">
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-white/60">{review.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ title={`FAQ ${city.nameCapitalized}`} faqs={cityFAQs} />

      {/* Maillage SEO : mini-bloc "à lire ensuite" */}
      <section className="section section-light">
        <div className="container max-w-3xl">
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8 text-center space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-turquoise">
              À lire ensuite
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={pricePost ? `/blog/${pricePost.slug}/` : "/blog/prix-et-devis/"}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-dark)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-bg-dark)] transition-colors"
              >
                <span>{pricePost ? `Prix à ${city.nameCapitalized}` : "Guides prix & devis"}</span>
                <span>→</span>
              </a>
              <a
                href="/blog/checklists-et-guides/"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-brand-turquoise/60 hover:bg-[var(--color-bg)] transition-colors"
              >
                <span>Checklists & guides</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <CityFinalCTA cityName={city.nameCapitalized} quoteUrl={quoteUrl} />
    </main>
  );
}
