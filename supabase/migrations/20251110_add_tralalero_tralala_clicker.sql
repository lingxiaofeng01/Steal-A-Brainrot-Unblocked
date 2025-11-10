-- Migration: Add Tralalero Tralala Clicker game
-- Date: 2025-11-10
-- Description: Insert game record, tags, tag associations, and initial comment for Tralalero Tralala Clicker

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
  'tralalero-tralala-clicker',
  'Tralalero Tralala Clicker',
  'Click the Walking Shark - Endless Quirky Fun!',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/tralalero-tralala-clicker.jpg',
  'https://games.yoplay.io/tralalero-tralala-clicker/?v=1',
  'Tralalero Tralala Clicker is a funny clicker game featuring a walking shark. Click to earn coins, unlock upgrades, skins, and experience endless quirky fun with this viral brainrot sensation. The game features 18 Click Power upgrades, 16 unique shark skins, Ascension Multiplier system, Backup & Restore feature, and 6 dynamic weather systems. Developed by Yoplay.io, this browser-based clicker game has taken social media by storm with its bizarre image of a shark wearing sneakers. Players click the shark to shoot out golden sharks, accumulate coins, and unlock creative skins from Gentleman to Golden shark. The eerie Italian soundtrack with the haunting "Tralalero Tralala" chorus creates a mysterious atmosphere. With comprehensive upgrade systems reaching up to 10 quadrillion points and multipliers reaching x1000+, Tralalero Tralala Clicker offers endless progression. The Backup & Restore feature ensures your progress is safe and portable across devices. Experience dynamic weather effects including Rain, Sunny, Star Rain, Windy, and Snowing as you progress. Perfect for casual gamers and clicker enthusiasts seeking quirky entertainment with depth.',
  5.0,
  0,
  '2025-11-10',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 2. Ensure all required tags exist in tags table
-- =====================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('clicker', 'Clicker', NOW()),
  ('casual', 'Casual', NOW()),
  ('idle', 'Idle', NOW()),
  ('brainrot', 'Brainrot', NOW()),
  ('animal', 'Animal', NOW()),
  ('one-button', 'One Button', NOW()),
  ('horror', 'Horror', NOW()),
  ('coin-collect', 'Coin Collect', NOW()),
  ('unblocked', 'Unblocked', NOW()),
  ('browser', 'Browser', NOW())
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 3. Associate game with tags in game_tags table
-- =====================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'tralalero-tralala-clicker'
  AND t.slug IN (
    'clicker',
    'casual',
    'idle',
    'brainrot',
    'animal',
    'one-button',
    'horror',
    'coin-collect',
    'unblocked',
    'browser'
  )
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- =====================================================
-- 4. Add initial themed comment to game_comments table
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
  'tralalero-tralala-clicker',
  'SharkClicker_Pro',
  'sharkfan@example.com',
  'Tralalero Tralala Clicker is absolutely addictive! The walking shark with sneakers is the most bizarre and hilarious thing I''ve seen in a clicker game. I''ve been playing for hours trying to unlock all 16 skins - the Golden shark is my favorite! The Click Power system with 18 upgrades keeps me engaged, and the Ascension Multiplier adds great replay value. The eerie Italian "Tralalero Tralala" soundtrack is both haunting and catchy - it''s stuck in my head! The Backup & Restore feature is a lifesaver, especially when switching between my laptop and tablet. The weather effects like Star Rain and Snowing add beautiful visual variety. I love how the game combines simple clicking mechanics with deep progression systems. The golden sharks that appear randomly keep me alert and add excitement. This is easily one of the best brainrot clicker games out there. Highly recommend for anyone who enjoys idle games with personality and quirky humor!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

