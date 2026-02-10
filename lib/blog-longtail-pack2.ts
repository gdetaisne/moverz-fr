import type { CanonicalBlogPost } from "@/lib/blog-canonique";

export type BlogFAQItem = { question: string; answer: string };

const COMMON_APPENDIX = `

## Annexe : la méthode “devis comparables” (anti‑surprise)

Ce que vous cherchez, ce n’est pas “le devis le moins cher”. C’est **un devis fiable** (donc comparable). Pour ça, il suffit de standardiser 6 infos :

- Logement : appartement/maison, étage, ascenseur oui/non
- Accès camion : détail du point d’arrêt possible
- Distance camion → porte : en pas
- Passage le plus étroit : détail
- Objets “limites” : 2–5 détails (gros/meubles lourds/fragiles)
- Dates : 2–3 options si possible (la flexibilité aide souvent)

Message copier/coller :

- Logement : ___ (étage ___, ascenseur oui/non)
- Accès camion : détail jointe
- Distance camion→porte : ___ pas
- Passage le plus étroit : détail jointe
- Gros meubles / objets lourds : détails jointes
- Dates possibles : ___ / ___ / ___
`;

export const LONGTAIL_PACK2_FAQS: Record<string, BlogFAQItem[]> = {
  "autorisation-stationnement-demenagement-demande-modele": [
    {
      question: "Dois-je demander une autorisation de stationnement pour un déménagement ?",
      answer:
        "Souvent oui si vous devez réserver un emplacement, bloquer une zone ou vous garer d’une manière exceptionnelle. Les règles varient selon la commune : le plus sûr est d’anticiper et de demander tôt.",
    },
    {
      question: "Quelles infos faut-il généralement fournir ?",
      answer:
        "Adresse, date/horaires, type de véhicule, longueur approximative, et un contact sur place. Joindre une détail du lieu peut aider à éviter les malentendus.",
    },
    {
      question: "Combien de temps à l’avance faut-il s’y prendre ?",
      answer:
        "Le plus tôt possible, idéalement dès que la date est fixée. Certaines mairies traitent vite, d’autres ont des délais : anticipez pour ne pas improviser le jour J.",
    },
  ],
  "cartons-gratuits-ou-trouver": [
    {
      question: "Où trouver des cartons gratuits sans y passer des heures ?",
      answer:
        "Le plus simple est de cibler des commerces qui reçoivent des cartons propres et solides, et de passer à des horaires réguliers. Les plateformes de dons et la récupération entre particuliers fonctionnent très bien aussi.",
    },
    {
      question: "Quels cartons éviter ?",
      answer:
        "Évitez les cartons trop fragiles, humides, ou déformés. Un carton qui “plie” vide va plier plein — et c’est là que ça casse.",
    },
    {
      question: "Combien de cartons prévoir ?",
      answer:
        "Ça dépend du volume et de votre discipline d’emballage. Le bon réflexe : privilégier des cartons moyens, éviter le “trop lourd”, et compléter avec sacs/caisses pour les urgences.",
    },
  ],
  "assurance-demenagement-dommages-que-couvre": [
    {
      question: "L’assurance d’un déménagement couvre-t-elle tout automatiquement ?",
      answer:
        "Non. La couverture dépend du contrat, de la déclaration de valeur, et parfois de conditions (emballage, manutention). Le bon réflexe : demander noir sur blanc ce qui est couvert et ce qui ne l’est pas.",
    },
    {
      question: "Que dois-je préparer avant le jour J ?",
      answer:
        "Une liste courte des objets de valeur/fragiles, des détails simples, et une estimation de valeur cohérente. L’objectif est d’éviter une “zone grise” si un dommage arrive.",
    },
    {
      question: "Comment éviter les disputes après ?",
      answer:
        "En standardisant l’inventaire, en documentant l’état des objets sensibles, et en vérifiant les documents à la fin (sans se presser).",
    },
  ],
  "emballer-vaisselle-rapide-sans-casse": [
    {
      question: "Faut-il emballer chaque assiette individuellement ?",
      answer:
        "Pas forcément, mais il faut éviter que ça bouge. Le principe : caler, intercaler, remplir les vides. Une pile stable est meilleure qu’un carton “bourré” qui s’écrase.",
    },
    {
      question: "Quel est le piège n°1 avec la vaisselle ?",
      answer:
        "Le carton trop lourd. Même bien emballé, un carton trop lourd se déforme et se manipule mal, ce qui augmente le risque.",
    },
    {
      question: "Comment étiqueter pour que ça soit respecté ?",
      answer:
        "Écrire “Fragile + Haut” et préciser la pièce. Plus c’est clair, plus la manutention est adaptée.",
    },
  ],
  "emballer-ecran-tv-ordinateur": [
    {
      question: "Comment protéger un écran sans son carton d’origine ?",
      answer:
        "Le principe : surface protégée (tissu/film), angles renforcés, et rigidité (plaque/carton double). L’écran doit être transporté verticalement si possible.",
    },
    {
      question: "Dois-je démonter le pied / support ?",
      answer:
        "Souvent oui : ça réduit le risque de torsion et ça facilite la protection. Gardez vis et pièces dans un sachet scotché au support.",
    },
    {
      question: "Qu’est-ce qui casse le plus souvent ?",
      answer:
        "Les angles et la pression ponctuelle (un carton lourd appuyé dessus). D’où l’intérêt de protéger les angles et d’éviter la pression.",
    },
  ],
  "demenager-avec-enfants-bas-age-checklist": [
    {
      question: "Quel est le meilleur “hack” pour déménager avec des enfants ?",
      answer:
        "Préparer un kit 48h (vêtements, doudou, repas simples) + garder une routine minimale. Ça réduit énormément le stress.",
    },
    {
      question: "Faut-il faire garder les enfants le jour J ?",
      answer:
        "Si vous pouvez, oui c’est plus simple. Sinon, créez un rôle “référent enfants” et une zone safe, pour éviter le chaos.",
    },
    {
      question: "Que faire en priorité à l’arrivée ?",
      answer:
        "Couchage + coin repères (doudou/jeux) + dîner simple. Le déballage peut attendre.",
    },
  ],
  "demenager-avec-chat-chien-stress": [
    {
      question: "Comment éviter qu’un chat s’échappe pendant le déménagement ?",
      answer:
        "Pièce fermée “safe” pendant la manutention + référent qui contrôle les portes + transporteur prêt.",
    },
    {
      question: "Le chien doit-il rester attaché toute la journée ?",
      answer:
        "L’objectif est la sécurité et le calme : balade avant, coin stable avec eau, et présence d’un référent pour gérer excitation et portes.",
    },
    {
      question: "Comment faciliter l’arrivée dans le nouveau logement ?",
      answer:
        "Installer en premier eau/couchage, limiter la stimulation, et reconstruire une routine simple.",
    },
  ],
  "demenager-plantes-sans-les-tuer": [
    {
      question: "Quelle est l’erreur n°1 avec les plantes ?",
      answer:
        "Les laisser trop longtemps “en attente” pendant la manutention. Transport tardif, installation tôt : c’est le meilleur réflexe.",
    },
    {
      question: "Faut-il arroser juste avant ?",
      answer:
        "Évitez d’avoir un pot détrempé (plus lourd + risque de fuite). Gardez une humidité normale.",
    },
    {
      question: "Comment éviter de casser les branches ?",
      answer:
        "Stabiliser le pot, regrouper délicatement le feuillage, et éviter toute pression ponctuelle.",
    },
  ],
  "demenager-frigo-americain": [
    {
      question: "Quelles infos donner pour un devis fiable ?",
      answer:
        "détail du frigo + détail du passage le plus étroit + escalier/ascenseur + distance camion→porte.",
    },
    {
      question: "Faut-il un monte‑meuble ?",
      answer:
        "Pas forcément. C’est utile si l’accès intérieur est trop risqué ou si l’objet ne passe pas.",
    },
    {
      question: "Quelle est l’erreur la plus fréquente ?",
      answer:
        "Ne pas l’annoncer clairement : ça crée des surprises sur la méthode et le temps.",
    },
  ],
  "demenager-machine-a-laver-lave-vaisselle": [
    {
      question: "Pourquoi une machine fuit après un déménagement ?",
      answer:
        "Souvent à cause d’eau résiduelle et de tuyaux mal sécurisés. Anticiper avec des chiffons et une préparation simple évite les dégâts.",
    },
    {
      question: "Le transport peut-il abîmer la machine ?",
      answer:
        "Oui si elle subit des chocs ou une torsion. Calage, protection et manutention maîtrisée sont clés.",
    },
    {
      question: "Que signaler pour un devis ?",
      answer:
        "Poids/objets lourds + accès réel (escaliers, paliers, distance camion→porte).",
    },
  ],
  "inventaire-demenagement-modele-simple": [
    {
      question: "Mon inventaire doit-il être exact au carton près ?",
      answer:
        "Non. Il doit être cohérent. L’objectif est de comparer des devis, pas de produire un document parfait.",
    },
    {
      question: "Qu’est-ce qui fait la différence dans un devis ?",
      answer:
        "Les objets “limites” (lourds/fragiles) et l’accès réel (détails + distance camion→porte).",
    },
    {
      question: "Le format le plus efficace ?",
      answer:
        "3 listes (gros meubles, cartons, objets limites) + 4 détails d’accès. Rapide et très fiable.",
    },
  ],
  "demenagement-sous-la-pluie-proteger": [
    {
      question: "Quel est le risque n°1 quand il pleut ?",
      answer:
        "L’eau qui s’infiltre : cartons qui ramollissent, glissades, et objets qui prennent l’humidité. Il faut surtout protéger les zones de transition (porte/couloir/ascenseur).",
    },
    {
      question: "Comment protéger sans acheter trop de matériel ?",
      answer:
        "Prioriser les objets sensibles (textiles, cartons fragiles), créer une zone tampon sèche, et couvrir pendant les transferts plutôt que “tout le temps”.",
    },
    {
      question: "Faut-il décaler le déménagement s’il pleut ?",
      answer:
        "Pas nécessairement. Une organisation simple (zone tampon + protection + rythme) suffit souvent à éviter les dégâts.",
    },
  ],
  "demenagement-canicule-ete": [
    {
      question: "Qu’est-ce qui rend un déménagement en canicule difficile ?",
      answer:
        "Le rythme baisse et la fatigue augmente. L’objectif est de protéger les personnes (pauses/eau) et de limiter l’exposition des objets sensibles à la chaleur.",
    },
    {
      question: "Quels objets souffrent le plus de la chaleur ?",
      answer:
        "Ce qui est sensible aux extrêmes (plantes, certaines électroniques/objets fragiles). Le bon réflexe : minimiser le temps d’exposition.",
    },
    {
      question: "Comment organiser la journée pour éviter l’épuisement ?",
      answer:
        "Préparer en amont, réduire les allers‑retours, et garder un référent accès pour éviter les pertes de temps inutiles.",
    },
  ],
  "demonter-remonter-canape-porte-etroite": [
    {
      question: "Comment savoir si un canapé passera ?",
      answer:
        "Identifier le passage le plus étroit (porte/couloir/angle) et comparer avec le gabarit du canapé. Une détail du passage aide beaucoup.",
    },
    {
      question: "Le démontage suffit-il toujours ?",
      answer:
        "Souvent, mais pas toujours : la rotation sur palier/angle peut bloquer. D’où l’intérêt de documenter l’escalier/palier.",
    },
    {
      question: "Quand envisager un lift ?",
      answer:
        "Quand ça ne passe pas ou quand l’escalier est trop risqué. La décision doit être prise sur contraintes réelles, pas au feeling.",
    },
  ],
  "emballer-livres-sans-carton-trop-lourd": [
    {
      question: "Pourquoi les cartons de livres posent problème ?",
      answer:
        "Parce qu’ils deviennent très lourds très vite : manutention plus lente, risque de chute, et carton qui se déforme.",
    },
    {
      question: "Quelle taille de carton utiliser ?",
      answer:
        "Petits cartons. Règle : si vous grimacez en le soulevant, c’est trop lourd.",
    },
    {
      question: "Comment gagner du temps sans faire n’importe quoi ?",
      answer:
        "Standardiser : petits cartons, fond renforcé, étiquetage “lourd”, et zone tampon près de la porte.",
    },
  ],
  "etat-des-lieux-jour-demenagement-checklist": [
    {
      question: "Que faire en priorité avant de rendre les clés ?",
      answer:
        "Vérifier les zones souvent oubliées (placards, cave, balcon), faire un mini tour détail, et garder vos documents accessibles.",
    },
    {
      question: "Comment éviter d’oublier des affaires ?",
      answer:
        "Créer une checklist pièce par pièce et garder une zone “dernier passage” (sac/boîte) pour les essentiels.",
    },
    {
      question: "Quel est le piège classique ?",
      answer:
        "Vouloir aller trop vite après le chargement. Prenez 10 minutes : c’est souvent ce qui évite les galères après.",
    },
  ],
  "demenager-objets-fragiles-vitrine-miroir-table": [
    {
      question: "Quels sont les fragiles les plus risqués ?",
      answer:
        "Vitrines, miroirs, tables avec plateau fragile, objets avec angles exposés. Le risque est l’impact ponctuel et la torsion.",
    },
    {
      question: "Quelle est la règle de base ?",
      answer:
        "Protéger les angles, rigidifier, et éviter toute pression ponctuelle (carton lourd appuyé).",
    },
    {
      question: "Comment le signaler dans le devis ?",
      answer:
        "Liste courte + détails. Plus c’est clair, plus la méthode est cadrée (protection/équipe).",
    },
  ],
  "hauteur-camion-demenagement-gabarit": [
    {
      question: "Pourquoi le gabarit du camion compte ?",
      answer:
        "Parce que l’accès dépend de contraintes (hauteur, virages, passages). Si le camion ne peut pas se rapprocher, vous basculez en portage long.",
    },
    {
      question: "Que vérifier pour éviter une mauvaise surprise ?",
      answer:
        "Les points de passage critiques (portail, rampe, entrée parking) et le plan B (où s’arrêter + distance).",
    },
    {
      question: "Quelle info donner au déménageur ?",
      answer:
        "détails de l’accès et du point le plus contraignant. L’objectif : choisir la bonne logistique.",
    },
  ],
  "demenagement-weekend-comment-eviter-surcout": [
    {
      question: "Pourquoi le week‑end est souvent plus cher ?",
      answer:
        "Parce que la demande est plus forte : moins de disponibilités, créneaux plus tendus.",
    },
    {
      question: "Comment réduire le surcoût sans tout changer ?",
      answer:
        "Proposer une fenêtre (samedi matin, ou vendredi/samedi) et rendre l’accès très clair pour éviter les suppléments.",
    },
    {
      question: "La flexibilité aide vraiment ?",
      answer:
        "Souvent oui : c’est un des leviers les plus simples pour obtenir un meilleur créneau.",
    },
  ],
};

