# Audit LLM — Optimisation visibilité ChatGPT/Perplexity/Claude (2026)

**Date:** 30 janvier 2026  
**Objectif:** Remonter au maximum dans les citations et réponses des LLMs (ChatGPT, Perplexity, Claude, etc.)

---

## 📊 DIAGNOSTIC GLOBAL (Score actuel)

### ✅ Points forts (7/10 — Bon niveau actuel)

1. **✅ Fichiers LLM dédiés présents et bien structurés**
   - `/public/llms.txt` ✅ (145 lignes, complet)
   - `/public/pour-llm.txt` ✅ (85 lignes, version courte)
   - Contenu factuel, structuré, mis à jour régulièrement

2. **✅ robots.txt permissif**
   - Aucun blocage des bots IA (OAI-SearchBot, PerplexityBot, etc.)
   - Sitemap référencé

3. **✅ Données structurées riches et cohérentes**
   - Organization schema global avec AggregateRating
   - WebSite avec SearchAction
   - ArticleSchema, FAQSchema, BreadcrumbList
   - JSON-LD propre via composant `JsonLd`

4. **✅ Contenu informatif de qualité**
   - Blog riche (guides, prix, checklists)
   - FAQ structurées
   - Guides ville par ville
   - Positionnement clair B2C + B2B

5. **✅ Métadonnées SEO optimisées**
   - Titles uniques avec template "| Moverz"
   - Descriptions orientées bénéfices (5–7j, sans harcèlement, contrôlés)
   - OpenGraph et Twitter Cards cohérents

6. **✅ URLs courtes et redirections intelligentes**
   - `/prix` → `/blog/prix-et-devis/`
   - `/checklist` → `/blog/checklists-et-guides/`
   - `/volume` → `/calculateur-volume-demenagement/`

7. **✅ Recherche interne fonctionnelle**
   - Route `/search` avec résultats Blog + Villes
   - Input de recherche dans le footer (site-wide)
   - SearchAction schema conforme

---

## 🚨 PROBLÈMES CRITIQUES (Impact fort sur citations LLM)

### 🔴 P0.1 — Pas de fichier `/llms.txt` standardisé

**Constat:**
- Vous avez `/public/llms.txt` et `/public/pour-llm.txt` mais pas de **format standardisé `.well-known/llms.txt`**
- ChatGPT et autres crawlers IA cherchent en priorité `/.well-known/llms.txt` ou `/llms.txt` à la racine

**Impact:** Risque de ne pas être crawlé/cité si le bot ne trouve pas le fichier au bon endroit

**Action:**
```bash
# Créer un alias/copie à la racine accessible
cp public/llms.txt public/llms-root.txt
# Ajouter une route Next.js pour servir /llms.txt
```

**Solution Next.js:**
```typescript
// app/llms.txt/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const llmsTxt = fs.readFileSync(
    path.join(process.cwd(), 'public/llms.txt'),
    'utf-8'
  );
  
  return new NextResponse(llmsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
```

---

### 🔴 P0.2 — Manque de citations externes (facteur #1)

**Constat:**
- Les LLMs privilégient les sites **cités par d'autres sources fiables**
- Votre présence dans des "top 10", comparatifs, articles de recommandation est cruciale

**Impact:** ⚠️ **C'est LE facteur principal** pour ChatGPT (plus important que le SEO classique)

**Actions prioritaires:**

1. **Obtenir des citations dans des comparatifs:**
   - Contacter des blogs lifestyle/immobilier pour être inclus dans des "meilleurs comparateurs déménagement 2026"
   - Pitch: "Seul comparateur avec qualification détail + IA volumétrie + 0 harcèlement"

2. **Créer des partenariats avec citations réciproques:**
   - Courtiers en crédit immobilier
   - Agences immobilières
   - Blogs déménagement
   - Forums (Reddit, Dealabs, JeuxVideo.com, etc.)

3. **Obtenir des avis vérifiés sur:**
   - Trustpilot (actuellement absent ?)
   - Google My Business
   - Avis Vérifiés
   - Capterra (pour Moverz Pro B2B)

