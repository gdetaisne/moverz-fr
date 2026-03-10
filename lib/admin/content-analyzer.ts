import type { ScrapedArticle } from './scraper';

export const FRENCH_CITIES = [
  'paris', 'marseille', 'lyon', 'toulouse', 'nice', 'nantes', 'strasbourg',
  'montpellier', 'bordeaux', 'lille', 'rennes', 'reims', 'toulon', 'grenoble',
  'dijon', 'angers', 'nimes', 'villeurbanne', 'saint-etienne', 'clermont-ferrand',
  'le havre', 'brest', 'tours', 'amiens', 'limoges', 'annecy', 'perpignan',
  'boulogne-billancourt', 'orleans', 'metz', 'rouen', 'mulhouse', 'caen',
];

export const MOVING_THEMES = {
  demenagement: ['déménagement', 'déménager', 'demenagement', 'demenager', 'déménageur', 'demenageur'],
  emballage: ['emballage', 'carton', 'emballer', 'protection', 'bulle', 'scotch'],
  stockage: ['stockage', 'garde-meubles', 'garde meuble', 'self-storage', 'entreposage', 'box'],
  debarras: ['débarras', 'debarras', 'encombrants', 'vider', 'cave', 'grenier'],
  monte_meuble: ['monte-meuble', 'monte meuble', 'grue', 'levage', 'etage'],
  international: ['international', 'étranger', 'expatriation', 'outre-mer', 'europe'],
  entreprise: ['entreprise', 'bureau', 'société', 'professionnel', 'commercial'],
  particulier: ['particulier', 'maison', 'appartement', 'studio', 'logement'],
  administratif: ['administratif', 'changement adresse', 'contrat', 'bail', 'edf', 'internet'],
  prix: ['prix', 'tarif', 'cout', 'coût', 'devis', 'budget', 'économie', 'economie'],
  conseils: ['conseil', 'astuce', 'guide', 'checklist', 'organiser', 'préparer', 'preparer'],
  vehicule: ['camion', 'véhicule', 'vehicule', 'utilitaire', 'location', 'permis'],
};

export const CONTENT_INTENTS = {
  transactional: ['prix', 'tarif', 'devis', 'gratuit', 'acheter', 'réserver', 'contacter'],
  informational: ['comment', 'pourquoi', 'qu\'est-ce', 'guide', 'conseil', 'astuce', 'définition'],
  navigational: ['moverz', 'entreprise', 'contact', 'à propos', 'société'],
  commercial: ['meilleur', 'comparatif', 'avis', 'top', 'vs', 'versus', 'alternative'],
};

export interface ContentAnalysis {
  themes: string[];
  cities: string[];
  services: string[];
  intent: string;
  keywordDensity: { [keyword: string]: number };
  hasPriceInfo: boolean;
  hasHowTo: boolean;
  hasList: boolean;
  toneScore: number;
}

export function detectTheme(text: string): string[] {
  const lowercaseText = text.toLowerCase();
  const themes: string[] = [];
  
  for (const [theme, keywords] of Object.entries(MOVING_THEMES)) {
    for (const keyword of keywords) {
      if (lowercaseText.includes(keyword)) {
        themes.push(theme);
        break;
      }
    }
  }
  
  return [...new Set(themes)];
}

export function detectCity(text: string): string[] {
  const lowercaseText = text.toLowerCase();
  const cities: string[] = [];
  
  for (const city of FRENCH_CITIES) {
    const cityVariants = [
      city,
      city.replace('-', ' '),
      city.charAt(0).toUpperCase() + city.slice(1),
    ];
    
    for (const variant of cityVariants) {
      if (lowercaseText.includes(variant)) {
        cities.push(city);
        break;
      }
    }
  }
  
  return [...new Set(cities)];
}

export function detectService(text: string): string[] {
  const services: string[] = [];
  const lowercaseText = text.toLowerCase();
  
  const serviceKeywords = {
    'déménagement-standard': ['déménagement standard', 'déménagement classique'],
    'déménagement-express': ['express', 'rapide', 'urgent', 'dernière minute'],
    'déménagement-international': ['international', 'étranger', 'expatriation'],
    'stockage': ['stockage', 'garde-meubles', 'box'],
    'emballage': ['emballage', 'carton', 'protection'],
    'débarras': ['débarras', 'vider', 'encombrants'],
    'monte-meuble': ['monte-meuble', 'grue'],
  };
  
  for (const [service, keywords] of Object.entries(serviceKeywords)) {
    for (const keyword of keywords) {
      if (lowercaseText.includes(keyword)) {
        services.push(service);
        break;
      }
    }
  }
  
  return [...new Set(services)];
}

