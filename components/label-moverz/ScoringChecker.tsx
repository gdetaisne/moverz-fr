"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Building2, MapPin, ChevronRight, AlertCircle,
  CheckCircle2, Loader2, Shield, BarChart3, Lock, Star,
  ExternalLink, RefreshCw, TrendingUp, Scale, Eye,
} from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────

interface MoverResult {
  id: string;
  companyName: string;
  city: string;
  postalCode: string;
  siret: string | null;
  isPrioritaire: boolean;
  hasScore: boolean;
  globalScore: number | null;
  globalLabel: string | null;
}

interface PlaceCandidate {
  googlePlaceId: string;
  name: string;
  address: string;
  rating: number | null;
  reviewCount: number;
  primaryType?: string | null;
  isMovingBusiness?: boolean;
  isClosed?: boolean;
  relevanceScore?: number;
}

interface ScoringDimension {
  id: string;
  label: string;
  weight: number;
  score: number | null;
}

interface VigilanceCategory {
  id: string;
  label: string;
  weight: number;
  reviewCount: number;
  ratio: number;
  score: number | null;
  status: "ok" | "warning" | "alert";
}

interface ScoringResult {
  moverId: string;
  globalScore: number | null;
  globalLabel: string | null;
  globalColor: string;
  computedAt: string | null;
  dimensions: ScoringDimension[];
  subscores?: {
    financier: { score: number | null; label: string; color: string };
    juridique: { score: number | null; label: string; color: string };
    google: { score: number | null; label: string; color: string };
    reputation: { score: number | null; label: string; color: string };
    vigilance: { score: number | null; label: string; color: string };
  };
  reputation?: {
    totalCollected: number;
    authenticCount: number;
    suspiciousCount: number;
  } | null;
  vigilanceCategories?: VigilanceCategory[] | null;
  _meta?: {
    stale: boolean;
    recalcScheduled: boolean;
    googleRating: number | null;
    googleReviewsCount: number | null;
    googleReviewsAISummary: string | null;
    companyName: string | null;
    city: string | null;
    postalCode: string | null;
    siret: string | null;
    website: string | null;
    companyFoundedYear: number | null;
    pappersDecisions: number;
    pappersDecisionsList?: Array<{
      date: string | null;
      year: number | null;
      juridiction: string | null;
      position: string | null;
      dispositif: string | null;
      isAttacking: boolean;
    }>;
    juriExplanations?: string[];
    finResultat?: number | null;
    finFondsPropres?: number | null;
    finTresorerie?: number | null;
    finDettes?: number | null;
    finEBE?: number | null;
    finCroissanceCA?: number | null;
    finExplanations?: string[];
  };
  _quota: { used: number; max: number; remaining: number };
}

type Step = "search" | "place-select" | "result";

// ─── Helpers ────────────────────────────────────────────────────

function scoreColor(score: number | null): string {
  if (score == null) return "#9CA3AF";
  if (score >= 70) return "#16A34A";
  if (score >= 50) return "#D97706";
  if (score >= 30) return "#EA580C";
  return "#DC2626";
}

function vigilanceIcon(status: VigilanceCategory["status"]) {
  if (status === "alert") return "🚨";
  if (status === "warning") return "⚠️";
  return "✅";
}

function vigilanceColor(status: VigilanceCategory["status"]): string {
  if (status === "alert") return "#DC2626";
  if (status === "warning") return "#D97706";
  return "#16A34A";
}

// ─── Sous-composants ─────────────────────────────────────────────

function ScoreRing({ score, size = 100 }: { score: number | null; size?: number }) {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = score != null ? (score / 100) * circumference : 0;
  const color = scoreColor(score);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--color-border-light)" strokeWidth={strokeWidth} />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={circumference - progress} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-extrabold tabular-nums" style={{ color }}>{score ?? "—"}</span>
        <span className="text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>/100</span>
      </div>
    </div>
  );
}

