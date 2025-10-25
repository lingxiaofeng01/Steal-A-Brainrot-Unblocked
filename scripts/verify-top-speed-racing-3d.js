#!/usr/bin/env node
/**
 * Verification script for Top Speed Racing 3D game addition
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Top Speed Racing 3D Addition...\n');

let allChecks = true;

// 1. Check games.ts
console.log('1️⃣ Checking src/data/games.ts...');
const gamesPath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf-8');
if (gamesContent.includes("name: 'Top Speed Racing 3D'") && 
    gamesContent.includes("slug: 'top-speed-racing-3d'") &&
    gamesContent.includes("releaseDate: '2025-10-25'") &&
    gamesContent.includes("tags: ['Racing', '3D', 'Car', 'Speed', 'Driving', 'Sports']")) {
  console.log('   ✅ Game entry found in games.ts');
} else {
  console.log('   ❌ Game entry NOT found in games.ts');
  allChecks = false;
}

// 2. Check thumbnail
console.log('\n2️⃣ Checking thumbnail image...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/top-speed-racing-3d.webp');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${stats.size} bytes)`);
} else {
  console.log('   ❌ Thumbnail NOT found');
  allChecks = false;
}

// 3. Check game page component
console.log('\n3️⃣ Checking game page component...');
const gamePagePath = path.join(__dirname, '../src/pages/TopSpeedRacing3DPage.tsx');
if (fs.existsSync(gamePagePath)) {
  const pageContent = fs.readFileSync(gamePagePath, 'utf-8');
  if (pageContent.includes("slug: 'top-speed-racing-3d'") &&
      pageContent.includes('Top Speed Racing 3D') &&
      pageContent.includes('gamesonline86.github.io/top-speed-racing-3d')) {
    console.log('   ✅ Game page component exists and is correct');
  } else {
    console.log('   ❌ Game page component has incorrect content');
    allChecks = false;
  }
} else {
  console.log('   ❌ Game page component NOT found');
  allChecks = false;
}

// 4. Check GameDetailPage.tsx registration
console.log('\n4️⃣ Checking GameDetailPage.tsx registration...');
const gameDetailPagePath = path.join(__dirname, '../src/pages/GameDetailPage.tsx');
const gameDetailContent = fs.readFileSync(gameDetailPagePath, 'utf-8');
if (gameDetailContent.includes("'top-speed-racing-3d': lazy(() => import('./TopSpeedRacing3DPage'))")) {
  console.log('   ✅ Game registered in GameDetailPage.tsx');
} else {
  console.log('   ❌ Game NOT registered in GameDetailPage.tsx');
  allChecks = false;
}

// 5. Check Supabase migration
console.log('\n5️⃣ Checking Supabase migration...');
const migrationPath = path.join(__dirname, '../supabase/migrations/20251025000004_add_top_speed_racing_3d.sql');
if (fs.existsSync(migrationPath)) {
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  if (migrationContent.includes("'top-speed-racing-3d'") &&
      migrationContent.includes('SpeedDemon')) {
    console.log('   ✅ Supabase migration file exists');
  } else {
    console.log('   ❌ Supabase migration has incorrect content');
    allChecks = false;
  }
} else {
  console.log('   ❌ Supabase migration NOT found');
  allChecks = false;
}

// 6. Check sitemap-games.xml
console.log('\n6️⃣ Checking public/sitemap-games.xml...');
const sitemapGamesPath = path.join(__dirname, '../public/sitemap-games.xml');
const sitemapGamesContent = fs.readFileSync(sitemapGamesPath, 'utf-8');
if (sitemapGamesContent.includes('top-speed-racing-3d') &&
    sitemapGamesContent.includes('Top Speed Racing 3D')) {
  console.log('   ✅ Game added to sitemap-games.xml');
} else {
  console.log('   ❌ Game NOT found in sitemap-games.xml');
  allChecks = false;
}

// 7. Check sitemap-images.xml
console.log('\n7️⃣ Checking public/sitemap-images.xml...');
const sitemapImagesPath = path.join(__dirname, '../public/sitemap-images.xml');
const sitemapImagesContent = fs.readFileSync(sitemapImagesPath, 'utf-8');
if (sitemapImagesContent.includes('top-speed-racing-3d') &&
    sitemapImagesContent.includes('Top Speed Racing 3D')) {
  console.log('   ✅ Game added to sitemap-images.xml');
} else {
  console.log('   ❌ Game NOT found in sitemap-images.xml');
  allChecks = false;
}

// 8. Check sitemap.xml date
console.log('\n8️⃣ Checking public/sitemap.xml date...');
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
if (sitemapContent.includes('<lastmod>2025-10-25</lastmod>')) {
  console.log('   ✅ Main sitemap date updated');
} else {
  console.log('   ❌ Main sitemap date NOT updated');
  allChecks = false;
}

// 9. Check sitemap-index.xml date
console.log('\n9️⃣ Checking public/sitemap-index.xml date...');
const sitemapIndexPath = path.join(__dirname, '../public/sitemap-index.xml');
const sitemapIndexContent = fs.readFileSync(sitemapIndexPath, 'utf-8');
if (sitemapIndexContent.includes('<lastmod>2025-10-25</lastmod>')) {
  console.log('   ✅ Sitemap index date updated');
} else {
  console.log('   ❌ Sitemap index date NOT updated');
  allChecks = false;
}

// Final summary
console.log('\n' + '='.repeat(50));
if (allChecks) {
  console.log('✅ All checks passed! Top Speed Racing 3D has been successfully added.');
  console.log('\n📋 Next steps:');
  console.log('1. Run the Supabase migration:');
  console.log('   - Go to Supabase Dashboard > SQL Editor');
  console.log('   - Execute: supabase/migrations/20251025000004_add_top_speed_racing_3d.sql');
  console.log('2. Test the game page: /top-speed-racing-3d');
  console.log('3. Verify the game appears in:');
  console.log('   - Homepage (as newest game with NEW badge)');
  console.log('   - All Games page');
  console.log('   - Racing tag page');
  console.log('   - Related games sections');
  process.exit(0);
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}

