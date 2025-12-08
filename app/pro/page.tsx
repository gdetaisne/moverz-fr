import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = getFullMetadata(
  "pro",
  "Moverz Pro : Outil IA pour Déménageurs | SaaS d'Estimation Automatisée",
  "Moverz Pro est un outil SaaS pour déménageurs qui permet de standardiser les demandes, estimer les volumes et les prix plus rapidement, et proposer des devis comparables sans Excel ni formulaires bricolés."
);

export default function ProPage() {
  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />

      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
            alt="Moverz Pro"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04163a]/95 via-[#2b7a78]/88 to-[#04163a]/92"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Moverz Pro", href: "/pro/" },
            ]}
          />
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
              SaaS pour déménageurs · Moverz Pro
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Moverz Pro : l&apos;outil IA pour des devis de déménagement enfin comparables
            </h1>
            <p className="text-base md:text-lg text-white/85 max-w-2xl">
              Standardisez vos demandes, estimez plus vite vos volumes et vos prix, et envoyez des devis
              lisibles sans passer vos journées dans Excel. Moverz Pro vous aide à gagner du temps, à
              réduire les litiges et à améliorer l&apos;expérience de vos clients.
            </p>
          </div>
        </div>
      </section>

      {/* Sections produit */}
      <section className="section section-light">
        <div className="container max-w-5xl space-y-10">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#04163a]">
                Pensé pour les déménageurs qui veulent structurer leur pipeline
              </h2>
              <p className="text-sm md:text-base text-[#4b5c6b]">
                Moverz Pro centralise les demandes, l&apos;inventaire client, les contraintes d&apos;accès
                et les options choisies. Plus besoin de courir après les informations manquantes ou de
                recopier des emails à la main : vous partez directement d&apos;un dossier structuré.
              </p>
              <p className="text-sm md:text-base text-[#4b5c6b]">
                Notre objectif n&apos;est pas de remplacer votre expertise, mais de la rendre plus
                lisible et scalable : moins de temps perdu, plus de clarté pour vos clients, moins de
                contestations sur le prix final.
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-[#E3E5E8] bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-[#04163a]">
                Ce que Moverz Pro permet concrètement
              </h3>
              <ul className="space-y-2 text-sm text-[#4b5c6b]">
                <li>• Centraliser les demandes provenant de Moverz et de vos propres canaux</li>
                <li>• Avoir un inventaire homogène pour chaque client (volume, accès, options)</li>
                <li>• Générer plus vite des devis lisibles et comparables</li>
                <li>• Garder une trace des échanges et des versions de devis</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Standardisation des dossiers",
                text: "Même structure pour toutes les demandes : moins d’oublis, moins de zones grises, plus de productivité pour les équipes commerciales.",
              },
              {
                title: "Lecture des prix facilitée",
                text: "Vos clients voient clairement ce qui est inclus ou non. Résultat : moins de malentendus et moins de négociations interminables.",
              },
              {
                title: "Suivi et pilotage",
                text: "Visualisez vos demandes, vos conversions et vos marges par type de déménagement. Identifiez les offres qui fonctionnent vraiment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E3E5E8] bg-white p-5 space-y-2"
              >
                <h3 className="text-sm font-semibold text-[#04163a]">{item.title}</h3>
                <p className="text-sm text-[#4b5c6b]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA contact */}
      <section className="section section-contrast">
        <div className="container max-w-3xl text-center space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6BCFCF]">
            Discuter de Moverz Pro
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Vous voulez en savoir plus sur la version pro ?
          </h2>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            Dites-nous comment vous travaillez aujourd&apos;hui et ce que vous aimeriez améliorer. On
            voit ensemble si Moverz Pro peut vraiment vous aider, sans bullshit ni engagement.
          </p>
          <a href="/contact/" className="btn-primary">
            Parler à l&apos;équipe Moverz Pro
          </a>
        </div>
      </section>
    </main>
  );
}


