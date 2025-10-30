/**
 * 初始化 Steal Brainrots 评论脚本
 * 用于将一条预设评论同步到 Supabase
 * 
 * 使用方法：
 * npx ts-node scripts/initStealBrainrotsComment.ts
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials');
  console.error('Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

interface GameComment {
  game_slug: string;
  user_name: string;
  user_email: string;
  comment_text: string;
  rating: number;
  status: string;
  agreed_terms: boolean;
}

const stealBrainrotsComment: GameComment = {
  game_slug: 'steal-brainrots',
  user_name: 'MemeCollector',
  user_email: 'memecollector@example.com',
  comment_text: 'Steal Brainrots is absolutely amazing! The multiplayer heist gameplay is so addictive - I love raiding other players\' bases and stealing their rare memes. The rarity system from Common to Secret keeps me grinding for hours. The lockdown timer adds real strategy to defending your base. Best Roblox-style game I\'ve played! The passive income system is genius - my Mythic Brainrots generate tons of cash even when I\'m offline. Highly recommend for anyone who loves collection games and competitive PvP! 🎮💎🔥',
  rating: 5,
  status: 'approved',
  agreed_terms: true
};

async function initStealBrainrotsComment() {
  try {
    console.log('🚀 Starting Steal Brainrots comment initialization...\n');

    // 删除旧评论（如果存在）
    console.log('🗑️  Deleting old comments for steal-brainrots...');
    const { error: deleteError } = await supabase
      .from('game_comments')
      .delete()
      .eq('game_slug', 'steal-brainrots')
      .eq('user_name', 'MemeCollector');

    if (deleteError) {
      console.error('❌ Error deleting old comments:', deleteError);
    } else {
      console.log('✅ Old comments deleted\n');
    }

    // 插入新评论
    console.log('📝 Inserting new comment...');
    const { data, error } = await supabase
      .from('game_comments')
      .insert([stealBrainrotsComment])
      .select();

    if (error) {
      console.error('❌ Error inserting comment:', error);
      console.error('Error details:', error.message);
      process.exit(1);
    }

    console.log('✅ Comment inserted successfully!\n');
    console.log('📊 Inserted comment:');
    if (data && data.length > 0) {
      const comment = data[0];
      console.log(`  User: ${comment.user_name} (${comment.rating}⭐)`);
      console.log(`  Text: "${comment.comment_text.substring(0, 80)}..."`);
    }

    // 初始化游戏统计数据
    console.log('\n📊 Initializing game stats...');
    const { error: statsError } = await supabase
      .from('game_stats')
      .insert([
        {
          slug: 'steal-brainrots',
          play_count: 102,
          view_count: 0
        }
      ])
      .select();

    if (statsError) {
      // 如果已存在则更新
      if (statsError.code === '23505') {
        console.log('⚠️  Game stats already exist, skipping...');
      } else {
        console.error('❌ Error initializing game stats:', statsError);
      }
    } else {
      console.log('✅ Game stats initialized successfully!');
    }

    // 验证插入
    console.log('\n✅ Verifying inserted comment...');
    const { data: verifyData, error: verifyError } = await supabase
      .from('game_comments')
      .select('*')
      .eq('game_slug', 'steal-brainrots')
      .eq('status', 'approved');

    if (verifyError) {
      console.error('❌ Error verifying comment:', verifyError);
    } else {
      console.log(`✅ Verified: ${verifyData?.length || 0} approved comment(s) found\n`);
    }

    console.log('🎉 Steal Brainrots comment initialized successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Unexpected error:', err);
    process.exit(1);
  }
}

initStealBrainrotsComment();

