import * as fs from 'fs';
import * as path from 'path';

/**
 * 生成剩余迁移的执行脚本
 * 由于已经执行了 Stickman Clash，这里生成剩余 18 个游戏的迁移
 */

const remainingGames = [
  { file: '20251031_add_planet_buster.sql', slug: 'planet-buster' },
  { file: '20251031_add_stickman_empires.sql', slug: 'stickman-empires' },
  { file: '20251031_add_soflo_wheelie_life.sql', slug: 'soflo-wheelie-life' },
  { file: '20251030_add_rocket_fortress.sql', slug: 'rocket-fortress' },
  { file: '20251030_add_undead_corridor.sql', slug: 'undead-corridor' },
  { file: '20251030_add_blendrix.sql', slug: 'blendrix' },
  { file: '20251030_add_steal_brainrots.sql', slug: 'steal-brainrots' },
  { file: '20251030_add_a_pretty_odd_bunny_roast_it.sql', slug: 'a-pretty-odd-bunny-roast-it' },
  { file: '20251030_add_zombotron_re_boot.sql', slug: 'zombotron-re-boot' },
  { file: '20251029_add_crazy_chicken_3d.sql', slug: 'crazy-chicken-3d' },
  { file: '20251029_add_humans_playground.sql', slug: 'humans-playground' },
  { file: '20251029_add_tung_sahur_clicker.sql', slug: 'tung-sahur-clicker' },
  { file: '20251029_add_fnaf_shooter.sql', slug: 'fnaf-shooter' },
  { file: '20251029_add_cheese_chompers_3d.sql', slug: 'cheese-chompers-3d' },
  { file: '20251027_add_dude_theft_auto.sql', slug: 'dude-theft-auto' },
  { file: '20251025000004_add_top_speed_racing_3d.sql', slug: 'top-speed-racing-3d' },
  { file: '20251025000003_add_crazy_animal_city.sql', slug: 'crazy-animal-city' },
  { file: '20251025000002_add_spacebar_clicker_3.sql', slug: 'spacebar-clicker-3' },
];

const migrationsDir = path.join(__dirname, '../supabase/migrations');
const outputFile = path.join(__dirname, '../supabase/REMAINING_MIGRATIONS.sql');

console.log('📝 Generating remaining migrations SQL...\n');
console.log('='.repeat(60));

let sql = `/*
  # 剩余游戏迁移（已排除 Stickman Clash）
  
  生成时间: ${new Date().toISOString()}
  包含 ${remainingGames.length} 个游戏迁移
  
  执行方式：
  1. 打开 Supabase Dashboard SQL Editor
  2. 复制此文件全部内容
  3. 粘贴并执行
*/

-- ============================================================
-- 开始批量迁移
-- ============================================================

`;

for (const { file, slug } of remainingGames) {
  const filePath = path.join(migrationsDir, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${file}`);
    continue;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  sql += `\n-- ============================================================\n`;
  sql += `-- Migration: ${file} (${slug})\n`;
  sql += `-- ============================================================\n\n`;
  sql += content;
  sql += `\n\n`;
  
  console.log(`✅ Added: ${file}`);
}

// 添加缺失评论
sql += `\n-- ============================================================\n`;
sql += `-- 为缺少评论的游戏添加评论\n`;
sql += `-- ============================================================\n\n`;

sql += `-- Blocky Rush 评论\n`;
sql += `INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms,
  created_at
)
VALUES (
  'blocky-rush',
  'SpeedRunner',
  'speedrunner@example.com',
  'Blocky Rush is an incredibly addictive endless runner! The blocky graphics are charming and the gameplay is super smooth. I love how the difficulty ramps up gradually - it keeps you on your toes without being frustrating. The controls are responsive and the obstacles are well-designed. Perfect game for quick sessions or long runs trying to beat your high score. Highly recommend for fans of endless runners!',
  5,
  'approved',
  true,
  NOW()
)
ON CONFLICT DO NOTHING;

-- Crazy Cattle 3D 评论
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms,
  created_at
)
VALUES (
  'crazy-cattle-3d-unblocked',
  'CattleHerder',
  'cattleherder@example.com',
  'Crazy Cattle 3D is hilarious and so much fun! The 3D graphics are great and the cattle physics are absolutely wild. Trying to herd these crazy cows is challenging but rewarding. The game has a great sense of humor and the levels are well-designed. Controls take a bit to get used to but once you master them, it is a blast. Perfect free online game for anyone who wants something unique and entertaining!',
  5,
  'approved',
  true,
  NOW()
)
ON CONFLICT DO NOTHING;

`;

sql += `\n-- ============================================================\n`;
sql += `-- 批量迁移完成\n`;
sql += `-- ============================================================\n`;

fs.writeFileSync(outputFile, sql, 'utf-8');

console.log('='.repeat(60));
console.log(`\n✅ Remaining migrations SQL generated!`);
console.log(`   Output: ${outputFile}`);
console.log(`\n📋 Next: Execute via Supabase Dashboard SQL Editor`);
console.log(`   URL: https://supabase.com/dashboard/project/tgoyqxcqpwevgztprqgk/sql/new`);

