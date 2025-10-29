const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function verifyHumansPlayground() {
  console.log('🔍 Verifying Humans Playground in database...\n');

  try {
    // 1. Check game stats
    console.log('1️⃣  Checking game stats...');
    const { data: statsData, error: statsError } = await supabase
      .from('game_stats')
      .select('*')
      .eq('slug', 'humans-playground')
      .single();

    if (statsError) {
      console.log('   ❌ Game stats not found:', statsError.message);
    } else {
      console.log('   ✅ Game stats found:');
      console.log(`      - Slug: ${statsData.slug}`);
      console.log(`      - Play count: ${statsData.play_count}`);
      console.log(`      - View count: ${statsData.view_count}`);
    }

    // 2. Check comments
    console.log('\n2️⃣  Checking comments...');
    const { data: commentsData, error: commentsError } = await supabase
      .from('game_comments')
      .select('*')
      .eq('game_slug', 'humans-playground');

    if (commentsError) {
      console.log('   ❌ Error fetching comments:', commentsError.message);
    } else {
      console.log(`   ✅ Found ${commentsData.length} comment(s):`);
      commentsData.forEach((comment, index) => {
        console.log(`      ${index + 1}. User: ${comment.user_name}`);
        console.log(`         Rating: ${comment.rating} ⭐`);
        console.log(`         Status: ${comment.status}`);
      });
    }

    // 3. Check tags
    console.log('\n3️⃣  Checking tags...');
    const { data: tagsData, error: tagsError } = await supabase
      .from('game_tags')
      .select('tag_slug')
      .eq('game_slug', 'humans-playground');

    if (tagsError) {
      console.log('   ❌ Error fetching tags:', tagsError.message);
    } else {
      console.log(`   ✅ Found ${tagsData.length} tag(s):`);
      tagsData.forEach((tag, index) => {
        console.log(`      ${index + 1}. ${tag.tag_slug}`);
      });
    }

    console.log('\n✅ Database verification completed!');

  } catch (error) {
    console.error('\n❌ Verification failed:', error);
    process.exit(1);
  }
}

verifyHumansPlayground();

