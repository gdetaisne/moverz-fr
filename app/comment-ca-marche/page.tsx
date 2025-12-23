import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";
import { getFullMetadata } from "@/lib/canonical-helper";
import PageHero from "@/components/PageHero";
import WidgetActionSection from "@/components/WidgetActionSection";

export const metadata: Metadata = getFullMetadata(
  'comment-ca-marche',
  "Comment ça marche ? Photos, IA & Devis Comparables | Moverz",
  "Découvrez comment l’IA Moverz analyse vos photos pour estimer la volumétrie de votre déménagement et préparer 5+ devis vraiment comparables, en quelques minutes et sans spam."
);

export default function CommentCaMarchePage() {
  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Comment ça marche", href: "/comment-ca-marche/" },
        ]}
        eyebrow="Processus en 3 étapes"
        title="Comment ça marche ?"
        subtitle="À partir de quelques questions et de vos photos, l’IA Moverz estime votre volume et prépare des devis de déménageurs enfin comparables."
        primaryCta={{
          label: "Comparer 5+ devis maintenant",
          href: "https://devis.moverz.fr/?source=moverz.fr&from=/comment-ca-marche/",
        }}
        secondaryCta={{ label: "Voir la FAQ", href: "/faq/" }}
      />

      <section className="section section-light">
        <div className="container">
          <HowItWorks />
        </div>
      </section>

      {/* Widget devis (même widget que la home) */}
      <WidgetActionSection
        title="Comparez 5+ devis maintenant"
        subtitle="Même logique que sur la home: vous démarrez ici, et l’IA aide à fiabiliser le volume."
        source="moverz.fr"
        from="/comment-ca-marche/"
      />

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

