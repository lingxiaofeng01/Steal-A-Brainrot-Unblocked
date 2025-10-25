-- Migration: Add Spacebar Clicker 3 game
-- Created: 2025-10-25
-- Description: Adds Spacebar Clicker 3 game with tags and initial comment

-- Insert the game
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
  is_featured,
  is_active
) VALUES (
  'spacebar-clicker-3',
  'Spacebar Clicker 3',
  'Test Your Spacebar Speed - The Ultimate Clicking Challenge!',
  '/images/thumbnails/spacebar-clicker-3.webp',
  'https://1games.io/game/spacebar-clicker-3/',
  'The engaging race of the keys is back in full force with Spacebar Clicker 3! Start the non-stop experience with the superhero speed of your fingertips! Test your clicking speed, compete with friends, and become the ultimate spacebar champion in this addictive clicker game. Choose from multiple time modes (5, 10, 30, or 60 seconds), track your clicks per second (CPS), and compete on global leaderboards. Whether you''re training for esports or just want to test your clicking prowess, Spacebar Clicker 3 provides the perfect platform. With accurate tracking, detailed statistics, and competitive features, you can measure and improve your clicking speed over time. Can you achieve the coveted "Superhuman" rating with over 10 CPS? Or will you push even further to reach "Godlike" status? The game features a clean, distraction-free interface focused on performance, making it perfect for quick gaming sessions or serious training. Regular practice can significantly improve your CPS, developing better finger coordination, faster reflexes, and improved hand-eye coordination. Join thousands of players worldwide in the ultimate test of clicking speed!',
  4.7,
  129,
  '2025-10-25',
  false,
  true
) ON CONFLICT (slug) DO NOTHING;

-- Insert tags if they don't exist
INSERT INTO tags (slug, name) VALUES
  ('clicker', 'Clicker'),
  ('casual', 'Casual'),
  ('skill', 'Skill'),
  ('speed', 'Speed'),
  ('arcade', 'Arcade'),
  ('incremental', 'Incremental')
ON CONFLICT (slug) DO NOTHING;

-- Link game to tags
INSERT INTO game_tags (game_id, tag_id)
SELECT 
  g.id,
  t.id
FROM games g
CROSS JOIN tags t
WHERE g.slug = 'spacebar-clicker-3'
  AND t.slug IN ('clicker', 'casual', 'skill', 'speed', 'arcade', 'incremental')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- Add a sample comment for the game
INSERT INTO game_comments (
  game_slug,
  user_name,
  comment_text,
  rating,
  status,
  user_email,
  agreed_terms
)
VALUES (
  'spacebar-clicker-3',
  'SpeedDemon88',
  'This is the best spacebar clicking test I''ve ever used! I started at 6 CPS and after a week of practice, I''m now hitting 11 CPS consistently. The different time modes are perfect for training - I use the 5-second sprint to warm up, then move to the 30-second challenge for endurance. The real-time CPS counter is super accurate and the performance ratings really motivate you to improve. My friends and I have been competing all week and it''s become our go-to warm-up before gaming sessions. Highly recommend for anyone who wants to improve their clicking speed or just have some competitive fun!',
  5,
  'approved',
  'speeddemon88@example.com',
  true
) ON CONFLICT DO NOTHING;

