# 🎨 Charte Graphique Moverz V4

**Version:** V4 Radical (2026)  
**Date:** Février 2026  
**Statut:** ✅ Appliqué à 100% du site

---

## 🎯 **Identité Visuelle**

### Notre signature
Moverz est le **comparateur anti-arnaque** qui compare des entreprises, pas seulement des prix.

Notre design reflète:
- ✨ **Modernité** - Design system 2026, épuré et premium
- 🔒 **Confiance** - Transparence, vérifications Creditsafe
- ⚡ **Efficacité** - 3 min pour comparer, zéro démarchage

---

## 🎨 **Couleurs**

### Palette principale

#### **Turquoise (Accent)**
```
Couleur signature: #0EA5A6
Usage: CTAs, liens, badges, highlights
CSS Variable: var(--color-accent)
```
**Notre turquoise est unique et reconnaissable.** Utilisé pour tous les éléments interactifs.

#### **Noir profond (Texte principal)**
```
Couleur: #0B0F19
Usage: Titres, textes principaux
CSS Variable: var(--color-text)
```

#### **Gris moyen (Texte secondaire)**
```
Couleur: #6B7280
Usage: Sous-titres, descriptions, légendes
CSS Variable: var(--color-text-secondary)
```

#### **Gris clair (Texte muté)**
```
Couleur: #9CA3AF
Usage: Placeholders, textes tertiaires
CSS Variable: var(--color-text-muted)
```

### Backgrounds

#### **Fond clair**
```
Couleur: #FAFAFA
Usage: Background principal des pages
CSS Variable: var(--color-bg)
```

#### **Surface (Blanc)**
```
Couleur: #FFFFFF
Usage: Cards, formulaires, zones de contenu
CSS Variable: var(--color-surface)
```

#### **Fond dark**
```
Couleur: #0B0F14
Usage: Heros dark, sections contraste
CSS Variable: var(--color-bg-dark)
```

### Bordures

```
Bordure standard: #E5E7EB → var(--color-border)
Bordure légère: #F3F4F6 → var(--color-border-light)
```

### Couleurs sémantiques

```
✅ Succès: #16A34A → var(--color-success)
❌ Danger: #DC2626 → var(--color-danger)
⚠️ Warning: #F59E0B → var(--color-warning)
```

---

## ✍️ **Typographie**

### Fonts

#### **Sora (Titres)**
```
Font Family: Sora, system-ui, sans-serif
Poids: 500, 600, 700
Usage: Titres H1, H2, H3, logo
CSS: font-heading ou var(--font-sora)
Display: swap (performance)
```

**Pourquoi Sora?**  
Moderne, géométrique, excellent en grandes tailles. Parfait pour affirmer notre identité premium.

#### **Inter (Corps de texte)**
```
Font Family: Inter, system-ui, sans-serif
Poids: 400, 500, 600
Usage: Paragraphes, UI, formulaires
CSS: font-sans ou var(--font-inter)
Display: swap (performance)
```

**Pourquoi Inter?**  
Lisibilité exceptionnelle, optimisé pour le web, tailles petites et moyennes.

### Hiérarchie typographique

```
H1 (Hero): 64px / 4rem (font-heading, bold)
H2 (Sections): 44px / 2.75rem (font-heading, bold)
H3 (Sous-sections): 28px / 1.75rem (font-heading, semibold)
Body Large: 20px / 1.25rem (font-sans, normal)
Body: 16px / 1rem (font-sans, normal)
Body Small: 14px / 0.875rem (font-sans, normal)
Caption: 13px / 0.8125rem (font-sans, medium)
```

---

## 📐 **Espacements & Radius**

### Border Radius

```
Petit (buttons): 8px → var(--radius-sm)
Moyen (cards): 12px → var(--radius-md)
Input: 8px → var(--radius-input)
```

**Philosophie:** Arrondis subtils, modernes sans être trop "bubbly".

### Shadows

```
Extra Small: 0 1px 2px rgba(0,0,0,0.04) → var(--shadow-xs)
Small: 0 2px 8px rgba(0,0,0,0.06) → var(--shadow-sm)
Medium: 0 4px 16px rgba(0,0,0,0.08) → var(--shadow-md)
Large: 0 8px 32px rgba(0,0,0,0.12) → var(--shadow-lg)
```