function DimensionBar({ dimension }: { dimension: ScoringDimension }) {
  const color = scoreColor(dimension.score);
  const pct = dimension.score ?? 0;
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm w-40 shrink-0" style={{ color: "var(--color-text-secondary)" }}>{dimension.label}</span>
      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "var(--color-border-light)" }}>
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="text-sm font-bold w-8 text-right tabular-nums" style={{ color }}>{dimension.score ?? "—"}</span>
    </div>
  );
}

function SubScorePill({ label, score, icon }: { label: string; score: number | null; icon: string }) {
  const color = scoreColor(score);
  return (
    <div className="flex flex-col items-center gap-1 p-3 rounded-xl" style={{ background: `${color}08`, border: `1px solid ${color}20` }}>
      <span className="text-lg">{icon}</span>
      <span className="text-lg font-extrabold tabular-nums" style={{ color }}>{score ?? "—"}</span>
      <span className="text-xs font-medium text-center" style={{ color: "var(--color-text-secondary)" }}>{label}</span>
    </div>
  );
}

// ─── Composant principal ─────────────────────────────────────────

export function ScoringChecker() {
  const [step, setStep] = useState<Step>("search");
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<MoverResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [selectedMover, setSelectedMover] = useState<MoverResult | null>(null);
  const [placeCandidates, setPlaceCandidates] = useState<PlaceCandidate[]>([]);
  const [isLoadingPlace, setIsLoadingPlace] = useState(false);
  const [isLoadingScore, setIsLoadingScore] = useState(false);
  const [scoringResult, setScoringResult] = useState<ScoringResult | null>(null);
  const [scoreError, setScoreError] = useState<string | null>(null);
  const [quotaExceeded, setQuotaExceeded] = useState(false);
  const [quota, setQuota] = useState<{ used: number; max: number; remaining: number } | null>(null);

  const searchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearch = useCallback(async (value: string) => {
    setQuery(value);
    setSearchError(null);
    if (searchTimeout.current) clearTimeout(searchTimeout.current);
    if (value.length < 2) { setSearchResults([]); return; }

    searchTimeout.current = setTimeout(async () => {
      setIsSearching(true);
      try {
        const res = await fetch(`/api/scoring-check/search?q=${encodeURIComponent(value)}`);
        const text = await res.text();
        const data = text ? JSON.parse(text) : {};
        if (!res.ok) throw new Error(data.error || "Erreur recherche");
        setSearchResults(data.results ?? []);
      } catch (e: any) {
        setSearchError(e.message);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 350);
  }, []);

  // Écoute l'event émis par la carte pour pré-remplir la recherche
  useEffect(() => {
    const handler = (e: Event) => {
      const prefill = (e as CustomEvent<{ query: string }>).detail.query;
      if (prefill) handleSearch(prefill);
    };
    window.addEventListener("moverz:prefill-search", handler);
    return () => window.removeEventListener("moverz:prefill-search", handler);
  }, [handleSearch]);

  const handleSelectMover = useCallback(async (mover: MoverResult) => {
    setSelectedMover(mover);
    setSearchResults([]);

    if (mover.isPrioritaire) {
      await launchScoring(mover.id);
    } else {
      setIsLoadingPlace(true);
      setStep("place-select");
      try {
        const res = await fetch(`/api/scoring-check/place-candidates?moverId=${mover.id}`);
        const text = await res.text();
        const data = text ? JSON.parse(text) : {};
        if (!res.ok) throw new Error(data.error || "Erreur candidats");
        if (data.isPrioritaire) {
          await launchScoring(mover.id);
        } else {
          setPlaceCandidates(data.candidates ?? []);
        }
      } catch (e: any) {
        setScoreError(e.message);
        setStep("result");
      } finally {
        setIsLoadingPlace(false);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const launchScoring = useCallback(async (moverId: string) => {
    setStep("result");
    setIsLoadingScore(true);
    setScoreError(null);
    setScoringResult(null);

    try {
      const res = await fetch(`/api/scoring-check/score?moverId=${moverId}`);
      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (res.status === 429 && data.error === "quota_exceeded") {
        setQuotaExceeded(true);
        setQuota({ used: data.used, max: data.max, remaining: 0 });
        return;
      }
      if (!res.ok) throw new Error(data.error || "Erreur scoring");

      setScoringResult(data);
      setQuota(data._quota);
    } catch (e: any) {
      setScoreError(e.message);
    } finally {
      setIsLoadingScore(false);
    }
  }, []);

  const handleSelectCandidate = useCallback(async (candidate: PlaceCandidate) => {
    if (!selectedMover) return;
    // Lier le placeId en base (fire-and-forget — on ne bloque pas le scoring)
    fetch('/api/scoring-check/link-place', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        moverId: selectedMover.id,
        googlePlaceId: candidate.googlePlaceId,
        isMovingBusiness: candidate.isMovingBusiness ?? false,
        relevanceScore: candidate.relevanceScore ?? 0,
      }),
    }).catch(() => {/* non-bloquant */});
    await launchScoring(selectedMover.id);
  }, [selectedMover, launchScoring]);

  const handleReset = () => {
    setStep("search");
    setQuery("");
    setSearchResults([]);
    setSelectedMover(null);
    setPlaceCandidates([]);
    setScoringResult(null);
    setScoreError(null);
    setQuotaExceeded(false);
  };

  return (
    <section className="section section-light">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(14,165,166,0.1)", color: "var(--color-accent)" }}>
            <Shield className="w-4 h-4" />
            Vérifier un déménageur
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--color-text)" }}>
            Consultez le score d&apos;un déménageur
          </h2>
          <p className="text-base md:text-lg" style={{ color: "var(--color-text-secondary)" }}>
            Recherchez par nom ou SIRET. Résultat immédiat, 100% gratuit.
          </p>
          {quota && !quotaExceeded && (
            <div className="mt-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
              {quota.remaining} vérification{quota.remaining > 1 ? "s" : ""} restante{quota.remaining > 1 ? "s" : ""} sur {quota.max}
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          {/* ── Étape 1 : Recherche ── */}
          {step === "search" && (
            <motion.div key="search" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.25 }}>
              <div className="relative" style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
                <div className="flex items-center gap-3 p-4">
                  {isSearching ? <Loader2 className="w-5 h-5 shrink-0 animate-spin" style={{ color: "var(--color-accent)" }} />
                    : <Search className="w-5 h-5 shrink-0" style={{ color: "var(--color-text-muted)" }} />}
                  <input type="text" value={query} onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Nom, ville, code postal, SIRET…"
                    className="flex-1 text-base outline-none bg-transparent" style={{ color: "var(--color-text)" }} autoFocus />
                </div>

                {searchResults.length > 0 && (
                  <div style={{ borderTop: "1px solid var(--color-border)" }}>
                    {searchResults.map((mover) => (
                      <button key={mover.id} onClick={() => handleSelectMover(mover)}
                        className="w-full flex items-center gap-4 p-4 text-left transition-colors hover:bg-gray-50 last:rounded-b-2xl">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(14,165,166,0.08)" }}>
                          <Building2 className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold truncate" style={{ color: "var(--color-text)" }}>{mover.companyName}</div>
                          <div className="flex items-center gap-1 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                            <MapPin className="w-3 h-3" />{mover.city} ({mover.postalCode})
                            {mover.siret && <span className="ml-2 text-xs" style={{ color: "var(--color-text-muted)" }}>SIRET {mover.siret}</span>}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {mover.hasScore && mover.globalScore != null && (
                            <span className="text-sm font-bold px-2 py-1 rounded" style={{ background: `${scoreColor(mover.globalScore)}15`, color: scoreColor(mover.globalScore) }}>
                              {mover.globalScore}/100
                            </span>
                          )}
                          <ChevronRight className="w-4 h-4" style={{ color: "var(--color-text-muted)" }} />
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {query.length >= 2 && !isSearching && searchResults.length === 0 && !searchError && (
                  <div className="p-6 text-center text-sm" style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-text-secondary)" }}>
                    Aucun déménageur trouvé pour &laquo; {query} &raquo;.
                    <br /><span className="text-xs" style={{ color: "var(--color-text-muted)" }}>Essayez avec le SIRET (14 chiffres) si vous le connaissez.</span>
                  </div>
                )}

                {searchError && (
                  <div className="p-4 flex items-center gap-2 text-sm" style={{ borderTop: "1px solid var(--color-border)", color: "#DC2626" }}>
                    <AlertCircle className="w-4 h-4 shrink-0" />{searchError}
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs px-2" style={{ color: "var(--color-text-muted)" }}>
                <Lock className="w-3 h-3 shrink-0" />
                Vous pouvez consulter jusqu&apos;à 3 déménageurs gratuitement. Aucune donnée personnelle collectée.
              </div>
            </motion.div>
          )}

          {/* ── Étape 2 : Sélection fiche Google ── */}
          {step === "place-select" && (
            <motion.div key="place-select" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.25 }}>
              <div className="p-6 rounded-2xl" style={{ background: "white", border: "1px solid var(--color-border)", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
                {isLoadingPlace ? (
                  <div className="flex flex-col items-center gap-4 py-8">
                    <Loader2 className="w-8 h-8 animate-spin" style={{ color: "var(--color-accent)" }} />
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>Recherche de la fiche Google…</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <p className="font-semibold mb-1" style={{ color: "var(--color-text)" }}>Sélectionnez la bonne fiche Google</p>
                      <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                        Plusieurs fiches trouvées pour &laquo; {selectedMover?.companyName} &raquo;. Choisissez celle qui correspond.
                      </p>
                    </div>

                    {placeCandidates.length === 0 ? (
                      <div className="p-4 rounded-lg text-sm text-center" style={{ background: "var(--color-bg)", color: "var(--color-text-secondary)" }}>
                        Aucune fiche Google trouvée. Le scoring sera calculé sans données d&apos;avis.
                        <button onClick={() => launchScoring(selectedMover!.id)} className="mt-3 block mx-auto px-4 py-2 rounded-lg font-semibold text-sm" style={{ background: "var(--color-accent)", color: "white" }}>
                          Lancer le scoring quand même
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {placeCandidates.map((candidate) => {
                          const rel = candidate.relevanceScore ?? 0;
                          const isGoodMatch = candidate.isMovingBusiness && rel >= 50;
                          const isSuspect = !candidate.isMovingBusiness || rel < 20;
                          return (
                            <button key={candidate.googlePlaceId} onClick={() => handleSelectCandidate(candidate)}
                              className="w-full flex items-start gap-4 p-4 rounded-xl text-left transition-colors hover:bg-gray-50"
                              style={{
                                border: `1px solid ${isGoodMatch ? "#10b98133" : isSuspect ? "#f59e0b44" : "var(--color-border)"}`,
                                background: isGoodMatch ? "rgba(16,185,129,0.03)" : "white",
                              }}>
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(14,165,166,0.08)" }}>
                                <ExternalLink className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="font-semibold truncate" style={{ color: "var(--color-text)" }}>{candidate.name}</span>
                                  {isGoodMatch && (
                                    <span className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0" style={{ background: "rgba(16,185,129,0.1)", color: "#059669" }}>
                                      ✓ Déménagement
                                    </span>
                                  )}
                                  {!candidate.isMovingBusiness && candidate.primaryType && (
                                    <span className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0" style={{ background: "rgba(245,158,11,0.12)", color: "#b45309" }}>
                                      ⚠ Secteur différent
                                    </span>
                                  )}
                                  {candidate.isClosed && (
                                    <span className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0" style={{ background: "rgba(239,68,68,0.1)", color: "#dc2626" }}>
                                      Fermé
                                    </span>
                                  )}
                                </div>
                                <div className="text-sm truncate mt-0.5" style={{ color: "var(--color-text-secondary)" }}>{candidate.address}</div>
                                {candidate.rating != null && (
                                  <div className="flex items-center gap-1 mt-1">
                                    <Star className="w-3 h-3" style={{ color: "#F59E0B" }} />
                                    <span className="text-xs font-medium" style={{ color: "var(--color-text)" }}>{candidate.rating.toFixed(1)}</span>
                                    <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>({candidate.reviewCount} avis)</span>
                                  </div>
                                )}
                              </div>
                              <ChevronRight className="w-4 h-4 shrink-0 mt-1" style={{ color: "var(--color-text-muted)" }} />
                            </button>
                          );
                        })}
                      </div>
                    )}

                    <button onClick={handleReset} className="mt-4 text-sm underline" style={{ color: "var(--color-text-muted)" }}>← Retour à la recherche</button>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {/* ── Étape 3 : Résultat ── */}
          {step === "result" && (
            <motion.div key="result" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.25 }}>
              <div className="rounded-2xl overflow-hidden" style={{ background: "white", border: "1px solid var(--color-border)", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>

                {/* Chargement */}
                {isLoadingScore && (
                  <div className="flex flex-col items-center gap-4 py-16 px-8">
                    <Loader2 className="w-10 h-10 animate-spin" style={{ color: "var(--color-accent)" }} />
                    <div className="text-center">
                      <p className="font-semibold" style={{ color: "var(--color-text)" }}>Analyse en cours…</p>
                      <p className="text-sm mt-1" style={{ color: "var(--color-text-secondary)" }}>Nous interrogeons nos sources de données.</p>
                    </div>
                  </div>
                )}

                {/* Quota dépassé */}
                {!isLoadingScore && quotaExceeded && (
                  <div className="text-center py-12 px-8">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#FEF3C7" }}>
                      <Lock className="w-7 h-7" style={{ color: "#D97706" }} />
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-text)" }}>Limite atteinte</h3>
                    <p className="text-sm mb-6 max-w-sm mx-auto" style={{ color: "var(--color-text-secondary)" }}>
                      Vous avez consulté {quota?.used} déménageur{(quota?.used ?? 0) > 1 ? "s" : ""} sur {quota?.max} autorisés. Revenez dans 30 jours ou obtenez vos devis dès maintenant.
                    </p>
                    <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: "var(--color-accent)", color: "white" }}>
                      Obtenir mes devis gratuits <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                )}

                {/* Erreur */}
                {!isLoadingScore && scoreError && !quotaExceeded && (
                  <div className="text-center py-12 px-8">
                    <AlertCircle className="w-10 h-10 mx-auto mb-3" style={{ color: "#DC2626" }} />
                    <p className="font-semibold mb-1" style={{ color: "var(--color-text)" }}>Erreur</p>
                    <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>{scoreError}</p>
                    <button onClick={handleReset} className="text-sm underline" style={{ color: "var(--color-accent)" }}>Réessayer</button>
                  </div>
                )}

                {/* Score complet */}
                {!isLoadingScore && scoringResult && !quotaExceeded && (
                  <>
                    {/* ① Hero : score global */}
                    <div className="flex items-center gap-5 p-6 pb-5" style={{ borderBottom: "1px solid var(--color-border)" }}>
                      <ScoreRing score={scoringResult.globalScore} size={80} />
                      <div>
                        <div className="text-xl font-extrabold" style={{ color: scoringResult.globalColor }}>
                          {scoringResult.globalLabel ?? "—"}
                        </div>
                        <div className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                          Score Moverz global{scoringResult.globalScore != null ? ` — ${scoringResult.globalScore}/100` : ""}
                        </div>
                        {scoringResult.computedAt && (
                          <div className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                            Analysé le {new Date(scoringResult.computedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="divide-y" style={{ borderColor: "var(--color-border)" }}>

                      {/* ② Analyse par dimension */}
                      {scoringResult.dimensions.length > 0 && (
                        <div className="px-6 py-5">
                          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--color-text-muted)" }}>📊 Analyse par dimension</p>
                          <div className="space-y-4">
                            {scoringResult.dimensions.map((dim) => <DimensionBar key={dim.id} dimension={dim} />)}
                          </div>
                        </div>
                      )}

                      {/* ③ Signaux d'alerte (vigilance par catégorie) */}
                      {scoringResult.vigilanceCategories && scoringResult.vigilanceCategories.length > 0 && (() => {
                        const totalReviews = scoringResult.reputation?.totalCollected
                          ?? scoringResult.reputation?.authenticCount
                          ?? scoringResult._meta?.googleReviewsCount
                          ?? "—";
                        return (
                          <div className="px-6 py-5">
                            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "var(--color-text-muted)" }}>🔍 Analyse des signaux d&apos;alerte</p>
                            <p className="text-xs mb-4" style={{ color: "var(--color-text-muted)" }}>
                              Basée sur l&apos;analyse IA de {totalReviews} avis clients des 12 derniers mois
                            </p>
                            <div className="space-y-2">
                              {scoringResult.vigilanceCategories.map((cat) => {
                                const catColor = vigilanceColor(cat.status);
                                const catIcon = vigilanceIcon(cat.status);
                                return (
                                  <div key={cat.id} className="rounded-lg overflow-hidden" style={{ border: `1px solid ${catColor}22` }}>
                                    <div className="flex items-center gap-3 px-4 py-3">
                                      <span className="text-base shrink-0">{catIcon}</span>
                                      <span className="flex-1 text-sm font-semibold" style={{ color: "var(--color-text)" }}>{cat.label}</span>
                                      <span className="text-xs" style={{ color: catColor }}>
                                        {cat.reviewCount === 0
                                          ? `Aucune mention sur ${totalReviews} avis analysés`
                                          : `${cat.reviewCount} mention${cat.reviewCount > 1 ? "s" : ""} sur ${totalReviews} avis`}
                                      </span>
                                      <span className="text-xs font-bold w-14 text-right tabular-nums shrink-0" style={{ color: catColor }}>
                                        {cat.score ?? "—"}/100
                                      </span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })()}

                      {/* ④ Réputation & avis clients */}
                      {(scoringResult._meta?.googleRating != null || scoringResult.reputation || scoringResult._meta?.googleReviewsAISummary) && (
                        <div className="px-6 py-5">
                          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--color-text-muted)" }}>⭐ Réputation &amp; avis clients</p>
                          {(scoringResult.reputation?.totalCollected != null || scoringResult.reputation?.authenticCount != null) && (() => {
                            const rep = scoringResult.reputation!;
                            const authentic = rep.authenticCount;
                            const suspicious = rep.suspiciousCount;
                            const collected = rep.totalCollected ?? (authentic + suspicious);
                            return (
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                                {[
                                  { val: collected, lbl: "avis collectés (12 mois)", color: undefined },
                                  { val: authentic, lbl: "authentiques", color: "#16A34A" },
                                  ...(suspicious > 0 ? [{ val: suspicious, lbl: "suspects (filtrés)", color: "#D97706" }] : []),
                                  ...(scoringResult._meta?.googleRating != null ? [{ val: `${scoringResult._meta.googleRating.toFixed(1)}/5`, lbl: "note moyenne", color: "#F59E0B" }] : []),
                                ].map(({ val, lbl, color }) => (
                                  <div key={lbl} className="flex flex-col items-center py-3 px-2 rounded-xl text-center" style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
                                    <span className="text-xl font-extrabold tabular-nums" style={{ color: color ?? "var(--color-text)" }}>{val}</span>
                                    <span className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>{lbl}</span>
                                  </div>
                                ))}
                              </div>
                            );
                          })()}
                          {scoringResult._meta?.googleReviewsAISummary && (
                            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                              {scoringResult._meta.googleReviewsAISummary}
                            </p>
                          )}
                        </div>
                      )}

                      {/* ⑤ Fiabilité légale */}
                      {(scoringResult.subscores || scoringResult._meta?.pappersDecisions !== undefined) && (
                        <div className="px-6 py-5">
                          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--color-text-muted)" }}>⚖️ Fiabilité légale</p>

                          {/* Santé financière */}
                          <div className="mb-5">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>Santé financière</span>
                              {scoringResult.subscores?.financier && (
                                <span className="text-sm font-bold" style={{ color: scoreColor(scoringResult.subscores.financier.score) }}>
                                  {scoringResult.subscores.financier.label}
                                  {scoringResult.subscores.financier.score != null && ` (${scoringResult.subscores.financier.score}/100)`}
                                </span>
                              )}
                            </div>
                            {/* Chiffres bruts */}
                            {[
                              { lbl: "Résultat net", val: scoringResult._meta?.finResultat, pos: (v: number) => v >= 0 },
                              { lbl: "Fonds propres", val: scoringResult._meta?.finFondsPropres, pos: (v: number) => v >= 0 },
                              { lbl: "Trésorerie", val: scoringResult._meta?.finTresorerie, pos: (v: number) => v >= 0 },
                              { lbl: "Dettes financières", val: scoringResult._meta?.finDettes, pos: (v: number) => v <= 100000 },
                            ].filter(r => r.val != null).length > 0 && (
                              <div className="grid grid-cols-2 gap-2 mb-2">
                                {[
                                  { lbl: "Résultat net", val: scoringResult._meta?.finResultat, pos: (v: number) => v >= 0 },
                                  { lbl: "Fonds propres", val: scoringResult._meta?.finFondsPropres, pos: (v: number) => v >= 0 },
                                  { lbl: "Trésorerie", val: scoringResult._meta?.finTresorerie, pos: (v: number) => v >= 0 },
                                  { lbl: "Dettes financières", val: scoringResult._meta?.finDettes, pos: (v: number) => v <= 100000 },
                                ].filter(r => r.val != null).map(({ lbl, val, pos }) => {
                                  const n = val as number;
                                  const color = pos(n) ? "#16A34A" : "#DC2626";
                                  const abs = Math.abs(n);
                                  const fmt = abs >= 1_000_000 ? `${n < 0 ? "−" : ""}${(abs / 1_000_000).toFixed(1)} M€`
                                    : abs >= 1000 ? `${n < 0 ? "−" : ""}${Math.round(abs / 1000)} k€`
                                    : `${n} €`;
                                  return (
                                    <div key={lbl} className="flex justify-between items-center px-3 py-2 rounded-lg" style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
                                      <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>{lbl}</span>
                                      <span className="text-xs font-bold tabular-nums" style={{ color }}>{fmt}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                            {/* Explications financières */}
                            {scoringResult._meta?.finExplanations && scoringResult._meta.finExplanations.length > 0 && (
                              <ul className="text-xs space-y-1" style={{ color: "var(--color-text-muted)" }}>
                                {scoringResult._meta.finExplanations.map((e, i) => (
                                  <li key={i} className="flex items-start gap-1"><span>·</span><span>{e}</span></li>
                                ))}
                              </ul>
                            )}
                            {scoringResult._meta?.finResultat == null && !scoringResult._meta?.finExplanations?.length && (
                              <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>Données financières non disponibles (entreprise confidentielle ou données Pappers absentes).</p>
                            )}
                          </div>

                          {/* Décisions de justice */}
                          <div className="pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                                Décisions de justice{(scoringResult._meta?.pappersDecisions ?? 0) > 0 ? ` (${scoringResult._meta!.pappersDecisions})` : ""}
                              </span>
                              {scoringResult._meta?.pappersDecisions === 0 ? (
                                <span className="text-xs font-semibold flex items-center gap-1" style={{ color: "#16A34A" }}>
                                  <CheckCircle2 className="w-3.5 h-3.5" />Aucune procédure
                                </span>
                              ) : (
                                <span className="text-xs font-bold" style={{ color: "#DC2626" }}>
                                  {scoringResult._meta?.pappersDecisions} décision{(scoringResult._meta?.pappersDecisions ?? 0) > 1 ? "s" : ""}
                                </span>
                              )}
                            </div>

                            {/* Liste des décisions */}
                            {scoringResult._meta?.pappersDecisionsList && scoringResult._meta.pappersDecisionsList.length > 0 && (
                              <div className="space-y-2 mb-2">
                                {scoringResult._meta.pappersDecisionsList.map((d, i) => (
                                  <div key={i} className="px-3 py-2 rounded-lg text-xs" style={{ background: d.isAttacking ? "rgba(22,163,74,0.05)" : "rgba(220,38,38,0.05)", border: `1px solid ${d.isAttacking ? "#16a34a33" : "#dc262633"}` }}>
                                    <div className="flex items-center justify-between gap-2 flex-wrap">
                                      <span className="font-semibold" style={{ color: "var(--color-text)" }}>
                                        {d.juridiction ?? "Juridiction inconnue"}{d.year ? ` — ${d.year}` : ""}
                                      </span>
                                      <span className="font-bold" style={{ color: d.isAttacking ? "#16A34A" : "#DC2626" }}>
                                        {d.isAttacking ? "Demandeur (aucune pénalité)" : "Défendeur"}
                                      </span>
                                    </div>
                                    {d.dispositif && (
                                      <p className="mt-1" style={{ color: "var(--color-text-secondary)" }}>{d.dispositif}</p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Explications de la note juridique */}
                            {scoringResult._meta?.juriExplanations && scoringResult._meta.juriExplanations.length > 0 && (
                              <ul className="text-xs space-y-1" style={{ color: "var(--color-text-muted)" }}>
                                {scoringResult._meta.juriExplanations.map((e, i) => (
                                  <li key={i} className="flex items-start gap-1"><span>·</span><span>{e}</span></li>
                                ))}
                              </ul>
                            )}
                          </div>

                          {/* Ancienneté + SIRET */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                            {scoringResult._meta?.companyFoundedYear && (
                              <div className="flex justify-between items-center p-3 rounded-xl" style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
                                <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>Ancienneté</span>
                                <span className="text-sm font-bold" style={{ color: "var(--color-text)" }}>depuis {scoringResult._meta.companyFoundedYear}</span>
                              </div>
                            )}
                            {scoringResult._meta?.siret && (
                              <div className="flex justify-between items-center p-3 rounded-xl" style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}>
                                <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>SIRET</span>
                                <span className="text-xs font-mono font-bold" style={{ color: "var(--color-text)" }}>{scoringResult._meta.siret}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* ⑥ Quota + CTA */}
                      <div className="px-6 py-5">
                        {quota && (
                          <div className="flex items-center justify-between text-xs mb-4 px-1" style={{ color: "var(--color-text-muted)" }}>
                            <span className="flex items-center gap-1">
                              <BarChart3 className="w-3 h-3" />
                              {quota.remaining} vérification{quota.remaining > 1 ? "s" : ""} restante{quota.remaining > 1 ? "s" : ""}
                            </span>
                            <span>gratuit · sans inscription</span>
                          </div>
                        )}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a href="/" className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm"
                            style={{ background: "var(--color-accent)", color: "white" }}>
                            Obtenir mes devis <ChevronRight className="w-4 h-4" />
                          </a>
                          {quota && quota.remaining > 0 && (
                            <button onClick={handleReset}
                              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm"
                              style={{ border: "1px solid var(--color-border)", color: "var(--color-text)" }}>
                              Vérifier un autre déménageur
                            </button>
                          )}
                        </div>
                      </div>

                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function interpretScore(score: number | null): string {
  if (score == null) return "Le scoring n'a pas encore été calculé pour ce déménageur.";
  if (score >= 85) return "Excellent profil. Aucun signal d'alerte détecté — déménageur hautement fiable.";
  if (score >= 70) return "Bon profil global. Les principaux critères sont satisfaits.";
  if (score >= 50) return "Profil correct. Quelques points méritent attention — regardez les dimensions ci-dessus.";
  if (score >= 30) return "Signaux d'alerte détectés. Prudence recommandée avant de signer un contrat.";
  return "Risques importants identifiés. Nous vous déconseillons ce déménageur.";
}
