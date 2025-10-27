/**
 * Migration Script: Add Dude Theft Auto to Supabase
 * This script adds game stats, tags, and initial comment for Dude Theft Auto
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
  console.log('✅ Loaded environment variables from .env.local');
} else {
  console.log('⚠️  .env.local not found, using system environment variables');
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables');
  console.error('Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function migrateGame() {
  console.log('\n📊 Adding game to database...');

  // First check if game already exists
  const { data: existingGame } = await supabase
    .from('games')
    .select('id, slug')
    .eq('slug', 'dude-theft-auto')
    .single();

  if (existingGame) {
    console.log('✅ Game already exists in database');
    return existingGame.id;
  }

  // Insert new game
  const { data, error } = await supabase
    .from('games')
    .insert({
      slug: 'dude-theft-auto',
      title: 'Dude Theft Auto',
      subtitle: 'The Ultimate Open-World Sandbox Chaos Experience',
      description: 'Jump into the madness of Dude Theft Auto, where chaos reigns supreme! This open-world sandbox game lets you wreak havoc across a vibrant city filled with endless possibilities.',
      play_url: 'https://1games.io/game/dude-theft-auto/',
      cover: '/images/thumbnails/dude-theft-auto.webp',
      rating: 4.6,
      play_count: 0,
      duration: '30-60 min',
      released_at: new Date().toISOString(),
      is_featured: false,
      is_active: true
    })
    .select()
    .single();

  if (error) {
    console.error('❌ Error adding game:', error);
    return null;
  }

  console.log('✅ Game added successfully');
  return data.id;
}

async function migrateGameStats() {
  console.log('\n📊 Adding game stats...');

  const { data, error } = await supabase
    .from('game_stats')
    .upsert({
      slug: 'dude-theft-auto',
      play_count: 0,
      view_count: 0,
      last_played_at: new Date().toISOString()
    }, {
      onConflict: 'slug'
    });

  if (error) {
    console.error('❌ Error adding game stats:', error);
    return false;
  }

  console.log('✅ Game stats added successfully');
  return true;
}

async function migrateTags() {
  console.log('\n🏷️  Checking tags...');

  const tagSlugs = ['action', 'shooting', 'simulation', '3d', 'multiplayer', 'physics', 'gun', 'fps'];

  // Check which tags exist
  const { data: existingTags, error: checkError } = await supabase
    .from('tags')
    .select('slug')
    .in('slug', tagSlugs);

  if (checkError) {
    console.error('❌ Error checking tags:', checkError);
    return false;
  }

  const existingSlugs = existingTags ? existingTags.map(t => t.slug) : [];
  console.log(`✅ Found ${existingSlugs.length} existing tags: ${existingSlugs.join(', ')}`);

  const missingSlugs = tagSlugs.filter(slug => !existingSlugs.includes(slug));
  if (missingSlugs.length > 0) {
    console.log(`⚠️  Missing tags (will be skipped): ${missingSlugs.join(', ')}`);
    console.log('   Note: Tags should be created manually in Supabase dashboard if needed');
  }

  return true;
}

async function migrateGameTags(gameId) {
  console.log('\n🔗 Linking game to tags...');

  if (!gameId) {
    console.error('❌ Game ID is required');
    return false;
  }

  const tagSlugs = ['action', 'shooting', 'simulation', '3d', 'multiplayer', 'physics', 'gun', 'fps'];

  // Get tag IDs
  const { data: tags, error: tagError } = await supabase
    .from('tags')
    .select('id, slug')
    .in('slug', tagSlugs);

  if (tagError) {
    console.error('❌ Error fetching tags:', tagError);
    return false;
  }

  if (!tags || tags.length === 0) {
    console.error('❌ No tags found');
    return false;
  }

  console.log(`Found ${tags.length} tags to link`);

  // Create game_tags entries
  const gameTags = tags.map(tag => ({
    game_id: gameId,
    tag_id: tag.id
  }));

  const { error } = await supabase
    .from('game_tags')
    .upsert(gameTags, {
      onConflict: 'game_id,tag_id',
      ignoreDuplicates: true
    });

  if (error) {
    console.error('❌ Error linking game to tags:', error);
    return false;
  }

  console.log('✅ Game tags linked successfully');
  return true;
}

async function migrateComment() {
  console.log('\n💬 Adding initial comment...');
  
  const { data, error } = await supabase
    .from('game_comments')
    .insert({
      game_slug: 'dude-theft-auto',
      user_name: 'ChaosKing',
      user_email: 'chaosking@example.com',
      comment_text: "This game is absolutely insane! The physics are hilarious and the open-world freedom is amazing. I spent hours just causing mayhem and trying different vehicles. The police chases are intense and the variety of weapons keeps things fresh. Best sandbox game I've played in a while! 🚗💥",
      rating: 5,
      status: 'approved',
      agreed_terms: true,
      created_at: new Date().toISOString()
    });

  if (error) {
    // Check if it's a duplicate error
    if (error.code === '23505') {
      console.log('⚠️  Comment already exists, skipping...');
      return true;
    }
    console.error('❌ Error adding comment:', error);
    return false;
  }

  console.log('✅ Comment added successfully');
  return true;
}

async function verifyMigration() {
  console.log('\n🔍 Verifying migration...');

  // Check game
  const { data: game, error: gameError } = await supabase
    .from('games')
    .select('*')
    .eq('slug', 'dude-theft-auto')
    .single();

  if (gameError || !game) {
    console.error('❌ Game not found in database');
    return false;
  }
  console.log('✅ Game verified');

  // Check game stats
  const { data: stats, error: statsError } = await supabase
    .from('game_stats')
    .select('*')
    .eq('slug', 'dude-theft-auto')
    .single();

  if (statsError || !stats) {
    console.error('❌ Game stats not found');
    return false;
  }
  console.log('✅ Game stats verified');

  // Check game tags
  const { data: gameTags, error: tagsError } = await supabase
    .from('game_tags')
    .select('*')
    .eq('game_id', game.id);

  if (tagsError || !gameTags || gameTags.length === 0) {
    console.error('❌ Game tags not found');
    return false;
  }
  console.log(`✅ Game tags verified (${gameTags.length} tags)`);

  // Check comment
  const { data: comments, error: commentsError } = await supabase
    .from('game_comments')
    .select('*')
    .eq('game_slug', 'dude-theft-auto')
    .eq('status', 'approved');

  if (commentsError || !comments || comments.length === 0) {
    console.error('❌ Comment not found');
    return false;
  }
  console.log(`✅ Comment verified (${comments.length} comment(s))`);

  return true;
}

async function main() {
  console.log('🚀 Starting Dude Theft Auto migration...');
  console.log('📍 Supabase URL:', supabaseUrl);

  try {
    // Add game to database
    const gameId = await migrateGame();
    if (!gameId) {
      console.error('\n❌ Migration failed at game creation step');
      process.exit(1);
    }
    console.log(`📝 Game ID: ${gameId}`);

    // Run migrations
    const statsSuccess = await migrateGameStats();
    if (!statsSuccess) {
      console.error('\n❌ Migration failed at game stats step');
      process.exit(1);
    }

    const tagsSuccess = await migrateTags();
    if (!tagsSuccess) {
      console.error('\n❌ Migration failed at tags step');
      process.exit(1);
    }

    const gameTagsSuccess = await migrateGameTags(gameId);
    if (!gameTagsSuccess) {
      console.error('\n❌ Migration failed at game tags step');
      process.exit(1);
    }

    const commentSuccess = await migrateComment();
    if (!commentSuccess) {
      console.error('\n❌ Migration failed at comment step');
      process.exit(1);
    }

    // Verify migration
    const verified = await verifyMigration();
    if (!verified) {
      console.error('\n❌ Migration verification failed');
      process.exit(1);
    }

    console.log('\n' + '='.repeat(60));
    console.log('✅ Migration completed successfully!');
    console.log('='.repeat(60));
    console.log('\n📋 Summary:');
    console.log('   ✅ Game added to database');
    console.log('   ✅ Game stats added');
    console.log('   ✅ Tags checked and linked');
    console.log('   ✅ Initial comment added');
    console.log('\n🎮 Game: Dude Theft Auto');
    console.log('👤 Comment by: ChaosKing');
    console.log('⭐ Rating: 5/5');
    console.log('\n');

  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

main();

