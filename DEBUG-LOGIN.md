# 🔐 Debug Problème de Connexion

## ❌ Symptôme

Impossible de se connecter avec le mot de passe `EzH`

---

## 🔍 Causes Possibles

### 1. Variables d'environnement non configurées dans Caprover (PROBABLE)

**Le problème** : Les env vars ne sont pas définies en prod, donc :
- `ADMIN_PASSWORD` est vide
- Le système ne peut pas vérifier le mot de passe

**Solution** : Configurer les env vars dans Caprover

### 2. Mot de passe différent

**Vérification** : Le mot de passe local est-il bien `EzH` ?

---

## ✅ SOLUTION : Configurer les Env Vars Caprover

### Étape 1 : Dans Caprover Dashboard

Allez dans **Votre App → App Configs → Environment Variables**

### Étape 2 : Ajouter ces 5 variables

| Key | Value |
|-----|-------|
| `ADMIN_PASSWORD` | `EzH` |
| `SESSION_SECRET` | `moverz-secure-session-key-2026-7f9d8e6c5b4a3210` |
| `GSC_SITE_URL` | `sc-domain:moverz.fr` |
| `NODE_ENV` | `production` |
| `GSC_CREDENTIALS_JSON` | `<votre json - voir COPIER-GSC-CREDENTIALS.md>` |

### Étape 3 : Sauvegarder

Cliquez sur **Save & Update** (Caprover va redémarrer l'app automatiquement)

### Étape 4 : Attendre 30 secondes

Le container va redémarrer avec les nouvelles variables.

### Étape 5 : Tester

Retournez sur **https://moverz.fr/admin/login/** et essayez :
- **Mot de passe** : `EzH`

---

## 🧪 Test Rapide

### Vérifier que les env vars sont définies

Une fois les env vars ajoutées, vous pouvez SSH dans le container :

```bash
# SSH dans le container Caprover
caprover ssh moverz-fr

# Vérifier les env vars
echo $ADMIN_PASSWORD
# Devrait afficher : EzH

echo $SESSION_SECRET
# Devrait afficher : moverz-secure-session-key-2026-7f9d8e6c5b4a3210
```

---

## 🎯 Checklist de Vérification

### Dans Caprover
- [ ] `ADMIN_PASSWORD=EzH` est défini
- [ ] `SESSION_SECRET` est défini
- [ ] App a été redémarrée après ajout des env vars
- [ ] Aucune erreur dans les logs

### Test de connexion
- [ ] Allez sur https://moverz.fr/admin/login/
- [ ] Entrez `EzH` comme mot de passe
- [ ] Cliquez sur "Se connecter"
- [ ] Devrait rediriger vers `/admin/`

---

## 🚨 Si Ça Ne Marche Toujours Pas

### Option A : Vérifier les logs Caprover

Dans **Caprover → App → Logs**, cherchez :
```
POST /api/admin/auth/login
```

Vous devriez voir soit :
- Succès : `{"success":true,"message":"Connexion réussie"}`
- Erreur : `{"error":"Mot de passe incorrect"}`

### Option B : Changer le mot de passe temporairement

Si vous voulez utiliser un autre mot de passe :
1. Dans Caprover, changez `ADMIN_PASSWORD` vers quelque chose de simple : `test123`
2. Sauvegardez et attendez le restart
3. Testez avec le nouveau mot de passe

---

## 💡 Astuce

Le mot de passe actuel dans votre `.env.local` local est : **`EzH`**

Si vous voulez utiliser le même en prod, assurez-vous que Caprover a **exactement** :
```
ADMIN_PASSWORD=EzH
```

Pas d'espaces, pas de quotes, juste `EzH`.

---

**Prochaine action** : Configurer les env vars dans Caprover et réessayer ! 🚀
