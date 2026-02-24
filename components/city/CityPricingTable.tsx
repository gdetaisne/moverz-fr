import { getCityPriceTiers } from "@/lib/pricing-corridors";

type CityPricingTableProps = {
  cityName: string;
  citySlug: string;
};

/**
 * Tableau de prix optimisé pour Featured Snippets Google.
 * Format HTML sémantique (<table>) pour être capté comme position 0.
 *
 * SEO (2026-02-16): prix calculés dynamiquement par ville via pricing-corridors.ts
 * (avant: prix hardcodés identiques pour les 12 villes → near-duplicate).
 */
export function CityPricingTable({ cityName, citySlug }: CityPricingTableProps) {
  const tiers = getCityPriceTiers(citySlug);

  // Featured snippet: min du Studio, max de la Maison
  const snippetMin = tiers[0].price.split("-")[0];
  const snippetMax = tiers[tiers.length - 1].price.split("-")[1];

  return (
    <section className="section section-light">
      <div className="container max-w-4xl">
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 md:p-10 space-y-6">
          {/* Question exacte pour featured snippet */}
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Prix déménagement
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[var(--color-text)]">
              Combien coûte un déménagement à {cityName}&nbsp;?
            </h2>
          </div>

          {/* Réponse courte (40-60 mots) pour featured snippet paragraphe */}
          <p className="text-base text-[var(--color-text-secondary)] max-w-3xl mx-auto text-center leading-relaxed">
            Un déménagement local à {cityName} coûte entre{" "}
            <strong>{snippetMin} (studio)</strong> et{" "}
            <strong>{snippetMax} (maison)</strong>. Le prix dépend du volume
            (15-90&nbsp;m³), de l&apos;accès et des services. Pour un tarif précis,
            comparez des devis basés sur le même dossier standardisé.
          </p>

          {/* Tableau HTML sémantique pour featured snippet */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[var(--color-bg)]">
                  <th className="border border-[var(--color-border)] px-4 py-3 text-left text-sm font-semibold text-[var(--color-text)]">
                    Type de logement
                  </th>
                  <th className="border border-[var(--color-border)] px-4 py-3 text-left text-sm font-semibold text-[var(--color-text)]">
                    Volume moyen
                  </th>
                  <th className="border border-[var(--color-border)] px-4 py-3 text-left text-sm font-semibold text-[var(--color-text)]">
                    Prix {cityName}
                  </th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((tier, i) => (
                  <tr key={tier.label} className={i % 2 === 1 ? "bg-[var(--color-bg)]" : ""}>
                    <td className="border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)]">
                      {tier.label}
                    </td>
                    <td className="border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text-secondary)]">
                      {tier.volume}
                    </td>
                    <td className="border border-[var(--color-border)] px-4 py-3 text-sm font-semibold text-[var(--color-accent)]">
                      {tier.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Contexte additionnel (SEO + clarté) */}
          <div className="pt-4 space-y-4 text-sm text-[var(--color-text-secondary)]">
            <p>
              <strong className="text-[var(--color-text)]">
                Prix indicatifs {new Date().getFullYear()}
              </strong>{" "}
              pour un déménagement local à {cityName} (distance &lt;&nbsp;50&nbsp;km).
              Les tarifs varient selon&nbsp;:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                <span>
                  <strong className="text-[var(--color-text)]">Le volume réel</strong>&nbsp;:
                  plus l&apos;estimation est précise, plus le devis est fiable. Plus précis
                  = pas de mauvaise surprise jour&nbsp;J.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                <span>
                  <strong className="text-[var(--color-text)]">L&apos;accès</strong>&nbsp;:
                  Étages (avec/sans ascenseur), distance parking-entrée, autorisation
                  stationnement.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                <span>
                  <strong className="text-[var(--color-text)]">La période</strong>&nbsp;:
                  Été (juin-septembre), fins de mois, week-ends = tarifs +20-30&nbsp;%.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                <span>
                  <strong className="text-[var(--color-text)]">Les services</strong>&nbsp;:
                  Éco (vous aidez), Standard (pros seuls), ou Clé en main (emballage +
                  déballage).
                </span>
              </li>
            </ul>
            <p className="pt-2 text-sm text-[var(--color-text-secondary)]">
              <strong className="text-[var(--color-text)]">Astuce</strong>&nbsp;:
              Recevez des devis comparables sous 5&nbsp;jours. Même dossier = vous
              comparez vraiment pommes avec pommes, pas de bluff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
