# 🎯 PROMPT : Génération des 652 articles manquants pour moverz.fr

## 📊 Contexte

**État actuel** :
- 364 articles avec contenu canonique ✅
- 652 articles manquants ⏸️
- Total cible : 1016 articles

**Fichier source** : `/Users/lucie/moverz-fr/ARTICLES-MANQUANTS.csv`

---

## 🚀 VAGUE 1 : Articles Prix & Guides (101 articles - PRIORITÉ ABSOLUE)

### Étape 1 : Extraire les articles P1

```bash
cd /Users/lucie/moverz-fr
grep -E "prix|guide" ARTICLES-MANQUANTS.csv > ARTICLES-P1-PRIX-GUIDES.csv
```

Résultat : **101 articles stratégiques**

---

### Étape 2 : Prompt de génération pour Claude/ChatGPT

Pour chaque article de `ARTICLES-P1-PRIX-GUIDES.csv` :

```
Contexte : Tu es rédacteur SEO expert en déménagement pour Moverz.fr

Mission : Générer un article canonique pour le slug suivant :
[SLUG_ICI]

Ville : [VILLE_ICI]
Type : [prix/guide]

---

Structure obligatoire :

# [Titre H1 optimisé SEO avec ville et mot-clé]

Introduction (2-3 paragraphes) :
- Contexte local de la ville
- Problématique principale
- Annonce du contenu

> [CTA] Calculer votre volume et comparer des devis à [VILLE]
> En 1 minute, l'IA Moverz estime votre volume en m³ et partage votre dossier avec 3 à 5 déménageurs contrôlés via devis.moverz.fr.

---

## Section 1 : [Titre pertinent selon le sujet]

[Contenu détaillé avec :
- Données chiffrées si article prix
- Conseils pratiques si article guide
- Spécificités locales de la ville
- Tableaux si pertinent]

---

## Section 2 : [Titre pertinent]

[Contenu...]

---

## Section 3 : Rôle de l'IA Moverz

En estimant votre volume en m³ avec l'**IA Moverz en ~1 minute**, vous :

- [bénéfice 1 adapté au sujet]
- [bénéfice 2 adapté au sujet]
- [bénéfice 3 adapté au sujet]

> [CTA final] Lancer mon comparateur de devis à [VILLE]
> Créez votre dossier, laissez l'IA estimer votre volume et recevez 3 à 5 devis de déménageurs contrôlés sur devis.moverz.fr.

---

Exigences qualité :
- ✅ 1000-1500 mots minimum
- ✅ Ton informatif, pas vendeur
- ✅ Données locales réelles (spécificités ville)
- ✅ 2 CTA Moverz IA (intro + fin)
- ✅ Markdown propre
- ✅ Pas de duplication entre articles
- ✅ SEO : mots-clés naturels, LSI keywords

---

Format de sortie (frontmatter YAML) :

---
slug: [slug-article]
title: "[Titre H1]"
city_slug: "[ville]"
type: "prix-et-devis" (ou "checklists-et-guides")
description: "[Meta description 150-160 caractères]"
---

[Contenu markdown ici]
```

---

### Étape 3 : Workflow de génération dans moverz_main

1. **Créer le dossier de travail** :
```bash
cd /Users/lucie/moverz_main
mkdir -p [P1]-TASK-XXX-articles-manquants-vague-1/CANONIQUE
```

2. **Pour chaque article**, créer un fichier :
```bash
CANONIQUE-[slug].md
```

3. **Générer le contenu** avec Claude/ChatGPT en utilisant le prompt ci-dessus

4. **Valider** :
   - Longueur : 1000-1500 mots ✅
   - 2 CTA IA Moverz ✅
   - Spécificités locales ✅
   - Pas de duplication ✅

5. **Lancer le pipeline** :
```bash
cd /Users/lucie/moverz_main
node scripts/analysis/generate-blog-data-from-canonique.mjs
```

6. **Copier vers moverz-fr** :
```bash
cp [P1]-TASK-XXX-articles-manquants-vague-1/BLOG-DATA.generated.ts \\
   /Users/lucie/moverz-fr/lib/blog-canonique.ts
```

7. **Build + Deploy moverz-fr**

---

## 📋 Liste des 101 articles P1 (Prix & Guides)

Voir fichier : `ARTICLES-P1-PRIX-GUIDES.csv`

Exemples prioritaires :
- `prix-demenagement-studio-[ville]`
- `prix-demenagement-t2-[ville]`
- `prix-demenagement-t3-[ville]`
- `prix-demenagement-maison-[ville]`
- `guide-demenagement-[ville]`
- `checklist-demenagement-[ville]`
- `cout-moyen-demenagement-[ville]`

---

## 🎯 Objectifs de qualité pour VAGUE 1

| Critère | Objectif |
|---------|----------|
| **Longueur moyenne** | 1200 mots |
| **Unicité** | 0% duplication |
| **CTA IA Moverz** | 2 par article |
| **Spécificités locales** | Obligatoire |
| **Tableaux/données** | Si article prix |
| **Liens internes** | Vers page ville |

---

## ⏱️ Timeline VAGUE 1

**Génération IA** : ~10-15 articles/heure
**Validation manuelle** : ~5 min/article
**Total VAGUE 1** : ~10-15h de travail étalées sur 1-2 semaines

---

## 🔄 VAGUE 2 & 3 (plus tard)

Une fois VAGUE 1 terminée et déployée :

**VAGUE 2** : 97 articles annuaire (moins prioritaires)
**VAGUE 3** : Analyser les 454 "autres" pour identifier lesquels générer

---

## 💡 Automatisation possible

Pour accélérer, on peut :
1. Script qui lit `ARTICLES-P1-PRIX-GUIDES.csv`
2. Boucle sur chaque ligne
3. Appel API Claude/OpenAI avec le prompt
4. Génération automatique des 101 fichiers CANONIQUE-*.md

**Gain de temps** : De 15h à 2-3h de génération + validation

Tu veux que je crée ce script d'automatisation ?

---

## 📞 Questions ?

**Quelle approche préfères-tu pour VAGUE 1 ?**
- A) Génération manuelle (prompt par prompt via Claude)
- B) Script automatisé (génération batch via API)
- C) Hybride (génération auto + validation manuelle)

