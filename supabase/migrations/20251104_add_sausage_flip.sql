-- Migration: Add Sausage Flip game
-- Date: 2025-11-04
-- Description: Insert Sausage Flip game, tags, and initial comment

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
  'sausage-flip',
  'Sausage Flip',
  'The Ultimate Physics-Based Arcade Game - Flip Your Way to Victory',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/sausage-flip.png',
  'https://lnahtml.github.io/a6/sausage-flip',
  'Sausage Flip is a hilarious physics-based arcade game where you control a sausage with bulging eyes, performing epic flips to overcome obstacles and reach the finish line. Master timing, physics, and strategy in this addictive casual game! The game combines intuitive one-touch controls with realistic physics mechanics, creating an addictive experience that''s easy to learn but difficult to master. What makes Sausage Flip stand out is its perfect blend of humor and challenge. The quirky character design featuring a sausage with expressive eyes adds a comedic element to every flip and tumble. Each level presents new obstacles and challenges that require precise timing and strategic thinking to overcome. Play Sausage Flip now and experience the most entertaining physics arcade game available!',
  5.0,
  0,
  '2025-11-04',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- 2. Ensure all required tags exist in tags table
INSERT INTO tags (slug, name, created_at)
VALUES
  ('action', 'Action', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('physics', 'Physics', NOW()),
  ('casual', 'Casual', NOW()),
  ('skill', 'Skill', NOW()),
  ('funny', 'Funny', NOW()),
  ('timing', 'Timing', NOW())
ON CONFLICT (slug) DO NOTHING;

-- 3. Associate game with tags in game_tags table (using UUID foreign keys)
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'sausage-flip'
  AND t.slug IN ('action', 'arcade', 'physics', 'casual', 'skill', 'funny', 'timing')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- 4. Add initial themed comment to game_comments table
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
  'sausage-flip',
  'FlipMaster2024',
  'flipmaster@example.com',
  'Sausage Flip is absolutely hilarious and addictive! The physics-based gameplay is so satisfying when you nail a perfect flip. I love how each level introduces new obstacles like the spinning wheels and rocket cars - they really test your timing skills. The sausage character with those bulging eyes cracks me up every time it tumbles around. I''ve been trying to get 3 stars on all levels and it''s challenging but rewarding. The "Heavy" skin tip for fan levels is a game-changer! Highly recommend this game to anyone who enjoys physics puzzles with a comedic twist. Can''t stop flipping!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

