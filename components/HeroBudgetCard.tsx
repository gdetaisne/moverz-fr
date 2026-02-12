"use client";
import { useState, useEffect, useRef, useCallback } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
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

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

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

/** Appel API estimate du tunnel devis (même endpoint que le tunnel) */
async function fetchEstimate(
  originPostalCode: string,
  destinationPostalCode: string,
  surface: number,
): Promise<Estimate | null> {
  try {
    const params = new URLSearchParams({
      originPostalCode,
      destinationPostalCode,
      surface: String(surface),
    });
    const res = await fetch(`https://devis.moverz.fr/api/estimate?${params}`);
    if (!res.ok) return null;
    const data = await res.json();
    const min = typeof data.prixMin === "number" ? data.prixMin : Number(data.prixMin);
    const max = typeof data.prixMax === "number" ? data.prixMax : Number(data.prixMax);
    if (isNaN(min) || isNaN(max)) return null;
    return { min, max };
  } catch {
    return null;
  }
}

/** Construit le deep-link vers le tunnel devis (pré-rempli depuis la home) */
function buildDevisLinkFromHome(
  originPostalCode: string,
  originCity: string,
  destinationPostalCode: string,
  destinationCity: string,
  surfaceM2: number,
): string {
  const p = new URLSearchParams({
    step: "3",
    // Tracking: demandé pour la home (valeur encodée automatiquement)
    from: "https://moverz.fr",
    originPostalCode,
    originCity,
    destinationPostalCode,
    destinationCity,
    surfaceM2: String(surfaceM2),
    // On garde source=moverz.fr pour cohérence avec les autres CTAs du site
    source: "moverz.fr",
  });
  return `https://devis.moverz.fr/devis-gratuits-v3?${p.toString()}`;
}

