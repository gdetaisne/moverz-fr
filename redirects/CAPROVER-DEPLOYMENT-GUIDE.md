# 🚀 Guide Déploiement CapRover - Redirections 301

## 📋 Contexte

`moverz.fr` est déployé sur **CapRover** avec un Dockerfile. Les redirections 301 des anciens domaines ville se configurent directement dans **CapRover Dashboard** via Nginx Config Override.

---

## ✅ Méthode recommandée : Nginx Config Override dans CapRover

### Pourquoi cette méthode ?

- ✅ **Native à CapRover** (pas besoin de toucher au Dockerfile)
- ✅ **Simple** : configuration dans le dashboard
- ✅ **Maintenable** : modifiable sans rebuild
- ✅ **Performant** : nginx natif

---

## 🎯 Étape par étape

### 1. Se connecter à CapRover Dashboard

```
https://captain.votre-domaine.com
```

---

### 2. Pour chaque ancien domaine ville

#### A. Créer une nouvelle app CapRover

Par exemple pour `devis-demenageur-nice.fr` :

1. Dashboard → Apps → **Create New App**
2. App Name : `redirect-nice` (ou autre nom explicite)
3. **Ne pas** activer le build Docker (on va juste faire du nginx)

---

#### B. Configurer l'app comme "Nginx Redirect Only"

1. Aller dans l'app `redirect-nice`
2. Onglet **"HTTP Settings"**
3. Activer **"Enable HTTPS"**
4. Ajouter le domaine : `devis-demenageur-nice.fr`
5. Forcer HTTPS : ✅

---

#### C. Ajouter le Nginx Config Override

1. Toujours dans l'app `redirect-nice`
2. Onglet **"App Configs"** → section **"Nginx Config Override"**
3. Coller la configuration suivante :

```nginx
# Redirections 301 pour devis-demenageur-nice.fr

# Home → Page ville principale
location = / {
    return 301 https://moverz.fr/demenagement/nice/;
}

# Hub quartiers
location ~ ^/quartiers-nice/?$ {
    return 301 https://moverz.fr/quartiers-nice/;
}

# Quartiers
location ~ ^/vieux-nice/?$ {
    return 301 https://moverz.fr/nice/vieux-nice/;
}
location ~ ^/port/?$ {
    return 301 https://moverz.fr/nice/port/;
}
location ~ ^/liberation/?$ {
    return 301 https://moverz.fr/nice/liberation/;
}
location ~ ^/cimiez/?$ {
    return 301 https://moverz.fr/nice/cimiez/;
}
location ~ ^/riquier/?$ {
    return 301 https://moverz.fr/nice/riquier/;
}

# Corridors
location ~ ^/nice-vers-paris/?$ {
    return 301 https://moverz.fr/nice-vers-paris/;
}
location ~ ^/nice-vers-marseille/?$ {
    return 301 https://moverz.fr/nice-vers-marseille/;
}
location ~ ^/nice-vers-lyon/?$ {
    return 301 https://moverz.fr/nice-vers-lyon/;
}
location ~ ^/nice-vers-italie/?$ {
    return 301 https://moverz.fr/nice-vers-italie/;
}
location ~ ^/nice-vers-monaco/?$ {
    return 301 https://moverz.fr/nice-vers-monaco/;
}

# Blog articles → moverz.fr/blog/
location ~ ^/blog/(.*)$ {
    return 301 https://moverz.fr/blog/$1;
}

# Catch-all : tout le reste → page ville
location / {
    return 301 https://moverz.fr/demenagement/nice/;
}
```

4. **Save & Update**

---

#### D. Répéter pour les 6 autres villes

Créer 6 autres apps CapRover :
- `redirect-toulouse` pour `devis-demenageur-toulousain.fr`
- `redirect-strasbourg` pour `devis-demenageur-strasbourg.fr`
- `redirect-nantes` pour `devis-demenageur-nantes.fr`
- `redirect-rennes` pour `devis-demenageur-rennes.fr`
- `redirect-rouen` pour `devis-demenageur-rouen.fr`
- `redirect-montpellier` pour `devis-demenageur-montpellier.fr`

**Pour chaque ville, adapter le Nginx Config** avec les quartiers/corridors spécifiques (voir `redirects/nginx-301-redirects.conf` pour les patterns).

---

## 🔧 Alternative : Apps CapRover existantes

