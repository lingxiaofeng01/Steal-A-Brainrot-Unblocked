#!/usr/bin/env node
/**
 * Verification script for Zombotron Re-Boot game addition
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Zombotron Re-Boot game addition...\n');

let allChecksPass = true;

// Check 1: Game data in games.ts
console.log('📋 Check 1: Game data in games.ts');
try {
  const gamesFile = fs.readFileSync(path.join(__dirname, '../src/data/games.ts'), 'utf8');
  if (gamesFile.includes("name: 'Zombotron Re-Boot'") && 
      gamesFile.includes("slug: 'zombotron-re-boot'") &&
      gamesFile.includes("releaseDate: '2025-10-30'")) {
    console.log('✅ Game data found in games.ts\n');
  } else {
    console.log('❌ Game data missing or incomplete in games.ts\n');
    allChecksPass = false;
  }
} catch (error) {
  console.log('❌ Error reading games.ts:', error.message, '\n');
  allChecksPass = false;
}

// Check 2: Game page component
console.log('📋 Check 2: Game page component');
const pageFile = path.join(__dirname, '../src/pages/ZombotronReBootPage.tsx');
if (fs.existsSync(pageFile)) {
  const content = fs.readFileSync(pageFile, 'utf8');
  if (content.includes('Zombotron Re-Boot') && content.includes('SURVIVE THE PLANET OF METAL AND FLESH')) {
    console.log('✅ ZombotronReBootPage.tsx exists with correct content\n');
  } else {
    console.log('❌ ZombotronReBootPage.tsx exists but content is incorrect\n');
    allChecksPass = false;
  }
} else {
  console.log('❌ ZombotronReBootPage.tsx not found\n');
  allChecksPass = false;
}

// Check 3: Route registration
console.log('📋 Check 3: Route registration in GameDetailPage.tsx');
try {
  const routeFile = fs.readFileSync(path.join(__dirname, '../src/pages/GameDetailPage.tsx'), 'utf8');
  if (routeFile.includes("'zombotron-re-boot': lazy(() => import('./ZombotronReBootPage'))")) {
    console.log('✅ Route registered in GameDetailPage.tsx\n');
  } else {
    console.log('❌ Route not found in GameDetailPage.tsx\n');
    allChecksPass = false;
  }
} catch (error) {
  console.log('❌ Error reading GameDetailPage.tsx:', error.message, '\n');
  allChecksPass = false;
}

// Check 4: Thumbnail image
console.log('📋 Check 4: Thumbnail image');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/zombotron-re-boot.webp');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)\n`);
} else {
  console.log('❌ Thumbnail not found at public/images/thumbnails/zombotron-re-boot.webp\n');
  allChecksPass = false;
}

// Check 5: Supabase migration
console.log('📋 Check 5: Supabase migration');
const migrationFile = path.join(__dirname, '../supabase/migrations/20251030_add_zombotron_re_boot.sql');
if (fs.existsSync(migrationFile)) {
  const content = fs.readFileSync(migrationFile, 'utf8');
  if (content.includes("'zombotron-re-boot'") && content.includes('PhysicsDestroyer')) {
    console.log('✅ Supabase migration exists with game stats and comment\n');
  } else {
    console.log('❌ Supabase migration exists but content is incomplete\n');
    allChecksPass = false;
  }
} else {
  console.log('❌ Supabase migration not found\n');
  allChecksPass = false;
}

// Check 6: Sitemap updates
console.log('📋 Check 6: Sitemap updates');
const sitemaps = [
  { file: 'public/sitemap-games.xml', search: 'zombotron-re-boot' },
  { file: 'public/sitemap-images.xml', search: 'zombotron-re-boot' },
  { file: 'public/sitemap.xml', search: '2025-10-30' },
  { file: 'public/sitemap-index.xml', search: '2025-10-30' }
];

sitemaps.forEach(({ file, search }) => {
  try {
    const content = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
    if (content.includes(search)) {
      console.log(`✅ ${file} updated`);
    } else {
      console.log(`❌ ${file} not updated with ${search}`);
      allChecksPass = false;
    }
  } catch (error) {
    console.log(`❌ Error reading ${file}:`, error.message);
    allChecksPass = false;
  }
});

console.log('\n' + '='.repeat(60));
if (allChecksPass) {
  console.log('✅ All checks passed! Zombotron Re-Boot is ready to go!');
  console.log('\n📝 Summary:');
  console.log('  - Game data added to games.ts');
  console.log('  - Game page component created (1000+ words)');
  console.log('  - Route registered in GameDetailPage.tsx');
  console.log('  - Thumbnail image optimized (WebP format)');
  console.log('  - Supabase migration created');
  console.log('  - All sitemaps updated');
  console.log('\n🎮 Game features:');
  console.log('  - Release date: 2025-10-30 (NEW badge will show)');
  console.log('  - Tags: Action, Platform, 2D, Indie, Physics, Zombie, Shooting, Adventure');
  console.log('  - Rating: 4.4/5');
  console.log('  - SEO optimized with TDK and H tags');
  console.log('\n🚀 Next steps:');
  console.log('  1. Run Supabase migration: npm run supabase:migrate');
  console.log('  2. Build and test the application');
  console.log('  3. Verify game appears on homepage, category pages, and tag pages');
  console.log('  4. Confirm NEW badge displays correctly');
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}
console.log('='.repeat(60) + '\n');

