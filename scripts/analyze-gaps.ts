#!/usr/bin/env tsx

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { analyzeContentGaps } from '../lib/admin/gap-analyzer';
import { getBlogPostsMeta } from '../lib/blog';

async function main() {
  console.log('🔍 Moverz Content Gap Analysis\n');
  console.log('═'.repeat(60));
  
  const scrapedPath = join(process.cwd(), 'data', 'scraped-articles.json');
  if (!existsSync(scrapedPath)) {
    console.error('❌ scraped-articles.json not found. Run scrape-competitors.ts first.');
    process.exit(1);
  }
  
  console.log('📂 Loading scraped competitor data...');
  const scrapedData = JSON.parse(readFileSync(scrapedPath, 'utf-8'));
  const scrapedArticles = scrapedData.allArticles || [];
  console.log(`   ✅ Loaded ${scrapedArticles.length} competitor articles`);
  
  console.log('📂 Loading Moverz articles...');
  const moverzArticles = getBlogPostsMeta();
  console.log(`   ✅ Loaded ${moverzArticles.length} Moverz articles`);
  
  console.log('\n🧠 Analyzing content gaps...');
  const gapAnalysis = analyzeContentGaps(scrapedArticles, moverzArticles);
  
  console.log('\n' + '═'.repeat(60));
  console.log('📊 GAP ANALYSIS RESULTS');
  console.log('═'.repeat(60));
  
  console.log(`\n✅ Total gaps identified: ${gapAnalysis.totalGaps}`);
  console.log(`🔥 High priority gaps: ${gapAnalysis.highPriorityGaps}`);
  
  const topGaps = gapAnalysis.gaps.slice(0, 10);
  console.log('\n🏆 Top 10 Opportunities:\n');
  
  topGaps.forEach((gap, index) => {
    const statusEmoji = gap.moverzStatus === 'absent' ? '❌' : gap.moverzStatus === 'weak' ? '⚠️' : '✅';
    const priorityEmoji = gap.priority === 'high' ? '🔥' : gap.priority === 'medium' ? '⚡' : '💡';
    
    console.log(`${index + 1}. ${priorityEmoji} ${gap.topic}`);
    console.log(`   Score: ${gap.opportunityScore}/100 | Status: ${statusEmoji} ${gap.moverzStatus}`);
    console.log(`   Competitors: ${gap.competitorCoverage.totalArticles} articles (avg ${gap.competitorCoverage.avgWordCount} mots)`);
    console.log(`   Recommended: ${gap.recommendedWordCount} mots\n`);
  });
  
  console.log('\n📈 Theme Distribution:');
  Object.entries(gapAnalysis.themeDistribution)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .forEach(([theme, count]) => {
      console.log(`   ${theme}: ${count} gaps`);
    });
  
  console.log('\n🌍 City Distribution:');
  Object.entries(gapAnalysis.cityDistribution)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .forEach(([city, count]) => {
      console.log(`   ${city}: ${count} gaps`);
    });
  
  const outputPath = join(process.cwd(), 'data', 'content-gaps.json');
  writeFileSync(outputPath, JSON.stringify(gapAnalysis, null, 2));
  
  console.log(`\n💾 Gap analysis saved to: ${outputPath}`);
  console.log('\n✅ Analysis complete!\n');
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
