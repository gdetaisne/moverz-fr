# 🎨 Guide OG Image Custom pour Moverz

## 📋 Méthode 1 : Screenshot du Template HTML (5 min)

### Étapes :
1. Ouvre `og-image-template.html` dans Chrome/Firefox
2. Appuie sur F12 (DevTools)
3. Active le mode "Device Toolbar" (Cmd+Shift+M / Ctrl+Shift+M)
4. Configure les dimensions : **1200 x 630 pixels**
5. Screenshot : Cmd+Shift+P → "Capture screenshot" → "Capture node screenshot"
6. Sauvegarde en `og-image.png` dans `/public/`

---

## 📋 Méthode 2 : Canva (10 min)

### Template Canva :
1. Va sur https://www.canva.com
2. Crée un design custom : **1200 x 630 px**
3. Utilise ces specs :

**Background :**
- Gradient : #04163a → #2b7a78 → #04163a (135°)

**Logo :**
- Ton logo en haut (80x80px)
- Texte "MOVERZ" en blanc, 64px, bold

**Rating :**
- Badge : "★★★★★ 4.8/5 · 2847 clients"
- Background : blanc 10% opacity, bordure arrondie

**Titre :**
- "Comparez 3 devis minimum"
- "de déménageurs contrôlés" (en gradient #6BCFCF → #4FB8B8)
- Police : 72px, extra-bold

**Bénéfices (en bas) :**
- 3 badges : "✓ 0€", "✓ Sans démarchage", "✓ 100% fiables"
- Background : blanc 8% opacity, bordure #6BCFCF

4. Télécharge en PNG (1200x630)
5. Sauvegarde en `og-image.png` dans `/public/`

---

## 📋 Méthode 3 : Service en ligne (2 min)

### Og Image Generator :
https://www.opengraph.xyz/

1. Upload ton logo
2. Titre : "Comparez 3 devis minimum de déménageurs contrôlés"
3. Sous-titre : "Note 4.8/5 · 2847 clients · 0€ · Sans démarchage · 100% fiables"
4. Background : Gradient bleu (#04163a)
5. Download PNG → `og-image.png`

---

## 🔧 Intégration dans le code

Une fois `og-image.png` créée, elle sera automatiquement utilisée car le code pointe déjà vers `/logo.png` (tu peux la remplacer ou créer `/og-image.png` et mettre à jour le code).

### Pour utiliser og-image.png au lieu de logo.png :

Dans `app/layout.tsx` et `app/page.tsx`, remplace :
```typescript
images: ["/logo.png"]
```
par :
```typescript
images: ["/og-image.png"]
```

---

## ✅ Test de l'image OG

Après déploiement, teste avec :
- https://www.opengraph.xyz/url/https://moverz.fr
- https://cards-dev.twitter.com/validator
- Partage sur LinkedIn/Facebook et vérifie l'aperçu

---

## 📊 Specs techniques

- **Dimensions :** 1200 x 630 px (ratio 1.91:1)
- **Format :** PNG ou JPG
- **Poids :** < 300 KB (idéalement < 100 KB)
- **Safe zone :** Garde 40px de marge sur les bords
- **Texte :** Gros et lisible (minimum 40px)

