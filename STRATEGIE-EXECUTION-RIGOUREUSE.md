# 🎯 Stratégie d'Exécution Rigoureuse - Blog Moverz.fr 2026

**Date**: 30 janvier 2026  
**Objectif**: Articles de qualité ≥ articles performants existants

---

## ✅ Tâche 1 : Schema.org - COMPLÉTÉ

**Status**: ✅ **DÉJÀ IMPLÉMENTÉ**

**Vérification effectuée** :
- `app/blog/[slug]/page.tsx` lignes 289-309
- **FAQSchema** : ✅ Actif (ligne 289, conditionnel sur `faqItems`)
- **HowToSchema** : ✅ Actif (lignes 290-300, conditionnel sur `howToData`)
- **ArticleSchema** : ✅ Actif (lignes 301-309, sur TOUS les articles)

**Conclusion** : PAS besoin d'ajouter Schema.org, c'est déjà fait. On passe à la suite.

---

## 📝 Tâche 2 : Update Titres "2026" (20 articles)

**Articles identifiés dans `lib/blog-data.ts`** à mettre à jour :

| # | Slug | Titre actuel | Nouveau titre | Ligne |
|---|------|--------------|---------------|-------|
| 1 | `demenageur-rennes` | Déménageur Rennes : Devis Gratuit & Service Professionnel | Déménageur Rennes 2026 : Devis Gratuit & Service Professionnel | 4905 |
| 2 | `comparaison-prix-demenageurs-lyon` | Comparaison Prix Déménageurs Lyon : S.I.E.T vs Lugnier vs PME 2025 | Comparaison Prix Déménageurs Lyon 2026 : S.I.E.T vs Lugnier vs PME | 1446 |
| 3 | `garde-meuble-lyon-guide-complet` | Garde-Meuble Lyon : Guide Complet Stockage 2025 | Garde-Meuble Lyon 2026 : Guide Complet Stockage | 6080 |
| 4 | `demenagement-entreprise-nantes-guide` | Déménagement Entreprise Nantes : Guide Complet & Prix 2025 | Déménagement Entreprise Nantes 2026 : Guide Complet & Prix | 2540 |
| 5 | `demenagement-piano-longue-distance` | Déménagement Piano Longue Distance : Prix & Protection 2025 | Déménagement Piano Longue Distance 2026 : Prix & Protection | 3827 |
| 6 | `demenagement-pas-cher-toulouse` | Déménagement Pas Cher Toulouse : 10 Astuces Économiser 2025 | Déménagement Pas Cher Toulouse 2026 : 10 Astuces Économiser | 3674 |
| 7 | `demenagement-objets-fragiles-nice` | Déménagement Objets Fragiles Nice : Protection & Prix 2025 | Déménagement Objets Fragiles Nice 2026 : Protection & Prix | 3521 |
| 8 | `garde-meuble-montpellier` | Garde-meuble à Montpellier : Votre solution de stockage sécurisée et flexible | Garde-Meuble Montpellier 2026 : Stockage Sécurisé & Flexible | (à vérifier dans blog-canonique) |
| 9 | `monte-meuble-demenagement-nantes` | Monte-Meuble Déménagement Nantes : Quand Nécessaire ? Prix 2025 | Monte-Meuble Déménagement Nantes 2026 : Quand Nécessaire ? Prix | 6889 |
| 10 | `tarif-horaire-porteur-demenagement-nantes` | Tarif Horaire Porteur Déménagement Nantes : Prix Main d'Œuvre 2025 | Tarif Horaire Porteur Déménagement Nantes 2026 : Prix Main d'Œuvre | 8778 |

**+ 10 autres articles à identifier** dans les 82 performants qui n'ont pas encore "2025" ou "2026" dans le titre.

**Action** : Update dans `lib/blog-data.ts` ET `lib/blog-canonique.ts` (si le titre est dans le body).

---

## 🔍 Tâche 3 : Créer 8 Articles "Prix Déménageur [VILLE] 2026"

### Méthodologie STRICTE (à respecter ABSOLUMENT)

#### Phase 1 : Deep Search PAR VILLE (30 min/ville)

**Pour chaque ville, rechercher** :

1. **Prix réels déménageurs 2025/2026** :
   - Sites comparateurs : demenagement24.com, birdit.com, FretBay, Moverbay
   - Recherche: "prix déménageur [VILLE] 2025", "tarif déménagement [VILLE]"
   - Objectif: Fourchettes réelles Studio, T2, T3, Maison

