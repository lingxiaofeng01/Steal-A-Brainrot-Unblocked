#!/usr/bin/env node
/**
 * Execute game import via Supabase REST API
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

// Generate game objects for insertion
const gameObjects = games.map(game => {
  const cover = game.image.startsWith('http') ? game.image : `https://example.com${game.image}`;
  const description = `${game.name} - An exciting unblocked game. Play now!`;
  
  return {
    slug: game.slug,
    title: game.name,
    cover: cover,
    play_url: game.url,
    description: description,
    rating: game.rating,
    play_count: game.playCount,
    released_at: game.releaseDate,
    is_active: true
  };
});

// Write to JSON file for manual import
const outputPath = path.join(__dirname, '../supabase/games-import.json');
fs.writeFileSync(outputPath, JSON.stringify(gameObjects, null, 2));

console.log(`Generated games JSON: ${outputPath}`);
console.log(`Total games: ${gameObjects.length}`);

// Also generate tag associations
const tagAssociations = [];
games.forEach(game => {
  game.tags.forEach(tag => {
    const tagSlug = tag.toLowerCase().replace(/\s+/g, '-');
    tagAssociations.push({
      gameSlug: game.slug,
      tagSlug: tagSlug
    });
  });
});

const tagsOutputPath = path.join(__dirname, '../supabase/game-tags-import.json');
fs.writeFileSync(tagsOutputPath, JSON.stringify(tagAssociations, null, 2));

console.log(`Generated tag associations JSON: ${tagsOutputPath}`);
console.log(`Total associations: ${tagAssociations.length}`);

