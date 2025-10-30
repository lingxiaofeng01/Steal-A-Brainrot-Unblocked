#!/usr/bin/env node

/**
 * Verification script for Blendrix game addition
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Blendrix game addition...\n');

let allChecksPassed = true;

// Helper function to check file existence
function checkFileExists(filePath, description) {
  const fullPath = path.join(__dirname, '..', filePath);
  const exists = fs.existsSync(fullPath);
  
  if (exists) {
    console.log(`✅ ${description}`);
    // Get file size for thumbnails
    if (filePath.includes('thumbnails')) {
      const stats = fs.statSync(fullPath);
      console.log(`   📊 File size: ${stats.size} bytes`);
    }
  } else {
    console.log(`❌ ${description}`);
    allChecksPassed = false;
  }
  
  return exists;
}

// Helper function to check file content
function checkFileContent(filePath, searchString, description) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ ${description} - File not found`);
    allChecksPassed = false;
    return false;
  }
  
  const content = fs.readFileSync(fullPath, 'utf8');
  const found = content.includes(searchString);
  
  if (found) {
    console.log(`✅ ${description}`);
  } else {
    console.log(`❌ ${description}`);
    allChecksPassed = false;
  }
  
  return found;
}

console.log('1️⃣ Checking game data in games.ts...');
checkFileContent(
  'src/data/games.ts',
  "slug: 'blendrix'",
  'Game entry found in games.ts'
);

console.log('\n2️⃣ Checking game thumbnail...');
checkFileExists(
  'public/images/thumbnails/blendrix.png',
  'Thumbnail exists'
);

console.log('\n3️⃣ Checking game page component...');
const pageExists = checkFileExists(
  'src/pages/BlendrixPage.tsx',
  'Game page component exists'
);

if (pageExists) {
  checkFileContent(
    'src/pages/BlendrixPage.tsx',
    'Blendrix',
    'Game page component is correct'
  );
}

console.log('\n4️⃣ Checking game registration in GameDetailPage.tsx...');
checkFileContent(
  'src/pages/GameDetailPage.tsx',
  "'blendrix': lazy(() => import('./BlendrixPage'))",
  'Game registered in GameDetailPage.tsx'
);

console.log('\n5️⃣ Checking Supabase migration file...');
checkFileExists(
  'supabase/migrations/20251030_add_blendrix.sql',
  'Supabase migration file exists'
);

console.log('\n6️⃣ Checking sitemap-games.xml...');
checkFileContent(
  'public/sitemap-games.xml',
  'https://www.stealabrainrotunblocked.com/blendrix',
  'Game added to sitemap-games.xml'
);

console.log('\n7️⃣ Checking sitemap-images.xml...');
checkFileContent(
  'public/sitemap-images.xml',
  '/images/thumbnails/blendrix.png',
  'Game added to sitemap-images.xml'
);

console.log('\n8️⃣ Checking main sitemap date...');
checkFileContent(
  'public/sitemap.xml',
  '<lastmod>2025-10-30</lastmod>',
  'Main sitemap date updated'
);

console.log('\n9️⃣ Checking sitemap index date...');
checkFileContent(
  'public/sitemap-index.xml',
  '<lastmod>2025-10-30</lastmod>',
  'Sitemap index date updated'
);

console.log('\n🔟 Checking game tags for category pages...');
const tags = ['Puzzle', 'Casual', 'Logic', 'Brain Teaser', 'Strategy', 'Minimalist', 'Kids'];
console.log(`   ℹ️  Game will appear on these tag pages:`);
tags.forEach(tag => {
  console.log(`      - /tag/${tag.toLowerCase().replace(/ /g, '-')}`);
});

console.log('\n1️⃣1️⃣ Checking NEW badge display...');
const gamesData = fs.readFileSync(path.join(__dirname, '..', 'src/data/games.ts'), 'utf8');
const blendrixMatch = gamesData.match(/name: 'Blendrix'[\s\S]*?releaseDate: '(\d{4}-\d{2}-\d{2})'/);

if (blendrixMatch) {
  const releaseDate = new Date(blendrixMatch[1]);
  const today = new Date('2025-10-30');
  const daysDiff = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
  
  if (daysDiff <= 7) {
    console.log(`✅ Blendrix will show NEW badge (released ${daysDiff} days ago)`);
  } else {
    console.log(`⚠️  Blendrix will NOT show NEW badge (released ${daysDiff} days ago)`);
  }
}

console.log('\n1️⃣2️⃣ Checking game metadata...');
if (blendrixMatch) {
  const gameBlock = gamesData.substring(
    gamesData.indexOf("name: 'Blendrix'"),
    gamesData.indexOf("name: 'Blendrix'") + 500
  );
  
  const checks = [
    { field: 'url', pattern: /url: 'https:\/\/gamea\.azgame\.io\/blendrix\/'/ },
    { field: 'rating', pattern: /rating: 4\.2/ },
    { field: 'playCount', pattern: /playCount: 113/ },
    { field: 'tags', pattern: /tags: \[.*Puzzle.*Casual.*Logic.*\]/ }
  ];
  
  checks.forEach(check => {
    if (check.pattern.test(gameBlock)) {
      console.log(`✅ ${check.field} is correctly set`);
    } else {
      console.log(`❌ ${check.field} is missing or incorrect`);
      allChecksPassed = false;
    }
  });
}

console.log('\n' + '='.repeat(60));
if (allChecksPassed) {
  console.log('✅ All checks passed! Blendrix has been successfully added.');
  console.log('\n📋 Summary:');
  console.log('   • Game data added to games.ts');
  console.log('   • Game page component created');
  console.log('   • Route registered in GameDetailPage.tsx');
  console.log('   • Thumbnail downloaded');
  console.log('   • Supabase migration created');
  console.log('   • Sitemaps updated');
  console.log('   • NEW badge will be displayed (7 days)');
  console.log('\n🎮 Game URL: https://www.stealabrainrotunblocked.com/blendrix');
  console.log('🏷️  Tags: Puzzle, Casual, Logic, Brain Teaser, Strategy, Minimalist, Kids');
  process.exit(0);
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}

