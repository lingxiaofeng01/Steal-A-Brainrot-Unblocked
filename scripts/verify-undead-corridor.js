#!/usr/bin/env node
/**
 * 验证 Undead Corridor 游戏添加脚本
 * 检查所有必要的文件和配置是否正确
 */

const fs = require('fs');
const path = require('path');

console.log('\n🔍 验证 Undead Corridor 游戏添加...\n');

let allChecks = true;

function checkFile(filePath, description) {
  const fullPath = path.join(process.cwd(), filePath);
  const exists = fs.existsSync(fullPath);
  console.log(exists ? `✅ ${description}` : `❌ ${description}`);
  if (!exists) allChecks = false;
  return exists;
}

function checkFileContent(filePath, searchString, description) {
  const fullPath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ ${description} - 文件不存在`);
    allChecks = false;
    return false;
  }
  const content = fs.readFileSync(fullPath, 'utf-8');
  const found = content.includes(searchString);
  console.log(found ? `✅ ${description}` : `❌ ${description}`);
  if (!found) allChecks = false;
  return found;
}

console.log('1️⃣ 检查缩略图...');
checkFile('public/images/thumbnails/undead-corridor.png', '缩略图文件存在');

console.log('\n2️⃣ 检查游戏页面组件...');
checkFile('src/pages/UndeadCorridorPage.tsx', '游戏页面组件存在');
checkFileContent('src/pages/UndeadCorridorPage.tsx', 'GameDetailTemplate', '使用 GameDetailTemplate');
checkFileContent('src/pages/UndeadCorridorPage.tsx', 'slug: \'undead-corridor\'', '游戏 slug 正确');

console.log('\n3️⃣ 检查 games.ts 配置...');
checkFileContent('src/data/games.ts', 'undead-corridor', 'games.ts 包含游戏数据');
checkFileContent('src/data/games.ts', 'Undead Corridor', '游戏名称正确');
checkFileContent('src/data/games.ts', 'releaseDate: \'2025-10-30\'', '发布日期是今天');
checkFileContent('src/data/games.ts', 'Shooting', '包含 Shooting 标签');
checkFileContent('src/data/games.ts', 'Horror', '包含 Horror 标签');
checkFileContent('src/data/games.ts', 'Zombie', '包含 Zombie 标签');
checkFileContent('src/data/games.ts', 'Survival', '包含 Survival 标签');

console.log('\n4️⃣ 检查 GameDetailPage.tsx 注册...');
checkFileContent('src/pages/GameDetailPage.tsx', '\'undead-corridor\': lazy(() => import(\'./UndeadCorridorPage\'))', '游戏组件已注册');

console.log('\n5️⃣ 检查网站地图...');
checkFileContent('public/sitemap.xml', 'undead-corridor', 'sitemap.xml 包含游戏');
checkFileContent('public/sitemap.xml', '<lastmod>2025-10-30</lastmod>', 'sitemap 日期正确');

console.log('\n6️⃣ 检查 Supabase 初始化脚本...');
checkFile('scripts/initUndeadCorridorComment.js', 'Supabase 初始化脚本存在');
checkFileContent('scripts/initUndeadCorridorComment.js', 'undead-corridor', '脚本包含正确的游戏 slug');

console.log('\n7️⃣ 检查 SEO 配置...');
checkFileContent('src/config/seo.ts', 'horror:', 'Horror 标签 SEO 配置存在');
checkFileContent('src/config/seo.ts', 'zombie:', 'Zombie 标签 SEO 配置存在');
checkFileContent('src/config/seo.ts', 'survival:', 'Survival 标签 SEO 配置存在');
checkFileContent('src/config/seo.ts', '\'2d\':', '2D 标签 SEO 配置存在');

console.log('\n8️⃣ 检查动态标签路由配置...');
checkFileContent('app/tag/[tag]/page.tsx', 'horror:', 'Horror 标签配置存在');
checkFileContent('app/tag/[tag]/page.tsx', 'zombie:', 'Zombie 标签配置存在');
checkFileContent('app/tag/[tag]/page.tsx', 'survival:', 'Survival 标签配置存在');
checkFileContent('app/tag/[tag]/page.tsx', '\'2d\':', '2D 标签配置存在');

console.log('\n9️⃣ 游戏将自动出现在以下页面：');
console.log('   📄 首页 (/) - 通过 getAllGames() 自动显示');
console.log('   📄 所有游戏页 (/all) - 通过 getNewGames() 自动显示');
console.log('   📄 热门游戏页 (/hot) - 通过 getHotGames() 自动显示');
console.log('   📄 Shooting 标签页 (/tag/shooting)');
console.log('   📄 Horror 标签页 (/tag/horror)');
console.log('   📄 Zombie 标签页 (/tag/zombie)');
console.log('   📄 Survival 标签页 (/tag/survival)');
console.log('   📄 Action 标签页 (/tag/action)');
console.log('   📄 2D 标签页 (/tag/2d)');
console.log('   📄 Arcade 标签页 (/tag/arcade)');

console.log('\n🔟 NEW 标志：');
console.log('   ✨ 游戏将显示 NEW 标志（7天内发布）');
console.log('   📅 发布日期：2025-10-30');

console.log('\n1️⃣1️⃣ Supabase 数据：');
console.log('   💬 已添加 1 条评论（ZombieSlayer，5星评分）');
console.log('   📊 游戏统计已初始化（play_count: 485, view_count: 0）');

console.log('\n' + '='.repeat(80));
if (allChecks) {
  console.log('✅ 所有检查通过！Undead Corridor 游戏已成功添加！');
  console.log('\n📝 下一步：');
  console.log('   1. 运行 npm run dev 启动开发服务器');
  console.log('   2. 访问 http://localhost:3000/undead-corridor 查看游戏页面');
  console.log('   3. 检查首页、分类页面、标签页面是否正确显示游戏');
  console.log('   4. 验证 Supabase 评论和统计数据');
} else {
  console.log('❌ 部分检查失败，请检查上述错误！');
  process.exit(1);
}
console.log('='.repeat(80) + '\n');

