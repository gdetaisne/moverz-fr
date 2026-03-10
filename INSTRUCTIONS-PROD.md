# ✅ INSTRUCTIONS PRODUCTION - Caprover

## 🎯 Configuration Caprover (2 minutes)

### Étape 1 : Variables d'Environnement

Dans **Caprover Dashboard → Votre App → App Configs → Environment Variables**, ajoutez :

```
ADMIN_PASSWORD=EzH
SESSION_SECRET=moverz-secure-session-key-2026-7f9d8e6c5b4a3210
GSC_SITE_URL=sc-domain:moverz.fr
NODE_ENV=production
```

**Pour GSC_CREDENTIALS_JSON** :
Copiez le contenu de votre `.env.local` local (la ligne `GSC_CREDENTIALS_JSON=...`)

**Fichier source** : `moverz-analytics-ce552ae68a1d.json` (déjà dans vos téléchargements)

### Étape 2 : Forcer le Redéploiement

Caprover redéploie automatiquement après le push. Sinon :
- **Caprover Dashboard → Deploy Now**

---

## 🔗 Accès Dashboard

**https://moverz.fr/admin/login/**

**Mot de passe** : `EzH`

---

## ✅ C'est Tout !

Le code est déjà pushé. Il suffit de :
1. Ajouter les 5 env vars dans Caprover
2. Attendre le redéploiement (2-3 min)
3. Accéder à https://moverz.fr/admin/login/
4. Se connecter et explorer les 6 dashboards ! 🚀

---

## 📊 Prochaines Actions

Une fois connecté :
1. Aller sur `/admin/studio/` et générer un article test
2. Explorer `/admin/linking/` pour voir les 500+ suggestions
3. SSH dans le container et lancer le scraping :
   ```bash
   caprover ssh yourapp
   cd /app
   npx tsx scripts/scrape-competitors.ts
   ```

---

**Status** : ✅ Code pushé, prêt pour config Caprover  
**Commit** : 79ea38f  
**Documentation** : DEPLOIEMENT-CAPROVER.md (détails complets)
