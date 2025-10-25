-- ============================================
-- Add Top Speed Racing 3D Game
-- Date: 2025-10-25
-- ============================================

-- Insert game into game_stats table
INSERT INTO game_stats (slug, play_count, view_count, last_played_at, created_at, updated_at)
VALUES (
  'top-speed-racing-3d',
  81,
  0,
  NOW(),
  NOW(),
  NOW()
)
ON CONFLICT (slug) DO UPDATE SET
  play_count = EXCLUDED.play_count,
  updated_at = NOW();

-- Insert tags if they don't exist
INSERT INTO tags (slug, name) VALUES
  ('racing', 'Racing'),
  ('3d', '3D'),
  ('car', 'Car'),
  ('speed', 'Speed'),
  ('driving', 'Driving'),
  ('sports', 'Sports')
ON CONFLICT (slug) DO NOTHING;

-- Add a comment for Top Speed Racing 3D
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
  'top-speed-racing-3d',
  'SpeedDemon',
  'speeddemon@racing.com',
  'Top Speed Racing 3D is absolutely incredible! The graphics are stunning, the physics feel realistic, and the car customization is so deep. I have spent hours perfecting my dream car and racing on different tracks. The multiplayer mode is super competitive and the leaderboards keep me coming back. This is hands down the best browser-based racing game I have ever played. The controls are smooth, the tracks are diverse, and every race feels intense. Highly recommend to any racing fan!',
  5,
  'approved',
  true,
  NOW() - INTERVAL '2 days'
);

-- Verify the insertion
SELECT
  slug,
  play_count,
  view_count,
  created_at
FROM game_stats
WHERE slug = 'top-speed-racing-3d';

SELECT
  game_slug,
  user_name,
  comment_text,
  rating,
  status,
  created_at
FROM game_comments
WHERE game_slug = 'top-speed-racing-3d';

