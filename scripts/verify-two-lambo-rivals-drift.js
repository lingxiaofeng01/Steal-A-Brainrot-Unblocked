/**
 * Verification Script for Two Lambo Rivals Drift Game
 * 
 * This script verifies that all necessary files and configurations
 * have been properly set up for the new game.
 */

const fs = require('fs');
const path = require('path');

const GAME_SLUG = 'two-lambo-rivals-drift';
const GAME_NAME = 'Two Lambo Rivals Drift';
const RELEASE_DATE = '2025-11-10';
const TAGS = ['Racing', 'Driving', 'Drift', 'Car', 'Multiplayer', '2 Player', '3D', 'Action', 'Skill', 'Lamborghini'];

// Color codes for console output
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

function checkFileExists(filePath, description) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (fs.existsSync(fullPath)) {
    log(`✅ ${description}: ${filePath}`, 'green');
    return true;
  } else {
    log(`❌ ${description}: ${filePath} NOT FOUND`, 'red');
    return false;
  }
}

function checkFileContains(filePath, searchString, description) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) {
    log(`❌ ${description}: File ${filePath} NOT FOUND`, 'red');
    return false;
  }
  
  const content = fs.readFileSync(fullPath, 'utf8');
  if (content.includes(searchString)) {
    log(`✅ ${description}`, 'green');
    return true;
  } else {
    log(`❌ ${description}: "${searchString}" NOT FOUND in ${filePath}`, 'red');
    return false;
  }
}

function checkNewBadgeLogic() {
  const releaseDate = new Date(RELEASE_DATE);
  const today = new Date();
  const daysDiff = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
  
  if (daysDiff <= 7) {
    log(`✅ NEW badge should display (${daysDiff} days since release)`, 'green');
    return true;
  } else {
    log(`⚠️  NEW badge will NOT display (${daysDiff} days since release, > 7 days)`, 'yellow');
    return true; // Not an error, just informational
  }
}

function verifyGame() {
  log('\n========================================', 'cyan');
  log('Two Lambo Rivals Drift - Verification', 'cyan');
  log('========================================\n', 'cyan');

  let allChecks = true;

  // 1. Check thumbnail exists
  log('1. Checking Thumbnail...', 'blue');
  allChecks &= checkFileExists(
    'public/images/thumbnails/two-lambo-rivals-drift.jpeg',
    'Thumbnail image'
  );

  // 2. Check game added to games.ts
  log('\n2. Checking games.ts...', 'blue');
  allChecks &= checkFileContains(
    'src/data/games.ts',
    `slug: '${GAME_SLUG}'`,
    'Game entry in games.ts'
  );
  allChecks &= checkFileContains(
    'src/data/games.ts',
    `name: '${GAME_NAME}'`,
    'Game name in games.ts'
  );
  allChecks &= checkFileContains(
    'src/data/games.ts',
    `releaseDate: '${RELEASE_DATE}'`,
    'Release date in games.ts'
  );

  // Check all tags
  TAGS.forEach(tag => {
    allChecks &= checkFileContains(
      'src/data/games.ts',
      `'${tag}'`,
      `Tag "${tag}" in games.ts`
    );
  });

  // 3. Check game page component exists
  log('\n3. Checking Game Page Component...', 'blue');
  allChecks &= checkFileExists(
    'src/pages/TwoLamboRivalsDriftPage.tsx',
    'Game page component'
  );

  // 4. Check page registered in GameDetailPage.tsx
  log('\n4. Checking GameDetailPage.tsx Registration...', 'blue');
  allChecks &= checkFileContains(
    'src/pages/GameDetailPage.tsx',
    `'${GAME_SLUG}': lazy(() => import('./TwoLamboRivalsDriftPage'))`,
    'Page registration in GameDetailPage.tsx'
  );

  // 5. Check Supabase migration file
  log('\n5. Checking Supabase Migration...', 'blue');
  allChecks &= checkFileExists(
    'supabase/migrations/20251110_add_two_lambo_rivals_drift.sql',
    'Supabase migration file'
  );
  allChecks &= checkFileContains(
    'supabase/migrations/20251110_add_two_lambo_rivals_drift.sql',
    `slug = '${GAME_SLUG}'`,
    'Game slug in migration'
  );
  allChecks &= checkFileContains(
    'supabase/migrations/20251110_add_two_lambo_rivals_drift.sql',
    'INSERT INTO games',
    'Game record insertion'
  );
  allChecks &= checkFileContains(
    'supabase/migrations/20251110_add_two_lambo_rivals_drift.sql',
    'INSERT INTO tags',
    'Tags insertion'
  );
  allChecks &= checkFileContains(
    'supabase/migrations/20251110_add_two_lambo_rivals_drift.sql',
    'INSERT INTO game_tags',
    'Game-tags association'
  );
  allChecks &= checkFileContains(
    'supabase/migrations/20251110_add_two_lambo_rivals_drift.sql',
    'INSERT INTO game_comments',
    'Initial comment insertion'
  );

  // 6. Check sitemap files
  log('\n6. Checking Sitemap Files...', 'blue');
  allChecks &= checkFileContains(
    'public/sitemap-games.xml',
    `<loc>https://www.stealabrainrotunblocked.com/${GAME_SLUG}</loc>`,
    'Game in sitemap-games.xml'
  );
  allChecks &= checkFileContains(
    'public/sitemap-images.xml',
    `<loc>https://www.stealabrainrotunblocked.com/${GAME_SLUG}</loc>`,
    'Game in sitemap-images.xml'
  );
  allChecks &= checkFileContains(
    'public/sitemap-tags.xml',
    '<lastmod>2025-11-10</lastmod>',
    'Updated tags in sitemap-tags.xml'
  );

  // 7. Check NEW badge logic
  log('\n7. Checking NEW Badge Logic...', 'blue');
  allChecks &= checkNewBadgeLogic();

  // 8. Check SEO elements in game page
  log('\n8. Checking SEO Elements...', 'blue');
  allChecks &= checkFileContains(
    'src/pages/TwoLamboRivalsDriftPage.tsx',
    '<h1',
    'H1 tag in game page'
  );
  allChecks &= checkFileContains(
    'src/pages/TwoLamboRivalsDriftPage.tsx',
    '<h2',
    'H2 tags in game page'
  );
  allChecks &= checkFileContains(
    'src/pages/TwoLamboRivalsDriftPage.tsx',
    'text-gray-800',
    'Dark text color for headings (not white)'
  );

  // Final summary
  log('\n========================================', 'cyan');
  if (allChecks) {
    log('✅ ALL CHECKS PASSED!', 'green');
    log('========================================\n', 'cyan');
    log('Next Steps:', 'yellow');
    log('1. Run Supabase migration (via API or Dashboard)', 'yellow');
    log('2. Test locally: npm run dev', 'yellow');
    log('3. Visit: http://localhost:3000/two-lambo-rivals-drift', 'yellow');
    log('4. Verify game displays correctly', 'yellow');
    log('5. Check comments load from Supabase', 'yellow');
    log('6. Deploy to production\n', 'yellow');
    process.exit(0);
  } else {
    log('❌ SOME CHECKS FAILED', 'red');
    log('========================================\n', 'cyan');
    log('Please fix the issues above before proceeding.\n', 'red');
    process.exit(1);
  }
}

// Run verification
verifyGame();

