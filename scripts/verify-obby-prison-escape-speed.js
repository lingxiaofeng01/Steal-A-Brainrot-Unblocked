#!/usr/bin/env node
/**
 * Verification script for Obby Prison Escape Speed game addition
 * Checks all required files and configurations
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 验证 Obby Prison Escape Speed 游戏添加...\n');
console.log('='.repeat(60));

const gameSlug = 'obby-prison-escape-speed';
const gameName = 'Obby Prison Escape Speed';
const releaseDate = '2025-11-10';
const tags = ['Obby', 'Parkour', 'Action', 'Adventure', 'Escape', 'Prison', '3D', 'Platformer', 'Running', 'Skill'];

let allChecksPass = true;

// 1. 检查缩略图文件
console.log('\n1️⃣ 检查缩略图文件...');
const thumbnailPath = path.join(__dirname, '..', 'public', 'images', 'thumbnails', `${gameSlug}.jpg`);
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ 缩略图存在: ${thumbnailPath} (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log(`   ❌ 缩略图不存在: ${thumbnailPath}`);
  allChecksPass = false;
}

// 2. 检查 games.ts
console.log('\n2️⃣ 检查 games.ts...');
const gamesPath = path.join(__dirname, '..', 'src', 'data', 'games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf-8');

if (gamesContent.includes(`slug: '${gameSlug}'`)) {
  console.log(`   ✅ 游戏已添加到 games.ts`);
  
  // 检查是否在数组开头
  const lines = gamesContent.split('\n');
  const slugLineIndex = lines.findIndex(line => line.includes(`slug: '${gameSlug}'`));
  if (slugLineIndex < 100) {
    console.log(`   ✅ 游戏在数组开头位置 (第 ${slugLineIndex + 1} 行)`);
  } else {
    console.log(`   ⚠️  游戏不在数组开头 (第 ${slugLineIndex + 1} 行)`);
  }
  
  // 检查必填字段
  if (gamesContent.includes(`name: '${gameName}'`)) {
    console.log(`   ✅ 游戏名称正确`);
  } else {
    console.log(`   ❌ 游戏名称不正确`);
    allChecksPass = false;
  }
  
  if (gamesContent.includes(`releaseDate: '${releaseDate}'`)) {
    console.log(`   ✅ 发布日期正确 (${releaseDate})`);
  } else {
    console.log(`   ❌ 发布日期不正确`);
    allChecksPass = false;
  }
  
  // 检查标签
  let tagsFound = 0;
  tags.forEach(tag => {
    if (gamesContent.includes(`'${tag}'`)) {
      tagsFound++;
    }
  });
  console.log(`   ✅ 标签: ${tagsFound}/${tags.length} 个标签已添加`);
  if (tagsFound < tags.length) {
    console.log(`   ⚠️  缺少 ${tags.length - tagsFound} 个标签`);
  }
} else {
  console.log(`   ❌ 游戏未添加到 games.ts`);
  allChecksPass = false;
}

// 3. 检查游戏页面组件
console.log('\n3️⃣ 检查游戏页面组件...');
const pagePath = path.join(__dirname, '..', 'src', 'pages', 'ObbyPrisonEscapeSpeedPage.tsx');
if (fs.existsSync(pagePath)) {
  console.log(`   ✅ ObbyPrisonEscapeSpeedPage.tsx 存在`);
  
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  
  // 检查内容长度
  const wordCount = pageContent.split(/\s+/).length;
  if (wordCount > 500) {
    console.log(`   ✅ 页面内容充足 (约 ${wordCount} 词)`);
  } else {
    console.log(`   ⚠️  页面内容较少 (约 ${wordCount} 词)`);
  }
  
  // 检查 H1 标签
  if (pageContent.includes('title:') && pageContent.includes(gameName)) {
    console.log(`   ✅ H1 标签包含游戏名称`);
  } else {
    console.log(`   ⚠️  H1 标签可能缺失或不包含游戏名称`);
  }
  
  // 检查关键词密度（简单统计）
  const gameNameOccurrences = (pageContent.match(new RegExp(gameName, 'gi')) || []).length;
  const keywordDensity = (gameNameOccurrences / wordCount * 100).toFixed(2);
  console.log(`   ℹ️  关键词 "${gameName}" 出现 ${gameNameOccurrences} 次，密度约 ${keywordDensity}%`);
  if (parseFloat(keywordDensity) >= 2.0) {
    console.log(`   ✅ 关键词密度达标 (≥2%)`);
  } else {
    console.log(`   ⚠️  关键词密度偏低 (<2%)`);
  }
  
  // 检查样式规范（text-gray-800）
  if (pageContent.includes('text-gray-800') || pageContent.includes('text-gray-700')) {
    console.log(`   ✅ 使用正确的文字颜色样式`);
  } else {
    console.log(`   ⚠️  可能使用了不正确的文字颜色`);
  }
} else {
  console.log(`   ❌ ObbyPrisonEscapeSpeedPage.tsx 不存在`);
  allChecksPass = false;
}

// 4. 检查路由注册
console.log('\n4️⃣ 检查路由注册...');
const routePath = path.join(__dirname, '..', 'src', 'pages', 'GameDetailPage.tsx');
const routeContent = fs.readFileSync(routePath, 'utf-8');

if (routeContent.includes(`'${gameSlug}'`) && routeContent.includes('ObbyPrisonEscapeSpeedPage')) {
  console.log(`   ✅ 游戏已在 GameDetailPage.tsx 中注册`);
} else {
  console.log(`   ❌ 游戏未在路由中注册`);
  allChecksPass = false;
}

// 5. 检查 Supabase 迁移脚本
console.log('\n5️⃣ 检查 Supabase 迁移脚本...');
const migrationPath = path.join(__dirname, '..', 'supabase', 'migrations', '20251110_add_obby_prison_escape_speed.sql');
if (fs.existsSync(migrationPath)) {
  console.log(`   ✅ 20251110_add_${gameSlug}.sql 存在`);
  
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  
  // 检查游戏记录插入
  if (migrationContent.includes('INSERT INTO games')) {
    console.log(`   ✅ 包含游戏记录插入语句`);
  } else {
    console.log(`   ❌ 缺少游戏记录插入语句`);
    allChecksPass = false;
  }
  
  // 检查标签插入
  if (migrationContent.includes('INSERT INTO tags')) {
    console.log(`   ✅ 包含标签插入语句`);
  } else {
    console.log(`   ⚠️  可能缺少标签插入语句`);
  }
  
  // 检查标签关联
  if (migrationContent.includes('INSERT INTO game_tags')) {
    console.log(`   ✅ 包含标签关联语句`);
  } else {
    console.log(`   ❌ 缺少标签关联语句`);
    allChecksPass = false;
  }
  
  // 检查评论插入
  if (migrationContent.includes('INSERT INTO game_comments')) {
    console.log(`   ✅ 包含评论插入语句`);
  } else {
    console.log(`   ❌ 缺少评论插入语句`);
    allChecksPass = false;
  }
  
  // 检查字段名正确性
  if (migrationContent.includes('comment_text')) {
    console.log(`   ✅ 使用正确的字段名 comment_text`);
  } else if (migrationContent.includes('content')) {
    console.log(`   ❌ 错误：使用了 content 而非 comment_text`);
    allChecksPass = false;
  }
} else {
  console.log(`   ❌ Supabase 迁移脚本不存在`);
  allChecksPass = false;
}

// 6. 检查 Sitemap 文件
console.log('\n6️⃣ 检查 Sitemap 文件...');

// sitemap-games.xml
const sitemapGamesPath = path.join(__dirname, '..', 'public', 'sitemap-games.xml');
const sitemapGamesContent = fs.readFileSync(sitemapGamesPath, 'utf-8');
if (sitemapGamesContent.includes(gameSlug)) {
  console.log(`   ✅ sitemap-games.xml 已更新`);
} else {
  console.log(`   ❌ sitemap-games.xml 未更新`);
  allChecksPass = false;
}

// sitemap-images.xml
const sitemapImagesPath = path.join(__dirname, '..', 'public', 'sitemap-images.xml');
const sitemapImagesContent = fs.readFileSync(sitemapImagesPath, 'utf-8');
if (sitemapImagesContent.includes(gameSlug)) {
  console.log(`   ✅ sitemap-images.xml 已更新`);
} else {
  console.log(`   ❌ sitemap-images.xml 未更新`);
  allChecksPass = false;
}

// sitemap-tags.xml
const sitemapTagsPath = path.join(__dirname, '..', 'public', 'sitemap-tags.xml');
const sitemapTagsContent = fs.readFileSync(sitemapTagsPath, 'utf-8');
const updatedTags = ['obby', 'parkour', 'escape', 'prison', 'action', 'adventure', '3d', 'platformer', 'running', 'skill'];
let tagsUpdated = 0;
updatedTags.forEach(tag => {
  if (sitemapTagsContent.includes(`tag/${tag}`)) {
    tagsUpdated++;
  }
});
console.log(`   ✅ sitemap-tags.xml: ${tagsUpdated}/${updatedTags.length} 个标签页面已添加`);

// 7. 检查 NEW 标志逻辑
console.log('\n7️⃣ 检查 NEW 标志逻辑...');
const today = new Date();
const release = new Date(releaseDate);
const daysDiff = Math.floor((today - release) / (1000 * 60 * 60 * 24));

if (daysDiff <= 7) {
  console.log(`   ✅ 游戏发布于 ${daysDiff} 天前，应显示 NEW 标志`);
} else {
  console.log(`   ℹ️  游戏发布于 ${daysDiff} 天前，不应显示 NEW 标志`);
}

// 最终总结
console.log('\n' + '='.repeat(60));
if (allChecksPass) {
  console.log('✅ 所有检查通过！游戏已正确添加。\n');
  console.log('📋 后续步骤：');
  console.log('   1. 运行 Supabase 迁移（通过 API 或 Dashboard）');
  console.log('   2. 验证数据库数据同步');
  console.log('   3. 本地测试游戏页面');
  console.log('   4. 部署到生产环境\n');
  process.exit(0);
} else {
  console.log('❌ 部分检查未通过，请修复上述问题。\n');
  process.exit(1);
}

