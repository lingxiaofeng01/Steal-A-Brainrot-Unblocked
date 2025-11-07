const fs = require('fs');
const path = require('path');

// Configuration
const GAME_NAME = 'Zombie Strike';
const GAME_SLUG = 'zombie-strike';
const RELEASE_DATE = '2025-11-07';
const TAGS = ['Zombie', 'Shooting', '3D', 'Survival', 'Action', 'Gun', 'First Person', 'Arcade'];
const THUMBNAIL_PATH = 'public/images/thumbnails/zombie-strike.jpg';
const PAGE_COMPONENT_PATH = 'src/pages/ZombieStrikePage.tsx';
const GAMES_DATA_PATH = 'src/data/games.ts';
const GAME_DETAIL_PAGE_PATH = 'src/pages/GameDetailPage.tsx';
const MIGRATION_FILE = 'supabase/migrations/20251107_add_zombie_strike.sql';

// Helper function to check if file exists
function checkFile(filePath, description) {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    console.log(`   ✅ ${description} exists`);
    return true;
  } else {
    console.log(`   ❌ ${description} NOT found at: ${filePath}`);
    return false;
  }
}

// Helper function to check file content
function checkContent(filePath, searchString, description) {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf-8');
    if (content.includes(searchString)) {
      console.log(`   ✅ ${description} found`);
      return true;
    } else {
      console.log(`   ❌ ${description} NOT found`);
      return false;
    }
  } else {
    console.log(`   ❌ File not found: ${filePath}`);
    return false;
  }
}

// Calculate days since release
function getDaysSinceRelease(releaseDate) {
  const release = new Date(releaseDate);
  const today = new Date();
  const diffTime = Math.abs(today - release);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// Count keyword occurrences and calculate density
function analyzeKeywordDensity(filePath, keyword) {
  const fullPath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) {
    return { count: 0, totalWords: 0, density: 0 };
  }
  
  const content = fs.readFileSync(fullPath, 'utf-8');
  // Remove HTML tags and code for more accurate word count
  const textContent = content.replace(/<[^>]*>/g, ' ').replace(/[{}()[\]]/g, ' ');
  
  // Count keyword occurrences (case insensitive)
  const keywordRegex = new RegExp(keyword, 'gi');
  const matches = textContent.match(keywordRegex);
  const keywordCount = matches ? matches.length : 0;
  
  // Count total words
  const words = textContent.split(/\s+/).filter(word => word.length > 0);
  const totalWords = words.length;
  
  // Calculate density
  const density = totalWords > 0 ? ((keywordCount / totalWords) * 100).toFixed(2) : 0;
  
  return { count: keywordCount, totalWords, density };
}

console.log('\n🔍 Verifying Zombie Strike Game Addition\n');
console.log('============================================================\n');

let allChecksPassed = true;

// 1. Check thumbnail
console.log('📸 Checking Thumbnail...');
if (!checkFile(THUMBNAIL_PATH, 'Thumbnail image')) {
  allChecksPassed = false;
}

// 2. Check games.ts
console.log('\n📝 Checking games.ts...');
if (checkFile(GAMES_DATA_PATH, 'Games data file')) {
  checkContent(GAMES_DATA_PATH, `slug: '${GAME_SLUG}'`, 'Game slug');
  checkContent(GAMES_DATA_PATH, `name: '${GAME_NAME}'`, 'Game name');
  checkContent(GAMES_DATA_PATH, `releaseDate: '${RELEASE_DATE}'`, 'Release date');
  
  // Check all tags
  TAGS.forEach(tag => {
    checkContent(GAMES_DATA_PATH, tag, `Tag: ${tag}`);
  });
} else {
  allChecksPassed = false;
}

// 3. Check game page component
console.log('\n📄 Checking Game Page Component...');
if (!checkFile(PAGE_COMPONENT_PATH, 'Game page component')) {
  allChecksPassed = false;
}

// 4. Check route registration
console.log('\n🔗 Checking Route Registration...');
if (checkFile(GAME_DETAIL_PAGE_PATH, 'GameDetailPage')) {
  checkContent(GAME_DETAIL_PAGE_PATH, `'${GAME_SLUG}'`, 'Route registration');
} else {
  allChecksPassed = false;
}

// 5. Check Supabase migration
console.log('\n💾 Checking Supabase Migration...');
if (checkFile(MIGRATION_FILE, 'Migration file')) {
  checkContent(MIGRATION_FILE, GAME_SLUG, 'Game slug in migration');
  checkContent(MIGRATION_FILE, 'INSERT INTO games', 'Game insert statement');
  checkContent(MIGRATION_FILE, 'INSERT INTO tags', 'Tags insert statement');
  checkContent(MIGRATION_FILE, 'INSERT INTO game_tags', 'Game-tags association');
  checkContent(MIGRATION_FILE, 'INSERT INTO game_comments', 'Comment insert statement');
  checkContent(MIGRATION_FILE, 'comment_text', 'Correct comment field name');
} else {
  allChecksPassed = false;
}

