#!/usr/bin/env node

/**
 * Verification Script for Highway Heat Game
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

const GAME_SLUG = 'highway-heat';
const GAME_NAME = 'Highway Heat';
const RELEASE_DATE = '2025-11-11';

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

let errors = 0;
let warnings = 0;
let passed = 0;

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFile(filePath, description) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (fs.existsSync(fullPath)) {
    log(`✅ ${description}: ${filePath}`, 'green');
    passed++;
    return true;
  } else {
    log(`❌ ${description}: ${filePath} NOT FOUND`, 'red');
    errors++;
    return false;
  }
}

function checkFileContent(filePath, searchString, description) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) {
    log(`❌ ${description}: ${filePath} NOT FOUND`, 'red');
    errors++;
    return false;
  }

  const content = fs.readFileSync(fullPath, 'utf-8');
  if (content.includes(searchString)) {
    log(`✅ ${description}: Found in ${filePath}`, 'green');
    passed++;
    return true;
  } else {
    log(`❌ ${description}: NOT found in ${filePath}`, 'red');
    errors++;
    return false;
  }
}

function checkNewBadge() {
  const releaseDate = new Date(RELEASE_DATE);
  const today = new Date();
  const daysDiff = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));

  if (daysDiff <= 7) {
    log(`✅ NEW badge should display (${daysDiff} days old)`, 'green');
    passed++;
    return true;
  } else {
    log(`⚠️  NEW badge will NOT display (${daysDiff} days old, > 7 days)`, 'yellow');
    warnings++;
    return false;
  }
}

function checkKeywordDensity() {
  const pagePath = path.join(__dirname, '..', 'src/pages/HighwayHeatPage.tsx');
  if (!fs.existsSync(pagePath)) {
    log(`❌ Keyword density check: Page file not found`, 'red');
    errors++;
    return false;
  }

  const content = fs.readFileSync(pagePath, 'utf-8');
  
  // Count occurrences of "Highway Heat" (case insensitive)
  const matches = content.match(/highway\s+heat/gi) || [];
  const keywordCount = matches.length;
  
  // Count total words (rough estimate)
  const words = content.match(/\b\w+\b/g) || [];
  const totalWords = words.length;
  
  const density = ((keywordCount / totalWords) * 100).toFixed(2);
  
  if (density >= 2.0) {
    log(`✅ Keyword density: ${density}% (${keywordCount} occurrences in ~${totalWords} words)`, 'green');
    passed++;
    return true;
  } else if (density >= 1.5) {
    log(`⚠️  Keyword density: ${density}% (target: 2%, current: ${keywordCount} occurrences)`, 'yellow');
    warnings++;
    return false;
  } else {
    log(`❌ Keyword density: ${density}% (too low, target: 2%)`, 'red');
    errors++;
    return false;
  }
}

function main() {
  log('\n========================================', 'cyan');
  log('  Highway Heat Verification Script', 'cyan');
  log('========================================\n', 'cyan');

  log('📋 Checking Files...', 'blue');
  log('');

  // 1. Check thumbnail
  checkFile('public/images/thumbnails/highway-heat.jpg', 'Thumbnail image');

  // 2. Check game data in games.ts
  checkFileContent('src/data/games.ts', "slug: 'highway-heat'", 'Game data in games.ts');
  checkFileContent('src/data/games.ts', "name: 'Highway Heat'", 'Game name in games.ts');
  checkFileContent('src/data/games.ts', "releaseDate: '2025-11-11'", 'Release date in games.ts');

  // 3. Check game page component
  checkFile('src/pages/HighwayHeatPage.tsx', 'Game page component');

  // 4. Check page registration
  checkFileContent(
    'src/pages/GameDetailPage.tsx',
    "'highway-heat': lazy(() => import('./HighwayHeatPage'))",
    'Page registration in GameDetailPage.tsx'
  );

  // 5. Check Supabase migration
  checkFile('supabase/migrations/20251111_add_highway_heat.sql', 'Supabase migration script');

  // 6. Check sitemap files
  log('\n📄 Checking Sitemap Files...', 'blue');
  log('');
  checkFileContent('public/sitemap-games.xml', 'highway-heat', 'Game in sitemap-games.xml');
  checkFileContent('public/sitemap-images.xml', 'highway-heat', 'Game in sitemap-images.xml');
  checkFileContent('public/sitemap.xml', '2025-11-11', 'Updated date in sitemap.xml');
  checkFileContent('public/sitemap-tags.xml', '2025-11-11', 'Updated date in sitemap-tags.xml');
  checkFileContent('public/sitemap-index.xml', '2025-11-11', 'Updated date in sitemap-index.xml');

  // 7. Check NEW badge logic
  log('\n🆕 Checking NEW Badge...', 'blue');
  log('');
  checkNewBadge();

  // 8. Check keyword density
  log('\n🔍 Checking SEO Keyword Density...', 'blue');
  log('');
  checkKeywordDensity();

  // 9. Check tags
  log('\n🏷️  Checking Tags...', 'blue');
  log('');
  const expectedTags = ['Racing', 'Driving', 'Car', 'Endless Runner', '3D', 'Speed', 'Skill', 'Survival', 'Casual', 'Action', 'Unblocked', 'Browser'];
  const gamesContent = fs.readFileSync(path.join(__dirname, '..', 'src/data/games.ts'), 'utf-8');
  
  expectedTags.forEach(tag => {
    if (gamesContent.includes(`'${tag}'`)) {
      log(`✅ Tag found: ${tag}`, 'green');
      passed++;
    } else {
      log(`❌ Tag missing: ${tag}`, 'red');
      errors++;
    }
  });

  // Summary
  log('\n========================================', 'cyan');
  log('  Verification Summary', 'cyan');
  log('========================================\n', 'cyan');

  log(`✅ Passed: ${passed}`, 'green');
  if (warnings > 0) {
    log(`⚠️  Warnings: ${warnings}`, 'yellow');
  }
  if (errors > 0) {
    log(`❌ Errors: ${errors}`, 'red');
  }

  log('');

  if (errors === 0 && warnings === 0) {
    log('🎉 All checks passed! Highway Heat is ready to deploy!', 'green');
    process.exit(0);
  } else if (errors === 0) {
    log('✅ All critical checks passed, but there are some warnings.', 'yellow');
    process.exit(0);
  } else {
    log('❌ Some checks failed. Please fix the errors before deploying.', 'red');
    process.exit(1);
  }
}

main();

