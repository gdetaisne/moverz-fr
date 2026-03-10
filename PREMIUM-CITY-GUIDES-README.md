# Premium City Guides - Documentation

## Pourquoi ce changement ?

**Avant :** 300 guides auto-générés avec du contenu générique et du padding pour atteindre 2000 mots.  
**Problème :** Mauvais pour l'E-A-A-T, Google détecte le contenu dupliqué, pénalité SEO potentielle.

**Maintenant :** 20 guides ultra-qualitatifs, contenu 100% unique, ton Moverz, données locales réelles.  
**Bénéfice :** E-A-A-T optimisé, meilleur ranking, meilleure conversion.

---

## Comment ça marche ?

### 1. Structure des données

Tous les guides premium sont dans : `lib/premium-city-guides-data.ts`

Chaque guide contient :
- [OK] **Attribution E-A-A-T** (auteur, rôle, date de MAJ, expérience)
- [OK] **Hero section** avec ton Moverz fun
- [OK] **Données locales uniques** (prix réels, réglementations, défis spécifiques)
- [OK] **Sections de contenu** avec tips Moverz personnalisés
- [OK] **Quartiers** avec accessibilité et conseils spécifiques
- [OK] **Checklist** adaptée à la ville
- [OK] **FAQ** locale unique
- [OK] **Liens utiles** locaux

### 2. Génération au build

Au build (`npm run build`), le script `generate-premium-city-guides.ts` :
1. Lit les données de `PREMIUM_GUIDES_DATABASE`
2. Génère des fichiers JSON dans `public/data/city-guides/`
3. Ces JSON sont consommés par les pages `/demenagement/[slug]/guide/`

**Seules les villes avec un guide premium sont générées.** Les autres villes (non prioritaires) retournent 404.

---

## Comment ajouter un nouveau guide premium

### Étape 1 : Collecter les données locales

Pour chaque nouvelle ville, collectez :

#### Données obligatoires
- [OK] **Prix moyens** (studio, T2, T3, T4+) - fourchettes réelles 2026
- [OK] **Périodes de forte demande** (ex: rentrée universitaire, fins de mois)
- [OK] **Durée typique** d'un déménagement (ex: "4-8h pour un T2")
- [OK] **Défis de stationnement** spécifiques à la ville
- [OK] **Réglementations municipales** (autorisation stationnement, ZFE, horaires)

#### Données recommandées
- [OK] **3-5 quartiers** avec accessibilité (facile/moyen/difficile) + spécificités réelles
- [OK] **Erreurs fréquentes** observées dans cette ville
- [OK] **Tips Moverz** spécifiques (pas de générique!)
- [OK] **Témoignages** ou cas réels (anonymisés)

### Étape 2 : Rédiger le contenu

**Ton Moverz :**
- [OK] Tutoiement
- [OK] Langage simple et direct ("on va pas se mentir", "bref", "spoiler")
- [OK] Humour léger mais pro
- [OK] Transparence totale (on dit les vrais problèmes)
- [OK] Conseils actionnables (pas de bullshit marketing)

