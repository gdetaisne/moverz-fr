import type { CanonicalBlogPost } from "./blog-canonique";

export type ProBlogMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO
  updatedAt?: string; // ISO
  tags: string[];
  readingTimeMinutes?: number;
};

// Source: `content/blog-pro/*.md` (frontmatter). Ce fichier peut être régénéré via `scripts/generate-blog-pro.ts`.
export const BLOG_PRO_META: ProBlogMeta[] = [
  {
    slug: "visite-technique-vs-dossier-détail-impact-marge",
    title: "Visite technique vs dossier détaillé : quel impact sur la marge ?",
    description:
      "Comparer coût réel d’une visite technique vs dossier détaillé opposable. Où vous gagnez (ou perdez) de la marge, et comment fiabiliser vos devis.",
    publishedAt: "2026-01-15T00:00:00.000Z",
    tags: ["marge", "devis", "process", "rentabilite"],
    readingTimeMinutes: 9,
  },
  {
    slug: "reduire-litiges-jour-j-checklist-détails-declaration-valeur",
    title: "Réduire les litiges le jour J : checklist détails + déclaration de valeur",
    description:
      "La méthode simple (détails + déclaration de valeur) pour cadrer le périmètre, éviter les “ajouts”, et réduire les discussions le jour J.",
    publishedAt: "2026-01-15T00:00:00.000Z",
    tags: ["litiges", "détails", "assurance", "process"],
    readingTimeMinutes: 10,
  },
  {
    slug: "relances-whatsapp-augmenter-completion-dossiers",
    title: "Relances WhatsApp : augmenter le taux de complétion des dossiers",
    description:
      "Quels messages envoyer (et quand) pour récupérer les infos manquantes et convertir plus vite, sans harceler vos prospects.",
    publishedAt: "2026-01-15T00:00:00.000Z",
    tags: ["whatsapp", "conversion", "relances", "ops-commerciales"],
    readingTimeMinutes: 8,
  },
  {
    slug: "definition-lead-facturable-dossier-complet",
    title: "Définir un “lead facturable” : la règle simple qui évite les débats",
    description:
      "Une définition contractuelle claire (formulaire complété, détails optionnelles) pour éviter les malentendus et standardiser votre tunnel.",
    publishedAt: "2026-01-15T00:00:00.000Z",
    tags: ["pricing", "process", "ops"],
    readingTimeMinutes: 6,
  },
  {
    slug: "checklist-dossier-opposable-détails-inventaire",
    title: "Dossier opposable : la checklist minimale (détails, inventaire, valeur)",
    description:
      "Le minimum viable pour un dossier “opposable” : quelles détails, quels champs, quel inventaire, et quand forcer un dossier incomplet.",
    publishedAt: "2026-01-15T00:00:00.000Z",
    tags: ["détails", "inventaire", "process", "qualif"],
    readingTimeMinutes: 7,
  },
  {
    slug: "devis-fiable-sans-visite-technique-methodologie",
    title: "Devis fiable sans visite technique : la méthodologie en 3 étapes",
    description:
      "Comment chiffrer plus vite sans dégrader la qualité : infos projet, détails guidées, inventaire IA, et garde-fous anti-surprise.",
    publishedAt: "2026-01-15T00:00:00.000Z",
    tags: ["devis", "process", "qualif"],
    readingTimeMinutes: 8,
  },
  {
    slug: "exports-dossier-pdf-inventaire-excel-pour-crm",
    title: "Exports (PDF/Excel/CSV) : brancher votre process sans tout refaire",
    description:
      "Quels exports utiliser (dossier PDF, inventaire Excel, CSV) pour alimenter vos outils et standardiser vos dossiers entre commerciaux.",
    publishedAt: "2026-01-15T00:00:00.000Z",
    tags: ["exports", "crm", "ops"],
    readingTimeMinutes: 7,
  },
  {
    slug: "module-devis-grilles-km-m3-options",
    title: "Module devis : grilles (km/m³), saisons, options — ce qu’il faut cadrer",
    description:
      "Les points à verrouiller pour éviter les devis incohérents : règles de calcul, options, saisonnalité, édition et historique.",
    publishedAt: "2026-01-15T00:00:00.000Z",
    tags: ["devis", "pricing", "ops"],
    readingTimeMinutes: 7,
  },
  {
    slug: "rgpd-détails-retention-sous-traitance-demenageur",
    title: "RGPD & détails : rétention, suppression, portabilité — le guide pragmatique",
    description:
      "Qui est responsable de traitement ? Comment gérer suppression/portabilité ? Quoi dire au client sur l’hébergement et la rétention.",
    publishedAt: "2026-01-15T00:00:00.000Z",
    tags: ["rgpd", "conformite", "détails"],
    readingTimeMinutes: 8,
  },
  {
    slug: "augmenter-taux-reponse-devis-vitesse-qualif",
    title: "Augmenter le taux de réponse à vos devis : vitesse + dossier propre",
    description:
      "Pourquoi la vitesse de réponse et la qualité du dossier font le deal. Checkpoints pour réduire l’attente et relancer sans perdre du temps.",
    publishedAt: "2026-01-15T00:00:00.000Z",
    tags: ["conversion", "devis", "relances"],
    readingTimeMinutes: 7,
  },
];

