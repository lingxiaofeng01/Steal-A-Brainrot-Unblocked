#!/usr/bin/env node
/**
 * Verification script for Stickman Clash game addition
 * Checks all files and configurations to ensure the game was added correctly
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Stickman Clash game addition...\n');
console.log('='.repeat(60));

let allChecks = true;

// 1. Check thumbnail image
console.log('\n1️⃣ Checking thumbnail image...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/stickman-clash.png');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log('   ❌ Thumbnail NOT found');
  allChecks = false;
}

// 2. Check games.ts
console.log('\n2️⃣ Checking src/data/games.ts...');
const gamesPath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf-8');

if (gamesContent.includes("name: 'Stickman Clash'") &&
    gamesContent.includes("slug: 'stickman-clash'") &&
    gamesContent.includes("releaseDate: '2025-11-04'")) {
  console.log('   ✅ Game added to games.ts');
  
  // Check tags
  const expectedTags = ['Battle', 'Action', 'Arcade', 'Fighting', 'Stickman', '2D', '2 Player', '3 Player', 'Multiplayer', 'Physics', 'Casual'];
  let tagsFound = 0;
  expectedTags.forEach(tag => {
    if (gamesContent.includes(`'${tag}'`)) {
      tagsFound++;
    }
  });
  console.log(`   ✅ Tags found: ${tagsFound}/${expectedTags.length}`);
  
  if (tagsFound < expectedTags.length) {
    console.log(`   ⚠️  Missing tags: ${expectedTags.length - tagsFound}`);
  }
} else {
  console.log('   ❌ Game NOT found in games.ts');
  allChecks = false;
}

// 3. Check game page component
console.log('\n3️⃣ Checking src/pages/StickmanClashPage.tsx...');
const gamePagePath = path.join(__dirname, '../src/pages/StickmanClashPage.tsx');
if (fs.existsSync(gamePagePath)) {
  const pageContent = fs.readFileSync(gamePagePath, 'utf-8');
  if (pageContent.includes('Stickman Clash') &&
      pageContent.includes('GameDetailTemplate') &&
      pageContent.includes('floppy physics')) {
    console.log('   ✅ Game page component exists with correct content');
  } else {
    console.log('   ⚠️  Game page exists but may be missing content');
  }
} else {
  console.log('   ❌ Game page component NOT found');
  allChecks = false;
}

// 4. Check GameDetailPage.tsx registration
console.log('\n4️⃣ Checking src/pages/GameDetailPage.tsx...');
const gameDetailPagePath = path.join(__dirname, '../src/pages/GameDetailPage.tsx');
const gameDetailContent = fs.readFileSync(gameDetailPagePath, 'utf-8');
if (gameDetailContent.includes("'stickman-clash': lazy(() => import('./StickmanClashPage'))")) {
  console.log('   ✅ Game registered in GameDetailPage.tsx');
} else {
  console.log('   ❌ Game NOT registered in GameDetailPage.tsx');
  allChecks = false;
}

// 5. Check Supabase migration
console.log('\n5️⃣ Checking Supabase migration...');
const migrationPath = path.join(__dirname, '../supabase/migrations/20251104_add_stickman_clash.sql');
if (fs.existsSync(migrationPath)) {
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  if (migrationContent.includes("'stickman-clash'") &&
      migrationContent.includes('INSERT INTO games') &&
      migrationContent.includes('INSERT INTO game_comments')) {
    console.log('   ✅ Supabase migration file exists with correct content');
  } else {
    console.log('   ⚠️  Migration file exists but may be incomplete');
  }
} else {
  console.log('   ❌ Supabase migration file NOT found');
  allChecks = false;
}

// 6. Check sitemap-games.xml
console.log('\n7️⃣ Checking public/sitemap-games.xml...');
const sitemapGamesPath = path.join(__dirname, '../public/sitemap-games.xml');
const sitemapGamesContent = fs.readFileSync(sitemapGamesPath, 'utf-8');
if (sitemapGamesContent.includes('stickman-clash') &&
    sitemapGamesContent.includes('2025-11-04')) {
  console.log('   ✅ Game added to sitemap-games.xml');
} else {
  console.log('   ❌ Game NOT found in sitemap-games.xml');
  allChecks = false;
}

// 8. Check sitemap-images.xml
console.log('\n8️⃣ Checking public/sitemap-images.xml...');
const sitemapImagesPath = path.join(__dirname, '../public/sitemap-images.xml');
const sitemapImagesContent = fs.readFileSync(sitemapImagesPath, 'utf-8');
if (sitemapImagesContent.includes('stickman-clash.png')) {
  console.log('   ✅ Image added to sitemap-images.xml');
} else {
  console.log('   ❌ Image NOT found in sitemap-images.xml');
  allChecks = false;
}

// 9. Check main sitemap date
console.log('\n9️⃣ Checking public/sitemap.xml...');
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
if (sitemapContent.includes('<lastmod>2025-11-04</lastmod>')) {
  console.log('   ✅ Main sitemap date updated to 2025-11-04');
} else {
  console.log('   ❌ Main sitemap date NOT updated');
  allChecks = false;
}

// 10. Check sitemap-index.xml date
console.log('\n🔟 Checking public/sitemap-index.xml...');
const sitemapIndexPath = path.join(__dirname, '../public/sitemap-index.xml');
const sitemapIndexContent = fs.readFileSync(sitemapIndexPath, 'utf-8');
if (sitemapIndexContent.includes('<lastmod>2025-11-04</lastmod>')) {
  console.log('   ✅ Sitemap index date updated to 2025-11-04');
} else {
  console.log('   ❌ Sitemap index date NOT updated');
  allChecks = false;
}

// 11. Check sitemap-tags.xml for relevant tags
console.log('\n1️⃣1️⃣ Checking public/sitemap-tags.xml...');
const sitemapTagsPath = path.join(__dirname, '../public/sitemap-tags.xml');
const sitemapTagsContent = fs.readFileSync(sitemapTagsPath, 'utf-8');

const relevantTags = ['battle', 'action', 'arcade'];
let tagUpdates = 0;
relevantTags.forEach(tag => {
  const tagRegex = new RegExp(`<loc>.*tag/${tag}</loc>\\s*<lastmod>2025-11-04</lastmod>`, 's');
  if (tagRegex.test(sitemapTagsContent)) {
    tagUpdates++;
  }
});

if (tagUpdates >= 2) {
  console.log(`   ✅ Relevant tags updated (${tagUpdates}/${relevantTags.length})`);
} else {
  console.log(`   ⚠️  Only ${tagUpdates}/${relevantTags.length} relevant tags updated`);
}

// 12. Check NEW badge eligibility
console.log('\n1️⃣2️⃣ Checking NEW badge...');
const releaseDate = new Date('2025-11-04');
const today = new Date();
const daysDiff = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
if (daysDiff <= 7) {
  console.log(`   ✅ Game will show NEW badge (released ${daysDiff} days ago)`);
} else {
  console.log(`   ℹ️  Game released ${daysDiff} days ago (NEW badge shows for 7 days)`);
}

// 13. Check game will appear on tag pages
console.log('\n1️⃣3️⃣ Checking game tags for category pages...');
const tags = ['Battle', 'Action', 'Arcade', 'Fighting', 'Stickman', '2D', '2 Player', '3 Player', 'Multiplayer', 'Physics', 'Casual'];
console.log(`   ℹ️  Game will appear on these tag pages:`);
tags.forEach(tag => {
  console.log(`      - /tag/${tag.toLowerCase().replace(/ /g, '-')}`);
});

// Final summary
console.log('\n' + '='.repeat(60));
if (allChecks) {
  console.log('✅ All checks passed! Stickman Clash has been successfully added.');
  console.log('\n📋 Next steps:');
  console.log('   1. Run Supabase migration via SQL Editor:');
  console.log('      - Open: https://supabase.com/dashboard/project/tgoyqxcqpwevgztprqgk/sql/new');
  console.log('      - Copy content from: supabase/migrations/20251104_add_stickman_clash.sql');
  console.log('      - Execute in SQL Editor');
  console.log('   2. Test the game page: http://localhost:3000/stickman-clash');
  console.log('   3. Verify the game appears on tag pages');
  console.log('   4. Check that the NEW badge is displayed');
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}

console.log('='.repeat(60) + '\n');

