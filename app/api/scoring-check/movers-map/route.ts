/**
 * BFF — Données carte des déménageurs
 * GET /api/scoring-check/movers-map
 *
 * Retourne les déménageurs actifs avec coordonnées approximatives
 * calculées depuis le code postal (centroïde de département).
 * Zéro appel API externe — réponse < 200ms.
 * Cache 1h côté Next.js.
 */

import { NextRequest, NextResponse } from 'next/server';

const BACKOFFICE_URL = process.env.NEXT_PUBLIC_BACKOFFICE_URL?.replace(/\/$/, '') ?? '';

interface MoverRaw {
  id: string;
  companyName: string;
  city: string;
  postalCode: string;
  isPrioritaire: boolean;
}

interface MoverWithCoords extends MoverRaw {
  lat: number;
  lng: number;
}

// Centroïdes approximatifs par département (2 premiers chiffres du CP)
// Source : IGN / Wikipedia — précision ~15km, suffisante pour une carte nationale
const DEPT_COORDS: Record<string, [number, number]> = {
  '01': [46.2, 5.2],   '02': [49.5, 3.6],   '03': [46.3, 3.2],   '04': [44.1, 6.2],
  '05': [44.7, 6.4],   '06': [43.9, 7.2],   '07': [44.7, 4.6],   '08': [49.7, 4.7],
  '09': [42.9, 1.6],   '10': [48.3, 4.1],   '11': [43.2, 2.4],   '12': [44.4, 2.6],
  '13': [43.5, 5.4],   '14': [49.1, -0.4],  '15': [45.1, 2.6],   '16': [45.7, 0.2],
  '17': [45.7, -0.8],  '18': [47.1, 2.4],   '19': [45.3, 2.0],   '20': [42.0, 9.0],
  '21': [47.3, 5.0],   '22': [48.4, -2.8],  '23': [46.1, 2.0],   '24': [45.1, 0.7],
  '25': [47.2, 6.4],   '26': [44.7, 5.0],   '27': [49.1, 1.2],   '28': [48.4, 1.5],
  '29': [48.2, -4.0],  '30': [44.0, 4.2],   '31': [43.4, 1.4],   '32': [43.7, 0.6],
  '33': [44.8, -0.6],  '34': [43.6, 3.9],   '35': [48.1, -1.7],  '36': [46.8, 1.6],
  '37': [47.3, 0.7],   '38': [45.2, 5.7],   '39': [46.7, 5.6],   '40': [43.9, -0.8],
  '41': [47.6, 1.3],   '42': [45.5, 4.2],   '43': [45.1, 3.9],   '44': [47.4, -1.7],
  '45': [47.9, 2.1],   '46': [44.7, 1.6],   '47': [44.4, 0.6],   '48': [44.5, 3.5],
  '49': [47.5, -0.6],  '50': [49.1, -1.3],  '51': [49.0, 4.3],   '52': [48.1, 5.2],
  '53': [48.1, -0.8],  '54': [48.7, 6.2],   '55': [48.9, 5.3],   '56': [47.9, -2.9],
  '57': [49.1, 6.9],   '58': [47.1, 3.5],   '59': [50.6, 3.1],   '60': [49.4, 2.4],
  '61': [48.6, 0.1],   '62': [50.5, 2.6],   '63': [45.7, 3.1],   '64': [43.3, -0.4],
  '65': [43.1, 0.1],   '66': [42.7, 2.8],   '67': [48.6, 7.7],   '68': [47.8, 7.3],
  '69': [45.7, 4.8],   '70': [47.6, 6.2],   '71': [46.6, 4.5],   '72': [48.0, 0.2],
  '73': [45.5, 6.5],   '74': [46.0, 6.4],   '75': [48.87, 2.33], '76': [49.7, 1.1],
  '77': [48.7, 3.0],   '78': [48.8, 1.8],   '79': [46.6, -0.3],  '80': [49.9, 2.3],
  '81': [43.9, 2.1],   '82': [44.1, 1.4],   '83': [43.5, 6.2],   '84': [44.0, 5.2],
  '85': [46.7, -1.3],  '86': [46.6, 0.4],   '87': [45.8, 1.3],   '88': [48.2, 6.6],
  '89': [47.8, 3.6],   '90': [47.6, 7.0],   '91': [48.6, 2.2],   '92': [48.85, 2.2],
  '93': [48.9, 2.5],   '94': [48.78, 2.45], '95': [49.1, 2.1],
  // DOM-TOM
  '971': [16.2, -61.5], '972': [14.7, -61.0], '973': [4.0, -53.0],
  '974': [-21.1, 55.5], '976': [-12.8, 45.1],
};

function getCoordsFromPostalCode(postalCode: string): [number, number] | null {
  if (!postalCode || postalCode.length < 2) return null;
  const cp = postalCode.replace(/\s/g, '');

  // DOM-TOM (3 chiffres)
  const dom = cp.substring(0, 3);
  if (DEPT_COORDS[dom]) return DEPT_COORDS[dom];

  // Métropole (2 chiffres)
  const dept = cp.substring(0, 2);
  if (DEPT_COORDS[dept]) return DEPT_COORDS[dept];

  return null;
}

// Jitter léger pour éviter la superposition des marqueurs du même département
function jitter(val: number, seed: string, scale: number): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return val + ((h % 200) - 100) / 100 * scale;
}

export async function GET(_req: NextRequest) {
  if (!BACKOFFICE_URL) {
    return NextResponse.json({ error: 'Configuration manquante.' }, { status: 503 });
  }

  const upstream = await fetch(
    `${BACKOFFICE_URL}/api/v1/scoring-search/map-data`,
    { next: { revalidate: 3600 } },
  );

  if (!upstream.ok) {
    return NextResponse.json({ error: 'Erreur récupération données.' }, { status: upstream.status });
  }

  const { results: movers } = (await upstream.json()) as { results: MoverRaw[] };

  const withCoords: MoverWithCoords[] = [];
  for (const m of movers) {
    const base = getCoordsFromPostalCode(m.postalCode);
    if (!base) continue;
    // Jitter basé sur l'ID pour disperser les points du même département
    withCoords.push({
      ...m,
      lat: jitter(base[0], m.id, 0.25),
      lng: jitter(base[1], m.id + 'lng', 0.35),
    });
  }

  return NextResponse.json(
    { results: withCoords },
    { headers: { 'Cache-Control': 'public, max-age=3600, stale-while-revalidate=7200' } },
  );
}
