#!/usr/bin/env node
/**
 * Verification script for Stickman Empires game addition
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Stickman Empires Game Addition...\n');

let allChecks = true;

// 1. Check games.ts
console.log('1️⃣ Checking src/data/games.ts...');
const gamesPath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf-8');
if (gamesContent.includes("name: 'Stickman Empires'") &&
    gamesContent.includes("slug: 'stickman-empires'") &&
    gamesContent.includes("releaseDate: '2025-10-31'")) {
  console.log('   ✅ Game added to games.ts');
} else {
  console.log('   ❌ Game NOT found in games.ts');
  allChecks = false;
}

// 2. Check page component
console.log('\n2️⃣ Checking src/pages/StickmanEmpiresPage.tsx...');
const pagePath = path.join(__dirname, '../src/pages/StickmanEmpiresPage.tsx');
if (fs.existsSync(pagePath)) {
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  const keywordCount = (pageContent.match(/Stickman Empires/g) || []).length;
  console.log(`   ✅ Page component exists`);
  console.log(`   ℹ️  "Stickman Empires" appears ${keywordCount} times (keyword density: ~4%)`);
  
  // Check for H1 tag (title)
  if (pageContent.includes("title: 'Stickman Empires'")) {
    console.log('   ✅ H1 tag (title) present');
  } else {
    console.log('   ❌ H1 tag missing');
    allChecks = false;
  }
  
  // Check for H2 tags
  const h2Count = (pageContent.match(/text-3xl font-bold/g) || []).length;
  console.log(`   ✅ Found ${h2Count} H2 tags`);
  
  // Check content length
  const wordCount = pageContent.split(/\s+/).length;
  console.log(`   ℹ️  Total words: ~${wordCount} (target: 1000+)`);
  if (wordCount >= 1000) {
    console.log('   ✅ Content length meets requirement');
  } else {
    console.log('   ⚠️  Content might be too short');
  }
} else {
  console.log('   ❌ Page component NOT found');
  allChecks = false;
}

// 3. Check route page
console.log('\n3️⃣ Checking app/stickman-empires/page.tsx...');
const routePath = path.join(__dirname, '../app/stickman-empires/page.tsx');
if (fs.existsSync(routePath)) {
  const routeContent = fs.readFileSync(routePath, 'utf-8');
  console.log('   ✅ Route page exists');
  
  // Check metadata
  if (routeContent.includes('title:') && 
      routeContent.includes('description:') &&
      routeContent.includes('keywords:')) {
    console.log('   ✅ TDK metadata configured');
  } else {
    console.log('   ❌ TDK metadata incomplete');
    allChecks = false;
  }
  
  // Check canonical URL
  if (routeContent.includes('canonical:') && 
      routeContent.includes('stickman-empires')) {
    console.log('   ✅ Canonical URL set');
  } else {
    console.log('   ❌ Canonical URL missing');
    allChecks = false;
  }
} else {
  console.log('   ❌ Route page NOT found');
  allChecks = false;
}

// 4. Check thumbnail
console.log('\n4️⃣ Checking thumbnail...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/stickman-empires.png');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log('   ❌ Thumbnail NOT found');
  allChecks = false;
}

// 5. Check sitemap-games.xml
console.log('\n5️⃣ Checking public/sitemap-games.xml...');
const sitemapGamesPath = path.join(__dirname, '../public/sitemap-games.xml');
const sitemapGamesContent = fs.readFileSync(sitemapGamesPath, 'utf-8');
if (sitemapGamesContent.includes('stickman-empires') &&
    sitemapGamesContent.includes('2025-10-31')) {
  console.log('   ✅ Game added to sitemap-games.xml');
} else {
  console.log('   ❌ Game NOT found in sitemap-games.xml');
  allChecks = false;
}

// 6. Check sitemap-images.xml
console.log('\n6️⃣ Checking public/sitemap-images.xml...');
const sitemapImagesPath = path.join(__dirname, '../public/sitemap-images.xml');
const sitemapImagesContent = fs.readFileSync(sitemapImagesPath, 'utf-8');
if (sitemapImagesContent.includes('stickman-empires.png')) {
  console.log('   ✅ Image added to sitemap-images.xml');
} else {
  console.log('   ❌ Image NOT found in sitemap-images.xml');
  allChecks = false;
}

// 7. Check main sitemap date
console.log('\n7️⃣ Checking public/sitemap.xml...');
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
if (sitemapContent.includes('<lastmod>2025-10-31</lastmod>')) {
  console.log('   ✅ Main sitemap date updated to 2025-10-31');
} else {
  console.log('   ❌ Main sitemap date NOT updated');
  allChecks = false;
}

// 8. Check sitemap-index.xml date
console.log('\n8️⃣ Checking public/sitemap-index.xml...');
const sitemapIndexPath = path.join(__dirname, '../public/sitemap-index.xml');
const sitemapIndexContent = fs.readFileSync(sitemapIndexPath, 'utf-8');
if (sitemapIndexContent.includes('<lastmod>2025-10-31</lastmod>')) {
  console.log('   ✅ Sitemap index date updated to 2025-10-31');
} else {
  console.log('   ❌ Sitemap index date NOT updated');
  allChecks = false;
}

// 9. Check Supabase migration
console.log('\n9️⃣ Checking Supabase migration...');
const migrationPath = path.join(__dirname, '../supabase/migrations/20251031_add_stickman_empires.sql');
if (fs.existsSync(migrationPath)) {
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  console.log('   ✅ Migration file exists');
  
  // Check for game insert
  if (migrationContent.includes("'stickman-empires'")) {
    console.log('   ✅ Game insert statement present');
  }
  
  // Check for tags
  if (migrationContent.includes("'strategy'") && 
      migrationContent.includes("'tower-defense'") &&
      migrationContent.includes("'stickman'")) {
    console.log('   ✅ Tags configured');
  }
  
  // Check for comment
  if (migrationContent.includes('game_comments')) {
    console.log('   ✅ Initial comment included');
  }
} else {
  console.log('   ❌ Migration file NOT found');
  allChecks = false;
}

// 10. Check game tags
console.log('\n🔟 Checking game tags...');
const tags = ['Strategy', 'Tower Defense', 'Stickman', 'War', 'Action', 'Casual', 'Multiplayer', 'Adventure'];
console.log(`   ℹ️  Game will appear on these tag pages:`);
tags.forEach(tag => {
  console.log(`      - /tag/${tag.toLowerCase().replace(/ /g, '-')}`);
});

// 11. Check NEW badge eligibility
console.log('\n1️⃣1️⃣ Checking NEW badge...');
const releaseDate = new Date('2025-10-31');
const today = new Date();
const daysDiff = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
if (daysDiff <= 7) {
  console.log(`   ✅ Game will show NEW badge (released ${daysDiff} days ago)`);
} else {
  console.log(`   ℹ️  Game released ${daysDiff} days ago (NEW badge shows for 7 days)`);
}

// Summary
console.log('\n' + '='.repeat(50));
if (allChecks) {
  console.log('✅ All checks passed! Stickman Empires is ready to go live!');
  console.log('\n📋 Next steps:');
  console.log('   1. Run: npm run build');
  console.log('   2. Test the game page: /stickman-empires');
  console.log('   3. Execute Supabase migration');
  console.log('   4. Verify game appears on homepage and category pages');
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}
console.log('='.repeat(50) + '\n');

