# Premium Corridors - Documentation

## Vue d'ensemble

Système de corridors premium avec attribution personnelle Lucie, contenu unique, et E-A-A-T optimisé.

## Corridors créés

1. [OK] **Paris → Lyon** (exemple complet dans `lib/premium-corridors-data.ts`)
2. [TODO] **Lyon → Paris**
3. [TODO] **Paris → Marseille**
4. [TODO] **Marseille → Paris**
5. [TODO] **Paris → Toulouse**
6. [TODO] **Toulouse → Paris**
7. [TODO] **Nice → Paris**
8. [TODO] **Paris → Bordeaux**
9. [TODO] **Marseille → Lyon**
10. [TODO] **Lyon → Marseille**

**Corridors secondaires (optionnel):**
11. [TODO] Toulouse → Lyon
12. [TODO] Nice → Lyon
13. [TODO] Montpellier → Paris
14. [TODO] Strasbourg → Paris
15. [TODO] Nantes → Paris

---

## Structure d'un corridor premium

Chaque corridor premium contient :

### 1. Attribution E-A-A-T
- Auteur : Lucie Stéhelin, Co-fondatrice Moverz
- Date de dernière mise à jour
- Expérience : "XXX+ déménagements [corridor] accompagnés"

### 2. Hero section
- Title : Accrocheur et informatif
- Subtitle : Distance, durée, contexte
- Catchphrase : Ton Moverz fun et personnel

### 3. Données itinéraire réelles
- Distance précise
- Durée réelle (pas optimiste)
- Route principale (ex: A6, A7, etc.)
- Péages (véhicule léger + camion)
- Coût carburant estimé

### 4. Prix 2026 réels
- Studio/T1
- T2
- T3
- Maison
- Facteurs qui influencent le prix

### 5. Périodes
- Meilleures périodes
- Périodes à éviter
- Haute saison / basse saison
- Impact tarifs

### 6. Spécificités itinéraire
- Défis du trajet (trafic, météo, zones sensibles)
- Tips pour optimiser
- Points chauds trafic

### 7. Spécificités destination
- Description générale
- 3-5 quartiers avec niveau de difficulté
- Conseils spécifiques par quartier

### 8. Sections de contenu (5-7 sections)
- Introduction personnelle
- Prix détaillés
- Itinéraire analysé
- Quartiers destination
- Périodes optimales
- Erreurs fréquentes
- (Optionnel) Astuces économies

### 9. Témoignages (2-3 minimum)
- Situation réelle
- Défi rencontré
- Solution mise en place
- Résultat

### 10. FAQ (6-8 questions)
- Questions locales spécifiques au corridor
- Réponses détaillées avec chiffres

### 11. Checklist
- 4 semaines avant
- 2 semaines avant
- 1 semaine avant
- Jour J

---

## Comment ajouter un corridor premium

### Étape 1 : Collecter les données

Pour chaque nouveau corridor, collectez :

**Données obligatoires:**
- Distance exacte (km)
- Durée réelle trajet (pas Google Maps voiture, mais camion)
- Route principale (autoroute, nationale)
- Péages 2026 (vérifier sur autoroutes.fr)
- Prix réels observés (Studio, T2, T3, Maison)
- Périodes haute/basse saison spécifiques à ce corridor
- Défis spécifiques du trajet (trafic, météo, zones)

**Données destination:**
- 3-5 quartiers avec vraie difficulté d'accès
- Spécificités locales (autorisations, réglementations)
- Pièges fréquents

**Données recommandées:**
- 2-3 témoignages anonymisés
- Erreurs fréquentes observées
- Astuces pour économiser

### Étape 2 : Rédiger le contenu

**Ton Moverz (avec Lucie):**
- Vouvoiement
- Personnel ("J'ai accompagné...", "On voit souvent...")
- Direct et transparent
- Fun mais pro
- Pas d'emojis
- Données chiffrées précises

**Structure type:**

```typescript
export const LYON_PARIS_PREMIUM: PremiumCorridorData = {
  originSlug: "lyon",
  originName: "Lyon",
  destinationSlug: "paris",
  destinationName: "Paris",
  
  author: {
    name: "Lucie Stéhelin",
    role: "Co-fondatrice Moverz",
  },
  lastUpdated: "2026-03-XX",
  basedOnExperience: "XXX+ déménagements Lyon-Paris accompagnés",
  
  hero: {
    title: "Déménager de Lyon vers Paris : [accroche]",
    subtitle: "[distance], [durée], [contexte]",
    catchphrase: "[phrase Moverz qui accroche]",
  },
  
  routeData: {
    distance: "XXX km",
    duration: "XXhXX",
    mainRoute: "A6",
    tolls: "XX€ léger, XXX€ camion",
    fuelCost: "XXX-XXX€",
  },
  
  pricing: {
    studio: "XXX€ - XXX€",
    t2: "XXX€ - XXX€",
    t3: "XXX€ - XXX€",
    house: "XXX€ - XXX€",
    factors: [
      "Facteur 1",
      "Facteur 2",
    ],
  },
  
  // ... etc (voir PARIS_LYON_PREMIUM comme exemple)
};
```

