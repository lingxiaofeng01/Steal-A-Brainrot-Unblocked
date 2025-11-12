/**
 * Verification Script for Ski Frenzy Game Addition
 * Date: 2025-11-12
 * 
 * This script verifies that all components for the Ski Frenzy game
 * have been properly added to the codebase and database.
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

const GAME_SLUG = 'ski-frenzy';
const GAME_NAME = 'Ski Frenzy';
const RELEASE_DATE = '2025-11-12';

const EXPECTED_TAGS = [
  'Sports', 'Skiing', 'Action', 'Arcade', '3D', 'Endless Runner',
  'Casual', 'Adventure', 'Animals', 'Skill', 'Challenge',
  'Unblocked', 'Browser', 'Single Player', 'Pixel'
];

let passCount = 0;
let failCount = 0;

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function pass(message) {
  passCount++;
  log(`✓ ${message}`, colors.green);
}

function fail(message) {
  failCount++;
  log(`✗ ${message}`, colors.red);
}

function info(message) {
  log(`ℹ ${message}`, colors.cyan);
}

function section(title) {
  log(`\n${'='.repeat(60)}`, colors.blue);
  log(title, colors.blue);
  log('='.repeat(60), colors.blue);
}

// Check if file exists
function fileExists(filePath) {
  return fs.existsSync(path.join(__dirname, '..', filePath));
}

// Read file content
function readFile(filePath) {
  try {
    return fs.readFileSync(path.join(__dirname, '..', filePath), 'utf8');
  } catch (error) {
    return null;
  }
}

// Verification checks
function verifyThumbnail() {
  section('1. Thumbnail File');
  const thumbnailPath = 'public/images/thumbnails/ski-frenzy.jpg';
  
  if (fileExists(thumbnailPath)) {
    pass(`Thumbnail exists at ${thumbnailPath}`);
  } else {
    fail(`Thumbnail not found at ${thumbnailPath}`);
  }
}

function verifyGameData() {
  section('2. Game Data (src/data/games.ts)');
  const gamesContent = readFile('src/data/games.ts');
  
  if (!gamesContent) {
    fail('Could not read src/data/games.ts');
    return;
  }
  
  if (gamesContent.includes("name: 'Ski Frenzy'")) {
    pass('Game name found in games.ts');
  } else {
    fail('Game name not found in games.ts');
  }
  
  if (gamesContent.includes("slug: 'ski-frenzy'")) {
    pass('Game slug found in games.ts');
  } else {
    fail('Game slug not found in games.ts');
  }
  
  if (gamesContent.includes(`releaseDate: '${RELEASE_DATE}'`)) {
    pass(`Release date ${RELEASE_DATE} found in games.ts`);
  } else {
    fail(`Release date ${RELEASE_DATE} not found in games.ts`);
  }
  
  // Check tags
  const missingTags = EXPECTED_TAGS.filter(tag => !gamesContent.includes(`'${tag}'`));
  if (missingTags.length === 0) {
    pass(`All ${EXPECTED_TAGS.length} tags found in games.ts`);
  } else {
    fail(`Missing tags in games.ts: ${missingTags.join(', ')}`);
  }
}

function verifyPageComponent() {
  section('3. Page Component');
  const pagePath = 'src/pages/SkiFrenzyPage.tsx';
  
  if (fileExists(pagePath)) {
    pass(`Page component exists at ${pagePath}`);
    
    const pageContent = readFile(pagePath);
    if (pageContent) {
      if (pageContent.includes('GameDetailTemplate')) {
        pass('Page uses GameDetailTemplate component');
      } else {
        fail('Page does not use GameDetailTemplate component');
      }
      
      if (pageContent.includes('text-gray-800')) {
        pass('H2 headings use text-gray-800 (correct color)');
      } else {
        fail('H2 headings may not use text-gray-800');
      }
      
      // Count keyword density
      const keywordCount = (pageContent.match(/Ski Frenzy/gi) || []).length;
      const wordCount = pageContent.split(/\s+/).length;
      const density = ((keywordCount / wordCount) * 100).toFixed(2);
      
      if (parseFloat(density) >= 2.0) {
        pass(`Keyword density: ${density}% (≥2% target met)`);
      } else {
        fail(`Keyword density: ${density}% (below 2% target)`);
      }
    }
  } else {
    fail(`Page component not found at ${pagePath}`);
  }
}

function verifyRouteRegistration() {
  section('4. Route Registration');
  const routeContent = readFile('src/pages/GameDetailPage.tsx');
  
  if (!routeContent) {
    fail('Could not read src/pages/GameDetailPage.tsx');
    return;
  }
  
  if (routeContent.includes("'ski-frenzy': lazy(() => import('./SkiFrenzyPage'))")) {
    pass('Route registered in GameDetailPage.tsx');
  } else {
    fail('Route not registered in GameDetailPage.tsx');
  }
}

function verifyMigrationFile() {
  section('5. Supabase Migration File');
  const migrationPath = 'supabase/migrations/20251112_add_ski_frenzy.sql';
  
  if (fileExists(migrationPath)) {
    pass(`Migration file exists at ${migrationPath}`);
    
    const migrationContent = readFile(migrationPath);
    if (migrationContent) {
      if (migrationContent.includes("slug = 'ski-frenzy'")) {
        pass('Migration includes game slug');
      } else {
        fail('Migration does not include game slug');
      }
      
      if (migrationContent.includes('game_tags')) {
        pass('Migration includes tag associations');
      } else {
        fail('Migration does not include tag associations');
      }
      
      if (migrationContent.includes('game_comments')) {
        pass('Migration includes comment');
      } else {
        fail('Migration does not include comment');
      }
    }
  } else {
    fail(`Migration file not found at ${migrationPath}`);
  }
}

function verifySitemaps() {
  section('6. Sitemap Files');
  
  const sitemapGames = readFile('public/sitemap-games.xml');
  if (sitemapGames && sitemapGames.includes('/ski-frenzy</loc>')) {
    pass('Game added to sitemap-games.xml');
  } else {
    fail('Game not found in sitemap-games.xml');
  }
  
  const sitemapImages = readFile('public/sitemap-images.xml');
  if (sitemapImages && sitemapImages.includes('ski-frenzy.jpg')) {
    pass('Thumbnail added to sitemap-images.xml');
  } else {
    fail('Thumbnail not found in sitemap-images.xml');
  }
  
  const sitemapTags = readFile('public/sitemap-tags.xml');
  if (sitemapTags && sitemapTags.includes('<lastmod>2025-11-12</lastmod>')) {
    pass('Tag pages updated with new date in sitemap-tags.xml');
  } else {
    fail('Tag pages not updated in sitemap-tags.xml');
  }
}

function verifyNewBadge() {
  section('7. NEW Badge Logic');
  
  const releaseDate = new Date(RELEASE_DATE);
  const today = new Date();
  const daysDiff = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
  
  if (daysDiff <= 7) {
    pass(`Game is ${daysDiff} days old - NEW badge should display (≤7 days)`);
  } else {
    info(`Game is ${daysDiff} days old - NEW badge will not display (>7 days)`);
  }
}

function printSummary() {
  section('Verification Summary');
  
  const total = passCount + failCount;
  const successRate = ((passCount / total) * 100).toFixed(1);
  
  log(`\nTotal Checks: ${total}`, colors.cyan);
  log(`Passed: ${passCount}`, colors.green);
  log(`Failed: ${failCount}`, failCount > 0 ? colors.red : colors.green);
  log(`Success Rate: ${successRate}%\n`, successRate === '100.0' ? colors.green : colors.yellow);
  
  if (failCount === 0) {
    log('🎉 All verification checks passed! Ski Frenzy is ready to go!', colors.green);
  } else {
    log('⚠️  Some checks failed. Please review the issues above.', colors.yellow);
  }
}

// Run all verifications
function runVerification() {
  log('\n' + '='.repeat(60), colors.blue);
  log('SKI FRENZY GAME VERIFICATION SCRIPT', colors.blue);
  log('='.repeat(60) + '\n', colors.blue);
  
  verifyThumbnail();
  verifyGameData();
  verifyPageComponent();
  verifyRouteRegistration();
  verifyMigrationFile();
  verifySitemaps();
  verifyNewBadge();
  printSummary();
}

// Execute
runVerification();

