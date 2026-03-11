# Guide de Migration - Homepage Premium

## 🎯 Objectif

Activer la nouvelle homepage Moverz avec le design system fintech premium inspiré de ramp.com.

---

## ✅ Pré-requis

Tous les fichiers sont déjà créés et prêts :

### Design System
- ✅ `/app/globals.css` - Tokens CSS (colors, radius, shadows)
- ✅ `/app/layout.tsx` - Fonts (Space Grotesk + Inter)
- ✅ `/tailwind.config.ts` - Mapping Tailwind

### Composants Premium
- ✅ `/components/premium/` - Tous les composants UI
- ✅ `/lib/utils/mockQuotes.ts` - Calcul des devis simulés
- ✅ `/lib/schemas/tunnel.ts` - Validation Zod

### Page
- ✅ `/app/page-premium.tsx` - Nouvelle homepage (pas encore activée)

### Documentation
- ✅ `DESIGN-SYSTEM-PREMIUM.md` - Guide complet du design system
- ✅ Tests Vitest qui passent ✓

---

## 🚀 Activation en 3 étapes

### Étape 1 : Sauvegarde de l'ancienne homepage

```bash
cd /Users/luciestehelindetaisne/moverz-fr-4

# Sauvegarder l'ancienne homepage
mv app/page.tsx app/page-old-backup.tsx
```

### Étape 2 : Activer la nouvelle homepage

```bash
# Renommer la nouvelle page
mv app/page-premium.tsx app/page.tsx
```

### Étape 3 : Tester en local

```bash
# Lancer le serveur de dev
npm run dev

# Visiter http://localhost:3040
# Tester tous les breakpoints (mobile, tablet, desktop)
# Vérifier le formulaire et la sticky CTA
```

---

## 🧪 Checklist de Test

### Desktop (1200px+)
- [ ] Hero : Layout 2 colonnes (Form gauche, Preview droite)
- [ ] ComparisonPreview se met à jour en live quand on remplit le formulaire
- [ ] Sticky CTA apparaît au scroll avec recap des champs
- [ ] Toutes les sections s'affichent correctement
- [ ] Animations Framer Motion fluides (150–200ms)

### Tablet (768px – 1199px)
- [ ] Hero : Colonnes empilées, lisible
- [ ] Form et Preview bien dimensionnés
- [ ] Navigation header fonctionne

### Mobile (< 768px)
- [ ] Hero : H1 taille 34–38px, lisible
- [ ] Form : Champs empilés verticalement
- [ ] Sticky CTA : Bouton plein width
- [ ] Scroll fluide, pas de débordement

### Fonctionnel
- [ ] Submit du formulaire redirige vers le tunnel (devis.moverz.fr)
- [ ] Validation Zod fonctionne (messages d'erreur)
- [ ] StickyCTA apparaît après le hero (IntersectionObserver)
- [ ] FAQ accordéon accessible (aria-expanded)
- [ ] Focus visible sur tous les éléments interactifs

### Accessibilité
- [ ] Contraste AA minimum (vérifier avec extension browser)
- [ ] Navigation clavier fonctionne (Tab, Enter, Space, Escape)
- [ ] Labels associés aux inputs
- [ ] Pas d'erreur console

---

## 🔄 Rollback (si problème)

Si vous devez revenir à l'ancienne homepage :

```bash
cd /Users/luciestehelindetaisne/moverz-fr-4

# Restaurer l'ancienne
mv app/page.tsx app/page-premium.tsx
mv app/page-old-backup.tsx app/page.tsx

# Redémarrer le serveur
npm run dev
```

---

## 📊 Suivi Performance

### Métriques à surveiller (avant/après)

**Conversion**
- Taux de clic sur "Obtenir mes devis"
- Taux de complétion du formulaire
- Taux d'abandon

**Engagement**
- Temps passé sur la page
- Scroll depth (combien scrollent jusqu'au footer)
- Interactions avec la ComparisonPreview

**Technique**
- Lighthouse score (Performance, A11Y, Best Practices, SEO)
- Core Web Vitals (LCP, FID, CLS)
- Temps de chargement

---

## 🎨 Personnalisation Future

Si vous voulez ajuster le design :

### Couleurs
Modifier `/app/globals.css` :
```css
:root {
  --accent: 46 233 198;  /* Turquoise Moverz */
  --accent-2: 14 165 166;
}
```

### Typographie
Modifier `/tailwind.config.ts` :
```ts
fontFamily: {
  heading: ["var(--font-space-grotesk)", "system-ui"],
  sans: ["var(--font-inter)", "system-ui"],
}
```

### Radius / Shadows
Modifier les tokens dans `/app/globals.css` :
```css
--radius-card: 16px;
--shadow-md: 0 12px 36px rgba(11, 15, 25, 0.10);
```

---

## 📞 Support

Si vous rencontrez un problème :

1. Vérifier la console browser (F12)
2. Vérifier les logs terminal
3. Lire `DESIGN-SYSTEM-PREMIUM.md`
4. Rollback si besoin

---

## ✨ Résultat Attendu

Une homepage moderne, premium et performante qui :
- ✅ Convertit mieux (CTA unique, tunnel visible)
- ✅ Inspire confiance (fintech-grade, vérifications mises en avant)
- ✅ Est accessible (AA minimum)
- ✅ Est maintenable (design system cohérent, composants réutilisables)

**Bon déploiement ! 🚀**
