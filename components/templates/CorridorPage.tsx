import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";

export type CorridorPageProps = {
  originCitySlug: string;
  originCityName: string;
  destination: string;
  destinationSlug?: string;
  distance: string;
  tempsMoyen: string;
  periodeConseillee: string;
  prixIndicatifs: Array<{
    type: string;
    prix: string;
    description: string;
  }>;
  accesArrivee: string;
  conseils: string[];
  faq: Array<{
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

export function generateCorridorMetadata(
  originCitySlug: string,
  originCityName: string,
  destination: string,
  destinationSlug?: string
): Metadata {
  const destSlug = destinationSlug ?? slugify(destination);
  const path = `${originCitySlug}-vers-${destSlug}`;
  const title = `Déménagement ${originCityName} → ${destination} : Devis & Prix 2025 | Moverz`;
  const description = `Déménagement ${originCityName} vers ${destination} : devis gratuits, prix indicatifs, conseils d'experts. 5+ déménageurs contrôlés · 0€ · 0 spam`;

  return getFullMetadata(path, title, description);
}

export function CorridorPage({
  originCitySlug,
  originCityName,
  destination,
  destinationSlug,
  distance,
  tempsMoyen,
  periodeConseillee,
  prixIndicatifs,
  accesArrivee,
  conseils,
  faq,
}: CorridorPageProps) {
  const destSlug = destinationSlug ?? slugify(destination);
  const quoteUrl = `https://devis.moverz.fr/?city_slug=${originCitySlug}&source=moverz.fr&from=/${originCitySlug}-vers-${destSlug}/`;

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />

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
            <a
              href={`/demenagement/${destSlug}/`}
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <span>Voir Déménagement {destination}</span>
              <span>→</span>
            </a>
          </div>
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              Longue distance
            </div>

            {/* Titre */}
            <h1 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl">
              {originCityName} → {destination}<br />
              <span className="text-[#6BCFCF]">Devis gratuits en 3 min</span>
            </h1>

            {/* Infos rapides */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base text-white/80">
              <span className="flex items-center gap-2">
                <span className="text-[#6BCFCF]">📍</span> {distance}
              </span>
              <span>·</span>
              <span className="flex items-center gap-2">
                <span className="text-[#6BCFCF]">⏱</span> ~{tempsMoyen}
              </span>
              <span>·</span>
              <span className="flex items-center gap-2">
                <span className="text-[#6BCFCF]">📅</span> Idéal {periodeConseillee}
              </span>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href={quoteUrl}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm md:text-base font-semibold text-[#0F172A] shadow-lg hover:bg-[#F3F4F6] transition-colors"
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
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              Prix indicatifs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              Combien coûte un déménagement<br />{originCityName} → {destination} ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {prixIndicatifs.map((prix, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-6 space-y-3"
              >
                <div className="text-sm font-semibold text-[#6BCFCF] uppercase tracking-wider">
                  {prix.type}
                </div>
                <div className="text-3xl font-bold text-[#0F172A]">{prix.prix}</div>
                <p className="text-sm text-[#6B7280]">{prix.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-[#6B7280] max-w-2xl mx-auto">
              Prix indicatifs pour {distance} de trajet. Le prix final dépend du volume exact, des accès et de la période.
            </p>
          </div>
        </div>
      </section>

      {/* Accès arrivée */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              Accès & Contraintes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
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
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
                Conseils pratiques
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
                Réussir votre déménagement
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {conseils.map((conseil, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-xl border border-[#E5E7EB] bg-white p-4"
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#6BCFCF]/10 text-[#6BCFCF] text-sm font-bold">
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
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6BCFCF]/10 px-4 py-1.5 text-xs font-medium text-[#6BCFCF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
              Questions fréquentes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              FAQ {originCityName} → {destination}
            </h2>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-base md:text-lg font-bold text-[#0F172A]">
                  {item.question}
                </h3>
                <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF]" />
            Gratuit · Sans spam · Sans engagement
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Prêt à déménager<br />de {originCityName} vers {destination} ?
          </h2>

          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Créez votre dossier en 3 minutes et recevez 5+ devis de déménageurs contrôlés.
          </p>

          <div className="pt-4">
            <a
              href={quoteUrl}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm md:text-base font-semibold text-[#0F172A] shadow-lg hover:bg-[#F3F4F6] transition-colors"
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


