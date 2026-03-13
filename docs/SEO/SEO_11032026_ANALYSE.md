# Analyse SEO moverz.fr — 11 mars 2026
## Objectif : ×2 trafic en 60 jours (~85 → ~170 clics/semaine)

**Données source :** GSC API live — période fév–10 mars 2026 + screenshot GSC 28j au 11/03  
**Baseline actuelle :** ~85 clics/semaine (330 clics/28j), position moyenne 29.4, CTR 0.7%  
**Contexte :** Semaine du 3–10 mars = 99 commits de refonte SEO majeure (Lucie). Les métriques GSC ne reflètent pas encore ces changements.

---

## 1. Diagnostic — état réel au 11 mars

### 1.1 Tendance — amélioration de position, clics stagnants

| Semaine | Clics | Impr | Pos moy |
|---------|-------|------|---------|
| 26 jan–1 fév | 95 | 14 097 | 36.7 |
| 2–8 fév | 90 | 16 687 | 32.6 |
| 9–15 fév | 70 | 12 277 | 33.9 |
| 16–22 fév | 92 | 11 392 | 30.3 |
| 23 fév–1 mars | 83 | 10 887 | 28.7 |
| 2–8 mars | 85 | 11 443 | **24.4** |
| 28j au 11/03 | **330 clics** | **46k impr** | **29.4** |

La position moyenne est passée de ~37 → ~29 en 6 semaines — signal positif des cleanups du 16/02. Mais les clics stagnent : **le vrai problème est le CTR de 0.7%**, pas le ranking.

> ⚠️ Toujours filtrer **Pays = France** dans GSC. Sans ce filtre, les impressions incluent BE/CH/CA/MA et faussent les métriques.

---

### 1.2 Part brand — révisée à la baisse

| Source | Clics (28j au 11/03) | % |
|--------|---------------------|---|
| Requêtes brand ("moverz") | 53 | **~16%** |
| Requêtes non-brand | ~277 | **~84%** |

**Méthode correcte :** 53 / 330 clics totaux = 16% brand.  
L'estimation initiale à 84% brand était erronée (comparaison sur sous-ensemble de requêtes, pas sur le total des clics).

**Ce que ça change :** le site génère déjà 84% de trafic non-brand — c'est une bonne base. Le problème n'est pas la visibilité brand, c'est le **CTR : 0.7% sur 46 000 impressions**. Le site apparaît mais ne convainc pas de cliquer.

---

### 1.3 Pages ville core — baseline invalidée par la refonte de Lucie

| Ville | Position (avant refonte) | Impressions | Clics |
|-------|--------------------------|-------------|-------|
| Bordeaux | 48.4 | 1 072 | 1 |
| Toulouse | 47.0 | 960 | 1 |
| Lyon | 51.0 | 931 | 3 |
| Marseille | 52.7 | 906 | 1 |
| Lille | 58.5 | 520 | 0 |
| Nice | 48.7 | 375 | 0 |
| Strasbourg | 64.3 | 249 | 1 |
| Paris | **74.3** | 4 | 0 |

> ⚠️ **Ces positions sont obsolètes.** La semaine du 3–10 mars, Lucie a migré 300 city guides auto-générés → **20 guides premium** (1 300–2 500 mots, attribution auteur, données locales 2026, FAQ 6–7 questions) + **15 corridors premium** remis en index. Google doit recrawler et réévaluer.  
> **Action : re-mesurer semaine du 23 mars** avant toute optimisation supplémentaire sur ces pages.  
> **Ne pas retoucher les pages ville d'ici là** — laisser Google intégrer les changements.

**Ce que la refonte a apporté :**
- -280 pages faible valeur (crawl budget focalisé)
- Signal/bruit +350% (10% → 45% de contenu haute valeur)
- E-A-A-T renforcé (authorship Lucie Stéhelin, 180+ déménagements accompagnés)
- 15 corridors passés de no-index → index (longue traîne potentielle)

---

### 1.4 Clusters — qui génère du trafic

| Cluster | Pages avec impr | Pages avec clics | Clics | CTR implicite |
|---------|----------------|-----------------|-------|---------------|
| Blog | 670 | 74 (11%) | 106 | ~0.8% |
| Villes | 1 475 | 47 (3%) | 52 | ~0.3% |
| Corridors | 2 396 | 54 (2%) | 55 | ~0.7% |
| Core | 70 | 4 (6%) | 50 | ~3.3% |

**Le blog est le seul levier court terme.** Il génère 2× plus de clics que les pages ville malgré moins d'impressions. C'est là qu'il faut concentrer l'effort immédiat.

> **Note corridors :** Les données ci-dessus reflètent l'état *avant* la remise en index des 15 corridors premium. L'impact sera visible dans 2–4 semaines.