Si les domaines ville sont **déjà configurés comme apps CapRover** :

1. Aller dans l'app existante (ex: `nice-site`)
2. **App Configs** → **Nginx Config Override**
3. Ajouter les règles de redirection ci-dessus
4. Save & Update
5. **Désactiver le build Docker** si tu veux juste rediriger (économise des ressources)

---

## 🎯 Configs CapRover prêtes à l'emploi

### Nice

```nginx
location = / {
    return 301 https://moverz.fr/demenagement/nice/;
}
location ~ ^/quartiers-nice/?$ {
    return 301 https://moverz.fr/quartiers-nice/;
}
location ~ ^/(vieux-nice|port|liberation|cimiez|riquier)/?$ {
    return 301 https://moverz.fr/nice/$1/;
}
location ~ ^/nice-vers-(paris|marseille|lyon|italie|monaco)/?$ {
    return 301 https://moverz.fr/nice-vers-$1/;
}
location ~ ^/blog/(.*)$ {
    return 301 https://moverz.fr/blog/$1;
}
location / {
    return 301 https://moverz.fr/demenagement/nice/;
}
```

### Toulouse

```nginx
location = / {
    return 301 https://moverz.fr/demenagement/toulouse/;
}
location ~ ^/quartiers-toulouse/?$ {
    return 301 https://moverz.fr/quartiers-toulouse/;
}
location ~ ^/(capitole|saint-cyprien|carmes|compans|jean-jaures)/?$ {
    return 301 https://moverz.fr/toulouse/$1/;
}
location ~ ^/toulouse-vers-(paris|lyon|marseille|nantes|espagne)/?$ {
    return 301 https://moverz.fr/toulouse-vers-$1/;
}
location ~ ^/blog/(.*)$ {
    return 301 https://moverz.fr/blog/$1;
}
location / {
    return 301 https://moverz.fr/demenagement/toulouse/;
}
```

### Strasbourg

```nginx
location = / {
    return 301 https://moverz.fr/demenagement/strasbourg/;
}
location ~ ^/quartiers-strasbourg/?$ {
    return 301 https://moverz.fr/quartiers-strasbourg/;
}
location ~ ^/(grande-ile|neudorf|cronenbourg|koenigshoffen|robertsau)/?$ {
    return 301 https://moverz.fr/strasbourg/$1/;
}
location ~ ^/strasbourg-vers-(paris|lyon|mulhouse|allemagne|suisse)/?$ {
    return 301 https://moverz.fr/strasbourg-vers-$1/;
}
location ~ ^/blog/(.*)$ {
    return 301 https://moverz.fr/blog/$1;
}
location / {
    return 301 https://moverz.fr/demenagement/strasbourg/;
}
```

### Nantes

```nginx
location = / {
    return 301 https://moverz.fr/demenagement/nantes/;
}
location ~ ^/quartiers-nantes/?$ {
    return 301 https://moverz.fr/quartiers-nantes/;
}
location ~ ^/(bouffay|ile-de-nantes|doulon|beaujoire|hauts-paves)/?$ {
    return 301 https://moverz.fr/nantes/$1/;
}
location ~ ^/nantes-vers-(paris|bordeaux|rennes|lyon|la-baule)/?$ {
    return 301 https://moverz.fr/nantes-vers-$1/;
}
location ~ ^/blog/(.*)$ {
    return 301 https://moverz.fr/blog/$1;
}
location / {
    return 301 https://moverz.fr/demenagement/nantes/;
}
```

### Rennes

```nginx
location = / {
    return 301 https://moverz.fr/demenagement/rennes/;
}
location ~ ^/quartiers-rennes/?$ {
    return 301 https://moverz.fr/quartiers-rennes/;
}
location ~ ^/(centre|thabor|maurepas|villejean|cleunay)/?$ {
    return 301 https://moverz.fr/rennes/$1/;
}
location ~ ^/rennes-vers-(paris|nantes|brest|saint-malo|angers)/?$ {
    return 301 https://moverz.fr/rennes-vers-$1/;
}
location ~ ^/blog/(.*)$ {
    return 301 https://moverz.fr/blog/$1;
}
location / {
    return 301 https://moverz.fr/demenagement/rennes/;
}
```

### Rouen

