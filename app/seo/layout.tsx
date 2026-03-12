import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Dashboard — moverz.fr",
  robots: { index: false, follow: false, noarchive: true },
};

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  const nav = [
    { href: "/seo/", label: "Vue d'ensemble" },
    { href: "/seo/gsc/", label: "GSC" },
    { href: "/seo/conversion/", label: "Conversion" },
    { href: "/seo/pagespeed/", label: "PageSpeed / CWV" },
    { href: "/seo/backlinks/", label: "Backlinks" },
    { href: "/seo/bing/", label: "Bing / LLM" },
    { href: "/seo/todo/", label: "Plan d'action" },
  ];

  return (
    <div className="min-h-screen flex" style={{ background: "#FAFAFA" }}>
      {/* Sidebar */}
      <aside className="w-56 flex-shrink-0 bg-white border-r border-v4-border flex flex-col py-6 px-4 gap-1 sticky top-0 h-screen">
        <a href="/seo/" className="font-heading font-800 text-v4-text text-lg mb-6 px-2 block">
          SEO moverz.fr
        </a>
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl font-sans text-sm font-500 text-v4-text-secondary hover:bg-accent/10 hover:text-accent transition-colors"
          >
            {item.label}
          </a>
        ))}
        <div className="mt-auto pt-4 border-t border-v4-border-light">
          <p className="font-sans text-xs text-v4-text-muted px-2">
            Baseline 11/03/2026<br />
            85 clics/sem · CTR 0.7%<br />
            Pos 29.4
          </p>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0 p-8">
        {children}
      </main>
    </div>
  );
}
