# 🔍 Analyse Fix 404 Corridors (Commit a278843)

**Date** : 17 décembre 2025  
**Commit** : `a278843` - "🔗 Corridors: fix prod routing + internal linking"  
**Problème résolu** : 404 sur les URLs comme `/paris-vers-marseille/`

---

## 📋 Résumé exécutif

### ✅ Ce que tu as résolu (partie visible)

**Problème** : Les URLs de corridors (ex: `/paris-vers-marseille/`) retournaient des 404

**Solution** : Tu as changé le routing des corridors
- **Avant** : `/_corridor/[from]/[to]/` (route interne privée, préfixe `_`)
- **Après** : `/corridor/[from]/[to]/` (route interne publique)
- **Middleware** : Rewrite de `/{from}-vers-{to}` vers `/corridor/{from}/{to}`

**Résultat** : Les URLs publiques comme `/paris-vers-marseille/` fonctionnent maintenant ✅

---

## 🔧 Changements techniques détaillés

### 1. Renommage du dossier de route

**Fichier déplacé** : 
```
app/_corridor/[from]/[to]/page.tsx
  ↓
app/corridor/[from]/[to]/page.tsx
```

**Impact** :
- ✅ La route `/corridor/{from}/{to}` devient accessible
- ✅ Next.js peut la pré-render en SSG

**Pourquoi c'est important** :
- Le préfixe `_` dans Next.js rend le dossier "privé" (non accessible publiquement)
- En supprimant le `_`, la route devient publique

---

### 2. Update du middleware

**Fichier** : `middleware.ts`

**Changement** :
```typescript
// AVANT
url.pathname = `/_corridor/${from}/${to}`;

// APRÈS
url.pathname = `/corridor/${from}/${to}`;
```

**Impact** :
- ✅ Les URLs comme `/paris-vers-marseille/` sont maintenant rewritées vers `/corridor/paris/marseille`
- ✅ Le rewrite fonctionne car la route cible existe maintenant

---

### 3. Fix typo dans corridors.ts

**Fichier** : `lib/corridors.ts`

**Changement** :
```typescript
// AVANT
saint-etienne: { lat: 45.4397, lon: 4.3872 },

// APRÈS
"saint-etienne": { lat: 45.4397, lon: 4.3872 },
```

**Impact** :
- ✅ Les calculs de distance pour Saint-Étienne fonctionnent maintenant
- ✅ Les corridors impliquant Saint-Étienne ne génèrent plus d'erreurs

---

### 4. Ajout de maillage interne (pages ville)

**Fichier** : `app/demenagement/[slug]/page.tsx`

**Ajout** :
- Section "Déménager depuis {ville} vers…" avec 6 destinations principales
- Liens vers les corridors (ex: "Paris → Lyon")

**Impact** :
- ✅ Amélioration du maillage interne (SEO)
- ✅ Les corridors sont maintenant découvrables depuis les pages ville
- ✅ Google peut crawler les pages corridor via ces liens

---

### 5. Ajout de navigation dans CorridorPage

**Fichier** : `components/templates/CorridorPage.tsx`

**Ajout** :
- Lien "Voir Déménagement {destination}" en breadcrumb

**Impact** :
- ✅ UX : Utilisateurs peuvent naviguer facilement vers la ville de destination
- ✅ SEO : Plus de liens internes entre pages

---

## ⚠️ EFFETS DE BORD POTENTIELS

### 1. 🚨 URLs indexées avec l'ancienne structure

**Risque** : Si Google a indexé des URLs avec `/corridor/` (au lieu de `/{from}-vers-{to}/`)

**Symptôme** :
- Google Search Console pourrait montrer des erreurs 404 sur `/corridor/paris/marseille`
- Utilisateurs cliquant sur d'anciens liens `/corridor/...` auraient des 404

**Vérification** :
```bash
# Dans Google Search Console
# Aller dans "Pages" → Chercher "/corridor/"
# Voir si des URLs sont indexées
```

**Solution si problème** :
Ajouter une redirection 301 dans `next.config.mjs` :
```javascript
async redirects() {
  return [
    {
      source: '/corridor/:from/:to',
      destination: '/:from-vers-:to',
      permanent: true,
    },
  ];
},
```

