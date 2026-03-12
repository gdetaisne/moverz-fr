import {
  getConversionByCountry,
  getConversionBySource,
  getConversionByLandingPage,
  type ConversionRow,
} from "@/lib/seo/ga4";

const PERIODS = [
  { label: "7 jours", value: 7 },
  { label: "28 jours", value: 28 },
  { label: "90 jours", value: 90 },
];

function fmtN(n: number) {
  return n.toLocaleString("fr-FR");
}

function fmtRate(r: number) {
  return r.toFixed(1) + "%";
}

function ConversionTable({
  rows,
  dimensionLabel,
}: {
  rows: ConversionRow[];
  dimensionLabel: string;
}) {
  const maxSessions = rows[0]?.sessions ?? 1;

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
            <th className="px-4 py-3 w-8">#</th>
            <th className="px-4 py-3">{dimensionLabel}</th>
            <th className="px-4 py-3 text-right">Sessions</th>
            <th className="px-4 py-3 text-right">Clics devis</th>
            <th className="px-4 py-3 text-right">Taux conv.</th>
            <th className="px-4 py-3 w-32">Barre</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, i) => (
            <tr key={row.dimension} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2.5 text-gray-400 tabular-nums">{i + 1}</td>
              <td className="px-4 py-2.5 font-medium text-gray-800 max-w-xs truncate">
                {row.dimension || "(not set)"}
              </td>
              <td className="px-4 py-2.5 text-right tabular-nums text-gray-700">
                {fmtN(row.sessions)}
              </td>
              <td className="px-4 py-2.5 text-right tabular-nums">
                <span
                  className={
                    row.leadClicks > 0
                      ? "text-emerald-700 font-semibold"
                      : "text-gray-400"
                  }
                >
                  {fmtN(row.leadClicks)}
                </span>
              </td>
              <td className="px-4 py-2.5 text-right tabular-nums">
                <span
                  className={
                    row.conversionRate >= 5
                      ? "text-emerald-700 font-bold"
                      : row.conversionRate >= 1
                      ? "text-blue-700"
                      : "text-gray-400"
                  }
                >
                  {fmtRate(row.conversionRate)}
                </span>
              </td>
              <td className="px-4 py-2.5">
                <div className="h-2 rounded-full bg-gray-100 w-full overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-blue-500"
                    style={{
                      width: `${Math.round((row.sessions / maxSessions) * 100)}%`,
                    }}
                  />
                </div>
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td
                colSpan={6}
                className="px-4 py-8 text-center text-sm text-gray-400"
              >
                Aucune donnée pour cette période.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-base font-semibold text-gray-900 mb-3">{children}</h2>
  );
}

export default async function ConversionPage({
  searchParams,
}: {
  searchParams: Promise<{ days?: string }>;
}) {
  const { days: daysParam } = await searchParams;
  const days = Number(daysParam) || 28;

  let byCountry: ConversionRow[] = [];
  let bySource: ConversionRow[] = [];
  let byLandingPage: ConversionRow[] = [];
  let error: string | null = null;

  try {
    [byCountry, bySource, byLandingPage] = await Promise.all([
      getConversionByCountry(days),
      getConversionBySource(days),
      getConversionByLandingPage(days),
    ]);
  } catch (e) {
    error = e instanceof Error ? e.message : "Erreur inconnue";
  }

  const totalSessions = byCountry.reduce((s, r) => s + r.sessions, 0);
  const totalLeads = byCountry.reduce((s, r) => s + r.leadClicks, 0);
  const globalRate =
    totalSessions > 0 ? ((totalLeads / totalSessions) * 100).toFixed(2) : "—";

  return (
    <div className="max-w-5xl space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-heading text-2xl font-800 text-v4-text">
            Conversion
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Sessions GA4 × clics vers devis.moverz.fr (événement{" "}
            <code className="bg-gray-100 px-1 rounded font-mono text-xs">
              lead_click
            </code>
            )
          </p>
        </div>

        {/* Sélecteur période */}
        <div className="flex gap-1 rounded-lg border border-gray-200 p-1 bg-white">
          {PERIODS.map((p) => (
            <a
              key={p.value}
              href={`/seo/conversion/?days=${p.value}`}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                days === p.value
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {p.label}
            </a>
          ))}
        </div>
      </div>

      {/* Erreur */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 text-sm text-red-800">
          <strong>Erreur API GA4 :</strong> {error}
          <br />
          <span className="text-xs text-red-600 mt-1 block">
            Vérifier que le service account a le rôle &quot;Lecteur&quot; sur la propriété GA4
            et que <code className="bg-red-100 px-1 rounded font-mono">GA4_PROPERTY_ID</code> est correct.
          </span>
        </div>
      )}

      {/* KPI globaux */}
      {!error && (
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-gray-200 bg-white px-5 py-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Sessions</p>
            <p className="text-2xl font-bold tabular-nums text-gray-900">
              {fmtN(totalSessions)}
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white px-5 py-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Clics devis</p>
            <p className="text-2xl font-bold tabular-nums text-emerald-700">
              {fmtN(totalLeads)}
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white px-5 py-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Taux global</p>
            <p className="text-2xl font-bold tabular-nums text-blue-700">
              {globalRate}%
            </p>
          </div>
        </div>
      )}

      {/* Par pays */}
      {!error && (
        <section>
          <SectionTitle>Par pays</SectionTitle>
          <ConversionTable rows={byCountry} dimensionLabel="Pays" />
        </section>
      )}

      {/* Par source/medium */}
      {!error && (
        <section>
          <SectionTitle>Par source / medium</SectionTitle>
          <ConversionTable rows={bySource} dimensionLabel="Source / Medium" />
        </section>
      )}

      {/* Par page de landing */}
      {!error && (
        <section>
          <SectionTitle>Par page d&apos;entrée</SectionTitle>
          <ConversionTable rows={byLandingPage} dimensionLabel="Landing page" />
        </section>
      )}
    </div>
  );
}
