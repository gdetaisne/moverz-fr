import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import { ShieldCheck, Users, Linkedin, Truck } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: "#F9FAFB" }}>
      <section 
        className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-28"
        style={{ 
          background: "linear-gradient(to bottom, #F0FDFA 0%, #E0F2FE 50%, #F9FAFB 100%)"
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
          }}
        />

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
            <div>
              <h1 
                className="mt-6 font-heading text-[clamp(32px,5vw,52px)] font-bold tracking-[-0.02em] leading-[1.1]"
                style={{ color: "#111827" }}
              >
                On révolutionne le <span style={{ color: "#0EA5A6" }}>déménagement</span>,<br />
                ensemble.
              </h1>

              <p 
                className="mt-5 text-base md:text-lg leading-relaxed max-w-xl"
                style={{ color: "#6B7280" }}
              >
                Une vraie équipe. Des réponses claires. <span style={{ color: "#111827", fontWeight: 600 }}>Pas de bullshit</span>.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2.5 text-xs">
                <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm shadow-sm transition-all hover:shadow-md" style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(14,165,166,0.2)", color: "#111827" }}>
                  <ShieldCheck className="h-3.5 w-3.5" style={{ color: "#0EA5A6" }} />
                  <span className="font-medium">Sans démarchage</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm shadow-sm transition-all hover:shadow-md" style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(14,165,166,0.2)", color: "#111827" }}>
                  <ShieldCheck className="h-3.5 w-3.5" style={{ color: "#0EA5A6" }} />
                  <span className="font-medium">Dossier anonyme</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm shadow-sm transition-all hover:shadow-md" style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(14,165,166,0.2)", color: "#111827" }}>
                  <ShieldCheck className="h-3.5 w-3.5" style={{ color: "#0EA5A6" }} />
                  <span className="font-medium">Devis comparables</span>
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="group relative rounded-3xl border backdrop-blur-sm p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300" style={{ background: "rgba(255,255,255,0.98)", borderColor: "rgba(14,165,166,0.15)" }}>
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(240,253,250,0.6) 0%, rgba(224,242,254,0.6) 100%)" }} />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: "rgba(14,165,166,0.12)", color: "#0EA5A6" }}>
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-base font-bold" style={{ color: "#111827" }}>On vous répond</p>
                      <p className="text-sm" style={{ color: "#6B7280" }}>Une vraie équipe, pas un bot.</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="group/card rounded-2xl border bg-white/80 backdrop-blur-sm p-5 hover:bg-white transition-all duration-200 hover:shadow-md" style={{ borderColor: "rgba(14,165,166,0.15)" }}>
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-xl border bg-white shadow-sm" style={{ borderColor: "rgba(14,165,166,0.2)" }}>
                          <Image
                            src="/lucie-profile.jpg"
                            alt="Lucie, cofondateur Moverz"
                            width={48}
                            height={48}
                            className="h-12 w-12 object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold leading-tight" style={{ color: "#111827" }}>
                            Lucie
                          </p>
                          <p className="text-xs font-medium" style={{ color: "#6B7280" }}>Cofondateur</p>
                        </div>
                      </div>
                      <a
                        href="https://www.linkedin.com/in/lucieveltz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold group-hover/card:gap-2 transition-all"
                        style={{ color: "#0EA5A6" }}
                      >
                        <Linkedin className="h-3.5 w-3.5" />
                        <span>LinkedIn</span>
                      </a>
                    </div>

                    <div className="group/card rounded-2xl border bg-white/80 backdrop-blur-sm p-5 hover:bg-white transition-all duration-200 hover:shadow-md" style={{ borderColor: "rgba(14,165,166,0.15)" }}>
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-xl border bg-white shadow-sm" style={{ borderColor: "rgba(14,165,166,0.2)" }}>
                          <Image
                            src="/guillaume-profile.jpg"
                            alt="Guillaume, cofondateur Moverz"
                            width={48}
                            height={48}
                            className="h-12 w-12 object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold leading-tight" style={{ color: "#111827" }}>
                            Guillaume
                          </p>
                          <p className="text-xs font-medium" style={{ color: "#6B7280" }}>Cofondateur</p>
                        </div>
                      </div>
                      <a
                        href="https://www.linkedin.com/in/guillaume-stehelin-de-taisne-4a59805a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold group-hover/card:gap-2 transition-all"
                        style={{ color: "#0EA5A6" }}
                      >
                        <Linkedin className="h-3.5 w-3.5" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="relative py-20 md:py-32 overflow-hidden"
        style={{ 
          background: "linear-gradient(to bottom, #FFFFFF 0%, #F9FAFB 100%)"
        }}
      >
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="group relative rounded-3xl border backdrop-blur-sm p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300" style={{ background: "rgba(255,255,255,0.98)", borderColor: "rgba(14,165,166,0.15)" }}>
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(240,253,250,0.5) 0%, rgba(224,242,254,0.5) 100%)" }} />
              
              <div className="relative">
                <h2 
                  className="text-2xl md:text-3xl font-heading font-bold mb-8"
                  style={{ color: "#111827" }}
                >
                  <span style={{ color: "#0EA5A6" }}>Coordonnées</span>
                </h2>
                <div className="space-y-8 text-base" style={{ color: "#6B7280" }}>
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#6B7280", opacity: 0.7 }}>
                      Email
                    </p>
                    <a
                      href="mailto:contact@moverz.fr"
                      className="block text-xl font-bold hover:opacity-80 transition-opacity"
                      style={{ color: "#0EA5A6" }}
                    >
                      contact@moverz.fr
                    </a>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#6B7280", opacity: 0.7 }}>
                      Horaires
                    </p>
                    <p className="text-base font-medium" style={{ color: "#111827" }}>Lundi - Vendredi : 9h - 18h</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#6B7280", opacity: 0.7 }}>
                      Adresse
                    </p>
                    <p className="text-base leading-relaxed font-medium" style={{ color: "#111827" }}>
                      GSLV EURL - Moverz<br />
                      5 Rue Jean Coyttar<br />
                      17290 Thairé, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative rounded-3xl border backdrop-blur-sm p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300" style={{ background: "rgba(255,255,255,0.98)", borderColor: "rgba(14,165,166,0.15)" }}>
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(240,253,250,0.5) 0%, rgba(224,242,254,0.5) 100%)" }} />
              
              <div className="relative">
                <h2 
                  className="text-2xl md:text-3xl font-heading font-bold mb-8"
                  style={{ color: "#111827" }}
                >
                  Nos <span style={{ color: "#0EA5A6" }}>garanties</span>
                </h2>
                <ul className="space-y-5 text-base">
                    <li className="flex items-start gap-4 group/item">
                      <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all" style={{ background: "rgba(14,165,166,0.12)", color: "#0EA5A6" }}>
                        <ShieldCheck className="h-4.5 w-4.5" />
                      </span>
                      <span className="leading-relaxed">
                        <strong className="font-bold block mb-1" style={{ color: "#111827" }}>Dossier anonyme</strong>
                        <span style={{ color: "#6B7280" }}>Coordonnées partagées après votre choix.</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all" style={{ background: "rgba(14,165,166,0.12)", color: "#0EA5A6" }}>
                        <ShieldCheck className="h-4.5 w-4.5" />
                      </span>
                      <span className="leading-relaxed">
                        <strong className="font-bold block mb-1" style={{ color: "#111827" }}>Déménageurs contrôlés</strong>
                        <span style={{ color: "#6B7280" }}>Solvabilité + signaux faibles.</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all" style={{ background: "rgba(14,165,166,0.12)", color: "#0EA5A6" }}>
                        <ShieldCheck className="h-4.5 w-4.5" />
                      </span>
                      <span className="leading-relaxed">
                        <strong className="font-bold block mb-1" style={{ color: "#111827" }}>Devis comparables</strong>
                        <span style={{ color: "#6B7280" }}>Même cahier des charges pour tous.</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-4 group/item">
                      <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all" style={{ background: "rgba(14,165,166,0.12)", color: "#0EA5A6" }}>
                        <ShieldCheck className="h-4.5 w-4.5" />
                      </span>
                      <span className="leading-relaxed">
                        <strong className="font-bold block mb-1" style={{ color: "#111827" }}>Sans démarchage</strong>
                        <span style={{ color: "#6B7280" }}>Vous choisissez quand échanger.</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section 
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ 
          background: "linear-gradient(135deg, #F0FDFA 0%, #E0F2FE 50%, #F9FAFB 100%)"
        }}
      >
        {/* Grain texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
          }}
        />
        
        <div className="container relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border backdrop-blur-xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]" style={{ background: "rgba(255,255,255,0.95)", borderColor: "rgba(14,165,166,0.2)" }}>
            <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl" style={{ background: "rgba(14,165,166,0.15)", color: "#0EA5A6" }}>
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
              href="/partenaires"
              className="group shrink-0 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              style={{ background: "#0EA5A6" }}
            >
              En savoir plus
              <span className="text-base leading-none group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      <section 
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ 
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #111827 100%)"
        }}
      >
        {/* Grain texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
          }}
        />
        
        {/* Radial gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(14,165,166,0.08) 0%, transparent 60%)",
          }}
        />
        
        <div className="container relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2
            className="font-heading text-[clamp(28px,4vw,40px)] font-bold leading-tight"
            style={{ color: "#FFFFFF" }}
          >
            Besoin d'une <span style={{ color: "#0EA5A6" }}>réponse rapide</span> ?
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            Consultez notre FAQ pour trouver les réponses aux questions les plus fréquentes.
          </p>
          <a
            href="/faq/"
            className="group inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold shadow-[0_8px_24px_rgba(14,165,166,0.3)] hover:shadow-[0_12px_32px_rgba(14,165,166,0.4)] hover:-translate-y-0.5 transition-all duration-300"
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
