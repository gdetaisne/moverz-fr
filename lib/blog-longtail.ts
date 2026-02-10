import type { CanonicalBlogPost } from "@/lib/blog-canonique";

export type BlogFAQItem = { question: string; answer: string };

const COMMON_APPENDIX = `

## Annexe : la méthode “devis comparables” (à réutiliser partout)

Si vous ne devez retenir qu’une chose : **un devis fiable dépend d’un accès clair** et d’un inventaire cohérent. Cette annexe est volontairement simple : elle sert à standardiser ce que vous envoyez, pour éviter que chaque entreprise chiffre une hypothèse différente.

### 1) Les 6 infos qui stabilisent un devis

- **Adresse + type** : appartement/maison, étage, ascenseur oui/non.
- **Accès camion** : où le camion peut s’arrêter (détail rue).
- **Distance camion → porte** : en pas (même approximatif, ça suffit).
- **Passage le plus étroit** : détail (porte/couloir/angle/palier).
- **Objets “limites”** : 2–5 détails (canapé, frigo, armoire, machine).
- **Fenêtre de date** : 2–3 options si possible (ça améliore les chances d’un bon créneau).

### 2) Le message copier/coller à envoyer aux déménageurs

Vous pouvez envoyer ceci tel quel (en complétant les champs) :

- Logement : ___ (étage ___, ascenseur oui/non)
- Accès camion : détail jointe
- Distance camion→porte : ___ pas
- Passage le plus étroit : détail jointe
- Gros meubles / objets lourds : détails jointes
- Dates possibles : ___ / ___ / ___

### 3) Checklist organisation (J‑7 → jour J)

- **J‑7** : tri (réduire le volume), liste courte des gros meubles, cartons non essentiels.
- **J‑3** : accès dégagé, protection des angles, étiquettes (pièce + fragile/lourd).
- **J‑1** : zone tampon près de la porte, sac perso “à ne pas charger”, documents/clefs prêts.
- **Jour J** : 1 référent accès + 1 référent cartons, validation pièce par pièce avant départ.

### 4) Les 5 erreurs qui créent des surprises

1. “Accès facile” sans détail (ça ne veut rien dire).
2. Sous‑estimer la distance camion→porte (portage).
3. Oublier 1–2 objets lourds (et les annoncer trop tard).
4. Cartons trop lourds (ça ralentit tout).
5. Une date rigide alors que vous pourriez proposer une alternative.
`;

