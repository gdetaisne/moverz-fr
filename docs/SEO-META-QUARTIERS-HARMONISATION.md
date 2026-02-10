# ✅ Harmonisation Meta Quartiers — Documentation

**Date:** 2026-01-30  
**Version:** 1.0  
**Objectif:** Cohérence messaging "des devis" (alignement home/villes/corridors)

---

## 🎯 Problème identifié

### **Incohérence messagerie (avant)**

**Quartiers :**
```
Title: "Déménagement {Quartier} ({Ville}) : des devis en 3 min"
Desc: "Déménageurs locaux contrôlés pour {Quartier} à {Ville}. Devis comparables en 3 min..."
```

**Home / Villes / Corridors :**
```
"des devis comparés sous 5 à 7 jours"
```

❌ **Problème :** Messagerie contradictoire = confusion utilisateur + dilution marque

---

## ✅ Solution appliquée

### **Quartiers (harmonisés) :**
```
Title: "Déménagement {Quartier} ({Ville}) | des devis en 5–7j · Pros locaux"
Desc: "{Quartier}, {Ville} : des devis comparés sous 5–7j. Dossier anonyme, pros locaux contrôlés, 0€."
```

### **Bénéfices :**
- ✅ **Cohérence totale** avec home/villes/corridors
- ✅ **"Dossier anonyme"** ajouté (différenciant Moverz vs. compétition)
- ✅ **"Pros locaux"** (pertinence micro-locale)
- ✅ **Suppression "3 min"** (promesse peu crédible / peu différenciante)

---

## 📊 Exemples SERP (avant/après)

### **Vieux-Nice (Nice)**

#### AVANT
```
Déménagement Vieux-Nice (Nice) : des devis en 3 min
Déménageurs locaux contrôlés pour Vieux-Nice à Nice. Devis comparables en 3 min · IA volume · 0€...
```

#### APRÈS ✅
```
Déménagement Vieux-Nice (Nice) | des devis en 5–7j · Pros locaux
Vieux-Nice, Nice : des devis comparés sous 5–7j. Dossier anonyme, pros locaux contrôlés, 0€.
```

---

### **Presqu'île (Lyon)**

#### APRÈS ✅
```
Déménagement Presqu'île (Lyon) | des devis en 5–7j · Pros locaux
Presqu'île, Lyon : des devis comparés sous 5–7j. Dossier anonyme, pros locaux contrôlés, 0€.
```

---

## 📝 Fichiers modifiés

### **1. `components/templates/QuartierPage.tsx`**

**Fonction :** `generateQuartierMetadata()`

**Changements :**
```diff
- const title = `Déménagement ${quartierName} (${cityName}) : des devis en 3 min`;
+ const title = `Déménagement ${quartierName} (${cityName}) | des devis en 5–7j · Pros locaux`;

- const description = `Déménageurs locaux contrôlés pour ${quartierName} à ${cityName}. Devis comparables en 3 min · IA volume · 0€ · Sans démarchage`;
+ const description = `${quartierName}, ${cityName} : des devis comparés sous 5–7j. Dossier anonyme, pros locaux contrôlés, 0€.`;
```

**Documentation ajoutée :**
- Commentaire JSDoc explicite (raisons optimisation)
- Format title/desc documenté

---

## ⚠️ Note importante : Contenu vs. Meta

**Ce qui a été changé :** Metadata (title/description) uniquement

**Ce qui n'a PAS été changé :** Contenu des pages quartiers (H1, paragraphes, CTA)

**Raison :** 
- Focus SEO/CTR (impact SERP immédiat)
- Changement contenu = refonte UX plus large (hors scope P0)

**Conséquence :** 
- Légère incohérence meta/contenu (temporaire)
- À harmoniser en P1 si tests SEO positifs

---

## 💰 Impact attendu

| Métrique | Estimation |
|----------|------------|
| **CTR quartiers** | +10–15% |
| **Cohérence perçue** | +100% (messagerie unifiée) |
| **Clics supplémentaires/mois** | +50–80 |
| **Leads supplémentaires** | +1–2/mois |

**Justification :**
- Alignement messaging = confiance utilisateur
- "Dossier anonyme" = différenciant fort (anti-harcèlement)
- "des devis" > "3 devis" = perception valeur supérieure

---

## 🚀 Déploiement

**Statut :** ✅ Prêt pour staging

**Validation QA :**
1. Vérifier 10 pages quartiers (Nice, Lyon, Marseille)
2. Checker longueur title < 60 chars
3. Checker longueur desc < 160 chars

**Monitoring :**
- GSC : CTR quartiers (baseline vs. post-déploiement)
- Annotations : "Harmonisation meta quartiers des devis"

---

## 📊 Changelog

### 2026-01-30 — v1.0 (Initial)
- ✅ Harmonisation title/desc quartiers
- ✅ Alignement sur messaging "des devis sous 5–7j"
- ✅ Ajout "Dossier anonyme" (différenciant)
- ✅ Ajout "Pros locaux" (pertinence micro-locale)
- ✅ Suppression "3 devis / 3 min" (incohérence)

---

**Status : TERMINÉ ✅**
