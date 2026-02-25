import { CorridorPage, generateCorridorMetadata } from "@/components/templates/CorridorPage";

export const metadata = generateCorridorMetadata('marseille', 'Marseille', 'Paris', 'paris');

export default function Page() {
  return (
    <CorridorPage
      originCitySlug="marseille"
      originCityName="Marseille"
      destination="Paris"
      destinationSlug="paris"
      distance="775 km"
      tempsMoyen="7h40"
      periodeConseillee="Mars-Mai, Sept-Nov"
      prixIndicatifs={[
        {
          type: "Studio/T1 (10-15 m³)",
          prix: "1370-2050€",
          description: "Camion 20m³, 2 déménageurs, assurance incluse"
        },
        {
          type: "T2/T3 (20-35 m³)",
          prix: "1930-2900€",
          description: "Camion 30m³, 3 déménageurs, démontage/remontage"
        },
        {
          type: "Maison (40-80 m³)",
          prix: "3150-4720€",
          description: "Camion 50m³, 4 déménageurs, protection renforcée"
        }
      ]}
      accesArrivee="Paris présente des contraintes majeures pour les arrivées en provenance du Sud : périphérique saturé aux heures de pointe (7h-10h, 17h-20h), Zone à Faibles Émissions (Crit'Air obligatoire), autorisations stationnement nécessaires dans arrondissements centraux (1-6ème, 18ème). Immeubles haussmanniens avec ascenseurs étroits (0,6-0,8m) fréquents. Nos partenaires déménageurs marseillais connaissent parfaitement les spécificités parisiennes."
      conseils={[
        "Réservez 4-6 semaines à l'avance : corridor Marseille-Paris = Top 4 (nombreuses mutations/études post-province)",
        "Vérifiez Crit'Air camion (obligatoire Paris) : Crit'Air 4-5 interdit intra-muros lundi-vendredi 7h-20h",
        "Planifiez arrivée Paris avant 6h30 ou 10h-11h30 (éviter périph saturé 7h-10h = +1h30-2h)",
        "Demandez autorisation stationnement mairie d'arrondissement (10-15j délai, 50-80€) si Paris centre",
        "Évitez départ Marseille weekends Juillet-Août : A7 'remontée' saturée dimanches 15h-21h (+3-4h)",
        "Prévoyez plan B si immeuble Paris sans ascenseur : Marais, Quartier Latin, Montmartre fréquents 5-6èmes étages"
      ]}
      faq={[
        {
          question: "Combien de temps dure un déménagement Marseille → Paris ?",
          answer: "**Trajet** : 775 km, 7h40 de route pure (via A7 → A6, +10 min vs sens inverse car remontée vallée Rhône + lent). **Déménagement complet** : 2-3 jours obligatoires (distance trop longue pour 1 jour). **Jour 1** : Chargement Marseille (4-6h). **Jour 2** : Transport (7h40) + déchargement Paris (4-6h). **Gros volumes** (> 50 m³) : 3 jours recommandé (J1 chargement, J2 transport, J3 déchargement = déménageurs reposés)."
        },
        {
          question: "Quelle est la meilleure période pour déménager de Marseille vers Paris ?",
          answer: "**Meilleure période** : Mars-Mai ou Septembre-Novembre. Climat tempéré, tarifs standard, A7 supportable. **À éviter** : Juin-Août (+25-35% tarifs + A7 saturée weekends, dimanches 15h-21h 'remontée' = +3-4h), 1er weekend Septembre (rentrée scolaire = A6+périph Paris paralysés), fins de mois (pics déménagements parisiens). **Astuce** : Déménager mardi-jeudi + arriver Paris avant 6h30 ou 10h-11h30 = -10-15% + gain temps."
        },
        {
          question: "Quels sont les prix d'un déménagement Marseille-Paris en 2026 ?",
          answer: "**T1/T2 (20 m³)** : 1930-2900€. **T3/T4 (35 m³)** : 2550-3820€. **Maison (60 m³)** : 4300-6450€. Prix inclut : transport 775 km, main d'œuvre (2-4 déménageurs), assurance de base 600€/m³, carburant, péages (~95€). **Suppléments fréquents** : Marseille Panier/Vieux-Port (départ difficile) +200-400€, Paris centre (autorisation, ascenseurs étroits) +150-300€, piano +200-400€, samedi +15-20%, Juillet-Août +25-35%."
        },
        {
          question: "Le camion doit-il avoir un Crit'Air pour aller à Paris ?",
          answer: "**Oui obligatoire** : Paris intra-muros (périphérique) = Zone à Faibles Émissions (ZFE). **Interdit** : Crit'Air 4-5 lundi-vendredi 7h-20h, pénalité 135€ + immobilisation camion. **Autorisé** : Crit'Air 0-1-2-3 (camions post-2011). **Vérification AVANT réservation** : Demandez Crit'Air du camion au déménageur. **Bon déménageur Marseille-Paris** : Flotte renouvelée post-2015 = Crit'Air 2-3 garanti."
        },
        {
          question: "Comment éviter les bouchons A7 sur la remontée Marseille-Paris ?",
          answer: "**Jours critiques A7 Nord** : Dimanches Juillet-Août 15h-21h ('remontée' fin weekend, +3-4h entre Marseille-Lyon), vendredis 17h-21h (départs weekend province), 1er Septembre (retour vacances). **Créneaux fluides** : Départ Marseille 5h-6h (arrivée Paris 13h-14h, périph creux), lundi-jeudi (jours ouvrés = A7 -40% trafic vs weekend). **Alternative** : Circulation nuit dimanche 22h-lundi 6h (A7 quasi-vide, arrivée Paris avant 7h = périph fluide)."
        },
        {
          question: "Marseille-Paris : déménagement en 2 ou 3 jours ?",
          answer: "**2 jours minimum** : Distance 775 km = impossible 1 jour (légal max 9h conduite). **2 jours standard** : J1 chargement Marseille (6-8h), J2 transport (7h40) + déchargement Paris (6-8h). **3 jours recommandé** si : Volume > 50 m³, quartiers difficiles (Panier Marseille + Marais Paris), objets fragiles/lourds, déménageurs reposés = qualité optimale. **Avantage 3 jours** : Flexibilité imprévus (bouchons A7, mistral, périph Paris bloqué)."
        }
      ]}
      contentSupplement={`
## 🛣️ Itinéraire Marseille → Paris : 775 km de remontée

### Trajet routier optimal

**Route recommandée** : Marseille (A55 Nord) → A7 Nord (Autoroute du Soleil, remontée vallée Rhône) → Contournement Lyon (A46/A6) → A6 Nord → Paris (Porte d'Italie ou Porte d'Orléans)

**Distance** : 775 km  
**Durée** : 7h40 (hors pauses, +10 min vs sens inverse car remontée vallée + lent)  
**Péages** : ~95€ (véhicule léger), 180-250€ (camion 20-30 tonnes)  
**Carburant** : ~300-500€ (selon gabarit et prix diesel)

### Points de vigilance majeurs

**A7 Nord (remontée Marseille → Lyon)** :
- **Dimanches Juillet-Août 15h-21h** : "Remontée" fin weekend = +3-4h (Marseille-Orange paralysé)
- Secteur Salon-de-Provence, Orange, Montélimar : Bouchons récurrents
- **Solution** : Départ Marseille lundi-jeudi (éviter weekends), ou dimanche 22h-lundi 6h (circulation nuit)

**Mistral sur A7** :
- Vent du Nord 80-120 km/h (vallée Rhône)
- Camions interdits si > 90 km/h
- Fréquence : 100 jours/an (Mars-Mai, Sept-Nov)
- Déménagement reporté si mistral violent

**Périphérique parisien** :
- 1,1 million véhicules/jour
- **Heures critiques** : 7h-10h (entrée Paris travail), 17h-20h (sortie travail)
- **Solutions** : Arrivée avant 6h30 ou 10h-11h30 (creux), ou A86 (2ème périph) si banlieue

**Zone à Faibles Émissions (ZFE) Paris** :
- Crit'Air 4-5 interdit lundi-vendredi 7h-20h (pénalité 135€)
- Vérifier Crit'Air camion AVANT réservation

---

## 💰 Détail des prix Marseille → Paris (2026)

### Grille tarifaire selon volume

#### Studio 15 m³ (Marseille → Paris)

**Formule Éco** : 1370-1680€  
Inclut : Camion 20 m³ Crit'Air 2-3, 2 déménageurs, 775 km, assurance 600€/m³  
Vous emballez tout

**Formule Standard** : 1780-2050€  
+ Emballage fragiles + démontage + protection

**Suppléments** :
- Marseille Panier (départ difficile) → +200-350€
- Paris 5ème sans ascenseur (Marais) → +100-150€
- Autorisation Paris centre → +50-80€
- **Total réel** : 2130-2630€

---

#### T2/T3 35 m³ (Marseille → Paris)

**Formule Standard** : 2550-3150€  
Inclut : Camion 40 m³, 3 déménageurs, 2-3 jours

**Formule Confort** : 3350-4100€  
+ Emballage TOUT + déballage + installation

**Suppléments** :
- Marseille Vieux-Port + Paris Montmartre → +400-700€
- Piano droit → +250-400€
- Samedi → +15-20% (503-820€)
- **Total réel** : 3453-5620€

---

#### Maison 60 m³ (Marseille → Paris)

**Formule Confort** : 4600-5850€  
Inclut : Camion 60 m³, 4 déménageurs, 3 jours, service complet

**Suppléments** :
- Volume réel 75 m³ → +600-900€
- Paris 7-8ème haussmannien (protections) → +200-300€
- Monte-meuble Paris → +400-600€
- **Total réel** : 5800-7650€

---

## 🏙️ Spécificités Paris : par arrondissement (arrivée)

### Paris centre (1-6ème : Marais, Saint-Germain)

**Contraintes** :
- Rues 3-4m, immeubles 5-6 étages sans ascenseur ou ascenseurs 0,6-0,8m
- Autorisation stationnement obligatoire (60-80€, 10-15j)
- Zones livraison 6h-11h uniquement

**Impact prix** : +350-700€

---

### Montmartre (18ème)

**Contraintes** :
- Escaliers publics, pentes 10-15%, immeubles 5-7 étages
- Monte-meuble souvent nécessaire

**Impact prix** : +300-700€

---

### Arrondissements périphériques (13-15-19-20ème)

**Facilités** :
- Rues larges, immeubles récents, ascenseurs standards

**Impact prix** : 0€ (standard)

---

## 📦 Checklist Marseille → Paris

### 6 semaines avant

- [ ] Demander 3-5 devis déménageurs Marseille-Paris + vérifier Crit'Air camions
- [ ] Identifier arrondissement Paris + contraintes (1-6-18ème = surcoûts)
- [ ] Réserver ascenseur Paris (48-72h avant obligatoire)
- [ ] Souscrire assurance habitation Paris

### 3 semaines avant

- [ ] Confirmer date + horaire arrivée Paris (éviter 7h-10h et 17h-20h périph)
- [ ] Demander autorisation stationnement Paris si centre (10-15j, 50-80€)
- [ ] Trier objets : Vendre Marseille (Leboncoin, réduire volume)
- [ ] Vérifier météo long terme (mistral A7 ? grèves RATP Paris ?)

### 1 semaine avant

- [ ] Cartons fragiles : Protection renforcée (775 km = vibrations)
- [ ] Photos meubles valeur
- [ ] Prévenir EDF/eau Marseille + Paris
- [ ] Plan détaillé Paris (codes, contraintes, contact)

### Jour J1 (chargement Marseille)

- [ ] Remettre plan Paris aux déménageurs
- [ ] Vérifier inventaire
- [ ] Noter réserves si dommages chargement

### Jour J2 (arrivée Paris)

- [ ] Être joignable (retard A7 ou périph)
- [ ] Présent déchargement
- [ ] Vérifier état AVANT signature
- [ ] Signer avec réserves si dommages

---

## 🔍 Choisir le bon déménageur Marseille-Paris

### Critère #1 : Expertise longue distance + Paris

**Question** : "Combien de Marseille-Paris par an ? Connaissez-vous les contraintes parisiennes ?"

**Réponse excellente** : "40-60 par an, on connaît périph, ZFE Crit'Air, arrondissements difficiles (Marais, Montmartre)"  
**Red flag** : "On fait tous trajets" (= improvisation)

---

### Critère #2 : Flotte Crit'Air 2-3 (Paris obligatoire)

**Vérification** : Demander Crit'Air camions + photos vignettes

**Red flag** : Camions pré-2011 (Crit'Air 4-5 = interdit Paris = déménagement annulé)

---

### Critère #3 : Assurance longue distance

**Documents** :
- RC Pro 2 M€ min
- Assurance ad valorem 50 000€ min
- Couverture événements (mistral, accidents A7)

---

## 💡 3 Astuces économiser 500-1000€

### Astuce #1 : Éviter Juillet-Août + weekends

**Économie** : 750-1200€ sur T3

**Comparaison** :
- Dimanche Août : 3820€ (+30%)
- Mardi Mai : 2940€

**Économie** : 880€ + gain temps (A7 fluide)

---

### Astuce #2 : Groupage Marseille-Paris

**Économie** : 30-40% (2010€ au lieu de 2870€ pour T3)  
**Contrainte** : Livraison J+3

---

### Astuce #3 : Arriver Paris creux (10h-11h30)

**Économie** : 150-250€ (temps périph économisé)

**Comparaison** :
- Arrivée 18h (périph saturé) : +1h30 = +200€
- Arrivée 11h (creux) : Temps normal

---

**Prêt à déménager de Marseille vers Paris ?**  
[Comparez 5 devis de déménageurs vérifiés →](https://devis.moverz.fr/devis-gratuits?source=corridor-marseille-paris)
`}
    />
  );
}
