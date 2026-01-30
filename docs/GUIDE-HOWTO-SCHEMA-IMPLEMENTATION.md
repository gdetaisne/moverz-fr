# 🎯 GUIDE : Implémenter HowTo Schema sur Guides Blog

**Gain CTR estimé** : +10-20% sur guides pratiques  
**Effort** : 🟡 Moyen (2h première implémentation, puis 15 min/article)  
**ROI** : ⭐⭐⭐⭐ Élevé

---

## 📋 Qu'est-ce qu'un HowTo Schema ?

Le HowTo schema est un type de données structurées qui permet à Google d'afficher un **rich snippet "étapes"** dans les SERP :

**Avant (sans schema)** :
```
Comment préparer un déménagement | Blog Moverz
Découvrez notre guide complet pour préparer votre déménagement...
```

**Après (avec HowTo schema)** :
```
Comment préparer un déménagement | Blog Moverz
Découvrez notre guide complet pour préparer votre déménagement...

▼ Étapes (6)
  1. Faire l'inventaire de vos biens (2 semaines avant)
  2. Réserver votre déménageur (3-4 semaines avant)
  3. Commander les cartons et fournitures
  ...
```

**Impact** : Zone SERP occupée ⬆️⬆️ → CTR ⬆️⬆️

---

## 🎯 Articles Éligibles (Priorité)

### P0 : Guides "Comment faire"

1. ✅ **Comment préparer un déménagement** → 6-8 étapes
2. ✅ **Comment emballer ses affaires fragiles** → 5-7 étapes
3. ✅ **Comment choisir un déménageur fiable** → 5 étapes
4. ✅ **Comment organiser son déménagement** → 6-8 étapes

### P1 : Checklists

1. ✅ **Checklist déménagement 8 semaines** → 8 étapes temporelles
2. ✅ **Checklist cartons et fournitures** → 5-6 étapes
3. ✅ **Checklist jour du déménagement** → 6-8 étapes

### Critères d'éligibilité :

- ✅ Titre commence par "Comment..." ou contient "Guide"
- ✅ Contenu structuré en étapes claires
- ✅ Minimum 3 étapes, maximum 20
- ✅ Chaque étape explicite et actionnable

---

## 🛠️ Implémentation

### Étape 1 : Composant créé ✅

Le composant `HowToSchema.tsx` est déjà créé et prêt à l'emploi.

### Étape 2 : Exemple d'utilisation

**Fichier** : `app/blog/comment-preparer-demenagement/page.tsx` (exemple)

