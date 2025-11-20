# ⚠️ PRINCIPES SACRÉS - SITE HUB MOVERZ.FR

**LECTURE OBLIGATOIRE avant toute modification**

**Lien vers dépôt** : https://github.com/gdetaisne/moverz-fr

---

## 🎯 OBJECTIF ULTIME : HUB NATIONAL

**Ce site sert de hub central pour diriger vers les 11 sites locaux.**

### Business Model
```
SEO National → Moverz.fr → Sélection ville → Site local → Leads → €€€
```

**Si le hub est cassé → Mauvaise expérience → Perte de conversions**

**Donc toute décision technique DOIT prioriser le SEO et l'UX.**

---

## 🏆 PRINCIPE #1 : SEO FIRST (NON NÉGOCIABLE)

### ⚠️ Comprendre l'impact business

**Mauvais SEO = Perte de trafic et conversions**

- Canonical incorrect → Duplicate content → Pénalité Google → -50% trafic
- URL cassée (404) → Page non indexée → 0 trafic sur cette page
- Metadata incorrect → CTR faible → Moins de clics → Moins de conversions
- Internal linking cassé → Crawl budget gaspillé → Pages non découvertes

### 🚫 INTERDICTIONS ABSOLUES

**JAMAIS faire ces actions sans comprendre l'impact SEO** :

❌ **Modifier une URL** (slug, path, canonical)  
❌ **Toucher aux canonicals** (même "petit fix")  
❌ **Modifier les metadata** (title, description) sans raison  
❌ **Créer duplicate content** (même contenu sur 2 URLs)  
❌ **Supprimer une page** sans redirection 301  
❌ **Changer les liens vers les 11 sites locaux**  

### ✅ RÈGLES D'OR SEO

1. **Trailing slash PARTOUT** : `/page/` (jamais `/page`)
2. **Canonicals TOUJOURS corrects** : Pointe vers URL exacte de la page
3. **1 URL = 1 contenu unique** : Pas de duplication
4. **Redirections 301** : Si changement URL (jamais supprimer sans rediriger)
5. **Internal links** : Toujours valides, jamais cassés
6. **Liens vers sites locaux** : Toujours corrects (attention Bordeaux & Toulouse)

### 🛑 RED FLAGS - STOP ET DEMANDER

**Si tu vois ça dans une demande, STOP immédiatement** :

```
🚨 "Modifier les canonicals..."
🚨 "Changer les URLs de..."
🚨 "Supprimer la page..."
🚨 "Modifier les liens vers les villes..."
🚨 "Changer la structure..."
```

**Action** :
```
⚠️ STOP - Impact SEO Critique

Cette modification touche aux [canonicals/URLs/liens].
Impact potentiel sur le SEO = business critical.

Avant de continuer, je dois comprendre :
1. Pourquoi cette modification ?
2. Impact SEO analysé ?
3. Redirections 301 prévues si nécessaire ?
4. Tests prévus post-modification ?

Veux-tu continuer ? (Oui/Non)
```

---

## 🌐 URLS SITES LOCAUX - EXCEPTIONS CRITIQUES

### ⚠️ NE JAMAIS INVENTER LES URLs

**Pattern standard** (9 sites) :
```
https://devis-demenageur-{ville}.fr/
```

**EXCEPTIONS** (2 sites - À MÉMORISER) :
- **Bordeaux** : `https://www.bordeaux-demenageur.fr/` (www + ordre inversé)
- **Toulouse** : `https://devis-demenageur-toulousain.fr/` (adjectif toulousain)

**Source de vérité** : `lib/cities.ts`

**⚠️ RÈGLE** : Toujours utiliser les URLs de `lib/cities.ts`. Ne JAMAIS extrapoler ou inventer.

---

## 🌍 PRINCIPE #2 : SITE HUB NATIONAL (PAS DE CITYDATA)

### ⚠️ Différences avec sites locaux

**MOVERZ.FR = HUB NATIONAL** :

```
/Users/lucie/moverz-fr/    ← Site unique Next.js
```

**Ce site N'EST PAS** :
- ❌ Un site local (pas de cityData)
- ❌ Un site multi-villes (un seul site)
- ❌ Focalisé sur une ville spécifique

**Ce site EST** :
- ✅ Un hub national
- ✅ Un portail vers les 11 sites locaux
- ✅ Focalisé sur la comparaison de déménageurs en France

### 🚨 RÈGLES SPÉCIFIQUES AU HUB

#### CTAs → `/choisir-ville/`

