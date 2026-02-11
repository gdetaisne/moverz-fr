# Plan de Migration - Design System 2026

## Phase 1: Fondations (Design Tokens) ✅

### Étape 1.1: Mise à jour Tailwind Config ✅
- [x] Intégrer nouvelle palette dans `tailwind.config.ts`
- [x] Définir les classes utilitaires custom
- [x] Supprimer anciennes couleurs brand

### Étape 1.2: Mise à jour globals.css ✅
- [x] Nouvelles CSS variables
- [x] Classes `.btn-primary`, `.btn-secondary`, `.btn-tertiary`
- [x] Classes `.card-default`, `.card-hoverable`
- [x] Classes `.pill-default`, `.pill-success`

---

## Phase 2: Composants Core

### Étape 2.1: Boutons 🔄
**Fichiers à modifier:**
- `components/Hero.tsx` → CTA principal
- `components/StickyCTA.tsx` → Bouton sticky
- `components/FinalCTA.tsx` → CTA final
- Tous les autres CTA

**Changements:**
- Warm Yellow pour CTA primaire
- Deep Teal pour secondaire
- Outline pour tertiaire
- Unifier libellés ("Obtenir mes devis")

**Code à remplacer:**

```tsx
// ❌ Avant
<button className="bg-brand-soft hover:bg-brand-soft/90 text-white ...">
  Voir mon estimation
</button>

// ✅ Après
<button className="btn-primary">
  Obtenir mes devis
</button>
```

### Étape 2.2: Cards
**Fichiers à modifier:**
- `components/WhatYouReceive.tsx`
- `components/RealStories.tsx`
- `components/FlowAndIA.tsx`
- `components/Testimonials.tsx`

**Changements:**
- Bordures subtiles (Pale Blue Gray)
- Ombre uniquement au hover
- Rayon uniforme (16px)
- Supprimer cards imbriquées

**Code à remplacer:**

```tsx
// ❌ Avant
<div className="bg-white rounded-xl border-2 border-blue-200 shadow-xl p-8">
  <div className="bg-gray-50 rounded-lg border border-gray-300 p-4">
    {/* Card imbriquée */}
  </div>
</div>

// ✅ Après
<div className="card-hoverable">
  <h3>Titre</h3>
  <p>Contenu direct, pas de sous-card</p>
</div>
```

### Étape 2.3: Pills/Badges
**Fichiers à modifier:**
- `components/Hero.tsx` (pills "Numéro masqué", etc.)
- `components/TrustSignals.tsx`

**Changements:**
- Style uniforme partout
- Pale Blue Gray background
- Même taille (14px text, padding uniforme)

**Code à remplacer:**

```tsx
// ❌ Avant (3 styles différents)
<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
  📞 Numéro masqué
</span>
<span className="bg-teal-50 text-teal-900 px-4 py-2 rounded-full text-sm">
  ✓ Vérifié
</span>
<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
  Info
</span>

// ✅ Après (1 seul style)
<span className="pill">📞 Numéro masqué</span>
<span className="pill-success">✓ Vérifié</span>
<span className="pill">🔒 Aucun appel</span>
```

---

## Phase 3: Sections

### Étape 3.1: Hero
**Fichier:** `components/Hero.tsx`

**Changements:**
1. CTA Warm Yellow (très contrasté)
2. Pills uniformes (pas 3 styles différents)
3. Formulaire: progress bar 2 étapes
4. Fond: gradient subtil (pas bleu partout)

**Avant/Après:**

```tsx
// ❌ Avant
<section className="bg-gradient-to-br from-teal-100 via-blue-50 to-white py-24">
  <button className="bg-brand-soft text-white opacity-70 ...">
    Voir mon estimation
  </button>
</section>

// ✅ Après
<section className="section-hero bg-hero">
  <button className="btn-primary">
    Obtenir mes devis
  </button>
</section>
```

### Étape 3.2: Section Dark (WhyMoverz)
**Fichier:** `components/WhyMoverz.tsx`

**Changements:**
1. Fond: Charcoal Teal `#16232B`
2. Texte blanc lisible
3. CTA Warm Yellow dedans
4. Simplifier sous-cards
5. Supprimer barre sombre parasite