export const CANONICAL_PRO_BLOG_POSTS: CanonicalBlogPost[] = [
  {
    slug: "visite-technique-vs-dossier-détail-impact-marge",
    title: "Visite technique vs dossier détaillé : quel impact sur la marge ?",
    description:
      "Comparer coût réel d’une visite technique vs dossier détaillé opposable. Où vous gagnez (ou perdez) de la marge, et comment fiabiliser vos devis.",
    type: "pilier",
    body: `# Visite technique vs dossier détaillé : quel impact sur la marge ?

Si vous êtes déménageur, vous connaissez le dilemme : **visite technique = devis plus fiable**, mais **visite technique = temps + déplacements + no-show**. À l’inverse, “tout au téléphone” va vite… et ouvre la porte aux surprises le jour J.

L’objectif ici : comparer **l’impact sur votre marge** (pas juste “le temps”) et poser une méthode simple pour chiffrer **sans visite**, avec un **dossier digital opposable** (détails + inventaire + déclaration de valeur).

> [DEMO]
> Voir Moverz en action (15 min).
> Dossier client + inventaire IA + déclaration de valeur + exports.

## 1) Le vrai coût d’une visite technique (coût complet)

Une visite technique, ce n’est pas “1h”. En coût complet, on additionne :

- **Prise de RDV + relances** (pour éviter le no-show)
- **Déplacement A/R**
- **Visite** (mesures, inventaire mental, contraintes accès)
- **Saisie + devis** (retour bureau)
- **Interruption de planning** (effet domino sur la journée)

Même si vous optimisez, l’ordre de grandeur est souvent **2h à 3h** par dossier (parfois plus si c’est loin / compliqué).

## 2) Ce que la visite technique “achète” vraiment : moins d’aléas

La visite technique sert surtout à réduire 3 aléas :

- **Volume sous-estimé** → temps + camion + main d’œuvre non facturés
- **Accès sous-estimés** (étages, portage, stationnement, lift) → surcoûts et tensions
- **Périmètre flou** → litiges “ajouts / pas prévu”

Si vous supprimez la visite **sans remplacer la preuve**, vous économisez du temps… mais vous “achetez” du risque.

## 3) dossier détaillé opposable : comment récupérer la marge sans déplacement

L’idée n’est pas “pas de visite”, c’est :

- **standardiser l’info** (même checklist pour tous les clients)
- **documenter** (détails) → opposable
- **industrialiser** (inventaire IA + relances automatiques)

### Le trio minimal (qui change la marge)

1) **détails guidées** pièce par pièce + zones “à risque” (cave, grenier, garage)  
2) **Inventaire** (automatique ou semi-automatique) pour sortir du “ça doit faire 25m³”  
3) **Déclaration de valeur** signée (et cohérente) pour cadrer assurance / responsabilité

Avec ça, vous récupérez le bénéfice de la visite (fiabilité) sans son coût (déplacements).

## 4) Quels dossiers doivent encore passer en “humain” ?

Il faut garder une porte de secours. Deux cas typiques :

- **détails incomplètes / incohérentes** (pièces manquantes, zones sensibles absentes)
- **Contrainte d’accès critique** (lift obligatoire, portage long, restrictions camion)

Dans ces cas, vous pouvez :

- demander 3 détails ciblées supplémentaires, ou
- faire un appel de 10 minutes, ou
- déclencher une visite (exception)

## 5) La règle ROI simple (sans tableur)

Si Moverz vous fait gagner \(2h\) par dossier, votre ROI dépend surtout de :

- votre coût horaire commercial (chargé)
- votre volume de dossiers
- votre taux de no-show / dossiers incomplets

À partir de quelques dossiers mensuels, **le temps économisé** dépasse rapidement le coût logiciel — sans compter les litiges évités.

## Conclusion

La visite technique protège la marge… mais coûte cher à produire. Un **dossier digital opposable** vous permet de garder la fiabilité (preuves + standardisation) tout en regagnant la vitesse.
`,
  },
  {
    slug: "reduire-litiges-jour-j-checklist-détails-declaration-valeur",
    title: "Réduire les litiges le jour J : checklist détails + déclaration de valeur",
    description:
      "La méthode simple (détails + déclaration de valeur) pour cadrer le périmètre, éviter les “ajouts”, et réduire les discussions le jour J.",
    type: "pilier",
    body: `# Réduire les litiges le jour J : checklist détails + déclaration de valeur

Les litiges “jour J” coûtent cher : temps perdu, équipe bloquée, tension client, parfois remise “pour calmer”, voire impayé. Dans 80% des cas, la racine est la même : **périmètre flou**.

Voici un protocole simple, réplicable par votre équipe : **détails + déclaration de valeur**, pour rendre le dossier **opposable**.

> [DEMO]
> Obtenir un dossier opposable automatiquement.
> détails guidées + inventaire IA + déclaration de valeur.

## 1) Les 3 litiges les plus fréquents (et comment les neutraliser)

### “Vous aviez dit 25m³, pas 32”
- Cause: détails absentes / inventaire approximatif  
- Fix: détails guidées + inventaire + statut “complet / partiel”

### “Ah mais il y a aussi la cave / le garage”
- Cause: zones “hors champ” jamais documentées  
- Fix: checklist explicite des zones à inclure + détail “porte ouverte”

### “Ce meuble n’était pas dans le devis”
- Cause: objet “sensibilité” (piano, frigo américain, armoire massive) non cadré  
- Fix: détails dédiées + champ “objets lourds / fragiles”

## 2) Checklist détails (minimum viable)

Objectif: **assez de preuve** pour chiffrer et éviter les surprises, sans demander 200 détails.

### Départ (détails recommandées)
- Salon: plan large + meubles volumineux
- Cuisine: plan large + électroménager (frigo, congélateur)
- Chambres: plan large + armoires/commodes
- SDB: plan large
- Couloir/escaliers: contraintes passage
- Cave / grenier / garage: plan large + volumes
- Balcon / terrasse: mobilier
- Cartons: 1 détail par “zone cartons”

### Accès (détails “anti-surprise”)
- Rue devant logement (stationnement possible ?)
- Entrée immeuble / portillon
- Escalier (largeur) et/ou ascenseur (dimensions)
- Étages: détail du palier + couloirs étroits

## 3) Déclaration de valeur : pourquoi ça change (vraiment) la discussion

La déclaration de valeur sert à **aligner** :

- le client (ce qu’il estime “important”)
- l’assurance / responsabilité
- le devis (options de protection, fragiles)

Surtout, c’est un document qui remet du **factuel** dans l’échange.

## 4) La règle “dossier incomplet” (pour éviter le piège)

Si le client ne met pas toutes les détails, vous avez 2 options claires :

- **forcer le dossier** (“j’avance comme ça”) → vous chiffragez avec prudence (et vous l’assumez)
- **relancer** avec ce qui manque → vous sécurisez le devis

Le pire: rester dans le flou (“on verra”) → litige quasi certain.

## 5) Résultat attendu (côté équipe)

Quand le dossier est standardisé, votre équipe gagne :

- moins d’allers-retours
- moins de “questions bêtes” (infos déjà là)
- moins de négociations sous pression le jour J

## Conclusion

Vous ne supprimez pas tous les imprévus… mais vous supprimez les litiges évitables : ceux causés par un dossier non documenté. détails + déclaration de valeur = base d’un dossier opposable.
`,
  },
  {
    slug: "relances-whatsapp-augmenter-completion-dossiers",
    title: "Relances WhatsApp : augmenter le taux de complétion des dossiers",
    description:
      "Quels messages envoyer (et quand) pour récupérer les infos manquantes et convertir plus vite, sans harceler vos prospects.",
    type: "pilier",
    body: `# Relances WhatsApp : augmenter le taux de complétion des dossiers

Le sujet n’est pas “faire plus de relances”. Le sujet est : **récupérer vite ce qui manque** pour pouvoir chiffrer proprement. WhatsApp est souvent le canal le plus efficace… si on respecte 3 règles : clarté, timing, et “next step” simple.

> [DEMO]
> Voir la séquence de relance Moverz Pro.
> Relances selon statut + “ce qui manque” + option “avancer comme ça”.

## 1) Les 3 statuts à piloter (simple)

Pour éviter les relances génériques, pilotez par statut :

- **Sans détails**: formulaire rempli, pas de preuves
- **Partiel**: détails incomplètes, infos manquantes ciblées
- **Complet**: dossier prêt → votre action = devis

## 2) La meilleure relance = “voici ce qui manque”

Votre message doit contenir :

- 1 phrase de contexte
- la liste courte des éléments manquants
- un lien unique de reprise
- une alternative (“si vous préférez, on avance sans les détails”)

### Exemple (partiel)

> Bonjour 👋 on a bien reçu votre dossier.  
> Il manque 2 détails pour chiffrer sans surprise : **cave** + **accès escalier**.  
> Vous pouvez les ajouter ici : (lien)  
> Si vous préférez, répondez “OK” et on avance comme ça (avec une marge de sécurité).

## 3) Timing recommandé (sans harceler)

Un schéma pragmatique :

- J0: confirmation immédiate (merci + lien)
- J1: relance ciblée “ce qui manque”
- J3: dernière relance + option “avancer comme ça”

Ensuite, stop ou bascule sur appel court (selon votre process).

## 4) Le piège à éviter : relancer sans “prochaine action”

“Vous en êtes où ?” ne marche pas.  
“Ajoutez 2 détails ici” marche.

## 5) Mesurer le ROI (sans sophistication)

Suivez 3 chiffres :

- taux de complétion des dossiers
- délai moyen entre “lead” et “dossier complet”
- taux de devis envoyés (et vitesse d’envoi)

WhatsApp n’est pas un gadget : c’est un accélérateur de cycle.
`,
  },
  {
    slug: "definition-lead-facturable-dossier-complet",
    title: "Définir un “lead facturable” : la règle simple qui évite les débats",
    description:
      "Une définition contractuelle claire (formulaire complété, détails optionnelles) pour éviter les malentendus et standardiser votre tunnel.",
    type: "satellite",
    body: `# Définir un “lead facturable” : la règle simple qui évite les débats

## Pourquoi ce sujet revient toujours
- Quand facturer ? À la création, au formulaire, à l’IA, à la conversion ?

## La définition simple (et défendable)
- Lead = formulaire complété (détails optionnelles)
- Un client = un dossier (les modifications ne changent pas la facturation)

## Doublons : la règle opérationnelle
- Unicité (contact + société + période) pour éviter les doublons “tech”

> [DEMO]
> Voir comment Moverz compte un lead (et gère les statuts).
`,
  },
  {
    slug: "checklist-dossier-opposable-détails-inventaire",
    title: "Dossier opposable : la checklist minimale (détails, inventaire, valeur)",
    description:
      "Le minimum viable pour un dossier “opposable” : quelles détails, quels champs, quel inventaire, et quand forcer un dossier incomplet.",
    type: "satellite",
    body: `# Dossier opposable : la checklist minimale (détails, inventaire, valeur)

## Le “minimum viable” (ce qui doit être dans 100% des dossiers)
- Infos client + projet (adresses, dates/flex, formule)
- détails guidées (pièces + accès)
- Inventaire (même partiel)
- Déclaration de valeur

## Quand forcer un dossier incomplet (et comment le cadrer)
- Option “j’avance comme ça”
- Marge de sécurité assumée

> [DEMO]
> Générer automatiquement inventaire + déclaration de valeur.
`,
  },
  {
    slug: "devis-fiable-sans-visite-technique-methodologie",
    title: "Devis fiable sans visite technique : la méthodologie en 3 étapes",
    description:
      "Comment chiffrer plus vite sans dégrader la qualité : infos projet, détails guidées, inventaire IA, et garde-fous anti-surprise.",
    type: "satellite",
    body: `# Devis fiable sans visite technique : la méthodologie en 3 étapes

## Étape 1 — Cadrer le projet
- adresses, dates/flex, contraintes, formule

## Étape 2 — Capturer la preuve
- détails + accès + zones à risque

## Étape 3 — Convertir en devis
- règles de calcul + options + historique

> [DEMO]
> Voir le workflow “lead → dossier → devis”.
`,
  },
  {
    slug: "exports-dossier-pdf-inventaire-excel-pour-crm",
    title: "Exports (PDF/Excel/CSV) : brancher votre process sans tout refaire",
    description:
      "Quels exports utiliser (dossier PDF, inventaire Excel, CSV) pour alimenter vos outils et standardiser vos dossiers entre commerciaux.",
    type: "satellite",
    body: `# Exports (PDF/Excel/CSV) : brancher votre process sans tout refaire

## 3 exports utiles (et quand les utiliser)
- PDF dossier détaillé (preuve)
- Excel inventaire (exploitation)
- CSV leads/dossiers (outils internes)

## Cas d’usage
- CRM, planning, suivi, qualité

> [DEMO]
> Voir les exports Moverz (PDF/Excel/CSV).
`,
  },
  {
    slug: "module-devis-grilles-km-m3-options",
    title: "Module devis : grilles (km/m³), saisons, options — ce qu’il faut cadrer",
    description:
      "Les points à verrouiller pour éviter les devis incohérents : règles de calcul, options, saisonnalité, édition et historique.",
    type: "satellite",
    body: `# Module devis : grilles (km/m³), saisons, options — ce qu’il faut cadrer

## Les règles à figer
- grilles km/m³, minima, paliers
- saisonnalité
- options (lift, emballage, fragiles)

## Édition + historique (indispensable)
- qui a changé quoi, quand

> [DEMO]
> Voir le module devis (édition + historique).
`,
  },
  {
    slug: "rgpd-détails-retention-sous-traitance-demenageur",
    title: "RGPD & détails : rétention, suppression, portabilité — le guide pragmatique",
    description:
      "Qui est responsable de traitement ? Comment gérer suppression/portabilité ? Quoi dire au client sur l’hébergement et la rétention.",
    type: "satellite",
    body: `# RGPD & détails : rétention, suppression, portabilité — le guide pragmatique

## Rôles
- déménageur = responsable de traitement
- Moverz = sous-traitant

## Rétention et suppression
- détails conservées jusqu’à 60 jours après la date prévue, puis suppression
- dossiers anonymisés ensuite

## Portabilité
- exports sur demande

> [DEMO]
> Voir la politique de rétention et les exports.
`,
  },
  {
    slug: "augmenter-taux-reponse-devis-vitesse-qualif",
    title: "Augmenter le taux de réponse à vos devis : vitesse + dossier propre",
    description:
      "Pourquoi la vitesse de réponse et la qualité du dossier font le deal. Checkpoints pour réduire l’attente et relancer sans perdre du temps.",
    type: "satellite",
    body: `# Augmenter le taux de réponse à vos devis : vitesse + dossier propre

## Le vrai concurrent = le délai
- J+0 vs J+3 : impact sur la conversion

## Dossier propre = moins d’aller-retour
- preuves + infos complètes = devis plus rapide

## Relances
- par statut + “ce qui manque”

> [DEMO]
> Voir comment accélérer “dossier complet → devis”.
`,
  },
];

