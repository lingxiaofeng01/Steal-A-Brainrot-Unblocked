const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Today\'s Games (2025-11-12)...\n');

const TODAY = '2025-11-12';
const todayGames = [
  {
    name: 'Drift Fury',
    slug: 'drift-fury',
    pageName: 'DriftFuryPage.tsx',
    thumbnail: 'drift-fury.jpg',
    minWords: 1000,
    minKeywordCount: 20
  },
  {
    name: 'Ragdoll Hit Stickman',
    slug: 'ragdoll-hit-stickman',
    pageName: 'RagdollHitStickmanPage.tsx',
    thumbnail: 'ragdoll-hit-stickman.png',
    minWords: 1000,
    minKeywordCount: 20
  },
  {
    name: 'Stickman Army: Team Battle',
    slug: 'stickman-army-team-battle',
    pageName: 'StickmanArmyTeamBattlePage.tsx',
    thumbnail: 'stickman-army-team-battle.png',
    minWords: 1000,
    minKeywordCount: 20
  },
  {
    name: 'Ski Frenzy',
    slug: 'ski-frenzy',
    pageName: 'SkiFrenzyPage.tsx',
    thumbnail: 'ski-frenzy.jpg',
    minWords: 1000,
    minKeywordCount: 20
  },
  {
    name: 'Hockey Random',
    slug: 'hockey-random',
    pageName: 'HockeyRandomPage.tsx',
    thumbnail: 'hockey-random.jpg',
    minWords: 1000,
    minKeywordCount: 20
  },
  {
    name: 'Bottle Jump',
    slug: 'bottle-jump',
    pageName: 'BottleJumpPage.tsx',
    thumbnail: 'bottle-jump.png',
    minWords: 1000,
    minKeywordCount: 20
  }
];

let allChecks = true;

