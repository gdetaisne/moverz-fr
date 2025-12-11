import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, getCityBySlug } from "@/lib/cities";
import { getFullMetadata } from "@/lib/canonical-helper";
import { getCityReviewsBySlug } from "@/lib/city-reviews";
import { CityHero } from "@/components/city/CityHero";
import { CityStats } from "@/components/city/CityStats";
import { CityPricing } from "@/components/city/CityPricing";
import { CityFinalCTA } from "@/components/city/CityFinalCTA";
import { FAQSchema } from "@/components/schema/FAQSchema";
import FlowAndIA from "@/components/FlowAndIA";
import TrustSignals from "@/components/TrustSignals";
import ProblemSolution from "@/components/ProblemSolution";

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

  const path = `demenagement/${city.slug}`;
  const title = `Déménagement ${city.nameCapitalized} : 5+ Devis en 3 Min | IA Moverz`;
  const description = `3 min · IA calcule le volume · 5+ devis comparables · Déménageurs locaux contrôlés à ${city.nameCapitalized} · 0€ · 0 spam`;

  return getFullMetadata(path, title, description);
}

export default function CityMovingPage({ params }: PageProps) {
  const city = getCityBySlug(params.slug);

  if (!city) {
    notFound();
    return null;
  }

  const isMarseille = city.slug === "marseille";
  const isParis = city.slug === "paris";
  const isLyon = city.slug === "lyon";
  const isNice = city.slug === "nice";
  const isToulouse = city.slug === "toulouse";
  const isBordeaux = city.slug === "bordeaux";

  const quoteUrl = `https://devis.moverz.fr/?city_slug=${city.slug}&source=moverz.fr&from=/demenagement/${city.slug}/`;

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

  // FAQ Schema pour Rich Snippets Google - ENRICHIE (8-10 questions)
  const cityFAQs = [
    {
      question: `Combien de temps à l'avance pour déménager à ${city.nameCapitalized} ?`,
      answer: `Idéalement 4–8 semaines avant, surtout en haute saison (juin-septembre). Plus tôt = plus de choix de prix et de créneaux horaires. Pour un déménagement en période creuse, 2-3 semaines peuvent suffire.`,
    },
    {
      question: 'Les déménageurs font une visite technique ?',
      answer: 'Non, vos photos suffisent. Notre IA analyse les volumes à partir de vos photos. Vous avez donc la paix, pas de visites techniques qui prennent une demi-journée et créent de la pression commerciale.',
    },
    {
      question: 'Moverz est vraiment gratuit ?',
      answer: 'Oui, 100% gratuit pour vous. On est rémunérés par les déménageurs partenaires (modèle commission). Vous ne payez que le déménageur que vous choisissez, au tarif normal.',
    },
    {
      question: `Quel est le prix moyen d'un déménagement à ${city.nameCapitalized} ?`,
      answer: `Cela dépend du volume et des accès. En moyenne : 500-800€ pour un studio (15m³), 900-1400€ pour un T2/T3 (30m³), 1500-2500€ pour un T4+ (50m³). Les prix peuvent varier selon les étages, ascenseur, distance et services demandés.`,
    },
    {
      question: 'Comment fonctionne la comparaison de devis ?',
      answer: 'Vous remplissez UN seul dossier (3 min). Notre IA calcule le volume précis. Vous recevez 5+ devis standardisés dans les 48h. Tous les déménageurs reçoivent exactement les mêmes infos = devis vraiment comparables.',
    },
    {
      question: 'Les déménageurs sont-ils assurés et fiables ?',
      answer: 'Oui. Tous nos partenaires ont une assurance responsabilité civile professionnelle valide et des garanties marchandises transportées. Nous vérifions leurs documents et analysons leurs avis clients. Tolérance zéro sur les litiges.',
    },
    {
      question: 'Puis-je choisir la date et l\'heure de déménagement ?',
      answer: 'Oui, vous indiquez vos dates souhaitées dans le formulaire. Les déménageurs vous proposent des créneaux disponibles. En général, les jours de semaine sont moins chers que le week-end.',
    },
    {
      question: 'Que se passe-t-il si j\'ai un problème le jour J ?',
      answer: 'Notre équipe support intervient rapidement en cas de litige ou imprévu. Vous avez un contact direct. Nous faisons le lien avec le déménageur pour trouver une solution immédiate.',
    },
    {
      question: `Les déménageurs connaissent-ils bien ${city.nameCapitalized} ?`,
      answer: `Oui, nous ne sélectionnons que des déménageurs locaux ou régionaux qui connaissent les contraintes de ${city.nameCapitalized} : accès difficiles, stationnement, réglementation locale, etc.`,
    },
    {
      question: 'Puis-je annuler ou modifier mon déménagement ?',
      answer: 'Oui. Vous gérez directement avec le déménageur choisi selon ses conditions générales. En général, une annulation gratuite est possible jusqu\'à 7-14 jours avant. Contactez-nous si besoin d\'aide.',
    },
  ];

  return (
    <main className="bg-white">
      <FAQSchema faqs={cityFAQs} />
      {/* Hero */}
      <CityHero city={city} quoteUrl={quoteUrl} />

      {/* Stats locales */}
      <CityStats cityName={city.nameCapitalized} />

      {/* Comment ça marche - Process avec IA */}
      <FlowAndIA />

      {/* Prix indicatifs */}
      <CityPricing cityName={city.nameCapitalized} />

      {/* Trust Signals - Réassurance */}
      <TrustSignals />

      {/* Zones couvertes - SEO ENRICHI */}
      {(cityNeighborhoods.length > 0 || citySuburbs.length > 0) && (
        <section className="section section-light">
          <div className="container max-w-4xl">
            <div className="text-center mb-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                Zones couvertes
              </div>
              <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-[#0F172A]">
                On déménage partout<br />à {city.nameCapitalized}
              </h2>
              <p className="text-base text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
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
                  <p className="text-sm font-semibold text-[#6B7280] mb-3">
                    {isParis ? "Arrondissements" : "Quartiers principaux"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cityNeighborhoods.map((q) => (
                      <span
                        key={q}
                        className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs text-[#0F172A]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {citySuburbs.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-[#6B7280] mb-3">
                    Communes limitrophes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {citySuburbs.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs text-[#0F172A]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Lien vers hub quartiers + info SEO */}
              <div className="md:col-span-2 mt-8 space-y-6">
                <div className="rounded-2xl border border-[#E5E7EB] bg-gradient-to-br from-white to-[#FAFAFA] p-8 text-center">
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
                    Déménagement sur mesure à {city.nameCapitalized}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
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
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
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

      {/* FAQ enrichie */}
      <section className="section section-light">
        <div className="container max-w-3xl">
          <div className="text-center mb-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              Questions fréquentes
            </div>
            <h2 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-[#0F172A]">
              FAQ {city.nameCapitalized}
            </h2>
          </div>

          <div className="space-y-6">
            {cityFAQs.map((faq, index) => (
              <div key={index} className="rounded-xl border border-[#E5E7EB] bg-white p-6 hover:border-[#6BCFCF]/50 hover:shadow-md transition-all duration-200">
                <h3 className="text-base font-bold text-[#0F172A] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <CityFinalCTA cityName={city.nameCapitalized} quoteUrl={quoteUrl} />
    </main>
  );
}
