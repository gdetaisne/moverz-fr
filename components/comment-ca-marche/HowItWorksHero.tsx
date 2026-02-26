"use client";
import { useEffect, useState } from "react";
import { ClipboardList, MessageSquare, CheckCircle } from "lucide-react";

export default function HowItWorksHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      className="relative overflow-hidden py-20 md:py-32"
      style={{ 
        background: "linear-gradient(to bottom, #F0FDFA 0%, #E0F2FE 50%, #F9FAFB 100%)" 
      }}
    >
      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" 
        }}
      />

      {/* Vignette effect */}
      <div 
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.05) 100%)"
        }}
      />

      <div 
        className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        style={{
          animation: mounted ? 'fadeInUp 1s ease-out' : 'none',
        }}
      >
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
            <li><a href="/" className="hover:text-[var(--color-text)] transition-colors">Accueil</a></li>
            <li>/</li>
            <li className="text-[var(--color-text)]">Comment ça marche</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 px-4 py-2 text-sm font-semibold text-[var(--color-text)] mb-8">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Processus en 3 étapes
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1] text-[var(--color-text)]">
              Comment ça marche ?
            </h1>

            <p className="text-xl text-[var(--color-text-secondary)] mb-10 leading-relaxed">
              En 3 minutes, vous complétez un dossier guidé et recevez des devis comparables. Simple, rapide, sans démarchage.
            </p>

            {/* CTA */}
            <a
              href="https://devis.moverz.fr/devis-gratuits"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #0EA5A6 0%, #0891A1 100%)"
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Obtenir mes devis</span>
            </a>
          </div>

          {/* Right: Quick steps icons */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[var(--color-border)] hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)]/10">
                <MessageSquare className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="font-semibold text-[var(--color-text)]">1. Décrivez</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Ville, date, type de logement</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[var(--color-border)] hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)]/10">
                <ClipboardList className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="font-semibold text-[var(--color-text)]">2. Complétez le dossier</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Infos standardisées → devis comparables</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[var(--color-border)] hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)]/10">
                <CheckCircle className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <p className="font-semibold text-[var(--color-text)]">3. Comparez</p>
                <p className="text-sm text-[var(--color-text-secondary)]">des devis comparables</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </section>
  );
}