---

## 2. Ce que la semaine de Lucie a déjà résolu (ne plus traiter)

| Problème identifié | Action effectuée | Statut |
|--------------------|-----------------|--------|
| 300 city guides auto-générés thin | Migration → 20 guides premium 1300-2500 mots | ✅ Fait |
| Corridors noindex | 15 corridors premium remis en index | ✅ Fait |
| Mentions IA obsolètes (30+ fichiers) | Suppression totale | ✅ Fait |
| Scoring "CreditSafe" périmé | Migration → Pappers, 5 sous-scores, 3 dimensions | ✅ Fait |
| Double H1 | Corrigé sur 4 pages | ✅ Fait |
| Pop-up exit intent | Supprimé | ✅ Fait |
| Attribution auteur | Lucie Stéhelin sur tous les guides premium | ✅ Fait |
| Emojis → icônes SVG | Fait partout | ✅ Fait |
| Sitemaps restructurés (6 sitemaps) | Fait | ✅ Fait |
| Build CapRover bloqué | Corrigé | ✅ Fait |

**Important :** les références à "CreditSafe" dans les titles de blog (ex. "Vérifiés CreditSafe") doivent être mises à jour → "Vérifiés Pappers" ou simplement supprimées.

---

## 3. Les 3 leviers restants pour ×2 en 60 jours

### Levier A — CTR (gain immédiat, 0 nouveau contenu)
**Potentiel : +30–50 clics/semaine**  
Le site a ~46k impressions/28j = ~11 500/semaine. Passer de CTR 0.7% à 2% = doubler les clics sans aucune nouvelle page.

### Levier B — Blog quick wins (contenu ciblé)
**Potentiel : +40–60 clics/semaine**  
20+ articles en pos 5–15 avec 0 clic. Un bon title + enrichissement = trafic immédiat.

### Levier C — Requêtes commerciales non adressées
**Potentiel : +30–50 clics/semaine**  
Requêtes à fort intent (devis, comparatif, prix) avec 50–300 impressions et 0 clic.

---

## 4. Plan d'action — 60 jours

> **Convention :** ⚡ = rapide (< 2h) | 🔨 = moyen (2–8h) | 🏗️ = lourd (> 1 jour)  
> **Priorité :** P0 = cette semaine | P1 = semaine 2 | P2 = semaine 3–4 | P3 = mois 2

---

### BLOC 1 — CTR : Optimiser les titles/meta des pages à fort volume
**Priorité P0 — Levier A — Impact estimé : +25 clics/semaine — Complexité : ⚡**

Ces pages apparaissent déjà dans Google mais le title ne donne pas envie de cliquer.

#### Pages prioritaires — CTR < 1% avec 100+ impressions

| Page | Impr | CTR actuel | Action |
|------|------|------------|--------|
| `/blog/demenagement-piano-nantes-prix/` | 916 | 0.7% | Position 30 → enrichir le contenu |
| `/blog/prix-demenageur-rouen-2025/` | 899 | 0.1% | "2025" périmé → mettre à jour titre + contenu en 2026 |
| `/blog/shurgard-lyon-sites-tarifs/` | 690 | 0.1% | Title générique → "Shurgard Lyon : Prix, Adresses et Alternatives Moins Chères" |
| `/blog/meilleurs-demenageurs-lyon/` | 320 | 0.0% | → "Top 7 Déménageurs Lyon Vérifiés Pappers (2026)" |
| `/blog/comparatif-formules-economiques-demenagement-nantes/` | 199 | 0.0% | → "Déménagement Nantes Pas Cher : Comparatif Prix 2026" |
| `/blog/comparer-plateformes-devis-demenagement-2026/` | 176 | 0.0% | → "Comparateur Déménagement : Quel Site Choisir en 2026 ?" |
| `/blog/prix-garde-meuble-montpellier-2025/` | 168 | 0.0% | "2025" périmé → "Prix Garde-Meuble Montpellier 2026 : Comparatif Tarifs" |
| `/blog/meilleur-demenageur-rennes-2025/` | 143 | 0.0% | "2025" périmé → "Meilleur Déménageur Rennes 2026 : Top 5 Vérifiés" |

**Actions concrètes :**

1. **Mettre à jour toutes les dates "2025" → "2026"** dans les titles ET le contenu (3 articles). Google pénalise les titres avec date périmée.

2. **Réécrire les titles à 0% CTR** avec hook chiffré ou émotionnel (voir tableau ci-dessus). Remplacer aussi toute référence à "CreditSafe" par "Pappers" pour cohérence avec la refonte scoring.

