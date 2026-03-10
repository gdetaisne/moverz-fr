import { getBlogPostsMeta } from '@/lib/blog';

export default function AdminBlogPage() {
  const articles = getBlogPostsMeta();
  
  const totalArticles = articles.length;
  const avgWordCount = 800;
  const publishedThisMonth = articles.filter(a => {
    const publishDate = new Date(a.publishedAt);
    const now = new Date();
    return publishDate.getMonth() === now.getMonth() && publishDate.getFullYear() === now.getFullYear();
  }).length;
  
  const recentArticles = articles.slice(0, 10);
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">📝 Blog Dashboard</h1>
        <p className="text-gray-600 mt-1">Monitoring et analytics du contenu Moverz</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600">Total Articles</div>
          <div className="text-3xl font-bold text-blue-600 mt-2">{totalArticles}</div>
          <div className="text-xs text-gray-500 mt-1">Publiés</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600">Ce Mois</div>
          <div className="text-3xl font-bold text-green-600 mt-2">{publishedThisMonth}</div>
          <div className="text-xs text-gray-500 mt-1">Nouveaux articles</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600">Mots Moy.</div>
          <div className="text-3xl font-bold text-purple-600 mt-2">{avgWordCount}</div>
          <div className="text-xs text-gray-500 mt-1">Par article</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm font-medium text-gray-600">GSC Data</div>
          <div className="text-3xl font-bold text-orange-600 mt-2">-</div>
          <div className="text-xs text-gray-500 mt-1">En attente sync</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Articles Récents</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Titre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Catégorie
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentArticles.map((article) => (
                <tr key={article.slug} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{article.title}</div>
                    <div className="text-xs text-gray-500">/blog/{article.slug}/</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {article.category || '-'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(article.publishedAt).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Publié
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          💡 <strong>Prochaine étape:</strong> Synchroniser les données Google Search Console pour obtenir les métriques de trafic (clicks, impressions, CTR, position moyenne).
        </p>
      </div>
    </div>
  );
}
