const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function testConnection() {
  console.log('🔍 测试 Supabase 连接...\n');
  console.log('=' .repeat(60));

  try {
    // 测试连接并获取数据
    const { data, error } = await supabase
      .from('game_comments')
      .select('game_slug, status, rating, user_name, comment_text, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.log('❌ 连接失败:', error.message);
      return;
    }

    console.log('✅ Supabase 连接成功！\n');
    console.log('📊 数据库统计:');
    console.log('-'.repeat(60));

    const total = data.length;
    const approved = data.filter(c => c.status === 'approved').length;
    const pending = data.filter(c => c.status === 'pending').length;
    const withRating = data.filter(c => c.rating != null).length;
    const games = [...new Set(data.map(c => c.game_slug))];

    console.log(`总评论数: ${total}`);
    console.log(`已审核: ${approved}`);
    console.log(`待审核: ${pending}`);
    console.log(`有评分: ${withRating}`);
    console.log(`涉及游戏数: ${games.length}`);

    if (withRating > 0) {
      const avgRating = data
        .filter(c => c.rating != null)
        .reduce((sum, c) => sum + c.rating, 0) / withRating;
      console.log(`平均评分: ${avgRating.toFixed(2)}⭐`);
    }

    console.log('\n🎮 游戏列表:');
    console.log('-'.repeat(60));
    games.forEach(game => {
      const gameComments = data.filter(c => c.game_slug === game);
      console.log(`  • ${game} (${gameComments.length} 条评论)`);
    });

    console.log('\n💬 最新 3 条评论:');
    console.log('-'.repeat(60));
    data.slice(0, 3).forEach((comment, i) => {
      console.log(`\n${i + 1}. ${comment.user_name} (${comment.rating || 'N/A'}⭐) - ${comment.status}`);
      console.log(`   游戏: ${comment.game_slug}`);
      console.log(`   时间: ${new Date(comment.created_at).toLocaleString('zh-CN')}`);
      console.log(`   内容: ${comment.comment_text.substring(0, 60)}...`);
    });

    console.log('\n' + '='.repeat(60));
    console.log('✅ 测试完成！');

  } catch (err) {
    console.error('❌ 发生错误:', err.message);
  }
}

testConnection();
