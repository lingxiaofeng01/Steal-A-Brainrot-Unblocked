#!/usr/bin/env node

/**
 * Verification script for Geometry Dash Spam game addition
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

const GAME_SLUG = 'geometry-dash-spam';
const GAME_NAME = 'Geometry Dash Spam';
const RELEASE_DATE = '2025-11-04';
const REQUIRED_TAGS = ['Action', 'Arcade', 'Skill', 'Rhythm', 'Platformer', 'Casual', 'Timing'];

let errors = [];
let warnings = [];
let successes = [];

function checkFile(filePath, description) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (fs.existsSync(fullPath)) {
    successes.push(`✅ ${description}: ${filePath}`);
    return true;
  } else {
    errors.push(`❌ ${description} not found: ${filePath}`);
    return false;
  }
}

function checkFileContent(filePath, searchString, description) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (!fs.existsSync(fullPath)) {
    errors.push(`❌ File not found for content check: ${filePath}`);
    return false;
  }
  
  const content = fs.readFileSync(fullPath, 'utf8');
  if (content.includes(searchString)) {
    successes.push(`✅ ${description} found in ${filePath}`);
    return true;
  } else {
    errors.push(`❌ ${description} not found in ${filePath}`);
    return false;
  }
}

function checkNewBadgeLogic() {
  const releaseDate = new Date(RELEASE_DATE);
  const today = new Date();
  const daysDiff = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
  
  if (daysDiff <= 7) {
    successes.push(`✅ NEW badge should display (${daysDiff} days old, within 7-day window)`);
    return true;
  } else {
    warnings.push(`⚠️  NEW badge will NOT display (${daysDiff} days old, exceeds 7-day window)`);
    return false;
  }
}

console.log('\n🔍 Verifying Geometry Dash Spam Game Addition\n');
console.log('='.repeat(60));

// 1. Check thumbnail
console.log('\n📸 Checking Thumbnail...');
checkFile('public/images/thumbnails/geometry-dash-spam.webp', 'Thumbnail image');

// 2. Check games.ts
console.log('\n📝 Checking games.ts...');
if (checkFile('src/data/games.ts', 'Games data file')) {
  checkFileContent('src/data/games.ts', `slug: '${GAME_SLUG}'`, 'Game slug');
  checkFileContent('src/data/games.ts', `name: '${GAME_NAME}'`, 'Game name');
  checkFileContent('src/data/games.ts', `releaseDate: '${RELEASE_DATE}'`, 'Release date');
  
  // Check tags
  REQUIRED_TAGS.forEach(tag => {
    checkFileContent('src/data/games.ts', `'${tag}'`, `Tag: ${tag}`);
  });
}

// 3. Check game page component
console.log('\n📄 Checking Game Page Component...');
checkFile('src/pages/GeometryDashSpamPage.tsx', 'Game page component');
if (fs.existsSync(path.join(__dirname, '..', 'src/pages/GeometryDashSpamPage.tsx'))) {
  const pageContent = fs.readFileSync(path.join(__dirname, '..', 'src/pages/GeometryDashSpamPage.tsx'), 'utf8');
  
  // Check for H1 (title)
  if (pageContent.includes('Geometry Dash Spam')) {
    successes.push('✅ H1 title contains game name');
  } else {
    errors.push('❌ H1 title missing game name');
  }
  
  // Check for H2 tags
  const h2Count = (pageContent.match(/<h2/g) || []).length;
  if (h2Count >= 3) {
    successes.push(`✅ Multiple H2 tags found (${h2Count})`);
  } else {
    warnings.push(`⚠️  Only ${h2Count} H2 tags found, recommend at least 3`);
  }
  
  // Check keyword density (approximate)
  const keywordCount = (pageContent.match(/Geometry Dash Spam/gi) || []).length;
  const wordCount = pageContent.split(/\s+/).length;
  const density = ((keywordCount / wordCount) * 100).toFixed(2);
  
  if (density >= 2.0) {
    successes.push(`✅ Keyword density: ${density}% (target: 2%+)`);
  } else {
    warnings.push(`⚠️  Keyword density: ${density}% (target: 2%+, current below target)`);
  }
  
  // Check content length
  if (wordCount >= 1000) {
    successes.push(`✅ Content length: ${wordCount} words (target: 1000+)`);
  } else {
    errors.push(`❌ Content length: ${wordCount} words (target: 1000+)`);
  }
}

// 4. Check GameDetailPage.tsx registration
console.log('\n🔗 Checking Route Registration...');
if (checkFile('src/pages/GameDetailPage.tsx', 'Game detail page router')) {
  checkFileContent('src/pages/GameDetailPage.tsx', `'${GAME_SLUG}'`, 'Route slug');
  checkFileContent('src/pages/GameDetailPage.tsx', 'GeometryDashSpamPage', 'Component import');
}

// 5. Check Supabase migration
console.log('\n💾 Checking Supabase Migration...');
checkFile('supabase/migrations/20251104_add_geometry_dash_spam.sql', 'Migration file');
if (fs.existsSync(path.join(__dirname, '..', 'supabase/migrations/20251104_add_geometry_dash_spam.sql'))) {
  const migrationContent = fs.readFileSync(
    path.join(__dirname, '..', 'supabase/migrations/20251104_add_geometry_dash_spam.sql'),
    'utf8'
  );
  
  checkFileContent('supabase/migrations/20251104_add_geometry_dash_spam.sql', 'INSERT INTO games', 'Game insert statement');
  checkFileContent('supabase/migrations/20251104_add_geometry_dash_spam.sql', 'INSERT INTO tags', 'Tags insert statement');
  checkFileContent('supabase/migrations/20251104_add_geometry_dash_spam.sql', 'INSERT INTO game_tags', 'Game-tags relation');
  checkFileContent('supabase/migrations/20251104_add_geometry_dash_spam.sql', 'INSERT INTO game_comments', 'Initial comment');
  
  // Check for common errors
  if (migrationContent.includes('comment_text')) {
    successes.push('✅ Correct field name: comment_text (not content)');
  } else {
    errors.push('❌ Missing comment_text field in game_comments insert');
  }
  
  if (migrationContent.includes('game_id, tag_id')) {
    successes.push('✅ Correct game_tags structure (UUID foreign keys)');
  } else {
    errors.push('❌ Incorrect game_tags structure (should use game_id, tag_id)');
  }
}

// 6. Check Sitemap files
console.log('\n🗺️  Checking Sitemap Files...');
checkFileContent('public/sitemap-games.xml', GAME_SLUG, 'Game in sitemap-games.xml');
checkFileContent('public/sitemap-images.xml', GAME_SLUG, 'Game in sitemap-images.xml');
checkFileContent('public/sitemap-tags.xml', 'rhythm', 'Rhythm tag in sitemap-tags.xml');
checkFileContent('public/sitemap-tags.xml', 'platformer', 'Platformer tag in sitemap-tags.xml');

// Check lastmod dates
const sitemapFiles = [
  'public/sitemap.xml',
  'public/sitemap-games.xml',
  'public/sitemap-images.xml',
  'public/sitemap-tags.xml',
  'public/sitemap-index.xml'
];

sitemapFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, '..', file))) {
    const content = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
    if (content.includes(`<lastmod>${RELEASE_DATE}</lastmod>`)) {
      successes.push(`✅ ${file} has updated lastmod date`);
    } else {
      warnings.push(`⚠️  ${file} may need lastmod update`);
    }
  }
});

// 7. Check NEW badge logic
console.log('\n🆕 Checking NEW Badge Logic...');
checkNewBadgeLogic();

// 8. Summary
console.log('\n' + '='.repeat(60));
console.log('\n📊 VERIFICATION SUMMARY\n');

if (successes.length > 0) {
  console.log('✅ SUCCESSES:');
  successes.forEach(msg => console.log(`   ${msg}`));
}

if (warnings.length > 0) {
  console.log('\n⚠️  WARNINGS:');
  warnings.forEach(msg => console.log(`   ${msg}`));
}

if (errors.length > 0) {
  console.log('\n❌ ERRORS:');
  errors.forEach(msg => console.log(`   ${msg}`));
}

console.log('\n' + '='.repeat(60));
console.log(`\n✅ Successes: ${successes.length}`);
console.log(`⚠️  Warnings: ${warnings.length}`);
console.log(`❌ Errors: ${errors.length}`);

if (errors.length === 0) {
  console.log('\n🎉 All critical checks passed! Ready for deployment.\n');
  console.log('📋 Next Steps:');
  console.log('   1. Run Supabase migration (via API or Dashboard)');
  console.log('   2. Verify data in Supabase');
  console.log('   3. Test locally: http://localhost:3000/geometry-dash-spam');
  console.log('   4. Check game appears in homepage and tag pages');
  console.log('   5. Deploy to production\n');
  process.exit(0);
} else {
  console.log('\n❌ Verification failed. Please fix the errors above.\n');
  process.exit(1);
}

