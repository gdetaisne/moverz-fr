import { getLatestPagespeedResults, getPagespeedSummary } from "@/lib/seo/db";
import { PagespeedTable } from "./PagespeedTable";

function KpiCard({
  label,
  value,
  sub,
  variant = "default",
}: {
  label: string;
  value: string | number;
  sub?: string;
  variant?: "default" | "danger" | "warning" | "success";
}) {
  const variantClass = {
    default: "text-v4-text",
    danger: "text-red-600",
    warning: "text-orange-500",
    success: "text-emerald-600",
  }[variant];

  return (
    <div className="bg-white border border-v4-border rounded-xl px-5 py-4">
      <p className="font-sans text-xs text-v4-text-muted font-600 uppercase tracking-wide mb-1">{label}</p>
      <p className={`font-heading text-3xl font-800 ${variantClass}`}>{value}</p>
      {sub && <p className="font-sans text-xs text-v4-text-muted mt-1">{sub}</p>}
    </div>
  );
}

export default async function PageSpeedPage() {
  const summary = await getPagespeedSummary().catch(() => null);
  const { checkedAt, results } = await getLatestPagespeedResults().catch(() => ({
    checkedAt: null,
    results: [],
  }));

  if (!summary || results.length === 0) {
    return (
      <div className="max-w-2xl space-y-4">
        <h1 className="font-heading text-2xl font-800 text-v4-text">PageSpeed / Health Check</h1>
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 font-sans text-sm text-amber-800">
          <strong>Aucune donnée en base.</strong> Lancer :{" "}
          <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono">
            node scripts/pagespeed-monitor.mjs --no-psi
          </code>
          <p className="mt-2 text-amber-700">
            Option sans PSI pour un premier test rapide (HTTP + sitemap uniquement, ~30s).{" "}
            Sans <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono">--no-psi</code> le script
            appelle aussi l'API PageSpeed Insights (scores Core Web Vitals).
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-4 font-sans text-sm text-blue-800">
          <strong>Prérequis :</strong> avoir lancé{" "}
          <code className="bg-blue-100 px-1.5 py-0.5 rounded font-mono">node scripts/gsc-monitor.mjs</code>{" "}
          au moins une fois (source des URLs à vérifier).
          <p className="mt-2">
            Variable optionnelle :{" "}
            <code className="bg-blue-100 px-1.5 py-0.5 rounded font-mono">PSI_API_KEY</code> — clé Google
            gratuite pour éviter les rate-limits PageSpeed Insights.
          </p>
        </div>
      </div>
    );
  }

  const syncDate = checkedAt
    ? checkedAt.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })
    : "—";

  const errorVariant =
    summary.critical > 0 ? "danger" : summary.errors > 0 ? "warning" : "success";

  return (
    <div className="max-w-5xl space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-800 text-v4-text">PageSpeed / Health Check</h1>
          <p className="font-sans text-sm text-v4-text-muted mt-1">
            {summary.total} pages GSC vérifiées — HTTP, présence sitemap, Core Web Vitals
          </p>
        </div>
        <span className="font-sans text-xs text-v4-text-muted bg-gray-100 px-3 py-1.5 rounded-full flex-shrink-0">
          Vérifié le {syncDate}
        </span>
      </div>

      {/* Alertes critiques */}
      {summary.critical > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 font-sans text-sm text-red-800">
          <strong>🚨 {summary.critical} page{summary.critical > 1 ? "s" : ""} critique{summary.critical > 1 ? "s" : ""}</strong>{" "}
          — erreur HTTP avec plus de 50 impressions/mois. Ces pages reçoivent du trafic GSC mais sont inaccessibles.
          <br />
          <span className="text-red-600 font-600 mt-1 block">
            Utiliser le filtre « Erreurs HTTP » pour les identifier.
          </span>
        </div>
      )}

      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <KpiCard label="Pages OK" value={summary.ok} sub={`sur ${summary.total}`} variant="success" />
        <KpiCard
          label="Erreurs HTTP"
          value={summary.errors}
          sub={`dont ${summary.critical} critiques`}
          variant={errorVariant}
        />
        <KpiCard label="Redirections" value={summary.redirects} sub="301/302" />
        <KpiCard
          label="Hors sitemap"
          value={summary.notInSitemap}
          sub="non recrawlées"
          variant={summary.notInSitemap > 10 ? "warning" : "default"}
        />
        <KpiCard
          label="Score mobile moy."
          value={summary.avgScoreMobile != null ? summary.avgScoreMobile : "—"}
          sub="PageSpeed Insights"
          variant={
            summary.avgScoreMobile == null
              ? "default"
              : summary.avgScoreMobile >= 90
              ? "success"
              : summary.avgScoreMobile >= 50
              ? "warning"
              : "danger"
          }
        />
      </div>

      {/* Légende scores */}
      <div className="flex flex-wrap gap-4 font-sans text-xs text-v4-text-muted">
        <span>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1" />
          Score ≥ 90 = Bon
        </span>
        <span>
          <span className="inline-block w-2 h-2 rounded-full bg-orange-400 mr-1" />
          50–89 = À améliorer
        </span>
        <span>
          <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1" />
          &lt; 50 = Mauvais
        </span>
        <span className="ml-4">LCP : &lt; 2.5s = Bon · 2.5–4s = Moyen · &gt; 4s = Mauvais</span>
      </div>

      {/* Tableau filtrable */}
      <PagespeedTable results={results} />

      <p className="font-sans text-xs text-v4-text-muted">
        Relancer :{" "}
        <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">
          node scripts/pagespeed-monitor.mjs
        </code>{" "}
        · Pour un check rapide (sans PSI) :{" "}
        <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">--no-psi</code>
      </p>
    </div>
  );
}