```tsx
import { HowToSchema } from "@/components/schema/HowToSchema";

export default function BlogPostPage() {
  return (
    <>
      {/* HowTo Schema pour rich snippet */}
      <HowToSchema
        title="Comment préparer un déménagement : Guide complet 2026"
        description="Suivez notre guide en 8 étapes pour préparer votre déménagement sans stress. De l'inventaire à l'installation, tout ce qu'il faut savoir."
        totalTime="PT8W" // 8 semaines
        estimatedCost={{
          value: "800-2500",
          currency: "EUR"
        }}
        supply={[
          "Cartons de déménagement (30-50)",
          "Papier bulle",
          "Ruban adhésif",
          "Marqueurs",
          "Couvertures de protection"
        ]}
        tool={[
          "Diable de manutention",
          "Tournevis",
          "Cutter"
        ]}
        steps={[
          {
            name: "Faire l'inventaire complet (8 semaines avant)",
            text: "Parcourez chaque pièce et listez tous vos biens. Profitez-en pour trier et donner ce dont vous n'avez plus besoin. Estimez le volume total (m³) pour choisir la taille du camion.",
            url: "https://moverz.fr/blog/comment-preparer-demenagement#etape-1"
          },
          {
            name: "Réserver votre déménageur (6 semaines avant)",
            text: "Comparez 5+ devis de déménageurs contrôlés. Vérifiez les assurances, lisez les avis clients (note minimale 4/5). Réservez dès que possible pour les meilleures dates.",
            url: "https://moverz.fr/blog/comment-preparer-demenagement#etape-2"
          },
          {
            name: "Commander cartons et fournitures (4 semaines avant)",
            text: "Commandez 30-50 cartons selon votre logement (studio=20, T3=40, maison=60+). Prévoyez du papier bulle pour la vaisselle, du ruban adhésif renforcé, des marqueurs.",
            url: "https://moverz.fr/blog/comment-preparer-demenagement#etape-3"
          },
          {
            name: "Commencer à emballer le non-essentiel (3 semaines avant)",
            text: "Décorations, livres, vêtements hors-saison, objets de collection. Étiquetez chaque carton avec la pièce destination + contenu + 'FRAGILE' si besoin.",
            url: "https://moverz.fr/blog/comment-preparer-demenagement#etape-4"
          },
          {
            name: "Gérer les démarches administratives (2 semaines avant)",
            text: "Résiliation internet/électricité/gaz (préavis 2 semaines). Changement d'adresse : banque, assurance, Sécurité Sociale, impôts, employeur, école des enfants.",
            url: "https://moverz.fr/blog/comment-preparer-demenagement#etape-5"
          },
          {
            name: "Emballer l'essentiel (1 semaine avant)",
            text: "Cuisine, vêtements du quotidien, produits de salle de bain. Préparez un carton 'première nuit' avec nécessaire 24h : vêtements, brosse à dents, chargeurs, documents importants.",
            url: "https://moverz.fr/blog/comment-preparer-demenagement#etape-6"
          },
          {
            name: "Préparer le logement (veille du déménagement)",
            text: "Videz et dégivrez le frigo. Démontez les meubles démontables. Protégez les sols et murs avec couvertures. Préparez un plan de circulation pour les déménageurs.",
            url: "https://moverz.fr/blog/comment-preparer-demenagement#etape-7"
          },
          {
            name: "Jour J et installation (jour du déménagement)",
            text: "État des lieux de sortie le matin. Superviser le chargement (vérifier fragilité respectée). À l'arrivée : état des lieux d'entrée, guider déménageurs, vérifier inventaire.",
            url: "https://moverz.fr/blog/comment-preparer-demenagement#etape-8"
          }
        ]}
      />

      {/* Contenu de l'article */}
      <article>
        <h1>Comment préparer un déménagement : Guide complet 2026</h1>
        {/* ... */}
      </article>
    </>
  );
}
```

---

## 📝 Format Recommandé par Étape

### Structure optimale :

```typescript
{
  name: "Titre court et actionnable (max 80 car)",
  text: "Description détaillée 2-3 phrases. Inclure timing si pertinent. Donner conseil concret actionnable.",
  url: "https://moverz.fr/blog/article-slug#etape-N" // Optionnel mais recommandé
}
```

### ✅ Bon exemple :

```typescript
{
  name: "Réserver votre déménageur (6 semaines avant)",
  text: "Comparez 5+ devis de déménageurs contrôlés. Vérifiez les assurances, lisez les avis clients (note minimale 4/5). Réservez dès que possible pour les meilleures dates.",
  url: "https://moverz.fr/blog/comment-preparer#etape-2"
}
```

### ❌ Mauvais exemple :

```typescript
{
  name: "Étape 2",
  text: "Réserver.",
  // Trop vague, pas actionnable, pas de contexte
}
```

---

## 🧪 Validation Rich Snippet

### Outil Google :

1. Aller sur : https://search.google.com/test/rich-results
2. Coller l'URL de l'article : `https://moverz.fr/blog/comment-preparer-demenagement`
3. Cliquer "Test URL"

### Résultat attendu :

```
✅ HowTo detected
   • 8 steps found
   • Estimated time: 8 weeks
   • Supplies: 5 items
   • Tools: 3 items
```

### Test en local :

```bash
# Lancer le site en dev
npm run dev

# Tester le schema
curl http://localhost:3000/blog/comment-preparer-demenagement | grep -A 50 '"@type":"HowTo"'
```

---

## 📊 Suivi Impact CTR

### Métriques à suivre (Google Search Console) :

| Métrique | Baseline | Cible | Délai mesure |
|----------|----------|-------|--------------|
| **CTR guides "Comment"** | 3.2% | 4.5-5% | J+14, J+30 |
| **Position moyenne** | 12 | 8-10 | J+30 |
| **Impressions** | Variable | +20-30% | J+30 |
| **Apparitions rich snippet** | 0% | 30-50% | J+30 |

