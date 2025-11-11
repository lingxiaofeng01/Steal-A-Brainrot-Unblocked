-- Migration: Add Giant Rush game
-- Created: 2025-11-11
-- Description: Adds Giant Rush game with tags, associations, and initial comment

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
  'giant-rush',
  'Giant Rush',
  'The Bold Stickman Race That Turns Every Run into a Fight',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/giant-rush.png',
  'https://sloperun.org/giant-rush.embed',
  'Giant Rush throws you straight into a world where running is only half the battle. First launched in mid-2022 by the creative team at TapNation, this 3D action game fuses fast running with one-on-one brawls in a way that feels instantly fun and unpredictable. Every move counts, every color change matters — and every run could end with a giant waiting for you at the finish line. At first glance, Giant Rush feels like a simple race through shifting lanes and bright colors, but the real tension builds as your stickman changes size and power. It''s part reflex test, part strategy puzzle, and part showdown that makes each session feel new again. The game combines the addictive nature of endless runners with the strategic depth of color-matching mechanics and the excitement of boss battles. What sets Giant Rush apart from other running games is its unique blend of mechanics. You''re not just running forward mindlessly — you''re constantly making split-second decisions about which stickmen to collect, when to change lanes, and how to time your attacks against powerful giants. This combination creates a gameplay loop that''s easy to learn but challenging to master, making Giant Rush perfect for both casual players and competitive gamers.',
  5.0,
  0,
  '2025-11-11',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 2. Ensure all required tags exist in tags table
-- =====================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('running', 'Running', NOW()),
  ('action', 'Action', NOW()),
  ('3d', '3D', NOW()),
  ('stickman', 'Stickman', NOW()),
  ('fighting', 'Fighting', NOW()),
  ('casual', 'Casual', NOW()),
  ('skill', 'Skill', NOW()),
  ('single-player', 'Single Player', NOW()),
  ('boss-battle', 'Boss Battle', NOW()),
  ('collect', 'Collect', NOW()),
  ('unblocked', 'Unblocked', NOW()),
  ('browser', 'Browser', NOW())
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 3. Associate game with tags in game_tags table
-- =====================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'giant-rush'
  AND t.slug IN (
    'running',
    'action',
    '3d',
    'stickman',
    'fighting',
    'casual',
    'skill',
    'single-player',
    'boss-battle',
    'collect',
    'unblocked',
    'browser'
  )
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- =====================================================
-- 4. Add initial approved comment to game_comments table
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
  'giant-rush',
  'SpeedRunner92',
  'speedrunner92@example.com',
  'Giant Rush is absolutely addictive! The color-matching mechanic combined with boss battles creates such a unique experience. I love how you need to think strategically about which stickmen to collect while also reacting quickly to color changes. The boss fights at the end of each level are incredibly satisfying - learning their attack patterns and timing your strikes perfectly feels amazing. The customization options with gems add great replay value too. I''ve been playing for hours and still discovering new strategies. Highly recommend this game to anyone who enjoys fast-paced action with strategic depth!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

