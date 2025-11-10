const fs = require('fs');
const path = require('path');

console.log('🔍 验证 Counter Craft Sniper 游戏添加...\n');

const gameSlug = 'counter-craft-sniper';
const gameName = 'Counter Craft Sniper';
const releaseDate = '2025-11-10';
const tags = ['Shooting', 'Action', 'FPS', '3D', 'Sniper', 'Minecraft', 'Zombie', 'Combat'];

let allChecksPass = true;

// 1. 检查缩略图文件
console.log('1️⃣ 检查缩略图文件...');
const thumbnailPath = path.join(__dirname, '..', 'public', 'images', 'thumbnails', `${gameSlug}.webp`);
if (fs.existsSync(thumbnailPath)) {
  const stats = fs.statSync(thumbnailPath);
  console.log(`   ✅ 缩略图存在: ${thumbnailPath} (${(stats.size / 1024).toFixed(2)} KB)`);
} else {
  console.log(`   ❌ 缩略图不存在: ${thumbnailPath}`);
  allChecksPass = false;
}

// 2. 检查 games.ts 中的游戏数据
console.log('\n2️⃣ 检查 games.ts 中的游戏数据...');
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
  const gameBlock = gamesContent.substring(
    gamesContent.indexOf(`slug: '${gameSlug}'`) - 500,
    gamesContent.indexOf(`slug: '${gameSlug}'`) + 1000
  );
  
  const requiredFields = ['name:', 'image:', 'slug:', 'isReal: true', 'url:', 'releaseDate:', 'tags:', 'rating:', 'playCount:'];
  requiredFields.forEach(field => {
    if (gameBlock.includes(field)) {
      console.log(`   ✅ ${field} 字段存在`);
    } else {
      console.log(`   ❌ ${field} 字段缺失`);
      allChecksPass = false;
    }
  });
  
  // 检查标签
  console.log(`   📋 检查标签...`);
  tags.forEach(tag => {
    if (gameBlock.includes(`'${tag}'`)) {
      console.log(`   ✅ 标签 "${tag}" 已添加`);
    } else {
      console.log(`   ❌ 标签 "${tag}" 缺失`);
      allChecksPass = false;
    }
  });
  
} else {
  console.log(`   ❌ 游戏未添加到 games.ts`);
  allChecksPass = false;
}

// 3. 检查游戏页面组件
console.log('\n3️⃣ 检查游戏页面组件...');
const pagePath = path.join(__dirname, '..', 'src', 'pages', 'CounterCraftSniperPage.tsx');
if (fs.existsSync(pagePath)) {
  console.log(`   ✅ 游戏页面组件存在: ${pagePath}`);
  
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  
  // 检查 H2 标签（使用 text-gray-800）
  if (pageContent.includes('<h2') && pageContent.includes('text-gray-800')) {
    console.log(`   ✅ H2 标签存在且使用正确颜色 (text-gray-800)`);
  } else if (pageContent.includes('<h2')) {
    console.log(`   ⚠️  H2 标签存在但可能未使用 text-gray-800`);
  } else {
    console.log(`   ❌ H2 标签缺失`);
    allChecksPass = false;
  }
  
  // 检查关键词密度（简单统计）
  const keywordCount = (pageContent.match(/Counter Craft Sniper/gi) || []).length;
  const totalWords = pageContent.split(/\s+/).length;
  const density = ((keywordCount * 3) / totalWords * 100).toFixed(2); // 3 words per keyword phrase
  console.log(`   📊 关键词 "Counter Craft Sniper" 出现 ${keywordCount} 次`);
  console.log(`   📊 关键词密度: ${density}% (目标: ≥2%)`);
  
  if (parseFloat(density) >= 2.0) {
    console.log(`   ✅ 关键词密度达标`);
  } else {
    console.log(`   ⚠️  关键词密度未达到 2%`);
  }
  
  // 检查内容长度
  const contentLength = pageContent.length;
  console.log(`   📏 页面内容长度: ${contentLength} 字符`);
  if (contentLength > 3000) {
    console.log(`   ✅ 内容长度充足 (>3000 字符)`);
  } else {
    console.log(`   ⚠️  内容长度可能不足`);
  }
  
} else {
  console.log(`   ❌ 游戏页面组件不存在: ${pagePath}`);
  allChecksPass = false;
}

// 4. 检查 GameDetailPage.tsx 注册
console.log('\n4️⃣ 检查 GameDetailPage.tsx 注册...');
const gameDetailPath = path.join(__dirname, '..', 'src', 'pages', 'GameDetailPage.tsx');
const gameDetailContent = fs.readFileSync(gameDetailPath, 'utf-8');

