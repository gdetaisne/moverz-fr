"use client";
import { buildTunnelUrl } from "@/lib/tunnel-url";

/**
 * V4 TUNNEL FIRST — Hero avec Step 2 estimation intégré
 * Progress bar : 0% → 8% → 17% → 25% (Step 1)
 * Après estimation : affiche prix + "Affiner mon budget" → devis.moverz.fr (Step 3)
 * BACKOFFICE SAFE : même API estimate, même redirect
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/motion";
import { ArrowRight, CheckCircle2, Shield, Clock, Ban, Star, Calculator } from "lucide-react";
import { trackEvent } from "@/lib/tracking";

/* ------------------------------------------------------------------ */
/*  Types & Helpers                                                   */
/* ------------------------------------------------------------------ */

type CitySuggestion = {
  label: string;
  city: string;
  postcode: string;
};

type Estimate = {
  min: number;
  max: number;
};

/** Appel api-adresse.data.gouv.fr (municipalités uniquement) */
async function fetchCities(q: string): Promise<CitySuggestion[]> {
  if (q.length < 3) return [];
  try {
    const params = new URLSearchParams({ q, limit: "5" });
    const res = await fetch(`/api/cities?${params}`);
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? (data as CitySuggestion[]) : [];
  } catch {
    return [];
  }
}

/** Appel API estimate du tunnel devis (même endpoint que HeroBudgetCard) avec timeout 5s */
async function fetchEstimate(
  originPostalCode: string,
  destinationPostalCode: string,
  surface: number,
): Promise<Estimate | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout
    
    const params = new URLSearchParams({
      originPostalCode,
      destinationPostalCode,
      surface: String(surface),
    });
    const res = await fetch(`https://devis.moverz.fr/api/estimate?${params}`, {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!res.ok) return null;
    const data = await res.json();
    const min = typeof data.prixMin === "number" ? data.prixMin : Number(data.prixMin);
    const max = typeof data.prixMax === "number" ? data.prixMax : Number(data.prixMax);
    if (isNaN(min) || isNaN(max)) return null;
    return { min, max };
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.error('API estimate timeout after 5s');
    }
    return null;
  }
}

/** Construit le deep-link vers le tunnel devis (Step 3) */
function buildDevisLink(
  originPostalCode: string,
  originCity: string,
  destinationPostalCode: string,
  destinationCity: string,
  surfaceM2: number,
): string {
  const p = new URLSearchParams({
    step: "3",
    from: "https://moverz.fr",
    originPostalCode,
    originCity,
    destinationPostalCode,
    destinationCity,
    surfaceM2: String(surfaceM2),
    source: "homepage-hero",
  });
  return buildTunnelUrl({ from: "homepage-hero", extra: Object.fromEntries(p) });
}