3. **Améliorer les meta descriptions** sur ces mêmes pages. Template : `[bénéfice concret] → [différenciateur Moverz] → [CTA]`  
   Exemple : "Tarifs moyens 800–2 500€ selon surface. Comparez 3 devis de déménageurs vérifiés Pappers. Gratuit, sans engagement."

**Fichiers à modifier :** `lib/blog-extra.ts` (champ `title`, `description`) + frontmatter markdown des articles.

---

### BLOC 2 — Quick wins blog : débloquer les articles pos 5–15 avec 0 clic
**Priorité P0 — Levier B — Impact estimé : +25 clics/semaine — Complexité : ⚡ à 🔨**

Ces articles sont en **page 1 de Google** mais ne reçoivent aucun clic. Problème : title faible, contenu thin, ou désalignement requête/page.

| Requête | Impr | Pos | Page concernée | Action |
|---------|------|-----|----------------|--------|
| "comparateur demenagement rennes" | 70 | 6.5 | `/blog/comparatif-formules-economiques-demenagement-nantes/` | Page parle de Nantes → créer `/blog/comparatif-demenageurs-rennes-2026/` |
| "comparatif demenageur rennes" | 81 | 7.6 | idem | Idem — page Rennes dédiée |
| "comparateur demenagement nantes" | 72 | 8.7 | `/blog/comparatif-formules-economiques-demenagement-nantes/` | Réécrire title + H1 + intro |
| "comparatif demenageur montpellier" | 94 | 7.9 | `/blog/comparatif-prix-demenageurs-economiques-montpellier/` | Pos 4, 0 clic → title pas assez engageant |
| "comparatif demenagement lyon" | 64 | 10.6 | `/blog/meilleurs-demenageurs-lyon/` | Réécrire title + ajouter tableau comparatif |
| "prix déménagement rennes" | 92 | 10.7 | `/blog/tarif-horaire-demenageur-rennes/` | Ajouter section "prix moyens" |
| "comparateur demenageur bordeaux" | 40 | 8.7 | `/blog/estimation-prix-demenagement-bordeaux-methode-simple/` | Titre ne matche pas l'intent |
| "comparateur demenageur marseille" | 40 | 8.8 | `/blog/comparer-plateformes-devis-demenagement-2026/` | Trop générique → créer `/blog/comparatif-demenageurs-marseille-2026/` |

**Actions concrètes :**

1. **Créer 4 articles "comparatif déménageurs [ville] 2026"** pour Rennes, Marseille, Bordeaux, Lyon. Format : tableau comparatif 5 déménageurs (prix, note Google, score Pappers), 800–1 200 mots, FAQ schema, attribution Lucie.

2. **Enrichir 4 articles existants** (Montpellier, Nantes, Strasbourg, Rouen) : tableau comparatif, fourchettes de prix 2026, FAQ Schema, title mis à jour.

---

### BLOC 3 — Cannibalisation : consolider les requêtes multi-pages
**Priorité P1 — Levier A+B — Impact estimé : +15–20 clics/semaine — Complexité : 🔨**

Plusieurs requêtes commerciales ont 5–15 pages en compétition → Google ne sait pas quelle page servir → toutes restent en position 50+.

**"demenageur strasbourg tarif" — 9 pages, 159 impressions, 0 clic**  
→ Choisir `/blog/prix-demenageur-strasbourg-2026/` comme canonique. Enrichir à 1 500+ mots. Canonical sur les 8 autres.

**"devis déménagement bordeaux" — 3 pages, 310 impressions, 0 clic**  
→ La page ville pos 22 est la mieux placée. Consolider le contenu "devis" sur cette page. Canonical blog → ville, ou noindex les doublons.

**"déménagement rouen" — 5 pages, 168 impressions, 0 clic**  
→ Garder le blog (mieux placé que la page ville). Title → 2026. Noindex la page ville Rouen.

**"demenagement objets fragiles nice" — 4 pages, 124 impressions, 0 clic**  
→ `/blog/demenagement-objets-fragiles-nice/` pos 16, 85 impr. Enrichir à 1 200 mots + canonical des 3 autres vers celle-ci.

**"comparateur demenageur lille" — 7 pages, 99 impressions, 0 clic**  
→ Consolider sur `/blog/devis-demenagement-lille-obtenir-comparer/` (pos 16). Réécrire en "comparatif déménageurs Lille 2026".

---

### BLOC 4 — Requêtes commerciales non adressées (nouvelles pages)
**Priorité P1 — Levier C — Impact estimé : +30–40 clics/semaine — Complexité : 🔨 à 🏗️**

