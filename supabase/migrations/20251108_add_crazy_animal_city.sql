-- Migration: Add Crazy Animal City game
-- Date: 2025-11-08
-- Description: Insert Crazy Animal City game, tags, and initial comment

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
  'crazy-animal-city',
  'Crazy Animal City',
  'Unleash Wild Chaos in the Ultimate Animal Rampage Game',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/crazy-animal-city.jpg',
  'https://games.yoplay.io/crazy-animal-city/?v=1',
  'Experience the thrill of Crazy Animal City - a wild 3D browser game where you control fierce animals hunting through a broken city. Play as wolf, lion, T-rex and more in this ultimate animal rampage simulator. Hunt civilians, collect coins, unlock 8 unique animals, and survive intense police chases across two distinct maps. Master the art of chaos with realistic physics, strategic scoring, and fast-paced action. Perfect for stress relief and competitive gaming!',
  5.0,
  0,
  '2025-11-08',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 2. Ensure all required tags exist in tags table
-- =====================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('action', 'Action', NOW()),
  ('3d', '3D', NOW()),
  ('animal', 'Animal', NOW()),
  ('adventure', 'Adventure', NOW()),
  ('casual', 'Casual', NOW()),
  ('simulation', 'Simulation', NOW()),
  ('city', 'City', NOW()),
  ('hunting', 'Hunting', NOW())
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 3. Associate game with tags in game_tags table
-- ⚠️ IMPORTANT: Use UUID foreign keys, not slugs!
-- =====================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'crazy-animal-city'
  AND t.slug IN ('action', '3d', 'animal', 'adventure', 'casual', 'simulation', 'city', 'hunting')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- =====================================================
-- 4. Add themed comment to game_comments table
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
  'crazy-animal-city',
  'WildHunter92',
  'wildhunter92@example.com',
  'Crazy Animal City is absolutely insane! I started with the wolf and thought it was fun, but once I unlocked the T-Rex... WOW! The destruction physics are so satisfying - watching cars flip and buildings crumble never gets old. The police chases add real tension because one bullet ends your run, so you have to stay sharp. I love how each animal feels completely different. The rabbit is surprisingly my favorite for dodging bullets, while the bear is perfect when I just want to smash everything. The coin collection system keeps me coming back to unlock all the animals. Pro tip: learn the alleyways in Broken City map - they are lifesavers when escaping police! This game is perfect for blowing off steam after a long day. Highly recommend to anyone who loves chaotic action games!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