### Requêtes à monitorer :

- "comment préparer un déménagement"
- "comment organiser son déménagement"
- "guide déménagement étapes"
- "checklist déménagement"

---

## 🎯 Priorités d'Implémentation

### Semaine 1 : Top 3 guides (ROI immédiat)

1. ✅ Comment préparer un déménagement
2. ✅ Comment choisir un déménageur
3. ✅ Comment emballer ses affaires fragiles

**Effort** : 45 min (3 × 15 min)  
**Impact** : +15-25% CTR sur ces 3 articles

---

### Semaine 2 : Checklists (5 articles)

1. ✅ Checklist 8 semaines
2. ✅ Checklist jour J
3. ✅ Checklist cartons
4. ✅ Checklist administratif
5. ✅ Checklist installation

**Effort** : 1h15 (5 × 15 min)  
**Impact** : +10-20% CTR checklists

---

### Semaine 3+ : Autres guides (P2)

- Comment déménager sans stress
- Comment éviter les arnaques
- Comment calculer son volume
- etc.

---

## 💡 Conseils Optimisation

### 1. Nombre d'étapes optimal : 5-8

- ❌ Trop peu (<3) : Pas assez détaillé
- ✅ Optimal (5-8) : Lisible + complet
- ❌ Trop (>12) : Trop long, dilue le message

### 2. Timing visible

```typescript
totalTime: "PT8W" // 8 semaines
totalTime: "PT2H30M" // 2h30
totalTime: "PT45M" // 45 minutes
```

**Format ISO 8601** :
- P = Period
- T = Time
- W = Weeks, D = Days, H = Hours, M = Minutes

### 3. Coût estimé (si pertinent)

```typescript
estimatedCost: {
  value: "800-2500", // Fourchette OK
  currency: "EUR"
}
```

→ Apparaît dans rich snippet si pertinent

### 4. Images (optionnel)

```typescript
steps: [
  {
    name: "Emballer la vaisselle",
    text: "...",
    image: "https://moverz.fr/images/guide-emballer-vaisselle.jpg"
  }
]
```

→ Google peut afficher les images dans le rich snippet

---

## 🚀 Déploiement

### Étape 1 : Identifier articles éligibles

```bash
# Lister tous les articles blog
ls -1 content/blog/*.md

# Chercher guides "Comment"
grep -l "Comment" content/blog/*.md
```

### Étape 2 : Ajouter HowToSchema

Pour chaque article éligible, ajouter le composant avec 5-8 étapes bien structurées.

### Étape 3 : Build + Test

```bash
# Build
npm run build

# Tester rich snippet
# → Google Rich Results Test Tool
```

### Étape 4 : Deploy

```bash
git add .
git commit -m "feat(seo): Add HowTo schema to top 3 guides

Rich snippets pour guides blog :
✅ Comment préparer un déménagement
✅ Comment choisir un déménageur
✅ Comment emballer ses affaires

Impact attendu : +15-25% CTR guides"

git push origin main
```

### Étape 5 : Monitor (J+14)

- Google Search Console → Performance → Filtrer par URL guides
- Vérifier apparition rich snippets (SERP test manuel)
- Comparer CTR avant/après

---

## ✅ Checklist Validation

Avant de marquer un article "fait" :

- [ ] HowToSchema ajouté avec 5-8 étapes
- [ ] Chaque étape a name + text (min 50 car)
- [ ] totalTime défini (si applicable)
- [ ] URLs étapes pointent vers ancres #etape-N
- [ ] Test Google Rich Results : ✅ HowTo detected
- [ ] Build local OK (pas d'erreur TypeScript)
- [ ] Commit + push avec message descriptif

---

## 🎉 Résultat Attendu

**Après implémentation Phase 1 (3 guides)** :

- CTR guides : 3.2% → 4.5% (+40%)
- Position moyenne : 12 → 9 (-3)
- Apparition rich snippet : 0% → 35%
- Leads depuis guides : +20-30%

**ROI** : ⭐⭐⭐⭐⭐ Excellent (45 min effort → impact mesurable J+14)
