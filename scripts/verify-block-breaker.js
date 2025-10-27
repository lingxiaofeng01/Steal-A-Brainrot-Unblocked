#!/usr/bin/env node
/**
 * Verification script for Block Breaker game addition
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Block Breaker game addition...\n');

let allChecks = true;

// 1. Check game data in games.ts
console.log('1️⃣ Checking game data in src/data/games.ts...');
const gamesFilePath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesFilePath, 'utf-8');

if (gamesContent.includes("name: 'Block Breaker'")) {
  console.log('   ✅ Block Breaker found in games.ts');
  
  // Check all required fields
  const blockBreakerMatch = gamesContent.match(/\{\s*name:\s*'Block Breaker'[\s\S]*?\}/);
  if (blockBreakerMatch) {
    const gameData = blockBreakerMatch[0];
    
    const checks = [
      { field: 'slug', pattern: /slug:\s*'block-breaker'/ },
      { field: 'image', pattern: /image:\s*'\/images\/thumbnails\/block-breaker\.jpeg'/ },
      { field: 'url', pattern: /url:\s*'\/\/html5\.gamedistribution\.com/ },
      { field: 'releaseDate', pattern: /releaseDate:\s*'2025-10-27'/ },
      { field: 'tags', pattern: /tags:\s*\[.*'Arcade'.*'Action'.*'Skill'.*\]/ },
      { field: 'rating', pattern: /rating:\s*4\.5/ },
      { field: 'playCount', pattern: /playCount:\s*0/ }
    ];
    
    checks.forEach(check => {
      if (check.pattern.test(gameData)) {
        console.log(`   ✅ ${check.field} is correct`);
      } else {
        console.log(`   ❌ ${check.field} is missing or incorrect`);
        allChecks = false;
      }
    });
  }
} else {
  console.log('   ❌ Block Breaker NOT found in games.ts');
  allChecks = false;
}

// 2. Check thumbnail image
console.log('\n2️⃣ Checking thumbnail image...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/block-breaker.jpeg');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log('   ❌ Thumbnail NOT found');
  allChecks = false;
}

// 3. Check game page
console.log('\n3️⃣ Checking game page...');
const gamePagePath = path.join(__dirname, '../src/pages/BlockBreakerPage.tsx');
if (fs.existsSync(gamePagePath)) {
  const pageContent = fs.readFileSync(gamePagePath, 'utf-8');
  
  if (pageContent.includes("slug: 'block-breaker'")) {
    console.log('   ✅ BlockBreakerPage.tsx exists with correct slug');
  } else {
    console.log('   ❌ BlockBreakerPage.tsx has incorrect slug');
    allChecks = false;
  }
  
  // Check for detailed content (1500+ words)
  const wordCount = pageContent.split(/\s+/).length;
  console.log(`   ℹ️  Page content: ~${wordCount} words`);
  if (wordCount >= 1500) {
    console.log('   ✅ Content meets 1500+ word requirement');
  } else {
    console.log('   ⚠️  Content may be shorter than 1500 words');
  }
} else {
  console.log('   ❌ BlockBreakerPage.tsx NOT found');
  allChecks = false;
}

// 4. Check sitemap
console.log('\n4️⃣ Checking sitemap...');
const sitemapPath = path.join(__dirname, '../public/sitemap-games.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  
  if (sitemapContent.includes('block-breaker')) {
    console.log('   ✅ Block Breaker found in sitemap-games.xml');
    
    if (sitemapContent.includes('<lastmod>2025-10-27</lastmod>')) {
      console.log('   ✅ Sitemap has correct date (2025-10-27)');
    } else {
      console.log('   ⚠️  Sitemap date may be incorrect');
    }
  } else {
    console.log('   ❌ Block Breaker NOT found in sitemap');
    allChecks = false;
  }
} else {
  console.log('   ❌ sitemap-games.xml NOT found');
  allChecks = false;
}

// 5. Check Supabase SQL script
console.log('\n5️⃣ Checking Supabase SQL script...');
const sqlPath = path.join(__dirname, '../supabase/add-block-breaker.sql');
if (fs.existsSync(sqlPath)) {
  const sqlContent = fs.readFileSync(sqlPath, 'utf-8');
  
  const sqlChecks = [
    { name: 'Game insert', pattern: /INSERT INTO games/ },
    { name: 'Tags creation', pattern: /INSERT INTO tags/ },
    { name: 'Game-tag linking', pattern: /INSERT INTO game_tags/ },
    { name: 'Comment insert', pattern: /INSERT INTO comments/ },
    { name: 'Game stats init', pattern: /INSERT INTO game_stats/ }
  ];
  
  sqlChecks.forEach(check => {
    if (check.pattern.test(sqlContent)) {
      console.log(`   ✅ ${check.name} found`);
    } else {
      console.log(`   ❌ ${check.name} NOT found`);
      allChecks = false;
    }
  });
} else {
  console.log('   ❌ add-block-breaker.sql NOT found');
  allChecks = false;
}

// 6. Check NEW badge eligibility
console.log('\n6️⃣ Checking NEW badge eligibility...');
const releaseDate = new Date('2025-10-27');
const today = new Date();
const diffDays = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
if (diffDays <= 7) {
  console.log(`   ✅ Game is ${diffDays} days old - NEW badge will be displayed`);
} else {
  console.log(`   ⚠️  Game is ${diffDays} days old - NEW badge will NOT be displayed`);
}

// 7. Check tags
console.log('\n7️⃣ Checking game tags...');
const expectedTags = ['Arcade', 'Action', 'Skill', 'Casual', 'Block', 'Agility'];
const tagsMatch = gamesContent.match(/name:\s*'Block Breaker'[\s\S]*?tags:\s*\[(.*?)\]/);
if (tagsMatch) {
  const tags = tagsMatch[1].split(',').map(t => t.trim().replace(/['"]/g, ''));
  expectedTags.forEach(tag => {
    if (tags.includes(tag)) {
      console.log(`   ✅ Tag '${tag}' found`);
    } else {
      console.log(`   ❌ Tag '${tag}' NOT found`);
      allChecks = false;
    }
  });
}

// 8. Check game appears first in list (newest)
console.log('\n8️⃣ Checking game order...');
const firstGameMatch = gamesContent.match(/export const allGames: Game\[\] = \[\s*\{[\s\S]*?name:\s*'([^']+)'/);
if (firstGameMatch && firstGameMatch[1] === 'Block Breaker') {
  console.log('   ✅ Block Breaker is first in the games list (newest)');
} else {
  console.log('   ⚠️  Block Breaker is not first in the games list');
}

// Final summary
console.log('\n' + '='.repeat(50));
if (allChecks) {
  console.log('✅ All checks passed! Block Breaker is ready to go!');
  console.log('\n📋 Next steps:');
  console.log('   1. Run the SQL script in Supabase Dashboard:');
  console.log('      supabase/add-block-breaker.sql');
  console.log('   2. Test the game page locally:');
  console.log('      http://localhost:3000/block-breaker');
  console.log('   3. Verify the game appears on homepage');
  console.log('   4. Check that NEW badge is displayed');
  console.log('   5. Deploy to production');
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}
console.log('='.repeat(50));

