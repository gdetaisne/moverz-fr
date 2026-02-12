# 🎨 Charte Graphique Moverz - Quick Reference

> Version rapide pour développeurs et designers

---

## 🎨 Couleurs (Copier-Coller)

```tsx
// Accent (Turquoise signature)
style={{ color: "var(--color-accent)" }}           // #0EA5A6
style={{ background: "var(--color-accent)" }}

// Textes
style={{ color: "var(--color-text)" }}             // #0B0F19 (noir)
style={{ color: "var(--color-text-secondary)" }}   // #6B7280 (gris)
style={{ color: "var(--color-text-muted)" }}       // #9CA3AF (gris clair)

// Backgrounds
style={{ background: "var(--color-bg)" }}          // #FAFAFA (fond)
style={{ background: "var(--color-surface)" }}     // #FFFFFF (cards)
style={{ background: "var(--color-bg-dark)" }}     // #0B0F14 (dark)

// Bordures
style={{ borderColor: "var(--color-border)" }}     // #E5E7EB
style={{ borderColor: "var(--color-border-light)" }} // #F3F4F6

// Sémantique
style={{ color: "var(--color-success)" }}          // #16A34A (vert)
style={{ color: "var(--color-danger)" }}           // #DC2626 (rouge)
style={{ color: "var(--color-warning)" }}          // #F59E0B (orange)
```

---

## ✍️ Fonts

```tsx
// Titres (H1, H2, H3)
className="font-heading"  // Sora (500, 600, 700)

// Corps de texte
className="font-sans"     // Inter (400, 500, 600)
```

---

## 📐 Radius & Shadows

```tsx
// Radius
className="rounded-[var(--radius-sm)]"   // 8px (buttons)
className="rounded-[var(--radius-md)]"   // 12px (cards)

// Shadows
style={{ boxShadow: "var(--shadow-sm)" }}  // Léger
style={{ boxShadow: "var(--shadow-md)" }}  // Normal
style={{ boxShadow: "var(--shadow-lg)" }}  // Fort

// Shadow accent (CTAs)
style={{ boxShadow: "0 4px 16px rgba(14,165,166,0.3)" }}
```

---

## 🔘 Templates Components

### Button Primary
```tsx
<a
  href="#"
  className="inline-flex items-center gap-2 rounded-xl px-8 py-4 
             text-base font-semibold text-white hover:opacity-90 
             active:scale-[0.98] transition-all"
  style={{ background: "var(--color-accent)" }}
>
  Texte du bouton
</a>
```

### Card
```tsx
<div 
  className="rounded-2xl p-6 shadow-sm hover:shadow-md 
             hover:-translate-y-1 transition-all"
  style={{ 
    background: "var(--color-surface)", 
    border: "1px solid var(--color-border)" 
  }}
>
  Contenu
</div>
```

### Badge
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
  Badge
</span>
```

### Pill (Trust signal)
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
  <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
    Texte
  </span>
</div>
```

### Titre H1 (Hero)
```tsx
<h1 
  className="text-4xl md:text-6xl font-bold font-heading leading-[1.1]"
  style={{ color: "var(--color-text)" }}
>
  Vous déménagez.{" "}
  <span style={{ color: "var(--color-accent)" }}>On compare.</span>
</h1>
```

### Input
```tsx
<input
  type="text"
  className="w-full rounded-xl border-2 px-4 py-3 text-sm 
             focus:outline-none focus:ring-4 transition-all"
  style={{
    background: "var(--color-surface)",
    color: "var(--color-text)",
    borderColor: "var(--color-border)",
  }}
  placeholder="Placeholder"
/>
```

---

## 🎯 Sections

### Hero Light
```tsx
<section 
  className="relative pt-16 pb-20 md:pt-20 md:pb-28" 
  style={{ background: "var(--color-bg)" }}
>
  {/* Glow */}
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

### Hero Dark
```tsx
<section 
  className="relative overflow-hidden text-white py-20 md:py-32" 
  style={{ background: "var(--color-bg-dark)" }}
>
  {/* Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div 
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

## ⚡ Transitions

```tsx
// Hover standard
className="transition-all duration-300"

// Hover + lift
className="hover:-translate-y-1 hover:shadow-md transition-all"

// Click feedback
className="active:scale-[0.98] transition-all"

// CTA emphasis
className="hover:scale-[1.02] active:scale-[0.98] transition-all"
```

---

## 📱 Responsive

```tsx
// Mobile-first toujours!
className="text-4xl md:text-6xl"      // Titre
className="px-4 sm:px-6 lg:px-8"      // Container
className="grid md:grid-cols-2"       // Grid 2 colonnes
className="flex-col md:flex-row"      // Direction
```

**Breakpoints:**
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1120px
- 2xl: 1200px (max container)

---

## 🚫 À éviter

```tsx
// ❌ Couleurs hardcodées
className="text-[#0EA5A6] bg-[#FAFAFA]"

// ❌ Font sans classe
<h1>Titre</h1>

// ❌ Radius random
className="rounded-lg rounded-3xl"

// ❌ Shadow custom
className="shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
```

```tsx
// ✅ Variables CSS
style={{ color: "var(--color-accent)" }}

// ✅ Font heading
<h1 className="font-heading">Titre</h1>

// ✅ Radius système
className="rounded-[var(--radius-sm)]"

// ✅ Shadow système
style={{ boxShadow: "var(--shadow-md)" }}
```

---

## 📦 Package complet

**Installation:**
```bash
# Fonts chargées automatiquement
# Sora (500,600,700) + Inter (400,500,600)

# Variables CSS dans globals.css
# Déjà configuré ✅
```

**Import dans components:**
```tsx
// Les variables sont globales, rien à importer!
// Utilisez directement var(--color-accent) etc.
```

---

**🔗 Liens utiles:**
- Charte complète: `/CHARTE-GRAPHIQUE-MOVERZ.md`
- Design tokens: `/app/globals.css`
- Config Tailwind: `/tailwind.config.ts`

---

*Moverz V4 Radical © 2026*
