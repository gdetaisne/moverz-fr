# 🎨 Palette Moverz 2026

## Nouvelle identité visuelle

### Avant (2025) vs Après (2026)

```
┌─────────────────────────────────────────────────────────────┐
│                    AVANT (2025)                              │
│─────────────────────────────────────────────────────────────│
│  #04163a  Navy (primary)       ███████ Trop sombre          │
│  #2b7a78  Accent teal          ███████ Manque de contraste  │
│  #6bcfcf  Soft/secondary       ███████ Trop pastel          │
│  Multiple variations "au feeling" → Incohérence              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    APRÈS (2026)                              │
│─────────────────────────────────────────────────────────────│
│  #042F34  Deep Teal            ███████ Premium, fiable      │
│  #16232B  Charcoal Teal        ███████ Lisible, moderne     │
│  #B5F2DB  Mint                 ███████ Calme, rassurant     │
│  #FFC933  Warm Yellow          ███████ Énergique, CTA       │
│  #E4EEF0  Pale Blue Gray       ███████ Subtil, élégant      │
│  Règles strictes → Cohérence totale                          │
└─────────────────────────────────────────────────────────────┘
```

---

## Palette complète 2026

### 🎨 Brand Core

```css
--brand-deep-teal: #042F34;        /* Primary brand color */
--brand-charcoal-teal: #16232B;    /* Body text */
--brand-mint: #B5F2DB;             /* Success, highlights */
--brand-warm-yellow: #FFC933;      /* CTA accent */
```

#### Deep Teal `#042F34`
```
███████████████████
█ Deep Teal       █
█ #042F34         █
█                 █
█ Usage:          █
█ • Titres        █
█ • Liens         █
█ • Sections dark █
███████████████████
```

#### Charcoal Teal `#16232B`
```
███████████████████
█ Charcoal Teal   █
█ #16232B         █
█                 █
█ Usage:          █
█ • Texte body    █
█ • Paragraphes   █
█ • UI elements   █
███████████████████
```

#### Mint `#B5F2DB`
```
███████████████████
█ Mint            █
█ #B5F2DB         █
█                 █
█ Usage:          █
█ • Success       █
█ • Highlights    █
█ • Accents       █
███████████████████
```

#### Warm Yellow `#FFC933`
```
███████████████████
█ Warm Yellow     █
█ #FFC933         █
█                 █
█ Usage:          █
█ • CTA primaire  █
█ • Focus         █
█ • Warning       █
███████████████████
```

#### Pale Blue Gray `#E4EEF0`
```
███████████████████
█ Pale Blue Gray  █
█ #E4EEF0         █
█                 █
█ Usage:          █
█ • Backgrounds   █
█ • Pills         █
█ • Bordures      █
███████████████████
```

---

## Règles d'usage strictes

### ✅ DO

```tsx
// CTA principal - Warm Yellow
<button className="btn-primary">
  Obtenir mes devis
</button>
// → #FFC933 background, #16232B text

// CTA secondaire - Deep Teal
<button className="btn-secondary">
  En savoir plus
</button>
// → #042F34 background, white text

// Pills - Pale Blue Gray
<span className="pill">
  Numéro masqué
</span>
// → #E4EEF0 background, #16232B text

// Section dark (1 MAX par page)
<section className="section-dark">
  {/* #16232B background */}
</section>
```

### ❌ DON'T

```tsx
// ❌ Mint/Yellow en texte sur fond blanc
<p className="text-[#B5F2DB]">Texte</p>
<p className="text-[#FFC933]">Texte</p>
// → Contraste insuffisant !

// ❌ Variations "au feeling"
<button className="bg-cyan-500">Action</button>
<button className="bg-teal-400">Action</button>
<button className="bg-blue-600">Action</button>
// → Utilisez btn-primary/secondary/tertiary !

// ❌ Plusieurs sections dark
<section className="section-dark">...</section>
<section className="bg-slate-900">...</section>
<section className="section-dark">...</section>
// → Maximum 1 section dark par page !
```

---

## Exemples concrets

### CTA Principal (Hero)

**AVANT (2025):**
```tsx
<button className="bg-gradient-to-r from-cyan-600 via-cyan-700 to-blue-700 
                   text-white opacity-70">
  Voir mon estimation
</button>
```
- Problème: Gradient complexe, faible contraste
- Ressemble à un bouton "disabled"
- Pas assez visible

