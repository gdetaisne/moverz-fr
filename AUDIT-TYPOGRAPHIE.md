# 🎨 AUDIT TYPOGRAPHIE - Moverz Design System

**Date**: 24 février 2026  
**Objectif**: Harmoniser toutes les tailles de texte du site

---

## 📊 SITUATION ACTUELLE (Sections V4)

### Fréquence d'utilisation dans `/components/sections/`

```
text-xs    : 31 occurrences
text-sm    : 31 occurrences
text-base  : 9 occurrences
text-lg    : 7 occurrences
text-xl    : 2 occurrences
text-2xl   : 1 occurrence
text-3xl   : 3 occurrences
text-4xl   : 2 occurrences
text-5xl   : 1 occurrence
text-6xl   : 1 occurrence
```

---

## 🎯 DESIGN SYSTEM PROPOSÉ

### **Hiérarchie Typographique**

#### **1. TITRES (Headings)**

```tsx
// H1 - Hero principal
className="font-heading text-[clamp(32px,7vw,56px)] font-bold tracking-[-0.02em] leading-[1.1]"

// H1 - Hero alternatif
className="font-heading text-[clamp(28px,6vw,54px)] font-bold tracking-[-0.02em] leading-[1.1]"

// H2 - Titres de sections
className="font-heading text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.02em] leading-[1.1]"

// H3 - Sous-titres
className="font-heading text-xl md:text-2xl font-bold tracking-[-0.01em]"

// H4 - Petits titres
className="text-base md:text-lg font-semibold"
```

#### **2. CORPS DE TEXTE (Body)**

```tsx
// Paragraphe principal
className="text-base md:text-lg leading-relaxed"   // 16px → 18px

// Paragraphe standard
className="text-base leading-relaxed"              // 16px

// Texte secondaire
className="text-sm leading-relaxed"                // 14px

// Small text
className="text-xs"                                // 12px
```

#### **3. COMPOSANTS UI**

```tsx
// Boutons principaux
className="text-base font-semibold"                // 16px

// Boutons secondaires
className="text-sm font-semibold"                  // 14px

// Badges/Pills
className="text-xs font-medium"                    // 12px

// Labels de formulaire
className="text-sm font-medium"                    // 14px

// Helper text / captions
className="text-xs"                                // 12px
```

---

## ⚠️ INCOHÉRENCES DÉTECTÉES

### **1. Paragraphes de description**

**Incohérent:**
- Certains utilisent `text-base` (16px)
- D'autres utilisent `text-lg` (18px)
- Quelques-uns utilisent `text-base md:text-lg`

**Recommandation:** Standardiser sur `text-base md:text-lg` pour les paragraphes importants

---

### **2. Labels et small text**

**Incohérent:**
- Mélange de `text-xs` (12px) et `text-sm` (14px)
- Parfois `text-[10px]` (trop petit!)

**Recommandation:**
- Labels: `text-sm` (14px)
- Captions/helper: `text-xs` (12px)
- **ÉVITER** les tailles custom en dessous de 12px

---

### **3. Stepper/Timeline text**

**Incohérent:**
- ComparableQuotesMockScrolly: `text-base`
- ComparableQuotesMock: `text-sm`

**Recommandation:** Standardiser sur `text-base` pour plus de lisibilité

---

### **4. Boutons**

**Incohérent:**
- Certains CTAs: `text-base`
- D'autres CTAs: `text-sm`
- Petits boutons: `text-xs`

**Recommandation:**
- CTA principal: `text-base font-semibold` (16px)
- CTA secondaire: `text-sm font-semibold` (14px)
- Boutons icônes/petits: `text-xs font-semibold` (12px)

---

## 📋 PLAN D'ACTION

### **Phase 1: Sections V4 principales** ✅ TERMINÉ
1. [x] Harmoniser tous les H2 → `text-[clamp(28px,5vw,48px)]`
2. [x] Harmoniser paragraphes → `text-base md:text-lg`
3. [x] Harmoniser stepper → `text-base`
4. [x] Supprimer tous les `text-[10px]` → minimum `text-xs`

### **Phase 2: Composants UI** ✅ TERMINÉ
5. [x] Standardiser boutons principaux → `text-base`
6. [x] Labels déjà harmonisés → `text-sm` ou `text-xs` selon contexte
7. [x] Badges déjà harmonisés → `text-xs`

### **Phase 3: Templates SEO** ⏭️ À faire plus tard
8. [ ] Vérifier cohérence pages quartiers/corridors (utilise système séparé cohérent)
9. [ ] Vérifier cohérence pages blog

---

## ✅ CORRECTIONS APPLIQUÉES

### **Fichiers modifiés:**

1. **ComparableQuotesMockScrolly.tsx**
   - ✅ Paragraphes: `text-base` → `text-base md:text-lg`
   - ✅ Stepper: Déjà `text-base` ✓
   - ✅ Tous les `text-[10px]` → `text-xs`

