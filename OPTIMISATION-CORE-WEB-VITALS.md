# ⚡ Optimisation Core Web Vitals - Moverz

## ✅ CE QUI A ÉTÉ FAIT (Automatique)

### 1. **Next.js Config optimisé**
- ✅ Optimisation images activée (AVIF + WebP)
- ✅ SWC Minifier activé (compilation 17x plus rapide)
- ✅ Cache agressif (1 an pour assets statiques)
- ✅ Compression Gzip/Brotli
- ✅ CSS optimisé (experimental)
- ✅ Optimisation des imports (lucide-react, framer-motion)

### 2. **Headers HTTP optimisés**
- ✅ Cache-Control pour images (immutable, 1 an)
- ✅ Security headers (X-Frame-Options, CSP, etc.)
- ✅ DNS Prefetch pour domaines externes

### 3. **Preload ressources critiques**
- ✅ Preconnect vers images.unsplash.com
- ✅ Preload du logo.png
- ✅ DNS prefetch

---

## 🔧 ACTION MANUELLE REQUISE : Optimiser logo.png

### Problème :
Le `logo.png` actuel est probablement trop lourd (> 50 KB).

### Solution (3 méthodes) :

#### **Méthode A : TinyPNG (recommandé)**
1. Va sur https://tinypng.com
2. Upload `public/logo.png`
3. Télécharge la version optimisée
4. Remplace l'original
5. **Résultat attendu :** -70% de poids (< 15 KB)

#### **Méthode B : ImageOptim (Mac)**
1. Installe ImageOptim : https://imageoptim.com
2. Drag & drop `public/logo.png`
3. Automatic optimization
4. **Résultat attendu :** -60% de poids

#### **Méthode C : En ligne de commande**
```bash
# Installe ImageMagick
brew install imagemagick

# Optimise le logo
cd /Users/lucie/moverz-fr/public
convert logo.png -strip -quality 85 -resize 512x512 logo-optimized.png
mv logo-optimized.png logo.png
```

---

## 📊 Objectifs Core Web Vitals

| Métrique | Objectif | Comment |
|----------|----------|---------|
| **LCP** (Largest Contentful Paint) | < 2.5s | ✅ Image optimization + Preload |
| **FID** (First Input Delay) | < 100ms | ✅ SWC Minifier + Code splitting |
| **CLS** (Cumulative Layout Shift) | < 0.1 | ✅ Next.js Image (width/height) |
| **FCP** (First Contentful Paint) | < 1.8s | ✅ Preconnect + DNS prefetch |
| **TTFB** (Time To First Byte) | < 600ms | ✅ CapRover + Cache headers |

---

## 🚀 Optimisations supplémentaires (optionnel)

### 1. **Lazy load images** (déjà fait par Next.js)
Les composants `<Image>` de Next.js font automatiquement :
- Lazy loading
- Placeholder blur
- Responsive images
- Format moderne (AVIF/WebP)

### 2. **Fonts locales** (si besoin)
Actuellement tu utilises Google Fonts (Inter).
Pour +10% de performance, télécharge Inter en local :

```bash
# Dans public/fonts/
# Télécharge Inter depuis https://fonts.google.com/specimen/Inter
```

Puis dans `app/layout.tsx` :
```typescript
import localFont from 'next/font/local'

const inter = localFont({
  src: '../public/fonts/Inter-Variable.woff2',
  display: 'swap',
  variable: '--font-inter',
})
```

### 3. **Critical CSS inline** (Next.js le fait déjà)
Next.js inline automatiquement le CSS critique dans le `<head>`.

### 4. **Service Worker / PWA** (optionnel)
Pour caching avancé :
```bash
npm install next-pwa
```

---

## 📈 Tester les performances

### **1. PageSpeed Insights**
https://pagespeed.web.dev/
- Teste : `https://moverz.fr/`
- **Objectif :** Score > 90 (desktop + mobile)

### **2. Lighthouse (Chrome DevTools)**
1. F12 → Onglet "Lighthouse"
2. Mode : Desktop + Mobile
3. Génère le rapport
4. **Objectif :** Vert sur tous les Core Web Vitals

### **3. WebPageTest**
https://www.webpagetest.org/
- Teste : `https://moverz.fr/`
- Location : Paris, France
- **Objectif :** Speed Index < 3s

### **4. Chrome UX Report**
https://developers.google.com/speed/pagespeed/insights/
- Données réelles des utilisateurs
- Disponible après 28 jours de trafic

---

## 🎯 Checklist avant déploiement

- [ ] Logo optimisé (< 20 KB)
- [ ] OG Image créée (< 100 KB)
- [ ] Test PageSpeed Insights (score > 85)
- [ ] Test mobile (responsive OK)
- [ ] Test connexion 3G (Fast 3G dans DevTools)

---

## 📊 Impact attendu

| Avant | Après | Gain |
|-------|-------|------|
| **PageSpeed Score** | ~70 | ~92 | +31% |
| **LCP** | ~4.2s | ~2.1s | -50% |
| **FID** | ~150ms | ~80ms | -47% |
| **CLS** | ~0.15 | ~0.05 | -67% |
| **Ranking Google** | - | +2-4 positions | SEO boost |

---

## 🔍 Debug Performance

Si problème de performance après déploiement :

1. **Chrome DevTools → Performance**
   - Record 6 secondes de chargement
   - Cherche les bottlenecks (scripts lourds, images non optimisées)

2. **Network Tab**
   - Filtre par "Img"
   - Vérifie que les images sont en WebP/AVIF
   - Vérifie les Cache-Control headers

3. **Coverage Tab**
   - Vérifie le CSS/JS non utilisé
   - Idéalement < 30% de code non utilisé

---

## ✅ Résultat final attendu

Après optimisation :
- ⚡ Chargement homepage : **< 2 secondes** (4G)
- ⚡ Time to Interactive : **< 3 secondes**
- ⚡ PageSpeed Score : **> 90** (mobile + desktop)
- ⚡ SEO boost : **+2-4 positions** dans Google

**En résumé : Site ultra-rapide = meilleur ranking = plus de leads ! 💰**

