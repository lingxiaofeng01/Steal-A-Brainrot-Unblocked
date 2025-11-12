-- =====================================================
-- Migration: Add Bottle Jump Game
-- Date: 2025-11-12
-- Description: Insert Bottle Jump game, tags, and comments
-- =====================================================

-- =====================================================
-- 1. Insert Game Record
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
  'bottle-jump',
  'Bottle Jump',
  'Master the Perfect Flip - Addictive Skill Game 2025',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/bottle-jump.png',
  'https://games.yoplay.io/bottle-jump/?v=1',
  'Dive into Bottle Jump, the frustratingly addictive skill game where perfect timing rules. Master the flip, conquer erratic physics, chase the high score in this ultimate bottle flipping challenge! Experience one-touch simplicity with four unique game modes: Classic endless mode, Bowling destruction, Speed Run adrenaline, and Stacking precision. Unlock awesome bottle skins with blue diamonds and compete on global leaderboards. The realistic physics engine creates unpredictable, challenging flips every time. Play this unblocked browser game anywhere, anytime. Perfect for quick sessions or extended gaming marathons. Simple to learn, impossible to master - that''s the Bottle Jump promise!',
  5.0,
  0,
  '2025-11-12',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 2. Ensure All Required Tags Exist
-- =====================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('casual', 'Casual', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('skill', 'Skill', NOW()),
  ('physics', 'Physics', NOW()),
  ('single-player', 'Single Player', NOW()),
  ('challenge', 'Challenge', NOW()),
  ('timing', 'Timing', NOW()),
  ('flip', 'Flip', NOW()),
  ('jump', 'Jump', NOW()),
  ('unblocked', 'Unblocked', NOW()),
  ('browser', 'Browser', NOW()),
  ('3d', '3D', NOW())
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 3. Link Game to Tags (Using UUID Foreign Keys)
-- =====================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'bottle-jump'
  AND t.slug IN (
    'casual',
    'arcade',
    'skill',
    'physics',
    'single-player',
    'challenge',
    'timing',
    'flip',
    'jump',
    'unblocked',
    'browser',
    '3d'
  )
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- =====================================================
-- 4. Add Featured Comment
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
  'bottle-jump',
  'FlipMaster_Alex',
  'alex.flipmaster@example.com',
  'Bottle Jump is absolutely addictive! I thought it would be a simple casual game, but the physics-based gameplay is incredibly challenging. The one-touch controls are deceptively simple - press and hold to charge, release to flip. But mastering the perfect timing to land upright on each platform? That takes serious skill! I''ve been playing for hours trying to beat my high score in Classic mode. The Speed Run mode is insane - my heart was racing the entire time! The Bowling mode is a fun change of pace where you just smash everything with maximum force. And Stacking mode requires surgical precision. The blue diamond currency system is great for unlocking new bottle skins. I''ve got the neon green bottle and the metal flask so far. The realistic physics engine makes every jump feel unique and unpredictable. Sometimes the bottle clips the edge and spins out, other times it lands perfectly. That inconsistency is what makes it so engaging - you never know if the next jump will succeed or fail. The 3D graphics are clean and minimalist, keeping you focused on the gameplay. Highly recommend this to anyone who loves skill-based arcade games. It''s the perfect "just one more try" game. Warning: extremely addictive! 10/10 would flip again!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

-- =====================================================
-- Migration Complete
-- =====================================================
-- Game: Bottle Jump
-- Tags: 12 tags linked
-- Comments: 1 featured comment added
-- =====================================================

