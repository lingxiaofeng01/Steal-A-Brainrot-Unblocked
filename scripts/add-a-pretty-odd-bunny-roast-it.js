#!/usr/bin/env node
/**
 * A Pretty Odd Bunny: Roast It! - Supabase 数据同步脚本
 * 
 * 功能：
 * 1. 添加游戏评论到 Supabase
 * 2. 初始化游戏统计数据
 * 
 * 使用方法：
 * node scripts/add-a-pretty-odd-bunny-roast-it.js
 */

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials');
  console.error('Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log('🚀 Starting A Pretty Odd Bunny: Roast It! data sync...\n');

  try {
    // 1. 添加评论
    console.log('📝 Adding game comment...');
    const { data: commentData, error: commentError } = await supabase
      .from('game_comments')
      .insert({
        game_slug: 'a-pretty-odd-bunny-roast-it',
        user_name: 'PuzzleMaster',
        user_email: 'puzzlemaster@example.com',
        comment_text: 'A Pretty Odd Bunny: Roast It! is absolutely hilarious and addictive! The stealth puzzles are challenging but fair, and the two-player mode is perfect for competing with friends. I love collecting hot dogs while sneaking past supervisors - it never gets old! The mask customization system adds great replay value. The mini-games in two-player mode are super fun, especially the cookie pushing battles. Controls are responsive and the humor is on point. Highly recommend for puzzle and platform game fans! 🐰🌭🎮',
        rating: 5,
        status: 'approved',
        agreed_terms: true
      })
      .select();

    if (commentError) {
      console.error('❌ Error adding comment:', commentError);
      throw commentError;
    }

    console.log('✅ Comment added successfully!');
    console.log(`   User: ${commentData[0].user_name}`);
    console.log(`   Rating: ${commentData[0].rating} ⭐`);
    console.log(`   Status: ${commentData[0].status}\n`);

    // 2. 初始化游戏统计
    console.log('📊 Initializing game stats...');
    const { data: statsData, error: statsError } = await supabase
      .from('game_stats')
      .upsert({
        slug: 'a-pretty-odd-bunny-roast-it',
        play_count: 0,
        view_count: 0
      }, {
        onConflict: 'slug'
      })
      .select();

    if (statsError) {
      console.error('❌ Error initializing stats:', statsError);
      throw statsError;
    }

    console.log('✅ Game stats initialized!');
    console.log(`   Slug: ${statsData[0].slug}`);
    console.log(`   Play Count: ${statsData[0].play_count}`);
    console.log(`   View Count: ${statsData[0].view_count}\n`);

    // 3. 验证数据
    console.log('🔍 Verifying data...');
    
    const { data: comments, error: verifyCommentError } = await supabase
      .from('game_comments')
      .select('*')
      .eq('game_slug', 'a-pretty-odd-bunny-roast-it');

    if (verifyCommentError) {
      console.error('❌ Error verifying comments:', verifyCommentError);
    } else {
      console.log(`✅ Found ${comments.length} comment(s) for a-pretty-odd-bunny-roast-it`);
    }

    const { data: stats, error: verifyStatsError } = await supabase
      .from('game_stats')
      .select('*')
      .eq('slug', 'a-pretty-odd-bunny-roast-it');

    if (verifyStatsError) {
      console.error('❌ Error verifying stats:', verifyStatsError);
    } else {
      console.log(`✅ Game stats verified for a-pretty-odd-bunny-roast-it\n`);
    }

    console.log('🎉 All done! A Pretty Odd Bunny: Roast It! data synced successfully!');
    console.log('\n📋 Summary:');
    console.log('   ✅ 1 comment added (PuzzleMaster, 5⭐)');
    console.log('   ✅ Game stats initialized');
    console.log('   ✅ Data verified\n');

  } catch (error) {
    console.error('\n❌ Error during sync:', error);
    process.exit(1);
  }
}

main();

