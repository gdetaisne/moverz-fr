# 🚀 Déploiement Caprover - Dashboard Admin

## 📋 Variables d'Environnement à Configurer

### Dans Caprover Dashboard

Allez dans **App Configs → Environment Variables** et ajoutez :

```bash
ADMIN_PASSWORD=EzH
SESSION_SECRET=moverz-secure-session-key-2026-7f9d8e6c5b4a3210
GSC_SITE_URL=sc-domain:moverz.fr
NODE_ENV=production
```

### Pour GSC_CREDENTIALS_JSON

Cette variable est longue (JSON multi-lignes). Deux options :

#### Option A : En une ligne (recommandé pour Caprover)
Copiez le contenu exact de votre fichier `.env.local` local :
```bash
GSC_CREDENTIALS_JSON=<contenu_du_fichier_moverz-analytics-ce552ae68a1d.json_en_une_ligne>
```

**Important** : Utilisez le JSON de votre fichier local `moverz-analytics-ce552ae68a1d.json`, en remplaçant les retours à la ligne par `\n`.

#### Option B : Via fichier (si problème avec option A)
Copiez le contenu de votre fichier credentials local dans l'app Caprover.

---

## 🔄 Forcer le Redéploiement

### Via Git Push (automatique)
Caprover redéploie automatiquement après chaque push sur main.

### Via Caprover Dashboard (manuel)
1. Allez dans votre app → **Deployment**
2. Cliquez sur **Deploy Now**

---

## 📁 Créer les Dossiers de Données en Prod

Le dossier `data/` est gitignored. Pour le créer en prod :

### Option 1 : SSH dans le container
```bash
# Se connecter au container
caprover ssh yourapp

# Créer le dossier
mkdir -p /app/data
cd /app/data

# Créer competitor-blogs.json
cat > competitor-blogs.json << 'EOF'
[
  { "id": 1, "name": "AJ - VIDE MAISON", "blogUrl": "https://yves-debarras-maison.fr/blog/", "avgWordCount": 1286, "yearFounded": 2018, "active": true },
  ...
]
EOF
```

### Option 2 : Via Persistent Directory
Dans Caprover :
1. **App Configs → Persistent Directories**
2. Ajouter : `/app/data` → Volume path
3. Upload `competitor-blogs.json` via SSH ou script

---

## 🚀 Accès Post-Déploiement

Une fois déployé :

**https://moverz.fr/admin/login/**

**Mot de passe** : `EzH`

---

## ✅ Checklist de Vérification

### 1. Variables d'environnement
- [ ] `ADMIN_PASSWORD` configuré
- [ ] `SESSION_SECRET` configuré
- [ ] `GSC_CREDENTIALS_JSON` configuré
- [ ] `GSC_SITE_URL` configuré
- [ ] `NODE_ENV=production`

### 2. Build réussi
- [ ] `npm run build` passe sans erreur
- [ ] Next.js démarre correctement

### 3. Données initiales
- [ ] Dossier `data/` créé
- [ ] `competitor-blogs.json` présent

### 4. Accès dashboard
- [ ] `/admin/login/` accessible (307 redirect)
- [ ] `/admin/login/` accessible (page login)
- [ ] Connexion fonctionne avec `EzH`
- [ ] Dashboards chargent correctement

### 5. NoIndex vérifié
- [ ] Headers `X-Robots-Tag: noindex` présents sur `/admin/*`
- [ ] `robots.txt` contient `Disallow: /admin/`

---

## 🐛 Troubleshooting

### Build échoue
```bash
# Vérifier les logs Caprover
# Si erreur "blog-canonique.ts", c'est normal (workaround en place)
```

### Dashboard ne charge pas
```bash
# Vérifier que les env vars sont bien définies
# Redémarrer l'app dans Caprover
```

### Scraping ne fonctionne pas
```bash
# Se connecter au container
caprover ssh yourapp

# Tester le script
cd /app
npx tsx scripts/scrape-competitors.ts
```

### Données perdues après redéploiement
```bash
# Utiliser Persistent Directories dans Caprover
# Config → Persistent Directories → /app/data
```

---

## 📊 Commandes Utiles en Prod

### SSH dans le container
```bash
caprover ssh yourapp
```

### Voir les logs
```bash
# Dans Caprover Dashboard → App → Logs
# Ou via CLI
caprover logs yourapp
```

### Lancer le scraping en prod
```bash
# SSH dans container
caprover ssh yourapp

# Lancer scraping
cd /app
npx tsx scripts/scrape-competitors.ts

# Lancer analyse
npx tsx scripts/analyze-gaps.ts
```

---

## 🎯 Post-Déploiement

Une fois tout configuré :

1. ✅ Accédez à **https://moverz.fr/admin/login/**
2. ✅ Connectez-vous avec `EzH`
3. ✅ Explorez vos 6 dashboards
4. ✅ Lancez le premier scraping
5. ✅ Générez votre premier article dans l'AI Studio

---

## 💪 Let's Go Boss !

Le système est poussé en prod. Il ne reste plus qu'à configurer les env vars dans Caprover et c'est parti ! 🚀

**URL Admin** : https://moverz.fr/admin/login/  
**Mot de passe** : EzH  
**Status** : Prêt pour config Caprover
