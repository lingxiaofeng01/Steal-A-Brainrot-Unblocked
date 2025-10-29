const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying FNaF Shooter game addition...\n');

let allChecks = true;

// 1. Check game data in games.ts
console.log('1️⃣ Checking game data in src/data/games.ts...');
const gamesPath = path.join(__dirname, '../src/data/games.ts');
if (fs.existsSync(gamesPath)) {
  const gamesContent = fs.readFileSync(gamesPath, 'utf-8');
  
  if (gamesContent.includes("name: 'FNaF Shooter'")) {
    console.log('   ✅ Game data found');
    
    // Check if it's the first game (most recent)
    const firstGameMatch = gamesContent.match(/export const allGames: Game\[\] = \[\s*\{[^}]*name: '([^']+)'/);
    if (firstGameMatch && firstGameMatch[1] === 'FNaF Shooter') {
      console.log('   ✅ FNaF Shooter is the first game (most recent)');
    } else {
      console.log('   ❌ FNaF Shooter is NOT the first game');
      allChecks = false;
    }
    
    // Check release date
    if (gamesContent.includes("releaseDate: '2025-10-29'")) {
      console.log('   ✅ Release date is correct (2025-10-29)');
    } else {
      console.log('   ❌ Release date is incorrect');
      allChecks = false;
    }
    
    // Check tags
    const requiredTags = ['Action', 'Horror', 'Shooting', 'FNAF', 'Gun', 'FPS', 'Halloween'];
    const allTagsPresent = requiredTags.every(tag => 
      gamesContent.includes(`'${tag}'`) && 
      gamesContent.match(new RegExp(`slug: 'fnaf-shooter'[\\s\\S]*?tags: \\[[^\\]]*'${tag}'`))
    );
    
    if (allTagsPresent) {
      console.log('   ✅ All required tags present');
    } else {
      console.log('   ❌ Some tags are missing');
      allChecks = false;
    }
  } else {
    console.log('   ❌ Game data NOT found');
    allChecks = false;
  }
} else {
  console.log('   ❌ games.ts NOT found');
  allChecks = false;
}

// 2. Check game page component
console.log('\n2️⃣ Checking game page component...');
const pagePath = path.join(__dirname, '../src/pages/FnafShooterPage.tsx');
if (fs.existsSync(pagePath)) {
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  
  if (pageContent.includes("slug: 'fnaf-shooter'")) {
    console.log('   ✅ FnafShooterPage.tsx exists with correct slug');
  } else {
    console.log('   ❌ FnafShooterPage.tsx has incorrect slug');
    allChecks = false;
  }
  
  if (pageContent.includes('GameDetailTemplate')) {
    console.log('   ✅ Uses GameDetailTemplate component');
  } else {
    console.log('   ❌ Does NOT use GameDetailTemplate');
    allChecks = false;
  }
  
  // Check for required content sections
  if (pageContent.includes('aboutContent') && 
      pageContent.includes('howToPlayContent') && 
      pageContent.includes('featuresContent')) {
    console.log('   ✅ All content sections present');
  } else {
    console.log('   ❌ Some content sections missing');
    allChecks = false;
  }
} else {
  console.log('   ❌ FnafShooterPage.tsx NOT found');
  allChecks = false;
}

// 3. Check route registration
console.log('\n3️⃣ Checking route registration...');
const routePath = path.join(__dirname, '../src/pages/GameDetailPage.tsx');
if (fs.existsSync(routePath)) {
  const routeContent = fs.readFileSync(routePath, 'utf-8');
  
  if (routeContent.includes("'fnaf-shooter': lazy(() => import('./FnafShooterPage'))")) {
    console.log('   ✅ Route registered in GameDetailPage.tsx');
  } else {
    console.log('   ❌ Route NOT registered');
    allChecks = false;
  }
} else {
  console.log('   ❌ GameDetailPage.tsx NOT found');
  allChecks = false;
}

// 4. Check thumbnail
console.log('\n4️⃣ Checking thumbnail...');
const thumbnailPath = path.join(__dirname, '../public/images/thumbnails/fnaf-shooter.webp');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log('   ❌ Thumbnail NOT found');
  allChecks = false;
}

// 5. Check Supabase migration
console.log('\n5️⃣ Checking Supabase migration...');
const migrationPath = path.join(__dirname, '../supabase/migrations/20251029_add_fnaf_shooter.sql');
if (fs.existsSync(migrationPath)) {
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  
  if (migrationContent.includes("'fnaf-shooter'")) {
    console.log('   ✅ Migration file exists with correct slug');
  } else {
    console.log('   ❌ Migration file has incorrect slug');
    allChecks = false;
  }
  
  if (migrationContent.includes('game_stats') && 
      migrationContent.includes('tags') && 
      migrationContent.includes('comments')) {
    console.log('   ✅ Migration includes all required tables');
  } else {
    console.log('   ❌ Migration missing some tables');
    allChecks = false;
  }
} else {
  console.log('   ❌ Migration file NOT found');
  allChecks = false;
}

// 6. Check sitemap updates
console.log('\n6️⃣ Checking sitemap updates...');
const sitemapGamesPath = path.join(__dirname, '../public/sitemap-games.xml');
if (fs.existsSync(sitemapGamesPath)) {
  const sitemapContent = fs.readFileSync(sitemapGamesPath, 'utf-8');
  
  if (sitemapContent.includes('/fnaf-shooter</loc>')) {
    console.log('   ✅ sitemap-games.xml updated');
  } else {
    console.log('   ❌ sitemap-games.xml NOT updated');
    allChecks = false;
  }
} else {
  console.log('   ❌ sitemap-games.xml NOT found');
  allChecks = false;
}

const sitemapImagesPath = path.join(__dirname, '../public/sitemap-images.xml');
if (fs.existsSync(sitemapImagesPath)) {
  const sitemapContent = fs.readFileSync(sitemapImagesPath, 'utf-8');
  
  if (sitemapContent.includes('fnaf-shooter.webp')) {
    console.log('   ✅ sitemap-images.xml updated');
  } else {
    console.log('   ❌ sitemap-images.xml NOT updated');
    allChecks = false;
  }
} else {
  console.log('   ❌ sitemap-images.xml NOT found');
  allChecks = false;
}

// 7. Check NEW badge eligibility
console.log('\n7️⃣ Checking NEW badge eligibility...');
const releaseDate = new Date('2025-10-29');
const today = new Date();
const diffDays = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
if (diffDays <= 7) {
  console.log(`   ✅ Game is ${diffDays} days old - NEW badge will be displayed`);
} else {
  console.log(`   ⚠️  Game is ${diffDays} days old - NEW badge will NOT be displayed`);
}

// 8. Check previous game (Dude Theft Auto) also has NEW badge
console.log('\n8️⃣ Checking previous game NEW badge...');
const dudeTheftReleaseDate = new Date('2025-10-27');
const dudeDiffDays = Math.floor((today - dudeTheftReleaseDate) / (1000 * 60 * 60 * 24));
if (dudeDiffDays <= 7) {
  console.log(`   ✅ Dude Theft Auto is ${dudeDiffDays} days old - NEW badge will be displayed`);
} else {
  console.log(`   ⚠️  Dude Theft Auto is ${dudeDiffDays} days old - NEW badge will NOT be displayed`);
}

// Final summary
console.log('\n' + '='.repeat(50));
if (allChecks) {
  console.log('✅ All checks passed! FNaF Shooter is ready to go!');
} else {
  console.log('❌ Some checks failed. Please review the issues above.');
}
console.log('='.repeat(50) + '\n');

process.exit(allChecks ? 0 : 1);

