#!/usr/bin/env node
/**
 * Sync Impossible Car Stunt game data to Supabase
 * This script uses the Supabase REST API to insert game, tags, and comment data
 */

const https = require('https');

const SUPABASE_URL = 'https://tgoyqxcqpwevgztprqgk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnb3lxeGNxcHdldmd6dHBycWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMjgzMTEsImV4cCI6MjA3NTcwNDMxMX0.k8EYFMzaNGDytf8ZAYRkQlBhkTD1w6UBWSg0pwLW-mc';

// Helper function to make HTTP requests
function makeRequest(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, SUPABASE_URL);
    
    const options = {
      method: method,
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      }
    };

    const req = https.request(url, options, (res) => {
      let body = '';
      
      res.on('data', (chunk) => {
        body += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(body ? JSON.parse(body) : null);
          } catch (e) {
            resolve(body);
          }
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${body}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
}

async function syncData() {
  console.log('🚀 Starting Supabase data sync for Impossible Car Stunt...\n');

  try {
    // 1. Insert game record
    console.log('1️⃣ Inserting game record...');
    const gameData = {
      slug: 'impossible-car-stunt',
      title: 'Impossible Car Stunt',
      subtitle: 'Conquer Sky-High Tracks in the Ultimate Racing Challenge 2025',
      cover: 'https://www.stealabrainrotunblocked.com/images/thumbnails/impossible-car-stunt.jpeg',
      play_url: 'https://html5.gamedistribution.com/rvvASMiM/fe68fa1a7ec14b579db34bcb6d4e2eac/index.html?gd_sdk_referrer_url=https%3A%2F%2Fgamedistribution.com%2Fgames%2Fimpossible-car-stunt-2022&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2dhbWVkaXN0cmlidXRpb24uY29tL2dhbWVzL2ltcG9zc2libGUtY2FyLXN0dW50LTIwMjIiLCJwYXJlbnREb21haW4iOiJnYW1lZGlzdHJpYnV0aW9uLmNvbSIsInRvcERvbWFpbiI6ImltcG9zc2libGVjYXJzdHVudC5jb20iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9',
      description: 'Welcome to Impossible Car Stunt 2022, the ultimate impossible tracks car racing game where you race super-fast sports cars on massive heights in the sky. Experience real impossible track racing with crazy stunts on ramps, mega jumps, and extreme car driving challenges that will test your skills to the limit. If you are a fast speed racer and have a passion for car racing games, then be ready to experience the real car rally in the mid of the sky with no limits. Rush like a crazy stunt master while riding the beautifully designed real impossible tracks. Enjoy the real impossible track race on the endless extreme impossible tracks in the sky highs. The game features stunning 3D graphics and immersive gameplay that keeps players coming back for more. Navigate through treacherous sky-high pathways where one wrong move could send you plummeting to the ground below. Master the art of controlling powerful sports cars at breakneck speeds while performing spectacular aerial maneuvers that push the boundaries of what\'s possible in racing games. Choose from a fleet of high-performance sports cars, each with unique handling characteristics and speed capabilities. Race across a variety of impossible tracks, each presenting unique obstacles and challenges. From narrow pathways suspended in the clouds to massive mega ramps that launch you into the stratosphere, every track offers a fresh test of your driving skills. The realistic physics engine ensures that every jump, flip, and drift feels incredibly authentic, making each successful stunt execution deeply satisfying. Strategic checkpoint placement ensures you can retry challenging sections without starting from the beginning, making the game both challenging and fair for players of all skill levels.',
      rating: 5.0,
      play_count: 0,
      released_at: '2025-11-06',
      is_active: true,
      is_featured: false
    };

    try {
      const gameResult = await makeRequest('POST', '/rest/v1/games', gameData);
      console.log('✅ Game record inserted successfully');
    } catch (error) {
      if (error.message.includes('duplicate key')) {
        console.log('ℹ️  Game already exists, skipping...');
      } else {
        throw error;
      }
    }

    // 2. Insert tags
    console.log('\n2️⃣ Inserting tags...');
    const tags = [
      { slug: 'racing', name: 'Racing' },
      { slug: 'driving', name: 'Driving' },
      { slug: 'stunt', name: 'Stunt' },
      { slug: 'car', name: 'Car' },
      { slug: '3d', name: '3D' },
      { slug: 'skill', name: 'Skill' },
      { slug: 'sports', name: 'Sports' },
      { slug: 'arcade', name: 'Arcade' }
    ];

    for (const tag of tags) {
      try {
        await makeRequest('POST', '/rest/v1/tags', tag);
        console.log(`✅ Tag '${tag.name}' inserted`);
      } catch (error) {
        if (error.message.includes('duplicate key')) {
          console.log(`ℹ️  Tag '${tag.name}' already exists, skipping...`);
        } else {
          throw error;
        }
      }
    }

    // 3. Get game ID and tag IDs
    console.log('\n3️⃣ Fetching game and tag IDs...');
    const game = await makeRequest('GET', '/rest/v1/games?slug=eq.impossible-car-stunt&select=id');
    if (!game || game.length === 0) {
      throw new Error('Game not found after insertion');
    }
    const gameId = game[0].id;
    console.log(`✅ Game ID: ${gameId}`);

    const tagSlugs = tags.map(t => t.slug).join(',');
    const fetchedTags = await makeRequest('GET', `/rest/v1/tags?slug=in.(${tagSlugs})&select=id,slug`);
    console.log(`✅ Fetched ${fetchedTags.length} tags`);

    // 4. Insert game-tag associations
    console.log('\n4️⃣ Creating game-tag associations...');
    for (const tag of fetchedTags) {
      try {
        await makeRequest('POST', '/rest/v1/game_tags', {
          game_id: gameId,
          tag_id: tag.id
        });
        console.log(`✅ Associated tag '${tag.slug}' with game`);
      } catch (error) {
        if (error.message.includes('duplicate key')) {
          console.log(`ℹ️  Tag '${tag.slug}' already associated, skipping...`);
        } else {
          throw error;
        }
      }
    }

    // 5. Insert comment
    console.log('\n5️⃣ Inserting initial comment...');
    const commentData = {
      game_slug: 'impossible-car-stunt',
      user_name: 'SpeedDemon88',
      user_email: 'speeddemon88@example.com',
      comment_text: 'Impossible Car Stunt is absolutely insane! The sky-high tracks are breathtaking and terrifying at the same time. I love how the physics feel so realistic - every jump and landing requires perfect timing. The mega ramps are my favorite part - launching into the air and pulling off crazy stunts never gets old. The variety of sports cars is amazing, each one handles differently which keeps the gameplay fresh. The checkpoint system is a lifesaver when you\'re learning the trickier sections. This is hands down one of the best impossible track racing games I\'ve ever played. The 3D graphics are stunning and the tracks are beautifully designed. If you love high-speed racing and gravity-defying stunts, you absolutely need to try Impossible Car Stunt!',
      rating: 5,
      status: 'approved',
      agreed_terms: true
    };

    try {
      await makeRequest('POST', '/rest/v1/game_comments', commentData);
      console.log('✅ Comment inserted successfully');
    } catch (error) {
      if (error.message.includes('duplicate key')) {
        console.log('ℹ️  Comment already exists, skipping...');
      } else {
        throw error;
      }
    }

    // 6. Verify data
    console.log('\n6️⃣ Verifying data...');
    const verifyGame = await makeRequest('GET', '/rest/v1/games?slug=eq.impossible-car-stunt&select=slug,title,rating');
    console.log('Game:', verifyGame);

    const verifyComments = await makeRequest('GET', '/rest/v1/game_comments?game_slug=eq.impossible-car-stunt&select=user_name,rating');
    console.log('Comments:', verifyComments);

    console.log('\n✅ All data synced successfully!');
    console.log('\n📝 Summary:');
    console.log('  - Game: Impossible Car Stunt');
    console.log('  - Tags: 8 tags associated');
    console.log('  - Comments: 1 initial comment');
    console.log('  - Status: Ready for production');

  } catch (error) {
    console.error('\n❌ Error during sync:', error.message);
    process.exit(1);
  }
}

syncData();