// 6. Check sitemap files
console.log('\n🗺️  Checking Sitemap Files...');
const sitemaps = [
  { file: 'public/sitemap-games.xml', desc: 'Games sitemap' },
  { file: 'public/sitemap-images.xml', desc: 'Images sitemap' },
  { file: 'public/sitemap.xml', desc: 'Main sitemap' },
  { file: 'public/sitemap-tags.xml', desc: 'Tags sitemap' },
  { file: 'public/sitemap-index.xml', desc: 'Sitemap index' }
];

sitemaps.forEach(({ file, desc }) => {
  if (checkFile(file, desc)) {
    if (file === 'public/sitemap-games.xml') {
      checkContent(file, `/${GAME_SLUG}</loc>`, `Game URL in ${desc}`);
      checkContent(file, `<lastmod>${RELEASE_DATE}</lastmod>`, `Release date in ${desc}`);
    } else if (file === 'public/sitemap-images.xml') {
      checkContent(file, `/${GAME_SLUG}</loc>`, `Game URL in ${desc}`);
    } else if (file === 'public/sitemap.xml') {
      checkContent(file, `<lastmod>${RELEASE_DATE}</lastmod>`, `Updated lastmod in ${desc}`);
    } else if (file === 'public/sitemap-tags.xml') {
      // Check relevant tag pages
      const relevantTags = ['zombie', 'shooting', '3d', 'survival', 'action', 'gun', 'arcade'];
      relevantTags.forEach(tag => {
        const tagSlug = tag.toLowerCase().replace(/\s+/g, '-');
        checkContent(file, `/tag/${tagSlug}</loc>`, `Tag page: ${tag}`);
      });
    } else if (file === 'public/sitemap-index.xml') {
      checkContent(file, `<lastmod>${RELEASE_DATE}</lastmod>`, `Updated lastmod in ${desc}`);
    }
  } else {
    allChecksPassed = false;
  }
});

// 7. Check NEW badge logic
console.log('\n🆕 Checking NEW Badge Logic...');
const daysSinceRelease = getDaysSinceRelease(RELEASE_DATE);
if (daysSinceRelease <= 7) {
  console.log(`   ✅ Game is ${daysSinceRelease} days old - NEW badge should display`);
} else {
  console.log(`   ⚠️  Game is ${daysSinceRelease} days old - NEW badge will not display`);
}

// 8. Check SEO requirements
console.log('\n🔍 Checking SEO Requirements...');
const seoAnalysis = analyzeKeywordDensity(PAGE_COMPONENT_PATH, GAME_NAME);
console.log(`   📊 Keyword "${GAME_NAME}" appears ${seoAnalysis.count} times`);
console.log(`   📊 Total words: ${seoAnalysis.totalWords}`);
console.log(`   📊 Keyword density: ${seoAnalysis.density}%`);

if (parseFloat(seoAnalysis.density) >= 2.0) {
  console.log(`   ✅ Keyword density meets 2% requirement`);
} else {
  console.log(`   ❌ Keyword density below 2% requirement`);
  allChecksPassed = false;
}

// Check for H1 tag
if (checkContent(PAGE_COMPONENT_PATH, 'title=', 'H1 tag (title) contains game name')) {
  // Additional check for game name in title
  checkContent(PAGE_COMPONENT_PATH, GAME_NAME, 'Game name in title');
}

// Check for H2/H3 tags
checkContent(PAGE_COMPONENT_PATH, '<h3', 'H2/H3 heading tags');

// Check content length
const fullPath = path.join(process.cwd(), PAGE_COMPONENT_PATH);
if (fs.existsSync(fullPath)) {
  const content = fs.readFileSync(fullPath, 'utf-8');
  const contentLength = content.length;
  if (contentLength > 5000) {
    console.log(`   ✅ Content length sufficient (${contentLength} characters)`);
  } else {
    console.log(`   ⚠️  Content length may be insufficient (${contentLength} characters)`);
  }
}

// Final summary
console.log('\n============================================================');
if (allChecksPassed) {
  console.log('✅ All checks passed! Zombie Strike game is ready.\n');
  console.log('📋 Next Steps:');
  console.log('   1. Run Supabase migration (via API or Dashboard)');
  console.log('   2. Test locally: npm run dev');
  console.log('   3. Visit: http://localhost:3000/zombie-strike');
  console.log('   4. Verify game displays correctly');
  console.log('   5. Check comments load from Supabase');
  console.log('   6. Deploy to production\n');
} else {
  console.log('❌ Some checks failed. Please review the errors above.\n');
  process.exit(1);
}

