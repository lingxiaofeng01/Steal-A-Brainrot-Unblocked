-- Add FNaF Shooter game to game_stats table
-- Migration created: 2025-10-29

-- Insert game statistics
INSERT INTO game_stats (slug, play_count, view_count, created_at, updated_at)
VALUES (
  'fnaf-shooter',
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
  ('Horror', 'horror', NOW()),
  ('Shooting', 'shooting', NOW()),
  ('FNAF', 'fnaf', NOW()),
  ('Gun', 'gun', NOW()),
  ('FPS', 'fps', NOW()),
  ('Halloween', 'halloween', NOW())
ON CONFLICT (slug) DO NOTHING;

-- Link game with tags
INSERT INTO game_tags (game_slug, tag_slug, created_at)
SELECT 'fnaf-shooter', slug, NOW()
FROM tags
WHERE slug IN ('action', 'horror', 'shooting', 'fnaf', 'gun', 'fps', 'halloween')
ON CONFLICT (game_slug, tag_slug) DO NOTHING;

-- Add comment for FNaF Shooter
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
  'fnaf-shooter',
  'NightGuard',
  'nightguard@example.com',
  'FNaF Shooter is absolutely incredible! Finally, we get to fight back against those creepy animatronics instead of just hiding. The shooting mechanics are smooth and responsive, and the variety of weapons makes each encounter exciting. The atmosphere is perfectly dark and tense, just like the original FNAF games, but now with the added thrill of action-packed combat. I love how you can switch weapons on the fly to adapt to different situations. The energy management system adds a nice strategic element - you can''t just run and gun, you need to be smart about your movements. This is exactly what FNAF fans have been waiting for! Highly recommend for anyone who loves horror shooters or the FNAF franchise. 10/10 would hunt animatronics again!',
  5,
  'approved',
  true,
  NOW()
)
ON CONFLICT DO NOTHING;

