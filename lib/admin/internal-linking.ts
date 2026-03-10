import type { BlogPostMeta } from '../blog';

export interface InternalLinkSuggestion {
  id: string;
  sourceArticle: {
    slug: string;
    title: string;
  };
  targetArticle: {
    slug: string;
    title: string;
    url: string;
  };
  anchorText: string;
  relevanceScore: number;
  reasoning: string;
  linkType: 'thematic' | 'geographic' | 'pillar' | 'complementary' | 'related-service';
  position: 'intro' | 'body' | 'conclusion';
  priority: 'high' | 'medium' | 'low';
}

export interface LinkingCluster {
  id: string;
  name: string;
  pillarArticle: {
    slug: string;
    title: string;
  };
  supportingArticles: Array<{
    slug: string;
    title: string;
  }>;
  totalArticles: number;
  avgInternalLinks: number;
  clusterStrength: number;
}

export interface LinkingStats {
  totalArticles: number;
  articlesWithoutInternalLinks: number;
  avgLinksPerArticle: number;
  topLinkedArticles: Array<{
    slug: string;
    title: string;
    inboundLinks: number;
  }>;
  orphanArticles: Array<{
    slug: string;
    title: string;
  }>;
}

const PILLAR_CONTENT_KEYWORDS = ['guide complet', 'tout savoir', 'guide ultime', 'prix', 'tarif'];
const GEOGRAPHIC_INDICATORS = ['paris', 'lyon', 'marseille', 'toulouse', 'nice', 'nantes', 'bordeaux', 'lille', 'strasbourg'];
const SERVICE_KEYWORDS = {
  demenagement: ['déménagement', 'demenagement'],
  stockage: ['stockage', 'garde-meubles', 'box'],
  emballage: ['emballage', 'carton'],
  debarras: ['débarras', 'debarras'],
};

function detectPillarContent(article: BlogPostMeta): boolean {
  const text = `${article.title} ${article.description || ''}`.toLowerCase();
  return PILLAR_CONTENT_KEYWORDS.some(keyword => text.includes(keyword));
}

function extractTheme(article: BlogPostMeta): string[] {
  const text = `${article.title} ${article.description || ''}`.toLowerCase();
  const themes: string[] = [];
  
  for (const [theme, keywords] of Object.entries(SERVICE_KEYWORDS)) {
    if (keywords.some(kw => text.includes(kw))) {
      themes.push(theme);
    }
  }
  
  return themes;
}

function extractGeography(article: BlogPostMeta): string[] {
  const text = `${article.title} ${article.description || ''} ${article.citySlug || ''}`.toLowerCase();
  const geographies: string[] = [];
  
  for (const city of GEOGRAPHIC_INDICATORS) {
    if (text.includes(city) || article.citySlug === city) {
      geographies.push(city);
    }
  }
  
  return geographies;
}

function calculateRelevanceScore(
  source: BlogPostMeta,
  target: BlogPostMeta,
  linkType: string
): number {
  let score = 50;
  
  const sourceThemes = extractTheme(source);
  const targetThemes = extractTheme(target);
  const themeOverlap = sourceThemes.filter(t => targetThemes.includes(t)).length;
  score += themeOverlap * 15;
  
  const sourceGeo = extractGeography(source);
  const targetGeo = extractGeography(target);
  const geoOverlap = sourceGeo.filter(g => targetGeo.includes(g)).length;
  score += geoOverlap * 10;
  
  if (detectPillarContent(target)) {
    score += 20;
  }
  
  if (linkType === 'pillar') score += 15;
  else if (linkType === 'thematic') score += 10;
  
  return Math.min(Math.max(score, 0), 100);
}

function generateAnchorText(source: BlogPostMeta, target: BlogPostMeta, linkType: string): string {
  const targetTitle = target.title;
  
  if (linkType === 'geographic') {
    const targetCity = extractGeography(target)[0];
    if (targetCity) {
      return `déménagement à ${targetCity}`;
    }
  }
  
  if (linkType === 'pillar') {
    return `guide complet`;
  }
  
  if (targetTitle.includes('prix')) {
    return 'consulter les prix';
  }
  
  if (targetTitle.includes('guide')) {
    return 'voir notre guide';
  }
  
  const shortTitle = targetTitle.length > 50 ? targetTitle.slice(0, 50) + '...' : targetTitle;
  return shortTitle;
}

