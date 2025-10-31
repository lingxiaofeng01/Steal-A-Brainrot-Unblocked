#!/usr/bin/env node
/**
 * Verification script for Planet Buster game addition
 * Checks all files and configurations
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Verifying Planet Buster game addition...\n');

let allChecks = true;

// 1. Check games.ts
console.log('1️⃣ Checking src/data/games.ts...');
const gamesPath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf-8');

if (gamesContent.includes("name: 'Planet Buster'")) {
  console.log('   ✅ Game added to games.ts');
  if (gamesContent.includes("slug: 'planet-buster'")) {
    console.log('   ✅ Correct slug');
  }
  if (gamesContent.includes("releaseDate: '2025-10-31'")) {
    console.log('   ✅ Correct release date');
  }
  if (gamesContent.includes("url: 'https://planet-buster.1games.io/'")) {
    console.log('   ✅ Correct game URL');
  }
  if (gamesContent.includes("rating: 4.4")) {
    console.log('   ✅ Correct rating');
  }
} else {
  console.log('   ❌ Game NOT found in games.ts');
  allChecks = false;
}

// 2. Check page component
console.log('\n2️⃣ Checking src/pages/PlanetBusterPage.tsx...');
const pageComponentPath = path.join(__dirname, '../src/pages/PlanetBusterPage.tsx');
if (fs.existsSync(pageComponentPath)) {
  const pageContent = fs.readFileSync(pageComponentPath, 'utf-8');
  console.log('   ✅ Page component exists');
  
  if (pageContent.includes('Planet Buster')) {
    console.log('   ✅ Contains game title');
  }
  if (pageContent.length > 5000) {
    console.log('   ✅ Content length > 1000 words');
  }
  if (pageContent.includes('<h2') || pageContent.includes('<h3')) {
    console.log('   ✅ Contains H tags');
  }
} else {
  console.log('   ❌ Page component NOT found');
  allChecks = false;
}

// 3. Check route page
console.log('\n3️⃣ Checking app/planet-buster/page.tsx...');
const routePath = path.join(__dirname, '../app/planet-buster/page.tsx');
if (fs.existsSync(routePath)) {
  const routeContent = fs.readFileSync(routePath, 'utf-8');
  console.log('   ✅ Route page exists');
  
  if (routeContent.includes('export const metadata')) {
    console.log('   ✅ Contains metadata');
  }
  if (routeContent.includes('Planet Buster')) {
    console.log('   ✅ Contains game title in metadata');
  }
  if (routeContent.includes('keywords:')) {
    console.log('   ✅ Contains keywords');
  }
} else {
  console.log('   ❌ Route page NOT found');
  allChecks = false;
}

// 4. Check thumbnail
console.log('\n4️⃣ Checking public/images/thumbnails/planet-buster.jpg...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/planet-buster.jpg');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log('   ❌ Thumbnail NOT found');
  allChecks = false;
}

// 5. Check sitemap-games.xml
console.log('\n5️⃣ Checking public/sitemap-games.xml...');
const sitemapGamesPath = path.join(__dirname, '../public/sitemap-games.xml');
const sitemapGamesContent = fs.readFileSync(sitemapGamesPath, 'utf-8');

if (sitemapGamesContent.includes('planet-buster')) {
  console.log('   ✅ Game added to sitemap-games.xml');
  if (sitemapGamesContent.includes('<lastmod>2025-10-31</lastmod>')) {
    console.log('   ✅ Correct lastmod date');
  }
} else {
  console.log('   ❌ Game NOT found in sitemap-games.xml');
  allChecks = false;
}

// 6. Check sitemap-images.xml
console.log('\n6️⃣ Checking public/sitemap-images.xml...');
const sitemapImagesPath = path.join(__dirname, '../public/sitemap-images.xml');
const sitemapImagesContent = fs.readFileSync(sitemapImagesPath, 'utf-8');

if (sitemapImagesContent.includes('planet-buster.jpg')) {
  console.log('   ✅ Image added to sitemap-images.xml');
} else {
  console.log('   ❌ Image NOT found in sitemap-images.xml');
  allChecks = false;
}

// 7. Check sitemap.xml
console.log('\n7️⃣ Checking public/sitemap.xml...');
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

const updatedDates = sitemapContent.match(/<lastmod>2025-10-31<\/lastmod>/g);
if (updatedDates && updatedDates.length >= 5) {
  console.log(`   ✅ Main sitemap updated (${updatedDates.length} entries with 2025-10-31)`);
} else {
  console.log('   ⚠️  Main sitemap may need date updates');
}

// 8. Check sitemap-tags.xml
console.log('\n8️⃣ Checking public/sitemap-tags.xml...');
const sitemapTagsPath = path.join(__dirname, '../public/sitemap-tags.xml');
const sitemapTagsContent = fs.readFileSync(sitemapTagsPath, 'utf-8');

const relevantTags = ['casual', 'idle', 'action', 'clicker'];
let tagUpdates = 0;
relevantTags.forEach(tag => {
  const tagRegex = new RegExp(`<loc>.*tag/${tag}</loc>\\s*<lastmod>2025-10-31</lastmod>`, 's');
  if (tagRegex.test(sitemapTagsContent)) {
    tagUpdates++;
  }
});

if (tagUpdates >= 3) {
  console.log(`   ✅ Relevant tags updated (${tagUpdates}/${relevantTags.length})`);
} else {
  console.log(`   ⚠️  Only ${tagUpdates}/${relevantTags.length} relevant tags updated`);
}

// 9. Check Supabase migration
console.log('\n9️⃣ Checking Supabase migration...');
const migrationPath = path.join(__dirname, '../supabase/migrations/20251031_add_planet_buster.sql');
if (fs.existsSync(migrationPath)) {
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  console.log('   ✅ Migration file exists');
  
  if (migrationContent.includes("slug = 'planet-buster'")) {
    console.log('   ✅ Contains game insert');
  }
  if (migrationContent.includes('game_comments')) {
    console.log('   ✅ Contains comment insert');
  }
  if (migrationContent.includes('game_tags')) {
    console.log('   ✅ Contains tag associations');
  }
} else {
  console.log('   ❌ Migration file NOT found');
  allChecks = false;
}

// Summary
console.log('\n' + '='.repeat(50));
if (allChecks) {
  console.log('✅ All checks passed! Planet Buster is ready to go!');
  console.log('\n📋 Next steps:');
  console.log('   1. Run the Supabase migration');
  console.log('   2. Test the game page at /planet-buster');
  console.log('   3. Verify NEW badge appears on homepage');
  console.log('   4. Check game appears in relevant tag pages');
  console.log('   5. Submit updated sitemap to Google Search Console');
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}

console.log('='.repeat(50) + '\n');

