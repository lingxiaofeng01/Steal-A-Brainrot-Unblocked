-- =====================================================
-- Migration: Add Ski Frenzy Game
-- Date: 2025-11-12
-- Description: Insert Ski Frenzy game, tags, and initial comment
-- =====================================================

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
  'ski-frenzy',
  'Ski Frenzy',
  'Endless 3D Skiing Adventure with Animals, Stunts, and Avalanches',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/ski-frenzy.jpg',
  'https://yoplay.io/ski-frenzy.embed',
  'Race down snowy slopes in Ski Frenzy, an endless 3D skiing adventure filled with animals, stunts, and avalanches. Fast, unpredictable, and full of thrill. When the mountain wakes up angry, there''s no time to think. In Ski Frenzy, a sleepy skier named Evan (or Evana) finds himself ripped from the comfort of his warm blanket and thrown into chaos. One second, it''s peace and snowflakes, the next—an avalanche roars behind, and the only way out is down. This isn''t just another endless runner—it''s a test of instinct, rhythm, and nerve. Every slope in Ski Frenzy feels alive, every second a heartbeat closer to survival. This fast-paced survival game combines stunning 3D pixel visuals with unpredictable terrain that keeps players on edge. Ski Frenzy delivers an adrenaline-pumping experience where quick reflexes and smart decisions mean the difference between glory and defeat. Animals become unexpected allies—a penguin can turn into a living snowboard, an eagle offers a few seconds of freedom above the chaos, and the mighty Yeti crushes through rocks like they''re made of paper. Mastering when to ride them becomes the difference between glory and defeat. The mountain world opens gradually from Penguin Peaks to Jurassic Lark, Twister Canyon, Monster Mountain, and even Lunar Lookout where gravity itself becomes part of the challenge. Points don''t just come from distance—they come from nerve. Perfect spins, clean flips, and risky jumps multiply your score. The reward system favors boldness but punishes recklessness—miss a landing, and all that flash turns into a face full of snow. Ski Frenzy is completely unblocked and free to play in your browser—no downloads, no sign-ups, just pure skiing action.',
  5.0,
  0,
  '2025-11-12',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 2. Ensure all required tags exist in tags table
-- =====================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('sports', 'Sports', NOW()),
  ('skiing', 'Skiing', NOW()),
  ('action', 'Action', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('3d', '3D', NOW()),
  ('endless-runner', 'Endless Runner', NOW()),
  ('casual', 'Casual', NOW()),
  ('adventure', 'Adventure', NOW()),
  ('animals', 'Animals', NOW()),
  ('skill', 'Skill', NOW()),
  ('challenge', 'Challenge', NOW()),
  ('unblocked', 'Unblocked', NOW()),
  ('browser', 'Browser', NOW()),
  ('single-player', 'Single Player', NOW()),
  ('pixel', 'Pixel', NOW())
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 3. Link game with tags in game_tags table
-- ⚠️ IMPORTANT: Use UUID foreign keys, not slugs!
-- =====================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'ski-frenzy'
  AND t.slug IN (
    'sports',
    'skiing',
    'action',
    'arcade',
    '3d',
    'endless-runner',
    'casual',
    'adventure',
    'animals',
    'skill',
    'challenge',
    'unblocked',
    'browser',
    'single-player',
    'pixel'
  )
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- =====================================================
-- 4. Add initial approved comment to game_comments table
-- ⚠️ IMPORTANT: Field name is comment_text, not content!
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
  'ski-frenzy',
  'Sarah Mitchell',
  'sarah.mitchell.games@gmail.com',
  'Ski Frenzy is absolutely addictive! I started playing during my lunch break and couldn''t stop. The avalanche chasing you creates such intense pressure, but in a fun way. I love how the animal companions aren''t just cosmetic - the penguin actually helps you score more points, and the Yeti is a lifesaver when you''re about to crash into rocks. The different maps keep things interesting, and I''m still working on unlocking Lunar Lookout. The 3D pixel graphics are gorgeous - simple but effective. The controls are easy to learn but hard to master, especially when you''re trying to pull off stunts while dodging obstacles. My high score is 15,847 and I''m determined to break 20,000! Perfect game for quick sessions or long gaming marathons. Highly recommend to anyone who loves endless runners with a twist!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

-- =====================================================
-- Migration completed successfully
-- =====================================================

