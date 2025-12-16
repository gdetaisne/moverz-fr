type CityCoord = { lat: number; lon: number };

// Coordonnées approximatives (suffisantes pour estimer une distance "route" crédible).
// Source: valeurs publiques connues / approximation; utilisées uniquement pour calcul interne.
export const CITY_COORDS: Record<string, CityCoord> = {
  paris: { lat: 48.8566, lon: 2.3522 },
  lyon: { lat: 45.764, lon: 4.8357 },
  marseille: { lat: 43.2965, lon: 5.3698 },
  nice: { lat: 43.7102, lon: 7.262 },
  toulouse: { lat: 43.6047, lon: 1.4442 },
  bordeaux: { lat: 44.8378, lon: -0.5792 },
  lille: { lat: 50.6292, lon: 3.0573 },
  strasbourg: { lat: 48.5734, lon: 7.7521 },
  nantes: { lat: 47.2184, lon: -1.5536 },
  rennes: { lat: 48.1173, lon: -1.6778 },
  rouen: { lat: 49.4432, lon: 1.0993 },
  montpellier: { lat: 43.6119, lon: 3.8772 },
  grenoble: { lat: 45.1885, lon: 5.7245 },
  toulon: { lat: 43.1242, lon: 5.928 },
  dijon: { lat: 47.322, lon: 5.0415 },
  angers: { lat: 47.4784, lon: -0.5632 },
  "clermont-ferrand": { lat: 45.7772, lon: 3.087 },
  tours: { lat: 47.3941, lon: 0.6848 },
  reims: { lat: 49.2583, lon: 4.0317 },
  "le-havre": { lat: 49.4944, lon: 0.1079 },
  saint-etienne: { lat: 45.4397, lon: 4.3872 },
};

function toRad(v: number): number {
  return (v * Math.PI) / 180;
}

export function haversineKm(a: CityCoord, b: CityCoord): number {
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);

  const sin1 = Math.sin(dLat / 2);
  const sin2 = Math.sin(dLon / 2);
  const h =
    sin1 * sin1 + Math.cos(lat1) * Math.cos(lat2) * (sin2 * sin2);
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}

export function estimateRoadDistanceKm(fromSlug: string, toSlug: string): number | null {
  const a = CITY_COORDS[fromSlug];
  const b = CITY_COORDS[toSlug];
  if (!a || !b) return null;

  // approx route vs vol d'oiseau
  const km = haversineKm(a, b) * 1.25;
  // arrondir à 10 km près
  return Math.max(10, Math.round(km / 10) * 10);
}

export function formatDistance(km: number): string {
  return `${km} km`;
}

export function formatDurationFromKm(km: number): string {
  // vitesse moyenne + marge pauses / chargement
  const baseHours = km / 80;
  const overhead = km >= 300 ? 0.75 : 0.4;
  const total = baseHours + overhead;
  const h = Math.max(1, Math.floor(total));
  const m = Math.round((total - h) * 60);
  const mm = `${m}`.padStart(2, "0");
  return `${h}h${mm}`;
}

function roundTo50(value: number): number {
  return Math.round(value / 50) * 50;
}

export function estimatePriceRanges(km: number) {
  // barème simple et crédible par "type" (prix dépend du volume, km, accès, période)
  const studioBase = 320 + km * 0.9;
  const t23Base = 520 + km * 1.2;
  const houseBase = 820 + km * 1.7;

  const mk = (base: number) => {
    const min = roundTo50(base * 0.9);
    const max = roundTo50(base * 1.2);
    return `${min}-${max}€`;
  };

  return [
    { type: "Studio/T1", prix: mk(studioBase), description: "Volume : 10-15 m³" },
    { type: "T2/T3", prix: mk(t23Base), description: "Volume : 20-35 m³" },
    { type: "Maison", prix: mk(houseBase), description: "Volume : 40-80 m³" },
  ];
}


