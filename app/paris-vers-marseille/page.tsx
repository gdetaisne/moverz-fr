import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('paris', 'Paris', 'Marseille', 'marseille');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="paris"
      originCityName="Paris"
      destination="Marseille"
      destinationSlug="marseille"
      distance="775 km"
      tempsMoyen="7h30"
      periodeConseillee="Mars-Mai, Sept-Nov"
      prixIndicatifs={[
        {
          type: "Studio/T1 (10-15 m³)",
          prix: "1350-2030€",
          description: "Camion 20m³, 2 déménageurs, assurance incluse"
        },
        {
          type: "T2/T3 (20-35 m³)",
          prix: "1900-2850€",
          description: "Camion 30m³, 3 déménageurs, démontage/remontage"
        },
        {
          type: "Maison (40-80 m³)",
          prix: "3100-4650€",
          description: "Camion 50m³, 4 déménageurs, protection renforcée"
        }
      ]}
      accesArrivee="Marseille présente des contraintes spécifiques : le Vieux-Port (rues étroites 3-4m, zones piétonnes), le Panier (ruelles pavées, pentes 8-12%), les Calanques (accès difficiles, routes sinueuses), et la Canebière (circulation intense). Stationnement poids lourds limité dans hypercentre. Mistral violent (vent 80-120 km/h) 100 jours/an = sécurisation cartons renforcée. Nos partenaires déménageurs connaissent parfaitement les contraintes marseillaises."
      conseils={[
        "Réservez 4-6 semaines à l'avance : corridor Paris-Marseille = Top 3 (mutations, héliotropisme, retraités)",
        "Vérifiez météo : Mistral (vent violent) fréquent Mars-Mai et Sept-Nov, annulations camions si > 90 km/h",
        "Demandez autorisation stationnement mairie Marseille (délai 7-10j) si arrivée Vieux-Port/Panier/Endoume",
        "Privilégiez départ Paris 5h-6h pour arriver Marseille 13h-14h (éviter A7 Chassé-Croisé 15h-20h)",
        "Prévoyez assurance ad valorem si objets valeur : Transport 775 km (7h30) = risques accrus",
        "Vérifiez contraintes copropriété Marseille : Réservation ascenseur 48h avant, protections (tomettes provençales fragiles)"
      ]}
      faq={[
        {
          question: "Combien de temps dure un déménagement Paris → Marseille ?",
          answer: "**Trajet** : 775 km, 7h30 de route pure (via A6 → A7). **Déménagement complet** : 2-3 jours selon volume. **Jour 1** : Chargement Paris (4-6h). **Jour 2** : Transport (7h30) + déchargement Marseille (4-6h). **Gros volumes** (> 50 m³) : J1 chargement, J2 transport, J3 déchargement (déménageurs reposés = qualité). **1 jour impossible** : Distance trop longue (légal = max 9h conduite/jour)."
        },
        {
          question: "Quelle est la meilleure période pour déménager de Paris vers Marseille ?",
          answer: "**Meilleure période** : Mars-Mai ou Septembre-Novembre. Climat agréable, tarifs standard, A7 supportable. **À éviter** : Juin-Août (+25-35% tarifs haute saison Provence, A7 'autoroute du Soleil' saturée, +2-3h trajet), 14 Juillet-20 Août (Chassé-Croisé = paralysie A7), mistral violent (annulations camions). **Astuce** : Éviter weekends Juillet-Août (A7 = parking 150 km) + déménager mardi-jeudi (-10-15%)."
        },
        {
          question: "Quels sont les prix d'un déménagement Paris-Marseille en 2026 ?",
          answer: "**T1/T2 (20 m³)** : 1900-2850€. **T3/T4 (35 m³)** : 2500-3750€. **Maison (60 m³)** : 4200-6300€. Prix inclut : transport 775 km, main d'œuvre (2-4 déménageurs), assurance de base 600€/m³, carburant, péages (~95€). **Suppléments fréquents** : Étages sans ascenseur Paris (+60-100€/étage), Marseille Panier/Vieux-Port (navette, portage) +200-400€, piano +200-400€, stockage temporaire +150-300€, samedi +15-20%, Juillet-Août +25-35%."
        },
        {
          question: "Qu'est-ce que le Mistral et comment impacte-t-il un déménagement à Marseille ?",
          answer: "**Le Mistral** : Vent du Nord violent (80-120 km/h) soufflant vallée du Rhône → Marseille. **Fréquence** : 100 jours/an (surtout Mars-Mai, Sept-Nov). **Impact déménagement** : Camions interdits A7 si vent > 90 km/h (risque renversement), cartons s'envolent si mal sécurisés, objets légers (lampes, chaises) emportés. **Solutions déménageur pro** : Bâchage renforcé cartons, sangles supplémentaires, report si mistral > 100 km/h (sécurité). **Vérification** : Météo-France Vigilance Vent (orange/rouge = report recommandé)."
        },
        {
          question: "Faut-il une autorisation de stationnement à Marseille ?",
          answer: "**Oui si arrivée** : Vieux-Port (quai des Belges, quai du Port, rues adjacentes < 4m), Panier (ruelles étroites), Endoume/Roucas-Blanc (résidentiel côtier, stationnement rare), Préfecture/Castellane (hypercentre). **Démarche** : Mairie de Marseille, service voirie, 7-10 jours avant, ~40-60€. **Non nécessaire** : Quartiers Nord (13-14-15-16ème arrondissements), La Valentine, Saint-Barnabé (zones résidentielles larges). Votre déménageur peut gérer (service +60-100€)."
        },
        {
          question: "Paris-Marseille : déménagement en 2 ou 3 jours ?",
          answer: "**2 jours possible** si : Volume < 35 m³, accès faciles (ascenseurs, parkings), départ Paris 6h → arrivée Marseille 14h → déchargement fini 20h. **3 jours recommandé** si : Volume > 50 m³, quartiers difficiles (Panier, Vieux-Port), objets fragiles/lourds (antiquités, piano), déménageurs reposés = qualité. **Avantage 3 jours** : Pas de rush, flexibilité imprévus (mistral, bouchons A7), déménageurs performants (pas fatigués 7h30 route)."
        }
      ]}
      contentSupplement={`
## 🛣️ Itinéraire Paris → Marseille : 775 km sur l'autoroute du Soleil

### Trajet routier optimal

**Route recommandée** : Paris (Porte d'Italie) → A6 → A7 (Autoroute du Soleil, Lyon contournement) → A55 → Marseille (entrées multiples selon quartier)

**Distance** : 775 km  
**Durée** : 7h30 (hors pauses légales, +aléas A7)  
**Péages** : ~95€ (véhicule léger), 180-250€ (camion 20-30 tonnes)  
**Carburant** : ~300-500€ (selon gabarit et prix diesel)

### Points de vigilance majeurs

**A7 Autoroute du Soleil (Lyon → Marseille)** :
- **Autoroute la + chargée de France** : 200 000 véhicules/jour en été
- **Bouchons quasi-quotidiens Juin-Août** : Secteurs Vienne, Valence-Sud, Orange (+2-3h)
- **Chassé-Croisé Juillet-Août** : A7 = parking sur 150 km (départs vacances)
- **Solution** : Circulation nuit (22h-6h) ou très tôt (5h-7h)

**Mistral sur A7** :
- Vent du Nord 80-120 km/h (vallée Rhône = couloir aérodynamique)
- **Camions interdits si > 90 km/h** (panneaux lumineux "Interdiction PL")
- Fréquence : 100 jours/an (pics Mars-Mai, Sept-Nov)
- Déménagement reporté si mistral violent (sécurité + assurance)

**Tunnel Prado-Carénage (entrée Marseille)** :
- Passage obligatoire si arrivée centre/Vieux-Port
- Saturé 8h-10h et 17h-19h (+30-45 min)
- Alternative : A50 Est puis A55 Sud (contournement, +15 min mais fluide)

**Météo et saisonnalité** :
- **Chaleur extrême Juin-Août** : 35-42°C A7 Valence-Orange, risque surchauffe camions
- **Orages violents Sept-Oct** : Sud-Est (Marseille), A7 glissante, visibilité < 50m
- **Brouillard A6 Nov-Fév** : Bourgogne, +1h trajet potentiel

---

## 💰 Détail des prix Paris → Marseille (2026)

### Grille tarifaire longue distance

#### Studio 15 m³ (Paris → Marseille)

**Formule Éco** : 1350-1650€  
Inclut : Camion 20 m³, 2 déménageurs, 775 km, péages, assurance 600€/m³  
Vous emballez tout

**Formule Standard** : 1750-2030€ (+400€)  
+ Emballage fragiles  
+ Démontage/remontage  
+ Protection meubles

**Suppléments** :
- Paris 4ème sans ascenseur → +80-120€
- Marseille Vieux-Port (navette) → +250-400€
- Assurance ad valorem 12 000€ → +100€
- Mistral (sécurisation renforcée) → +50€
- **Total réel** : 2230-2700€

---

#### T2/T3 35 m³ (Paris → Marseille)

**Formule Standard** : 2500-3100€  
Inclut : Camion 40 m³, 3 déménageurs, services standards

**Formule Confort** : 3300-4050€ (+800€)  
+ Emballage TOUT  
+ Déballage arrivée  
+ Installation

**Suppléments** :
- Marseille Panier 5ème étage pavés → +300-500€
- Piano droit → +250-400€
- Stockage 7j (délai livraison) → +250€
- Samedi → +15-20% (375-620€)
- **Total réel** : 3425-5370€

---

#### Maison 60 m³ (Paris → Marseille)

**Formule Confort** : 4500-5700€  
Inclut : Camion 60 m³, 4 déménageurs, service complet, 2-3 jours

**Suppléments** :
- Volume réel 75 m³ (cave/garage oubliés) → +600-900€
- Marseille Endoume (route côtière étroite, portage) → +300-500€
- Objets d'art (assurance renforcée) → +300€
- **Total réel** : 5700-7400€

---

## 🏙️ Spécificités Marseille : quartiers à contraintes

### Vieux-Port et centre historique (1-2ème arrondissement)

**Caractéristiques** :
- Rues 3-4m (rue Caisserie, rue de la République côté port)
- Immeubles 18-19ème : 5-6 étages, ascenseurs étroits (0,7-0,9m)
- Zones semi-piétonnes (quais, cours Honoré d'Estienne d'Orves)
- Stationnement : PV rapides (10 min), livraisons 6h-11h uniquement

**Solution déménageur professionnel** :
- Autorisation stationnement mairie (40-60€, 7-10j avant)
- Arrivée 6h-7h30 (créneau livraison + avant touristes)
- Camion 12-15 m³ max pour rues étroites
- Navette si volume > 20 m³ (parking Vieux-Port à 500m-1km) → +200-350€

**Impact prix** : +300-600€

---

### Le Panier (2ème arrondissement)

**Caractéristiques** :
- **Quartier historique provençal** : Ruelles 2-3m (montée des Accoules, rue du Panier)
- Pavés + pentes 8-12%
- Immeubles 17-18ème : 5 étages, escaliers étroits, PAS d'ascenseur
- Zones piétonnes (place de Lenche, rue Caisserie)

**Solution déménageur professionnel** :
- Camion 10 m³ max (navette obligatoire si > 15 m³)
- Portage manuel pentes + escaliers (équipe renforcée : 4 au lieu de 3)
- Monte-meuble si 4-5ème étage + gros meubles → +350-500€
- Protections tomettes provençales (carrelages anciens fragiles)

**Impact prix** : +400-800€ (le quartier le + cher de Marseille pour déménager)

---

### Endoume, Roucas-Blanc, Calanques (7-8ème arrondissement)

**Caractéristiques** :
- **Côte méditerranéenne** : Routes sinueuses (corniche Kennedy)
- Copropriétés standing : Parkings privés, accès contrôlés
- Stationnement limité (résidentiel dense + touristes)
- Pentes (collines face mer)

**Solution déménageur professionnel** :
- Autorisation copropriété obligatoire (parking sous-sol, ascenseur réservé)
- Camion adapté virages serrés
- Arrivée matinale (parking résidents pas encore partis)

**Impact prix** : +150-300€ (accès + temps rallongé)

---

### Quartiers Nord / Est (13-14-15-16ème)

**Caractéristiques** :
- Quartiers résidentiels récents (1970-2010)
- Rues larges, parkings, ascenseurs standards
- Accès faciles

**Solution** :
- Déménagement standard (pas de surcoût)

**Impact prix** : 0€

**Astuce** : Si choix logement Marseille, 13-14-15ème = loyers -30% + déménagement facile

---

## 🌬️ Le Mistral : comprendre et anticiper

### C'est quoi le Mistral ?

**Définition** : Vent du Nord violent (80-120 km/h) soufflant vallée du Rhône → Provence/Marseille

**Caractéristiques** :
- Froid et sec (air polaire)
- Rafales 100-130 km/h (record : 216 km/h Mont Ventoux)
- Dure 3-6 jours (parfois 10 jours)
- Fréquence : 100 jours/an (1 jour sur 3,5)

**Périodes** : Toute l'année, pics Mars-Mai et Sept-Nov

---

### Impact sur déménagement Paris-Marseille

**A7 Lyon-Marseille** :
- Camions > 3,5 tonnes interdits si mistral > 90 km/h (panneaux lumineux)
- Risque renversement (camion chargé 15-20 tonnes = prise au vent)
- Report obligatoire = décalage 1-3 jours

**Déchargement Marseille** :
- Cartons légers s'envolent (vêtements, livres, objets déco)
- Portes/fenêtres claquent violemment (bris de verre)
- Poussière/sable (protection meubles renforcée)

---

### Solutions déménageur professionnel

**Anticipation** :
- Vérification météo 72h avant (Météo-France Vigilance Vent)
- Report si vigilance Orange/Rouge (mistral > 100 km/h)

**Sécurisation** :
- Bâchage renforcé cartons (filets + sangles)
- Fermeture portes camion pendant arrêts
- Poids lourds dans cartons légers (éviter envol)

**Assurance** :
- Mistral = événement climatique exceptionnel
- Dommages couverts SI déménageur a pris précautions
- Photos avant/après chargement (preuve)

---

## 📦 Checklist déménagement Paris → Marseille

### 6 semaines avant

- [ ] Demander 3-5 devis déménageurs **spécialistes longue distance** (775 km = expertise requise)
- [ ] Identifier quartier Marseille + contraintes (Panier/Vieux-Port/Endoume = surcoûts)
- [ ] Souscrire assurance ad valorem si objets > 20 000€ (transport 775 km = risques)
- [ ] Réserver créneau ascenseur Marseille (copropriété : 48-72h avant)

### 3 semaines avant

- [ ] Confirmer date + **période hors Juillet-Août** (A7 paralysée = +3h)
- [ ] Demander autorisation stationnement Marseille si Vieux-Port/Panier (7-10j, 40-60€)
- [ ] Vérifier météo long terme (mistral prévu ? Vigilance Vent Météo-France)
- [ ] Trier objets : Vendre Paris (réduire volume = économies transport longue distance)

### 1 semaine avant

- [ ] Vérifier météo finale (mistral 72h avant = report possible)
- [ ] Cartons fragiles : Protection renforcée (775 km = vibrations accrues)
- [ ] Photos meubles valeur (preuve état avant transport long)
- [ ] Prévenir EDF/eau Paris (résiliation J) + Marseille (souscription, mise en service J ou J+1)

### Jour J1 (chargement Paris)

- [ ] Remettre plan détaillé Marseille aux déménageurs (quartier, contraintes mistral, contact)
- [ ] Vérifier sécurisation cartons (bâchage renforcé si mistral prévu)
- [ ] Noter réserves si meubles abîmés PENDANT chargement
- [ ] Confirmer heure départ (si mistral annoncé A7 = report ou attente accalmie)

### Jour J2 (arrivée Marseille)

- [ ] Être joignable (déménageur appelle si retard A7 ou mistral)
- [ ] Être présent déchargement (ou mandataire) pour placement meubles
- [ ] Vérifier état cartons/meubles AVANT signature
- [ ] Signer avec réserves détaillées + photos si dommages

---

## 🔍 Choisir le bon déménageur Paris-Marseille

### Critère #1 : Expertise longue distance (775 km)

**Question** : "Combien de déménagements > 700 km faites-vous par an ?"

**Réponse excellente** : "50-80 (1-2 par semaine), spécialisés Paris-Provence"  
**Réponse acceptable** : "20-30"  
**Red flag** : "On fait tous trajets" (= pas d'expertise A7/mistral)

**Pourquoi crucial** :
- Logistique complexe (2-3 jours, étapes, temps conduite légaux)
- Connaissance A7 (bouchons, mistral, alternatives)

---

### Critère #2 : Expérience mistral Marseille

**Question** : "Comment gérez-vous le mistral sur A7 et à Marseille ?"

**Réponse bonne** :
- "On vérifie météo 72h avant, on reporte si > 100 km/h, on bâche renforcé cartons, on a procédure sécurité"

**Red flag** :
- "Jamais eu de problème" (= sous-estime le risque)

---

### Critère #3 : Assurance longue distance adaptée

**Vérifications** :
- ✅ RC Pro 2 M€ minimum (longue distance = risques accrus)
- ✅ Assurance ad valorem jusqu'à 50 000€ min
- ✅ Couverture événements climatiques (mistral, orages)

**Question** : "Que se passe-t-il si le camion est renversé par le mistral sur l'A7 ?"

**Réponse bonne** : "Assurance couvre intégralité valeur déclarée + camion remplacement si besoin"  
**Red flag** : "Jamais arrivé" (= pas de plan B)

---

## 💡 3 Astuces économiser 500-1000€

### Astuce #1 : Éviter Juillet-Août (haute saison Provence)

**Économie** : 750-1200€ sur T3 35 m³

**Comparaison** :
- Août (haute saison) : 3750€ (+25-35%)
- Mai (standard) : 2800€

**Économie** : 950€ + gain temps (A7 fluide = -2h)

---

### Astuce #2 : Groupage Paris-Marseille

**Principe** : Partager camion avec 1-2 autres

**Économie** : 30-40% (1960€ au lieu de 2800€ pour T3)  
**Contrainte** : Livraison J+2 ou J+3

---

### Astuce #3 : Réduire volume 20% (vendre/donner)

**Économie** : 560-850€

**Exemple** :
- Volume initial 35 m³ → 2800€
- Tri -7 m³ → 28 m³ → 2240€

**Économie** : 560€ + 500€ (vente meubles) = **1060€**

---

**Prêt à déménager de Paris vers Marseille ?**  
[Comparez 5 devis de déménageurs vérifiés →](https://devis.moverz.fr/devis-gratuits?source=corridor-paris-marseille)
`}
    />
  );
}
