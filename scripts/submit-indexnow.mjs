#!/usr/bin/env node
/**
 * Script pour soumettre les URLs à Bing via IndexNow
 * https://www.indexnow.org/
 *
 * ⏰ Si 429 Too Many Requests : attendre 2-4h puis réessayer.
 * Voir docs/SEO/REMINDER-BING-INDEXNOW.md
 */

const URLS_TO_SUBMIT = [
  // Landing page Label Moverz (nouvelle)
  'https://moverz.fr/label-moverz/',
  
  // Article Pourquoi Moverz (2026-03-12)
  'https://moverz.fr/blog/pourquoi-moverz-meilleur-comparateur-demenagement/',
  
  // Article Pourquoi Moverz (blog)
  'https://moverz.fr/blog/pourquoi-moverz-meilleur-comparateur-demenagement/',

  // Article Moverz vs concurrents (2026-03-12)
  'https://moverz.fr/blog/moverz-vs-concurrents-comparateur-demenagement/',

  // Article Comparatif déménageurs Rennes 2026
  'https://moverz.fr/blog/comparatif-demenageurs-rennes-2026/',

  // Article Comparatif déménageurs Rennes 2026 (2026-03-12)
  'https://moverz.fr/blog/comparatif-demenageurs-rennes-2026/',

  // Nouveaux articles blog (7 articles)
  'https://moverz.fr/blog/label-moverz-certification-demenageurs/',
  'https://moverz.fr/blog/demenager-piano-prix-contraintes-guide-2026/',
  'https://moverz.fr/blog/top-10-demenageurs-france-2026/',
  'https://moverz.fr/blog/checklist-demenagement-30-jours/',
  'https://moverz.fr/blog/demenagement-sans-harcelement-protection-vie-privee/',
  'https://moverz.fr/blog/choisir-demenageur-piano-7-criteres-2026/',
  'https://moverz.fr/blog/case-study-marie-paris-lyon/',
  
  // Pages principales mises à jour
  'https://moverz.fr/',
  'https://moverz.fr/pourquoi-moverz/',
  'https://moverz.fr/comment-ca-marche/',
  'https://moverz.fr/comparateur-demenageurs/',
  'https://moverz.fr/faq/',
];

const INDEXNOW_ENDPOINT = 'https://www.bing.com/indexnow';
const HOST = 'moverz.fr';
const KEY = 'a2612212c86796e04e9e20e676fbafea'; // Clé IndexNow Moverz

async function submitToIndexNow(urls) {
  const body = JSON.stringify({
    host: HOST,
    key: KEY,
    urlList: urls,
  });

  console.log(`📤 Soumission de ${urls.length} URLs à IndexNow (Bing)...\n`);

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body,
    });

    if (response.ok) {
      console.log('✅ Succès! Les URLs ont été soumises à Bing.');
      console.log(`   Status: ${response.status} ${response.statusText}\n`);
      
      console.log('📋 URLs soumises:');
      urls.forEach((url, i) => {
        console.log(`   ${i + 1}. ${url}`);
      });
      
      console.log('\n💡 IndexNow notifiera aussi:');
      console.log('   - Google');
      console.log('   - Yandex');
      console.log('   - Autres moteurs compatibles');
      
      return true;
    } else {
      console.error(`❌ Erreur: ${response.status} ${response.statusText}`);
      const text = await response.text();
      console.error(`   Réponse: ${text}`);
      return false;
    }
  } catch (error) {
    console.error('❌ Erreur lors de la soumission:', error.message);
    return false;
  }
}

// Exécution
console.log('🚀 IndexNow Submission Tool\n');
console.log(`🌐 Host: ${HOST}`);
console.log(`🔑 Key: ${KEY.substring(0, 8)}...${KEY.substring(KEY.length - 8)}\n`);

submitToIndexNow(URLS_TO_SUBMIT).then((success) => {
  if (success) {
    console.log('\n✨ Terminé! Vérifiez Bing Webmaster Tools dans quelques heures.');
  } else {
    console.log('\n⚠️  La soumission a échoué. Vérifiez les logs ci-dessus.');
    process.exit(1);
  }
});
