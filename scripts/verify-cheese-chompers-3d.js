const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Cheese Chompers 3D addition...\n');

let allChecks = true;

// 1. Check game page file
console.log('📄 Checking game page file...');
const gamePagePath = path.join(__dirname, '..', 'src', 'pages', 'CheeseChompers3DPage.tsx');
if (fs.existsSync(gamePagePath)) {
  const content = fs.readFileSync(gamePagePath, 'utf-8');
  if (content.includes('cheese-chompers-3d') && 
      content.includes('Cheese Chompers 3D') &&
      content.includes('epicfreegames78.github.io/cheese-chompers-3d')) {
    console.log('✅ Game page file exists and contains correct content');
  } else {
    console.log('❌ Game page file exists but content is incorrect');
    allChecks = false;
  }
} else {
  console.log('❌ Game page file not found');
  allChecks = false;
}

// 2. Check games.ts
console.log('\n📊 Checking games.ts...');
const gamesPath = path.join(__dirname, '..', 'src', 'data', 'games.ts');
if (fs.existsSync(gamesPath)) {
  const content = fs.readFileSync(gamesPath, 'utf-8');
  const lines = content.split('\n');
  
  // Find the first game entry after "export const allGames"
  let foundAllGames = false;
  let firstGameIsCheese = false;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('export const allGames')) {
      foundAllGames = true;
    }
    if (foundAllGames && lines[i].includes("name: 'Cheese Chompers 3D'")) {
      // Check if this is within the first few lines after allGames
      if (i < lines.findIndex(l => l.includes('export const allGames')) + 15) {
        firstGameIsCheese = true;
      }
      break;
    }
  }
  
  if (firstGameIsCheese) {
    console.log('✅ Cheese Chompers 3D is at the top of games list');
  } else {
    console.log('❌ Cheese Chompers 3D is not at the top of games list');
    allChecks = false;
  }
} else {
  console.log('❌ games.ts file not found');
  allChecks = false;
}

// 3. Check GameDetailPage.tsx
console.log('\n🔗 Checking GameDetailPage.tsx route registration...');
const gameDetailPath = path.join(__dirname, '..', 'src', 'pages', 'GameDetailPage.tsx');
if (fs.existsSync(gameDetailPath)) {
  const content = fs.readFileSync(gameDetailPath, 'utf-8');
  const lines = content.split('\n');
  
  // Find the gamePageComponents object
  let foundComponents = false;
  let cheeseIsFirst = false;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('const gamePageComponents')) {
      foundComponents = true;
    }
    if (foundComponents && lines[i].includes("'cheese-chompers-3d'")) {
      // Check if this is the first entry (within 3 lines of the object start)
      const componentStart = lines.findIndex(l => l.includes('const gamePageComponents'));
      if (i < componentStart + 3) {
        cheeseIsFirst = true;
      }
      break;
    }
  }
  
  if (cheeseIsFirst) {
    console.log('✅ Cheese Chompers 3D route is registered at the top');
  } else {
    console.log('❌ Cheese Chompers 3D route is not at the top');
    allChecks = false;
  }
} else {
  console.log('❌ GameDetailPage.tsx file not found');
  allChecks = false;
}

// 4. Check thumbnail
console.log('\n🖼️  Checking thumbnail...');
const thumbnailPath = path.join(__dirname, '..', 'public', 'images', 'thumbnails', 'cheese-chompers-3d.webp');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`✅ Thumbnail exists (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log('❌ Thumbnail not found');
  allChecks = false;
}

// 5. Check migration file
console.log('\n💾 Checking migration file...');
const migrationPath = path.join(__dirname, '..', 'supabase', 'migrations', '20251029_add_cheese_chompers_3d.sql');
if (fs.existsSync(migrationPath)) {
  const content = fs.readFileSync(migrationPath, 'utf-8');
  if (content.includes('cheese-chompers-3d') && 
      content.includes('CheeseChampion') &&
      content.includes('game_stats') &&
      content.includes('game_comments')) {
    console.log('✅ Migration file exists and contains correct SQL');
  } else {
    console.log('❌ Migration file exists but content is incorrect');
    allChecks = false;
  }
} else {
  console.log('❌ Migration file not found');
  allChecks = false;
}

// 6. Check sitemap-games.xml
console.log('\n🗺️  Checking sitemap-games.xml...');
const sitemapGamesPath = path.join(__dirname, '..', 'public', 'sitemap-games.xml');
if (fs.existsSync(sitemapGamesPath)) {
  const content = fs.readFileSync(sitemapGamesPath, 'utf-8');
  const lines = content.split('\n');
  
  // Find the first game URL after the comment
  let foundComment = false;
  let cheeseIsFirst = false;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<!-- New Games')) {
      foundComment = true;
    }
    if (foundComment && lines[i].includes('<loc>')) {
      if (lines[i].includes('cheese-chompers-3d')) {
        cheeseIsFirst = true;
      }
      break;
    }
  }
  
  if (cheeseIsFirst) {
    console.log('✅ Cheese Chompers 3D is at the top of sitemap-games.xml');
  } else {
    console.log('❌ Cheese Chompers 3D is not at the top of sitemap-games.xml');
    allChecks = false;
  }
} else {
  console.log('❌ sitemap-games.xml file not found');
  allChecks = false;
}

// 7. Check sitemap-images.xml
console.log('\n🖼️  Checking sitemap-images.xml...');
const sitemapImagesPath = path.join(__dirname, '..', 'public', 'sitemap-images.xml');
if (fs.existsSync(sitemapImagesPath)) {
  const content = fs.readFileSync(sitemapImagesPath, 'utf-8');
  if (content.includes('cheese-chompers-3d.webp')) {
    console.log('✅ Cheese Chompers 3D image is in sitemap-images.xml');
  } else {
    console.log('❌ Cheese Chompers 3D image not found in sitemap-images.xml');
    allChecks = false;
  }
} else {
  console.log('❌ sitemap-images.xml file not found');
  allChecks = false;
}

// Final summary
console.log('\n' + '='.repeat(50));
if (allChecks) {
  console.log('✅ All checks passed! Cheese Chompers 3D is ready to go!');
  console.log('\n📋 Next steps:');
  console.log('  1. Start dev server: npm run dev');
  console.log('  2. Visit: http://localhost:3000/cheese-chompers-3d');
  console.log('  3. Check homepage for NEW badge');
  console.log('  4. Verify comments are displayed');
} else {
  console.log('❌ Some checks failed. Please review the errors above.');
  process.exit(1);
}

