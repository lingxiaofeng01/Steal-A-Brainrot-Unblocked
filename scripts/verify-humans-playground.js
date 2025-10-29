const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Humans Playground integration...\n');

let allChecksPassed = true;

// 1. Check game data in games.ts
console.log('1️⃣  Checking game data in games.ts...');
const gamesPath = path.join(__dirname, '../src/data/games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf8');

if (gamesContent.includes("name: 'Humans Playground'") && 
    gamesContent.includes("slug: 'humans-playground'") &&
    gamesContent.includes("releaseDate: '2025-10-29'")) {
  console.log('   ✅ Game data found in games.ts');
} else {
  console.log('   ❌ Game data missing or incorrect in games.ts');
  allChecksPassed = false;
}

// 2. Check game page component
console.log('\n2️⃣  Checking game page component...');
const pagePath = path.join(__dirname, '../src/pages/HumansPlaygroundPage.tsx');
if (fs.existsSync(pagePath)) {
  const pageContent = fs.readFileSync(pagePath, 'utf8');
  if (pageContent.includes("slug: 'humans-playground'") &&
      pageContent.includes('Humans Playground') &&
      pageContent.length > 1500) {
    console.log('   ✅ Game page component exists with content (1500+ words)');
  } else {
    console.log('   ❌ Game page component incomplete');
    allChecksPassed = false;
  }
} else {
  console.log('   ❌ Game page component not found');
  allChecksPassed = false;
}

// 3. Check route registration
console.log('\n3️⃣  Checking route registration...');
const routePath = path.join(__dirname, '../src/pages/GameDetailPage.tsx');
const routeContent = fs.readFileSync(routePath, 'utf8');

if (routeContent.includes("'humans-playground': lazy(() => import('./HumansPlaygroundPage'))")) {
  console.log('   ✅ Route registered in GameDetailPage.tsx');
} else {
  console.log('   ❌ Route not registered in GameDetailPage.tsx');
  allChecksPassed = false;
}

// 4. Check thumbnail
console.log('\n4️⃣  Checking thumbnail...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/humans-playground.jpg');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log('   ❌ Thumbnail not found');
  allChecksPassed = false;
}

// 5. Check migration file
console.log('\n5️⃣  Checking migration file...');
const migrationPath = path.join(__dirname, '../supabase/migrations/20251029_add_humans_playground.sql');
if (fs.existsSync(migrationPath)) {
  const migrationContent = fs.readFileSync(migrationPath, 'utf8');
  if (migrationContent.includes("'humans-playground'") &&
      migrationContent.includes('game_stats') &&
      migrationContent.includes('game_comments')) {
    console.log('   ✅ Migration file exists with correct content');
  } else {
    console.log('   ❌ Migration file incomplete');
    allChecksPassed = false;
  }
} else {
  console.log('   ❌ Migration file not found');
  allChecksPassed = false;
}

// 6. Check sitemap-games.xml
console.log('\n6️⃣  Checking sitemap-games.xml...');
const sitemapGamesPath = path.join(__dirname, '../public/sitemap-games.xml');
const sitemapGamesContent = fs.readFileSync(sitemapGamesPath, 'utf8');

if (sitemapGamesContent.includes('humans-playground') &&
    sitemapGamesContent.includes('2025-10-29')) {
  console.log('   ✅ Humans Playground entry found in sitemap-games.xml');
} else {
  console.log('   ❌ Humans Playground entry missing in sitemap-games.xml');
  allChecksPassed = false;
}

// 7. Check sitemap-images.xml
console.log('\n7️⃣  Checking sitemap-images.xml...');
const sitemapImagesPath = path.join(__dirname, '../public/sitemap-images.xml');
const sitemapImagesContent = fs.readFileSync(sitemapImagesPath, 'utf8');

if (sitemapImagesContent.includes('humans-playground') &&
    sitemapImagesContent.includes('humans-playground.jpg')) {
  console.log('   ✅ Humans Playground image entry found in sitemap-images.xml');
} else {
  console.log('   ❌ Humans Playground image entry missing in sitemap-images.xml');
  allChecksPassed = false;
}

// 8. Check tags
console.log('\n8️⃣  Checking tags...');
const expectedTags = ['Action', 'Adventure', 'Simulation', 'Physics', 'Sandbox', 'Ragdoll', 'Creation'];
const foundTags = expectedTags.filter(tag => gamesContent.includes(`'${tag}'`));

if (foundTags.length === expectedTags.length) {
  console.log(`   ✅ All ${expectedTags.length} tags found`);
} else {
  console.log(`   ❌ Only ${foundTags.length}/${expectedTags.length} tags found`);
  allChecksPassed = false;
}

// Final result
console.log('\n' + '='.repeat(50));
if (allChecksPassed) {
  console.log('✅ All checks passed! Humans Playground is ready to go!');
  console.log('\n📋 Next steps:');
  console.log('   1. Run: node scripts/migrate-humans-playground.js');
  console.log('   2. Run: npm run dev');
  console.log('   3. Visit: http://localhost:3000/humans-playground');
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}
console.log('='.repeat(50));

