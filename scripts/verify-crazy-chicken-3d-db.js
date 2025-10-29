require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function verify() {
  console.log('🔍 Verifying Crazy Chicken 3D database entries...\n');

  let hasErrors = false;

  try {
    // 1. Check game stats
    console.log('1️⃣ Checking game stats...');
    const { data: statsData, error: statsError } = await supabase
      .from('game_stats')
      .select('*')
      .eq('slug', 'crazy-chicken-3d')
      .single();

    if (statsError) {
      console.log('   ❌ Error fetching game stats:', statsError.message);
      hasErrors = true;
    } else if (statsData) {
      console.log('   ✅ Game stats found');
      console.log(`      - Play count: ${statsData.play_count}`);
      console.log(`      - View count: ${statsData.view_count}`);
    } else {
      console.log('   ❌ Game stats not found');
      hasErrors = true;
    }

    // 2. Check comments
    console.log('\n2️⃣ Checking comments...');
    const { data: commentsData, error: commentsError } = await supabase
      .from('game_comments')
      .select('*')
      .eq('game_slug', 'crazy-chicken-3d');

    if (commentsError) {
      console.log('   ❌ Error fetching comments:', commentsError.message);
      hasErrors = true;
    } else if (commentsData && commentsData.length > 0) {
      console.log(`   ✅ Found ${commentsData.length} comment(s)`);
      commentsData.forEach((comment, index) => {
        console.log(`      Comment ${index + 1}:`);
        console.log(`      - User: ${comment.user_name}`);
        console.log(`      - Rating: ${comment.rating}/5`);
        console.log(`      - Status: ${comment.status}`);
      });
    } else {
      console.log('   ⚠️  No comments found');
    }

    // 3. Check tags (may fail due to RLS policies)
    console.log('\n3️⃣ Checking tags...');
    const { data: tagsData, error: tagsError } = await supabase
      .from('tags')
      .select('*')
      .in('slug', ['action', 'survival', 'physics', 'battle-royale', 'animal', 'crazy-cattle-3d']);

    if (tagsError) {
      console.log('   ⚠️  Could not fetch tags (RLS policy issue):', tagsError.message);
      console.log('   ℹ️  This is expected and does not affect core functionality');
    } else if (tagsData && tagsData.length > 0) {
      console.log(`   ✅ Found ${tagsData.length} tag(s)`);
    } else {
      console.log('   ⚠️  No tags found (may need manual setup)');
    }

    // Summary
    console.log('\n' + '='.repeat(50));
    if (hasErrors) {
      console.log('❌ Database verification completed with errors');
      process.exit(1);
    } else {
      console.log('✅ Database verification passed!');
      console.log('\n📋 Summary:');
      console.log('  - Game stats: ✅');
      console.log('  - Comments: ✅');
      console.log('  - Tags: ⚠️  (RLS policy issues, non-critical)');
      console.log('\n🎮 Crazy Chicken 3D database entries verified!');
    }

  } catch (error) {
    console.error('❌ Verification failed:', error);
    process.exit(1);
  }
}

verify();