**JAMAIS** pointer vers `/devis-gratuits/` (ça c'est pour les sites locaux)

**TOUJOURS** pointer vers `/choisir-ville/` pour permettre la sélection de ville

```typescript
// ❌ MAUVAIS (CTA site local)
<a href="/devis-gratuits/">Obtenir des devis</a>

// ✅ CORRECT (CTA hub)
<a href="/choisir-ville/">Choisir ma ville</a>
```

#### Pas de cityData

**JAMAIS** importer ou utiliser `cityData` :

```typescript
// ❌ INTERDIT sur moverz.fr
import { getCityDataFromUrl } from '@/lib/cityData';
const city = getCityDataFromUrl(env.SITE_URL);

// ✅ CORRECT : Focalisé national
title: "Comparateur Déménagement — France | Moverz"
```

#### Utiliser lib/cities.ts

**Pour lister les villes** :

```typescript
// ✅ CORRECT
import { CITIES } from '@/lib/cities';

CITIES.map(city => (
  <a href={`${city.url}/devis-gratuits/`}>
    {city.nameCapitalized}
  </a>
))
```

---

## 🔧 PRINCIPE #3 : COHÉRENCE AVEC SITES LOCAUX

### Design & UX

**Le hub doit** :
- ✅ Utiliser les mêmes composants visuels (Hero, HowItWorks, etc.)
- ✅ Respecter la même charte graphique (couleurs, fonts, spacing)
- ✅ Avoir une navigation cohérente

**Mais adapté** :
- ❌ Pas de mentions de ville spécifique
- ✅ Focus sur "France", "National", "11 villes"

### Wording

**Hub** :
- "Comparez 5+ devis dans toute la France"
- "11 villes couvertes"
- "Choisissez votre ville"

**Pas** :
- "Déménagement à [ville]"
- "Quartiers de [ville]"
- "Déménageurs [ville]"

---

## 🚫 RÉCAPITULATIF INTERDICTIONS

### **JAMAIS faire sans demander confirmation** :

1. ❌ Modifier canonical/URL/metadata
2. ❌ Utiliser cityData (c'est un hub national)
3. ❌ Hardcoder une ville spécifique dans le contenu
4. ❌ Pointer les CTAs vers `/devis-gratuits/` (→ `/choisir-ville/`)
5. ❌ Supprimer une page sans redirection 301
6. ❌ Modifier les URLs des 11 sites locaux dans `lib/cities.ts`
7. ❌ Créer du duplicate content avec les sites locaux
8. ❌ Casser les liens vers les 11 sites

### **TOUJOURS faire** :

1. ✅ Maintenir la cohérence design avec les sites locaux
2. ✅ Tester tous les liens vers les 11 villes
3. ✅ Vérifier les URLs Bordeaux & Toulouse (exceptions)
4. ✅ Focus national, pas local
5. ✅ CTAs → `/choisir-ville/`
6. ✅ Utiliser `lib/cities.ts` pour les liens villes
7. ✅ Documenter les modifications importantes

---

## 💡 MENTAL MODEL

**Avant CHAQUE modification, demande-toi** :

```
1. Est-ce que je touche au SEO ?
   → Si OUI : Comprendre impact + demander confirmation

2. Est-ce que je mentionne une ville spécifique ?
   → Si OUI : STOP, c'est un hub national

3. Est-ce que mes CTAs pointent vers /choisir-ville/ ?
   → Si NON : STOP, corriger

4. Est-ce que je touche aux liens vers les sites locaux ?
   → Si OUI : Vérifier Bordeaux & Toulouse (exceptions)

5. Est-ce que j'utilise cityData ?
   → Si OUI : STOP, pas de cityData sur le hub
```

**Si 1+ réponse problématique → STOP et demander**

---

## 🎯 RÉSUMÉ EN 3 POINTS

1. **SEO = CONVERSIONS** → Ne jamais casser sans comprendre
2. **HUB NATIONAL** → Pas de cityData, focus France entière
3. **COHÉRENCE** → Design aligné avec sites locaux, wording adapté

---

## 🔗 LIENS IMPORTANTS

- **Dépôt GitHub** : https://github.com/gdetaisne/moverz-fr
- **Sites locaux** : Définitions dans `lib/cities.ts`
- **Production** : https://moverz.fr

---

**Ces principes sont ABSOLUMENT NON NÉGOCIABLES.**

**Ils doivent être appliqués systématiquement avant toute modification de code.**

---

*Créé le : 2025-11-20*  
*Version : 1.0 - Site Hub Moverz.fr*

