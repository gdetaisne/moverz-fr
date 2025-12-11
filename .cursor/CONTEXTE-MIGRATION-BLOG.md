# 📚 Contexte Migration Blog - moverz.fr

**Date:** 11 décembre 2025  
**Changement majeur:** Migration complète de 1084 articles blog avec contenu

---

## 🎯 Problème Initial

Les articles blog sur moverz.fr affichaient **"Article en cours de finalisation"** au lieu du contenu réel.

**Exemple :**
```
https://moverz.fr/blog/demenageur-pas-cher-rouen-economique/
→ Affichait un placeholder vide
```

---

## 🔍 Diagnostic

### Architecture Découverte

**Fichier clé :** `app/blog/[slug]/page.tsx` (lignes 159-196)

```typescript
{canonicalBody ? (
  // Affiche le contenu markdown
) : (
  // Affiche "Article en cours de finalisation" ← PROBLÈME !
)}
```

**Chaîne de chargement :**
1. `page.tsx` appelle `getCanonicalBodyBySlug(post.slug)`
2. `lib/blog.ts` cherche dans `CANONICAL_BLOG_POSTS`
3. `lib/blog-canonique.ts` contient les articles avec contenu

**Problème :** `blog-canonique.ts` avait seulement **métadonnées** (slug, title, description) mais **PAS le contenu** (body).

---

## ✅ Solution Appliquée

### 1. Script de Migration Automatique

**Créé :** `moverz_main/scripts/migrate-blog-to-moverz-fr.mjs`

**Ce qu'il fait :**
- Scanne tous les `.md` de `moverz_main/content/blog/` (1084 fichiers)
- Parse le frontmatter (title, description, slug, type, category)
- Extrait le contenu markdown (body)
- Génère `lib/blog-canonique.ts` au format TypeScript
- Échappe correctement les chaînes (backticks, $, backslashes)

**Résultat :**
```
📊 Migration réussie :
- 1084 articles migrés
- Fichier généré : 10.17 MB
- Format : TypeScript avec template literals
```

### 2. Structure Générée

**Avant (exemple) :**
```typescript
{
  slug: "demenageur-pas-cher-rouen-economique",
  title: "Déménageur Pas Cher Rouen...",
  description: "...",
  type: "satellite",
  citySlug: "rouen",
  // ❌ PAS de body
}
```

**Après :**
```typescript
{
  slug: "demenageur-pas-cher-rouen-economique",
  title: "Déménageur Pas Cher Rouen...",
  description: "...",
  type: "satellite",
  citySlug: "rouen",
  body: `# Déménageur Pas Cher Rouen...
  
Trouver un déménageur pas cher à Rouen sans sacrifier la qualité...

## Les Formules Économiques...

[tout le contenu markdown ici - ~1500 mots]`
}
```

### 3. Commit & Deploy

**Commit :** `ea3f6e6` - "feat: Import all 1084 blog articles with full content"  
**Changements :** 156035 insertions, 2238 deletions  
**Push :** GitHub moverz-fr main branch  
**Rebuild :** CapRover moverz-fr déclenché

---

## 📂 Architecture Blog moverz.fr

### Fichiers Clés

```
lib/
├── blog.ts              # Logique principale (merge, sort, helpers)
├── blog-data.ts         # Métadonnées CSV auto-générées (~9000 lignes)
├── blog-extra.ts        # Overrides manuels
└── blog-canonique.ts    # ⭐ CONTENU COMPLET (154k lignes, 10MB)

app/blog/
├── [slug]/page.tsx      # Page article individuel
├── page.tsx             # Hub blog
└── [category]/page.tsx  # Pages par catégorie
```

### Flux de Données

```
blog-data.ts (metadata)
     ↓
blog-extra.ts (overrides)
     ↓
blog-canonique.ts (content) ← NOUVELLE SOURCE
     ↓
blog.ts (merge via mergeBlogData)
     ↓
BLOG_POSTS (export final)
     ↓
page.tsx (affichage)
```

### Fonction Critique

**`lib/blog.ts` :**
```typescript
export function getCanonicalBodyBySlug(slug: string): string | undefined {
  const canonical = CANONICAL_BLOG_POSTS.find((post) => post.slug === slug);
  return canonical?.body; // ← Retourne le markdown
}
```

**`app/blog/[slug]/page.tsx` :**
```typescript
const canonicalBody = getCanonicalBodyBySlug(post.slug);

{canonicalBody ? (
  <ReactMarkdown>{canonicalBody}</ReactMarkdown> // ✅ Affiche contenu
) : (
  <PlaceholderArticleEnCours /> // ❌ Placeholder
)}
```

---

## 🔄 Synchronisation Future

### Si Articles Ajoutés/Modifiés dans moverz_main

