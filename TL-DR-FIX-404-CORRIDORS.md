# 🎯 TL;DR : Fix 404 Corridors (Commit a278843)

**1 phrase** : Tu as fixé les 404 des corridors en changeant `/_corridor/` vers `/corridor/` dans le routing Next.js.

---

## ✅ Ce que tu as résolu (partie visible)

**Problème** : URLs comme `/paris-vers-marseille/` → 404

**Cause** : La route était `/_corridor/[from]/[to]/` (préfixe `_` = privée)

**Solution** : Renommage vers `/corridor/[from]/[to]/` (sans `_` = publique)

**Résultat** : ✅ Les URLs fonctionnent maintenant

**Fichiers modifiés** :
- `app/_corridor/` → `app/corridor/` (renommage)
- `middleware.ts` : rewrite vers `/corridor/` au lieu de `/_corridor/`
- `lib/corridors.ts` : fix typo `saint-etienne`
- `app/demenagement/[slug]/page.tsx` : ajout maillage interne (6 liens corridor)
- `components/templates/CorridorPage.tsx` : ajout lien vers ville destination

---

## ⚠️ Effets de bord potentiels (tes doutes)

### 1. 🟡 Distances sous-estimées (priorité)
**Problème** : `estimateRoadDistanceKm` utilise Haversine (vol d'oiseau)
- Paris-Marseille : ~660 km calculé, ~775 km réel
- Impact : Prix et temps sous-estimés → perte de crédibilité

**Solution** : Ajouter facteur de correction ×1.2
```typescript
const rawDistance = haversineDistance(...);
const correctedDistance = rawDistance * 1.2; // +20%
```

---

### 2. 🟡 Saint-Étienne avec accent (UX)
**Problème** : `/saint-étienne-vers-lyon/` → 404 (accent non géré)

**Solution** : Ajouter redirect 301
```javascript
{
  source: '/saint-étienne-vers-:to',
  destination: '/saint-etienne-vers-:to',
  permanent: true,
}
```

---

### 3. 🟢 Duplication de contenu (déjà géré)
**Risque** : Page accessible via 2 URLs
- `/paris-vers-marseille/` (publique)
- `/corridor/paris/marseille/` (directe)

**Status** : ✅ Canonical URLs OK (via `getFullMetadata`)
- Google indexera seulement `/{from}-vers-{to}/`

---

### 4. 🟢 Performance (déjà géré)
**Risque** : 380 pages corridor (20 villes × 19 destinations)

**Status** : ✅ ISR en place (`dynamicParams = true`)
- Pages générées à la demande, pas de build lent

---

### 5. 🟢 Maillage interne (raisonnable)
**Changement** : Ajout de 6 liens corridor sur chaque page ville

**Status** : ✅ OK, pas trop agressif
- Bon pour SEO (découverte des corridors)

---

## 📊 Matrice des risques

| Effet de bord | Probabilité | Impact | Action requise |
|---------------|-------------|--------|----------------|
| Distances sous-estimées | 🟡 Moyenne | 🟡 Moyen | Ajouter facteur ×1.2 |
| Saint-Étienne accent | 🟡 Moyenne | 🟢 Faible | Redirect 301 |
| Duplication contenu | 🟢 Faible | 🟢 Faible | Canonical OK ✅ |
| Performance SSG | 🟢 Faible | 🟢 Faible | ISR OK ✅ |
| Maillage agressif | 🟢 Faible | 🟢 Faible | 6 liens OK ✅ |

**Gravité globale** : 🟢 **Faible**

---

## 🎯 Actions immédiates

### Priorité 1 : Corriger les distances (5 min)
```typescript
// Dans lib/corridors.ts
export function estimateRoadDistanceKm(from: string, to: string): number | null {
  const rawDistance = haversineDistance(...);
  if (!rawDistance) return null;
  
  // Facteur de correction pour routes réelles
  const factor = rawDistance < 100 ? 1.1 : rawDistance < 300 ? 1.15 : 1.2;
  return Math.round(rawDistance * factor);
}
```

---

### Priorité 2 : Redirect Saint-Étienne (2 min)
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

---

### Priorité 3 : Surveiller GSC (J+7)
- Google Search Console → Pages
- Chercher `/corridor/`
- Vérifier qu'aucune URL n'est indexée

---

## ✅ Checklist rapide

### Tests
- [ ] `/paris-vers-marseille/` → 200 ✅
- [ ] `/saint-etienne-vers-lyon/` → 200 ✅
- [ ] `/saint-étienne-vers-lyon/` → 404 ? (ajouter redirect)
- [ ] Distances cohérentes avec Google Maps ? (ajouter facteur)

### Actions
- [ ] Ajouter facteur ×1.2 pour distances
- [ ] Ajouter redirect 301 Saint-Étienne
- [ ] Surveiller GSC pendant 30 jours

---

## 🚀 Verdict

**TON COMMIT EST SAFE** ✅

- ✅ Résout le problème des 404 corridor
- ✅ Canonical URLs bien gérées
- ✅ ISR en place (pas de problème de performance)
- ✅ Maillage interne raisonnable

**Seuls ajustements** :
1. Corriger les distances (crédibilité)
2. Redirect Saint-Étienne avec accent (UX)

**Sinon, déploie en confiance !** 💪

---

**Pour plus de détails** : Lire `ANALYSE-FIX-404-CORRIDORS.md`

