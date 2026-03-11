# Cloudflare — Mise en place pour moverz.fr
**Date : 11 mars 2026**  
**Objectif : CDN edge gratuit devant CapRover → TTFB <50ms, Core Web Vitals au vert**

---

## Pourquoi Cloudflare Free suffit

Next.js ISR envoie déjà le header `Cache-Control: s-maxage=31536000, stale-while-revalidate`.  
Cloudflare détecte ce header et met les pages en cache edge automatiquement.  
→ Googlebot reçoit le HTML depuis le CDN (<50ms) au lieu du VPS Paris (300ms–2s).

**Plan Free = identique au Pro sur tout ce qui impacte le SEO.**

---

## Étape 1 — Ajouter moverz.fr dans Cloudflare (5 min)

1. Dashboard Cloudflare → **"+ Add a site"**
2. Entrer `moverz.fr`
3. Choisir le plan **Free**
4. Cloudflare scanne automatiquement tes DNS existants → vérifier qu'il a bien trouvé :
   - `A @ → 88.223.94.12` (le VPS CapRover)
   - `A www → 88.223.94.12`
   - Ajouter manuellement si manquant
5. S'assurer que le **nuage orange est activé** (proxy ON) sur les enregistrements A

---

## Étape 2 — Changer les nameservers chez ton registrar (5 min)

Cloudflare te donnera 2 nameservers du type :
```
xxx.ns.cloudflare.com
yyy.ns.cloudflare.com
```

Aller chez le registrar de moverz.fr (OVH, Gandi, Namecheap…) et remplacer :
```
# Avant
ns1.dns-parking.com
ns2.dns-parking.com

# Après
xxx.ns.cloudflare.com   ← fourni par Cloudflare
yyy.ns.cloudflare.com   ← fourni par Cloudflare
```

Propagation DNS : 5 min à 24h. Cloudflare notifie par email quand c'est actif.  
**Vérification :** `curl -sI https://moverz.fr | grep cf-ray` → doit retourner un header `cf-ray`.

---

## Étape 3 — Configuration Cloudflare (15 min)

### 3.1 SSL/TLS → Full (strict)
**SSL/TLS → Overview → Full (strict)**  
(CapRover gère déjà Let's Encrypt → Full strict fonctionne)

### 3.2 Cache — Page Rules (le plus important)
**Rules → Page Rules → Create Page Rule**

Règle 1 — Cache HTML des pages Next.js :
```
URL pattern : moverz.fr/*
Settings    : Cache Level = Cache Everything
              Edge Cache TTL = 1 day
```

Règle 2 — Ne pas cacher les routes API :
```
URL pattern : moverz.fr/api/*
Settings    : Cache Level = Bypass
```

### 3.3 Speed → Optimizations
- **Auto Minify** : cocher CSS + JavaScript + HTML
- **Brotli** : ON
- **HTTP/2** : ON (activé par défaut)
- **HTTP/3 (QUIC)** : ON

### 3.4 Purge cache après chaque déploiement
**Caching → Configuration → Purge Cache → Purge Everything**  
À faire juste après chaque déploiement CapRover.

Ou via API (à intégrer dans le process CI/CD) :
```bash
curl -X POST "https://api.cloudflare.com/client/v4/zones/{ZONE_ID}/purge_cache" \
  -H "Authorization: Bearer {CF_API_TOKEN}" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}'
```

---

## Étape 4 — Vérification post-activation

```bash
# 1. Cloudflare actif ?
curl -sI https://moverz.fr | grep cf-ray
# → doit afficher : cf-ray: XXXXXXXXX-CDG

# 2. TTFB mesuré ?
curl -w "TTFB: %{time_starttransfer}s\n" -o /dev/null -s https://moverz.fr
# → objectif : < 0.2s

# 3. Cache hit ?
curl -sI https://moverz.fr | grep cf-cache-status
# → doit afficher : cf-cache-status: HIT (après 1ère visite)

# 4. Page blog en cache ?
curl -sI https://moverz.fr/blog/eviter-arnaques-demenagement/ | grep cf-cache-status
# → objectif : HIT
```

---

## Étape 5 — Script prewarm post-déploiement

Après chaque déploiement CapRover, préchauffer le cache sur les pages clés :

```bash
# scripts/prewarm-cache.mjs
# Usage : node scripts/prewarm-cache.mjs
```

Voir `scripts/prewarm-cache.mjs` dans le projet.

---

## Impact attendu

| Métrique | Avant CF | Après CF |
|----------|---------|---------|
| TTFB homepage | ~300ms | <50ms |
| TTFB article blog (cache froid) | 500ms–2s | <50ms |
| LCP | ~2–3s | <1s |
| Core Web Vitals | Passable | Excellent |
| Uptime sous charge | 99% | 99.99% |
| Bande passante VPS | 100% | ~5% (95% servi par CF) |

---

## Notes importantes

- **R2 (déjà payant)** : ton bucket R2 Cloudflare peut servir les images statiques directement depuis le CDN — optionnel mais idéal pour les photos des villes qu'on vient d'ajouter
- **Analytics** : Cloudflare Free donne des stats trafic réel (bots exclus) complémentaires à GA4
- **Pas de modif de code** : tout se passe au niveau DNS/CDN, Next.js ne sait pas que CF est devant
