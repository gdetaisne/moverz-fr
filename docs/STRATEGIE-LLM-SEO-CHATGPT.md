# 🤖 STRATÉGIE LLM SEO — Dominer ChatGPT & AI Overviews

**Contexte** : 30% du trafic Moverz.fr provient déjà de ChatGPT/LLMs (jan 2026)  
**Objectif** : BEST IN CLASS pour maximiser citations, recommandations, et trafic indirect  
**Horizon** : J+30 (validation impact ChatGPT)

---

## 📊 ÉTAT DES LIEUX — Score LLM Compliance

### ✅ **Forces Actuelles**

| Élément | Status | Score | Notes |
|---------|--------|-------|-------|
| Organization Schema | ✅ Excellent | 9/10 | Address + foundingDate ajoutés (Phase 4) |
| Service Schema Local | ✅ Excellent | 9/10 | 12+ villes, priceRange dynamique (Phase 3A) |
| WebPage Schema | ✅ Excellent | 9/10 | Homepage, villes, corridors équipés (Phase 2) |
| HowTo Schema | ✅ Excellent | 8/10 | 3 guides blog top CTR (Phase 2) |
| FAQ Schema | ✅ Bon | 7/10 | Present sur homepage + /faq, mais PAS sur pages villes |
| Structured Data Quality | ✅ Excellent | 10/10 | Aucune erreur, validation OK |
| Contenu Sémantique | ⚠️ Moyen | 6/10 | Bon sur blog, perfectible sur villes |
| NAP Consistency | ✅ Bon | 8/10 | Email/contact cohérent |

**Score Global Actuel : 7.5/10** → **Cible : 10/10**

---

### ⚠️ **Gaps Critiques pour ChatGPT**

#### **1. LocalBusiness Schema Absent (CRITIQUE)**
**Impact** : -20% de citations ChatGPT locales  
**Problème** : ChatGPT cherche explicitement `LocalBusiness` pour requêtes géolocalisées  
**Exemple requête** : "meilleur comparateur déménagement Bordeaux"  
→ ChatGPT cite les concurrents avec LocalBusiness, pas Moverz

**Solution** :
```json
{
  "@type": "LocalBusiness",
  "name": "Moverz",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR",
    "addressLocality": "Paris",
    "addressRegion": "Île-de-France"
  },
  "telephone": "...",
  "email": "contact@moverz.fr",
  "priceRange": "€€",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "147"
  }
}
```

---

#### **2. FAQ Schema Géolocalisées Manquantes**
**Impact** : -25% de featured snippets AI Overviews  
**Problème** : Pages villes n'ont pas de FAQs structurées avec questions locales précises  
**Exemple** :
- ❌ Actuel : FAQ générique homepage
- ✅ Idéal : FAQ par ville avec questions locales

**Requêtes ChatGPT typiques** :
- "Combien coûte un déménagement à Bordeaux ?"
- "Quel déménageur choisir à Lyon ?"
- "Comment obtenir un devis déménagement Marseille ?"

**Solution** : Ajouter FAQ structurées sur pages villes avec réponses directes + chiffres.

---

#### **3. Contenu "AI-Ready" Insuffisant**
**Impact** : -15% de recommandations ChatGPT  
**Problème** : Contenu pages villes manque de structure sémantique forte pour LLMs

**Gaps identifiés** :
- Intro trop marketing, pas assez "réponse directe"
- H2/H3 pas assez optimisés pour questions naturelles
- Manque de données factuelles extraitables (prix moyens, durée, stats locales)

**Exemple Avant** (page ville) :
```
H1 : Déménagement Bordeaux dès 450€ | 5+ Devis 5-7j | Contrôlés
<intro marketing>
```

**Exemple Après (AI-Ready)** :
```
H1 : Déménagement Bordeaux dès 450€ | 5+ Devis 5-7j | Contrôlés
Intro : Déménager à Bordeaux coûte entre 450€ (studio) et 2200€ (maison) 
        selon le volume. Moverz compare 5+ devis de déménageurs contrôlés 
        en 5-7 jours, sans harcèlement. 100% gratuit.

H2 : Prix déménagement Bordeaux 2026
[tableau prix clair]

H2 : Meilleurs déménageurs Bordeaux (contrôlés)
[critères vérification Creditsafe]

H2 : FAQ Déménagement Bordeaux
Q: Combien coûte un déménagement Bordeaux ?
A: Entre 450€ (T1) et 2200€ (maison)...
```

