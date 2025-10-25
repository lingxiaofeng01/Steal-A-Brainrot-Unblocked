#!/usr/bin/env node
/**
 * Verify Block Blast 3D game has been added correctly
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Block Blast 3D game addition...\n');

let allChecks = true;

// 1. Check games.ts file
console.log('1️⃣ Checking games.ts file...');
const gamesFile = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesFile, 'utf-8');

if (gamesContent.includes("name: 'Block Blast 3D'")) {
  console.log('   ✅ Block Blast 3D found in games.ts');
} else {
  console.log('   ❌ Block Blast 3D NOT found in games.ts');
  allChecks = false;
}

if (gamesContent.includes("slug: 'block-blast-3d'")) {
  console.log('   ✅ Slug is correct');
} else {
  console.log('   ❌ Slug is incorrect');
  allChecks = false;
}

if (gamesContent.includes("releaseDate: '2025-10-25'")) {
  console.log('   ✅ Release date is today (2025-10-25)');
} else {
  console.log('   ❌ Release date is incorrect');
  allChecks = false;
}

// 2. Check thumbnail
console.log('\n2️⃣ Checking thumbnail...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/block-blast-3d.webp');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${stats.size} bytes)`);
} else {
  console.log('   ❌ Thumbnail NOT found');
  allChecks = false;
}

// 3. Check game detail page
console.log('\n3️⃣ Checking game detail page...');
const pageFile = path.join(__dirname, '../src/pages/BlockBlast3DPage.tsx');
if (fs.existsSync(pageFile)) {
  const pageContent = fs.readFileSync(pageFile, 'utf-8');
  const wordCount = pageContent.split(/\s+/).length;
  console.log(`   ✅ BlockBlast3DPage.tsx exists (${wordCount} words)`);
  
  if (wordCount >= 1500) {
    console.log('   ✅ Content is detailed (1500+ words)');
  } else {
    console.log(`   ⚠️  Content might be short (${wordCount} words, expected 1500+)`);
  }
} else {
  console.log('   ❌ BlockBlast3DPage.tsx NOT found');
  allChecks = false;
}

// 4. Check sitemap
console.log('\n4️⃣ Checking sitemap...');
const sitemapFile = path.join(__dirname, '../public/sitemap-games.xml');
const sitemapContent = fs.readFileSync(sitemapFile, 'utf-8');

if (sitemapContent.includes('block-blast-3d')) {
  console.log('   ✅ Block Blast 3D found in sitemap');
} else {
  console.log('   ❌ Block Blast 3D NOT found in sitemap');
  allChecks = false;
}

if (sitemapContent.includes('<lastmod>2025-10-25</lastmod>')) {
  console.log('   ✅ Sitemap has correct date');
} else {
  console.log('   ⚠️  Sitemap date might be incorrect');
}

// 5. Check migration file
console.log('\n5️⃣ Checking migration file...');
const migrationFile = path.join(__dirname, '../supabase/migrations/20251025000001_add_block_blast_3d_comment.sql');
if (fs.existsSync(migrationFile)) {
  console.log('   ✅ Migration file exists');
} else {
  console.log('   ❌ Migration file NOT found');
  allChecks = false;
}

// 6. Check tags
console.log('\n6️⃣ Checking game tags...');
const expectedTags = ['Puzzle', '3D', 'Block', 'Strategy', 'Casual', 'Brain'];
let tagsFound = 0;
expectedTags.forEach(tag => {
  if (gamesContent.includes(`'${tag}'`)) {
    tagsFound++;
  }
});

if (tagsFound === expectedTags.length) {
  console.log(`   ✅ All ${expectedTags.length} tags found: ${expectedTags.join(', ')}`);
} else {
  console.log(`   ⚠️  Only ${tagsFound}/${expectedTags.length} tags found`);
}

// Final summary
console.log('\n' + '='.repeat(50));
if (allChecks) {
  console.log('✅ All checks passed! Block Blast 3D has been added successfully.');
  console.log('\n📝 Next steps:');
  console.log('   1. Test the game page: http://localhost:3000/block-blast-3d');
  console.log('   2. Verify NEW badge appears on the game');
  console.log('   3. Check that game appears in relevant tag pages');
  console.log('   4. Verify Supabase data was inserted correctly');
  console.log('   5. Test the game iframe loads properly');
} else {
  console.log('❌ Some checks failed. Please review the issues above.');
  process.exit(1);
}
console.log('='.repeat(50) + '\n');

