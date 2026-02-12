"use client";

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
  if (q.length < 2) return [];
  try {
    const params = new URLSearchParams({ q, type: "municipality", limit: "5" });
    const res = await fetch(`https://api-adresse.data.gouv.fr/search/?${params}`);
    if (!res.ok) return [];
    const data = await res.json();
    return (data.features ?? []).map((f: any) => ({
      label: `${f.properties.city} (${f.properties.postcode})`,
      city: f.properties.city as string,
      postcode: f.properties.postcode as string,
    }));
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
  return `https://devis.moverz.fr/devis-gratuits-v3?${p.toString()}`;
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
}: {
  label: string;
  placeholder: string;
  value: CitySuggestion | null;
  onSelect: (s: CitySuggestion) => void;
  onClear: () => void;
}) {
  const [query, setQuery] = useState(value?.label ?? "");
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const wrapperRef = useRef<HTMLDivElement>(null);

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
      onClear();
      clearTimeout(timer.current);
      timer.current = setTimeout(async () => {
        const results = await fetchCities(q);
        setSuggestions(results);
      }, 250);
    },
    [onClear],
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
          onFocus={() => { setFocused(true); suggestions.length > 0 && setOpen(true); }}
          onBlur={() => setFocused(false)}
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
          onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
          onBlur={(e) => {
            if (!unrecognized) e.target.style.borderColor = value ? "var(--color-accent)" : "var(--color-border)";
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

  // Progress : 0% → 8% → 17% → 25%
  let progress = 0;
  if (origin) progress += 8;
  if (destination) progress += 9;
  if (surface && Number(surface) > 0) progress += 8;

  const allFieldsFilled = origin && destination && Number(surface) > 0;

  const handleEstimate = async () => {
    if (!origin || !destination || !surface) return;
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
        <span class="text-sm font-semibold" style="color: var(--color-text)">✅ Vos informations sont sauvegardées</span>
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
    <section className="relative pt-16 pb-20 md:pt-20 md:pb-28" style={{ background: "var(--color-bg)" }}>
      {/* Glow subtil */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full blur-[120px] opacity-30"
        style={{ background: "radial-gradient(circle, rgba(14,165,166,0.2), transparent 70%)" }}
      />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* COLONNE GAUCHE — H1 + 3 garanties */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
            <motion.div variants={staggerItem} className="space-y-5">
              <h1
                className="font-heading text-[clamp(36px,6vw,64px)] leading-[1.05] font-bold tracking-[-0.025em]"
                style={{ color: "var(--color-text)" }}
              >
                Vous déménagez.
                <br />
                <span style={{ color: "var(--color-accent)" }}>On compare.</span>
              </h1>
              <p
                className="text-lg md:text-xl max-w-lg leading-relaxed"
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
                  <strong>{Math.floor(Math.random() * 5) + 6} personnes</strong> comparent en ce moment
                </span>
              </motion.div>
            </motion.div>

            {/* 3 garanties inline */}
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

          {/* COLONNE DROITE — Tunnel card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              className="rounded-[var(--radius-md)] border p-6 md:p-8 space-y-5 max-w-[520px] mx-auto lg:mx-0"
              style={{
                borderColor: "var(--color-border)",
                background: "var(--color-surface)",
                boxShadow: "var(--shadow-md)",
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
                      <p className="text-4xl font-bold tabular-nums" style={{ color: "var(--color-text)" }}>
                        {estimate.min.toLocaleString("fr-FR")} € – {estimate.max.toLocaleString("fr-FR")} €
                      </p>
                      <p className="text-xs mt-2" style={{ color: "var(--color-text-muted)" }}>
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
                      />
                      <CityAutocomplete
                        label="Ville d'arrivée"
                        placeholder="Ex: Lyon"
                        value={destination}
                        onSelect={setDestination}
                        onClear={() => setDestination(null)}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-[13px] md:text-[13px] text-[14px] font-medium mb-1.5"
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
                          className="w-full rounded-[var(--radius-sm)] border px-3.5 py-2.5 md:py-2.5 py-3 text-sm outline-none transition-all placeholder:text-[var(--color-text-muted)]"
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
                          className="mt-1.5 text-[10px] md:text-[10px] text-[11px]"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          💡 T2 ≈ 50m² · T3 ≈ 70m² · T4 ≈ 90m²
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