| Requête | Impr | Pos actuelle | Page à créer/optimiser |
|---------|------|--------------|----------------------|
| "devis déménagement bordeaux" | 296 | 24.7 | Enrichir `/demenagement/bordeaux/` (section devis + FAQ) |
| "devis demenagement marseille" | 182 | 51.1 | Créer `/blog/devis-demenagement-marseille-2026/` |
| "devis déménagement toulouse" | 134 | 27.3 | Créer `/blog/devis-demenagement-toulouse-2026/` |
| "devis demenagement lyon" | 115 | 49.0 | Créer `/blog/devis-demenagement-lyon-2026/` |
| "comparateur demenageur" (générique) | 64+53 | 23–29 | Enrichir `/comparateur-demenageurs/` |
| "demenageur marseille tarif" | 52 | 26.5 | Enrichir `/demenagement/marseille/` |
| "déménagement appartement rennes" | 49 | 28.6 | Enrichir `/demenagement/rennes/` |
| "déménagement paris strasbourg" | 47 | 20.7 | Enrichir corridor `/paris-vers-strasbourg/` |
| "déménagement montpellier paris" | 49 | 24.3 | Enrichir corridor `/montpellier-vers-paris/` |

**Actions concrètes :**

1. **Créer 4 articles "devis déménagement [ville] 2026"** (Bordeaux, Marseille, Toulouse, Lyon) — 727 impressions combinées, 0 clic. Format : 1 200 mots, prix par surface, comment comparer, CTA formulaire Moverz, attribution Lucie.

2. **Enrichir `/comparateur-demenageurs/`** — pos 23–29 sur "comparateur demenageur" avec 64–117 impressions et **0 clic** : anomalie grave pour la page la plus commerciale du site.
   - H1 exact : "Comparateur de Déménageurs"
   - Tableau comparatif visible above the fold
   - FAQ Schema sur les questions "comparateur déménagement"

3. **Corridors Paris–Strasbourg et Montpellier–Paris** : 40–50 impressions en pos 20–25. Ces corridors viennent d'être enrichis par Lucie → attendre le recrawl avant d'agir.

---

### BLOC 5 — Pages ville core : photos + enrichissement post-recrawl
**Priorité P2 — Impact estimé : +20 clics/semaine — Complexité : 🔨 à 🏗️**

> ⚠️ **Attendre les métriques GSC du 23 mars** avant d'agir sur le contenu des pages ville (les guides premium viennent d'être refondus). En revanche, l'ajout de photos est indépendant et peut se faire immédiatement.

**Action 0 — Ajouter des photos sur toutes les pages ville** ⚡ **(à faire maintenant)**  
Google valorise les images originales (signal qualité + trafic Google Images). Pour chaque ville :
- Photo landmark reconnaissable (quai Bordeaux, Vieux-Port Marseille, place Bellecour Lyon…) avec `alt` = "déménagement [Ville]"
- Photo déménageur en action (camion, cartons) avec `alt` = "déménageur professionnel [Ville]"
- Nommage explicite : `demenageur-bordeaux.webp` (pas `IMG_1234.jpg`)
- Attributs `width`/`height` obligatoires (CLS / Core Web Vitals)

**Actions post-recrawl (semaine du 23 mars) :**

1. **`/demenagement/bordeaux/`** — actuellement pos 22 sur "devis déménagement bordeaux" (296 impr). Objectif : pos 10.
   - H2 "Obtenir des devis de déménagement à Bordeaux"
   - Section "Prix moyens déménagement Bordeaux 2026" avec tableau T1/T2/T3/maison
   - FAQ "Combien coûte un déménagement à Bordeaux ?"
   - Maillage interne depuis les articles blog Bordeaux

2. **`/demenagement/marseille/`** — pos 52 sur "devis demenagement marseille" (182 impr). Même structure que Bordeaux.

3. **`/demenagement/toulouse/`** — pos 27 sur "devis déménagement toulouse" (134 impr).

4. **Guides ville** (`/demenagement/{ville}/guide/`) — les 20 guides premium créés par Lucie sont déjà là. Vérifier qu'ils sont bien en index et que le sitemap est à jour.

---

### BLOC 6 — Blog hub + maillage interne
**Priorité P2 — Impact estimé : +10 clics/semaine — Complexité : ⚡**

`/blog/` est à pos 26 avec 146 impressions et **0 clic**.

**SERP actuelle (11/03/2026) :**
- **Title :** "Blog Déménagement : Guides, Prix, Astuces (2026) | Moverz"
- **Meta :** "Tous nos guides déménagement : prix par ville, astuces anti-arnaque, checklists, aides financières. Conseils pratiques par des experts."
- **Fichier :** `app/blog/page.tsx` (ligne 8)

1. **Enrichir `/blog/`** : catégories claires (Prix, Arnaques, Villes, Guides), top 10 articles mis en avant, moteur de recherche interne.

