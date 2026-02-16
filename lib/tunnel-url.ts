/**
 * Centralise la construction des URLs vers le tunnel (devis.moverz.fr).
 * Ajoute automatiquement les UTM params pour le tracking analytics.
 *
 * Usage:
 *   buildTunnelUrl({ from: "/blog-article", citySlug: "marseille" })
 *   → https://devis.moverz.fr/devis-gratuits-v3?source=moverz.fr&from=%2Fblog-article&city_slug=marseille&utm_source=moverz_website&utm_medium=referral&utm_content=%2Fblog-article
 */

const TUNNEL_BASE = "https://devis.moverz.fr/devis-gratuits-v3";

interface TunnelUrlParams {
  /** Page d'origine (ex: "/blog-article", "header", "exit-intent") */
  from?: string;
  /** Source marketing (défaut: "moverz.fr") */
  source?: string;
  /** Slug de ville (ex: "marseille") */
  citySlug?: string;
  /** Nombre de devis (ex: "3-5") */
  devisRange?: string;
  /** Volume estimé (calculateur) */
  estimatedVolume?: number;
  /** Params supplémentaires libres */
  extra?: Record<string, string>;
}

export function buildTunnelUrl(params: TunnelUrlParams = {}): string {
  const url = new URL(TUNNEL_BASE);

  const source = params.source || "moverz.fr";
  const from = params.from || "";

  // Params existants (compatibilité)
  url.searchParams.set("source", source);
  if (from) url.searchParams.set("from", from);
  if (params.citySlug) url.searchParams.set("city_slug", params.citySlug);
  if (params.devisRange) url.searchParams.set("devis_range", params.devisRange);
  if (params.estimatedVolume != null) {
    url.searchParams.set("estimated_volume", String(params.estimatedVolume));
  }

  // UTM params (nouveaux — pour analytics Neon)
  url.searchParams.set("utm_source", "moverz_website");
  url.searchParams.set("utm_medium", "referral");
  if (from) url.searchParams.set("utm_content", from);

  // Extra params
  if (params.extra) {
    for (const [key, value] of Object.entries(params.extra)) {
      url.searchParams.set(key, value);
    }
  }

  return url.toString();
}
