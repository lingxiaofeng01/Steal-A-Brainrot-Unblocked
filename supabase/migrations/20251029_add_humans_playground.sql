-- Migration: Add Humans Playground game
-- Date: 2025-10-29
-- Description: Adds Humans Playground game stats, tags, and initial comment

-- Insert game statistics
INSERT INTO game_stats (slug, play_count, view_count, created_at, updated_at)
VALUES ('humans-playground', 0, 0, NOW(), NOW())
ON CONFLICT (slug) DO UPDATE SET updated_at = NOW();

-- Insert or update tags
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Action', 'action', NOW()),
  ('Adventure', 'adventure', NOW()),
  ('Simulation', 'simulation', NOW()),
  ('Physics', 'physics', NOW()),
  ('Sandbox', 'sandbox', NOW()),
  ('Ragdoll', 'ragdoll', NOW()),
  ('Creation', 'creation', NOW())
ON CONFLICT (slug) DO NOTHING;

-- Link game with tags
INSERT INTO game_tags (game_slug, tag_slug, created_at)
SELECT 'humans-playground', slug, NOW()
FROM tags
WHERE slug IN ('action', 'adventure', 'simulation', 'physics', 'sandbox', 'ragdoll', 'creation')
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
  'humans-playground', 
  'PhysicsExperimenter', 
  'physicsexperimenter@example.com',
  'Humans Playground is an absolute blast! The physics engine is incredibly realistic and satisfying. I''ve spent hours creating elaborate Rube Goldberg machines and testing different weapon combinations. The ragdoll physics make every experiment hilarious and unpredictable. Building custom robots and watching them battle is endlessly entertaining. The creative freedom is unmatched - you can literally do anything you imagine. Whether you want to create chaos or build intricate contraptions, this game delivers. The variety of tools and items keeps things fresh, and I''m constantly discovering new interactions. Perfect stress relief and creativity outlet. Highly recommended for anyone who loves sandbox games and physics simulations! ⭐⭐⭐⭐⭐', 
  5, 
  'approved', 
  true, 
  NOW()
)
ON CONFLICT DO NOTHING;