2. **Créer pages catégories :** `/blog/prix-demenagement/` + `/blog/par-ville/` — maillage interne + landing pages additionnelles.

3. **Maillage interne** : 20 articles top impressions → 3–5 liens contextuels chacun. Priorité aux liens vers `/label-moverz/`, `/comparateur-demenageurs/`, et les guides ville premium.

---

### BLOC 7 — "moving company" en anglais — anomalie à exploiter
**Priorité P2 — Impact estimé : +10 clics/semaine — Complexité : ⚡**

"moving company" à pos 6.2 avec **138 impressions et 0 clic** — probablement des expatriés ou des requêtes Bing AI.

**Action :** Ajouter une section EN (500 mots) sur `/comparateur-demenageurs/` ou créer `/moving-company-france/`. Coût : 2h. Potentiel : 10–20 clics/semaine si CTR passe à 10–15%.

---

### BLOC 8 — Stratégie netlinking (amplificateur)
**Priorité P2–P3 — Complexité : 🏗️ — Budget 500€/mois**

Sans backlinks, les optimisations on-page ont une limite. Les concurrents (i-Demenager, DemenagerFacile) ont des années d'autorité de domaine.

**Priorités liens :**
1. Pages ville core Bordeaux, Lyon, Marseille
2. `/comparateur-demenageurs/`
3. `/label-moverz/` (contenu le plus linkable du site)
4. Articles piliers arnaques, prix 2026

**Ancres :** "comparateur déménagement", "déménageur [ville] vérifié", "comparer devis déménagement"

---

## 5. Focus `/label-moverz/` — page stratégique à accélérer

### Situation actuelle
**0 impression GSC** depuis le lancement (26 fév). La refonte de Lucie a mis à jour les métadonnées scoring (Pappers, 5 sous-scores) mais la page reste non indexée.

### Ce qui a été fait par Lucie
- Scoring mis à jour : Pappers, 5 sous-scores, 3 dimensions clients
- Metadata SEO label-moverz mise à jour (`app/label-moverz/page.tsx`)
- `LabelScoresShowcase.tsx` réécrit

### Ce qui manque encore
- **H1 faible** : "3 analyses de risque. Zéro faillite." — poétique, pas sur les mots-clés
- **Title trop brand** : Google ne comprend pas la requête cible
- **Peu de texte crawlable** — la page est majoritairement JS/React
- **Maillage interne insuffisant** — ~2 liens entrants

### Plan d'action

**P0 — Indexation GSC** ⚡ 5 min  
GSC → Inspection d'URL → `https://moverz.fr/label-moverz/` → "Demander l'indexation"

**P0 — Réécrire H1 + title** ⚡ 1h  
- Title actuel : `Label Moverz : Score /100 (3 dimensions) · 0 faillite`
- **Title → :** `Vérifier un Déménageur : Score Fiabilité /100 Gratuit | Moverz`
- H1 actuel : "3 analyses de risque. Zéro faillite."
- **H1 → :** "Vérifiez la fiabilité de votre déménageur en 30 secondes"
- **Meta → :** "Score /100 gratuit et instantané : santé financière (Pappers), alertes BODACC, avis clients 12 mois. 3 000+ déménageurs analysés. 0 faillite depuis jan. 2026."

**P1 — Section longform HTML statique** 🔨 3h  
600–800 mots en SSR (pas en JS) :
- "Pourquoi vérifier un déménageur avant de signer ?" (257 faillites, 18% exclus)
- "Comment fonctionne la vérification Moverz ?" (les 3 étapes : Pappers, BODACC, avis)
- "Que regarder en dehors du score ?" (RC Pro, licence transport, SIREN)
- Développer le tableau comparatif Label Moverz vs NF Service vs Qualipro vs ISO 9001

**P1 — Maillage interne** ⚡ 2h  
Passer de ~2 à 20+ liens entrants :
- `/blog/eviter-arnaques-demenagement/` (pos 8) → ancre "vérifier le score de fiabilité"
- `/verifications-partenaires/` → "Voir le score de nos partenaires"
- `/comparateur-demenageurs/` → section "Comment on vérifie nos déménageurs"
- Toutes les pages ville → "Déménageurs [ville] avec score Moverz > 70/100"
- Top 10 articles blog → snippet "Conseil : vérifiez le score Moverz avant de signer"

**P1 — Article feeder** 🔨 4h  
Créer `/blog/comment-verifier-demenageur-fiable/` (1 500 mots) :
- Requête cible : "comment vérifier un déménageur" (pos 27, 8 impr)
- Checklist : SIREN, Pappers, avis Google, assurance RC Pro, BODACC, score Moverz
- CTA → `/label-moverz/`
- FAQ Schema : "Comment savoir si un déménageur est sérieux ?", "Comment éviter les arnaques ?"

