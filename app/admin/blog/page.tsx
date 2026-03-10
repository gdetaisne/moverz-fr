"use client";

import { useState, useEffect } from 'react';
import { getBlogPostsMeta } from '@/lib/blog';
import { BlogIcon, CheckCircleIcon, ChartIcon, LightbulbIcon, RefreshIcon } from '@/components/admin/Icons';

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
  
  const [gscData, setGscData] = useState<any>(null);
  const [gscLoading, setGscLoading] = useState(false);
  const [gscMessage, setGscMessage] = useState("");

  useEffect(() => {
    loadGSCStatus();
  }, []);

  const loadGSCStatus = async () => {
    try {
      const response = await fetch('/api/admin/gsc/status');
      const result = await response.json();
      if (result.hasData) {
        setGscData(result);
      }
    } catch (error) {
      console.error('Error loading GSC status:', error);
    }
  };

  const syncGSC = async () => {
    try {
      setGscLoading(true);
      setGscMessage("");
      
      const response = await fetch('/api/admin/gsc/sync', {
        method: 'POST',
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setGscMessage("✅ Synchronisation réussie !");
        await loadGSCStatus();
      } else {
        setGscMessage("❌ Erreur : " + result.details);
      }
    } catch (error) {
      setGscMessage("❌ Erreur de connexion au serveur");
    } finally {
      setGscLoading(false);
    }
  };
  
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-800 text-v4-text flex items-center gap-3">
            <BlogIcon className="w-8 h-8 text-accent" />
            Blog Dashboard
          </h1>
          <p className="font-sans text-v4-text-secondary mt-2">Monitoring et analytics du contenu Moverz</p>
        </div>
        {gscData?.hasData && (
          <button
            onClick={syncGSC}
            disabled={gscLoading}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-v4-border
                     font-sans text-sm font-600 text-v4-text
                     hover:border-accent hover:bg-accent/5 
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-300"
          >
            <RefreshIcon className={`w-4 h-4 ${gscLoading ? 'animate-spin' : ''}`} />
            {gscLoading ? "Sync..." : "Sync GSC"}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <div className="font-sans text-sm font-600 text-v4-text-secondary mb-2">GSC Clicks (28j)</div>
          <div className="font-heading text-4xl font-800 text-orange-600 mt-2">
            {gscData?.totals?.clicks || '-'}
          </div>
          <div className="font-sans text-xs text-v4-text-muted mt-2">
            {gscData?.hasData ? `CTR: ${(gscData.totals.ctr * 100).toFixed(1)}%` : 'En attente sync'}
          </div>
        </div>
      </div>

      {gscMessage && (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
          <p className="font-sans text-sm text-blue-900">{gscMessage}</p>
        </div>
      )}

      {!gscData?.hasData && (
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-xl">
              <ChartIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-700 text-blue-900 mb-2">Données GSC non synchronisées</h3>
              <p className="font-sans text-blue-800 leading-relaxed">
                Lancez la synchronisation avec Google Search Console pour voir les métriques de trafic (clicks, impressions, CTR, position moyenne).
              </p>
            </div>
          </div>
          
          <button
            onClick={syncGSC}
            disabled={gscLoading}
            className="flex items-center gap-2 bg-gradient-to-r from-accent to-accent-light text-white 
                     px-6 py-3 rounded-xl font-sans font-600 shadow-glow-turquoise
                     hover:shadow-glow-turquoise-lg hover:-translate-y-0.5 
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                     transition-all duration-300"
          >
            <RefreshIcon className={`w-5 h-5 ${gscLoading ? 'animate-spin' : ''}`} />
            {gscLoading ? "Synchronisation..." : "Synchroniser GSC"}
          </button>
        </div>
      )}

      {gscData?.hasData && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-6">
            <div className="font-sans text-sm font-600 text-v4-text-secondary mb-2">Clicks (28j)</div>
            <div className="font-heading text-3xl font-800 text-accent">{gscData.totals.clicks.toLocaleString('fr-FR')}</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-6">
            <div className="font-sans text-sm font-600 text-v4-text-secondary mb-2">Impressions (28j)</div>
            <div className="font-heading text-3xl font-800 text-purple-600">{gscData.totals.impressions.toLocaleString('fr-FR')}</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-6">
            <div className="font-sans text-sm font-600 text-v4-text-secondary mb-2">Position Moy.</div>
            <div className="font-heading text-3xl font-800 text-blue-600">{gscData.totals.position.toFixed(1)}</div>
          </div>
        </div>
      )}

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

      {gscData?.hasData && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-sans text-sm text-green-900 leading-relaxed">
                <strong className="font-600">Données GSC synchronisées</strong>
              </p>
              <p className="font-sans text-xs text-green-700 mt-1">
                Dernière sync : {new Date(gscData.lastSync).toLocaleString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