export function detectIntent(text: string): string {
  const lowercaseText = text.toLowerCase();
  
  const intentScores: { [key: string]: number } = {
    transactional: 0,
    informational: 0,
    navigational: 0,
    commercial: 0,
  };
  
  for (const [intent, keywords] of Object.entries(CONTENT_INTENTS)) {
    for (const keyword of keywords) {
      if (lowercaseText.includes(keyword)) {
        intentScores[intent]++;
      }
    }
  }
  
  const maxIntent = Object.entries(intentScores).reduce((a, b) => (a[1] > b[1] ? a : b));
  
  return maxIntent[1] > 0 ? maxIntent[0] : 'informational';
}

export function analyzeKeywordDensity(text: string, targetKeywords: string[] = []): { [keyword: string]: number } {
  const lowercaseText = text.toLowerCase();
  const words = lowercaseText.split(/\s+/);
  const totalWords = words.length;
  
  const density: { [keyword: string]: number } = {};
  
  const allKeywords = [
    ...targetKeywords,
    'déménagement',
    'demenagement',
    'déménageur',
    'prix',
    'tarif',
    'devis',
  ];
  
  for (const keyword of allKeywords) {
    const count = (lowercaseText.match(new RegExp(keyword, 'gi')) || []).length;
    density[keyword] = totalWords > 0 ? (count / totalWords) * 100 : 0;
  }
  
  return density;
}

export function analyzeContent(article: ScrapedArticle): ContentAnalysis {
  const text = `${article.title} ${article.metaDescription || ''} ${article.rawText}`;
  
  const themes = detectTheme(text);
  const cities = detectCity(text);
  const services = detectService(text);
  const intent = detectIntent(text);
  const keywordDensity = analyzeKeywordDensity(text);
  
  const hasPriceInfo = /\d+\s*(€|EUR|euros?)/i.test(text);
  const hasHowTo = /comment|étapes?|guide|tutoriel/i.test(text);
  const hasList = article.h2Count >= 3 || /1\.|2\.|3\./g.test(text);
  
  const toneScore = calculateToneScore(article);
  
  return {
    themes,
    cities,
    services,
    intent,
    keywordDensity,
    hasPriceInfo,
    hasHowTo,
    hasList,
    toneScore,
  };
}

function calculateToneScore(article: ScrapedArticle): number {
  let score = 70;
  
  if (article.wordCount >= 1000) score += 10;
  if (article.wordCount >= 1500) score += 5;
  if (article.h2Count >= 3) score += 5;
  if (article.hasSchema) score += 5;
  if (article.imageCount >= 2) score += 5;
  
  return Math.min(score, 100);
}

export function analyzeAllArticles(articles: ScrapedArticle[]): {
  totalArticles: number;
  avgWordCount: number;
  topThemes: Array<{ theme: string; count: number }>;
  topCities: Array<{ city: string; count: number }>;
  intentDistribution: { [intent: string]: number };
} {
  const totalArticles = articles.length;
  const avgWordCount = articles.reduce((sum, a) => sum + a.wordCount, 0) / totalArticles;
  
  const themeCount: { [theme: string]: number } = {};
  const cityCount: { [city: string]: number } = {};
  const intentCount: { [intent: string]: number } = {};
  
  for (const article of articles) {
    const analysis = analyzeContent(article);
    
    for (const theme of analysis.themes) {
      themeCount[theme] = (themeCount[theme] || 0) + 1;
    }
    
    for (const city of analysis.cities) {
      cityCount[city] = (cityCount[city] || 0) + 1;
    }
    
    intentCount[analysis.intent] = (intentCount[analysis.intent] || 0) + 1;
  }
  
  const topThemes = Object.entries(themeCount)
    .map(([theme, count]) => ({ theme, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
  
  const topCities = Object.entries(cityCount)
    .map(([city, count]) => ({ city, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
  
  return {
    totalArticles,
    avgWordCount,
    topThemes,
    topCities,
    intentDistribution: intentCount,
  };
}
