-- Migration: Add Drift Fury game
-- Created: 2025-11-12
-- Description: Adds Drift Fury racing game with tags and initial comment

-- ============================================================
-- 1. Insert game record
-- ============================================================
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
  'drift-fury',
  'Drift Fury',
  'Master the Art of Drifting in This Ultimate 3D Racing Experience',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/drift-fury.jpg',
  'https://html5.gamemonetize.co/79uga2q05rkfv5vl6mt8ptr2bu5aduv3/',
  'Drift Fury is the ultimate speed racing game that delivers an exhilarating visual feast for drift enthusiasts. Experience the thrill of driving supercars through stunning natural landscapes while mastering advanced drifting techniques. Developed by FreezeNova, Drift Fury offers an engaging experience thanks to its realistic physics design, detailed 3D environment, and smart reward system.

One of the unique elements that makes Drift Fury stand out is the combination of speed and natural scenery. Instead of dry metal tracks, you will be able to slide your wheels through winding curves located between pine forests, hills, and misty fog. This makes each drift more poetic while helping to reduce the boredom that often appears in repetitive racing games.

The highlight of Drift Fury is the drift chain reward mechanism called the Triple Drift Bonus system. If you maintain the drifting technique for long enough without losing control, a combo bar will pop up that allows you to multiply your score by three. This forces players to manage risk – should you stop drifting to be safe, or continue drifting and risk crashing into the curb?

Unlike many racing games that focus purely on acceleration, Drift Fury evaluates the skill of keeping the car balanced when cornering. Good players know when to use the brakes, when to use nitro, and especially know how to let go to drift smoothly instead of forcing the car to slide too much. The physics engine rewards finesse over brute force.

Drift Fury features multiple game modes including Drift Mode for free practice, Race Mode with 10 head-to-head races, and an Achievements System with 20 challenging missions. Complete all achievements to unlock the legendary Lamborghini Huracan supercar. The game features vehicles inspired by iconic cars like BMW i8, McLaren P1, and Lamborghini Huracan, each with unique handling characteristics.

Master the art of drifting in Drift Fury and become a legend on the scenic mountain roads. Chain your drifts, activate the Triple Drift Bonus, and dominate the leaderboards in this browser-based racing masterpiece.',
  5.0,
  0,
  '2025-11-12',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- ============================================================
-- 2. Ensure all required tags exist
-- ============================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('racing', 'Racing', NOW()),
  ('driving', 'Driving', NOW()),
  ('3d', '3D', NOW()),
  ('drift', 'Drift', NOW()),
  ('car', 'Car', NOW()),
  ('sports', 'Sports', NOW()),
  ('skill', 'Skill', NOW()),
  ('action', 'Action', NOW()),
  ('casual', 'Casual', NOW()),
  ('unblocked', 'Unblocked', NOW()),
  ('browser', 'Browser', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('speed', 'Speed', NOW()),
  ('simulation', 'Simulation', NOW()),
  ('adventure', 'Adventure', NOW())
ON CONFLICT (slug) DO NOTHING;

-- ============================================================
-- 3. Link game with tags
-- ============================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'drift-fury'
  AND t.slug IN (
    'racing',
    'driving',
    '3d',
    'drift',
    'car',
    'sports',
    'skill',
    'action',
    'casual',
    'unblocked',
    'browser',
    'arcade',
    'speed',
    'simulation',
    'adventure'
  )
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- ============================================================
-- 4. Add initial featured comment
-- ============================================================
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
  'drift-fury',
  'DriftKing_Mike',
  'driftking.mike@racingpro.com',
  'Drift Fury is hands down the best browser-based drifting game I''ve ever played! The physics feel incredibly realistic - every drift requires actual skill and timing, not just button mashing. I love how the Triple Drift Bonus system rewards you for taking risks and chaining corners together. The natural scenery is absolutely gorgeous too, racing through pine forests and mountain passes beats boring city tracks any day. I''ve been grinding to unlock the Lamborghini Huracan and I''m almost there! The achievement system keeps me coming back for more. Each car handles differently which adds so much replay value. Pro tip: don''t spam the handbrake, learn to drift naturally by releasing throttle and counter-steering. This game has serious depth once you master it. Highly recommend for anyone who loves racing games or wants to learn proper drifting techniques. 10/10 would drift again!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

