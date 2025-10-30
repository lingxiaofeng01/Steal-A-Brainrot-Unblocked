#!/usr/bin/env node
/**
 * Verification script for A Pretty Odd Bunny: Roast It! game addition
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying A Pretty Odd Bunny: Roast It! Addition...\n');

let allChecks = true;

// 1. Check games.ts
console.log('1️⃣ Checking src/data/games.ts...');
const gamesPath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf-8');

if (gamesContent.includes("name: 'A Pretty Odd Bunny: Roast It!'") && 
    gamesContent.includes("slug: 'a-pretty-odd-bunny-roast-it'") &&
    gamesContent.includes("releaseDate: '2025-10-30'")) {
  console.log('   ✅ Game entry found in games.ts');
  
  // Check if it's at the top (first game)
  const gamesMatch = gamesContent.match(/export const allGames: Game\[\] = \[([\s\S]*?)\{/);
  if (gamesMatch && gamesMatch[1].trim() === '') {
    console.log('   ✅ Game is at position 0 (newest)');
  } else {
    console.log('   ⚠️  Game might not be at position 0');
  }
} else {
  console.log('   ❌ Game entry NOT found in games.ts');
  allChecks = false;
}

// 2. Check game page component
console.log('\n2️⃣ Checking game page component...');
const pagePath = path.join(__dirname, '../src/pages/APrettyOddBunnyRoastItPage.tsx');
if (fs.existsSync(pagePath)) {
  console.log('   ✅ APrettyOddBunnyRoastItPage.tsx exists');
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  if (pageContent.includes("title: 'A Pretty Odd Bunny: Roast It!'") &&
      pageContent.includes("slug: 'a-pretty-odd-bunny-roast-it'")) {
    console.log('   ✅ Page component has correct game data');
  } else {
    console.log('   ❌ Page component missing game data');
    allChecks = false;
  }
} else {
  console.log('   ❌ APrettyOddBunnyRoastItPage.tsx NOT found');
  allChecks = false;
}

// 3. Check GameDetailPage.tsx registration
console.log('\n3️⃣ Checking GameDetailPage.tsx registration...');
const detailPagePath = path.join(__dirname, '../src/pages/GameDetailPage.tsx');
const detailPageContent = fs.readFileSync(detailPagePath, 'utf-8');
if (detailPageContent.includes("'a-pretty-odd-bunny-roast-it': lazy(() => import('./APrettyOddBunnyRoastItPage'))")) {
  console.log('   ✅ Game registered in GameDetailPage.tsx');
} else {
  console.log('   ❌ Game NOT registered in GameDetailPage.tsx');
  allChecks = false;
}

// 4. Check thumbnail image
console.log('\n4️⃣ Checking thumbnail image...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/a-pretty-odd-bunny-roast-it.png');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log('   ❌ Thumbnail NOT found');
  allChecks = false;
}

// 5. Check sitemap-games.xml
console.log('\n5️⃣ Checking sitemap-games.xml...');
const sitemapPath = path.join(__dirname, '../public/sitemap-games.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
if (sitemapContent.includes('<loc>https://www.stealabrainrotunblocked.com/a-pretty-odd-bunny-roast-it</loc>')) {
  console.log('   ✅ Game URL found in sitemap-games.xml');
} else {
  console.log('   ❌ Game URL NOT found in sitemap-games.xml');
  allChecks = false;
}

// 6. Check Supabase SQL script
console.log('\n6️⃣ Checking Supabase SQL script...');
const sqlPath = path.join(__dirname, '../supabase/add-a-pretty-odd-bunny-roast-it.sql');
if (fs.existsSync(sqlPath)) {
  console.log('   ✅ add-a-pretty-odd-bunny-roast-it.sql found');
  const sqlContent = fs.readFileSync(sqlPath, 'utf-8');
  if (sqlContent.includes("game_slug = 'a-pretty-odd-bunny-roast-it'")) {
    console.log('   ✅ SQL script has correct game slug');
  }
} else {
  console.log('   ❌ add-a-pretty-odd-bunny-roast-it.sql NOT found');
  allChecks = false;
}

// 7. Check NEW badge eligibility
console.log('\n7️⃣ Checking NEW badge eligibility...');
const releaseDate = new Date('2025-10-30');
const today = new Date();
const diffDays = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
if (diffDays <= 7) {
  console.log(`   ✅ Game is ${diffDays} days old - NEW badge will be displayed`);
} else {
  console.log(`   ⚠️  Game is ${diffDays} days old - NEW badge will NOT be displayed`);
}

// 8. Check game tags
console.log('\n8️⃣ Checking game tags...');
const expectedTags = ['Arcade', 'Puzzle', 'Platform', 'Animal', 'Bunny'];
let tagsFound = 0;
expectedTags.forEach(tag => {
  if (gamesContent.includes(`'${tag}'`)) {
    tagsFound++;
  }
});
console.log(`   ✅ Found ${tagsFound}/${expectedTags.length} expected tags`);

// Final summary
console.log('\n' + '='.repeat(50));
if (allChecks) {
  console.log('✅ All checks passed! A Pretty Odd Bunny: Roast It! is ready!');
  console.log('\n📋 Next steps:');
  console.log('   1. Run the SQL script in Supabase Dashboard:');
  console.log('      supabase/add-a-pretty-odd-bunny-roast-it.sql');
  console.log('   2. Test the game page locally');
  console.log('   3. Verify NEW badge appears (within 7 days of release)');
  console.log('   4. Check game appears in all relevant pages');
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}
console.log('='.repeat(50) + '\n');