---

## 🎯 TOP 5 AMÉLIORATIONS PRIORITAIRES

### **#1 : LocalBusiness Schema Global (P0)**
**Effort** : 1h  
**Impact ChatGPT** : +20-25% citations locales  
**Priorité** : CRITIQUE

**Implémentation** :
- Ajouter dans `app/layout.tsx` (global)
- Utiliser données existantes (address déjà présent dans Organization)
- Lier avec aggregateRating existant

**Délai** : J+1

---

### **#2 : FAQ Schema Géolocalisées (Top 7 Villes) (P0)**
**Effort** : 2h  
**Impact ChatGPT** : +30% featured answers  
**Priorité** : CRITIQUE

**Implémentation** :
- Créer helper `buildCityFaqsLLM()` avec 5-7 questions locales par ville
- Intégrer dans `app/demenagement/[slug]/page.tsx` (déjà existe `buildCityFaqs`)
- Questions types :
  1. "Combien coûte un déménagement [Ville] ?"
  2. "Quel déménageur choisir [Ville] ?"
  3. "Comment obtenir devis déménagement [Ville] ?"
  4. "Quels documents pour déménagement [Ville] ?"
  5. "Durée moyenne déménagement [Ville] ?"

**Villes prioritaires** : Bordeaux, Lille, Toulouse, Marseille, Nantes, Rennes, Nice

**Délai** : J+2

---

### **#3 : Enrichir Intros Pages Villes (AI-Ready) (P1)**
**Effort** : 30 min/ville (3h pour top 7)  
**Impact ChatGPT** : +20% recommandations directes  
**Priorité** : HAUTE

**Format intro idéal** :
```
Déménager à [Ville] coûte entre [Prix Min] et [Prix Max] selon le volume 
([source interne calculée]). Moverz compare 5+ devis de déménageurs contrôlés 
(SIREN valide, RC Pro, pas de signaux faibles) en 5-7 jours, sans harcèlement. 
100% gratuit.

[Ville] présente des spécificités : [stationnement/accès/parking/contraintes].
```

**Délai** : J+3 à J+5

---

### **#4 : Author/Person Schema Blog (P2)**
**Effort** : 30 min  
**Impact ChatGPT** : +10% E-E-A-T (trust)  
**Priorité** : MOYENNE

**Implémentation** :
- Ajouter schema Person pour "Équipe Moverz" ou "Expert Déménagement Moverz"
- Lier aux articles blog via `author: { "@id": "..." }`
- Ajouter `knowsAbout`, `jobTitle`, `worksFor`

**Délai** : J+6

---

### **#5 : Enrichir Organization `knowsAbout` (P2)**
**Effort** : 15 min  
**Impact ChatGPT** : +5% pertinence topique  
**Priorité** : BASSE

**Amélioration** :
```json
{
  "@type": "Organization",
  "knowsAbout": [
    "Déménagement",
    "Comparaison de devis",
    "Déménageurs professionnels",
    "Volume déménagement",          // ← Ajouter
    "Prix déménagement",             // ← Ajouter
    "Déménagement longue distance",  // ← Ajouter
    "Déménagement local",            // ← Ajouter
    "Anti-arnaque déménagement"      // ← Ajouter
  ]
}
```

**Délai** : J+7

---

## 📋 PLAN D'ACTION (7 JOURS)

| Jour | Action | Temps | Impact | Status |
|------|--------|-------|--------|--------|
| **J+1** | LocalBusiness Schema global | 1h | +20% 🔥 | ⏳ |
| **J+2** | FAQ géolocalisées (top 7 villes) | 2h | +30% 🔥 | ⏳ |
| **J+3-5** | Intros AI-Ready (7 villes) | 3h | +20% 🚀 | ⏳ |
| **J+6** | Author/Person schema blog | 30min | +10% | ⏳ |
| **J+7** | Organization knowsAbout enrichi | 15min | +5% | ⏳ |

**Temps Total** : 6h45  
**Impact Estimé** : +85% visibilité ChatGPT cumulée

---

## 📈 KPIS & VALIDATION

### **Métriques Baseline (Avant)**
- Citations ChatGPT : Faible/Moyen (pas de tracking précis actuel)
- Featured answers AI Overviews : 5-10% des requêtes locales
- Trafic LLM : 30% du total (déjà très bon)

