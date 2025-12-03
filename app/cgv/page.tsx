import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente (CGV) | Moverz",
  description:
    "Conditions Générales de Vente de Moverz : informations sur les services payants pour les professionnels et les modalités de facturation.",
  alternates: {
    canonical: getCanonicalUrl('cgv'),
  },
};

export default function CGVPage() {
  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />

      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=2000&auto=format&fit=crop"
            alt="Conditions Générales de Vente"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04163a]/95 via-[#2b7a78]/88 to-[#04163a]/92"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "CGV", href: "/cgv/" }
            ]}
          />
          <h1 className="text-3xl md:text-5xl font-bold mt-6">Conditions Générales de Vente</h1>
          <p className="text-white/85 mt-3 max-w-3xl">
            Les conditions de vente des services Moverz aux professionnels partenaires.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-5xl">
          <div className="space-y-10 text-white/90">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">1. Objet</h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre GSLV EURL (Moverz) et ses clients professionnels (déménageurs partenaires) concernant la fourniture de services de mise en relation et de génération de leads qualifiés.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">2. Services proposés</h2>
              <p>Moverz propose aux déménageurs partenaires :</p>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-white/80">
                <li>L'accès à des dossiers de déménagement qualifiés et standardisés.</li>
                <li>La possibilité de soumettre des devis basés sur un inventaire unique.</li>
                <li>Une plateforme de gestion des leads et des échanges avec les clients.</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">3. Tarifs et modalités de paiement</h2>
              <p>
                Les tarifs des services sont définis dans un contrat commercial spécifique conclu entre Moverz et chaque déménageur partenaire. Les modalités de facturation (au lead, à la commission, abonnement) et de paiement y sont détaillées.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">4. Responsabilité</h2>
              <p>
                Moverz s'engage à fournir un service de qualité. Cependant, Moverz ne saurait être tenu responsable des litiges commerciaux ou des prestations de déménagement réalisées par les partenaires.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

