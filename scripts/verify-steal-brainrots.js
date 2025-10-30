/**
 * Steal Brainrots 游戏添加验证脚本
 * 验证所有必要的文件和配置是否正确
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Steal Brainrots game addition...\n');
console.log('='.repeat(50));

let allChecks = true;

// 1. Check games.ts
console.log('\n1️⃣ Checking games.ts...');
const gamesPath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf8');

if (gamesContent.includes("name: 'Steal Brainrots'") && 
    gamesContent.includes("slug: 'steal-brainrots'") &&
    gamesContent.includes("releaseDate: '2025-10-30'")) {
  console.log('   ✅ Game data found in games.ts');
  
  // Check if it's at the top (first game)
  const gamesMatch = gamesContent.match(/export const allGames: Game\[\] = \[([\s\S]*?)\{/);
  if (gamesMatch && gamesMatch[1].trim() === '') {
    console.log('   ✅ Game is at position 0 (newest)');
  } else {
    console.log('   ⚠️  Game might not be at position 0');
  }
  
  // Check tags
  const expectedTags = ['Action', 'Puzzle', 'Strategy', 'Collecting', 'Stealth', 'Brainrot', 'Casual', 'Arcade'];
  const tagsFound = expectedTags.filter(tag => gamesContent.includes(`'${tag}'`));
  console.log(`   ✅ Tags found: ${tagsFound.length}/${expectedTags.length}`);
  
  // Check URL
  if (gamesContent.includes('https://azgames.io/steal-brainrots/steal-brainrots.embed')) {
    console.log('   ✅ Game URL configured correctly');
  } else {
    console.log('   ❌ Game URL NOT found');
    allChecks = false;
  }
} else {
  console.log('   ❌ Game data NOT found in games.ts');
  allChecks = false;
}

// 2. Check StealBrainrotsPage.tsx
console.log('\n2️⃣ Checking StealBrainrotsPage.tsx...');
const pagePath = path.join(__dirname, '../src/pages/StealBrainrotsPage.tsx');
if (fs.existsSync(pagePath)) {
  const pageContent = fs.readFileSync(pagePath, 'utf8');
  console.log('   ✅ StealBrainrotsPage.tsx exists');
  
  if (pageContent.includes('Multiplayer Roblox Heist Game')) {
    console.log('   ✅ Page subtitle found');
  }
  
  if (pageContent.includes('aboutContent') && 
      pageContent.includes('howToPlayContent') && 
      pageContent.includes('featuresContent')) {
    console.log('   ✅ All content sections present');
  } else {
    console.log('   ❌ Missing content sections');
    allChecks = false;
  }
} else {
  console.log('   ❌ StealBrainrotsPage.tsx NOT found');
  allChecks = false;
}

// 3. Check GameDetailPage.tsx routing
console.log('\n3️⃣ Checking GameDetailPage.tsx routing...');
const gameDetailPath = path.join(__dirname, '../src/pages/GameDetailPage.tsx');
const gameDetailContent = fs.readFileSync(gameDetailPath, 'utf8');

if (gameDetailContent.includes("'steal-brainrots': lazy(() => import('./StealBrainrotsPage'))")) {
  console.log('   ✅ Route mapping found in GameDetailPage.tsx');
} else {
  console.log('   ❌ Route mapping NOT found');
  allChecks = false;
}

// 4. Check thumbnail
console.log('\n4️⃣ Checking game thumbnail...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/steal-brainrots.png');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log('   ❌ Thumbnail NOT found');
  allChecks = false;
}

// 5. Check sitemap
console.log('\n5️⃣ Checking sitemap-games.xml...');
const sitemapPath = path.join(__dirname, '../public/sitemap-games.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

if (sitemapContent.includes('<loc>https://www.stealabrainrotunblocked.com/steal-brainrots</loc>')) {
  console.log('   ✅ Game URL found in sitemap');
  
  if (sitemapContent.includes('<lastmod>2025-10-30</lastmod>')) {
    console.log('   ✅ Last modified date is correct');
  }
} else {
  console.log('   ❌ Game URL NOT found in sitemap');
  allChecks = false;
}

// 6. Check Supabase SQL script
console.log('\n6️⃣ Checking Supabase SQL script...');
const sqlPath = path.join(__dirname, '../supabase/add-steal-brainrots-comment.sql');
if (fs.existsSync(sqlPath)) {
  const sqlContent = fs.readFileSync(sqlPath, 'utf8');
  console.log('   ✅ add-steal-brainrots-comment.sql exists');
  
  if (sqlContent.includes("game_slug = 'steal-brainrots'") &&
      sqlContent.includes('MemeCollector')) {
    console.log('   ✅ Comment data found in SQL script');
  }
} else {
  console.log('   ❌ add-steal-brainrots-comment.sql NOT found');
  allChecks = false;
}

// 7. Check initialization script
console.log('\n7️⃣ Checking initialization script...');
const initScriptPath = path.join(__dirname, 'initStealBrainrotsComment.js');
if (fs.existsSync(initScriptPath)) {
  console.log('   ✅ initStealBrainrotsComment.js exists');
} else {
  console.log('   ❌ initStealBrainrotsComment.js NOT found');
  allChecks = false;
}

// 8. Check NEW badge eligibility
console.log('\n8️⃣ Checking NEW badge eligibility...');
const releaseDate = new Date('2025-10-30');
const today = new Date();
const diffDays = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
if (diffDays <= 7) {
  console.log(`   ✅ Game is ${diffDays} days old - NEW badge will be displayed`);
} else {
  console.log(`   ⚠️  Game is ${diffDays} days old - NEW badge will NOT be displayed`);
}

// 9. Check game tags for category pages
console.log('\n9️⃣ Checking tag pages where game should appear...');
const tags = ['Action', 'Puzzle', 'Strategy', 'Collecting', 'Stealth', 'Brainrot', 'Casual', 'Arcade'];
console.log(`   ℹ️  Game will appear on these tag pages:`);
tags.forEach(tag => {
  console.log(`      - /tag/${tag.toLowerCase()}`);
});

// 10. Summary
console.log('\n' + '='.repeat(50));
if (allChecks) {
  console.log('✅ All checks passed! Steal Brainrots is ready to go!');
  console.log('\n📋 Next steps:');
  console.log('   1. Verify the game appears on the homepage');
  console.log('   2. Check tag pages (Action, Puzzle, Strategy, etc.)');
  console.log('   3. Test the game page at /steal-brainrots');
  console.log('   4. Verify NEW badge is displayed');
  console.log('   5. Check Supabase comment is visible');
} else {
  console.log('❌ Some checks failed. Please review the issues above.');
}
console.log('='.repeat(50) + '\n');

