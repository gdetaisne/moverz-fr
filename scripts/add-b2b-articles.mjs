import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lire les articles stratégiques
const articlesDir = path.join(__dirname, '../content/blog');
const articles = [
  'widget-ia-volumetrie-demenagement-comparatif.md',
  'marque-blanche-demenagement-guide.md',
  'estimer-volume-demenagement-ia-vs-visite.md',
  'demenageur-reduire-litiges-volume.md',
  'roi-widget-volumetrie-demenageur.md',
  'prix-demenagement-2025.md',
  'top-erreurs-a-eviter.md'
];

const newArticles = [];

articles.forEach(filename => {
  const filepath = path.join(articlesDir, filename);
  const content = fs.readFileSync(filepath, 'utf8');
  
  // Parser le frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) {
    console.error(`Erreur parsing ${filename}`);
    return;
  }
  
  const frontmatter = frontmatterMatch[1];
  const body = frontmatterMatch[2];
  
  // Extraire les champs du frontmatter (avec ou sans guillemets)
  const titleMatch = frontmatter.match(/title:\s*"?([^"\n]*)"?/);
  const slugMatch = frontmatter.match(/slug:\s*"?([^"\n]*)"?/);
  const descriptionMatch = frontmatter.match(/description:\s*"?([^"\n]*)"?/);
  
  const title = titleMatch ? titleMatch[1].trim() : '';
  const slug = slugMatch ? slugMatch[1].trim() : '';
  const description = descriptionMatch ? descriptionMatch[1].trim() : '';
  
  newArticles.push({
    slug,
    title,
    description,
    body: body.trim()
  });
});

// Lire le fichier blog-canonique.ts
const blogCanoniquePath = path.join(__dirname, '../lib/blog-canonique.ts');
let blogCanoniqueContent = fs.readFileSync(blogCanoniquePath, 'utf8');

// Trouver la position avant le dernier "];" (fermeture du tableau)
const lastArrayClosing = blogCanoniqueContent.lastIndexOf('];');

if (lastArrayClosing === -1) {
  console.error('Impossible de trouver la fermeture du tableau CANONICAL_BLOG_POSTS');
  process.exit(1);
}

// Générer le code pour les nouveaux articles
const newArticlesCode = newArticles.map(article => {
  // Échapper les backticks et backslashes dans le body
  const escapedBody = article.body
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');
  
  const escapedTitle = article.title.replace(/'/g, "\\'");
  const escapedDescription = article.description.replace(/'/g, "\\'");
  
  return `  {
    slug: "${article.slug}",
    title: \`${escapedTitle}\`,
    description: \`${escapedDescription}\`,
    type: "satellite",
    body: \`${escapedBody}\`
  }`;
}).join(',\n');

// Insérer les nouveaux articles avant le dernier "];"
const beforeClosing = blogCanoniqueContent.substring(0, lastArrayClosing);
const afterClosing = blogCanoniqueContent.substring(lastArrayClosing);

// Vérifier si le dernier article se termine par une virgule
const needsComma = !beforeClosing.trim().endsWith('}');

const updatedContent = beforeClosing + (needsComma ? ',\n' : '\n') + newArticlesCode + '\n' + afterClosing;

// Écrire le fichier mis à jour
fs.writeFileSync(blogCanoniquePath, updatedContent, 'utf8');

console.log(`✅ ${newArticles.length} articles ajoutés à lib/blog-canonique.ts`);
console.log('Articles ajoutés:');
newArticles.forEach(a => console.log(`  - ${a.slug}`));

