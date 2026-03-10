import * as cheerio from 'cheerio';

export interface ScrapedArticle {
  url: string;
  title: string;
  wordCount: number;
  publishDate?: string;
  h1?: string;
  h2Count: number;
  h3Count: number;
  imageCount: number;
  hasSchema: boolean;
  schemaTypes: string[];
  metaDescription?: string;
  rawText: string;
  scrapedAt: string;
  sourceId: number;
  sourceName: string;
}

export interface BlogScrapeResult {
  blogId: number;
  blogName: string;
  blogUrl: string;
  articles: ScrapedArticle[];
  totalArticles: number;
  scrapedAt: string;
  error?: string;
}

export async function fetchWithDelay(url: string, delayMs: number = 1500): Promise<string | null> {
  try {
    await new Promise(resolve => setTimeout(resolve, delayMs));
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'MoverzSEOResearch/1.0 (https://moverz.fr; contact@moverz.fr)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.8',
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
      return null;
    }

    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return null;
  }
}

export function extractArticleLinks($: cheerio.CheerioAPI, baseUrl: string): string[] {
  const links = new Set<string>();
  
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href) return;
    
    try {
      const url = new URL(href, baseUrl);
      
      if (url.hostname !== new URL(baseUrl).hostname) return;
      
      const pathname = url.pathname.toLowerCase();
      if (
        pathname.includes('/blog/') ||
        pathname.includes('/actualites/') ||
        pathname.includes('/actualite/') ||
        pathname.includes('/conseils/') ||
        pathname.includes('/article/') ||
        pathname.includes('/news/')
      ) {
        const cleanUrl = url.origin + url.pathname;
        if (cleanUrl !== baseUrl && !cleanUrl.endsWith('/page/')) {
          links.add(cleanUrl);
        }
      }
    } catch (e) {
      // Invalid URL, skip
    }
  });
  
  return Array.from(links);
}

export function scrapeArticleContent($: cheerio.CheerioAPI, url: string, sourceId: number, sourceName: string): ScrapedArticle | null {
  const title = $('h1').first().text().trim() || $('title').text().trim();
  
  if (!title) return null;
  
  const h1 = $('h1').first().text().trim();
  const h2Count = $('h2').length;
  const h3Count = $('h3').length;
  const imageCount = $('img').length;
  
  $('script, style, nav, header, footer, aside, .sidebar, .menu, .navigation').remove();
  
  const bodyText = $('article, main, .content, .post-content, .entry-content, body')
    .first()
    .text()
    .replace(/\s+/g, ' ')
    .trim();
  
  const words = bodyText.split(/\s+/).filter(w => w.length > 2);
  const wordCount = words.length;
  
  if (wordCount < 100) return null;
  
  const schemaScripts = $('script[type="application/ld+json"]');
  const schemaTypes: string[] = [];
  let hasSchema = false;
  
  schemaScripts.each((_, el) => {
    try {
      const schemaData = JSON.parse($(el).html() || '{}');
      if (schemaData['@type']) {
        schemaTypes.push(schemaData['@type']);
        hasSchema = true;
      }
    } catch (e) {
      // Invalid JSON schema
    }
  });
  
  const metaDescription = $('meta[name="description"]').attr('content')?.trim();
  
  const dateSelectors = [
    'time[datetime]',
    '.published',
    '.post-date',
    '.entry-date',
    'meta[property="article:published_time"]',
  ];
  
  let publishDate: string | undefined;
  for (const selector of dateSelectors) {
    const dateEl = $(selector).first();
    if (dateEl.length) {
      publishDate = dateEl.attr('datetime') || dateEl.attr('content') || dateEl.text().trim();
      break;
    }
  }
  
  return {
    url,
    title,
    wordCount,
    publishDate,
    h1,
    h2Count,
    h3Count,
    imageCount,
    hasSchema,
    schemaTypes,
    metaDescription,
    rawText: bodyText.slice(0, 5000),
    scrapedAt: new Date().toISOString(),
    sourceId,
    sourceName,
  };
}

export async function scrapeBlog(
  blogId: number,
  blogName: string,
  blogUrl: string,
  maxArticles: number = 50
): Promise<BlogScrapeResult> {
  console.log(`\n🔍 Scraping: ${blogName} (${blogUrl})`);
  
  const result: BlogScrapeResult = {
    blogId,
    blogName,
    blogUrl,
    articles: [],
    totalArticles: 0,
    scrapedAt: new Date().toISOString(),
  };
  
  try {
    const blogHtml = await fetchWithDelay(blogUrl);
    if (!blogHtml) {
      result.error = 'Failed to fetch blog homepage';
      return result;
    }
    
    const $ = cheerio.load(blogHtml);
    const articleLinks = extractArticleLinks($, blogUrl).slice(0, maxArticles);
    
    console.log(`   Found ${articleLinks.length} article links`);
    
    for (const link of articleLinks) {
      const articleHtml = await fetchWithDelay(link);
      if (!articleHtml) continue;
      
      const article$ = cheerio.load(articleHtml);
      const articleData = scrapeArticleContent(article$, link, blogId, blogName);
      
      if (articleData) {
        result.articles.push(articleData);
        console.log(`   ✓ ${articleData.title} (${articleData.wordCount} mots)`);
      }
    }
    
    result.totalArticles = result.articles.length;
    console.log(`   ✅ Total scraped: ${result.totalArticles} articles`);
    
  } catch (error) {
    result.error = error instanceof Error ? error.message : 'Unknown error';
    console.error(`   ❌ Error: ${result.error}`);
  }
  
  return result;
}
