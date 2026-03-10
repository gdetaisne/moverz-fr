# Scoring Moverz — Documentation complète

*Deux destinataires*
- *Équipe technique / maintenance* : sections 1 à 6 (architecture, code, DB, API)
- *Gestionnaire moverz.fr* : sections 7 à 9 (intégration, widget, textes site)

---

## Table des matières

1. [Vue d'ensemble](#1-vue-densemble)
2. [Les 5 sous-scores](#2-les-5-sous-scores)
3. [Les 3 dimensions client](#3-les-3-dimensions-client)
4. [Barème et labels](#4-barème-et-labels)
5. [Où vivent les données](#5-où-vivent-les-données)
6. [Architecture du code](#6-architecture-du-code)
7. [Endpoint API public](#7-endpoint-api-public)
8. [Widget embarquable](#8-widget-embarquable)
9. [Textes et chiffres pour moverz.fr](#9-textes-et-chiffres-pour-moverzfr)

---

## 1. Vue d'ensemble

Le *Score Moverz* est un score global de 0 à 100 calculé automatiquement pour chaque déménageur référencé. Il agrège 5 sous-scores indépendants, chacun issu d'une source de données différente.

```
Score Global = Σ (poids × sous_score)
             = 12,5% Financier + 12,5% Juridique
             + 20% Google + 20% Réputation
             + 35% Vigilance
```

Le score est recalculé à chaque enrichissement de données (nouvelles données Pappers, nouveaux avis Google) et peut être forcé manuellement depuis le backoffice.

---

## 2. Les 5 sous-scores

### 2.1 Score Financier (12,5%)

*Source :* Pappers (registre du commerce)
*Fichier :* `backend/src/services/moverzFinancialScore.service.ts`
*Méthode :* Rule-based (pas d'IA)

| Critère | Points max |
|---|---|
| Résultat net | 25 |
| Fonds propres | 25 |
| Trésorerie | 20 |
| Endettement | 15 |
| Tendance (N vs N-1) | 15 |
| *Total* | *100* |

*Cache :* 30 jours (données Pappers)
*Fallback :* 50/100 si aucune donnée financière disponible

---

### 2.2 Score Juridique (12,5%)

*Source :* Pappers (BODACC, décisions de justice)
*Fichier :* `backend/src/services/moverzGlobalScore.service.ts` → `computeJuridiqueSubScore()`
*Méthode :* Rule-based

Démarre à 100 et applique des malus :

| Situation | Malus |
|---|---|
| Décision récente (< 3 ans) | -25 pts |
| Décision ancienne (≥ 3 ans) | -10 pts |
| Décision grave (liquidation, redressement…) | -15 pts supplémentaires |
| Déménageur demandeur (position attaque) | 0 pts (pas de malus) |

*Fallback :* 100/100 si aucune procédure détectée

---

### 2.3 Score Google (20%)

*Source :* Google Places API (New)
*Fichier :* `backend/src/services/moverzGlobalScore.service.ts` → `computeGoogleSubScore()`
*Méthode :* Rule-based

```
ratingScore = (note / 5) × 100
volumeBonus = min(10, avis / 30 × 10)
score       = min(100, ratingScore + volumeBonus)
```

Si moins de 30 avis → plafonné à 80/100
Établissement fermé définitivement → 0/100

*Cache :* 7 jours (appels Google Places)
*Fallback :* 50/100 si aucune donnée Google

---

### 2.4 Score Réputation (20%)

*Source :* SearchAPI.io (tous les avis Google sur 12 mois) + IA (GPT-4o-mini)
*Fichier :* `backend/src/services/moverGoogleReviews.service.ts` → `computeReputationFromRatio()`
*Méthode :* Rule-based sur avis authentiques + détection faux avis

*Formule :*

```
score = (1 - ratio_négatifs) × 100
```

Appliqué uniquement sur les avis *authentiques* (les suspects sont exclus).

*Plafond volume* (avis authentiques sur 12 mois) :

| Nb avis authentiques | Score max |
|---|---|
| 1–4 | 60 |
| 5–9 | 75 |
| 10–24 | 88 |
| 25–49 | 95 + bonus |
| 50+ | 100 |

*Détection faux avis* — un avis est suspect si ≥ 2 critères parmi :
- Texte < 10 mots ou vide
- Auteur en doublon dans la liste
- Rafale : ≥ 3 avis 5★ la même semaine
- Avis 5★ sans texte

*Cache :* 7 jours (SearchAPI)
*Fallback :* 50/100 si analyse IA non effectuée

---

### 2.5 Score Vigilance (35%)

*Source :* SearchAPI.io (avis ≤ 4★, 12 mois) + IA (GPT-4o-mini)
*Fichier :* `backend/src/services/vigilanceCategories.ts` + `moverGoogleReviews.service.ts`
*Méthode :* Catégories fixes analysées par IA

*6 catégories avec leurs poids :*

| Catégorie | Poids | Mots-clés déclencheurs |
|---|---|---|
| Casse et dégradation | 30% | cassé, brisé, abîmé, dégradé, rayé… |
| Vol signalé | 30% | vol, volé, disparu, manquant… |
| Calendrier non respecté | 10% | retard, délai, pas livré… |
| Prix modifié | 10% | surfacturation, supplément, arnaque… |
| Personnel désagréable | 10% | impoli, agressif, grossier… |
| Autres problèmes | 10% | (classification résiduelle) |

*Score par catégorie* (basé sur `ratio = nb_signalements / total_avis_authentiques`) :

| Ratio | Score | Statut |
|---|---|---|
| 0% | 100 | ✅ ok |
| < 1% | 100 | ✅ ok (signal non significatif) |
| 1% – 3% | 50 | ⚠️ warning |
| > 3% | 0 | 🚨 alert |

*Score vigilance global* = somme pondérée des scores par catégorie

*Cas spécial :* 0 avis négatifs authentiques sur 12 mois → vigilance automatiquement 100/100 (sans appel IA)

*Engagement déménageur :* Le déménageur peut répondre à chaque catégorie via sa fiche. Une IA valide si l'engagement est concret. Si approuvé, la catégorie passe à 100 (dismissed).

---

## 3. Les 3 dimensions client

Les 5 sous-scores sont regroupés en 3 dimensions pour la présentation :

| Dimension | Poids total | Sous-scores inclus |
|---|---|---|
| 🔒 Fiabilité légale | 25% | Financier (12,5%) + Juridique (12,5%) |
| ⭐ Satisfaction clients | 40% | Google (20%) + Réputation (20%) |
| 🚨 Alertes | 35% | Vigilance (35%) |

Le score d'une dimension est la moyenne pondérée de ses sous-scores (calculée dans `scoringSummary.service.ts` → `computeDimensionScore()`).

---

## 4. Barème et labels

*Fichier de référence :* `backend/src/services/scoringSummary.service.ts`

| Score | Label | Emoji | Couleur hex |
|---|---|---|---|
| 85 – 100 | Excellent | 🟢 | `#16A34A` (vert) |
| 70 – 84 | Bon | 🟢 | `#16A34A` (vert) |
| 50 – 69 | Correct | 🟡 | `#D97706` (ambre) |
| 30 – 49 | Fragile | 🟠 | `#EA580C` (orange) |
| 0 – 29 | Critique | 🔴 | `#DC2626` (rouge) |
| null | — | ⚪ | `#9CA3AF` (gris) |

**Pour modifier le barème** : éditer uniquement `backend/src/services/scoringSummary.service.ts` → fonctions `scoreColor()` et `labelFromScore()`. Les 5 surfaces (backoffice, 3 landings SSR, API) se mettront à jour automatiquement.

---

## 5. Où vivent les données

### Base de données (PostgreSQL via Prisma)

Table : `Mover`

| Colonne | Type | Contenu |
|---|---|---|
| `moverzGlobalScore` | Int? | Score global 0-100 |
| `moverzGlobalScoreLabel` | String? | "Excellent" / "Bon" / … |
| `moverzGlobalScoreDate` | DateTime? | Date du dernier calcul |
| `moverzGlobalScoreDetails` | Json? | Breakdown (subscores, poids, explications) |
| `moverzFinScore` | Int? | Score financier 0-100 |
| `moverzFinScoreDetails` | Json? | Détail par critère (résultat, FP, tréso…) |
| `moverzJuriScore` | Int? | Score juridique 0-100 |
| `moverzJuriScoreDetails` | Json? | Détail (décisions, malus) |
| `moverzGoogleScore` | Int? | Score Google 0-100 |
| `moverzGoogleScoreDetails` | Json? | Détail (note brute, volume) |
| `moverzReputationScore` | Int? | Score réputation 0-100 |
| `moverzVigilanceScore` | Int? | Score vigilance 0-100 |
| `vigilanceAnalysis` | Json? | Catégories + ratios + engagements déménageur |
| `reputationAnalysis` | Json? | Nb avis collectés / authentiques / suspects |
| `reviewsCache100` | Json? | Cache avis SearchAPI (TTL 7j) |
| `moverzScoreError` | String? | Message si scoring non fiable |
| `currentScoringId` | String? | FK vers `MoverScoringHistory` |

Table : `MoverScoringHistory`

Historique complet de chaque calcul (trigger, scores, statut fiabilité, date).

Table : `MoverzScoringConfig`

Configuration des poids et seuils (ID `'default'`). Modifiable sans redéploiement.

### Variables d'environnement (CapRover)

| Variable | Usage |
|---|---|
| `GOOGLE_PLACES_API_KEY` | Récupération note + avis Google (Places API New) |
| `SERPAPI_KEY` | Récupération tous les avis 12 mois (SearchAPI.io) |
| `OPENAI_API_KEY` | Analyse IA (résumé avis, vigilance) — fallback Anthropic |
| `ANTHROPIC_API_KEY` / `CLAUDE_API_KEY` | Fallback IA si OpenAI indisponible |
| `PAPPERS_API_KEY` | Données financières + juridiques |
| `SCORING_API_KEY_PUBLIC` | Clé API pour moverz.fr (level=public) |
| `SCORING_API_KEY_DETAIL` | Clé API pour widgets détaillés |
| `SCORING_API_KEY_ADMIN` | Clé API admin (level=full) |

---

## 6. Architecture du code

```
backend/src/
├── services/
│   ├── scoringSummary.service.ts        ← SOURCE DE VÉRITÉ présentation
│   │                                       (barème, couleurs, labels, dimensions)
│   ├── moverzGlobalScore.service.ts     ← Orchestration + calcul score global
│   ├── moverzFinancialScore.service.ts  ← Calcul score financier (Pappers)
│   ├── moverGoogleReviews.service.ts    ← Avis Google (Places + SearchAPI) + IA
│   ├── vigilanceCategories.ts           ← Définition des 6 catégories
│   ├── vigilanceTypes.ts                ← Types TypeScript vigilance
│   ├── vigilanceCommitment.service.ts   ← Engagements déménageur sur catégories
│   ├── scoringHistory.service.ts        ← Historique des calculs
│   ├── scoring-utils.ts                 ← clamp(), labelFromScore()
│   └── paymentBonus.service.ts          ← Bonus conditions de paiement
├── routes/
│   ├── scoringApi.routes.ts             ← GET /api/v1/scoring/:moverId (API publique)
│   ├── publicMoverProfile.routes.ts     ← Landing déménageur (fiche + onglet scoring)
│   ├── publicMovers.routes.ts           ← Landing post-inscription déménageur
│   └── publicClient.routes.ts           ← Landing client (scores anonymisés)
```

### Flux de calcul

```
1. Trigger (MANUAL_RECALC / PAPPERS_UPDATE / GOOGLE_UPDATE / PROFILE_UPDATE)
         ↓
2. recalculateAndPersistGlobalScore(moverId)
         ↓
3. Parallèle :
   ├── enrichMoverGoogleReviewsWithNegativeAnalysis()
   │   ├── fetchReviews100() — SearchAPI tous avis 12 mois (max 500)
   │   ├── detectFakeReviews() — heuristiques faux avis
   │   ├── computeReputationFromRatio() — score réputation + plafond volume
   │   └── generateStructuredVigilanceAnalysis() — IA → 6 catégories
   └── resolveFinancialScore() — Pappers (si non calculé)
         ↓
4. computeGlobalScore() — agrégation pondérée
         ↓
5. prisma.mover.update() — persistance
         ↓
6. logScoringHistory() — transaction atomique (history + currentScoringId)
```

### Règle de maintenance

- **Modifier les seuils, labels ou couleurs** → *uniquement* `scoringSummary.service.ts`
- **Modifier les poids** → `MoverzScoringConfig` en DB (ou `TARGET_WEIGHTS` dans `moverzGlobalScore.service.ts`)
- **Modifier les catégories vigilance** → `vigilanceCategories.ts`

---

## 7. Endpoint API public

*URL de production :*

```
https://moverz-backoffice.gslv.cloud/api/v1/scoring/{moverId}
```

### Authentification

Header obligatoire : `X-Moverz-Key: <votre_clé>`

| Clé | Niveau | Données retournées |
|---|---|---|
| `SCORING_API_KEY_PUBLIC` | `public` | Score global + label + couleur + 3 dimensions + date |
| `SCORING_API_KEY_DETAIL` | `detail` | + 5 sous-scores + catégories vigilance + réputation |
| `SCORING_API_KEY_ADMIN` | `full` | + détails JSON bruts + fiabilité du calcul |

Rate limit : *60 requêtes/minute* par clé. Réponse HTTP 429 si dépassé.

### Réponse level=public (pour moverz.fr)

```json
{
  "schemaVersion": "1",
  "moverId": "8b238baa-b63f-...",
  "globalScore": 74,
  "globalLabel": "Bon",
  "globalEmoji": "🟢",
  "globalColor": "#16A34A",
  "computedAt": "2026-03-10T09:14:32.000Z",
  "dimensions": [
    {
      "id": "fiabilite",
      "label": "Fiabilité légale",
      "weight": 0.25,
      "score": 88
    },
    {
      "id": "satisfaction",
      "label": "Satisfaction clients",
      "weight": 0.40,
      "score": 72
    },
    {
      "id": "alertes",
      "label": "Alertes",
      "weight": 0.35,
      "score": 65
    }
  ]
}
```

### Réponse level=detail (pour widgets avancés)

Même structure + :

```json
{
  "subscores": {
    "financier":  { "score": 82, "label": "Bon",      "color": "#16A34A" },
    "juridique":  { "score": 95, "label": "Excellent", "color": "#16A34A" },
    "google":     { "score": 78, "label": "Bon",       "color": "#16A34A" },
    "reputation": { "score": 60, "label": "Correct",   "color": "#D97706" },
    "vigilance":  { "score": 65, "label": "Correct",   "color": "#D97706" }
  },
  "reputation": {
    "totalCollected": 47,
    "authenticCount": 44,
    "suspiciousCount": 3
  },
  "vigilanceCategories": [
    { "id": "casse_degradation", "label": "Casse et dégradation", "weight": 0.30,
      "reviewCount": 2, "ratio": 0.045, "score": 0, "status": "alert" },
    { "id": "vol", "label": "Vol signalé", "weight": 0.30,
      "reviewCount": 0, "ratio": 0, "score": 100, "status": "ok" }
  ]
}
```

### Générer les clés API (en prod)

```bash
# Sur le serveur ou en local
openssl rand -hex 32
# Exemple : a3f8c2e1b7d4...
```

Ajouter dans CapRover → App → moverz-backoffice → Environment Variables :
- `SCORING_API_KEY_PUBLIC` = `<clé générée>`
- `SCORING_API_KEY_DETAIL` = `<clé différente>`
- `SCORING_API_KEY_ADMIN`  = `<clé différente>`

Puis redémarrer l'application.

---

## 8. Widget embarquable

Deux styles disponibles pour intégration sur site déménageur ou moverz.fr.

### Style badge (compact)

```html
<iframe
  src="https://moverz-backoffice.gslv.cloud/api/v1/scoring/{moverId}/widget?style=badge"
  frameborder="0"
  scrolling="no"
  width="180"
  height="60"
  title="Score Moverz"
></iframe>
```

- Remplacer `{moverId}` par l'UUID du déménageur.
- Header `X-Moverz-Key` non requis pour le widget (la clé est intégrée côté serveur).
- ⚠️ Pour l'instant, le widget nécessite la clé dans le header. Ouvrir un ticket pour ajouter un paramètre `?key=` si besoin d'un embed 100% côté client.

*Aperçu :*

```
┌─────────────────┐
│  74   Bon       │
│       Label     │  ← couleur dynamique selon score
│       Moverz    │
└─────────────────┘
```

### Style carte (avec dimensions)

```html
<iframe
  src="https://moverz-backoffice.gslv.cloud/api/v1/scoring/{moverId}/widget?style=card"
  frameborder="0"
  scrolling="no"
  width="300"
  height="210"
  title="Score Moverz"
></iframe>
```

*Aperçu :*

```
┌──────────────────────────────┐
│  74    Bon                   │
│        Label Moverz /100     │
│        Vérifié le 10 mars... │
├──────────────────────────────┤
│ Fiabilité légale  ████░  88  │
│ Satisfaction      ███░░  72  │
│ Alertes           ████░  65  │
└──────────────────────────────┘
```

### Cache

Les widgets sont mis en cache *5 minutes* côté navigateur (`Cache-Control: public, max-age=300`). Le score lui-même est recalculé au plus toutes les 7 jours (TTL cache SearchAPI), ou immédiatement si forcé depuis le backoffice.

---

## 9. Textes et chiffres pour moverz.fr

### 9.1 Page label-moverz.fr — description du scoring

*Titre :* 3 analyses de risque. Zéro faillite.

*Description courte du score :*

Le Score Moverz est une note de 0 à 100 calculée automatiquement à partir de 3 grandes dimensions : la fiabilité légale, la satisfaction clients et les alertes comportementales. Il est mis à jour en continu.

*Tableau des 3 dimensions (à afficher sur le site) :*

| Dimension | Poids | Ce qu'on mesure |
|---|---|---|
| 🔒 Fiabilité légale | 25% | Santé financière (bilans, trésorerie) + absence de procédures judiciaires |
| ⭐ Satisfaction clients | 40% | Note Google pondérée par le volume + analyse IA de tous les avis des 12 derniers mois |
| 🚨 Alertes | 35% | Détection de signaux d'alerte dans les avis négatifs : casses, vols, retards, prix modifiés… |

*Barème à afficher :*

| Score | Label | Signification pour le client |
|---|---|---|
| 85 – 100 | Excellent | Déménageur hautement fiable, aucun signal d'alerte |
| 70 – 84 | Bon | Bon profil global, critères satisfaits |
| 50 – 69 | Correct | Profil acceptable, quelques points à surveiller |
| 30 – 49 | Fragile | Signaux d'alerte détectés, prudence recommandée |
| 0 – 29 | Critique | Risques importants identifiés |

### 9.2 FAQ scoring (suggestions de réponses pour le site)

*Q : Comment est calculé le score ?*

Le score Moverz agrège automatiquement des données issues de 4 sources indépendantes : les bilans comptables publiés au registre du commerce (via Pappers), les décisions de justice (BODACC), les avis Google (analysés par intelligence artificielle sur les 12 derniers mois), et une détection de signaux d'alerte récurrents dans les avis clients.

*Q : À quelle fréquence est-il mis à jour ?*

Le score est recalculé automatiquement dès qu'une nouvelle donnée est disponible (nouveau bilan, nouveaux avis). Les avis Google sont vérifiés tous les 7 jours. En cas de changement significatif, le score est mis à jour immédiatement.

*Q : Que signifie le score de vigilance ?*

Le score de vigilance analyse les avis négatifs des 12 derniers mois et recherche 6 types de problèmes récurrents : casses/dégradations, vols, retards, prix modifiés, personnel désagréable, et autres incidents. Si plus de 3% des avis authentiques mentionnent un problème, la catégorie passe en alerte rouge.

*Q : Les avis achetés sont-ils pris en compte ?*

Non. Notre système détecte automatiquement les avis suspects (texte trop court, compte neuf, rafales suspectes) et les exclut du calcul. Seuls les avis authentiques sont utilisés.

*Q : Un déménageur peut-il améliorer son score ?*

Oui, de plusieurs façons : en maintenant une bonne santé financière, en répondant aux avis négatifs de façon constructive, et en prenant des engagements concrets sur les problèmes identifiés. Notre IA valide la qualité de ces engagements.

### 9.3 Chiffres clés à jour (mars 2026)

| Chiffre | Valeur |
|---|---|
| Déménageurs analysés | 3 000+ |
| Sources de données | 4 indépendantes |
| Avis collectés par déménageur | Jusqu'à 500 (12 mois) |
| Fréquence de mise à jour | 7 jours (avis) / 30 jours (financier) |
| Faillites parmi les labellisés | 0 depuis janvier 2026 |

### 9.4 Phrase de positionnement (à utiliser sur le site)

Le seul comparateur qui vérifie la santé financière, le casier juridique *et* l'historique client réel de chaque déménageur — automatiquement, en continu.

---

## Annexe — Contacts et accès

| Élément | Valeur |
|---|---|
| Backend prod | `https://moverz-backoffice.gslv.cloud` |
| Frontend prod | `https://moverz-front.gslv.cloud` |
| Backoffice admin | `https://moverz-front.gslv.cloud` + auth |
| CapRover (deploy) | `https://captain.gslv.cloud` |
| Endpoint scoring API | `GET /api/v1/scoring/{moverId}` |
| Widget badge | `GET /api/v1/scoring/{moverId}/widget?style=badge` |
| Widget carte | `GET /api/v1/scoring/{moverId}/widget?style=card` |
| Fichier barème | `backend/src/services/scoringSummary.service.ts` |
| Fichier catégories vigilance | `backend/src/services/vigilanceCategories.ts` |
| Config poids DB | Table `MoverzScoringConfig`, ID `'default'` |
