import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import {
  ArrowRight,
  Clock,
  Mail,
  MessageCircle,
  ShieldCheck,
  Users,
  Linkedin,
} from "lucide-react";

export const metadata: Metadata = getFullMetadata(
  'contact',
  "Contactez Moverz : Support Déménagement [Réponse 24h] | Moverz",
  "Besoin d'aide pour votre déménagement ? Notre équipe répond en 24h · Questions sur les devis, les pros, le service · Email : contact@moverz.fr"
);

export default function ContactPage() {
  return (
    <main className="bg-hero min-h-screen">
      <div className="halo" />

      {/* Hero (light, homogène avec le reste du site) */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Contact", href: "/contact/" },
            ]}
          />

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#6BCFCF]/30 bg-white/70 px-4 py-2 text-sm font-semibold text-[#0F172A] backdrop-blur-sm">
                <Clock className="h-4 w-4 text-[#2B7A78]" />
                Réponse sous 24h ouvrées
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05] text-[#0F172A]">
                On répond vite.
                <br />
                <span className="text-[#0F172A]/80">Et on répond clair.</span>
              </h1>

              <p className="mt-5 text-base md:text-lg text-[#1E293B]/70 max-w-xl">
                Besoin d’aide sur un devis, une arnaque, ou votre dossier ? Le plus rapide: WhatsApp
                (photos + contexte). Sinon, envoyez un message via le formulaire.
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
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-[#0F172A]/15 bg-white px-6 py-4 text-sm font-semibold text-[#0F172A] hover:bg-gray-50 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Envoyer un message
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-[#0F172A]/60">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 backdrop-blur-sm border border-white/60">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#2B7A78]" />
                  Sans démarchage
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 backdrop-blur-sm border border-white/60">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#2B7A78]" />
                  Dossier anonyme
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 backdrop-blur-sm border border-white/60">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#2B7A78]" />
                  Devis comparables
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-[#E3E5E8] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#6BCFCF]/10 text-[#2B7A78]">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0F172A]">On vous répond</p>
                    <p className="text-sm text-[#1E293B]/70">Une vraie équipe, pas un bot.</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#E3E5E8] bg-[#FAFBFC] p-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-[#E3E5E8] bg-white">
                        <Image
                          src="/lucie-profile.jpg"
                          alt="Lucie, cofondateur Moverz"
                          width={40}
                          height={40}
                          className="h-10 w-10 object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#0F172A] leading-tight">
                          Lucie
                        </p>
                        <p className="text-xs text-[#6B7280]">Cofondateur</p>
                      </div>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/lucieveltz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#0F172A]/80 hover:text-[#0F172A] transition-colors"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      LinkedIn
                    </a>
                  </div>

                  <div className="rounded-2xl border border-[#E3E5E8] bg-[#FAFBFC] p-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-[#E3E5E8] bg-white">
                        <Image
                          src="/guillaume-profile.jpg"
                          alt="Guillaume, cofondateur Moverz"
                          width={40}
                          height={40}
                          className="h-10 w-10 object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#0F172A] leading-tight">
                          Guillaume
                        </p>
                        <p className="text-xs text-[#6B7280]">Cofondateur</p>
                      </div>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#0F172A]/80 hover:text-[#0F172A] transition-colors"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      LinkedIn
                    </a>
                  </div>
                </div>

              </div>

              <div className="rounded-3xl border border-[#E3E5E8] bg-white p-7 shadow-sm">
                <p className="text-sm font-semibold text-[#0F172A]">Astuce</p>
                <p className="mt-2 text-sm text-[#1E293B]/70">
                  Si vous avez un devis “bizarre”, envoyez une capture + 2 photos (accès / étage / cave). On vous dit tout de suite ce qui cloche.
                </p>
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

