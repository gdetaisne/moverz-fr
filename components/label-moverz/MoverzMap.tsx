"use client";

import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { APIProvider, Map as GoogleMap, InfoWindow, useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { MarkerClusterer, SuperClusterAlgorithm } from "@googlemaps/markerclusterer";
import { MapPin, Search, X, Loader2, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────

interface MoverPoint {
  id: string;
  companyName: string;
  city: string;
  postalCode: string;
  isPrioritaire: boolean;
  lat: number;
  lng: number;
}

// ─── Helpers marqueur ─────────────────────────────────────────

function makeMarkerEl(mover: MoverPoint, isSelected: boolean): HTMLDivElement {
  const color = mover.isPrioritaire ? "#0EA5A6" : "#6B7280";
  const size = isSelected ? 36 : mover.isPrioritaire ? 26 : 20;
  const el = document.createElement("div");
  el.style.cssText = [
    `width:${size}px`,
    `height:${size}px`,
    "border-radius:50%",
    `background:${color}`,
    `border:${isSelected ? 3 : 2}px solid white`,
    `box-shadow:${isSelected ? `0 0 0 3px ${color}40,0 4px 12px rgba(0,0,0,0.25)` : "0 2px 6px rgba(0,0,0,0.2)"}`,
    "cursor:pointer",
    "display:flex",
    "align-items:center",
    "justify-content:center",
  ].join(";");
  if (mover.isPrioritaire) {
    const svgSize = size * 0.45;
    el.innerHTML = `<svg width="${svgSize}" height="${svgSize}" viewBox="0 0 24 24" fill="white"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/></svg>`;
  }
  return el;
}

// ─── Carte interne avec clustering ────────────────────────────

function MapContent({
  movers,
  selectedId,
  setSelectedId,
  onSelectMover,
}: {
  movers: MoverPoint[];
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
  onSelectMover: (mover: MoverPoint) => void;
}) {
  const map = useMap();
  const markerLib = useMapsLibrary("marker");
  const clustererRef = useRef<MarkerClusterer | null>(null);
  // Cache des marqueurs : ID → AdvancedMarkerElement
  const markerCacheRef = useRef<Map<string, google.maps.marker.AdvancedMarkerElement>>(new Map());
  // Ensemble des IDs actuellement dans le clusterer
  const activeIdsRef = useRef<Set<string>>(new Set());
  const prevSelectedIdRef = useRef<string | null>(null);
  const selectedMover = useMemo(() => movers.find((m) => m.id === selectedId) ?? null, [movers, selectedId]);

  // Recentrer sur le marqueur sélectionné
  useEffect(() => {
    if (map && selectedMover) {
      map.panTo({ lat: selectedMover.lat, lng: selectedMover.lng });
      if ((map.getZoom() ?? 0) < 10) map.setZoom(11);
    }
  }, [map, selectedMover]);

  // Initialiser le clusterer une seule fois
  useEffect(() => {
    if (!map || !markerLib || clustererRef.current) return;
    clustererRef.current = new MarkerClusterer({
      map,
      algorithm: new SuperClusterAlgorithm({ radius: 60, maxZoom: 11 }),
      renderer: {
        render: ({ count, position }) => {
          const size = count > 100 ? 52 : count > 20 ? 44 : 36;
          const el = document.createElement("div");
          el.style.cssText = [
            `width:${size}px`, `height:${size}px`,
            "border-radius:50%", "background:#374151",
            "border:2px solid white", "box-shadow:0 2px 8px rgba(0,0,0,0.25)",
            "display:flex", "align-items:center", "justify-content:center",
            "color:white", "font-weight:700",
            `font-size:${count > 100 ? 13 : 12}px`,
            "font-family:system-ui,sans-serif", "cursor:pointer",
          ].join(";");
          el.textContent = count > 999 ? "999+" : String(count);
          return new markerLib.AdvancedMarkerElement({ position, content: el });
        },
      },
    });
  }, [map, markerLib]);

  // Synchroniser les marqueurs : ajoute/supprime uniquement le delta
  useEffect(() => {
    if (!clustererRef.current || !map || !markerLib) return;

    const cache = markerCacheRef.current;
    const activeIds = activeIdsRef.current;
    const newIds = new Set(movers.map((m) => m.id));

    // Marqueurs à supprimer (plus dans la liste filtrée)
    const toRemove: google.maps.marker.AdvancedMarkerElement[] = [];
    for (const id of activeIds) {
      if (!newIds.has(id)) {
        const m = cache.get(id);
        if (m) toRemove.push(m);
        activeIds.delete(id);
      }
    }
    if (toRemove.length) clustererRef.current.removeMarkers(toRemove);

    // Marqueurs à ajouter (nouveaux dans la liste filtrée)
    const toAdd: google.maps.marker.AdvancedMarkerElement[] = [];
    for (const mover of movers) {
      if (!activeIds.has(mover.id)) {
        let marker = cache.get(mover.id);
        if (!marker) {
          marker = new markerLib.AdvancedMarkerElement({
            position: { lat: mover.lat, lng: mover.lng },
            content: makeMarkerEl(mover, false),
            zIndex: mover.isPrioritaire ? 2 : 1,
          });
          marker.addListener("click", () => {
            setSelectedId(marker!.title === selectedId ? null : mover.id);
          });
          // Stocker l'id dans title pour le retrouver au click
          (marker as any).title = mover.id;
          cache.set(mover.id, marker);
        }
        toAdd.push(marker);
        activeIds.add(mover.id);
      }
    }
    if (toAdd.length) clustererRef.current.addMarkers(toAdd);

  }, [map, markerLib, movers]); // eslint-disable-line react-hooks/exhaustive-deps

  // Mettre à jour visuellement uniquement les 2 marqueurs qui changent (prev/next selected)
  useEffect(() => {
    if (!markerLib) return;
    const cache = markerCacheRef.current;
    const prev = prevSelectedIdRef.current;

    // Désélectionner l'ancien
    if (prev && prev !== selectedId) {
      const mover = movers.find((m) => m.id === prev);
      const marker = cache.get(prev);
      if (mover && marker) {
        marker.content = makeMarkerEl(mover, false);
        (marker as any).zIndex = mover.isPrioritaire ? 2 : 1;
      }
    }
    // Sélectionner le nouveau
    if (selectedId) {
      const mover = movers.find((m) => m.id === selectedId);
      const marker = cache.get(selectedId);
      if (mover && marker) {
        marker.content = makeMarkerEl(mover, true);
        (marker as any).zIndex = 100;
      }
    }
    prevSelectedIdRef.current = selectedId;
  }, [selectedId, markerLib, movers]);

  return (
    <>
      {selectedMover && (
        <InfoWindow
          position={{ lat: selectedMover.lat, lng: selectedMover.lng }}
          onCloseClick={() => setSelectedId(null)}
          pixelOffset={[0, -20]}
        >
          <div style={{ minWidth: 200, maxWidth: 260, fontFamily: "var(--font-inter, sans-serif)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#0B0F19", lineHeight: 1.3 }}>
                  {selectedMover.companyName}
                </div>
                <div style={{ fontSize: 12, color: "#6B7280", marginTop: 2 }}>
                  {selectedMover.city} ({selectedMover.postalCode})
                </div>
              </div>
              {selectedMover.isPrioritaire && (
                <span style={{
                  fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 999,
                  background: "rgba(14,165,166,0.12)", color: "#0EA5A6", whiteSpace: "nowrap",
                }}>
                  ✓ Prioritaire
                </span>
              )}
            </div>
            <button
              onClick={() => { onSelectMover(selectedMover); setSelectedId(null); }}
              style={{
                width: "100%", padding: "8px 0", borderRadius: 8, border: "none",
                background: "#0EA5A6", color: "white", fontWeight: 600, fontSize: 13,
                cursor: "pointer",
              }}
            >
              Afficher le scoring →
            </button>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

// ─── Composant principal ─────────────────────────────────────────

export function MoverzMapInner() {
  const [movers, setMovers] = useState<MoverPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  // searchQuery = texte en cours de saisie (dropdown)
  const [searchQuery, setSearchQuery] = useState("");
  // activeFilter = filtre validé (Entrée ou clic sur item) qui persiste sur la carte
  const [activeFilter, setActiveFilter] = useState("");
  const scoringCheckerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    fetch("/api/scoring-check/movers-map/")
      .then((r) => r.json())
      .then((data: { results?: MoverPoint[]; error?: string }) => {
        if (data.error) throw new Error(data.error);
        setMovers(data.results ?? []);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const applyFilter = (q: string) => {
    setActiveFilter(q.trim());
    setSearchQuery("");
  };

  const clearFilter = () => {
    setActiveFilter("");
    setSearchQuery("");
    setSelectedId(null);
  };

  // Filtre actif pour les marqueurs sur la carte
  const filterTerm = activeFilter || (searchQuery.length >= 2 ? searchQuery : "");
  const filteredMovers = filterTerm
    ? movers.filter(
        (m) =>
          m.companyName.toLowerCase().includes(filterTerm.toLowerCase()) ||
          m.city.toLowerCase().includes(filterTerm.toLowerCase()) ||
          m.postalCode.startsWith(filterTerm),
      )
    : movers;

  // Dropdown : uniquement pendant la saisie, avant validation
  const dropdownMovers = searchQuery.length >= 2
    ? movers.filter(
        (m) =>
          m.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.postalCode.startsWith(searchQuery),
      )
    : [];

  // Sélectionner un item du dropdown → applique le filtre + centre sur ce déménageur
  const handleSearchSelect = useCallback((mover: MoverPoint) => {
    setActiveFilter(mover.companyName);
    setSearchQuery("");
    setSelectedId(mover.id);
  }, []);

  // Clic "Afficher scoring" → scroll vers ScoringChecker et pré-remplit le champ
  const handleSelectMover = useCallback((mover: MoverPoint) => {
    // Déclenche un event custom que ScoringChecker peut écouter
    window.dispatchEvent(new CustomEvent("moverz:prefill-search", { detail: { query: mover.companyName } }));
    // Scroll vers la section
    const el = document.getElementById("scoring-checker-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? "";

  return (
    <section className="section section-light" ref={(el) => { scoringCheckerRef.current = el; }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-3" style={{ color: "var(--color-text)" }}>
            Nos déménageurs en France
          </h2>
          <p className="text-lg" style={{ color: "var(--color-text-secondary)" }}>
            Survolez la carte, cliquez sur un déménageur pour afficher son scoring.
          </p>
        </motion.div>

        {/* Stats rapides */}
        {!loading && movers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-6 mb-6 flex-wrap"
          >
            <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
              <Users className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
              <span><strong style={{ color: "var(--color-text)" }}>{movers.length}</strong> déménageurs sur la carte</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
              <Shield className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
              <span>
                <strong style={{ color: "var(--color-accent)" }}>{movers.filter((m) => m.isPrioritaire).length}</strong> Prioritaires
                <span className="ml-1">(fiche Google validée)</span>
              </span>
            </div>
          </motion.div>
        )}

        {/* Barre de recherche sur carte */}
        <div className="relative mb-4 max-w-md mx-auto">
          <div
            className="flex items-center gap-2 px-4 py-3 rounded-xl"
            style={{ background: "white", border: `1px solid ${activeFilter ? "var(--color-accent)" : "var(--color-border)"}`, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
          >
            <Search className="w-4 h-4 shrink-0" style={{ color: activeFilter ? "var(--color-accent)" : "var(--color-text-muted)" }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && searchQuery.trim().length >= 2) applyFilter(searchQuery);
                if (e.key === "Escape") clearFilter();
              }}
              placeholder={activeFilter ? `Filtre actif : "${activeFilter}"` : "Rechercher sur la carte (nom, ville, CP)…"}
              className="flex-1 text-sm outline-none bg-transparent"
              style={{ color: activeFilter && !searchQuery ? "var(--color-accent)" : "var(--color-text)" }}
            />
            {(searchQuery || activeFilter) && (
              <button onClick={clearFilter} title="Effacer le filtre">
                <X className="w-4 h-4" style={{ color: "var(--color-text-muted)" }} />
              </button>
            )}
          </div>

          {/* Badge filtre actif */}
          {activeFilter && !searchQuery && (
            <div className="flex items-center gap-2 mt-2 px-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: "rgba(14,165,166,0.12)", color: "var(--color-accent)" }}>
                <Search className="w-3 h-3" />
                {filteredMovers.length} résultat{filteredMovers.length > 1 ? "s" : ""} pour &quot;{activeFilter}&quot;
                <button onClick={clearFilter} className="ml-1 hover:opacity-70">
                  <X className="w-3 h-3" />
                </button>
              </span>
            </div>
          )}

          {/* Dropdown résultats (pendant la saisie uniquement) */}
          {dropdownMovers.length > 0 && searchQuery.length >= 2 && (
            <div
              className="absolute top-full left-0 right-0 mt-1 rounded-xl overflow-hidden z-10"
              style={{ background: "white", border: "1px solid var(--color-border)", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", maxHeight: 240, overflowY: "auto" }}
            >
              {/* Valider tout le filtre */}
              <button
                onClick={() => applyFilter(searchQuery)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-left border-b"
                style={{ borderColor: "var(--color-border)", background: "rgba(14,165,166,0.04)" }}
              >
                <Search className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--color-accent)" }} />
                <span className="text-sm font-semibold" style={{ color: "var(--color-accent)" }}>
                  Voir les {dropdownMovers.length} résultats pour &quot;{searchQuery}&quot; sur la carte
                </span>
              </button>
              {dropdownMovers.slice(0, 7).map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleSearchSelect(m)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50"
                >
                  <MapPin className="w-4 h-4 shrink-0" style={{ color: m.isPrioritaire ? "var(--color-accent)" : "var(--color-text-muted)" }} />
                  <div>
                    <div className="text-sm font-semibold truncate" style={{ color: "var(--color-text)" }}>{m.companyName}</div>
                    <div className="text-xs" style={{ color: "var(--color-text-secondary)" }}>{m.city} ({m.postalCode})</div>
                  </div>
                  {m.isPrioritaire && (
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full shrink-0" style={{ background: "rgba(14,165,166,0.1)", color: "var(--color-accent)" }}>
                      Prioritaire
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Carte */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ height: 520, border: "1px solid var(--color-border)", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
        >
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center z-10" style={{ background: "rgba(250,250,250,0.9)" }}>
              <Loader2 className="w-8 h-8 animate-spin" style={{ color: "var(--color-accent)" }} />
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center z-10 text-sm" style={{ color: "var(--color-text-secondary)" }}>
              Carte temporairement indisponible.
            </div>
          )}

          {!error && !apiKey && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10"
              style={{ background: "var(--color-bg)" }}>
              <MapPin className="w-10 h-10" style={{ color: "var(--color-accent)" }} />
              <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                Carte des déménageurs
              </p>
              <p className="text-xs text-center max-w-xs" style={{ color: "var(--color-text-secondary)" }}>
                {movers.length > 0
                  ? `${movers.length} déménageurs référencés en France — carte en cours d'activation.`
                  : "Chargement des déménageurs…"}
              </p>
            </div>
          )}

          {!error && !!apiKey && (
            <APIProvider apiKey={apiKey}>
              <GoogleMap
                defaultCenter={{ lat: 46.5, lng: 2.5 }}
                defaultZoom={6}
                mapId="moverz-partners-map"
                gestureHandling="greedy"
                disableDefaultUI={false}
                style={{ width: "100%", height: "100%" }}
                mapTypeControl={false}
                streetViewControl={false}
                fullscreenControl={false}
              >
                <MapContent
                  movers={filteredMovers}
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                  onSelectMover={handleSelectMover}
                />
              </GoogleMap>
            </APIProvider>
          )}
        </div>

        {/* Légende */}
        <div className="flex items-center justify-center gap-6 mt-4 flex-wrap">
          <div className="flex items-center gap-2 text-xs" style={{ color: "var(--color-text-secondary)" }}>
            <div className="w-3 h-3 rounded-full shrink-0" style={{ background: "var(--color-accent)" }} />
            Déménageur Prioritaire (fiche Google validée, scoring complet)
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: "var(--color-text-secondary)" }}>
            <div className="w-3 h-3 rounded-full shrink-0" style={{ background: "#6B7280" }} />
            Déménageur référencé
          </div>
        </div>
      </div>
    </section>
  );
}