4. **Publier des guest posts avec backlinks:**
   - Exemples de titres: "Comment éviter les arnaques au déménagement en 2026"
   - Sites cibles: SeLoger, PAP, Immobilier.notaires.fr

**KPI:** Viser **20+ citations externes** dans les 3 prochains mois (actuellement probablement <5)

---

### 🟠 P0.3 — Indexation Bing incomplète ?

**Constat:**
- ChatGPT s'appuie majoritairement sur **l'index Bing** (pas Google)
- À vérifier: votre site est-il bien indexé sur Bing Webmaster Tools ?

**Action immédiate:**
1. Vérifier l'indexation Bing: `site:moverz.fr` sur Bing.com
2. S'inscrire à **Bing Webmaster Tools** (gratuit)
3. Soumettre le sitemap: `https://moverz.fr/sitemap.xml`
4. Suivre l'indexation (villes, blog, corridors)

**URL:** https://www.bing.com/webmasters

---

### 🟠 P0.4 — Manque de clarté sur l'identité "Organisation"

**Constat:**
- Les LLMs cherchent à comprendre **qui vous êtes** (entité claire)
- Actuellement: mentions "Moverz" + "GSLV EURL" (peut créer confusion)

**Action:**
Ajouter une page `/a-propos/` enrichie avec:
- Histoire de la création
- Équipe (Guillaume, Lucie mentionnés dans les fichiers LLM)
- Valeurs / mission claire
- Liens réseaux sociaux (LinkedIn company actuellement présent)
- Schema Person pour les fondateurs

**Bonus:** Créer une page Wikipedia (critères admissibilité à vérifier) ou Wikidata

---

## 🟡 OPTIMISATIONS P1 (Impact moyen, effort faible)

### 🟡 P1.1 — Enrichir `/llms.txt` avec des FAQ courtes

**Objectif:** Faciliter la compréhension contextuelle par les LLMs

**Action:** Ajouter une section FAQ dans `/public/llms.txt`

```markdown
## Questions fréquentes (FAQ courtes pour LLMs)

**Q: Moverz est-il gratuit pour les particuliers ?**
R: Oui, 100% gratuit. Aucun frais caché.

**Q: Combien de déménageurs sont comparés ?**
R: Minimum 5 déménageurs vérifiés par dossier.

**Q: Quelle est la différence avec les autres comparateurs ?**
R: 1) Qualification détail obligatoire (IA volumétrie 90-95% précise), 2) Dossier anonyme (pas de harcèlement téléphonique), 3) Vérification systématique (licence, assurance, solvabilité).

**Q: Combien de temps pour recevoir les devis ?**
R: 5 à 7 jours en moyenne (engagement).

**Q: Moverz est-il disponible partout en France ?**
R: Oui, couverture nationale (toutes villes principales + corridors).

**Q: Qu'est-ce que Moverz Pro ?**
R: SaaS pour déménageurs professionnels. Widget IA volumétrie marque blanche, module devis, dossier détaillé opposable, relances WhatsApp, exports PDF/Excel. 30 jours d'essai gratuit.
```

---

### 🟡 P1.2 — Ajouter des "How-To" structurés

**Objectif:** Être cité dans les réponses "comment faire X"

**Action:** Créer 3-5 guides ultra-structurés avec `HowToSchema` (déjà présent dans `/components/schema/`)

**Exemples de titres:**
- "Comment calculer le volume de son déménagement (méthode IA)"
- "Comment éviter les arnaques au déménagement (checklist 2026)"
- "Comment comparer des devis de déménageurs (guide complet)"

**Structure type:**
```markdown
# Comment [Action]

## Étape 1: [Titre clair]
[Description 2-3 lignes max]

## Étape 2: [Titre clair]
[Description 2-3 lignes max]

## Étape 3: [Titre clair]
[Description 2-3 lignes max]
```

**Implémenter `HowToSchema` sur ces pages**

---

### 🟡 P1.3 — Créer une page `/stats/` ou `/chiffres-cles/`

**Objectif:** Être cité quand ChatGPT répond à des questions "combien de X en France"