```nginx
location = / {
    return 301 https://moverz.fr/demenagement/rouen/;
}
location ~ ^/quartiers-rouen/?$ {
    return 301 https://moverz.fr/quartiers-rouen/;
}
location ~ ^/(centre-historique|saint-sever|grammont|sapins|madrillet)/?$ {
    return 301 https://moverz.fr/rouen/$1/;
}
location ~ ^/rouen-vers-(paris|le-havre|caen|amiens|lille)/?$ {
    return 301 https://moverz.fr/rouen-vers-$1/;
}
location ~ ^/blog/(.*)$ {
    return 301 https://moverz.fr/blog/$1;
}
location / {
    return 301 https://moverz.fr/demenagement/rouen/;
}
```

### Montpellier

```nginx
location = / {
    return 301 https://moverz.fr/demenagement/montpellier/;
}
location ~ ^/quartiers-montpellier/?$ {
    return 301 https://moverz.fr/quartiers-montpellier/;
}
location ~ ^/(ecusson|antigone|pres-arenes|beaux-arts|port-marianne)/?$ {
    return 301 https://moverz.fr/montpellier/$1/;
}
location ~ ^/montpellier-vers-(paris|lyon|marseille|toulouse)/?$ {
    return 301 https://moverz.fr/montpellier-vers-$1/;
}
location ~ ^/blog/(.*)$ {
    return 301 https://moverz.fr/blog/$1;
}
location / {
    return 301 https://moverz.fr/demenagement/montpellier/;
}
```

---

## 🧪 Test après configuration

### 1. Test direct

```bash
# Nice
curl -I https://devis-demenageur-nice.fr/
curl -I https://devis-demenageur-nice.fr/vieux-nice
curl -I https://devis-demenageur-nice.fr/nice-vers-paris

# Doit retourner :
# HTTP/2 301
# Location: https://moverz.fr/...
```

### 2. Test dans le navigateur

Visiter :
- `https://devis-demenageur-nice.fr/` → doit rediriger vers `https://moverz.fr/demenagement/nice/`
- `https://devis-demenageur-nice.fr/vieux-nice` → doit rediriger vers `https://moverz.fr/nice/vieux-nice/`

---

## 📝 Checklist complète

### Par ville :

- [ ] **Nice**
  - [ ] App CapRover créée ou existante
  - [ ] Domaine `devis-demenageur-nice.fr` configuré
  - [ ] HTTPS activé
  - [ ] Nginx Config Override ajouté
  - [ ] Testé : home, 1 quartier, 1 corridor

- [ ] **Toulouse**
  - [ ] App CapRover créée
  - [ ] Domaine `devis-demenageur-toulousain.fr` configuré
  - [ ] Config nginx ajoutée
  - [ ] Testé

- [ ] **Strasbourg**
  - [ ] App CapRover créée
  - [ ] Domaine `devis-demenageur-strasbourg.fr` configuré
  - [ ] Config nginx ajoutée
  - [ ] Testé

- [ ] **Nantes**
  - [ ] App CapRover créée
  - [ ] Domaine `devis-demenageur-nantes.fr` configuré
  - [ ] Config nginx ajoutée
  - [ ] Testé

- [ ] **Rennes**
  - [ ] App CapRover créée
  - [ ] Domaine `devis-demenageur-rennes.fr` configuré
  - [ ] Config nginx ajoutée
  - [ ] Testé

- [ ] **Rouen**
  - [ ] App CapRover créée
  - [ ] Domaine `devis-demenageur-rouen.fr` configuré
  - [ ] Config nginx ajoutée
  - [ ] Testé

- [ ] **Montpellier**
  - [ ] App CapRover créée
  - [ ] Domaine `devis-demenageur-montpellier.fr` configuré
  - [ ] Config nginx ajoutée
  - [ ] Testé

---

## 🎬 Procédure détaillée (exemple Nice)

### Étape 1 : Créer l'app CapRover

```
1. CapRover Dashboard → Apps
2. Click "Create New App"
3. App Name : redirect-nice
4. [x] Has Persistent Data : NON (pas besoin)
5. Create New App
```

---

### Étape 2 : Configurer le domaine

```
1. Aller dans l'app redirect-nice
2. HTTP Settings
3. Enable HTTPS : ✅
4. Connect New Domain :
   - Domain: devis-demenageur-nice.fr
   - Click "Connect New Domain"
5. Force HTTPS by redirecting : ✅
6. Save & Update
```

---

### Étape 3 : Configurer Nginx Override

