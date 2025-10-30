/**
 * 初始化 Undead Corridor 游戏评论脚本
 * 用于将评论和游戏统计数据同步到 Supabase
 * 
 * 使用方法：
 * npx ts-node scripts/initUndeadCorridorComment.ts
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

// Undead Corridor 游戏评论
const undeadCorridorComment = {
  game_slug: 'undead-corridor',
  user_name: 'ZombieSlayer',
  user_email: 'zombieslayer@example.com',
  comment_text: 'Undead Corridor is an intense zombie survival shooter! The multiple game modes (Office, Hospital, Rooms, Street) keep things fresh and challenging. I love the weapon upgrade system - earning currency to buy better guns feels rewarding. The ragdoll physics and gore effects are satisfyingly brutal. Managing ammo and timing your shots is crucial. The kick mechanic is a lifesaver when zombies get too close! Highly addictive and perfect for quick gaming sessions. 🧟‍♂️🔫',
  rating: 5,
  status: 'approved',
  agreed_terms: true
};

async function initUndeadCorridorComment() {
  try {
    console.log('🚀 Starting Undead Corridor comment initialization...\n');

    // 删除旧评论（如果存在）
    console.log('🗑️  Deleting old comments for undead-corridor...');
    const { error: deleteError } = await supabase
      .from('game_comments')
      .delete()
      .eq('game_slug', 'undead-corridor')
      .eq('user_name', 'ZombieSlayer');

    if (deleteError) {
      console.error('❌ Error deleting old comments:', deleteError);
    } else {
      console.log('✅ Old comments deleted\n');
    }

    // 插入新评论
    console.log('📝 Inserting new comment...');
    const { data, error } = await supabase
      .from('game_comments')
      .insert([undeadCorridorComment])
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
      .upsert({
        slug: 'undead-corridor',
        play_count: 485,
        view_count: 0
      }, {
        onConflict: 'slug'
      })
      .select();

    if (statsError) {
      console.error('❌ Error initializing stats:', statsError);
    } else {
      console.log('✅ Game stats initialized!');
      console.log('   Play count: 485');
      console.log('   View count: 0');
    }

    // 验证数据
    console.log('\n🔍 Verifying data...');
    const { data: comments, error: verifyError } = await supabase
      .from('game_comments')
      .select('*')
      .eq('game_slug', 'undead-corridor')
      .eq('status', 'approved');

    if (verifyError) {
      console.error('❌ Error verifying comments:', verifyError);
    } else {
      console.log(`✅ Found ${comments?.length || 0} approved comment(s) for undead-corridor`);
    }

    const { data: stats, error: statsVerifyError } = await supabase
      .from('game_stats')
      .select('*')
      .eq('slug', 'undead-corridor')
      .single();

    if (statsVerifyError) {
      console.error('❌ Error verifying stats:', statsVerifyError);
    } else {
      console.log('✅ Game stats verified:');
      console.log(`   Play count: ${stats?.play_count || 0}`);
      console.log(`   View count: ${stats?.view_count || 0}`);
    }

    console.log('\n✨ Initialization complete!\n');
  } catch (error) {
    console.error('❌ Unexpected error:', error);
    process.exit(1);
  }
}

// 运行初始化
initUndeadCorridorComment();

