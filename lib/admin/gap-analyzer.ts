import type { ScrapedArticle } from './scraper';
import type { ContentAnalysis } from './content-analyzer';
import { detectTheme, detectCity, detectService } from './content-analyzer';

export interface ContentGap {
  id: string;
  topic: string;
  topicSlug: string;
  themes: string[];
  cities: string[];
  services: string[];
  competitorCoverage: {
    totalArticles: number;
    avgWordCount: number;
    bestArticles: Array<{
      url: string;
      title: string;
      wordCount: number;
      sourceName: string;
      hasSchema: boolean;
    }>;
  };
  moverzStatus: 'absent' | 'exists' | 'weak';
  moverzArticles: Array<{
    slug: string;
    title: string;
  }>;
  opportunityScore: number;
  reasoning: string;
  recommendedWordCount: number;
  recommendedStructure: {
    h2Suggestions: string[];
    mustHaveElements: string[];
  };
  priority: 'high' | 'medium' | 'low';
}

export interface GapAnalysisResult {
  analyzedAt: string;
  totalGaps: number;
  highPriorityGaps: number;
  gaps: ContentGap[];
  themeDistribution: { [theme: string]: number };
  cityDistribution: { [city: string]: number };
}

interface MoverzArticle {
  slug: string;
  title: string;
  description?: string;
  category?: string;
  citySlug?: string;
}

function generateTopicFromThemesAndCities(themes: string[], cities: string[]): string {
  const mainTheme = themes[0] || 'déménagement';
  const mainCity = cities[0];
  
  if (mainCity) {
    return `${mainTheme} ${mainCity}`;
  }
  return mainTheme;
}

function calculateOpportunityScore(
  competitorArticles: ScrapedArticle[],
  moverzStatus: 'absent' | 'exists' | 'weak',
  themes: string[],
  cities: string[]
): number {
  let score = 0;
  
  score += competitorArticles.length * 5;
  
  const avgWordCount = competitorArticles.reduce((sum, a) => sum + a.wordCount, 0) / competitorArticles.length;
  if (avgWordCount >= 1500) score += 20;
  else if (avgWordCount >= 1000) score += 15;
  else if (avgWordCount >= 500) score += 10;
  
  const schemaPercentage = competitorArticles.filter(a => a.hasSchema).length / competitorArticles.length;
  if (schemaPercentage >= 0.5) score += 10;
  
  if (moverzStatus === 'absent') score += 30;
  else if (moverzStatus === 'weak') score += 15;
  else score -= 20;
  
  const strategicThemes = ['prix', 'demenagement', 'conseils', 'stockage'];
  const hasStrategicTheme = themes.some(t => strategicThemes.includes(t));
  if (hasStrategicTheme) score += 15;
  
  const bigCities = ['paris', 'lyon', 'marseille', 'toulouse', 'nice', 'nantes', 'strasbourg'];
  const hasBigCity = cities.some(c => bigCities.includes(c));
  if (hasBigCity) score += 10;
  
  return Math.min(Math.max(score, 0), 100);
}

function determineMoverzStatus(
  topic: string,
  themes: string[],
  cities: string[],
  moverzArticles: MoverzArticle[]
): { status: 'absent' | 'exists' | 'weak'; matchingArticles: MoverzArticle[] } {
  const matchingArticles = moverzArticles.filter(article => {
    const articleText = `${article.title} ${article.description || ''} ${article.slug}`.toLowerCase();
    
    const themeMatch = themes.some(theme => articleText.includes(theme));
    const cityMatch = cities.length === 0 || cities.some(city => 
      articleText.includes(city) || article.citySlug === city
    );
    
    return themeMatch && cityMatch;
  });
  
  if (matchingArticles.length === 0) {
    return { status: 'absent', matchingArticles: [] };
  }
  
  if (matchingArticles.length >= 2) {
    return { status: 'exists', matchingArticles };
  }
  
  return { status: 'weak', matchingArticles };
}

