const fs = require('fs');
const path = require('path');

console.log('🚀 验证 Rocket Fortress 游戏添加...\n');

// 1. 检查游戏数据
console.log('1️⃣ 检查游戏数据 (src/data/games.ts)...');
const gamesPath = path.join(__dirname, '..', 'src/data/games.ts');
const gamesContent = fs.readFileSync(gamesPath, 'utf8');

if (gamesContent.includes("name: 'Rocket Fortress'") && 
    gamesContent.includes("slug: 'rocket-fortress'") &&
    gamesContent.includes("releaseDate: '2025-10-30'")) {
  console.log('   ✅ 游戏数据已添加到 games.ts');
  
  // 检查是否在第一位
  const firstGameMatch = gamesContent.match(/export const allGames: Game\[\] = \[\s*\{[\s\S]*?name: '([^']+)'/);
  if (firstGameMatch && firstGameMatch[1] === 'Rocket Fortress') {
    console.log('   ✅ 游戏位于第一位（最新）');
  } else {
    console.log('   ⚠️  游戏可能不在第一位');
  }
} else {
  console.log('   ❌ 游戏数据未找到');
}

// 2. 检查游戏页面组件
console.log('\n2️⃣ 检查游戏页面组件 (src/pages/RocketFortressPage.tsx)...');
const pagePath = path.join(__dirname, '..', 'src/pages/RocketFortressPage.tsx');
if (fs.existsSync(pagePath)) {
  console.log('   ✅ RocketFortressPage.tsx 存在');
  
  const pageContent = fs.readFileSync(pagePath, 'utf8');
  if (pageContent.includes("slug: 'rocket-fortress'") &&
      pageContent.includes('Rocket Fortress') &&
      pageContent.includes('https://gamea.azgame.io/rocket-fortress/')) {
    console.log('   ✅ 页面组件包含正确的游戏数据');
  } else {
    console.log('   ⚠️  页面组件数据可能不完整');
  }
  
  // 检查内容长度
  const wordCount = pageContent.split(/\s+/).length;
  if (wordCount > 500) {
    console.log(`   ✅ 页面内容充足 (约 ${wordCount} 词)`);
  } else {
    console.log(`   ⚠️  页面内容较少 (约 ${wordCount} 词)`);
  }
} else {
  console.log('   ❌ RocketFortressPage.tsx 不存在');
}

// 3. 检查路由注册
console.log('\n3️⃣ 检查路由注册 (src/pages/GameDetailPage.tsx)...');
const routePath = path.join(__dirname, '..', 'src/pages/GameDetailPage.tsx');
const routeContent = fs.readFileSync(routePath, 'utf8');

if (routeContent.includes("'rocket-fortress'") && 
    routeContent.includes('RocketFortressPage')) {
  console.log('   ✅ 游戏已在 GameDetailPage.tsx 中注册');
} else {
  console.log('   ❌ 游戏未在路由中注册');
}

// 4. 检查缩略图
console.log('\n4️⃣ 检查缩略图...');
const thumbnailPath = path.join(__dirname, '..', 'public/images/thumbnails/rocket-fortress.png');
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ 缩略图存在 (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log('   ❌ 缩略图不存在');
}

// 5. 检查网站地图
console.log('\n5️⃣ 检查网站地图 (public/sitemap-games.xml)...');
const sitemapPath = path.join(__dirname, '..', 'public/sitemap-games.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

if (sitemapContent.includes('rocket-fortress')) {
  console.log('   ✅ 游戏URL已添加到 sitemap-games.xml');
} else {
  console.log('   ❌ 游戏URL未在网站地图中找到');
}

// 6. 检查 Supabase 迁移脚本
console.log('\n6️⃣ 检查 Supabase 迁移脚本...');
const migrationPath = path.join(__dirname, '..', 'supabase/migrations/20251030_add_rocket_fortress.sql');
if (fs.existsSync(migrationPath)) {
  console.log('   ✅ 20251030_add_rocket_fortress.sql 存在');
  
  const migrationContent = fs.readFileSync(migrationPath, 'utf8');
  if (migrationContent.includes("'rocket-fortress'") &&
      migrationContent.includes('game_stats') &&
      migrationContent.includes('game_comments')) {
    console.log('   ✅ SQL 脚本包含正确的游戏 slug');
  } else {
    console.log('   ⚠️  SQL 脚本可能不完整');
  }
} else {
  console.log('   ❌ Supabase 迁移脚本不存在');
}

// 7. 检查 NEW 标志资格
console.log('\n7️⃣ 检查 NEW 标志资格...');
const releaseDate = new Date('2025-10-30');
const today = new Date();
const diffDays = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
if (diffDays <= 7) {
  console.log(`   ✅ 游戏发布 ${diffDays} 天 - 将显示 NEW 标志`);
} else {
  console.log(`   ⚠️  游戏发布 ${diffDays} 天 - 不会显示 NEW 标志`);
}

// 8. 检查游戏标签
console.log('\n8️⃣ 检查游戏标签...');
const expectedTags = ['Clicker', 'RPG', 'Action', 'Strategy', 'Casual', 'Shooting', 'Kids'];
let tagsFound = 0;
expectedTags.forEach(tag => {
  if (gamesContent.includes(`'${tag}'`)) {
    tagsFound++;
  }
});

if (tagsFound === expectedTags.length) {
  console.log(`   ✅ 找到所有 ${expectedTags.length} 个标签`);
} else {
  console.log(`   ⚠️  只找到 ${tagsFound}/${expectedTags.length} 个标签`);
}

// 9. 检查 SEO 元素
console.log('\n9️⃣ 检查 SEO 元素...');
if (fs.existsSync(pagePath)) {
  const pageContent = fs.readFileSync(pagePath, 'utf8');
  
  // 检查 H2 标签
  const h2Count = (pageContent.match(/<h2/g) || []).length;
  // 检查 H3 标签
  const h3Count = (pageContent.match(/<h3/g) || []).length;
  
  console.log(`   ✅ H2 标签数量: ${h2Count}`);
  console.log(`   ✅ H3 标签数量: ${h3Count}`);
  
  if (h2Count >= 1 && h3Count >= 3) {
    console.log('   ✅ SEO 标签结构良好');
  } else {
    console.log('   ⚠️  SEO 标签可能需要优化');
  }
}

console.log('\n✅ Rocket Fortress 验证完成！');
console.log('\n📝 下一步:');
console.log('   1. 运行 Supabase 迁移脚本添加评论和统计数据');
console.log('   2. 测试游戏页面是否正常显示');
console.log('   3. 验证游戏在首页、分类页、标签页中显示');
console.log('   4. 检查 NEW 标志是否正确显示');