**Avant/Après:**

```tsx
// ❌ Avant
<section className="bg-slate-900 py-24 border-t-8 border-slate-950">
  {/* Barre sombre parasite ↑ */}
  <div className="card">
    <div className="card">
      <div className="card">
        {/* 3 niveaux imbriqués */}
      </div>
    </div>
  </div>
</section>

// ✅ Après
<section className="section-dark">
  <div className="container">
    <h2 className="text-white">Vérifications Creditsafe</h2>
    <div className="card-on-dark">
      {/* 1 seul niveau */}
      <p>Contenu direct</p>
    </div>
    <button className="btn-primary mt-8">
      Obtenir mes devis
    </button>
  </div>
</section>
```

### Étape 3.3: Trust Signals
**Fichier:** `components/TrustSignals.tsx` ou nouveau composant

**Changements:**
1. Remonter juste après Hero
2. Bloc dense (rating + volume + témoignage featured)
3. Réduire whitespace (-30%)

**Nouveau composant suggéré:**

```tsx
// components/TrustBlock.tsx (nouveau)
export default function TrustBlock() {
  return (
    <section className="section-compact bg-white">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-brand-deepTeal">4.9</span>
            <div>
              <div className="flex">⭐⭐⭐⭐⭐</div>
              <p className="text-sm text-text-muted">Google Reviews</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-3xl font-bold text-brand-deepTeal">1000+</p>
            <p className="text-sm text-text-muted">Déménagements</p>
          </div>
          
          <div className="text-center">
            <p className="text-3xl font-bold text-brand-deepTeal">150+</p>
            <p className="text-sm text-text-muted">Déménageurs vérifiés</p>
          </div>
        </div>
        
        {/* Featured testimonial */}
        <div className="card-hoverable max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <img src="..." className="w-16 h-16 rounded-full" />
            <div>
              <div className="flex mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-lg italic mb-4">
                "Service exceptionnel, devis reçus en 48h, prix très compétitifs."
              </p>
              <p className="font-semibold">Marie L.</p>
              <p className="text-sm text-text-muted">Paris → Lyon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### Étape 3.4: Sticky CTA
**Fichier:** `components/StickyCTA.tsx`

**Changements:**
1. Ne plus masquer contenu
2. Version mini OU padding-bottom dynamique
3. Disparaît sur FAQ/footer

**Avant/Après:**

```tsx
// ❌ Avant
<div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl p-6 h-24 z-50">
  {/* Masque le contenu, pas de padding-bottom sur body */}
</div>

// ✅ Après (Option 1: Padding dynamique)
<div className="fixed bottom-0 left-0 right-0 bg-white shadow-strong p-4 z-50">
  <div className="container flex items-center justify-between">
    <span className="text-sm font-medium">Prêt à comparer ?</span>
    <button className="btn-primary">Obtenir mes devis</button>
  </div>
</div>

// Dans le layout ou composant parent
<style jsx global>{`
  body {
    padding-bottom: 80px;
  }
`}</style>

// ✅ Après (Option 2: Disparition auto)
<div 
  className={`fixed bottom-0 left-0 right-0 bg-white shadow-strong p-4 z-50 transition-transform ${
    isNearFooter ? 'translate-y-full' : 'translate-y-0'
  }`}
>
  ...
