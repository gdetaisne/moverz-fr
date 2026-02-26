# 📊 ARCHITECTURE METADATA MOVERZ

**Dernière mise à jour** : 27 février 2026  
**Status** : ✅ Production  
**Responsable** : Lucie (Co-founder)

---

## 🎯 FONCTIONNEMENT GLOBAL

### Hiérarchie Metadata Next.js

```
app/layout.tsx (Metadata par défaut)
    ↓
app/*/page.tsx (Metadata spécifique)
    ↓
Fonction helper getFullMetadata()
```

**Règle d'or** : Les metadata spécifiques de chaque `page.tsx` **overrident** les metadata par défaut de `layout.tsx`.

### Template Title Automatique

**Défini dans** : `app/layout.tsx`

```typescript
title: {
  default: "Vous déménagez, on compare : 3-5 Devis Sans Stress | Moverz",
  template: "%s | Moverz"
}
```

**Impact** : Toutes les pages qui définissent un `title` se voient automatiquement ajouter ` | Moverz` à la fin.

**⚠️ IMPORTANT** : Pour éviter les doublons "| Moverz | Moverz", la fonction `getFullMetadata()` strip automatiquement le suffixe ` | Moverz` s'il existe déjà dans le title fourni.

---

## 🗂️ TYPOLOGIE DES PAGES & METADATA

### 1. **Homepage** (`app/page.tsx`)

**Fonction** : Override explicite des metadata du layout  
**Metadata source** : Définie directement dans `app/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Vous déménagez, on compare : 3-5 Devis Sans Stress | Moverz",
  description: "✓ On centralise tout (1 seul contact) ✓ 0 harcèlement ✓ Pros certifiés finances/assurance contrôlées · 3-5 devis comparables · Note 4.9/5 · 3 min · Gratuit",
  alternates: {
    canonical: 'https://moverz.fr/',
  },
  openGraph: {
    title: "Vous déménagez, on compare : 3-5 Devis Sans Stress",
    description: "✓ On centralise tout (1 seul contact) ✓ 0 harcèlement ✓ Pros certifiés finances/assurance contrôlées · 3-5 devis comparables · Note 4.9/5 · 3 min · Gratuit",
    url: 'https://moverz.fr/',
    siteName: 'Moverz',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Moverz - Comparateur de déménagement anti-arnaque · Note 4.9/5' }],
    type: 'website',
  },
};
```

**Différenciateurs clés** (à maintenir) :
1. Correspondant unique (Moverz centralise tous les échanges)
2. 0 harcèlement téléphonique
3. Anti-arnaque (Creditsafe : finances + solvabilité)
4. Déménageurs certifiés (licence + assurance)
5. 3-5 devis comparables
6. 3 minutes
7. 100% gratuit
8. Note 4.9/5

---

### 2. **Pages Villes** (`app/demenagement/[slug]/page.tsx`)

**Fonction** : `getCityPageMetadata(city: CityInfo)`  
**Fichier** : `lib/seo/metadata.ts`

#### Format Title
```
Déménagement {Ville} dès {PrixMin}€ · Devis 5–7j | Moverz
```

#### Format Description
```
✓ 1 contact ✓ 0 harcèlement · {Ville} : T1 dès {t1}, T2 {t2}, Maison {house} · Pros certifiés · Note 4.9/5 · Gratuit ({année})
```

#### Exemple Concret (Nice)
```typescript
Title: "Déménagement Nice dès 780€ · Devis 5–7j | Moverz"
Description: "✓ 1 contact ✓ 0 harcèlement · Nice : T1 dès 780€, T2 1180€, Maison 2050€ · Pros certifiés · Note 4.9/5 · Gratuit (2026)"
```

**USP présents** : Correspondant unique, 0 harcèlement, Pros certifiés, Social proof (4.9/5), Prix détaillés

#### Calcul des prix
Les prix sont calculés automatiquement par `getLocalPricesForMeta(citySlug)` défini dans `lib/pricing-corridors.ts`.

---

### 3. **Pages Services Ville** (`app/demenagement/[city]/[service]/page.tsx`)

**Exemples** : `/demenagement/nice/piano/`, `/demenagement/toulouse/garde-meuble/`

**Fonction** : `getCityServiceMetadata({ city, service })`  
**Fichier** : `lib/seo/metadata.ts`

#### Format Title
```
{ServiceTitle} | Moverz
```

Exemple : "Déménagement piano à Nice : devis & prix 2026 | Moverz"

#### Format Description
```
Comparez des devis comparables sous 5 à 7 jours pour votre projet depuis {Ville}. Dossier anonyme, 0 harcèlement. Déménageurs contrôlés et assurés. 100% gratuit.
```

---

### 4. **Pages Corridors** (`app/[ville-a]-vers-[ville-b]/page.tsx`)

