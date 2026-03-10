"use client";

import { useState } from "react";
import { MOVERZ_VOICE_SYSTEM_PROMPT, generateArticlePrompt } from "@/lib/admin/moverz-voice-prompt";

export default function AdminStudioPage() {
  const [query, setQuery] = useState("");
  const [wordCount, setWordCount] = useState(1500);
  const [city, setCity] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generatedArticle, setGeneratedArticle] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);

  const handleGenerate = async () => {
    if (!query.trim()) {
      alert("Veuillez entrer une requête long-tail");
      return;
    }

    setGenerating(true);
    setGeneratedArticle("");

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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">✨ AI Content Studio</h1>
        <p className="text-gray-600 mt-1">Génération d'articles SEO/E-E-A-T avec Moverz Voice</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📝 Nouvelle Génération</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Requête Long-Tail *
                </label>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ex: prix déménagement 3 pièces Lyon"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de mots cible
                  </label>
                  <input
                    type="number"
                    value={wordCount}
                    onChange={(e) => setWordCount(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ville (optionnel)
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ex: Lyon"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={generating}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400"
              >
                {generating ? "✨ Génération en cours..." : "🚀 Générer l'article"}
              </button>
            </div>
          </div>

          {generatedArticle && (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">📄 Article Généré</h2>
                <div className="space-x-2">
                  <button className="px-4 py-2 bg-green-600 text-white rounded font-medium hover:bg-green-700">
                    Publier
                  </button>
                  <button className="px-4 py-2 bg-gray-600 text-white rounded font-medium hover:bg-gray-700">
                    Sauvegarder brouillon
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">
                  {generatedArticle}
                </pre>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <div className="text-xs font-medium text-green-800">SEO Score</div>
                  <div className="text-2xl font-bold text-green-600">85/100</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <div className="text-xs font-medium text-blue-800">E-E-A-T Score</div>
                  <div className="text-2xl font-bold text-blue-600">78/100</div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded p-3">
                  <div className="text-xs font-medium text-purple-800">Tone Score</div>
                  <div className="text-2xl font-bold text-purple-600">92/100</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🎨 Moverz Voice</h3>
            <p className="text-sm text-gray-700 mb-3">
              Notre IA utilise un prompt spécialement conçu pour générer du contenu avec le ton Moverz : authentique, personnel et SEO-optimisé.
            </p>
            <button
              onClick={() => setShowPrompt(!showPrompt)}
              className="text-sm text-blue-600 font-medium hover:text-blue-800"
            >
              {showPrompt ? "Masquer le prompt" : "Voir le prompt système →"}
            </button>
            
            {showPrompt && (
              <div className="mt-3 bg-white rounded p-3 max-h-64 overflow-y-auto">
                <pre className="text-xs text-gray-600 whitespace-pre-wrap">
                  {MOVERZ_VOICE_SYSTEM_PROMPT}
                </pre>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">📊 Statistiques</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Articles générés</span>
                <span className="font-bold text-gray-900">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ce mois</span>
                <span className="font-bold text-gray-900">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Publiés</span>
                <span className="font-bold text-green-600">0</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="text-sm font-bold text-yellow-900 mb-2">💡 Conseils</h4>
            <ul className="text-xs text-yellow-800 space-y-1">
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
