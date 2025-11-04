#!/usr/bin/env node
/**
 * Verification script for Sausage Flip game addition
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Sausage Flip Game Addition...\n');

let allChecks = true;

// 1. Check games.ts
console.log('1️⃣ Checking src/data/games.ts...');
const gamesPath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf-8');
if (gamesContent.includes("name: 'Sausage Flip'") &&
    gamesContent.includes("slug: 'sausage-flip'") &&
    gamesContent.includes("releaseDate: '2025-11-04'") &&
    gamesContent.includes("url: 'https://lnahtml.github.io/a6/sausage-flip'")) {
  console.log('   ✅ Game added to games.ts');
} else {
  console.log('   ❌ Game NOT found in games.ts');
  allChecks = false;
}

// 2. Check tags
console.log('\n2️⃣ Checking game tags...');
const expectedTags = ['Action', 'Arcade', 'Physics', 'Casual', 'Skill', 'Funny', 'Timing'];
const missingTags = expectedTags.filter(tag => !gamesContent.includes(`'${tag}'`));
if (missingTags.length === 0) {
  console.log('   ✅ All tags present:', expectedTags.join(', '));
} else {
  console.log('   ❌ Missing tags:', missingTags.join(', '));
  allChecks = false;
}

// 3. Check thumbnail
console.log('\n3️⃣ Checking thumbnail...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/sausage-flip.png');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log('   ❌ Thumbnail NOT found');
  allChecks = false;
}

// 4. Check game page component
console.log('\n4️⃣ Checking game page component...');
const gamePagePath = path.join(__dirname, '../src/pages/SausageFlipPage.tsx');
if (fs.existsSync(gamePagePath)) {
  const pageContent = fs.readFileSync(gamePagePath, 'utf-8');
  
  // Check for SEO elements
  const hasSEO = pageContent.includes("slug: 'sausage-flip'") &&
                 pageContent.includes('Sausage Flip') &&
                 pageContent.includes('<h2') &&
                 pageContent.includes('GameDetailTemplate');
  
  // Count keyword density (approximate)
  const keywordCount = (pageContent.match(/Sausage Flip/gi) || []).length;
  const wordCount = pageContent.split(/\s+/).length;
  const density = ((keywordCount / wordCount) * 100).toFixed(2);
  
  console.log(`   ✅ Game page component exists`);
  console.log(`   📊 Keyword "Sausage Flip" appears ${keywordCount} times`);
  console.log(`   📊 Keyword density: ${density}% (target: ~2%)`);
  
  if (parseFloat(density) < 1.5) {
    console.log('   ⚠️  Warning: Keyword density below 2%');
  }
  
  if (!hasSEO) {
    console.log('   ⚠️  Warning: Missing some SEO elements');
  }
} else {
  console.log('   ❌ Game page component NOT found');
  allChecks = false;
}

// 5. Check GameDetailPage.tsx registration
console.log('\n5️⃣ Checking GameDetailPage.tsx registration...');
const gameDetailPagePath = path.join(__dirname, '../src/pages/GameDetailPage.tsx');
const gameDetailContent = fs.readFileSync(gameDetailPagePath, 'utf-8');
if (gameDetailContent.includes("'sausage-flip': lazy(() => import('./SausageFlipPage'))")) {
  console.log('   ✅ Game registered in GameDetailPage.tsx');
} else {
  console.log('   ❌ Game NOT registered in GameDetailPage.tsx');
  allChecks = false;
}

// 6. Check Supabase migration
console.log('\n6️⃣ Checking Supabase migration...');
const migrationPath = path.join(__dirname, '../supabase/migrations/20251104_add_sausage_flip.sql');
if (fs.existsSync(migrationPath)) {
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  
  const hasGameInsert = migrationContent.includes("INSERT INTO games") &&
                        migrationContent.includes("'sausage-flip'");
  const hasTagsInsert = migrationContent.includes("INSERT INTO tags");
  const hasGameTagsInsert = migrationContent.includes("INSERT INTO game_tags");
  const hasCommentInsert = migrationContent.includes("INSERT INTO game_comments") &&
                          migrationContent.includes("comment_text");
  
  console.log('   ✅ Migration file exists');
  console.log(`   ${hasGameInsert ? '✅' : '❌'} Game insert statement`);
  console.log(`   ${hasTagsInsert ? '✅' : '❌'} Tags insert statement`);
  console.log(`   ${hasGameTagsInsert ? '✅' : '❌'} Game-tags association`);
  console.log(`   ${hasCommentInsert ? '✅' : '❌'} Comment insert statement`);
  
  if (!hasGameInsert || !hasTagsInsert || !hasGameTagsInsert || !hasCommentInsert) {
    allChecks = false;
  }
} else {
  console.log('   ❌ Migration file NOT found');
  allChecks = false;
}

// 7. Check sitemap-games.xml
console.log('\n7️⃣ Checking sitemap-games.xml...');
const sitemapGamesPath = path.join(__dirname, '../public/sitemap-games.xml');
const sitemapGamesContent = fs.readFileSync(sitemapGamesPath, 'utf-8');
if (sitemapGamesContent.includes('sausage-flip') &&
    sitemapGamesContent.includes('2025-11-04')) {
  console.log('   ✅ Game added to sitemap-games.xml');
} else {
  console.log('   ❌ Game NOT found in sitemap-games.xml');
  allChecks = false;
}

// 8. Check sitemap-images.xml
console.log('\n8️⃣ Checking sitemap-images.xml...');
const sitemapImagesPath = path.join(__dirname, '../public/sitemap-images.xml');
const sitemapImagesContent = fs.readFileSync(sitemapImagesPath, 'utf-8');
if (sitemapImagesContent.includes('sausage-flip')) {
  console.log('   ✅ Game image added to sitemap-images.xml');
} else {
  console.log('   ❌ Game image NOT found in sitemap-images.xml');
  allChecks = false;
}

// 9. Check sitemap-tags.xml
console.log('\n9️⃣ Checking sitemap-tags.xml...');
const sitemapTagsPath = path.join(__dirname, '../public/sitemap-tags.xml');
const sitemapTagsContent = fs.readFileSync(sitemapTagsPath, 'utf-8');
const updatedTags = ['action', 'arcade', 'physics', 'casual', 'skill', 'funny', 'timing'];
const tagsUpdated = updatedTags.every(tag => 
  sitemapTagsContent.includes(`/tag/${tag}`)
);
if (tagsUpdated) {
  console.log('   ✅ All relevant tags present in sitemap-tags.xml');
} else {
  console.log('   ⚠️  Some tags may be missing from sitemap-tags.xml');
}

// 10. Check NEW badge eligibility
console.log('\n🔟 Checking NEW badge eligibility...');
const releaseDate = new Date('2025-11-04');
const today = new Date();
const daysDiff = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
if (daysDiff <= 7) {
  console.log(`   ✅ NEW badge will be displayed (${daysDiff} days old, within 7-day window)`);
} else {
  console.log(`   ⚠️  NEW badge will NOT be displayed (${daysDiff} days old, exceeds 7-day window)`);
}

// Summary
console.log('\n' + '='.repeat(60));
if (allChecks) {
  console.log('✅ All checks passed! Sausage Flip game is ready.');
  console.log('\n📋 Next steps:');
  console.log('1. Run Supabase migration (via API or Dashboard)');
  console.log('2. Verify data in Supabase database');
  console.log('3. Test game page locally: http://localhost:3000/sausage-flip');
  console.log('4. Check game appears in:');
  console.log('   - Homepage');
  console.log('   - /tag/action');
  console.log('   - /tag/arcade');
  console.log('   - /tag/physics');
  console.log('   - /tag/casual');
  console.log('   - /tag/skill');
  console.log('   - /tag/funny');
  console.log('   - /tag/timing');
  process.exit(0);
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}

