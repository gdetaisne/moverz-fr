import { getBlogPostsMeta } from '@/lib/blog';
import { generateInternalLinkSuggestions, identifyLinkingClusters, analyzeLinkingStats } from '@/lib/admin/internal-linking';

export default function AdminLinkingPage() {
  const articles = getBlogPostsMeta();
  const suggestions = generateInternalLinkSuggestions(articles, 5);
  const clusters = identifyLinkingClusters(articles);
  const stats = analyzeLinkingStats(articles, suggestions);
  
  const topSuggestions = suggestions.slice(0, 15);
  const topClusters = clusters.slice(0, 5);
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">🔗 Internal Linking</h1>
        <p className="text-gray-600 mt-1">Intelligence de maillage interne et suggestions automatiques</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600">Articles Total</div>
          <div className="text-3xl font-bold text-blue-600 mt-2">{stats.totalArticles}</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600">Suggestions</div>
          <div className="text-3xl font-bold text-purple-600 mt-2">{suggestions.length}</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600">Moy. Liens/Article</div>
          <div className="text-3xl font-bold text-green-600 mt-2">{stats.avgLinksPerArticle}</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600">Articles Orphelins</div>
          <div className="text-3xl font-bold text-orange-600 mt-2">{stats.orphanArticles.length}</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">💡 Top Suggestions de Liens</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Source</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">→ Cible</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ancre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Score</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topSuggestions.map((suggestion) => (
                <tr key={suggestion.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                    {suggestion.sourceArticle.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                    {suggestion.targetArticle.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-600 font-medium">
                    {suggestion.anchorText}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      suggestion.linkType === 'pillar' ? 'bg-purple-100 text-purple-800' :
                      suggestion.linkType === 'geographic' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {suggestion.linkType}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="text-sm font-bold text-gray-900">{suggestion.relevanceScore}</div>
                      <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${suggestion.relevanceScore}%` }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🌳 Clusters de Contenu</h2>
        <div className="space-y-4">
          {topClusters.map((cluster) => (
            <div key={cluster.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900">{cluster.name}</h3>
                <span className="text-sm font-medium text-gray-600">
                  {cluster.totalArticles} articles
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <strong>Pilier:</strong> /blog/{cluster.pillarArticle.slug}/
              </div>
              <div className="flex flex-wrap gap-2">
                {cluster.supportingArticles.slice(0, 5).map((article) => (
                  <span key={article.slug} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                    {article.title.slice(0, 30)}...
                  </span>
                ))}
                {cluster.supportingArticles.length > 5 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    +{cluster.supportingArticles.length - 5} autres
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
