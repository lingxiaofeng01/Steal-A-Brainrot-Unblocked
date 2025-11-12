#!/usr/bin/env node
/**
 * Verification script for Stickman Army: Team Battle game addition
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Stickman Army: Team Battle Game Addition...\n');

let allChecks = true;

// 1. Check games.ts
console.log('1️⃣ Checking src/data/games.ts...');
const gamesPath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf-8');
if (gamesContent.includes("name: 'Stickman Army: Team Battle'") &&
    gamesContent.includes("slug: 'stickman-army-team-battle'") &&
    gamesContent.includes("releaseDate: '2025-11-12'")) {
  console.log('   ✅ Game added to games.ts');
} else {
  console.log('   ❌ Game NOT found in games.ts');
  allChecks = false;
}

// 2. Check thumbnail
console.log('\n2️⃣ Checking thumbnail...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/stickman-army-team-battle.png');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log('   ❌ Thumbnail NOT found');
  allChecks = false;
}

// 3. Check game page component
console.log('\n3️⃣ Checking game page component...');
const gamePagePath = path.join(__dirname, '../src/pages/StickmanArmyTeamBattlePage.tsx');
if (fs.existsSync(gamePagePath)) {
  const pageContent = fs.readFileSync(gamePagePath, 'utf-8');
  
  // Check for required content
  const checks = {
    'GameDetailTemplate import': pageContent.includes("import GameDetailTemplate"),
    'Game title': pageContent.includes("Stickman Army: Team Battle"),
    'Game slug': pageContent.includes("slug: 'stickman-army-team-battle'"),
    'About content': pageContent.includes("aboutContent"),
    'How to play content': pageContent.includes("howToPlayContent"),
    'Features content': pageContent.includes("featuresContent"),
    'Deep color text (text-gray-800)': pageContent.includes("text-gray-800"),
    'Keyword density check': (pageContent.match(/Stickman Army/gi) || []).length >= 20,
  };
  
  let allPageChecks = true;
  for (const [check, passed] of Object.entries(checks)) {
    if (passed) {
      console.log(`   ✅ ${check}`);
    } else {
      console.log(`   ❌ ${check}`);
      allPageChecks = false;
      allChecks = false;
    }
  }
  
  if (allPageChecks) {
    console.log('   ✅ Game page component is complete');
  }
} else {
  console.log('   ❌ Game page component NOT found');
  allChecks = false;
}

// 4. Check GameDetailPage.tsx registration
console.log('\n4️⃣ Checking GameDetailPage.tsx registration...');
const gameDetailPagePath = path.join(__dirname, '../src/pages/GameDetailPage.tsx');
const gameDetailPageContent = fs.readFileSync(gameDetailPagePath, 'utf-8');
if (gameDetailPageContent.includes("'stickman-army-team-battle': lazy(() => import('./StickmanArmyTeamBattlePage'))")) {
  console.log('   ✅ Game registered in GameDetailPage.tsx');
} else {
  console.log('   ❌ Game NOT registered in GameDetailPage.tsx');
  allChecks = false;
}

// 5. Check Supabase migration file
console.log('\n5️⃣ Checking Supabase migration file...');
const migrationPath = path.join(__dirname, '../supabase/migrations/20251112_add_stickman_army_team_battle.sql');
if (fs.existsSync(migrationPath)) {
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  
  const checks = {
    'INSERT INTO games': migrationContent.includes("INSERT INTO games"),
    'Game slug': migrationContent.includes("'stickman-army-team-battle'"),
    'INSERT INTO tags': migrationContent.includes("INSERT INTO tags"),
    'INSERT INTO game_tags': migrationContent.includes("INSERT INTO game_tags"),
    'INSERT INTO game_comments': migrationContent.includes("INSERT INTO game_comments"),
    'comment_text field': migrationContent.includes("comment_text"),
    'UUID foreign keys': migrationContent.includes("SELECT g.id, t.id"),
  };
  
  let allMigrationChecks = true;
  for (const [check, passed] of Object.entries(checks)) {
    if (passed) {
      console.log(`   ✅ ${check}`);
    } else {
      console.log(`   ❌ ${check}`);
      allMigrationChecks = false;
      allChecks = false;
    }
  }
  
  if (allMigrationChecks) {
    console.log('   ✅ Migration file is complete');
  }
} else {
  console.log('   ❌ Migration file NOT found');
  allChecks = false;
}

// 6. Check sitemap-games.xml
console.log('\n6️⃣ Checking sitemap-games.xml...');
const sitemapGamesPath = path.join(__dirname, '../public/sitemap-games.xml');
const sitemapGamesContent = fs.readFileSync(sitemapGamesPath, 'utf-8');
if (sitemapGamesContent.includes('stickman-army-team-battle') &&
    sitemapGamesContent.includes('2025-11-12')) {
  console.log('   ✅ Game added to sitemap-games.xml');
} else {
  console.log('   ❌ Game NOT found in sitemap-games.xml');
  allChecks = false;
}

// 7. Check sitemap-images.xml
console.log('\n7️⃣ Checking sitemap-images.xml...');
const sitemapImagesPath = path.join(__dirname, '../public/sitemap-images.xml');
const sitemapImagesContent = fs.readFileSync(sitemapImagesPath, 'utf-8');
if (sitemapImagesContent.includes('stickman-army-team-battle')) {
  console.log('   ✅ Game added to sitemap-images.xml');
} else {
  console.log('   ❌ Game NOT found in sitemap-images.xml');
  allChecks = false;
}

// 8. Check sitemap-tags.xml updates
console.log('\n8️⃣ Checking sitemap-tags.xml updates...');
const sitemapTagsPath = path.join(__dirname, '../public/sitemap-tags.xml');
const sitemapTagsContent = fs.readFileSync(sitemapTagsPath, 'utf-8');

const tagChecks = {
  'Stickman tag updated': sitemapTagsContent.match(/<loc>https:\/\/www\.stealabrainrotunblocked\.com\/tag\/stickman<\/loc>\s*<lastmod>2025-11-12<\/lastmod>/),
  'Action tag updated': sitemapTagsContent.match(/<loc>https:\/\/www\.stealabrainrotunblocked\.com\/tag\/action<\/loc>\s*<lastmod>2025-11-12<\/lastmod>/),
  'Strategy tag updated': sitemapTagsContent.match(/<loc>https:\/\/www\.stealabrainrotunblocked\.com\/tag\/strategy<\/loc>\s*<lastmod>2025-11-12<\/lastmod>/),
  'Battle tag updated': sitemapTagsContent.match(/<loc>https:\/\/www\.stealabrainrotunblocked\.com\/tag\/battle<\/loc>\s*<lastmod>2025-11-12<\/lastmod>/),
  'Fighting tag updated': sitemapTagsContent.match(/<loc>https:\/\/www\.stealabrainrotunblocked\.com\/tag\/fighting<\/loc>\s*<lastmod>2025-11-12<\/lastmod>/),
};

let allTagChecks = true;
for (const [check, passed] of Object.entries(tagChecks)) {
  if (passed) {
    console.log(`   ✅ ${check}`);
  } else {
    console.log(`   ⚠️  ${check} (optional)`);
  }
}

// 9. Check NEW badge eligibility
console.log('\n9️⃣ Checking NEW badge eligibility...');
const releaseDate = new Date('2025-11-12');
const today = new Date();
const daysDiff = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));

if (daysDiff <= 7) {
  console.log(`   ✅ NEW badge will be displayed (${daysDiff} days old, within 7-day window)`);
} else {
  console.log(`   ⚠️  NEW badge will NOT be displayed (${daysDiff} days old, exceeds 7-day window)`);
}

// 10. Check tags
console.log('\n🔟 Checking game tags...');
const expectedTags = ['Stickman', 'Action', 'Strategy', 'Battle', 'War', 'Multiplayer', 'Fighting', 'Skill', 'Casual', 'Unblocked', 'Browser', '2D', 'Arcade', 'Defense', 'RPG'];
const foundTags = expectedTags.filter(tag => gamesContent.includes(`'${tag}'`));

if (foundTags.length === expectedTags.length) {
  console.log(`   ✅ All ${expectedTags.length} tags found`);
} else {
  console.log(`   ⚠️  Found ${foundTags.length}/${expectedTags.length} tags`);
  const missingTags = expectedTags.filter(tag => !foundTags.includes(tag));
  console.log(`   Missing: ${missingTags.join(', ')}`);
}

// Summary
console.log('\n' + '='.repeat(60));
console.log('Verification Summary');
console.log('='.repeat(60));

if (allChecks) {
  console.log('✅ All checks passed! The game is ready.');
  console.log('\n📋 Next steps:');
  console.log('   1. Run Supabase migration (via API or Dashboard)');
  console.log('   2. Verify data in Supabase database');
  console.log('   3. Test the game page locally');
  console.log('   4. Deploy to production');
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}

console.log('\n');

