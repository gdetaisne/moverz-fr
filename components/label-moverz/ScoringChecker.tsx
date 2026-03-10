"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Building2,
  MapPin,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Shield,
  BarChart3,
  Lock,
  Star,
  ExternalLink,
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
}

interface ScoringDimension {
  id: string;
  label: string;
  weight: number;
  score: number | null;
}

interface ScoringResult {
  moverId: string;
  globalScore: number | null;
  globalLabel: string | null;
  globalColor: string;
  computedAt: string | null;
  dimensions: ScoringDimension[];
  _quota: { used: number; max: number; remaining: number };
}

type Step = "search" | "place-select" | "result";

// ─── Helpers ────────────────────────────────────────────────────

function scoreColor(score: number | null): string {
  if (score == null) return "#9CA3AF";
  if (score >= 85) return "#16A34A";
  if (score >= 70) return "#16A34A";
  if (score >= 50) return "#D97706";
  if (score >= 30) return "#EA580C";
  return "#DC2626";
}

function ScoreRing({ score, size = 100 }: { score: number | null; size?: number }) {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = score != null ? (score / 100) * circumference : 0;
  const color = scoreColor(score);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-border-light)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-extrabold tabular-nums" style={{ color }}>
          {score ?? "—"}
        </span>
        <span className="text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>
          /100
        </span>
      </div>
    </div>
  );
}

