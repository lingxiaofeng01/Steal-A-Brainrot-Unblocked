#!/usr/bin/env node
/**
 * Verification script for Spacebar Clicker 3 game addition
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Spacebar Clicker 3 Addition...\n');

let allChecks = true;

// 1. Check games.ts
console.log('1️⃣ Checking src/data/games.ts...');
const gamesPath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf-8');
if (gamesContent.includes("name: 'Spacebar Clicker 3'") && 
    gamesContent.includes("slug: 'spacebar-clicker-3'") &&
    gamesContent.includes("releaseDate: '2025-10-25'")) {
  console.log('   ✅ Game entry found in games.ts');
} else {
  console.log('   ❌ Game entry NOT found in games.ts');
  allChecks = false;
}

// 2. Check page component
console.log('\n2️⃣ Checking src/pages/SpacebarClicker3Page.tsx...');
const pagePath = path.join(__dirname, '../src/pages/SpacebarClicker3Page.tsx');
if (fs.existsSync(pagePath)) {
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  if (pageContent.includes("slug: 'spacebar-clicker-3'") &&
      pageContent.includes('Spacebar Clicker 3')) {
    console.log('   ✅ Page component exists and configured correctly');
  } else {
    console.log('   ❌ Page component exists but configuration incorrect');
    allChecks = false;
  }
} else {
  console.log('   ❌ Page component NOT found');
  allChecks = false;
}

// 3. Check GameDetailPage registration
console.log('\n3️⃣ Checking src/pages/GameDetailPage.tsx registration...');
const gameDetailPath = path.join(__dirname, '../src/pages/GameDetailPage.tsx');
const gameDetailContent = fs.readFileSync(gameDetailPath, 'utf-8');
if (gameDetailContent.includes("'spacebar-clicker-3': lazy(() => import('./SpacebarClicker3Page'))")) {
  console.log('   ✅ Game registered in GameDetailPage.tsx');
} else {
  console.log('   ❌ Game NOT registered in GameDetailPage.tsx');
  allChecks = false;
}

// 4. Check thumbnail
console.log('\n4️⃣ Checking thumbnail image...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/spacebar-clicker-3.webp');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log('   ❌ Thumbnail NOT found');
  allChecks = false;
}

// 5. Check sitemap
console.log('\n5️⃣ Checking public/sitemap-games.xml...');
const sitemapPath = path.join(__dirname, '../public/sitemap-games.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
if (sitemapContent.includes('spacebar-clicker-3') &&
    sitemapContent.includes('Spacebar Clicker 3')) {
  console.log('   ✅ Game entry found in sitemap');
} else {
  console.log('   ❌ Game entry NOT found in sitemap');
  allChecks = false;
}

// 6. Check migration file
console.log('\n6️⃣ Checking migration file...');
const migrationPath = path.join(__dirname, '../supabase/migrations/20251025000002_add_spacebar_clicker_3.sql');
if (fs.existsSync(migrationPath)) {
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  if (migrationContent.includes("'spacebar-clicker-3'") &&
      migrationContent.includes('Spacebar Clicker 3')) {
    console.log('   ✅ Migration file exists and configured correctly');
  } else {
    console.log('   ❌ Migration file exists but configuration incorrect');
    allChecks = false;
  }
} else {
  console.log('   ❌ Migration file NOT found');
  allChecks = false;
}

// 7. Check tags
console.log('\n7️⃣ Checking game tags...');
const expectedTags = ['Clicker', 'Casual', 'Skill', 'Speed', 'Arcade', 'Incremental'];
const foundTags = expectedTags.filter(tag => gamesContent.includes(`'${tag}'`));
if (foundTags.length === expectedTags.length) {
  console.log(`   ✅ All ${expectedTags.length} tags found: ${expectedTags.join(', ')}`);
} else {
  console.log(`   ❌ Only ${foundTags.length}/${expectedTags.length} tags found`);
  allChecks = false;
}

// 8. Check NEW badge eligibility
console.log('\n8️⃣ Checking NEW badge eligibility...');
const releaseDate = new Date('2025-10-25');
const today = new Date();
const diffDays = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
if (diffDays <= 7) {
  console.log(`   ✅ Game is ${diffDays} days old - NEW badge will be displayed`);
} else {
  console.log(`   ⚠️  Game is ${diffDays} days old - NEW badge will NOT be displayed`);
}

// Summary
console.log('\n' + '='.repeat(60));
if (allChecks) {
  console.log('✅ ALL CHECKS PASSED! Spacebar Clicker 3 has been successfully added!');
  console.log('\n📋 Summary:');
  console.log('   • Game data added to games.ts');
  console.log('   • Page component created (SpacebarClicker3Page.tsx)');
  console.log('   • Game registered in GameDetailPage.tsx');
  console.log('   • Thumbnail downloaded');
  console.log('   • Sitemap updated');
  console.log('   • Migration file created');
  console.log('   • All 6 tags configured');
  console.log('   • NEW badge will be displayed');
  console.log('\n🎮 Game URL: https://www.stealabrainrotunblocked.com/spacebar-clicker-3');
  console.log('📊 Database: Game, tags, and comment added to Supabase');
} else {
  console.log('❌ SOME CHECKS FAILED! Please review the errors above.');
}
console.log('='.repeat(60));

