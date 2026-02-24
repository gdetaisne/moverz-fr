# 🚀 Instructions de Déploiement - Optimisations LCP

## ✅ Ce qui a été fait

1. **Build testé et validé** ✅
2. **Commit créé** ✅
3. **Push vers GitHub** ✅

## 🎯 Prochaine étape : Déploiement CapRover

### Option A : Déploiement Automatique (Recommandé)

Si votre CapRover est configuré avec un webhook GitHub :

1. **Le déploiement devrait se lancer automatiquement** après le push
2. Vérifiez sur votre dashboard CapRover : `https://captain.votredomaine.com`
3. Allez dans l'app `moverz-fr` → Onglet "Deployment"
4. Vous devriez voir le build en cours

### Option B : Déploiement Manuel via CapRover CLI

Si vous devez déployer manuellement :

```bash
cd /Users/luciestehelindetaisne/moverz-fr-1

# 1. Se connecter à CapRover (si pas déjà fait)
caprover login

# 2. Déployer l'app
caprover deploy
```

Suivez les prompts pour sélectionner votre app.

### Option C : Déploiement via Dashboard CapRover

1. Allez sur `https://captain.votredomaine.com`
2. Connectez-vous
3. Sélectionnez l'app `moverz-fr`
4. Onglet "Deployment"
5. Section "Method 3: Deploy from Github/Bitbucket/Gitlab"
6. Cliquez sur "Force Build"

---

## 📊 Vérification Post-Déploiement

Une fois déployé, attendez **5-10 minutes** puis testez :

### 1. Vérifier que le site fonctionne
```bash
curl -I https://moverz.fr/
# Devrait retourner 200 OK
```

### 2. Vérifier les images optimisées
```bash
curl -I https://moverz.fr/logo.png
# Vérifier Content-Length (devrait être ~70KB au lieu de 256KB)
```

### 3. Tester PageSpeed Insights (48h après déploiement)

Allez sur : https://pagespeed.web.dev/

Testez : `https://moverz.fr/`

**Résultats attendus :**
- **LCP : ~2,3s** (au lieu de 6,2s) 🟢
- **FCP : ~0,9s** 🟢
- **Speed Index : ~2,5s** 🟢
- **Score Mobile : 88-92** (au lieu de ~65) 🟢

---

## 🔥 Résumé des Optimisations Déployées

### Images
- ✅ `logo.png` : 256 KB → 70 KB (-73%)
- ✅ `logo-ui.png` : 6 KB → 1,3 KB (-83%)
- ✅ Versions WebP générées automatiquement

### Configuration
- ✅ Next.js Image Optimization réactivée
- ✅ Preconnect Google Fonts
- ✅ Quality optimisée pour le logo

### Fixes Techniques
- ✅ Page `_error.tsx` ajoutée
- ✅ OG Image corrigée (problème de font)

---

## 📝 Commit Déployé

```
commit 6e4e955
⚡ Fix build: ajout page _error + correction OG image (checkmark)

- Ajout app/_error.tsx pour page d'erreur Next.js  
- Fix opengraph-image.tsx: remplacement checkmark ✓ par bullet
- Build successful après corrections
```

---

## 🆘 En cas de problème

### Si le site ne charge pas après déploiement

1. **Vérifier les logs CapRover**
   ```bash
   caprover logs -a moverz-fr
   ```

2. **Rollback si nécessaire**
   - Dashboard CapRover → App → Deployment
   - Cliquez sur "Revert to previous version"

3. **Vérifier les variables d'environnement**
   - Dashboard CapRover → App → App Configs
   - Vérifier que toutes les env vars sont présentes

### Si le LCP ne s'améliore pas

Attendez 48-72h pour que :
- Le cache CDN se vide
- Google collecte les nouvelles métriques
- Les utilisateurs voient la nouvelle version

Puis re-testez sur PageSpeed Insights.

---

## ✅ Checklist Finale

- [x] Build testé localement
- [x] Commit créé
- [x] Push vers GitHub
- [ ] **Déploiement CapRover lancé**
- [ ] **Site vérifié (200 OK)**
- [ ] **Images vérifiées (taille réduite)**
- [ ] **PageSpeed testé (48h après)**

---

**Impact attendu : LCP réduit de 63% (6,2s → 2,3s) 🚀**

Bon déploiement Boss ! 💪
