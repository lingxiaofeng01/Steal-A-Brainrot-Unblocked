#!/usr/bin/env node

/**
 * Verification Script for White Horizon Game
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

const GAME_SLUG = 'white-horizon';
const GAME_NAME = 'White Horizon';
const RELEASE_DATE = '2025-11-11';

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

let passCount = 0;
let failCount = 0;

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkPass(message) {
  log(`✅ ${message}`, 'green');
  passCount++;
}

function checkFail(message) {
  log(`❌ ${message}`, 'red');
  failCount++;
}

function checkWarning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

function checkInfo(message) {
  log(`ℹ️  ${message}`, 'cyan');
}

// Check 1: Thumbnail exists
function checkThumbnail() {
  const thumbnailPath = path.join(__dirname, '..', 'public', 'images', 'thumbnails', `${GAME_SLUG}.jpg`);
  if (fs.existsSync(thumbnailPath)) {
    const stats = fs.statSync(thumbnailPath);
    checkPass(`Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
  } else {
    checkFail('Thumbnail file not found');
  }
}

// Check 2: Game added to games.ts
function checkGamesData() {
  const gamesPath = path.join(__dirname, '..', 'src', 'data', 'games.ts');
  const content = fs.readFileSync(gamesPath, 'utf-8');
  
  if (content.includes(`slug: '${GAME_SLUG}'`)) {
    checkPass('Game added to games.ts');
    
    // Check if it's at the beginning of the array
    const gameIndex = content.indexOf(`slug: '${GAME_SLUG}'`);
    const arrayStart = content.indexOf('export const allGames: Game[] = [');
    const firstGameIndex = content.indexOf('name:', arrayStart);
    
    if (gameIndex < firstGameIndex + 500) {
      checkPass('Game is at the beginning of the array');
    } else {
      checkWarning('Game should be at the beginning of the array');
    }
    
    // Check required fields
    const requiredFields = ['name:', 'image:', 'slug:', 'isReal: true', 'url:', 'releaseDate:', 'tags:', 'rating:', 'playCount:'];
    requiredFields.forEach(field => {
      const fieldIndex = content.indexOf(field, gameIndex - 200);
      if (fieldIndex > 0 && fieldIndex < gameIndex + 500) {
        checkPass(`Field '${field}' present`);
      } else {
        checkFail(`Field '${field}' missing`);
      }
    });
    
    // Check tags
    const expectedTags = ['Skiing', 'Sports', 'Skill', '3D', 'Physics', 'Casual', 'Single Player', 'Challenge', 'Endless Runner', 'Action', 'Unblocked', 'Browser'];
    expectedTags.forEach(tag => {
      if (content.includes(`'${tag}'`)) {
        checkPass(`Tag found: ${tag}`);
      } else {
        checkWarning(`Tag missing: ${tag}`);
      }
    });
  } else {
    checkFail('Game not found in games.ts');
  }
}

// Check 3: Game page component exists
function checkGamePage() {
  const pagePath = path.join(__dirname, '..', 'src', 'pages', 'WhiteHorizonPage.tsx');
  if (fs.existsSync(pagePath)) {
    checkPass('Game page component exists');
    
    const content = fs.readFileSync(pagePath, 'utf-8');
    
    // Check for required content sections
    if (content.includes('aboutContent')) {
      checkPass('About content section present');
    } else {
      checkFail('About content section missing');
    }
    
    if (content.includes('howToPlayContent')) {
      checkPass('How to Play content section present');
    } else {
      checkFail('How to Play content section missing');
    }
    
    if (content.includes('featuresContent')) {
      checkPass('Features content section present');
    } else {
      checkFail('Features content section missing');
    }
    
    // Check keyword density (approximate)
    const gameNameCount = (content.match(/White Horizon/g) || []).length;
    const wordCount = content.split(/\s+/).length;
    const density = (gameNameCount / wordCount) * 100;
    
    if (density >= 1.8 && density <= 3.0) {
      checkPass(`Keyword density: ${density.toFixed(2)}% (target: 2%)`);
    } else if (density >= 1.5 && density < 1.8) {
      checkWarning(`Keyword density: ${density.toFixed(2)}% (slightly low, target: 2%)`);
    } else if (density > 3.0) {
      checkWarning(`Keyword density: ${density.toFixed(2)}% (too high, target: 2%)`);
    } else {
      checkFail(`Keyword density: ${density.toFixed(2)}% (too low, target: 2%)`);
    }
    
    // Check for H2 headings with proper styling
    if (content.includes('text-gray-800')) {
      checkPass('H2 headings use correct text color (text-gray-800)');
    } else {
      checkWarning('H2 headings should use text-gray-800 for visibility');
    }
  } else {
    checkFail('Game page component not found');
  }
}

// Check 4: Game registered in GameDetailPage.tsx
function checkGameRegistration() {
  const detailPagePath = path.join(__dirname, '..', 'src', 'pages', 'GameDetailPage.tsx');
  const content = fs.readFileSync(detailPagePath, 'utf-8');
  
  if (content.includes(`'${GAME_SLUG}': lazy(() => import('./WhiteHorizonPage'))`)) {
    checkPass('Game registered in GameDetailPage.tsx');
    
    // Check if it's near the beginning
    const registrationIndex = content.indexOf(`'${GAME_SLUG}'`);
    const componentMapStart = content.indexOf('const gamePageComponents');
    
    if (registrationIndex - componentMapStart < 500) {
      checkPass('Game registration is at the beginning of the map');
    } else {
      checkWarning('Game registration should be at the beginning of the map');
    }
  } else {
    checkFail('Game not registered in GameDetailPage.tsx');
  }
}

// Check 5: Supabase migration file exists
function checkMigrationFile() {
  const migrationPath = path.join(__dirname, '..', 'supabase', 'migrations', `20251111_add_${GAME_SLUG}.sql`);
  if (fs.existsSync(migrationPath)) {
    checkPass('Supabase migration file exists');
    
    const content = fs.readFileSync(migrationPath, 'utf-8');
    
    // Check for required SQL sections
    if (content.includes('INSERT INTO games')) {
      checkPass('Migration includes game record insertion');
    } else {
      checkFail('Migration missing game record insertion');
    }
    
    if (content.includes('INSERT INTO tags')) {
      checkPass('Migration includes tag creation');
    } else {
      checkFail('Migration missing tag creation');
    }
    
    if (content.includes('INSERT INTO game_tags')) {
      checkPass('Migration includes game-tag linking');
    } else {
      checkFail('Migration missing game-tag linking');
    }
    
    if (content.includes('INSERT INTO game_comments')) {
      checkPass('Migration includes comment insertion');
    } else {
      checkFail('Migration missing comment insertion');
    }
    
    // Check for common errors
    if (content.includes('comment_text')) {
      checkPass('Uses correct field name: comment_text');
    } else if (content.includes('content')) {
      checkFail('Uses wrong field name: content (should be comment_text)');
    }
    
    if (content.includes('SELECT g.id, t.id')) {
      checkPass('Uses UUID foreign keys for game_tags');
    } else {
      checkWarning('Check game_tags insertion uses UUID foreign keys');
    }
  } else {
    checkFail('Supabase migration file not found');
  }
}

// Check 6: Sitemap files updated
function checkSitemaps() {
  // Check sitemap-games.xml
  const gamesXmlPath = path.join(__dirname, '..', 'public', 'sitemap-games.xml');
  const gamesXml = fs.readFileSync(gamesXmlPath, 'utf-8');
  
  if (gamesXml.includes(`/${GAME_SLUG}</loc>`)) {
    checkPass('Game added to sitemap-games.xml');
    
    if (gamesXml.includes(`<lastmod>${RELEASE_DATE}</lastmod>`)) {
      checkPass('Sitemap has correct release date');
    }
  } else {
    checkFail('Game not found in sitemap-games.xml');
  }
  
  // Check sitemap-images.xml
  const imagesXmlPath = path.join(__dirname, '..', 'public', 'sitemap-images.xml');
  const imagesXml = fs.readFileSync(imagesXmlPath, 'utf-8');
  
  if (imagesXml.includes(`/${GAME_SLUG}</loc>`)) {
    checkPass('Game added to sitemap-images.xml');
  } else {
    checkFail('Game not found in sitemap-images.xml');
  }
  
  // Check sitemap-tags.xml for new tags
  const tagsXmlPath = path.join(__dirname, '..', 'public', 'sitemap-tags.xml');
  const tagsXml = fs.readFileSync(tagsXmlPath, 'utf-8');
  
  const newTags = ['skiing', 'single-player', 'challenge', 'endless-runner', 'browser'];
  newTags.forEach(tag => {
    if (tagsXml.includes(`/tag/${tag}</loc>`)) {
      checkPass(`Tag page added: ${tag}`);
    } else {
      checkWarning(`Tag page missing: ${tag}`);
    }
  });
}

// Check 7: NEW badge logic
function checkNewBadge() {
  const releaseDate = new Date(RELEASE_DATE);
  const today = new Date();
  const daysDiff = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
  
  if (daysDiff <= 7) {
    checkPass(`NEW badge will display (${daysDiff} days old, threshold: 7 days)`);
  } else {
    checkWarning(`NEW badge will NOT display (${daysDiff} days old, threshold: 7 days)`);
  }
}

// Main execution
function main() {
  log('\n========================================', 'blue');
  log(`  Verification: ${GAME_NAME}`, 'blue');
  log('========================================\n', 'blue');
  
  checkInfo('Checking thumbnail...');
  checkThumbnail();
  
  checkInfo('\nChecking games.ts data...');
  checkGamesData();
  
  checkInfo('\nChecking game page component...');
  checkGamePage();
  
  checkInfo('\nChecking game registration...');
  checkGameRegistration();
  
  checkInfo('\nChecking Supabase migration...');
  checkMigrationFile();
  
  checkInfo('\nChecking sitemap files...');
  checkSitemaps();
  
  checkInfo('\nChecking NEW badge logic...');
  checkNewBadge();
  
  log('\n========================================', 'blue');
  log(`  Results: ${passCount} passed, ${failCount} failed`, failCount > 0 ? 'red' : 'green');
  log('========================================\n', 'blue');
  
  if (failCount > 0) {
    log('⚠️  Please fix the failed checks before deploying.', 'yellow');
    process.exit(1);
  } else {
    log('✅ All checks passed! Ready to deploy.', 'green');
    process.exit(0);
  }
}

main();

