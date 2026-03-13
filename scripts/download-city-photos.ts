/**
 * Script pour télécharger et optimiser les photos des villes depuis Unsplash
 * Optimisation SEO : renommage avec keywords, conversion WebP
 */

import fs from 'fs';
import path from 'path';
import https from 'https';

// Photos landmarks des villes (depuis CityPhoto.tsx)
const CITY_PHOTOS = {
  bordeaux: {
    url: 'https://images.unsplash.com/photo-1589561253898-768105ca91a8?w=1200&q=80&auto=format&fit=crop',
    filename: 'bordeaux-miroir-eau-quais.jpg',
    alt: 'Déménagement Bordeaux - Miroir d\'eau et quais accessibles pour déménageurs',
  },
  lyon: {
    url: 'https://images.unsplash.com/photo-1627308595127-2acbef0b5e45?w=1200&q=80&auto=format&fit=crop',
    filename: 'lyon-basilique-fourviere-toits.jpg',
    alt: 'Déménagement Lyon - Basilique Fourvière et toits, vue panoramique',
  },
  marseille: {
    url: 'https://images.unsplash.com/photo-1589561253898-768105ca91a8?w=1200&q=80&auto=format&fit=crop',
    filename: 'marseille-vieux-port.jpg',
    alt: 'Déménagement Marseille - Vieux-Port et quartiers accessibles',
  },
  paris: {
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80&auto=format&fit=crop',
    filename: 'paris-tour-eiffel-toits.jpg',
    alt: 'Déménagement Paris - Tour Eiffel et toits parisiens',
  },
  toulouse: {
    url: 'https://images.unsplash.com/photo-1590073842125-e6a0fd6cf568?w=1200&q=80&auto=format&fit=crop',
    filename: 'toulouse-place-capitole.jpg',
    alt: 'Déménagement Toulouse - Place du Capitole centre-ville',
  },
  lille: {
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop',
    filename: 'lille-grand-place.jpg',
    alt: 'Déménagement Lille - Grand-Place et centre historique',
  },
  nice: {
    url: 'https://images.unsplash.com/photo-1490650034902-8665b02f33e0?w=1200&q=80&auto=format&fit=crop',
    filename: 'nice-promenade-anglais.jpg',
    alt: 'Déménagement Nice - Promenade des Anglais et bord de mer',
  },
  nantes: {
    url: 'https://images.unsplash.com/photo-1597348989645-14c44e616ca8?w=1200&q=80&auto=format&fit=crop',
    filename: 'nantes-chateau-ducs-bretagne.jpg',
    alt: 'Déménagement Nantes - Château des Ducs de Bretagne',
  },
  strasbourg: {
    url: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1200&q=80&auto=format&fit=crop',
    filename: 'strasbourg-petite-france.jpg',
    alt: 'Déménagement Strasbourg - La Petite France quartier historique',
  },
  rennes: {
    url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80&auto=format&fit=crop',
    filename: 'rennes-parlement-bretagne.jpg',
    alt: 'Déménagement Rennes - Place du Parlement de Bretagne',
  },
  montpellier: {
    url: 'https://images.unsplash.com/photo-1562159017-d67f2e4f8d46?w=1200&q=80&auto=format&fit=crop',
    filename: 'montpellier-place-comedie.jpg',
    alt: 'Déménagement Montpellier - Place de la Comédie centre-ville',
  },
  grenoble: {
    url: 'https://images.unsplash.com/photo-1603088549155-4e9e5e2b4c72?w=1200&q=80&auto=format&fit=crop',
    filename: 'grenoble-bastille-panorama.jpg',
    alt: 'Déménagement Grenoble - Bastille et vue panoramique Alpes',
  },
  rouen: {
    url: 'https://images.unsplash.com/photo-1600639547028-0d8b6e31b26a?w=1200&q=80&auto=format&fit=crop',
    filename: 'rouen-cathedrale-notre-dame.jpg',
    alt: 'Déménagement Rouen - Cathédrale Notre-Dame centre historique',
  },
  // Phase 1 — 7 villes premium manquantes (12 mars 2026)
  reims: {
    url: 'https://images.unsplash.com/photo-1721215047729-36a168debd74?w=1200&q=80&auto=format&fit=crop',
    filename: 'reims-cathedrale-notre-dame.jpg',
    alt: 'Déménagement Reims - Cathédrale Notre-Dame de Reims, Champagne',
  },
  'saint-etienne': {
    url: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80&auto=format&fit=crop',
    filename: 'saint-etienne-centre-ville.jpg',
    alt: 'Déménagement Saint-Étienne - Centre-ville et quartiers accessibles',
  },
  toulon: {
    url: 'https://images.unsplash.com/photo-1754420981258-9ff76e231631?w=1200&q=80&auto=format&fit=crop',
    filename: 'toulon-rade-port.jpg',
    alt: 'Déménagement Toulon - Rade et port de Toulon, bord de mer',
  },
  dijon: {
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80&auto=format&fit=crop',
    filename: 'dijon-place-liberation.jpg',
    alt: 'Déménagement Dijon - Place de la Libération, centre bourguignon',
  },
  angers: {
    url: 'https://images.unsplash.com/photo-1522689508346-fcc14f5b1b2e?w=1200&q=80&auto=format&fit=crop',
    filename: 'angers-chateau-ducs.jpg',
    alt: 'Déménagement Angers - Château des Ducs d\'Anjou, Val de Loire',
  },
  nimes: {
    url: 'https://images.unsplash.com/photo-1590073842125-e6a0fd6cf568?w=1200&q=80&auto=format&fit=crop',
    filename: 'nimes-arenes.jpg',
    alt: 'Déménagement Nîmes - Arènes et centre historique romain',
  },
  'le-havre': {
    url: 'https://images.unsplash.com/photo-1728903174532-5b350eb5e951?w=1200&q=80&auto=format&fit=crop',
    filename: 'le-havre-port-architecture.jpg',
    alt: 'Déménagement Le Havre - Port et architecture Perret, Normandie',
  },
  // Phase 2 — 35 villes supplémentaires (55 total, 12 mars 2026)
  'clermont-ferrand': {
    url: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1200&q=80&auto=format&fit=crop',
    filename: 'clermont-ferrand-puy-dome.jpg',
    alt: 'Déménagement Clermont-Ferrand - Puy de Dôme et centre-ville',
  },
  tours: {
    url: 'https://images.unsplash.com/photo-1522689508346-fcc14f5b1b2e?w=1200&q=80&auto=format&fit=crop',
    filename: 'tours-val-de-loire.jpg',
    alt: 'Déménagement Tours - Val de Loire et centre historique',
  },
  'aix-en-provence': {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    filename: 'aix-en-provence-cours-mirabeau.jpg',
    alt: 'Déménagement Aix-en-Provence - Cours Mirabeau et centre provençal',
  },
  avignon: {
    url: 'https://images.unsplash.com/photo-1569949234915-8c91c9d72642?w=1200&q=80&auto=format&fit=crop',
    filename: 'avignon-palais-papes.jpg',
    alt: 'Déménagement Avignon - Palais des Papes et remparts',
  },
  cannes: {
    url: 'https://images.unsplash.com/photo-1490650034902-8665b02f33e0?w=1200&q=80&auto=format&fit=crop',
    filename: 'cannes-croisette.jpg',
    alt: 'Déménagement Cannes - Croisette et bord de mer',
  },
  annecy: {
    url: 'https://images.unsplash.com/photo-1533105079780-4b935ef8d563?w=1200&q=80&auto=format&fit=crop',
    filename: 'annecy-lac-vieille-ville.jpg',
    alt: 'Déménagement Annecy - Lac et vieille ville',
  },
  chambery: {
    url: 'https://images.unsplash.com/photo-1603088549155-4e9e5e2b4c72?w=1200&q=80&auto=format&fit=crop',
    filename: 'chambery-chateaux-savoie.jpg',
    alt: 'Déménagement Chambéry - Châteaux des Ducs de Savoie',
  },
  valence: {
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80&auto=format&fit=crop',
    filename: 'valence-centre-ville.jpg',
    alt: 'Déménagement Valence - Centre-ville Drôme',
  },
  perpignan: {
    url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80&auto=format&fit=crop',
    filename: 'perpignan-castillet.jpg',
    alt: 'Déménagement Perpignan - Castillet et centre catalan',
  },
  beziers: {
    url: 'https://images.unsplash.com/photo-1589561253898-768105ca91a8?w=1200&q=80&auto=format&fit=crop',
    filename: 'beziers-canal-midi.jpg',
    alt: 'Déménagement Béziers - Canal du Midi et centre historique',
  },
  narbonne: {
    url: 'https://images.unsplash.com/photo-1562159017-d67f2e4f8d46?w=1200&q=80&auto=format&fit=crop',
    filename: 'narbonne-cathedrale.jpg',
    alt: 'Déménagement Narbonne - Cathédrale et centre méditerranéen',
  },
  carcassonne: {
    url: 'https://images.unsplash.com/photo-1590073842125-e6a0fd6cf568?w=1200&q=80&auto=format&fit=crop',
    filename: 'carcassonne-cite-medievale.jpg',
    alt: 'Déménagement Carcassonne - Cité médiévale classée UNESCO',
  },
  albi: {
    url: 'https://images.unsplash.com/photo-1578489758854-f134a358f08b?w=1200&q=80&auto=format&fit=crop',
    filename: 'albi-cathedrale.jpg',
    alt: 'Déménagement Albi - Cathédrale Sainte-Cécile et briques rouges',
  },
  'la-rochelle': {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    filename: 'la-rochelle-vieux-port.jpg',
    alt: 'Déménagement La Rochelle - Vieux port et tour de la Chaîne',
  },
  poitiers: {
    url: 'https://images.unsplash.com/photo-1597348989645-14c44e616ca8?w=1200&q=80&auto=format&fit=crop',
    filename: 'poitiers-centre-historique.jpg',
    alt: 'Déménagement Poitiers - Centre historique et baptistère',
  },
  limoges: {
    url: 'https://images.unsplash.com/photo-1600639547028-0d8b6e31b26a?w=1200&q=80&auto=format&fit=crop',
    filename: 'limoges-porcelaine.jpg',
    alt: 'Déménagement Limoges - Ville de la porcelaine et gare',
  },
  pau: {
    url: 'https://images.unsplash.com/photo-1522689508346-fcc14f5b1b2e?w=1200&q=80&auto=format&fit=crop',
    filename: 'pau-chateau.jpg',
    alt: 'Déménagement Pau - Château et vue sur les Pyrénées',
  },
  bayonne: {
    url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80&auto=format&fit=crop',
    filename: 'bayonne-vieux-bayonne.jpg',
    alt: 'Déménagement Bayonne - Vieux Bayonne et Pays basque',
  },
  biarritz: {
    url: 'https://images.unsplash.com/photo-1490650034902-8665b02f33e0?w=1200&q=80&auto=format&fit=crop',
    filename: 'biarritz-plage.jpg',
    alt: 'Déménagement Biarritz - Grande Plage et Côte basque',
  },
  amiens: {
    url: 'https://images.unsplash.com/photo-1578489758854-f134a358f08b?w=1200&q=80&auto=format&fit=crop',
    filename: 'amiens-cathedrale.jpg',
    alt: 'Déménagement Amiens - Cathédrale et hortillonnages',
  },
  dunkerque: {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    filename: 'dunkerque-port-plage.jpg',
    alt: 'Déménagement Dunkerque - Port et plage du nord',
  },
  calais: {
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop',
    filename: 'calais-centre.jpg',
    alt: 'Déménagement Calais - Centre-ville et Côte d\'Opale',
  },
  roubaix: {
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop',
    filename: 'roubaix-piscine-musee.jpg',
    alt: 'Déménagement Roubaix - La Piscine musée et métropole lilloise',
  },
  tourcoing: {
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop',
    filename: 'tourcoing-centre.jpg',
    alt: 'Déménagement Tourcoing - Centre métropole lilloise',
  },
  metz: {
    url: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1200&q=80&auto=format&fit=crop',
    filename: 'metz-cathedrale.jpg',
    alt: 'Déménagement Metz - Cathédrale Saint-Étienne et centre',
  },
  nancy: {
    url: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1200&q=80&auto=format&fit=crop',
    filename: 'nancy-place-stanislas.jpg',
    alt: 'Déménagement Nancy - Place Stanislas classée UNESCO',
  },
  mulhouse: {
    url: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1200&q=80&auto=format&fit=crop',
    filename: 'mulhouse-centre-alsace.jpg',
    alt: 'Déménagement Mulhouse - Centre-ville alsacien',
  },
  colmar: {
    url: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1200&q=80&auto=format&fit=crop',
    filename: 'colmar-petite-venise.jpg',
    alt: 'Déménagement Colmar - Petite Venise alsacienne',
  },
  troyes: {
    url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80&auto=format&fit=crop',
    filename: 'troyes-centre-champagne.jpg',
    alt: 'Déménagement Troyes - Centre historique Champagne',
  },
  'le-mans': {
    url: 'https://images.unsplash.com/photo-1597348989645-14c44e616ca8?w=1200&q=80&auto=format&fit=crop',
    filename: 'le-mans-vieille-ville.jpg',
    alt: 'Déménagement Le Mans - Vieille ville et 24 Heures',
  },
  'saint-nazaire': {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    filename: 'saint-nazaire-port.jpg',
    alt: 'Déménagement Saint-Nazaire - Port et chantiers navals',
  },
  brest: {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    filename: 'brest-port.jpg',
    alt: 'Déménagement Brest - Port et rade de Brest',
  },
  quimper: {
    url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80&auto=format&fit=crop',
    filename: 'quimper-cathedrale.jpg',
    alt: 'Déménagement Quimper - Cathédrale et vieille ville bretonne',
  },
  lorient: {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    filename: 'lorient-port.jpg',
    alt: 'Déménagement Lorient - Port et base sous-marine',
  },
  vannes: {
    url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80&auto=format&fit=crop',
    filename: 'vannes-intra-muros.jpg',
    alt: 'Déménagement Vannes - Intra-muros et Golfe du Morbihan',
  },
  'saint-malo': {
    url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80&auto=format&fit=crop',
    filename: 'saint-malo-remparts.jpg',
    alt: 'Déménagement Saint-Malo - Remparts et cité corsaire',
  },
  caen: {
    url: 'https://images.unsplash.com/photo-1597348989645-14c44e616ca8?w=1200&q=80&auto=format&fit=crop',
    filename: 'caen-chateau.jpg',
    alt: 'Déménagement Caen - Château et abbayes normandes',
  },
  'cherbourg-en-cotentin': {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    filename: 'cherbourg-port.jpg',
    alt: 'Déménagement Cherbourg - Port et Cité de la Mer',
  },
  orleans: {
    url: 'https://images.unsplash.com/photo-1522689508346-fcc14f5b1b2e?w=1200&q=80&auto=format&fit=crop',
    filename: 'orleans-place-martroi.jpg',
    alt: 'Déménagement Orléans - Place du Martroi et Loire',
  },
  blois: {
    url: 'https://images.unsplash.com/photo-1522689508346-fcc14f5b1b2e?w=1200&q=80&auto=format&fit=crop',
    filename: 'blois-chateau.jpg',
    alt: 'Déménagement Blois - Château de Blois et Loire',
  },
  chartres: {
    url: 'https://images.unsplash.com/photo-1578489758854-f134a358f08b?w=1200&q=80&auto=format&fit=crop',
    filename: 'chartres-cathedrale.jpg',
    alt: 'Déménagement Chartres - Cathédrale et centre historique',
  },
  besancon: {
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80&auto=format&fit=crop',
    filename: 'besancon-citadelle.jpg',
    alt: 'Déménagement Besançon - Citadelle Vauban et centre',
  },
  belfort: {
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80&auto=format&fit=crop',
    filename: 'belfort-lion.jpg',
    alt: 'Déménagement Belfort - Lion de Belfort et citadelle',
  },
  ajaccio: {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    filename: 'ajaccio-port-corse.jpg',
    alt: 'Déménagement Ajaccio - Port et naissance de Napoléon',
  },
  bastia: {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    filename: 'bastia-port-corse.jpg',
    alt: 'Déménagement Bastia - Port corse et Cap Corse',
  },
  // Phase 3 — 25 villes supplémentaires (80 total, 12 mars 2026)
  versailles: {
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80&auto=format&fit=crop',
    filename: 'versailles-chateau.jpg',
    alt: 'Déménagement Versailles - Château et ville royale',
  },
  'boulogne-billancourt': {
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80&auto=format&fit=crop',
    filename: 'boulogne-billancourt-ile-de-france.jpg',
    alt: 'Déménagement Boulogne-Billancourt - Hauts-de-Seine Île-de-France',
  },
  antibes: {
    url: 'https://images.unsplash.com/photo-1490650034902-8665b02f33e0?w=1200&q=80&auto=format&fit=crop',
    filename: 'antibes-cap.jpg',
    alt: 'Déménagement Antibes - Cap d\'Antibes et Côte d\'Azur',
  },
  frejus: {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    filename: 'frejus-plage.jpg',
    alt: 'Déménagement Fréjus - Plage et centre historique Var',
  },
  arles: {
    url: 'https://images.unsplash.com/photo-1590073842125-e6a0fd6cf568?w=1200&q=80&auto=format&fit=crop',
    filename: 'arles-arenes.jpg',
    alt: 'Déménagement Arles - Arènes et patrimoine romain',
  },
  sete: {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    filename: 'sete-port.jpg',
    alt: 'Déménagement Sète - Port et canal de Sète',
  },
  montauban: {
    url: 'https://images.unsplash.com/photo-1562159017-d67f2e4f8d46?w=1200&q=80&auto=format&fit=crop',
    filename: 'montauban-place-nationale.jpg',
    alt: 'Déménagement Montauban - Place Nationale et centre Tarn-et-Garonne',
  },
  tarbes: {
    url: 'https://images.unsplash.com/photo-1522689508346-fcc14f5b1b2e?w=1200&q=80&auto=format&fit=crop',
    filename: 'tarbes-pyrenees.jpg',
    alt: 'Déménagement Tarbes - Centre et vue Pyrénées',
  },
  niort: {
    url: 'https://images.unsplash.com/photo-1597348989645-14c44e616ca8?w=1200&q=80&auto=format&fit=crop',
    filename: 'niort-centre.jpg',
    alt: 'Déménagement Niort - Centre-ville et donjon',
  },
  angouleme: {
    url: 'https://images.unsplash.com/photo-1578489758854-f134a358f08b?w=1200&q=80&auto=format&fit=crop',
    filename: 'angouleme-cathedrale.jpg',
    alt: 'Déménagement Angoulême - Cathédrale et cité de la BD',
  },
  arcachon: {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    filename: 'arcachon-bassin.jpg',
    alt: 'Déménagement Arcachon - Bassin et Dune du Pilat',
  },
  'villeneuve-dascq': {
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop',
    filename: 'villeneuve-dascq-metropole.jpg',
    alt: 'Déménagement Villeneuve-d\'Ascq - Métropole lilloise',
  },
  arras: {
    url: 'https://images.unsplash.com/photo-1578489758854-f134a358f08b?w=1200&q=80&auto=format&fit=crop',
    filename: 'arras-place.jpg',
    alt: 'Déménagement Arras - Grand Place et centre historique',
  },
  lens: {
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop',
    filename: 'lens-centre.jpg',
    alt: 'Déménagement Lens - Centre et bassin minier',
  },
  valenciennes: {
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop',
    filename: 'valenciennes-place.jpg',
    alt: 'Déménagement Valenciennes - Place d\'Armes et centre',
  },
  thionville: {
    url: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1200&q=80&auto=format&fit=crop',
    filename: 'thionville-moselle.jpg',
    alt: 'Déménagement Thionville - Centre-ville Moselle',
  },
  epinal: {
    url: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1200&q=80&auto=format&fit=crop',
    filename: 'epinal-vosges.jpg',
    alt: 'Déménagement Épinal - Préfecture des Vosges',
  },
  laval: {
    url: 'https://images.unsplash.com/photo-1597348989645-14c44e616ca8?w=1200&q=80&auto=format&fit=crop',
    filename: 'laval-mayenne.jpg',
    alt: 'Déménagement Laval - Château et vieille ville Mayenne',
  },
  'la-roche-sur-yon': {
    url: 'https://images.unsplash.com/photo-1597348989645-14c44e616ca8?w=1200&q=80&auto=format&fit=crop',
    filename: 'la-roche-sur-yon-vendee.jpg',
    alt: 'Déménagement La Roche-sur-Yon - Préfecture Vendée',
  },
  cholet: {
    url: 'https://images.unsplash.com/photo-1597348989645-14c44e616ca8?w=1200&q=80&auto=format&fit=crop',
    filename: 'cholet-mauges.jpg',
    alt: 'Déménagement Cholet - Centre des Mauges',
  },
  'saint-brieuc': {
    url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80&auto=format&fit=crop',
    filename: 'saint-brieuc-baie.jpg',
    alt: 'Déménagement Saint-Brieuc - Baie et Côtes-d\'Armor',
  },
  evreux: {
    url: 'https://images.unsplash.com/photo-1600639547028-0d8b6e31b26a?w=1200&q=80&auto=format&fit=crop',
    filename: 'evreux-normandie.jpg',
    alt: 'Déménagement Évreux - Cathédrale et Eure',
  },
  dieppe: {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    filename: 'dieppe-port.jpg',
    alt: 'Déménagement Dieppe - Port et falaises normandes',
  },
  bourges: {
    url: 'https://images.unsplash.com/photo-1578489758854-f134a358f08b?w=1200&q=80&auto=format&fit=crop',
    filename: 'bourges-cathedrale.jpg',
    alt: 'Déménagement Bourges - Cathédrale et Berry',
  },
  chateauroux: {
    url: 'https://images.unsplash.com/photo-1522689508346-fcc14f5b1b2e?w=1200&q=80&auto=format&fit=crop',
    filename: 'chateauroux-indre.jpg',
    alt: 'Déménagement Châteauroux - Centre et Indre',
  },
};

