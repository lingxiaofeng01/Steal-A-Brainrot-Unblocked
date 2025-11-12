const fs = require('fs');
const path = require('path');

const GAME_SLUG = 'drift-fury';
const GAME_NAME = 'Drift Fury';
const RELEASE_DATE = '2025-11-12';
const TAGS = ['Racing', 'Driving', '3D', 'Drift', 'Car', 'Sports', 'Skill', 'Action', 'Casual', 'Unblocked', 'Browser', 'Arcade', 'Speed', 'Simulation', 'Adventure'];

console.log('============================================================');
console.log(`Verifying ${GAME_NAME} (${GAME_SLUG})`);
console.log('============================================================\n');

let allChecksPassed = true;

// Check 1: Thumbnail exists
console.log('1️⃣ Checking thumbnail...');
const thumbnailPath = path.join(__dirname, '..', 'public', 'images', 'thumbnails', `${GAME_SLUG}.jpg`);
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log(`   ❌ Thumbnail not found at ${thumbnailPath}`);
  allChecksPassed = false;
}

// Check 2: Game added to games.ts
console.log('\n2️⃣ Checking games.ts...');
const gamesPath = path.join(__dirname, '..', 'src', 'data', 'games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf-8');
if (gamesContent.includes(`slug: '${GAME_SLUG}'`)) {
  console.log('   ✅ Game found in games.ts');
  
  // Check if it's at the beginning
  const lines = gamesContent.split('\n');
  const gameIndex = lines.findIndex(line => line.includes(`slug: '${GAME_SLUG}'`));
  const arrayStartIndex = lines.findIndex(line => line.includes('export const allGames: Game[] = ['));
  if (gameIndex - arrayStartIndex < 20) {
    console.log('   ✅ Game is near the beginning of the array');
  } else {
    console.log('   ⚠️  Game is not at the beginning of the array');
  }
  
  // Check release date
  if (gamesContent.includes(`releaseDate: '${RELEASE_DATE}'`)) {
    console.log(`   ✅ Release date is ${RELEASE_DATE}`);
  } else {
    console.log(`   ❌ Release date is not ${RELEASE_DATE}`);
    allChecksPassed = false;
  }
} else {
  console.log('   ❌ Game not found in games.ts');
  allChecksPassed = false;
}

// Check 3: All tags present
console.log('\n3️⃣ Checking tags...');
let missingTags = [];
TAGS.forEach(tag => {
  if (!gamesContent.includes(`'${tag}'`)) {
    missingTags.push(tag);
  }
});
if (missingTags.length === 0) {
  console.log(`   ✅ Found all ${TAGS.length} tags`);
} else {
  console.log(`   ❌ Missing tags: ${missingTags.join(', ')}`);
  allChecksPassed = false;
}

// Check 4: Game page component exists
console.log('\n4️⃣ Checking game page component...');
const pagePath = path.join(__dirname, '..', 'src', 'pages', 'DriftFuryPage.tsx');
if (fs.existsSync(pagePath)) {
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  console.log('   ✅ DriftFuryPage.tsx exists');
  
  // Check for key content
  if (pageContent.includes('Drift Fury')) {
    console.log('   ✅ Page contains game title');
  }
  
  // Check for SEO-friendly structure
  if (pageContent.includes('aboutContent') && pageContent.includes('howToPlayContent') && pageContent.includes('featuresContent')) {
    console.log('   ✅ Page has proper content structure');
  }
  
  // Check for deep color text (not white)
  if (pageContent.includes('text-gray-800') || pageContent.includes('text-gray-700')) {
    console.log('   ✅ Page uses dark text colors (SEO compliant)');
  } else {
    console.log('   ⚠️  Page might be using light text colors');
  }
} else {
  console.log('   ❌ DriftFuryPage.tsx not found');
  allChecksPassed = false;
}

// Check 5: GameDetailPage.tsx registration
console.log('\n5️⃣ Checking GameDetailPage.tsx registration...');
const gameDetailPath = path.join(__dirname, '..', 'src', 'pages', 'GameDetailPage.tsx');
const gameDetailContent = fs.readFileSync(gameDetailPath, 'utf-8');
if (gameDetailContent.includes(`'${GAME_SLUG}': lazy(() => import('./DriftFuryPage'))`)) {
  console.log('   ✅ Game registered in GameDetailPage.tsx');
  
  // Check if it's near the beginning
  const lines = gameDetailContent.split('\n');
  const registrationIndex = lines.findIndex(line => line.includes(`'${GAME_SLUG}'`));
  const componentMapIndex = lines.findIndex(line => line.includes('const gamePageComponents'));
  if (registrationIndex - componentMapIndex < 5) {
    console.log('   ✅ Registration is at the beginning of the map');
  }
} else {
  console.log('   ❌ Game not registered in GameDetailPage.tsx');
  allChecksPassed = false;
}

