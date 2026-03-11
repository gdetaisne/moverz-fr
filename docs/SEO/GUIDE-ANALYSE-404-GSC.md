# Guide : Analyser et corriger les 404 dans Google Search Console

## 1. Extraire la liste des 404 depuis GSC

### Étape 1 : Se connecter à Google Search Console
- https://search.google.com/search-console
- Sélectionner la propriété **moverz.fr**

### Étape 2 : Accéder aux 404
- Menu gauche : **Pages** (ou "Indexing" > "Pages")
- Cliquer sur **"Page introuvable (404)"** dans la section "Pourquoi les pages ne sont pas indexées"
- Vous voyez la liste complète des URLs en 404

### Étape 3 : Exporter les données
- Cliquer sur **"Exporter"** (en haut à droite)
- Télécharger au format **CSV**
- Renommer le fichier : `gsc-404-moverz-fr.csv`

---

## 2. Analyser les 404

### Script d'analyse automatique

Créez le fichier `scripts/analyze-gsc-404.mjs` :

```javascript
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lire le CSV exporté de GSC
const csvPath = path.join(__dirname, '../gsc-404-moverz-fr.csv');

if (!fs.existsSync(csvPath)) {
  console.error('❌ Fichier gsc-404-moverz-fr.csv introuvable');
  console.log('Téléchargez-le depuis Google Search Console et placez-le à la racine du projet.');
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

console.log(`📊 Total 404 détectées par Google : ${urls404.length}\n`);

// Catégoriser les 404
const categories = {
  blog: [],
  villes: [],
  quartiers: [],
  corridors: [],
  autres: [],
};

urls404.forEach(url => {
  const path = url.replace('https://moverz.fr', '');
  
  if (path.startsWith('/blog/')) {
    categories.blog.push(url);
  } else if (path.startsWith('/villes/') || path.match(/\/demenagement\/[^/]+\/?$/)) {
    categories.villes.push(url);
  } else if (path.match(/\/demenagement\/[^/]+\/quartier-/)) {
    categories.quartiers.push(url);
  } else if (path.match(/\/demenagement\/[^/]+\/demenagement-/)) {
    categories.corridors.push(url);
  } else {
    categories.autres.push(url);
  }
});

// Afficher les résultats
console.log('📁 **Catégories de 404** :\n');

console.log(`🔹 Blog (${categories.blog.length}) :`);
categories.blog.slice(0, 10).forEach(url => console.log(`   ${url}`));
if (categories.blog.length > 10) {
  console.log(`   ... et ${categories.blog.length - 10} autres\n`);
}

console.log(`🔹 Villes (${categories.villes.length}) :`);
categories.villes.slice(0, 10).forEach(url => console.log(`   ${url}`));
if (categories.villes.length > 10) {
  console.log(`   ... et ${categories.villes.length - 10} autres\n`);
}

console.log(`🔹 Quartiers (${categories.quartiers.length}) :`);
categories.quartiers.slice(0, 10).forEach(url => console.log(`   ${url}`));
if (categories.quartiers.length > 10) {
  console.log(`   ... et ${categories.quartiers.length - 10} autres\n`);
}

console.log(`🔹 Corridors (${categories.corridors.length}) :`);
categories.corridors.slice(0, 10).forEach(url => console.log(`   ${url}`));
if (categories.corridors.length > 10) {
  console.log(`   ... et ${categories.corridors.length - 10} autres\n`);
}

console.log(`🔹 Autres (${categories.autres.length}) :`);
categories.autres.slice(0, 10).forEach(url => console.log(`   ${url}`));
if (categories.autres.length > 10) {
  console.log(`   ... et ${categories.autres.length - 10} autres\n`);
}

// Générer un rapport détaillé
const report = {
  total: urls404.length,
  categories,
  recommendations: [],
};

if (categories.blog.length > 0) {
  report.recommendations.push({
    category: 'Blog',
    count: categories.blog.length,
    action: 'Vérifier lib/blog-canonique.ts ou créer les articles manquants',
  });
}

if (categories.villes.length > 0) {
  report.recommendations.push({
    category: 'Villes',
    count: categories.villes.length,
    action: 'Vérifier lib/cities.ts ou ajouter les villes manquantes',
  });
}

if (categories.quartiers.length > 0) {
  report.recommendations.push({
    category: 'Quartiers',
    count: categories.quartiers.length,
    action: 'Vérifier lib/cityData.ts ou générer les pages quartiers manquantes',
  });
}

if (categories.corridors.length > 0) {
  report.recommendations.push({
    category: 'Corridors',
    count: categories.corridors.length,
    action: 'Vérifier lib/cityData.ts ou générer les pages corridors manquantes',
  });
}

if (categories.autres.length > 0) {
  report.recommendations.push({
    category: 'Autres',
    count: categories.autres.length,
    action: 'Analyser manuellement ces URLs',
  });
}

// Sauvegarder le rapport
fs.writeFileSync(
  path.join(__dirname, '../GSC-404-REPORT.json'),
  JSON.stringify(report, null, 2),
  'utf8'
);

console.log('\n✅ Rapport généré : GSC-404-REPORT.json\n');

console.log('📋 **Actions recommandées** :\n');
report.recommendations.forEach(rec => {
  console.log(`   ${rec.category} (${rec.count}) → ${rec.action}`);
});
```

