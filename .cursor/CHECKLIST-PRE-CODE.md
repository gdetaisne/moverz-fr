# ✅ CHECKLIST PRÉ-CODE - Hub Moverz.fr

**À SUIVRE AVANT TOUTE MODIFICATION DE CODE**

---

## 🎯 WORKFLOW OBLIGATOIRE

```
1. LIRE cette checklist (2 min)
   ↓
2. VÉRIFIER les points AVANT de coder
   ↓
3. CODER avec les garde-fous en tête
   ↓
4. VÉRIFIER les points APRÈS avoir codé
   ↓
5. COMMIT avec message clair
```

---

## 📋 AVANT DE CODER

### ⚠️ Checklist Analyse

```markdown
□ Ai-je lu PRINCIPES-SACRES.md ?
  → Si NON : STOP, lis-le d'abord (10 min)

□ Ai-je lu ZONES-DE-RISQUE.md ?
  → Si NON : STOP, lis-le d'abord (10 min)

□ Est-ce que je touche au SEO ?
  (canonical, URL, metadata, internal links)
  → Si OUI : Impact compris ? Demander confirmation si doute

□ Est-ce que je mentionne une ville spécifique ?
  → Si OUI : STOP, hub = national

□ Est-ce que je touche aux liens vers sites locaux ?
  → Si OUI : Vérifier lib/cities.ts + exceptions Bordeaux/Toulouse
```

---

## 💻 PENDANT LE CODE

### ⚠️ Règles Permanentes

```markdown
□ Pas de ville hardcodée
  ❌ "Déménagement à Nice"
  ✅ "Déménagement en France"

□ CTAs → /choisir-ville/
  ❌ href="/devis-gratuits/"
  ✅ href="/choisir-ville/"

□ URLs sites locaux via lib/cities.ts
  ❌ href="https://devis-demenageur-nice.fr"
  ✅ href={`${city.url}/devis-gratuits/`}

□ Pas d'import cityData
  ❌ import { getCityDataFromUrl } from '@/lib/cityData';
  ✅ import { CITIES } from '@/lib/cities';

□ Trailing slash partout
  ❌ /page
  ✅ /page/

□ Wording national (pas local)
  ❌ "Quartiers de Lyon"
  ✅ "11 villes couvertes"
```

---

## 🔍 APRÈS AVOIR CODÉ

### ⚠️ Validation Code

```bash
# 1. Vérifier villes hardcodées
grep -r "à Nice\|à Lyon\|à Marseille\|à Lille\|à Toulouse\|à Bordeaux" /Users/lucie/moverz-fr/app/ /Users/lucie/moverz-fr/components/

# 2. Vérifier CTAs incorrects
grep -r 'href="/devis-gratuits' /Users/lucie/moverz-fr/app/ /Users/lucie/moverz-fr/components/

# 3. Vérifier URLs hardcodées
grep -r "devis-demenageur-" /Users/lucie/moverz-fr/ --include="*.tsx" | grep -v "city.url" | grep -v ".cursor"

# 4. Vérifier imports cityData (interdit)
grep -r "from '@/lib/cityData'" /Users/lucie/moverz-fr/app/ /Users/lucie/moverz-fr/components/

# 5. Vérifier trailing slashes
grep -r 'href="/[^"]*[^/]"' /Users/lucie/moverz-fr/app/ /Users/lucie/moverz-fr/components/ --include="*.tsx"
```

**Si 1+ résultat inattendu** → BUG potentiel, corriger avant commit

---

### ⚠️ Tests Manuels

```markdown
□ npm run dev fonctionne sans erreur ?

□ Page testée en local ?
  → http://localhost:3040/[page]

□ Tous les liens fonctionnent ?
  → Tester au moins 3 liens vers sites locaux

□ /choisir-ville/ fonctionne ?
  → Tester sélection d'au moins 2 villes

□ URLs Bordeaux & Toulouse correctes ?
  → Vérifier dans CitiesGrid ou /choisir-ville/
  → Bordeaux : www.bordeaux-demenageur.fr
  → Toulouse : devis-demenageur-toulousain.fr

□ Design cohérent avec sites locaux ?
  → Vérifier couleurs, fonts, spacing

□ Pas de duplicate content ?
  → Comparer H1/descriptions avec un site local
```

