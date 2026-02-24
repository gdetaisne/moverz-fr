#!/usr/bin/env node
/**
 * Script d'optimisation des images pour Core Web Vitals
 * Utilise Sharp pour compresser les PNG et générer des WebP
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const publicDir = join(process.cwd(), 'public');

async function optimizeImage(inputPath, filename) {
  console.log(`\n🖼️  Optimisation de ${filename}...`);
  
  try {
    const inputStats = await stat(inputPath);
    const inputSizeKB = Math.round(inputStats.size / 1024);
    console.log(`   Taille originale: ${inputSizeKB} KB`);
    
    // Optimiser le PNG
    const outputPath = inputPath.replace('.png', '-optimized.png');
    await sharp(inputPath)
      .png({ 
        quality: 90, 
        compressionLevel: 9,
        palette: true // Convertir en palette si possible (réduit énormément la taille)
      })
      .toFile(outputPath);
    
    const outputStats = await stat(outputPath);
    const outputSizeKB = Math.round(outputStats.size / 1024);
    const reduction = Math.round(((inputSizeKB - outputSizeKB) / inputSizeKB) * 100);
    console.log(`   ✅ PNG optimisé: ${outputSizeKB} KB (-${reduction}%)`);
    
    // Générer une version WebP
    const webpPath = inputPath.replace('.png', '.webp');
    await sharp(inputPath)
      .webp({ quality: 90, effort: 6 })
      .toFile(webpPath);
    
    const webpStats = await stat(webpPath);
    const webpSizeKB = Math.round(webpStats.size / 1024);
    const webpReduction = Math.round(((inputSizeKB - webpSizeKB) / inputSizeKB) * 100);
    console.log(`   ✅ WebP créé: ${webpSizeKB} KB (-${webpReduction}%)`);
    
  } catch (err) {
    console.error(`   ❌ Erreur: ${err.message}`);
  }
}

async function main() {
  console.log('⚡ Optimisation des images pour Core Web Vitals\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  // Optimiser les images critiques
  const criticalImages = [
    'logo.png',
    'logo-ui.png',
  ];
  
  for (const filename of criticalImages) {
    const imagePath = join(publicDir, filename);
    try {
      await stat(imagePath);
      await optimizeImage(imagePath, filename);
    } catch (err) {
      console.log(`   ⚠️  ${filename} non trouvé, on passe...`);
    }
  }
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✅ Optimisation terminée !');
  console.log('\nPour utiliser les images optimisées :');
  console.log('  - Remplacez logo.png par logo-optimized.png');
  console.log('  - Ou utilisez logo.webp directement');
  console.log('\nCela devrait réduire votre LCP de 30-50% ! 🚀');
}

main().catch(console.error);
