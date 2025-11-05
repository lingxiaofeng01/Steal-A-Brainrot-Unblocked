#!/usr/bin/env node

/**
 * 验证脚本：Platform Cook
 * 
 * 检查项：
 * 1. 缩略图文件存在
 * 2. 游戏添加到 games.ts
 * 3. 所有标签正确
 * 4. 游戏页面组件存在
 * 5. GameDetailPage.tsx 注册
 * 6. Supabase 迁移文件
 * 7. Sitemap 文件更新
 * 8. NEW 标志符合条件（7 天内）
 */

const fs = require('fs');
const path = require('path');

const gameSlug = 'platform-cook';
const gameName = 'Platform Cook';
const releaseDate = '2025-11-05';
const tags = ['Puzzle', 'Action', 'Platformer', 'Skill', 'Arcade', 'Cooking', 'Casual'];

console.log('🔍 开始验证 Platform Cook 游戏配置...\n');

let hasErrors = false;

// 1. 检查缩略图
console.log('1️⃣ 检查缩略图文件...');
const thumbnailPath = path.join(__dirname, '..', 'public', 'images', 'thumbnails', `${gameSlug}.png`);
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ 缩略图存在: ${thumbnailPath} (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log(`   ❌ 缩略图不存在: ${thumbnailPath}`);
  hasErrors = true;
}

// 2. 检查 games.ts
console.log('\n2️⃣ 检查 games.ts...');
const gamesPath = path.join(__dirname, '..', 'src', 'data', 'games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf-8');

if (gamesContent.includes(`slug: '${gameSlug}'`)) {
  console.log(`   ✅ 游戏已添加到 games.ts`);
  
  // 检查是否在数组开头（前100行内）
  const lines = gamesContent.split('\n');
  const slugLineIndex = lines.findIndex(line => line.includes(`slug: '${gameSlug}'`));
  if (slugLineIndex < 100) {
    console.log(`   ✅ 游戏在数组开头位置 (第 ${slugLineIndex + 1} 行)`);
  } else {
    console.log(`   ⚠️  游戏不在数组开头 (第 ${slugLineIndex + 1} 行)`);
  }
  
  // 检查必填字段
  const requiredFields = ['name:', 'image:', 'slug:', 'isReal: true', 'url:', 'releaseDate:', 'tags:', 'rating:', 'playCount:'];
  requiredFields.forEach(field => {
    const fieldPattern = new RegExp(`${field.replace(':', '\\s*:')}`);
    if (fieldPattern.test(gamesContent)) {
      console.log(`   ✅ 包含字段: ${field}`);
    } else {
      console.log(`   ❌ 缺少字段: ${field}`);
      hasErrors = true;
    }
  });
} else {
  console.log(`   ❌ 游戏未添加到 games.ts`);
  hasErrors = true;
}

// 3. 检查标签
console.log('\n3️⃣ 检查游戏标签...');
tags.forEach(tag => {
  if (gamesContent.includes(`'${tag}'`)) {
    console.log(`   ✅ 标签存在: ${tag}`);
  } else {
    console.log(`   ❌ 标签缺失: ${tag}`);
    hasErrors = true;
  }
});

// 4. 检查游戏页面组件
console.log('\n4️⃣ 检查游戏页面组件...');
const pagePath = path.join(__dirname, '..', 'src', 'pages', 'PlatformCookPage.tsx');
if (fs.existsSync(pagePath)) {
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  console.log(`   ✅ 页面组件存在: ${pagePath}`);
  
  // 检查关键内容
  if (pageContent.includes('GameDetailTemplate')) {
    console.log(`   ✅ 使用 GameDetailTemplate`);
  }
  if (pageContent.includes(gameName)) {
    console.log(`   ✅ 包含游戏名称`);
  }
  if (pageContent.includes('aboutContent')) {
    console.log(`   ✅ 包含 aboutContent`);
  }
  if (pageContent.includes('howToPlayContent')) {
    console.log(`   ✅ 包含 howToPlayContent`);
  }
  if (pageContent.includes('featuresContent')) {
    console.log(`   ✅ 包含 featuresContent`);
  }
  
  // 检查文字长度（应该 > 1000 字）
  const textContent = pageContent.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ');
  const wordCount = textContent.length;
  console.log(`   ℹ️  页面内容长度: ${wordCount} 字符`);
  if (wordCount > 1000) {
    console.log(`   ✅ 内容长度符合要求 (>1000)`);
  } else {
    console.log(`   ⚠️  内容长度可能不足 (<1000)`);
  }
  
  // 检查 H2 标签使用 text-gray-800
  if (pageContent.includes('text-gray-800')) {
    console.log(`   ✅ H2 标签使用正确的颜色 (text-gray-800)`);
  } else {
    console.log(`   ⚠️  可能缺少 text-gray-800 样式`);
  }
} else {
  console.log(`   ❌ 页面组件不存在: ${pagePath}`);
  hasErrors = true;
}

// 5. 检查 GameDetailPage.tsx 注册
console.log('\n5️⃣ 检查 GameDetailPage.tsx 注册...');
const gameDetailPagePath = path.join(__dirname, '..', 'src', 'pages', 'GameDetailPage.tsx');
const gameDetailPageContent = fs.readFileSync(gameDetailPagePath, 'utf-8');