**Structure type :**
1. **Pourquoi [ville] est compliquée** (spécificités locales)
2. **Les vrais prix** (fourchettes 2026 avec détails)
3. **Réglementations locales** (ce qui est obligatoire)
4. **Quartiers** (où c'est facile, où ça se complique)
5. **Erreurs fréquentes** (et comment les éviter)
6. **Checklist** (adaptée à la ville)
7. **Jour J** (conseils pratiques)

### Étape 3 : Ajouter le guide dans le code

Ouvrez `lib/premium-city-guides-data.ts` et ajoutez :

```typescript
export const LYON_PREMIUM_GUIDE: PremiumCityGuideData = {
  citySlug: "lyon",
  cityName: "Lyon",
  
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-XX", // Date du jour
  basedOnExperience: "XXX+ déménagements accompagnés à Lyon",
  
  hero: {
    title: "Déménager à Lyon : [accroche fun]",
    subtitle: "[sous-titre explicatif]",
    catchphrase: "[phrase Moverz qui claque]",
  },
  
  localData: {
    averagePrices: {
      studio: "XXX€ - XXX€",
      t2: "XXX€ - XXX€",
      t3: "XXX€ - XXX€",
      t4plus: "XXX€ - XXX€",
    },
    peakSeasons: [
      "Période 1",
      "Période 2",
    ],
    typicalDuration: "X-Xh pour un T2",
    parkingChallenges: [
      "Défi 1",
      "Défi 2",
    ],
    municipalRegulations: [
      "Règle 1",
      "Règle 2",
    ],
  },
  
  sections: [
    {
      id: "intro-lyon",
      title: "Pourquoi Lyon c'est [caractéristique]",
      content: [
        "Paragraphe 1...",
        "Paragraphe 2...",
      ],
      tips: [
        "Tip 1",
        "Tip 2",
      ],
    },
    // ... autres sections
  ],
  
  neighborhoods: [
    {
      name: "Quartier 1",
      accessibility: "difficile",
      specifics: "Description unique des défis...",
      tip: "Conseil Moverz spécifique...",
    },
    // ... autres quartiers
  ],
  
  checklist: [
    {
      category: "2-3 semaines avant",
      items: [
        "Action 1",
        "Action 2",
      ],
    },
    // ... autres catégories
  ],
  
  faq: [
    {
      question: "Question locale spécifique ?",
      answer: "Réponse détaillée...",
    },
    // ... autres questions
  ],
  
  usefulLinks: [
    {
      label: "Site mairie Lyon",
      url: "https://...",
      description: "Pour les autorisations...",
    },
    // ... autres liens
  ],
};
```

Puis ajoutez dans `PREMIUM_GUIDES_DATABASE` :

```typescript
export const PREMIUM_GUIDES_DATABASE: Record<string, PremiumCityGuideData> = {
  paris: PARIS_PREMIUM_GUIDE,
  lyon: LYON_PREMIUM_GUIDE, // <- Ajouter ici
  // ... autres villes
};
```

### Étape 4 : Tester

```bash
npm run prebuild  # Génère les guides
npm run dev       # Lance le serveur
```

Visitez : `http://localhost:3040/demenagement/lyon/guide/`

Vérifiez :
- [OK] Le contenu s'affiche correctement
- [OK] Le nombre de mots (minimum 2500 mots recommandé)
- [OK] Le temps de lecture estimé
- [OK] Pas de contenu générique/répétitif
- [OK] Tous les liens fonctionnent

---

## Les 20 villes prioritaires

### Top 10 métropoles (priorité 1)
1. [OK] **Paris** - FAIT (1588 mots - à enrichir à 3000+)
2. [TODO] **Lyon**
3. [TODO] **Marseille**
4. [TODO] **Toulouse**
5. [TODO] **Nice**
6. [TODO] **Nantes**
7. [TODO] **Strasbourg**
8. [TODO] **Montpellier**
9. [TODO] **Bordeaux**
10. [TODO] **Lille**

### 10 villes à fort potentiel (priorité 2)
11. [TODO] **Rennes**
12. [TODO] **Reims**
13. [TODO] **Saint-Étienne**
14. [TODO] **Toulon**
15. [TODO] **Grenoble**
16. [TODO] **Dijon**
17. [TODO] **Angers**
18. [TODO] **Nîmes**
19. [TODO] **Villeurbanne**
20. [TODO] **Le Havre**

---

## Points d'attention E-A-A-T

### [OK] DO
- Citez des données locales vérifiables (prix, réglementations)
- Utilisez des exemples concrets et spécifiques
- Signez avec nom + rôle + expérience
- Mettez une date de dernière mise à jour
- Donnez des conseils actionnables
- Partagez des retours d'expérience réels
- Ajoutez des liens vers sources officielles

### [X] DON'T
- Copier-coller du contenu entre villes
- Utiliser des phrases génériques ("déménager peut être stressant...")
- Inventer des statistiques
- Mettre du padding juste pour atteindre X mots
- Faire des promesses intenables ("déménagement sans stress garanti")
- Oublier l'attribution (auteur, date)

---

## Conseils de rédaction

### Objectif : 3000-4000 mots par guide
- **Minimum viable :** 2500 mots
- **Idéal :** 3500 mots
- **Maximum utile :** 4500 mots

**Important :** Mieux vaut 2500 mots ultra-qualitatifs que 4000 mots avec du remplissage.

### Sections qui donnent de la valeur
1. **Prix détaillés** avec contexte (pourquoi cette fourchette)
2. **Quartiers** avec vrais défis (pas "centre-ville = difficile", mais "Vieux Lyon : ruelles < 2m, pavés, dénivelé +15%, interdiction camions > 3,5T")
3. **Erreurs fréquentes** observées (cas réels)
4. **Checklist** avec actions précises et timing
5. **FAQ** avec questions qu'on vous pose vraiment

### Ton Moverz - exemples

[X] **Trop corporate :**  
"Notre expertise nous permet de vous accompagner dans votre projet de déménagement."

[OK] **Ton Moverz :**  
"On va pas se mentir : déménager à Lyon, entre les pentes de la Croix-Rousse et le Vieux Lyon où les camions passent pas, il faut anticiper. On vous dit comment."

---

## Impact SEO attendu

### Avant (300 guides auto-générés)
- [X] Contenu dupliqué détecté
- [X] Faible E-A-A-T
- [X] Bounce rate élevé (contenu pas utile)
- [X] Risque de pénalité Google

### Après (20 guides premium)
- [OK] Contenu 100% unique
- [OK] E-A-A-T fort (auteur, expertise, données locales)
- [OK] Meilleur engagement (contenu utile)
- [OK] Meilleur ranking sur les villes prioritaires
- [OK] Meilleure conversion (confiance ++)

**Trade-off accepté :**  
On perd 280 pages de contenu médiocre, on gagne 20 pages de contenu excellent.  
Mieux vaut 20 pages qui rankent que 300 pages qui plombent le site.

---

## Maintenance

### Fréquence de mise à jour recommandée
- **Prix :** Tous les 6 mois (ou si changement majeur)
- **Réglementations :** Vérifier annuellement
- **Contenu général :** Tous les 12-18 mois
- **Attribution :** Mettre à jour la date à chaque modification

### Signaux de mise à jour nécessaire
- Changement de réglementation locale (ex: nouvelle ZFE)
- Évolution significative des prix (+/- 15%)
- Nouveaux défis urbanistiques (travaux, nouvelle ligne métro)
- Feedback utilisateurs ("cette info est fausse")

---

## FAQ Technique

### Pourquoi pas une DB / CMS ?
Pour 20 guides, un fichier TypeScript typé est plus simple et maintenable qu'une DB. Si on passe à 100+ guides, on reconsidérera.

### Pourquoi générer des JSON au build ?
Pour optimiser les perfs : les pages statiques Next.js lisent les JSON au build, pas à chaque requête.

### Et les 280 autres villes ?
Deux options :
1. **404 propre** : "Guide détaillé non disponible pour cette ville. Demandez un devis pour [ville]."
2. **Guide light auto-généré** : Version courte (500-800 mots) avec uniquement les infos factuelles (pas de padding).

Pour l'instant, on recommande l'option 1 (404 propre).

---

## Besoin d'aide ?

- **Structure de données :** Voir `PARIS_PREMIUM_GUIDE` comme exemple complet
- **Ton Moverz :** Relire le guide Paris pour capter le style
- **Données locales :** Demander à l'équipe ops (ils ont les retours terrain)
- **Bug / question :** Ping @Lucie

---

**Let's ship 20 guides ultra-qualitatifs qui vont cartonner sur Google! 🚀**
