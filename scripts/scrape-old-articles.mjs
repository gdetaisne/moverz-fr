#!/usr/bin/env node

/**
 * Script pour scraper les articles existants des anciens sites
 * et les convertir en format CANONIQUE-*.md
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import { parse } from 'node-html-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapping ville → domaine
const CITY_DOMAINS = {
  'marseille': 'https://devis-demenageur-marseille.fr',
  'lyon': 'https://devis-demenageur-lyon.fr',
  'bordeaux': 'https://www.bordeaux-demenageur.fr',
  'lille': 'https://devis-demenageur-lille.fr',
  'nice': 'https://devis-demenageur-nice.fr',
  'toulouse': 'https://devis-demenageur-toulousain.fr',
  'strasbourg': 'https://devis-demenageur-strasbourg.fr',
  'nantes': 'https://devis-demenageur-nantes.fr',
  'rennes': 'https://devis-demenageur-rennes.fr',
  'rouen': 'https://devis-demenageur-rouen.fr',
  'montpellier': 'https://devis-demenageur-montpellier.fr',
};

// Mapping type → catégorie Moverz
const TYPE_MAPPING = {
  'prix': 'prix-et-devis',
  'guide': 'checklists-et-guides',
  'annuaire': 'demenagement-par-ville',
  'autre': 'conseils-demenagement',
};

async function fetchArticle(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractContentFromHTML(html, slug) {
  const root = parse(html);
  
  // Extraire le titre H1
  const h1 = root.querySelector('h1');
  const title = h1 ? h1.text.trim() : slug.replace(/-/g, ' ');
  
  // Extraire le contenu principal (article body)
  // Adaptation selon la structure HTML des anciens sites
  const articleBody = root.querySelector('article') || 
                      root.querySelector('.article-content') ||
                      root.querySelector('main');
  
  let markdownContent = '';
  
  if (articleBody) {
    // Convertir HTML en Markdown basique
    const paragraphs = articleBody.querySelectorAll('p, h2, h3, ul, ol');
    
    paragraphs.forEach(el => {
      const tag = el.tagName.toLowerCase();
      const text = el.text.trim();
      
      if (!text) return;
      
      if (tag === 'h2') {
        markdownContent += `\n## ${text}\n\n`;
      } else if (tag === 'h3') {
        markdownContent += `\n### ${text}\n\n`;
      } else if (tag === 'p') {
        markdownContent += `${text}\n\n`;
      } else if (tag === 'ul' || tag === 'ol') {
        const items = el.querySelectorAll('li');
        items.forEach(li => {
          markdownContent += `- ${li.text.trim()}\n`;
        });
        markdownContent += '\n';
      }
    });
  }
  
  // Extraire meta description si disponible
  const metaDesc = root.querySelector('meta[name="description"]');
  const description = metaDesc ? metaDesc.getAttribute('content') : '';
  
  return {
    title,
    description: description.substring(0, 160),
    body: markdownContent || '# ' + title + '\n\nContenu à migrer depuis l\'ancien site.',
  };
}

async function scrapeArticle(slug, city, type) {
  const domain = CITY_DOMAINS[city];
  
  if (!domain) {
    console.log(`⚠️  Ville "${city}" non trouvée, skip ${slug}`);
    return null;
  }
  
  // Construire l'URL de l'ancien article
  // Format typique : https://devis-demenageur-nice.fr/blog/.../{slug}/
  const url = `${domain}/blog/demenagement-${city}/${slug}/`;
  
  console.log(`Scraping: ${url}`);
  
  try {
    const html = await fetchArticle(url);
    const content = extractContentFromHTML(html, slug);
    
    return {
      slug,
      title: content.title,
      citySlug: city,
      type: TYPE_MAPPING[type] || 'conseils-demenagement',
      description: content.description,
      body: content.body,
    };
  } catch (error) {
    console.log(`❌ Erreur scraping ${slug}: ${error.message}`);
    return null;
  }
}

async function main() {
  console.log('🚀 Scraping des articles existants...\n');
  
  // Lire le CSV des articles manquants
  const csvPath = path.join(__dirname, '../ARTICLES-P1-STRATEGIQUES.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const lines = csvContent.split('\n').slice(1); // Skip header
  
  const outputDir = path.join(__dirname, '../scraped-articles');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  let successCount = 0;
  let failCount = 0;
  
  for (const line of lines) {
    if (!line.trim()) continue;
    
    const [slug, city, type] = line.split(',');
    
    const article = await scrapeArticle(slug, city, type);
    
    if (article) {
      // Générer le fichier CANONIQUE
      const frontmatter = `---
slug: ${article.slug}
title: "${article.title.replace(/"/g, '\\"')}"
city_slug: ${article.citySlug}
type: ${article.type}
description: "${article.description.replace(/"/g, '\\"')}"
---

${article.body}`;
      
      const filename = `CANONIQUE-${article.slug}.md`;
      fs.writeFileSync(path.join(outputDir, filename), frontmatter, 'utf-8');
      
      successCount++;
      console.log(`✅ ${filename}`);
    } else {
      failCount++;
    }
    
    // Rate limiting : attendre 500ms entre chaque requête
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log(`\n📊 Résultats :`);
  console.log(`  ✅ Succès : ${successCount}`);
  console.log(`  ❌ Échecs : ${failCount}`);
  console.log(`\n📁 Fichiers générés dans : ${outputDir}`);
  console.log(`\n💡 Prochaine étape :`);
  console.log(`   Copier les fichiers vers moverz_main/[P1]-TASK-XXX/CANONIQUE/`);
}

main().catch(console.error);