### Étape 3 : Ajouter dans la database

Dans `lib/premium-corridors-data.ts` :

```typescript
export const PREMIUM_CORRIDORS_DATABASE: Record<string, PremiumCorridorData> = {
  "paris-lyon": PARIS_LYON_PREMIUM,
  "lyon-paris": LYON_PARIS_PREMIUM, // <- Ajouter ici
  // ... autres corridors
};
```

### Étape 4 : Tester

```bash
npm run build
```

Vérifier que le build passe et que le contenu s'affiche correctement.

---

## Checklist de qualité

Avant de publier un corridor premium, vérifier :

### Contenu
- [ ] Au moins 3000 mots de contenu unique
- [ ] Aucun contenu dupliqué avec d'autres corridors
- [ ] Données 2026 vérifiables (prix, péages, distances)
- [ ] Ton Moverz respecté (vouvoiement, personnel, pas d'emojis)

### E-A-A-T
- [ ] Attribution Lucie avec rôle
- [ ] Date de mise à jour
- [ ] Expérience quantifiée ("XXX+ déménagements")
- [ ] 2-3 témoignages réels (anonymisés)
- [ ] Sources implicites (prix observés, données terrain)

### Spécificités locales
- [ ] 3-5 quartiers destination détaillés
- [ ] Niveau difficulté réaliste (facile/moyen/difficile)
- [ ] Conseils actionnables par quartier
- [ ] Réglementations locales mentionnées

### FAQ
- [ ] 6-8 questions
- [ ] Questions spécifiques au corridor (pas génériques)
- [ ] Réponses avec chiffres et exemples

### Checklist pratique
- [ ] 4 catégories temporelles (4 sem, 2 sem, 1 sem, Jour J)
- [ ] Actions concrètes et datées
- [ ] Spécifique au corridor

---

## Priorités de création

### Phase 1 (à faire en priorité)
1. Paris → Lyon [OK]
2. Lyon → Paris (inverse, contenu différent)
3. Paris → Marseille
4. Marseille → Paris

**Pourquoi ?** Top 4 des corridors les plus demandés en France.

### Phase 2
5. Paris → Toulouse
6. Toulouse → Paris
7. Nice → Paris
8. Paris → Bordeaux

### Phase 3
9. Marseille → Lyon
10. Lyon → Marseille

### Phase 4 (optionnel)
11-15. Corridors secondaires

---

## Maintenance

### Fréquence de mise à jour
- **Prix** : Tous les 6 mois (Jan + Juil)
- **Péages** : Annuellement (vérifié sur autoroutes.fr)
- **Réglementations** : Si changement signalé
- **Témoignages** : Ajouter au fil de l'eau (1-2 par trimestre)

### Signaux de mise à jour nécessaire
- Changement tarif péages autoroutiers
- Évolution prix observés +/- 15%
- Nouveaux travaux longue durée sur l'itinéraire
- Changements réglementations locales (ZFE, etc.)
- Feedback utilisateurs ("cette info est fausse")

---

## Différences avec les corridors standards

| Aspect | Standard | Premium |
|--------|----------|---------|
| Attribution | Aucune | Lucie Stéhelin |
| Contenu | ~800 mots | 3000-4000 mots |
| Quartiers destination | 0-1 | 3-5 détaillés |
| Témoignages | 0 | 2-3 minimum |
| FAQ | 0-3 génériques | 6-8 spécifiques |
| Checklist | Aucune | Complète 4 phases |
| Mise à jour | Rarement | Tous les 6 mois |

---

## Exemple : Paris → Lyon vs Lyon → Paris

Même si c'est le même trajet, les contenus doivent être **différents** :

**Paris → Lyon :**
- Focus sur défis arrivée Lyon (Vieux Lyon, Croix-Rousse)
- Tunnel Fourvière approche Lyon
- Autorisations stationnement Lyon

**Lyon → Paris :**
- Focus sur défis départ Lyon (pentes, ruelles)
- Circulation Paris arrivée (périph, portes)
- Autorisations stationnement Paris (plus complexes)
- Différences prix (souvent légèrement différent)

---

## Impact SEO attendu

### Avant (corridors standards)
- Contenu correct mais générique
- Pas d'E-A-A-T démontré
- Peu de signaux d'expertise

### Après (corridors premium)
- Expertise claire (Lucie + expérience quantifiée)
- Contenu unique et approfondi
- Témoignages = preuve sociale
- Meilleur ranking sur requêtes longue traîne
- Meilleure conversion (confiance ++)

**Bénéfice attendu :** Position top 3-5 sur "[ville] vers [ville] déménagement" pour les 10-15 corridors premium.

---

## Besoin d'aide ?

- **Structure** : Voir `PARIS_LYON_PREMIUM` dans `lib/premium-corridors-data.ts`
- **Ton Moverz** : Relire l'exemple Paris-Lyon
- **Données** : Demander à l'équipe ops (retours terrain)
- **Questions** : Ping Lucie

---

**Let's créer les 10-15 corridors premium les plus performants de France!**
