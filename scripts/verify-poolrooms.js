#!/usr/bin/env node
/**
 * Verification script for Poolrooms game addition
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Poolrooms Addition...\n');

let allChecks = true;

// 1. Check games.ts
console.log('1️⃣ Checking src/data/games.ts...');
const gamesPath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf-8');

if (gamesContent.includes("name: 'Poolrooms'") &&
    gamesContent.includes("slug: 'poolrooms'") &&
    gamesContent.includes("releaseDate: '2025-11-04'")) {
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
const pagePath = path.join(__dirname, '../src/pages/PoolroomsPage.tsx');
if (fs.existsSync(pagePath)) {
  console.log('   ✅ PoolroomsPage.tsx exists');
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  if (pageContent.includes("title: 'Poolrooms'") &&
      pageContent.includes("slug: 'poolrooms'")) {
    console.log('   ✅ Page component has correct game data');

    // Check keyword density (approximate)
    const matches = pageContent.match(/Poolrooms/g);
    const wordCount = pageContent.split(/\s+/).length;
    const density = ((matches ? matches.length : 0) / wordCount * 100).toFixed(2);
    console.log(`   ✅ Keyword "Poolrooms" appears ${matches ? matches.length : 0} times (${density}% density)`);

    if (density >= 2.0) {
      console.log('   ✅ Keyword density meets 2% requirement');
    } else {
      console.log('   ⚠️  Keyword density below 2% target');
    }
  } else {
    console.log('   ❌ Page component missing game data');
    allChecks = false;
  }
} else {
  console.log('   ❌ PoolroomsPage.tsx NOT found');
  allChecks = false;
}

// 3. Check GameDetailPage.tsx registration
console.log('\n3️⃣ Checking GameDetailPage.tsx registration...');
const detailPagePath = path.join(__dirname, '../src/pages/GameDetailPage.tsx');
const detailPageContent = fs.readFileSync(detailPagePath, 'utf-8');
if (detailPageContent.includes("'poolrooms': lazy(() => import('./PoolroomsPage'))")) {
  console.log('   ✅ Game registered in GameDetailPage.tsx');
} else {
  console.log('   ❌ Game NOT registered in GameDetailPage.tsx');
  allChecks = false;
}

// 4. Check thumbnail image
console.log('\n4️⃣ Checking thumbnail image...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/poolrooms.png');
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
if (sitemapContent.includes('<loc>https://www.stealabrainrotunblocked.com/poolrooms</loc>')) {
  console.log('   ✅ Game URL found in sitemap-games.xml');
  if (sitemapContent.includes('<lastmod>2025-11-04</lastmod>')) {
    console.log('   ✅ Sitemap has correct lastmod date');
  }
} else {
  console.log('   ❌ Game URL NOT found in sitemap-games.xml');
  allChecks = false;
}

// 6. Check sitemap-images.xml
console.log('\n6️⃣ Checking sitemap-images.xml...');
const sitemapImagesPath = path.join(__dirname, '../public/sitemap-images.xml');
const sitemapImagesContent = fs.readFileSync(sitemapImagesPath, 'utf-8');
if (sitemapImagesContent.includes('<loc>https://www.stealabrainrotunblocked.com/poolrooms</loc>')) {
  console.log('   ✅ Game image found in sitemap-images.xml');
} else {
  console.log('   ❌ Game image NOT found in sitemap-images.xml');
  allChecks = false;
}

// 7. Check sitemap-tags.xml
console.log('\n7️⃣ Checking sitemap-tags.xml...');
const sitemapTagsPath = path.join(__dirname, '../public/sitemap-tags.xml');
const sitemapTagsContent = fs.readFileSync(sitemapTagsPath, 'utf-8');
const relevantTags = ['horror', 'casual', 'music', 'spooky', 'rhythm', 'arcade', 'exploration'];
let tagsUpdated = 0;
relevantTags.forEach(tag => {
  if (sitemapTagsContent.includes(`<loc>https://www.stealabrainrotunblocked.com/tag/${tag}</loc>`)) {
    tagsUpdated++;
  }
});
console.log(`   ✅ ${tagsUpdated}/${relevantTags.length} relevant tag pages found`);

// 8. Check Supabase migration script
console.log('\n8️⃣ Checking Supabase migration script...');
const sqlPath = path.join(__dirname, '../supabase/migrations/20251104_add_poolrooms.sql');
if (fs.existsSync(sqlPath)) {
  console.log('   ✅ 20251104_add_poolrooms.sql found');
  const sqlContent = fs.readFileSync(sqlPath, 'utf-8');

  if (sqlContent.includes("slug = 'poolrooms'") || sqlContent.includes("'poolrooms'")) {
    console.log('   ✅ SQL script has correct game slug');
  }

  if (sqlContent.includes("INSERT INTO games")) {
    console.log('   ✅ SQL script inserts game record');
  }

  if (sqlContent.includes("INSERT INTO tags")) {
    console.log('   ✅ SQL script creates tags');
  }

  if (sqlContent.includes("INSERT INTO game_tags")) {
    console.log('   ✅ SQL script associates game with tags');
  }

  if (sqlContent.includes("INSERT INTO game_comments")) {
    console.log('   ✅ SQL script adds comment');
  }
} else {
  console.log('   ❌ 20251104_add_poolrooms.sql NOT found');
  allChecks = false;
}

// 9. Check NEW badge eligibility
console.log('\n9️⃣ Checking NEW badge eligibility...');
const releaseDate = new Date('2025-11-04');
const today = new Date();
const diffDays = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
if (diffDays <= 7) {
  console.log(`   ✅ Game is ${diffDays} days old - NEW badge will be displayed`);
} else {
  console.log(`   ⚠️  Game is ${diffDays} days old - NEW badge will NOT be displayed`);
}

// 10. Check game tags
console.log('\n🏷️ Checking game tags...');
const expectedTags = ['Horror', 'Casual', 'Music', 'Spooky', 'Rhythm', 'Arcade', 'Exploration'];
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
  console.log('✅ All checks passed! Poolrooms is ready!');
  console.log('\n📋 Next steps:');
  console.log('   1. Run the Supabase migration:');
  console.log('      - Via API (recommended): Use Supabase tool to execute SQL');
  console.log('      - Via Dashboard: Copy SQL to Supabase SQL Editor');
  console.log('   2. Verify data in Supabase Dashboard');
  console.log('   3. Test the game page locally: http://localhost:3000/poolrooms');
  console.log('   4. Verify NEW badge appears (within 7 days of release)');
  console.log('   5. Check game appears in:');
  console.log('      - Homepage');
  console.log('      - /tag/horror');
  console.log('      - /tag/casual');
  console.log('      - /tag/music');
  console.log('      - /tag/spooky');
  console.log('      - /tag/rhythm');
  console.log('      - /tag/arcade');
  console.log('      - /tag/exploration');
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}
console.log('='.repeat(50) + '\n');