**Exemples** : `/paris-vers-lyon/`, `/nice-vers-marseille/`

**Fonction** : `generateCorridorMetadata(originCitySlug, originCityName, destination, destinationSlug?)`  
**Fichier** : `components/templates/CorridorPage.tsx`

#### Format Title (version optimisée avec distance)
```
Déménagement {Ville A} → {Ville B} ({Distance}km) | Devis 5–7j · {Année} | Moverz
```

#### Format Description
```
{A}→{B} ({X}km) : devis comparables sous 5–7j. Tarifs : T1 {prix}€ · T2 {prix}€ · Maison {prix}€. Pros contrôlés, 0€.
```

#### Exemple Concret (Paris → Lyon)
```typescript
Title: "Déménagement Paris → Lyon (465km) | Devis 5–7j · 2026 | Moverz"
Description: "Paris→Lyon (465km) : devis comparables sous 5–7j. Tarifs : T1 950€ · T2 1350€ · Maison 2200€. Pros contrôlés, 0€."
```

#### Calcul automatique
- Distance : `estimateRoadDistanceKm(originCitySlug, destSlug)`
- Prix : `getCorridorPricesForMeta(originCitySlug, destSlug)`

---

### 5. **Pages Quartiers** (`app/quartiers/[slug]/page.tsx`)

**Exemples** : `/quartiers/nice-vieux-nice/`, `/quartiers/toulouse-capitole/`

**Fonction** : `generateQuartierMetadata(citySlug, cityName, quartierSlug, quartierName)`  
**Fichier** : `components/templates/QuartierPage.tsx`

#### Format Title
```
Déménagement {Quartier} ({Ville}) | Devis 5–7j · Pros locaux | Moverz
```

#### Format Description
```
{Quartier}, {Ville} : devis comparables sous 5–7j. Dossier anonyme, pros locaux contrôlés, 0€.
```

---

### 6. **Articles Blog** (`app/blog/[slug]/page.tsx`)

**Fonction** : `generateMetadata({ params })`  
**Traitement** :

```typescript
const title = post.category === "pro"
  ? `${post.title} | Blog déménageurs`
  : `${post.title} | Blog déménagement`;

return getFullMetadata(path, title, post.description);
```

#### Exemple
```
Title: "Prix déménagement Nice 2026 : tableau complet | Blog déménagement | Moverz"
Description: (post.description)
```

---

### 7. **Pages Hub Blog** (`app/blog/[category]/page.tsx`)

**Exemples** : `/blog/prix-et-devis/`, `/blog/conseils-demenagement/`

**Metadata** : Définie directement dans chaque page avec `getFullMetadata()`

#### Exemple (Prix & Devis)
```typescript
export const metadata: Metadata = getFullMetadata(
  "blog/prix-et-devis",
  "Prix déménagement & devis : guides et tableaux | Moverz",
  "Tous nos articles sur le prix d'un déménagement : fourchettes de prix, devis, garde-meuble, longue distance et astuces pour payer moins cher."
);
```

---

### 8. **Pages Institutionnelles**

**Exemples** : `/pourquoi-moverz/`, `/label-moverz/`, `/faq/`, `/contact/`

**Metadata** : Définie directement dans chaque `page.tsx` avec `getFullMetadata()` ou manuellement.

---

## 🔧 FONCTION CENTRALE : `getFullMetadata()`

**Fichier** : `lib/canonical-helper.ts`

```typescript
export function getFullMetadata(
  path: string,
  title: string,
  description: string
) {
  // Strip trailing "| Moverz" pour éviter duplication avec layout.tsx title.template
  const normalizedTitle = title.replace(/\s*\|\s*Moverz\s*$/i, '').trim();
  
  return {
    title: normalizedTitle,
    description,
    alternates: getCanonicalAlternates(path),
    openGraph: getOpenGraphMetadata(path, normalizedTitle, description),
  };
}
```

### Responsabilités
1. **Normalisation du title** : Retire automatiquement ` | Moverz` si présent
2. **URL canonique** : Génère via `getCanonicalUrl(path)`
3. **OpenGraph** : Génère automatiquement les meta OG avec image `/opengraph-image`
4. **Twitter Card** : Généré automatiquement au niveau layout

---

## 📐 RÈGLES DE CARACTÈRES (Google SERP)

### Title
- **Max conseillé** : 60 caractères (incluant ` | Moverz` = 9 chars)
- **Max technique** : 70 caractères
- **Coupure Google** : ~65 chars (selon device)

### Description
- **Min conseillé** : 120 caractères
- **Max conseillé** : 160 caractères
- **Coupure Google** : ~155-160 chars mobile, ~165 desktop