### Utilisation

```bash
# 1. Téléchargez le CSV depuis GSC et placez-le à la racine : gsc-404-moverz-fr.csv
# 2. Lancez le script
node scripts/analyze-gsc-404.mjs
```

---

## 3. Corriger les 404

### Option A : Créer les pages manquantes

**Pour les articles blog** :
```bash
# Si l'article n'existe pas dans lib/blog-canonique.ts
# → Créer le fichier content/blog/slug-article.md
# → Lancer scripts/add-b2b-articles.mjs pour l'intégrer
```

**Pour les villes** :
```bash
# Ajouter la ville dans lib/cities.ts
# → La page sera générée automatiquement par app/demenagement/[slug]/page.tsx
```

**Pour les quartiers/corridors** :
```bash
# Vérifier lib/cityData.ts
# Si la ville a des quartiers/corridors définis, les pages sont générées automatiquement
```

---

### Option B : Rediriger vers des pages existantes

**Si la page ne doit pas exister** (ancienne URL, erreur, etc.) :

Ajouter une redirection dans `next.config.mjs` :

```javascript
async redirects() {
  return [
    // ... autres redirections
    {
      source: '/ancienne-page',
      destination: '/nouvelle-page/',
      permanent: true, // 301 redirect
    },
  ]
}
```

---

### Option C : Retourner 410 Gone (page supprimée définitivement)

Si la page a été **intentionnellement supprimée** et ne devrait plus jamais exister :

Créer `app/page-supprimee/page.tsx` :

```typescript
export default function PageSupprimee() {
  return (
    <div>
      <h1>Cette page n'existe plus</h1>
      <p>Le contenu a été supprimé ou fusionné avec d'autres pages.</p>
      <a href="/">Retour à l'accueil</a>
    </div>
  );
}

export async function generateMetadata() {
  return {
    robots: {
      index: false,
      follow: false,
    },
  };
}
```

Et ajouter un header 410 dans `next.config.mjs` :

```javascript
async headers() {
  return [
    {
      source: '/page-supprimee',
      headers: [
        {
          key: 'Status',
          value: '410',
        },
      ],
    },
  ]
}
```

---

## 4. Valider les corrections

### Test local

```bash
npm run build
# Vérifier qu'il n'y a pas d'erreur de génération
```

### Test après déploiement

```bash
# Tester chaque URL corrigée
curl -I https://moverz.fr/url-corrigee
# Vous devez voir : HTTP/2 200 (page existe) ou HTTP/2 301 (redirection)
```

### Revalider dans GSC

1. Retourner dans **Google Search Console** > **Pages** > **Page introuvable (404)**
2. Cliquer sur une URL corrigée
3. Cliquer sur **"Valider la correction"**
4. Google va re-crawler l'URL sous 1-7 jours
5. Si OK, la 404 disparaît de la liste

---

## 5. Prévenir les futures 404

### Checklist avant chaque déploiement

- [ ] Vérifier que toutes les pages du sitemap existent
- [ ] Tester les liens internes (pas de liens cassés dans le code)
- [ ] Vérifier les redirections (next.config.mjs)
- [ ] Tester le build local (`npm run build`)

### Monitoring continu

- Vérifier GSC **1× par semaine** pour détecter les nouvelles 404
- Mettre en place une alerte GSC (Search Console envoie des emails si augmentation soudaine de 404)

---

## 6. Ressources

- [Next.js Redirects Documentation](https://nextjs.org/docs/app/api-reference/next-config-js/redirects)
- [Google Search Console Help](https://support.google.com/webmasters/answer/181708)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---

**Date de création** : 15/12/2025  
**Dernière mise à jour** : 15/12/2025