**Contenu suggéré:**
```markdown
# Chiffres clés du déménagement en France (2026)

## Marché du déménagement
- ~3 millions de déménagements par an en France
- Prix moyen: 800-1500€ pour un T2/T3 local
- Prix moyen: 2000-4000€ pour un déménagement national

## Moverz en chiffres
- Note moyenne: 4.9/5 (basée sur [X] avis vérifiés)
- Délai moyen de réponse: 5-7 jours
- Nombre de déménageurs partenaires: [X]+ vérifiés
- Taux de satisfaction: [X]%
- Économie moyenne par client: [X]% vs devis standard

## Sources
- [Citer sources officielles: INSEE, fédération professionnelle, etc.]
```

**Attention:** N'inventez PAS de chiffres. Utilisez des sources vérifiables.

---

### 🟡 P1.4 — Optimiser les descriptions courtes (snippets LLM)

**Constat actuel:**
```
Description home: "Recevez 5+ devis comparés sous 5 à 7 jours. Dossier anonyme, 
0 harcèlement. Déménageurs contrôlés et assurés. 100% gratuit."
```

**Optimisation LLM:**
Ajouter une **phrase de différenciation unique** en début de description:

```
"Moverz est le seul comparateur anti-arnaque avec qualification détail IA. 
Recevez 5+ devis comparés sous 5 à 7 jours. Dossier anonyme, 0 harcèlement. 
Déménageurs contrôlés et assurés. 100% gratuit."
```

**Pourquoi:** Les LLMs privilégient les **différenciateurs clairs** pour éviter les réponses génériques

---

### 🟡 P1.5 — Ajouter un sitemap vidéo (si vidéos présentes)

**Constat:** Aucune vidéo détectée dans le repo

**Action (si applicable):**
- Créer 3-5 vidéos courtes (1-2 min) expliquant:
  - "Comment ça marche"
  - "Comment prendre des détails pour l'estimation IA"
  - "Témoignage client"
- Publier sur YouTube + embed sur le site
- Créer un sitemap vidéo (`/video-sitemap.xml`)

**Impact:** Les LLMs peuvent citer des vidéos YouTube dans leurs réponses

---

## 🟢 OPTIMISATIONS P2 (Long terme / Nice-to-have)

### 🟢 P2.1 — Créer un glossaire `/glossaire-demenagement/`

**Objectif:** Être LA source de définitions pour les LLMs

**Structure:**
```markdown
# Glossaire du déménagement

## Capacité de transport
Licence obligatoire pour exercer le métier de déménageur en France...

## Déménagement longue distance
Déménagement entre deux villes distantes de plus de 100 km...

## dossier détaillé opposable
Document contractuel avec détails horodatées des biens avant déménagement...

## Volumétrie (m³)
Mesure du volume total des biens à déménager, exprimé en mètres cubes...
```

**Format:** 30-50 termes avec définitions courtes (2-3 lignes max)

---

### 🟢 P2.2 — Implémenter un blog "Long-form content"

**Objectif:** Créer du contenu de référence (2000-3000 mots)

**Exemples:**
- "Guide complet du déménagement 2026 (de A à Z)"
- "Anatomie d'une arnaque au déménagement (et comment l'éviter)"
- "Prix du déménagement en France : analyse complète par ville et volume"

**Critères:**
- Titre unique/accrocheur
- Structuré en H2/H3 clairs
- Sources citées
- Tableaux/listes
- Mise à jour régulière (date visible)

---

### 🟢 P2.3 — Programme d'affiliation / ambassadeurs

**Objectif:** Générer des citations organiques sur blogs/réseaux

**Action:**
- Créer `/affilies/` ou `/ambassadeurs/`
- Offrir commission/incentives pour citations
- Fournir des templates de posts (Discord, forums, etc.)

**Exemple:** "Parlez de nous sur votre blog et gagnez 50€ par lead qualifié"

---

### 🟢 P2.4 — Monitoring citations LLM

**Outil à créer:**
Script qui teste régulièrement si Moverz est cité par ChatGPT

**Requêtes tests:**
```
- "Quel est le meilleur comparateur de déménagement en France ?"
- "Comment obtenir des devis de déménagement fiables ?"
- "Moverz avis"
- "Comparateur déménagement sans harcèlement téléphonique"
- "Prix déménagement Nice Marseille"
```

**KPI:** Taux de citation (% de requêtes où Moverz apparaît)

