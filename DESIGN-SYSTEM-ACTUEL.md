# 🎨 Design System Moverz - État Actuel (2026)

> **Document de référence unique** pour le design system Moverz  
> Dernière mise à jour : 24 février 2026

---

## 📐 Philosophie Design

**"Lumineux, moderne, premium"**

- Design minimaliste et aéré
- Fond clair avec accents turquoise
- Animations subtiles et fluides
- Inspiré par : Ramp, Stripe, Linear

---

## 🎨 Couleurs

### Palette principale (V4)

```css
/* Backgrounds */
--color-bg: #FAFAFA;           /* Fond principal (gris très clair) */
--color-bg-dark: #0B0F14;      /* Fond sombre (sections dark) */
--color-surface: #FFFFFF;      /* Surface des cartes */

/* Text */
--color-text: #0B0F19;         /* Texte principal (bleu foncé) */
--color-text-secondary: #6B7280; /* Texte secondaire (gris moyen) */
--color-text-muted: #9CA3AF;   /* Texte désactivé (gris clair) */

/* Accent */
--color-accent: #0EA5A6;       /* Turquoise Moverz (principal) */

/* Borders */
--color-border: #E5E7EB;       /* Bordure principale */
--color-border-light: #F3F4F6; /* Bordure légère */

/* Semantic */
--color-success: #16A34A;      /* Succès */
--color-danger: #DC2626;       /* Erreur */
```

### Gradient Hero

```css
background: radial-gradient(900px 420px at 20% 12%, rgba(107, 207, 207, 0.26), transparent 60%),
            radial-gradient(700px 380px at 80% 18%, rgba(168, 232, 232, 0.60), transparent 62%),
            linear-gradient(180deg, #a8e8e8 0%, #eafafa 42%, #ffffff 100%);
```

**Usage** : Section hero uniquement (`.bg-hero`)

---

## 🔤 Typographie

### Fontes

- **Titres** : **Sora** (400, 600, 800, 900)
- **Corps** : **Inter** (400, 500, 600)

```tsx
// Titres
<h1 className="font-heading text-5xl font-bold">
  Titre principal
</h1>

// Corps
<p className="font-sans text-base">
  Texte de corps
</p>
```

### Échelle typographique

#### Desktop
- **H1 Hero** : `clamp(48px, 5.5vw, 68px)` — leading 1.05
- **H2 Section** : `clamp(28px, 5vw, 42px)` — leading 1.1
- **Body** : `16px` (text-base) — leading 1.5
- **Small** : `14px` (text-sm)

#### Mobile
- **H1** : `clamp(32px, 7vw, 56px)`
- **H2** : `clamp(24px, 5vw, 36px)`

### Poids de fonte

```
font-bold      → 700 (Titres principaux)
font-semibold  → 600 (Sous-titres, labels)
font-medium    → 500 (Navigation, badges)
font-normal    → 400 (Corps de texte)
```

---

## 🎭 Ombres & Profondeur

### Ombres standards

```css
--shadow-xs: 0 1px 2px rgba(0,0,0,0.04);
--shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
--shadow-md: 0 4px 16px rgba(0,0,0,0.08);
```

### Ombres spéciales

```css
/* Glow turquoise (CTAs) */
shadow-glow-turquoise: 0 4px 16px rgba(14,165,166,0.3);
shadow-glow-turquoise-lg: 0 6px 24px rgba(14,165,166,0.5);
```

---

## 📦 Radius

```css
--radius-sm: 8px;   /* Petits éléments */
--radius-md: 12px;  /* Cards, inputs */
```

**Usage Tailwind** :
- `rounded-lg` (8px) : badges, petits boutons
- `rounded-xl` (12px) : cards
- `rounded-2xl` (16px) : grandes sections

---

## ✨ Animations & Transitions

### Durées

```css
/* Standard */
transition-all duration-300

/* Rapide */
duration-200

/* Lente */
duration-500
```

### Framer Motion

**Variants utilisées** :
- `fadeUp` : opacity 0→1, y 12→0
- `staggerContainer` : parent qui stagger les enfants
- `staggerItem` : enfant avec délai

**Easing** : `ease: [0.16, 1, 0.3, 1]` (easeOutExpo)

### Hover Effects

#### Cards
```tsx
<div className="transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
```

#### CTAs
```tsx
<button className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-turquoise-lg">
```

#### Links
```tsx
<a className="transition-opacity duration-300 hover:opacity-80">
```

---

## 🖼️ Logo & Assets

### Logo principal

- **Fichier** : `/public/logo.png`
- **Design** : S stylisé turquoise (deux rectangles arrondis)
- **Couleur** : #0EA5A6
- **Formats** : PNG (512x512)

### Image Open Graph

- **Générée dynamiquement** : `/app/opengraph-image.tsx`
- **Dimensions** : 1200 x 630 px
- **Fontes** : Sora (titres) + Inter (détails)
- **Style** : Gradient clair + logo + badges

---

## 📱 Composants Clés

### Button

```tsx
<button className="
  inline-flex items-center gap-2
  px-6 py-3
  rounded-lg
  bg-[var(--color-accent)]
  text-white font-semibold
  shadow-glow-turquoise
  hover:shadow-glow-turquoise-lg
  hover:-translate-y-0.5
  active:scale-[0.98]
  transition-all duration-300
">
  Obtenir mes devis
</button>
```

### Card

