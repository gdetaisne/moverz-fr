/**
 * Centralise la construction des URLs vers le tunnel (devis.moverz.fr).
 * Ajoute automatiquement les UTM params pour le tracking analytics.
 */

const TUNNEL_BASE = "https://devis.moverz.fr/devis-gratuits-v3";

interface TunnelUrlParams {
  from?: string;
  source?: string;
  citySlug?: string;
  devisRange?: string;
  estimatedVolume?: number;
  extra?: Record<string, string>;
}

export function buildTunnelUrl(params: TunnelUrlParams = {}): string {
  const url = new URL(TUNNEL_BASE);
  const source = params.source || "moverz.fr";
  const from = params.from || "";

  url.searchParams.set("source", source);
  if (from) url.searchParams.set("from", from);
  if (params.citySlug) url.searchParams.set("city_slug", params.citySlug);
  if (params.devisRange) url.searchParams.set("devis_range", params.devisRange);
  if (params.estimatedVolume != null) {
    url.searchParams.set("estimated_volume", String(params.estimatedVolume));
  }

  // UTM params pour analytics
  url.searchParams.set("utm_source", "moverz_website");
  url.searchParams.set("utm_medium", "referral");
  if (from) url.searchParams.set("utm_content", from);

  if (params.extra) {
    for (const [key, value] of Object.entries(params.extra)) {
      url.searchParams.set(key, value);
    }
  }

  return url.toString();
}