/* ------------------------------------------------------------------ */
/*  Autocomplete sub-component                                         */
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
  const [searched, setSearched] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Ville non reconnue : texte saisi (≥2 car.) + aucune sélection + pas en train d'éditer
  const unrecognized = !focused && query.length >= 2 && !value;

  // Close dropdown on outside click
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
      setSearched(false);
      // Si l'utilisateur modifie le texte après sélection, on invalide
      onClear();
      clearTimeout(timer.current);
      timer.current = setTimeout(async () => {
        const results = await fetchCities(q);
        setSuggestions(results);
        setSearched(true);
      }, 250);
    },
    [onClear],
  );

  const pick = (s: CitySuggestion) => {
    setQuery(s.label);
    onSelect(s);
    setOpen(false);
  };

  // Icône de statut à droite de l'input
  const statusIcon = value ? (
    // ✓ vert — ville reconnue
    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 pointer-events-none" title="Ville reconnue">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    </span>
  ) : unrecognized ? (
    // orange — ville non reconnue
    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none" title="Ville non reconnue — choisissez dans la liste">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
    </span>
  ) : null;

  return (
    <div ref={wrapperRef} className="relative">
      <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-text)" }}>{label}</label>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => { setFocused(true); suggestions.length > 0 && setOpen(true); }}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full rounded-xl border-2 px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-4 transition-all duration-300"
          style={{
            background: "var(--color-surface)",
            color: "var(--color-text)",
            borderColor: unrecognized ? "var(--color-warning)" : (value ? "var(--color-accent)" : "var(--color-border)"),
          }}
        />
        {statusIcon}
      </div>
      {unrecognized && (
        <p className="mt-1.5 text-xs font-medium" style={{ color: "var(--color-warning)" }}>Sélectionnez une ville dans la liste</p>
      )}
      {open && suggestions.length > 0 && (
        <ul className="absolute z-50 mt-2 w-full rounded-xl shadow-2xl max-h-48 overflow-y-auto" style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
          {suggestions.map((s, i) => (
            <li
              key={`${s.postcode}-${i}`}
              onMouseDown={(e) => { e.preventDefault(); pick(s); }}
              className="cursor-pointer px-4 py-2.5 text-sm transition-colors first:rounded-t-xl last:rounded-b-xl"
              style={{ color: "var(--color-text)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(14,165,166,0.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
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
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export default function HeroBudgetCard({ ab = "A" }: { ab?: "A" | "B" }) {
  const [origin, setOrigin] = useState<CitySuggestion | null>(null);
  const [destination, setDestination] = useState<CitySuggestion | null>(null);
  const [surface, setSurface] = useState<string>("");
  const [estimate, setEstimate] = useState<Estimate | null>(null);
  const [loading, setLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = origin && destination && Number(surface) > 0;

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
    try {
      const url = buildDevisLinkFromHome(
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
    }
  };

  const deepLink =
    origin && destination && surface
      ? buildDevisLinkFromHome(origin.postcode, origin.city, destination.postcode, destination.city, Number(surface))
      : "#";

  // Reset estimate/errors when inputs change
  useEffect(() => {
    setEstimate(null);
    setError(null);
  }, [origin, destination, surface]);

  /* ---------- RESULT STATE (Step 2) ---------- */
  if (estimate) {
    return (
      <div className="rounded-3xl backdrop-blur-xl p-8 space-y-6" style={{ background: "rgba(255,255,255,0.95)", boxShadow: "var(--shadow-md)", border: "1px solid var(--color-border)" }}>
        <div className="text-center pb-2">
          <p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "var(--color-accent)" }}>
            Estimation indicative
          </p>
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
            {origin!.city} → {destination!.city} · {surface} m²
          </p>
          <p className="text-4xl font-bold tracking-tight" style={{ color: "var(--color-text)" }}>
            {estimate.min.toLocaleString("fr-FR")} € – {estimate.max.toLocaleString("fr-FR")} €
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>Formule standard · Estimation non contractuelle</p>
        </div>

        <button
          type="button"
          disabled={redirecting}
          onClick={handleRedirect}
          className="group relative block w-full rounded-xl py-4 text-center text-sm font-bold text-white disabled:opacity-60 active:scale-[0.98] md:hover:scale-[1.02] transition-all duration-300 touch-manipulation overflow-hidden"
          style={{ background: "var(--color-accent)", boxShadow: "0 4px 16px rgba(14,165,166,0.3)" }}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {redirecting ? "Redirection…" : "Affiner mon budget"}
            {!redirecting && (
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            )}
          </span>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ background: "var(--color-surface)" }} />
        </button>

        <button
          type="button"
          onClick={() => setEstimate(null)}
          className="block w-full text-center text-sm font-semibold transition-colors"
          style={{ color: "var(--color-text-secondary)" }}
        >
          ← Modifier mes infos
        </button>
      </div>
    );
  }

  /* ---------- FORM STATE ---------- */
  return (
    <div className="rounded-3xl backdrop-blur-xl p-8 space-y-5" style={{ background: "rgba(255,255,255,0.95)", boxShadow: "var(--shadow-md)", border: "1px solid var(--color-border)" }}>
      <div className="text-center pb-2">
        <p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "var(--color-accent)" }}>
          Estimez votre budget
        </p>
      </div>

      <CityAutocomplete
        label="Ville de départ"
        placeholder="Ex : Paris"
        value={origin}
        onSelect={setOrigin}
        onClear={() => setOrigin(null)}
      />

      <CityAutocomplete
        label="Ville d'arrivée"
        placeholder="Ex : Marseille"
        value={destination}
        onSelect={setDestination}
        onClear={() => setDestination(null)}
      />

      <div>
        <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-text)" }}>Surface (m²)</label>
        <input
          type="number"
          inputMode="numeric"
          min={1}
          max={500}
          value={surface}
          onChange={(e) => setSurface(e.target.value)}
          placeholder="Ex : 60"
          className="w-full rounded-xl border-2 px-4 py-3 text-sm focus:outline-none focus:ring-4 transition-all duration-300"
          style={{
            background: "var(--color-surface)",
            color: "var(--color-text)",
            borderColor: "var(--color-border)",
          }}
        />
      </div>

      {error && (
        <div className="text-xs rounded-xl px-3 py-2" style={{ color: "var(--color-danger)", background: "rgba(220,38,38,0.05)", border: "1px solid rgba(220,38,38,0.2)" }}>
          {error}
          <a
            href={deepLink}
            className="block mt-1 font-semibold underline"
            style={{ color: "var(--color-danger)" }}
          >
            Aller au comparateur →
          </a>
        </div>
      )}

      <button
        type="button"
        disabled={!canSubmit || loading}
        onClick={handleEstimate}
        className="group relative w-full rounded-xl py-4 text-sm font-bold text-white disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] md:hover:scale-[1.02] transition-all duration-300 disabled:hover:scale-100 touch-manipulation overflow-hidden"
        style={{ background: "var(--color-accent)", boxShadow: "0 4px 16px rgba(14,165,166,0.3)" }}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading ? "Calcul en cours…" : "Voir mon estimation"}
          {!loading && (
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          )}
        </span>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ background: "var(--color-surface)" }} />
      </button>

      <p className="text-xs text-center font-medium" style={{ color: "var(--color-text-muted)" }}>
        Gratuit · Sans engagement · Sans appel
      </p>
    </div>
  );
}
