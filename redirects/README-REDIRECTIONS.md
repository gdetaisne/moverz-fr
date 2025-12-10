# 🔀 Guide Redirections 301 - Migration Sites Ville → Moverz.fr

## 📋 Vue d'ensemble

Ce dossier contient tous les fichiers nécessaires pour implémenter les **redirections 301** des anciens sites ville vers le nouveau hub centralisé `moverz.fr`.

**Volume total** :
- 7 domaines ville
- ~170 redirections (home, quartiers, corridors, hub)

---

## 📁 Fichiers disponibles

### 1. `nginx-301-redirects.conf`
**Format** : Configuration nginx  
**Usage** : Copier-coller dans votre `nginx.conf` ou `/etc/nginx/sites-available/`  
**Avantages** : 
- Configuration directe
- Pas de dépendance externe
- Performances natives nginx

**Exemple** :
```nginx
server {
    listen 443 ssl http2;
    server_name devis-demenageur-nice.fr;
    
    location = / {
        return 301 https://moverz.fr/demenagement/nice/;
    }
    
    location = /quartiers-nice {
        return 301 https://moverz.fr/quartiers-nice/;
    }
    
    # ... autres routes
}
```

---

### 2. `cloudflare-bulk-redirects.csv`
**Format** : CSV pour Cloudflare Bulk Redirects  
**Usage** : Uploader dans Cloudflare Dashboard → Rules → Bulk Redirects  
**Avantages** :
- Import en masse (1 clic)
- Gestion centralisée
- Pas besoin de toucher au serveur

**Étapes** :
1. Se connecter à Cloudflare Dashboard
2. Sélectionner le domaine source (ex: `devis-demenageur-nice.fr`)
3. Aller dans Rules → Bulk Redirects
4. Importer le CSV (section correspondant au domaine)
5. Activer les règles

---

## 🎯 Structure des redirections

### Pattern 1 : Home → Page ville principale
```
https://devis-demenageur-nice.fr/
  ↓ 301
https://moverz.fr/demenagement/nice/
```

### Pattern 2 : Hub quartiers
```
https://devis-demenageur-nice.fr/quartiers-nice
  ↓ 301
https://moverz.fr/quartiers-nice/
```

### Pattern 3 : Pages quartiers
```
https://devis-demenageur-nice.fr/vieux-nice
  ↓ 301
https://moverz.fr/nice/vieux-nice/
```

### Pattern 4 : Pages corridors
```
https://devis-demenageur-nice.fr/nice-vers-paris
  ↓ 301
https://moverz.fr/nice-vers-paris/
```

### Pattern 5 : Blog articles (si applicable)
```
https://devis-demenageur-nice.fr/blog/article-slug
  ↓ 301
https://moverz.fr/blog/article-slug/
```
*Note : Voir `moverz_301_redirects.csv` à la racine pour la liste complète des redirections blog*

---

## 🏗️ Implémentation par plateforme

### Nginx

```bash
# 1. Éditer la configuration
sudo nano /etc/nginx/sites-available/redirects-moverz

# 2. Copier le contenu de nginx-301-redirects.conf

# 3. Activer
sudo ln -s /etc/nginx/sites-available/redirects-moverz /etc/nginx/sites-enabled/

# 4. Tester
sudo nginx -t

# 5. Recharger
sudo systemctl reload nginx
```

---

### Cloudflare

1. **Via Bulk Redirects** (recommandé)
   - Dashboard → Rules → Bulk Redirects
   - Upload `cloudflare-bulk-redirects.csv`
   - Activer

2. **Via Page Rules** (limite 125 rules/domaine)
   - Dashboard → Page Rules
   - Créer une règle par URL
   - Type : Forwarding URL (301)

---

### Apache (.htaccess)

```apache
# Ajouter dans .htaccess du domaine source
RewriteEngine On

# Home
RewriteRule ^/?$ https://moverz.fr/demenagement/nice/ [R=301,L]

# Hub quartiers
RewriteRule ^quartiers-nice/?$ https://moverz.fr/quartiers-nice/ [R=301,L]

# Quartiers
RewriteRule ^vieux-nice/?$ https://moverz.fr/nice/vieux-nice/ [R=301,L]
RewriteRule ^port/?$ https://moverz.fr/nice/port/ [R=301,L]
# ... etc
```

---

### Vercel (vercel.json)

```json
{
  "redirects": [
    {
      "source": "/",
      "destination": "https://moverz.fr/demenagement/nice/",
      "permanent": true
    },
    {
      "source": "/quartiers-nice",
      "destination": "https://moverz.fr/quartiers-nice/",
      "permanent": true
    }
  ]
}
```

---

### Netlify (_redirects)

```
# _redirects file
/                    https://moverz.fr/demenagement/nice/           301
/quartiers-nice      https://moverz.fr/quartiers-nice/              301
/vieux-nice          https://moverz.fr/nice/vieux-nice/             301
```

---

## ✅ Checklist de validation

Avant la mise en production :

- [ ] Certificats SSL configurés pour tous les domaines sources
- [ ] Test manuel de 3-5 redirections par domaine
- [ ] Vérifier que les trailing slashes sont cohérents
- [ ] Confirmer le status code 301 (pas 302)
- [ ] Tester les variantes avec/sans trailing slash
- [ ] Vérifier dans Google Search Console après 48h

**Outils de test** :
```bash
# Tester une redirection
curl -I https://devis-demenageur-nice.fr/

# Doit retourner :
# HTTP/2 301
# Location: https://moverz.fr/demenagement/nice/
```

---

## 📊 Monitoring post-migration

### Semaine 1-2
- Vérifier les logs nginx/Cloudflare pour 404 non prévus
- Google Search Console : surveiller les erreurs 404
- Google Analytics : vérifier que le trafic arrive bien sur moverz.fr

### Mois 1-3
- Suivre l'évolution du ranking SEO par ville
- Identifier les anciennes URLs non couvertes (via GSC)
- Ajouter des redirections supplémentaires si nécessaire

---

## 🚨 Notes importantes

1. **Timing** : Les redirections 301 peuvent prendre 2-4 semaines pour être pleinement prises en compte par Google
2. **Préservation du jus SEO** : Les 301 transfèrent ~90-95% du "jus SEO" vers la nouvelle URL
3. **Anciens backlinks** : Ils continueront de fonctionner grâce aux 301
4. **Durée des 301** : Garder les redirections actives au moins 1 an (idéalement permanent)

---

## 📞 Support

En cas de problème :
- Vérifier les logs serveur
- Tester avec `curl -I <url>`
- Contacter l'équipe technique si 404 persistants

---

**Dernière mise à jour** : 10 décembre 2024
**Version** : 1.0