```tsx
<div className="
  rounded-xl
  bg-white
  border border-[var(--color-border)]
  p-6
  shadow-sm
  hover:shadow-md
  hover:-translate-y-1
  transition-all duration-300
">
  Contenu
</div>
```

### Badge

```tsx
<span className="
  inline-flex items-center gap-1
  px-3 py-1
  rounded-full
  bg-[rgba(14,165,166,0.1)]
  text-[var(--color-accent)]
  text-sm font-medium
">
  Vérifié
</span>
```

---

## 🎯 Sections Homepage V4

### Structure actuelle

```
<HeroV4TwoColumn />           // Hero avec form + halos turquoise
<ComparableQuotesMockScrolly /> // Mockup iPhone + comparaison
<WhyMoverz />                 // 3 cards avantages
<CreditsafeChapter />         // Section dark unique
<TestimonialV4 />             // Témoignage simple
<FAQV4 />                     // FAQ accordéon
<StickyCTA />                 // CTA flottant smart
```

### Hero Background

**Classe** : `.bg-hero`

Gradient lumineux avec halos turquoise clairs :
- Radial top-right : `rgba(168, 232, 232, 0.60)`
- Radial left : `rgba(107, 207, 207, 0.26)`
- Linear bottom-up : `#a8e8e8 → #eafafa → #ffffff`

---

## 📐 Layout & Spacing

### Container

```tsx
<div className="container mx-auto max-w-7xl px-4 md:px-8">
```

### Sections Padding

```tsx
// Standard
<section className="py-12 md:py-28">

// Compact
<section className="py-8 md:py-16">
```

---

## ♿ Accessibilité

### Contraste

- Texte principal (#0B0F19 sur #FFFFFF) : **15.8:1** ✅ AAA
- Texte secondaire (#6B7280 sur #FFFFFF) : **4.6:1** ✅ AA
- Accent (#0EA5A6 sur #FFFFFF) : **3.4:1** ⚠️ (OK pour éléments non-texte)

### Focus States

Tous les éléments interactifs ont un focus visible :

```css
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-[var(--color-accent)]
focus-visible:ring-offset-2
```

### Motion

Respect de `prefers-reduced-motion` via Framer Motion (automatique).

---

## 🚀 Performance

### Optimisations appliquées

- ✅ Fontes locales (woff2) : Sora + Inter
- ✅ Images Next.js optimisées
- ✅ Animations GPU-accelerated (`transform`, `opacity`)
- ✅ Lazy load composants lourds (`dynamic()`)
- ✅ Image OG générée dynamiquement (Next.js)

### Objectifs Lighthouse

- **Performance** : > 90
- **Accessibility** : > 95
- **Best Practices** : > 90
- **SEO** : 100

---

## 📝 Guidelines d'utilisation

### ✅ À FAIRE

1. **Utiliser les variables CSS** pour les couleurs
   ```css
   color: var(--color-text);
   background: var(--color-surface);
   ```

2. **Utiliser les classes Tailwind** de fonte
   ```tsx
   <h1 className="font-heading">Titre</h1>
   <p className="font-sans">Corps</p>
   ```

3. **Ajouter des transitions** sur les éléments interactifs
   ```tsx
   className="transition-all duration-300"
   ```

4. **Respecter l'échelle d'ombres**
   - Défaut : `shadow-sm`
   - Hover : `shadow-md`
   - CTAs : `shadow-glow-turquoise`

### ❌ À ÉVITER

1. ❌ Couleurs hardcodées (utiliser les variables)
2. ❌ Fontes inline style (utiliser les classes)
3. ❌ Animations trop longues (max 500ms)
4. ❌ Gradients flashy ou trop présents
5. ❌ Ombres trop fortes (garder la subtilité)

---

## 🔧 Maintenance

### Ajouter un nouveau composant

1. Utiliser les couleurs via `var(--color-*)`
2. Ajouter hover states cohérents
3. Respecter les durées de transition (300ms)
4. Tester mobile + desktop
5. Vérifier accessibilité (focus, contraste)

### Modifier un composant existant

1. Vérifier qu'il respecte ce guide
2. Harmoniser avec les autres composants
3. Tester les interactions
4. Valider la performance

---

## 📚 Fichiers de référence

### Design
- **Ce document** : Source de vérité unique
- `DESIGN-SYSTEM-RAMP-STYLE.md` : Guidelines détaillées (legacy, pour référence historique)

### Code
- `app/globals.css` : Variables CSS
- `tailwind.config.ts` : Configuration Tailwind
- `app/layout.tsx` : Chargement des fontes
- `components/motion.tsx` : System d'animations

### Assets
- `public/logo.png` : Logo principal
- `public/fonts/` : Sora + Inter (woff2)
- `app/opengraph-image.tsx` : Générateur image OG

---

## 🎯 Définition du Design V4

**"Lumineux, moderne, performant"**

Le design Moverz V4 se caractérise par :

1. **Clarté** : Fond blanc/gris clair, beaucoup d'espace blanc
2. **Modernité** : Fontes Sora + Inter, animations subtiles
3. **Cohérence** : Une seule palette turquoise, system unifié
4. **Performance** : Fontes locales, animations GPU, lazy load
5. **Accessibilité** : Contraste AA+, focus visible, reduced-motion

---

**Créé le** : 24 février 2026  
**Version** : V4 Radical Clean  
**Stack** : Next.js 15, React 18, TypeScript, Tailwind, Framer Motion  
**Statut** : ✅ Production

---

🚀 **Un seul design system, une seule source de vérité**
