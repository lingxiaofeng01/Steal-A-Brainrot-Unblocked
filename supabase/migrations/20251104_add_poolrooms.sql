-- Migration: Add Poolrooms game
-- Created: 2025-11-04
-- Description: Adds Poolrooms game with tags and initial comment

-- =============================================
-- 1. Insert game record into games table
-- =============================================
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
  'poolrooms',
  'Poolrooms',
  'Experience Creative Rhythm Games Online',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/poolrooms.png',
  'https://thatsnotmyneighbor.org/poolrooms.embed',
  'Poolrooms is a one-of-a-kind rhythm game where combining characters and sounds is the main way players create their own beats. With easy yet very creative gameplay, this game allows players to relax and simultaneously challenge their mixing skills. Every character you decide to pick will give a different sound layer to the overall music. Players can change the characters'' positions to create different rhythms, experiment with timing and beats to compose unique music, and explore many musical styles in just a few minutes of play. The minimalist graphics allow players to focus completely on creating music without being distracted by complex visuals. You don''t need to install anything - just visit the website and start playing right away in your browser. It''s ideal for people who want to unwind after school or work, players who love to create music quickly without complicated software, and people eager to challenge their mixing skills and discover new beats. Poolrooms is not just a rhythm game but also a musical experiment tool, offering unlimited creative possibilities for music creation.',
  5.0,
  0,
  '2025-11-04',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- =============================================
-- 2. Ensure all required tags exist in tags table
-- =============================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('horror', 'Horror', NOW()),
  ('casual', 'Casual', NOW()),
  ('music', 'Music', NOW()),
  ('spooky', 'Spooky', NOW()),
  ('rhythm', 'Rhythm', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('exploration', 'Exploration', NOW())
ON CONFLICT (slug) DO NOTHING;

-- =============================================
-- 3. Associate game with tags in game_tags table
-- =============================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'poolrooms'
  AND t.slug IN ('horror', 'casual', 'music', 'spooky', 'rhythm', 'arcade', 'exploration')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- =============================================
-- 4. Add initial themed comment to game_comments table
-- =============================================
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
  'poolrooms',
  'MusicMixer_Alex',
  'alex.music@example.com',
  'Poolrooms is absolutely mesmerizing! The way you can layer different sounds by simply dragging characters around is genius. I spent over an hour just experimenting with different combinations, and every mix I created felt unique and personal. The minimalist design really helps you focus on the music itself without any distractions. What I love most is how accessible it is - no complicated DAW software, no steep learning curve, just pure creative fun. The atmospheric visuals add this eerie, liminal space vibe that somehow makes the music creation process even more immersive. Whether you''re into ambient soundscapes or upbeat rhythms, Poolrooms gives you the tools to create whatever you imagine. It''s become my go-to game for relaxing after work. Highly recommend to anyone who loves music or just wants a unique, creative gaming experience!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

