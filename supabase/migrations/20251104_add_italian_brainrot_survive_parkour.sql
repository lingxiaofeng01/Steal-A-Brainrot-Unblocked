-- Migration: Add Italian Brainrot Survive Parkour game
-- Date: 2025-11-04
-- Description: Adds Italian Brainrot Survive Parkour game with tags, associations, and initial comment

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
  'italian-brainrot-survive-parkour',
  'Italian Brainrot Survive Parkour',
  'Master the Ultimate Meme Parkour Challenge',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/italian-brainrot-survive-parkour.webp',
  'https://html5.gamedistribution.com/rvvASMiM/5c5b89d12e404bf6a4979ae0c0c9a09c/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3RhZ2dhbWUuaW8vIiwicGFyZW50RG9tYWluIjoidGFnZ2FtZS5pbyIsInRvcERvbWFpbiI6InRhZ2dhbWUuaW8iLCJoYXNJbXByZXNzaW9uIjp0cnVlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE4In0%253D',
  'Italian Brainrot Survive Parkour offers a chaotic parkour experience where you have to overcome a series of bizarre obstacles inspired by the popular "Italian Brainrot" meme. The game is available on Steal A Brainrot Unblocked and is a unique combination of survival elements, fast pace, and absurd humor, making players both excited and laughing in each round.

In Italian Brainrot Survive Parkour, players are thrust into a world where internet culture meets extreme parkour challenges. Each level is designed with unpredictable obstacles that test your reflexes, timing, and strategic thinking. The game''s unique aesthetic draws from the viral "Italian Brainrot" meme phenomenon, creating an atmosphere that''s both familiar and delightfully absurd.

The gameplay mechanics of Italian Brainrot Survive Parkour are deceptively simple yet incredibly challenging. You''ll need to master the art of jumping, dodging, and using special abilities to navigate through increasingly difficult courses. Each obstacle presents a new challenge, from collapsing bridges to rotating pillars and shaking floors that require split-second decision-making.

What sets Italian Brainrot Survive Parkour apart from other parkour games is its integration of meme culture into every aspect of the gameplay. The characters, environments, and even the sound effects are all inspired by the most popular internet memes, creating a gaming experience that feels both contemporary and nostalgically familiar to anyone who''s spent time online.

Master four unique abilities in Italian Brainrot Survive Parkour: double-jump to reach high obstacles, freeze to safely pass through red light areas, bomb to destroy obstacles, and dash to speed across dangerous gaps. Collect coins to unlock hilarious characters inspired by internet memes, and challenge friends in 2-player mode for cooperative or competitive gameplay.

Whether you''re drawn to Italian Brainrot Survive Parkour for its meme-inspired aesthetics, challenging parkour mechanics, or multiplayer capabilities, the game offers something for everyone. Its accessibility makes it easy to pick up, while the depth of its mechanics ensures that mastery requires dedication and skill. Play Italian Brainrot Survive Parkour now and experience the perfect combination of internet culture and parkour action!',
  5.0,
  0,
  '2025-11-04',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 2. Ensure all required tags exist in tags table
-- ============================================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('2-player', '2 Player', NOW()),
  ('parkour', 'Parkour', NOW()),
  ('survival', 'Survival', NOW()),
  ('meme', 'Meme', NOW()),
  ('brainrot', 'Brainrot', NOW()),
  ('action', 'Action', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('skill', 'Skill', NOW()),
  ('multiplayer', 'Multiplayer', NOW())
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 3. Associate game with tags in game_tags table (using UUID foreign keys)
-- ============================================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'italian-brainrot-survive-parkour'
  AND t.slug IN (
    '2-player',
    'parkour',
    'survival',
    'meme',
    'brainrot',
    'action',
    'arcade',
    'skill',
    'multiplayer'
  )
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- ============================================================================
-- 4. Add initial themed comment to game_comments table
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
  'italian-brainrot-survive-parkour',
  'ParkourMaster2024',
  'parkourmaster@example.com',
  'Italian Brainrot Survive Parkour is absolutely insane! The combination of meme culture and parkour mechanics creates such a unique experience. I love how the game doesn''t take itself too seriously while still being incredibly challenging. The special abilities like double-jump and dash add so much depth to the gameplay - you really need to think strategically about when to use each one. The 2-player mode is perfect for competing with friends, and the unlockable characters are hilarious. Every level feels fresh with new obstacle combinations that keep you on your toes. The Italian Brainrot aesthetic is both funny and weirdly nostalgic if you''ve spent any time on social media. Definitely one of the most entertaining parkour games I''ve played in a while. The difficulty curve is perfect - starts accessible but gets genuinely challenging. Highly recommend for anyone who loves parkour games or meme culture!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

