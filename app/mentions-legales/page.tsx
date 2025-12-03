import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Mentions légales | Moverz",
  description:
    "Mentions légales de Moverz (GSLV) : éditeur, hébergeur, responsabilité, propriété intellectuelle et données personnelles.",
  alternates: {
    canonical: getCanonicalUrl('mentions-legales'),
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />

      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=2000&auto=format&fit=crop"
            alt="Mentions légales"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04163a]/95 via-[#2b7a78]/88 to-[#04163a]/92"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Mentions légales", href: "/mentions-legales/" }
            ]}
          />
          <h1 className="text-3xl md:text-5xl font-bold mt-6">Mentions légales</h1>
          <p className="text-white/85 mt-3 max-w-3xl">
            Informations légales conformément aux articles 6-III et 19 de la loi
            n°2004-575 du 21 juin 2004 (LCEN) et au Code de la consommation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-5xl">
          <div className="space-y-10 text-white/90">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Éditeur du site</h2>
              <p>
                GSLV EURL SIREN 914499876, RCS de LA ROCHELLE. Siège social: 5 rue Jean
                Coyttar, 17290 Thairé, France. Marque exploitée: Moverz.
              </p>
              <p className="mt-2">Contact: contact@moverz.fr</p>
              <p className="mt-2">Directeur de la publication: Guillaume Stehelin</p>
              <p className="mt-2">Responsable de la rédaction: Équipe Moverz</p>
              <p className="mt-2">SIREN 914 499 876 — SIRET 914 499 876 00011 — RCS La Rochelle</p>
              <p className="mt-2">TVA intracommunautaire: FR43914499876 — Capital social: 1 000,00 €</p>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-white/80">
                <li>Demandes presse/partenariats/juridiques: adresse ci-dessus.</li>
                <li>Demandes RGPD: <span className="underline">contact@moverz.fr</span>.</li>
                <li>Délai moyen de réponse: 14 jours ouvrés.</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Hébergement</h2>
              <p>
                Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca,
                Chypre (VAT: CY10301365E). Infrastructure d'hébergement située en
                France (Paris) sur serveur VPS.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-white/80">
                <li>Localisation du serveur: France — Paris.</li>
                <li>Signalement sécurité: <span className="underline">contact@moverz.fr</span>.</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Activité</h2>
              <p>
                Moverz propose un service de préparation de dossier et de mise en
                relation avec des entreprises de déménagement partenaires. La
                comparaison des devis et le choix final appartiennent au client.
                GSLV agit exclusivement en tant qu'intermédiaire B2B et facture ses
                prestations aux professionnels partenaires.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Propriété intellectuelle</h2>
              <p>
                L'ensemble des contenus du site (textes, graphismes, logos, marques
                et bases de données) est protégé. Toute reproduction, adaptation ou
                représentation, totale ou partielle, sans autorisation écrite
                préalable est interdite.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Responsabilité</h2>
              <p>
                Les informations sont fournies à titre indicatif. Moverz ne saurait être responsable des erreurs,
                indisponibilités ou dommages indirects. Les devis sont émis par des
                partenaires tiers sous leur responsabilité.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">Données personnelles</h2>
              <p>
                Le traitement des données est décrit dans notre <a className="underline text-[#6bcfcf]" href="/politique-confidentialite/">Politique de
                confidentialité</a>. Conformément au RGPD, vous disposez de droits
                d'accès, de rectification, d'opposition, de limitation et
                d'effacement. Contact RGPD: contact@moverz.fr
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