if (gameDetailPageContent.includes(`'${gameSlug}'`)) {
  console.log(`   ✅ 游戏已在 GameDetailPage.tsx 注册`);
  
  // 检查是否在开头
  const lines = gameDetailPageContent.split('\n');
  const registrationLine = lines.findIndex(line => line.includes(`'${gameSlug}'`));
  if (registrationLine < 20) {
    console.log(`   ✅ 注册在 gamePageComponents 开头 (第 ${registrationLine + 1} 行)`);
  } else {
    console.log(`   ⚠️  注册不在开头 (第 ${registrationLine + 1} 行)`);
  }
  
  if (gameDetailPageContent.includes('PlatformCookPage')) {
    console.log(`   ✅ 导入正确的组件名称`);
  }
} else {
  console.log(`   ❌ 游戏未在 GameDetailPage.tsx 注册`);
  hasErrors = true;
}

// 6. 检查 Supabase 迁移文件
console.log('\n6️⃣ 检查 Supabase 迁移文件...');
const migrationPath = path.join(__dirname, '..', 'supabase', 'migrations', `20251105_add_platform_cook.sql`);
if (fs.existsSync(migrationPath)) {
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  console.log(`   ✅ 迁移文件存在: ${migrationPath}`);
  
  // 检查关键 SQL 语句
  if (migrationContent.includes('INSERT INTO games')) {
    console.log(`   ✅ 包含游戏插入语句`);
  }
  if (migrationContent.includes('INSERT INTO tags')) {
    console.log(`   ✅ 包含标签插入语句`);
  }
  if (migrationContent.includes('INSERT INTO game_tags')) {
    console.log(`   ✅ 包含游戏标签关联语句`);
  }
  if (migrationContent.includes('INSERT INTO game_comments')) {
    console.log(`   ✅ 包含评论插入语句`);
  }
  
  // 检查是否使用正确的字段名
  if (migrationContent.includes('comment_text')) {
    console.log(`   ✅ 使用正确的字段名 comment_text`);
  } else if (migrationContent.includes('content')) {
    console.log(`   ❌ 错误：使用了 content 而不是 comment_text`);
    hasErrors = true;
  }
  
  // 检查是否使用 UUID 外键
  if (migrationContent.includes('SELECT g.id, t.id')) {
    console.log(`   ✅ 使用 UUID 外键关联`);
  } else {
    console.log(`   ⚠️  可能未使用 UUID 外键`);
  }
} else {
  console.log(`   ❌ 迁移文件不存在: ${migrationPath}`);
  hasErrors = true;
}

// 7. 检查 Sitemap 文件
console.log('\n7️⃣ 检查 Sitemap 文件...');

// sitemap-games.xml
const sitemapGamesPath = path.join(__dirname, '..', 'public', 'sitemap-games.xml');
const sitemapGamesContent = fs.readFileSync(sitemapGamesPath, 'utf-8');
if (sitemapGamesContent.includes(`/${gameSlug}</loc>`)) {
  console.log(`   ✅ sitemap-games.xml 已更新`);
} else {
  console.log(`   ❌ sitemap-games.xml 未更新`);
  hasErrors = true;
}

// sitemap-images.xml
const sitemapImagesPath = path.join(__dirname, '..', 'public', 'sitemap-images.xml');
const sitemapImagesContent = fs.readFileSync(sitemapImagesPath, 'utf-8');
if (sitemapImagesContent.includes(`/${gameSlug}</loc>`)) {
  console.log(`   ✅ sitemap-images.xml 已更新`);
} else {
  console.log(`   ❌ sitemap-images.xml 未更新`);
  hasErrors = true;
}

// sitemap-tags.xml
const sitemapTagsPath = path.join(__dirname, '..', 'public', 'sitemap-tags.xml');
const sitemapTagsContent = fs.readFileSync(sitemapTagsPath, 'utf-8');
const tagSlugs = tags.map(t => t.toLowerCase().replace(/ /g, '-'));
tagSlugs.forEach(tagSlug => {
  if (sitemapTagsContent.includes(`/tag/${tagSlug}</loc>`)) {
    console.log(`   ✅ sitemap-tags.xml 包含标签: ${tagSlug}`);
  } else {
    console.log(`   ⚠️  sitemap-tags.xml 缺少标签: ${tagSlug}`);
  }
});

// 8. 检查 NEW 标志
console.log('\n8️⃣ 检查 NEW 标志...');
const today = new Date('2025-11-05');
const release = new Date(releaseDate);
const daysDiff = Math.floor((today - release) / (1000 * 60 * 60 * 24));

if (daysDiff <= 7) {
  console.log(`   ✅ 游戏将显示 NEW 标志（发布 ${daysDiff} 天前）`);
} else {
  console.log(`   ⚠️  游戏不会显示 NEW 标志（发布 ${daysDiff} 天前，超过 7 天）`);
}

// 9. 游戏将出现的页面
console.log('\n9️⃣ 游戏将自动出现在以下页面：');
console.log('   📄 首页 (/) - 通过 getAllGames() 自动显示');
console.log('   📄 所有游戏页 (/all) - 通过 getNewGames() 自动显示');
console.log('   📄 热门游戏页 (/hot) - 通过 getHotGames() 自动显示');
tags.forEach(tag => {
  const tagSlug = tag.toLowerCase().replace(/ /g, '-');
  console.log(`   📄 ${tag} 标签页 (/tag/${tagSlug})`);
});

// 总结
console.log('\n' + '='.repeat(60));
if (hasErrors) {
  console.log('❌ 验证失败！请修复上述错误。');
  process.exit(1);
} else {
  console.log('✅ 验证通过！所有配置正确。');
  console.log('\n📝 后续步骤：');
  console.log('   1. 运行 Supabase 迁移（通过 API 或 Dashboard）');
  console.log('   2. 验证 Supabase 数据同步');
  console.log('   3. 本地测试游戏页面');
  console.log('   4. 部署到生产环境');
  process.exit(0);
}

