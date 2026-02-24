import type { Metadata } from "next";
import { getFullMetadata } from "@/lib/canonical-helper";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { Clock, Mail, ShieldCheck, Users, Linkedin, Truck } from "lucide-react";

export const metadata: Metadata = getFullMetadata(
  'contact',
  "Contact Moverz : Support Déménagement (24h)",
  "Besoin d'aide ? Notre équipe répond sous 24h. Questions devis, pros, service. Email : contact@moverz.fr"
);

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: "#F9FAFB" }}>
      {/* Hero Section with Homepage Style */}
      <section 
        className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-28"
        style={{ 
          background: "linear-gradient(to bottom, #F0FDFA 0%, #E0F2FE 50%, #F9FAFB 100%)"
        }}
      >
        {/* Grain texture - Premium feel */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
          }}
        />

        {/* Vignette sur les bords */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.03) 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Contact", href: "/contact/" },
            ]}
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left Column - Text */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-white/90 px-5 py-2 text-sm font-semibold shadow-md backdrop-blur-sm" style={{ borderColor: "#0EA5A6", color: "#111827" }}>
                <Clock className="h-4 w-4" style={{ color: "#0EA5A6" }} />
                <span>Réponse sous 24h ouvrées</span>
              </div>

              <h1 
                className="mt-6 font-heading text-[clamp(32px,5vw,52px)] font-bold tracking-[-0.02em] leading-[1.1]"
                style={{ color: "#111827" }}
              >
                On répond <span style={{ color: "#0EA5A6" }}>vite</span>.<br />
                Et on répond <span style={{ color: "#0EA5A6" }}>clair</span>.
              </h1>

              <p 
                className="mt-5 text-base md:text-lg leading-relaxed max-w-xl"
                style={{ color: "#6B7280" }}
              >
                Besoin d'aide sur un devis, une arnaque, ou votre dossier ? Le plus simple : envoyez un message via le formulaire (avec un maximum de contexte).
              </p>

              <div className="mt-7">
                <a
                  href="#form"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  style={{ background: "#0EA5A6" }}
                >
                  <Mail className="h-4 w-4" />
                  <span>Envoyer un message</span>
                  <span className="text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs" style={{ color: "#6B7280" }}>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm border border-white/60">
                  <ShieldCheck className="h-3.5 w-3.5" style={{ color: "#0EA5A6" }} />
                  Sans démarchage
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm border border-white/60">
                  <ShieldCheck className="h-3.5 w-3.5" style={{ color: "#0EA5A6" }} />
                  Dossier anonyme
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm border border-white/60">
                  <ShieldCheck className="h-3.5 w-3.5" style={{ color: "#0EA5A6" }} />
                  Devis comparables
                </span>
              </div>
            </div>

            {/* Right Column - Cards */}
            <div className="space-y-4">
              {/* Team Card */}
              <div className="rounded-3xl border bg-white/95 backdrop-blur-sm p-7 shadow-[0_8px_32px_rgba(0,0,0,0.08)]" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: "rgba(14,165,166,0.1)", color: "#0EA5A6" }}>
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#111827" }}>On vous répond</p>
                    <p className="text-sm" style={{ color: "#6B7280" }}>Une vraie équipe, pas un bot.</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {/* Lucie */}
                  <div className="rounded-2xl border bg-white p-4" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-xl border bg-white" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                        <Image
                          src="/lucie-profile.jpg"
                          alt="Lucie, cofondateur Moverz"
                          width={40}
                          height={40}
                          className="h-10 w-10 object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold leading-tight" style={{ color: "#111827" }}>
                          Lucie
                        </p>
                        <p className="text-xs" style={{ color: "#6B7280" }}>Cofondateur</p>
                      </div>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/lucieveltz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold hover:opacity-80 transition-opacity"
                      style={{ color: "#111827" }}
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      LinkedIn
                    </a>
                  </div>

                  {/* Guillaume */}
                  <div className="rounded-2xl border bg-white p-4" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-xl border bg-white" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                        <Image
                          src="/guillaume-profile.jpg"
                          alt="Guillaume, cofondateur Moverz"
                          width={40}
                          height={40}
                          className="h-10 w-10 object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold leading-tight" style={{ color: "#111827" }}>
                          Guillaume
                        </p>
                        <p className="text-xs" style={{ color: "#6B7280" }}>Cofondateur</p>
                      </div>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold hover:opacity-80 transition-opacity"
                      style={{ color: "#111827" }}
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Tip Card */}
              <div className="rounded-3xl border bg-white/95 backdrop-blur-sm p-7 shadow-[0_4px_16px_rgba(0,0,0,0.04)]" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <p className="text-sm font-semibold" style={{ color: "#111827" }}>Astuce</p>
                <p className="mt-2 text-sm" style={{ color: "#6B7280" }}>
                  Si vous avez un devis "bizarre", envoyez une capture + quelques détails (accès / étage / cave). On vous dit tout de suite ce qui cloche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Contact Info Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            {/* Form */}
            <div
              id="form"
              className="relative overflow-hidden rounded-3xl border bg-gradient-to-b from-white to-[#FAFBFC] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <div
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#0EA5A6] to-transparent"
              />

              <div className="mb-6">
                <h2
                  className="text-2xl md:text-3xl font-heading font-bold"
                  style={{ color: "#111827" }}
                >
                  Envoyer un <span style={{ color: "#0EA5A6" }}>message</span>
                </h2>
                <p className="mt-2 text-sm md:text-base" style={{ color: "#6B7280" }}>
                  Donnez un peu de contexte (dates, villes, volume, contraintes). On vous répond sous 24h ouvrées.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Coordonnées */}
              <div className="rounded-3xl border bg-white/95 backdrop-blur-sm p-7 md:p-8 shadow-[0_4px_16px_rgba(0,0,0,0.04)]" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <p className="text-sm font-semibold" style={{ color: "#111827" }}>Coordonnées</p>
                <div className="mt-4 space-y-4 text-sm" style={{ color: "#6B7280" }}>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#6B7280" }}>
                      Email
                    </p>
                    <a
                      href="mailto:contact@moverz.fr"
                      className="font-semibold hover:opacity-80 transition-opacity"
                      style={{ color: "#0EA5A6" }}
                    >
                      contact@moverz.fr
                    </a>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#6B7280" }}>
                      Horaires
                    </p>
                    <p>Lundi - Vendredi : 9h - 18h</p>
                    <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>Réponse sous 24h ouvrées</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#6B7280" }}>
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

              {/* Garanties */}
              <div className="rounded-3xl border bg-white/95 backdrop-blur-sm p-7 md:p-8 shadow-[0_4px_16px_rgba(0,0,0,0.04)]" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <p className="text-sm font-semibold" style={{ color: "#111827" }}>Nos garanties</p>
                <ul className="mt-4 space-y-3 text-sm" style={{ color: "#6B7280" }}>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full" style={{ background: "rgba(14,165,166,0.15)", color: "#0EA5A6" }}>
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span>
                      <strong style={{ color: "#111827" }}>Dossier anonyme</strong> — coordonnées partagées après votre choix.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full" style={{ background: "rgba(14,165,166,0.15)", color: "#0EA5A6" }}>
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span>
                      <strong style={{ color: "#111827" }}>Déménageurs contrôlés</strong> — solvabilité + signaux faibles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full" style={{ background: "rgba(14,165,166,0.15)", color: "#0EA5A6" }}>
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span>
                      <strong style={{ color: "#111827" }}>Devis comparables</strong> — même cahier des charges pour tous.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full" style={{ background: "rgba(14,165,166,0.15)", color: "#0EA5A6" }}>
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span>
                      <strong style={{ color: "#111827" }}>Sans démarchage</strong> — vous choisissez quand échanger.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Section */}
      <section className="py-16 md:py-24" style={{ background: "#F9FAFB" }}>
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border bg-gradient-to-br from-white to-[#F8FAFB] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-[0_4px_16px_rgba(0,0,0,0.04)]" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl" style={{ background: "rgba(14,165,166,0.1)", color: "#0EA5A6" }}>
              <Truck className="h-7 w-7" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg font-heading font-bold" style={{ color: "#111827" }}>
                Vous êtes déménageur ?
              </p>
              <p className="mt-1 text-sm" style={{ color: "#6B7280" }}>
                Rejoignez notre réseau et recevez des dossiers qualifiés. Inscription gratuite, sans engagement.
              </p>
            </div>
            <a
              href="https://pro.moverz.fr/inscription"
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              style={{ background: "#0EA5A6" }}
            >
              S'inscrire
              <span className="text-base leading-none group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ CTA Section */}
      <section className="py-20 md:py-28" style={{ background: "#111827" }}>
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2
            className="font-heading text-[clamp(28px,4vw,40px)] font-bold leading-tight"
            style={{ color: "#FFFFFF" }}
          >
            Besoin d'une <span style={{ color: "#0EA5A6" }}>réponse rapide</span> ?
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            Consultez notre FAQ pour trouver les réponses aux questions les plus fréquentes.
          </p>
          <a
            href="/faq/"
            className="group inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            style={{ background: "#0EA5A6", color: "#FFFFFF" }}
          >
            <span>Accéder à la FAQ</span>
            <span className="text-xl leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
