# MISSION : REFONTE DESIGN TUNNEL DEVIS.MOVERZ.FR V4

> Prompt complet pour harmoniser le tunnel de devis avec le design system V4 Premium de moverz.fr

---

## 🎯 CONTEXTE

Tu es en charge de la **refonte design complète** du tunnel de devis (`devis.moverz.fr`) pour l'aligner à 100% avec le design system V4 Premium de la homepage (`moverz.fr`).

**Stack technique** :
- Next.js 14+ / React 18
- TypeScript strict
- Tailwind CSS 3.4
- Framer Motion pour animations
- Lucide React pour icônes

---

## ⚠️ CONTRAINTES CRITIQUES

### ❌ NE PAS TOUCHER
- Appels API back-office existants
- Routes et endpoints
- Logique métier (validation, calculs, redirections)
- Liens vers le back-office

### ✅ UNIQUEMENT
- Design (couleurs, typographie, spacing)
- UX (layout, interactions, animations)
- Responsive (mobile/tablet/desktop)
- Composants visuels

**Si tu casses un lien back-office = mission échouée.**

---

## 🎨 DESIGN SYSTEM V4 - TOKENS

### Copier-coller dans votre `globals.css`

```css
:root {
  /* ===== MOVERZ V4 RADICAL — DESIGN TOKENS ===== */

  /* Backgrounds */
  --color-bg: #FAFAFA;           /* Fond principal (gris très clair) */
  --color-bg-dark: #0B0F14;      /* Sections dark */
  --color-surface: #FFFFFF;      /* Cartes/surfaces */

  /* Text */
  --color-text: #0B0F19;         /* Texte principal (noir profond) */
  --color-text-secondary: #6B7280; /* Texte secondaire (gris foncé) */
  --color-text-muted: #9CA3AF;   /* Texte désactivé/placeholders */

  /* Accent (Turquoise Moverz) */
  --color-accent: #0EA5A6;       /* ACCENT PRINCIPAL - utiliser partout */

  /* Bordures */
  --color-border: #E5E7EB;       /* Bordure principale (gris fin) */
  --color-border-light: #F3F4F6; /* Bordure très légère */

  /* Semantic */
  --color-success: #16A34A;      /* Vert pour validations */
  --color-danger: #DC2626;       /* Rouge pour erreurs */
  --color-warning: #F59E0B;      /* Orange pour warnings */

  /* Radius */
  --radius-sm: 8px;   /* Inputs, petits boutons */
  --radius-md: 12px;  /* Cartes, modales */

  /* Shadows (DISCRÈTES) */
  --shadow-xs: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.12);
}
```

### RÈGLES STRICTES

