# 🚨 ZONES DE RISQUE - Site Hub Moverz.fr

**Pour éviter les bugs récurrents sur le hub national**

**Avant de modifier du code, vérifie si tu touches à une de ces zones.**

---

## 🔴 ZONE À RISQUE #1 : Villes Hardcodées dans le Contenu

### 📊 Impact : CRITIQUE (UX + SEO)

**Bug** : Mention d'une ville spécifique au lieu de rester national

### 🐛 Exemples de bugs

```typescript
// ❌ BUG : Mention ville spécifique sur le hub
title: "Déménagement à Nice | Moverz"

// ❌ BUG : Description ville-spécifique
description: "Trouvez les meilleurs déménageurs à Lyon..."

// ❌ BUG : Contenu focalisé sur une ville
<h1>Comparez des déménageurs à Marseille</h1>

// ❌ BUG : Link hardcodé au lieu de lib/cities
<a href="https://devis-demenageur-nice.fr">Nice</a>
```

**Conséquence** :
- Utilisateur confus (hub doit rester national)
- Google pénalise (duplicate content avec sites locaux)
- Incohérence dans l'expérience utilisateur

---

### ✅ Solution : Rester NATIONAL

```typescript
// ✅ CORRECT : Focus national
title: "Comparateur Déménagement — France | Moverz"
description: "Comparez 5+ devis de déménageurs dans toute la France..."

// ✅ CORRECT : Utiliser lib/cities.ts
import { CITIES } from '@/lib/cities';

{CITIES.map(city => (
  <a key={city.slug} href={`${city.url}/devis-gratuits/`}>
    {city.nameCapitalized}
  </a>
))}

// ✅ CORRECT : Wording national
<h1>Comparez des déménageurs en France</h1>
<p>11 villes couvertes : {CITIES.map(c => c.nameCapitalized).join(', ')}</p>
```

---

### 🔍 Comment détecter

**Avant de commit, scanner le code pour** :

```bash
# Détecter mentions ville-spécifiques
grep -r "à Nice\|à Lyon\|à Marseille\|à Lille" /Users/lucie/moverz-fr/app/
grep -r "déménagement Nice\|déménagement Lyon" /Users/lucie/moverz-fr/components/

# Détecter liens hardcodés
grep -r "devis-demenageur-nice.fr\|devis-demenageur-lyon.fr" /Users/lucie/moverz-fr/ --include="*.tsx"
```

**Si 1+ résultat** → BUG potentiel (sauf dans les exemples ou commentaires)

---

## 🟠 ZONE À RISQUE #2 : CTAs vers `/devis-gratuits/`

### 📊 Impact : CRITIQUE (UX cassée)

**Bug** : CTA pointe vers `/devis-gratuits/` au lieu de `/choisir-ville/`

### 🐛 Scénario réel

```tsx
// ❌ BUG : CTA site local sur hub
<a href="/devis-gratuits/">Obtenir mes devis</a>

// Résultat : 404 sur moverz.fr (cette page n'existe pas sur le hub)
```

**Root cause** : Copier-coller depuis un site local sans adapter

---

### ✅ Solution : CTAs vers `/choisir-ville/`

```tsx
// ✅ CORRECT : CTA hub
<a href="/choisir-ville/">Choisir ma ville</a>
<a href="/choisir-ville/">Obtenir mes devis</a>
<a href="/choisir-ville/">Comparer 5+ devis</a>
```

**Workflow** :
```
Hub Moverz.fr → /choisir-ville/ → Sélection ville → Site local /devis-gratuits/
```

---

### 🔍 Comment détecter

**Cursor DOIT vérifier** :

```bash
# Chercher tous les liens /devis-gratuits/ sur le hub
grep -r 'href="/devis-gratuits' /Users/lucie/moverz-fr/ --include="*.tsx"
```

**Si 1+ résultat** → BUG (sauf dans CitiesGrid qui link vers sites locaux)

---

## 🟡 ZONE À RISQUE #3 : URLs Sites Locaux Incorrectes

### 📊 Impact : CRITIQUE (Liens cassés)

**Bug** : URLs des sites locaux mal formées (oubli exceptions Bordeaux & Toulouse)

### 🐛 Exemples de bugs

```typescript
// ❌ BUG : URL Bordeaux incorrecte
<a href="https://devis-demenageur-bordeaux.fr">Bordeaux</a>
// Correct : https://www.bordeaux-demenageur.fr

// ❌ BUG : URL Toulouse incorrecte
<a href="https://devis-demenageur-toulouse.fr">Toulouse</a>
// Correct : https://devis-demenageur-toulousain.fr

// ❌ BUG : Hardcoder au lieu d'utiliser lib/cities
<a href="https://devis-demenageur-nice.fr/devis-gratuits/">Nice</a>
```

**Conséquence** :
- Liens cassés (404)
- Mauvaise expérience utilisateur
- Perte de conversions

---

### ✅ Solution : TOUJOURS utiliser `lib/cities.ts`

