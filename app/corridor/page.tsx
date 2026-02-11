import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import { CITIES } from "@/lib/cities";
import Breadcrumbs from "@/components/Breadcrumbs";

const EXCLUDED_SLUGS = new Set(["ile-de-france"]);

export const metadata: Metadata = getFullMetadata(
  "corridor",
  "Trajets de déménagement (corridors) : toutes les villes | Moverz",
  "Explorez les trajets de déménagement par ville (corridors). Prix indicatifs, conseils et accès au comparateur pour chaque destination."
);

export default function CorridorIndexPage() {
  const cities = CITIES.filter((c) => !EXCLUDED_SLUGS.has(c.slug));

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24 space-y-6">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Trajets", href: "/corridor/" }]} />
          <div className="text-center space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-turquoise">
              Corridors
            </p>
            <h1 className="text-3xl md:text-5xl font-bold">
              Trajets de déménagement par ville
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-3xl mx-auto leading-relaxed">
              Choisissez votre ville de départ pour voir tous les trajets (ville → ville) disponibles.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-[#fdfeff] via-[#f9fdff] to-[#f5fbfc]">
        <div className="container mx-auto max-w-6xl px-4 space-y-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <a
                key={city.slug}
                href={`/corridor/${city.slug}/`}
                className="group rounded-2xl border border-[#E5E7EB] bg-white p-5 hover:border-brand-turquoise/60 hover:shadow-md transition-all"
              >
                <p className="text-sm text-[#6B7280]">Trajets depuis</p>
                <h2 className="text-base md:text-lg font-semibold text-[#0F172A] group-hover:text-[#2B7A78] transition-colors">
                  {city.nameCapitalized}
                </h2>
                <p className="mt-1 text-sm text-[#4b5c6b]">
                  Voir toutes les destinations
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


