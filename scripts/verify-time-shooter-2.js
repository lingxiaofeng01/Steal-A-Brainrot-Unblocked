#!/usr/bin/env node

/**
 * Verification Script for Time Shooter 2
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

const GAME_SLUG = 'time-shooter-2';
const GAME_NAME = 'Time Shooter 2';
const RELEASE_DATE = '2025-11-08';
const EXPECTED_TAGS = ['Shooting', 'Action', 'FPS', '3D', 'Strategy', 'Skill', 'Time Control', 'Slow Motion'];

console.log('🔍 Verifying Time Shooter 2 Game Setup...\n');

let allChecksPassed = true;

// 1. Check thumbnail exists
console.log('1️⃣ Checking thumbnail file...');
const thumbnailPath = path.join(__dirname, '..', 'public', 'images', 'thumbnails', `${GAME_SLUG}.webp`);
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log(`   ❌ Thumbnail not found at: ${thumbnailPath}`);
  allChecksPassed = false;
}

// 2. Check game added to games.ts
console.log('\n2️⃣ Checking games.ts...');
const gamesPath = path.join(__dirname, '..', 'src', 'data', 'games.ts');
if (fs.existsSync(gamesPath)) {
  const gamesContent = fs.readFileSync(gamesPath, 'utf-8');
  
  if (gamesContent.includes(`slug: '${GAME_SLUG}'`)) {
    console.log(`   ✅ Game found in games.ts`);
    
    // Check if it's at the beginning of the array
    const gameIndex = gamesContent.indexOf(`slug: '${GAME_SLUG}'`);
    const arrayStart = gamesContent.indexOf('export const allGames: Game[] = [');
    const firstGameIndex = gamesContent.indexOf('name:', arrayStart);
    
    if (gameIndex < gamesContent.indexOf('name:', firstGameIndex + 10)) {
      console.log(`   ✅ Game is at the beginning of the array`);
    } else {
      console.log(`   ⚠️  Game should be at the beginning of the array`);
    }
    
    // Check release date
    if (gamesContent.includes(`releaseDate: '${RELEASE_DATE}'`)) {
      console.log(`   ✅ Release date is correct: ${RELEASE_DATE}`);
    } else {
      console.log(`   ❌ Release date not found or incorrect`);
      allChecksPassed = false;
    }
    
    // Check rating
    if (gamesContent.includes('rating: 5.0')) {
      console.log(`   ✅ Initial rating is 5.0`);
    }
    
  } else {
    console.log(`   ❌ Game not found in games.ts`);
    allChecksPassed = false;
  }
} else {
  console.log(`   ❌ games.ts not found`);
  allChecksPassed = false;
}

// 3. Check game page component exists
console.log('\n3️⃣ Checking game page component...');
const pagePath = path.join(__dirname, '..', 'src', 'pages', 'TimeShooter2Page.tsx');
if (fs.existsSync(pagePath)) {
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  console.log(`   ✅ TimeShooter2Page.tsx exists`);
  
  // Check for H1 with game name
  if (pageContent.includes('Time Shooter 2')) {
    const gameNameCount = (pageContent.match(/Time Shooter 2/g) || []).length;
    const totalWords = pageContent.split(/\s+/).length;
    const keywordDensity = ((gameNameCount * 3) / totalWords * 100).toFixed(2); // "Time Shooter 2" is 3 words
    
    console.log(`   ✅ Game name appears ${gameNameCount} times`);
    console.log(`   📊 Keyword density: ~${keywordDensity}% (target: 2%)`);
    
    if (parseFloat(keywordDensity) >= 2.0) {
      console.log(`   ✅ Keyword density meets SEO requirement`);
    } else {
      console.log(`   ⚠️  Keyword density below 2% target`);
    }
  }
  
  // Check for proper heading styles (text-gray-800, not text-white)
  if (pageContent.includes('text-gray-800')) {
    console.log(`   ✅ Using correct heading color (text-gray-800)`);
  } else if (pageContent.includes('text-white')) {
    console.log(`   ❌ Using incorrect heading color (text-white) - should be text-gray-800`);
    allChecksPassed = false;
  }
  
  // Check content length
  const contentLength = pageContent.length;
  if (contentLength > 5000) {
    console.log(`   ✅ Content length: ${contentLength} characters (1000+ words)`);
  } else {
    console.log(`   ⚠️  Content might be too short: ${contentLength} characters`);
  }
  
} else {
  console.log(`   ❌ TimeShooter2Page.tsx not found`);
  allChecksPassed = false;
}

// 4. Check GameDetailPage.tsx registration
console.log('\n4️⃣ Checking GameDetailPage.tsx registration...');
const gameDetailPath = path.join(__dirname, '..', 'src', 'pages', 'GameDetailPage.tsx');
if (fs.existsSync(gameDetailPath)) {
  const gameDetailContent = fs.readFileSync(gameDetailPath, 'utf-8');
  
  if (gameDetailContent.includes(`'${GAME_SLUG}': lazy(() => import('./TimeShooter2Page'))`)) {
    console.log(`   ✅ Game registered in GameDetailPage.tsx`);
    
    // Check if it's at the beginning
    const registrationIndex = gameDetailContent.indexOf(`'${GAME_SLUG}'`);
    const componentsStart = gameDetailContent.indexOf('const gamePageComponents');
    const firstEntry = gameDetailContent.indexOf("'", componentsStart + 50);
    
    if (registrationIndex < gameDetailContent.indexOf("'", firstEntry + 10)) {
      console.log(`   ✅ Registration is at the beginning of gamePageComponents`);
    } else {
      console.log(`   ⚠️  Registration should be at the beginning`);
    }
  } else {
    console.log(`   ❌ Game not registered in GameDetailPage.tsx`);
    allChecksPassed = false;
  }
} else {
  console.log(`   ❌ GameDetailPage.tsx not found`);
  allChecksPassed = false;
}

// 5. Check Supabase migration file
console.log('\n5️⃣ Checking Supabase migration file...');
const migrationPath = path.join(__dirname, '..', 'supabase', 'migrations', '20251108_add_time_shooter_2.sql');
if (fs.existsSync(migrationPath)) {
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  console.log(`   ✅ Migration file exists`);
  
  // Check for game insert
  if (migrationContent.includes(`slug = '${GAME_SLUG}'`)) {
    console.log(`   ✅ Game INSERT statement found`);
  } else {
    console.log(`   ❌ Game INSERT statement not found`);
    allChecksPassed = false;
  }
  
  // Check for tags
  if (migrationContent.includes('INSERT INTO tags')) {
    console.log(`   ✅ Tags INSERT statement found`);
  }
  
  // Check for game_tags association (using UUID foreign keys)
  if (migrationContent.includes('INSERT INTO game_tags (game_id, tag_id)') && 
      migrationContent.includes('SELECT g.id, t.id')) {
    console.log(`   ✅ Game-tags association uses correct UUID foreign keys`);
  } else if (migrationContent.includes('game_slug') || migrationContent.includes('tag_slug')) {
    console.log(`   ❌ Game-tags association incorrectly uses slugs instead of UUIDs`);
    allChecksPassed = false;
  }
  
  // Check for comment (using comment_text field)
  if (migrationContent.includes('INSERT INTO game_comments') && 
      migrationContent.includes('comment_text')) {
    console.log(`   ✅ Comment INSERT statement found with correct field name (comment_text)`);
  } else if (migrationContent.includes('content')) {
    console.log(`   ❌ Comment uses wrong field name (content instead of comment_text)`);
    allChecksPassed = false;
  }
  
} else {
  console.log(`   ❌ Migration file not found at: ${migrationPath}`);
  allChecksPassed = false;
}

// 6. Check sitemap-games.xml
console.log('\n6️⃣ Checking sitemap-games.xml...');
const sitemapGamesPath = path.join(__dirname, '..', 'public', 'sitemap-games.xml');
if (fs.existsSync(sitemapGamesPath)) {
  const sitemapContent = fs.readFileSync(sitemapGamesPath, 'utf-8');
  
  if (sitemapContent.includes(`<loc>https://www.stealabrainrotunblocked.com/${GAME_SLUG}</loc>`)) {
    console.log(`   ✅ Game found in sitemap-games.xml`);
    
    if (sitemapContent.includes(`<lastmod>${RELEASE_DATE}</lastmod>`)) {
      console.log(`   ✅ Correct lastmod date: ${RELEASE_DATE}`);
    }
  } else {
    console.log(`   ❌ Game not found in sitemap-games.xml`);
    allChecksPassed = false;
  }
} else {
  console.log(`   ❌ sitemap-games.xml not found`);
  allChecksPassed = false;
}

// 7. Check sitemap-images.xml
console.log('\n7️⃣ Checking sitemap-images.xml...');
const sitemapImagesPath = path.join(__dirname, '..', 'public', 'sitemap-images.xml');
if (fs.existsSync(sitemapImagesPath)) {
  const sitemapImagesContent = fs.readFileSync(sitemapImagesPath, 'utf-8');
  
  if (sitemapImagesContent.includes(`${GAME_SLUG}.webp`)) {
    console.log(`   ✅ Game image found in sitemap-images.xml`);
  } else {
    console.log(`   ❌ Game image not found in sitemap-images.xml`);
    allChecksPassed = false;
  }
}

// 8. Check NEW badge eligibility
console.log('\n8️⃣ Checking NEW badge eligibility...');
const releaseDate = new Date(RELEASE_DATE);
const today = new Date();
const diffDays = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
if (diffDays <= 7) {
  console.log(`   ✅ Game is ${diffDays} days old - NEW badge will be displayed`);
} else {
  console.log(`   ⚠️  Game is ${diffDays} days old - NEW badge will NOT be displayed`);
}

// 9. Check game tags
console.log('\n9️⃣ Checking game tags...');
if (fs.existsSync(gamesPath)) {
  const gamesContent = fs.readFileSync(gamesPath, 'utf-8');
  let tagsFound = 0;
  EXPECTED_TAGS.forEach(tag => {
    if (gamesContent.includes(`'${tag}'`)) {
      tagsFound++;
    }
  });
  console.log(`   ✅ Found ${tagsFound}/${EXPECTED_TAGS.length} expected tags`);
  if (tagsFound < EXPECTED_TAGS.length) {
    console.log(`   ⚠️  Missing tags: ${EXPECTED_TAGS.filter(tag => !gamesContent.includes(`'${tag}'`)).join(', ')}`);
  }
}

// 10. Summary
console.log('\n' + '='.repeat(60));
if (allChecksPassed) {
  console.log('✅ All critical checks passed!');
  console.log('\n📋 Next steps:');
  console.log('   1. Run Supabase migration (via API or Dashboard)');
  console.log('   2. Test locally: npm run dev');
  console.log('   3. Visit: http://localhost:3000/time-shooter-2');
  console.log('   4. Verify game displays correctly');
  console.log('   5. Check comments load from Supabase');
  console.log('   6. Deploy to production');
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}
console.log('='.repeat(60) + '\n');

