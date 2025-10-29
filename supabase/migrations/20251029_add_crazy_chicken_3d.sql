-- Migration: Add Crazy Chicken 3D game
-- Date: 2025-10-29
-- Description: Adds Crazy Chicken 3D game stats, tags, and initial comment

-- Insert game statistics
INSERT INTO game_stats (slug, play_count, view_count, created_at, updated_at)
VALUES ('crazy-chicken-3d', 0, 0, NOW(), NOW())
ON CONFLICT (slug) DO UPDATE SET updated_at = NOW();

-- Insert or update tags
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Action', 'action', NOW()),
  ('Survival', 'survival', NOW()),
  ('Physics', 'physics', NOW()),
  ('Battle Royale', 'battle-royale', NOW()),
  ('Animal', 'animal', NOW()),
  ('Crazy Cattle 3D', 'crazy-cattle-3d', NOW())
ON CONFLICT (slug) DO NOTHING;

-- Link game with tags
INSERT INTO game_tags (game_slug, tag_slug, created_at)
SELECT 'crazy-chicken-3d', slug, NOW()
FROM tags
WHERE slug IN ('action', 'survival', 'physics', 'battle-royale', 'animal', 'crazy-cattle-3d')
ON CONFLICT (game_slug, tag_slug) DO NOTHING;

-- Add initial comment
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
  'crazy-chicken-3d', 
  'ChickenChampion', 
  'chickenchampion@example.com',
  'Crazy Chicken 3D is absolutely hilarious and addictive! The physics-based combat is so satisfying - watching chickens tumble and crash into each other never gets old. I love how each location has its own unique challenges and hazards. The fact that there are no power-ups makes it a true test of skill, which I really appreciate. The controls are simple but mastering the timing and momentum takes practice. I''ve spent hours battling across Ireland, Egypt, and the other locations. The secret levels are a great bonus for dedicated players. The game strikes a perfect balance between casual fun and competitive gameplay. Whether I''m playing for 5 minutes or an hour, it''s always entertaining. Highly recommend for anyone who loves battle royale games with a quirky twist! ⭐⭐⭐⭐⭐', 
  5, 
  'approved', 
  true, 
  NOW()
)
ON CONFLICT DO NOTHING;

