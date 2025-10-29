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

async function migrateTungSahurClicker() {
  console.log('🚀 Starting Tung Sahur Clicker migration...\n');

  try {
    // 1. Insert game stats
    console.log('📊 Inserting game stats...');
    const { data: statsData, error: statsError } = await supabase
      .from('game_stats')
      .upsert({
        slug: 'tung-sahur-clicker',
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
        game_slug: 'tung-sahur-clicker',
        user_name: 'ClickMaster88',
        user_email: 'clickmaster88@example.com',
        comment_text: 'Tung Sahur Clicker is pure comedic gold! The wooden warrior\'s dance moves get more ridiculous with every upgrade, and I can\'t stop laughing. The Italian Brainrot humor is on point - it\'s absurd, silly, and absolutely addictive. I love how the limelight street corner transforms as you progress, and the 2x multiplier mechanic keeps me engaged during active sessions. The upgrade system is perfectly balanced - there\'s always something new to unlock just around the corner. Whether I\'m actively clicking or letting it idle, the progression feels rewarding. The skins and weather effects add so much personality to the game. This is easily one of the funniest clickers I\'ve played. Highly recommend for anyone who loves idle games with a sense of humor!',
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
    console.log('  - Game: Tung Sahur Clicker');
    console.log('  - Slug: tung-sahur-clicker');
    console.log('  - Stats: Initialized (0 plays, 0 views)');
    console.log('  - Comment: Added (ClickMaster88, 5 stars)');

  } catch (error) {
    console.error('\n❌ Migration failed:', error.message);
    process.exit(1);
  }
}

// Run migration
migrateTungSahurClicker();

