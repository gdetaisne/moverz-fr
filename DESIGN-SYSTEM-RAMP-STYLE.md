# 🎨 DESIGN SYSTEM MOVERZ - RAMP STYLE

## Vue d'ensemble

Ce document décrit les standards de design appliqués suite à la refonte complète du site Moverz.fr, inspiré des meilleures pratiques de Ramp, Stripe et Linear.

---

## 🎯 Philosophie

**"Premium, cohérent, performant"**

- Ombres subtiles et contrôlées
- Transitions fluides (300ms)
- Micro-interactions sur tous les éléments interactifs
- Lift effect au hover pour profondeur
- Design system unifié sur tout le site

---

## 🌈 Ombres (Box Shadows)

### Cards & Composants

```css
/* Default state */
box-shadow: 0 1px 3px rgba(0,0,0,0.06);

/* Hover state */
box-shadow: 0 8px 30px rgba(0,0,0,0.12);
```

### CTAs (Buttons)

```css
/* Default state */
box-shadow: 0 4px 16px rgba(14,165,166,0.24);

/* Hover state */
box-shadow: 0 12px 40px rgba(14,165,166,0.35);
```

### Dark sections (CreditsafeChapter)

```css
/* Cards sur fond sombre */
box-shadow: 0 1px 3px rgba(0,0,0,0.1);
```

---

## 🎭 Transitions & Animations

### Standard

```css
transition-all duration-300
```

**Utilisé pour :**
- Hovers de cards
- CTAs
- Liens de navigation
- Boutons

### Easing

Utilise l'easing natif Tailwind (`ease-out`) sauf exception.

Pour animations complexes (Framer Motion) :
```typescript
transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
```

---

## 🔼 Hover Effects

### Cards (WhyMoverz, etc.)

```css
/* Lift + shadow */
hover:-translate-y-1 
hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
```

### CTAs

```css
/* Subtle lift + shadow boost */
hover:-translate-y-0.5 
hover:shadow-[0_12px_40px_rgba(14,165,166,0.35)]
```

### Navigation Links

```css
/* Opacity fade */
hover:opacity-80
```

### Testimonial Navigation Arrows

```css
/* Directional hint */
hover:-translate-x-0.5  /* Précédent */
hover:translate-x-0.5   /* Suivant */
hover:bg-[rgba(14,165,166,0.08)]
hover:shadow-sm
```

---

## 📱 Responsive Considerations

- Mobile : Éviter les hovers trop complexes
- Desktop : Lift effects + shadow enhancements
- Touch devices : Active states (`active:scale-[0.98]`)

---

## 🎨 Color System

### Primary (Accent)

```css
--color-accent: #0EA5A6 (RGB: 14, 165, 166)
```

**Usage :**
- CTAs principaux
- Highlights
- Badges "Meilleure offre"
- Icons importants

### Shadows avec accent

```css
rgba(14,165,166,0.24) /* Default CTA shadow */
rgba(14,165,166,0.35) /* Hover CTA shadow */
rgba(14,165,166,0.08) /* Background tints */
```

---

## 📐 Spacing & Sizing

### Container

```css
max-w-7xl /* Global container */
```

### Sections Padding

```css
py-12 md:py-28 /* Standard vertical spacing */
```

### Cards Padding

```css
p-6 /* Standard card padding */
p-5 md:p-6 /* Responsive card padding */
```

---

## 🔤 Typography Scale

### Headings (Desktop)

```css
H1 Hero: clamp(48px, 5.5vw, 68px)
H2 Section: clamp(28px, 5vw, 42px)
```

### Body

```css
Base: text-base (16px)
Small: text-sm (14px)
Tiny: text-xs (12px)
```

### Font Weights

```css
Semibold: 600 (CTAs, labels)
Bold: 700 (Headings, prices)
Medium: 500 (Secondary text)
Regular: 400 (Body)
```

---

## 🎯 Interactive States

### CTAs (tous les boutons)

```css
/* Default */
shadow-[0_4px_16px_rgba(14,165,166,0.24)]

/* Hover */
hover:-translate-y-0.5
hover:shadow-[0_12px_40px_rgba(14,165,166,0.35)]
hover:opacity-90

/* Active (click) */
active:scale-[0.98]

/* Transition */
transition-all duration-300
```

### Cards cliquables/interactives

```css
/* Hover */
hover:-translate-y-1
hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]

/* Transition */
transition-all duration-300
```

### FAQ Accordions

```css
/* Open state */
border-color: var(--color-accent)
box-shadow: 0 2px 8px rgba(14,165,166,0.08)
```

---

## 🚀 Performance

### Framer Motion

- Utiliser `whileHover` pour hovers complexes
- `AnimatePresence mode="wait"` pour transitions d'états
- `viewport={{ once: true }}` pour animations d'entrée (performance)

### CSS

- `transition-all` seulement quand nécessaire
- Préférer `transform` et `opacity` (GPU-accelerated)
- Éviter transitions sur `width/height` (reflow)

---

## ✅ Checklist Composants

### Tout composant interactif doit avoir :

- [ ] Shadow par défaut
- [ ] Hover state avec lift + shadow boost
- [ ] Transition 300ms
- [ ] Active state (scale-98 pour CTAs)
- [ ] Couleurs via design system variables
- [ ] Responsive (mobile + desktop)

---

## 📚 Références

Inspiré de :
- **Ramp** : Shadows subtiles, lift effects
- **Stripe** : Transitions fluides, micro-interactions
- **Linear** : Design system cohérent, animations

---

## 🔧 Maintenance

**Quand ajouter un nouveau composant :**

1. Utiliser les shadows standards ci-dessus
2. Ajouter hover states cohérents
3. Respecter la transition 300ms
4. Tester mobile + desktop
5. Vérifier l'accessibilité (focus states)

**Quand modifier un composant existant :**

1. Vérifier qu'il respecte ce guide
2. Harmoniser avec les autres composants
3. Tester les interactions
4. Valider la performance (DevTools)

---

Dernière mise à jour : Phase 3 - Design System Polish
Date : 2026-02-24