```
1. Toujours dans l'app redirect-nice
2. App Configs → Edit Default Nginx Configurations
3. Coller dans "Nginx Config Override" :
```

```nginx
# === REDIRECTIONS 301 NICE → MOVERZ.FR ===

# Home
location = / {
    return 301 https://moverz.fr/demenagement/nice/;
}

# Hub quartiers
location ~ ^/quartiers-nice/?$ {
    return 301 https://moverz.fr/quartiers-nice/;
}

# Quartiers (regex pour gérer avec/sans trailing slash)
location ~ ^/vieux-nice/?$ {
    return 301 https://moverz.fr/nice/vieux-nice/;
}
location ~ ^/port/?$ {
    return 301 https://moverz.fr/nice/port/;
}
location ~ ^/liberation/?$ {
    return 301 https://moverz.fr/nice/liberation/;
}
location ~ ^/cimiez/?$ {
    return 301 https://moverz.fr/nice/cimiez/;
}
location ~ ^/riquier/?$ {
    return 301 https://moverz.fr/nice/riquier/;
}

# Corridors
location ~ ^/nice-vers-paris/?$ {
    return 301 https://moverz.fr/nice-vers-paris/;
}
location ~ ^/nice-vers-marseille/?$ {
    return 301 https://moverz.fr/nice-vers-marseille/;
}
location ~ ^/nice-vers-lyon/?$ {
    return 301 https://moverz.fr/nice-vers-lyon/;
}
location ~ ^/nice-vers-italie/?$ {
    return 301 https://moverz.fr/nice-vers-italie/;
}
location ~ ^/nice-vers-monaco/?$ {
    return 301 https://moverz.fr/nice-vers-monaco/;
}

# Blog articles
location ~ ^/blog/(.*)$ {
    return 301 https://moverz.fr/blog/$1;
}

# Catch-all pour toutes les autres URLs
location / {
    return 301 https://moverz.fr/demenagement/nice/;
}
```

```
4. Save Configuration
5. Le container nginx va se reload automatiquement
```

---

### Étape 4 : Tester

```bash
curl -I https://devis-demenageur-nice.fr/

# Doit retourner :
HTTP/2 301
location: https://moverz.fr/demenagement/nice/
```

---

## 🔄 Alternative : Configurer via One-Liner CapRover CLI

Si tu préfères scripter :

```bash
# Installer CapRover CLI
npm install -g caprover

# Login
caprover login

# Créer l'app
caprover api -p /user/apps/appDefinitions/register -d '{"appName":"redirect-nice","hasPersistentData":false}'

# Configurer nginx override (via API ou Dashboard)
```

---

## 📊 Avantages de cette approche CapRover

✅ **Pas de rebuild** : Les redirections ne touchent pas au code de `moverz.fr`  
✅ **Modifiable en live** : Change la config nginx sans redéployer  
✅ **Resource-efficient** : Une app nginx minimale consomme ~10 MB RAM  
✅ **SSL automatique** : CapRover gère Let's Encrypt  
✅ **Logs centralisés** : Tous les accès visibles dans CapRover logs  

---

## 🚨 Points d'attention

1. **DNS** : S'assurer que chaque domaine pointe vers le serveur CapRover (record A ou CNAME)
2. **SSL** : Laisser CapRover générer les certificats Let's Encrypt (peut prendre 1-2 min)
3. **Regex nginx** : Les `/?$` gèrent à la fois `/path` et `/path/` (important pour les trailing slashes)
4. **Ordre des location** : Les plus spécifiques en premier, catch-all en dernier

---

## 💡 Tips

- **Tester en dev** : Tu peux créer une app de test sur un sous-domaine (`test-redirect.moverz.fr`) pour valider la config avant de l'appliquer aux vrais domaines.
- **Rollback facile** : Si problème, tu peux supprimer le Nginx Override en 2 clics dans CapRover.
- **Monitoring** : Active les logs CapRover pour voir le trafic des redirections.

---

## 📞 Support

**Documentation CapRover** : https://caprover.com/docs/nginx-customization.html

**En cas de bug** :
1. Vérifier les logs CapRover (App → Logs)
2. Tester manuellement avec `curl -I`
3. Vérifier que le DNS pointe bien vers CapRover

---

**Estimation de temps** : ~5-10 min par ville = **1h total** pour les 7 villes.

**Prêt à déployer** ! 🚀

