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

async function migrateCheeseChompers3D() {
  console.log('🚀 Starting Cheese Chompers 3D migration...\n');

  try {
    // 1. Insert game stats
    console.log('📊 Inserting game stats...');
    const { data: statsData, error: statsError } = await supabase
      .from('game_stats')
      .upsert({
        slug: 'cheese-chompers-3d',
        play_count: 0,
        view_count: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'slug'
      });

    if (statsError) {
      console.error('❌ Error inserting game stats:', statsError.message);
    } else {
      console.log('✅ Game stats inserted successfully');
    }

    // 2. Insert comment
    console.log('\n💬 Inserting comment...');
    const { data: commentData, error: commentError } = await supabase
      .from('game_comments')
      .insert({
        game_slug: 'cheese-chompers-3d',
        user_name: 'CheeseChampion',
        user_email: 'cheesechampion@example.com',
        comment_text: 'Cheese Chompers 3D is absolutely hilarious! The physics-based knockouts are so unpredictable and fun. I love how you can flip in mid-air to gain speed boosts - it adds a real skill element to the chaos. The arena battles are fast-paced and competitive, but even when you lose, the absurd physics keep you laughing. The remastered audio makes every impact feel satisfying. This game perfectly captures the spirit of Crazy Cattle 3D while adding its own unique rat-themed charm. Whether you\'re playing casually or trying to master the advanced techniques, there\'s always something new to discover. Highly recommend for anyone who loves chaotic multiplayer fun!',
        rating: 5,
        status: 'approved',
        agreed_terms: true,
        created_at: new Date().toISOString()
      });

    if (commentError) {
      if (commentError.code === '23505') {
        console.log('⚠️  Comment already exists (duplicate key)');
      } else {
        console.error('❌ Error inserting comment:', commentError.message);
      }
    } else {
      console.log('✅ Comment inserted successfully');
    }

    console.log('\n✅ Migration completed successfully!');
    console.log('\n📋 Summary:');
    console.log('  - Game: Cheese Chompers 3D');
    console.log('  - Slug: cheese-chompers-3d');
    console.log('  - Stats: Initialized (0 plays, 0 views)');
    console.log('  - Comment: Added (CheeseChampion, 5 stars)');

  } catch (error) {
    console.error('\n❌ Migration failed:', error.message);
    process.exit(1);
  }
}

// Run migration
migrateCheeseChompers3D();

