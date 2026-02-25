import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('cambrai', 'Cambrai', 'Nice', 'nice');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="cambrai"
      originCityName="Cambrai"
      destination="Nice"
      destinationSlug="nice"
      distance="975 km"
      tempsMoyen="9h30"
      periodeConseillee="Avril-Juin, Sept-Oct"
      prixIndicatifs={[
        {
          type: "Studio/T1 (10-15 m³)",
          prix: "1550-2320€",
          description: "Camion 20m³, 2 déménageurs, assurance incluse"
        },
        {
          type: "T2/T3 (20-35 m³)",
          prix: "2050-3070€",
          description: "Camion 30m³, 3 déménageurs, démontage/remontage"
        },
        {
          type: "Maison (40-80 m³)",
          prix: "3300-4940€",
          description: "Camion 50m³, 4 déménageurs, protection renforcée"
        }
      ]}
      accesArrivee="Nice (Côte d'Azur) présente des défis spécifiques pour les déménagements longue distance depuis Cambrai : rues étroites du vieux Nice (3-4m de large), nombreux sens uniques, zones piétonnes (port, Cours Saleya), stationnement limité. Les quartiers résidentiels en colline (Cimiez, Mont Boron) nécessitent parfois un véhicule navette. Nos partenaires déménageurs connaissent parfaitement les contraintes niçoises et prévoient les autorisations de stationnement nécessaires."
      conseils={[
        "Anticipez la réservation 4-6 semaines : corridor Cambrai-Nice très demandé en haute saison (Juin-Août)",
        "Demandez autorisation stationnement mairie de Nice (délai 7-15j) si arrivée centre-ville/vieux Nice",
        "Évitez Juillet-Août : +25-35% sur les tarifs (période estivale Côte d'Azur) + circulation dense",
        "Prévoyez assurance ad valorem pour objets de valeur (transport 975 km, 9h30 de route)",
        "Vérifiez contraintes parking copropriété Nice : horaires livraison, ascenseur réservé",
        "Planifiez arrivée matinale (7h-9h) pour éviter circulation Promenade des Anglais"
      ]}
      faq={[
        {
          question: "Combien de temps dure un déménagement Cambrai → Nice ?",
          answer: "**Trajet** : 975 km, ~9h30 de route pure (via A26 → A7). **Déménagement complet** : 2-3 jours selon volume. Jour 1 : chargement Cambrai (3-6h). Jour 2 : transport + déchargement Nice (9h30 route + 3-6h déchargement). Les déménageurs professionnels optimisent en chargeant veille au soir, roulant de nuit, déchargeant le lendemain matin."
        },
        {
          question: "Quelle est la meilleure période pour déménager de Cambrai vers Nice ?",
          answer: "**Meilleure période** : Avril-Juin ou Septembre-Octobre. Climat agréable, tarifs -20% vs haute saison, circulation fluide. **À éviter** : Juillet-Août (+30% tarifs, Côte d'Azur saturée, 35-40°C), week-ends longs (circulation A7 dense), 24 Décembre-2 Janvier (fermetures). **Astuce** : Déménager mardi-jeudi = -15% vs samedi."
        },
        {
          question: "Quels sont les prix d'un déménagement Cambrai-Nice ?",
          answer: "**T1/T2 (20 m³)** : 2050-3070€. **T3/T4 (35 m³)** : 2700-4050€. **Maison (60 m³)** : 4200-6300€. Prix inclut : transport 975 km, main d'œuvre (2-4 déménageurs selon volume), assurance de base 600€/m³, carburant. Suppléments : étages sans ascenseur (+50-100€/étage), objets lourds (piano +200-400€), stockage temporaire (+150-300€), assurance ad valorem."
        },
        {
          question: "Faut-il une autorisation de stationnement à Nice ?",
          answer: "**Oui si arrivée** : Vieux Nice, centre-ville (zones piétonnes/semi-piétonnes), rues < 5m de large (Cimiez, Libération), Promenade des Anglais (restrictions horaires). **Démarche** : Mairie de Nice, service voirie, 7-15 jours avant, ~50€. **Non nécessaire** : Quartiers périphériques (Arenas, Saint-Isidore), zones pavillonnaires. Votre déménageur gère souvent cette démarche."
        },
        {
          question: "Quelles sont les contraintes spécifiques à Nice pour un déménagement ?",
          answer: "**Accès** : Vieux Nice (rues 3-4m, pavées, zones piétonnes), collines (Mont Boron, Cimiez : pentes raides, virages serrés), sens uniques nombreux. **Stationnement** : Très limité centre-ville, PV rapides (10-20 min), double file interdite. **Copropriétés** : Réservation ascenseur obligatoire (48-72h), horaires stricts (7h-20h), protections sols exigées. **Circulation** : Promenade des Anglais dense 8h-10h et 17h-19h. Déménageurs locaux connaissent alternatives (rue de France, bd Victor Hugo)."
        },
        {
          question: "Comment éviter les suppléments sur un déménagement Cambrai-Nice ?",
          answer: "**5 astuces** : 1. Déclarez volume EXACT (photos inventaire) → évite supplément jour J. 2. Mesurez passages Nice (portes, ascenseur) → anticipe grue si besoin. 3. Signalez objets lourds (piano, coffre-fort) → devis adapté. 4. Réservez 4-6 semaines à l'avance → évite majoration urgence (+20-30%). 5. Déménagez hors saison (Sept-Mai) → -20-25% vs Juin-Août."
        },
        {
          question: "Quelle assurance pour un déménagement Cambrai → Nice ?",
          answer: "**Assurance de base** : 600€/m³ (incluse). T3 de 35 m³ = 21 000€ de couverture. **Insuffisant si** : Meubles de valeur (antiquités, piano Steinway), électronique haut de gamme, œuvres d'art. **Assurance ad valorem** (recommandée) : Vous déclarez valeur réelle. Coût : 0,8-1,2% valeur déclarée. Exemple : 30 000€ d'objets → assurance +240-360€. **Obligatoire** : Factures/expertises pour prouver valeur si sinistre."
        }
      ]}
      contentSupplement={`
## 🛣️ Itinéraire Cambrai → Nice : 975 km de défis logistiques

### Trajet routier optimal

**Route recommandée** : Cambrai → A2 → A26 (Reims) → A5 (Troyes) → A31 (Dijon) → A6 → A7 (Lyon → Valence → Orange → Aix-en-Provence) → A8 → Nice

**Distance** : 975 km  
**Durée** : 9h30 (hors pauses)  
**Péages** : ~95€ (véhicule léger), 180-220€ (camion 20-30 tonnes)  
**Carburant** : ~350-550€ (selon gabarit camion)

### Points de vigilance sur l'itinéraire

**A7 Lyon-Marseille** ("autoroute du Soleil") :
- **Zone la plus chargée de France** (200 000 véhicules/jour en été)
- Bouchons fréquents : Vienne, Valence-Sud, Orange (15 Juin-31 Août)
- Recommandation : Circulation de nuit (22h-6h) ou très tôt (5h-7h)

**A8 Aix-Nice** :
- Tunnels nombreux (La Turbie, Roquebrune) → ralentissements
- Péage Nice-Ouest (7€) ou Nice-Est (5€) selon quartier arrivée
- Sorties Nice : Bien choisir (Nice-Ouest pour Vieux Nice, Nice-Est pour Cimiez/Mont Boron)

**Météo** :
- Mistral violent (A7 Valence-Orange) : Vent 80-120 km/h, camions interdits si > 90 km/h
- Pluies orageuses Sud-Est (Sept-Oct) : Visibilité réduite, A8 glissante
- Neige col de Tende (route alternative si A8 fermée) : Novembre-Mars

---

## 💰 Détail des prix Cambrai → Nice (2026)

### Grille tarifaire selon volume et options

#### Studio 15 m³ (Cambrai → Nice)
**Base** : 1550-1850€  
Inclut : Camion 20 m³, 2 déménageurs, carburant, péages, assurance 600€/m³

**Suppléments fréquents** :
- Cambrai : 2ème étage sans ascenseur → +100€
- Nice : Vieux Nice (grue, autorisation) → +300-500€
- Assurance ad valorem 8 000€ → +60€
- **Total réel** : 2010-2510€

#### T2/T3 35 m³
**Base** : 2700-3400€  
Inclut : Camion 40 m³, 3 déménageurs, démontage/remontage meubles standards

**Suppléments** :
- Piano droit (protection renforcée) → +200€
- Stockage 7 jours (délai entre départ/arrivée) → +250€
- Déménagement samedi → +15% (405-510€)
- **Total réel** : 3555-4565€

#### Maison 80 m³
**Base** : 4940-6200€  
Inclut : Camion 60 m³, 4 déménageurs, 2 jours (chargement J1, livraison J2)

**Suppléments** :
- Cave + garage (volume sous-estimé +10 m³) → +500€
- Objets fragiles (vaisselle ancienne, verrerie) → +150€
- Assurance ad valorem 40 000€ → +400€
- **Total réel** : 5990-7250€

---

## 🏙️ Spécificités Nice : ce que votre déménageur doit savoir

### Quartiers à contraintes fortes

#### Vieux Nice (Vieille Ville)
**Caractéristiques** :
- Rues 3-4m de large (rue Droite, rue Pairolière)
- Pavées (vibrations camion = dommages objets fragiles)
- Zones piétonnes 10h-18h (Cours Saleya, place Rossetti)
- Pas de stationnement camion (PV immédiat)

**Solution déménageur pro** :
- Camion 10-12 m³ max (le 20 m³ ne passe pas)
- Navette depuis parking Garibaldi (2 km) → +200-300€
- Autorisation mairie obligatoire (stationnement provisoire 6h-9h)
- Portage manuel (50-150m depuis camion)

**Impact prix** : +300-600€ (navette + temps supplémentaire)

#### Cimiez / Mont Boron (collines)
**Caractéristiques** :
- Pentes 8-12% (boulevard de Cimiez, corniche André de Joly)
- Virages en épingle
- Copropriétés haut standing (protections sols exigées)
- Ascenseurs petits (0,8-1m de large)

**Solution déménageur pro** :
- Camion avec ralentisseur moteur (freinage pentes)
- Démontage meubles systématique (passages étroits)
- Protections renforcées (parquet chevrons, marbre)

**Impact prix** : +100-200€ (temps rallongé, protections)

#### Promenade des Anglais / Front de mer
**Caractéristiques** :
- Circulation très dense (100 000 véhicules/jour)
- Double file interdite (PV 135€)
- Immeubles Belle Époque (ascenseurs 1900 = 0,6m de large)

**Solution déménageur pro** :
- Déchargement 6h-8h (avant affluence)
- Monte-meuble si ascenseur < 0,7m
- Autorisation stationnement "livraison" (mairie)

---

## 🌡️ Climat et saisonnalité : impact sur le déménagement

### Haute saison Côte d'Azur (Juin-Août)
**Contraintes** :
- Température 30-38°C → objets sensibles (vinyles, chocolat, médicaments)
- Déménageurs fatigue accrue → ralentissement
- Circulation A7/A8 saturée → +2-3h trajet

**Impact tarif** : +25-35%  
**Exemple** : T3 35 m³ passe de 3000€ (Avril) à 3900€ (Juillet)

**Recommandation** : Éviter 14 Juillet-20 Août (pic absolu)

### Basse saison (Janvier-Mars, Novembre)
**Avantages** :
- Tarifs -20% (déménageurs moins sollicités)
- Disponibilités larges (choix créneaux)
- Circulation fluide (A7/A8)

**Contraintes** :
- Pluies Sud-Est (Novembre) → bâches étanches obligatoires
- Neige possible A7 (Janvier-Février) → retards 2-4h

**Exemple** : T3 35 m³ = 2400€ (Novembre) vs 3000€ (Mai)

### Période idéale
**Avril-Juin, Septembre-Octobre** :
- Climat agréable (18-25°C)
- Tarifs intermédiaires (-10%)
- Circulation correcte

---

## 📦 Checklist spécifique déménagement Cambrai → Nice

### 6 semaines avant
- [ ] Demander 3 devis déménageurs **spécialistes longue distance** (expérience corridors 900+ km)
- [ ] Vérifier contraintes Nice : quartier d'arrivée, largeur rues, parking
- [ ] Réserver créneaux ascenseur Nice (copropriété = 48-72h avant)
- [ ] Souscrire assurance ad valorem si meubles valeur > 20 000€

### 3 semaines avant
- [ ] Confirmer date avec déménageur (éviter Juin-Août si possible)
- [ ] Demander autorisation stationnement mairie Nice (si Vieux Nice/centre)
- [ ] Trier objets : À déménager / À vendre / À jeter (réduire volume = économies)
- [ ] Réserver hôtel/AirBnB Nice si livraison J+1 (nuit entre chargement/déchargement)

### 1 semaine avant
- [ ] Préparer cartons fragiles (vaisselle, électronique) avec mentions claires
- [ ] Prendre photos meubles valeur (preuve état avant transport)
- [ ] Prévenir EDF/eau Cambrai + Nice (coupure/souscription)
- [ ] Vérifier météo A7/A8 (mistral ou orages prévus ?)

### Jour J (chargement Cambrai)
- [ ] Remettre plans Nice aux déménageurs (accès, parking, contact gardien)
- [ ] Vérifier inventaire chargé = inventaire prévu
- [ ] Noter réserves si meubles abîmés pendant chargement (bon de livraison)
- [ ] Donner trousseau clés Nice (si livraison en votre absence)

### Arrivée Nice
- [ ] Être présent déchargement (ou mandataire) pour diriger placement meubles
- [ ] Vérifier état cartons (bosses, humidité ?)
- [ ] Signer bon livraison AVEC réserves si dommages constatés
- [ ] Déclarer sinistre sous 5 jours si problème (recommandé AR)

---

## 🔍 Comment choisir le bon déménageur pour Cambrai → Nice

### Critère #1 : Expérience longue distance
**Question à poser** : "Combien de déménagements > 900 km faites-vous par an ?"

**Réponse acceptable** : 30-50 (1-2 par semaine)  
**Red flag** : "On fait tous types de trajets" (généraliste = risque retards)

**Pourquoi c'est crucial** :
- Logistique complexe (1 ou 2 camions ? Livraison J+1 ou J+2 ?)
- Connaissance A7 (éviter bouchons = arrivée à l'heure)
- Respect temps de conduite légaux (9h/jour max, pauses obligatoires)

### Critère #2 : Connaissance Nice
**Question à poser** : "Avez-vous déjà déménagé dans le Vieux Nice / Cimiez ?"

**Réponse bonne** : "Oui, on connaît les contraintes (navette, autorisations), on travaille avec un partenaire local si besoin"  
**Red flag** : "Pas de problème, on s'adapte" (= improvisation le jour J)

**Pourquoi c'est crucial** :
- Nice ≠ ville standard (accès difficiles, réglementation stricte)
- Déménageur non averti = blocage camion rue étroite = 2-4h perdues = suppléments

### Critère #3 : Flotte de camions adaptée
**Question à poser** : "Quel type de camion pour mon volume ?"

**Volumes** :
- Studio 15 m³ → Camion 20 m³ (1 camion suffit)
- T3 35 m³ → Camion 40 m³ (1 camion)
- Maison 80 m³ → Camion 60 m³ (1 camion) OU 2× 40 m³ (si volume réel > 70 m³)

**Red flag** : Propose camion sous-dimensionné (ex: T3 35 m³ dans camion 30 m³)  
**Risque** : 2 rotations = x2 prix

### Critère #4 : Assurance adaptée longue distance
**Vérifications** :
- ✅ RC Pro 1,5 M€ minimum (attestation < 1 an)
- ✅ Assurance ad valorem jusqu'à 50 000€ minimum
- ✅ Couverture transport (vol, incendie camion, accident route)

**Question clé** : "Que se passe-t-il si le camion a un accident sur l'A7 ?"

**Réponse bonne** : "Assurance couvre intégralité valeur déclarée, on fournit camion de remplacement si besoin"  
**Red flag** : "Jamais eu d'accident en 20 ans" (= pas de plan B)

---

## 💡 Astuces pour économiser sur Cambrai → Nice

### Astuce #1 : Déménager en basse saison
**Économie** : 600-900€ sur T3 35 m³

**Périodes** : Janvier-Mars, Novembre  
**Tarif** : -20-25% vs haute saison  
**Exemple** : 3000€ (Mai) → 2400€ (Novembre)

### Astuce #2 : Groupage (déménagement partagé)
**Principe** : Votre déménagement + 1-2 autres dans même camion

**Économie** : 30-40% (1950€ au lieu de 3000€ pour T3)  
**Contrainte** : Livraison J+2 ou J+3 (le camion fait plusieurs arrêts)  
**Recommandé si** : Vous êtes flexible sur date livraison + volume < 40 m³

**Attention** : Vérifiez assurance (chaque client doit avoir sa couverture propre)

### Astuce #3 : Faire cartons soi-même
**Économie** : 150-300€

**Service cartons déménageur** : 250-400€ (cartons fournis + emballage vaisselle/fragiles)  
**Faire soi-même** : 50-100€ (cartons achat Leroy Merlin + papier bulle)  
**Temps** : 8-12h (weekend)

**Recommandé si** : Budget serré + temps disponible  
**À éviter si** : Objets très fragiles (service pro = assurance si casse)

### Astuce #4 : Réduire volume
**Économie** : 500-1000€

**Méthode** :
- Vendre meubles encombrants (canapé, lit) sur Leboncoin
- Racheter sur place à Nice (marché occasion Nice actif)
- Jeter électroménager vieillissant (rachat neuf Nice avec Darty/Boulanger livraison)

**Calcul** :
- Canapé 3m³ = 200-300€ transport
- Canapé occasion Cambrai vendu : 300€
- Canapé occasion Nice acheté : 250€
- **Économie nette** : 250-350€

### Astuce #5 : Déménager mardi-jeudi
**Économie** : 300-450€ sur T3

**Tarif** :
- Samedi : Tarif de base + 15-20%
- Dimanche : + 25-30% (majoré)
- Lundi/Vendredi : Tarif de base
- **Mardi-Jeudi** : -10 à -15% (creux de semaine)

**Exemple T3** :
- Samedi : 3450€
- Mardi : 3000€
- **Économie** : 450€

---

**Prêt à déménager de Cambrai vers Nice ?**  
[Comparez 5 devis de déménageurs vérifiés →](https://devis.moverz.fr/devis-gratuits?source=corridor-cambrai-nice)
`}
    />
  );
}
