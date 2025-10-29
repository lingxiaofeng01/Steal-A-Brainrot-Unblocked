const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
      const value = valueParts.join('=').trim();
      process.env[key.trim()] = value;
    }
  });
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function verifyDatabase() {
  console.log('🔍 Verifying Tung Sahur Clicker in Supabase...\n');

  let allChecks = true;

  try {
    // 1. Check game stats
    console.log('📊 Checking game stats...');
    const { data: statsData, error: statsError } = await supabase
      .from('game_stats')
      .select('*')
      .eq('slug', 'tung-sahur-clicker')
      .single();

    if (statsError) {
      console.log('❌ Game stats not found:', statsError.message);
      allChecks = false;
    } else if (statsData) {
      console.log('✅ Game stats found:');
      console.log(`   - Slug: ${statsData.slug}`);
      console.log(`   - Play count: ${statsData.play_count}`);
      console.log(`   - View count: ${statsData.view_count}`);
      console.log(`   - Created: ${new Date(statsData.created_at).toLocaleString()}`);
    }

    // 2. Check comments
    console.log('\n💬 Checking comments...');
    const { data: commentsData, error: commentsError } = await supabase
      .from('game_comments')
      .select('*')
      .eq('game_slug', 'tung-sahur-clicker');

    if (commentsError) {
      console.log('❌ Error fetching comments:', commentsError.message);
      allChecks = false;
    } else if (commentsData && commentsData.length > 0) {
      console.log(`✅ Found ${commentsData.length} comment(s):`);
      commentsData.forEach((comment, index) => {
        console.log(`   ${index + 1}. User: ${comment.user_name}`);
        console.log(`      Rating: ${comment.rating} ⭐`);
        console.log(`      Status: ${comment.status}`);
        console.log(`      Created: ${new Date(comment.created_at).toLocaleString()}`);
      });
    } else {
      console.log('⚠️  No comments found');
    }

    // 3. Check tags (optional - may not exist yet)
    console.log('\n🏷️  Checking tags...');
    const expectedTags = ['clicker', 'casual', 'funny', 'idle', 'one-button', 'incremental', 'italian-brainrot'];
    const { data: tagsData, error: tagsError } = await supabase
      .from('tags')
      .select('*')
      .in('slug', expectedTags);

    if (tagsError) {
      console.log('⚠️  Error fetching tags:', tagsError.message);
    } else if (tagsData && tagsData.length > 0) {
      console.log(`✅ Found ${tagsData.length} tag(s):`);
      tagsData.forEach(tag => {
        console.log(`   - ${tag.name} (${tag.slug})`);
      });
    } else {
      console.log('⚠️  No tags found (this is OK - tags may need to be added manually)');
    }

    // Final summary
    console.log('\n' + '='.repeat(50));
    if (allChecks) {
      console.log('✅ All critical checks passed!');
      console.log('🎮 Tung Sahur Clicker is ready in the database!');
      console.log('\n🚀 Next Steps:');
      console.log('   1. Start dev server: npm run dev');
      console.log('   2. Visit: http://localhost:3000/tung-sahur-clicker');
      console.log('   3. Check that comments are displayed');
      console.log('   4. Test play count increment');
    } else {
      console.log('❌ Some checks failed. Please review the errors above.');
      process.exit(1);
    }

  } catch (error) {
    console.error('\n❌ Verification failed:', error.message);
    process.exit(1);
  }
}

// Run verification
verifyDatabase();