### Vérification Actuelle
```bash
# Homepage
Title: "Vous déménagez, on compare : 3-5 Devis Sans Stress | Moverz" (61 chars) ✅
Description: "✓ On centralise tout (1 seul contact) ✓ 0 harcèlement ✓ Pros certifiés finances/assurance contrôlées · 3-5 devis comparables · Note 4.9/5 · 3 min · Gratuit" (160 chars) ✅
```

---

## 🎨 IMAGES OPENGRAPH

### Image par défaut
- **URL** : `https://moverz.fr/opengraph-image` (généré dynamiquement par Next.js)
- **Dimensions** : 1200×630px
- **Alt text** : "Moverz - Comparateur de déménagement anti-arnaque · Note 4.9/5"

### Override pour homepage
```typescript
openGraph: {
  images: [{ 
    url: '/logo.png', 
    width: 1200, 
    height: 630, 
    alt: 'Moverz - Comparateur de déménagement anti-arnaque · Note 4.9/5' 
  }],
}
```

---

## ✅ CHECKLIST AJOUT NOUVELLE PAGE

Lorsque tu ajoutes une nouvelle page, suis ces étapes :

### 1. Identifier le type de page
- [ ] Homepage (override layout metadata)
- [ ] Ville (utiliser `getCityPageMetadata`)
- [ ] Service Ville (utiliser `getCityServiceMetadata`)
- [ ] Corridor (utiliser `generateCorridorMetadata`)
- [ ] Quartier (utiliser `generateQuartierMetadata`)
- [ ] Blog article (automatique via slug)
- [ ] Hub blog (définir manuellement avec `getFullMetadata`)
- [ ] Institutionnelle (définir manuellement)

### 2. Utiliser la fonction appropriée

```typescript
// Exemple : Nouvelle page hub
import { getFullMetadata } from "@/lib/canonical-helper";

export const metadata: Metadata = getFullMetadata(
  "mon-hub",
  "Title optimisé pour CTR",
  "Description optimisée avec USP Moverz"
);
```

### 3. Vérifier les caractères
- Title ≤ 60 chars (sans ` | Moverz`)
- Description 120-160 chars

### 4. Inclure les USP Moverz
Au moins 2-3 parmi :
- ✓ 0 harcèlement / Correspondant unique
- ✓ Devis comparables (5-7j)
- ✓ Pros certifiés / contrôlés
- ✓ 100% gratuit
- ✓ 3 minutes
- ✓ Note 4.9/5

### 5. Tester en local
```bash
npm run build
npm run start
curl -s http://localhost:3000/votre-page | grep -E "<title>|<meta name=\"description\""
```

---

## 🔄 DÉLAIS DE PROPAGATION GOOGLE

### Recrawl automatique
- **Délai moyen** : 24-72h après déploiement
- **Facteur** : Autorité du domaine, fréquence des mises à jour

### Forcer le recrawl
1. **Google Search Console** → Inspection d'URL
2. Entrer l'URL modifiée
3. Cliquer "Demander une indexation"
4. Attendre 1-2h (priorité haute)

### IndexNow (instant indexing)
**Status** : ✅ Activé sur Moverz  
**Commit** : `2851c85` (26 février 2026)  
**Effet** : Ping Bing/Yandex en temps réel

---

## 🐛 PROBLÈMES FRÉQUENTS & SOLUTIONS

### Problème 1 : Duplication "| Moverz | Moverz"
**Cause** : Title contient déjà ` | Moverz` et le template l'ajoute à nouveau  
**Solution** : La fonction `getFullMetadata()` strip automatiquement le suffixe

### Problème 2 : Description tronquée dans Google
**Cause** : > 160 caractères  
**Solution** : Réduire la description ou mettre l'info clé en premier

### Problème 3 : Metadata non mise à jour dans GSC
**Cause** : Délai de recrawl Google  
**Solution** : Forcer l'indexation via Search Console

