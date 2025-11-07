-- Migration: Add Traffic Rally game
-- Date: 2025-11-07
-- Description: Insert Traffic Rally game, tags, and initial comment

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
  'traffic-rally',
  'Traffic Rally',
  'Dramatic 3D Highway Racing - Conquer Crowded Roads at Top Speed',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/traffic-rally.png',
  'https://html5.gamedistribution.com/rvvASMiM/0e8e3e3e3e3e3e3e3e3e3e3e/index.html',
  'Traffic Rally is a dramatic 3D driving game where you will have to overcome crowded roads, conquer checkpoints, and reach the finish line safely. Not only does it require speed, but Traffic Rally also demands flexible handling skills to avoid and overtake cars for maximum points. This free browser-based racing game delivers intense highway action combined with precision driving mechanics. Each level presents a new challenge where you must maintain top speed while keeping full control to dodge all obstacles and complete the race. Your score is determined by your speed, number of successful overtakings, and daring moves in opposite lanes. The more reckless you drive, the greater the reward, but a single collision can end it all! The game features realistic 3D graphics, reflective lighting, and smooth motion effects that make every race immersive. Traffic Rally offers a wide variety of vehicles, from sleek modern sports cars to powerful classic sedans, each with unique stats, handling, and color options. The main setting is a massive highway with four bustling lanes running through a glowing city. As you master your skills, you will unlock faster and more powerful cars to dominate even the toughest levels. The game supports online play directly on PC and web browsers, completely free and unblocked.',
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
  ('traffic', 'Traffic', NOW()),
  ('highway', 'Highway', NOW()),
  ('speed', 'Speed', NOW())
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 3. Associate game with tags in game_tags table
-- ============================================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'traffic-rally'
  AND t.slug IN ('racing', 'car', 'driving', '3d', 'action', 'traffic', 'highway', 'speed')
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
  'traffic-rally',
  'HighwayKing92',
  'highwayking92@example.com',
  'Traffic Rally is absolutely thrilling! The highway racing mechanics are incredibly realistic - you really feel the adrenaline rush when weaving through dense traffic at top speed. I love how the game rewards both speed and skill. The scoring system is brilliant: you get points for maintaining high velocity, but the real bonuses come from successful overtaking and those heart-pounding moments when you drive in the opposite lane. The risk-reward balance is perfect! The 3D graphics are stunning. The neon-lit city environment with reflective lighting on the highway creates such an immersive atmosphere. The four-lane highway feels alive with dynamic traffic patterns that keep every race fresh and challenging. I especially appreciate how the motion effects make acceleration feel incredibly smooth and realistic. The car variety is fantastic! I''ve unlocked about 15 vehicles so far, and each one handles differently. The sports cars are lightning fast but require precise control, while the sedans offer more stability for beginners. Being able to customize colors adds a nice personal touch. My current favorite is the red sports car - perfect balance of speed and handling for aggressive overtaking in Traffic Rally. The progressive difficulty is well-designed. Early levels let you learn the traffic patterns and master lane changes, but later stages throw denser traffic and faster vehicles at you. It really tests your reflexes and decision-making skills. The challenge keeps me coming back for more! The controls are incredibly responsive. The arrow keys make lane changes smooth and precise, which is crucial when you''re threading through tight gaps at high speed. I also love that braking is an option - knowing when to slow down is just as important as knowing when to floor it in Traffic Rally. Pro tips from my experience: Start by mastering smooth lane changes without sudden movements. Watch the traffic patterns ahead and plan your overtaking moves in advance. Use opposite lane driving sparingly - only when you have a clear view. And most importantly, focus on reaching checkpoints safely rather than just chasing maximum speed. This is easily one of the best free racing games available in browsers. No downloads, runs smoothly, and delivers genuine racing thrills. If you love highway racing, overtaking challenges, and testing your reflexes, Traffic Rally is a must-play. Highly recommended for anyone who enjoys high-speed driving games!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

-- ============================================================================
-- Verification queries (commented out - use these to verify the migration)
-- ============================================================================

-- Check if game was added
-- SELECT slug, title, rating FROM games WHERE slug = 'traffic-rally';

-- Check tag associations
-- SELECT t.slug, t.name
-- FROM game_tags gt
-- JOIN tags t ON gt.tag_id = t.id
-- JOIN games g ON gt.game_id = g.id
-- WHERE g.slug = 'traffic-rally';

-- Check comments
-- SELECT user_name, rating, LEFT(comment_text, 100) as preview
-- FROM game_comments
-- WHERE game_slug = 'traffic-rally';