**Shadow turquoise (accent):**
```css
box-shadow: 0 4px 16px rgba(14,165,166,0.3);
```
Utilisée pour les CTAs principaux.

### Espacements (Container)

```
Mobile: 1.25rem (20px)
Tablet: 1.5rem (24px)
Desktop: 2rem (32px)
Max-width: 1200px
```

---

## 🔘 **Composants**

### Buttons

#### **Primary (Accent)**
```tsx
className="rounded-xl px-8 py-4 text-base font-semibold text-white 
           hover:opacity-90 active:scale-[0.98] transition-all"
style={{ background: "var(--color-accent)" }}
```

#### **Secondary (Dark)**
```tsx
className="rounded-xl px-8 py-4 text-base font-semibold text-white 
           hover:opacity-90 active:scale-[0.98] transition-all"
style={{ background: "var(--color-text)" }}
```

#### **Ghost**
```tsx
className="rounded-xl px-8 py-4 text-base font-semibold 
           border transition-all"
style={{ 
  color: "var(--color-text)", 
  borderColor: "var(--color-border)" 
}}
```

### Cards

```tsx
<div 
  className="rounded-2xl p-6 shadow-sm transition-all 
             hover:shadow-md hover:-translate-y-1"
  style={{ 
    background: "var(--color-surface)", 
    border: "1px solid var(--color-border)" 
  }}
>
  {/* Contenu */}
</div>
```

### Badges

```tsx
<span 
  className="inline-flex items-center gap-2 rounded-full 
             px-4 py-2 text-sm font-semibold"
  style={{ 
    background: "rgba(14,165,166,0.1)", 
    border: "1px solid rgba(14,165,166,0.2)",
    color: "var(--color-text)" 
  }}
>
  <span className="h-2 w-2 rounded-full" 
        style={{ background: "var(--color-accent)" }} />
  Badge text
</span>
```

### Pills (Trust signals)

```tsx
<div 
  className="flex items-center gap-2 px-4 py-2.5 rounded-full 
             backdrop-blur-sm transition-all"
  style={{ 
    background: "rgba(255,255,255,0.8)", 
    border: "1px solid var(--color-border)" 
  }}
>
  <Icon className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
  <span style={{ color: "var(--color-text)" }}>Texte</span>
</div>
```

---

## 🎯 **Sections & Layouts**

### Hero (Homepage style)

```tsx
<section 
  className="relative pt-16 pb-20 md:pt-20 md:pb-28" 
  style={{ background: "var(--color-bg)" }}
>
  {/* Glow subtil */}
  <div 
    className="absolute left-1/2 top-0 -translate-x-1/2 
               h-[500px] w-[800px] rounded-full blur-[120px] 
               opacity-30 pointer-events-none"
    style={{ 
      background: "radial-gradient(circle, rgba(14,165,166,0.2), transparent 70%)" 
    }}
  />
  
  {/* Contenu */}
</section>
```

### Hero Dark (Pages internes)

```tsx
<section 
  className="relative overflow-hidden text-white py-20 md:py-32" 
  style={{ background: "var(--color-bg-dark)" }}
>
  {/* Pattern subtil */}
  <div className="absolute inset-0 opacity-5">
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }}
    />
  </div>
  
  {/* Contenu */}
</section>
```

---

## 📱 **Responsive**

### Breakpoints

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1120px
2xl: 1200px (max-width container)
```

### Mobile-first

Toujours coder **mobile d'abord**, puis ajouter les breakpoints.

```tsx
// ✅ Bon
<h1 className="text-4xl md:text-6xl">

// ❌ Mauvais
<h1 className="text-6xl md:text-4xl">
```

---

## ⚡ **Animations & Transitions**

### Transitions standards

```css
transition-all duration-200  /* Hover subtle */
transition-all duration-300  /* Hover normal */
transition-all duration-500  /* Transitions complexes */
```

### Hover states

```tsx
hover:opacity-90          /* Buttons */
hover:shadow-md           /* Cards */
hover:-translate-y-1      /* Cards lift */
hover:scale-[1.02]        /* CTAs emphasis */
active:scale-[0.98]       /* Click feedback */
```

### Animation pulse (badge)

```tsx
<span className="animate-ping absolute inline-flex h-full w-full 
                 rounded-full opacity-75" 
      style={{ background: "var(--color-accent)" }} />
