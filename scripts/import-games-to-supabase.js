#!/usr/bin/env node
/**
 * Import games from src/data/games.ts to Supabase
 * This script generates SQL INSERT statements for all games
 */

const fs = require('fs');
const path = require('path');

// Read the games data file
const gamesFilePath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesFilePath, 'utf-8');

// Extract the allGames array using regex
const gamesMatch = gamesContent.match(/export const allGames: Game\[\] = \[([\s\S]*?)\];/);
if (!gamesMatch) {
  console.error('Could not find allGames array in games.ts');
  process.exit(1);
}

// Parse games data (simplified - just extract the objects)
const gamesArrayStr = '[' + gamesMatch[1] + ']';

// Use a safer approach - manually parse the games
const games = [];
const gameRegex = /\{\s*name:\s*'([^']+)',\s*image:\s*'([^']+)',\s*slug:\s*'([^']+)',\s*isReal:\s*true,\s*url:\s*'([^']*)',\s*releaseDate:\s*'([^']*)',\s*tags:\s*\[(.*?)\],\s*rating:\s*([\d.]+),\s*playCount:\s*(\d+)\s*\}/g;

let match;
while ((match = gameRegex.exec(gamesContent)) !== null) {
  const [, name, image, slug, url, releaseDate, tagsStr, rating, playCount] = match;
  
  // Parse tags
  const tags = tagsStr
    .split(',')
    .map(t => t.trim().replace(/^['"]|['"]$/g, ''))
    .filter(t => t);
  
  games.push({
    name,
    image,
    slug,
    url,
    releaseDate,
    tags,
    rating: parseFloat(rating),
    playCount: parseInt(playCount)
  });
}

console.log(`Found ${games.length} games to import`);

// Generate SQL
let sql = '-- Import games from src/data/games.ts\n\n';

// First, ensure all tags exist
const allTags = new Set();
games.forEach(game => {
  game.tags.forEach(tag => allTags.add(tag));
});

sql += '-- Insert tags\n';
allTags.forEach(tag => {
  const slug = tag.toLowerCase().replace(/\s+/g, '-');
  sql += `INSERT INTO tags (slug, name) VALUES ('${slug}', '${tag}') ON CONFLICT (slug) DO NOTHING;\n`;
});
sql += '\n';

// Insert games
sql += '-- Insert games\n';
games.forEach(game => {
  const cover = game.image.startsWith('http') ? game.image : `https://example.com${game.image}`;
  const description = `${game.name} - An exciting unblocked game. Play now!`;
  
  sql += `INSERT INTO games (slug, title, cover, play_url, description, rating, play_count, released_at, is_active) VALUES `;
  sql += `('${game.slug}', '${game.name.replace(/'/g, "''")}', '${cover}', '${game.url}', '${description}', ${game.rating}, ${game.playCount}, '${game.releaseDate}', true) `;
  sql += `ON CONFLICT (slug) DO NOTHING;\n`;
});

sql += '\n-- Link games to tags\n';
games.forEach(game => {
  game.tags.forEach(tag => {
    const tagSlug = tag.toLowerCase().replace(/\s+/g, '-');
    sql += `INSERT INTO game_tags (game_id, tag_id) SELECT g.id, t.id FROM games g, tags t WHERE g.slug = '${game.slug}' AND t.slug = '${tagSlug}' ON CONFLICT DO NOTHING;\n`;
  });
});

// Write to file
const outputPath = path.join(__dirname, '../supabase/migrations/import-games.sql');
fs.writeFileSync(outputPath, sql);

console.log(`Generated SQL file: ${outputPath}`);
console.log(`Total games: ${games.length}`);
console.log(`Total tags: ${allTags.size}`);

