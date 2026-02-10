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

#### **1. FAQ Schema Géolocalisées Non Structurées (HAUTE)**
**Impact** : -15% de featured snippets AI Overviews  
**Problème** : Pages villes ont déjà des FAQs (`buildCityFaqs`) mais **pas de FAQSchema JSON-LD**  
**Actuel** :
- ✅ FAQ visuelles présentes (composant `<FAQ>`)
- ❌ Pas de `<FAQSchema>` structuré pour LLMs

**Exemple** :
- ❌ Actuel : FAQ visibles, mais pas extractibles par ChatGPT
- ✅ Idéal : FAQ + FAQSchema JSON-LD structuré

**Requêtes ChatGPT typiques** :
- "Combien coûte un déménagement à Bordeaux ?"
- "Quel déménageur choisir à Lyon ?"
- "Comment obtenir un devis déménagement Marseille ?"

**Solution** : Ajouter `<FAQSchema faqs={cityFAQs} />` dans `app/demenagement/[slug]/page.tsx`

**Note** : Le `Organization` schema avec `address` EST déjà en place (Phase 4). Pas besoin de `LocalBusiness` dédié car `Organization` + `Service` (Phase 3A) couvrent déjà le local SEO.

---

#### **2. Contenu "AI-Ready" Perfectible (MOYENNE)**
**Impact** : -15% de recommandations ChatGPT  
**Problème** : Contenu pages villes manque de structure sémantique forte pour LLMs

**Gaps identifiés** :
- Intro trop marketing, pas assez "réponse directe"
- H2/H3 pas assez optimisés pour questions naturelles
- Manque de données factuelles extraitables (prix moyens, durée, stats locales)

**Exemple Avant** (page ville) :
```
H1 : Déménagement Bordeaux dès 450€ | des devis 5-7j | Contrôlés
<intro marketing>
```

**Exemple Après (AI-Ready)** :
```
H1 : Déménagement Bordeaux dès 450€ | des devis 5-7j | Contrôlés
Intro : Déménager à Bordeaux coûte entre 450€ (studio) et 2200€ (maison) 
        selon le volume. Moverz compare des devis de déménageurs contrôlés 
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

### **#1 : FAQ Schema Structured Data (Top 7 Villes) (P0)**
**Effort** : 30 min  
**Impact ChatGPT** : +25-30% featured answers  
**Priorité** : CRITIQUE

**Problème** : Pages villes ont déjà `buildCityFaqs()` + composant `<FAQ>` visible, mais **pas de FAQSchema JSON-LD**

**Solution** :
```typescript
// app/demenagement/[slug]/page.tsx (déjà existe)
import { FAQSchema } from "@/components/schema/FAQSchema";

const cityFAQs = buildCityFaqs({ /* ... */ }); // ← Déjà existe

return (
  <main>
    <FAQSchema faqs={cityFAQs} /> {/* ← AJOUTER CETTE LIGNE */}
    {/* ... rest of page ... */}
    <FAQ title={`FAQ ${city.nameCapitalized}`} faqs={cityFAQs} /> {/* ← Déjà existe */}
  </main>
);
```

**Villes prioritaires** : Bordeaux, Lille, Toulouse, Marseille, Nantes, Rennes, Nice

**Délai** : J+1

---

### **#2 : Enrichir Intros Pages Villes (AI-Ready) (P1)**
**Effort** : 30 min/ville (3h pour top 7)  
**Impact ChatGPT** : +15% recommandations directes  
**Priorité** : MOYENNE

**Format intro idéal** :
```
Déménager à [Ville] coûte entre [Prix Min] et [Prix Max] selon le volume 
([source interne calculée]). Moverz compare des devis de déménageurs contrôlés 
(SIREN valide, RC Pro, pas de signaux faibles) en 5-7 jours, sans harcèlement. 
100% gratuit.

[Ville] présente des spécificités : [stationnement/accès/parking/contraintes].
```

**Délai** : J+2 à J+4

---

### **#3 : Author/Person Schema Blog (P2)**
**Effort** : 30 min  
**Impact ChatGPT** : +10% E-E-A-T (trust)  
**Priorité** : MOYENNE

**Implémentation** :
- Ajouter schema Person pour "Équipe Moverz" ou "Expert Déménagement Moverz"
- Lier aux articles blog via `author: { "@id": "..." }`
- Ajouter `knowsAbout`, `jobTitle`, `worksFor`

**Délai** : J+5

---

### **#4 : Enrichir FAQ Locales (Questions Prix) (P2)**
**Effort** : 1h  
**Impact ChatGPT** : +10% précision réponses prix  
**Priorité** : MOYENNE

**Amélioration** :
Ajouter dans `buildCityFaqs` des questions prix directes avec chiffres dynamiques :
```typescript
{
  question: `Combien coûte un déménagement à ${cityName} ?`,
  answer: `À ${cityName}, un déménagement coûte entre ${prices.t1} (studio/T1) 
           et ${prices.house} (maison 4+ pièces) selon le volume. Ces tarifs 
           incluent transport + portage standard (éco).`
}
```

**Délai** : J+6

---

### **#5 : Enrichir Organization `knowsAbout` (P3)**
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
| **J+1** | FAQ Schema JSON-LD (7 villes) | 30min | +25-30% 🔥 | ⏳ |
| **J+2-4** | Intros AI-Ready (7 villes) | 3h | +15% 🚀 | ⏳ |
| **J+5** | Author/Person schema blog | 30min | +10% | ⏳ |
| **J+6** | FAQ prix dynamiques | 1h | +10% | ⏳ |
| **J+7** | Organization knowsAbout enrichi | 15min | +5% | ⏳ |

**Temps Total** : 5h15  
**Impact Estimé** : +65-70% visibilité ChatGPT cumulée

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
- [x] Organization (complet, address, foundingDate) ← **Phase 4 ✅**
- [x] WebSite (SearchAction)
- [x] WebPage (homepage, villes, corridors) ← **Phase 2 ✅**
- [x] Service (12+ villes, priceRange) ← **Phase 3A ✅**
- [x] HowTo (3 guides blog) ← **Phase 2 ✅**
- [x] WebApplication (calculateur) ← **Phase 4 ✅**
- [x] FAQPage (homepage, /faq) ← **Existe ✅**
- [ ] **FAQPage** (pages villes - JSON-LD) ← **P0 (visuel OK, schema manquant)**
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
"Moverz est un comparateur de déménagement qui permet de recevoir des devis 
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
