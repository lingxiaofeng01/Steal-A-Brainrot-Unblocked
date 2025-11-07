-- Migration: Add Mad Pursuit game
-- Date: 2025-11-07
-- Description: Insert Mad Pursuit game, tags, and initial comment

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
  'mad-pursuit',
  'Mad Pursuit',
  'High-Speed Police Chase Game - Drive, Drift, and Escape',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/mad-pursuit.jpg',
  'https://games.yoplay.io/mad-pursuit/?v=1',
  'Mad Pursuit is a high-speed police chase game where you drive, drift, and escape while collecting coins to unlock powerful cars and upgrades. This free browser-based racing game delivers intense survival gameplay combined with skill challenges and endless runner mechanics. Players take on the role of a daring driver being chased by the police, trying to escape through various cities, industrial zones, racetracks, and even weather stations in outer space. The game features four distinct modes: Survival (survive pursuits on crowded roads), Racing (compete in speed races), Getaway Driver (escort criminals to escape gates), and Zones (space station with energy bomb-shooting police). With 50 customizable cars, global leaderboards, warm-tone graphics, and vivid lighting effects, Mad Pursuit offers endless replayability. Collect coins to unlock vehicles ranging from the free Stationer to the powerful Bad Karma. Master drifting, find shortcuts, and use boost power strategically to stay ahead of the law. The game supports online play directly on PC and web browsers, completely free and unblocked.',
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
  ('racing', 'Racing', NOW()),
  ('car', 'Car', NOW()),
  ('driving', 'Driving', NOW()),
  ('3d', '3D', NOW()),
  ('action', 'Action', NOW()),
  ('skill', 'Skill', NOW()),
  ('endless-runner', 'Endless Runner', NOW()),
  ('police-chase', 'Police Chase', NOW())
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 3. Associate game with tags in game_tags table
-- ============================================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'mad-pursuit'
  AND t.slug IN ('racing', 'car', 'driving', '3d', 'action', 'skill', 'endless-runner', 'police-chase')
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
  'mad-pursuit',
  'SpeedDemon88',
  'speeddemon88@example.com',
  'Mad Pursuit is absolutely addictive! The police chase mechanics are incredibly intense - you really feel the pressure when helicopters join the pursuit and police cars surround you from all sides. I love the variety of game modes. Survival mode is perfect for quick sessions, while Getaway Driver mode adds that extra layer of strategy with the escort missions. The four camera angles are super helpful - I usually use the high angle for overview but switch to frontal when navigating tight spaces. The car customization is fantastic! I''ve unlocked about 20 cars so far and each one feels different. The SPX system makes it easy to compare vehicles before buying. My favorite is the Hypervan - great balance of speed and handling. The warm-tone graphics with red and orange hues create such a unique atmosphere. Combined with the intense soundtrack and realistic sound effects (those police sirens!), it''s incredibly immersive. The coin collection system keeps you engaged, and the global leaderboards add great replay value. I''m currently ranked in the top 100 for weekly scores! Pro tip: Master the handbrake drift early - it''s essential for sharp turns and dodging obstacles. Also, don''t waste coins on every car; save up for the high-tier vehicles. This is easily one of the best free racing games I''ve played in a browser. No downloads, smooth performance, and genuinely thrilling gameplay. Highly recommend for anyone who loves high-speed chases and skill-based driving!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

-- ============================================================================
-- Verification queries (commented out - use these to verify the migration)
-- ============================================================================

-- Check if game was added
-- SELECT slug, title, rating FROM games WHERE slug = 'mad-pursuit';

-- Check tag associations
-- SELECT t.slug, t.name
-- FROM game_tags gt
-- JOIN tags t ON gt.tag_id = t.id
-- JOIN games g ON gt.game_id = g.id
-- WHERE g.slug = 'mad-pursuit';

-- Check comments
-- SELECT user_name, rating, LEFT(comment_text, 100) as preview
-- FROM game_comments
-- WHERE game_slug = 'mad-pursuit';

