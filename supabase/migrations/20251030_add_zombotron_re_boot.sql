-- Add Zombotron Re-Boot game to game_stats table
-- Migration created: 2025-10-30

-- Insert game statistics
INSERT INTO game_stats (slug, play_count, view_count, created_at, updated_at)
VALUES (
  'zombotron-re-boot',
  0,
  0,
  NOW(),
  NOW()
)
ON CONFLICT (slug) DO UPDATE
SET 
  updated_at = NOW();

-- Insert or update tags
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Action', 'action', NOW()),
  ('Platform', 'platform', NOW()),
  ('2D', '2d', NOW()),
  ('Indie', 'indie', NOW()),
  ('Physics', 'physics', NOW()),
  ('Zombie', 'zombie', NOW()),
  ('Shooting', 'shooting', NOW()),
  ('Adventure', 'adventure', NOW())
ON CONFLICT (slug) DO NOTHING;

-- Link game with tags
INSERT INTO game_tags (game_slug, tag_slug, created_at)
SELECT 'zombotron-re-boot', slug, NOW()
FROM tags
WHERE slug IN ('action', 'platform', '2d', 'indie', 'physics', 'zombie', 'shooting', 'adventure')
ON CONFLICT (game_slug, tag_slug) DO NOTHING;

-- Add comment for Zombotron Re-Boot
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms,
  created_at
)
VALUES (
  'zombotron-re-boot',
  'PhysicsDestroyer',
  'physicsdestroyer@example.com',
  'Zombotron Re-Boot is an absolute masterpiece of physics-based action! The destructible environments completely change how you approach combat - instead of just shooting zombies, you can drop entire structures on them, create explosive chain reactions, and use the environment as your ultimate weapon. The variety of weapons keeps things fresh, and the limited ammo system forces you to think strategically about every encounter. I love how you can rescue survivors hidden throughout the levels, and the exploration aspect adds so much replay value. The remastered graphics look fantastic while maintaining that gritty, industrial horror aesthetic. The physics engine is incredibly satisfying - watching buildings collapse and barrels explode never gets old. Boss battles are challenging and require you to master all the game mechanics. This is easily one of the best zombie platformers I have ever played. If you enjoy games like Metal Slug or Contra but with modern physics and destructible environments, this is a must-play!',
  5,
  'approved',
  true,
  NOW()
)
ON CONFLICT DO NOTHING;


