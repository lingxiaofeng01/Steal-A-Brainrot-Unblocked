#!/usr/bin/env node
/**
 * Generate clean sitemap-games.xml from the games data
 * Run this script after updating games data
 */

const fs = require('fs');
const path = require('path');

// Read and parse games data
const gamesFilePath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesFilePath, 'utf-8');

// Extract allGames array using regex
const allGamesMatch = gamesContent.match(/export const allGames: Game\[\] = (\[[\s\S]*?\n\]);/);
if (!allGamesMatch) {
  console.error('Failed to extract allGames from games.ts');
  process.exit(1);
}

// Evaluate the games array
const allGames = eval(allGamesMatch[1]);
const isRealGame = (game) => 'isReal' in game && game.isReal === true;

// Filter only real games
const realGames = allGames.filter(game => isRealGame(game));

// Sort games by release date (newest first)
realGames.sort((a, b) => {
  const dateA = new Date(a.releaseDate || '2025-01-01');
  const dateB = new Date(b.releaseDate || '2025-01-01');
  return dateB - dateA;
});

// Generate XML
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n\n';

realGames.forEach(game => {
  const lastmod = game.releaseDate || '2025-10-21';
  // Priority based on release date and play count
  let priority = '0.7';
  if (game.playCount > 1000000) {
    priority = '0.95';
  } else if (game.playCount > 100000) {
    priority = '0.9';
  } else if (game.releaseDate && new Date(game.releaseDate) > new Date('2025-11-01')) {
    priority = '0.85'; // Recent games get higher priority
  }
  
  xml += '  <url>\n';
  xml += `    <loc>https://www.stealabrainrotunblocked.com/${game.slug}</loc>\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += '    <changefreq>weekly</changefreq>\n';
  xml += `    <priority>${priority}</priority>\n`;
  
  // Add image if available
  if (game.image) {
    const imageUrl = game.image.startsWith('http') 
      ? game.image 
      : `https://www.stealabrainrotunblocked.com${game.image}`;
    xml += '    <image:image>\n';
    xml += `      <image:loc>${imageUrl}</image:loc>\n`;
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
console.log(`✓ Games sorted by release date (newest first)`);

// Print summary
const recentGames = realGames.filter(g => g.releaseDate && new Date(g.releaseDate) > new Date('2025-11-01'));
console.log(`✓ Recent games (Nov 2025): ${recentGames.length}`);

// Print first 5 games
console.log('\nFirst 5 games:');
realGames.slice(0, 5).forEach((g, i) => {
  console.log(`  ${i + 1}. ${g.name} (${g.releaseDate || 'N/A'})`);
});