2. **ComparableQuotesMock.tsx**
   - ✅ Paragraphes: `text-base` → `text-base md:text-lg`
   - ✅ Stepper: `text-sm` → `text-base`
   - ✅ `text-[10px]` → `text-xs`

3. **FinalCTAV4.tsx**
   - ✅ Bouton CTA: `text-sm` → `text-base`
   - ✅ Helper text: `text-[13px]` → `text-xs`

4. **HeroV4TwoColumn.tsx**
   - ✅ Tous les `text-[10px]` → `text-xs` (mockup téléphone)

5. **CreditsafeChapter.tsx**
   - ✅ Tous les `text-[10px]` → `text-xs` (badges et labels)

6. **FAQV4.tsx**
   - ✅ Titre: `text-[clamp(24px,5vw,44px)]` → `text-[clamp(28px,5vw,48px)]` (déjà fait)

7. **tailwind.config.ts**
   - ✅ Ajout des couleurs `v4-*` pour Tailwind

---

## 🎨 VARIABLES CSS RECOMMANDÉES

Ajouter à `globals.css`:

```css
:root {
  /* Typography Scale */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
}
```

---

## 📚 DESIGN SYSTEM FINAL - GUIDE D'UTILISATION

### **Titres (Headings)**

```tsx
// Hero H1 - Page d'accueil principale
<h1 className="font-heading text-[clamp(32px,7vw,56px)] font-bold tracking-[-0.02em] leading-[1.1]">
  Votre titre hero
</h1>

// Hero H1 - Alternatif
<h1 className="font-heading text-[clamp(28px,6vw,54px)] font-bold tracking-[-0.02em] leading-[1.1]">
  Votre titre hero
</h1>

// H2 - Titre de section (STANDARD)
<h2 className="font-heading text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.02em] leading-[1.1]">
  Votre titre de section
</h2>

// H3 - Sous-titre
<h3 className="font-heading text-xl md:text-2xl font-bold tracking-[-0.01em]">
  Votre sous-titre
</h3>
```

---

### **Paragraphes**

```tsx
// Paragraphe important (sous les titres de section)
<p className="text-base md:text-lg leading-relaxed" 
   style={{ color: "var(--color-text-secondary)" }}>
  Votre texte principal
</p>

// Paragraphe standard / Bullet points
<p className="text-base leading-relaxed" 
   style={{ color: "var(--color-text-secondary)" }}>
  Votre texte
</p>

// Texte secondaire / Stepper
<span className="text-base leading-relaxed">
  Votre texte de step
</span>
```

---

### **Small Text**

```tsx
// Label de formulaire
<label className="text-sm font-medium" 
       style={{ color: "var(--color-text)" }}>
  Nom du champ
</label>

// Helper text / Caption / Muted
<p className="text-xs" 
   style={{ color: "var(--color-text-muted)" }}>
  Information complémentaire
</p>

// Badge / Pill
<span className="text-xs font-medium px-3 py-1 rounded-full"
      style={{ background: "rgba(14,165,166,0.08)", color: "var(--color-accent)" }}>
  Label
</span>
```

---

### **Boutons**

```tsx
// CTA Principal (Hero, Final CTA)
<a className="text-base font-semibold px-6 py-4 rounded-xl"
   style={{ background: "var(--color-accent)", color: "white" }}>
  Obtenir mes devis
</a>

// Bouton secondaire
<button className="text-sm font-semibold px-5 py-3 rounded-lg">
  Action secondaire
</button>

// Petit bouton / Bouton dans mockup
<button className="text-xs font-semibold px-4 py-2 rounded-lg">
  Petite action
</button>
```

---

## 🚨 RÈGLES À NE JAMAIS ENFREINDRE

1. ❌ **JAMAIS** utiliser de taille en dessous de `text-xs` (12px)
2. ❌ **JAMAIS** utiliser `text-[10px]`, `text-[11px]`, etc.
3. ✅ **TOUJOURS** utiliser les classes Tailwind standard
4. ✅ **TOUJOURS** utiliser `leading-relaxed` pour les paragraphes
5. ✅ **TOUJOURS** utiliser `font-heading` pour les titres
6. ✅ **TOUJOURS** utiliser les variables CSS pour les couleurs

---

## 📊 RÉSUMÉ DES CHANGEMENTS

- **7 fichiers** modifiés dans `/components/sections/`
- **15+ occurrences** de `text-[10px]` supprimées
- **4 paragraphes** harmonisés vers responsive
- **2 steppers** harmonisés
- **2 boutons** CTA harmonisés
- **1 titre** H2 FAQ harmonisé

**Résultat:** Design system 100% cohérent pour les sections V4 principales ! 🎉