```typescript
// ✅ CORRECT : Import cities
import { CITIES, getCityBySlug } from '@/lib/cities';

// ✅ CORRECT : Utiliser city.url
const bordeaux = getCityBySlug('bordeaux');
<a href={`${bordeaux.url}/devis-gratuits/`}>{bordeaux.nameCapitalized}</a>
// → https://www.bordeaux-demenageur.fr/devis-gratuits/

const toulouse = getCityBySlug('toulouse');
<a href={`${toulouse.url}/devis-gratuits/`}>{toulouse.nameCapitalized}</a>
// → https://devis-demenageur-toulousain.fr/devis-gratuits/

// ✅ CORRECT : Mapper toutes les villes
{CITIES.map(city => (
  <a key={city.slug} href={`${city.url}/devis-gratuits/`}>
    {city.nameCapitalized}
  </a>
))}
```

---

### 🔍 Comment détecter

```bash
# Chercher URLs hardcodées
grep -r "devis-demenageur-bordeaux.fr" /Users/lucie/moverz-fr/
grep -r "devis-demenageur-toulouse.fr" /Users/lucie/moverz-fr/

# Vérifier qu'on utilise bien city.url
grep -r "devis-demenageur-" /Users/lucie/moverz-fr/ --include="*.tsx" | grep -v "city.url"
```

---

## 🟢 ZONE À RISQUE #4 : Import cityData (Interdit)

### 📊 Impact : CRITIQUE (Confusion architecture)

**Bug** : Import de `cityData` sur le hub (réservé aux sites locaux)

### 🐛 Exemple de bug

```typescript
// ❌ BUG : cityData n'existe pas sur le hub
import { getCityDataFromUrl } from '@/lib/cityData';
const city = getCityDataFromUrl(env.SITE_URL);

// Résultat : Erreur (fichier n'existe pas sur moverz-fr)
```

**Root cause** : Copier-coller depuis un site local

---

### ✅ Solution : Utiliser `lib/cities.ts`

```typescript
// ✅ CORRECT : Pour lister les villes
import { CITIES } from '@/lib/cities';

// ✅ CORRECT : Pour récupérer une ville spécifique
import { getCityBySlug } from '@/lib/cities';
const nice = getCityBySlug('nice');

// ❌ PAS DE cityData sur le hub
```

---

## 🔵 ZONE À RISQUE #5 : Duplicate Content avec Sites Locaux

### 📊 Impact : ÉLEVÉ (Pénalité SEO)

**Bug** : Contenu identique entre hub et sites locaux

### 🐛 Exemple

```markdown
Hub : "Trouvez les meilleurs déménageurs à Nice"
Site Nice : "Trouvez les meilleurs déménageurs à Nice"
→ Duplicate content → Pénalité Google
```

---

### ✅ Solution : Wording différencié

**Hub** :
- Focus national : "en France", "11 villes"
- Comparaison globale
- Sélection de ville

**Sites locaux** :
- Focus local : "à [Ville]", "quartiers de [Ville]"
- Déménageurs locaux
- Devis direct

```typescript
// ✅ HUB : Wording national
<h1>Comparez des déménageurs en France</h1>
<p>11 villes couvertes</p>

// ✅ SITE LOCAL : Wording local
<h1>Déménagement à {city.nameCapitalized}</h1>
<p>Quartiers de {city.nameCapitalized}</p>
```

---

## 🛡️ CHECKLIST AVANT COMMIT

**Cursor DOIT vérifier** :

```markdown
□ Aucune ville hardcodée dans le contenu ?
  grep -r "à Nice\|à Lyon" app/

□ Tous les CTAs pointent vers /choisir-ville/ ?
  grep -r 'href="/devis-gratuits' app/

□ Toutes les URLs sites locaux utilisent lib/cities.ts ?
  grep -r "devis-demenageur-" --include="*.tsx" | grep -v "city.url"

□ Aucun import cityData ?
  grep -r "from '@/lib/cityData'" app/

□ Pas de duplicate content avec sites locaux ?
  Vérification manuelle des H1/descriptions

□ URLs Bordeaux & Toulouse correctes ?
  → Vérifier dans lib/cities.ts

□ Tous les liens vers villes fonctionnent ?
  → Test manuel sur /choisir-ville/ et /villes/
```

---

## 🚨 RÉCAPITULATIF ZONES CRITIQUES

| Zone | Impact | Prévention |
|------|--------|------------|
| Villes hardcodées | CRITIQUE | Rester national, pas de ville spécifique |
| CTAs → /devis-gratuits/ | CRITIQUE | Toujours → /choisir-ville/ |
| URLs incorrectes | CRITIQUE | Utiliser lib/cities.ts |
| Import cityData | CRITIQUE | Jamais sur le hub |
| Duplicate content | ÉLEVÉ | Wording différencié |

---

## 💡 MENTAL MODEL

**Avant CHAQUE modification** :

```
1. Est-ce que je mentionne une ville spécifique ?
   → STOP : Hub = national

2. Est-ce que mon CTA pointe vers /devis-gratuits/ ?
   → STOP : Hub → /choisir-ville/

3. Est-ce que j'hardcode une URL de site local ?
   → STOP : Utiliser lib/cities.ts

4. Est-ce que j'importe cityData ?
   → STOP : Pas de cityData sur hub

5. Est-ce que mon contenu duplique un site local ?
   → STOP : Wording différencié
```

---

**Ces zones de risque doivent être vérifiées SYSTÉMATIQUEMENT.**

**En cas de doute → STOP et demander confirmation.**

---

*Créé le : 2025-11-20*  
*Version : 1.0 - Hub Moverz.fr*

