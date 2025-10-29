const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Crazy Chicken 3D integration...\n');

let hasErrors = false;

// 1. Check game data in games.ts
console.log('1️⃣ Checking game data...');
const gamesPath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf8');

if (gamesContent.includes("name: 'Crazy Chicken 3D'") && 
    gamesContent.includes("slug: 'crazy-chicken-3d'") &&
    gamesContent.includes("releaseDate: '2025-10-29'")) {
  console.log('   ✅ Game data found in games.ts');
  
  // Check if it's at the top (first game)
  const gamesMatch = gamesContent.match(/export const allGames: Game\[\] = \[([\s\S]*?)\{/);
  if (gamesMatch && gamesMatch[1].trim() === '') {
    console.log('   ✅ Game is at position 0 (newest)');
  } else {
    console.log('   ⚠️  Game might not be at position 0');
  }
  
  // Check tags
  if (gamesContent.includes("'Action'") && 
      gamesContent.includes("'Survival'") &&
      gamesContent.includes("'Physics'") &&
      gamesContent.includes("'Battle Royale'") &&
      gamesContent.includes("'Animal'") &&
      gamesContent.includes("'Crazy Cattle 3D'")) {
    console.log('   ✅ All 6 tags present');
  } else {
    console.log('   ❌ Missing some tags');
    hasErrors = true;
  }
  
  // Check rating
  if (gamesContent.includes('rating: 4.3')) {
    console.log('   ✅ Rating set to 4.3');
  } else {
    console.log('   ⚠️  Rating might be incorrect');
  }
} else {
  console.log('   ❌ Game data not found or incomplete');
  hasErrors = true;
}

// 2. Check game page component
console.log('\n2️⃣ Checking game page component...');
const pagePath = path.join(__dirname, '../src/pages/CrazyChicken3DPage.tsx');
if (fs.existsSync(pagePath)) {
  const pageContent = fs.readFileSync(pagePath, 'utf8');
  
  if (pageContent.includes("slug: 'crazy-chicken-3d'") &&
      pageContent.includes("title: 'Crazy Chicken 3D'")) {
    console.log('   ✅ Game page component exists');
    
    // Check word count (approximate)
    const wordCount = pageContent.split(/\s+/).length;
    if (wordCount > 1500) {
      console.log(`   ✅ Content is substantial (${wordCount} words)`);
    } else {
      console.log(`   ⚠️  Content might be short (${wordCount} words)`);
    }
  } else {
    console.log('   ❌ Game page component has incorrect data');
    hasErrors = true;
  }
} else {
  console.log('   ❌ Game page component not found');
  hasErrors = true;
}

// 3. Check route registration
console.log('\n3️⃣ Checking route registration...');
const routePath = path.join(__dirname, '../src/pages/GameDetailPage.tsx');
const routeContent = fs.readFileSync(routePath, 'utf8');

if (routeContent.includes("'crazy-chicken-3d': lazy(() => import('./CrazyChicken3DPage'))")) {
  console.log('   ✅ Route registered in GameDetailPage.tsx');
} else {
  console.log('   ❌ Route not registered');
  hasErrors = true;
}

// 4. Check thumbnail
console.log('\n4️⃣ Checking thumbnail...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/crazy-chicken-3d.webp');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log('   ❌ Thumbnail not found');
  hasErrors = true;
}

// 5. Check migration file
console.log('\n5️⃣ Checking migration file...');
const migrationPath = path.join(__dirname, '../supabase/migrations/20251029_add_crazy_chicken_3d.sql');
if (fs.existsSync(migrationPath)) {
  const migrationContent = fs.readFileSync(migrationPath, 'utf8');
  if (migrationContent.includes("'crazy-chicken-3d'") &&
      migrationContent.includes('ChickenChampion')) {
    console.log('   ✅ Migration file exists and looks correct');
  } else {
    console.log('   ⚠️  Migration file exists but might be incomplete');
  }
} else {
  console.log('   ❌ Migration file not found');
  hasErrors = true;
}

// 6. Check sitemap-games.xml
console.log('\n6️⃣ Checking sitemap-games.xml...');
const sitemapGamesPath = path.join(__dirname, '../public/sitemap-games.xml');
const sitemapGamesContent = fs.readFileSync(sitemapGamesPath, 'utf8');

if (sitemapGamesContent.includes('crazy-chicken-3d') &&
    sitemapGamesContent.includes('2025-10-29')) {
  console.log('   ✅ Game added to sitemap-games.xml');
  
  // Check if it's at the top
  const firstGameMatch = sitemapGamesContent.match(/<url>\s*<loc>https:\/\/www\.stealabrainrotunblocked\.com\/([\w-]+)<\/loc>/);
  if (firstGameMatch && firstGameMatch[1] === 'crazy-chicken-3d') {
    console.log('   ✅ Game is first in sitemap');
  } else {
    console.log('   ⚠️  Game might not be first in sitemap');
  }
} else {
  console.log('   ❌ Game not found in sitemap-games.xml');
  hasErrors = true;
}

// 7. Check sitemap-images.xml
console.log('\n7️⃣ Checking sitemap-images.xml...');
const sitemapImagesPath = path.join(__dirname, '../public/sitemap-images.xml');
const sitemapImagesContent = fs.readFileSync(sitemapImagesPath, 'utf8');

if (sitemapImagesContent.includes('crazy-chicken-3d.webp')) {
  console.log('   ✅ Game image added to sitemap-images.xml');
} else {
  console.log('   ❌ Game image not found in sitemap-images.xml');
  hasErrors = true;
}

// Summary
console.log('\n' + '='.repeat(50));
if (hasErrors) {
  console.log('❌ Verification completed with errors');
  process.exit(1);
} else {
  console.log('✅ All checks passed!');
  console.log('\n📋 Summary:');
  console.log('  - Game data: ✅');
  console.log('  - Game page: ✅');
  console.log('  - Route: ✅');
  console.log('  - Thumbnail: ✅');
  console.log('  - Migration: ✅');
  console.log('  - Sitemaps: ✅');
  console.log('\n🎮 Crazy Chicken 3D is ready!');
}

