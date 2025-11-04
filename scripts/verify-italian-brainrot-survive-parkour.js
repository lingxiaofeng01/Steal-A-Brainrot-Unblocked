const fs = require('fs');
const path = require('path');

console.log('🔍 验证 Italian Brainrot Survive Parkour 游戏添加...\n');

const gameSlug = 'italian-brainrot-survive-parkour';
const gameName = 'Italian Brainrot Survive Parkour';
const releaseDate = '2025-11-04';
const tags = ['2 Player', 'Parkour', 'Survival', 'Meme', 'Brainrot', 'Action', 'Arcade', 'Skill', 'Multiplayer'];

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
const pagePath = path.join(__dirname, '..', 'src', 'pages', 'ItalianBrainrotSurviveParkourPage.tsx');
if (fs.existsSync(pagePath)) {
  console.log(`   ✅ 游戏页面组件存在: ${pagePath}`);
  
  const pageContent = fs.readFileSync(pagePath, 'utf-8');
  
  // 检查 SEO 元素
  if (pageContent.includes('<h1>')) {
    console.log(`   ✅ H1 标签存在`);
  } else {
    console.log(`   ❌ H1 标签缺失`);
    allChecksPass = false;
  }
  
  if (pageContent.includes('<Helmet>')) {
    console.log(`   ✅ Helmet (SEO meta) 存在`);
  } else {
    console.log(`   ❌ Helmet (SEO meta) 缺失`);
    allChecksPass = false;
  }
  
  // 检查关键词密度（简单统计）
  const keywordCount = (pageContent.match(/Italian Brainrot Survive Parkour/gi) || []).length;
  const totalWords = pageContent.split(/\s+/).length;
  const density = ((keywordCount * 4) / totalWords * 100).toFixed(2); // 4 words per keyword phrase
  console.log(`   📊 关键词 "Italian Brainrot Survive Parkour" 出现 ${keywordCount} 次`);
  console.log(`   📊 关键词密度约: ${density}%`);
  
  if (parseFloat(density) >= 1.5) {
    console.log(`   ✅ 关键词密度符合要求 (>= 1.5%)`);
  } else {
    console.log(`   ⚠️  关键词密度偏低 (建议 >= 2%)`);
  }
  
} else {
  console.log(`   ❌ 游戏页面组件不存在: ${pagePath}`);
  allChecksPass = false;
}

// 4. 检查 GameDetailPage.tsx 注册
console.log('\n4️⃣ 检查 GameDetailPage.tsx 路由注册...');
const gameDetailPath = path.join(__dirname, '..', 'src', 'pages', 'GameDetailPage.tsx');
const gameDetailContent = fs.readFileSync(gameDetailPath, 'utf-8');

if (gameDetailContent.includes(`'${gameSlug}'`)) {
  console.log(`   ✅ 游戏已在 GameDetailPage.tsx 注册`);
  
  if (gameDetailContent.includes(`'${gameSlug}': lazy(() => import('./ItalianBrainrotSurviveParkourPage'))`)) {
    console.log(`   ✅ 路由配置正确`);
  } else {
    console.log(`   ⚠️  路由配置可能不正确`);
  }
} else {
  console.log(`   ❌ 游戏未在 GameDetailPage.tsx 注册`);
  allChecksPass = false;
}

// 5. 检查 Supabase 迁移文件
console.log('\n5️⃣ 检查 Supabase 迁移文件...');
const migrationPath = path.join(__dirname, '..', 'supabase', 'migrations', `20251104_add_italian_brainrot_survive_parkour.sql`);
if (fs.existsSync(migrationPath)) {
  console.log(`   ✅ 迁移文件存在: ${migrationPath}`);
  
  const migrationContent = fs.readFileSync(migrationPath, 'utf-8');
  
  // 检查必要的 SQL 语句
  const sqlChecks = [
    { pattern: 'INSERT INTO games', name: '游戏记录插入' },
    { pattern: 'INSERT INTO tags', name: '标签插入' },
    { pattern: 'INSERT INTO game_tags', name: '游戏标签关联' },
    { pattern: 'INSERT INTO game_comments', name: '评论插入' },
    { pattern: 'comment_text', name: 'comment_text 字段（正确）' },
    { pattern: 'ON CONFLICT', name: '冲突处理' }
  ];
  
  sqlChecks.forEach(check => {
    if (migrationContent.includes(check.pattern)) {
      console.log(`   ✅ ${check.name}`);
    } else {
      console.log(`   ❌ ${check.name} 缺失`);
      allChecksPass = false;
    }
  });
  
  // 检查是否使用了错误的字段名
  if (migrationContent.includes('content,') && !migrationContent.includes('comment_text')) {
    console.log(`   ❌ 错误：使用了 'content' 而不是 'comment_text'`);
    allChecksPass = false;
  }
  
} else {
  console.log(`   ❌ 迁移文件不存在: ${migrationPath}`);
  allChecksPass = false;
}

// 6. 检查 Sitemap 文件
console.log('\n6️⃣ 检查 Sitemap 文件更新...');
const sitemaps = [
  { file: 'sitemap-games.xml', shouldContain: `<loc>https://www.stealabrainrotunblocked.com/${gameSlug}</loc>` },
  { file: 'sitemap-images.xml', shouldContain: `<loc>https://www.stealabrainrotunblocked.com/${gameSlug}</loc>` },
  { file: 'sitemap.xml', shouldContain: '<lastmod>2025-11-04</lastmod>' },
  { file: 'sitemap-tags.xml', shouldContain: '<lastmod>2025-11-04</lastmod>' },
  { file: 'sitemap-index.xml', shouldContain: '<lastmod>2025-11-04</lastmod>' }
];

sitemaps.forEach(sitemap => {
  const sitemapPath = path.join(__dirname, '..', 'public', sitemap.file);
  if (fs.existsSync(sitemapPath)) {
    const content = fs.readFileSync(sitemapPath, 'utf-8');
    if (content.includes(sitemap.shouldContain)) {
      console.log(`   ✅ ${sitemap.file} 已更新`);
    } else {
      console.log(`   ❌ ${sitemap.file} 未更新或内容不正确`);
      allChecksPass = false;
    }
  } else {
    console.log(`   ❌ ${sitemap.file} 不存在`);
    allChecksPass = false;
  }
});

// 7. 检查 NEW 标志
console.log('\n7️⃣ 检查 NEW 标志...');
const today = new Date('2025-11-04');
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

// 9. 总结
console.log('\n' + '='.repeat(60));
if (allChecksPass) {
  console.log('✅ 所有检查通过！游戏已成功添加。');
  console.log('\n📋 后续步骤：');
  console.log('   1. 运行 Supabase 迁移（通过 API 或 Dashboard）');
  console.log('   2. 验证数据库中的游戏记录、标签和评论');
  console.log('   3. 本地测试游戏页面');
  console.log('   4. 部署到生产环境');
} else {
  console.log('❌ 部分检查未通过，请修复上述问题。');
  process.exit(1);
}
console.log('='.repeat(60));

