-- Migration: Add Billiards Master game
-- Date: 2025-11-22
-- Description: Adds Billiards Master game with tags, associations, and initial comment

-- ============================================================================
-- 1. Insert game record into games table
-- ============================================================================
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
  'billiards-master',
  'Billiards Master',
  'The Most Realistic 3D Billiards Game For PC - The Ultimate Experience Like Playing In Real Life',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/billiards-master.png',
  'https://game.azgame.io/billiards-master/',
  'Billiards Master is one of the most realistic and appealing billiards (pool) games today, designed for PC. With sharp 3D graphics, accurate physics, and a wide variety of game modes, the game brings the experience of holding a cue right on a real table. Whether you are a casual player or a professional player, Billiards Master will surely fascinate you from the first shots. This highly realistic billiards simulation game brings the sensation of hitting the ball, adjusting the angle, controlling the force, and creating spin just like in real life. Players can take part in 1vs1 matches, play against the computer, or try their hand at a series of challenge modes for all levels. The game offers many popular billiard modes including 8-ball, 9-ball, UK 8-ball, Snooker, Time Trial, Matrix Mode, and Practice Mode. Each mode offers a different way of playing, suitable for both practice and competition. There is no "luck" in Billiards Master—every shot depends on hit angle, hand strength, spin (spin/English), and ability to judge the path of the ball. The Time Trial mode offers a dramatic time race where you have 4 minutes to score as many points as possible. Continuous Pocket increases your Multiplier, and High Multiplier means more points plus more time. The unique Matrix Mode features a unique scoring method where hitting the right ball will help you explode your score, but hitting just one ball wrong can make you lose immediately. The Practice Mode is the perfect mode to relax or practice your technique without pressure. Billiards Master is playable on school or work networks as an unblocked game, requiring no downloads or installations—just open your browser and start playing immediately.',
  5.0,
  0,
  '2025-11-22',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 2. Ensure all required tags exist in tags table
-- ============================================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('sport', 'Sport', NOW()),
  ('skill', 'Skill', NOW()),
  ('3d', '3D', NOW()),
  ('casual', 'Casual', NOW()),
  ('simulation', 'Simulation', NOW()),
  ('pool', 'Pool', NOW()),
  ('billiards', 'Billiards', NOW()),
  ('physics', 'Physics', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('unblocked', 'Unblocked', NOW()),
  ('browser', 'Browser', NOW()),
  ('single-player', 'Single Player', NOW()),
  ('multiplayer', 'Multiplayer', NOW()),
  ('strategy', 'Strategy', NOW())
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 3. Associate game with tags in game_tags table
-- ============================================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'billiards-master'
  AND t.slug IN (
    'sport',
    'skill',
    '3d',
    'casual',
    'simulation',
    'pool',
    'billiards',
    'physics',
    'arcade',
    'unblocked',
    'browser',
    'single-player',
    'multiplayer',
    'strategy'
  )
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- ============================================================================
-- 4. Add initial comment to game_comments table
-- ============================================================================
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
  'billiards-master',
  'PoolShark_Pro',
  'poolshark@example.com',
  'Billiards Master is hands down the most realistic pool game I''ve played in a browser! The physics are incredibly accurate - the way the balls react to spin and power feels just like playing on a real table. I love that there are so many game modes to choose from. The 8-ball and 9-ball modes are perfect for traditional pool practice, while the Time Trial mode adds an exciting competitive edge that keeps me coming back. The Matrix Mode is absolutely brilliant - it''s like a puzzle game mixed with billiards, where you have to think strategically about which ball to pocket next to maximize your score multiplier. One wrong shot and your score gets divided instead of multiplied! The controls are intuitive once you get the hang of them. Being able to apply spin by dragging the mouse on the cue ball gives you so much control over shot placement. The Practice Mode is fantastic for experimenting with different techniques without any pressure. I''ve been using it to perfect my bank shots and English control. The fact that this runs smoothly in the browser without any downloads is amazing. I can play during my lunch break at work since it''s unblocked. The graphics are sharp and the 3D perspective makes it easy to line up shots. This is a must-play for any billiards fan or anyone looking to improve their pool skills!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

-- ============================================================================
-- Migration completed successfully
-- ============================================================================

