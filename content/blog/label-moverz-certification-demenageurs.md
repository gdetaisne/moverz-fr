---
slug: label-moverz-certification-demenageurs
title: "Label Moverz : Score /100 · Guide complet 2026"
description: "Score Moverz : 3 dimensions (fiabilité légale 25%, satisfaction clients 40%, alertes 35%) calculées à partir de 5 sous-scores indépendants. Monitoring continu, exclusion automatique. 0 faillite depuis janvier 2026."
type: pilier
category: moverz
publishedAt: "2026-03-10"
updatedAt: "2026-03-10"
readingTime: 15
featured: true
---

**3 millions de déménagements par an en France.**  
**64% des entreprises présentent des anomalies (DGCCRF 2023).**  
**257 faillites en 2024 (BODACC).**

Quand vous cherchez un déménageur, vous devriez pouvoir répondre facilement à ces questions :

- Cette entreprise est-elle solide financièrement ?
- A-t-elle des procédures judiciaires en cours ?
- Ses clients sont-ils satisfaits (vraiment) ?
- Y a-t-il des signaux d'alerte récurrents (casses, vols, retards) ?
- Mes affaires sont-elles protégées en cas de problème ?

**Le problème : ces informations sont dispersées, complexes, payantes.**

Un particulier ne peut pas :
- Analyser les bilans financiers sur Pappers Pro
- Consulter les décisions de justice (BODACC)
- Analyser systématiquement tous les avis Google des 12 derniers mois
- Détecter les patterns d'alertes récurrents automatiquement
- Décrypter les signaux d'une faillite imminente

**C'est pour ça qu'existe le Score Moverz.**

