import { getBlogPostsMeta } from '@/lib/blog';
import { BlogIcon, CheckCircleIcon, ChartIcon, LightbulbIcon } from '@/components/admin/Icons';

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
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-800 text-v4-text flex items-center gap-3">
          <BlogIcon className="w-8 h-8 text-accent" />
          Blog Dashboard
        </h1>
        <p className="font-sans text-v4-text-secondary mt-2">Monitoring et analytics du contenu Moverz</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-6">
          <div className="font-sans text-sm font-600 text-v4-text-secondary mb-2">Total Articles</div>
          <div className="font-heading text-4xl font-800 text-accent mt-2">{totalArticles}</div>
          <div className="font-sans text-xs text-v4-text-muted mt-2">Publiés</div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-6">
          <div className="font-sans text-sm font-600 text-v4-text-secondary mb-2">Ce Mois</div>
          <div className="font-heading text-4xl font-800 text-green-600 mt-2">{publishedThisMonth}</div>
          <div className="font-sans text-xs text-v4-text-muted mt-2">Nouveaux articles</div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-6">
          <div className="font-sans text-sm font-600 text-v4-text-secondary mb-2">Mots Moy.</div>
          <div className="font-heading text-4xl font-800 text-purple-600 mt-2">{avgWordCount}</div>
          <div className="font-sans text-xs text-v4-text-muted mt-2">Par article</div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-6">
          <div className="font-sans text-sm font-600 text-v4-text-secondary mb-2">GSC Data</div>
          <div className="font-heading text-4xl font-800 text-orange-600 mt-2">-</div>
          <div className="font-sans text-xs text-v4-text-muted mt-2">En attente sync</div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border overflow-hidden">
        <div className="px-8 py-6 border-b border-v4-border-light">
          <h2 className="font-heading text-xl font-700 text-v4-text">Articles Récents</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-v4-border-light">
            <thead className="bg-v4-bg">
              <tr>
                <th className="px-8 py-4 text-left font-sans text-xs font-600 text-v4-text-secondary uppercase tracking-wider">
                  Titre
                </th>
                <th className="px-8 py-4 text-left font-sans text-xs font-600 text-v4-text-secondary uppercase tracking-wider">
                  Catégorie
                </th>
                <th className="px-8 py-4 text-left font-sans text-xs font-600 text-v4-text-secondary uppercase tracking-wider">
                  Date
                </th>
                <th className="px-8 py-4 text-left font-sans text-xs font-600 text-v4-text-secondary uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-v4-border-light">
              {recentArticles.map((article) => (
                <tr key={article.slug} className="hover:bg-accent/5 transition-colors duration-200">
                  <td className="px-8 py-4">
                    <div className="font-sans text-sm font-600 text-v4-text">{article.title}</div>
                    <div className="font-sans text-xs text-v4-text-muted mt-1">/blog/{article.slug}/</div>
                  </td>
                  <td className="px-8 py-4 font-sans text-sm text-v4-text-secondary">
                    {article.category || '-'}
                  </td>
                  <td className="px-8 py-4 font-sans text-sm text-v4-text-secondary">
                    {new Date(article.publishedAt).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="px-8 py-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 font-sans text-xs font-600 rounded-full bg-green-100 text-green-700">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                      Publié
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <LightbulbIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="font-sans text-sm text-blue-900 leading-relaxed">
            <strong className="font-600">Prochaine étape:</strong> Synchroniser les données Google Search Console pour obtenir les métriques de trafic (clicks, impressions, CTR, position moyenne).
          </p>
        </div>
      </div>
    </div>
  );
}
