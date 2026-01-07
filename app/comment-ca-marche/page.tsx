import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";
import { getFullMetadata } from "@/lib/canonical-helper";
import PageHero from "@/components/PageHero";
import WidgetActionSection from "@/components/WidgetActionSection";

export const metadata: Metadata = getFullMetadata(
  'comment-ca-marche',
  "Comment ça marche ? Photos, IA & Devis Comparables | Moverz",
  "Découvrez comment l’IA Moverz analyse vos photos pour estimer la volumétrie de votre déménagement et préparer 3 à 5 devis vraiment comparables, en quelques minutes et sans spam."
);

export default function CommentCaMarchePage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Comment ça marche", href: "/comment-ca-marche/" },
        ]}
        eyebrow="Processus en 3 étapes"
        title="Comment ça marche ?"
        subtitle="À partir de quelques questions et de vos photos, l’IA Moverz estime votre volume et prépare des devis de déménageurs enfin comparables."
        primaryCta={{
          label: "Comparer 3 à 5 devis maintenant",
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
        title="Comparez 3 à 5 devis maintenant"
        subtitle="Démarrez votre dossier en 3 minutes. Ajoutez des photos pour des devis plus précis."
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
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0F172A] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>Comparez 3 à 5 devis gratuitement</span>
            <span className="text-xl leading-none">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}

