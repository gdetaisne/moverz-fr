# Moverz Design System 2026 - Guidelines

## 🎯 Principes fondamentaux

1. **Clarté > Créativité**
   - 1 idée = 1 composant
   - Pas d'imbrication excessive

2. **Cohérence absolue**
   - Même composant = même style partout
   - Pas de variations "au cas par cas"

3. **Hiérarchie évidente**
   - 1 seul CTA principal par zone
   - Contraste fort pour les actions importantes

---

## 🎨 Palette de couleurs

### Rôles stricts

| Couleur | Hex | Usage |
|---------|-----|-------|
| **Deep Teal** | `#042F34` | Titres, liens, sections dark |
| **Charcoal Teal** | `#16232B` | Texte body |
| **Mint** | `#B5F2DB` | Accents, success, highlights |
| **Warm Yellow** | `#FFC933` | CTA primaire UNIQUEMENT |
| **Pale Blue Gray** | `#E4EEF0` | Backgrounds alternés |

### ✅ DO

- CTA principal = fond Warm Yellow + texte Charcoal Teal
- Alternance sections : White → Pale Blue Gray → White
- Maximum 1 section dark (Charcoal Teal) par page

### ❌ DON'T

- Mint ou Yellow en texte sur fond blanc (contraste insuffisant)
- Plusieurs nuances de bleu/teal "au feeling"
- Plus de 1 section dark par page

---

## 🔘 Boutons

### Hiérarchie stricte

**Primary** (Warm Yellow)
- CTA principal : "Obtenir mes devis", "Voir mon estimation"
- 1 seul par zone visible
- Hauteur: 52px, padding: 32px horizontal

**Secondary** (Deep Teal)
- Actions importantes secondaires
- Ex: "En savoir plus", "Découvrir"

**Tertiary** (Outline)
- Actions moins importantes
- Ex: liens dans footer, options avancées

### Exemples

```tsx
// ✅ DO
<button className="btn-primary">
  Obtenir mes devis
</button>

<button className="btn-secondary">
  En savoir plus
</button>

<button className="btn-tertiary">
  Options avancées
</button>
```

```tsx
// ❌ DON'T
<button className="bg-blue-300 text-white"> {/* Couleur custom */}
  Action
</button>

<button className="btn-primary bg-opacity-50"> {/* Primary "disabled" */}
  Action
</button>
```

### ✅ DO

- Libellés CTA uniformes sur tout le site
- Contraste AAA (WCAG)
- Focus ring visible (accessibilité)

### ❌ DON'T

- Boutons qui ressemblent à un état "disabled"
- 3 styles de boutons différents côte à côte
- Pills qui ressemblent à des boutons

---

## 📦 Cards

### Un seul style

- Fond: blanc
- Bordure: très subtile (Pale Blue Gray)
- Rayon: 16px
- Ombre: **aucune par défaut**, soft au hover uniquement
- Padding: 24px

### Exemples

```tsx
// ✅ DO
<div className="card">
  <h3>Titre simple</h3>
  <p>Contenu</p>
</div>

<div className="card-hoverable">
  <h3>Card interactive</h3>
  <p>Contenu avec hover</p>
</div>
```

```tsx
// ❌ DON'T
<div className="card">
  <div className="card"> {/* Card imbriquée */}
    <div className="card"> {/* 3 niveaux ! */}
      Contenu
    </div>
  </div>
</div>
```

### ✅ DO

