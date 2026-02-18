"use client";
import { useEffect, useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  AlertCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function CreditsafeScoring() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Explications */}
          <div
            className="order-2 lg:order-1"
            style={{
              animation: mounted ? "fadeInUp 1s ease-out" : "none",
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--color-text)] mb-6">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Exclusivité Moverz
            </div>

            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--color-text)] mb-6 leading-tight">
              3 analyses de risque. Notées /100.
            </h2>

            <p className="text-lg text-[var(--color-text-secondary)]/70 leading-relaxed mb-8">
              Le prix ne fait pas tout. Nous évaluons chaque déménageur selon{" "}
              <strong className="text-[var(--color-text)]">
                3 axes de risque
              </strong>{" "}
              (expérience client, financier, juridique) via Creditsafe, Pappers
              et l'analyse des avis Google.
            </p>

            <div className="space-y-5">
              {/* Reco A */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
                <CheckCircle
                  className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <div>
                  <h3 className="font-semibold text-[var(--color-text)] mb-1">
                    ✓ Déménageur A
                  </h3>
                  <p className="text-[var(--color-text-secondary)]/70 text-sm">
                    Google 82/100 · Financier 85/100 · Juridique 91/100 · Aucune
                    alerte → Le plus fiable
                  </p>
                </div>
              </div>

              {/* Attention B */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-200">
                <AlertCircle
                  className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <div>
                  <h3 className="font-semibold text-[var(--color-text)] mb-1">
                    ⚠ Déménageur B
                  </h3>
                  <p className="text-[var(--color-text-secondary)]/70 text-sm">
                    Google 61/100 (patterns retards) · Financier 52/100 (↓ ratio
                    cash/dettes) → Fragile, négociez les conditions
                  </p>
                </div>
              </div>

              {/* Exclu C */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-200">
                <XCircle
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <div>
                  <h3 className="font-semibold text-[var(--color-text)] mb-1">
                    ✕ Déménageur C — Exclu automatiquement
                  </h3>
                  <p className="text-[var(--color-text-secondary)]/70 text-sm">
                    Alerte cash (ratio cash/dettes critique) + alerte juridique
                    (condamnation 2023) → Non présenté dans vos devis
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-[var(--color-text-secondary)]/60 mt-6 text-center lg:text-left">
              Sources : Google, Creditsafe, Pappers • Analyses automatiques •
              Exemple illustratif
            </p>
          </div>

          {/* Right: Mockup scoring app */}
          <div
            className="relative order-1 lg:order-2"
            style={{
              animation: mounted
                ? "fadeInUp 1s ease-out 0.2s both"
                : "none",
            }}
          >
            <div className="relative w-full max-w-[420px] mx-auto">
              <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden border border-[var(--color-border)]">
                {/* Header */}
                <div className="bg-gradient-to-br from-[var(--color-bg-dark)] to-[var(--color-bg-dark)] px-6 py-5 text-white">
                  <p className="text-xs font-semibold opacity-70 mb-1">
                    3 analyses de risque /100
                  </p>
                  <p className="text-lg font-bold">3 déménageurs évalués</p>
                </div>

                {/* Scores */}
                <div className="p-6 space-y-4">
                  {/* A - Green */}
                  <div className="p-4 rounded-xl bg-green-50 border-2 border-green-200">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold text-[var(--color-text)]">
                        Déménageur A
                      </p>
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-bold text-green-600">
                        85
                      </div>
                      <div className="flex-1">
                        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                            style={{ width: "85%" }}
                          />
                        </div>
                        <p className="text-xs text-green-900 mt-1">
                          Financier 85 · Google 82 · Juridique 91
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="text-xs font-medium bg-green-100 text-green-900 px-2 py-1 rounded">
                        0 alerte
                      </span>
                      <span className="text-xs font-medium bg-green-100 text-green-900 px-2 py-1 rounded">
                        Présenté
                      </span>
                    </div>
                  </div>

                  {/* B - Orange */}
                  <div className="p-4 rounded-xl bg-orange-50 border-2 border-orange-200">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold text-[var(--color-text)]">
                        Déménageur B
                      </p>
                      <TrendingDown className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-bold text-orange-600">
                        52
                      </div>
                      <div className="flex-1">
                        <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                          <div
                            className="h-full bg-orange-500 rounded-full"
                            style={{ width: "52%" }}
                          />
                        </div>
                        <p className="text-xs text-orange-900 mt-1">
                          Financier 52 (↓) · Google 61 · Juridique 74
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="text-xs font-medium bg-orange-100 text-orange-900 px-2 py-1 rounded">
                        Ratio cash/dettes faible
                      </span>
                    </div>
                  </div>

                  {/* C - Red / Exclu */}
                  <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold text-[var(--color-text)]">
                        Déménageur C
                      </p>
                      <XCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl font-bold text-red-600">
                        Exclu
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-red-900 mt-1">
                          Alerte cash + alerte juridique
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="text-xs font-medium bg-red-100 text-red-900 px-2 py-1 rounded">
                        Non présenté
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom explanation */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-[var(--color-border)]">
            <p className="text-sm font-semibold text-[var(--color-text)] mb-2">
              Pourquoi personne d'autre ne le fait ?
            </p>
            <p className="text-[var(--color-text-secondary)]/70 text-sm">
              Coût élevé (Creditsafe + Pappers + accès juridique), complexité
              d'analyse, et conflit d'intérêt : difficile de noter
              financièrement un client qui vous paie.
            </p>
            <a
              href="/verifications-partenaires/"
              className="inline-block mt-4 text-[var(--color-accent)] text-sm font-medium hover:text-[var(--color-text)] transition-colors"
            >
              → Voir le détail de nos 3 analyses de risque
            </a>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `,
        }}
      />
    </section>
  );
}