**Relancer la migration :**
```bash
cd /Users/lucie/moverz_main
node scripts/migrate-blog-to-moverz-fr.mjs

cd /Users/lucie/moverz-fr
git add lib/blog-canonique.ts
git commit -m "chore: Update blog articles content"
git push origin main
# Rebuild CapRover automatique via webhook
```

### Automatisation Possible

**Option 1 :** GitHub Action qui trigger sur modification de `moverz_main/content/blog/*.md`  
**Option 2 :** Script post-commit hook  
**Option 3 :** Cron quotidien

---

## ⚠️ Points d'Attention

### 1. Taille du Fichier

`blog-canonique.ts` = **10.17 MB** (154k lignes)

- ✅ Git gère bien (< 100MB limite GitHub)
- ✅ TypeScript compile sans problème
- ✅ Next.js build fonctionne
- ⚠️ Attention aux merge conflicts (fichier énorme)

**Recommandation :** Ne jamais éditer `blog-canonique.ts` manuellement. Toujours regénérer avec le script.

### 2. Escape des Caractères

Le script échappe :
- Backticks `` ` `` → `\``
- Dollar `$` → `\$`
- Backslashes `\` → `\\`

**Pourquoi :** Le contenu est dans des template literals TypeScript.

### 3. citySlug Extraction

```javascript
function extractCityFromCategory(category) {
  // Cherche "nice", "lyon", etc. dans la category
  // Ex: "aide-demenagement-nice" → citySlug: "nice"
}
```

Utilisé pour afficher le lien ville dans la page article.

### 4. Type des Articles

- `type: "pilier"` → Guides longs piliers (2000-4000 mots)
- `type: "satellite"` → Articles satellites (1000-2000 mots)

Utilisé pour le tri et l'affichage prioritaire.

---

## 🧪 Tests

### Vérifier qu'un Article Affiche le Contenu

**Test manuel :**
1. Ouvrir https://moverz.fr/blog/demenageur-pas-cher-rouen-economique/
2. Vérifier présence du texte "Trouver un déménageur pas cher à Rouen"
3. Scroll → voir sections complètes (Formules Économiques, etc.)

**Test programmatique :**
```bash
curl -s "https://moverz.fr/blog/demenageur-pas-cher-rouen-economique/" \
  | grep -q "Trouver un déménageur pas cher" \
  && echo "✅ Contenu OK" || echo "❌ Placeholder"
```

### Vérifier Nombre d'Articles avec Contenu

**Dans Node REPL :**
```javascript
import { CANONICAL_BLOG_POSTS } from './lib/blog-canonique.ts';
console.log(CANONICAL_BLOG_POSTS.filter(p => p.body && p.body.length > 100).length);
// Doit afficher : 1084
```

---

## 📊 Stats

| Métrique | Valeur |
|----------|--------|
| Articles migrés | 1084 |
| Taille blog-canonique.ts | 10.17 MB |
| Lignes de code | 154,000 |
| Mots moyens/article | ~1,500 |
| Contenu total | ~1.6M mots |

---

## 🚀 Déploiement

**Statut actuel :**
- ✅ Code pushé sur GitHub (commit `ea3f6e6`)
- ✅ Rebuild CapRover lancé
- ⏳ Attente propagation (~5-10 min)

**Vérifier le déploiement :**
```bash
# Voir logs build
https://captain.gslv.cloud/#/apps/details/moverz-fr

# Tester live
curl -I https://moverz.fr/blog/demenageur-pas-cher-rouen-economique/
# Doit retourner HTTP 200

curl -s https://moverz.fr/blog/demenageur-pas-cher-rouen-economique/ \
  | grep -o "Trouver un déménageur"
# Doit afficher le texte
```

---

## 🔗 Liens Utiles

- **Repo moverz-fr :** https://github.com/gdetaisne/moverz-fr
- **Script migration :** `/Users/lucie/moverz_main/scripts/migrate-blog-to-moverz-fr.mjs`
- **Articles source :** `/Users/lucie/moverz_main/content/blog/`
- **CapRover :** https://captain.gslv.cloud/#/apps/details/moverz-fr

---

## 💡 Résumé pour Cursor

**En une phrase :**
> On a migré 1084 articles blog (10MB de contenu markdown) depuis moverz_main vers moverz-fr en générant automatiquement `lib/blog-canonique.ts`, ce qui remplace les placeholders "Article en cours" par le contenu réel.

**Fichiers modifiés :**
- ✅ `lib/blog-canonique.ts` (156k insertions)

**Aucun autre changement nécessaire :**
- ❌ Pas de modif dans `lib/blog.ts` (déjà OK)
- ❌ Pas de modif dans `app/blog/[slug]/page.tsx` (déjà OK)
- ❌ Pas de nouvelle dépendance npm

**Résultat :**
- Tous les articles avec `canonicalBody` défini affichent maintenant leur contenu complet
- Les articles sans `canonicalBody` affichent toujours le placeholder (normal si pas encore migrés)

---

*Généré automatiquement le 11 décembre 2025*