2. **Déménageurs locaux établis** :
   - Recherche: "déménageur [VILLE]" + filtrer notes ≥4.5/5
   - Google Maps : identifier 3-4 pros locaux (nom, adresse, ville périphérie)
   - Objectif: Citer des vrais acteurs locaux

3. **Quartiers spécifiques** :
   - Recherche: "quartiers [VILLE]", "centre historique [VILLE]", "accès difficile déménagement [VILLE]"
   - Identifier 3-5 quartiers emblématiques (centre-ville, étudiant, résidentiel, périphérie)
   - Contraintes: rues étroites, pavés, zones piétonnes, étages sans ascenseur

4. **Témoignages clients** (si disponibles) :
   - Google Avis des déménageurs locaux
   - Trustpilot, forums locaux
   - Format: "[Citation précise]" (Source, date)

#### Phase 2 : Comparaison avec Article de Référence (15 min)

**Article modèle** : `prix-demenageur-rouen-2025` (blog-canonique.ts ligne 145222)

**Points à vérifier** :
- ✅ **Structure identique** : H2/H3 comme Rouen
- ✅ **Longueur ≥ 1200 mots** (Rouen fait ~1400 mots)
- ✅ **Tableaux de prix** : Studio, T2, T3, Maison avec fourchettes
- ✅ **Sources citées** : Min 2-3 sources (comme Rouen: FretBay, Transports-et-Déménagement.com, acteur local)
- ✅ **Témoignage client** : Si disponible (format Rouen: citation + source + date)
- ✅ **Détails locaux** : Quartiers nommés précisément (comme Rouen: Saint-Marc, Pasteur, Vieux-Marché, etc.)
- ✅ **Surcoûts spécifiques** : Comme Rouen (+15-25% centre historique, +180-350€ monte-meuble)
- ✅ **Liens internes** : Vers guide ville `/blog/demenagement-[ville]/demenageur-[ville]` si existe

#### Phase 3 : Création Article (45 min/ville)

**Template structure** (basé sur Rouen) :

```markdown
# Prix Déménageur [VILLE] 2026 : Tarifs Réels & Comparatif Complet

[Intro ~150 mots]
Combien coûte un déménageur à [VILLE] en 2026 ? Les prix varient de **X€ à Y€** selon...

[Fourchettes moyennes + 2-3 sources nommées]

[Témoignage client local si disponible]

Ce guide détaille les **prix réels pratiqués à [VILLE]**, les facteurs influençant les tarifs (quartiers, formules, saisons), et les surcoûts spécifiques à anticiper.

## Prix Moyens Déménageur [VILLE] par Volume

### Studio/T1 (15-20m³) : [X-Y]€

[Description standard + spécificités VILLE]

Selon les sources collectées :
- **[Source 1]** : [X-Y]€
- **[Source 2]** : [X]€ en moyenne
- **[Source 3 locale]** : [X-Y]€ selon formule

**Moyenne consolidée [VILLE]** : **[X]€** pour un studio en formule standard.

[Détails quartiers étudiants / spécificités locales]

### T2 (25-35m³) : [X-Y]€

[Idem structure]

### T3 (40-50m³) : [X-Y]€

[Idem structure]

### Maison/T4+ (60-100m³) : [X-Y]€

[Idem structure]

## Comparatif Prix par Formule

### Formule Économique : Vous Participez (40-60% Moins Cher)

**Prix [VILLE]** :
- Studio : [X-Y]€
- T2 : [X-Y]€
- T3 : [X-Y]€
- Maison : [X-Y]€

[Exemple témoignage local si dispo]

### Formule Standard : Équilibre Effort-Prix

**Prix [VILLE]** :
[Idem]

### Formule Clé en Main : Confort Total

**Prix [VILLE]** :
[Idem]

## Facteurs Influençant Prix à [VILLE]

### Quartier de Départ/Arrivée

[3-5 quartiers nommés précisément avec contraintes spécifiques]

**[Quartier centre-ville]** : +15-25% (rues étroites, autorisation mairie, monte-meuble fréquent)

**[Quartier résidentiel]** : Tarif standard

**[Quartier périphérie]** : Parfois -5-10% (accès faciles)

### Étage et Ascenseur

[Standard + spécificités immeubles ville]

### Distance

[Fourchettes local vs longue distance]

### Période

[Saisonnalité spécifique ville: étudiants, événements locaux, etc.]

## Déménageurs Professionnels à [VILLE]

[3-4 acteurs locaux identifiés]

**[Nom Déménageur 1] ([Ville périphérie])**
- Adresse : [X Rue, Code Postal]
- Type : Professionnel local établi
- Tarifs : [Fourchette estimée]

[Idem pour 2-3 autres]

## Conseils Économiser sur Déménagement [VILLE]

[5-7 conseils adaptés contexte local]

## FAQ

**Combien coûte déménageur T2 [VILLE] ?**
[Réponse précise avec fourchettes]

**Combien de devis demander ?**
3-4 minimum...

**[Acteur 1] ou [Acteur 2] ?**
[Comparaison neutre]

**Surcoûts centre-ville [VILLE] ?**
[Détails précis quartiers]

---
**Sources :** [Liste sources utilisées]
```

