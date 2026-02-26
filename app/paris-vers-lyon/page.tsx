import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('paris', 'Paris', 'Lyon', 'lyon');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="paris"
      originCityName="Paris"
      destination="Lyon"
      destinationSlug="lyon"
      distance="465 km"
      tempsMoyen="4h30"
      periodeConseillee="Mars-Mai, Sept-Nov"
      prixIndicatifs={[
        {
          type: "Studio/T1 (10-15 m³)",
          prix: "950-1420€",
          description: "Camion 20m³, 2 déménageurs, assurance incluse"
        },
        {
          type: "T2/T3 (20-35 m³)",
          prix: "1350-2030€",
          description: "Camion 30m³, 3 déménageurs, démontage/remontage"
        },
        {
          type: "Maison (40-80 m³)",
          prix: "2200-3300€",
          description: "Camion 50m³, 4 déménageurs, protection renforcée"
        }
      ]}
      accesArrivee="Lyon présente des défis spécifiques : la Presqu'île (rues étroites entre Rhône et Saône), le Vieux Lyon (pavés, zones piétonnes), Croix-Rousse (pentes raides 10-15%), et la Part-Dieu (circulation dense). Les quais (berges du Rhône) interdisent le stationnement poids lourds 7h-19h. Nos partenaires déménageurs connaissent parfaitement les contraintes lyonnaises et anticipent les autorisations nécessaires."
      conseils={[
        "Réservez 3-4 semaines à l'avance : corridor Paris-Lyon = le plus demandé de France (30% des déménagements inter-régions)",
        "Demandez autorisation stationnement mairie de Lyon (délai 7-10j) si arrivée Presqu'île/Vieux Lyon",
        "Évitez les Jeudis (jour de marché St-Antoine, Part-Dieu) et les week-ends de grands événements (Fête des Lumières en décembre, Nuits Sonores en mai)",
        "Privilégiez départ matinal Paris (6h-7h) pour arriver Lyon avant 11h et éviter circulation Part-Dieu 12h-14h",
        "Prévoyez plan B si immeuble Lyon sans ascenseur : Croix-Rousse et Vieux Lyon = nombreux 4-5èmes étages",
        "Vérifiez contraintes copropriété Lyon : réservation ascenseur 48h avant, protections obligatoires (parquet chevrons fréquents)"
      ]}
      faq={[
        {
          question: "Combien de temps dure un déménagement Paris → Lyon ?",
          answer: "**Trajet** : 465 km, 4h30 de route pure (via A6). **Déménagement complet** : 1-2 jours selon volume. **Petit volume** (< 25 m³) : Chargement Paris matin (3-4h) + transport (4h30) + déchargement Lyon après-midi (3-4h) = même journée possible si départ 7h. **Gros volume** (> 40 m³) : Jour 1 chargement Paris (6-8h), nuit, Jour 2 transport + déchargement Lyon (4h30 + 6-8h)."
        },
        {
          question: "Quelle est la meilleure période pour déménager de Paris vers Lyon ?",
          answer: "**Meilleure période** : Mars-Mai ou Septembre-Novembre. Climat tempéré, tarifs standard, circulation fluide. **À éviter** : Juin-Août (+20-25% tarifs haute saison), fins de mois (flux locatifs), 1er weekend Septembre (rentrée scolaire = A6 saturée), 8 Décembre (Fête des Lumières Lyon, ville bloquée). **Astuce** : Déménager mardi-jeudi hors vacances scolaires = -10-15% vs samedi."
        },
        {
          question: "Quels sont les prix d'un déménagement Paris-Lyon en 2026 ?",
          answer: "**T1/T2 (20 m³)** : 1350-2030€. **T3/T4 (35 m³)** : 1800-2700€. **Maison (60 m³)** : 3000-4500€. Prix inclut : transport 465 km, main d'œuvre (2-4 déménageurs), assurance de base 600€/m³, carburant, péages (~45€). **Suppléments fréquents** : Étages sans ascenseur Paris (+50-80€/étage), Lyon Croix-Rousse pentes (+100-150€), piano (+150-300€), samedi/dimanche (+15-20%)."
        },
        {
          question: "Faut-il une autorisation de stationnement à Lyon ?",
          answer: "**Oui si arrivée** : Presqu'île (rues Mercière, République, Victor Hugo < 4m), Vieux Lyon (zones piétonnes), quais du Rhône/Saône (interdit poids lourds 7h-19h), Croix-Rousse (montées étroites). **Démarche** : Mairie de Lyon, service voirie, 7-10 jours avant, ~40-50€. **Non nécessaire** : Part-Dieu (sauf jeudi marché), Villeurbanne, Bron, quartiers périphériques. Votre déménageur peut gérer cette démarche (service +50-80€)."
        },
        {
          question: "Quelles sont les contraintes spécifiques à Lyon pour un déménagement ?",
          answer: "**Accès difficiles** : Vieux Lyon (pavés, ruelles 2-3m, 5èmes étages sans ascenseur), Croix-Rousse (pentes 10-15%, virages serrés, 6 étages fréquents), Presqu'île (sens uniques, circulation dense). **Stationnement** : Quais interdits poids lourds, PV rapides (10-15 min), zones livraison 7h-11h uniquement. **Copropriétés** : Immeubles haussmanniens (ascenseurs 0,7-0,9m, parquets anciens à protéger). **Circulation** : Tunnel Fourvière saturé 8h-10h/17h-19h, contourner par A46/A7."
        },
        {
          question: "Paris-Lyon : déménagement en 1 jour ou 2 jours ?",
          answer: "**1 jour possible** si : Volume < 25 m³ (T1/T2), départ Paris 7h, arrivée Lyon 17h-18h, accès faciles (ascenseurs, parkings proches). **2 jours recommandé** si : Volume > 40 m³ (T4/maison), étages sans ascenseur, quartiers difficiles (Vieux Lyon, Croix-Rousse), objets fragiles/lourds (piano, antiquités). **Avantage 2 jours** : Déménageurs reposés = travail soigné, flexibilité horaires (pas de rush)."
        }
      ]}
      contentSupplement={`
## 🛣️ Itinéraire Paris → Lyon : 465 km sur l'autoroute du Soleil

### Trajet routier optimal

**Route recommandée** : Paris (Porte d'Italie/Porte d'Orléans) → A6 (Autoroute du Soleil) → Lyon (Porte de Lyon ou Porte de Valvert selon quartier)

**Distance** : 465 km  
**Durée** : 4h30 (hors pauses et aléas)  
**Péages** : ~45€ (véhicule léger), 85-120€ (camion 12-20 tonnes)  
**Carburant** : ~180-300€ (selon gabarit camion et prix diesel)

### Points de vigilance sur l'itinéraire

**A6 Autoroute du Soleil** :
- **2ème autoroute la plus fréquentée de France** (150 000 véhicules/jour en période normale)
- Bouchons fréquents : Sorties Paris (7h-9h30), approche Lyon (11h30-13h et 17h-19h30)
- **Jours critiques** : Vendredis 16h-21h (départs weekend), dimanches 16h-21h (retours), 1er weekend Août (Chassé-Croisé = +2-3h)
- **Zones sensibles** : Beaune (travaux fréquents), Mâcon-Sud (rétrécissement), Limonest (approche Lyon Nord)

**Tunnel de Fourvière (Lyon)** :
- Passage obligatoire si arrivée centre Lyon (Presqu'île, Vieux Lyon)
- **Saturé 8h-10h et 17h-19h30** (30-45 min d'attente)
- Alternative : A46 contournement Est (Porte de Lyon) puis A7 vers Part-Dieu (+15 min mais fluide)

**Météo et saisonnalité** :
- **Brouillard dense** (Nov-Fév) : A6 Bourgogne et vallée du Rhône → visibilité < 50m → -30 km/h
- **Neige A6** (Déc-Mars) : Secteur Beaune-Chalon-sur-Saône → pneus neige recommandés (loi Montagne depuis Nov 2021)
- **Fortes chaleurs** (Juin-Août) : 35-40°C sur A6 → risque surchauffe moteur camions chargés

---

## 💰 Détail des prix Paris → Lyon (2026)

### Grille tarifaire selon volume et services

#### Studio 15 m³ (Paris → Lyon)
**Formule Éco** : 950-1150€  
Inclut : Camion 20 m³, 2 déménageurs, carburant, péages, assurance 600€/m³  
Vous emballez tout vous-même (cartons, protection meubles)

**Formule Standard** : 1200-1420€ (+250-300€)  
+ Emballage objets fragiles (vaisselle, bibelots)  
+ Démontage/remontage meubles standards (lit, étagères)  
+ Protection meubles volumineux (couvertures, sangles)

**Suppléments fréquents** :
- Paris : 3ème étage sans ascenseur → +60-100€
- Lyon : Vieux Lyon (grue, autorisation) → +200-350€
- Piano droit → +150€
- Assurance ad valorem 10 000€ → +80-100€
- **Total réel moyen** : 1550-1970€

---

#### T2/T3 35 m³ (Paris → Lyon)
**Formule Standard** : 1800-2300€  
Inclut : Camion 40 m³, 3 déménageurs, démontage/remontage, protection meubles

**Formule Confort** : 2400-2900€ (+600€)  
+ Emballage TOUT (vaisselle, vêtements, livres)  
+ Déballage arrivée  
+ Installation meubles selon plan

**Suppléments** :
- Croix-Rousse Lyon (6ème sans ascenseur, pentes) → +150-200€
- Piano à queue → +300-400€
- Stockage temporaire 7 jours → +200€
- Samedi → +15% (270-345€)
- **Total réel moyen** : 2350-3200€

---

#### Maison 60 m³ (Paris → Lyon)
**Formule Confort** : 3300-4200€  
Inclut : Camion 60 m³, 4 déménageurs, service complet (emballage, démontage, installation)

**Suppléments** :
- Cave + garage (volume réel 75 m³ au lieu de 60 m³) → +400-600€
- Objets d'art/antiquités (assurance renforcée) → +200€
- Monte-meuble Lyon (immeuble sans ascenseur) → +300-500€
- Livraison J+1 (2 jours au lieu de 1) → +0€ (inclus si > 50 m³)
- **Total réel moyen** : 4200-5500€

---

## 🏙️ Spécificités Lyon : contraintes et solutions

### Quartier Presqu'île (2ème arrondissement)

**Caractéristiques** :
- Rues 3-5m de large (rue Mercière, rue Tupin, rue de la Charité)
- Immeubles haussmanniens 4-5 étages, ascenseurs étroits (0,7-0,9m)
- Zones de livraison 7h-11h uniquement (PV 135€ si stationnement hors créneau)
- Circulation dense (coeur commerçant Lyon)

**Solution déménageur professionnel** :
- Autorisation stationnement mairie obligatoire (40-50€, 7-10j avant)
- Camion arrivée 7h-8h (créne AU livraison + avant affluence)
- Protection parquets anciens (cartons, bâches) → +50-80€
- Démontage systématique meubles (passages étroits)

**Impact prix** : +100-200€ (autorisation, protections, temps rallongé)

---

### Vieux Lyon (5ème arrondissement)

**Caractéristiques** :
- **Quartier médiéval/Renaissance** : Ruelles 2-3m (rue du Bœuf, rue Saint-Jean)
- Pavés (vibrations = risque casse)
- Immeubles 15-16ème siècle : 5 étages, pas d'ascenseur, escaliers étroits en colimaçon
- Zones piétonnes (Saint-Jean, Saint-Georges)

**Solution déménageur professionnel** :
- Camion 10-12 m³ max (le 20 m³ ne rentre pas dans les ruelles)
- Navette depuis parking Trion ou Vieux-Lyon (500m-1km) → +150-250€
- Portage manuel escaliers étroits (2 déménageurs ne peuvent pas porter ensemble)
- Monte-meuble si 4ème-5ème étage → +300-400€

**Impact prix** : +350-650€ (navette, portage, temps doublé)

**Astuce** : Si volume > 30 m³ et Vieux Lyon 5ème sans ascenseur, envisager location camion navette + équipe renforcée (5 déménageurs au lieu de 3)

---

### Croix-Rousse (4ème arrondissement)

**Caractéristiques** :
- **La colline** : Pentes 10-15% (Montée de la Grande-Côte, Montée Saint-Sébastien)
- Immeubles canuts : 6 étages (hauteur sous plafond 4m = 7-8 étages standards), escaliers raides
- Rues en pente + virages serrés (camion doit manœuvrer en marche arrière)
- Places parking rares (quartier résidentiel dense)

**Solution déménageur professionnel** :
- Camion avec ralentisseur moteur (freinage pentes) + 2ème chauffeur
- Équipe renforcée si 5ème-6ème étage (4 déménageurs pour relais portage)
- Réservation places parking riverain (mairie) ou parking public (Q-Park Croix-Rousse)
- Début tôt (7h) pour bénéficier places libres temporaires

**Impact prix** : +150-250€ (équipe renforcée, temps rallongé pentes)

---

### Part-Dieu (3ème arrondissement)

**Caractéristiques** :
- Quartier d'affaires : Circulation très dense 8h-10h et 12h-14h (bureaux, gare)
- Immeubles récents : Ascenseurs larges (1,2-1,5m), parkings sous-sols
- Contrainte : Jeudi matin = marché Saint-Antoine (rues bloquées 6h-13h)

**Solution déménageur professionnel** :
- Éviter jeudi (ou arrivée avant 6h)
- Réservation parking copropriété (obligatoire, gratuit ou 20-50€)
- Accès facile = pas de surcoût (sauf si jeudi)

**Impact prix** : 0€ (quartier "facile" pour déménagement)

---

## 🌡️ Climat et saisonnalité : impact tarifs Paris-Lyon

### Haute saison (Juin-Août)

**Contraintes** :
- Demande +40% (pics déménagements étudiants, familles)
- Températures 30-35°C (fatigue déménageurs, objets sensibles chaleur)
- A6 saturée week-ends (Chassé-Croisé 1er Août = +2-3h trajet)

**Impact tarif** : +20-25%  
**Exemple** : T3 35 m³ = 2300€ (standard) → 2760-2875€ (Août)

**Recommandation** : Éviter 14 Juillet-25 Août si possible

---

### Basse saison (Janvier-Février, Novembre)

**Avantages** :
- Demande -30% (déménageurs disponibles)
- Tarifs négociables (-15-20%)
- A6 fluide (hors vacances scolaires)

**Contraintes** :
- Brouillard A6 (Novembre-Février) → +1h trajet potentiel
- Neige secteur Beaune (Décembre-Mars) → retards possibles
- Jours courts (nuit 17h30) → chargement/déchargement lumière artificielle

**Impact tarif** : -15-20%  
**Exemple** : T3 35 m³ = 1840-1955€ (Janvier) vs 2300€ (Mai)

---

### Périodes idéales

**Mars-Mai** :
- Climat doux (12-20°C), jours longs
- Tarifs standard (pas de majoration)
- A6 fluide (hors weekends Pâques)

**Septembre-Novembre** :
- Après rentrée scolaire (éviter 1er weekend Septembre)
- Tarifs -10% vs été
- Météo encore clémente

**Jours de la semaine** :
- **Mardi-Jeudi** : -10-15% (creux de demande)
- Lundi/Vendredi : Tarif standard
- Samedi : +15-20%
- Dimanche : +25-30% (rare, déménageurs peu disponibles)

---

## 📦 Checklist déménagement Paris → Lyon

### 4 semaines avant

- [ ] Demander 3-5 devis déménageurs spécialistes Paris-Lyon (corridor très concurrentiel = négociation possible)
- [ ] Identifier quartier arrivée Lyon + contraintes (ascenseur, largeur rues, pentes)
- [ ] Réserver créneau ascenseur Lyon (copropriété : 48-72h avant obligatoire)
- [ ] Souscrire assurance habitation Lyon (obligatoire avant remise clés)

### 2 semaines avant

- [ ] Confirmer date avec déménageur (éviter fins de mois si possible)
- [ ] Demander autorisation stationnement Lyon si Presqu'île/Vieux Lyon (mairie, 40-50€)
- [ ] Trier objets : Vendre sur Leboncoin (réduire volume = économies)
- [ ] Prévenir EDF/Engie Paris (résiliation au jour J, pas avant) + Lyon (souscription)

### 1 semaine avant

- [ ] Cartons fragiles : Étiquettes claires "FRAGILE", "HAUT", nom pièce
- [ ] Photos meubles de valeur (preuve état avant transport)
- [ ] Vérifier météo A6 (brouillard ou neige prévus ?)
- [ ] Préparer plan accès Lyon (codes portes, numéro gardien, places parking)

### Jour J départ Paris

- [ ] Remettre plan détaillé Lyon aux déménageurs (rue d'arrivée, contraintes, contact)
- [ ] Vérifier inventaire : Nombre cartons chargés = nombre cartons prévus
- [ ] Noter réserves si meubles abîmés PENDANT chargement (bon de transport)
- [ ] Donner clés Lyon si livraison en votre absence (+ contact)

### Arrivée Lyon

- [ ] Être présent ou mandataire (diriger placement meubles selon plan)
- [ ] Vérifier état cartons/meubles AVANT de signer bon de livraison
- [ ] Signer avec réserves détaillées si dommages (photos à l'appui)
- [ ] Déclarer sinistre sous 5 jours si problème (recommandé AR à assurance déménageur)

---

## 🔍 Comment choisir le bon déménageur Paris → Lyon

### Critère #1 : Expertise du corridor Paris-Lyon

**Question clé** : "Combien de déménagements Paris-Lyon faites-vous par an ?"

**Réponse excellente** : "100-150 (2-3 par semaine), c'est un de nos corridors principaux"  
**Réponse acceptable** : "30-50 (1 par semaine)"  
**Red flag** : "On fait tous types de trajets" (généraliste = pas d'optimisation)

**Pourquoi c'est crucial** :
- Déménageur spécialiste connaît les pièges (Fourvière saturé, Vieux Lyon impossible en 20m³)
- Tarifs optimisés (camions réguliers Paris-Lyon = groupage possible)
- Réseau partenaires Lyon (si besoin grue, navette)

---

### Critère #2 : Connaissance spécificités Lyon

**Questions à poser** :
- "Avez-vous déjà déménagé dans le Vieux Lyon / Croix-Rousse ?"
- "Comment gérez-vous les autorisations Presqu'île ?"

**Réponse bonne** :
- "Oui, on connaît les contraintes (navette, monte-meuble). On a un partenaire lyonnais pour les quartiers difficiles."

**Red flag** :
- "Pas de problème, on s'adapte sur place" (= improvisation = surcoûts jour J)

---

### Critère #3 : Flotte adaptée et backup

**Vérifications** :
- Volume annoncé = camion adapté (T3 35 m³ → camion 40 m³ minimum)
- Camion de secours disponible (si panne A6 → camion remplacement sous 3h)
- Équipement : Diables, sangles, couvertures (au moins 20 pour T3)

**Question** : "Que se passe-t-il si le camion tombe en panne sur l'A6 ?"

**Réponse bonne** : "Assistance 24/7, camion remplacement sous 2-3h, vos affaires transbordées, livraison assurée même si retard"  
**Red flag** : "Nos camions sont fiables" (= pas de plan B)

---

### Critère #4 : Assurance et références vérifiables

**Documents à demander** :
- ✅ Attestation RC Pro < 1 an (1,5 M€ minimum)
- ✅ Score Creditsafe > 60/100 (vérifiable sur Pappers.fr)
- ✅ Avis Google Lyon/Paris (note > 4,2/5 avec 50+ avis)

**Red flags** :
- ❌ Refuse de fournir attestation RC Pro
- ❌ Entreprise < 2 ans + fonds propres négatifs (risque faillite)
- ❌ Avis Google < 3,5/5 ou patterns suspects (50 avis 5★ le même jour)

---

## 💡 3 Astuces pour économiser 300-600€

### Astuce #1 : Groupage Paris-Lyon

**Principe** : Votre déménagement partage le camion avec 1-2 autres (même trajet, même période)

**Économie** : 30-40% (1610€ au lieu de 2300€ pour T3 35 m³)  
**Contrainte** : Livraison J+1 ou J+2 (le camion fait plusieurs arrêts Lyon)  
**Conditions** : Volume < 40 m³, flexibilité date livraison (+/- 2 jours)

**Où trouver** : Moverz propose groupages via partenaires spécialisés

---

### Astuce #2 : Déménager mardi-mercredi hors vacances

**Économie** : 300-450€ sur T3

**Tarif dégressif** :
- Samedi : +15% (2645€)
- Lundi/Vendredi : Tarif standard (2300€)
- **Mardi-Mercredi** : -10-15% (1955-2070€)

**Économie** : 230-690€ (mardi vs samedi)

**Bonus** : Hors vacances scolaires = A6 fluide = arrivée à l'heure

---

### Astuce #3 : Faire le tri avant (réduire volume)

**Principe** : Vendre/donner 20% du volume = réduire taille camion

**Exemple concret** :
- Volume initial : 35 m³ (T3) → Devis 2300€
- Tri drastique : Vendre canapé 3 places (3 m³), armoire PAX (2 m³), étagères (1 m³), livres (2 m³) = -8 m³
- **Volume final** : 27 m³ → Camion 30 m³ suffit → Devis 1850€

**Économie** : 450€ + 400€ (vente meubles Leboncoin) = **850€ total**

**Astuce** : Racheter meubles à Lyon (Leboncoin, Emmaüs) souvent moins cher que transport

---

## 📚 Pour aller plus loin

Vous préparez votre déménagement Paris-Lyon ? Consultez nos guides experts pour optimiser chaque étape :

- **[Checklist déménagement 30 jours](/blog/checklist-demenagement-30-jours/)** — Ne rien oublier avant le jour J
- **[Comment comparer des devis](/blog/comparer-devis-demenagement-guide/)** — Les critères au-delà du prix
- **[Estimer son volume de déménagement](/blog/estimer-volume-demenagement-guide-complet/)** — Méthodologie pièce par pièce
- **[Top 10 déménageurs France 2026](/blog/top-10-demenageurs-france-2026/)** — Critères objectifs pour choisir
- **[Comment lire un score Creditsafe](/blog/comprendre-score-creditsafe-demenageur/)** — Vérifier la santé financière
- **[Glossaire du déménagement](/glossaire-demenagement/)** — 50+ termes techniques décryptés

---

**Prêt à déménager de Paris vers Lyon ?**  
[Comparez 5 devis de déménageurs vérifiés →](https://devis.moverz.fr/devis-gratuits?source=corridor-paris-lyon)
`}
    />
  );
}
