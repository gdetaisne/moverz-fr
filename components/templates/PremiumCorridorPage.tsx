import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import { getCityBySlug } from "@/lib/cities";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import { buildTunnelUrl } from "@/lib/tunnel-url";
import { getPremiumCorridor, type PremiumCorridorData } from "@/lib/premium-corridors-data";
import { notFound } from "next/navigation";

/**
 * Génère les metadata pour un corridor premium
 */
export function generatePremiumCorridorMetadata(
  originSlug: string,
  destinationSlug: string,
): Metadata {
  const corridor = getPremiumCorridor(originSlug, destinationSlug);
  
  if (!corridor) {
    return getFullMetadata(
      `${originSlug}-vers-${destinationSlug}`,
      `Déménagement ${originSlug} → ${destinationSlug}`,
      `Guide complet pour votre déménagement.`
    );
  }

  const title = corridor.hero.title;
  const description = `${corridor.hero.subtitle}. ${corridor.hero.catchphrase} Par ${corridor.author.name}, ${corridor.basedOnExperience}.`;

  return getFullMetadata(
    `${originSlug}-vers-${destinationSlug}`,
    title,
    description
  );
}

/**
 * Composant page corridor premium
 */
export function PremiumCorridorPage({
  originSlug,
  destinationSlug,
}: {
  originSlug: string;
  destinationSlug: string;
}) {
  const corridor = getPremiumCorridor(originSlug, destinationSlug);

  if (!corridor) {
    notFound();
  }

  const quoteUrl = buildTunnelUrl({ 
    citySlug: originSlug, 
    from: `/${originSlug}-vers-${destinationSlug}/` 
  });
  
  const destinationCity = getCityBySlug(destinationSlug);

  return (
    <main className="bg-white">
      {/* WebPage schema */}
      <WebPageSchema
        name={corridor.hero.title}
        description={corridor.hero.catchphrase}
        url={`https://moverz.fr/${originSlug}-vers-${destinationSlug}/`}
        about={`Déménagement ${corridor.originName} vers ${corridor.destinationName}`}
      />

      {/* Breadcrumbs */}
      <div className="bg-v4-text">
        <div className="container max-w-7xl pt-6">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Villes", href: "/villes/" },
              { label: `Déménagement ${corridor.originName}`, href: `/demenagement/${originSlug}/` },
              { label: `${corridor.originName} → ${corridor.destinationName}`, href: `/${originSlug}-vers-${destinationSlug}/` },
            ]}
          />
        </div>
      </div>

      {/* Hero premium */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-v4-text via-[#1E293B] to-v4-text" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <div className="mb-6 max-w-4xl mx-auto">
            <a
              href={`/demenagement/${originSlug}/`}
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <span>←</span>
              <span>Retour à Déménagement {corridor.originName}</span>
            </a>
            {destinationCity && (
              <>
                <span className="mx-2 text-white/40">·</span>
                <a
                  href={`/demenagement/${destinationCity.slug}/`}
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <span>Voir Déménagement {destinationCity.nameCapitalized}</span>
                  <span>→</span>
                </a>
              </>
            )}
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Badge premium */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
                Guide premium
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-v4-accent/20 px-4 py-1.5 text-xs font-medium text-white/90">
                Par {corridor.author.name}
              </div>
            </div>

            {/* Titre */}
            <h1 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl text-center">
              {corridor.originName} → {corridor.destinationName}<br />
              <span className="text-v4-accent">{corridor.hero.subtitle}</span>
            </h1>

            {/* Catchphrase */}
            <p className="text-lg md:text-xl text-white/90 text-center max-w-3xl mx-auto">
              {corridor.hero.catchphrase}
            </p>

            {/* Infos rapides */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base text-white/80">
              <span className="flex items-center gap-2">
                <span className="text-v4-accent">📍</span> {corridor.routeData.distance}
              </span>
              <span>·</span>
              <span className="flex items-center gap-2">
                <span className="text-v4-accent">⏱</span> {corridor.routeData.duration}
              </span>
              <span>·</span>
              <span className="flex items-center gap-2">
                <span className="text-v4-accent">🛣</span> {corridor.routeData.mainRoute}
              </span>
            </div>

            {/* Attribution */}
            <div className="text-center text-sm text-white/60 italic">
              Basé sur {corridor.basedOnExperience} · Mis à jour {corridor.lastUpdated}
            </div>

            {/* CTA */}
            <div className="pt-4 text-center">
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

      {/* Prix indicatifs premium */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#fdfeff] via-[#f9fdff] to-[#f5fbfc]">
        <div className="container mx-auto max-w-6xl px-4 space-y-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-v4-accent/10 px-4 py-1.5 text-xs font-medium text-v4-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
              Prix réels {new Date().getFullYear()}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-v4-text">
              Combien coûte un déménagement<br />{corridor.originName} → {corridor.destinationName} ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-v4-border bg-white p-6 space-y-3">
              <div className="text-sm font-semibold text-v4-accent uppercase tracking-wider">
                Studio / T1
              </div>
              <div className="text-3xl font-bold text-v4-text">{corridor.pricing.studio}</div>
              <p className="text-sm text-v4-text-secondary">10-15m³, 2 déménageurs</p>
            </div>
            <div className="rounded-2xl border border-v4-border bg-white p-6 space-y-3">
              <div className="text-sm font-semibold text-v4-accent uppercase tracking-wider">
                T2 / T3
              </div>
              <div className="text-3xl font-bold text-v4-text">{corridor.pricing.t2}</div>
              <p className="text-sm text-v4-text-secondary">20-35m³, 3 déménageurs</p>
            </div>
            <div className="rounded-2xl border border-v4-border bg-white p-6 space-y-3">
              <div className="text-sm font-semibold text-v4-accent uppercase tracking-wider">
                Maison
              </div>
              <div className="text-3xl font-bold text-v4-text">{corridor.pricing.house}</div>
              <p className="text-sm text-v4-text-secondary">50-90m³, 4-5 déménageurs</p>
            </div>
          </div>

          {/* Facteurs de prix */}
          <div className="rounded-2xl border border-v4-border bg-white p-6 md:p-8">
            <h3 className="text-lg font-bold text-v4-text mb-4">Facteurs qui influencent le prix</h3>
            <ul className="space-y-2">
              {corridor.pricing.factors.map((factor, i) => (
                <li key={i} className="flex gap-3 text-sm text-v4-text-secondary">
                  <span className="text-v4-accent flex-shrink-0">•</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coûts route */}
          <div className="rounded-2xl border border-v4-border bg-white p-6 md:p-8">
            <h3 className="text-lg font-bold text-v4-text mb-4">Détail des coûts de trajet</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-v4-text-secondary">Péages : </span>
                <span className="font-semibold text-v4-text">{corridor.routeData.tolls}</span>
              </div>
              <div>
                <span className="text-v4-text-secondary">Carburant estimé : </span>
                <span className="font-semibold text-v4-text">{corridor.routeData.fuelCost}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections premium de contenu */}
      {corridor.sections.map((section, index) => (
        <section 
          key={section.id}
          className={`py-12 md:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-[#fdfeff] via-[#f9fdff] to-[#f5fbfc]'}`}
        >
          <div className="container mx-auto max-w-4xl px-4 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-v4-text">
                {section.title}
              </h2>
              <div className="prose prose-lg max-w-none">
                {section.content.map((paragraph, i) => (
                  <p 
                    key={i} 
                    className="text-base md:text-lg text-[#4b5c6b] leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
              {section.tips && section.tips.length > 0 && (
                <div className="rounded-xl border border-v4-accent/20 bg-v4-accent/5 p-6 mt-6">
                  <h3 className="text-lg font-bold text-v4-text mb-3">Conseils pratiques</h3>
                  <ul className="space-y-2">
                    {section.tips.map((tip, i) => (
                      <li key={i} className="flex gap-3 text-sm text-v4-text-secondary">
                        <span className="text-v4-accent flex-shrink-0">✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {section.warning && (
                <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 mt-6">
                  <div className="flex gap-3">
                    <span className="text-orange-500 flex-shrink-0 text-xl">⚠</span>
                    <p className="text-sm text-orange-900">{section.warning}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Quartiers destination */}
      {corridor.destinationSpecifics.neighborhoods.length > 0 && (
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto max-w-6xl px-4 space-y-10">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-v4-accent/10 px-4 py-1.5 text-xs font-medium text-v4-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
                Quartiers à {corridor.destinationName}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-v4-text">
                Spécificités par quartier
              </h2>
              <p className="text-base text-v4-text-secondary max-w-3xl mx-auto">
                {corridor.destinationSpecifics.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {corridor.destinationSpecifics.neighborhoods.map((neighborhood, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-v4-border bg-white p-6 space-y-4"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-v4-text">{neighborhood.name}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      neighborhood.difficulty === 'facile' 
                        ? 'bg-green-100 text-green-700'
                        : neighborhood.difficulty === 'moyen'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {neighborhood.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-v4-text-secondary">{neighborhood.specifics}</p>
                  <div className="pt-2 border-t border-v4-border">
                    <p className="text-sm text-v4-text">
                      <span className="font-semibold">Conseil : </span>
                      {neighborhood.tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Périodes recommandées */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#fdfeff] via-[#f9fdff] to-[#f5fbfc]">
        <div className="container mx-auto max-w-6xl px-4 space-y-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-v4-accent/10 px-4 py-1.5 text-xs font-medium text-v4-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
              Calendrier optimal
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-v4-text">
              Quand déménager ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6 space-y-4">
              <h3 className="text-lg font-bold text-green-900 flex items-center gap-2">
                <span>✓</span>
                <span>Périodes recommandées</span>
              </h3>
              <ul className="space-y-2">
                {corridor.seasons.best.map((period, i) => (
                  <li key={i} className="text-sm text-green-800">{period}</li>
                ))}
              </ul>
              <div className="pt-2 border-t border-green-200">
                <p className="text-xs text-green-700">
                  <strong>Basse saison : </strong>{corridor.seasons.lowSeason}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6 space-y-4">
              <h3 className="text-lg font-bold text-orange-900 flex items-center gap-2">
                <span>⚠</span>
                <span>Périodes à éviter</span>
              </h3>
              <ul className="space-y-2">
                {corridor.seasons.avoid.map((period, i) => (
                  <li key={i} className="text-sm text-orange-800">{period}</li>
                ))}
              </ul>
              <div className="pt-2 border-t border-orange-200">
                <p className="text-xs text-orange-700">
                  <strong>Haute saison : </strong>{corridor.seasons.highSeason}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Route specifics */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4 space-y-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-v4-accent/10 px-4 py-1.5 text-xs font-medium text-v4-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
              Itinéraire détaillé
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-v4-text">
              Défis du trajet
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-v4-border bg-white p-6 space-y-4">
              <h3 className="text-lg font-bold text-v4-text">Points de vigilance</h3>
              <ul className="space-y-2">
                {corridor.routeSpecifics.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-3 text-sm text-v4-text-secondary">
                    <span className="text-orange-500 flex-shrink-0">⚠</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-v4-border bg-white p-6 space-y-4">
              <h3 className="text-lg font-bold text-v4-text">Conseils de route</h3>
              <ul className="space-y-2">
                {corridor.routeSpecifics.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm text-v4-text-secondary">
                    <span className="text-v4-accent flex-shrink-0">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hotspots trafic */}
          <div className="rounded-2xl border border-v4-border bg-gradient-to-br from-white to-[#FAFAFA] p-6 md:p-8">
            <h3 className="text-lg font-bold text-v4-text mb-4">Points chauds trafic</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {corridor.routeSpecifics.trafficHotspots.map((hotspot, i) => (
                <div key={i} className="text-sm text-v4-text-secondary bg-white rounded-lg px-3 py-2 border border-v4-border">
                  {hotspot}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      {corridor.testimonials.length > 0 && (
        <section className="py-12 md:py-20 bg-gradient-to-br from-[#fdfeff] via-[#f9fdff] to-[#f5fbfc]">
          <div className="container mx-auto max-w-6xl px-4 space-y-10">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-v4-accent/10 px-4 py-1.5 text-xs font-medium text-v4-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
                Retours d'expérience
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-v4-text">
                Ils ont déménagé {corridor.originName} → {corridor.destinationName}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {corridor.testimonials.map((testimonial, i) => (
                <div key={i} className="rounded-2xl border border-v4-border bg-white p-6 space-y-4">
                  <div className="text-sm font-semibold text-v4-accent">{testimonial.situation}</div>
                  <div className="space-y-3 text-sm text-v4-text-secondary">
                    <div>
                      <span className="font-semibold text-v4-text">Défi : </span>
                      {testimonial.challenge}
                    </div>
                    <div>
                      <span className="font-semibold text-v4-text">Solution : </span>
                      {testimonial.solution}
                    </div>
                    <div className="pt-2 border-t border-v4-border">
                      <span className="font-semibold text-v4-text">Résultat : </span>
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ premium */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 space-y-10">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-v4-accent/10 px-4 py-1.5 text-xs font-medium text-v4-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
              Questions fréquentes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-v4-text">
              FAQ {corridor.originName} → {corridor.destinationName}
            </h2>
          </div>

          <div className="space-y-6">
            {corridor.faq.map((item, index) => (
              <div key={index} className="rounded-xl border border-v4-border bg-white p-6 space-y-3">
                <h3 className="text-base md:text-lg font-bold text-v4-text">
                  {item.question}
                </h3>
                <p 
                  className="text-sm md:text-base text-v4-text-secondary leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      {corridor.checklist.length > 0 && (
        <section className="py-12 md:py-20 bg-gradient-to-br from-[#fdfeff] via-[#f9fdff] to-[#f5fbfc]">
          <div className="container mx-auto max-w-6xl px-4 space-y-10">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-v4-accent/10 px-4 py-1.5 text-xs font-medium text-v4-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-v4-accent" />
                Checklist complète
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-v4-text">
                Les étapes clés
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {corridor.checklist.map((phase, i) => (
                <div key={i} className="rounded-2xl border border-v4-border bg-white p-6 space-y-4">
                  <h3 className="text-lg font-bold text-v4-text">{phase.category}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-sm text-v4-text-secondary">
                        <span className="text-v4-accent flex-shrink-0">□</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Attribution auteur */}
      <section className="py-12 bg-white border-t border-v4-border">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border border-v4-border bg-gradient-to-br from-white to-[#FAFAFA] p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-v4-accent/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-v4-accent">
                    {corridor.author.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left space-y-2">
                <div className="font-bold text-v4-text">{corridor.author.name}</div>
                <div className="text-sm text-v4-text-secondary">{corridor.author.role}</div>
                <div className="text-sm text-v4-text-secondary italic">
                  {corridor.basedOnExperience}
                </div>
                <div className="text-xs text-v4-text-secondary">
                  Dernière mise à jour : {corridor.lastUpdated}
                </div>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="/auteurs/lucie/"
                  className="inline-flex items-center gap-2 rounded-full border border-v4-border bg-white px-4 py-2 text-sm font-semibold text-v4-text hover:border-v4-accent/60 transition-colors"
                >
                  <span>Voir le profil</span>
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
            Prêt à déménager<br />de {corridor.originName} vers {corridor.destinationName} ?
          </h2>

          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Créez votre dossier en 3 minutes et recevez des devis de déménageurs contrôlés Pappers.
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
