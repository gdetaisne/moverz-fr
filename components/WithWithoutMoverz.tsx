import { buildTunnelUrl } from "@/lib/tunnel-url";

export default function WithWithoutMoverz() {
  const without = [
    "Appeler plusieurs déménageurs un par un",
    "Répéter les mêmes infos à chaque fois",
    "Recevoir des devis tous différents, difficiles à comparer",
  ];

  const withMoverz = [
    "Quelques questions, et c’est tout",
    "Dossier standardisé pour éviter les écarts",
    "des devis alignés sur la même base, faciles à comparer",
  ];

  return (
    <section className="section section-contrast">
      <div className="container max-w-5xl space-y-10 text-center md:text-left">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">
            Sans Moverz / Avec Moverz
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Deux façons de gérer votre déménagement
          </h2>
          <p className="text-sm md:text-base text-white/75 max-w-2xl mx-auto">
            Nous avons construit Moverz pour enlever la partie lourde et garder
            seulement les décisions importantes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Sans Moverz
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
              Vous faites tout vous‑même
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-white/80 text-left">
              {without.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-[#6BCFCF]/50 bg-gradient-to-br from-[#E6FFFA]/80 to-white/95 p-6 md:p-8 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0f766e]">
              Avec Moverz
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-[#04163a] mb-2">
              On prépare le terrain pour vous
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-[#0f172a] text-left">
              {withMoverz.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center space-y-3">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">
            Dossier clair, devis comparables.
          </h3>
          <p className="text-sm md:text-base text-white/75 max-w-xl mx-auto">
            En quelques minutes, vous obtenez des devis comparables de déménageurs sérieux, sans spam.
          </p>
          <a
            href={buildTunnelUrl({ from: "/with-without" })}
            rel="nofollow"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#6BCFCF] via-[#4FB8B8] to-[#3DA5A5] px-8 py-4 text-sm md:text-base font-semibold text-[#04141f] shadow-[0_8px_30px_rgba(107,207,207,0.35)] hover:shadow-[0_12px_50px_rgba(107,207,207,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Comparez des devis gratuitement
            <span className="text-lg leading-none">→</span>
          </a>
          <p className="text-[11px] md:text-xs text-white/70">
            Gratuit · rapide · vous gardez le contrôle.
          </p>
        </div>
      </div>
    </section>
  );
}


