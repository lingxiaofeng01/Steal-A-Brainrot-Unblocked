#!/usr/bin/env node
/**
 * Verification script for Bike Xtreme game addition
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Bike Xtreme Addition...\n');

let allChecks = true;

// 1. Check games.ts
console.log('1️⃣ Checking src/data/games.ts...');
const gamesPath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf-8');

if (gamesContent.includes("name: 'Bike Xtreme'") &&
    gamesContent.includes("slug: 'bike-xtreme'") &&
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
const pagePath = path.join(__dirname, '../src/pages/BikeXtremePage.tsx');
if (fs.existsSync(pagePath)) {
  console.log('   ✅ BikeXtremePage.tsx exists');
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  if (pageContent.includes("title: 'Bike Xtreme'") &&
      pageContent.includes("slug: 'bike-xtreme'")) {
    console.log('   ✅ Page component has correct game data');
    
    // Check for SEO elements
    if (pageContent.includes('<h2') && pageContent.includes('<h3')) {
      console.log('   ✅ Page has proper H2 and H3 tags');
    }
    
    // Check keyword density (rough estimate)
    const bikeXtremeCount = (pageContent.match(/Bike Xtreme/g) || []).length;
    const totalWords = pageContent.split(/\s+/).length;
    const keywordDensity = ((bikeXtremeCount / totalWords) * 100).toFixed(2);
    console.log(`   ℹ️  Keyword "Bike Xtreme" appears ${bikeXtremeCount} times (${keywordDensity}% density)`);
    if (keywordDensity >= 2.0) {
      console.log('   ✅ Keyword density meets 2% requirement');
    } else {
      console.log('   ⚠️  Keyword density below 2% target');
    }
  } else {
    console.log('   ❌ Page component missing game data');
    allChecks = false;
  }
} else {
  console.log('   ❌ BikeXtremePage.tsx NOT found');
  allChecks = false;
}

// 3. Check GameDetailPage.tsx registration
console.log('\n3️⃣ Checking GameDetailPage.tsx registration...');
const detailPagePath = path.join(__dirname, '../src/pages/GameDetailPage.tsx');
const detailPageContent = fs.readFileSync(detailPagePath, 'utf-8');
if (detailPageContent.includes("'bike-xtreme': lazy(() => import('./BikeXtremePage'))")) {
  console.log('   ✅ Game registered in GameDetailPage.tsx');
} else {
  console.log('   ❌ Game NOT registered in GameDetailPage.tsx');
  allChecks = false;
}

// 4. Check thumbnail image
console.log('\n4️⃣ Checking thumbnail image...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/bike-xtreme.webp');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log('   ⚠️  Thumbnail NOT found (may need manual download)');
}

// 5. Check sitemap-games.xml
console.log('\n5️⃣ Checking sitemap-games.xml...');
const sitemapPath = path.join(__dirname, '../public/sitemap-games.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
if (sitemapContent.includes('<loc>https://www.stealabrainrotunblocked.com/bike-xtreme</loc>')) {
  console.log('   ✅ Game URL found in sitemap-games.xml');
} else {
  console.log('   ❌ Game URL NOT found in sitemap-games.xml');
  allChecks = false;
}

// 6. Check sitemap-images.xml
console.log('\n6️⃣ Checking sitemap-images.xml...');
const sitemapImagesPath = path.join(__dirname, '../public/sitemap-images.xml');
const sitemapImagesContent = fs.readFileSync(sitemapImagesPath, 'utf-8');
if (sitemapImagesContent.includes('<loc>https://www.stealabrainrotunblocked.com/bike-xtreme</loc>')) {
  console.log('   ✅ Game image found in sitemap-images.xml');
} else {
  console.log('   ❌ Game image NOT found in sitemap-images.xml');
  allChecks = false;
}

// 7. Check Supabase migration script
console.log('\n7️⃣ Checking Supabase migration script...');
const sqlPath = path.join(__dirname, '../supabase/migrations/20251104_add_bike_xtreme.sql');
if (fs.existsSync(sqlPath)) {
  console.log('   ✅ 20251104_add_bike_xtreme.sql found');
  const sqlContent = fs.readFileSync(sqlPath, 'utf-8');
  
  // Check for game record
  if (sqlContent.includes("slug,") && sqlContent.includes("'bike-xtreme'")) {
    console.log('   ✅ SQL script has game record insertion');
  }
  
  // Check for tags
  if (sqlContent.includes("INSERT INTO tags")) {
    console.log('   ✅ SQL script has tags insertion');
  }
  
  // Check for game_tags association
  if (sqlContent.includes("INSERT INTO game_tags") && sqlContent.includes("SELECT g.id, t.id")) {
    console.log('   ✅ SQL script has game_tags association (using UUID)');
  }
  
  // Check for comment
  if (sqlContent.includes("INSERT INTO game_comments") && sqlContent.includes("comment_text")) {
    console.log('   ✅ SQL script has comment insertion (correct field name)');
  }
} else {
  console.log('   ❌ 20251104_add_bike_xtreme.sql NOT found');
  allChecks = false;
}

// 8. Check NEW badge eligibility
console.log('\n8️⃣ Checking NEW badge eligibility...');
const releaseDate = new Date('2025-11-04');
const today = new Date();
const diffDays = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
if (diffDays <= 7) {
  console.log(`   ✅ Game is ${diffDays} days old - NEW badge will be displayed`);
} else {
  console.log(`   ⚠️  Game is ${diffDays} days old - NEW badge will NOT be displayed`);
}

// 9. Check game tags
console.log('\n9️⃣ Checking game tags...');
const expectedTags = ['Sports', 'Driving', 'Racing', 'Action', 'Casual', 'Physics', '2D', 'Arcade', 'Skill'];
let tagsFound = 0;
expectedTags.forEach(tag => {
  if (gamesContent.includes(`'${tag}'`)) {
    tagsFound++;
  }
});
console.log(`   ✅ Found ${tagsFound}/${expectedTags.length} expected tags`);

// 10. Check sitemap-tags.xml updates
console.log('\n🔟 Checking sitemap-tags.xml updates...');
const sitemapTagsPath = path.join(__dirname, '../public/sitemap-tags.xml');
const sitemapTagsContent = fs.readFileSync(sitemapTagsPath, 'utf-8');
const updatedTags = ['sports', 'driving', 'racing', 'action', 'casual', 'physics', '2d', 'arcade', 'skill'];
let updatedTagsFound = 0;
updatedTags.forEach(tag => {
  if (sitemapTagsContent.includes(`<loc>https://www.stealabrainrotunblocked.com/tag/${tag}</loc>`)) {
    updatedTagsFound++;
  }
});
console.log(`   ✅ Found ${updatedTagsFound}/${updatedTags.length} tag pages in sitemap-tags.xml`);

// Final summary
console.log('\n' + '='.repeat(50));
if (allChecks) {
  console.log('✅ All checks passed! Bike Xtreme is ready!');
  console.log('\n📋 Next steps:');
  console.log('   1. Run the Supabase migration:');
  console.log('      supabase/migrations/20251104_add_bike_xtreme.sql');
  console.log('   2. Verify data in Supabase Dashboard');
  console.log('   3. Test the game page locally: http://localhost:3000/bike-xtreme');
  console.log('   4. Verify NEW badge appears (within 7 days of release)');
  console.log('   5. Check game appears in:');
  console.log('      - Homepage');
  console.log('      - All Games page');
  console.log('      - Hot Games page');
  console.log('      - Tag pages (Sports, Driving, Racing, etc.)');
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}
console.log('='.repeat(50) + '\n');

