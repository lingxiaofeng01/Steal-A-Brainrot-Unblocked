-- Migration: Add Obby Prison Escape Speed game
-- Created: 2025-11-10
-- Description: Adds Obby Prison Escape Speed game with tags, associations, and initial comment

-- =====================================================
-- 1. Insert game record into games table
-- =====================================================
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
  'obby-prison-escape-speed',
  'Obby Prison Escape Speed',
  'Fast-Paced Prison Break Parkour Adventure - Test Your Speed and Reflexes!',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/obby-prison-escape-speed.jpg',
  'https://html5.gamemonetize.co/5v60c88pl81kvr27x3xp89qhpelm6va2/',
  'Break out at full sprint in Obby Prison Escape Speed, a fast reflex-driven obby game. Dash past guards, outrun rising bubble waves, time your jumps on disappearing floors, and avoid hungry sharks as the course gets tougher with every stage. This is a pure test of speed, timing, and focus. Train your reaction, tighten your movement, and push for cleaner runs. Compete with friends by chasing personal records and see how far consistent, mistake-free play can take you. Only the most attentive runners reach the end. Obby Prison Escape Speed features gradually increasing obby stages from easy to expert difficulty, multiple traps including guards, bubbles, sharks, and disappearing tiles. The smooth controls are optimized for both desktop and mobile devices. Progress tracking and replay options help you improve your time and master the game. Early levels are simple, but later ones demand precise jumps and perfect timing. The difficulty scales smoothly as you progress through the prison break adventure. Keep moving forward without hesitation to survive the bubble wave, skip optional collectibles and use high ground whenever possible. Long stages include checkpoints so you can retry from the last safe zone. Play it directly at StealabrainrotUnblocked without downloads or restrictions - completely unblocked! Whether you are looking for a quick gaming session or an extended speed-running challenge, Obby Prison Escape Speed delivers an unforgettable parkour adventure that will test your limits and reward your dedication. Master the speed-running mechanics, learn obstacle patterns, commit to a clean line, and chain jumps to maintain momentum. The progressive difficulty system ensures players of all skill levels can enjoy while being challenged. Compete and improve your skills by tracking completion times and challenging friends to beat your records!',
  5.0,
  0,
  '2025-11-10',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 2. Ensure all required tags exist in tags table
-- =====================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('obby', 'Obby', NOW()),
  ('parkour', 'Parkour', NOW()),
  ('action', 'Action', NOW()),
  ('adventure', 'Adventure', NOW()),
  ('escape', 'Escape', NOW()),
  ('prison', 'Prison', NOW()),
  ('3d', '3D', NOW()),
  ('platformer', 'Platformer', NOW()),
  ('running', 'Running', NOW()),
  ('skill', 'Skill', NOW())
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 3. Associate game with tags in game_tags table
-- =====================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'obby-prison-escape-speed'
  AND t.slug IN ('obby', 'parkour', 'action', 'adventure', 'escape', 'prison', '3d', 'platformer', 'running', 'skill')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- =====================================================
-- 4. Add initial themed comment to game_comments table
-- =====================================================
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
  'obby-prison-escape-speed',
  'SpeedRunner_Mike',
  'speedrunner.mike@example.com',
  'Obby Prison Escape Speed is absolutely incredible! The speed-running mechanics are so well-designed and the difficulty progression is perfect. I love how each stage introduces new challenges - the guards keep you on your toes, the bubble waves add urgency, and those disappearing floors really test your timing. The shark sections are intense! I have been playing for hours trying to beat my personal records. The controls feel super responsive on both PC and mobile. The checkpoint system is a lifesaver on the longer stages. This is easily one of the best obby games I have played. The prison break theme is executed perfectly with great visuals and smooth animations. Highly recommend to anyone who loves parkour games and speed-running challenges. Can not wait to see what times other players achieve!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

-- =====================================================
-- Migration completed successfully
-- =====================================================