function generateRecommendedStructure(
  topic: string,
  themes: string[],
  cities: string[],
  bestCompetitorArticles: ScrapedArticle[]
): {
  h2Suggestions: string[];
  mustHaveElements: string[];
} {
  const h2Suggestions: string[] = [];
  const mustHaveElements: string[] = [];
  
  const mainCity = cities[0];
  const mainTheme = themes[0] || 'déménagement';
  
  if (themes.includes('prix')) {
    h2Suggestions.push(
      mainCity ? `Prix du ${mainTheme} à ${mainCity} en 2026` : `Prix moyen d'un ${mainTheme} en France`,
      'Facteurs influençant le tarif',
      'Comment obtenir le meilleur prix ?',
      'Devis gratuit et personnalisé'
    );
    mustHaveElements.push('Tableau de prix', 'Fourchettes tarifaires claires', 'CTA devis');
  } else if (themes.includes('conseils')) {
    h2Suggestions.push(
      'Guide pratique étape par étape',
      'Les erreurs à éviter',
      'Checklist complète',
      'Nos conseils d\'experts'
    );
    mustHaveElements.push('Liste numérotée', 'Checklist téléchargeable', 'Conseils actionnables');
  } else {
    h2Suggestions.push(
      mainCity ? `Tout savoir sur le ${mainTheme} à ${mainCity}` : `Guide complet du ${mainTheme}`,
      'Avantages et inconvénients',
      'Comment choisir ?',
      'Demandez votre devis gratuit'
    );
    mustHaveElements.push('Introduction claire', 'Sections structurées', 'CTA en fin d\'article');
  }
  
  if (mainCity) {
    h2Suggestions.push(`Pourquoi choisir Moverz à ${mainCity} ?`);
    mustHaveElements.push('USP locaux', 'Mention zone géographique');
  }
  
  const avgH2Count = bestCompetitorArticles.reduce((sum, a) => sum + a.h2Count, 0) / bestCompetitorArticles.length;
  if (avgH2Count > h2Suggestions.length) {
    h2Suggestions.push('FAQ - Questions fréquentes');
  }
  
  mustHaveElements.push('Schema.org (Article/FAQPage)', 'Images optimisées', 'Liens internes pertinents');
  
  return {
    h2Suggestions: h2Suggestions.slice(0, 6),
    mustHaveElements,
  };
}

export function analyzeContentGaps(
  scrapedArticles: ScrapedArticle[],
  moverzArticles: MoverzArticle[]
): GapAnalysisResult {
  const gapMap = new Map<string, ScrapedArticle[]>();
  
  for (const article of scrapedArticles) {
    const text = `${article.title} ${article.metaDescription || ''} ${article.rawText}`;
    const themes = detectTheme(text);
    const cities = detectCity(text);
    
    const topic = generateTopicFromThemesAndCities(themes, cities);
    
    if (!gapMap.has(topic)) {
      gapMap.set(topic, []);
    }
    gapMap.get(topic)!.push(article);
  }
  
  const gaps: ContentGap[] = [];
  
  for (const [topic, articles] of gapMap.entries()) {
    if (articles.length < 2) continue;
    
    const firstArticle = articles[0];
    const text = `${firstArticle.title} ${firstArticle.rawText}`;
    const themes = detectTheme(text);
    const cities = detectCity(text);
    const services = detectService(text);
    
    const topicSlug = topic
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    
    const { status, matchingArticles } = determineMoverzStatus(topic, themes, cities, moverzArticles);
    
    const opportunityScore = calculateOpportunityScore(articles, status, themes, cities);
    
    const priority: 'high' | 'medium' | 'low' = 
      opportunityScore >= 70 ? 'high' :
      opportunityScore >= 40 ? 'medium' : 'low';
    
    const avgWordCount = articles.reduce((sum, a) => sum + a.wordCount, 0) / articles.length;
    
    const bestArticles = articles
      .sort((a, b) => b.wordCount - a.wordCount)
      .slice(0, 3)
      .map(a => ({
        url: a.url,
        title: a.title,
        wordCount: a.wordCount,
        sourceName: a.sourceName,
        hasSchema: a.hasSchema,
      }));
    
    const recommendedStructure = generateRecommendedStructure(topic, themes, cities, articles);
    
    const reasoning = `${articles.length} concurrents couvrent ce sujet (avg: ${Math.round(avgWordCount)} mots). ` +
      `Moverz: ${status === 'absent' ? 'Aucun article' : status === 'weak' ? '1 article faible' : `${matchingArticles.length} articles existants`}. ` +
      `Score d'opportunité: ${opportunityScore}/100.`;
    
    gaps.push({
      id: topicSlug,
      topic,
      topicSlug,
      themes,
      cities,
      services,
      competitorCoverage: {
        totalArticles: articles.length,
        avgWordCount: Math.round(avgWordCount),
        bestArticles,
      },
      moverzStatus: status,
      moverzArticles: matchingArticles.map(a => ({ slug: a.slug, title: a.title })),
      opportunityScore,
      reasoning,
      recommendedWordCount: Math.round(avgWordCount * 1.15),
      recommendedStructure,
      priority,
    });
  }
  
  gaps.sort((a, b) => b.opportunityScore - a.opportunityScore);
  
  const themeDistribution: { [theme: string]: number } = {};
  const cityDistribution: { [city: string]: number } = {};
  
  for (const gap of gaps) {
    for (const theme of gap.themes) {
      themeDistribution[theme] = (themeDistribution[theme] || 0) + 1;
    }
    for (const city of gap.cities) {
      cityDistribution[city] = (cityDistribution[city] || 0) + 1;
    }
  }
  
  return {
    analyzedAt: new Date().toISOString(),
    totalGaps: gaps.length,
    highPriorityGaps: gaps.filter(g => g.priority === 'high').length,
    gaps,
    themeDistribution,
    cityDistribution,
  };
}