// Check each game
todayGames.forEach((game, index) => {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`${index + 1}. Checking ${game.name}...`);
  console.log(`${'='.repeat(60)}\n`);

  // 1. Check games.ts
  console.log('📋 Checking src/data/games.ts...');
  const gamesPath = path.join(__dirname, '../src/data/games.ts');
  const gamesContent = fs.readFileSync(gamesPath, 'utf-8');
  
  if (gamesContent.includes(`slug: '${game.slug}'`) && 
      gamesContent.includes(`releaseDate: '${TODAY}'`)) {
    console.log('   ✅ Game added to games.ts with correct release date');
  } else {
    console.log('   ❌ Game NOT found in games.ts or wrong release date');
    allChecks = false;
  }

  // 2. Check thumbnail
  console.log('\n🖼️  Checking thumbnail...');
  const thumbnailPath = path.join(__dirname, `../public/images/thumbnails/${game.thumbnail}`);
  if (fs.existsSync(thumbnailPath)) {
    const stats = fs.statSync(thumbnailPath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    console.log(`   ✅ Thumbnail exists (${sizeKB} KB)`);
  } else {
    console.log('   ❌ Thumbnail NOT found');
    allChecks = false;
  }

  // 3. Check game page component
  console.log('\n📄 Checking game page component...');
  const pagePath = path.join(__dirname, `../src/pages/${game.pageName}`);
  if (fs.existsSync(pagePath)) {
    const pageContent = fs.readFileSync(pagePath, 'utf-8');
    
    // Check for Chinese characters
    const chineseRegex = /[\u4e00-\u9fa5]/;
    if (chineseRegex.test(pageContent)) {
      console.log('   ❌ Page contains Chinese characters (should be English only)');
      allChecks = false;
    } else {
      console.log('   ✅ No Chinese characters found');
    }

    // Check word count
    const textContent = pageContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
    const words = textContent.split(' ').filter(w => w.length > 0);
    const wordCount = words.length;
    
    if (wordCount >= game.minWords) {
      console.log(`   ✅ Word count: ${wordCount} (>= ${game.minWords})`);
    } else {
      console.log(`   ❌ Word count: ${wordCount} (< ${game.minWords})`);
      allChecks = false;
    }

    // Check keyword density
    const keywordRegex = new RegExp(game.name, 'gi');
    const keywordMatches = pageContent.match(keywordRegex) || [];
    const keywordCount = keywordMatches.length;
    const keywordDensity = ((keywordCount / wordCount) * 100).toFixed(2);
    
    if (keywordCount >= game.minKeywordCount) {
      console.log(`   ✅ Keyword "${game.name}" appears ${keywordCount} times (${keywordDensity}% density)`);
    } else {
      console.log(`   ❌ Keyword "${game.name}" appears only ${keywordCount} times (< ${game.minKeywordCount})`);
      allChecks = false;
    }

    // Check for required sections
    const hasAbout = pageContent.includes('aboutContent');
    const hasHowToPlay = pageContent.includes('howToPlayContent');
    const hasFeatures = pageContent.includes('featuresContent');
    
    if (hasAbout && hasHowToPlay && hasFeatures) {
      console.log('   ✅ All required sections present (About, How to Play, Features)');
    } else {
      console.log('   ❌ Missing required sections');
      allChecks = false;
    }
  } else {
    console.log('   ❌ Game page component NOT found');
    allChecks = false;
  }

  // 4. Check GameDetailPage.tsx registration
  console.log('\n🔗 Checking GameDetailPage.tsx registration...');
  const gameDetailPath = path.join(__dirname, '../src/pages/GameDetailPage.tsx');
  const gameDetailContent = fs.readFileSync(gameDetailPath, 'utf-8');
  
  if (gameDetailContent.includes(`'${game.slug}'`) && 
      gameDetailContent.includes(game.pageName.replace('.tsx', ''))) {
    console.log('   ✅ Game registered in GameDetailPage.tsx');
  } else {
    console.log('   ❌ Game NOT registered in GameDetailPage.tsx');
    allChecks = false;
  }

  // 5. Check sitemap-games.xml
  console.log('\n🗺️  Checking sitemap-games.xml...');
  const sitemapGamesPath = path.join(__dirname, '../public/sitemap-games.xml');
  const sitemapGamesContent = fs.readFileSync(sitemapGamesPath, 'utf-8');
  
  if (sitemapGamesContent.includes(game.slug) && 
      sitemapGamesContent.includes(TODAY)) {
    console.log('   ✅ Game added to sitemap-games.xml');
  } else {
    console.log('   ❌ Game NOT found in sitemap-games.xml');
    allChecks = false;
  }

  // 6. Check sitemap-images.xml
  console.log('\n🖼️  Checking sitemap-images.xml...');
  const sitemapImagesPath = path.join(__dirname, '../public/sitemap-images.xml');
  const sitemapImagesContent = fs.readFileSync(sitemapImagesPath, 'utf-8');
  
  if (sitemapImagesContent.includes(game.slug) && 
      sitemapImagesContent.includes(game.thumbnail)) {
    console.log('   ✅ Game added to sitemap-images.xml');
  } else {
    console.log('   ❌ Game NOT found in sitemap-images.xml');
    allChecks = false;
  }

  // 7. Check Supabase migration
  console.log('\n💾 Checking Supabase migration...');
  const migrationPattern = new RegExp(`20251112.*${game.slug.replace(/-/g, '.*')}.*\\.sql`, 'i');
  const migrationsDir = path.join(__dirname, '../supabase/migrations');
  
  if (fs.existsSync(migrationsDir)) {
    const migrationFiles = fs.readdirSync(migrationsDir);
    const migrationFile = migrationFiles.find(f => migrationPattern.test(f));
    
    if (migrationFile) {
      console.log(`   ✅ Migration file found: ${migrationFile}`);
      
      const migrationPath = path.join(migrationsDir, migrationFile);
      const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
      
      // Check migration content
      const hasGameInsert = migrationContent.includes('INSERT INTO games');
      const hasSlug = migrationContent.includes(game.slug);
      const hasTagsInsert = migrationContent.includes('INSERT INTO tags');
      const hasGameTagsInsert = migrationContent.includes('INSERT INTO game_tags');
      const hasCommentsInsert = migrationContent.includes('INSERT INTO game_comments');
      
      if (hasGameInsert && hasSlug && hasTagsInsert && hasGameTagsInsert && hasCommentsInsert) {
        console.log('   ✅ Migration file contains all required inserts');
      } else {
        console.log('   ❌ Migration file missing some inserts');
        allChecks = false;
      }
    } else {
      console.log('   ❌ Migration file NOT found');
      allChecks = false;
    }
  } else {
    console.log('   ⚠️  Migrations directory not found');
  }
});

// Summary
console.log(`\n${'='.repeat(60)}`);
if (allChecks) {
  console.log('✅ All checks passed! Today\'s games are ready.');
} else {
  console.log('❌ Some checks failed. Please review the issues above.');
}
console.log(`${'='.repeat(60)}\n`);

process.exit(allChecks ? 0 : 1);