/* ------------------------------------------------------------------ */
/*  Autocomplete sub-component                                        */
/* ------------------------------------------------------------------ */
function CityAutocomplete({
  label,
  placeholder,
  value,
  onSelect,
  onClear,
  onTypingStart,
}: {
  label: string;
  placeholder: string;
  value: CitySuggestion | null;
  onSelect: (s: CitySuggestion) => void;
  onClear: () => void;
  onTypingStart?: () => void;
}) {
  const [query, setQuery] = useState(value?.label ?? "");
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const requestIdRef = useRef(0);
  const cacheRef = useRef<Map<string, CitySuggestion[]>>(new Map());

  const unrecognized = !focused && query.length >= 2 && !value;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const onChange = useCallback(
    (q: string) => {
      setQuery(q);
      setOpen(true);
      if (q.trim().length > 0) onTypingStart?.();
      onClear();
      clearTimeout(timer.current);
      timer.current = setTimeout(async () => {
        const normalized = q.trim().toLowerCase();
        if (normalized.length < 3) {
          setSuggestions([]);
          setLoadingSuggestions(false);
          return;
        }

        const cached = cacheRef.current.get(normalized);
        if (cached) {
          setSuggestions(cached);
          setLoadingSuggestions(false);
          return;
        }

        setLoadingSuggestions(true);
        const requestId = ++requestIdRef.current;
        const results = await fetchCities(q);
        if (requestId !== requestIdRef.current) return;

        cacheRef.current.set(normalized, results);
        setSuggestions(results);
        setLoadingSuggestions(false);
      }, 250);
    },
    [onClear, onTypingStart],
  );

  const pick = (s: CitySuggestion) => {
    setQuery(s.label);
    onSelect(s);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <label
        className="block text-[13px] font-medium mb-1.5"
        style={{ color: "var(--color-text)" }}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => {
            setFocused(true);
            if (query.trim().length >= 3) setOpen(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          placeholder={placeholder}
          className="w-full rounded-[var(--radius-sm)] border px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-[var(--color-text-muted)]"
          style={{
            borderColor: unrecognized
              ? "var(--color-danger)"
              : value
                ? "var(--color-accent)"
                : "var(--color-border)",
            color: "var(--color-text)",
            background: "var(--color-surface)",
            paddingRight: value ? "2.5rem" : "0.875rem",
          }}
        />
        {value && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <CheckCircle2 className="h-4 w-4" style={{ color: "var(--color-accent)" }} />
          </motion.div>
        )}
      </div>
      {unrecognized && (
        <p className="mt-1 text-xs" style={{ color: "var(--color-danger)" }}>
          Sélectionnez une ville dans la liste
        </p>
      )}
      {!value && focused && query.trim().length > 0 && query.trim().length < 3 && (
        <p className="mt-1 text-xs" style={{ color: "var(--color-text-muted)" }}>
          Tapez au moins 3 lettres
        </p>
      )}
      {loadingSuggestions && (
        <p className="mt-1 text-xs" style={{ color: "var(--color-text-muted)" }}>
          Recherche en cours...
        </p>
      )}
      {open && suggestions.length > 0 && (
        <ul className="absolute z-50 mt-2 w-full rounded-[var(--radius-sm)] border overflow-hidden shadow-lg max-h-48 overflow-y-auto" style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}>
          {suggestions.map((s, i) => (
            <li
              key={`${s.postcode}-${i}`}
              onMouseDown={(e) => { e.preventDefault(); pick(s); }}
              className="cursor-pointer px-3.5 py-2.5 text-sm hover:bg-[rgba(14,165,166,0.05)] transition-colors"
              style={{ color: "var(--color-text)" }}
            >
              {s.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Hero Component                                               */
/* ------------------------------------------------------------------ */
export function HeroV4() {
  const [origin, setOrigin] = useState<CitySuggestion | null>(null);
  const [destination, setDestination] = useState<CitySuggestion | null>(null);
  const [surface, setSurface] = useState<string>("");
  const [estimate, setEstimate] = useState<Estimate | null>(null);
  const [loading, setLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [socialProofCount, setSocialProofCount] = useState(8);
  const hasTrackedTypingStart = useRef(false);

  // Progress : 0% → 8% → 17% → 25%
  let progress = 0;
  if (origin) progress += 8;
  if (destination) progress += 9;
  if (surface && Number(surface) > 0) progress += 8;

  const allFieldsFilled = origin && destination && Number(surface) > 0;

  const handleEstimate = async () => {
    if (!origin || !destination || !surface) return;
    trackEvent("lead_clic_home_step2", {
      origin: origin.city,
      destination: destination.city,
      surface: Number(surface),
    });
    setLoading(true);
    setError(null);
    const result = await fetchEstimate(origin.postcode, destination.postcode, Number(surface));
    setLoading(false);
    if (result) {
      setEstimate(result);
    } else {
      setError("Estimation indisponible. Vous pouvez affiner directement dans le comparateur.");
    }
  };

  const handleRedirect = () => {
    if (!origin || !destination || !surface) return;
    trackEvent("Lead_clic_home", {
      origin: origin.city,
      destination: destination.city,
      surface: Number(surface),
      estimateMin: estimate?.min,
      estimateMax: estimate?.max,
    });
    setRedirecting(true);
    setError(null);
    
    // Toast de reassurance
    const toastEl = document.createElement('div');
    toastEl.className = 'fixed top-4 left-1/2 -translate-x-1/2 z-[9999] px-6 py-3 rounded-lg shadow-xl border animate-in slide-in-from-top duration-300';
    toastEl.style.cssText = 'background: var(--color-surface); border-color: var(--color-accent); box-shadow: 0 8px 24px rgba(14,165,166,0.2);';
    toastEl.innerHTML = `
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5" style="color: var(--color-accent)" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-sm font-semibold" style="color: var(--color-text)">Vos informations sont sauvegardées</span>
      </div>
      <p class="text-xs mt-1" style="color: var(--color-text-secondary)">Vous allez être redirigé vers l'étape suivante...</p>
    `;
    document.body.appendChild(toastEl);
    
    setTimeout(() => {
      try {
        const url = buildDevisLink(
          origin.postcode,
          origin.city,
          destination.postcode,
          destination.city,
          Number(surface),
        );
        window.location.assign(url);
      } catch {
        setRedirecting(false);
        setError("Redirection indisponible. Réessayez.");
        document.body.removeChild(toastEl);
      }
    }, 1500);
  };

  // Reset estimate/errors when inputs change
  useEffect(() => {
    setEstimate(null);
    setError(null);
  }, [origin, destination, surface]);

  // Keep hydration deterministic, then randomize after mount for social-proof micro-copy.
  useEffect(() => {
    setSocialProofCount(Math.floor(Math.random() * 5) + 6);
  }, []);
  
  // Funnel tracking détaillé
  useEffect(() => {
    if (origin) {
      trackEvent('hero_field_origin_filled', { city: origin.city, postcode: origin.postcode });
    }
  }, [origin]);
  
  useEffect(() => {
    if (destination) {
      trackEvent('hero_field_destination_filled', { city: destination.city, postcode: destination.postcode });
    }
  }, [destination]);
  
  useEffect(() => {
    if (surface && Number(surface) > 0) {
      trackEvent('hero_field_surface_filled', { surface: Number(surface) });
    }
  }, [surface]);
  
  useEffect(() => {
    if (estimate) {
      trackEvent('hero_estimate_shown', {
        min: estimate.min,
        max: estimate.max,
        origin: origin?.city,
        destination: destination?.city,
        surface: Number(surface)
      });
    }
  }, [estimate, origin, destination, surface]);

  return (
    <section className="relative pt-5 pb-8 md:pt-20 md:pb-28" style={{ background: "var(--color-bg)" }}>
      {/* Glow subtil */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full blur-[120px] opacity-30"
        style={{ background: "radial-gradient(circle, rgba(14,165,166,0.2), transparent 70%)" }}
      />

      <div className="container relative">
        {/* Mobile: titre compact au-dessus du form */}
        <div className="md:hidden mb-4">
          <h1
            className="font-heading text-[28px] leading-[1.08] font-bold tracking-[-0.025em]"
            style={{ color: "var(--color-text)" }}
          >
            Vous déménagez.{" "}
            <span style={{ color: "var(--color-accent)" }}>On compare.</span>
          </h1>
          <p
            className="text-[15px] mt-2 leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Jusqu'à 5 devis comparables · 3 min · 100% gratuit
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16 items-start">
          {/* COLONNE GAUCHE — H1 + 3 garanties (desktop only) */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="hidden md:block space-y-8 order-1">
            <div className="space-y-5">
              <h1
                className="font-heading text-[clamp(36px,6vw,64px)] leading-[1.05] font-bold tracking-[-0.025em]"
                style={{ color: "var(--color-text)" }}
              >
                Vous déménagez.
                <br />
                <span style={{ color: "var(--color-accent)" }}>On compare.</span>
              </h1>
              <p
                className="text-xl max-w-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Jusqu'à 5 devis comparables · Déménageurs vérifiés · 3 min · 100% gratuit
              </p>
              
              {/* Scarcity Badge - Temps réel */}
              <motion.div 
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border"
                style={{
                  borderColor: "rgba(251, 191, 36, 0.3)",
                  background: "rgba(254, 243, 199, 0.5)"
                }}
              >
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </div>
                <span className="text-xs font-medium text-amber-900">
                  <strong>{socialProofCount} personnes</strong> comparent en ce moment
                </span>
              </motion.div>
            </div>

            {/* 3 garanties inline — desktop */}
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                { icon: Shield, text: "Numéro masqué" },
                { icon: Clock, text: "Aucun appel" },
                { icon: Ban, text: "Entreprises vérifiées" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 shrink-0" style={{ color: "var(--color-accent)" }} />
                  <span className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* COLONNE DROITE — Tunnel card (pas d'animation opacity pour garantir visibilité immédiate) */}
          <div className="relative">
            <div
              className="rounded-[var(--radius-md)] border p-5 md:p-8 space-y-4 md:space-y-5 max-w-[520px] mx-auto lg:mx-0"
              style={{
                borderColor: "var(--color-border)",
                background: "var(--color-surface)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
              }}
            >
              {/* ===== STEP 2 : ESTIMATION ===== */}
              {estimate ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key="estimate-result"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <div className="text-center space-y-1">
                      <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--color-accent)" }}>
                        Estimation indicative
                      </p>
                      <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                        {origin!.city} → {destination!.city} · {surface} m²
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>
                        Budget moyen estimé
                      </p>
                      <p className="text-4xl font-bold tabular-nums mt-1" style={{ color: "var(--color-text)" }}>
                        ≈ {Math.round((estimate.min + estimate.max) / 2).toLocaleString("fr-FR")} €
                      </p>
                      <p className="mt-3 text-sm tabular-nums" style={{ color: "var(--color-text-muted)" }}>
                        <span className="font-medium" style={{ color: "#047857" }}>
                          Min {estimate.min.toLocaleString("fr-FR")} €
                        </span>
                        <span className="mx-2">·</span>
                        <span className="font-medium" style={{ color: "#b45309" }}>
                          Max {estimate.max.toLocaleString("fr-FR")} €
                        </span>
                      </p>
                      <p className="text-xs mt-3" style={{ color: "var(--color-text-muted)" }}>
                        Formule standard · Estimation non contractuelle
                      </p>
                    </div>

                    <button
                      type="button"
                      disabled={redirecting}
                      onClick={handleRedirect}
                      className="group w-full inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ background: "var(--color-accent)" }}
                    >
                      {redirecting ? "Redirection…" : "Affiner mon budget"}
                      {!redirecting && (
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setEstimate(null)}
                      className="block w-full text-center text-sm font-medium transition-colors"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      ← Modifier mes infos
                    </button>
                  </motion.div>
                </AnimatePresence>
              ) : (
                <>
                  {/* Progress bar */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span style={{ color: "var(--color-text-muted)" }}>Progression</span>
                      <span style={{ color: "var(--color-accent)" }}>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: "var(--color-border-light)" }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "var(--color-accent)" }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* Form Step 1 */}
                  <form onSubmit={(e) => { e.preventDefault(); handleEstimate(); }} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <CityAutocomplete
                        label="Ville de départ"
                        placeholder="Ex: Paris"
                        value={origin}
                        onSelect={setOrigin}
                        onClear={() => setOrigin(null)}
                        onTypingStart={() => {
                          if (hasTrackedTypingStart.current) return;
                          hasTrackedTypingStart.current = true;
                          trackEvent("lead_clic_home_start");
                        }}
                      />
                      <CityAutocomplete
                        label="Ville d'arrivée"
                        placeholder="Ex: Lyon"
                        value={destination}
                        onSelect={setDestination}
                        onClear={() => setDestination(null)}
                        onTypingStart={() => {
                          if (hasTrackedTypingStart.current) return;
                          hasTrackedTypingStart.current = true;
                          trackEvent("lead_clic_home_start");
                        }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-[14px] md:text-[13px] font-medium mb-1.5"
                        style={{ color: "var(--color-text)" }}
                      >
                        Surface (m²)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          inputMode="numeric"
                          min={1}
                          max={500}
                          value={surface}
                          onChange={(e) => setSurface(e.target.value)}
                          placeholder="Ex: 70"
                          className="w-full rounded-[var(--radius-sm)] border px-3.5 py-3 md:py-2.5 text-sm outline-none transition-all placeholder:text-[var(--color-text-muted)]"
                          style={{
                            borderColor: "var(--color-border)",
                            color: "var(--color-text)",
                            background: "var(--color-surface)",
                            paddingRight: surface && Number(surface) > 0 ? "2.5rem" : "0.875rem",
                            minHeight: "44px"
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                        />
                        {surface && Number(surface) > 0 && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                          >
                            <CheckCircle2 className="h-4 w-4" style={{ color: "var(--color-accent)" }} />
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Helper T2=50m² */}
                      {!surface && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-1.5 text-[11px] md:text-[10px]"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          T2 ≈ 50m² · T3 ≈ 70m² · T4 ≈ 90m²
                        </motion.p>
                      )}
                    </div>

                    {error && (
                      <div className="text-xs rounded-[var(--radius-sm)] px-3 py-2 border" style={{ color: "var(--color-danger)", background: "rgba(220,38,38,0.05)", borderColor: "rgba(220,38,38,0.2)" }}>
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={!allFieldsFilled || loading}
                      className="group w-full inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ background: "var(--color-text)" }}
                    >
                      {loading ? (
                        <span className="inline-flex items-center gap-2">
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Calcul en cours…
                        </span>
                      ) : (
                        <>
                          Voir mon estimation
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs" style={{ color: "var(--color-text-muted)" }}>
                      Gratuit · Sans engagement · 2 minutes
                    </p>
                    
                    {/* Micro-conversion link */}
                    <div className="flex items-center justify-center text-xs pt-2 border-t" style={{ borderColor: "var(--color-border-light)" }}>
                      <a 
                        href="/blog/estimer-volume-demenagement-guide-complet/"
                        className="inline-flex items-center gap-1 font-medium transition-colors hover:underline"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <Calculator className="h-3 w-3" />
                        Pas sûr de votre surface ?
                      </a>
                    </div>
                  </form>
                </>
              )}
              </div>
          </div>

          {/* GARANTIES MOBILE — affichées sous le form */}
          <div className="flex md:hidden flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-2">
            {[
              { icon: Shield, text: "Numéro masqué" },
              { icon: Clock, text: "Aucun appel" },
              { icon: Ban, text: "Entreprises vérifiées" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 shrink-0" style={{ color: "var(--color-accent)" }} />
                <span className="text-xs font-medium" style={{ color: "var(--color-text)" }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
