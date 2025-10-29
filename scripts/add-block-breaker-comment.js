/**
 * 添加 Block Breaker 游戏评论到 Supabase
 * 
 * 使用方法：
 * node scripts/add-block-breaker-comment.js
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 读取 .env.local 文件
const envPath = join(__dirname, '../.env.local');
let supabaseUrl, supabaseKey;

try {
  const envContent = readFileSync(envPath, 'utf-8');
  const lines = envContent.split('\n');

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) {
      supabaseUrl = trimmed.split('=')[1].trim();
    } else if (trimmed.startsWith('SUPABASE_SERVICE_ROLE_KEY=')) {
      supabaseKey = trimmed.split('=')[1].trim();
    } else if (!supabaseKey && trimmed.startsWith('NEXT_PUBLIC_SUPABASE_ANON_KEY=')) {
      supabaseKey = trimmed.split('=')[1].trim();
    }
  }
} catch (err) {
  console.error('❌ Error reading .env.local:', err.message);
}

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials');
  console.error('Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function addBlockBreakerComment() {
  try {
    console.log('🚀 Adding Block Breaker comment to Supabase...\n');

    // 1. 添加评论
    console.log('📝 Inserting comment...');
    const { data: commentData, error: commentError } = await supabase
      .from('game_comments')
      .insert({
        game_slug: 'block-breaker',
        user_name: 'BrickBuster',
        user_email: 'brickbuster@example.com',
        comment_text: 'Block Breaker is absolutely addictive! The 150 levels keep me engaged for hours. I love how the difficulty gradually increases - it starts easy but gets really challenging. The power-ups like multi-ball and extended paddle are game-changers. The controls are super responsive and the physics feel just right. Perfect for quick gaming sessions or longer play. Highly recommend! 🎯🔥',
        rating: 5,
        status: 'approved',
        agreed_terms: true
      })
      .select();

    if (commentError) {
      console.error('❌ Error inserting comment:', commentError);
    } else {
      console.log('✅ Comment inserted successfully!');
      console.log('   User:', commentData[0].user_name);
      console.log('   Rating:', commentData[0].rating, '⭐');
    }

    // 2. 初始化游戏统计
    console.log('\n📊 Initializing game stats...');
    const { data: statsData, error: statsError } = await supabase
      .from('game_stats')
      .upsert({
        slug: 'block-breaker',
        play_count: 0,
        view_count: 0
      }, {
        onConflict: 'slug'
      })
      .select();

    if (statsError) {
      console.error('❌ Error initializing stats:', statsError);
    } else {
      console.log('✅ Game stats initialized!');
    }

    // 3. 验证数据
    console.log('\n🔍 Verifying data...');
    
    const { data: comments, error: verifyError } = await supabase
      .from('game_comments')
      .select('*')
      .eq('game_slug', 'block-breaker')
      .eq('status', 'approved');

    if (verifyError) {
      console.error('❌ Error verifying:', verifyError);
    } else {
      console.log(`✅ Found ${comments.length} approved comment(s) for block-breaker`);
      comments.forEach((comment, index) => {
        console.log(`   ${index + 1}. ${comment.user_name} (${comment.rating}⭐)`);
        console.log(`      "${comment.comment_text.substring(0, 60)}..."`);
      });
    }

    console.log('\n✅ All done! Block Breaker comment added successfully!');
    console.log('\n📌 Next steps:');
    console.log('   1. Visit http://localhost:3001/block-breaker');
    console.log('   2. Check that the comment appears');
    console.log('   3. Verify the game description is correct');

  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
}

addBlockBreakerComment();

