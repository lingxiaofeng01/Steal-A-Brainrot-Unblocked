-- Migration: Add Tung Sahur Clicker game
-- Date: 2025-10-29
-- Description: Insert game statistics, tags, and initial comment for Tung Sahur Clicker

-- Insert game statistics
INSERT INTO game_stats (slug, play_count, view_count, created_at, updated_at)
VALUES ('tung-sahur-clicker', 0, 0, NOW(), NOW())
ON CONFLICT (slug) DO UPDATE SET updated_at = NOW();

-- Insert or update tags
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Clicker', 'clicker', NOW()),
  ('Casual', 'casual', NOW()),
  ('Funny', 'funny', NOW()),
  ('Idle', 'idle', NOW()),
  ('One Button', 'one-button', NOW()),
  ('Incremental', 'incremental', NOW()),
  ('Italian Brainrot', 'italian-brainrot', NOW())
ON CONFLICT (slug) DO NOTHING;

-- Link game with tags
INSERT INTO game_tags (game_slug, tag_slug, created_at)
SELECT 'tung-sahur-clicker', slug, NOW()
FROM tags
WHERE slug IN ('clicker', 'casual', 'funny', 'idle', 'one-button', 'incremental', 'italian-brainrot')
ON CONFLICT (game_slug, tag_slug) DO NOTHING;

-- Add comment for Tung Sahur Clicker
INSERT INTO game_comments (
  game_slug, user_name, user_email, comment_text, rating, status, agreed_terms, created_at
)
VALUES (
  'tung-sahur-clicker', 
  'ClickMaster88', 
  'clickmaster88@example.com',
  'Tung Sahur Clicker is pure comedic gold! The wooden warrior''s dance moves get more ridiculous with every upgrade, and I can''t stop laughing. The Italian Brainrot humor is on point - it''s absurd, silly, and absolutely addictive. I love how the limelight street corner transforms as you progress, and the 2x multiplier mechanic keeps me engaged during active sessions. The upgrade system is perfectly balanced - there''s always something new to unlock just around the corner. Whether I''m actively clicking or letting it idle, the progression feels rewarding. The skins and weather effects add so much personality to the game. This is easily one of the funniest clickers I''ve played. Highly recommend for anyone who loves idle games with a sense of humor!',
  5, 
  'approved', 
  true, 
  NOW()
)
ON CONFLICT DO NOTHING;

