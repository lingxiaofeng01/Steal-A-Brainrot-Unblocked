import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

import { createClient } from '@supabase/supabase-js';

async function testSupabaseConnection() {
  console.log('🔍 Testing Supabase connection...\n');
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  console.log('📋 Configuration:');
  console.log(`   URL: ${supabaseUrl}`);
  console.log(`   Key: ${supabaseAnonKey?.substring(0, 20)}...`);
  
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('\n❌ Missing environment variables!');
    process.exit(1);
  }
  
  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    
    console.log('\n🔌 Testing connection...');
    
    // 测试 1: 查询 games 表
    console.log('\n1️⃣ Testing games table query...');
    const { data: games, error: gamesError } = await supabase
      .from('games')
      .select('slug, title')
      .limit(5);
    
    if (gamesError) {
      console.error('   ❌ Error:', gamesError.message);
    } else {
      console.log(`   ✅ Success! Found ${games?.length || 0} games`);
      if (games && games.length > 0) {
        console.log('   Sample:', games[0]);
      }
    }
    
    // 测试 2: 查询 tags 表
    console.log('\n2️⃣ Testing tags table query...');
    const { data: tags, error: tagsError } = await supabase
      .from('tags')
      .select('slug, name')
      .limit(5);
    
    if (tagsError) {
      console.error('   ❌ Error:', tagsError.message);
    } else {
      console.log(`   ✅ Success! Found ${tags?.length || 0} tags`);
    }
    
    // 测试 3: 查询 game_comments 表
    console.log('\n3️⃣ Testing game_comments table query...');
    const { data: comments, error: commentsError } = await supabase
      .from('game_comments')
      .select('game_slug, user_name, rating')
      .limit(5);
    
    if (commentsError) {
      console.error('   ❌ Error:', commentsError.message);
    } else {
      console.log(`   ✅ Success! Found ${comments?.length || 0} comments`);
    }
    
    // 测试 4: 检查 stickman-clash 是否存在
    console.log('\n4️⃣ Checking if stickman-clash exists...');
    const { data: stickmanClash, error: scError } = await supabase
      .from('games')
      .select('*')
      .eq('slug', 'stickman-clash')
      .single();
    
    if (scError) {
      if (scError.code === 'PGRST116') {
        console.log('   ℹ️  Stickman Clash not found in database (needs migration)');
      } else {
        console.error('   ❌ Error:', scError.message);
      }
    } else {
      console.log('   ✅ Stickman Clash found!');
      console.log('   Data:', stickmanClash);
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('✅ Supabase connection test completed!');
    
  } catch (err: any) {
    console.error('\n❌ Connection test failed:', err.message);
    process.exit(1);
  }
}

testSupabaseConnection();