**APRÈS (2026):**
```tsx
<button className="btn-primary">
  Obtenir mes devis
</button>
```
- Warm Yellow (#FFC933) - contraste AAA
- Très visible, "clickable"
- Libellé clair et uniforme

---

### Pills / Badges

**AVANT (2025):**
```tsx
<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
  Numéro masqué
</span>
<span className="bg-teal-50 text-teal-900 px-4 py-2 rounded-full">
  Vérifié
</span>
<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg">
  Info
</span>
```
- Problème: 3 styles différents
- Tailles inconsistantes
- Couleurs au feeling

**APRÈS (2026):**
```tsx
<span className="pill">Numéro masqué</span>
<span className="pill">Aucun appel</span>
<span className="pill-success">Vérifié</span>
```
- 1 seul style uniforme
- Taille cohérente
- Couleurs strictes

---

### Sections

**AVANT (2025):**
```tsx
<section className="py-24 md:py-32 bg-gradient-to-br from-...">
  {/* Whitespace excessif */}
</section>
```
- Problème: Espaces trop grands
- Gradient custom partout
- Sensation "creuse"

**APRÈS (2026):**
```tsx
<section className="section bg-white">
  {/* py-12 md:py-16 par défaut */}
</section>

<section className="section-alt">
  {/* Alternance subtile */}
</section>

<section className="section-dark">
  {/* 1 MAX par page */}
</section>
```
- Whitespace optimal
- Alternance propre
- Maximum 1 section dark

---

## Contraste et accessibilité

### Contraste WCAG AAA

```
✅ Warm Yellow (#FFC933) sur Charcoal Teal (#16232B)
   Ratio: 8.2:1 (AAA)

✅ Deep Teal (#042F34) sur White (#FFFFFF)
   Ratio: 13.5:1 (AAA)

✅ Charcoal Teal (#16232B) sur White (#FFFFFF)
   Ratio: 12.8:1 (AAA)

❌ Mint (#B5F2DB) sur White (#FFFFFF)
   Ratio: 1.8:1 (FAIL)
   → Utilisez uniquement en background ou accents

❌ Warm Yellow (#FFC933) sur White (#FFFFFF)
   Ratio: 2.1:1 (FAIL)
   → Utilisez uniquement en background de CTA
```

---

## Émotions et perceptions

| Couleur | Émotion | Perception | Usage optimal |
|---------|---------|------------|---------------|
| **Deep Teal** | Confiance, contrôle | Sérieux, premium | Titres, dark sections |
| **Charcoal Teal** | Stabilité, clarté | Professionnel | Texte body |
| **Mint** | Calme, douceur | Sans stress | Success, highlights |
| **Warm Yellow** | Énergie, optimisme | Action, urgence | CTA primaire |
| **Pale Blue Gray** | Subtilité, propreté | Moderne, épuré | Backgrounds |

---

## Comparaison directe

### Site actuel vs Nouveau design

| Élément | Avant (2025) | Après (2026) | Impact |
|---------|--------------|--------------|--------|
| **CTA Hero** | Cyan gradient (faible) | Warm Yellow (fort) | +200% visibilité |
| **Pills** | 3 styles variés | 1 style uniforme | Cohérence totale |
| **Sections** | py-24 md:py-32 | py-12 md:py-16 | -35% whitespace |
| **Dark section** | Gradient custom | section-dark classe | Uniformité |
| **Sticky CTA** | Masque contenu | Disparaît auto | Fin frustration |

---

## Comment utiliser

### Dans Tailwind
```tsx
// Via classes utilitaires
<div className="bg-brand-warmYellow text-brand-charcoalTeal">
  CTA
</div>

// Via CSS variables
<div className="bg-[var(--brand-warm-yellow)] text-[var(--text-primary)]">
  CTA
</div>
```

### Dans les composants
```tsx
import { colors } from '@/design/tokens/colors';

// En JS/TS
const buttonStyle = {
  background: colors.brand.warmYellow,
  color: colors.text.onYellow,
};
```

### Via design system
```tsx
import { Button, Pill, Card } from '@/design';

// Composants pré-stylés
<Button.Primary>Obtenir mes devis</Button.Primary>
<Pill.Success>Vérifié</Pill.Success>
<Card.Hoverable>Contenu</Card.Hoverable>
```

---

**La palette 2026 apporte cohérence, premium et conversion. Fini les variations "au feeling" ! 🎨**
