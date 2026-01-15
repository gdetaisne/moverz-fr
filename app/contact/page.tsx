import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = getFullMetadata(
  'contact',
  "Contactez Moverz : Support Déménagement [Réponse 24h] | Moverz",
  "Besoin d'aide pour votre déménagement ? Notre équipe répond en 24h · Questions sur les devis, les pros, le service · Email : contact@moverz.fr"
);

export default function ContactPage() {
  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=2000&auto=format&fit=crop"
            alt="Contactez-nous"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04163a]/95 via-[#2b7a78]/88 to-[#04163a]/92"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Contact", href: "/contact/" }
            ]}
          />
          <h1 className="text-3xl md:text-5xl font-bold mt-6">Contactez-nous</h1>
          <p className="text-white/85 mt-3 max-w-3xl">
            Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container max-w-5xl">
          {/* Formulaire de contact en haut - Style Stripe */}
          <div className="relative overflow-hidden rounded-3xl border border-[#E3E5E8] bg-gradient-to-b from-white to-[#FAFBFC] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.08)] mb-8">
            {/* Filament lumineux en haut */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#6BCFCF]/60 via-[#4f46e5]/40 to-[#22c55e]/50" />
            
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#6BCFCF]/20 bg-[#6BCFCF]/5 px-4 py-1.5 text-xs font-semibold text-[#2B7A78] mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6BCFCF] animate-pulse" />
                  Réponse sous 24h
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#04163a] mb-3">Envoyez-nous un message</h2>
                <p className="text-[#4b5c6b] text-base md:text-lg">
                  Une question ? Notre équipe vous répond rapidement par email.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Coordonnées et garanties en dessous */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Colonne gauche - Coordonnées */}
            <div className="relative overflow-hidden rounded-2xl border border-[#E3E5E8] bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#6BCFCF]/20 to-[#4FB8B8]/30 text-[#2B7A78]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#04163a]">Nous contacter</h3>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">Email</p>
                  <a 
                    href="mailto:contact@moverz.fr" 
                    className="text-[#2B7A78] hover:text-[#1F5F5D] font-medium transition-colors inline-flex items-center gap-1 group"
                  >
                    contact@moverz.fr
                    <svg className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">Horaires</p>
                  <p className="text-[#4b5c6b]">Lundi - Vendredi : 9h - 18h</p>
                  <p className="text-xs text-[#6B7280] mt-0.5">Réponse sous 24h ouvrées</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">Adresse</p>
                  <p className="text-[#4b5c6b] leading-relaxed">
                    GSLV EURL - Moverz<br />
                    5 Rue Jean Coyttar<br />
                    17290 Thairé, France
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne droite - Garanties */}
            <div className="relative overflow-hidden rounded-2xl border border-[#E3E5E8] bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#6BCFCF]/20 to-[#4FB8B8]/30 text-[#2B7A78]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#04163a]">Nos garanties</h3>
              </div>

              <ul className="space-y-3.5">
                <li className="flex items-start gap-3 group">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#6BCFCF]/10 mt-0.5 group-hover:bg-[#6BCFCF]/20 transition-colors">
                    <svg className="h-3 w-3 text-[#2B7A78]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#04163a] text-sm">Dossier anonyme</p>
                    <p className="text-xs text-[#6B7280] mt-0.5">Coordonnées partagées après votre choix</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#6BCFCF]/10 mt-0.5 group-hover:bg-[#6BCFCF]/20 transition-colors">
                    <svg className="h-3 w-3 text-[#2B7A78]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#04163a] text-sm">déménageurs contrôlés certifiés</p>
                    <p className="text-xs text-[#6B7280] mt-0.5">Solvabilité vérifiée, 0 litige majeur</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#6BCFCF]/10 mt-0.5 group-hover:bg-[#6BCFCF]/20 transition-colors">
                    <svg className="h-3 w-3 text-[#2B7A78]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#04163a] text-sm">Devis comparables</p>
                    <p className="text-xs text-[#6B7280] mt-0.5">Même cahier des charges pour tous</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#6BCFCF]/10 mt-0.5 group-hover:bg-[#6BCFCF]/20 transition-colors">
                    <svg className="h-3 w-3 text-[#2B7A78]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#04163a] text-sm">Sans démarchage</p>
                    <p className="text-xs text-[#6B7280] mt-0.5">Vous décidez quand et avec qui échanger</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Besoin d'une réponse rapide ?
          </h2>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Consultez notre FAQ pour trouver les réponses aux questions les plus fréquentes.
          </p>
          <a
            href="/faq/"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#6BCFCF] via-[#4FB8B8] to-[#3DA5A5] px-8 py-4 text-lg font-semibold text-[#04141f] shadow-[0_8px_30px_rgba(107,207,207,0.35)] hover:shadow-[0_12px_50px_rgba(107,207,207,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">Accéder à la FAQ</span>
            <span className="relative text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}

