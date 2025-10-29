const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrateHumansPlayground() {
  console.log('🚀 Starting Humans Playground migration...\n');

  try {
    // 1. Insert game stats
    console.log('📊 Inserting game stats...');
    const { data: statsData, error: statsError } = await supabase
      .from('game_stats')
      .upsert({
        slug: 'humans-playground',
        play_count: 0,
        view_count: 0,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'slug'
      })
      .select();

    if (statsError) {
      console.error('❌ Error inserting game stats:', statsError);
    } else {
      console.log('✅ Game stats inserted successfully');
    }

    // 2. Insert tags
    console.log('\n🏷️  Inserting tags...');
    const tags = [
      { name: 'Action', slug: 'action' },
      { name: 'Adventure', slug: 'adventure' },
      { name: 'Simulation', slug: 'simulation' },
      { name: 'Physics', slug: 'physics' },
      { name: 'Sandbox', slug: 'sandbox' },
      { name: 'Ragdoll', slug: 'ragdoll' },
      { name: 'Creation', slug: 'creation' }
    ];

    for (const tag of tags) {
      const { error: tagError } = await supabase
        .from('tags')
        .upsert(tag, {
          onConflict: 'slug',
          ignoreDuplicates: true
        });

      if (tagError && tagError.code !== '23505') {
        console.error(`❌ Error inserting tag ${tag.name}:`, tagError);
      } else {
        console.log(`✅ Tag "${tag.name}" processed`);
      }
    }

    // 3. Link game with tags
    console.log('\n🔗 Linking game with tags...');
    const tagSlugs = ['action', 'adventure', 'simulation', 'physics', 'sandbox', 'ragdoll', 'creation'];
    
    for (const tagSlug of tagSlugs) {
      const { error: linkError } = await supabase
        .from('game_tags')
        .upsert({
          game_slug: 'humans-playground',
          tag_slug: tagSlug
        }, {
          onConflict: 'game_slug,tag_slug',
          ignoreDuplicates: true
        });

      if (linkError && linkError.code !== '23505') {
        console.error(`❌ Error linking tag ${tagSlug}:`, linkError);
      } else {
        console.log(`✅ Linked tag "${tagSlug}"`);
      }
    }

    // 4. Insert comment
    console.log('\n💬 Inserting comment...');
    const { data: commentData, error: commentError } = await supabase
      .from('game_comments')
      .insert({
        game_slug: 'humans-playground',
        user_name: 'PhysicsExperimenter',
        user_email: 'physicsexperimenter@example.com',
        comment_text: 'Humans Playground is an absolute blast! The physics engine is incredibly realistic and satisfying. I\'ve spent hours creating elaborate Rube Goldberg machines and testing different weapon combinations. The ragdoll physics make every experiment hilarious and unpredictable. Building custom robots and watching them battle is endlessly entertaining. The creative freedom is unmatched - you can literally do anything you imagine. Whether you want to create chaos or build intricate contraptions, this game delivers. The variety of tools and items keeps things fresh, and I\'m constantly discovering new interactions. Perfect stress relief and creativity outlet. Highly recommended for anyone who loves sandbox games and physics simulations! ⭐⭐⭐⭐⭐',
        rating: 5,
        status: 'approved',
        agreed_terms: true
      })
      .select();

    if (commentError) {
      if (commentError.code === '23505') {
        console.log('ℹ️  Comment already exists (skipped)');
      } else {
        console.error('❌ Error inserting comment:', commentError);
      }
    } else {
      console.log('✅ Comment inserted successfully');
    }

    console.log('\n✅ Humans Playground migration completed successfully!');
    console.log('\n📋 Summary:');
    console.log('   - Game stats: ✅');
    console.log('   - Tags: ✅ (7 tags)');
    console.log('   - Game-tag links: ✅');
    console.log('   - Comment: ✅');

  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

migrateHumansPlayground();

