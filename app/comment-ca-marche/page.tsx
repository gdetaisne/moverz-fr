import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";
import { getFullMetadata } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = getFullMetadata(
  'comment-ca-marche',
  "Comment ça marche ? Photos, IA & Devis Comparables | Moverz",
  "Découvrez comment l’IA Moverz analyse vos photos pour estimer la volumétrie de votre déménagement et préparer 5+ devis vraiment comparables, en quelques minutes et sans spam."
);

export default function CommentCaMarchePage() {
  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=2000&auto=format&fit=crop"
            alt="Comment ça marche"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04163a]/95 via-[#2b7a78]/88 to-[#04163a]/92"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Comment ça marche", href: "/comment-ca-marche/" }
            ]}
          />
          <h1 className="text-3xl md:text-5xl font-bold mt-6">Comment ça marche ?</h1>
          <p className="text-white/85 mt-3 max-w-3xl">
            Découvrez comment, à partir de quelques questions et de vos photos, l’IA Moverz estime votre volume et prépare des devis de déménageurs enfin comparables.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <HowItWorks />
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Prêt à comparer vos devis ?
          </h2>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Lancez le comparateur en quelques clics et recevez des offres fiables, sans engagement.
          </p>
          <a
            href="https://devis.moverz.fr/?source=moverz.fr&from=/comment-ca-marche/"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#6BCFCF] via-[#4FB8B8] to-[#3DA5A5] px-8 py-4 text-lg font-semibold text-[#04141f] shadow-[0_8px_30px_rgba(107,207,207,0.35)] hover:shadow-[0_12px_50px_rgba(107,207,207,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">Comparez 5+ devis gratuitement</span>
            <span className="relative text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}

