import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { MessageCircle, Mail, Clock, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = getFullMetadata(
  'contact',
  "Contactez Moverz : Support Déménagement [Réponse 24h] | Moverz",
  "Besoin d'aide pour votre déménagement ? Notre équipe répond en 24h · Questions sur les devis, les pros, le service · Email : contact@moverz.fr"
);

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-[#6BCFCF]/15 blur-[90px]" />
        <div className="absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-[#6BCFCF]/15 blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-white">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Contact", href: "/contact/" },
            ]}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <Clock className="h-4 w-4 text-[#6BCFCF]" />
                Réponse sous 24h ouvrées
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05]">
                Un message, un devis, un doute ?
                <br />
                <span className="text-[#6BCFCF]">On vous répond vite.</span>
              </h1>

              <p className="mt-5 text-lg text-white/80 max-w-xl">
                Le plus simple: WhatsApp (photos + contexte). Sinon, laissez-nous un message par email via
                le formulaire.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/33752986581?text=Bonjour%20!%20J%E2%80%99ai%20une%20question%20sur%20mon%20d%C3%A9m%C3%A9nagement."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-sm hover:shadow-[0_10px_25px_rgba(37,211,102,0.25)] hover:scale-[1.02] active:scale-[0.99] transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  Démarrer sur WhatsApp
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="#form"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15 transition-all"
                >
                  <Mail className="h-4 w-4" />
                  Envoyer un message
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/70">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#6BCFCF]" />
                  Sans démarchage
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#6BCFCF]" />
                  Dossier anonyme
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#6BCFCF]" />
                  Devis comparables
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-sm font-semibold">Rapide</p>
                <p className="mt-2 text-sm text-white/70">
                  WhatsApp si vous pouvez envoyer 2–3 photos (accès, pièces, cave…).
                </p>
                <p className="mt-4 text-xs text-white/60">Lun–Ven · 9h–18h</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-sm font-semibold">Détaillé</p>
                <p className="mt-2 text-sm text-white/70">
                  Formulaire/email pour une demande structurée (devis, litige, admin).
                </p>
                <p className="mt-4 text-xs text-white/60">Réponse sous 24h ouvrées</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="section section-light">
        <div className="container max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <div
              id="form"
              className="relative overflow-hidden rounded-3xl border border-[#E3E5E8] bg-gradient-to-b from-white to-[#FAFBFC] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#6BCFCF]/70 via-[#0F172A]/20 to-[#6BCFCF]/70" />
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
                  Envoyer un message
                </h2>
                <p className="mt-2 text-sm md:text-base text-[#1E293B]/70">
                  Donnez un peu de contexte (dates, villes, volume, contraintes). On vous répond sous 24h
                  ouvrées.
                </p>
              </div>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-[#E3E5E8] bg-white p-7 md:p-8 shadow-sm">
                <p className="text-sm font-semibold text-[#0F172A]">Coordonnées</p>
                <div className="mt-4 space-y-4 text-sm text-[#1E293B]/70">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:contact@moverz.fr"
                      className="text-[#2B7A78] hover:text-[#1F5F5D] font-semibold transition-colors"
                    >
                      contact@moverz.fr
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                      Horaires
                    </p>
                    <p>Lundi - Vendredi : 9h - 18h</p>
                    <p className="text-xs text-[#6B7280] mt-0.5">Réponse sous 24h ouvrées</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                      Adresse
                    </p>
                    <p className="leading-relaxed">
                      GSLV EURL - Moverz<br />
                      5 Rue Jean Coyttar<br />
                      17290 Thairé, France
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-[#E3E5E8] bg-white p-7 md:p-8 shadow-sm">
                <p className="text-sm font-semibold text-[#0F172A]">Nos garanties</p>
                <ul className="mt-4 space-y-3 text-sm text-[#1E293B]/70">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#6BCFCF]/15 text-[#2B7A78]">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span>
                      <strong className="text-[#0F172A]">Dossier anonyme</strong> — coordonnées partagées après votre choix.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#6BCFCF]/15 text-[#2B7A78]">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span>
                      <strong className="text-[#0F172A]">Déménageurs contrôlés</strong> — solvabilité + signaux faibles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#6BCFCF]/15 text-[#2B7A78]">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span>
                      <strong className="text-[#0F172A]">Devis comparables</strong> — même cahier des charges pour tous.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#6BCFCF]/15 text-[#2B7A78]">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span>
                      <strong className="text-[#0F172A]">Sans démarchage</strong> — vous choisissez quand échanger.
                    </span>
                  </li>
                </ul>
              </div>
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

