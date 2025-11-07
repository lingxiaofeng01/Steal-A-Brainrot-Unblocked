-- Migration: Add Granny Horror game
-- Date: 2025-11-07
-- Description: Insert Granny Horror game, tags, and initial comment

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
  'granny-horror',
  'Granny Horror',
  'Escape Granny''s Eerie House in Silence - A True Horror Experience',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/granny-horror.webp',
  'https://games.yoplay.io/granny-horror/?v=1',
  'Step into Granny Horror''s eerie house and try to escape in silence. Every sound can give you away. A true horror experience that tests your nerves and wits! There''s something timeless about fear that creeps slowly instead of jumping out. Granny Horror captures exactly that — a quiet, suffocating kind of terror that doesn''t need blood to make your pulse race. Created by team Yoplay.io and released in 2025, this online HTML5 survival horror lets players step into a nightmare where silence is survival. The player wakes up in a dark, locked room with only a faint flashlight on a dusty table. Their head aches, their heart pounds, and somewhere in the shadows, she waits — Granny. The goal is simple: escape her house within five days. The catch? She hears everything. Every floorboard creak, every object dropped can summon her in seconds. Inside the house, scattered items hold your way out — keys, codes, batteries, even a car engine. These are randomly placed in each game, making every attempt feel like a new nightmare. One mistake, one trap triggered, and you lose a day. Lose all five, and Granny wins. Every moment in the horror game feels like walking barefoot on shattered glass. The sound design turns silence into both a weapon and a warning. Each movement demands calculation — players listen not just for Granny''s slow, echoing footsteps, but for the whisper of a hinge or the sudden slam that tells you she''s already too close. Granny''s house is more than a prison; it''s a living puzzle filled with secrets. The main door, the old car in the garage, even the playhouse out back — each one hides a possible way out. But freedom doesn''t come easy. It takes sharp instincts, steady nerves, and a touch of cunning to outsmart the old woman with the razor-sharp hearing.',
  5.0,
  0,
  '2025-11-07',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 2. Ensure all required tags exist in tags table
-- ============================================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('horror', 'Horror', NOW()),
  ('survival', 'Survival', NOW()),
  ('3d', '3D', NOW()),
  ('escape', 'Escape', NOW()),
  ('adventure', 'Adventure', NOW()),
  ('action', 'Action', NOW()),
  ('single-player', 'Single Player', NOW())
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 3. Associate game with tags in game_tags table
-- ============================================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'granny-horror'
  AND t.slug IN ('horror', 'survival', '3d', 'escape', 'adventure', 'action', 'single-player')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- ============================================================================
-- 4. Add initial themed comment to game_comments table
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
  'granny-horror',
  'HorrorFan88',
  'horrorfan88@example.com',
  'Granny Horror is absolutely terrifying! The atmosphere is so tense and every sound makes my heart race. I love how the game doesn''t rely on cheap jump scares but builds real psychological horror. The five-day time limit adds so much pressure, and the random item placement means every playthrough feels fresh. I''ve tried escaping through the main door, the car, and even the playhouse, but Granny always seems to know where I am. The sound design is incredible - you can hear her footsteps echoing through the corridors, and it''s genuinely scary. This is one of the best free horror games I''ve played online. The 3D graphics are realistic and the controls are smooth. Highly recommend for anyone who loves survival horror games!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

-- ============================================================================
-- Verification queries (commented out - use these to verify the migration)
-- ============================================================================

-- Check if game was added
-- SELECT slug, title, rating FROM games WHERE slug = 'granny-horror';

-- Check tag associations
-- SELECT t.slug, t.name
-- FROM game_tags gt
-- JOIN tags t ON gt.tag_id = t.id
-- JOIN games g ON gt.game_id = g.id
-- WHERE g.slug = 'granny-horror';

-- Check comments
-- SELECT user_name, rating, LEFT(comment_text, 100) as preview
-- FROM game_comments
-- WHERE game_slug = 'granny-horror';

