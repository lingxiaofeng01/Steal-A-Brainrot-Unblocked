-- Migration: Add Dude Theft Auto game
-- Created: 2025-10-27
-- Description: Adds Dude Theft Auto to game_stats table

-- Insert game stats for Dude Theft Auto
INSERT INTO game_stats (slug, play_count, view_count, last_played_at)
VALUES ('dude-theft-auto', 0, 0, NOW())
ON CONFLICT (slug) DO NOTHING;

-- Add game tags
INSERT INTO tags (name, slug, description)
VALUES 
  ('Action', 'action', 'Fast-paced action games'),
  ('Shooting', 'shooting', 'Shooting and combat games'),
  ('Simulation', 'simulation', 'Simulation games'),
  ('3D', '3d', '3D graphics games'),
  ('Multiplayer', 'multiplayer', 'Multiplayer games'),
  ('Physics', 'physics', 'Physics-based games'),
  ('Gun', 'gun', 'Gun-based games'),
  ('FPS', 'fps', 'First-person shooter games')
ON CONFLICT (slug) DO NOTHING;

-- Link game to tags
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'dude-theft-auto' AND t.slug IN ('action', 'shooting', 'simulation', '3d', 'multiplayer', 'physics', 'gun', 'fps')
ON CONFLICT (game_id, tag_id) DO NOTHING;