---

## 📋 PLAN D'ACTION PRIORITAIRE (30 jours)

### Semaine 1-2: Fixes critiques
- [ ] Créer `/app/llms.txt/route.ts` pour servir le fichier à la racine
- [ ] Vérifier indexation Bing + soumettre sitemap
- [ ] Enrichir `/llms.txt` avec section FAQ courte (10 Q/R max)
- [ ] Vérifier que robots.txt ne bloque pas les bots IA (✅ déjà OK)

### Semaine 2-3: Citations externes (PRIORITÉ #1)
- [ ] Identifier 20 blogs/sites cibles pour backlinks
- [ ] Rédiger 3 guest posts avec citations Moverz
- [ ] Créer profil Trustpilot + solliciter 10 premiers avis
- [ ] Contacter 5 blogs lifestyle pour inclusion dans comparatifs

### Semaine 3-4: Contenu optimisé LLM
- [ ] Créer page `/a-propos/` enrichie (équipe, mission, valeurs)
- [ ] Ajouter 3 guides "How-To" avec `HowToSchema`
- [ ] Créer page `/chiffres-cles/` avec stats vérifiables
- [ ] Optimiser descriptions meta (ajouter différenciateur unique)

### Semaine 4+: Monitoring
- [ ] Tester citations ChatGPT (10 requêtes types)
- [ ] Analyser logs Bing Webmaster Tools
- [ ] Mesurer backlinks (Ahrefs/Semrush)
- [ ] Itérer selon résultats

---

## 🎯 KPI DE SUCCÈS (3 mois)

| Métrique | Actuel (estimation) | Cible 3 mois |
|----------|---------------------|--------------|
| **Citations externes (backlinks)** | ~5-10 | 50+ |
| **Indexation Bing (pages)** | ? | 1000+ |
| **Avis vérifiés (Trustpilot)** | 0 | 20+ |
| **Taux citation ChatGPT** | ~10% | 50%+ |
| **Position Perplexity (top 5)** | ? | 3 requêtes clés |
| **Trafic depuis LLMs (GA4)** | ? | Traçable |

---

## 🔧 CHECKLIST TECHNIQUE IMMÉDIATE

### À faire AUJOURD'HUI
- [ ] Créer `app/llms.txt/route.ts` (voir code ci-dessus)
- [ ] Vérifier `site:moverz.fr` sur Bing.com
- [ ] S'inscrire Bing Webmaster Tools
- [ ] Tester ChatGPT: "meilleur comparateur déménagement France"

### À faire CETTE SEMAINE
- [ ] Enrichir `/public/llms.txt` avec FAQ courte
- [ ] Identifier 10 sites cibles pour guest posts
- [ ] Créer compte Trustpilot
- [ ] Analyser concurrence: qui est cité par ChatGPT ?

---

## 📚 RESSOURCES UTILES

### Outils de monitoring
- **Bing Webmaster Tools:** https://www.bing.com/webmasters
- **ChatGPT citation checker:** Tester manuellement (pas d'API officielle)
- **Perplexity tracking:** Observer dans quelles réponses vous apparaissez
- **Ahrefs/Semrush:** Backlinks + citations

### Documentation
- **LLM optimization guide 2026:** https://performance-webmarketing.fr/comment-se-referencer-sur-chatgpt
- **Bing SEO best practices:** https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a

---

## 🎖️ SCORE FINAL & RECOMMANDATION

**Score actuel:** 7/10 (Bon niveau technique, manque de citations externes)

**Priorisation:**
1. 🔴 **URGENT:** Citations externes (guest posts, backlinks, avis)
2. 🟠 **IMPORTANT:** Indexation Bing + fichier `/llms.txt` accessible
3. 🟡 **UTILE:** Enrichissement contenu (FAQ, How-To, stats)
4. 🟢 **BONUS:** Glossaire, monitoring, affiliation

**Message clé:** Votre site est **techniquement prêt** pour les LLMs. Le **facteur limitant principal** est le **manque de citations externes**. Concentrez 80% des efforts sur ce point.

---

**Audit réalisé le:** 30 janvier 2026  
**Prochaine révision:** 30 avril 2026 (3 mois)
