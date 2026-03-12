export default function PageSpeedPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="font-heading text-2xl font-800 text-v4-text">PageSpeed / Core Web Vitals</h1>
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 font-sans text-sm text-amber-800">
        <strong>À faire :</strong> coller les scores PageSpeed Insights (mobile + desktop) pour homepage, un article blog, une page ville.
      </div>
      <p className="font-sans text-v4-text-muted text-sm">Section à construire : LCP, INP, CLS, TTFB — valeurs prod vs cibles.</p>
    </div>
  );
}
