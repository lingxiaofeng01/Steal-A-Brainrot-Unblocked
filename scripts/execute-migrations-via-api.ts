import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 需要执行的迁移文件列表
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

async function executeMigrations() {
  console.log('🚀 Starting migration execution via Supabase API...\n');
  console.log('='.repeat(60));

  let successCount = 0;
  let errorCount = 0;
  const errors: Array<{ file: string; error: string }> = [];

  for (const fileName of migrationFiles) {
    const filePath = path.join(__dirname, '../supabase/migrations', fileName);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${fileName}`);
      errorCount++;
      continue;
    }

    console.log(`\n📄 Executing: ${fileName}`);
    
    try {
      const sqlContent = fs.readFileSync(filePath, 'utf-8');
      
      // 提取游戏 slug（用于检查是否已存在）
      const slugMatch = sqlContent.match(/slug,\s*\n\s*title[^)]*\)\s*VALUES\s*\(\s*'([^']+)'/);
      const gameSlug = slugMatch ? slugMatch[1] : null;
      
      if (gameSlug) {
        // 检查游戏是否已存在
        const { data: existingGame } = await supabase
          .from('games')
          .select('slug')
          .eq('slug', gameSlug)
          .single();
        
        if (existingGame) {
          console.log(`   ℹ️  Game '${gameSlug}' already exists, skipping...`);
          successCount++;
          continue;
        }
      }
      
      // 注意：Supabase anon key 无法直接执行 SQL
      // 我们需要使用 service_role key 或通过 Dashboard
      console.log(`   ⚠️  Cannot execute SQL via anon key`);
      console.log(`   💡 This migration needs to be executed via Dashboard SQL Editor`);
      
    } catch (err: any) {
      console.error(`   ❌ Error: ${err.message}`);
      errors.push({ file: fileName, error: err.message });
      errorCount++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`\n📊 Migration Summary:`);
  console.log(`   Success: ${successCount}`);
  console.log(`   Errors: ${errorCount}`);
  
  if (errors.length > 0) {
    console.log(`\n❌ Errors encountered:`);
    errors.forEach(({ file, error }) => {
      console.log(`   - ${file}: ${error}`);
    });
  }
  
  console.log('\n💡 Note: SQL migrations cannot be executed via anon key.');
  console.log('   Please use the batch migration file via Dashboard SQL Editor:');
  console.log('   File: supabase/BATCH_MIGRATION_EXECUTE_ALL.sql');
  console.log('   URL: https://supabase.com/dashboard/project/tgoyqxcqpwevgztprqgk/sql/new');
}

executeMigrations();

