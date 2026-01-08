# 📸 Photo Profil Lucie - Instructions

## Où ajouter ta photo ?

Place ta photo dans ce dossier avec le nom :
```
/public/lucie-profile.jpg
```

## ✅ Recommandations photo :

### Format technique :
- **Format** : JPG ou PNG
- **Taille recommandée** : 400x400 px minimum
- **Poids** : < 200 KB (pour performance)
- **Ratio** : Carré (1:1) - sera affiché en rond

### Style recommandé :
- ✅ Photo professionnelle mais souriante
- ✅ Fond neutre (blanc, gris clair, ou bureau)
- ✅ Bonne lumière naturelle
- ✅ Cadrage épaules/buste
- ✅ Tenue professionnelle décontractée
- ✅ Regard caméra avec sourire naturel

### Ce qui fonctionne bien :
- Photo iPhone en mode Portrait (floute le fond)
- Lumière naturelle près d'une fenêtre
- Tenue colorée (bleu, vert, rose pâle) plutôt que tout noir/blanc

### À éviter :
- ❌ Selfie avec bras visible
- ❌ Photo de vacances/plage
- ❌ Fond trop chargé/distrayant
- ❌ Photo trop sombre ou surexposée
- ❌ Filtre Instagram trop marqué

## 🖼️ Où apparaît ta photo ?

Ta photo s'affiche sur la page `/pro` dans la section Contact, juste au-dessus des 3 cartes (WhatsApp, Email, Calendly).

Elle est affichée dans un cercle avec une bordure cyan Moverz et un badge de vérification.

## 🚀 Après avoir ajouté la photo :

1. Place `lucie-profile.jpg` dans le dossier `/public/`
2. C'est tout ! La photo s'affichera automatiquement
3. Teste en local : `npm run dev` puis va sur `/pro`

---

**Note** : Si tu changes le nom du fichier, pense à mettre à jour le chemin dans `/components/pro/ProContact.tsx` ligne ~35

