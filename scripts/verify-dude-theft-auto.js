#!/usr/bin/env node

/**
 * Verification script for Dude Theft Auto game addition
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

const GAME_SLUG = 'dude-theft-auto';
const GAME_NAME = 'Dude Theft Auto';

let allChecksPassed = true;

function checkFile(filePath, description) {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    console.log(`✅ ${description} (${stats.size} bytes)`);
    return true;
  } else {
    console.log(`❌ ${description} - FILE NOT FOUND`);
    allChecksPassed = false;
    return false;
  }
}

function checkFileContent(filePath, searchString, description) {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes(searchString)) {
      console.log(`✅ ${description}`);
      return true;
    } else {
      console.log(`❌ ${description} - CONTENT NOT FOUND`);
      allChecksPassed = false;
      return false;
    }
  } else {
    console.log(`❌ ${description} - FILE NOT FOUND`);
    allChecksPassed = false;
    return false;
  }
}

console.log('\n🔍 Verifying Dude Theft Auto Game Addition...\n');

// 1. Check thumbnail
checkFile('public/images/thumbnails/dude-theft-auto.webp', '1. Thumbnail exists');

// 2. Check games.ts entry
checkFileContent('src/data/games.ts', "slug: 'dude-theft-auto'", '2. Game entry in games.ts');
checkFileContent('src/data/games.ts', "name: 'Dude Theft Auto'", '   - Game name correct');
checkFileContent('src/data/games.ts', "releaseDate: '2025-10-27'", '   - Release date is today');

// 3. Check game page component
checkFile('src/pages/DudeTheftAutoPage.tsx', '3. Game page component exists');
checkFileContent('src/pages/DudeTheftAutoPage.tsx', 'GameDetailTemplate', '   - Uses GameDetailTemplate');

// 4. Check GameDetailPage registration
checkFileContent('src/pages/GameDetailPage.tsx', "'dude-theft-auto'", '4. Game registered in GameDetailPage.tsx');
checkFileContent('src/pages/GameDetailPage.tsx', 'DudeTheftAutoPage', '   - Component import correct');

// 5. Check Supabase migration
checkFile('supabase/migrations/20251027_add_dude_theft_auto.sql', '5. Supabase migration file exists');
checkFileContent('supabase/migrations/20251027_add_dude_theft_auto.sql', 'dude-theft-auto', '   - Migration contains game slug');

// 6. Check comment migration
checkFile('supabase/migrations/20251027_add_dude_theft_auto_comment.sql', '6. Comment migration file exists');

// 7. Check sitemap-games.xml
checkFileContent('public/sitemap-games.xml', 'dude-theft-auto', '7. Game added to sitemap-games.xml');
checkFileContent('public/sitemap-games.xml', '<lastmod>2025-10-27</lastmod>', '   - Sitemap date updated');

// 8. Check sitemap-images.xml
checkFileContent('public/sitemap-images.xml', 'dude-theft-auto', '8. Game added to sitemap-images.xml');

// 9. Check main sitemap updated
checkFileContent('public/sitemap.xml', '<lastmod>2025-10-27</lastmod>', '9. Main sitemap date updated');

// 10. Check sitemap-index updated
checkFileContent('public/sitemap-index.xml', '<lastmod>2025-10-27</lastmod>', '10. Sitemap index date updated');

// 11. Check NEW badge (both games should have today's date)
checkFileContent('src/data/games.ts', "name: 'Block Breaker'", '11. Block Breaker still exists');
checkFileContent('src/data/games.ts', "name: 'Dude Theft Auto'", '    - Dude Theft Auto exists');

console.log('\n' + '='.repeat(60));
if (allChecksPassed) {
  console.log('✅ All checks passed! Dude Theft Auto has been successfully added.');
  console.log('\n📋 Summary:');
  console.log('   - Game data added to games.ts');
  console.log('   - Game page component created');
  console.log('   - Route registered in GameDetailPage');
  console.log('   - Supabase migrations created');
  console.log('   - All sitemaps updated');
  console.log('   - NEW badge will show (release date: 2025-10-27)');
  console.log('\n🎮 Game URL: /dude-theft-auto');
  console.log('🏷️  Tags: Action, Shooting, Simulation, 3D, Multiplayer, Physics, Gun, FPS');
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}
console.log('='.repeat(60) + '\n');