#### Phase 4 : Validation Qualité (10 min)

**Checklist avant publication** :

- [ ] ≥ 1200 mots
- [ ] 2-3 sources RÉELLES citées (pas inventées)
- [ ] 3-4 déménageurs locaux RÉELS (vérifiés Google Maps)
- [ ] 3-5 quartiers PRÉCIS nommés (pas générique "centre-ville")
- [ ] Fourchettes prix cohérentes avec système Moverz (voir content/blog/prix-demenagement-2026.md)
- [ ] Structure = Rouen (H2/H3/tableaux)
- [ ] 0 invention de données (tout vérifié)
- [ ] Liens internes si articles ville existants
- [ ] FAQ min 3-4 questions

---

## 📊 Ordre d'Exécution (8 villes)

### Priorité 1 : Grandes villes (données +accessibles)

1. **Toulouse** (4ème ville France, 500k hab)
2. **Lyon** (3ème ville, 520k hab)
3. **Marseille** (2ème ville, 870k hab)
4. **Bordeaux** (9ème ville, 260k hab)

### Priorité 2 : Villes moyennes

5. **Nantes** (6ème ville, 320k hab)
6. **Lille** (10ème ville, 235k hab)
7. **Montpellier** (7ème ville, 300k hab)
8. **Nice** (5ème ville, 340k hab)

---

## 🚨 Règles ABSOLUES (Non-Négociables)

1. ❌ **JAMAIS inventer** de prix, déménageurs, témoignages
2. ✅ **TOUJOURS citer** sources (liens/noms)
3. ✅ **TOUJOURS vérifier** déménageurs existent (Google Maps)
4. ✅ **TOUJOURS comparer** avec article Rouen avant de finaliser
5. ✅ **SI données manquantes** : dire "Non disponible" plutôt qu'inventer
6. ✅ **Fourchettes larges OK** si peu de sources (ex: 500-1200€ vs 550-650€)
7. ❌ **PAS de copie-coller** Rouen en changeant juste le nom de ville
8. ✅ **Utiliser système prix Moverz** comme base (content/blog/prix-demenagement-2026.md)

---

## 📁 Fichiers à Modifier

**Pour chaque nouvel article** :

1. `lib/blog-canonique.ts` : Ajouter objet complet avec `body` markdown
2. `lib/blog-data.ts` : Vérifier métadonnées (normalement auto-sync)
3. Commit: `feat(blog): add prix-demenageur-[ville]-2026 article`

**Structure objet dans blog-canonique.ts** :

```typescript
{
  slug: "prix-demenageur-toulouse-2026",
  title: `Prix Déménageur Toulouse 2026 : Tarifs Réels & Comparatif Complet`,
  description: `Prix déménageur Toulouse 2026 : [X]€ studio, [Y]€ T2, [Z]€ T3, [W]€ maison. [2-3 sources réelles]. [Surcoûts spécifiques ville]. Guide complet.`,
  type: "satellite",
  citySlug: "toulouse",
  body: `[CONTENU MARKDOWN ICI]`
},
```

---

## ✅ Validation Finale Avant Commit

**Avant de committer les 8 articles** :

1. Relire CHAQUE article vs checklist
2. Vérifier 0 invention de données
3. Tester liens internes (si articles liés existent)
4. Vérifier longueur ≥ 1200 mots/article
5. Confirmer structure = Rouen
6. Build test local: `npm run build` → pas d'erreur

---

**Prêt à démarrer ?** 

Next steps:
1. ✅ Update 20 titres "2026"
2. 🔍 Deep search Toulouse
3. ✍️ Créer article Toulouse
4. 🔍 Deep search Lyon
5. ...