**Probabilité** : 🟢 Faible (car `/_corridor` n'était pas accessible publiquement)

---

### 2. ⚠️ Duplication de contenu (même page accessible via 2 URLs)

**Risque** : La page corridor est maintenant accessible via 2 URLs :
1. `/paris-vers-marseille/` (URL publique, via middleware rewrite)
2. `/corridor/paris/marseille/` (URL directe, route Next.js)

**Symptôme** :
- Google pourrait indexer les 2 URLs
- Duplication de contenu → Dilution du SEO

**Vérification** :
```bash
# Tester si les 2 URLs fonctionnent
curl -I https://moverz.fr/paris-vers-marseille/
curl -I https://moverz.fr/corridor/paris/marseille/

# Les 2 devraient retourner 200
```

**Solution** :
Dans `app/corridor/[from]/[to]/page.tsx`, ajouter une **redirection 301** pour forcer l'URL canonique :

```typescript
import { redirect } from 'next/navigation';

export default function CorridorAutoPage({ params }: PageProps) {
  const from = getCityBySlug(params.from);
  const to = getCityBySlug(params.to);

  if (!from || !to || from.slug === to.slug) {
    notFound();
    return null;
  }

  // 🚨 IMPORTANT : Redirection 301 si accès direct via /corridor/
  // On force l'URL canonique /{from}-vers-{to}/
  const canonicalPath = `/${from.slug}-vers-${to.slug}/`;
  const currentPath = `/corridor/${from.slug}/${to.slug}`;
  
  // Si l'utilisateur accède directement à /corridor/..., rediriger
  // Note: Cette vérification doit se faire côté serveur
  // En Next.js 14+ avec App Router, on peut utiliser headers() pour vérifier
  
  // ... reste du code
}
```

**Alternative plus simple** : Utiliser la balise `canonical` (déjà en place via `getFullMetadata`)
```typescript
// Dans generateMetadata
const path = `${from.slug}-vers-${to.slug}`; // Sans /corridor/
```

**Probabilité** : 🟡 Moyenne

---

### 3. ⚠️ Maillage interne trop agressif

**Risque** : Ajout de 6 liens corridors sur chaque page ville

**Symptôme** :
- Chaque page ville a maintenant 6+ liens sortants vers d'autres pages
- Google pourrait considérer ça comme "trop de liens" (dilution du link juice)
- Pages lourdes (plus de DOM)

**Vérification** :
```bash
# Compter le nombre de liens sur une page ville
curl -s https://moverz.fr/demenagement/paris/ | grep -o '<a href' | wc -l
```

**Solution si problème** :
- Réduire à 3-4 destinations les plus pertinentes par ville
- Ajouter `rel="nofollow"` sur les liens moins prioritaires
- Ou créer une page dédiée "Déménager depuis Paris" avec tous les corridors

**Probabilité** : 🟢 Faible (6 liens, c'est raisonnable)

---

### 4. ⚠️ Performance : SSG vs ISR

**Risque** : Générer **toutes** les combinaisons de corridors en SSG

**Nombre de combinaisons** :
- 20 villes × 19 destinations = **380 pages corridor**
- Build time potentiellement long

**Symptôme** :
- `npm run build` pourrait être très long
- Erreurs de build si trop de pages

**Vérification** :
```bash
# Vérifier le temps de build
time npm run build

# Compter le nombre de pages générées
ls -la .next/server/app/corridor/*/*/ | wc -l
```

**Solution actuelle** :
Le code utilise `dynamicParams = true`, donc :
- Next.js génère les pages à la demande (ISR)
- Pas besoin de `generateStaticParams`
- ✅ Bon compromis

**Probabilité** : 🟢 Faible (déjà géré avec `dynamicParams`)

---

### 5. ⚠️ Estimation de distance incorrecte

**Risque** : La fonction `estimateRoadDistanceKm` utilise la distance à vol d'oiseau (Haversine)

**Symptôme** :
- Les distances affichées peuvent être **sous-estimées** (route réelle > vol d'oiseau)
- Exemple : Paris-Marseille :
  - Vol d'oiseau : ~660 km
  - Route réelle : ~775 km (via A7)

**Vérification** :
```typescript
// Dans lib/corridors.ts
estimateRoadDistanceKm("paris", "marseille")
// Retourne ~660 km (Haversine)
// Mais la vraie distance est ~775 km
```

**Impact** :
- ⚠️ Prix indicatifs sous-estimés
- ⚠️ Temps de trajet sous-estimés
- ⚠️ Perte de crédibilité si utilisateurs comparent avec Google Maps

**Solution** :
1. **Court terme** : Ajouter un facteur de correction (×1.2 pour les distances > 200 km)
   ```typescript
   const rawDistance = haversineDistance(...);
   const correctedDistance = rawDistance * 1.2; // +20% pour routes réelles
   ```

2. **Moyen terme** : Utiliser une API de routing (Google Maps, Here, OSRM)
   - Plus précis
   - Mais coût API + latence

3. **Long terme** : Pré-calculer les distances réelles et les stocker en JSON
   ```typescript
   // distances-reelles.json
   {
     "paris-marseille": 775,
     "lyon-bordeaux": 550,
     // ...
   }
   ```

**Probabilité** : 🟡 Moyenne (impact sur crédibilité)

---

### 6. ⚠️ Saint-Étienne : Slug inconsistant

**Risque** : Le slug `saint-etienne` (avec tiret) vs URL potentielle `saint-étienne` (avec accent)

**Symptôme** :
- Utilisateurs tapant `/saint-étienne-vers-lyon/` → 404
- Confusion entre `saint-etienne` et `saint-étienne`

**Vérification** :
```bash
# Tester les 2 variantes
curl -I https://moverz.fr/saint-etienne-vers-lyon/  # Devrait marcher
curl -I https://moverz.fr/saint-étienne-vers-lyon/  # 404 ?
```

**Solution** :
Ajouter une redirection 301 dans `next.config.mjs` :
```javascript
{
  source: '/saint-étienne-vers-:to',
  destination: '/saint-etienne-vers-:to',
  permanent: true,
},
{
  source: '/:from-vers-saint-étienne',
  destination: '/:from-vers-saint-etienne',
  permanent: true,
},
```

**Probabilité** : 🟡 Moyenne (les utilisateurs tapent souvent les accents)

---

### 7. ✅ Canonical URLs bien gérées

**Bon point** : Le code utilise déjà `getFullMetadata` qui génère les canonical URLs

**Vérification** :
```typescript
// Dans generateMetadata
const path = `${from.slug}-vers-${to.slug}`;
return getFullMetadata(path, title, description);
```

**Résultat** :
- La balise `<link rel="canonical">` pointe vers `/{from}-vers-{to}/`
- Même si la page est accessible via `/corridor/...`, le canonical est correct
- ✅ Pas de duplication de contenu dans Google

**Probabilité de problème** : ⚪ Nulle (déjà bien géré)

---

## 📊 Matrice des risques

| Effet de bord | Probabilité | Impact | Gravité | Action requise |
|---------------|-------------|--------|---------|----------------|
| URLs `/corridor/` indexées | 🟢 Faible | 🟢 Faible | 🟢 Faible | Surveiller GSC |
| Duplication de contenu | 🟡 Moyenne | 🟡 Moyen | 🟢 Faible | Canonical OK ✅ |
| Maillage interne agressif | 🟢 Faible | 🟢 Faible | 🟢 Faible | 6 liens OK |
| Performance SSG | 🟢 Faible | 🟢 Faible | 🟢 Faible | ISR déjà en place ✅ |
| Distances sous-estimées | 🟡 Moyenne | 🟡 Moyen | 🟡 Moyenne | Ajouter facteur ×1.2 |
| Saint-Étienne accent | 🟡 Moyenne | 🟢 Faible | 🟢 Faible | Ajouter redirect 301 |

**Gravité globale** : 🟢 **Faible** (la plupart des risques sont bien gérés)

---

## ✅ Ce qui est déjà bien fait

### 1. Canonical URLs
✅ `getFullMetadata` génère les canonical vers `/{from}-vers-{to}/`

### 2. ISR (Incremental Static Regeneration)
✅ `dynamicParams = true` permet la génération à la demande

### 3. Validation des paramètres
✅ Le code vérifie que `from` et `to` sont valides
✅ Retourne `notFound()` si invalide

### 4. Metadata SEO
✅ Title, description, et canonical bien configurés

### 5. Maillage interne
✅ Ajout de liens depuis les pages ville (bon pour SEO)

---

## 🎯 Actions recommandées

### Priorité 1 : Corriger les distances (crédibilité)

**Problème** : Distances sous-estimées (Haversine vs route réelle)

**Solution rapide** :
```typescript
// Dans lib/corridors.ts
export function estimateRoadDistanceKm(from: string, to: string): number | null {
  const rawDistance = haversineDistance(...);
  if (!rawDistance) return null;
  
  // Facteur de correction pour distances réelles
  // Routes courtes (~100 km) : ×1.1
  // Routes moyennes (100-300 km) : ×1.15
  // Routes longues (>300 km) : ×1.2
  const factor = rawDistance < 100 ? 1.1 : rawDistance < 300 ? 1.15 : 1.2;
  
  return Math.round(rawDistance * factor);
}
```

**Impact** : ✅ Distances plus réalistes, meilleure crédibilité

---

### Priorité 2 : Redirection Saint-Étienne avec accent

**Problème** : Utilisateurs tapant `/saint-étienne-vers-lyon/` → 404

**Solution** :
```javascript
// Dans next.config.mjs
async redirects() {
  return [
    {
      source: '/saint-étienne-vers-:to',
      destination: '/saint-etienne-vers-:to',
      permanent: true,
    },
    {
      source: '/:from-vers-saint-étienne',
      destination: '/:from-vers-saint-etienne',
      permanent: true,
    },
  ];
},
```

**Impact** : ✅ Meilleure UX, moins de 404

---

### Priorité 3 : Surveiller Google Search Console

**Problème potentiel** : URLs `/corridor/` indexées ou 404

**Action** :
1. Aller dans GSC → Pages
2. Chercher `/corridor/`
3. Vérifier s'il y a des URLs indexées ou des erreurs 404

**Si URLs indexées** :
- Ajouter une redirection 301 (voir Effet de bord #1)

**Si pas d'URLs indexées** :
- ✅ Rien à faire, le canonical fait son job

---

### Priorité 4 : Tester les 2 URLs (duplication)

**Test** :
```bash
# URL publique (via middleware rewrite)
curl -I https://moverz.fr/paris-vers-marseille/

# URL directe (route Next.js)
curl -I https://moverz.fr/corridor/paris/marseille/

# Les 2 devraient retourner 200
# Vérifier que les canonical sont identiques
```

**Si les 2 fonctionnent** :
- ✅ Pas de problème si canonical OK
- Ou ajouter une redirection 301 dans la route `/corridor/` (voir Effet de bord #2)

---

## 📝 Checklist de validation

### Tests immédiats
- [ ] Tester `/paris-vers-marseille/` → 200 ✅
- [ ] Tester `/lyon-vers-bordeaux/` → 200 ✅
- [ ] Tester `/saint-etienne-vers-lyon/` → 200 ✅
- [ ] Tester `/corridor/paris/marseille/` → 200 ? (vérifier)
- [ ] Tester `/saint-étienne-vers-lyon/` → 404 ? (vérifier)

### Tests SEO (J+7)
- [ ] Google Search Console → Pages → Chercher `/corridor/`
- [ ] Vérifier qu'aucune URL `/corridor/` n'est indexée
- [ ] Vérifier que les URLs `/{from}-vers-{to}/` sont indexées

### Tests UX
- [ ] Les liens corridor depuis les pages ville fonctionnent
- [ ] Les breadcrumbs dans CorridorPage fonctionnent
- [ ] Les distances affichées sont cohérentes avec Google Maps

### Actions de suivi
- [ ] Ajouter facteur de correction ×1.2 pour les distances
- [ ] Ajouter redirect 301 pour Saint-Étienne avec accent
- [ ] Surveiller GSC pendant 30 jours

---

## 💡 Conclusion

### ✅ Tu as résolu le problème principal

**Problème** : 404 sur `/paris-vers-marseille/` et autres corridors

**Solution** : Changement de `/_corridor/` vers `/corridor/` + middleware rewrite

**Résultat** : ✅ Les URLs fonctionnent maintenant

---

### ⚠️ Effets de bord potentiels (mais gérables)

**Les plus probables** :
1. 🟡 **Distances sous-estimées** → Ajouter facteur ×1.2
2. 🟡 **Saint-Étienne avec accent** → Ajouter redirect 301

**Les moins probables** :
3. 🟢 Duplication de contenu → Canonical OK ✅
4. 🟢 Performance SSG → ISR OK ✅
5. 🟢 Maillage interne → 6 liens OK ✅

---

### 🚀 Verdict final

**Ton commit est SAFE** ✅

- ✅ Résout le problème des 404 corridor
- ✅ Pas de risque d'outage
- ✅ Canonical URLs bien gérées
- ✅ ISR en place (pas de problème de build)

**Seuls ajustements nécessaires** :
1. Corriger les distances (facteur ×1.2)
2. Ajouter redirect 301 pour Saint-Étienne avec accent

**Sinon, tout est bon !** 💪

---

**Fichiers de référence** :
- Commit analysé : `a278843` (17 décembre 2025)
- Fichiers modifiés : `middleware.ts`, `app/corridor/`, `lib/corridors.ts`, `CorridorPage.tsx`, `page.tsx`

