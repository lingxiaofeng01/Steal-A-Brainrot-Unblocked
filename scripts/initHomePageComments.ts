/**
 * 初始化首页评论脚本
 * 用于将三条预设评论同步到 Supabase
 * 
 * 使用方法：
 * npx ts-node scripts/initHomePageComments.ts
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

interface HomePageComment {
  game_slug: string;
  user_name: string;
  user_email: string;
  comment_text: string;
  rating: number;
  status: string;
  agreed_terms: boolean;
}

const homePageComments: HomePageComment[] = [
  {
    game_slug: 'steal-a-brainrot-unblocked',
    user_name: 'Player123',
    user_email: 'player123@example.com',
    comment_text: 'This game is so addictive! Love collecting all the Brainrots! The unblocked version works perfectly at school and work!',
    rating: 5,
    status: 'approved',
    agreed_terms: true
  },
  {
    game_slug: 'steal-a-brainrot-unblocked',
    user_name: 'GamerPro',
    user_email: 'gamerpro@example.com',
    comment_text: 'Great free online game! No downloads required, instant play. Works perfectly at school! Best unblocked game I\'ve found!',
    rating: 4,
    status: 'approved',
    agreed_terms: true
  },
  {
    game_slug: 'steal-a-brainrot-unblocked',
    user_name: 'BrainrotFan',
    user_email: 'brainrotfan@example.com',
    comment_text: 'The stealing mechanic is so fun! Best idle game ever! Free to play, no downloads, instant play - exactly what I needed!',
    rating: 5,
    status: 'approved',
    agreed_terms: true
  }
];

async function initHomePageComments() {
  try {
    console.log('🚀 Starting to initialize home page comments...\n');

    // 先查询现有的评论
    console.log('🔍 Checking existing comments...');
    const { data: existingComments, error: queryError } = await supabase
      .from('game_comments')
      .select('*')
      .eq('game_slug', 'steal-a-brainrot-unblocked');

    if (queryError) {
      console.error('❌ Error querying existing comments:', queryError);
    } else {
      console.log(`✅ Found ${existingComments?.length || 0} existing comments\n`);
    }

    // 删除旧的首页评论
    console.log('🗑️  Deleting old home page comments...');
    const { error: deleteError } = await supabase
      .from('game_comments')
      .delete()
      .eq('game_slug', 'steal-a-brainrot-unblocked')
      .in('user_name', ['Player123', 'GamerPro', 'BrainrotFan']);

    if (deleteError) {
      console.error('❌ Error deleting old comments:', deleteError);
    } else {
      console.log('✅ Old comments deleted\n');
    }

    // 插入新评论
    console.log('📝 Inserting new home page comments...');
    const { data, error } = await supabase
      .from('game_comments')
      .insert(homePageComments)
      .select();

    if (error) {
      console.error('❌ Error inserting comments:', error);
      console.error('Error details:', error.message);
      process.exit(1);
    }

    console.log('✅ Comments inserted successfully!\n');
    console.log('📊 Inserted comments:');
    data?.forEach((comment, index) => {
      console.log(`  ${index + 1}. ${comment.user_name} (${comment.rating}⭐)`);
      console.log(`     "${comment.comment_text.substring(0, 50)}..."`);
    });

    // 验证插入
    console.log('\n✅ Verifying inserted comments...');
    const { data: verifyData, error: verifyError } = await supabase
      .from('game_comments')
      .select('*')
      .eq('game_slug', 'steal-a-brainrot-unblocked')
      .eq('status', 'approved');

    if (verifyError) {
      console.error('❌ Error verifying comments:', verifyError);
    } else {
      console.log(`✅ Verified: ${verifyData?.length || 0} approved comments found\n`);
    }

    console.log('🎉 Home page comments initialized successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Unexpected error:', err);
    process.exit(1);
  }
}

initHomePageComments();

