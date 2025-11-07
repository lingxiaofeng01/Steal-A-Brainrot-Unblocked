/**
 * Verification Script for Mad Pursuit Game Addition
 * Checks all files and configurations for the new game
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFileExists(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  const exists = fs.existsSync(fullPath);
  if (exists) {
    log(`✅ ${filePath}`, 'green');
  } else {
    log(`❌ ${filePath} - NOT FOUND`, 'red');
  }
  return exists;
}

function checkFileContains(filePath, searchString, description) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) {
    log(`❌ ${description} - File not found: ${filePath}`, 'red');
    return false;
  }
  
  const content = fs.readFileSync(fullPath, 'utf8');
  const contains = content.includes(searchString);
  
  if (contains) {
    log(`✅ ${description}`, 'green');
  } else {
    log(`❌ ${description} - Not found in ${filePath}`, 'red');
  }
  return contains;
}

function analyzeSEO(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) {
    log(`❌ SEO Analysis - File not found: ${filePath}`, 'red');
    return;
  }

  const content = fs.readFileSync(fullPath, 'utf8');
  
  // Count keyword occurrences (case insensitive)
  const keyword = 'Mad Pursuit';
  const keywordRegex = new RegExp(keyword, 'gi');
  const matches = content.match(keywordRegex);
  const keywordCount = matches ? matches.length : 0;
  
  // Count total words (approximate)
  const words = content.match(/\b\w+\b/g);
  const totalWords = words ? words.length : 0;
  
  // Calculate keyword density
  const keywordDensity = totalWords > 0 ? ((keywordCount / totalWords) * 100).toFixed(2) : 0;
  
  // Check for H1 tag
  const hasH1 = content.includes('Mad Pursuit');
  
  // Check for meta description
  const hasDescription = content.includes('description:');
  
  log('\n📊 SEO Analysis:', 'cyan');
  log(`   Keyword "${keyword}" appears: ${keywordCount} times`, 'blue');
  log(`   Total words: ${totalWords}`, 'blue');
  log(`   Keyword density: ${keywordDensity}%`, keywordDensity >= 2 ? 'green' : 'yellow');
  log(`   Content length: ${content.length} characters`, 'blue');
  log(`   H1 with game name: ${hasH1 ? '✅' : '❌'}`, hasH1 ? 'green' : 'red');
  log(`   Meta description: ${hasDescription ? '✅' : '❌'}`, hasDescription ? 'green' : 'red');
  
  if (keywordDensity < 2) {
    log(`   ⚠️  Warning: Keyword density is below 2%`, 'yellow');
  }
  
  if (totalWords < 1000) {
    log(`   ⚠️  Warning: Content has less than 1000 words`, 'yellow');
  }
}

function checkNEWBadgeLogic() {
  log('\n🏷️  Checking NEW Badge Logic:', 'cyan');
  
  const today = new Date();
  const gameDate = new Date('2025-11-07');
  const diffTime = Math.abs(today - gameDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const shouldShowNEW = diffDays <= 7;
  
  log(`   Game release date: 2025-11-07`, 'blue');
  log(`   Days since release: ${diffDays}`, 'blue');
  log(`   Should show NEW badge: ${shouldShowNEW ? 'YES ✅' : 'NO ❌'}`, shouldShowNEW ? 'green' : 'yellow');
}

// Main verification
log('\n🔍 Mad Pursuit Game Verification\n', 'cyan');

log('1️⃣  Checking Required Files:', 'yellow');
const filesExist = [
  checkFileExists('public/images/thumbnails/mad-pursuit.jpg'),
  checkFileExists('src/pages/MadPursuitPage.tsx'),
  checkFileExists('supabase/migrations/20251107_add_mad_pursuit.sql'),
];

log('\n2️⃣  Checking File Contents:', 'yellow');
const contentsCorrect = [
  checkFileContains('src/data/games.ts', 'mad-pursuit', 'Game data in games.ts'),
  checkFileContains('src/data/games.ts', 'Mad Pursuit', 'Game name in games.ts'),
  checkFileContains('src/data/games.ts', '2025-11-07', 'Release date in games.ts'),
  checkFileContains('src/pages/GameDetailPage.tsx', 'mad-pursuit', 'Route in GameDetailPage.tsx'),
  checkFileContains('src/pages/GameDetailPage.tsx', 'MadPursuitPage', 'Component import in GameDetailPage.tsx'),
  checkFileContains('public/sitemap-games.xml', 'mad-pursuit', 'Game in sitemap-games.xml'),
  checkFileContains('public/sitemap-images.xml', 'mad-pursuit.jpg', 'Image in sitemap-images.xml'),
  checkFileContains('public/sitemap-tags.xml', '2025-11-07', 'Updated tag dates in sitemap-tags.xml'),
];

log('\n3️⃣  Checking Game Tags:', 'yellow');
const tags = ['Racing', 'Car', 'Driving', '3D', 'Action', 'Skill', 'Endless Runner', 'Police Chase'];
const tagsCorrect = tags.map(tag => 
  checkFileContains('src/data/games.ts', tag, `Tag: ${tag}`)
);

log('\n4️⃣  SEO Verification:', 'yellow');
analyzeSEO('src/pages/MadPursuitPage.tsx');

checkNEWBadgeLogic();

// Final summary
const allChecks = [...filesExist, ...contentsCorrect, ...tagsCorrect];
const passedChecks = allChecks.filter(Boolean).length;
const totalChecks = allChecks.length;

log('\n' + '='.repeat(50), 'cyan');
log(`📈 Results: ${passedChecks}/${totalChecks} checks passed`, passedChecks === totalChecks ? 'green' : 'yellow');

if (passedChecks === totalChecks) {
  log('\n✅ All checks passed! Mad Pursuit game is ready.', 'green');
  process.exit(0);
} else {
  log('\n⚠️  Some checks failed. Please review the issues above.', 'yellow');
  process.exit(1);
}