function DimensionBar({ dimension }: { dimension: ScoringDimension }) {
  const color = scoreColor(dimension.score);
  const pct = dimension.score ?? 0;
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm w-40 shrink-0" style={{ color: "var(--color-text-secondary)" }}>
        {dimension.label}
      </span>
      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "var(--color-border-light)" }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <span className="text-sm font-bold w-8 text-right tabular-nums" style={{ color }}>
        {dimension.score ?? "—"}
      </span>
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

  // ── Recherche déménageur ──────────────────────────────────────

  const handleSearch = useCallback(async (value: string) => {
    setQuery(value);
    setSearchError(null);

    if (searchTimeout.current) clearTimeout(searchTimeout.current);

    if (value.length < 2) {
      setSearchResults([]);
      return;
    }

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

  // ── Sélection d'un déménageur ─────────────────────────────────

  const handleSelectMover = useCallback(async (mover: MoverResult) => {
    setSelectedMover(mover);
    setSearchResults([]);

    if (mover.isPrioritaire) {
      // Place ID déjà connu → on lance directement le scoring
      await launchScoring(mover.id);
    } else {
      // On récupère les candidats Google Places
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

  // ── Lancement du scoring ──────────────────────────────────────

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

  // ── Rendu ────────────────────────────────────────────────────

  return (
    <section className="section section-light">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(14,165,166,0.1)", color: "var(--color-accent)" }}
          >
            <Shield className="w-4 h-4" />
            Vérifier un déménageur
          </div>
          <h2
            className="font-heading text-3xl md:text-4xl font-bold mb-3"
            style={{ color: "var(--color-text)" }}
          >
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
            <motion.div
              key="search"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              <div
                className="relative"
                style={{
                  background: "white",
                  border: "1px solid var(--color-border)",
                  borderRadius: 16,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                }}
              >
                {/* Champ de recherche */}
                <div className="flex items-center gap-3 p-4">
                  {isSearching ? (
                    <Loader2 className="w-5 h-5 shrink-0 animate-spin" style={{ color: "var(--color-accent)" }} />
                  ) : (
                    <Search className="w-5 h-5 shrink-0" style={{ color: "var(--color-text-muted)" }} />
                  )}
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Nom du déménageur ou SIRET (14 chiffres)…"
                    className="flex-1 text-base outline-none bg-transparent"
                    style={{ color: "var(--color-text)" }}
                    autoFocus
                  />
                </div>

                {/* Résultats */}
                {searchResults.length > 0 && (
                  <div style={{ borderTop: "1px solid var(--color-border)" }}>
                    {searchResults.map((mover) => (
                      <button
                        key={mover.id}
                        onClick={() => handleSelectMover(mover)}
                        className="w-full flex items-center gap-4 p-4 text-left transition-colors hover:bg-gray-50 last:rounded-b-2xl"
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: "rgba(14,165,166,0.08)" }}
                        >
                          <Building2 className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold truncate" style={{ color: "var(--color-text)" }}>
                            {mover.companyName}
                          </div>
                          <div className="flex items-center gap-1 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                            <MapPin className="w-3 h-3" />
                            {mover.city} ({mover.postalCode})
                            {mover.siret && (
                              <span className="ml-2 text-xs" style={{ color: "var(--color-text-muted)" }}>
                                SIRET {mover.siret}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          {mover.hasScore && mover.globalScore != null && (
                            <span
                              className="text-sm font-bold px-2 py-1 rounded"
                              style={{
                                background: `${scoreColor(mover.globalScore)}15`,
                                color: scoreColor(mover.globalScore),
                              }}
                            >
                              {mover.globalScore}/100
                            </span>
                          )}
                          <ChevronRight className="w-4 h-4" style={{ color: "var(--color-text-muted)" }} />
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Aucun résultat */}
                {query.length >= 2 && !isSearching && searchResults.length === 0 && !searchError && (
                  <div
                    className="p-6 text-center text-sm"
                    style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-text-secondary)" }}
                  >
                    Aucun déménageur trouvé pour &laquo; {query} &raquo;.
                    <br />
                    <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      Essayez avec le SIRET (14 chiffres) si vous le connaissez.
                    </span>
                  </div>
                )}

                {/* Erreur */}
                {searchError && (
                  <div
                    className="p-4 flex items-center gap-2 text-sm"
                    style={{ borderTop: "1px solid var(--color-border)", color: "#DC2626" }}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {searchError}
                  </div>
                )}
              </div>

              {/* Note sécurité */}
              <div
                className="mt-4 flex items-center gap-2 text-xs px-2"
                style={{ color: "var(--color-text-muted)" }}
              >
                <Lock className="w-3 h-3 shrink-0" />
                Vous pouvez consulter jusqu&apos;à 3 déménageurs gratuitement. Aucune donnée personnelle collectée.
              </div>
            </motion.div>
          )}

          {/* ── Étape 2 : Sélection fiche Google ── */}
          {step === "place-select" && (
            <motion.div
              key="place-select"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "white",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                }}
              >
                {isLoadingPlace ? (
                  <div className="flex flex-col items-center gap-4 py-8">
                    <Loader2 className="w-8 h-8 animate-spin" style={{ color: "var(--color-accent)" }} />
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                      Recherche de la fiche Google…
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <p className="font-semibold mb-1" style={{ color: "var(--color-text)" }}>
                        Sélectionnez la bonne fiche Google
                      </p>
                      <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                        Nous avons trouvé plusieurs fiches pour &laquo; {selectedMover?.companyName} &raquo;.
                        Choisissez celle qui correspond.
                      </p>
                    </div>

                    {placeCandidates.length === 0 ? (
                      <div
                        className="p-4 rounded-lg text-sm text-center"
                        style={{ background: "var(--color-bg)", color: "var(--color-text-secondary)" }}
                      >
                        Aucune fiche Google trouvée. Le scoring sera calculé sans données d&apos;avis.
                        <button
                          onClick={() => launchScoring(selectedMover!.id)}
                          className="mt-3 block mx-auto px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                          style={{
                            background: "var(--color-accent)",
                            color: "white",
                          }}
                        >
                          Lancer le scoring quand même
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {placeCandidates.map((candidate) => (
                          <button
                            key={candidate.googlePlaceId}
                            onClick={() => launchScoring(selectedMover!.id)}
                            className="w-full flex items-start gap-4 p-4 rounded-xl text-left transition-colors hover:bg-gray-50"
                            style={{ border: "1px solid var(--color-border)" }}
                          >
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                              style={{ background: "rgba(14,165,166,0.08)" }}
                            >
                              <ExternalLink className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold truncate" style={{ color: "var(--color-text)" }}>
                                {candidate.name}
                              </div>
                              <div className="text-sm truncate" style={{ color: "var(--color-text-secondary)" }}>
                                {candidate.address}
                              </div>
                              {candidate.rating != null && (
                                <div className="flex items-center gap-1 mt-1">
                                  <Star className="w-3 h-3" style={{ color: "#F59E0B" }} />
                                  <span className="text-xs font-medium" style={{ color: "var(--color-text)" }}>
                                    {candidate.rating.toFixed(1)}
                                  </span>
                                  <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                                    ({candidate.reviewCount} avis)
                                  </span>
                                </div>
                              )}
                            </div>
                            <ChevronRight className="w-4 h-4 shrink-0 mt-1" style={{ color: "var(--color-text-muted)" }} />
                          </button>
                        ))}
                      </div>
                    )}

                    <button
                      onClick={handleReset}
                      className="mt-4 text-sm underline"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      ← Retour à la recherche
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {/* ── Étape 3 : Résultat ── */}
          {step === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              <div
                className="p-6 md:p-8 rounded-2xl"
                style={{
                  background: "white",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                }}
              >
                {/* Chargement */}
                {isLoadingScore && (
                  <div className="flex flex-col items-center gap-4 py-12">
                    <Loader2 className="w-10 h-10 animate-spin" style={{ color: "var(--color-accent)" }} />
                    <div className="text-center">
                      <p className="font-semibold" style={{ color: "var(--color-text)" }}>
                        Analyse en cours…
                      </p>
                      <p className="text-sm mt-1" style={{ color: "var(--color-text-secondary)" }}>
                        Nous interrogeons nos sources de données.
                      </p>
                    </div>
                  </div>
                )}

                {/* Quota dépassé */}
                {!isLoadingScore && quotaExceeded && (
                  <div className="text-center py-8">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: "#FEF3C7" }}
                    >
                      <Lock className="w-7 h-7" style={{ color: "#D97706" }} />
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-text)" }}>
                      Limite atteinte
                    </h3>
                    <p className="text-sm mb-6 max-w-sm mx-auto" style={{ color: "var(--color-text-secondary)" }}>
                      Vous avez consulté {quota?.used} déménageur{(quota?.used ?? 0) > 1 ? "s" : ""} sur {quota?.max} autorisés.
                      Revenez dans 30 jours ou obtenez vos devis dès maintenant.
                    </p>
                    <a
                      href="/"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
                      style={{ background: "var(--color-accent)", color: "white" }}
                    >
                      Obtenir mes devis gratuits
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                )}

                {/* Erreur */}
                {!isLoadingScore && scoreError && !quotaExceeded && (
                  <div className="text-center py-8">
                    <AlertCircle className="w-10 h-10 mx-auto mb-3" style={{ color: "#DC2626" }} />
                    <p className="font-semibold mb-1" style={{ color: "var(--color-text)" }}>
                      Erreur
                    </p>
                    <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>
                      {scoreError}
                    </p>
                    <button onClick={handleReset} className="text-sm underline" style={{ color: "var(--color-accent)" }}>
                      Réessayer
                    </button>
                  </div>
                )}

                {/* Score */}
                {!isLoadingScore && scoringResult && !quotaExceeded && (
                  <>
                    {/* En-tête résultat */}
                    <div className="flex items-center gap-2 mb-6 pb-6" style={{ borderBottom: "1px solid var(--color-border)" }}>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(14,165,166,0.1)" }}
                      >
                        <Shield className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
                      </div>
                      <div>
                        <div className="font-semibold" style={{ color: "var(--color-text)" }}>
                          {selectedMover?.companyName}
                        </div>
                        {selectedMover && (
                          <div className="text-sm flex items-center gap-1" style={{ color: "var(--color-text-secondary)" }}>
                            <MapPin className="w-3 h-3" />
                            {selectedMover.city}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Score global + dimensions */}
                    <div className="flex flex-col sm:flex-row items-center gap-8 mb-8">
                      <div className="flex flex-col items-center gap-2 shrink-0">
                        <ScoreRing score={scoringResult.globalScore} size={110} />
                        <span
                          className="text-sm font-bold px-3 py-1 rounded-full"
                          style={{
                            background: `${scoringResult.globalColor}15`,
                            color: scoringResult.globalColor,
                          }}
                        >
                          {scoringResult.globalLabel ?? "—"}
                        </span>
                        {scoringResult.computedAt && (
                          <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                            Analysé le{" "}
                            {new Date(scoringResult.computedAt).toLocaleDateString("fr-FR", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                        )}
                      </div>

                      {scoringResult.dimensions.length > 0 && (
                        <div className="flex-1 w-full space-y-4">
                          {scoringResult.dimensions.map((dim) => (
                            <DimensionBar key={dim.id} dimension={dim} />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Interprétation */}
                    <div
                      className="p-4 rounded-xl mb-6"
                      style={{ background: `${scoringResult.globalColor}08`, border: `1px solid ${scoringResult.globalColor}20` }}
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: scoringResult.globalColor }} />
                        <p className="text-sm" style={{ color: "var(--color-text)" }}>
                          {interpretScore(scoringResult.globalScore)}
                        </p>
                      </div>
                    </div>

                    {/* Quota restant */}
                    {quota && (
                      <div
                        className="flex items-center justify-between text-xs px-1 mb-6"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        <span className="flex items-center gap-1">
                          <BarChart3 className="w-3 h-3" />
                          {quota.remaining} vérification{quota.remaining > 1 ? "s" : ""} restante{quota.remaining > 1 ? "s" : ""}
                        </span>
                        <span>gratuit · sans inscription</span>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="/"
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
                        style={{ background: "var(--color-accent)", color: "white" }}
                      >
                        Obtenir mes devis
                        <ChevronRight className="w-4 h-4" />
                      </a>
                      {quota && quota.remaining > 0 && (
                        <button
                          onClick={handleReset}
                          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
                          style={{
                            border: "1px solid var(--color-border)",
                            color: "var(--color-text)",
                          }}
                        >
                          Vérifier un autre déménageur
                        </button>
                      )}
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