---

## 📝 AVANT COMMIT

### ⚠️ Checklist Finale

```markdown
□ Code validé (grep ci-dessus) ?

□ Tests manuels passés ?

□ Linter OK ?
  → npm run lint (si disponible)

□ Build OK ?
  → npm run build

□ Message commit clair ?
  Format : type(scope): description
  Ex: "fix(cta): Correct CTA links to /choisir-ville/"

□ Fichiers .cursor/ mis à jour si besoin ?
  → Documentation importante modifiée ?
```

---

## 🚨 RED FLAGS

**Si tu vois ça → STOP immédiatement** :

```
🚨 Modifier canonical/URL
🚨 Supprimer page sans redirection
🚨 Hardcoder ville spécifique
🚨 Import cityData
🚨 CTA vers /devis-gratuits/
🚨 URL site local hardcodée
🚨 Duplicate content avec site local
```

**Action** : Demander confirmation avant de continuer

---

## 📋 TEMPLATE CHECKLIST COMPLÈTE

**Copier-coller avant chaque modification** :

```markdown
## AVANT CODE

□ PRINCIPES-SACRES.md lu ?
□ ZONES-DE-RISQUE.md lu ?
□ Impact SEO compris ?
□ Pas de ville spécifique ?
□ Liens sites locaux OK ?

## PENDANT CODE

□ Pas de ville hardcodée
□ CTAs → /choisir-ville/
□ URLs via lib/cities.ts
□ Pas import cityData
□ Trailing slashes partout
□ Wording national

## APRÈS CODE

Validation automatique :
□ grep villes hardcodées
□ grep CTAs incorrects
□ grep URLs hardcodées
□ grep imports cityData
□ grep trailing slashes

Tests manuels :
□ npm run dev OK
□ Page testée local
□ Liens fonctionnent
□ /choisir-ville/ OK
□ Bordeaux & Toulouse OK
□ Design cohérent
□ Pas duplicate content

## AVANT COMMIT

□ Code validé
□ Tests passés
□ Linter OK
□ Build OK
□ Message commit clair
□ Documentation à jour
```

---

## 💡 EXEMPLES

### ✅ BON WORKFLOW

```
1. User demande : "Ajouter une nouvelle page /services/"

2. Cursor vérifie checklist :
   □ Impact SEO ? → Oui (nouvelle URL)
   □ Ville spécifique ? → Non
   □ Liens sites locaux ? → Non
   
3. Cursor code :
   - Page avec trailing slash : /services/
   - Canonical correct
   - Wording national
   - CTA → /choisir-ville/

4. Cursor valide :
   - Greps : 0 résultat
   - Tests : OK
   - Build : OK

5. Cursor commit :
   "feat(pages): Add /services/ page with national focus"
```

---

### ❌ MAUVAIS WORKFLOW

```
1. User demande : "Ajouter page déménagement Nice"

2. Cursor code directement :
   - Page /demenagement-nice/
   - "Déménagement à Nice" partout
   - CTA → /devis-gratuits/

3. Cursor commit sans vérifier

❌ PROBLÈMES :
- Ville hardcodée (hub = national)
- CTA incorrect (→ 404)
- Duplicate content avec site Nice
- Pas de trailing slash
```

---

## 🎯 RÉSUMÉ

**3 RÈGLES ABSOLUES** :

1. ✅ **LIRE** la checklist avant de coder
2. ✅ **VÉRIFIER** avec grep + tests après avoir codé
3. ✅ **VALIDER** tout avant commit

**Temps** : 5-10 min par modification  
**ROI** : -95% bugs, code propre, SEO intact

---

**Cette checklist est OBLIGATOIRE pour toute modification de code.**

**En cas de doute sur un point → STOP et demander.**

---

*Créé le : 2025-11-20*  
*Version : 1.0 - Hub Moverz.fr*