if (gameDetailContent.includes(`'${gameSlug}'`) && gameDetailContent.includes('CounterCraftSniperPage')) {
  console.log(`   ✅ 游戏已注册到 GameDetailPage.tsx`);
  
  // 检查是否在开头位置
  const lines = gameDetailContent.split('\n');
  const registrationLine = lines.findIndex(line => line.includes(`'${gameSlug}'`));
  if (registrationLine < 20) {
    console.log(`   ✅ 注册在 gamePageComponents 开头位置`);
  } else {
    console.log(`   ⚠️  注册不在开头位置`);
  }
} else {
  console.log(`   ❌ 游戏未注册到 GameDetailPage.tsx`);
  allChecksPass = false;
}

// 5. 检查 Supabase 迁移文件
console.log('\n5️⃣ 检查 Supabase 迁移文件...');
const migrationPath = path.join(__dirname, '..', 'supabase', 'migrations', '20251110_add_counter_craft_sniper.sql');
if (fs.existsSync(migrationPath)) {
  console.log(`   ✅ 迁移文件存在: ${migrationPath}`);
  
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  
  // 检查必要的 SQL 语句
  const requiredSections = [
    'INSERT INTO games',
    'INSERT INTO tags',
    'INSERT INTO game_tags',
    'INSERT INTO game_comments'
  ];
  
  requiredSections.forEach(section => {
    if (migrationContent.includes(section)) {
      console.log(`   ✅ ${section} 语句存在`);
    } else {
      console.log(`   ❌ ${section} 语句缺失`);
      allChecksPass = false;
    }
  });
  
  // 检查是否使用正确的字段名
  if (migrationContent.includes('comment_text')) {
    console.log(`   ✅ 使用正确的字段名 "comment_text"`);
  } else if (migrationContent.includes('content')) {
    console.log(`   ❌ 错误使用 "content" 字段，应该是 "comment_text"`);
    allChecksPass = false;
  }
  
  // 检查是否使用 UUID 外键
  if (migrationContent.includes('SELECT g.id, t.id')) {
    console.log(`   ✅ game_tags 使用 UUID 外键`);
  } else {
    console.log(`   ❌ game_tags 可能未使用 UUID 外键`);
    allChecksPass = false;
  }
  
} else {
  console.log(`   ❌ 迁移文件不存在: ${migrationPath}`);
  allChecksPass = false;
}

// 6. 检查 Sitemap 文件
console.log('\n6️⃣ 检查 Sitemap 文件...');

const sitemapFiles = [
  'public/sitemap-games.xml',
  'public/sitemap-images.xml',
  'public/sitemap.xml',
  'public/sitemap-tags.xml',
  'public/sitemap-index.xml'
];

sitemapFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  if (file === 'public/sitemap-games.xml' || file === 'public/sitemap-images.xml') {
    if (content.includes(gameSlug)) {
      console.log(`   ✅ ${file} 已更新（包含游戏）`);
    } else {
      console.log(`   ❌ ${file} 未包含游戏`);
      allChecksPass = false;
    }
  } else {
    if (content.includes('2025-11-10')) {
      console.log(`   ✅ ${file} 日期已更新`);
    } else {
      console.log(`   ⚠️  ${file} 日期可能未更新`);
    }
  }
});

// 7. 检查 NEW 标志
console.log('\n7️⃣ 检查 NEW 标志...');
const today = new Date('2025-11-10');
const release = new Date(releaseDate);
const daysDiff = Math.floor((today - release) / (1000 * 60 * 60 * 24));

if (daysDiff <= 7) {
  console.log(`   ✅ 游戏将显示 NEW 标志（发布 ${daysDiff} 天前）`);
} else {
  console.log(`   ⚠️  游戏不会显示 NEW 标志（发布 ${daysDiff} 天前，超过 7 天）`);
}

// 8. 游戏将出现的页面
console.log('\n8️⃣ 游戏将自动出现在以下页面：');
console.log('   📄 首页 (/) - 通过 getAllGames() 自动显示');
console.log('   📄 所有游戏页 (/all) - 通过 getNewGames() 自动显示');
console.log('   📄 热门游戏页 (/hot) - 通过 getHotGames() 自动显示');
tags.forEach(tag => {
  const tagSlug = tag.toLowerCase().replace(/ /g, '-');
  console.log(`   📄 ${tag} 标签页 (/tag/${tagSlug})`);
});

// 总结
console.log('\n' + '='.repeat(60));
if (allChecksPass) {
  console.log('✅ 所有检查通过！游戏已正确添加。');
  console.log('\n📋 后续步骤：');
  console.log('   1. 运行 Supabase 迁移（通过 API 或 Dashboard）');
  console.log('   2. 验证数据库中的游戏记录、标签和评论');
  console.log('   3. 本地测试游戏页面');
  console.log('   4. 部署到生产环境');
} else {
  console.log('❌ 部分检查未通过，请修复上述问题。');
}
console.log('='.repeat(60));

