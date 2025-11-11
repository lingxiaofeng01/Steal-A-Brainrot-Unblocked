#!/usr/bin/env node

/**
 * Verification script for Giant Rush game
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

const GAME_SLUG = 'giant-rush';
const GAME_NAME = 'Giant Rush';
const RELEASE_DATE = '2025-11-11';

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFile(filePath, description) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (fs.existsSync(fullPath)) {
    log(`✅ ${description}: ${filePath}`, 'green');
    return true;
  } else {
    log(`❌ ${description}: ${filePath} NOT FOUND`, 'red');
    return false;
  }
}

function checkFileContent(filePath, searchString, description) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) {
    log(`❌ ${description}: ${filePath} NOT FOUND`, 'red');
    return false;
  }

  const content = fs.readFileSync(fullPath, 'utf8');
  if (content.includes(searchString)) {
    log(`✅ ${description}: Found in ${filePath}`, 'green');
    return true;
  } else {
    log(`❌ ${description}: NOT found in ${filePath}`, 'red');
    return false;
  }
}

function checkNewBadge() {
  const releaseDate = new Date(RELEASE_DATE);
  const today = new Date();
  const daysDiff = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
  
  if (daysDiff <= 7) {
    log(`✅ NEW badge should display (${daysDiff} days old, within 7-day window)`, 'green');
    return true;
  } else {
    log(`⚠️  NEW badge will NOT display (${daysDiff} days old, exceeds 7-day window)`, 'yellow');
    return true; // Not an error, just informational
  }
}

function main() {
  log('\n========================================', 'blue');
  log(`Verifying Giant Rush Game Setup`, 'blue');
  log('========================================\n', 'blue');

  let allChecks = true;

  // 1. Check thumbnail
  log('1. Checking thumbnail...', 'yellow');
  allChecks &= checkFile(`public/images/thumbnails/${GAME_SLUG}.png`, 'Thumbnail image');

  // 2. Check games.ts
  log('\n2. Checking games.ts...', 'yellow');
  allChecks &= checkFileContent('src/data/games.ts', `slug: '${GAME_SLUG}'`, 'Game entry in games.ts');
  allChecks &= checkFileContent('src/data/games.ts', `name: '${GAME_NAME}'`, 'Game name in games.ts');
  allChecks &= checkFileContent('src/data/games.ts', `releaseDate: '${RELEASE_DATE}'`, 'Release date in games.ts');

  // 3. Check game page component
  log('\n3. Checking game page component...', 'yellow');
  allChecks &= checkFile(`src/pages/GiantRushPage.tsx`, 'Game page component');
  allChecks &= checkFileContent(`src/pages/GiantRushPage.tsx`, 'Giant Rush', 'Game title in page component');

  // 4. Check GameDetailPage.tsx registration
  log('\n4. Checking GameDetailPage.tsx registration...', 'yellow');
  allChecks &= checkFileContent('src/pages/GameDetailPage.tsx', `'${GAME_SLUG}': lazy(() => import('./GiantRushPage'))`, 'Game registration in GameDetailPage.tsx');

  // 5. Check Supabase migration
  log('\n5. Checking Supabase migration...', 'yellow');
  const migrationFile = `supabase/migrations/20251111_add_giant_rush.sql`;
  allChecks &= checkFile(migrationFile, 'Supabase migration file');
  allChecks &= checkFileContent(migrationFile, `slug = '${GAME_SLUG}'`, 'Game slug in migration');
  allChecks &= checkFileContent(migrationFile, 'INSERT INTO games', 'Game insert statement');
  allChecks &= checkFileContent(migrationFile, 'INSERT INTO tags', 'Tags insert statement');
  allChecks &= checkFileContent(migrationFile, 'INSERT INTO game_tags', 'Game-tags association');
  allChecks &= checkFileContent(migrationFile, 'INSERT INTO game_comments', 'Initial comment');

  // 6. Check sitemap files
  log('\n6. Checking sitemap files...', 'yellow');
  allChecks &= checkFileContent('public/sitemap-games.xml', `/${GAME_SLUG}</loc>`, 'Game in sitemap-games.xml');
  allChecks &= checkFileContent('public/sitemap-images.xml', `/${GAME_SLUG}</loc>`, 'Game in sitemap-images.xml');
  allChecks &= checkFileContent('public/sitemap-tags.xml', '/tag/running</loc>', 'Running tag in sitemap-tags.xml');
  allChecks &= checkFileContent('public/sitemap-tags.xml', '/tag/stickman</loc>', 'Stickman tag in sitemap-tags.xml');
  allChecks &= checkFileContent('public/sitemap-tags.xml', '/tag/fighting</loc>', 'Fighting tag in sitemap-tags.xml');

  // 7. Check NEW badge logic
  log('\n7. Checking NEW badge logic...', 'yellow');
  checkNewBadge();

  // 8. Check tags
  log('\n8. Checking game tags...', 'yellow');
  const expectedTags = ['Running', 'Action', '3D', 'Stickman', 'Fighting', 'Casual', 'Skill', 'Single Player', 'Boss Battle', 'Collect', 'Unblocked', 'Browser'];
  const gamesContent = fs.readFileSync(path.join(__dirname, '..', 'src/data/games.ts'), 'utf8');
  
  let tagsFound = 0;
  expectedTags.forEach(tag => {
    if (gamesContent.includes(`'${tag}'`)) {
      tagsFound++;
    }
  });
  
  if (tagsFound === expectedTags.length) {
    log(`✅ All ${expectedTags.length} tags found in games.ts`, 'green');
  } else {
    log(`⚠️  Only ${tagsFound}/${expectedTags.length} tags found in games.ts`, 'yellow');
  }

  // Summary
  log('\n========================================', 'blue');
  if (allChecks) {
    log('✅ All checks passed!', 'green');
    log('\nNext steps:', 'yellow');
    log('1. Run Supabase migration (via API or Dashboard)', 'reset');
    log('2. Verify data in Supabase database', 'reset');
    log('3. Test game page locally: http://localhost:3000/giant-rush', 'reset');
    log('4. Check game appears in homepage, category pages, and tag pages', 'reset');
  } else {
    log('❌ Some checks failed. Please fix the issues above.', 'red');
  }
  log('========================================\n', 'blue');

  process.exit(allChecks ? 0 : 1);
}

main();

