import type { CityInfo } from "@/lib/cities";

type CityHeroProps = {
  city: CityInfo;
  quoteUrl: string;
};

export function CityHero({ city, quoteUrl }: CityHeroProps) {
  return (
    <section className="section section-contrast">
      <div className="container grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">
            Déménagement · {city.nameCapitalized}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Déménagement à {city.nameCapitalized} : comparez 5+ devis de pros contrôlés
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-xl">
            1 seul dossier ultra complet (inventaire, accès, contraintes) pour recevoir plusieurs devis
            structurés sur la même base. Vous gagnez du temps et évitez les mauvaises surprises le jour J.
          </p>
          <ul className="space-y-2 text-sm md:text-base text-white/85">
            <li>✓ Pros vérifiés (assurances, solvabilité, avis)</li>
            <li>✓ Dossier anonyme, 0 démarchage sauvage</li>
            <li>✓ Service 100% gratuit pour vous</li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={quoteUrl} className="btn-primary">
              Obtenir des devis pour {city.nameCapitalized}
            </a>
            <p className="text-xs md:text-sm text-white/60">
              3 minutes pour remplir votre dossier · Réponse rapide des déménageurs
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#6BCFCF]/20 via-transparent to-[#4FB8B8]/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#04163a]/60 backdrop-blur-sm p-6 space-y-4">
            <h2 className="text-lg font-semibold text-white">
              Exemple de déménagement à {city.nameCapitalized}
            </h2>
            <div className="flex flex-wrap gap-2 text-xs text-white/80">
              {["T3 meublé, 65 m²", "4ᵉ étage avec ascenseur", "Distance 10–15 km"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-xs text-white/70">
              Selon le volume, l&apos;accès et la période, les prix constatés se situent généralement dans la
              fourchette indiquée ci-dessous pour un T3. Les devis personnalisés restent la référence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


