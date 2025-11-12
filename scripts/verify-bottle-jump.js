#!/usr/bin/env node

/**
 * Verification Script for Bottle Jump Game
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

const GAME_SLUG = 'bottle-jump';
const GAME_NAME = 'Bottle Jump';
const RELEASE_DATE = '2025-11-12';

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
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
    log(`✅ ${description}`, 'green');
    passed++;
    return true;
  } else {
    log(`❌ ${description} - File not found: ${filePath}`, 'red');
    errors++;
    return false;
  }
}

function checkFileContent(filePath, searchString, description) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) {
    log(`❌ ${description} - File not found: ${filePath}`, 'red');
    errors++;
    return false;
  }

  const content = fs.readFileSync(fullPath, 'utf8');
  if (content.includes(searchString)) {
    log(`✅ ${description}`, 'green');
    passed++;
    return true;
  } else {
    log(`❌ ${description} - Content not found in ${filePath}`, 'red');
    errors++;
    return false;
  }
}

function checkNewBadge() {
  const releaseDate = new Date(RELEASE_DATE);
  const today = new Date();
  const diffTime = Math.abs(today - releaseDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays <= 7) {
    log(`✅ NEW badge should display (${diffDays} days old)`, 'green');
    passed++;
    return true;
  } else {
    log(`⚠️  NEW badge will not display (${diffDays} days old, > 7 days)`, 'yellow');
    warnings++;
    return false;
  }
}

function checkTags() {
  const gamesPath = path.join(__dirname, '..', 'src/data/games.ts');
  const content = fs.readFileSync(gamesPath, 'utf8');
  
  const expectedTags = [
    'Casual', 'Arcade', 'Skill', 'Physics', 'Single Player',
    'Challenge', 'Timing', 'Flip', 'Jump', 'Unblocked', 'Browser', '3D'
  ];

  const gameMatch = content.match(/name: 'Bottle Jump'[\s\S]*?tags: \[([\s\S]*?)\]/);
  if (!gameMatch) {
    log(`❌ Could not find Bottle Jump tags in games.ts`, 'red');
    errors++;
    return false;
  }

  const tagsString = gameMatch[1];
  let allTagsFound = true;

  expectedTags.forEach(tag => {
    if (tagsString.includes(`'${tag}'`)) {
      log(`  ✓ Tag found: ${tag}`, 'green');
    } else {
      log(`  ✗ Tag missing: ${tag}`, 'red');
      allTagsFound = false;
    }
  });

  if (allTagsFound) {
    log(`✅ All ${expectedTags.length} tags are present`, 'green');
    passed++;
    return true;
  } else {
    log(`❌ Some tags are missing`, 'red');
    errors++;
    return false;
  }
}

function checkSitemaps() {
  const sitemaps = [
    'public/sitemap-games.xml',
    'public/sitemap-images.xml',
    'public/sitemap.xml',
    'public/sitemap-tags.xml',
    'public/sitemap-index.xml'
  ];

  let allUpdated = true;

  sitemaps.forEach(sitemap => {
    const fullPath = path.join(__dirname, '..', sitemap);
    const content = fs.readFileSync(fullPath, 'utf8');
    
    if (sitemap.includes('games') || sitemap.includes('images')) {
      if (content.includes(GAME_SLUG)) {
        log(`  ✓ ${sitemap} contains ${GAME_SLUG}`, 'green');
      } else {
        log(`  ✗ ${sitemap} missing ${GAME_SLUG}`, 'red');
        allUpdated = false;
      }
    }

    if (content.includes(RELEASE_DATE)) {
      log(`  ✓ ${sitemap} updated to ${RELEASE_DATE}`, 'green');
    } else {
      log(`  ⚠ ${sitemap} may need date update`, 'yellow');
      warnings++;
    }
  });

  if (allUpdated) {
    log(`✅ All sitemaps properly updated`, 'green');
    passed++;
    return true;
  } else {
    log(`❌ Some sitemaps need updates`, 'red');
    errors++;
    return false;
  }
}

// Run all checks
log('\n========================================', 'blue');
log('  Bottle Jump Verification Script', 'blue');
log('========================================\n', 'blue');

log('📁 Checking Files...', 'blue');
checkFile('public/images/thumbnails/bottle-jump.png', 'Thumbnail image exists');
checkFile('src/pages/BottleJumpPage.tsx', 'Game page component exists');
checkFile('supabase/migrations/20251112_add_bottle_jump.sql', 'Supabase migration file exists');

log('\n📝 Checking Content...', 'blue');
checkFileContent('src/data/games.ts', "slug: 'bottle-jump'", 'Game added to games.ts');
checkFileContent('src/data/games.ts', "releaseDate: '2025-11-12'", 'Release date is correct');
checkFileContent('src/pages/GameDetailPage.tsx', "'bottle-jump'", 'Game registered in GameDetailPage.tsx');
checkFileContent('src/pages/BottleJumpPage.tsx', 'Bottle Jump', 'Game page has correct title');

log('\n🏷️  Checking Tags...', 'blue');
checkTags();

log('\n🗺️  Checking Sitemaps...', 'blue');
checkSitemaps();

log('\n🆕 Checking NEW Badge...', 'blue');
checkNewBadge();

log('\n📊 Checking SEO Requirements...', 'blue');
const pagePath = path.join(__dirname, '..', 'src/pages/BottleJumpPage.tsx');
const pageContent = fs.readFileSync(pagePath, 'utf8');

// Count "Bottle Jump" occurrences for keyword density
const bottleJumpCount = (pageContent.match(/Bottle Jump/g) || []).length;
const totalWords = pageContent.split(/\s+/).length;
const keywordDensity = ((bottleJumpCount / totalWords) * 100).toFixed(2);

log(`  Keyword "Bottle Jump" appears ${bottleJumpCount} times`, 'blue');
log(`  Total words: ${totalWords}`, 'blue');
log(`  Keyword density: ${keywordDensity}%`, 'blue');

if (parseFloat(keywordDensity) >= 2.0) {
  log(`✅ Keyword density meets 2% requirement (${keywordDensity}%)`, 'green');
  passed++;
} else {
  log(`⚠️  Keyword density below 2% (${keywordDensity}%)`, 'yellow');
  warnings++;
}

// Check for H2 and H3 tags
if (pageContent.includes('<h3 className="text-2xl font-bold text-gray-800')) {
  log(`✅ H3 tags use correct styling (text-gray-800)`, 'green');
  passed++;
} else {
  log(`⚠️  Check H3 tag styling`, 'yellow');
  warnings++;
}

// Summary
log('\n========================================', 'blue');
log('  Verification Summary', 'blue');
log('========================================', 'blue');
log(`✅ Passed: ${passed}`, 'green');
log(`⚠️  Warnings: ${warnings}`, 'yellow');
log(`❌ Errors: ${errors}`, 'red');

if (errors === 0) {
  log('\n🎉 All critical checks passed!', 'green');
  log('Next steps:', 'blue');
  log('1. Run Supabase migration (via API or Dashboard)', 'blue');
  log('2. Test locally: npm run dev', 'blue');
  log('3. Visit: http://localhost:3000/bottle-jump', 'blue');
  process.exit(0);
} else {
  log('\n❌ Some checks failed. Please fix the errors above.', 'red');
  process.exit(1);
}