> **Note :** L'article `/blog/comment-verifier-demenageur-fiable/` existe peut-être déjà dans le markdown — vérifier avant de créer.

**P2 — Netlinking spécifique**  
Asset le plus linkable du site (outil gratuit, chiffres chocs). Outreach journalistes déco/maison, forums (SeLoger, PAP, r/france), proposition widget "Score Moverz".

**P2 — Intégration dans le tunnel devis**  
Score /100 visible dans la page de comparaison de devis + badges pages ville + email post-demande.

### Projection

| Délai | Actions | Impact estimé |
|-------|---------|---------------|
| J+3 | Indexation GSC + title/H1 | Page indexée |
| J+14 | Maillage interne + article feeder | 20–50 impr/semaine |
| J+30 | Contenu longform + article blog | 50–100 clics/mois |
| J+60 | Netlinking + intégration tunnel | 200–500 clics/mois |

---

## 6. Tableau récapitulatif — Plan 60 jours

| # | Action | Priorité | Complexité | Impact estimé | Délai effet | Statut |
|---|--------|----------|------------|---------------|-------------|--------|
| 1 | Mettre à jour dates "2025"→"2026" dans titles (3 articles) + remplacer "CreditSafe"→"Pappers" | **P0** | ⚡ 2h | +10 clics/sem | J+7 | ⬜ |
| 2 | Réécrire titles/meta des 8 pages à 0% CTR (100+ impr) | **P0** | ⚡ 3h | +15 clics/sem | J+7–14 | ⬜ |
| 3 | Créer 4 articles "comparatif déménageurs [ville] 2026" (Rennes, Marseille, Bordeaux, Lyon) | **P0** | 🔨 8h | +20 clics/sem | J+14–21 | ⬜ |
| 4 | Enrichir `/comparateur-demenageurs/` (H1 exact, tableau, FAQ schema) | **P0** | 🔨 3h | +8 clics/sem | J+14 | ⬜ |
| 5 | `/label-moverz/` : indexation GSC + réécrire H1/title | **P0** | ⚡ 1h | page indexée | J+3 | ✅ **12/03** |
| 6 | Ajouter photos sur toutes les pages ville (landmark + déménageur, alt optimisé) | **P0** | ⚡ 3h | signal qualité | J+7 | ✅ **12/03** (+ ImageObject) |
| 7 | Consolider cannibalisation Strasbourg tarif | **P1** | 🔨 4h | +8 clics/sem | J+14–21 | ⬜ |
| 8 | Consolider cannibalisation Bordeaux devis | **P1** | ⚡ 1h | +5 clics/sem | J+14 | ⬜ |
| 9 | Créer 4 articles "devis déménagement [ville] 2026" (Bdx, Mrs, Tlse, Lyon) | **P1** | 🔨 8h | +20 clics/sem | J+21–30 | ⬜ |
| 10 | `/label-moverz/` : section longform SSR + maillage interne 20+ liens | **P1** | 🔨 5h | +50 impr/sem | J+14 | ⬜ |
| 11 | Créer `/blog/comment-verifier-demenageur-fiable/` (feeder label-moverz) | **P1** | 🔨 4h | +20 clics/mois | J+21 | ⬜ |
| 12 | Maillage interne : 20 articles top blog → 3 liens chacun | **P1** | ⚡ 4h | +5 clics/sem | J+7–14 | ⬜ |
| 13 | Re-mesurer GSC pages ville post-refonte Lucie | **P2** | ⚡ | baseline | J+12 (23 mars) | ⬜ |
| 14 | Enrichir `/demenagement/bordeaux/` (section devis, prix, FAQ) | **P2** | 🔨 3h | +10 clics/sem | J+21–30 | ⬜ |
| 15 | Enrichir `/demenagement/marseille/` et `/toulouse/` | **P2** | 🔨 4h | +8 clics/sem | J+21–30 | ⬜ |
| 16 | Section EN sur `/comparateur-demenageurs/` ("moving company") | **P2** | ⚡ 2h | +8 clics/sem | J+14–21 | ⬜ |
| 17 | Consolider cannibalisation Lille, Rouen, Nice | **P2** | 🔨 6h | +8 clics/sem | J+21–30 | ⬜ |
| 18 | Enrichir `/blog/` hub + créer catégories blog | **P2** | 🔨 4h | +5 clics/sem | J+21–30 | ⬜ |
| 19 | Enrichir guides ville premium → 2 500–3 000 mots (objectif Lucie) | **P2** | 🏗️ 16h | +15 clics/sem | J+30–45 | ⬜ |
| 20 | Netlinking 500€/mois (villes core + comparateur + label-moverz) | **P3** | 🏗️ ongoing | +20 clics/sem | J+45–60 | ⬜ |
| 21 | Refaire le logo/favicon affiché dans les SERP Google — actuel trop générique, pas engageant (voir screenshot SERP homepage) | **P1** | 🔨 3h | +CTR global | J+7–14 | ⬜ |

