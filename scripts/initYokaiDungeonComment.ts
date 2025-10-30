/**
 * 初始化 Yokai Dungeon 评论脚本
 * 用于将一条预设评论同步到 Supabase
 * 
 * 使用方法：
 * npx ts-node scripts/initYokaiDungeonComment.ts
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

const yokaiDungeonComment: GameComment = {
  game_slug: 'yokai-dungeon',
  user_name: 'YokaiHunter',
  user_email: 'yokaihunter@example.com',
  comment_text: 'Absolutely love this roguelike puzzle game! The Japanese yokai theme is so unique and the procedurally generated dungeons keep every run fresh. The block-pushing mechanics are simple but require real strategy. Completed my Yokaipedia after 50+ runs and still coming back for more! Perfect blend of puzzle-solving and action. Highly recommend for roguelike fans! 👹🏮',
  rating: 5,
  status: 'approved',
  agreed_terms: true
};

async function initYokaiDungeonComment() {
  try {
    console.log('🚀 Starting to initialize Yokai Dungeon comment...\n');

    // 先查询现有的评论
    console.log('🔍 Checking existing comments...');
    const { data: existingComments, error: queryError } = await supabase
      .from('game_comments')
      .select('*')
      .eq('game_slug', 'yokai-dungeon');

    if (queryError) {
      console.error('❌ Error querying existing comments:', queryError);
    } else {
      console.log(`✅ Found ${existingComments?.length || 0} existing comments\n`);
    }

    // 删除旧的评论（如果存在）
    console.log('🗑️  Deleting old Yokai Dungeon comments...');
    const { error: deleteError } = await supabase
      .from('game_comments')
      .delete()
      .eq('game_slug', 'yokai-dungeon')
      .eq('user_name', 'YokaiHunter');

    if (deleteError) {
      console.error('❌ Error deleting old comments:', deleteError);
    } else {
      console.log('✅ Old comments deleted\n');
    }

    // 插入新评论
    console.log('📝 Inserting new Yokai Dungeon comment...');
    const { data, error } = await supabase
      .from('game_comments')
      .insert([yokaiDungeonComment])
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
      console.log(`  ${comment.user_name} (${comment.rating}⭐)`);
      console.log(`  "${comment.comment_text.substring(0, 80)}..."`);
    }

    // 验证插入
    console.log('\n✅ Verifying inserted comment...');
    const { data: verifyData, error: verifyError } = await supabase
      .from('game_comments')
      .select('*')
      .eq('game_slug', 'yokai-dungeon')
      .eq('status', 'approved');

    if (verifyError) {
      console.error('❌ Error verifying comment:', verifyError);
    } else {
      console.log(`✅ Verified: ${verifyData?.length || 0} approved comment(s) found\n`);
    }

    console.log('🎉 Yokai Dungeon comment initialized successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Unexpected error:', err);
    process.exit(1);
  }
}

initYokaiDungeonComment();