export function generateInternalLinkSuggestions(
  articles: BlogPostMeta[],
  maxSuggestionsPerArticle: number = 5
): InternalLinkSuggestion[] {
  const suggestions: InternalLinkSuggestion[] = [];
  
  for (const sourceArticle of articles) {
    const sourceThemes = extractTheme(sourceArticle);
    const sourceGeo = extractGeography(sourceArticle);
    const candidateSuggestions: InternalLinkSuggestion[] = [];
    
    for (const targetArticle of articles) {
      if (sourceArticle.slug === targetArticle.slug) continue;
      
      const targetThemes = extractTheme(targetArticle);
      const targetGeo = extractGeography(targetArticle);
      
      let linkType: InternalLinkSuggestion['linkType'] = 'thematic';
      let reasoning = '';
      
      if (detectPillarContent(targetArticle)) {
        linkType = 'pillar';
        reasoning = 'Article pilier de référence';
      } else if (sourceGeo.some(g => targetGeo.includes(g))) {
        linkType = 'geographic';
        reasoning = `Même zone géographique: ${sourceGeo[0]}`;
      } else if (sourceThemes.some(t => targetThemes.includes(t))) {
        linkType = 'thematic';
        reasoning = `Thématique commune: ${sourceThemes[0]}`;
      } else {
        continue;
      }
      
      const relevanceScore = calculateRelevanceScore(sourceArticle, targetArticle, linkType);
      
      if (relevanceScore < 50) continue;
      
      const anchorText = generateAnchorText(sourceArticle, targetArticle, linkType);
      
      const priority: InternalLinkSuggestion['priority'] =
        relevanceScore >= 80 ? 'high' :
        relevanceScore >= 60 ? 'medium' : 'low';
      
      const position: InternalLinkSuggestion['position'] =
        linkType === 'pillar' ? 'intro' :
        linkType === 'geographic' ? 'body' : 'conclusion';
      
      candidateSuggestions.push({
        id: `${sourceArticle.slug}-to-${targetArticle.slug}`,
        sourceArticle: {
          slug: sourceArticle.slug,
          title: sourceArticle.title,
        },
        targetArticle: {
          slug: targetArticle.slug,
          title: targetArticle.title,
          url: `/blog/${targetArticle.slug}/`,
        },
        anchorText,
        relevanceScore,
        reasoning,
        linkType,
        position,
        priority,
      });
    }
    
    candidateSuggestions.sort((a, b) => b.relevanceScore - a.relevanceScore);
    suggestions.push(...candidateSuggestions.slice(0, maxSuggestionsPerArticle));
  }
  
  return suggestions.sort((a, b) => b.relevanceScore - a.relevanceScore);
}

export function identifyLinkingClusters(articles: BlogPostMeta[]): LinkingCluster[] {
  const clusters: LinkingCluster[] = [];
  
  const pillarArticles = articles.filter(a => detectPillarContent(a));
  
  for (const pillar of pillarArticles) {
    const pillarThemes = extractTheme(pillar);
    const pillarGeo = extractGeography(pillar);
    
    const supportingArticles = articles.filter(article => {
      if (article.slug === pillar.slug) return false;
      
      const articleThemes = extractTheme(article);
      const articleGeo = extractGeography(article);
      
      const themeMatch = pillarThemes.some(t => articleThemes.includes(t));
      const geoMatch = pillarGeo.length === 0 || pillarGeo.some(g => articleGeo.includes(g));
      
      return themeMatch && geoMatch;
    });
    
    if (supportingArticles.length >= 2) {
      const clusterStrength = Math.min((supportingArticles.length / 10) * 100, 100);
      
      clusters.push({
        id: pillar.slug,
        name: pillar.title,
        pillarArticle: {
          slug: pillar.slug,
          title: pillar.title,
        },
        supportingArticles: supportingArticles.map(a => ({
          slug: a.slug,
          title: a.title,
        })),
        totalArticles: supportingArticles.length + 1,
        avgInternalLinks: 0,
        clusterStrength,
      });
    }
  }
  
  return clusters.sort((a, b) => b.totalArticles - a.totalArticles);
}

export function analyzeLinkingStats(
  articles: BlogPostMeta[],
  suggestions: InternalLinkSuggestion[]
): LinkingStats {
  const linkCounts = new Map<string, number>();
  
  for (const suggestion of suggestions) {
    const targetSlug = suggestion.targetArticle.slug;
    linkCounts.set(targetSlug, (linkCounts.get(targetSlug) || 0) + 1);
  }
  
  const articlesWithLinks = new Set(suggestions.map(s => s.sourceArticle.slug));
  const articlesWithoutInternalLinks = articles.length - articlesWithLinks.size;
  
  const totalLinks = suggestions.length;
  const avgLinksPerArticle = articles.length > 0 ? totalLinks / articles.length : 0;
  
  const topLinkedArticles = Array.from(linkCounts.entries())
    .map(([slug, inboundLinks]) => {
      const article = articles.find(a => a.slug === slug);
      return {
        slug,
        title: article?.title || slug,
        inboundLinks,
      };
    })
    .sort((a, b) => b.inboundLinks - a.inboundLinks)
    .slice(0, 10);
  
  const orphanArticles = articles
    .filter(a => !articlesWithLinks.has(a.slug) && !linkCounts.has(a.slug))
    .map(a => ({
      slug: a.slug,
      title: a.title,
    }))
    .slice(0, 20);
  
  return {
    totalArticles: articles.length,
    articlesWithoutInternalLinks,
    avgLinksPerArticle: Math.round(avgLinksPerArticle * 10) / 10,
    topLinkedArticles,
    orphanArticles,
  };
}
