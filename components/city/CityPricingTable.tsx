"use client";

type CityPricingTableProps = {
  cityName: string;
};

/**
 * Tableau de prix optimisé pour Featured Snippets Google
 * Format HTML sémantique (<table>) pour être capté comme position 0
 */
export function CityPricingTable({ cityName }: CityPricingTableProps) {
  return (
    <section className="section section-light">
      <div className="container max-w-4xl">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 md:p-10 space-y-6">
          {/* Question exacte pour featured snippet */}
          <div className="text-center space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-turquoise">
              Prix déménagement
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
              Combien coûte un déménagement à {cityName} ?
            </h2>
          </div>

          {/* Réponse courte (40-60 mots) pour featured snippet paragraphe */}
          <p className="text-base text-[#6B7280] max-w-3xl mx-auto text-center leading-relaxed">
            Un déménagement à {cityName} coûte entre <strong>450€ (studio)</strong> et <strong>3500€ (maison)</strong>. 
            Le prix dépend du volume (15-80 m³), de la distance et des services. 
            Pour un tarif précis, comparez des devis basés sur le même volume calculé par IA.
          </p>

          {/* Tableau HTML sémantique pour featured snippet */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#F8FAFC]">
                  <th className="border border-[#E5E7EB] px-4 py-3 text-left text-sm font-semibold text-[#0F172A]">
                    Type de logement
                  </th>
                  <th className="border border-[#E5E7EB] px-4 py-3 text-left text-sm font-semibold text-[#0F172A]">
                    Volume moyen
                  </th>
                  <th className="border border-[#E5E7EB] px-4 py-3 text-left text-sm font-semibold text-[#0F172A]">
                    Prix {cityName}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#E5E7EB] px-4 py-3 text-sm text-[#0F172A]">
                    Studio (20-30m²)
                  </td>
                  <td className="border border-[#E5E7EB] px-4 py-3 text-sm text-[#6B7280]">
                    15-20 m³
                  </td>
                  <td className="border border-[#E5E7EB] px-4 py-3 text-sm font-semibold text-brand-turquoise">
                    450-800€
                  </td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="border border-[#E5E7EB] px-4 py-3 text-sm text-[#0F172A]">
                    T2 (40-50m²)
                  </td>
                  <td className="border border-[#E5E7EB] px-4 py-3 text-sm text-[#6B7280]">
                    25-35 m³
                  </td>
                  <td className="border border-[#E5E7EB] px-4 py-3 text-sm font-semibold text-brand-turquoise">
                    700-1200€
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#E5E7EB] px-4 py-3 text-sm text-[#0F172A]">
                    T3 (60-70m²)
                  </td>
                  <td className="border border-[#E5E7EB] px-4 py-3 text-sm text-[#6B7280]">
                    40-50 m³
                  </td>
                  <td className="border border-[#E5E7EB] px-4 py-3 text-sm font-semibold text-brand-turquoise">
                    1000-1800€
                  </td>
                </tr>
                <tr className="bg-[#F8FAFC]">
                  <td className="border border-[#E5E7EB] px-4 py-3 text-sm text-[#0F172A]">
                    T4+ (80-100m²)
                  </td>
                  <td className="border border-[#E5E7EB] px-4 py-3 text-sm text-[#6B7280]">
                    55-70 m³
                  </td>
                  <td className="border border-[#E5E7EB] px-4 py-3 text-sm font-semibold text-brand-turquoise">
                    1500-2500€
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#E5E7EB] px-4 py-3 text-sm text-[#0F172A]">
                    Maison (100-150m²)
                  </td>
                  <td className="border border-[#E5E7EB] px-4 py-3 text-sm text-[#6B7280]">
                    70-90 m³
                  </td>
                  <td className="border border-[#E5E7EB] px-4 py-3 text-sm font-semibold text-brand-turquoise">
                    2000-3500€
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Contexte additionnel (SEO + clarté) */}
          <div className="pt-4 space-y-4 text-sm text-[#6B7280]">
            <p>
              <strong className="text-[#0F172A]">Prix indicatifs 2026</strong> pour un déménagement local à {cityName} (distance &lt; 50 km). 
              Les tarifs varient selon :
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-turquoise shrink-0" />
                <span><strong className="text-[#0F172A]">Le volume réel</strong> : plus l’estimation est précise, plus le devis est fiable. 
                Plus précis = pas de mauvaise surprise jour J.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-turquoise shrink-0" />
                <span><strong className="text-[#0F172A]">L'accès</strong> : Étages (avec/sans ascenseur), distance parking-entrée, 
                autorisation stationnement.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-turquoise shrink-0" />
                <span><strong className="text-[#0F172A]">La période</strong> : Été (juin-septembre), fins de mois, week-ends = tarifs +20-30%.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-turquoise shrink-0" />
                <span><strong className="text-[#0F172A]">Les services</strong> : Éco (vous aidez), Standard (pros seuls), 
                ou Clé en main (emballage + déballage).</span>
              </li>
            </ul>
            <p className="pt-2">
              💡 <strong>Astuce</strong> : Recevez des devis comparables sous 5 jours. Même volume IA = vous comparez 
              vraiment pommes avec pommes, pas de bluff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
