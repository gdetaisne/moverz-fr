# 🚨 ACTION IMMÉDIATE : Réparer les redirections 404

**Problème** : Les 11 domaines ville retournent des 404.  
**Cause** : L'app de redirection n'est PAS déployée sur CapRover.  
**Solution** : Déployer l'app en 4 étapes.

---

## ✅ ÉTAPE 1 : Vérifier l'état actuel (5 min)

### A. Checker si l'app existe dans CapRover

1. Se connecter au dashboard CapRover :
   ```
   https://captain.votredomaine.com
   ```

2. Aller dans **Apps**

3. Chercher une app nommée :
   - `moverz-redirect-router`
   - Ou toute app de redirection existante

**Question** : L'app existe-t-elle ?
- ✅ **OUI** → Passer à l'étape 2
- ❌ **NON** → Créer l'app (voir ci-dessous)

### B. Si l'app n'existe PAS, la créer :

1. **CapRover Dashboard** → **Apps** → **Create New App**
2. **App Name** : `moverz-redirect-router`
3. **Has Persistent Data** : NON (décocher)
4. **Create New App**

---

## ✅ ÉTAPE 2 : Déployer le code (10 min)

### Option A : Déploiement via CLI (RECOMMANDÉ)

```bash
# 1. Aller dans le dossier redirect-app
cd /Users/lucie/moverz-fr-1/redirect-app

# 2. Installer CapRover CLI (si pas déjà fait)
npm install -g caprover

# 3. Se connecter à CapRover
caprover login

# 4. Déployer l'app
caprover deploy
```

**Suivre les instructions** :
- Sélectionner l'app : `moverz-redirect-router`
- Confirmer le déploiement

**Attendre** : Le build peut prendre 2-3 minutes.

### Option B : Déploiement via GitHub

Si tu préfères GitHub :

1. Push le dossier `redirect-app/` dans un repo GitHub
2. CapRover Dashboard → App `moverz-redirect-router` → **Deployment**
3. **Method Three: Deploy from Github/Bitbucket**
4. Connecter le repo
5. Sélectionner la branche `main`
6. **Deploy**

---

## ✅ ÉTAPE 3 : Connecter les 11 domaines (15 min)

Dans CapRover → App `moverz-redirect-router` → **HTTP Settings**

### A. Activer HTTPS
- ✅ **Enable HTTPS** : cocher
- ✅ **Force HTTPS by redirecting all HTTP traffic** : cocher

### B. Ajouter les 11 domaines

**Connect New Domain** pour chaque domaine :

1. `devis-demenageur-marseille.fr`
2. `devis-demenageur-lyon.fr`
3. `bordeaux-demenageur.fr`
4. `www.bordeaux-demenageur.fr`
5. `devis-demenageur-lille.fr`
6. `devis-demenageur-nice.fr`
7. `devis-demenageur-toulousain.fr`
8. `devis-demenageur-strasbourg.fr`
9. `devis-demenageur-nantes.fr`
10. `devis-demenageur-rennes.fr`
11. `devis-demenageur-rouen.fr`
12. `devis-demenageur-montpellier.fr`

**Pour chaque domaine** :
1. Taper le domaine (ex: `devis-demenageur-nice.fr`)
2. **Connect New Domain**
3. Attendre que CapRover génère le certificat SSL (1-2 min par domaine)

**Important** : Les domaines doivent **déjà pointer** vers le serveur CapRover via DNS A record !

---

## ✅ ÉTAPE 4 : Vérifier le DNS (5 min)

**Pour chaque domaine**, vérifier que le DNS pointe vers l'IP du serveur CapRover.

### Test DNS :

```bash
# Exemple pour Nice
dig devis-demenageur-nice.fr

# Vérifier la section "ANSWER SECTION"
# Doit montrer l'IP du serveur CapRover
```

### Si le DNS ne pointe PAS vers CapRover :

**Aller chez ton registrar** (OVH, Gandi, Cloudflare, etc.) et configurer :

**Type** : A  
**Name** : @ (ou laisser vide)  
**Value** : [IP_DU_SERVEUR_CAPROVER]  
**TTL** : Automatique ou 3600

**Répéter pour les 11 domaines**.

**⚠️ Propagation DNS** : Peut prendre 1-24h (mais souvent instantané).

---

## ✅ ÉTAPE 5 : Tester les redirections (5 min)

### A. Test automatisé

```bash
# Lancer le script de test
cd /Users/lucie/moverz-fr-1/redirect-app
./test-redirections.sh
```

Ce script va tester :
- ✅ Les 11 pages d'accueil
- ✅ 3 pages quartiers (échantillon)
- ✅ 3 pages corridors (échantillon)

**Résultat attendu** : Toutes les lignes doivent être **vertes** ✅.

### B. Test manuel (si script ne fonctionne pas)

