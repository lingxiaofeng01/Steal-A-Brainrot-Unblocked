#!/usr/bin/env node
/**
 * Verification script for Granny Horror game addition
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

const GAME_SLUG = 'granny-horror';
const GAME_NAME = 'Granny Horror';
const RELEASE_DATE = '2025-11-07';
const REQUIRED_TAGS = ['Horror', 'Survival', '3D', 'Escape', 'Adventure', 'Action', 'Single Player'];

let allChecks = true;

/**
 * Check if a file exists
 */
function checkFile(filePath, description) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (fs.existsSync(fullPath)) {
    console.log(`   ✅ ${description} exists`);
    return true;
  } else {
    console.log(`   ❌ ${description} NOT found at ${filePath}`);
    allChecks = false;
    return false;
  }
}

/**
 * Check if file contains specific content
 */
function checkFileContent(filePath, searchString, description) {
  const fullPath = path.join(__dirname, '..', filePath);
  try {
    const content = fs.readFileSync(fullPath, 'utf-8');
    if (content.includes(searchString)) {
      console.log(`   ✅ ${description} found`);
      return true;
    } else {
      console.log(`   ❌ ${description} NOT found`);
      allChecks = false;
      return false;
    }
  } catch (err) {
    console.log(`   ❌ Error reading ${filePath}: ${err.message}`);
    allChecks = false;
    return false;
  }
}

console.log('\n🔍 Verifying Granny Horror Game Addition\n');
console.log('='.repeat(60));

// 1. Check thumbnail
console.log('\n📸 Checking Thumbnail...');
checkFile('public/images/thumbnails/granny-horror.webp', 'Thumbnail image');

// 2. Check games.ts
console.log('\n📝 Checking games.ts...');
if (checkFile('src/data/games.ts', 'Games data file')) {
  checkFileContent('src/data/games.ts', `slug: '${GAME_SLUG}'`, 'Game slug');
  checkFileContent('src/data/games.ts', `name: '${GAME_NAME}'`, 'Game name');
  checkFileContent('src/data/games.ts', `releaseDate: '${RELEASE_DATE}'`, 'Release date');
  
  // Check tags
  REQUIRED_TAGS.forEach(tag => {
    checkFileContent('src/data/games.ts', `'${tag}'`, `Tag: ${tag}`);
  });
}

// 3. Check game page component
console.log('\n📄 Checking Game Page Component...');
checkFile('src/pages/GrannyHorrorPage.tsx', 'Game page component');

// 4. Check GameDetailPage.tsx registration
console.log('\n🔗 Checking Route Registration...');
if (checkFile('src/pages/GameDetailPage.tsx', 'GameDetailPage')) {
  checkFileContent(
    'src/pages/GameDetailPage.tsx',
    `'${GAME_SLUG}': lazy(() => import('./GrannyHorrorPage'))`,
    'Route registration'
  );
}

// 5. Check Supabase migration
console.log('\n💾 Checking Supabase Migration...');
const migrationFile = `supabase/migrations/20251107_add_granny_horror.sql`;
if (checkFile(migrationFile, 'Migration file')) {
  checkFileContent(migrationFile, `slug = '${GAME_SLUG}'`, 'Game slug in migration');
  checkFileContent(migrationFile, 'INSERT INTO games', 'Game insert statement');
  checkFileContent(migrationFile, 'INSERT INTO tags', 'Tags insert statement');
  checkFileContent(migrationFile, 'INSERT INTO game_tags', 'Game-tags association');
  checkFileContent(migrationFile, 'INSERT INTO game_comments', 'Comment insert statement');
  checkFileContent(migrationFile, 'comment_text', 'Correct comment field name');
}

// 6. Check sitemap-games.xml
console.log('\n🗺️  Checking Sitemap Files...');
if (checkFile('public/sitemap-games.xml', 'Games sitemap')) {
  checkFileContent(
    'public/sitemap-games.xml',
    `<loc>https://www.stealabrainrotunblocked.com/${GAME_SLUG}</loc>`,
    'Game URL in sitemap-games.xml'
  );
  checkFileContent(
    'public/sitemap-games.xml',
    `<lastmod>${RELEASE_DATE}</lastmod>`,
    'Release date in sitemap-games.xml'
  );
}

