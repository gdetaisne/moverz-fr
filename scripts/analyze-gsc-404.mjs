import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lire le CSV exporté de GSC
const csvPath = path.join(__dirname, '../gsc-404-moverz-fr.csv');

if (!fs.existsSync(csvPath)) {
  console.error('❌ Fichier gsc-404-moverz-fr.csv introuvable');
  console.log('\n📥 Pour l\'obtenir :');
  console.log('   1. Allez sur https://search.google.com/search-console');
  console.log('   2. Sélectionnez moverz.fr');
  console.log('   3. Menu gauche : Pages');
  console.log('   4. Cliquez sur "Page introuvable (404)"');
  console.log('   5. Exportez au format CSV');
  console.log('   6. Renommez le fichier en "gsc-404-moverz-fr.csv"');
  console.log('   7. Placez-le à la racine du projet\n');
  process.exit(1);
}

const csvContent = fs.readFileSync(csvPath, 'utf8');
const lines = csvContent.split('\n').slice(1); // Skip header

const urls404 = lines
  .map(line => {
    const match = line.match(/^"?([^",]+)"?/);
    return match ? match[1].trim() : null;
  })
  .filter(url => url && url.startsWith('https://moverz.fr/'));

console.log(`\n📊 Total 404 détectées par Google : ${urls404.length}\n`);

// Catégoriser les 404
const categories = {
  blog: [],
  villes: [],
  quartiers: [],
  corridors: [],
  autres: [],
};

urls404.forEach(url => {
  const urlPath = url.replace('https://moverz.fr', '');
  
  if (urlPath.startsWith('/blog/')) {
    categories.blog.push(url);
  } else if (urlPath.startsWith('/villes/') || urlPath.match(/^\/demenagement\/[^/]+\/?$/)) {
    categories.villes.push(url);
  } else if (urlPath.match(/\/demenagement\/[^/]+\/quartier-/)) {
    categories.quartiers.push(url);
  } else if (urlPath.match(/\/demenagement\/[^/]+\/demenagement-/)) {
    categories.corridors.push(url);
  } else {
    categories.autres.push(url);
  }
});

// Afficher les résultats
console.log('📁 **Catégories de 404** :\n');

if (categories.blog.length > 0) {
  console.log(`🔹 Blog (${categories.blog.length}) :`);
  categories.blog.slice(0, 10).forEach(url => console.log(`   ${url}`));
  if (categories.blog.length > 10) {
    console.log(`   ... et ${categories.blog.length - 10} autres`);
  }
  console.log('');
}

if (categories.villes.length > 0) {
  console.log(`🔹 Villes (${categories.villes.length}) :`);
  categories.villes.slice(0, 10).forEach(url => console.log(`   ${url}`));
  if (categories.villes.length > 10) {
    console.log(`   ... et ${categories.villes.length - 10} autres`);
  }
  console.log('');
}

if (categories.quartiers.length > 0) {
  console.log(`🔹 Quartiers (${categories.quartiers.length}) :`);
  categories.quartiers.slice(0, 10).forEach(url => console.log(`   ${url}`));
  if (categories.quartiers.length > 10) {
    console.log(`   ... et ${categories.quartiers.length - 10} autres`);
  }
  console.log('');
}

if (categories.corridors.length > 0) {
  console.log(`🔹 Corridors (${categories.corridors.length}) :`);
  categories.corridors.slice(0, 10).forEach(url => console.log(`   ${url}`));
  if (categories.corridors.length > 10) {
    console.log(`   ... et ${categories.corridors.length - 10} autres`);
  }
  console.log('');
}

if (categories.autres.length > 0) {
  console.log(`🔹 Autres (${categories.autres.length}) :`);
  categories.autres.slice(0, 10).forEach(url => console.log(`   ${url}`));
  if (categories.autres.length > 10) {
    console.log(`   ... et ${categories.autres.length - 10} autres`);
  }
  console.log('');
}

// Générer un rapport détaillé
const report = {
  date: new Date().toISOString(),
  total: urls404.length,
  categories: {
    blog: {
      count: categories.blog.length,
      urls: categories.blog,
    },
    villes: {
      count: categories.villes.length,
      urls: categories.villes,
    },
    quartiers: {
      count: categories.quartiers.length,
      urls: categories.quartiers,
    },
    corridors: {
      count: categories.corridors.length,
      urls: categories.corridors,
    },
    autres: {
      count: categories.autres.length,
      urls: categories.autres,
    },
  },
  recommendations: [],
};

if (categories.blog.length > 0) {
  report.recommendations.push({
    category: 'Blog',
    count: categories.blog.length,
    action: 'Vérifier lib/blog-canonique.ts ou créer les articles manquants',
    priority: 'HIGH',
  });
}

if (categories.villes.length > 0) {
  report.recommendations.push({
    category: 'Villes',
    count: categories.villes.length,
    action: 'Vérifier lib/cities.ts ou ajouter les villes manquantes + redirections',
    priority: 'HIGH',
  });
}

if (categories.quartiers.length > 0) {
  report.recommendations.push({
    category: 'Quartiers',
    count: categories.quartiers.length,
    action: 'Vérifier lib/cityData.ts ou générer les pages quartiers manquantes',
    priority: 'MEDIUM',
  });
}

if (categories.corridors.length > 0) {
  report.recommendations.push({
    category: 'Corridors',
    count: categories.corridors.length,
    action: 'Vérifier lib/cityData.ts ou générer les pages corridors manquantes',
    priority: 'MEDIUM',
  });
}

if (categories.autres.length > 0) {
  report.recommendations.push({
    category: 'Autres',
    count: categories.autres.length,
    action: 'Analyser manuellement ces URLs et créer redirections si nécessaire',
    priority: 'LOW',
  });
}

// Sauvegarder le rapport
const reportPath = path.join(__dirname, '../GSC-404-REPORT.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');

console.log(`✅ Rapport détaillé généré : ${path.basename(reportPath)}\n`);

console.log('📋 **Actions recommandées** :\n');
report.recommendations.forEach(rec => {
  const priorityEmoji = rec.priority === 'HIGH' ? '🔴' : rec.priority === 'MEDIUM' ? '🟠' : '🟢';
  console.log(`   ${priorityEmoji} ${rec.category} (${rec.count})`);
  console.log(`      → ${rec.action}\n`);
});

console.log('💡 **Next steps** :');
console.log('   1. Ouvrir GSC-404-REPORT.json pour voir toutes les URLs');
console.log('   2. Pour chaque catégorie, décider : créer la page OU rediriger');
console.log('   3. Tester en local avec npm run build');
console.log('   4. Déployer et valider dans GSC\n');

