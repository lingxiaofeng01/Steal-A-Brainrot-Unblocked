#!/usr/bin/env node
/**
 * Verification script for Ragdoll Hit Stickman game addition
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Ragdoll Hit Stickman Game Addition...\n');

let allChecks = true;

// 1. Check games.ts
console.log('1️⃣ Checking src/data/games.ts...');
const gamesPath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf-8');
if (gamesContent.includes("name: 'Ragdoll Hit Stickman'") &&
    gamesContent.includes("slug: 'ragdoll-hit-stickman'") &&
    gamesContent.includes("releaseDate: '2025-11-12'")) {
  console.log('   ✅ Game added to games.ts');
} else {
  console.log('   ❌ Game NOT found in games.ts');
  allChecks = false;
}

// 2. Check thumbnail
console.log('\n2️⃣ Checking thumbnail...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/ragdoll-hit-stickman.png');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log('   ❌ Thumbnail NOT found');
  allChecks = false;
}

// 3. Check game page component
console.log('\n3️⃣ Checking game page component...');
const gamePagePath = path.join(__dirname, '../src/pages/RagdollHitStickmanPage.tsx');
if (fs.existsSync(gamePagePath)) {
  const pageContent = fs.readFileSync(gamePagePath, 'utf-8');
  
  // Check for required content
  const checks = {
    'GameDetailTemplate import': pageContent.includes("import GameDetailTemplate"),
    'Game title': pageContent.includes("Ragdoll Hit Stickman"),
    'Game slug': pageContent.includes("slug: 'ragdoll-hit-stickman'"),
    'About content': pageContent.includes("aboutContent"),
    'How to play content': pageContent.includes("howToPlayContent"),
    'Features content': pageContent.includes("featuresContent"),
    'Deep color text (text-gray-800)': pageContent.includes("text-gray-800"),
    'Keyword density check': (pageContent.match(/Ragdoll Hit Stickman/gi) || []).length >= 20,
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
if (gameDetailPageContent.includes("'ragdoll-hit-stickman': lazy(() => import('./RagdollHitStickmanPage'))")) {
  console.log('   ✅ Game registered in GameDetailPage.tsx');
} else {
  console.log('   ❌ Game NOT registered in GameDetailPage.tsx');
  allChecks = false;
}

// 5. Check Supabase migration file
console.log('\n5️⃣ Checking Supabase migration file...');
const migrationPath = path.join(__dirname, '../supabase/migrations/20251112_add_ragdoll_hit_stickman.sql');
if (fs.existsSync(migrationPath)) {
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  
  const checks = {
    'INSERT INTO games': migrationContent.includes("INSERT INTO games"),
    'Game slug': migrationContent.includes("'ragdoll-hit-stickman'"),
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
if (sitemapGamesContent.includes('ragdoll-hit-stickman') &&
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
if (sitemapImagesContent.includes('ragdoll-hit-stickman')) {
  console.log('   ✅ Game added to sitemap-images.xml');
} else {
  console.log('   ❌ Game NOT found in sitemap-images.xml');
  allChecks = false;
}

// 8. Check sitemap-tags.xml for updated tags
console.log('\n8️⃣ Checking sitemap-tags.xml...');
const sitemapTagsPath = path.join(__dirname, '../public/sitemap-tags.xml');
const sitemapTagsContent = fs.readFileSync(sitemapTagsPath, 'utf-8');

const updatedTags = ['stickman', 'action', 'fighting', 'physics', 'shooting', 'battle', 'skill', 'adventure'];
let tagsUpdated = 0;
for (const tag of updatedTags) {
  const tagRegex = new RegExp(`tag/${tag}[^<]*<lastmod>2025-11-12`, 'i');
  if (tagRegex.test(sitemapTagsContent)) {
    tagsUpdated++;
  }
}
console.log(`   ✅ sitemap-tags.xml: ${tagsUpdated}/${updatedTags.length} tags updated to 2025-11-12`);

// 9. Check NEW badge logic (7 days rule)
console.log('\n9️⃣ Checking NEW badge logic...');
const today = new Date();
const releaseDate = new Date('2025-11-12');
const daysDiff = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
if (daysDiff <= 7) {
  console.log(`   ✅ Game is ${daysDiff} days old - NEW badge should display`);
} else {
  console.log(`   ℹ️  Game is ${daysDiff} days old - NEW badge will NOT display`);
}

// 10. Check game tags
console.log('\n🔟 Checking game tags...');
const expectedTags = ['Stickman', 'Action', 'Fighting', 'Physics', 'Ragdoll', 'Adventure', 'Casual', 'Shooting', 'Battle', 'Skill', 'Unblocked', 'Browser', '2D', 'Arcade', 'PvP'];
let tagsFound = 0;
expectedTags.forEach(tag => {
  if (gamesContent.includes(`'${tag}'`)) {
    tagsFound++;
  }
});

if (tagsFound === expectedTags.length) {
  console.log(`   ✅ Found all ${expectedTags.length} tags`);
} else {
  console.log(`   ⚠️  Only found ${tagsFound}/${expectedTags.length} tags`);
}

// Final summary
console.log('\n' + '='.repeat(60));
if (allChecks) {
  console.log('✅ All checks passed! The game is ready.');
  console.log('\n📋 Next steps:');
  console.log('   1. Run Supabase migration (via API or Dashboard)');
  console.log('   2. Verify data in Supabase');
  console.log('   3. Test game page locally');
  console.log('   4. Deploy to production');
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}
console.log('='.repeat(60));

