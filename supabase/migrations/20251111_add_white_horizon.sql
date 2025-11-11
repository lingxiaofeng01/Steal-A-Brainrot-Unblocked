-- =====================================================
-- Migration: Add White Horizon Game
-- Date: 2025-11-11
-- Description: Insert White Horizon game, tags, and comments
-- =====================================================

-- 1. Insert game record into games table
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
  'white-horizon',
  'White Horizon',
  'Master the Art of Skiing in This Rhythm-Based Mountain Adventure',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/white-horizon.jpg',
  'https://yoplay.io/white-horizon.embed',
  'White Horizon transforms skiing into a mesmerizing blend of rhythm and precision. Glide through dynamic weather conditions, unlock unique skiers, and master the delicate balance on endless snow-covered slopes. This captivating browser game emphasizes timing and environmental awareness over pure speed, creating a meditative skiing experience. Experience morning light, nighttime mystery, and challenging rain conditions that fundamentally change how you approach each run. The realistic physics engine accurately simulates weight, momentum, and snow resistance, making every jump and landing feel authentic. Progress through carefully designed levels with specific objectives, unlock diverse skiers with unique abilities, and upgrade your equipment to tackle increasingly difficult slopes. White Horizon rewards patience and precision, offering a refreshing take on skiing games that combines stunning visuals with deeply satisfying gameplay mechanics.',
  5.0,
  0,
  '2025-11-11',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- 2. Ensure all required tags exist in tags table
INSERT INTO tags (slug, name, created_at)
VALUES
  ('skiing', 'Skiing', NOW()),
  ('sports', 'Sports', NOW()),
  ('skill', 'Skill', NOW()),
  ('3d', '3D', NOW()),
  ('physics', 'Physics', NOW()),
  ('casual', 'Casual', NOW()),
  ('single-player', 'Single Player', NOW()),
  ('challenge', 'Challenge', NOW()),
  ('endless-runner', 'Endless Runner', NOW()),
  ('action', 'Action', NOW()),
  ('unblocked', 'Unblocked', NOW()),
  ('browser', 'Browser', NOW())
ON CONFLICT (slug) DO NOTHING;

-- 3. Link game with tags in game_tags table (using UUID foreign keys)
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'white-horizon'
  AND t.slug IN (
    'skiing',
    'sports',
    'skill',
    '3d',
    'physics',
    'casual',
    'single-player',
    'challenge',
    'endless-runner',
    'action',
    'unblocked',
    'browser'
  )
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- 4. Add featured comment to game_comments table
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
  'white-horizon',
  'SkiMaster_Alex',
  'alex.skiing@example.com',
  'White Horizon is absolutely mesmerizing! The way it captures the rhythm of skiing is unlike any other game I''ve played. The physics feel incredibly realistic - every jump, every landing, every turn feels authentic. I love how the weather changes throughout the game, adding new challenges and keeping things fresh. The progression system is perfectly balanced, and unlocking new skiers with different abilities adds great variety. The simple spacebar controls are deceptive - there''s so much depth in mastering the timing and rhythm. The visual design is stunning, especially the transition from day to night. This game rewards patience and precision over mindless speed, which is refreshing. The upgrade system gives you a real sense of progression, and the three-star level system keeps me coming back to perfect my runs. Highly recommend for anyone who enjoys skill-based games with beautiful aesthetics!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

-- =====================================================
-- End of Migration
-- =====================================================

