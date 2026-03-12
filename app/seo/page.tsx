export default function SeoHomePage() {
  const sections = [
    { href: "/seo/gsc/", label: "GSC", desc: "Clics, impressions, CTR, positions — données Search Console" },
    { href: "/seo/pagespeed/", label: "PageSpeed / CWV", desc: "LCP, INP, CLS — Core Web Vitals en prod" },
    { href: "/seo/backlinks/", label: "Backlinks", desc: "Ahrefs / Semrush — profil de liens, DR, gap concurrents" },
    { href: "/seo/bing/", label: "Bing / LLM", desc: "Bing Webmaster Tools, IndexNow, visibilité Copilot/ChatGPT" },
    { href: "/seo/todo/", label: "Plan d'action", desc: "P0 / P1 / P2 — tâches en cours et complétées" },
  ];

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-800 text-v4-text">SEO Dashboard</h1>
        <p className="font-sans text-v4-text-secondary mt-1">
          Baseline 11/03/2026 — objectif ×2 en 60 jours (85 → 170 clics/sem)
        </p>
      </div>

      <div className="space-y-3">
        {sections.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="flex items-center gap-4 bg-white border border-v4-border rounded-xl px-5 py-4 hover:border-accent hover:bg-accent/5 transition-colors group"
          >
            <div className="flex-1 min-w-0">
              <p className="font-sans font-700 text-v4-text group-hover:text-accent transition-colors">{s.label}</p>
              <p className="font-sans text-sm text-v4-text-muted">{s.desc}</p>
            </div>
            <span className="font-sans text-xs text-v4-text-muted bg-gray-100 px-2 py-0.5 rounded-full">
              À configurer
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