export const LONGTAIL_PACK2_POSTS: CanonicalBlogPost[] = [
  {
    slug: "autorisation-stationnement-demenagement-demande-modele",
    title: "Autorisation de stationnement pour déménagement : quand la demander + modèle de demande (simple)",
    description:
      "Réserver une place, éviter l’improvisation : guide pratique pour demander une autorisation de stationnement (sans se perdre), avec checklist et modèle de message.",
    type: "satellite",
    body: `# Autorisation de stationnement pour déménagement : quand la demander + modèle de demande (simple)

Le stationnement est l’un des meilleurs “leviers invisibles” d’un déménagement : si le camion est proche, tout va plus vite. Si le camion est loin, on bascule en **portage long**, et la journée peut changer du tout au tout.

Le problème : beaucoup de gens ne pensent à l’autorisation de stationnement qu’au dernier moment. Résultat : stress, retard, ou devis qui devient fragile (“on verra sur place”). Ce guide vous donne une méthode simple : **quand demander**, **quoi demander**, et **comment rédiger**.

> [CTA] Comparer des devis (accès clair)
> Un accès clair = un devis plus fiable. Standardisez votre dossier et comparez des devis comparables.

## 1) Est-ce que j’ai besoin d’une autorisation ?

Vous pouvez en avoir besoin si :

- Vous devez **réserver** un emplacement (ou une zone) pour que le camion puisse s’arrêter
- Vous devez stationner d’une manière “non standard” (zone de chargement, emplacement spécifique, etc.)
- L’accès est complexe (rue étroite, impasse, circulation dense) et vous voulez réduire l’improvisation

À l’inverse, si vous avez un accès privé (cour, allée, place) et une manœuvre simple, une autorisation est parfois inutile. Mais en cas de doute : anticipez. Le coût du “je verrai” est souvent élevé le jour J.

## 2) Les infos à rassembler (checklist)

Le but est de rendre la demande concrète :

- Adresse exacte (entrée / portail)
- Date + plage horaire (prévoir large)
- Type de véhicule (camion, petit utilitaire)
- Longueur/occupation approximative (si demandé)
- Une détail simple du lieu (point d’arrêt possible)
- Un contact joignable le jour J

## 3) Modèle de demande (copier/coller)

Adaptez selon votre mairie/gestionnaire. L’idée : être clair, court, complet.

**Objet : Demande d’autorisation / réservation de stationnement – déménagement**

Bonjour,

Je souhaite effectuer un déménagement à l’adresse suivante : **[ADRESSE]** le **[DATE]** sur le créneau **[HEURE DÉBUT – HEURE FIN]**.

Afin de faciliter l’accès du véhicule de déménagement et éviter toute gêne, je sollicite **[autorisation de stationnement / réservation d’emplacement / autre]** à proximité de l’entrée (détail jointe).

Véhicule prévu : **[type]** – contact sur place : **[nom + téléphone]**.

Merci par avance pour votre retour et les modalités éventuelles (documents, tarifs, signalisation).

Cordialement,  
**[Nom + coordonnées]**

## 4) Comment éviter l’erreur la plus fréquente

Erreur fréquente : demander “une place” sans préciser où. Or le point d’arrêt doit être **utile** :

- proche de l’entrée
- compatible avec la manœuvre
- cohérent avec les contraintes (largeur, circulation)

Une détail + 1 phrase (“idéalement devant le portail / à hauteur de…”) évite beaucoup d’aller-retours.

## 5) À faire le jour J (anti‑stress)

- Avoir les infos (mail/autorisation) disponibles
- Vérifier que l’accès est dégagé
- Prévoir un “référent accès” (1 personne)

## Liens utiles

- [Portage long : camion loin de l’entrée](/blog/portage-long-camion-loin-entree/)
- [Rue étroite / impasse : plan anti‑galère](/blog/demenagement-rue-etroite-impasse/)

## FAQ

### Dois-je demander une autorisation de stationnement pour un déménagement ?
Souvent oui si vous devez réserver un emplacement ou stationner de manière exceptionnelle. Les règles varient : anticipez.

### Quelles infos fournir ?
Adresse, date/horaires, type de véhicule, contact, et si possible une détail du lieu.

### Combien de temps à l’avance ?
Le plus tôt possible dès que la date est fixée.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "cartons-gratuits-ou-trouver",
    title: "Cartons de déménagement gratuits : où en trouver vite (sans cartons pourris) + plan en 30 minutes",
    description:
      "Cartons gratuits oui, mais solides. Guide pratique : où chercher, à quels horaires, quels cartons éviter, et comment s’organiser rapidement.",
    type: "pilier",
    body: `# Cartons de déménagement gratuits : où en trouver vite (sans cartons pourris) + plan en 30 minutes

Chercher des cartons gratuits peut être très rentable… ou très chronophage. Le secret, ce n’est pas “faire le tour partout”. C’est de viser les bonnes sources, aux bons horaires, et de savoir reconnaître un carton qui va tenir.

Ce guide vous donne une méthode rapide : récupérer **assez** de cartons, **propres**, et **solides**, sans y passer la journée.

> [CTA] Besoin d’un devis fiable ?
> Même avec des cartons gratuits, la fiabilité du devis dépend de l’accès et du volume. Comparez des devis comparables.

## 1) Les 3 règles pour gagner du temps

1. **Privilégier les cartons moyens** (moins de risques de “trop lourd”).
2. **Récupérer propre** : carton sec, non déformé, pas “mou”.
3. **Faire un plan** : 2–3 spots maximum, sinon vous perdez du temps.

## 2) Où trouver des cartons (sans “inventer” de bons plans locaux)

Sans citer de magasins précis, les meilleures sources sont celles qui reçoivent des cartons **régulièrement** :

- Commerces et points de vente (livraisons fréquentes)
- Réseaux de dons entre particuliers (cartons déjà triés)
- Entourage (quelqu’un a déménagé récemment)

Le but n’est pas d’avoir “le carton parfait”. Le but est d’avoir un stock **cohérent** et **standardisé**.

## 3) Les cartons à éviter (sinon ça casse)

- Humides (même un peu)
- Déformés (angles arrondis)
- Trop grands (ça devient lourd trop vite)
- Avec fond fragilisé (scotch arraché, fibre abîmée)

Astuce : pliez/ouvrez le carton. S’il craque ou se “vrille”, il est fatigué.

## 4) Plan “30 minutes”

Objectif : avoir un stock suffisant pour démarrer.

- 10 minutes : 1er spot (cartons moyens + solides)
- 10 minutes : 2e spot (compléter)
- 10 minutes : retour + tri rapide (garder les meilleurs)

Ensuite, vous complétez au fil de la semaine si besoin.

## 5) Comment emballer pour éviter les cartons trop lourds

Le piège n°1 : livres/vaisselle dans un grand carton.

Règle simple :

- Lourd = petit carton
- Fragile = calage + pas de vide
- Léger = grand carton

## Liens utiles

- [Emballer la vaisselle sans casse](/blog/emballer-vaisselle-rapide-sans-casse/)
- [Petit déménagement (10–15 cartons)](/blog/petit-demenagement-10-15-cartons/)

## FAQ

### Où trouver des cartons gratuits sans y passer des heures ?
En ciblant des sources régulières (livraisons) et/ou des dons entre particuliers, avec 2–3 spots maximum.

### Quels cartons éviter ?
Humides, déformés, trop grands, ou avec fond fatigué.

### Combien de cartons prévoir ?
Selon votre volume, mais privilégiez les cartons moyens et évitez le “trop lourd”.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "assurance-demenagement-dommages-que-couvre",
    title: "Assurance déménagement : que couvre vraiment la “casse” (et comment éviter les zones grises)",
    description:
      "Guide pratique (sans jargon) : comment préparer l’assurance, déclarer les objets sensibles, documenter l’état, et éviter les disputes après le déménagement.",
    type: "pilier",
    body: `# Assurance déménagement : que couvre vraiment la “casse” (et comment éviter les zones grises)

L’assurance, c’est souvent le sujet qu’on repousse… puis qu’on découvre “en urgence” si un dommage arrive. Le but de cet article n’est pas de faire du juridique. Le but est de vous donner une méthode simple : **réduire le risque**, et si un problème arrive, éviter les zones grises.

> [CTA] Comparer des devis (et les conditions) clairement
> Un devis comparable, c’est aussi des conditions comparables. Demandez des devis standardisés.

## 1) Le vrai sujet : la clarté

Dans 90% des cas, les disputes naissent d’un flou :

- valeur non déclarée
- objet “fragile” non signalé
- emballage non cadré
- état initial non documenté

Ce guide est une checklist anti‑flou.

## 2) Avant le déménagement : le trio gagnant

### A) Liste courte des objets sensibles

Pas un inventaire exhaustif. Une liste “risque” :

- objets de valeur
- objets fragiles
- objets lourds difficiles

### B) détails simples

2 détails par objet sensible, sans mise en scène. L’objectif : documenter l’état.

### C) Déclaration cohérente

L’idée est d’éviter l’écart entre “valeur ressentie” et “valeur déclarée”. Soyez cohérent et transparent.

## 3) Le jour J : les 3 minutes qui évitent les disputes

- Indiquer clairement les cartons “fragile”
- Identifier les objets sensibles (sans dramatiser)
- Garder un “référent” qui sait ce qui est important

## 4) Après : comment vérifier sans perdre 1 heure

Règle : vérifier **les zones à risque** en priorité :

- angles de meubles
- écrans
- vitres/miroirs
- gros électroménager

Et ne pas se presser : mieux vaut 10 minutes calmes que 2 jours de mails flous.

## Liens utiles

- [Objets lourds : infos à donner](/blog/demenagement-objets-lourds-frigo-piano-coffre/)
- [Monte‑meuble : quand c’est indispensable](/blog/monte-meuble-quand-indispensable/)

## FAQ

### L’assurance couvre-t-elle tout automatiquement ?
Non. Ça dépend du contrat, de la déclaration, et parfois de conditions (emballage/manutention).

### Que préparer avant le jour J ?
Liste d’objets sensibles + détails simples + déclaration cohérente.

### Comment éviter les disputes après ?
Standardiser l’inventaire et vérifier les objets sensibles sans se presser.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "emballer-vaisselle-rapide-sans-casse",
    title: "Emballer la vaisselle vite (et sans casse) : méthode simple + checklist",
    description:
      "Vaisselle = casse si ça bouge. Guide ultra concret : calage, cartons adaptés, erreurs à éviter, et checklist pour emballer rapidement.",
    type: "satellite",
    body: `# Emballer la vaisselle vite (et sans casse) : méthode simple + checklist

La vaisselle, ce n’est pas “fragile parce que fragile”. C’est fragile parce qu’elle casse quand :

- ça bouge dans le carton
- le carton est trop lourd et se déforme
- l’impact se concentre sur un coin/angle

Ce guide vous donne une méthode simple, rapide, et fiable.

> [CTA] Comparer des devis (fragiles inclus)
> Les devis sont plus fiables quand vous standardisez l’inventaire et les accès.

## 1) La règle d’or : zéro vide

Si un objet peut bouger, il va bouger. Donc :

- intercaler
- caler
- remplir les espaces

Le but n’est pas d’acheter “le papier parfait”. Le but est de supprimer le mouvement.

## 2) Choisir les bons cartons (sinon ça devient lourd)

Vaisselle = lourd. Donc :

- cartons **petits à moyens**
- fond renforcé (double scotch)
- pas de “grand carton de vaisselle”

## 3) La méthode rapide (assiettes, verres, bols)

- Assiettes : transport “sur tranche” (plus stable)
- Verres : calés, séparés, pas de pression
- Bols : intercalés, pas empilés à l’infini

## 4) Checklist 15 minutes (avant de fermer un carton)

- Fond renforcé
- Rien ne bouge quand vous secouez très légèrement
- Étiquette : “fragile + haut”
- Poids : si vous grimacez, c’est trop lourd

## Liens utiles

- [Emballer un écran TV/ordinateur](/blog/emballer-ecran-tv-ordinateur/)
- [Petit déménagement (10–15 cartons)](/blog/petit-demenagement-10-15-cartons/)

## FAQ

### Faut-il emballer chaque assiette individuellement ?
Pas forcément, mais il faut éviter le mouvement : intercaler et caler.

### Piège n°1 ?
Le carton trop lourd : il se déforme et devient risqué.

### Étiquetage ?
“Fragile + Haut” + pièce : c’est simple et ça marche.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "emballer-ecran-tv-ordinateur",
    title: "Emballer un écran TV / ordinateur sans le casser : méthode (sans carton d’origine)",
    description:
      "Écrans = pression + angles. Guide pratique : rigidifier, protéger, transporter, et éviter les 5 erreurs qui cassent le plus souvent.",
    type: "satellite",
    body: `# Emballer un écran TV / ordinateur sans le casser : méthode (sans carton d’origine)

Un écran casse rarement “par hasard”. Il casse parce qu’il subit une pression ponctuelle (un coin, un carton lourd), ou une torsion. La solution : **rigidité**, **angles protégés**, et **transport vertical** quand possible.

> [CTA] Comparer des devis (objets fragiles inclus)
> Déclarez vos objets sensibles et standardisez l’accès : devis plus fiables, moins de surprises.

## 1) Le principe : rigidifier + protéger la surface

Sans carton d’origine, vous recréez une structure :

- surface protégée (tissu/film)
- angles renforcés
- panneau rigide (carton double / plaque légère) pour éviter la flexion

## 2) Le transport : vertical, sans pression

- Vertical = mieux
- Ne jamais mettre un carton lourd “contre” l’écran
- Fixer ou caler pour éviter la chute

## 3) Ordinateur : le point sensible

Pour un ordinateur fixe :

- sécuriser les éléments internes si besoin
- protéger les côtés (angles)
- éviter les chocs

## 4) Les 5 erreurs qui cassent le plus souvent

1. écran posé à plat sous une pile
2. angles non protégés
3. pression ponctuelle (sangle mal placée)
4. écran qui bouge dans une housse
5. transport sans calage

## Liens utiles

- [Assurance : éviter les zones grises](/blog/assurance-demenagement-dommages-que-couvre/)
- [Vaisselle : emballage sans casse](/blog/emballer-vaisselle-rapide-sans-casse/)

## FAQ

### Comment protéger un écran sans carton d’origine ?
Protéger la surface, renforcer les angles, et rigidifier avec un panneau/carton double.

### Faut-il démonter le pied ?
Souvent oui. Et garder vis/pièces dans un sachet scotché au support.

### Qu’est-ce qui casse le plus ?
Les angles et la pression ponctuelle. D’où l’intérêt d’éviter toute pression directe.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "demenager-avec-enfants-bas-age-checklist",
    title: "Déménager avec des enfants en bas âge : plan simple (anti‑stress) + checklists",
    description:
      "Organisation, routines, zones : un plan concret pour déménager avec enfants sans exploser le jour J, avec checklists et priorités d’arrivée.",
    type: "pilier",
    body: `# Déménager avec des enfants en bas âge : plan simple (anti‑stress) + checklists

Déménager avec des enfants n’est pas “plus compliqué” à cause des cartons. C’est plus compliqué parce que vous devez gérer **changement + fatigue + logistique** en parallèle.

Le plan qui marche tient en 3 idées : garder une routine minimale, créer des zones, et préparer un kit 48h. On déroule.

> [CTA] Comparer des devis (sans stress)
> Un déménagement plus fluide passe aussi par un accès clair et un inventaire cohérent.

## 1) La règle d’or : préserver une routine minimale

Vous ne garderez pas tout. Mais gardez :

- un rituel de coucher
- des repas simples à heures stables
- un coin “repères” (doudou, 2–3 jouets)

Ça réduit les crises et vous récupérez du temps mental.

## 2) Les 3 zones (qui évitent le chaos)

### Zone A — “vie normale”

Jusqu’au dernier jour : un espace vivable (même petit).

### Zone B — “cartons”

Tout ce qui part, hors de la circulation.

### Zone C — “jour J”

Près de la porte : papiers, clés, sacs, goûters, doudou.

## 3) Plan J‑7 → J‑1 (réaliste)

### J‑7 : tri + cartons non essentiels

Objectif : réduire le volume. Moins de volume = moins de fatigue.

### J‑3 : préparer le kit 48h

Vêtements, doudou, snacks, trousse simple, affaires du soir.

### J‑1 : sécuriser le lendemain

Repas faciles, sacs prêts, couchage “clair” (où et comment).

## 4) Jour J : un rôle “référent enfants”

Si vous pouvez : une personne dédiée (même partiellement) qui ne gère pas les cartons, mais :

- besoins (eau, toilettes, pauses)
- sécurité (portes)
- repères (doudou, coin calme)

## 5) À l’arrivée : l’ordre des priorités

1. couchage
2. coin repères
3. dîner simple
4. douche + coucher

Le déballage peut attendre.

## Checklists

### Kit 48h

- vêtements 2 jours
- doudou + jouet essentiel
- snacks + eau
- trousse simple

### Arrivée

- lit prêt en premier
- coin doudou/jeux
- dîner simple

## FAQ

### Quel est le meilleur “hack” ?
Kit 48h + routine minimale.

### Faut-il faire garder ?
Si possible oui. Sinon : référent enfants + zone safe.

### Priorité à l’arrivée ?
Couchage puis repères.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "demenager-avec-chat-chien-stress",
    title: "Déménager avec un chat ou un chien : réduire le stress (avant, pendant, après) + checklist",
    description:
      "Chat/chien + portes ouvertes = risque. Guide pratique : zone safe, référent, transport, arrivée, et checklists anti‑fuite.",
    type: "pilier",
    body: `# Déménager avec un chat ou un chien : réduire le stress (avant, pendant, après) + checklist

Un déménagement vu par un animal : bruits, odeurs, cartons, portes ouvertes. Les risques principaux : stress et fuite. La solution : une zone “safe” + un référent + une arrivée organisée.

> [CTA] Comparer des devis (journée fluide)
> Une journée fluide limite aussi le stress pour les animaux : accès clair, timing clair.

## 1) Avant : créer une “bulle” stable

- une pièce dédiée (si possible)
- objets familiers (panier, litière, jouets)
- accès limité aux allers‑retours

## 2) Chat : la règle porte‑fermée

Pendant la manutention :

- chat dans la pièce safe (fermée)
- transporteur prêt
- référent qui gère les ouvertures

## 3) Chien : la règle “énergie gérée”

- balade avant
- coin stable + eau
- référent qui gère l’excitation

## 4) Arrivée : priorité à la routine

- eau + couchage
- calme
- exploration progressive

## Checklists

- transporteur / laisse
- eau + snacks
- pièce safe départ + arrivée

## FAQ

### Comment éviter la fuite ?
Pièce safe + référent portes.

### Le chien doit-il être attaché ?
Sécurité + calme : balade + référent + coin stable.

### Arrivée : quoi faire en premier ?
Eau/couchage puis routine simple.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "demenager-plantes-sans-les-tuer",
    title: "Déménager des plantes sans les abîmer : méthode, protections, et erreurs à éviter",
    description:
      "Plantes = chocs + extrêmes. Méthode simple : stabiliser les pots, protéger le feuillage, transporter tard, installer tôt.",
    type: "satellite",
    body: `# Déménager des plantes sans les abîmer : méthode, protections, et erreurs à éviter

Les plantes souffrent surtout des chocs, du balancement et des extrêmes (chaud/froid). On va droit au but : stabiliser le pot, réduire le mouvement, minimiser le temps d’exposition.

> [CTA] Déménagement plus fluide = moins de casse
> Une organisation claire réduit les à‑coups et le temps dehors.

## 1) Transporter tard, installer tôt

Les plantes devraient être parmi les dernières à charger et les premières à installer.

## 2) Protéger le pot (pas écraser la plante)

Le pot casse avant la plante. Stabilisez le pot et évitez la pression sur le feuillage.

## 3) Grandes plantes : gérer le balancement

Regrouper doucement le feuillage, éviter les torsions, et caler verticalement.

## 4) Arrivée : coin stable

Préparez un coin stable, accessible, et relativement calme.

## FAQ

### Erreur n°1 ?
Les laisser attendre trop longtemps.

### Arroser avant ?
Évitez le pot détrempé.

### Branches cassées ?
Stabiliser le pot + éviter les pressions.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "demenager-frigo-americain",
    title: "Déménager un frigo américain : préparation, transport, et 7 erreurs qui le ruinent",
    description:
      "Frigo américain = lourd + encombrant. Guide : accès, protection, manutention, et comment cadrer ça dans un devis sans surprises.",
    type: "satellite",
    body: `# Déménager un frigo américain : préparation, transport, et 7 erreurs qui le ruinent

Le frigo américain est un classique des surprises : lourd, encombrant, sensible aux chocs. La clé : annoncer l’objet, documenter l’accès, et sécuriser la manutention.

> [CTA] Comparer des devis (objet lourd inclus)
> Déclarez l’objet + envoyez les détails : devis plus fiables.

## 1) Préparation simple

- vider
- sécuriser ce qui bouge
- protéger les angles

## 2) Accès : ce qui compte vraiment

- passage le plus étroit (détail)
- escalier/palier ou ascenseur (détail)
- distance camion→porte (en pas)

## 3) Transport : calage + protection

L’objectif est d’éviter choc et torsion.

## 4) Les 7 erreurs fréquentes

1. ne pas annoncer l’objet
2. sous‑estimer un angle/palier
3. protection incomplète
4. forcer un passage
5. pression d’un carton lourd
6. pas de référent accès
7. installation improvisée

## FAQ

### Infos devis ?
détails accès + objet.

### Monte‑meuble ?
Uniquement si nécessaire selon accès.

### Erreur n°1 ?
Ne pas l’annoncer.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "demenager-machine-a-laver-lave-vaisselle",
    title: "Déménager une machine à laver / lave‑vaisselle : préparation, transport (sans dégâts)",
    description:
      "Électroménager = fuites + chocs. Méthode simple : sécuriser, caler, anticiper l’accès et éviter les erreurs.",
    type: "satellite",
    body: `# Déménager une machine à laver / lave‑vaisselle : préparation, transport (sans dégâts)

Une machine devient galère si on oublie l’eau résiduelle et la manutention. Ce guide vous donne une méthode simple : préparer, transporter, installer.

> [CTA] Comparer des devis (objets lourds)
> Déclarez les objets lourds + accès : devis plus fiables.

## 1) Préparation anti‑fuite

- prévoir chiffons
- sécuriser tuyaux
- protéger les angles

## 2) Transport anti‑choc

- caler
- éviter torsion/à‑coups
- ne pas “laisser rouler”

## 3) Installation

Préparer le chemin et l’emplacement.

## FAQ

### Pourquoi ça fuit ?
Eau résiduelle + tuyaux mal sécurisés.

### Comment éviter la casse ?
Calage + protection + manutention maîtrisée.

### À signaler pour devis ?
Objets lourds + accès réel.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "inventaire-demenagement-modele-simple",
    title: "Inventaire de déménagement : modèle simple (devis comparables) + méthode en 20 minutes",
    description:
      "3 listes + 4 détails : la méthode la plus simple pour rendre vos devis comparables sans y passer la journée.",
    type: "pilier",
    body: `# Inventaire de déménagement : modèle simple (devis comparables) + méthode en 20 minutes

Un inventaire sert à rendre les devis comparables. S’il est trop long, vous abandonnez. S’il est trop vague, il ne sert à rien. On fait un modèle minimal, efficace.

> [CTA] Comparer des devis (dossier standardisé)
> Standardisez vos infos, comparez proprement.

## 1) 3 listes

- Gros meubles (5–15)
- Cartons (estimation)
- Objets “limites” (lourd/fragile/encombrant)

## 2) 4 détails

- rue/stationnement
- entrée/couloir
- escalier/ascenseur
- passage le plus étroit

## 3) Méthode 20 minutes

5 min liste meubles + 5 min cartons + 5 min détails accès + 5 min objets limites.

## FAQ

### Exact au carton près ?
Non, cohérent suffit.

### Ce qui change le devis ?
Objets limites + accès.

### Format le plus efficace ?
3 listes + 4 détails.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "demenagement-sous-la-pluie-proteger",
    title: "Déménagement sous la pluie : protéger cartons, meubles, et éviter les glissades (plan simple)",
    description:
      "Pluie = humidité + cartons qui lâchent. Guide : zones tampon, protection minimale utile, et organisation pour éviter l’improvisation.",
    type: "satellite",
    body: `# Déménagement sous la pluie : protéger cartons, meubles, et éviter les glissades (plan simple)

Sous la pluie, le danger n’est pas “un peu d’eau”. Le danger, c’est l’eau au mauvais endroit : cartons qui ramollissent, objets textiles qui prennent l’humidité, et transitions glissantes (porte, couloir, ascenseur).

La stratégie qui marche : protéger les points critiques et garder un rythme fluide.

> [CTA] Devis comparables = journée plus fluide
> Un accès clair et une organisation claire limitent les pertes de temps… et les objets exposés.

## 1) Les 3 zones critiques

- dehors → entrée
- entrée → ascenseur/escalier
- palier → logement

Si vous maîtrisez ces transitions, le reste est gérable.

## 2) Protection “minimum utile”

Inutile de tout sur‑emballer. Protégez surtout :

- textiles
- cartons fragiles
- objets sensibles (électronique, papier)

Et créez une zone tampon sèche.

## 3) Zone tampon : l’anti‑galère

Près de la porte : un espace où vous pouvez poser/essuyer/regrouper. Ça évite de courir avec des cartons mouillés.

## 4) Sécurité : ralentir sur les transitions

Glissade = casse + blessure + journée ruinée. Sur les zones humides, priorité à la sécurité.

## FAQ

### Risque n°1 ?
Cartons qui ramollissent + glissades.

### Protéger sans sur‑faire ?
Prioriser textiles/fragiles + zone tampon sèche.

### Faut-il décaler ?
Pas forcément : une bonne organisation suffit souvent.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "demenagement-canicule-ete",
    title: "Déménagement en canicule : organiser sans s’épuiser (et protéger les objets sensibles)",
    description:
      "Chaleur = rythme qui baisse. Guide : organisation, pauses/eau, timing, et protection des objets sensibles pour un jour J maîtrisé.",
    type: "satellite",
    body: `# Déménagement en canicule : organiser sans s’épuiser (et protéger les objets sensibles)

En canicule, le déménagement devient plus lent et plus fatigant. Le but est double : protéger les personnes (pauses/eau) et limiter l’exposition des objets sensibles.

> [CTA] Journée fluide = moins d’exposition
> Moins d’improvisation = moins de temps “dehors”.

## 1) Stratégie : préparer plus, porter moins

Chaque aller‑retour coûte plus cher. Donc :

- réduire le volume (tri)
- standardiser les cartons
- préparer le chemin

## 2) Rythme : pauses courtes mais régulières

Le problème n’est pas la pause : c’est l’épuisement. Une journée régulière est souvent plus efficace qu’un sprint.

## 3) Objets sensibles : minimiser l’exposition

- plantes
- électronique
- objets fragiles

Gardez‑les pour la fin et installez‑les tôt.

## FAQ

### Pourquoi c’est plus dur ?
Rythme plus lent + fatigue.

### Objets les plus sensibles ?
Plantes et objets sensibles aux extrêmes.

### Comment organiser ?
Préparer en amont + réduire les allers‑retours + référent accès.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "demonter-remonter-canape-porte-etroite",
    title: "Canapé et porte étroite : démonter, tourner, ou lift ? (méthode pour décider vite)",
    description:
      "Le canapé “qui coince” : méthode simple (passage étroit, rotation palier) pour décider vite et éviter l’improvisation.",
    type: "pilier",
    body: `# Canapé et porte étroite : démonter, tourner, ou lift ? (méthode pour décider vite)

Le canapé “qui coince” est un classique. Et ce n’est pas toujours une question de largeur : c’est souvent une question d’angle, de rotation et de palier.

Objectif : décider vite et proprement.

> [CTA] Comparer des devis (méthode claire)
> Documentez le passage et l’accès : vous évitez les surprises.

## 1) Étape 1 : le passage le plus étroit

Souvent : porte d’entrée, couloir, angle sur palier.

## 2) Étape 2 : la rotation (le vrai piège)

Même si ça passe en largeur, ça peut bloquer en rotation. détail palier + détail escalier = gain de temps.

## 3) Étape 3 : options

- démonter si possible
- protéger + manœuvrer
- lift si accès trop risqué ou impossible

## FAQ

### Comment savoir si ça passe ?
Comparer passage étroit + gabarit, et tenir compte des angles.

### Le démontage suffit ?
Souvent, pas toujours : la rotation peut bloquer.

### Quand envisager lift ?
Quand ça ne passe pas ou quand l’escalier est trop risqué.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "emballer-livres-sans-carton-trop-lourd",
    title: "Emballer des livres sans faire des cartons trop lourds : méthode ultra simple (et rapide)",
    description:
      "Livres = cartons qui explosent. Guide : petits cartons, fond renforcé, étiquettes “lourd”, et organisation pour ne pas se ruiner le dos.",
    type: "satellite",
    body: `# Emballer des livres sans faire des cartons trop lourds : méthode ultra simple (et rapide)

Les livres sont le piège n°1 : ça devient très lourd très vite. La bonne méthode : petits cartons, fond renforcé, et étiquetage clair.

> [CTA] Devis comparables (volume cohérent)
> Des cartons standardisés = manutention plus prévisible.

## 1) Règle : petits cartons

Les livres vont dans des petits cartons. Point.

## 2) Fond renforcé

Double scotch, et vous évitez les cartons qui “s’ouvrent”.

## 3) Étiquetage

Marquer “lourd” clairement.

## FAQ

### Pourquoi c’est un problème ?
Cartons trop lourds = manutention lente + risques.

### Taille ?
Petit carton.

### Comment gagner du temps ?
Standardiser + zone tampon.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "etat-des-lieux-jour-demenagement-checklist",
    title: "État des lieux le jour du déménagement : checklist pour ne rien oublier (et rester zen)",
    description:
      "Check “dernier passage” : placards, cave, balcon, détails, documents. Une checklist courte qui évite les galères après.",
    type: "pilier",
    body: `# État des lieux le jour du déménagement : checklist pour ne rien oublier (et rester zen)

Le danger le jour J : se presser après le chargement et oublier un détail (placard, cave, papier). Cette checklist vous aide à faire un dernier passage propre.

> [CTA] Journée fluide = état des lieux plus serein
> Moins d’improvisation le jour J, c’est plus d’attention pour les détails.

## 1) Avant le chargement : préparer l’essentiel

- documents accessibles
- clés / badges
- sac “à ne pas charger”

## 2) Après le chargement : tour pièce par pièce

Ordre simple, sans sauter d’étape.

## 3) Mini tour détail

Quelques détails des zones clés évitent les discussions floues.

## FAQ

### Priorité avant les clés ?
Zones oubliées + documents.

### Éviter l’oubli ?
Checklist pièce par pièce + zone dernier passage.

### Piège classique ?
Vouloir aller trop vite. Prenez 10 minutes.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "demenager-objets-fragiles-vitrine-miroir-table",
    title: "Déménager une vitrine, un miroir, une table fragile : protections, transport, erreurs à éviter",
    description:
      "Fragiles = angles + torsion. Guide : rigidifier, protéger, caler, et cadrer la méthode dans le devis (détails + liste courte).",
    type: "satellite",
    body: `# Déménager une vitrine, un miroir, une table fragile : protections, transport, erreurs à éviter

Les objets fragiles cassent rarement “au milieu”. Ils cassent sur un coin, une pression, ou une torsion. La méthode : angles protégés + rigidité + calage.

> [CTA] Devis comparables (fragiles inclus)
> détails + liste courte = méthode cadrée.

## 1) Angles protégés

Les angles sont les points d’impact. Renforcez-les.

## 2) Rigidifier

Éviter toute flexion pendant transport.

## 3) Caler

Zéro mouvement, zéro pression d’un carton lourd.

## FAQ

### Fragiles les plus risqués ?
Vitrines, miroirs, plateaux fragiles.

### Règle de base ?
Angles + rigidité + pas de pression.

### Dans le devis ?
Liste courte + détails.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "hauteur-camion-demenagement-gabarit",
    title: "Hauteur / gabarit du camion : comment éviter l’accès impossible (et le portage long)",
    description:
      "Gabarit camion = accès. Guide : passages critiques, détails utiles, et plan B (distance) pour éviter l’improvisation.",
    type: "satellite",
    body: `# Hauteur / gabarit du camion : comment éviter l’accès impossible (et le portage long)

Si le camion ne peut pas se rapprocher, tout bascule : portage plus long, journée plus lente. La solution : identifier les points critiques et prévoir un plan B.

> [CTA] Devis comparables (accès documenté)
> détails d’accès = logistique plus fiable.

## 1) Identifier les points de passage

- portail
- rampe
- virage serré
- entrée parking

## 2) Prévoir un plan B

Où le camion s’arrête si ça ne passe pas ? Quelle distance ? C’est ce qui stabilise le devis.

## FAQ

### Pourquoi c’est important ?
Accès impossible = portage long.

### Que vérifier ?
Point le plus contraignant + plan B.

### Quelle info donner ?
détails accès + point critique.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "demenagement-weekend-comment-eviter-surcout",
    title: "Déménagement le week‑end : comment éviter le surcoût (sans tout chambouler)",
    description:
      "Week‑end = demande forte. Guide : flexibilité intelligente, accès clair, et organisation qui réduit les suppléments.",
    type: "satellite",
    body: `# Déménagement le week‑end : comment éviter le surcoût (sans tout chambouler)

Le week‑end est demandé. Les créneaux sont plus rares. La stratégie : regagner de la flexibilité autrement (fenêtre, horaires) et rendre l’accès ultra clair.

> [CTA] Comparer des devis sur plusieurs créneaux
> Donnez 2–3 options : ça aide à obtenir un meilleur créneau.

## 1) Flexibilité “intelligente”

- samedi matin plutôt que samedi après‑midi
- vendredi/samedi plutôt que samedi uniquement

## 2) Accès clair = moins de suppléments

détails + distance + passage étroit.

## FAQ

### Pourquoi plus cher ?
Demande plus forte.

### Comment réduire ?
Fenêtre + accès clair.

### La flexibilité aide ?
Souvent oui.
${COMMON_APPENDIX}
`,
  },
];


