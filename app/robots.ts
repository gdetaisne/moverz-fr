import { MetadataRoute } from 'next'

/**
 * Robots.txt optimisé pour SEO classique + indexation IA (LLM)
 * Génère automatiquement le robots.txt pour maximiser la visibilité Moverz
 * 
 * Bots autorisés :
 * - OpenAI (ChatGPT, GPT-4)
 * - Anthropic (Claude)
 * - Google Gemini (Bard)
 * - Perplexity AI
 * - Cohere
 * - Common Crawl (utilisé par plusieurs IA)
 * - Meta AI
 * - Tous les moteurs de recherche classiques
 * 
 * Dernière mise à jour : 2026-02-11
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // === BOTS IA - Accès complet pour indexation LLM ===
      
      // OpenAI (ChatGPT, GPT-4, etc.)
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      
      // Anthropic (Claude)
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      
      // Google Gemini / Bard
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      
      // Common Crawl (utilisé par plusieurs IA pour entraînement)
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      
      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
      
      // Meta AI (Llama)
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      {
        userAgent: 'meta-externalagent',
        allow: '/',
      },
      
      // Mistral AI
      {
        userAgent: 'MistralBot',
        allow: '/',
      },
      
      // === RÈGLE PAR DÉFAUT (tous les autres bots) ===
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://moverz.fr/sitemap.xml',
  }
}

