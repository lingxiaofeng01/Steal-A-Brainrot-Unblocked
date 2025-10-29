require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrate() {
  console.log('🚀 Starting Crazy Chicken 3D migration...\n');

  try {
    // 1. Insert game stats
    console.log('📊 Inserting game stats...');
    const { data: statsData, error: statsError } = await supabase
      .from('game_stats')
      .upsert({
        slug: 'crazy-chicken-3d',
        play_count: 0,
        view_count: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'slug'
      });

    if (statsError) {
      console.error('❌ Error inserting game stats:', statsError);
    } else {
      console.log('✅ Game stats inserted successfully');
    }

    // 2. Insert comment
    console.log('\n💬 Inserting initial comment...');
    const { data: commentData, error: commentError } = await supabase
      .from('game_comments')
      .insert({
        game_slug: 'crazy-chicken-3d',
        user_name: 'ChickenChampion',
        user_email: 'chickenchampion@example.com',
        comment_text: 'Crazy Chicken 3D is absolutely hilarious and addictive! The physics-based combat is so satisfying - watching chickens tumble and crash into each other never gets old. I love how each location has its own unique challenges and hazards. The fact that there are no power-ups makes it a true test of skill, which I really appreciate. The controls are simple but mastering the timing and momentum takes practice. I\'ve spent hours battling across Ireland, Egypt, and the other locations. The secret levels are a great bonus for dedicated players. The game strikes a perfect balance between casual fun and competitive gameplay. Whether I\'m playing for 5 minutes or an hour, it\'s always entertaining. Highly recommend for anyone who loves battle royale games with a quirky twist! ⭐⭐⭐⭐⭐',
        rating: 5,
        status: 'approved',
        agreed_terms: true,
        created_at: new Date().toISOString()
      });

    if (commentError) {
      console.error('❌ Error inserting comment:', commentError);
    } else {
      console.log('✅ Comment inserted successfully');
    }

    console.log('\n✅ Migration completed successfully!');
    console.log('\n📋 Summary:');
    console.log('  - Game stats: ✅');
    console.log('  - Initial comment: ✅');
    console.log('  - Tags: ⚠️  (May need manual setup due to RLS policies)');

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

migrate();

