import * as fs from 'fs';
import * as path from 'path';

/**
 * 批量执行迁移 - 通过读取文件并输出 Supabase API 调用命令
 * 由于 API 限制，我们需要手动执行每个游戏的迁移
 */

const remainingGames = [
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

console.log('📝 Preparing migrations for execution...\n');
console.log('='.repeat(60));
console.log('\n由于 API 限制，建议使用以下方式之一：\n');
console.log('方式 1: 使用 Supabase Dashboard SQL Editor');
console.log('   - 打开: https://supabase.com/dashboard/project/tgoyqxcqpwevgztprqgk/sql/new');
console.log('   - 复制文件: supabase/REMAINING_MIGRATIONS.sql');
console.log('   - 粘贴并执行\n');
console.log('方式 2: 使用 Supabase CLI (如果已安装)');
console.log('   - 运行: supabase db push\n');
console.log('方式 3: 逐个执行（通过 AI 助手）');
console.log('   - 让 AI 助手使用 Supabase tool 逐个执行每个迁移文件\n');
console.log('='.repeat(60));

// 统计信息
let totalSize = 0;
for (const file of remainingGames) {
  const filePath = path.join(migrationsDir, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    totalSize += stats.size;
    console.log(`\n${file}: ${(stats.size / 1024).toFixed(2)} KB`);
  }
}

console.log('\n' + '='.repeat(60));
console.log(`\n总计: ${remainingGames.length} 个文件, ${(totalSize / 1024).toFixed(2)} KB`);
console.log('\n推荐: 使用 Dashboard SQL Editor 一次性执行所有迁移');

