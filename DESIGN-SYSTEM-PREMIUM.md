# Moverz Design System Premium

> **Fintech-grade design system** inspiré de ramp.com pour une identité premium, cohérente et moderne.

---

## 📐 Principes de Design

### 1. Contraste & Clarté
- Contraste AA minimum (WCAG 2.1)
- Beaucoup d'espace blanc
- Pas de gros dégradés plein écran (seulement glow radial ultra léger)

### 2. Cohérence
- Un seul CTA principal : **"Obtenir mes devis"**
- Palette de couleurs contrôlée
- Pas de "pills" partout (max 3 preuves)

### 3. Premium & Minimal
- Pas d'esthétique "template"
- Micro-interactions subtiles (Framer Motion)
- Transitions 150–200ms

---

## 🎨 Design Tokens

### Couleurs

#### Bases
```css
--bg: 247 248 250         /* #F7F8FA - Fond principal */
--surface: 255 255 255    /* #FFFFFF - Surface des cartes */
--text: 11 15 25          /* #0B0F19 - Texte principal (noir profond) */
--text-2: 75 85 101       /* #4B5563 - Texte secondaire (gris foncé) */
--muted: 107 114 128      /* #6B7280 - Texte désactivé */
```

#### Bordures
```css
--border: 229 231 235     /* #E5E7EB - Bordure principale */
--border-2: 209 213 219   /* #D1D5DB - Bordure secondaire */
```

#### Primary (Dark)
```css
--primary: 11 15 25       /* #0B0F19 - Boutons/CTA principaux */
--primary-contrast: 255 255 255  /* #FFFFFF - Texte sur primary */
```

#### Accent (Turquoise Moverz)
```css
--accent: 46 233 198      /* #2EE9C6 - Accent principal */
--accent-2: 14 165 166    /* #0EA5A6 - Accent foncé */
```

#### Sémantiques
```css
--success: 22 163 74      /* #16A34A - Succès/vérifié */
--danger: 220 38 38       /* #DC2626 - Erreur */
--warning: 245 158 11     /* #F59E0B - Avertissement */
```

#### Focus
```css
--focus: rgba(46, 233, 198, 0.35)  /* Ring de focus accessible */
```

### Border Radius
```css
--radius-card: 16px       /* Cartes */
--radius-btn: 14px        /* Boutons */
--radius-input: 12px      /* Champs de formulaire */
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(11, 15, 25, 0.06)
--shadow-md: 0 12px 36px rgba(11, 15, 25, 0.10)
--shadow-lg: 0 20px 50px rgba(11, 15, 25, 0.15)
```

---

## 🔤 Typographie

### Fonts
- **Headings**: Space Grotesk (500, 600, 700)
- **Body/UI**: Inter (400, 500, 600)

### Échelle typographique

#### H1 (Hero)
- **Desktop**: 60–72px, leading 1.0–1.05
- **Tablet**: 42–48px
- **Mobile**: 34–38px

#### H2 (Sections)
- **Desktop**: 40–48px, leading tight
- **Mobile**: 32–36px

#### Body
- **Base**: 16–18px, leading 1.5
- **Labels**: 13–14px, medium

### Usage Tailwind
```tsx
<h1 className="font-heading text-[34px] leading-[1.05] font-bold sm:text-[42px] md:text-[60px] lg:text-[72px]">
  Titre Principal
</h1>

<p className="text-base text-[rgb(var(--text-2))] md:text-lg leading-relaxed">
  Corps de texte
</p>
```

---

## 📦 Components

### Primitives

#### Button
```tsx
import { Button } from "@/components/premium/Button";

<Button variant="primary" size="lg">
  Obtenir mes devis
</Button>

// Variants: primary, secondary, ghost
// Sizes: md, lg
// Props: loading, disabled
```

#### Input
```tsx
import { Input } from "@/components/premium/Input";
import { Label } from "@/components/premium/Label";
import { FieldError } from "@/components/premium/FieldError";

<Label htmlFor="city">Ville</Label>
<Input id="city" error={!!errors.city} />
<FieldError>{errors.city}</FieldError>
```

