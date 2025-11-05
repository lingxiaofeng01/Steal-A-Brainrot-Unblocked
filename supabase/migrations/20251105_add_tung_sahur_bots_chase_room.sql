-- Migration: Add Tung Sahur Bots Chase Room game
-- Date: 2025-11-05
-- Description: Adds the new game "Tung Sahur Bots Chase Room" with tags, categories, and initial comment

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
  'tung-sahur-bots-chase-room',
  'Tung Sahur Bots Chase Room',
  'Survive the Meme Horror Maze - Escape the Brainrot Bots',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/tung-sahur-bots-chase-room.jpg',
  'https://html5.gamedistribution.com/rvvASMiM/75a29a8124a64ef8a407c2d368479fa0/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2RyaXZlbWFkMy5pby8iLCJwYXJlbnREb21haW4iOiJkcml2ZW1hZDMuaW8iLCJ0b3BEb21haW4iOiJkcml2ZW1hZDMuaW8iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9',
  'Tung Sahur Bots Chase Room is a heart-pounding meme horror survival game where you must escape a nightmare backroom maze filled with unpredictable viral brainrot creatures. Navigate through endless corridors while being hunted by aggressive horror bots like Tung Tung Tung Tung Sahur, Tralalero Tralala Bots, and Bombardiro Crocodilo. Your mission is simple yet terrifying: survive the relentless chase and find the exit before the brainrot bots catch you. Use Arrow Keys or WASD to move through the complex maze, maintain maximum speed to outrun pursuers, and use tight corners to break line of sight. This meme horror experience combines viral internet culture with genuine survival horror mechanics, creating intense chase sequences that will keep your heart racing. The backroom environment features yellow-tinted walls, flickering lights, and an eerie atmosphere that enhances the horror experience. Each brainrot bot has unique hunting patterns and behaviors, requiring you to adapt your survival strategy. Learn the maze layout, identify safe paths, memorize escape routes, and listen for audio cues that signal approaching danger. Perfect for fans of horror games, meme culture, and survival challenges. Can you escape the Tung Sahur Bots Chase Room?',
  5.0,
  0,
  '2025-11-05',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 2. Ensure all required tags exist in tags table
-- ============================================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('action', 'Action', NOW()),
  ('horror', 'Horror', NOW()),
  ('survival', 'Survival', NOW()),
  ('skill', 'Skill', NOW()),
  ('meme', 'Meme', NOW()),
  ('brainrot', 'Brainrot', NOW()),
  ('maze', 'Maze', NOW()),
  ('chase', 'Chase', NOW()),
  ('arcade', 'Arcade', NOW())
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 3. Link game to tags using game_tags junction table
-- ============================================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'tung-sahur-bots-chase-room'
  AND t.slug IN ('action', 'horror', 'survival', 'skill', 'meme', 'brainrot', 'maze', 'chase', 'arcade')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- ============================================================================
-- 4. Ensure categories exist
-- ============================================================================
INSERT INTO categories (slug, name, description, icon)
VALUES
  ('action', 'Action', 'Fast-paced action games', 'Zap'),
  ('horror', 'Horror', 'Scary and thrilling horror games', 'Ghost')
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 5. Link game to categories
-- ============================================================================
INSERT INTO game_categories (game_id, category_id)
SELECT g.id, c.id
FROM games g, categories c
WHERE g.slug = 'tung-sahur-bots-chase-room'
  AND c.slug IN ('action', 'horror')
ON CONFLICT (game_id, category_id) DO NOTHING;

-- ============================================================================
-- 6. Add initial themed comment to game_comments table
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
  'tung-sahur-bots-chase-room',
  'HorrorGamer2025',
  'horrorgamer2025@example.com',
  'Tung Sahur Bots Chase Room is absolutely terrifying and hilarious at the same time! The combination of meme culture and genuine horror creates such a unique experience. I was laughing at the absurdity of being chased by Tung Sahur and Tralalero Tralala bots, but my heart was genuinely racing during the chase sequences. The backroom maze is incredibly well-designed with its yellow walls and eerie lighting - it really captures that liminal space horror vibe. What I love most is how each bot has different hunting patterns. The Tung Sahur bot is relentless and will corner you if you''re not careful, while the Bombardiro Crocodilo seems to patrol specific areas. Learning to recognize their audio cues has been crucial for my survival. The controls are simple (just WASD or Arrow Keys) but mastering the movement and using corners to break line of sight takes real skill. I''ve played this game dozens of times and each run feels different because of the randomized bot patterns. The replayability is insane! If you enjoy horror survival games with a meme twist, this is a must-play. Just be prepared for some serious jump scares and intense moments. My best tip: always keep moving and never underestimate the brainrot bots!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

-- ============================================================================
-- Migration completed successfully
-- ============================================================================

