import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

import { createClient } from '@supabase/supabase-js';
import { allGames, isRealGame } from '../src/data/games';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkMissingComments() {
  console.log('🔍 Checking for games missing comments...\n');
  console.log('='.repeat(60));

  try {
    // 获取所有游戏
    const { data: dbGames, error: gamesError } = await supabase
      .from('games')
      .select('slug, title');

    if (gamesError) {
      console.error('❌ Error fetching games:', gamesError);
      return;
    }

    console.log(`\n📊 Found ${dbGames?.length || 0} games in database`);

    // 获取所有评论
    const { data: comments, error: commentsError } = await supabase
      .from('game_comments')
      .select('game_slug');

    if (commentsError) {
      console.error('❌ Error fetching comments:', commentsError);
      return;
    }

    const gamesWithComments = new Set(comments?.map(c => c.game_slug) || []);
    console.log(`💬 Found ${gamesWithComments.size} games with comments\n`);

    // 检查缺少评论的游戏
    const missingComments: string[] = [];
    
    if (dbGames) {
      for (const game of dbGames) {
        if (!gamesWithComments.has(game.slug)) {
          missingComments.push(game.slug);
        }
      }
    }

    console.log('='.repeat(60));
    
    if (missingComments.length === 0) {
      console.log('✅ All games in database have comments!');
    } else {
      console.log(`⚠️  Found ${missingComments.length} games without comments:\n`);
      missingComments.forEach((slug, index) => {
        const gameInfo = dbGames?.find(g => g.slug === slug);
        console.log(`   ${index + 1}. ${slug} - ${gameInfo?.title || 'Unknown'}`);
      });
    }

    // 检查 games.ts 中的游戏是否在数据库中
    console.log('\n' + '='.repeat(60));
    console.log('🔍 Checking games.ts vs database...\n');

    const dbGameSlugs = new Set(dbGames?.map(g => g.slug) || []);
    const missingInDb: string[] = [];

    const realGames = allGames.filter(isRealGame);

    for (const game of realGames) {
      if (!dbGameSlugs.has(game.slug)) {
        missingInDb.push(game.slug);
      }
    }

    if (missingInDb.length === 0) {
      console.log('✅ All games from games.ts are in database!');
    } else {
      console.log(`⚠️  Found ${missingInDb.length} games in games.ts but NOT in database:\n`);
      missingInDb.forEach((slug, index) => {
        const gameInfo = realGames.find(g => g.slug === slug);
        console.log(`   ${index + 1}. ${slug} - ${gameInfo?.name || 'Unknown'}`);
      });
      
      console.log('\n💡 These games need migration files to be executed!');
    }

    console.log('\n' + '='.repeat(60));

  } catch (err: any) {
    console.error('❌ Error:', err.message);
  }
}

checkMissingComments();

