import { allGames } from '../src/data/games';

/**
 * 生成缺失游戏的 INSERT 语句
 */

const missingGameSlugs = [
  'undead-corridor',
  'blendrix',
  'steal-brainrots',
  'a-pretty-odd-bunny-roast-it',
  'zombotron-re-boot',
  'crazy-chicken-3d',
  'humans-playground',
  'tung-sahur-clicker',
  'fnaf-shooter',
  'top-speed-racing-3d',
  'crazy-animal-city'
];

console.log('-- 插入缺失的游戏记录到 games 表\n');

for (const slug of missingGameSlugs) {
  const game = allGames.find(g => g.slug === slug);
  
  if (!game) {
    console.log(`-- ⚠️  游戏未找到: ${slug}\n`);
    continue;
  }
  
  // 转义单引号
  const escapeQuote = (str: string) => str.replace(/'/g, "''");
  
  const title = escapeQuote(game.name);
  const subtitle = escapeQuote(game.subtitle || `Play ${game.name} Online`);
  const cover = escapeQuote(game.image);
  const playUrl = escapeQuote(game.url);
  const description = escapeQuote(game.description || `Play ${game.name} free online. ${game.subtitle || ''}`);
  const rating = game.rating || 4.5;
  const playCount = game.playCount || 0;
  const releaseDate = game.releaseDate || '2025-10-30';
  const isActive = true;
  const isFeatured = game.isFeatured || false;
  
  console.log(`-- ${game.name}`);
  console.log(`INSERT INTO games (slug, title, subtitle, cover, play_url, description, rating, play_count, released_at, is_active, is_featured)`);
  console.log(`VALUES ('${slug}', '${title}', '${subtitle}', '${cover}', '${playUrl}', '${description}', ${rating}, ${playCount}, '${releaseDate}', ${isActive}, ${isFeatured})`);
  console.log(`ON CONFLICT (slug) DO NOTHING;\n`);
}

console.log('\n-- 完成');

