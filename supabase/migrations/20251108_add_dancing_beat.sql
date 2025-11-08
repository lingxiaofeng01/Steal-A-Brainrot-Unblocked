-- Migration: Add Dancing Beat game
-- Date: 2025-11-08
-- Description: Insert Dancing Beat game, tags, and initial comment

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
  'dancing-beat',
  'Dancing Beat',
  'Master Rhythm and Timing in This Addictive Music Ball Game',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/dancing-beat.png',
  'https://azgames.io/dancing-beat.embed',
  'Dancing Beat is an exciting rhythm-based music game where you guide a ball through colorful mazes by clicking in sync with the beat. Test your timing, reflexes, and musical intuition across multiple themed worlds including tropical islands, deserts, jungles, and winter landscapes. Perfect your rhythm skills, unlock new levels, and enjoy catchy soundtracks in this addictive casual game. Play Dancing Beat free online now!',
  5.0,
  0,
  '2025-11-08',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 2. Ensure all required tags exist in tags table
-- =====================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('music', 'Music', NOW()),
  ('rhythm', 'Rhythm', NOW()),
  ('casual', 'Casual', NOW()),
  ('skill', 'Skill', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('kids', 'Kids', NOW()),
  ('timing', 'Timing', NOW()),
  ('ball', 'Ball', NOW())
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 3. Associate game with tags in game_tags table
-- ⚠️ IMPORTANT: Use UUID foreign keys, not slugs!
-- =====================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'dancing-beat'
  AND t.slug IN ('music', 'rhythm', 'casual', 'skill', 'arcade', 'kids', 'timing', 'ball')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- =====================================================
-- 4. Add themed comment to game_comments table
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
  'dancing-beat',
  'RhythmMaster88',
  'rhythmmaster88@example.com',
  'Dancing Beat is absolutely fantastic! As someone who loves rhythm games, this one really hits all the right notes. The way the music syncs perfectly with the gameplay is incredible - every click feels satisfying when you nail the timing. I started on the tropical island world and thought it was easy, but by the time I reached the winter wonderland, I was seriously challenged! The difficulty progression is perfect. What I love most is how the game forces you to really feel the music rather than just watching the path. Playing with headphones makes such a huge difference - you can anticipate the turns just by listening to the beat. The colorful graphics are gorgeous and each themed world has its own unique vibe. My favorite is the jungle world with its fast-paced tribal beats. Pro tip: don''t rush! Take your time to learn the rhythm pattern of each level. This game is perfect for quick gaming sessions or long play marathons. Highly recommend to anyone who enjoys music games or wants to improve their timing skills!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

