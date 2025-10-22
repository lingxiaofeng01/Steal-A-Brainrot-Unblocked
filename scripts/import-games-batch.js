#!/usr/bin/env node
/**
 * Batch import games to Supabase using REST API
 */

const fs = require('fs');
const path = require('path');

// Read the games data file
const gamesFilePath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesFilePath, 'utf-8');

// Parse games data
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

// Generate SQL for games insertion
let gamesSql = '';
games.forEach(game => {
  const cover = game.image.startsWith('http') ? game.image : `https://example.com${game.image}`;
  const description = `${game.name} - An exciting unblocked game. Play now!`;
  
  gamesSql += `INSERT INTO games (slug, title, cover, play_url, description, rating, play_count, released_at, is_active) VALUES ('${game.slug}', '${game.name.replace(/'/g, "''")}', '${cover}', '${game.url}', '${description}', ${game.rating}, ${game.playCount}, '${game.releaseDate}', true) ON CONFLICT (slug) DO NOTHING;\n`;
});

// Generate SQL for game_tags linking
let tagsSql = '';
games.forEach(game => {
  game.tags.forEach(tag => {
    const tagSlug = tag.toLowerCase().replace(/\s+/g, '-');
    tagsSql += `INSERT INTO game_tags (game_id, tag_id) SELECT g.id, t.id FROM games g, tags t WHERE g.slug = '${game.slug}' AND t.slug = '${tagSlug}' ON CONFLICT DO NOTHING;\n`;
  });
});

// Write to separate files
const gamesOutputPath = path.join(__dirname, '../supabase/migrations/import-games-data.sql');
const tagsOutputPath = path.join(__dirname, '../supabase/migrations/import-games-tags.sql');

fs.writeFileSync(gamesOutputPath, gamesSql);
fs.writeFileSync(tagsOutputPath, tagsSql);

console.log(`Generated games SQL: ${gamesOutputPath}`);
console.log(`Generated tags SQL: ${tagsOutputPath}`);
console.log(`Total games: ${games.length}`);
console.log(`Total tag associations: ${games.reduce((sum, g) => sum + g.tags.length, 0)}`);