#### Card
```tsx
import { Card } from "@/components/premium/Card";

<Card shadow className="p-6">
  Contenu
</Card>
```

#### Badge
```tsx
import { Badge } from "@/components/premium/Badge";

<Badge variant="verified">Vérifié</Badge>
// Variants: subtle, accent, verified
```

### Composants Métier

#### TunnelEntryForm
```tsx
import { TunnelEntryForm } from "@/components/premium/TunnelEntryForm";

<TunnelEntryForm 
  onDataChange={(data) => setFormData(data)} 
  compact={false}
/>
```

#### ComparisonPreview
```tsx
import { ComparisonPreview } from "@/components/premium/ComparisonPreview";

<ComparisonPreview data={formData} />
```

#### StickyCTA
```tsx
import { StickyCTA } from "@/components/premium/StickyCTA";

<StickyCTA 
  data={formData} 
  onEditClick={handleEditClick} 
/>
```

---

## 📐 Layout

### Container
```tsx
import { Container } from "@/components/premium/Container";

<Container>
  {/* Max-width: 1200px, padding responsive */}
</Container>
```

### Spacing vertical des sections
- **Desktop**: 72–96px (py-16 md:py-24)
- **Mobile**: 64px (py-16)

---

## ♿ Accessibilité

### Focus Visible
Tous les éléments interactifs ont un `focus-visible:ring-2` avec le token `--focus`.

### Labels
Tous les inputs ont des labels associés (visibles ou `sr-only`).

### Aria
- `aria-expanded` sur les accordéons
- `aria-label` sur les boutons iconiques
- `role` appropriés

### Contraste
- Texte principal : 11.5:1 (AAA)
- Texte secondaire : 4.8:1 (AA)
- Boutons : 4.5:1 minimum (AA)

---

## 🎭 Animations

### Framer Motion
Toutes les animations utilisent des durées courtes (150–200ms) pour une sensation premium.

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 6 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.2 }}
>
  Contenu
</motion.div>
```

### Transitions CSS
```css
transition: all 150ms ease-out;
```

---

## 🧪 Tests

### Vitest
```bash
npm test
```

Exemple de test (computeMockQuotes) :
```ts
import { expect, test } from "vitest";
import { computeMockQuotes } from "@/lib/utils/mockQuotes";

test("computeMockQuotes retourne 3 devis", () => {
  const quotes = computeMockQuotes({ areaM2: 50 });
  expect(quotes).toHaveLength(3);
  expect(quotes[0].totalPrice).toBeGreaterThan(0);
});
```

---

## 🚀 Activation

### Étape 1 : Vérifier les dépendances
```bash
npm install
```

### Étape 2 : Activer la nouvelle homepage
```bash
# Sauvegarder l'ancienne
mv app/page.tsx app/page-old.tsx

# Activer la nouvelle
mv app/page-premium.tsx app/page.tsx
```

### Étape 3 : Dev
```bash
npm run dev
```

Visitez http://localhost:3040

---

## 📝 Checklist Definition of Done

- ✅ Tokens CSS (colors, radius, shadows) implémentés
- ✅ Fonts (Space Grotesk + Inter) via next/font
- ✅ Tailwind mapping (colors RGB/alpha)
- ✅ Primitives UI (Button, Input, Card, Badge, Container, Label)
- ✅ TunnelEntryForm + validation Zod + router logic
- ✅ computeMockQuotes + ComparisonPreview (live update)
- ✅ Hero Section + ProofBar
- ✅ StickyCTA (IntersectionObserver + Framer Motion)
- ✅ Sections (HowItWorks, Verification, ComparableQuotes, Testimonials, FAQ, FinalCTA)
- ✅ Header sticky + navigation
- ✅ Responsive mobile/tablet/desktop
- ✅ A11Y AA minimum
- ✅ Tests Vitest

---

## 🎯 Résultat

Une homepage premium, cohérente, performante et accessible qui convertit.

**Made with ❤️ for Moverz**