> **Vérifiez un déménageur en 30 secondes**  
> Consultez le score /100 de n'importe quel déménageur, gratuit et sans inscription : [Label Moverz — outil de vérification](/label-moverz/).  
> Ou créez votre dossier pour recevoir des devis de déménageurs notés : [devis.moverz.fr](https://devis.moverz.fr/devis-gratuits?source=moverz.fr&from=blog-label).

---

## Qu'est-ce que le Score Moverz ?

### Définition simple

Le **Score Moverz** est une note de 0 à 100 calculée automatiquement pour chaque déménageur référencé.

Il agrège **5 sous-scores indépendants** (financier, juridique, Google, réputation, vigilance), regroupés en **3 dimensions** pour la présentation client.

**Ce n'est PAS :**
- ✗ Un label payant (les déménageurs ne paient pas)
- ✗ Un badge marketing auto-déclaré
- ✗ Une simple vérification de licence
- ✗ Basé uniquement sur les 20 derniers avis

**C'est :**
- ✓ Un score objectif basé sur 4 sources de données indépendantes
- ✓ Un monitoring continu (recalculé tous les 7 jours)
- ✓ Une exclusion automatique si score < 50/100
- ✓ Une transparence totale (vous voyez les 3 dimensions)

---

## Vue d'ensemble : 5 sous-scores, 3 dimensions

### La formule du Score Global

```
Score Global (0-100) = Σ (poids × sous-score)

= 12,5% Score Financier
+ 12,5% Score Juridique
+ 20% Score Google
+ 20% Score Réputation
+ 35% Score Vigilance
```

### Les 3 dimensions client

Ces 5 sous-scores sont regroupés en **3 dimensions** pour une présentation claire :

| Dimension | Poids | Sous-scores inclus | Ce qu'on mesure |
|-----------|-------|-------------------|-----------------|
| **🔒 Fiabilité légale** | 25% | Financier (12,5%) + Juridique (12,5%) | Santé financière (bilans, trésorerie) + absence de procédures judiciaires |
| **⭐ Satisfaction clients** | 40% | Google (20%) + Réputation (20%) | Note Google pondérée + analyse automatisée de tous les avis 12 mois |
| **🚨 Alertes** | 35% | Vigilance (35%) | Détection de 6 catégories de problèmes récurrents (casses, vols, retards…) |

---

## Les 5 sous-scores en détail

### 1. Score Financier (12,5%)

**Source :** Pappers (registre du commerce)  
**Méthode :** Rule-based  
**Cache :** 30 jours

#### Critères évalués

| Critère | Poids | Ce qu'on analyse |
|---------|-------|------------------|
| **Résultat net** | 25% | Bénéfices ou pertes de l'exercice |
| **Fonds propres** | 25% | Capitaux disponibles |
| **Trésorerie** | 20% | Cash disponible immédiatement |
| **Endettement** | 15% | Niveau de dettes court/long terme |
| **Tendance N vs N-1** | 15% | Évolution par rapport à l'exercice précédent |

#### Exemple de calcul

```
Déménageur X:
- Résultat net: 80 000€ (progression) → 22/25 points
- Fonds propres: 150 000€ (sains) → 23/25 points
- Trésorerie: 45 000€ (correcte) → 16/20 points
- Endettement: Modéré → 12/15 points
- Tendance: +12% CA, +8% résultat → 13/15 points

Score Financier: 22+23+16+12+13 = 86/100 ✓
```

**Fallback :** 50/100 si aucune donnée financière disponible (entreprise récente ou non publiée)

---

### 2. Score Juridique (12,5%)

**Source :** Pappers (BODACC, décisions de justice)  
**Méthode :** Rule-based (système de malus)  
**Départ :** 100/100

#### Malus appliqués

| Situation | Malus |
|-----------|-------|
| Décision récente (< 3 ans) | -25 pts |
| Décision ancienne (≥ 3 ans) | -10 pts |
| Décision grave (liquidation, redressement…) | -15 pts supplémentaires |
| Déménageur en position de demandeur (attaque) | 0 pts (pas de malus) |

#### Exemple de calcul

```
Déménageur Y:
- 1 décision mineure il y a 4 ans (litige client résolu) → -10 points
- 0 procédure collective → 0 malus
- Dirigeants sans interdiction de gérer → 0 malus

Score Juridique: 100 - 10 = 90/100 ✓
```

**Fallback :** 100/100 si aucune procédure détectée

---

### 3. Score Google (20%)

**Source :** Google Places API (New)  
**Méthode :** Rule-based  
**Cache :** 7 jours

#### Formule

```
ratingScore = (note / 5) × 100
volumeBonus = min(10, nb_avis / 30 × 10)
Score Google = min(100, ratingScore + volumeBonus)
```

#### Règles spéciales

- **< 30 avis** : Score plafonné à 80/100 (volume insuffisant)
- **Établissement fermé** : 0/100 (exclusion automatique)
- **Pas de présence Google** : 50/100 (fallback neutre)

#### Exemple de calcul

```
Déménageur Z:
- Note Google: 4.2/5 → 84 points
- Volume: 47 avis → +10 points bonus (47/30 × 10 = 15,6 → plafonné à 10)

Score Google: 84 + 10 = 94/100 ✓
```

---

### 4. Score Réputation (20%)

**Source :** SearchAPI.io (tous les avis Google sur 12 mois, max 500) + analyse automatisée  
**Méthode :** Rule-based sur avis authentiques uniquement  
**Cache :** 7 jours

#### Formule

```
ratio_négatifs = nb_avis_négatifs_authentiques / total_avis_authentiques
Score Réputation = (1 - ratio_négatifs) × 100
```

#### Plafonds selon volume d'avis authentiques

| Nb avis authentiques (12 mois) | Score max |
|-------------------------------|-----------|
| 1–4 avis | 60/100 |
| 5–9 avis | 75/100 |
| 10–24 avis | 88/100 |
| 25–49 avis | 95/100 + bonus |
| 50+ avis | 100/100 |

#### Détection des faux avis

Un avis est **suspect** si ≥ 2 critères parmi :
- Texte < 10 mots ou vide
- Auteur en doublon dans la liste
- Rafale : ≥ 3 avis 5★ la même semaine
- Avis 5★ sans texte

**Les avis suspects sont exclus du calcul.**

#### Exemple de calcul

```
Déménageur W:
- Total collecté 12 mois: 52 avis
- Suspects détectés: 5 avis (rafales + textes vides)
- Avis authentiques: 47 avis
- Avis négatifs (≤3★) authentiques: 8 avis

Ratio négatifs: 8/47 = 17%
Score Réputation: (1 - 0.17) × 100 = 83/100 ✓
```

**Fallback :** 50/100 si analyse non effectuée

---

### 5. Score Vigilance (35%)

**Source :** SearchAPI.io (avis ≤ 4★, 12 mois) + analyse automatisée
**Méthode :** 6 catégories fixes analysées automatiquement
**Cache :** 7 jours

#### Les 6 catégories d'alertes

| Catégorie | Poids | Mots-clés déclencheurs |
|-----------|-------|------------------------|
| **Casse et dégradation** | 30% | cassé, brisé, abîmé, dégradé, rayé, détruit |
| **Vol signalé** | 30% | vol, volé, disparu, manquant, perdu |
| **Calendrier non respecté** | 10% | retard, délai non tenu, pas livré à temps |
| **Prix modifié** | 10% | surfacturation, supplément surprise, arnaque prix |
| **Personnel désagréable** | 10% | impoli, agressif, grossier, irrespectueux |
| **Autres problèmes** | 10% | (classification résiduelle) |

#### Score par catégorie

```
ratio = nb_signalements_catégorie / total_avis_authentiques

Si ratio = 0%       → 100 points (aucun signalement)
Si ratio < 1%       → 100 points (signal non significatif)
Si ratio 1% – 3%    → 50 points  (⚠️ warning)
Si ratio > 3%       → 0 points   (🚨 alerte rouge)
```

#### Score Vigilance global

```
Score Vigilance = Σ (poids_catégorie × score_catégorie)

= 30% × score_casse
+ 30% × score_vol
+ 10% × score_calendrier
+ 10% × score_prix
+ 10% × score_personnel
+ 10% × score_autres
```

#### Exemple de calcul

```
Déménageur V (47 avis authentiques sur 12 mois):

Catégorie Casse:
- 2 avis mentionnent "cassé" ou "abîmé"
- Ratio: 2/47 = 4,2% → Score 0/100 (🚨 alerte rouge)
- Contribution: 30% × 0 = 0 points

Catégorie Vol:
- 0 avis mentionnent "vol" ou "disparu"
- Ratio: 0% → Score 100/100 (✅ ok)
- Contribution: 30% × 100 = 30 points

Catégorie Calendrier:
- 1 avis mentionne "retard"
- Ratio: 1/47 = 2,1% → Score 50/100 (⚠️ warning)
- Contribution: 10% × 50 = 5 points

(... autres catégories)

Score Vigilance final: 0+30+5+10+8+10 = 63/100 ✓
```

**Cas spécial :** 0 avis négatifs authentiques sur 12 mois → Vigilance automatiquement 100/100

---

### Engagement déménageur

Le déménageur peut **répondre à chaque catégorie** via sa fiche publique.

Exemple d'engagement validé :
> "Suite aux 2 signalements de casse, nous avons mis en place un double emballage systématique pour tous les objets fragiles et une formation renforcée de nos équipes sur la manipulation. Nous prenons désormais des photos avant/après chaque chargement."

Notre système valide automatiquement si l'engagement est **concret et actionnable**.  
Si approuvé → **la catégorie passe à 100/100** (dismissed).

---

## Barème et labels

Le score global est converti en label textuel et couleur :

| Score | Label | Couleur | Signification |
|-------|-------|---------|---------------|
| **85 – 100** | Excellent | 🟢 Vert | Déménageur hautement fiable, aucun signal d'alerte |
| **70 – 84** | Bon | 🟢 Vert | Bon profil global, critères satisfaits |
| **50 – 69** | Correct | 🟡 Ambre | Profil acceptable, quelques points à surveiller |
| **30 – 49** | Fragile | 🟠 Orange | Signaux d'alerte détectés, prudence recommandée |
| **0 – 29** | Critique | 🔴 Rouge | Risques importants identifiés |

### Seuil d'exclusion

**Score < 50/100 → Investigation manuelle + exclusion possible**

Un déménageur avec un score entre 30 et 49 (Fragile) peut être présenté avec un avertissement explicite au client.  
Un déménageur avec un score < 30 (Critique) est **exclu automatiquement**.

---

## Monitoring continu : Le score n'est jamais figé

### Fréquence de recalcul

| Source de données | Fréquence | Raison |
|-------------------|-----------|--------|
| **Avis Google** | Tous les 7 jours | Nouveaux avis via SearchAPI.io |
| **Données financières** | Tous les 30 jours | Nouveaux bilans Pappers |
| **Données juridiques** | Tous les 30 jours | Nouvelles procédures BODACC |
| **Force manuelle** | À la demande | Depuis le backoffice admin |

### Alertes automatiques en temps réel

**Si un score passe < 50/100 ou alerte critique détectée :**

1. **Recalcul immédiat forcé** (vérification)
2. **Investigation manuelle** (équipe Moverz)
3. **Notification clients avec dossiers en cours** (si exclusion confirmée)
4. **Proposition d'alternatives certifiées**

**Exemple réel (mars 2026) :**

> Un déménageur passe de 72/100 à 38/100 (score Vigilance = 0 suite à 3 nouveaux avis signalant des casses).
> 
> Actions automatiques :
> - Recalcul immédiat confirmé
> - Investigation manuelle : vraies casses confirmées par photos clients
> - 3 dossiers en cours retirés
> - 3 clients notifiés + 2 alternatives proposées
> 
> **Résultat : 3 clients protégés d'un déménageur à problème.**

---

## Vérifications complémentaires (obligatoires)

Au-delà du score /100, chaque déménageur doit avoir :

### 1. Licence de transport valide

**Licence requise :** Capacité de transport de marchandises (inscription DREAL)

**Vérification :**
- Numéro de licence valide
- Inscription registre des transporteurs
- Non-radiation

[En savoir plus sur les vérifications partenaires →](/verifications-partenaires/)

---

### 2. Assurance RC Pro ≥ 1,5 M€

**Assurance Responsabilité Civile Professionnelle obligatoire.**

**Vérification :**
- Attestation en cours de validité (< 6 mois)
- Plafond minimum 1,5 M€ (norme secteur)
- Franchise raisonnable (< 500€)

---

### 3. Identité légale

**SIREN/Kbis récent (< 3 mois).**

**Vérification :**
- Entreprise active (pas radiée)
- Adresse siège social cohérente
- Dirigeants identifiés

---

## Comment voir le Score Moverz ?

### Outil de vérification gratuit (Label Moverz)

**Consultez le score de n'importe quel déménageur en 30 secondes** — nom, ville ou SIRET. Gratuit, sans inscription, résultat immédiat.

→ [Vérifier un déménageur sur moverz.fr/label-moverz/](/label-moverz/)

Cet outil affiche le score global /100, les 3 dimensions (fiabilité légale, satisfaction clients, alertes), et les 6 catégories de vigilance. Jusqu'à 3 vérifications gratuites par session.

---

### Sur les devis que vous recevez

Chaque devis envoyé via Moverz affiche le score global + les 3 dimensions en transparence totale :

```
┌─────────────────────────────────────┐
│ Score Moverz: 74/100 · Bon          │
│ Vérifié le 10 mars 2026             │
│                                     │
│ 🔒 Fiabilité légale:       88/100  │
│ ⭐ Satisfaction clients:   72/100  │
│ 🚨 Alertes:                65/100  │
│                                     │
│ ✓ Licence transport valide          │
│ ✓ Assurance RC Pro 1,5 M€           │
└─────────────────────────────────────┘
```

**Transparence totale : vous savez pourquoi ce déménageur est recommandé.**

---

### Widget embarquable pour les déménageurs

Les déménageurs certifiés peuvent afficher leur score sur leur site via un widget iframe :

**Style badge (compact) :**
```html
<iframe src="https://moverz-backoffice.gslv.cloud/api/v1/scoring/{moverId}/widget?style=badge" 
        width="180" height="60"></iframe>
```

**Style carte (avec dimensions) :**
```html
<iframe src="https://moverz-backoffice.gslv.cloud/api/v1/scoring/{moverId}/widget?style=card" 
        width="300" height="210"></iframe>
```

---

## Qui N'obtient PAS un bon score ?

### Distribution des scores (mars 2026)

Sur 3000+ déménageurs analysés :

| Tranche de score | % déménageurs | Label | Action |
|------------------|---------------|-------|--------|
| **85-100** | ~28% | Excellent | Présentés en priorité |
| **70-84** | ~35% | Bon | Présentés normalement |
| **50-69** | ~25% | Correct | Présentés avec contexte |
| **30-49** | ~8% | Fragile | Avertissement client |
| **0-29** | ~4% | Critique | Exclus automatiquement |

### Raisons d'exclusion fréquentes

| Raison | Fréquence | Dimension impactée |
|--------|-----------|-------------------|
| **Alertes vigilance >3%** (casses/vols récurrents) | 5% | Alertes → 0-20/100 |
| **Trésorerie négative** | 3% | Fiabilité légale → 20-40/100 |
| **Avis Google < 3.0/5** | 2% | Satisfaction clients → 30-50/100 |
| **Procédure collective active** | 1% | Fiabilité légale → 0/100 |
| **Ratio négatifs >40%** | 1% | Satisfaction clients → 20-40/100 |

[Voir les chiffres clés du marché →](/chiffres-cles/)

---

## Peut-on récupérer un bon score ?

**Oui, le score évolue automatiquement.**

Un déménageur peut améliorer son score :
1. **Maintenir une bonne santé financière** (bilans positifs, trésorerie saine)
2. **Répondre aux avis négatifs** de façon constructive
3. **Prendre des engagements concrets** sur les catégories d'alertes (validés automatiquement)
4. **Éviter les nouveaux signalements** sur les catégories à problème

**Exemple :**
```
Déménageur avec Score Vigilance 40/100 (2% avis signalent casses):
→ Prend engagement validé automatiquement (double emballage, photos avant/après)
→ 0 nouveau signalement casse sur 3 mois
→ Score Vigilance passe à 85/100 (catégorie casse dismissed)
→ Score Global monte de 58 → 72/100
```

---

## Comparaison avec d'autres labels/certifications

| Label/Certification | Qui attribue ? | Vérifie finances ? | Analyse avis auto ? | Monitoring ? | Coût ? |
|---------------------|----------------|-------------------|------------------|--------------|--------|
| **Score Moverz** | Automatique (algorithmes + data) | ✓ Oui (Pappers) | ✓ Oui | ✓ 7 jours | Gratuit |
| **Qualipro Déménagement** | Organisme pro | ✗ Non | ✗ Non | ✗ Annuel | ~500€/an |
| **NF Service Déménagement** | AFNOR | ✗ Non | ✗ Non | ✗ 18 mois | ~2000€/an |
| **Certification ISO 9001** | Bureau contrôle | ✗ Non (process) | ✗ Non | ✗ 3 ans | ~5000€/an |

**Différence majeure : Moverz est le seul à vérifier la solvabilité financière ET analyser systématiquement les avis en continu.**

---

## FAQ : Le Score Moverz en questions

### Comment est calculé le score ?

Le score Moverz agrège automatiquement des données issues de **4 sources indépendantes** :
- Les bilans comptables publiés au registre du commerce (via Pappers)
- Les décisions de justice (BODACC)
- Les avis Google (analysés automatiquement sur les 12 derniers mois via SearchAPI.io)
- Une détection de signaux d'alerte récurrents dans les avis clients (6 catégories)

**5 sous-scores → 3 dimensions → 1 score global /100**

---

### À quelle fréquence est-il mis à jour ?

Le score est recalculé automatiquement :
- **Tous les 7 jours** (nouveaux avis Google)
- **Tous les 30 jours** (nouvelles données financières Pappers)
- **Immédiatement** si changement significatif détecté ou force manuelle

En cas de score passant sous 50/100, une investigation manuelle est déclenchée.

---

### Que signifie le score de vigilance ?

Le **Score Vigilance (35% du score global)** analyse les avis négatifs des 12 derniers mois et recherche **6 types de problèmes récurrents** :
- Casses/dégradations (30%)
- Vols/disparitions (30%)
- Retards (10%)
- Prix modifiés (10%)
- Personnel désagréable (10%)
- Autres problèmes (10%)

**Si plus de 3% des avis authentiques mentionnent un problème sur une catégorie, elle passe en alerte rouge (0/100).**

---

### Les avis achetés sont-ils pris en compte ?

**Non.** Notre système détecte automatiquement les avis suspects :
- Texte trop court (<10 mots)
- Comptes en doublon
- Rafales suspectes (≥3 avis 5★ la même semaine)
- Avis 5★ sans texte

**Seuls les avis authentiques sont utilisés** pour calculer les scores Réputation et Vigilance.

---

### Un déménageur peut-il améliorer son score ?

**Oui, de plusieurs façons :**

1. **Maintenir une bonne santé financière** (bilans positifs, trésorerie saine)
2. **Répondre aux avis négatifs** de façon constructive et transparente
3. **Prendre des engagements concrets** sur les problèmes identifiés (validés automatiquement)
4. **Éviter les nouveaux signalements** sur les catégories à problème

Notre système valide automatiquement la qualité des engagements (ils doivent être concrets, actionnables, et vérifiables).

---

### Les déménageurs paient-ils pour avoir un bon score ?

**Non, le score est 100% objectif et automatique.**

Il est calculé à partir de données publiques (Pappers, Google) et d'algorithmes automatisés.

Un déménageur ne peut ni acheter un bon score, ni payer pour améliorer son score, ni manipuler le système.

**Les critères sont indépendants du modèle économique de Moverz.**

---

## Conclusion : Le seul scoring continu

Le Score Moverz n'est pas un label statique.

C'est un **système de notation automatisé** qui analyse en continu :
- ✓ **3 000+ déménageurs** en France
- ✓ **5 sous-scores indépendants** par déménageur
- ✓ **Jusqu'à 500 avis Google** par déménageur (12 mois)
- ✓ **Monitoring automatique** (7 jours avis / 30 jours finances)
- ✓ **Exclusion automatique** des scores < 30/100

**Notre mission :**

Que chaque Français qui déménage puisse répondre en 10 secondes :

> "Ce déménageur est-il solide financièrement ?"  
> → **Score : 74/100 · Bon · Fiabilité légale 88/100**

> "Ses clients sont-ils satisfaits ?"  
> → **Satisfaction clients 72/100 · 44 avis authentiques analysés**

> "Y a-t-il des signaux d'alerte récurrents ?"  
> → **Alertes 65/100 · 2% avis signalent casses (⚠️ warning)**

**Vous ne devriez jamais avoir à vous demander :**  
*"Est-ce que ce déménageur va faire faillite avant mon déménagement ?"*  
*"Est-ce que mes affaires vont arriver intactes ?"*

**C'est notre job de répondre à ces questions. Automatiquement. Avant vous.**

[Découvrir pourquoi Moverz →](/pourquoi-moverz/)

---

## Comparez des déménageurs notés /100

✓ Score global /100 + 3 dimensions détaillées  
✓ 5 sous-scores indépendants (financier, juridique, Google, réputation, vigilance)  
✓ Monitoring continu jusqu'au jour J (7 jours)  
✓ Exclusion automatique si score < 30/100  
✓ Transparence totale sur les scores  
✓ 100% gratuit pour les particuliers

[**Obtenir mes devis →**](https://devis.moverz.fr/devis-gratuits?source=moverz.fr&from=blog-label)

---

### Sources et méthodologie

- **Pappers** : https://www.pappers.fr (Données financières et juridiques)
- **BODACC** : https://www.bodacc.fr (Procédures collectives officielles)
- **Google Places API** : Note et volume d'avis
- **SearchAPI.io** : Collecte de tous les avis Google (12 mois)
- **Analyse automatisée** : Analyse des avis (réputation + vigilance)
- **DGCCRF** : https://www.economie.gouv.fr/dgccrf (Rapport anomalies 2023)

**Mise à jour :** 10 mars 2026

---

### Articles connexes et cluster vérification

**Pilier (outil de vérification) :**
- [Label Moverz — Vérifier un déménageur en 30 secondes](/label-moverz/) *(outil gratuit, score /100)*

**Guides arnaques et fiabilité :**
- [Comment éviter les arnaques au déménagement (Guide 2026)](/blog/eviter-arnaques-demenagement/)
- [Comment vérifier qu'un déménageur est fiable](/blog/comment-verifier-demenageur-fiable/)
- [Vérifier un déménageur : SIREN, Pappers, assurance](/blog/verifier-demenageur-creditsafe-siren/)
- [Éviter les suppléments de prix le jour J](/blog/supplement-prix-jour-j-comment-eviter/)

**Pages utiles :**
- [Chiffres clés du marché](/chiffres-cles/)
- [Nos vérifications partenaires](/verifications-partenaires/)
- [Critères pour choisir un déménageur](/criteres-choisir-demenageur/)
- [Comparateur de déménageurs](/comparateur-demenageurs/)
- [FAQ arnaques déménagement](/faq-arnaque-demenagement/)
- [FAQ déménagement](/faq/)
