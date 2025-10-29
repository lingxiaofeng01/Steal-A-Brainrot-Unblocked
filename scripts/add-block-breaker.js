#!/usr/bin/env node
/**
 * Add Block Breaker game to Supabase
 * This script adds the game data and a themed comment
 *
 * Usage: node scripts/add-block-breaker.js
 */

const { createClient } = require('@supabase/supabase-js');

// Hardcode credentials for this script (from .env.local)
const supabaseUrl = 'https://tgoyqxcqpwevgztprqgk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnb3lxeGNxcHdldmd6dHBycWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMjgzMTEsImV4cCI6MjA3NTcwNDMxMX0.k8EYFMzaNGDytf8ZAYRkQlBhkTD1w6UBWSg0pwLW-mc';

const supabase = createClient(supabaseUrl, supabaseKey);

async function addBlockBreaker() {
  console.log('🎮 Adding Block Breaker to Supabase...\n');

  // Game data
  const gameData = {
    slug: 'block-breaker',
    title: 'Block Breaker',
    cover: 'https://www.stealabrainrotunblocked.com/images/thumbnails/block-breaker.jpeg',
    play_url: '//html5.gamedistribution.com/rvvASMiM/e8c759ba34bd4b9b9760b77fb04b69d9/index.html?gd_sdk_referrer_url=https%3A%2F%2F1games.io%2Fblock-breaker&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovLzFnYW1lcy5pby9ibG9jay1icmVha2VyIiwicGFyZW50RG9tYWluIjoiMWdhbWVzLmlvIiwidG9wRG9tYWluIjoiMWdhbWVzLmlvIiwiaGFzSW1wcmVzc2lvbiI6ZmFsc2UsImxvYWRlckVuYWJsZWQiOnRydWUsImhvc3QiOiJodG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbSIsInZlcnNpb24iOiIxLjUuMTgifQ%253D%253D',
    description: 'Block Breaker is an exciting arcade game that tests your reflexes and precision. Break through colorful blocks, master challenging levels, and aim for the highest score in this addictive brick-breaking adventure!',
    rating: 4.5,
    play_count: 0,
    released_at: '2025-10-27',
    is_active: true,
    is_featured: false
  };

  // 1. Insert game
  console.log('1️⃣ Inserting game data...');
  const { data: game, error: gameError } = await supabase
    .from('games')
    .upsert(gameData, { onConflict: 'slug' })
    .select()
    .single();

  if (gameError) {
    console.error('❌ Error inserting game:', gameError);
    return;
  }
  console.log('✅ Game inserted:', game.title);

  // 2. Get or create tags
  console.log('\n2️⃣ Processing tags...');
  const tagNames = ['Arcade', 'Action', 'Skill', 'Casual', 'Block', 'Agility'];
  const tagIds = [];

  for (const tagName of tagNames) {
    const { data: existingTag } = await supabase
      .from('tags')
      .select('id')
      .eq('name', tagName)
      .single();

    if (existingTag) {
      tagIds.push(existingTag.id);
      console.log(`   ✓ Found existing tag: ${tagName}`);
    } else {
      const { data: newTag, error: tagError } = await supabase
        .from('tags')
        .insert({ name: tagName, slug: tagName.toLowerCase() })
        .select()
        .single();

      if (tagError) {
        console.error(`   ✗ Error creating tag ${tagName}:`, tagError);
      } else {
        tagIds.push(newTag.id);
        console.log(`   ✓ Created new tag: ${tagName}`);
      }
    }
  }

  // 3. Link tags to game
  console.log('\n3️⃣ Linking tags to game...');
  for (const tagId of tagIds) {
    const { error: linkError } = await supabase
      .from('game_tags')
      .upsert(
        { game_id: game.id, tag_id: tagId },
        { onConflict: 'game_id,tag_id' }
      );

    if (linkError) {
      console.error('   ✗ Error linking tag:', linkError);
    }
  }
  console.log(`✅ Linked ${tagIds.length} tags to game`);

  // 4. Add a themed comment
  console.log('\n4️⃣ Adding themed comment...');
  const comment = {
    game_id: game.id,
    user_name: 'ArcadeMaster',
    user_email: 'arcademaster@example.com',
    content: 'This is the best block-breaking game I\'ve played in years! The physics feel perfect, the power-ups are exciting, and the progressive difficulty keeps me coming back. The colorful graphics and smooth gameplay make it incredibly addictive. I love how each level presents a new challenge. Highly recommend for anyone who enjoys classic arcade action with a modern twist! 🎮🔥',
    rating: 5,
    status: 'approved',
    agreed_terms: true,
    created_at: new Date().toISOString()
  };

  const { error: commentError } = await supabase
    .from('comments')
    .insert(comment);

  if (commentError) {
    console.error('❌ Error adding comment:', commentError);
  } else {
    console.log('✅ Added themed comment');
  }

  console.log('\n🎉 Block Breaker successfully added to Supabase!');
  console.log('\n📊 Summary:');
  console.log(`   Game: ${game.title}`);
  console.log(`   Slug: ${game.slug}`);
  console.log(`   Tags: ${tagNames.join(', ')}`);
  console.log(`   Rating: ${game.rating}/5`);
  console.log(`   Release Date: ${game.released_at}`);
}

// Run the script
addBlockBreaker().catch(console.error);

