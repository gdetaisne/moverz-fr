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
  const url = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(q)}&type=municipality&limit=5`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();
  return (data.features ?? []).map((f: any) => ({
    label: `${f.properties.city} (${f.properties.postcode})`,
    city: f.properties.city as string,
    postcode: f.properties.postcode as string,
  }));
}

/** Appel API estimate du tunnel */
async function fetchEstimate(
  originPostalCode: string,
  destinationPostalCode: string,
  surface: number,
): Promise<Estimate | null> {
  try {
    const url = `https://devis.moverz.fr/api/estimate?originPostalCode=${originPostalCode}&destinationPostalCode=${destinationPostalCode}&surface=${surface}`;
    const res = await fetch(url);
    if (!res.ok) return null;
    return (await res.json()) as Estimate;
  } catch {
    return null;
  }
}

/** Construit le deep-link vers step 3 du tunnel */
function buildDeepLink(
  originPostalCode: string,
  originCity: string,
  destinationPostalCode: string,
  destinationCity: string,
  surfaceM2: number,
): string {
  const p = new URLSearchParams({
    step: "3",
    originPostalCode,
    originCity,
    destinationPostalCode,
    destinationCity,
    surfaceM2: String(surfaceM2),
    source: "moverz.fr",
    from: "home",
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
}: {
  label: string;
  placeholder: string;
  value: CitySuggestion | null;
  onSelect: (s: CitySuggestion) => void;
}) {
  const [query, setQuery] = useState(value?.label ?? "");
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const wrapperRef = useRef<HTMLDivElement>(null);

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
      clearTimeout(timer.current);
      timer.current = setTimeout(async () => {
        const results = await fetchCities(q);
        setSuggestions(results);
      }, 250);
    },
    [],
  );

  const pick = (s: CitySuggestion) => {
    setQuery(s.label);
    onSelect(s);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <label className="block text-sm font-medium text-[#0F172A] mb-1">{label}</label>
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => suggestions.length > 0 && setOpen(true)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#D1D5DB] bg-white px-3 py-2.5 text-sm text-[#0F172A] focus:border-[#6BCFCF] focus:outline-none focus:ring-2 focus:ring-[#6BCFCF]/30"
      />
      {open && suggestions.length > 0 && (
        <ul className="absolute z-50 mt-1 w-full rounded-lg border border-[#E5E7EB] bg-white shadow-lg max-h-48 overflow-y-auto">
          {suggestions.map((s, i) => (
            <li
              key={`${s.postcode}-${i}`}
              onClick={() => pick(s)}
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

  const deepLink =
    origin && destination && surface
      ? buildDeepLink(origin.postcode, origin.city, destination.postcode, destination.city, Number(surface))
      : "#";

  // Reset estimate when inputs change
  useEffect(() => {
    setEstimate(null);
    setError(null);
  }, [origin, destination, surface]);

  /* ---------- RESULT STATE ---------- */
  if (estimate) {
    return (
      <div className="rounded-2xl border border-[#E5E7EB] bg-white shadow-lg p-6 space-y-5">
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

        <a
          href={deepLink}
          className="block w-full rounded-xl bg-[#0F172A] py-3.5 text-center text-sm font-semibold text-white hover:bg-[#1E293B] transition-colors"
        >
          Affiner mon budget →
        </a>

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
    <div className="rounded-2xl border border-[#E5E7EB] bg-white shadow-lg p-6 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#6BCFCF]">
        Estimez votre budget
      </p>

      <CityAutocomplete
        label="Ville de départ"
        placeholder="Ex : Paris"
        value={origin}
        onSelect={setOrigin}
      />

      <CityAutocomplete
        label="Ville d'arrivée"
        placeholder="Ex : Marseille"
        value={destination}
        onSelect={setDestination}
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
          className="w-full rounded-lg border border-[#D1D5DB] bg-white px-3 py-2.5 text-sm text-[#0F172A] focus:border-[#6BCFCF] focus:outline-none focus:ring-2 focus:ring-[#6BCFCF]/30"
        />
      </div>

      {error && (
        <div className="text-xs text-red-600 bg-red-50 rounded-lg px-3 py-2">
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
        className="w-full rounded-xl bg-[#0F172A] py-3.5 text-sm font-semibold text-white disabled:opacity-40 hover:bg-[#1E293B] transition-colors"
      >
        {loading ? "Calcul en cours…" : "Voir mon estimation →"}
      </button>

      <p className="text-[11px] text-center text-[#94A3B8]">
        Gratuit · Sans engagement · Sans appel
      </p>
    </div>
  );
}