- 1 niveau de card (pas d'imbrication)
- Espacement généreux entre cards
- Transition smooth au hover

### ❌ DON'T

- Cards dans des cards dans des cards
- 3 styles de bordures différentes
- Ombres lourdes partout

---

## 🏷️ Pills / Badges

### Style unique

- Fond: Pale Blue Gray
- Texte: Charcoal Teal
- Rayon: full (arrondi complet)
- Padding: 8px vertical, 16px horizontal
- Taille texte: 14px

### Exemples

```tsx
// ✅ DO
<span className="pill">
  📞 Numéro masqué
</span>

<span className="pill-success">
  ✓ Vérifié
</span>
```

```tsx
// ❌ DON'T
<button className="pill"> {/* Pill cliquable = mauvais */}
  Action
</button>

<span className="pill bg-blue-500"> {/* Custom color */}
  Badge
</span>
```

### ✅ DO

- Icônes optionnelles (16px, alignées)
- Même taille partout
- Utilisés pour info/statut uniquement

### ❌ DON'T

- Pills cliquables (= bouton, pas pill)
- 5 variations de tailles/couleurs
- Texte trop long dans un pill

---

## 📐 Espacement

### Sections

- **Hero**: `py-16 md:py-20`
- **Sections standard**: `py-12 md:py-16`
- **Sections compactes**: `py-8 md:py-12`

### Problème actuel corrigé

❌ **Avant**: espaces vides énormes (py-24), sensation "creuse"  
✅ **Après**: sections plus denses, contenu mieux structuré

### Exemples

```tsx
// ✅ DO
<section className="section">
  {/* py-12 md:py-16 par défaut */}
  <div className="container">
    <h2>Titre de section</h2>
  </div>
</section>

<section className="section-hero">
  {/* py-16 md:py-20 pour le hero */}
  <div className="container">
    <h1>Hero titre</h1>
  </div>
</section>
```

```tsx
// ❌ DON'T
<section className="py-32 md:py-48"> {/* Trop d'espace */}
  <h2>Titre perdu</h2>
</section>
```

---

## 🌑 Sections Dark

### Règle stricte

**Maximum 1 section dark par page**

Exemple typique: section "Vérification / Creditsafe"

### Style

- Fond: Charcoal Teal `#16232B`
- Texte: blanc
- Accents: Mint (touches légères)
- CTA: Warm Yellow (même sur dark)

### Exemples

```tsx
// ✅ DO
<section className="section-dark">
  <div className="container">
    <h2 className="text-white">Vérifications Creditsafe</h2>
    <p className="text-white/90">Description...</p>
    <button className="btn-primary">Obtenir mes devis</button>
  </div>
</section>
```

```tsx
// ❌ DON'T
{/* Plusieurs sections dark */}
<section className="section-dark">Section 1</section>
<section className="bg-slate-900">Section 2</section>
<section className="section-dark">Section 3</section>
```

### ✅ DO

- Transition douce (léger gradient ou padding)
- Contenu dense, "premium"
- CTA visible dedans

### ❌ DON'T

- Transitions brusques (changement brutal de couleur)
- Barres sombres parasites
- Trop de dark sections (lourdeur visuelle)

---

## 🎭 Preuves sociales (Trust Signals)

### Placement

**Trust block immédiat** juste après le hero:
- Rating global (4.9/5)
- Volume ("1000+ déménagements")
- 1 témoignage "featured" (grand)
- 2-3 petits témoignages

### Exemples

```tsx
// ✅ DO - Trust block dense, proche du hero
<section className="section-light">
  <div className="container">
    <div className="flex items-center gap-8">
      <div className="rating">⭐ 4.9/5</div>
      <div className="volume">1000+ déménagements</div>
      <div className="logos">...</div>
    </div>
    <div className="testimonial-featured">
      {/* Grand témoignage */}
    </div>
  </div>
</section>
```

```tsx
// ❌ DON'T - Témoignages perdus en bas de page
<Hero />
<HowItWorks />
<Features />
<Pricing />
<section className="testimonials py-32"> {/* Trop tard, trop loin */}
  <div className="tiny-testimonial">...</div>
</section>
```

### ✅ DO

- Bloc dense, structuré, "proof-heavy"
- Logos/sources de confiance visibles
- Proche du hero (pas après 2 scrolls)

### ❌ DON'T

- Témoignages isolés, petits, perdus
- Preuve sociale trop bas dans la page

---

## 📱 Sticky CTA

### Problème actuel

❌ Recouvre le contenu (FAQ)  
❌ Frustration utilisateur  
❌ Perception de bug

### Solution

**Option A**: Sticky mini (bouton rond + label)  
**Option B**: Padding-bottom dynamique (push le contenu)  
**Option C**: Disparaît automatiquement sur FAQ/footer

### Style

- Hauteur max: 64px
- Bouton: Primary (Warm Yellow)
- Fond: blanc avec ombre soft
- Ne jamais masquer le contenu

### Exemples

```tsx
// ✅ DO
<div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-strong p-4">
  <div className="container flex items-center justify-between">
    <span className="text-sm">Prêt à comparer ?</span>
    <button className="btn-primary">Obtenir mes devis</button>
  </div>
</div>

// Avec padding-bottom dynamique sur body
<style>{`body { padding-bottom: 80px; }`}</style>
```

```tsx
// ❌ DON'T
<div className="fixed bottom-0 h-32 ..."> {/* Trop haut */}
  <button>...</button>
</div>
{/* Sans padding-bottom → masque la FAQ */}
```

---

## 🚫 Quick Wins (Impact énorme)

### Priorité 1 (30 min chacun)

1. ✅ **CTA hero contrasté**
   - Remplacer par Warm Yellow
   - Fichier: `components/Hero.tsx`

2. ✅ **Pills uniformes**
   - Même style pour les 3 pills
   - Fichier: `components/Hero.tsx`

3. ✅ **Unifier libellés CTA**
   - "Obtenir mes devis" partout
   - Rechercher tous les CTA

### Priorité 2 (1h chacun)

4. ✅ **Fix Sticky CTA**
   - Padding-bottom ou disparition auto
   - Fichier: `components/StickyCTA.tsx`

5. ✅ **Réduire whitespace**
   - py-24 → py-12 md:py-16
   - Fichiers: `RealStories.tsx`, `WhatYouReceive.tsx`

### Priorité 3 (15 min chacun)

6. ✅ **Supprimer barre sombre**
   - Identifier et supprimer artefact
   - Fichier: `components/WhyMoverz.tsx`

7. ✅ **ProBanner déplacé**
   - Avant footer (discret)
   - Fichier: `app/page.tsx`

---

## 📏 Nouvelle structure de page (Home)

### Ordre optimisé

1. **Hero** (above fold)
   - Titre + 1 ligne de preuve + 3 bénéfices icônes
   - Formulaire 2 étapes (progress bar)
   - CTA: Warm Yellow, très visible

2. **Trust Block** (immédiat)
   - Rating + volume + témoignage featured

3. **Comment ça marche** (3 cards)
   - Ultra visuelles, pas de liste longue

4. **Pourquoi c'est sûr** (section dark)
   - Creditsafe + CTA dedans

5. **Ce que vous recevez**
   - 3 bénéfices max (pas 6 encarts)

6. **FAQ** (accordéons premium)

7. **CTA final** + Footer léger

---

## 🎓 Do / Don't Résumé

### ✅ DO

- 1 couleur CTA (Warm Yellow) partout
- 1 style de bouton primary
- 1 style de pill/badge
- 1 style de card
- Alternance sections via Pale Blue Gray
- Contraste fort pour CTA
- Hiérarchie évidente

### ❌ DON'T

- Mint/Yellow en texte sur blanc
- 3 bleus différents
- Encarts imbriqués (cards dans cards)
- Ombres multiples
- Pills qui ressemblent à des boutons
- Plus de 1 section dark
- Whitespace excessif

---

## 📚 Ressources

- [Design Tokens](./tokens/)
- [Composants](./components/)
- [Plan de migration](./migrations.md)
- [Tailwind Config](../tailwind.config.ts)
- [Global CSS](../app/globals.css)
