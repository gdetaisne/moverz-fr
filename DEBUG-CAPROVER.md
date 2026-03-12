# 🔧 Debug Erreur Caprover Build

## ✅ Fix OG Image Font (mars 2026)

**Erreur :** `Failed to load dynamic font for ✓ . Error: Failed to download dynamic font. Status: 400`

**Cause :** `@vercel/og` tente de télécharger une Google Font quand le caractère ✓ (checkmark) est rendu dans l’image OG — en build Docker/CapRover, le réseau est limité ou la requête retourne 400.

**Solution appliquée :** `app/opengraph-image.tsx`
- Police : `system-ui, sans-serif` (pas de fetch externe)
- Checkmark ✓ → bullet • (caractère supporté par system-ui)
- Runtime Node.js explicite, pas de fonts fournies en options

---

## ❌ Problème Actuel

Le build échoue sur Caprover avec l'erreur :
```
The command '/bin/sh -c npm run build' returned a non-zero code: 1
Build has failed!
```

## 🔍 Diagnostics Possibles

### Cause #1 : Erreur blog-canonique.ts (PROBABLE)
Le workaround temporaire dans `lib/blog.ts` empêche l'erreur en local, mais le build Next.js en prod peut être plus strict.

**Solution** : Restaurer `CANONICAL_BLOG_POSTS` temporairement

### Cause #2 : Variables d'environnement manquantes
Si des variables sont utilisées au build-time, elles doivent être définies.

**Solution** : Ajouter les env vars dans Caprover

### Cause #3 : Dépendances manquantes
Cheerio et autres nouvelles dépendances.

**Solution** : Vérifier que `package.json` est bien pushé

---

## 🚀 Solution Rapide

### Option A : Restaurer CANONICAL_BLOG_POSTS

Le fichier `lib/blog-canonique.ts` a été nettoyé (placeholders supprimés). On peut réactiver l'import.

**À faire** :
1. Dé-commenter l'import dans `lib/blog.ts`
2. Commit + push
3. Redéployer

### Option B : Voir les logs complets

Dans Caprover :
1. Cliquez sur "Masquer les Logs de Build" (en haut)
2. Scrollez vers le haut pour voir l'erreur exacte
3. Cherchez la ligne avec "Error:" ou "Failed to compile"

---

## 🎯 Action Immédiate

**Je vais restaurer l'import CANONICAL_BLOG_POSTS** car nous avons supprimé les placeholders invalides.

Commandes à exécuter :
```bash
cd /Users/luciestehelindetaisne/moverz-fr-2

# Restaurer l'import
# (je vais le faire automatiquement)

git add lib/blog.ts
git commit -m "fix(admin): restaurer CANONICAL_BLOG_POSTS après cleanup"
git push origin main
```

Ensuite Caprover redéploiera automatiquement.

---

## 📋 Checklist Debug

- [ ] Voir les logs complets dans Caprover
- [ ] Identifier l'erreur exacte
- [ ] Restaurer CANONICAL_BLOG_POSTS
- [ ] Push + attendre redéploiement
- [ ] Si ça ne marche pas : ajouter env vars même au build

---

**Note** : Les dashboards admin ne dépendent PAS de blog-canonique.ts, donc même si ce fichier pose problème, le dashboard admin devrait fonctionner.