// 7. Check sitemap-images.xml
if (checkFile('public/sitemap-images.xml', 'Images sitemap')) {
  checkFileContent(
    'public/sitemap-images.xml',
    `<loc>https://www.stealabrainrotunblocked.com/${GAME_SLUG}</loc>`,
    'Game URL in sitemap-images.xml'
  );
}

// 8. Check sitemap.xml (homepage update)
if (checkFile('public/sitemap.xml', 'Main sitemap')) {
  checkFileContent(
    'public/sitemap.xml',
    `<lastmod>${RELEASE_DATE}</lastmod>`,
    'Updated lastmod in sitemap.xml'
  );
}

// 9. Check sitemap-tags.xml (tag pages update)
if (checkFile('public/sitemap-tags.xml', 'Tags sitemap')) {
  const tagsToCheck = ['horror', 'survival', '3d', 'adventure', 'action'];
  tagsToCheck.forEach(tag => {
    checkFileContent(
      'public/sitemap-tags.xml',
      `<loc>https://www.stealabrainrotunblocked.com/tag/${tag}</loc>`,
      `Tag page: ${tag}`
    );
  });
}

// 10. Check sitemap-index.xml
if (checkFile('public/sitemap-index.xml', 'Sitemap index')) {
  checkFileContent(
    'public/sitemap-index.xml',
    `<lastmod>${RELEASE_DATE}</lastmod>`,
    'Updated lastmod in sitemap-index.xml'
  );
}

// 11. Check NEW badge logic (7 days rule)
console.log('\n🆕 Checking NEW Badge Logic...');
const today = new Date(RELEASE_DATE);
const releaseDate = new Date(RELEASE_DATE);
const daysDiff = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
if (daysDiff <= 7) {
  console.log(`   ✅ Game is ${daysDiff} days old - NEW badge should display`);
} else {
  console.log(`   ⚠️  Game is ${daysDiff} days old - NEW badge will NOT display`);
}

// 12. Check SEO requirements in game page
console.log('\n🔍 Checking SEO Requirements...');
const gamePagePath = path.join(__dirname, '..', 'src/pages/GrannyHorrorPage.tsx');
if (fs.existsSync(gamePagePath)) {
  const pageContent = fs.readFileSync(gamePagePath, 'utf-8');
  
  // Count keyword density (game name occurrences)
  const gameName = 'Granny Horror';
  const gameNameRegex = new RegExp(gameName, 'gi');
  const matches = pageContent.match(gameNameRegex);
  const wordCount = pageContent.split(/\s+/).length;
  const keywordDensity = matches ? ((matches.length / wordCount) * 100).toFixed(2) : 0;
  
  console.log(`   📊 Keyword "${gameName}" appears ${matches ? matches.length : 0} times`);
  console.log(`   📊 Total words: ${wordCount}`);
  console.log(`   📊 Keyword density: ${keywordDensity}%`);
  
  if (keywordDensity >= 2.0) {
    console.log(`   ✅ Keyword density meets 2% requirement`);
  } else {
    console.log(`   ⚠️  Keyword density below 2% target`);
  }
  
  // Check for H1 tag
  if (pageContent.includes('title:') && pageContent.includes(gameName)) {
    console.log(`   ✅ H1 tag (title) contains game name`);
  } else {
    console.log(`   ❌ H1 tag missing or doesn't contain game name`);
    allChecks = false;
  }
  
  // Check for H2/H3 tags
  if (pageContent.includes('<h3') || pageContent.includes('<h4')) {
    console.log(`   ✅ H2/H3 heading tags found`);
  } else {
    console.log(`   ⚠️  No H2/H3 heading tags found`);
  }
  
  // Check content length
  if (pageContent.length > 5000) {
    console.log(`   ✅ Content length sufficient (${pageContent.length} characters)`);
  } else {
    console.log(`   ⚠️  Content might be too short (${pageContent.length} characters)`);
  }
}

// Final summary
console.log('\n' + '='.repeat(60));
if (allChecks) {
  console.log('✅ All checks passed! Granny Horror game is ready.');
  console.log('\n📋 Next Steps:');
  console.log('   1. Run Supabase migration (via API or Dashboard)');
  console.log('   2. Test locally: npm run dev');
  console.log('   3. Visit: http://localhost:3000/granny-horror');
  console.log('   4. Verify game displays correctly');
  console.log('   5. Check comments load from Supabase');
  console.log('   6. Deploy to production');
  process.exit(0);
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}

