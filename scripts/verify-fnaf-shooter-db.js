#!/usr/bin/env node
/**
 * Verify FNaF Shooter in Supabase
 * This script checks if FNaF Shooter data exists in the database
 *
 * Usage: node scripts/verify-fnaf-shooter-db.js
 */

const { createClient } = require('@supabase/supabase-js');
const path = require('path');
const fs = require('fs');

// Load environment variables from .env.local
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=:#]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^["']|["']$/g, '');
      process.env[key] = value;
    }
  });
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function verifyFnafShooter() {
  console.log('🔍 Verifying FNaF Shooter in Supabase...\n');

  let allChecks = true;

  try {
    // 1. Check game_stats
    console.log('1️⃣ Checking game_stats table...');
    const { data: statsData, error: statsError } = await supabase
      .from('game_stats')
      .select('*')
      .eq('slug', 'fnaf-shooter')
      .single();

    if (statsError) {
      console.log('   ❌ Game stats not found:', statsError.message);
      allChecks = false;
    } else {
      console.log('   ✅ Game stats found:');
      console.log('      - Slug:', statsData.slug);
      console.log('      - Play count:', statsData.play_count);
      console.log('      - View count:', statsData.view_count);
      console.log('      - Created at:', statsData.created_at);
    }

    // 2. Check game_comments
    console.log('\n2️⃣ Checking game_comments table...');
    const { data: commentsData, error: commentsError } = await supabase
      .from('game_comments')
      .select('*')
      .eq('game_slug', 'fnaf-shooter');

    if (commentsError) {
      console.log('   ❌ Comments not found:', commentsError.message);
      allChecks = false;
    } else if (commentsData.length === 0) {
      console.log('   ❌ No comments found');
      allChecks = false;
    } else {
      console.log(`   ✅ Found ${commentsData.length} comment(s):`);
      commentsData.forEach((comment, index) => {
        console.log(`      Comment ${index + 1}:`);
        console.log('      - User:', comment.user_name);
        console.log('      - Rating:', comment.rating, '⭐');
        console.log('      - Status:', comment.status);
        console.log('      - Text:', comment.comment_text.substring(0, 100) + '...');
      });
    }

    // 3. Check tags (if using simplified structure)
    console.log('\n3️⃣ Checking tags...');
    const { data: tagsData, error: tagsError } = await supabase
      .from('tags')
      .select('*')
      .in('slug', ['action', 'horror', 'shooting', 'fnaf', 'gun', 'fps', 'halloween']);

    if (tagsError) {
      console.log('   ⚠️  Tags check skipped:', tagsError.message);
    } else {
      console.log(`   ✅ Found ${tagsData.length} tag(s):`);
      tagsData.forEach(tag => {
        console.log(`      - ${tag.name} (${tag.slug})`);
      });
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    if (allChecks) {
      console.log('✅ All critical checks passed!');
      console.log('='.repeat(60));
      console.log('\n📊 Summary:');
      console.log('   - Game stats: ✅ Found');
      console.log('   - Comments: ✅ Found');
      console.log('\n🎮 FNaF Shooter is ready in the database!');
      console.log('\n🚀 Next Steps:');
      console.log('   1. Start dev server: npm run dev');
      console.log('   2. Visit: http://localhost:3000/fnaf-shooter');
      console.log('   3. Check that comments are displayed');
      console.log('   4. Test play count increment');
    } else {
      console.log('❌ Some checks failed!');
      console.log('='.repeat(60));
      console.log('\n⚠️  Please review the errors above.');
    }

  } catch (error) {
    console.error('\n❌ Verification failed:', error);
    process.exit(1);
  }
}

// Run verification
verifyFnafShooter();

