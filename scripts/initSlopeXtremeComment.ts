import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

interface SlopeXtremeComment {
  game_slug: string;
  user_name: string;
  user_email: string;
  comment_text: string;
  rating: number;
  status: string;
  agreed_terms: boolean;
}

const slopeXtremeComment: SlopeXtremeComment = {
  game_slug: 'slope-xtreme',
  user_name: 'NeonRacer',
  user_email: 'neonracer@example.com',
  comment_text: 'Slope Xtreme is absolutely mind-blowing! The neon graphics are stunning and the gameplay is incredibly addictive. I love how the speed gradually increases - it really tests your reflexes. The cyber rings add a great scoring element and the boost feature is awesome. The controls are super responsive and the physics feel perfect. This is hands down the best slope game I\'ve ever played! The futuristic theme sets it apart from other endless runners. Highly recommend for anyone who loves fast-paced arcade games! 🎮⚡',
  rating: 5,
  status: 'approved',
  agreed_terms: true
};

async function initSlopeXtremeComment() {
  try {
    console.log('🚀 Starting Slope Xtreme comment initialization...\n');

    // 删除旧评论（如果存在）
    console.log('🗑️  Deleting old comments for slope-xtreme...');
    const { error: deleteError } = await supabase
      .from('game_comments')
      .delete()
      .eq('game_slug', 'slope-xtreme');

    if (deleteError) {
      console.error('❌ Error deleting old comments:', deleteError);
    } else {
      console.log('✅ Old comments deleted\n');
    }

    // 插入新评论
    console.log('📝 Inserting new Slope Xtreme comment...');
    const { data, error } = await supabase
      .from('game_comments')
      .insert([slopeXtremeComment])
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
        slug: 'slope-xtreme',
        play_count: 0,
        view_count: 0
      }, {
        onConflict: 'slug'
      })
      .select();

    if (statsError) {
      console.error('❌ Error initializing game stats:', statsError);
    } else {
      console.log('✅ Game stats initialized successfully!');
    }

    console.log('\n✨ Slope Xtreme comment initialization completed!\n');
    console.log('📋 Summary:');
    console.log('  ✅ 1 comment added (NeonRacer, 5⭐)');
    console.log('  ✅ Game stats initialized (play_count: 0, view_count: 0)');
    console.log('\n🎮 You can now view the comment on the Slope Xtreme game page!');

  } catch (error) {
    console.error('❌ Unexpected error:', error);
    process.exit(1);
  }
}

// 运行初始化
initSlopeXtremeComment();

