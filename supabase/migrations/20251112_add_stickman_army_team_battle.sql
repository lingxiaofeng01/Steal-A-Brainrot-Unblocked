-- Migration: Add Stickman Army: Team Battle game
-- Date: 2025-11-12
-- Description: Insert game record, tags, and initial comment for Stickman Army: Team Battle

-- ============================================================
-- 1. Insert game record into games table
-- ============================================================
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
  'stickman-army-team-battle',
  'Stickman Army: Team Battle',
  'The Ultimate Real-Time Strategy Battle Game 2025',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/stickman-army-team-battle.png',
  'https://narrow-one.github.io/n6/stickman-army-team-battle/',
  'Stickman Army: Team Battle is an intense real-time strategy game that combines lane-based defense and attack tactics with simple yet engaging Stickman characters. Build your ultimate squad, upgrade weapons, and dominate the battlefield in this action-packed tactical combat experience. Command the Red Team against the formidable Black Team in epic battles featuring comprehensive weapon upgrades, character leveling, and strategic positioning. Experience vibrant cartoon graphics set in tropical battlefields while mastering the art of tactical warfare.',
  5.0,
  0,
  '2025-11-12',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- ============================================================
-- 2. Ensure all required tags exist in tags table
-- ============================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('stickman', 'Stickman', NOW()),
  ('action', 'Action', NOW()),
  ('strategy', 'Strategy', NOW()),
  ('battle', 'Battle', NOW()),
  ('war', 'War', NOW()),
  ('multiplayer', 'Multiplayer', NOW()),
  ('fighting', 'Fighting', NOW()),
  ('skill', 'Skill', NOW()),
  ('casual', 'Casual', NOW()),
  ('unblocked', 'Unblocked', NOW()),
  ('browser', 'Browser', NOW()),
  ('2d', '2D', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('defense', 'Defense', NOW()),
  ('rpg', 'RPG', NOW())
ON CONFLICT (slug) DO NOTHING;

-- ============================================================
-- 3. Associate game with tags in game_tags table
-- ============================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'stickman-army-team-battle'
  AND t.slug IN (
    'stickman',
    'action',
    'strategy',
    'battle',
    'war',
    'multiplayer',
    'fighting',
    'skill',
    'casual',
    'unblocked',
    'browser',
    '2d',
    'arcade',
    'defense',
    'rpg'
  )
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- ============================================================
-- 4. Add initial themed comment to game_comments table
-- ============================================================
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
  'stickman-army-team-battle',
  'TacticalCommander',
  'commander@strategy-games.com',
  'Stickman Army: Team Battle is absolutely incredible! The strategic depth is amazing - you really need to think about unit composition, weapon upgrades, and positioning to win. I love how the Red vs Black team battles play out, especially when facing those tough Clover shield units. The upgrade system keeps you engaged as you unlock better weapons like rifles and grenades. The cartoon graphics are charming and the damage numbers make it easy to track battle progress. This is hands down one of the best real-time strategy games I''ve played in a browser. The campaign mode with red flag objectives provides great progression, and each level introduces new tactical challenges. Highly recommend for anyone who loves strategy games with Stickman characters!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

-- ============================================================
-- Migration completed successfully
-- ============================================================

