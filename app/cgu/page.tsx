import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation (CGU)",
  description:
    "Conditions Générales d'Utilisation de Moverz : règles d'accès et d'utilisation de notre plateforme de comparaison de devis de déménagement.",
  alternates: {
    canonical: getCanonicalUrl('cgu'),
  },
};

export default function CGUPage() {
  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />

      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=2000&auto=format&fit=crop"
            alt="Conditions Générales d'Utilisation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04163a]/95 via-[#2b7a78]/88 to-[#04163a]/92"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "CGU", href: "/cgu/" }
            ]}
          />
          <h1 className="text-3xl md:text-5xl font-bold mt-6">Conditions Générales d'Utilisation</h1>
          <p className="text-white/85 mt-3 max-w-3xl">
            Les règles d'accès et d'utilisation de la plateforme Moverz.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-5xl">
          <div className="space-y-10 text-white/90">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">1. Objet</h2>
              <p>
                Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de la plateforme Moverz. Moverz propose un service de mise en relation entre des particuliers souhaitant déménager et des professionnels du déménagement.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">2. Acceptation des CGU</h2>
              <p>
                L'utilisation de la plateforme Moverz implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser nos services.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">3. Accès au service</h2>
              <p>
                L'accès à la plateforme est gratuit pour les particuliers. Vous devez être majeur et disposer de la capacité juridique pour utiliser nos services.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">4. Responsabilité de Moverz</h2>
              <p>
                Moverz s'efforce d'assurer la qualité de son service et la fiabilité de ses partenaires. Cependant, Moverz ne saurait être tenu responsable des litiges pouvant survenir entre l'utilisateur et le déménageur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

