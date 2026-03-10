import { NextResponse } from 'next/server';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { scrapeBlog } from '@/lib/admin/scraper';
import { analyzeContent, analyzeAllArticles } from '@/lib/admin/content-analyzer';
import type { ScrapedArticle } from '@/lib/admin/scraper';

interface CompetitorBlog {
  id: number;
  name: string;
  blogUrl: string;
  active: boolean;
}

interface EnrichedArticle extends ScrapedArticle {
  analysis: ReturnType<typeof analyzeContent>;
}

// Augmenter le timeout pour cette route (60 minutes)
export const maxDuration = 3600;

export async function POST() {
  try {
    console.log('[SCRAPING] Starting competitor scraping...');
    
    // Initialiser le fichier depuis le seed si nécessaire
    const competitorsPath = join(process.cwd(), 'data', 'competitor-blogs.json');
    const seedPath = join(process.cwd(), 'data', 'competitor-blogs.seed.json');
    
    if (!existsSync(competitorsPath)) {
      console.log('[SCRAPING] Initializing competitor-blogs.json from seed...');
      const dataDir = join(process.cwd(), 'data');
      if (!existsSync(dataDir)) {
        mkdirSync(dataDir, { recursive: true });
      }
      
      if (existsSync(seedPath)) {
        const seedData = readFileSync(seedPath, 'utf-8');
        writeFileSync(competitorsPath, seedData, 'utf-8');
        console.log('[SCRAPING] ✅ competitor-blogs.json initialized from seed');
      } else {
        return NextResponse.json(
          { error: 'Fichier seed competitor-blogs.seed.json introuvable' },
          { status: 500 }
        );
      }
    }
    
    const competitors: CompetitorBlog[] = JSON.parse(readFileSync(competitorsPath, 'utf-8'));
    const activeCompetitors = competitors.filter(c => c.active);
    
    console.log(`[SCRAPING] Total: ${competitors.length}, Active: ${activeCompetitors.length}`);
    
    const allResults: any[] = [];
    const allArticles: EnrichedArticle[] = [];
    
    // Scraper seulement 10 blogs pour ne pas dépasser le timeout
    const totalToProcess = Math.min(activeCompetitors.length, 10);
    
    for (let i = 0; i < totalToProcess; i++) {
      const competitor = activeCompetitors[i];
      console.log(`[SCRAPING] [${i + 1}/${totalToProcess}] ${competitor.name}`);
      
      try {
        const result = await scrapeBlog(competitor.id, competitor.name, competitor.blogUrl, 40);
        
        const enrichedArticles: EnrichedArticle[] = result.articles.map(article => ({
          ...article,
          analysis: analyzeContent(article),
        }));
        
        allResults.push({
          ...result,
          articles: enrichedArticles,
        });
        
        allArticles.push(...enrichedArticles);
        
        console.log(`[SCRAPING] ${result.totalArticles} articles scraped from ${competitor.name}`);
      } catch (error) {
        console.error(`[SCRAPING] Error scraping ${competitor.name}:`, error);
      }
    }
    
    const globalAnalysis = analyzeAllArticles(allArticles);
    
    const dataDir = join(process.cwd(), 'data');
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, { recursive: true });
    }
    
    const outputPath = join(dataDir, 'scraped-articles.json');
    writeFileSync(
      outputPath,
      JSON.stringify({
        scrapedAt: new Date().toISOString(),
        totalBlogs: totalToProcess,
        totalArticles: globalAnalysis.totalArticles,
        blogs: allResults,
        globalAnalysis,
      }, null, 2)
    );
    
    const historyDir = join(dataDir, 'scrape-history');
    if (!existsSync(historyDir)) {
      mkdirSync(historyDir, { recursive: true });
    }
    
    const historyPath = join(historyDir, `scrape-${Date.now()}.json`);
    writeFileSync(
      historyPath,
      JSON.stringify({
        scrapedAt: new Date().toISOString(),
        totalBlogs: totalToProcess,
        totalArticles: globalAnalysis.totalArticles,
        blogs: allResults,
        globalAnalysis,
      }, null, 2)
    );
    
    console.log(`[SCRAPING] ✅ Completed! ${globalAnalysis.totalArticles} articles scraped`);

    return NextResponse.json({
      success: true,
      message: `Scraping terminé ! ${globalAnalysis.totalArticles} articles analysés depuis ${totalToProcess} blogs.`,
      data: {
        totalBlogs: totalToProcess,
        totalArticles: globalAnalysis.totalArticles,
        avgWordCount: Math.round(globalAnalysis.avgWordCount),
      }
    });
  } catch (error) {
    console.error('[SCRAPING API] Error:', error);
    return NextResponse.json(
      { error: 'Erreur lors du scraping: ' + (error as Error).message },
      { status: 500 }
    );
  }
}