<span className="relative inline-flex rounded-full h-2 w-2" 
      style={{ background: "var(--color-accent)" }} />
```

---

## 🎨 **Exemples de compositions**

### CTA Section classique

```tsx
<section className="py-24 md:py-32" style={{ background: "var(--color-bg)" }}>
  <div className="container max-w-4xl text-center space-y-8">
    <div 
      className="inline-flex items-center gap-2 rounded-full 
                 px-5 py-2.5 text-sm font-semibold"
      style={{ 
        background: "rgba(14,165,166,0.1)", 
        color: "var(--color-text)" 
      }}
    >
      <span className="h-2 w-2 rounded-full" 
            style={{ background: "var(--color-accent)" }} />
      Badge contexte
    </div>
    
    <h2 className="text-4xl md:text-6xl font-bold font-heading" 
        style={{ color: "var(--color-text)" }}>
      Titre impactant
    </h2>
    
    <p className="text-xl max-w-2xl mx-auto" 
       style={{ color: "var(--color-text-secondary)" }}>
      Description claire et concise
    </p>
    
    <a 
      href="#" 
      className="inline-flex items-center gap-2 rounded-xl 
                 px-8 py-4 text-base font-semibold text-white 
                 hover:scale-[1.03] active:scale-[0.98] 
                 transition-all"
      style={{ background: "var(--color-accent)" }}
    >
      Action principale
      <svg className="w-5 h-5" /* ... */ />
    </a>
  </div>
</section>
```

---

## 🚫 **Ce qu'il ne faut PAS faire**

### ❌ Couleurs hardcodées
```tsx
// ❌ Mauvais
className="text-[#0EA5A6] bg-[#FAFAFA]"

// ✅ Bon
style={{ color: "var(--color-accent)", background: "var(--color-bg)" }}
```

### ❌ Mélanger les fonts
```tsx
// ❌ Mauvais - Arial, Helvetica
<h1 className="font-sans">

// ✅ Bon - Sora pour les titres
<h1 className="font-heading">
```

### ❌ Radius incohérents
```tsx
// ❌ Mauvais
className="rounded-lg" // 8px random
className="rounded-3xl" // 24px random

// ✅ Bon
className="rounded-[var(--radius-sm)]"  // 8px système
className="rounded-[var(--radius-md)]"  // 12px système
```

### ❌ Shadows arbitraires
```tsx
// ❌ Mauvais
className="shadow-[0_10px_25px_rgba(0,0,0,0.15)]"

// ✅ Bon
style={{ boxShadow: "var(--shadow-md)" }}
```

---

## ✅ **Checklist Design**

Avant de publier un composant:

- [ ] Variables CSS utilisées (pas de couleurs hardcodées)
- [ ] Font Sora sur les titres (font-heading)
- [ ] Font Inter sur le corps de texte (font-sans)
- [ ] Radius cohérents (8px ou 12px)
- [ ] Shadows du design system
- [ ] Transitions smooth (200-300ms)
- [ ] Mobile-first responsive
- [ ] Hover states définis
- [ ] Accent turquoise pour CTAs
- [ ] Espacement cohérent (multiples de 4px)

---

## 📞 **Contact Design**

**Questions sur la charte?**  
→ Lucie (Co-founder) - lucie@moverz.fr  
→ WhatsApp Pro: +66 9 52 82 40 35

---

## 📚 **Ressources**

### Fichiers clés
```
/app/globals.css          → Design tokens V4
/tailwind.config.ts       → Configuration Tailwind
/app/layout.tsx           → Import fonts (Sora + Inter)
```

### Scripts utiles
```bash
# Vérifier les couleurs hardcodées restantes
grep -r "text-\[#\|bg-\[#" components/ app/

# Vérifier les fonts manquantes
grep -r "text-4xl.*font-bold" components/ | grep -v "font-heading"
```

---

**Version:** V4 Radical  
**Dernière mise à jour:** Février 2026  
**Statut:** ✅ 100% appliqué sur moverz.fr

---

*Fait avec ❤️ par l'équipe Moverz*
