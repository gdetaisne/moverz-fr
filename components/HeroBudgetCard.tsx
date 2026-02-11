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
    // ⚠ orange — ville non reconnue
    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none" title="Ville non reconnue — choisissez dans la liste">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
    </span>
  ) : null;

  return (
    <div ref={wrapperRef} className="relative">
      <label className="block text-sm font-medium text-[#0F172A] mb-1">{label}</label>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => { setFocused(true); suggestions.length > 0 && setOpen(true); }}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className={`w-full rounded-lg border bg-white px-3 py-2.5 pr-9 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${
            unrecognized
              ? "border-amber-400 focus:border-amber-400 focus:ring-amber-200/50 shadow-[0_0_0_3px_rgba(251,191,36,0.1)]"
              : value
                ? "border-emerald-400 focus:border-[#6BCFCF] focus:ring-[#6BCFCF]/40 shadow-[0_0_0_3px_rgba(16,185,129,0.1)]"
                : "border-[#D1D5DB] focus:border-[#6BCFCF] focus:ring-[#6BCFCF]/40"
          }`}
        />
        {statusIcon}
      </div>
      {unrecognized && (
        <p className="mt-1 text-xs text-amber-600">Sélectionnez une ville dans la liste</p>
      )}
      {open && suggestions.length > 0 && (
        <ul className="absolute z-50 mt-1 w-full rounded-lg border border-[#E5E7EB] bg-white shadow-lg max-h-48 overflow-y-auto">
          {suggestions.map((s, i) => (
            <li
              key={`${s.postcode}-${i}`}
              onMouseDown={(e) => { e.preventDefault(); pick(s); }}
              className="cursor-pointer px-3 py-2 text-sm hover:bg-[#F0FDFA] transition-colors"
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
      <div className="rounded-3xl bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40 p-8 space-y-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#6BCFCF]">
          Estimation indicative
        </p>

        <div className="text-center space-y-1">
          <p className="text-sm text-[#64748B]">
            {origin!.city} → {destination!.city} · {surface} m²
          </p>
          <p className="text-4xl font-bold text-[#0F172A]">
            {estimate.min.toLocaleString("fr-FR")} € – {estimate.max.toLocaleString("fr-FR")} €
          </p>
          <p className="text-xs text-[#94A3B8]">Formule standard · Estimation non contractuelle</p>
        </div>

        <button
          type="button"
          disabled={redirecting}
          onClick={handleRedirect}
          className="block w-full rounded-xl bg-gradient-to-r from-[#0F172A] to-[#1E293B] py-4 text-center text-sm font-semibold text-white shadow-[0_4px_16px_rgba(15,23,42,0.3)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.4)] disabled:opacity-60 active:scale-[0.98] md:hover:scale-[1.02] transition-all duration-200 touch-manipulation"
        >
          {redirecting ? "Redirection…" : "Affiner mon budget →"}
        </button>

        <button
          type="button"
          onClick={() => setEstimate(null)}
          className="block w-full text-center text-xs font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
        >
          ← Modifier mes infos
        </button>
      </div>
    );
  }

  /* ---------- FORM STATE ---------- */
  return (
    <div className="rounded-3xl bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40 p-8 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#6BCFCF]">
        Estimez votre budget
      </p>

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
        <label className="block text-sm font-medium text-[#0F172A] mb-1">Surface (m²)</label>
        <input
          type="number"
          inputMode="numeric"
          min={1}
          max={500}
          value={surface}
          onChange={(e) => setSurface(e.target.value)}
          placeholder="Ex : 60"
          className="w-full rounded-lg border border-[#D1D5DB] bg-white px-3 py-2.5 text-sm text-[#0F172A] focus:border-[#6BCFCF] focus:outline-none focus:ring-2 focus:ring-[#6BCFCF]/40 focus:ring-offset-2 transition-all"
        />
      </div>

      {error && (
        <div className="text-xs text-red-600 bg-red-50 rounded-xl px-3 py-2 border border-red-100">
          {error}
          <a
            href={deepLink}
            className="block mt-1 font-semibold text-red-700 underline"
          >
            Aller au comparateur →
          </a>
        </div>
      )}

      <button
        type="button"
        disabled={!canSubmit || loading}
        onClick={handleEstimate}
        className="w-full rounded-xl bg-gradient-to-r from-[#0F172A] to-[#1E293B] py-4 text-sm font-semibold text-white disabled:opacity-40 shadow-[0_4px_16px_rgba(15,23,42,0.3)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.4)] active:scale-[0.98] md:hover:scale-[1.02] transition-all duration-200 disabled:hover:scale-100 disabled:hover:shadow-[0_4px_16px_rgba(15,23,42,0.3)] touch-manipulation"
      >
        {loading ? "Calcul en cours…" : "Voir mon estimation →"}
      </button>

      <p className="text-[11px] text-center text-[#94A3B8]">
        Gratuit · Sans engagement · Sans appel
      </p>

      <a
        href="https://www.google.com/maps/place/Moverz/@46.881154,3.0417412,6z/data=!3m1!4b1!4m6!3m5!1s0x65777ea3ad50b1c1:0xdcc12b2e04254f4!8m2!3d46.881154!4d3.0417412!16s%2Fg%2F11ylmz4jk6?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-amber-50 border border-amber-200/60 px-4 py-1.5 text-xs font-medium text-[#78350F] hover:bg-amber-100 transition-colors"
      >
        <span className="text-amber-400 text-sm tracking-tight">★★★★★</span>
        <span>4,5+ sur Google</span>
      </a>
    </div>
  );
}
