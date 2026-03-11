# 📋 Comment Copier GSC_CREDENTIALS_JSON pour Caprover

## 🎯 Méthode Simple

### Étape 1 : Ouvrir le fichier
Le fichier est ici sur votre Mac :
```
/Users/luciestehelindetaisne/moverz-fr-2/.env.local
```

**OU** ouvrez-le avec cette commande dans le terminal :
```bash
cd /Users/luciestehelindetaisne/moverz-fr-2
open .env.local
```

### Étape 2 : Trouver la ligne
Cherchez la ligne qui commence par `GSC_CREDENTIALS_JSON=`

Elle ressemble à ça :
```
GSC_CREDENTIALS_JSON='{"type":"service_account","project_id":"moverz-analytics",...très longue ligne...}'
```

### Étape 3 : Copier la VALEUR (sans GSC_CREDENTIALS_JSON=)
**Important** : Copiez UNIQUEMENT la partie JSON, SANS les quotes simples ' '

C'est-à-dire, copiez :
```
{"type":"service_account","project_id":"moverz-analytics",...}
```

**PAS** :
```
GSC_CREDENTIALS_JSON='...'
```

### Étape 4 : Coller dans Caprover
Dans Caprover Dashboard :
1. Allez dans **App Configs → Environment Variables**
2. Cliquez **+ Add New**
3. **Key** : `GSC_CREDENTIALS_JSON`
4. **Value** : Collez le JSON (CTRL+V / CMD+V)
5. Cliquez **Save**

---

## 🚀 Méthode Rapide (Terminal)

### Option A : Afficher la valeur à copier
```bash
cd /Users/luciestehelindetaisne/moverz-fr-2
cat .env.local | grep "GSC_CREDENTIALS_JSON" | cut -d"'" -f2
```

Cette commande affiche UNIQUEMENT le JSON à copier (sans le nom de variable, sans les quotes).

### Option B : Copier automatiquement dans le presse-papier
```bash
cd /Users/luciestehelindetaisne/moverz-fr-2
cat .env.local | grep "GSC_CREDENTIALS_JSON" | cut -d"'" -f2 | pbcopy
```

Ensuite, allez dans Caprover et faites CMD+V pour coller ! ✨

---

## ✅ Résumé

**Fichier** : `/Users/luciestehelindetaisne/moverz-fr-2/.env.local`

**Ce qu'il faut copier** : Le JSON entre les quotes `'...'` (sans les quotes)

**Où le coller** : Caprover → Environment Variables → GSC_CREDENTIALS_JSON

**Commande rapide** :
```bash
cd /Users/luciestehelindetaisne/moverz-fr-2
cat .env.local | grep "GSC_CREDENTIALS_JSON" | cut -d"'" -f2 | pbcopy
```
Puis CMD+V dans Caprover ! 🚀

---

## 💡 Alternative : Voir le fichier dans Cursor

1. Dans Cursor, ouvrez le fichier : `.env.local`
2. Trouvez la ligne `GSC_CREDENTIALS_JSON`
3. Sélectionnez la partie JSON (entre les quotes)
4. Copiez (CMD+C)
5. Collez dans Caprover (CMD+V)

---

**Besoin d'aide ?** La commande `pbcopy` copie automatiquement pour vous ! 🎯