- ❌ **Plus de dégradés turquoise-vert vifs**
- ❌ **Plus de bordures épaisses colorées par défaut**
- ❌ **Plus de shadows colorées**
- ✅ **Accent turquoise (#0EA5A6) UNIQUEMENT sur focus/actions/highlights**
- ✅ **Bordures grises fines (1px) par défaut**
- ✅ **Shadows discrètes et grises**

---

## ✍️ TYPOGRAPHIE

### Fonts

**Headings (H1, H2, H3)** :
```tsx
className="font-heading"  // Sora (500, 600, 700)
```

**Body/UI** :
```tsx
className="font-sans"     // Inter (400, 500, 600)
```

### Échelle

```css
/* H1 (Titres principaux type "Bravo !") */
h1 {
  font-family: var(--font-sora), sans-serif;
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--color-text);
}

/* H2 (Titres de sections) */
h2 {
  font-family: var(--font-sora), sans-serif;
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: var(--color-text);
}

/* Body/Labels */
body, input, button, p {
  font-family: var(--font-inter), system-ui, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-text);
}

/* Labels/Small */
.label-sm {
  font-size: 12px;
  font-weight: 500;
  color: var(--color-text-secondary);
}
```

---

## 🧩 COMPOSANTS À HARMONISER

### 1. INPUTS (Champs de formulaire)

**Avant** : Bordures turquoise épaisses, radius grand
**Après** : Bordures grises fines, focus turquoise, checkmark animé

```tsx
<input
  type="text"
  className="w-full rounded-[var(--radius-sm)] border px-3.5 py-2.5 text-sm 
             outline-none transition-all placeholder:text-[var(--color-text-muted)]"
  style={{
    borderColor: 'var(--color-border)',
    color: 'var(--color-text)',
    background: 'var(--color-surface)',
  }}
  onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent)')}
  onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
  placeholder="Ex: Paris"
/>
```

**Ajouter** : Checkmark animé (CheckCircle2) quand champ valide

```tsx
{isValid && (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    className="absolute right-3 top-1/2 -translate-y-1/2"
  >
    <CheckCircle2 className="h-4 w-4" style={{ color: 'var(--color-accent)' }} />
  </motion.div>
)}
```

---

### 2. BOUTONS

**Bouton primaire (noir)** :
```tsx
<button
  className="inline-flex items-center justify-center gap-2 
             rounded-[var(--radius-sm)] px-6 py-3.5 text-sm font-semibold 
             text-white transition-all duration-200 
             hover:opacity-90 active:scale-[0.98] 
             disabled:opacity-50 disabled:cursor-not-allowed"
  style={{ background: 'var(--color-text)' }}
>
  Voir mon estimation
  <ArrowRight className="h-4 w-4" />
</button>
```

**Bouton accent (turquoise)** :
```tsx
<button
  className="inline-flex items-center justify-center gap-2 
             rounded-[var(--radius-sm)] px-6 py-3.5 text-sm font-semibold 
             text-white transition-all duration-200 
             hover:opacity-90 active:scale-[0.98]"
  style={{ background: 'var(--color-accent)' }}
>
  Continuer
  <ArrowRight className="h-4 w-4" />
</button>
```

---

### 3. CARTES

```tsx
<div
  className="rounded-[var(--radius-md)] border p-6"
  style={{
    borderColor: 'var(--color-border)',
    background: 'var(--color-surface)',
    boxShadow: 'var(--shadow-sm)'
  }}
>
  Contenu de la carte
</div>
```

**Carte highlighted (meilleure offre)** :
```tsx
<div
  className="rounded-[var(--radius-md)] border p-6"
  style={{
    borderColor: 'var(--color-accent)',
    background: 'rgba(14,165,166,0.02)',
    boxShadow: 'var(--shadow-md)'
  }}
>
  Meilleure offre
</div>
```

---

### 4. PROGRESS BAR

```tsx
<div className="space-y-2">
  {/* Label */}
  <div className="flex items-center justify-between text-xs font-medium">
    <span style={{ color: 'var(--color-text-muted)' }}>Progression</span>
    <span style={{ color: 'var(--color-accent)' }}>{progress}%</span>
  </div>
  
  {/* Bar */}
  <div 
    className="h-1.5 w-full rounded-full overflow-hidden" 
    style={{ background: 'var(--color-border-light)' }}
  >
    <motion.div
      className="h-full rounded-full"
      style={{ background: 'var(--color-accent)' }}
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    />
  </div>
</div>
```

---

## 🎬 ANIMATIONS (Framer Motion)

### Principes
- **Durée** : 150-300ms max
- **Ease** : `[0.16, 1, 0.3, 1]` (custom ease out)
- **Pas d'animations lourdes** ou distrayantes

### Patterns

**FadeUp (sections)** :
```tsx
<motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
>
  {content}
</motion.div>
```

**Checkmark apparition** :
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.2 }}
>
  <CheckCircle2 className="h-4 w-4" style={{ color: 'var(--color-accent)' }} />
</motion.div>
```

**Prix change (bounce)** :
```tsx
<AnimatePresence mode="wait">
  <motion.p
    key={price}
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -10, opacity: 0 }}
    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    className="text-4xl font-bold tabular-nums"
    style={{ color: 'var(--color-text)' }}
  >
    {price.toLocaleString('fr-FR')} €
  </motion.p>
</AnimatePresence>
```

---

## 🛒 COMPOSANT PRIORITAIRE : SMART CART (STEP 3)

### Concept

**Desktop (>= 1024px)** : Panier sticky à droite
**Mobile (< 1024px)** : FAB (Floating Action Button) + Bottom sheet drawer

### Features différenciantes

1. Prix animé en temps réel (bounce)
2. Badge "LIVE" avec pulse animation
3. Mini progress bar dans fourchette min/max
4. Items avec animation entry/exit fluide
5. Savings highlight automatique
6. Badge "Prix transparent"
7. Compteur d'options sur FAB mobile

### Code à intégrer

Créer le fichier : `components/tunnel/SmartCart.tsx`

```typescript
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  Package, 
  Sparkles,
  Trash2,
  X
} from "lucide-react";