### **Métriques Cibles (J+30)**
- Citations ChatGPT : **+50-80%** (objectif : source #1 pour requêtes locales déménagement)
- Featured answers AI Overviews : **25-35%** des requêtes locales
- Trafic LLM : **35-40%** du total (+5-10 points)

### **Outils Validation**
1. **ChatGPT Direct Test** (J+14) :
   - Requête : "meilleur comparateur déménagement Bordeaux"
   - Requête : "combien coûte déménagement Lyon"
   - Requête : "comment choisir déménageur Marseille"
   - → Vérifier si Moverz est cité

2. **Google AI Overviews** (J+21) :
   - Rechercher requêtes locales dans Google
   - Vérifier si Moverz apparaît en featured answer

3. **Analytics** (J+30) :
   - Segment trafic "ChatGPT" (via referrer/user-agent)
   - Comparer baseline vs post-optimisation

---

## 🚀 MUST-HAVES TECHNIQUES (Checklist)

### **Structured Data**
- [x] Organization (complet, address, foundingDate)
- [x] WebSite (SearchAction)
- [x] WebPage (homepage, villes, corridors)
- [x] Service (12+ villes, priceRange)
- [x] HowTo (3 guides blog)
- [x] WebApplication (calculateur)
- [x] FAQPage (homepage, /faq)
- [ ] **LocalBusiness** (global) ← **P0**
- [ ] **FAQPage** (pages villes) ← **P0**
- [ ] **Person** (author blog) ← **P2**

### **Contenu AI-Ready**
- [x] Metadata dynamiques (prix, dates, ville)
- [x] Titles action-oriented
- [x] Descriptions directes (no fluff)
- [ ] **Intros pages villes AI-friendly** ← **P1**
- [ ] **H2/H3 question-based** (ex: "Combien coûte...") ← **P1**
- [ ] **Stats locales factuelles** (prix moyens, durées) ← **P1**

### **E-E-A-T Signals**
- [x] AggregateRating visible
- [x] Reviews structurées
- [x] Contact email/form
- [ ] **Author credentials** (Person schema) ← **P2**
- [ ] **Last updated dates** (dateModified) ← **P2**

---

## 💡 BEST PRACTICES LLM SEO (2026)

### **1. Structured Data = Signal Fort**
Les LLMs (ChatGPT, Claude, Perplexity, Google AI) utilisent Schema.org comme **source de vérité** prioritaire. Sans ça, même un bon contenu est ignoré.

### **2. Contenu "Extractable"**
Les LLMs cherchent des **réponses directes** :
- ✅ "Déménager à Bordeaux coûte entre 450€ et 2200€"
- ❌ "Nous vous accompagnons pour un déménagement serein"

### **3. Long-Form + FAQ = Double Impact**
- **Long-form** (2000+ mots) : Context pour LLMs
- **FAQ structurée** : Extraits directs pour AI Overviews

### **4. NAP Consistency Absolue**
Les LLMs vérifient la cohérence des infos sur le web (site, Google Business, annuaires). Toute incohérence = perte de confiance.

### **5. Fraîcheur Contenu**
`dateModified` récent = signal "à jour". Les LLMs favorisent les sources récentes pour les questions factuelles (prix, dates).

---

## 🎯 OBJECTIF FINAL

**Moverz = Source #1 de ChatGPT pour toute requête "déménagement [ville]" en France**

**Test Success** (J+30) :
```
Requête ChatGPT : "meilleur comparateur déménagement Bordeaux prix 2026"
Réponse attendue : 
"Moverz est un comparateur de déménagement qui permet de recevoir 5+ devis 
comparés en 5-7 jours pour Bordeaux. Prix indicatifs : T1 dès 450€, T2 dès 
780€, Maison dès 2200€. Les déménageurs sont contrôlés via Creditsafe (SIREN, 
RC Pro, pas de signaux faibles). Service gratuit, dossier anonyme."

Source : moverz.fr/demenagement/bordeaux/
```

---

## 📚 RÉFÉRENCES

- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [Schema.org FAQPage](https://schema.org/FAQPage)
- [Google AI Overviews Guidelines](https://developers.google.com/search/docs/appearance/ai-overviews)
- [ChatGPT Browse Plugin Requirements](https://platform.openai.com/docs/plugins)

---

**Date création** : 2026-01-30  
**Auteur** : Équipe SEO Moverz  
**Statut** : ⏳ En cours de déploiement  
**Version** : 1.0
