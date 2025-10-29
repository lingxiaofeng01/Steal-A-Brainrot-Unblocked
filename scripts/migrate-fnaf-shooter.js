#!/usr/bin/env node
/**
 * Migrate FNaF Shooter to Supabase
 * This script runs the migration to add FNaF Shooter game data
 *
 * Usage: node scripts/migrate-fnaf-shooter.js
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
  console.log('✅ Loaded environment variables from .env.local\n');
} else {
  console.log('⚠️  .env.local not found, using system environment variables\n');
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials');
  console.error('Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrateFnafShooter() {
  console.log('🎮 Migrating FNaF Shooter to Supabase...\n');

  try {
    // 1. Add game statistics
    console.log('1️⃣ Adding game statistics...');
    const { data: statsData, error: statsError } = await supabase
      .from('game_stats')
      .upsert({
        slug: 'fnaf-shooter',
        play_count: 0,
        view_count: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'slug'
      });

    if (statsError) {
      console.error('   ❌ Error adding game stats:', statsError.message);
    } else {
      console.log('   ✅ Game statistics added');
    }

    // 2. Add tags
    console.log('\n2️⃣ Adding tags...');
    const tags = [
      { name: 'Action', slug: 'action' },
      { name: 'Horror', slug: 'horror' },
      { name: 'Shooting', slug: 'shooting' },
      { name: 'FNAF', slug: 'fnaf' },
      { name: 'Gun', slug: 'gun' },
      { name: 'FPS', slug: 'fps' },
      { name: 'Halloween', slug: 'halloween' }
    ];

    for (const tag of tags) {
      const { error: tagError } = await supabase
        .from('tags')
        .upsert({
          name: tag.name,
          slug: tag.slug,
          created_at: new Date().toISOString()
        }, {
          onConflict: 'slug',
          ignoreDuplicates: true
        });

      if (tagError && !tagError.message.includes('duplicate')) {
        console.error(`   ❌ Error adding tag ${tag.name}:`, tagError.message);
      } else {
        console.log(`   ✅ Tag added: ${tag.name}`);
      }
    }

    // 3. Link game with tags
    console.log('\n3️⃣ Linking game with tags...');
    const tagSlugs = ['action', 'horror', 'shooting', 'fnaf', 'gun', 'fps', 'halloween'];
    
    for (const tagSlug of tagSlugs) {
      const { error: linkError } = await supabase
        .from('game_tags')
        .upsert({
          game_slug: 'fnaf-shooter',
          tag_slug: tagSlug,
          created_at: new Date().toISOString()
        }, {
          onConflict: 'game_slug,tag_slug',
          ignoreDuplicates: true
        });

      if (linkError && !linkError.message.includes('duplicate')) {
        console.error(`   ❌ Error linking tag ${tagSlug}:`, linkError.message);
      } else {
        console.log(`   ✅ Linked tag: ${tagSlug}`);
      }
    }

    // 4. Add comment
    console.log('\n4️⃣ Adding comment...');
    const { error: commentError } = await supabase
      .from('game_comments')
      .insert({
        game_slug: 'fnaf-shooter',
        user_name: 'NightGuard',
        user_email: 'nightguard@example.com',
        comment_text: 'FNaF Shooter is absolutely incredible! Finally, we get to fight back against those creepy animatronics instead of just hiding. The shooting mechanics are smooth and responsive, and the variety of weapons makes each encounter exciting. The atmosphere is perfectly dark and tense, just like the original FNAF games, but now with the added thrill of action-packed combat. I love how you can switch weapons on the fly to adapt to different situations. The energy management system adds a nice strategic element - you can\'t just run and gun, you need to be smart about your movements. This is exactly what FNAF fans have been waiting for! Highly recommend for anyone who loves horror shooters or the FNAF franchise. 10/10 would hunt animatronics again!',
        rating: 5,
        status: 'approved',
        agreed_terms: true,
        created_at: new Date().toISOString()
      });

    if (commentError) {
      console.error('   ❌ Error adding comment:', commentError.message);
    } else {
      console.log('   ✅ Comment added');
    }

    // 5. Verify migration
    console.log('\n5️⃣ Verifying migration...');
    
    // Check game stats
    const { data: verifyStats, error: verifyStatsError } = await supabase
      .from('game_stats')
      .select('*')
      .eq('slug', 'fnaf-shooter')
      .single();

    if (verifyStatsError) {
      console.error('   ❌ Game stats not found:', verifyStatsError.message);
    } else {
      console.log('   ✅ Game stats verified:', verifyStats);
    }

    // Check tags
    const { data: verifyTags, error: verifyTagsError } = await supabase
      .from('game_tags')
      .select('tag_slug')
      .eq('game_slug', 'fnaf-shooter');

    if (verifyTagsError) {
      console.error('   ❌ Tags not found:', verifyTagsError.message);
    } else {
      console.log(`   ✅ Tags verified: ${verifyTags.length} tags linked`);
    }

    // Check comment
    const { data: verifyComment, error: verifyCommentError } = await supabase
      .from('game_comments')
      .select('user_name, rating, status')
      .eq('game_slug', 'fnaf-shooter');

    if (verifyCommentError) {
      console.error('   ❌ Comment not found:', verifyCommentError.message);
    } else {
      console.log(`   ✅ Comment verified: ${verifyComment.length} comment(s) found`);
    }

    console.log('\n' + '='.repeat(60));
    console.log('✅ FNaF Shooter migration completed successfully!');
    console.log('='.repeat(60));
    console.log('\n📊 Summary:');
    console.log('   - Game stats: Added');
    console.log('   - Tags: 7 tags added/linked');
    console.log('   - Comment: 1 comment added');
    console.log('\n🎮 Game URL: https://www.stealabrainrotunblocked.com/fnaf-shooter');
    console.log('📊 Database: Game, tags, and comment added to Supabase');
    console.log('\n🚀 Next Steps:');
    console.log('   1. Test the game page locally: npm run dev');
    console.log('   2. Visit: http://localhost:3000/fnaf-shooter');
    console.log('   3. Verify the game appears in all lists (home, categories, tags)');
    console.log('   4. Check that the NEW badge is displayed');
    console.log('   5. Verify comment is visible');
    console.log('   6. Deploy to production');

  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
migrateFnafShooter();