// Photos déménageurs en action
const MOVER_PHOTOS = [
  {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop',
    filename: 'demenageur-professionnel-cartons-transport.jpg',
    alt: 'Déménageurs professionnels transportant des cartons',
  },
  {
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&auto=format&fit=crop',
    filename: 'demenageur-camion-equipe-action.jpg',
    alt: 'Camion de déménagement et équipe de déménageurs professionnels',
  },
  {
    url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop',
    filename: 'demenageur-transport-carton-professionnel.jpg',
    alt: 'Déménageur professionnel transportant un carton',
  },
];

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'images', 'cities');

async function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('🚀 Téléchargement des photos SEO-optimized...\n');

  // Créer le dossier si nécessaire
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Télécharger les photos landmarks des villes
  console.log('📍 Téléchargement photos landmarks des villes...');
  for (const [city, photo] of Object.entries(CITY_PHOTOS)) {
    const filepath = path.join(OUTPUT_DIR, photo.filename);
    try {
      await downloadImage(photo.url, filepath);
    } catch (error) {
      console.error(`❌ Erreur ${city}:`, error);
    }
  }

  // Télécharger les photos déménageurs
  console.log('\n🚚 Téléchargement photos déménageurs...');
  for (const photo of MOVER_PHOTOS) {
    const filepath = path.join(OUTPUT_DIR, photo.filename);
    try {
      await downloadImage(photo.url, filepath);
    } catch (error) {
      console.error(`❌ Erreur ${photo.filename}:`, error);
    }
  }

  console.log('\n✅ Téléchargement terminé !');
  console.log(`📁 Photos dans: ${OUTPUT_DIR}`);
  console.log('\n💡 Prochaines étapes:');
  console.log('   1. Vérifier les photos téléchargées');
  console.log('   2. (Optionnel) Convertir en WebP avec sharp ou squoosh.app');
  console.log('   3. Mettre à jour CityPhoto.tsx pour utiliser les images locales');
}

main().catch(console.error);
