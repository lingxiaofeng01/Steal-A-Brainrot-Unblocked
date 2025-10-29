-- Migration: Add Cheese Chompers 3D game
-- Date: 2025-10-29
-- Description: Insert game statistics, tags, and initial comment for Cheese Chompers 3D

-- Insert game statistics
INSERT INTO game_stats (slug, play_count, view_count, created_at, updated_at)
VALUES ('cheese-chompers-3d', 0, 0, NOW(), NOW())
ON CONFLICT (slug) DO UPDATE SET updated_at = NOW();

-- Insert or update tags
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Action', 'action', NOW()),
  ('Survival', 'survival', NOW()),
  ('Fast-paced', 'fast-paced', NOW()),
  ('Arena', 'arena', NOW()),
  ('Animal', 'animal', NOW()),
  ('3D', '3d', NOW()),
  ('Multiplayer', 'multiplayer', NOW()),
  ('Physics', 'physics', NOW())
ON CONFLICT (slug) DO NOTHING;

-- Link game with tags
INSERT INTO game_tags (game_slug, tag_slug, created_at)
SELECT 'cheese-chompers-3d', slug, NOW()
FROM tags
WHERE slug IN ('action', 'survival', 'fast-paced', 'arena', 'animal', '3d', 'multiplayer', 'physics')
ON CONFLICT (game_slug, tag_slug) DO NOTHING;

-- Add comment for Cheese Chompers 3D
INSERT INTO game_comments (
  game_slug, user_name, user_email, comment_text, rating, status, agreed_terms, created_at
)
VALUES (
  'cheese-chompers-3d', 
  'CheeseChampion', 
  'cheesechampion@example.com',
  'Cheese Chompers 3D is absolutely hilarious! The physics-based knockouts are so unpredictable and fun. I love how you can flip in mid-air to gain speed boosts - it adds a real skill element to the chaos. The arena battles are fast-paced and competitive, but even when you lose, the absurd physics keep you laughing. The remastered audio makes every impact feel satisfying. This game perfectly captures the spirit of Crazy Cattle 3D while adding its own unique rat-themed charm. Whether you''re playing casually or trying to master the advanced techniques, there''s always something new to discover. Highly recommend for anyone who loves chaotic multiplayer fun!',
  5, 
  'approved', 
  true, 
  NOW()
)
ON CONFLICT DO NOTHING;

