#!/usr/bin/env node
/**
 * Verification script for Impossible Car Stunt game
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

const GAME_SLUG = 'impossible-car-stunt';
const GAME_NAME = 'Impossible Car Stunt';
const RELEASE_DATE = '2025-11-06';
const TAGS = ['Racing', 'Driving', 'Stunt', 'Car', '3D', 'Skill', 'Sports', 'Arcade'];

let errors = [];
let warnings = [];
let success = [];

console.log('🔍 Verifying Impossible Car Stunt game setup...\n');

// 1. Check thumbnail exists
console.log('1️⃣ Checking thumbnail...');
const thumbnailPath = path.join(__dirname, '..', 'public', 'images', 'thumbnails', `${GAME_SLUG}.jpeg`);
if (fs.existsSync(thumbnailPath)) {
  success.push('✅ Thumbnail file exists');
} else {
  errors.push('❌ Thumbnail file not found: ' + thumbnailPath);
}

// 2. Check games.ts
console.log('2️⃣ Checking games.ts...');
const gamesPath = path.join(__dirname, '..', 'src', 'data', 'games.ts');
if (fs.existsSync(gamesPath)) {
  const gamesContent = fs.readFileSync(gamesPath, 'utf-8');
  
  if (gamesContent.includes(`slug: '${GAME_SLUG}'`)) {
    success.push('✅ Game added to games.ts');
    
    // Check if it's at the beginning
    const firstGameMatch = gamesContent.match(/export const allGames: Game\[\] = \[\s*\{[^}]*slug: '([^']+)'/);
    if (firstGameMatch && firstGameMatch[1] === GAME_SLUG) {
      success.push('✅ Game is at the beginning of the array');
    } else {
      warnings.push('⚠️ Game is not at the beginning of the array');
    }
    
    // Check all required fields
    const gameSection = gamesContent.substring(
      gamesContent.indexOf(`slug: '${GAME_SLUG}'`) - 200,
      gamesContent.indexOf(`slug: '${GAME_SLUG}'`) + 500
    );
    
    if (gameSection.includes(`name: '${GAME_NAME}'`)) success.push('✅ Game name is correct');
    else errors.push('❌ Game name is missing or incorrect');
    
    if (gameSection.includes(`releaseDate: '${RELEASE_DATE}'`)) success.push('✅ Release date is correct');
    else errors.push('❌ Release date is missing or incorrect');
    
    if (gameSection.includes('isReal: true')) success.push('✅ isReal flag is set');
    else errors.push('❌ isReal flag is missing');
    
    if (gameSection.includes('rating: 5.0')) success.push('✅ Initial rating is 5.0');
    else warnings.push('⚠️ Initial rating is not 5.0');
    
    if (gameSection.includes('playCount: 0')) success.push('✅ Initial playCount is 0');
    else warnings.push('⚠️ Initial playCount is not 0');
    
    // Check tags
    TAGS.forEach(tag => {
      if (gameSection.includes(`'${tag}'`)) {
        success.push(`✅ Tag '${tag}' is present`);
      } else {
        errors.push(`❌ Tag '${tag}' is missing`);
      }
    });
    
  } else {
    errors.push('❌ Game not found in games.ts');
  }
} else {
  errors.push('❌ games.ts file not found');
}

// 3. Check game page component
console.log('3️⃣ Checking game page component...');
const pagePath = path.join(__dirname, '..', 'src', 'pages', 'ImpossibleCarStuntPage.tsx');
if (fs.existsSync(pagePath)) {
  success.push('✅ Game page component exists');
  
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  
  // Check for SEO elements
  if (pageContent.includes('text-gray-800')) {
    success.push('✅ Uses correct text color (text-gray-800)');
  } else {
    warnings.push('⚠️ May not use correct text color for headings');
  }
  
  // Count keyword density
  const keywordRegex = new RegExp('Impossible Car Stunt', 'gi');
  const matches = pageContent.match(keywordRegex);
  const wordCount = pageContent.split(/\s+/).length;
  const density = matches ? (matches.length / wordCount * 100).toFixed(2) : 0;
  
  if (density >= 2.0) {
    success.push(`✅ Keyword density is ${density}% (target: 2%)`);
  } else {
    warnings.push(`⚠️ Keyword density is ${density}% (target: 2%)`);
  }
  
} else {
  errors.push('❌ Game page component not found: ' + pagePath);
}

// 4. Check GameDetailPage.tsx registration
console.log('4️⃣ Checking GameDetailPage.tsx registration...');
const detailPagePath = path.join(__dirname, '..', 'src', 'pages', 'GameDetailPage.tsx');
if (fs.existsSync(detailPagePath)) {
  const detailContent = fs.readFileSync(detailPagePath, 'utf-8');
  
  if (detailContent.includes(`'${GAME_SLUG}': lazy(() => import('./ImpossibleCarStuntPage'))`)) {
    success.push('✅ Game registered in GameDetailPage.tsx');
    
    // Check if it's at the beginning
    const firstRouteMatch = detailContent.match(/const gamePageComponents[^{]*\{[^']*'([^']+)':/);
    if (firstRouteMatch && firstRouteMatch[1] === GAME_SLUG) {
      success.push('✅ Game route is at the beginning');
    } else {
      warnings.push('⚠️ Game route is not at the beginning');
    }
  } else {
    errors.push('❌ Game not registered in GameDetailPage.tsx');
  }
} else {
  errors.push('❌ GameDetailPage.tsx not found');
}

// 5. Check Supabase migration file
console.log('5️⃣ Checking Supabase migration file...');
const migrationPath = path.join(__dirname, '..', 'supabase', 'migrations', `20251106_add_${GAME_SLUG}.sql`);
if (fs.existsSync(migrationPath)) {
  success.push('✅ Supabase migration file exists');
  
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  
  if (migrationContent.includes('INSERT INTO games')) success.push('✅ Migration includes game record');
  else errors.push('❌ Migration missing game record');
  
  if (migrationContent.includes('INSERT INTO tags')) success.push('✅ Migration includes tags');
  else errors.push('❌ Migration missing tags');
  
  if (migrationContent.includes('INSERT INTO game_tags')) success.push('✅ Migration includes tag associations');
  else errors.push('❌ Migration missing tag associations');
  
  if (migrationContent.includes('INSERT INTO game_comments')) success.push('✅ Migration includes comment');
  else errors.push('❌ Migration missing comment');
  
  if (migrationContent.includes('comment_text')) success.push('✅ Uses correct field name (comment_text)');
  else errors.push('❌ May use incorrect field name (should be comment_text, not content)');
  
} else {
  errors.push('❌ Supabase migration file not found: ' + migrationPath);
}

// 6. Check sitemap files
console.log('6️⃣ Checking sitemap files...');

const sitemaps = [
  { file: 'sitemap-games.xml', shouldContain: `<loc>https://www.stealabrainrotunblocked.com/${GAME_SLUG}</loc>` },
  { file: 'sitemap-images.xml', shouldContain: `<loc>https://www.stealabrainrotunblocked.com/${GAME_SLUG}</loc>` },
  { file: 'sitemap.xml', shouldContain: '<lastmod>2025-11-06</lastmod>' },
  { file: 'sitemap-tags.xml', shouldContain: '<lastmod>2025-11-06</lastmod>' },
  { file: 'sitemap-index.xml', shouldContain: '<lastmod>2025-11-06</lastmod>' }
];

sitemaps.forEach(({ file, shouldContain }) => {
  const sitemapPath = path.join(__dirname, '..', 'public', file);
  if (fs.existsSync(sitemapPath)) {
    const content = fs.readFileSync(sitemapPath, 'utf-8');
    if (content.includes(shouldContain)) {
      success.push(`✅ ${file} updated correctly`);
    } else {
      errors.push(`❌ ${file} not updated correctly`);
    }
  } else {
    errors.push(`❌ ${file} not found`);
  }
});

// 7. Check NEW badge logic (7 days rule)
console.log('7️⃣ Checking NEW badge logic...');
const releaseDate = new Date(RELEASE_DATE);
const today = new Date();
const daysDiff = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));

if (daysDiff <= 7) {
  success.push(`✅ Game is ${daysDiff} days old - NEW badge should display`);
} else {
  warnings.push(`⚠️ Game is ${daysDiff} days old - NEW badge will not display`);
}

// Print results
console.log('\n' + '='.repeat(60));
console.log('📊 VERIFICATION RESULTS');
console.log('='.repeat(60) + '\n');

if (success.length > 0) {
  console.log('✅ SUCCESS (' + success.length + '):\n');
  success.forEach(msg => console.log('  ' + msg));
  console.log('');
}

if (warnings.length > 0) {
  console.log('⚠️  WARNINGS (' + warnings.length + '):\n');
  warnings.forEach(msg => console.log('  ' + msg));
  console.log('');
}

if (errors.length > 0) {
  console.log('❌ ERRORS (' + errors.length + '):\n');
  errors.forEach(msg => console.log('  ' + msg));
  console.log('');
}

console.log('='.repeat(60));

if (errors.length === 0) {
  console.log('✅ All checks passed! Game setup is complete.');
  console.log('\n📝 Next steps:');
  console.log('  1. Run Supabase migration (via API or Dashboard)');
  console.log('  2. Verify data in Supabase');
  console.log('  3. Test game page locally');
  console.log('  4. Deploy to production');
  process.exit(0);
} else {
  console.log('❌ Verification failed. Please fix the errors above.');
  process.exit(1);
}

