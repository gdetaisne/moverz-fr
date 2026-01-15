import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = getFullMetadata(
  'a-propos',
  "À propos de Moverz : Comparateur Anti-Arnaque [Notre Mission]",
  "Qui sommes-nous ? Notre mission : simplifier le déménagement avec un comparateur transparent · Pros contrôlés · Devis comparables · Sans démarchage · Découvrez notre équipe"
);

export default function AProposPage() {
  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=2000&auto=format&fit=crop"
            alt="À propos de nous"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04163a]/95 via-[#2b7a78]/88 to-[#04163a]/92"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "À propos", href: "/a-propos/" }
            ]}
          />
          <h1 className="text-3xl md:text-5xl font-bold mt-6">À propos de Moverz</h1>
          <p className="text-white/85 mt-3 max-w-3xl">
            Notre mission : simplifier le déménagement et garantir des devis transparents.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container max-w-4xl space-y-10">
          <div className="rounded-3xl border border-[#E3E5E8] bg-white p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl font-semibold text-[#04163a] mb-4">Notre Mission</h2>
            <div className="text-[#4b5c6b] space-y-4">
              <p>
                Chez Moverz, nous sommes partis d'un constat simple : le déménagement est souvent synonyme de stress, de démarches complexes et de devis opaques. Notre mission est de transformer cette expérience en un processus fluide, transparent et sans arnaque. Nous voulons redonner le pouvoir aux consommateurs en leur offrant un outil de comparaison juste et efficace.
              </p>
              <p>
                Nous croyons que chacun mérite de déménager en toute sérénité, en ayant la certitude de choisir le meilleur professionnel au meilleur prix, sans compromis sur la qualité ou la sécurité.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E3E5E8] bg-white p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl font-semibold text-[#04163a] mb-4">Notre Vision</h2>
            <div className="text-[#4b5c6b] space-y-4">
              <p>
                Nous imaginons un futur où la comparaison de devis de déménagement est aussi simple et fiable que la réservation d'un vol ou d'un hôtel. Un futur où la technologie travaille pour le consommateur, en standardisant les offres et en éliminant les zones d'ombre.
              </p>
              <p>
                Moverz aspire à devenir la référence en matière de déménagement transparent, en bâtissant une communauté de déménageurs partenaires d'excellence et en offrant une expérience utilisateur inégalée, basée sur la confiance et l'efficacité.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E3E5E8] bg-white p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl font-semibold text-[#04163a] mb-4">Notre Équipe</h2>
            <div className="text-[#4b5c6b] space-y-4">
              <p>
                Moverz est une initiative de GSLV EURL, une société française dédiée à l'innovation dans les services aux particuliers. Notre équipe est composée d'experts en logistique, en développement web et en technologie, tous passionnés par l'idée de simplifier votre vie.
              </p>
              <p>
                Nous travaillons chaque jour pour améliorer notre plateforme, étendre notre réseau de partenaires et vous offrir le meilleur service possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Rejoignez l'aventure Moverz
          </h2>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Que vous soyez un particulier à la recherche d'un déménageur fiable ou un professionnel souhaitant rejoindre notre réseau, contactez-nous !
          </p>
          <a
            href="/contact/"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#6BCFCF] via-[#4FB8B8] to-[#3DA5A5] px-8 py-4 text-lg font-semibold text-[#04141f] shadow-[0_8px_30px_rgba(107,207,207,0.35)] hover:shadow-[0_12px_50px_rgba(107,207,207,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">Contactez-nous</span>
            <span className="relative text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}

