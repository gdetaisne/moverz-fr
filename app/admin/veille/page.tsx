"use client";

import { useState, useEffect } from 'react';
import { SearchIcon, PlayIcon, RefreshIcon, CheckCircleIcon } from "@/components/admin/Icons";

interface VeilleData {
  totalBlogs?: number;
  totalArticles?: number;
  globalAnalysis?: {
    avgWordCount: number;
    topThemes: Array<{ theme: string; count: number }>;
    topCities: Array<{ city: string; count: number }>;
  };
}

export default function AdminVeillePage() {
  const [data, setData] = useState<VeilleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [scraping, setScraping] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/scraping/status');
      const result = await response.json();
      
      if (result.hasData) {
        const dataResponse = await fetch('/data/scraped-articles.json');
        const veilleData = await dataResponse.json();
        setData(veilleData);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const startScraping = async () => {
    try {
      setScraping(true);
      setMessage("");
      
      const response = await fetch('/api/admin/scraping/start', {
        method: 'POST',
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setMessage("Scraping lancé ! Cela prendra 30-60 minutes. Revenez plus tard.");
      } else {
        setMessage("Erreur : " + result.error);
      }
    } catch (error) {
      setMessage("Erreur de connexion au serveur");
    } finally {
      setScraping(false);
    }
  };
  
  const hasData = data?.totalArticles && data.totalArticles > 0;
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <RefreshIcon className="w-8 h-8 text-accent animate-spin" />
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-800 text-v4-text flex items-center gap-3">
            <SearchIcon className="w-8 h-8 text-accent" />
            Veille Concurrentielle
          </h1>
          <p className="font-sans text-v4-text-secondary mt-2">Analyse de la concurrence et opportunités SEO</p>
        </div>
        <button
          onClick={loadData}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-v4-border
                   font-sans text-sm font-600 text-v4-text
                   hover:border-accent hover:bg-accent/5 transition-all duration-300"
        >
          <RefreshIcon className="w-4 h-4" />
          Rafraîchir
        </button>
      </div>

      {!hasData ? (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-amber-100 rounded-xl">
              <SearchIcon className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-700 text-amber-900 mb-2">Aucune donnée scrapée</h3>
              <p className="font-sans text-amber-800 leading-relaxed">
                Lancez le scraping des 50 blogs concurrents pour démarrer l'analyse.
                Durée estimée : 30-60 minutes.
              </p>
            </div>
          </div>
          
          {message && (
            <div className="mb-4 p-4 bg-white rounded-xl border border-amber-200">
              <p className="font-sans text-sm text-amber-800">{message}</p>
            </div>
          )}
          
          <button
            onClick={startScraping}
            disabled={scraping}
            className="flex items-center gap-2 bg-gradient-to-r from-accent to-accent-light text-white 
                     px-6 py-3 rounded-xl font-sans font-600 shadow-glow-turquoise
                     hover:shadow-glow-turquoise-lg hover:-translate-y-0.5 
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                     transition-all duration-300"
          >
            <PlayIcon className="w-5 h-5" />
            {scraping ? "Lancement..." : "Lancer le scraping"}
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-6">
              <div className="font-sans text-sm font-600 text-v4-text-secondary mb-2">Blogs Scrapés</div>
              <div className="font-heading text-4xl font-800 text-accent mt-2">{data.totalBlogs || 0}</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-6">
              <div className="font-sans text-sm font-600 text-v4-text-secondary mb-2">Articles Analysés</div>
              <div className="font-heading text-4xl font-800 text-purple-600 mt-2">{data.totalArticles || 0}</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-6">
              <div className="font-sans text-sm font-600 text-v4-text-secondary mb-2">Mots Moy.</div>
              <div className="font-heading text-4xl font-800 text-green-600 mt-2">
                {data.globalAnalysis ? Math.round(data.globalAnalysis.avgWordCount) : 0}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-8">
              <h2 className="font-heading text-xl font-700 text-v4-text mb-6 flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-accent" />
                Top Thèmes
              </h2>
              {data.globalAnalysis?.topThemes ? (
                <div className="space-y-3">
                  {data.globalAnalysis.topThemes.slice(0, 5).map((theme, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-v4-border-light last:border-0">
                      <span className="font-sans text-sm font-600 text-v4-text">{theme.theme}</span>
                      <span className="font-sans text-sm text-v4-text-muted">{theme.count} articles</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-sans text-v4-text-muted">Aucune donnée</p>
              )}
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-8">
              <h2 className="font-heading text-xl font-700 text-v4-text mb-6 flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-accent" />
                Top Villes
              </h2>
              {data.globalAnalysis?.topCities ? (
                <div className="space-y-3">
                  {data.globalAnalysis.topCities.slice(0, 5).map((city, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-v4-border-light last:border-0">
                      <span className="font-sans text-sm font-600 text-v4-text">{city.city}</span>
                      <span className="font-sans text-sm text-v4-text-muted">{city.count} articles</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-sans text-v4-text-muted">Aucune donnée</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