export const LONGTAIL_FAQS: Record<string, BlogFAQItem[]> = {
  "demenagement-sans-ascenseur-5e-etage": [
    {
      question: "Un déménagement au 5e sans ascenseur coûte-t-il forcément beaucoup plus cher ?",
      answer:
        "Souvent oui, parce que la manutention prend plus de temps (escaliers, rotations, pauses). Mais vous pouvez limiter l’écart en fiabilisant l’accès (détails + passage le plus étroit), en réduisant le volume (tri) et en choisissant une fenêtre de date plus flexible.",
    },
    {
      question: "Que faut-il envoyer comme infos pour éviter les suppléments ?",
      answer:
        "Au minimum : étage exact, largeur du passage le plus étroit (détail), escalier (détail bas + palier), distance camion→porte (en pas), et liste des meubles “limites”. L’idée est que tous chiffrent la même méthode.",
    },
    {
      question: "Est-ce qu’un monte-meuble est toujours nécessaire ?",
      answer:
        "Non. Il est utile quand un meuble ne passe pas, quand l’escalier est très contraignant, ou quand vous voulez réduire le temps de manutention. Il faut le décider en fonction des détails et du passage, pas “au feeling”.",
    },
  ],
  "portage-long-camion-loin-entree": [
    {
      question: "C’est quoi un portage long en déménagement ?",
      answer:
        "C’est quand le camion ne peut pas se rapprocher de l’entrée, obligeant à porter les cartons/meubles sur une distance significative (cour, long couloir, allée, parking).",
    },
    {
      question: "Comment estimer la distance sans mesurer ?",
      answer:
        "Comptez en pas (ou en repères “court / moyen / long”) et envoyez une détail du trajet camion→entrée. L’objectif est de rendre le portage comparable entre devis.",
    },
    {
      question: "Le portage peut-il faire varier beaucoup un devis ?",
      answer:
        "Oui, parce que c’est du temps de manutention. Deux volumes identiques peuvent coûter différemment si l’un impose un portage long et l’autre un accès direct.",
    },
  ],
  "monte-meuble-quand-indispensable": [
    {
      question: "Quand un monte-meuble devient-il indispensable ?",
      answer:
        "Quand un meuble ne passe pas (porte/couloir/palier), quand l’escalier est trop contraignant, ou quand l’objectif est de réduire fortement la manutention et le risque de dégâts.",
    },
    {
      question: "Quelles détails envoyer pour décider vite ?",
      answer:
        "Fenêtre (ouverte), façade/accès, passage intérieur le plus étroit, escalier bas + palier, et détail du meuble “limite”.",
    },
    {
      question: "Qui réserve le monte-meuble ?",
      answer:
        "Ça dépend du prestataire et de la formule. Le plus important est de le clarifier dans le devis : qui fournit, qui opère, et quelles contraintes d’accès sont prises en compte.",
    },
  ],
  "demenagement-parking-souterrain": [
    {
      question: "Pourquoi le parking souterrain complique un déménagement ?",
      answer:
        "Le sujet principal est la logistique : hauteur maximale, accès camion, distance de portage, et souvent l’ascenseur/chemin réel jusqu’au logement.",
    },
    {
      question: "Quelles infos donner pour un devis fiable ?",
      answer:
        "détails de l’accès parking, hauteur affichée si visible, trajet parking→entrée, ascenseur (cabine), et passage le plus étroit.",
    },
    {
      question: "Faut-il toujours un petit camion ?",
      answer:
        "Pas forcément. Parfois l’accès se fait au plus près en surface, parfois par le parking. Il faut choisir en fonction des contraintes réelles, pas d’une règle unique.",
    },
  ],
  "demenagement-rue-etroite-impasse": [
    {
      question: "Rue étroite : quels risques le jour J ?",
      answer:
        "Risques classiques : camion trop gros, impossibilité de se rapprocher, portage long, ou perte de temps à improviser. On évite ça en documentant l’accès et en choisissant la bonne logistique.",
    },
    {
      question: "Que doit contenir le devis pour être solide ?",
      answer:
        "La méthode d’accès (stationnement/portage), la taille de camion envisagée si pertinent, et la prise en compte des passages/meubles limites. Le plus important : que tout soit explicite.",
    },
    {
      question: "Est-ce qu’un transbordement est possible ?",
      answer:
        "Oui, parfois. Mais il faut le prévoir et le chiffrer (c’est du temps). D’où l’intérêt de rendre l’accès visible via détails.",
    },
  ],
  "petit-demenagement-10-15-cartons": [
    {
      question: "Un petit déménagement peut-il être géré par des pros ?",
      answer:
        "Oui. Pour 10–15 cartons (et quelques meubles), l’important est d’avoir un devis clair sur la méthode (accès/portage) et sur ce qui est inclus (main d’œuvre, matériel, protection).",
    },
    {
      question: "Comment payer moins sur un petit volume ?",
      answer:
        "En étant flexible sur la date, en rendant l’accès très clair (zéro surprise), et en évitant les options inutiles. Le volume est petit, donc le temps (accès) pèse beaucoup.",
    },
    {
      question: "Le groupage est-il une bonne idée ?",
      answer:
        "Souvent oui si vous êtes flexible : l’idée est de mutualiser un trajet ou un camion. Il faut simplement cadrer la fenêtre de dates et les conditions.",
    },
  ],
  "demenagement-colocation-etudiant": [
    {
      question: "Comment coordonner un déménagement de colocation ?",
      answer:
        "Avec un inventaire simple par personne (cartons + meubles) et une règle de tri. Le plus important est de standardiser l’étiquetage et de clarifier l’accès pour éviter le chaos le jour J.",
    },
    {
      question: "Peut-on regrouper plusieurs petits volumes ?",
      answer:
        "Oui, souvent. Ça peut réduire le coût si la logistique est claire et si la fenêtre de date est flexible.",
    },
    {
      question: "Quelles erreurs éviter absolument ?",
      answer:
        "Cartons trop lourds, absence de plan d’accès, et étiquetage flou. Ce sont les 3 causes de perte de temps les plus fréquentes.",
    },
  ],
  "demenagement-objets-lourds-frigo-piano-coffre": [
    {
      question: "Quels objets sont considérés “lourds” en déménagement ?",
      answer:
        "Typiquement : frigo américain, piano, coffre-fort, gros électroménager, grandes armoires. Ce qui compte, c’est poids + gabarit + fragilité.",
    },
    {
      question: "Quelles infos donner au déménageur ?",
      answer:
        "détail de l’objet, dimensions si vous les avez, et surtout détail du passage le plus étroit + escalier/palier/ascenseur. L’objectif : choisir la bonne méthode (protection, démontage, équipe).",
    },
    {
      question: "Peut-on les transporter sans matériel spécifique ?",
      answer:
        "Parfois oui, parfois non. Il ne faut pas improviser : mieux vaut cadrer la méthode dans le devis, quitte à prévoir des options (sangles, protection, monte-meuble).",
    },
  ],
  "demenagement-fin-de-mois-vs-milieu": [
    {
      question: "Pourquoi la fin de mois est-elle plus chère ?",
      answer:
        "La demande est souvent plus forte (baux, états des lieux, organisation). Plus de demande = moins de disponibilité = prix plus élevés et créneaux plus rares.",
    },
    {
      question: "Comment obtenir un meilleur prix sans prendre de risque ?",
      answer:
        "Proposez 2–3 dates possibles, évitez le week-end si possible, et rendez l’accès très clair pour éviter les suppléments. La flexibilité est le levier le plus simple.",
    },
    {
      question: "Est-ce que bouger en semaine aide vraiment ?",
      answer:
        "Souvent oui. Les créneaux semaine sont généralement moins tendus, ce qui peut rendre les devis plus stables et faciliter la réservation.",
    },
  ],
  "garde-meuble-2-semaines-avant-demenagement": [
    {
      question: "Un garde-meuble 2 semaines vaut-il le coup ?",
      answer:
        "Oui quand vous devez décaler les dates, faire des travaux, ou éviter un déménagement “en urgence”. Le gain est souvent organisationnel : moins de stress, meilleure comparaison des devis, et un jour J plus fluide.",
    },
    {
      question: "Quelles erreurs éviter avec un stockage court ?",
      answer:
        "Ne pas séparer les “essentiels 24h”, mal étiqueter, et sous-estimer le volume. Un stockage court fonctionne bien si vous standardisez les cartons et l’inventaire.",
    },
    {
      question: "Comment intégrer ça dans le devis ?",
      answer:
        "En précisant : enlèvement → stockage → livraison, la fenêtre de dates, et le niveau de prestation (emballage/démontage). L’objectif est que tout soit chiffré et explicite.",
    },
  ],
};

