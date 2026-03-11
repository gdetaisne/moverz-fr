"use client";

import { useState } from "react";
import { MOVERZ_VOICE_SYSTEM_PROMPT, generateArticlePrompt } from "@/lib/admin/moverz-voice-prompt";
import { SparklesIcon, BlogIcon, CheckCircleIcon, LightbulbIcon, PlayIcon, ChartIcon } from "@/components/admin/Icons";

export default function AdminStudioPage() {
  const [query, setQuery] = useState("");
  const [wordCount, setWordCount] = useState(1500);
  const [city, setCity] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generatedArticle, setGeneratedArticle] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [savingDraft, setSavingDraft] = useState(false);
  const [publishResult, setPublishResult] = useState<{ success: boolean; message: string; url?: string } | null>(null);

  const handleGenerate = async () => {
    if (!query.trim()) {
      alert("Veuillez entrer une requête long-tail");
      return;
    }

    setGenerating(true);
    setGeneratedArticle("");
    setPublishResult(null);

    const fullPrompt = generateArticlePrompt(query, {
      targetWordCount: wordCount,
      targetCity: city || undefined,
    });

    setTimeout(() => {
      const mockArticle = `---
title: "${query} - Guide Complet 2026"
description: "Découvrez tout ce qu'il faut savoir sur ${query}. Guide expert avec prix, conseils et astuces pour réussir votre projet."
publishedAt: "${new Date().toISOString()}"
category: "conseils-demenagement"
---

# ${query} - Guide Complet 2026

Un déménagement, ça se prépare ! Et ${query}, c'est exactement le genre de question qu'on nous pose souvent chez Moverz...

[ARTICLE GÉNÉRÉ ICI - VERSION DÉMO]

Ce contenu serait normalement généré par un modèle LLM (GPT-4, Claude, etc.) en utilisant le prompt Moverz Voice.

## FAQ

### Question 1 ?
Réponse 1...

### Question 2 ?
Réponse 2...

---

**Prêt à déménager ?** [Obtenez votre devis gratuit chez Moverz](https://moverz.fr/devis/)
`;

      setGeneratedArticle(mockArticle);
      setGenerating(false);
    }, 2000);
  };

  const handlePublish = async () => {
    if (!generatedArticle) {
      alert("Aucun article à publier");
      return;
    }

    setPublishing(true);
    setPublishResult(null);

    try {
      const response = await fetch('/api/admin/articles/publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: generatedArticle }),
      });

      const data = await response.json();

      if (response.ok) {
        setPublishResult({
          success: true,
          message: `Article publié avec succès ! (${data.slug})`,
          url: data.url,
        });
      } else {
        setPublishResult({
          success: false,
          message: data.error || 'Erreur lors de la publication',
        });
      }
    } catch (error) {
      setPublishResult({
        success: false,
        message: 'Erreur réseau lors de la publication',
      });
    } finally {
      setPublishing(false);
    }
  };

  const handleSaveDraft = async () => {
    if (!generatedArticle) {
      alert("Aucun article à sauvegarder");
      return;
    }

    setSavingDraft(true);
    setPublishResult(null);

    try {
      const response = await fetch('/api/admin/articles/publish', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: generatedArticle }),
      });

      const data = await response.json();

      if (response.ok) {
        setPublishResult({
          success: true,
          message: `Brouillon sauvegardé avec succès ! (${data.slug})`,
        });
      } else {
        setPublishResult({
          success: false,
          message: data.error || 'Erreur lors de la sauvegarde',
        });
      }
    } catch (error) {
      setPublishResult({
        success: false,
        message: 'Erreur réseau lors de la sauvegarde',
      });
    } finally {
      setSavingDraft(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-3xl font-800 text-v4-text flex items-center gap-3">
          <SparklesIcon className="w-8 h-8 text-accent" />
          AI Content Studio
        </h1>
        <p className="font-sans text-v4-text-secondary mt-2">Génération d'articles SEO/E-E-A-T avec Moverz Voice</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-8">
            <h2 className="font-heading text-xl font-700 text-v4-text mb-6 flex items-center gap-2">
              <BlogIcon className="w-6 h-6 text-accent" />
              Nouvelle Génération
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block font-sans text-sm font-600 text-v4-text mb-3">
                  Requête Long-Tail *
                </label>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ex: prix déménagement 3 pièces Lyon"
                  className="w-full px-6 py-4 font-sans border border-v4-border rounded-xl 
                           focus:ring-2 focus:ring-accent focus:border-accent
                           transition-all duration-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-sm font-600 text-v4-text mb-3">
                    Nombre de mots cible
                  </label>
                  <input
                    type="number"
                    value={wordCount}
                    onChange={(e) => setWordCount(Number(e.target.value))}
                    className="w-full px-6 py-4 font-sans border border-v4-border rounded-xl 
                             focus:ring-2 focus:ring-accent focus:border-accent
                             transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-600 text-v4-text mb-3">
                    Ville (optionnel)
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ex: Lyon"
                    className="w-full px-6 py-4 font-sans border border-v4-border rounded-xl 
                             focus:ring-2 focus:ring-accent focus:border-accent
                             transition-all duration-300"
                  />
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={generating}
                className="w-full flex items-center justify-center gap-2
                         bg-gradient-to-r from-accent to-accent-light text-white 
                         py-4 rounded-xl font-sans font-600 shadow-glow-turquoise
                         hover:shadow-glow-turquoise-lg hover:-translate-y-0.5 
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                         transition-all duration-300"
              >
                <PlayIcon className="w-5 h-5" />
                {generating ? "Génération en cours..." : "Générer l'article"}
              </button>
            </div>
          </div>

          {generatedArticle && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-heading text-xl font-700 text-v4-text flex items-center gap-2">
                  <BlogIcon className="w-6 h-6 text-accent" />
                  Article Généré
                </h2>
                <div className="flex gap-3">
                  <button 
                    onClick={handlePublish}
                    disabled={publishing || savingDraft}
                    className="flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-xl font-sans font-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    <CheckCircleIcon className="w-4 h-4" />
                    {publishing ? "Publication..." : "Publier"}
                  </button>
                  <button 
                    onClick={handleSaveDraft}
                    disabled={publishing || savingDraft}
                    className="px-5 py-2.5 bg-gray-100 text-v4-text rounded-xl font-sans font-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {savingDraft ? "Sauvegarde..." : "Brouillon"}
                  </button>
                </div>
              </div>

              {publishResult && (
                <div className={`p-4 rounded-xl ${
                  publishResult.success 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-red-50 border border-red-200'
                }`}>
                  <p className={`font-sans text-sm ${
                    publishResult.success ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {publishResult.message}
                  </p>
                  {publishResult.url && (
                    <a 
                      href={publishResult.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm text-accent hover:text-accent-light mt-2 inline-block"
                    >
                      Voir l'article →
                    </a>
                  )}
                </div>
              )}

              <div className="bg-v4-bg rounded-xl p-6 max-h-96 overflow-y-auto border border-v4-border-light">
                <pre className="font-mono text-sm text-v4-text whitespace-pre-wrap">
                  {generatedArticle}
                </pre>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="font-sans text-xs font-600 text-green-800 mb-1">SEO Score</div>
                  <div className="font-heading text-3xl font-800 text-green-600">85/100</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="font-sans text-xs font-600 text-blue-800 mb-1">E-E-A-T Score</div>
                  <div className="font-heading text-3xl font-800 text-blue-600">78/100</div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                  <div className="font-sans text-xs font-600 text-purple-800 mb-1">Tone Score</div>
                  <div className="font-heading text-3xl font-800 text-purple-600">92/100</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-sm border border-purple-200 p-6">
            <h3 className="font-heading text-lg font-700 text-v4-text mb-3 flex items-center gap-2">
              <SparklesIcon className="w-5 h-5 text-purple-600" />
              Moverz Voice
            </h3>
            <p className="font-sans text-sm text-gray-700 leading-relaxed mb-4">
              Notre système utilise un prompt spécialement conçu pour générer du contenu avec le ton Moverz : authentique, personnel et SEO-optimisé.
            </p>
            <button
              onClick={() => setShowPrompt(!showPrompt)}
              className="font-sans text-sm text-accent font-600 hover:text-accent-light transition-colors duration-200"
            >
              {showPrompt ? "Masquer le prompt" : "Voir le prompt système →"}
            </button>
            
            {showPrompt && (
              <div className="mt-4 bg-white rounded-xl p-4 max-h-64 overflow-y-auto border border-v4-border">
                <pre className="font-mono text-xs text-v4-text-secondary whitespace-pre-wrap">
                  {MOVERZ_VOICE_SYSTEM_PROMPT}
                </pre>
              </div>
            )}
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-v4-border p-6">
            <h3 className="font-heading text-lg font-700 text-v4-text mb-4 flex items-center gap-2">
              <ChartIcon className="w-5 h-5 text-accent" />
              Statistiques
            </h3>
            <div className="space-y-3 font-sans text-sm">
              <div className="flex justify-between py-2 border-b border-v4-border-light">
                <span className="text-v4-text-secondary">Articles générés</span>
                <span className="font-700 text-v4-text">0</span>
              </div>
              <div className="flex justify-between py-2 border-b border-v4-border-light">
                <span className="text-v4-text-secondary">Ce mois</span>
                <span className="font-700 text-v4-text">0</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-v4-text-secondary">Publiés</span>
                <span className="font-700 text-green-600">0</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-6">
            <h4 className="font-heading text-sm font-700 text-amber-900 mb-3 flex items-center gap-2">
              <LightbulbIcon className="w-4 h-4 text-amber-600" />
              Conseils
            </h4>
            <ul className="font-sans text-xs text-amber-800 space-y-2 leading-relaxed">
              <li>• Soyez précis dans votre requête</li>
              <li>• Ajoutez la ville pour contenu local</li>
              <li>• Vérifiez toujours le contenu généré</li>
              <li>• Ajoutez des exemples personnels</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
