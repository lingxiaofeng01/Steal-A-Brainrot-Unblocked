import * as fs from 'fs';
import * as path from 'path';

/**
 * 生成批量迁移 SQL 脚本
 * 合并所有需要执行的迁移文件
 */

const migrationFiles = [
  '20251104_add_stickman_clash.sql',
  '20251031_add_planet_buster.sql',
  '20251031_add_stickman_empires.sql',
  '20251031_add_soflo_wheelie_life.sql',
  '20251030_add_rocket_fortress.sql',
  '20251030_add_undead_corridor.sql',
  '20251030_add_blendrix.sql',
  '20251030_add_steal_brainrots.sql',
  '20251030_add_a_pretty_odd_bunny_roast_it.sql',
  '20251030_add_zombotron_re_boot.sql',
  '20251029_add_crazy_chicken_3d.sql',
  '20251029_add_humans_playground.sql',
  '20251029_add_tung_sahur_clicker.sql',
  '20251029_add_fnaf_shooter.sql',
  '20251029_add_cheese_chompers_3d.sql',
  '20251027_add_dude_theft_auto.sql',
  '20251025000004_add_top_speed_racing_3d.sql',
  '20251025000003_add_crazy_animal_city.sql',
  '20251025000002_add_spacebar_clicker_3.sql',
];

const migrationsDir = path.join(__dirname, '../supabase/migrations');
const outputFile = path.join(__dirname, '../supabase/BATCH_MIGRATION_EXECUTE_ALL.sql');

console.log('📝 Generating batch migration SQL script...\n');

let batchSql = `/*
  # 批量执行所有缺失的游戏迁移
  
  生成时间: ${new Date().toISOString()}
  包含 ${migrationFiles.length} 个迁移文件
  
  ⚠️  警告：此脚本会执行大量 SQL 语句
  建议在执行前备份数据库
  
  执行方式：
  1. 打开 Supabase Dashboard SQL Editor
  2. 复制此文件全部内容
  3. 粘贴并执行
*/

-- ============================================================
-- 开始批量迁移
-- ============================================================

`;

let successCount = 0;
let errorCount = 0;

for (const fileName of migrationFiles) {
  const filePath = path.join(migrationsDir, fileName);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${fileName}`);
    errorCount++;
    continue;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  batchSql += `\n-- ============================================================\n`;
  batchSql += `-- Migration: ${fileName}\n`;
  batchSql += `-- ============================================================\n\n`;
  batchSql += content;
  batchSql += `\n\n`;
  
  successCount++;
  console.log(`✅ Added: ${fileName}`);
}

// 添加缺失评论的游戏
batchSql += `\n-- ============================================================\n`;
batchSql += `-- 为缺少评论的游戏添加评论\n`;
batchSql += `-- ============================================================\n\n`;

batchSql += `-- Blocky Rush 评论\n`;
batchSql += `INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  content,
  rating,
  status,
  agreed_terms,
  created_at,
  updated_at
)
VALUES (
  'blocky-rush',
  'SpeedRunner',
  'speedrunner@example.com',
  'Blocky Rush is an incredibly addictive endless runner! The blocky graphics are charming and the gameplay is super smooth. I love how the difficulty ramps up gradually - it keeps you on your toes without being frustrating. The controls are responsive and the obstacles are well-designed. Perfect game for quick sessions or long runs trying to beat your high score. Highly recommend for fans of endless runners!',
  5,
  'approved',
  true,
  NOW(),
  NOW()
)
ON CONFLICT DO NOTHING;

-- Crazy Cattle 3D 评论
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  content,
  rating,
  status,
  agreed_terms,
  created_at,
  updated_at
)
VALUES (
  'crazy-cattle-3d-unblocked',
  'CattleHerder',
  'cattleherder@example.com',
  'Crazy Cattle 3D is hilarious and so much fun! The 3D graphics are great and the cattle physics are absolutely wild. Trying to herd these crazy cows is challenging but rewarding. The game has a great sense of humor and the levels are well-designed. Controls take a bit to get used to but once you master them, it''s a blast. Perfect free online game for anyone who wants something unique and entertaining!',
  5,
  'approved',
  true,
  NOW(),
  NOW()
)
ON CONFLICT DO NOTHING;

`;

batchSql += `\n-- ============================================================\n`;
batchSql += `-- 批量迁移完成\n`;
batchSql += `-- ============================================================\n`;

// 写入文件
fs.writeFileSync(outputFile, batchSql, 'utf-8');

console.log('\n' + '='.repeat(60));
console.log(`✅ Batch migration script generated!`);
console.log(`   Success: ${successCount} files`);
console.log(`   Errors: ${errorCount} files`);
console.log(`   Output: ${outputFile}`);
console.log('='.repeat(60));
console.log('\n📋 Next steps:');
console.log('   1. Open Supabase SQL Editor:');
console.log('      https://supabase.com/dashboard/project/tgoyqxcqpwevgztprqgk/sql/new');
console.log('   2. Copy content from: supabase/BATCH_MIGRATION_EXECUTE_ALL.sql');
console.log('   3. Paste and execute in SQL Editor');
console.log('   4. Verify all games and comments are added');