---

## 7. Projection réaliste

### Scénario conservateur (P0 + P1 uniquement)
- Semaine 1–2 : +25 clics/sem (titles + CTR)
- Semaine 3–4 : +35 clics/sem (nouveaux articles + maillage)
- **Total semaine 4 : ~145 clics/sem → +70% vs baseline**

### Scénario optimiste (P0 + P1 + P2)
- Semaine 5–8 : +50 clics/sem (pages ville post-recrawl + corridors + hub blog)
- **Total semaine 8 : ~195 clics/sem → ×2.3 vs baseline**

### Conditions pour atteindre ×2 en 60 jours
1. ✅ Exécuter les blocs P0 **cette semaine**
2. ✅ Exécuter les blocs P1 **semaines 2–3**
3. ✅ Google recrawle les 20 guides ville premium + 15 corridors (demander indexation dans GSC)
4. ⚠️ Les ~12 000 pages noindex doivent être déindexées (délai 4–8 semaines post 16/02 → deadline ~16 mars)
5. ✅ Re-mesurer les pages ville le 23 mars avant toute action supplémentaire

---

## 8. Ce qu'il ne faut PAS faire (pièges)

1. **Ne pas toucher au contenu des pages ville avant le 23 mars.** La refonte de Lucie vient d'être déployée — attendre le signal de recrawl GSC.

2. **Ne pas créer de nouveaux articles sans requête cible identifiée.** Chaque article doit viser une requête de cette analyse.

3. **Ne pas remettre les 2 000+ pages noindex en index.** La position moyenne 40→29 est directement liée au nettoyage du 16/02.

4. **Ne pas attendre les pages ville pour faire ×2.** Le blog reste le seul vecteur court terme fiable.

5. **Ne pas écrire "CreditSafe" nulle part.** La migration vers Pappers est complète — toute référence à CreditSafe dans les articles blog restants doit être mise à jour.

6. **Ne pas ignorer les requêtes pos 16–30.** Passer de pos 22 à pos 10 sur "devis déménagement bordeaux" (296 impr) = +20 clics/semaine à lui seul.

---

## 9. Monitoring — KPIs chaque lundi

```bash
node scripts/gsc-monitor.mjs  # ou npm run seo:monitor:weekly
```

| KPI | Baseline | Objectif 60j |
|-----|----------|--------------|
| Clics/semaine | ~85 | ~170 |
| CTR global | 0.7% | 2%+ |
| Position moyenne | 29.4 | < 20 |
| % non-brand | ~84% | maintenir |
| Impressions guides ville premium | ? (nouveau) | 500+/sem |
| Impressions corridors premium | ? (nouveau) | 200+/sem |
| Impressions `/label-moverz/` | 0 | 50+/sem |
| CTR `/comparateur-demenageurs/` | ~0% | 3%+ |

**Check spécifique du 23 mars :** recrawl des 20 guides ville premium confirmé ? Positions avant/après refonte Lucie.

---

*Mise à jour : 11 mars 2026 — intègre RECAP-SEO-SEMAINE-10-MARS-2026.md (commit 9374d65, Lucie Stéhelin) + feedbacks Guillaume*  
*12 mars 2026 : actions #5 et #6 complétées (label-moverz H1 + indexation GSC, photos pages ville + ImageObject schema). Voir RECAP-SEO-12-MARS-2026.md*

*Mise à jour : 12 mars 2026 — Actions #5 et #6 réalisées. Voir `RECAP-SEO-12-MARS-2026.md`.*

---

## 10. Audit build CapRover — 11 mars 2026 (07:36 UTC)

Build réussi. **3 166 pages statiques générées.** Plusieurs signaux à corriger pour le SEO.

---

### 10.1 Problèmes critiques

#### `/blog/[slug]` — rendu dynamique (ƒ) au lieu de statique (●)
**Impact SEO : ÉLEVÉ**

```
├ ƒ /blog/[slug]   server-rendered on demand
```

Toutes les pages articles de blog sont rendues **à la demande** (SSR) et non pré-générées en statique. Conséquences :
- Google crawle une page SSR : temps de réponse plus lent → signal négatif Core Web Vitals (TTFB)
- Pas de HTML statique en cache CDN
- Risque de timeout lors du crawl si le serveur est sous charge

**Cause probable :** `generateStaticParams()` manquant ou non exporté dans `app/blog/[slug]/page.tsx`.  
**Action :** Vérifier et ajouter `export function generateStaticParams()` qui retourne tous les slugs des articles publiés. Le reste du blog (catégories) est bien statique (○).