</div>
```

---

## Phase 4: Pages

### Étape 4.1: Home (`app/page.tsx`)

**Nouvel ordre:**

```tsx
export default function Home() {
  return (
    <main className="bg-white">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust Block (NOUVEAU, immédiat) */}
      <TrustBlock />

      {/* 3. Comment ça marche */}
      <FlowAndIA />

      {/* 4. Pourquoi c'est sûr (Section dark) */}
      <WhyMoverz />

      {/* 5. Ce que vous recevez (simplifié) */}
      <WhatYouReceive />

      {/* 6. Témoignages (resserré) */}
      <RealStories />

      {/* 7. Comment choisir */}
      <HowToChoose />

      {/* 8. FAQ */}
      <QuickFAQ />

      {/* 9. Pro Banner (déplacé, discret) */}
      <ProBanner />

      {/* 10. CTA final */}
      <FinalCTA />

      {/* Sticky CTA (avec fix) */}
      <StickyCTA />
    </main>
  );
}
```

### Étape 4.2: Autres pages
- Appliquer même design system
- Vérifier cohérence boutons/cards/colors

---

## Quick Wins (à faire en priorité) 🚀

### 🔥 Impact énorme, effort faible

#### 1. CTA Hero contrasté (30 min) ✅
**Fichier:** `components/Hero.tsx`

```tsx
// Chercher le bouton principal du formulaire
// Remplacer sa classe par: btn-primary
```

#### 2. Supprimer barre sombre (15 min)
**Fichier:** `components/WhyMoverz.tsx`

```tsx
// Chercher: border-t-8, border-t-4, etc.
// Supprimer complètement
```

#### 3. Fix Sticky CTA (1h)
**Fichier:** `components/StickyCTA.tsx`

```tsx
// Ajouter padding-bottom dynamique sur body
// OU faire disparaître sur FAQ/footer
```

#### 4. Pills uniformes (30 min)
**Fichier:** `components/Hero.tsx`

```tsx
// Trouver les 3 pills (Numéro masqué, Aucun appel, Vérifié)
// Appliquer classe "pill" ou "pill-success" uniformément
```

#### 5. Whitespace sections (1h)
**Fichiers:** `components/RealStories.tsx`, `components/WhatYouReceive.tsx`

```tsx
// Chercher: py-24, py-32
// Remplacer par: section (py-12 md:py-16)
```

#### 6. ProBanner déplacé (15 min)
**Fichier:** `app/page.tsx`

```tsx
// Déplacer <ProBanner /> juste avant <FinalCTA />
```

#### 7. Unifier libellés CTA (30 min)
**Tous les fichiers avec CTA**

```bash
# Rechercher dans le projet:
grep -r "Voir mon estimation" components/
grep -r "Obtenir un devis" components/
grep -r "Demander des devis" components/

# Remplacer par: "Obtenir mes devis" (uniforme)
```

---

## Checklist Validation ✅

### Design Tokens
- [x] Palette 2026 dans Tailwind
- [x] Variables CSS à jour
- [x] Classes utilitaires créées

### Composants
- [ ] 3 variants boutons (Primary/Secondary/Tertiary)
- [ ] 1 style de card (bordure subtile, hover shadow)
- [ ] 1 style de pill (uniforme partout)

### Pages
- [ ] Home: nouvel ordre + Quick Wins
- [ ] Cohérence sur toutes les pages

### Tests
- [ ] Contraste AAA (WCAG) sur CTA
- [ ] Sticky CTA ne masque plus contenu
- [ ] Aucune barre sombre parasite
- [ ] Pills uniformes
- [ ] Libellés CTA cohérents

---

## Outils pour la migration

### Rechercher les anciens styles

```bash
# Boutons avec anciennes couleurs
grep -r "bg-brand-soft" components/
grep -r "bg-teal-" components/
grep -r "bg-blue-" components/

# Cards avec bordures multiples
grep -r "border-2 border-blue" components/
grep -r "shadow-xl" components/

# Pills avec styles variés
grep -r "rounded-full" components/ | grep "bg-"

# Espacement excessif
grep -r "py-24" components/
grep -r "py-32" components/
```

### Remplacer globalement (avec précaution)

```bash
# Unifier libellés CTA (vérifier manuellement après)
find components/ -type f -name "*.tsx" -exec sed -i '' 's/Voir mon estimation/Obtenir mes devis/g' {} +
find components/ -type f -name "*.tsx" -exec sed -i '' 's/Obtenir un devis/Obtenir mes devis/g' {} +
```

---

## Prochaines étapes

1. ✅ Appliquer Quick Wins (priorité 1)
2. Créer nouveau composant `TrustBlock.tsx`
3. Migrer composants existants un par un
4. Tester sur toutes les pages
5. Valider contraste et accessibilité
6. Déployer progressivement

---

**Note:** Cette migration doit être faite progressivement, composant par composant, pour éviter de casser l'existant. Tester après chaque modification majeure.
