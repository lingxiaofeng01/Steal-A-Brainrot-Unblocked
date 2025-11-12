-- =====================================================
-- Migration: Add Hockey Random Game
-- Date: 2025-11-12
-- Description: Insert Hockey Random game, tags, and initial comment
-- =====================================================

-- =====================================================
-- 1. Insert game record into games table
-- =====================================================
INSERT INTO games (
  slug,
  title,
  subtitle,
  cover,
  play_url,
  description,
  rating,
  play_count,
  released_at,
  is_active,
  is_featured
) VALUES (
  'hockey-random',
  'Hockey Random',
  'Chaotic 2D Pixel Hockey Game with Unpredictable Physics',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/hockey-random.jpg',
  'https://yoplay.io/hockey-random.embed',
  'Hockey Random is a chaotic and hilarious 2D pixel hockey game with unpredictable physics. Play for free, unblocked. Some games are designed to test patience, others to test precision—but Hockey Random is all about one thing: laughs. It''s the 2D game where skill meets absurdity, and every round feels like an exhilarating cinematic climax. Built as a 2D hockey simulator for the browser, this chaotic little gem thrives on surprise. Players bounce, slide, and crash their way to victory, never knowing whether the next goal will come from a perfect shot or pure luck. Hockey Random features five visually distinct arenas, each changing how the game feels. From sunny beaches with bright skies and shirtless athletes playing with a beach ball, to frozen lakes where auroras glow across the night sky and the puck slides faster than thought. Each ball type makes a difference—a heavier ball bounces less but hits harder; a light one dances unpredictably. The fun lies in adapting to these small shifts, like skating blindfolded on shifting ice. The graphics embrace simplicity with nostalgic 2D pixels, balanced and bright colors that catch the eye without tiring it. There''s no background music; instead, the match is filled with the real chaos of sport—sticks colliding, the puck hitting the goalpost, the referee''s whistle, the crowd''s sudden roar. Two players can share the same keyboard, switching between attack and defense, laughing at the wild physics that often decide who wins. Hockey Random isn''t here to be realistic—it''s here to remind players why games exist in the first place: for pure, unfiltered fun.',
  5.0,
  0,
  '2025-11-12',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 2. Ensure all required tags exist in tags table
-- =====================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('sports', 'Sports', NOW()),
  ('hockey', 'Hockey', NOW()),
  ('multiplayer', 'Multiplayer', NOW()),
  ('2-player', '2 Player', NOW()),
  ('casual', 'Casual', NOW()),
  ('action', 'Action', NOW()),
  ('physics', 'Physics', NOW()),
  ('pixel', 'Pixel', NOW()),
  ('2d', '2D', NOW()),
  ('funny', 'Funny', NOW()),
  ('unblocked', 'Unblocked', NOW()),
  ('browser', 'Browser', NOW())
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 3. Link game with tags in game_tags table
-- ⚠️ IMPORTANT: Use UUID foreign keys, not slugs!
-- =====================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'hockey-random'
  AND t.slug IN (
    'sports',
    'hockey',
    'multiplayer',
    '2-player',
    'casual',
    'action',
    'physics',
    'pixel',
    '2d',
    'funny',
    'unblocked',
    'browser'
  )
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- =====================================================
-- 4. Add initial approved comment to game_comments table
-- ⚠️ IMPORTANT: Field name is comment_text, not content!
-- =====================================================
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms,
  created_at
) VALUES (
  'hockey-random',
  'Alex Thompson',
  'alex.thompson.gamer@gmail.com',
  'Hockey Random is absolutely hilarious! I played it with my roommate last night and we couldn''t stop laughing. The physics are so unpredictable - one moment you''re setting up the perfect shot, the next moment your player is sliding across the ice like a ragdoll. The different arenas keep things fresh, and I love how each ball type changes the gameplay. The frozen lake with the aurora lights is my favorite! The pixel art style is charming and the sound effects are spot-on. This is the perfect game for a quick break or a fun gaming session with friends. Highly recommend for anyone who wants a good laugh!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

-- =====================================================
-- Migration completed successfully
-- =====================================================

