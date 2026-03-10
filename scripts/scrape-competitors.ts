#!/usr/bin/env tsx

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { scrapeBlog } from '../lib/admin/scraper';
import { analyzeContent, analyzeAllArticles } from '../lib/admin/content-analyzer';
import type { ScrapedArticle } from '../lib/admin/scraper';

interface CompetitorBlog {
  id: number;
  name: string;
  blogUrl: string;
  active: boolean;
}

interface EnrichedArticle extends ScrapedArticle {
  analysis: ReturnType<typeof analyzeContent>;
}

async function main() {
  console.log('🚀 Moverz Competitor Scraping Engine v1.0\n');
  console.log('═'.repeat(60));
  
  const competitorsPath = join(process.cwd(), 'data', 'competitor-blogs.json');
  if (!existsSync(competitorsPath)) {
    console.error('❌ competitor-blogs.json not found in data/');
    process.exit(1);
  }
  
  const competitors: CompetitorBlog[] = JSON.parse(readFileSync(competitorsPath, 'utf-8'));
  const activeCompetitors = competitors.filter(c => c.active);
  
  console.log(`📊 Total competitors: ${competitors.length}`);
  console.log(`✅ Active competitors: ${activeCompetitors.length}`);
  console.log('═'.repeat(60));
  
  const allResults: any[] = [];
  const allArticles: EnrichedArticle[] = [];
  
  let processedCount = 0;
  const totalToProcess = Math.min(activeCompetitors.length, 10);
  
  console.log(`\n🎯 Processing ${totalToProcess} blogs (rate-limited: ~2s per request)\n`);
  
  for (const competitor of activeCompetitors.slice(0, totalToProcess)) {
    processedCount++;
    console.log(`\n[${processedCount}/${totalToProcess}] ${competitor.name}`);
    console.log('─'.repeat(60));
    
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
    
    console.log(`   📈 Stats: ${result.totalArticles} articles scraped`);
    if (result.error) {
      console.log(`   ⚠️  Error: ${result.error}`);
    }
  }
  
  console.log('\n' + '═'.repeat(60));
  console.log('📊 GLOBAL ANALYSIS');
  console.log('═'.repeat(60));
  
  const globalAnalysis = analyzeAllArticles(allArticles);
  
  console.log(`\n✅ Total articles scraped: ${globalAnalysis.totalArticles}`);
  console.log(`📝 Average word count: ${Math.round(globalAnalysis.avgWordCount)} mots`);
  
  console.log('\n🏆 Top Themes:');
  globalAnalysis.topThemes.slice(0, 5).forEach((t, i) => {
    console.log(`   ${i + 1}. ${t.theme}: ${t.count} articles`);
  });
  
  console.log('\n🌍 Top Cities:');
  globalAnalysis.topCities.slice(0, 5).forEach((c, i) => {
    console.log(`   ${i + 1}. ${c.city}: ${c.count} articles`);
  });
  
  console.log('\n🎯 Intent Distribution:');
  Object.entries(globalAnalysis.intentDistribution).forEach(([intent, count]) => {
    console.log(`   ${intent}: ${count} articles`);
  });
  
  const dataDir = join(process.cwd(), 'data');
  if (!existsSync(dataDir)) {
    mkdirSync(dataDir, { recursive: true });
  }
  
  const outputPath = join(dataDir, 'scraped-articles.json');
  writeFileSync(
    outputPath,
    JSON.stringify(
      {
        scrapedAt: new Date().toISOString(),
        totalBlogs: allResults.length,
        totalArticles: allArticles.length,
        globalAnalysis,
        blogs: allResults,
        allArticles,
      },
      null,
      2
    )
  );
  
  console.log(`\n💾 Data saved to: ${outputPath}`);
  
  const historyDir = join(dataDir, 'scrape-history');
  if (!existsSync(historyDir)) {
    mkdirSync(historyDir, { recursive: true });
  }
  
  const timestamp = new Date().toISOString().split('T')[0];
  const historyPath = join(historyDir, `scrape-${timestamp}.json`);
  writeFileSync(
    historyPath,
    JSON.stringify({ scrapedAt: new Date().toISOString(), totalArticles: allArticles.length, summary: globalAnalysis }, null, 2)
  );
  
  console.log(`📜 History saved to: ${historyPath}`);
  console.log('\n✅ Scraping complete!\n');
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