export interface CartOption {
  id: string;
  name: string;
  price: number;
  detail?: string;
  isIncluded?: boolean;
  category: string;
}

export interface CartSummary {
  basePrice: number;
  minPrice: number;
  maxPrice: number;
  selectedOptions: CartOption[];
  totalPrice: number;
  savings?: number;
}

interface SmartCartProps {
  summary: CartSummary;
  onRemoveOption: (optionId: string) => void;
  onContinue: () => void;
  projectInfo: {
    origin: string;
    destination: string;
    surface: number;
  };
}

function DesktopCart({ summary, onRemoveOption, onContinue, projectInfo }: SmartCartProps) {
  const [previousPrice, setPreviousPrice] = useState(summary.totalPrice);

  useEffect(() => {
    if (previousPrice !== summary.totalPrice) {
      setPreviousPrice(summary.totalPrice);
    }
  }, [summary.totalPrice, previousPrice]);

  const progressPercentage = Math.min(
    100,
    ((summary.totalPrice - summary.minPrice) / (summary.maxPrice - summary.minPrice)) * 100
  );

  return (
    <div className="sticky top-24 w-full max-w-[380px]">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-[var(--radius-md)] border overflow-hidden"
        style={{
          borderColor: 'var(--color-border)',
          background: 'var(--color-surface)',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        {/* Header avec prix animé */}
        <div 
          className="px-6 py-5 border-b"
          style={{ 
            borderColor: 'var(--color-border-light)',
            background: 'linear-gradient(180deg, rgba(14,165,166,0.03) 0%, transparent 100%)'
          }}
        >
          <div className="flex items-baseline justify-between mb-1">
            <span 
              className="text-xs uppercase tracking-wider font-medium"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Votre budget
            </span>
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span 
                className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
                style={{ 
                  background: 'rgba(14,165,166,0.08)', 
                  color: 'var(--color-accent)' 
                }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" 
                        style={{ background: 'var(--color-accent)' }} />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5" 
                        style={{ background: 'var(--color-accent)' }} />
                </span>
                LIVE
              </span>
            </motion.div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.p
              key={summary.totalPrice}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl font-bold tabular-nums"
              style={{ color: 'var(--color-text)' }}
            >
              {summary.totalPrice.toLocaleString('fr-FR')} €
            </motion.p>
          </AnimatePresence>
          
          <div className="mt-3 space-y-1.5">
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" 
                 style={{ background: 'var(--color-border-light)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'var(--color-accent)' }}
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] tabular-nums font-medium" 
                    style={{ color: 'var(--color-text-muted)' }}>
                {summary.minPrice.toLocaleString('fr-FR')} €
              </span>
              <span className="text-[10px]" 
                    style={{ color: 'var(--color-text-muted)' }}>
                Fourchette
              </span>
              <span className="text-[10px] tabular-nums font-medium" 
                    style={{ color: 'var(--color-text-muted)' }}>
                {summary.maxPrice.toLocaleString('fr-FR')} €
              </span>
            </div>
          </div>

          <p className="text-xs mt-3 leading-relaxed" 
             style={{ color: 'var(--color-text-muted)' }}>
            {projectInfo.origin} → {projectInfo.destination} · {projectInfo.surface} m²
          </p>
        </div>

        {/* Liste des options */}
        <div className="px-6 py-4 space-y-2.5 max-h-[380px] overflow-y-auto smart-cart-scrollbar">
          <AnimatePresence mode="popLayout">
            {summary.selectedOptions.length > 0 ? (
              summary.selectedOptions.map((option) => (
                <motion.div
                  key={option.id}
                  layout
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, x: 20 }}
                  transition={{ 
                    duration: 0.25, 
                    ease: [0.16, 1, 0.3, 1],
                    layout: { duration: 0.3 }
                  }}
                  className="group flex items-start justify-between gap-3 pb-2.5 border-b"
                  style={{ borderColor: 'var(--color-border-light)' }}
                >
                  <div className="flex items-start gap-2.5 flex-1 min-w-0">
                    <CheckCircle2 
                      className="h-4 w-4 shrink-0 mt-0.5" 
                      style={{ color: 'var(--color-accent)' }} 
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium leading-snug truncate" 
                         style={{ color: 'var(--color-text)' }}>
                        {option.name}
                      </p>
                      {option.detail && (
                        <p className="text-xs mt-0.5 leading-relaxed" 
                           style={{ color: 'var(--color-text-muted)' }}>
                          {option.detail}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="text-right">
                      <p className="text-sm font-semibold tabular-nums" 
                         style={{ color: 'var(--color-text)' }}>
                        {option.isIncluded ? '' : '+'}
                        {option.price > 0 ? `${option.price} €` : ''}
                      </p>
                      {option.isIncluded && (
                        <span className="text-[10px] font-medium" 
                              style={{ color: 'var(--color-success)' }}>
                          Inclus
                        </span>
                      )}
                    </div>
                    
                    {!option.isIncluded && (
                      <button
                        onClick={() => onRemoveOption(option.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex h-6 w-6 items-center justify-center rounded hover:bg-red-50"
                        aria-label="Retirer"
                      >
                        <Trash2 className="h-3 w-3" style={{ color: 'var(--color-danger)' }} />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8"
              >
                <div 
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full mb-3"
                  style={{ background: 'rgba(14,165,166,0.08)' }}
                >
                  <Package className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                </div>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  Sélectionnez vos options
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                  Elles apparaîtront ici
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Savings */}
        <AnimatePresence>
          {summary.savings && summary.savings > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="px-6 py-3 border-t"
              style={{ 
                borderColor: 'var(--color-border-light)',
                background: 'rgba(22,163,74,0.03)'
              }}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" style={{ color: 'var(--color-success)' }} />
                <span className="text-xs font-medium" style={{ color: 'var(--color-success)' }}>
                  Vous économisez {summary.savings} € avec cette formule
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <div className="px-6 py-4 border-t" style={{ borderColor: 'var(--color-border-light)' }}>
          <button
            onClick={onContinue}
            disabled={summary.selectedOptions.length === 0}
            className="group w-full inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: 'var(--color-accent)' }}
          >
            Continuer
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          
          <p className="text-center text-xs mt-2.5" style={{ color: 'var(--color-text-muted)' }}>
            Vous pourrez modifier après · Aucun engagement
          </p>
        </div>
      </motion.div>

      {/* Badge flottant */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="absolute -top-3 -left-3 rounded-full px-3 py-1.5 text-[11px] font-semibold shadow-lg border"
        style={{ 
          background: 'white', 
          color: 'var(--color-text)',
          borderColor: 'var(--color-border)'
        }}
      >
        Prix transparent
      </motion.div>
    </div>
  );
}

function MobileCart({ summary, onRemoveOption, onContinue, projectInfo }: SmartCartProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const progressPercentage = Math.min(
    100,
    ((summary.totalPrice - summary.minPrice) / (summary.maxPrice - summary.minPrice)) * 100
  );

  return (
    <>
      {/* FAB */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
        onClick={() => setDrawerOpen(true)}
        className="fixed bottom-6 right-6 z-40 shadow-2xl rounded-full p-4"
        style={{ background: 'var(--color-accent)' }}
      >
        <div className="relative">
          {summary.selectedOptions.length > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold shadow-md"
              style={{ 
                background: 'var(--color-text)', 
                color: 'white' 
              }}
            >
              {summary.selectedOptions.length}
            </motion.span>
          )}
          
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-white" />
            <div className="text-left">
              <p className="text-[10px] font-medium text-white/70">Total</p>
              <motion.p
                key={summary.totalPrice}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="text-sm font-bold text-white tabular-nums"
              >
                {summary.totalPrice.toLocaleString('fr-FR')} €
              </motion.p>
            </div>
          </div>
        </div>
      </motion.button>

      {/* Drawer - Ajouter le code complet du drawer ici */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-50"
              style={{ background: 'rgba(11,15,25,0.6)' }}
            />
            {/* ... reste du drawer ... */}
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export function SmartCart(props: SmartCartProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <MobileCart {...props} /> : <DesktopCart {...props} />;
}
```

### Hook useSmartCart

Créer le fichier : `hooks/useSmartCart.ts`

```typescript
"use client";

import { useState, useCallback } from "react";
import { CartOption, CartSummary } from "@/components/tunnel/SmartCart";

interface UseSmartCartProps {
  basePrice: number;
  minPrice: number;
  maxPrice: number;
}

export function useSmartCart({ basePrice, minPrice, maxPrice }: UseSmartCartProps) {
  const [selectedOptions, setSelectedOptions] = useState<CartOption[]>([]);

  const addOption = useCallback((option: CartOption) => {
    setSelectedOptions((prev) => {
      if (prev.some((o) => o.id === option.id)) return prev;
      return [...prev, option];
    });
  }, []);

  const removeOption = useCallback((optionId: string) => {
    setSelectedOptions((prev) => prev.filter((o) => o.id !== optionId));
  }, []);

  const toggleOption = useCallback((option: CartOption) => {
    setSelectedOptions((prev) => {
      const exists = prev.some((o) => o.id === option.id);
      if (exists) {
        return prev.filter((o) => o.id !== option.id);
      }
      return [...prev, option];
    });
  }, []);

  const clearOptions = useCallback(() => {
    setSelectedOptions([]);
  }, []);

  const hasOption = useCallback((optionId: string) => {
    return selectedOptions.some((o) => o.id === optionId);
  }, [selectedOptions]);

  const totalPrice = basePrice + selectedOptions.reduce((sum, opt) => {
    return sum + (opt.isIncluded ? 0 : opt.price);
  }, 0);

  const savings = selectedOptions
    .filter((o) => o.isIncluded)
    .reduce((sum, opt) => sum + opt.price, 0);

  const summary: CartSummary = {
    basePrice,
    minPrice,
    maxPrice,
    selectedOptions,
    totalPrice,
    savings: savings > 0 ? savings : undefined,
  };

  return {
    selectedOptions,
    addOption,
    removeOption,
    toggleOption,
    clearOptions,
    hasOption,
    summary,
  };
}
```

### CSS Scrollbar

Ajouter dans `globals.css` :

```css
/* Custom scrollbar pour le panier */
.smart-cart-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.smart-cart-scrollbar::-webkit-scrollbar-track {
  background: var(--color-border-light);
  border-radius: 999px;
}

.smart-cart-scrollbar::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 999px;
  transition: background 150ms;
}

.smart-cart-scrollbar::-webkit-scrollbar-thumb:hover {
  background: var(--color-accent);
}

.smart-cart-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: var(--color-border) var(--color-border-light);
}
```

---

## 📱 RESPONSIVE

### Breakpoints

```typescript
// Mobile : < 640px
// Tablet : 640px - 1023px
// Desktop : >= 1024px
```

### Adaptations mobiles prioritaires

1. **SmartCart** : FAB + Drawer (pas sticky sidebar)
2. **Grids** : Stack vertical automatique
3. **Padding** : Réduit (16px au lieu de 24px)
4. **Font-sizes** : Légèrement réduits mais lisibles
5. **Touch targets** : Min 44x44px pour tous boutons
6. **Safe areas** : Gérer notch iPhone (`env(safe-area-inset-bottom)`)

```css
/* Safe area pour iPhone */
.drawer-bottom-content {
  padding-bottom: max(16px, env(safe-area-inset-bottom));
}
```

---

## ✅ CHECKLIST DE VALIDATION

### Design System
- [ ] Tous les tokens CSS V4 appliqués dans `globals.css`
- [ ] Fonts Sora (headings) + Inter (body) configurées
- [ ] Accent turquoise (#0EA5A6) utilisé correctement
- [ ] Borders grises fines (1px) par défaut
- [ ] Shadows discrètes (pas de colored shadows)
- [ ] Radius cohérent (8px inputs, 12px cards)
- [ ] Pas de dégradés vifs (sauf glow radial ultra-léger)

### Composants
- [ ] Inputs avec checkmark animé quand valide
- [ ] Boutons noir mat (primaire) et turquoise (accent)
- [ ] Cards style V4 (border grise + shadow discrète)
- [ ] Progress bar fine et moderne (6px height)
- [ ] Badges avec style V4

### SmartCart
- [ ] Desktop : Sticky sidebar à droite (top: 96px)
- [ ] Mobile : FAB + Bottom sheet drawer
- [ ] Prix animé en temps réel (bounce)
- [ ] Badge "LIVE" avec pulse animation
- [ ] Progress bar dans fourchette min/max
- [ ] Items avec animation entry/exit fluide
- [ ] Badge "Prix transparent"
- [ ] Compteur d'options sur FAB mobile
- [ ] Savings highlight automatique
- [ ] Bouton retirer au hover (desktop)
- [ ] Scrollbar customisée

### Écrans
- [ ] Écran 1 : Entrée harmonisée (inputs V4 + progress)
- [ ] Écran 2 : Estimation style V4 (prix large + CTA)
- [ ] Écran 3 : Options + SmartCart fonctionnel
- [ ] Écran 4 : "Bravo!" sobre et premium
- [ ] Écran 5 : Résumé avec card budget sticky

### Animations
- [ ] FadeUp sur sections (400ms)
- [ ] Checkmarks animés (200ms scale)
- [ ] Prix change avec bounce (250ms)
- [ ] Hover states subtils (150ms)
- [ ] Transitions smoothes partout

### Responsive
- [ ] Mobile < 640px testé et fonctionnel
- [ ] Tablet 640-1023px testé
- [ ] Desktop >= 1024px testé
- [ ] Touch targets >= 44px partout
- [ ] Safe areas iOS gérées (notch)
- [ ] Drawer swipe fonctionnel
- [ ] FAB n'obstrue pas le contenu

### Back-office (CRITIQUE)
- [ ] ✅ Tous les endpoints API conservés
- [ ] ✅ Routes inchangées
- [ ] ✅ Logique validation conservée
- [ ] ✅ Calculs pricing intacts
- [ ] ✅ Redirections fonctionnelles
- [ ] ✅ Formulaire submit fonctionne
- [ ] ✅ Test parcours complet réussi

---

## 🎯 PRIORITÉS D'IMPLÉMENTATION

### Phase 1 : Foundation (P0) - 3h
1. Remplacer tous les tokens CSS par V4
2. Configurer fonts (Sora + Inter)
3. Créer composants base (Input, Button, Card V4)
4. Implémenter Progress bar V4

### Phase 2 : SmartCart (P0) - 4h
1. Créer SmartCart component (Desktop)
2. Créer version Mobile (FAB + Drawer)
3. Hook useSmartCart
4. Custom scrollbar CSS
5. Tests responsive

### Phase 3 : Écrans principaux (P1) - 5h
1. Écran 1 : Entrée du tunnel
2. Écran 2 : Estimation affichée
3. Écran 3 : Détails + Options + intégration SmartCart
4. Tests navigation entre écrans

### Phase 4 : Écrans finaux (P1) - 3h
1. Écran 4 : "Bravo!" confirmation
2. Écran 5 : Résumé estimation
3. Tests parcours complet

### Phase 5 : Polish (P2) - 2h
1. Animations finales
2. Micro-interactions
3. Optimisations responsive
4. Tests cross-browser

**Total estimé : ~17h de dev**

---

## 🚀 COMMANDES UTILES

```bash
# Installation dépendances
npm install framer-motion lucide-react clsx

# Dev local
npm run dev

# Build production
npm run build

# Test build
npm start

# Linter
npm run lint
```

---

## 📚 RÉFÉRENCES

**Design system source** : Homepage moverz.fr
- Tokens CSS : `app/globals.css`
- Charte graphique : `CHARTE-GRAPHIQUE-MOVERZ-QUICK.md`
- Components premium : `components/premium/`
- Sections : `components/sections/`

**Documentation externe** :
- Framer Motion : https://www.framer.com/motion/
- Lucide Icons : https://lucide.dev/
- Tailwind CSS : https://tailwindcss.com/

---

## ⚠️ NOTES IMPORTANTES

1. **Ne jamais casser les liens back-office** - Tester après chaque changement
2. **Animations courtes** - Max 300ms pour garder la sensation premium
3. **Mobile first** - Toujours tester sur mobile en premier
4. **Accessibilité** - Labels, focus visible, contraste AA minimum
5. **Performance** - Lazy load Framer Motion si possible

---

**GO ! 🚀**

Commence par Phase 1 (tokens CSS + composants base), puis Phase 2 (SmartCart), puis les écrans dans l'ordre. 

**Teste après chaque phase. Ne casse RIEN du back-office.**

---

*Document créé le 12 février 2026 pour la refonte V4 du tunnel devis.moverz.fr*
