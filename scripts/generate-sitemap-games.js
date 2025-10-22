#!/usr/bin/env node
/**
 * Generate sitemap-games.xml from the games data
 * Run this script after updating games data
 */

const fs = require('fs');
const path = require('path');

// Import games data
const gamesModule = require('../src/data/games.ts');
const allGames = gamesModule.allGames;
const isRealGame = gamesModule.isRealGame;

// Filter only real games
const realGames = allGames.filter(game => isRealGame(game));

// Generate XML
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n\n';

realGames.forEach(game => {
  const lastmod = game.releaseDate || '2025-10-21';
  const priority = game.playCount > 1000000 ? '0.9' : game.playCount > 100000 ? '0.8' : '0.7';
  
  xml += '  <url>\n';
  xml += `    <loc>https://www.stealabrainrotunblocked.com/${game.slug}</loc>\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += '    <changefreq>weekly</changefreq>\n';
  xml += `    <priority>${priority}</priority>\n`;
  
  // Add image if available
  if (game.image) {
    xml += '    <image:image>\n';
    xml += `      <image:loc>${game.image}</image:loc>\n`;
    xml += `      <image:title>${game.name}</image:title>\n`;
    xml += '    </image:image>\n';
  }
  
  xml += '  </url>\n\n';
});

xml += '</urlset>\n';

// Write to file
const outputPath = path.join(__dirname, '../public/sitemap-games.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');

console.log(`✓ Generated sitemap-games.xml with ${realGames.length} games`);
console.log(`✓ File saved to: ${outputPath}`);

