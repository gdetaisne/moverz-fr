import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

interface VeilleData {
  totalBlogs?: number;
  totalArticles?: number;
  globalAnalysis?: {
    avgWordCount: number;
    topThemes: Array<{ theme: string; count: number }>;
    topCities: Array<{ city: string; count: number }>;
  };
}

function loadVeilleData(): VeilleData {
  try {
    const dataPath = join(process.cwd(), 'data', 'scraped-articles.json');
    if (!existsSync(dataPath)) {
      return {};
    }
    return JSON.parse(readFileSync(dataPath, 'utf-8'));
  } catch {
    return {};
  }
}

export default function AdminVeillePage() {
  const data = loadVeilleData();
  
  const hasData = data.totalArticles && data.totalArticles > 0;
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">🔍 Veille Concurrentielle</h1>
        <p className="text-gray-600 mt-1">Analyse de la concurrence et opportunités SEO</p>
      </div>

      {!hasData ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-yellow-900 mb-2">⚠️ Aucune donnée scrapée</h3>
          <p className="text-yellow-800 mb-4">
            Lancez le scraping des 50 blogs concurrents pour démarrer l'analyse.
          </p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded font-medium hover:bg-yellow-700">
            Lancer le scraping
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-sm font-medium text-gray-600">Blogs Scrapés</div>
              <div className="text-3xl font-bold text-blue-600 mt-2">{data.totalBlogs || 0}</div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-sm font-medium text-gray-600">Articles Analysés</div>
              <div className="text-3xl font-bold text-purple-600 mt-2">{data.totalArticles || 0}</div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-sm font-medium text-gray-600">Mots Moy.</div>
              <div className="text-3xl font-bold text-green-600 mt-2">
                {data.globalAnalysis ? Math.round(data.globalAnalysis.avgWordCount) : 0}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">🏆 Top Thèmes</h2>
              {data.globalAnalysis?.topThemes ? (
                <div className="space-y-2">
                  {data.globalAnalysis.topThemes.slice(0, 5).map((theme, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{theme.theme}</span>
                      <span className="text-sm text-gray-500">{theme.count} articles</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Aucune donnée</p>
              )}
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">🌍 Top Villes</h2>
              {data.globalAnalysis?.topCities ? (
                <div className="space-y-2">
                  {data.globalAnalysis.topCities.slice(0, 5).map((city, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{city.city}</span>
                      <span className="text-sm text-gray-500">{city.count} articles</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Aucune donnée</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
