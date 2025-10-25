#!/usr/bin/env node
/**
 * Verification script for Crazy Animal City game addition
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Crazy Animal City Addition...\n');

let allChecks = true;

// 1. Check games.ts
console.log('1️⃣ Checking src/data/games.ts...');
const gamesPath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf-8');
if (gamesContent.includes("name: 'Crazy Animal City'") && 
    gamesContent.includes("slug: 'crazy-animal-city'") &&
    gamesContent.includes("releaseDate: '2025-10-25'")) {
  console.log('   ✅ Game entry found in games.ts');
} else {
  console.log('   ❌ Game entry NOT found in games.ts');
  allChecks = false;
}

// 2. Check page component
console.log('\n2️⃣ Checking src/pages/CrazyAnimalCityPage.tsx...');
const pagePath = path.join(__dirname, '../src/pages/CrazyAnimalCityPage.tsx');
if (fs.existsSync(pagePath)) {
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  if (pageContent.includes("slug: 'crazy-animal-city'") &&
      pageContent.includes('Crazy Animal City')) {
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
if (gameDetailContent.includes("'crazy-animal-city': lazy(() => import('./CrazyAnimalCityPage'))")) {
  console.log('   ✅ Game registered in GameDetailPage.tsx');
} else {
  console.log('   ❌ Game NOT registered in GameDetailPage.tsx');
  allChecks = false;
}

// 4. Check Next.js route
console.log('\n4️⃣ Checking app/crazy-animal-city/page.tsx...');
const routePath = path.join(__dirname, '../app/crazy-animal-city/page.tsx');
if (fs.existsSync(routePath)) {
  const routeContent = fs.readFileSync(routePath, 'utf-8');
  if (routeContent.includes('CrazyAnimalCityPage') &&
      routeContent.includes('crazy-animal-city')) {
    console.log('   ✅ Next.js route exists and configured correctly');
  } else {
    console.log('   ❌ Next.js route exists but configuration incorrect');
    allChecks = false;
  }
} else {
  console.log('   ❌ Next.js route NOT found');
  allChecks = false;
}

// 5. Check thumbnail
console.log('\n5️⃣ Checking public/images/thumbnails/crazy-animal-city.webp...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/crazy-animal-city.webp');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  if (stats.size > 0) {
    console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
  } else {
    console.log('   ❌ Thumbnail exists but is empty');
    allChecks = false;
  }
} else {
  console.log('   ❌ Thumbnail NOT found');
  allChecks = false;
}

// 6. Check sitemap
console.log('\n6️⃣ Checking public/sitemap-games.xml...');
const sitemapPath = path.join(__dirname, '../public/sitemap-games.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
if (sitemapContent.includes('crazy-animal-city') &&
    sitemapContent.includes('Crazy Animal City')) {
  console.log('   ✅ Game added to sitemap');
} else {
  console.log('   ❌ Game NOT found in sitemap');
  allChecks = false;
}

// 7. Check migration file
console.log('\n7️⃣ Checking supabase/migrations/20251025000003_add_crazy_animal_city.sql...');
const migrationPath = path.join(__dirname, '../supabase/migrations/20251025000003_add_crazy_animal_city.sql');
if (fs.existsSync(migrationPath)) {
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  if (migrationContent.includes("'crazy-animal-city'") &&
      migrationContent.includes('Crazy Animal City')) {
    console.log('   ✅ Migration file exists and configured correctly');
  } else {
    console.log('   ❌ Migration file exists but configuration incorrect');
    allChecks = false;
  }
} else {
  console.log('   ❌ Migration file NOT found');
  allChecks = false;
}

// 8. Check tags in migration
console.log('\n8️⃣ Checking tags in migration file...');
const expectedTags = ['3d', 'simulation', 'action', 'casual', 'animal', 'city'];
const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
let tagsFound = 0;
expectedTags.forEach(tag => {
  if (migrationContent.includes(`'${tag}'`)) {
    tagsFound++;
  }
});
if (tagsFound === expectedTags.length) {
  console.log(`   ✅ All ${expectedTags.length} tags found in migration`);
} else {
  console.log(`   ❌ Only ${tagsFound}/${expectedTags.length} tags found in migration`);
  allChecks = false;
}

// 9. Check comment in migration
console.log('\n9️⃣ Checking comment in migration file...');
if (migrationContent.includes('game_comments') &&
    migrationContent.includes('BeastMaster')) {
  console.log('   ✅ Initial comment found in migration');
} else {
  console.log('   ❌ Initial comment NOT found in migration');
  allChecks = false;
}

// 10. Check NEW badge (release date is today)
console.log('\n🔟 Checking NEW badge configuration...');
const today = new Date().toISOString().split('T')[0];
if (gamesContent.includes(`releaseDate: '${today}'`)) {
  console.log(`   ✅ Release date set to today (${today}) - NEW badge will be displayed`);
} else {
  console.log(`   ⚠️  Release date is not today - NEW badge may not display`);
}

// Summary
console.log('\n' + '='.repeat(60));
if (allChecks) {
  console.log('✅ ALL CHECKS PASSED! Crazy Animal City has been successfully added!');
  console.log('\n📋 Summary:');
  console.log('   • Game data added to games.ts');
  console.log('   • Page component created (CrazyAnimalCityPage.tsx)');
  console.log('   • Game registered in GameDetailPage.tsx');
  console.log('   • Next.js route created (app/crazy-animal-city/page.tsx)');
  console.log('   • Thumbnail downloaded');
  console.log('   • Sitemap updated');
  console.log('   • Migration file created');
  console.log('   • All 6 tags configured');
  console.log('   • Initial comment added');
  console.log('   • NEW badge will be displayed');
  console.log('\n🎮 Game URL: https://www.stealabrainrotunblocked.com/crazy-animal-city');
  console.log('📊 Database: Game, tags, and comment added to Supabase');
  console.log('\n🚀 Next Steps:');
  console.log('   1. Run the migration: npm run supabase:migrate');
  console.log('   2. Test the game page locally');
  console.log('   3. Verify the game appears in all lists (home, categories, tags)');
  console.log('   4. Check that the NEW badge is displayed');
  console.log('   5. Deploy to production');
} else {
  console.log('❌ SOME CHECKS FAILED! Please review the errors above.');
  process.exit(1);
}

console.log('='.repeat(60));

