# GA4 (Moverz) — quoi mesurer et comment le configurer

## 1) Les events que le site envoie maintenant (côté moverz.fr)

Le site envoie automatiquement ces events GA4 sur **clic** :

- **`lead_click`** : clic vers `devis.moverz.fr`
  - params: `link_url`, `link_text`, `placement` (depuis `from=`), `source` (depuis `source=`)
- **`pro_click`** : clic vers `/pro/`
  - params: `link_url`, `link_text`
- **`contact_click`** : clic `mailto:` ou `tel:`
  - params: `link_url`, `link_text`, `contact_type` (`email|phone`)

Le cross-domain est activé pour conserver la session quand on part vers `devis.moverz.fr`.

## 2) Marquer ces events comme conversions dans GA4

1. GA4 → **Admin** → **Events**
2. Chercher l’event (ex: `lead_click`)
3. Cliquer **Mark as conversion**

Recommandé :
- `lead_click` = conversion “soft” (intention)
- **Idéal** : mesurer aussi `lead_submit` sur `devis.moverz.fr` (conversion “hard”)

## 3) (Important) Mesurer la vraie conversion sur devis.moverz.fr

Pour savoir combien de demandes sont réellement soumises, il faut envoyer un event depuis `devis.moverz.fr` au moment de la soumission :

- Event name: **`lead_submit`**
- params suggérés:
  - `city_slug` (si dispo)
  - `lead_id` (si dispo)
  - `source` / `from` (reprendre la querystring)

Ensuite, dans GA4 → Admin → Events → **mark as conversion**.

## 4) Exclure le trafic interne (pour arrêter de polluer “Direct”)

Option simple (GA4) :
1. GA4 → **Admin** → **Data streams** → Web (moverz.fr)
2. **Configure tag settings** → **Define internal traffic**
3. Ajouter votre IP (bureau / perso / serveur de test)
4. GA4 → **Admin** → **Data settings** → **Data filters**
5. Activer le filtre “Internal traffic” en **Active**

## 5) Vérifier que ça marche (debug)

1. Installer l’extension Chrome **Google Analytics Debugger**
2. Ouvrir le site, faire un clic sur “Obtenir des devis”
3. GA4 → **Realtime** : l’event `lead_click` doit apparaître


