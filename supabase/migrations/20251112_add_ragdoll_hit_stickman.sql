/*
  # Add Ragdoll Hit Stickman Game

  ## Overview
  This migration adds the Ragdoll Hit Stickman game to the database with:
  - Game record in games table
  - Associated tags in tags table
  - Game-tag relationships in game_tags table
  - Initial approved comment in game_comments table

  ## Changes
  1. Insert game record with all metadata
  2. Ensure all required tags exist
  3. Create game-tag associations using UUID foreign keys
  4. Add initial player comment with rating
*/

-- ============================================
-- 1. Insert Game Record
-- ============================================

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
  'ragdoll-hit-stickman',
  'Ragdoll Hit Stickman',
  'The Ultimate Physics-Based Fighting Game 2025',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/ragdoll-hit-stickman.png',
  'https://game.azgame.io/ragdoll-hit-stickman/',
  'Ragdoll Hit Stickman delivers a wild, physics-driven action experience that combines unpredictable movement, intense combat, and pure ragdoll chaos. Step into the arena as a flexible stickman warrior and engage in outrageous brawls where every hit, throw, and fall feels both funny and fierce. With every swing of your fist or kick of your leg, the laws of physics turn into your greatest ally—or worst enemy! The game offers two exciting modes: Single-Player Mode with multiple levels filled with unique challenges such as boxing, sword fights, and climbing duels, and PvP Mode for head-to-head 1v1 ragdoll showdowns. Equip powerful weapons like swords, staffs, and scythes to increase your damage output, but beware—your opponents can disarm you and turn your weapon against you at any moment! Use environmental hazards like spinning gears, launchers, and platform edges to achieve instant knockout victories. Master the physics-based movement and timing to dominate the arena in this hilarious and action-packed fighting game.',
  5.0,
  0,
  '2025-11-12',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- ============================================
-- 2. Ensure All Required Tags Exist
-- ============================================

INSERT INTO tags (slug, name, created_at)
VALUES
  ('stickman', 'Stickman', NOW()),
  ('action', 'Action', NOW()),
  ('fighting', 'Fighting', NOW()),
  ('physics', 'Physics', NOW()),
  ('ragdoll', 'Ragdoll', NOW()),
  ('adventure', 'Adventure', NOW()),
  ('casual', 'Casual', NOW()),
  ('shooting', 'Shooting', NOW()),
  ('battle', 'Battle', NOW()),
  ('skill', 'Skill', NOW()),
  ('unblocked', 'Unblocked', NOW()),
  ('browser', 'Browser', NOW()),
  ('2d', '2D', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('pvp', 'PvP', NOW())
ON CONFLICT (slug) DO NOTHING;

-- ============================================
-- 3. Create Game-Tag Associations
-- ============================================

INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'ragdoll-hit-stickman'
  AND t.slug IN (
    'stickman',
    'action',
    'fighting',
    'physics',
    'ragdoll',
    'adventure',
    'casual',
    'shooting',
    'battle',
    'skill',
    'unblocked',
    'browser',
    '2d',
    'arcade',
    'pvp'
  )
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- ============================================
-- 4. Add Initial Approved Comment
-- ============================================

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
  'ragdoll-hit-stickman',
  'PhysicsFan88',
  'physicsfan88@example.com',
  'Ragdoll Hit Stickman is absolutely hilarious! The physics-based combat makes every battle unpredictable and entertaining. I love how you can throw opponents into environmental hazards for instant knockouts. The PvP mode is incredibly fun with friends - we can''t stop laughing at the chaotic ragdoll movements. The weapon system adds great variety, and mastering the timing for grabs and throws feels so satisfying. This is easily one of the best physics-based fighting games I''ve played. The controls are simple but the skill ceiling is high, which keeps me coming back for more. Highly recommend for anyone who enjoys action games with a comedic twist!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

