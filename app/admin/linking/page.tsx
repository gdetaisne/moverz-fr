import { getBlogPostsMeta } from '@/lib/blog';
import { generateInternalLinkSuggestions, identifyLinkingClusters, analyzeLinkingStats } from '@/lib/admin/internal-linking';
import { LinkIcon, LightbulbIcon, TrophyIcon } from '@/components/admin/Icons';

export default function AdminLinkingPage() {
  const articles = getBlogPostsMeta();
  const suggestions = generateInternalLinkSuggestions(articles, 5);
  const clusters = identifyLinkingClusters(articles);
  const stats = analyzeLinkingStats(articles, suggestions);
  
  const topSuggestions = suggestions.slice(0, 15);
  const topClusters = clusters.slice(0, 5);
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-800 text-v4-text flex items-center gap-3">
          <LinkIcon className="w-8 h-8 text-accent" />
          Internal Linking
        </h1>
        <p className="font-sans text-v4-text-secondary mt-2">Intelligence de maillage interne et suggestions automatiques</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-6">
          <div className="font-sans text-sm font-600 text-v4-text-secondary mb-2">Articles Total</div>
          <div className="font-heading text-4xl font-800 text-accent mt-2">{stats.totalArticles}</div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-6">
          <div className="font-sans text-sm font-600 text-v4-text-secondary mb-2">Suggestions</div>
          <div className="font-heading text-4xl font-800 text-purple-600 mt-2">{suggestions.length}</div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-6">
          <div className="font-sans text-sm font-600 text-v4-text-secondary mb-2">Moy. Liens/Article</div>
          <div className="font-heading text-4xl font-800 text-green-600 mt-2">{stats.avgLinksPerArticle}</div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-6">
          <div className="font-sans text-sm font-600 text-v4-text-secondary mb-2">Articles Orphelins</div>
          <div className="font-heading text-4xl font-800 text-orange-600 mt-2">{stats.orphanArticles.length}</div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border overflow-hidden">
        <div className="px-8 py-6 border-b border-v4-border-light">
          <h2 className="font-heading text-xl font-700 text-v4-text flex items-center gap-2">
            <LightbulbIcon className="w-5 h-5 text-accent" />
            Top Suggestions de Liens
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-v4-border-light">
            <thead className="bg-v4-bg">
              <tr>
                <th className="px-8 py-4 text-left font-sans text-xs font-600 text-v4-text-secondary uppercase tracking-wider">Source</th>
                <th className="px-8 py-4 text-left font-sans text-xs font-600 text-v4-text-secondary uppercase tracking-wider">Cible</th>
                <th className="px-8 py-4 text-left font-sans text-xs font-600 text-v4-text-secondary uppercase tracking-wider">Ancre</th>
                <th className="px-8 py-4 text-left font-sans text-xs font-600 text-v4-text-secondary uppercase tracking-wider">Type</th>
                <th className="px-8 py-4 text-left font-sans text-xs font-600 text-v4-text-secondary uppercase tracking-wider">Score</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-v4-border-light">
              {topSuggestions.map((suggestion) => (
                <tr key={suggestion.id} className="hover:bg-accent/5 transition-colors duration-200">
                  <td className="px-8 py-4 font-sans text-sm text-v4-text max-w-xs truncate">
                    {suggestion.sourceArticle.title}
                  </td>
                  <td className="px-8 py-4 font-sans text-sm text-v4-text max-w-xs truncate">
                    {suggestion.targetArticle.title}
                  </td>
                  <td className="px-8 py-4 font-sans text-sm text-accent font-600">
                    {suggestion.anchorText}
                  </td>
                  <td className="px-8 py-4">
                    <span className={`px-3 py-1 font-sans text-xs font-600 rounded-full ${
                      suggestion.linkType === 'pillar' ? 'bg-purple-100 text-purple-800' :
                      suggestion.linkType === 'geographic' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {suggestion.linkType}
                    </span>
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-2">
                      <div className="font-sans text-sm font-700 text-v4-text">{suggestion.relevanceScore}</div>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-accent to-accent-light h-2 rounded-full transition-all duration-300"
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

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-8">
        <h2 className="font-heading text-xl font-700 text-v4-text mb-6 flex items-center gap-2">
          <TrophyIcon className="w-6 h-6 text-accent" />
          Clusters de Contenu
        </h2>
        <div className="space-y-4">
          {topClusters.map((cluster) => (
            <div key={cluster.id} className="border border-v4-border rounded-xl p-6 bg-gradient-to-br from-white to-accent/5 hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-heading font-700 text-v4-text">{cluster.name}</h3>
                <span className="font-sans text-sm font-600 text-v4-text-secondary px-3 py-1 bg-white rounded-full border border-v4-border">
                  {cluster.totalArticles} articles
                </span>
              </div>
              <div className="font-sans text-sm text-v4-text-secondary mb-3">
                <strong className="font-600">Pilier:</strong> /blog/{cluster.pillarArticle.slug}/
              </div>
              <div className="flex flex-wrap gap-2">
                {cluster.supportingArticles.slice(0, 5).map((article) => (
                  <span key={article.slug} className="px-3 py-1.5 bg-accent/10 text-accent font-sans text-xs font-600 rounded-lg">
                    {article.title.slice(0, 30)}...
                  </span>
                ))}
                {cluster.supportingArticles.length > 5 && (
                  <span className="px-3 py-1.5 bg-gray-100 text-v4-text-muted font-sans text-xs font-600 rounded-lg">
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