#### `/corridor/[from]` et `/corridor/[from]/[to]` — dynamiques
```
├ ƒ /corridor/[from]
├ ƒ /corridor/[from]/[to]
```
Les pages corridor hub et détail sont SSR. Pourtant les 15 corridors premium créés par Lucie sont bien statiques (`/paris-vers-lyon` etc. = ○). Incohérence : les routes `/corridor/[from]/[to]` devraient être pré-générées.

#### `/quartiers/[slug]` — dynamique
```
├ ƒ /quartiers/[slug]
```
Les pages quartier sont SSR. Or les hubs `/quartiers-{ville}` sont statiques (○). Même problème.

---

### 10.2 Problèmes techniques secondaires

#### Erreur font OG image (non bloquante mais visible)
```
Failed to load dynamic font for ✓ . Error: Failed to download dynamic font. Status: 400
```
L'OG image (`/label-moverz/opengraph-image`) tente de charger une Google Font en runtime pendant le build — la requête réseau échoue en environnement Docker (pas d'accès internet ou rate limit). L'image OG se génère quand même mais sans la bonne typo.  
**Action :** Bundler la font localement dans `app/label-moverz/opengraph-image.tsx` au lieu de la charger via URL.

#### Edge runtime désactive la génération statique
```
⚠ Using edge runtime on a page currently disables static generation for that page
```
Une ou plusieurs pages utilisent `export const runtime = 'edge'` ce qui les force en SSR. Identifier lesquelles et retirer edge runtime si non indispensable.

---

### 10.3 Signaux positifs confirmés

| Signal | Valeur | Commentaire |
|--------|--------|-------------|
| Pages statiques totales | **3 166** | Build stable |
| Guides premium ville | 20 ✓ | Tous générés (paris → le-havre) |
| Blog catégories | toutes ○ | Statique OK |
| Pages ville `/demenagement/[slug]` | ● SSG | Bien pré-générées (301 villes) |
| Pages service ville | ● SSG | 2 408 pages pré-générées |
| Pages guides ville `/guide` | ● SSG | 300 guides statiques |
| Corridors premium | ○ statique | Paris-Lyon, Lyon-Paris etc. OK |
| Quartiers par ville | ○ statique | Nice, Rennes, Rouen, etc. OK |
| `/label-moverz` | ○ statique | Bien pré-rendu |
| Middleware | 32.4 kB | Taille acceptable |
| First Load JS homepage | 148 kB | Dans les normes |

---

### 10.4 Observation sur la taille du repo dans le build

Le `ls -la` révèle **80+ fichiers `.md` à la racine** embarqués dans le conteneur Docker (BLOG-EXPORT-RAW.csv = 441 kB, BLOG-EXPORT-WITH-MAPPING.csv = 683 kB, moverz_301_redirects.csv = 313 kB, blog-canonique.ts = **8.7 MB**, premium-city-guides-data.ts = **354 kB**...).

Ces fichiers sont copiés dans le conteneur mais n'ont aucun impact runtime. En revanche :
- Ils rallongent le build inutilement
- `blog-canonique.ts` à **8.7 MB** est anormalement gros — à surveiller (risque de ralentir le build TypeScript)
- Les `.csv` et `.md` de documentation devraient être dans `.dockerignore`

**Action :** Vérifier `.dockerignore` et y ajouter `*.md` (hors README), `*.csv`, `SEO_*.md`, `RECAP-*.md`, `AUDIT-*.md`.

---

### 10.5 Plan de correction — priorités

| # | Problème | Priorité | Action | Impact SEO |
|---|----------|----------|--------|------------|
| 1 | `/blog/[slug]` SSR → SSG | **P0** | Ajouter `generateStaticParams()` dans `app/blog/[slug]/page.tsx` | TTFB + crawlabilité |
| 2 | Font OG image Error 400 | **P1** | Bundler la font localement dans `opengraph-image.tsx` | OG image `/label-moverz` |
| 3 | `.dockerignore` — CSV/MD dans le build | **P1** | Ajouter `*.csv`, `RECAP-*.md`, `AUDIT-*.md`, `SEO_*.md` etc. | Build time |
| 4 | Edge runtime warning | **P2** | Identifier la page concernée et retirer `edge` si non nécessaire | Statique vs SSR |
| 5 | `blog-canonique.ts` 8.7 MB | **P2** | Investiguer — ce fichier est-il encore utilisé ? | Build time TypeScript |
| 6 | `/corridor/[from]/[to]` SSR → SSG | **P2** | `generateStaticParams()` pour les corridors | Crawlabilité corridors |

