"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const PRESETS = [
  { label: "24 heures", value: "1" },
  { label: "7 jours",   value: "7" },
  { label: "28 jours",  value: "28" },
  { label: "3 mois",    value: "90" },
];

function formatDateInput(d: Date) {
  return d.toISOString().slice(0, 10);
}

export function DateFilter({ minDate, maxDate }: { minDate: string; maxDate: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentDays = searchParams.get("days");
  const currentFrom = searchParams.get("from");
  const currentTo   = searchParams.get("to");

  // Détermine si un preset est actif
  const activePreset = !currentFrom && !currentTo ? (currentDays ?? "28") : null;

  // État modale
  const [modalOpen, setModalOpen] = useState(false);
  const [fromVal, setFromVal]     = useState(currentFrom ?? minDate);
  const [toVal, setToVal]         = useState(currentTo ?? maxDate);
  const modalRef = useRef<HTMLDivElement>(null);

  // Sync champs si searchParams changent
  useEffect(() => {
    if (currentFrom) setFromVal(currentFrom);
    if (currentTo)   setToVal(currentTo);
  }, [currentFrom, currentTo]);

  // Fermer modale si clic extérieur
  useEffect(() => {
    if (!modalOpen) return;
    function handler(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setModalOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [modalOpen]);

  function applyPreset(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("days", value);
    params.delete("from");
    params.delete("to");
    router.push(`?${params.toString()}`, { scroll: false });
  }

  function applyCustom() {
    if (!fromVal || !toVal) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("from", fromVal);
    params.set("to", toVal);
    params.delete("days");
    router.push(`?${params.toString()}`, { scroll: false });
    setModalOpen(false);
  }

  // Label affiché sur le bouton "Plus" quand custom actif
  const customLabel = currentFrom && currentTo
    ? `${currentFrom} → ${currentTo}`
    : "Plus";

  const isCustomActive = !!currentFrom && !!currentTo;

  return (
    <div className="relative flex items-center gap-1">
      {/* Pills presets */}
      <div className="flex items-center border border-v4-border rounded-full overflow-hidden font-sans text-sm bg-white">
        {PRESETS.map((p, i) => (
          <button
            key={p.value}
            onClick={() => applyPreset(p.value)}
            className={`px-4 py-1.5 transition-colors whitespace-nowrap ${
              i > 0 ? "border-l border-v4-border" : ""
            } ${
              activePreset === p.value
                ? "bg-gray-900 text-white font-600"
                : "text-v4-text-secondary hover:bg-gray-50"
            }`}
          >
            {p.label}
          </button>
        ))}

        {/* Bouton Plus */}
        <button
          onClick={() => setModalOpen((v) => !v)}
          className={`border-l border-v4-border px-4 py-1.5 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
            isCustomActive
              ? "bg-gray-900 text-white font-600"
              : "text-v4-text-secondary hover:bg-gray-50"
          }`}
        >
          {isCustomActive ? (
            <span className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 16 16"><path d="M2 5h12M5 8h6M7 11h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              {customLabel}
            </span>
          ) : (
            <span className="flex items-center gap-1">
              Plus
              <svg className="w-3 h-3" fill="none" viewBox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          )}
        </button>
      </div>

      {/* Modale date custom */}
      {modalOpen && (
        <div
          ref={modalRef}
          className="absolute top-full left-0 mt-2 z-50 bg-white border border-v4-border rounded-xl shadow-lg p-5 w-80"
        >
          <p className="font-sans text-sm font-700 text-v4-text mb-4">Période personnalisée</p>
          <div className="space-y-3">
            <div>
              <label className="font-sans text-xs text-v4-text-muted font-600 block mb-1">Début</label>
              <input
                type="date"
                value={fromVal}
                min={minDate}
                max={toVal || maxDate}
                onChange={(e) => setFromVal(e.target.value)}
                className="w-full border border-v4-border rounded-lg px-3 py-2 font-sans text-sm text-v4-text focus:outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <label className="font-sans text-xs text-v4-text-muted font-600 block mb-1">Fin</label>
              <input
                type="date"
                value={toVal}
                min={fromVal || minDate}
                max={maxDate}
                onChange={(e) => setToVal(e.target.value)}
                className="w-full border border-v4-border rounded-lg px-3 py-2 font-sans text-sm text-v4-text focus:outline-none focus:border-gray-400"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={applyCustom}
              disabled={!fromVal || !toVal || fromVal > toVal}
              className="flex-1 bg-gray-900 text-white font-sans text-sm font-600 py-2 rounded-lg hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Appliquer
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="px-4 py-2 font-sans text-sm text-v4-text-secondary hover:bg-gray-50 rounded-lg transition-colors"
            >
              Annuler
            </button>
          </div>
          <p className="font-sans text-xs text-v4-text-muted mt-3">
            Données disponibles : {minDate} → {maxDate}
          </p>
        </div>
      )}
    </div>
  );
}
