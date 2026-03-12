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
