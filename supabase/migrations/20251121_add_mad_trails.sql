-- Migration: Add Mad Trails game
-- Date: 2025-11-21
-- Description: Adds Mad Trails game with tags, associations, and initial comment

-- ============================================================================
-- 1. Insert game record into games table
-- ============================================================================
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
  'mad-trails',
  'Mad Trails',
  'Master Physics-Based Terrain Climbing in This Ultimate Driving Challenge',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/mad-trails.png',
  'https://yoplay.io/mad-trails.embed',
  'Mad Trails is the ultimate physics driving test where players master micro-throttle control and soft-wheel dynamics to conquer rugged hills. This browser-based HTML5 game seamlessly blends driving, climbing, and light racing elements into a continuous, forward-moving experience. The car doesn''t glide—it bends, sinks, and wiggles. The wheels deform as if made of compressed jelly, gripping onto uneven ground in a way that gives this 3D game its unusual charm. Unlike traditional racing games that prioritize speed, Mad Trails rewards patience, precision, and understanding of vehicle physics. The terrain tells its own story—wheels press into the surface, sometimes sinking, bouncing upward as if the road is breathing beneath the car. When you pull off impressive maneuvers like circular flips or hard nose hits, Mad Trails acknowledges your skill with congratulatory messages. The upgrade system allows you to enhance Tires, Hull, Engine, Protection, and Fuel Tank. Each upgrade meaningfully changes vehicle performance—a stronger engine can pull weight through sharp climbs, tougher tyres dig deeper into unstable ground, and extra protection often decides whether a rough landing is a setback or a total wipeout. The game uses a run-based structure with finish lines and visible progression markers. Momentum is critical: push too hard and the car flips, but hesitate too long and the incline wins. Difficulty grows organically as climbs become higher and sharper, gaps widen, and precision matters more. Mad Trails is playable on school or work networks as an unblocked game, requiring no downloads or installations—just open your browser and start climbing immediately.',
  5.0,
  0,
  '2025-11-21',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 2. Ensure all required tags exist in tags table
-- ============================================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('racing', 'Racing', NOW()),
  ('driving', 'Driving', NOW()),
  ('physics', 'Physics', NOW()),
  ('car', 'Car', NOW()),
  ('action', 'Action', NOW()),
  ('skill', 'Skill', NOW()),
  ('3d', '3D', NOW()),
  ('casual', 'Casual', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('unblocked', 'Unblocked', NOW()),
  ('browser', 'Browser', NOW()),
  ('adventure', 'Adventure', NOW()),
  ('simulation', 'Simulation', NOW()),
  ('climbing', 'Climbing', NOW()),
  ('upgrade', 'Upgrade', NOW())
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 3. Associate game with tags in game_tags table
-- ============================================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'mad-trails'
  AND t.slug IN (
    'racing',
    'driving',
    'physics',
    'car',
    'action',
    'skill',
    '3d',
    'casual',
    'arcade',
    'unblocked',
    'browser',
    'adventure',
    'simulation',
    'climbing',
    'upgrade'
  )
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- ============================================================================
-- 4. Add initial comment to game_comments table
-- ============================================================================
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
  'mad-trails',
  'PhysicsDriver_88',
  'physicsdriver@example.com',
  'Mad Trails is an absolute gem for anyone who loves physics-based driving games! The soft-wheel mechanics are incredibly satisfying - watching the tires deform and grip the terrain feels so realistic. I''ve spent hours trying to master the perfect throttle control on steep climbs. The upgrade system is well-balanced; you really need to think strategically about whether to invest in engine power or tire grip first. I love how the game rewards patience and precision over just mashing the accelerator. The terrain variety keeps things fresh - every new level presents unique challenges that require different approaches. The trick recognition system is a nice touch - getting congratulated for pulling off a perfect flip never gets old! The fact that it runs smoothly in the browser without any downloads is amazing. Perfect for quick sessions during breaks, but addictive enough to keep you playing for hours. The difficulty curve is spot-on - challenging but never frustrating. Highly recommend to anyone who enjoys Hill Climb Racing or similar physics climbers. This is easily one of the best unblocked driving games I''ve played!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

-- ============================================================================
-- Migration completed successfully
-- ============================================================================