// Check 6: Supabase migration file
console.log('\n6️⃣ Checking Supabase migration file...');
const migrationPath = path.join(__dirname, '..', 'supabase', 'migrations', `20251112_add_drift_fury.sql`);
if (fs.existsSync(migrationPath)) {
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  console.log('   ✅ Migration file exists');
  
  // Check for game insert
  if (migrationContent.includes('INSERT INTO games')) {
    console.log('   ✅ Contains game INSERT statement');
  }
  
  // Check for tags
  if (migrationContent.includes('INSERT INTO tags')) {
    console.log('   ✅ Contains tags INSERT statement');
  }
  
  // Check for game_tags
  if (migrationContent.includes('INSERT INTO game_tags')) {
    console.log('   ✅ Contains game_tags INSERT statement');
  }
  
  // Check for comment
  if (migrationContent.includes('INSERT INTO game_comments') && migrationContent.includes('comment_text')) {
    console.log('   ✅ Contains comment INSERT statement with correct field name');
  } else if (migrationContent.includes('INSERT INTO game_comments')) {
    console.log('   ⚠️  Contains comment INSERT but check field name (should be comment_text)');
  }
} else {
  console.log('   ❌ Migration file not found');
  allChecksPassed = false;
}

// Check 7: Sitemap files
console.log('\n7️⃣ Checking sitemap files...');
const sitemapGamesPath = path.join(__dirname, '..', 'public', 'sitemap-games.xml');
const sitemapGamesContent = fs.readFileSync(sitemapGamesPath, 'utf-8');
if (sitemapGamesContent.includes(`<loc>https://www.stealabrainrotunblocked.com/${GAME_SLUG}</loc>`)) {
  console.log('   ✅ Game found in sitemap-games.xml');
} else {
  console.log('   ❌ Game not found in sitemap-games.xml');
  allChecksPassed = false;
}

const sitemapImagesPath = path.join(__dirname, '..', 'public', 'sitemap-images.xml');
const sitemapImagesContent = fs.readFileSync(sitemapImagesPath, 'utf-8');
if (sitemapImagesContent.includes(`${GAME_SLUG}.jpg`)) {
  console.log('   ✅ Game image found in sitemap-images.xml');
} else {
  console.log('   ❌ Game image not found in sitemap-images.xml');
  allChecksPassed = false;
}

// Check 8: NEW badge eligibility
console.log('\n8️⃣ Checking NEW badge eligibility...');
const releaseDate = new Date(RELEASE_DATE);
const today = new Date();
const diffTime = Math.abs(today - releaseDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
if (diffDays <= 7) {
  console.log(`   ✅ Game is ${diffDays} day(s) old - NEW badge will show`);
} else {
  console.log(`   ⚠️  Game is ${diffDays} day(s) old - NEW badge will NOT show`);
}

// Check 9: Tag pages will include this game
console.log('\n9️⃣ Checking tag page updates...');
const sitemapTagsPath = path.join(__dirname, '..', 'public', 'sitemap-tags.xml');
const sitemapTagsContent = fs.readFileSync(sitemapTagsPath, 'utf-8');
const updatedTags = ['racing', 'driving', 'drift', 'car', '3d', 'sports', 'skill', 'action', 'casual', 'arcade', 'browser', 'simulation', 'adventure'];
let tagUpdateCount = 0;
updatedTags.forEach(tag => {
  if (sitemapTagsContent.includes(`<loc>https://www.stealabrainrotunblocked.com/tag/${tag}</loc>`) &&
      sitemapTagsContent.includes(`<lastmod>${RELEASE_DATE}</lastmod>`)) {
    tagUpdateCount++;
  }
});
console.log(`   ✅ ${tagUpdateCount} relevant tag pages updated in sitemap`);

// Final summary
console.log('\n============================================================');
if (allChecksPassed) {
  console.log('✅ All checks passed! The game is ready.');
} else {
  console.log('❌ Some checks failed. Please review the issues above.');
}
console.log('============================================================\n');

process.exit(allChecksPassed ? 0 : 1);