export const LONGTAIL_BLOG_POSTS: CanonicalBlogPost[] = [
  {
    slug: "demenagement-sans-ascenseur-5e-etage",
    title: "Déménagement sans ascenseur (5e étage) : méthode, devis fiable, checklist anti‑surprise",
    description:
      "Guide ultra pratique pour déménager au 5e sans ascenseur : ce qui fait varier un devis, comment éviter les suppléments, checklists et erreurs fréquentes.",
    type: "pilier",
    body: `# Déménagement sans ascenseur (5e étage) : méthode, devis fiable, checklist anti‑surprise

Un déménagement au **5e étage sans ascenseur** n’est pas “impossible” — mais c’est un cas où l’improvisation coûte cher : fatigue, retard, casse, et parfois… devis qui bouge le jour J. La bonne nouvelle, c’est que c’est très **prévisible** si vous documentez l’accès et si tout le monde chiffre la **même méthode**.

Dans ce guide, on va faire simple : **ce qui fait monter le prix**, **comment obtenir des devis comparables**, et une **checklist** copiable/collable pour éviter les mauvaises surprises.

> [CTA] Comparer 3 devis minimum sans surprises
> Si vous êtes au 5e sans ascenseur, la fiabilité dépend de l’accès. Envoyez le même dossier à plusieurs pros et comparez des devis comparables.

## 1) Pourquoi le 5e sans ascenseur change (vraiment) la journée

Le volume compte, évidemment. Mais au 5e sans ascenseur, le facteur dominant devient souvent le **temps de manutention**. Plus il y a d’allers‑retours, plus la journée s’allonge. Et plus la journée s’allonge, plus le devis est sensible aux détails.

Ce qui influence le temps :

- **Largeur des escaliers** et rotations (paliers tournants)
- **Distance camion → entrée** (portage)
- **Passage le plus étroit** (porte/couloir/angle)
- **Meubles “limites”** (canapé, frigo, armoire, machine)
- **Organisation des cartons** (trop lourds = ralentissement + risque)

## 2) Les 3 choses à clarifier avant même de parler “prix”

Pour éviter les surprises, le devis doit répondre à 3 questions très concrètes :

1. **Combien d’allers‑retours réalistes ?** (volume + organisation)
2. **Quel “goulot d’étranglement” ?** (porte/couloir/palier)
3. **Quel plan pour les gros meubles ?** (démontage / protection / option lift)

Si une de ces 3 zones est floue, vous prenez le risque d’un devis optimiste — donc fragile.

## 2) La règle d’or : rendre la méthode “visible”

Le meilleur anti‑surprise, ce n’est pas un roman. C’est 4 détails :

1. **Rue / stationnement** (où le camion peut s’arrêter)
2. **Entrée / couloir** (le chemin réel)
3. **Escalier depuis le bas + un palier** (rotation)
4. **Passage le plus étroit** (souvent une porte/couloir)

Avec ça, un pro peut estimer une méthode réaliste : protection, nombre de personnes, durée probable.

## 3) Comment obtenir un devis fiable (et comparable)

Le piège classique : vous envoyez des infos différentes à chaque entreprise. Résultat : des devis qui n’ont **rien à voir**.

Votre objectif : standardiser.

### Le mini‑dossier (copiable/collable)

- Étage : 5e (sans ascenseur)
- Type : appartement
- Distance camion → entrée : ___ (en pas ou court/moyen/long)
- Passage le plus étroit : ___ (détail)
- Meubles “limites” : ___ (détails)
- Date : ___ (ou 2–3 options)

### Bonus qui rend le devis “béton”

- Une phrase sur le **niveau de préparation** (cartons faits / démontage fait / fragiles)
- Une liste “objets sensibles” (écran, miroirs, vaisselle, vin, plantes)
- La présence d’une cave/grenier (souvent oublié dans le volume)

## 4) Faut‑il un monte‑meuble ?

Pas toujours. Il devient intéressant quand :

- Un meuble ne passe pas (porte/palier)
- Les rotations d’escalier sont très contraignantes
- Vous voulez réduire fortement le temps de manutention

Pour décider vite : envoyez **détail fenêtre** (ouverte) + **détail meuble** + **détail escalier/palier**. La décision doit être prise sur des contraintes réelles, pas “au feeling”.

## 5) Le plan simple (J‑7 → jour J)

### J‑7 : standardiser et trier

- Faites une **liste courte** des gros meubles (5 à 12 items)
- Étiquetez 3 zones : **fragile**, **lourd**, **urgent 24h**
- Diminuez le volume (don/vente) : au 5e, chaque carton compte

### J‑3 : sécuriser les passages

- Protégez les angles (carton + scotch)
- Dégagez le couloir et le palier
- Préparez un “kit vis” : sachet + étiquette sur chaque meuble démonté

### Jour J : éviter le chaos

- 1 personne “référent accès” (porte, couloir, escalier)
- 1 personne “référent cartons” (ordre de sortie + urgents)
- Zone tampon proche de la porte : ça accélère immédiatement le rythme

## 5) Checklists (devis + jour J)

### Checklist devis (à envoyer)

- détail rue + stationnement
- Distance camion→porte (en pas)
- détail escalier (bas + palier)
- détail passage le plus étroit
- détails meubles volumineux (canapé / frigo / armoire)

### Checklist jour J (anti‑galère)

- Couloir dégagé + **zone tampon** près de la porte
- Cartons lourds limités (livres/vaisselle)
- Sachets de vis scotchés aux meubles démontés
- Sac perso “à ne pas charger” (papiers, clés, chargeurs)

## 6) Les 7 erreurs qui coûtent le plus cher

1. Ne pas annoncer le 5e sans ascenseur clairement
2. Sous‑estimer le portage (camion loin)
3. Oublier le passage critique (porte/couloir)
4. Cartons trop lourds
5. Meubles “limites” non annoncés
6. Date rigide (0 flex)
7. Pas de zone tampon (perte de temps immédiate)

## 7) Astuces “terrain” (petites, mais ultra rentables)

- **Cartons lourds** : gardez‑les petits. Un carton de livres “grand format” ralentit toute la chaîne.
- **Fragiles** : mieux vaut 2 cartons moyens bien calés qu’1 grand carton “bourré”.
- **Couettes/linge** : servent de protection (et remplacent parfois des couvertures).
- **Étiquettes** : “Cuisine – fragile” > “Cuisine”. Plus c’est précis, plus ça va vite.

## 7) Maillage utile (pour aller plus loin)

- Voir une page ville : [Déménagement à Paris](/demenagement/paris/)
- Service : [Petit déménagement](/demenagement/paris/petit-demenagement/)
- Cas fréquent : [Déménagement de piano](/demenagement/paris/piano/)

## FAQ

### Un déménagement au 5e sans ascenseur coûte-t-il forcément beaucoup plus cher ?
Souvent oui, car la manutention prend plus de temps. Mais vous pouvez réduire l’écart en fiabilisant l’accès (détails), en réduisant le volume (tri) et en étant flexible sur la date.

### Que faut-il envoyer comme infos pour éviter les suppléments ?
Étages, distance camion→porte, détails escalier/palier, passage le plus étroit, et meubles “limites”. L’idée : que tout le monde chiffre la même méthode.

### Est-ce qu’un monte-meuble est toujours nécessaire ?
Non. Il est utile quand un meuble ne passe pas, ou quand vous voulez réduire fortement la manutention. Il faut décider sur détails et contraintes, pas au hasard.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "portage-long-camion-loin-entree",
    title: "Portage long : camion loin de l’entrée (cour, couloir, allée) — comment éviter les surprises",
    description:
      "Portage long = temps de manutention. Guide complet : comment l’estimer, quelles détails envoyer, comment obtenir des devis comparables, checklists et erreurs à éviter.",
    type: "satellite",
    body: `# Portage long : camion loin de l’entrée (cour, couloir, allée) — comment éviter les surprises

Le **portage long** est l’une des causes #1 de devis “qui bougent” : le volume est correct, mais la logistique réelle (distance) a été sous‑estimée. Bonne nouvelle : c’est un problème facile à régler si vous standardisez vos infos.

> [CTA] Obtenir des devis comparables (sans surprises)
> Envoyez les mêmes détails et la distance camion→porte à plusieurs pros : vous comparez enfin des devis comparables.

## 1) Portage long : définition simple

Portage long = le camion ne peut pas se rapprocher de l’entrée, donc l’équipe porte cartons et meubles sur une distance notable : cour, long couloir, allée, parking, entrée secondaire.

Ce n’est pas “un détail”. C’est du temps de manutention.

## 2) Comment l’estimer sans mètre

3 méthodes simples :

- **En pas** (ex: 60 pas)
- **En repères** (court / moyen / long)
- **En détails** (trajet camion→entrée en 2–3 images)

L’objectif n’est pas la précision millimétrique. L’objectif est de **réduire l’incertitude**.

## 3) Pourquoi le portage long fait “exploser” les écarts entre devis

Si un devis suppose un accès direct, il sous‑estime la journée. Un autre devis qui anticipe correctement le portage intègre :

- Plus de temps de rotation
- Plus de manutention sur les meubles lourds
- Plus de risques (fatigue = baisse de rythme + attention)

Résultat : deux devis très différents pour un volume identique.

## 3) Les infos à donner pour un devis fiable

Le dossier minimum :

- Distance camion→porte (en pas)
- Obstacles (marches, pente, porte lourde)
- détails : rue, entrée, passage étroit
- Étages + ascenseur (si concerné)
- Meubles volumineux “limites”

## 4) Pourquoi ça change le prix

Deux déménagements “identiques” en volume peuvent être très différents :

- Accès direct = rythme constant
- Portage long = allers‑retours + fatigue + ralentissement

Le devis doit refléter une méthode réaliste.

## 5) La méthode “anti‑surprise” en 6 lignes (copier/coller)

- Accès camion : ___ (détail rue)
- Distance camion→entrée : ___ pas
- Obstacles : ___ (marches / pente / porte)
- Étages : ___ + ascenseur : oui/non
- Passage le plus étroit : détail
- Meubles volumineux : détails + “limites”

## 5) Checklists

### Checklist détails à envoyer

- détail rue (où le camion s’arrête)
- détail du trajet (cour/couloir/allée)
- détail passage le plus étroit
- détail escalier/ascenseur (si applicable)

### Checklist jour J

- Couloir dégagé + portes accessibles
- Zone tampon près de la porte
- Cartons lourds limités

## 6) Les erreurs fréquentes (et comment les éviter)

1. Dire “on peut se garer” sans détail : parfois oui… parfois non.
2. Oublier la distance réelle : “dans la cour” peut faire 10 m… ou 120 m.
3. Ne pas mentionner les obstacles : une pente ou 5 marches changent le rythme.
4. Cartons non standardisés : si c’est trop lourd, tout ralentit.

## 6) Liens utiles

- [Déménagement en Île‑de‑France](/demenagement/ile-de-france/)
- [Aide au déménagement](/demenagement/paris/aide-demenagement/)

## FAQ

### C’est quoi un portage long en déménagement ?
C’est quand le camion ne peut pas se rapprocher et qu’il faut porter sur une distance significative (cour, couloir, allée, parking).

### Comment estimer la distance sans mesurer ?
Comptez en pas et envoyez une détail du trajet camion→entrée.

### Le portage peut-il faire varier beaucoup un devis ?
Oui : c’est du temps de manutention, donc du coût.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "monte-meuble-quand-indispensable",
    title: "Monte‑meuble (lift) : quand c’est indispensable, quelles infos donner, et comment éviter une décision “au hasard”",
    description:
      "Guide lift/monte‑meuble : cas où c’est nécessaire, détails à fournir, checklists accès/fenêtre, et comment cadrer l’option dans un devis sans surprises.",
    type: "pilier",
    body: `# Monte‑meuble (lift) : quand c’est indispensable, quelles infos donner, et comment éviter une décision “au hasard”

Le monte‑meuble (lift) est souvent présenté comme une “option” vague. En réalité, c’est un outil très simple : il sert à **sortir/entrer** des meubles quand l’accès intérieur est trop contraignant, ou à **réduire fortement** la manutention.

Le problème arrive quand la décision est prise trop tard, ou sur une info floue. Résultat : stress, perte de temps, et devis qui change. Ici, on pose une méthode claire.

> [CTA] Comparer des devis avec (ou sans) option lift
> Avec 3 détails et 2 mesures simples, vous savez si le lift est utile — et vous évitez une décision à la dernière minute.

## 1) Les 4 cas où le lift devient “indispensable”

1. **Le meuble ne passe pas** (porte, couloir, palier).
2. **L’escalier est trop contraignant** (rotations serrées, marches irrégulières, garde‑corps).
3. **Vous avez plusieurs “gros”** (canapé, armoire, frigo) et vous voulez sécuriser le timing.
4. **Vous cherchez à réduire le risque** (objets fragiles/valeur, angles, murs, rampes).

Note : “indispensable” ne veut pas dire “toujours”. Ça veut dire “méthode la plus sûre / la plus fiable”.

## 2) Les infos à donner (la checklist qui décide en 5 minutes)

### détails

- Fenêtre (ouverte) ou balcon (garde‑corps) — **côté extérieur**
- Façade / cour / rue (où se place le lift)
- Passage intérieur le plus étroit (si vous tentez sans lift)
- Escalier bas + palier (si vous tentez sans lift)
- Meuble “limite” (détail + angle)

### Infos simples

- Étage
- Accès extérieur : rue / cour / jardin / parking
- Contraintes visibles : portail, pente, arbres, marche, passage étroit

## 3) “Lift” ne veut pas dire “moins cher”

Un lift peut coûter plus en matériel, mais il peut :

- Réduire le temps de manutention
- Réduire le risque de casse
- Sécuriser la journée (moins d’improvisation)

Le bon raisonnement : *est‑ce que ça sécurise mon projet ?* plus que *est‑ce que ça fait baisser le prix ?*

## 4) Comment le cadrer dans un devis

Pour éviter les surprises, le devis doit préciser :

- Option lift incluse ou non
- Qui fournit et qui opère
- Quelles contraintes d’accès sont prises en compte (détails)
- Quels meubles sont concernés (liste courte)

## 5) Les erreurs classiques

1. Décider “au feeling” sans détails
2. Oublier l’accès extérieur (où placer le lift)
3. Ne pas lister les meubles concernés
4. Penser que “tout passe au lift” sans vérifier la fenêtre/balcon

## Liens utiles

- [Déménagement sans ascenseur : méthode](/blog/demenagement-sans-ascenseur-5e-etage/)
- [Déménagement à Lyon](/demenagement/lyon/)

## FAQ

### Quand un monte-meuble devient-il indispensable ?
Quand un meuble ne passe pas, quand l’escalier est très contraignant, ou quand vous voulez sécuriser le timing et réduire la manutention.

### Quelles détails envoyer pour décider vite ?
Fenêtre ouverte, accès extérieur, passage intérieur étroit, escalier/palier, et détail du meuble “limite”.

### Qui réserve le monte-meuble ?
Ça dépend. L’important est que le devis précise qui fournit, qui opère, et quelles contraintes d’accès sont prises en compte.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "demenagement-parking-souterrain",
    title: "Déménagement avec parking souterrain : hauteur, accès camion, portage — le guide pour un devis fiable",
    description:
      "Parking souterrain = contraintes d’accès. Guide concret : quelles infos donner, comment éviter les surprises (hauteur/portage), et checklists pour un jour J fluide.",
    type: "satellite",
    body: `# Déménagement avec parking souterrain : hauteur, accès camion, portage — le guide pour un devis fiable

Le parking souterrain est un “petit détail” qui devient énorme quand il n’est pas cadré : camion trop haut, accès impossible, ou portage long non anticipé. La solution : documenter l’accès et standardiser ce que vous envoyez.

> [CTA] Recevoir des devis comparables (parking inclus)
> Envoyez les mêmes détails + contraintes d’accès à plusieurs pros : vous comparez des devis propres, pas des hypothèses.

## 1) Les 3 contraintes à vérifier

1. **Hauteur maximale** (si visible à l’entrée)
2. **Chemin réel** parking → entrée → logement
3. **Ascenseur / escaliers** (cabine, portes, paliers)

## 2) Quelles infos donner (sans inventer)

- détails : entrée parking, rampe/virage si visible, trajet vers l’entrée, ascenseur (porte ouverte)
- Distance parking → entrée (en pas)
- Étages + ascenseur : oui/non
- Meubles volumineux “limites” (détails)

## 3) Faut-il toujours un petit camion ?

Non. Parfois le camion peut se mettre en surface près de l’entrée. Parfois le parking est la meilleure option. L’idée est de choisir la méthode **la plus fiable** (et la plus simple) selon votre configuration.

## 4) Checklist jour J

- Accès parking dégagé (si autorisation)
- Trajet balisé (portes, badges, codes)
- Zone tampon près de la porte du logement

## Liens utiles

- [Portage long : camion loin de l’entrée](/blog/portage-long-camion-loin-entree/)
- [Déménagement à Marseille](/demenagement/marseille/)

## FAQ

### Pourquoi le parking souterrain complique un déménagement ?
Parce que l’accès et la logistique (hauteur, virages, portage) conditionnent la méthode et le temps.

### Quelles infos donner pour un devis fiable ?
détails accès parking + trajet + ascenseur, distance en pas, et meubles “limites”.

### Faut-il toujours un petit camion ?
Non. Il faut choisir selon les contraintes réelles : surface ou parking, selon ce qui est possible et fiable.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "demenagement-rue-etroite-impasse",
    title: "Déménagement rue étroite / impasse : comment gérer camion, portage et éviter les galères",
    description:
      "Rue étroite, impasse, accès compliqué : guide ultra concret pour cadrer la logistique (camion/portage) et obtenir un devis fiable sans improvisation le jour J.",
    type: "satellite",
    body: `# Déménagement rue étroite / impasse : comment gérer camion, portage et éviter les galères

Dans une rue étroite ou une impasse, le vrai risque n’est pas “la difficulté”. Le vrai risque, c’est l’improvisation : camion mal choisi, stationnement impossible, portage non anticipé.

L’objectif de ce guide : rendre la logistique visible, pour que le devis reflète une méthode réaliste.

> [CTA] Comparer des devis (accès compliqué inclus)
> En rue étroite, la différence se joue sur l’accès. Envoyez le même dossier à plusieurs pros.

## 1) Les 4 scénarios possibles

1. Camion proche : accès direct (rare mais possible)
2. Camion “au bout” : portage moyen/long
3. Petit véhicule/rotation : accès partiel
4. Transbordement : méthode à cadrer (temps + organisation)

## 2) Les infos à envoyer (simple et suffisant)

- détail de la rue (largeur perçue)
- détail du point où le camion peut s’arrêter
- Distance camion→entrée (en pas)
- Obstacles : pente, marche, portail, angle
- Passage le plus étroit (détail)

## 3) Comment éviter le “surcoût surprise”

Le surcoût arrive quand l’accès réel n’était pas dans le devis. Donc :

- Tout rendre visible (détails)
- Tout rendre comparable (même dossier)
- Tout rendre explicite (méthode)

## 4) Checklist jour J

- Accès dégagé + codes/clefs prêts
- Couloir dégagé + zone tampon
- Étiquettes claires (fragile / lourd / urgent)

## Liens utiles

- [Portage long](/blog/portage-long-camion-loin-entree/)
- [Déménagement à Nice](/demenagement/nice/)

## FAQ

### Rue étroite : quels risques le jour J ?
Camion inadapté, stationnement impossible, portage long non anticipé, perte de temps à improviser.

### Que doit contenir le devis pour être solide ?
Méthode d’accès (stationnement/portage), prise en compte des passages/meubles “limites”, et éléments explicités.

### Est-ce qu’un transbordement est possible ?
Oui parfois, mais il faut le prévoir et le chiffrer : c’est du temps.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "petit-demenagement-10-15-cartons",
    title: "Petit déménagement (10–15 cartons) : prix réaliste, options, et comment éviter de payer trop",
    description:
      "Petit volume ne veut pas dire petit risque : guide pratique pour 10–15 cartons (et quelques meubles) avec checklists, astuces budget, et méthode pour devis comparables.",
    type: "pilier",
    body: `# Petit déménagement (10–15 cartons) : prix réaliste, options, et comment éviter de payer trop

Quand on a “seulement” 10 à 15 cartons, on pense souvent : *je vais gérer*. Parfois oui. Mais un petit volume peut devenir cher si l’accès est compliqué, si le portage est long, ou si les infos sont floues.

Ici, on vous donne une méthode : choisir la bonne option (pro / location / aide), et obtenir un devis propre si vous passez par un déménageur.

> [CTA] Comparer des devis (petit volume)
> Même pour un petit déménagement, la fiabilité se joue sur l’accès et la clarté des infos.

## 1) Ce qui pèse le plus sur un “petit volume”

- Accès (escaliers, portage)
- Timing (fin de mois, week‑end)
- Objets lourds (machine, frigo, canapé)
- Préparation (cartons faits / démontage)

## 2) Les 3 options possibles (et quand les choisir)

### Option A : faire soi‑même (si accès simple)

Pertinent si :

- Accès simple, peu de gros meubles
- Vous avez de l’aide fiable
- Vous acceptez le risque de fatigue / casse

### Option B : petit pro (si accès complexe ou timing serré)

Pertinent si :

- Vous voulez sécuriser la journée
- Il y a un objet lourd/fragile
- Vous n’avez pas de marge d’erreur

### Option C : groupage (si vous êtes flexible)

Pertinent si :

- La date peut bouger
- Vous cherchez un bon compromis budget

## 3) Le dossier “devis propre”

- Volume : 10–15 cartons + liste des gros meubles
- Accès : détails (rue/entrée/escaliers)
- Distance camion→porte : en pas
- Date : 2–3 options

## 4) Checklist jour J

- Cartons standardisés (pas trop lourds)
- Étiquettes : pièce + “fragile/lourd”
- Sac perso “urgent 24h”

## Liens utiles

- [Déménagement à Lille](/demenagement/lille/)
- [Portage long](/blog/portage-long-camion-loin-entree/)

## FAQ

### Un petit déménagement peut-il être géré par des pros ?
Oui. L’important est un devis clair sur l’accès, la méthode et ce qui est inclus.

### Comment payer moins sur un petit volume ?
Flexibilité sur la date, accès très clair (zéro surprise), et éviter les options inutiles.

### Le groupage est-il une bonne idée ?
Souvent oui si vous êtes flexible : mutualisation d’un trajet/camion.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "demenagement-colocation-etudiant",
    title: "Déménagement colocation / étudiant : organiser plusieurs volumes sans chaos (checklist + méthode)",
    description:
      "Guide concret pour déménager en colocation : inventaire par personne, étiquetage, timing, et méthode pour éviter le chaos le jour J (et payer moins).",
    type: "satellite",
    body: `# Déménagement colocation / étudiant : organiser plusieurs volumes sans chaos (checklist + méthode)

Un déménagement de colocation n’est pas difficile à cause du volume. Il est difficile à cause de l’organisation : qui possède quoi, qui emballe, où ça va, et comment éviter les cartons “anonymes”.

Ce guide vous donne une méthode simple, exécutable, et très efficace.

> [CTA] Comparer des devis (colocation)
> Si vous passez par des pros, standardisez les infos (accès + inventaire) pour éviter les surprises.

## 1) La règle d’or : 1 personne = 1 inventaire

Chaque coloc fait :

- 1 liste “gros meubles”
- 1 estimation “cartons”
- 1 zone “urgent 24h”

Ça évite la confusion et les oublis.

## 2) Le système d’étiquetage (simple mais puissant)

Sur chaque carton :

- Prénom + pièce (ex : “Léa – chambre”)
- Tag : fragile / lourd / urgent

Plus c’est clair, plus ça va vite.

## 3) Timing recommandé

- J‑7 : tri + cartons non essentiels
- J‑2 : cuisine + salle de bain
- J‑1 : zone tampon + sacs perso

## 4) Checklists

### Checklist “coloc”

- Règles (qui gère quoi)
- Codes/clefs prêts
- Itinéraire + accès documenté

### Checklist “jour J”

- 1 référent accès
- 1 référent cartons/étiquettes
- Validation pièce par pièce avant départ

## Liens utiles

- [Petit déménagement](/blog/petit-demenagement-10-15-cartons/)
- [Déménagement à Rennes](/demenagement/rennes/)

## FAQ

### Comment coordonner un déménagement de colocation ?
Inventaire simple par personne + étiquetage standardisé + un plan d’accès clair.

### Peut-on regrouper plusieurs petits volumes ?
Oui souvent, surtout si la fenêtre de date est flexible.

### Quelles erreurs éviter absolument ?
Cartons trop lourds, accès flou, étiquetage vague.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "demenagement-objets-lourds-frigo-piano-coffre",
    title: "Objets lourds (frigo américain, piano, coffre) : les infos à donner pour éviter casse + suppléments",
    description:
      "Guide ultra pratique : comment préparer le déménagement d’objets lourds (frigo américain, piano, coffre-fort) avec la bonne méthode, les bonnes détails, et un devis sans surprises.",
    type: "pilier",
    body: `# Objets lourds (frigo américain, piano, coffre) : les infos à donner pour éviter casse + suppléments

Les objets lourds sont un double risque : **manutention** (poids/gabarit) et **dommages** (sols, murs, objet). Le bon réflexe : ne jamais laisser ces objets “dans le flou” du devis.

> [CTA] Comparer des devis (objets lourds inclus)
> Envoyez détails + passages + liste des objets lourds : vous évitez les surprises et vous comparez une vraie méthode.

## 1) Ce qui rend un objet “compliqué”

Ce n’est pas seulement le poids :

- Gabarit (largeur/hauteur)
- Fragilité (piano, vitrine)
- Accès (escaliers, paliers, angles)
- Sols (parquet, carrelage fragile)

## 2) La checklist d’infos à donner

- détail de l’objet (2 angles)
- Dimensions si vous les avez (sinon OK)
- détail passage le plus étroit
- détail escalier/palier ou ascenseur (cabine porte ouverte)
- Distance camion→porte

## 3) Spécifique frigo américain

- Protéger portes/angles
- Prévoir le chemin (angles, seuils)
- Prévoir un temps de manutention réaliste

## 4) Spécifique piano

- Protection + méthode
- Accès clarifié (escaliers/paliers)
- Option lift à discuter si contrainte

## 5) Spécifique coffre-fort

- Anticiper la méthode (ne pas improviser)
- Clarifier l’accès (paliers, rotations)

## Liens utiles

- [Monte‑meuble](/blog/monte-meuble-quand-indispensable/)
- [Déménagement à Strasbourg](/demenagement/strasbourg/)

## FAQ

### Quels objets sont considérés “lourds” en déménagement ?
Frigo américain, piano, coffre-fort, gros électroménager, grandes armoires. Ce qui compte : poids + gabarit + fragilité.

### Quelles infos donner au déménageur ?
détail de l’objet + détail du passage étroit + escalier/ascenseur. Objectif : cadrer la méthode.

### Peut-on les transporter sans matériel spécifique ?
Parfois, mais il faut le cadrer dans le devis : protection, sangles, équipe, option lift si nécessaire.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "demenagement-fin-de-mois-vs-milieu",
    title: "Fin de mois vs milieu de mois : quand déménager pour payer moins (sans prendre de risque)",
    description:
      "Guide concret : pourquoi la fin de mois est plus tendue, comment obtenir un meilleur prix avec de la flexibilité, et checklists pour sécuriser le jour J.",
    type: "satellite",
    body: `# Fin de mois vs milieu de mois : quand déménager pour payer moins (sans prendre de risque)

Si vous voulez payer moins, il y a un levier simple : **la flexibilité de date**. La fin de mois concentre beaucoup de déménagements (baux, états des lieux, contraintes perso). Résultat : plus de demande, moins de créneaux.

Ce guide vous aide à choisir une stratégie réaliste : économiser sans transformer votre déménagement en pari.

> [CTA] Obtenir des devis selon plusieurs dates
> Donnez 2–3 options de date : vous augmentez vos chances d’avoir un bon créneau (et souvent un meilleur prix).

## 1) Pourquoi la fin de mois est plus tendue

- Organisation des baux (sorties/entrées)
- Week‑ends plus demandés
- Disponibilités plus limitées

## 2) Les 3 leviers simples pour obtenir un meilleur devis

1. Proposer 2–3 dates possibles
2. Éviter le week‑end si possible
3. Rendre l’accès ultra clair (zéro surprise)

## 3) Comment ne pas “se mettre en danger”

Être flexible ne veut pas dire être flou. Au contraire :

- Fixez une fenêtre (ex : mardi/mercredi/jeudi)
- Validez l’accès (détails)
- Standardisez les infos (inventaire)

## Liens utiles

- [Checklists & guides](/blog/checklists-et-guides/)
- [Déménagement à Toulouse](/demenagement/toulouse/)

## FAQ

### Pourquoi la fin de mois est-elle plus chère ?
Demande souvent plus forte, créneaux plus rares, donc prix potentiellement plus élevés.

### Comment obtenir un meilleur prix sans risque ?
Proposer 2–3 dates, éviter le week‑end si possible, et rendre l’accès clair.

### Est-ce que bouger en semaine aide vraiment ?
Souvent oui : plus de disponibilité et moins de tension sur les créneaux.
${COMMON_APPENDIX}
`,
  },
  {
    slug: "garde-meuble-2-semaines-avant-demenagement",
    title: "Garde‑meuble 2 semaines : le plan simple pour éviter un déménagement “en urgence” (et mieux comparer les devis)",
    description:
      "Stockage court 2 semaines : quand c’est utile, comment organiser enlèvement→stockage→livraison, checklists cartons/inventaire, et erreurs fréquentes.",
    type: "pilier",
    body: `# Garde‑meuble 2 semaines : le plan simple pour éviter un déménagement “en urgence” (et mieux comparer les devis)

Un garde‑meuble “2 semaines” est souvent la solution la plus sous‑estimée : il ne sert pas seulement à stocker. Il sert à **reprendre le contrôle** quand vos dates ne s’alignent pas (travaux, état des lieux, signature, imprévus).

Bien fait, un stockage court améliore la qualité du devis (et du jour J) parce que vous découpez le projet en étapes claires.

> [CTA] Comparer des devis avec option stockage
> Indiquez vos dates (enlèvement + livraison) et un inventaire clair : vous évitez les surprises et vous gagnez en sérénité.

## 1) Quand ça vaut vraiment le coup

- Dates non alignées (sortie/entrée)
- Travaux (peinture, sol, cuisine)
- Besoin d’espace pour trier
- Déménagement longue distance avec timing incertain

## 2) Le plan en 3 étapes (simple)

1. Enlèvement : tout ce qui n’est pas “urgent 24h”
2. Stockage : cartons étiquetés + inventaire court
3. Livraison : organisation pièce par pièce

## 3) La checklist qui rend le stockage “propre”

- Cartons standardisés + étiquetés
- Liste “essentiels 24h” séparée
- détails meubles volumineux
- Accès documenté (enlèvement + livraison)

## 4) Erreurs fréquentes

1. Ne pas séparer les essentiels
2. Étiquetage flou (impossible de retrouver)
3. Sous‑estimer le volume (stockage insuffisant)

## Liens utiles

- [Petit déménagement](/blog/petit-demenagement-10-15-cartons/)
- [Déménagement longue distance : prix](/blog/prix-demenagement-longue-distance-france/)

## FAQ

### Un garde-meuble 2 semaines vaut-il le coup ?
Oui quand vous devez décaler les dates ou faire des travaux : vous réduisez l’urgence et sécurisez la logistique.

### Quelles erreurs éviter avec un stockage court ?
Ne pas séparer les essentiels 24h, mal étiqueter, et sous‑estimer le volume.

### Comment intégrer ça dans le devis ?
Préciser enlèvement → stockage → livraison, fenêtre de dates, et niveau de prestation.
${COMMON_APPENDIX}
`,
  },
];