### Problème 4 : Image OpenGraph incorrecte
**Cause** : Cache CDN/Facebook  
**Solution** :
1. Vérifier `/opengraph-image` ou `/logo.png` existe
2. Tester avec [Facebook Debugger](https://developers.facebook.com/tools/debug/)
3. Forcer refresh cache

---

## 📊 MONITORING CTR (Google Search Console)

### Pages à surveiller (priorité haute)
1. **Homepage** `/` → CTR cible : 8-12%
2. **Top 5 villes** (Paris, Lyon, Marseille, Nice, Toulouse) → CTR cible : 6-10%
3. **Corridors prioritaires** (Paris-Lyon, Nice-Paris, etc.) → CTR cible : 5-8%

### Analyse hebdomadaire
```
Performance GSC (7 derniers jours) :
- CTR moyen : X%
- Impressions : X
- Clics : X
- Position moyenne : X
```

### Seuils d'alerte
- **CTR < 3%** sur homepage → Action immédiate
- **CTR < 2%** sur pages villes → Revoir metadata
- **Position moyenne > 15** → Problème SEO on-page ou backlinks

---

## 📝 VERSIONS METADATA (HISTORIQUE)

### v1.0 (19 janvier 2026) - Commit `c3abd0f`
```
Title: "Comparateur Déménagement | Jusqu'à 5 devis | Contrôlés · Gratuit"
Description: "Comparez jusqu'à 5 devis comparables de déménageurs vérifiés sous 5 à 7 jours. Dossier anonyme, 0 harcèlement. 100% gratuit."
```
**Problème** : Baisse CTR de 15-20% (trop générique, pas de différenciation)

### v2.0 (25 février 2026) - Commit `a408d17`
```
Title: "Comparateur Déménagement | Zéro Harcèlement | Devis Vérifiés"
Description: "Comparez 5 devis de déménageurs vérifiés sans harcèlement. Dossier 100% anonyme, vous choisissez qui contacter. 3 analyses de risque /100. Gratuit."
```
**Problème** : CTR stagne, "3 analyses de risque" pas clair pour grand public

### v3.0 (27 février 2026) - Commit `99516ac` ✅ **ACTUEL HOMEPAGE**
```
Title: "Vous déménagez, on compare : 3-5 Devis Sans Stress | Moverz"
Description: "✓ On centralise tout (1 seul contact) ✓ 0 harcèlement ✓ Pros certifiés finances/assurance contrôlées · 3-5 devis comparables · Note 4.9/5 · 3 min · Gratuit"
```
**Objectif** : Maximiser CTR avec USP clairs (correspondant unique, anti-arnaque, note 4.9/5)

### v3.1 (27 février 2026) - PAGES VILLES ✅ **ACTUEL**
```
Title: "Déménagement {Ville} dès {PrixMin}€ · Devis 5–7j | Moverz"
Description: "✓ 1 contact ✓ 0 harcèlement · {Ville} : T1 dès {prix}, T2 {prix}, Maison {prix} · Pros certifiés · Note 4.9/5 · Gratuit ({année})"
```
**Objectif** : Aligner les 209 pages villes sur les USP homepage pour maximiser CTR (actuellement 0% sur top villes)

---

## 🎯 STRATÉGIE CTR 2026

### Différenciateurs à mettre en avant
1. **Correspondant unique** (exclusif Moverz)
2. **0 harcèlement** (pain point majeur)
3. **Anti-arnaque Creditsafe** (sécurité)
4. **Note 4.9/5** (social proof)
5. **3-5 devis comparables** (clarté vs "jusqu'à 5")

### À ÉVITER dans les meta
- ❌ "IA" (pas clair pour grand public)
- ❌ "48h" (pas dans Hero, incohérence)
- ❌ "Numéro masqué" (redondant avec "0 harcèlement")
- ❌ "3 analyses de risque /100" (jargon technique)

### Émotions à activer
- **Sérénité** : "Sans Stress", "On compare pour vous"
- **Confiance** : "Pros certifiés", "Note 4.9/5", "Anti-arnaque"
- **Simplicité** : "3 minutes", "1 seul contact"

---

## 🔗 FICHIERS CLÉs

```
lib/
├── canonical-helper.ts          ← Fonction centrale getFullMetadata()
├── seo/
│   └── metadata.ts              ← Metadata pages villes & services
├── pricing-corridors.ts         ← Calcul prix pour meta corridors/villes
└── cities.ts                    ← Données villes (noms, slugs)

app/
├── layout.tsx                   ← Metadata par défaut + template title
├── page.tsx                     ← Metadata homepage (override)
├── demenagement/[slug]/page.tsx ← Pages villes
├── blog/[slug]/page.tsx         ← Articles blog
└── [ville-a]-vers-[ville-b]/page.tsx ← Corridors

components/templates/
├── CorridorPage.tsx             ← generateCorridorMetadata()
├── QuartierPage.tsx             ← generateQuartierMetadata()
└── CityServicePage.tsx          ← generateCityServiceMetadata()
```

---

## 🚀 PROCHAINES ACTIONS

### Court terme (7 jours)
- [ ] Surveiller CTR homepage dans GSC (objectif +10-15%)
- [ ] Forcer indexation des top 10 pages modifiées via GSC
- [ ] Vérifier OpenGraph sur Facebook/LinkedIn Debugger

### Moyen terme (30 jours)
- [ ] A/B test title homepage (voir `docs/meta-versions-test.md`)
- [ ] Optimiser meta des 20 pages les plus vues (selon GA4)
- [ ] Ajouter Rich Snippets FAQ sur toutes les pages villes

### Long terme (90 jours)
- [ ] Audit complet CTR par typologie de page
- [ ] Stratégie seasonal metadata (été, rentrée, fin d'année)
- [ ] Metadata multilingue (si expansion internationale)

---

**Documentation maintenue par** : Lucie S.  
**Dernière révision** : 27 février 2026  
**Next review** : 27 mars 2026