```bash
# Test Nice
curl -I https://devis-demenageur-nice.fr/

# Doit retourner :
# HTTP/2 301
# location: https://moverz.fr/demenagement/nice/
```

### C. Test dans le navigateur

1. Ouvrir le navigateur
2. Aller sur `https://devis-demenageur-nice.fr/`
3. **Résultat attendu** : Redirection instantanée vers `https://moverz.fr/demenagement/nice/`

---

## 🚨 Problèmes courants et solutions

### Problème 1 : "App not found" dans caprover deploy

**Cause** : L'app n'existe pas dans CapRover.

**Solution** :
1. Créer l'app dans CapRover Dashboard (voir Étape 1)
2. Relancer `caprover deploy`

---

### Problème 2 : "Cannot verify domain" dans CapRover

**Cause** : Le DNS ne pointe pas vers CapRover.

**Solution** :
1. Vérifier le DNS avec `dig nomdedomaine.fr`
2. Configurer le A record chez le registrar
3. Attendre la propagation DNS (1-24h)
4. Réessayer dans CapRover

---

### Problème 3 : "Build failed" lors du déploiement

**Cause** : Problème dans le Dockerfile ou package.json.

**Solution** :
1. Vérifier les logs CapRover
2. S'assurer que `package.json` contient les bonnes versions :
   ```json
   {
     "dependencies": {
       "next": "14.2.33",
       "react": "^18",
       "react-dom": "^18"
     }
   }
   ```
3. Relancer le build

---

### Problème 4 : Toujours des 404 après déploiement

**Causes possibles** :
1. L'app n'a pas démarré → Vérifier les logs CapRover
2. Les domaines ne sont pas connectés → Vérifier HTTP Settings
3. Le DNS ne pointe pas vers CapRover → Test avec `dig`

**Diagnostic** :
```bash
# Test si l'app répond sur l'IP du serveur
curl -I -H "Host: devis-demenageur-nice.fr" http://[IP_CAPROVER]:80/

# Si 301 → L'app fonctionne, c'est un problème DNS
# Si 404 → L'app ne fonctionne pas, vérifier les logs CapRover
```

---

## 📊 Checklist finale (à cocher)

### Déploiement
- [ ] App `moverz-redirect-router` créée dans CapRover
- [ ] Code déployé via `caprover deploy` ou GitHub
- [ ] Build réussi (vérifier les logs)
- [ ] Container running (port 3000)

### Configuration
- [ ] HTTPS activé dans CapRover
- [ ] Force HTTPS activé
- [ ] 11 domaines connectés dans HTTP Settings
- [ ] Certificats SSL générés (Let's Encrypt)

### DNS
- [ ] DNS A record configuré pour les 11 domaines
- [ ] DNS pointe vers l'IP du serveur CapRover
- [ ] Test `dig` pour chaque domaine → OK

### Tests
- [ ] Script `test-redirections.sh` → Toutes les lignes vertes
- [ ] Test `curl -I` pour 3-4 domaines → 301 OK
- [ ] Test navigateur pour 2-3 domaines → Redirection visuelle OK

---

## 💡 Si tout est bloqué : Alternative rapide avec Cloudflare

**Si CapRover est trop complexe** ou que tu n'as pas accès :

### Utiliser Cloudflare Bulk Redirects (plus simple)

1. Se connecter à Cloudflare Dashboard
2. Sélectionner le domaine (ex: `devis-demenageur-nice.fr`)
3. **Rules** → **Bulk Redirects**
4. **Create Bulk Redirect List** : `redirects-nice`
5. **Import File** : Utiliser `/redirects/cloudflare-bulk-redirects.csv`
6. Sélectionner les lignes pour Nice uniquement
7. **Activate**
8. Répéter pour les 11 domaines

**⚠️ Limite** : Cloudflare Free = 5 domaines max en Bulk Redirects. Pour 11 domaines, il faut un plan payant (~$20/mois).

---

## 🎯 Résumé : Par où commencer ?

1. **MAINTENANT** : Vérifier si l'app existe dans CapRover (Étape 1)
2. **SI NON** : Créer l'app et déployer le code (Étape 1 + 2)
3. **PUIS** : Connecter les 11 domaines (Étape 3)
4. **ENFIN** : Vérifier le DNS et tester (Étape 4 + 5)

**Temps total estimé** : 40-60 minutes.

---

## 📞 Besoin d'aide ?

Si tu bloques sur une étape :
1. Note l'erreur exacte (copier-coller le message)
2. Check les logs CapRover (App → Logs)
3. Test le DNS avec `dig nomdedomaine.fr`
4. Reviens vers moi avec les infos, je t'aide ! 💪

---

**Dernière mise à jour** : 9 janvier 2026  
**Fichier source** : `/redirect-app/`  
**Guide complet** : `RECAP-COMPLET-REDIRECTIONS-301.md`

