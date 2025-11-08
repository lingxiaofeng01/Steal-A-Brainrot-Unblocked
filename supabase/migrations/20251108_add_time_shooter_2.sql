-- Migration: Add Time Shooter 2 game
-- Date: 2025-11-08
-- Description: Insert Time Shooter 2 game, tags, and initial comment

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
  'time-shooter-2',
  'Time Shooter 2',
  'Master Time Control in This Epic Slow-Motion FPS Battle',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/time-shooter-2.webp',
  'https://html5.gamedistribution.com/rvvASMiM/62a72f2da7cb4b609579a47653546e6a/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2hvdGdhbWVzLmlvLyIsInBhcmVudERvbWFpbiI6ImhvdGdhbWVzLmlvIiwidG9wRG9tYWluIjoiaG90Z2FtZXMuaW8iLCJoYXNJbXByZXNzaW9uIjp0cnVlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE4In0%253D',
  'Time Shooter 2 is an intense first-person shooter that combines strategy, precision, and slow-motion combat. Inspired by SuperHot, this action-packed game challenges your reflexes and tactical thinking as time freezes when you stand still—and only flows when you move. Every step and shot counts in this unique world of frozen chaos.

In Time Shooter 2, you control both space and time. The rule is simple: time only moves when you move. This allows you to plan your actions, anticipate enemy attacks, and react with perfect timing. You''ll face armed opponents scattered across futuristic levels—some equipped with pistols, others with rifles or melee weapons. Every object can be turned into a weapon, giving you endless creative ways to eliminate threats.

Watch bullets hang in midair, analyze their trajectory, and decide your next move. Should you dodge, shoot, or throw something nearby? It''s all up to your timing and awareness. Time Shooter 2 transforms every encounter into a strategic puzzle where patience and precision are your greatest assets.

The game features minimalist visuals with a striking color palette that emphasizes the slow-motion mechanics. Enemies shatter into polygons when defeated, creating a satisfying visual feedback loop. Each level in Time Shooter 2 presents new challenges, from tight corridors to open arenas, forcing you to adapt your tactics constantly.

What makes Time Shooter 2 truly special is its accessibility combined with depth. Anyone can understand the core mechanic within seconds, but mastering the game requires practice, spatial awareness, and quick decision-making. Whether you''re dodging a hail of bullets or planning a multi-kill combo, every moment feels cinematic and empowering.

The physics engine in Time Shooter 2 is finely tuned to create realistic bullet trajectories and object interactions. When you throw a weapon or object, it follows a natural arc that you can predict and use to your advantage. Bullets travel in straight lines, allowing you to calculate safe zones and plan your movements accordingly.

Time Shooter 2 features innovative time-control mechanics where time only moves when you move. This creates a strategic gameplay experience unlike any other FPS. Every encounter is a tactical puzzle where you plan your moves, anticipate enemy actions, and execute with precision. The minimalist art style with bold colors makes the game easy to read and visually striking.

Use pistols, rifles, shotguns, and even thrown objects—every weapon in Time Shooter 2 has unique characteristics. Progress through increasingly difficult stages, each with unique layouts and enemy configurations. Unlock temporary boosts like invulnerability and unlimited ammo to overcome tough challenges.

Best of all, Time Shooter 2 is completely free to play in your browser. No downloads, no installations—just pure, unfiltered tactical action. Jump in now and discover why Time Shooter 2 has become a favorite among FPS enthusiasts worldwide!',
  5.0,
  0,
  '2025-11-08',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 2. Ensure all required tags exist in tags table
-- ============================================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('shooting', 'Shooting', NOW()),
  ('action', 'Action', NOW()),
  ('fps', 'FPS', NOW()),
  ('3d', '3D', NOW()),
  ('strategy', 'Strategy', NOW()),
  ('skill', 'Skill', NOW()),
  ('time-control', 'Time Control', NOW()),
  ('slow-motion', 'Slow Motion', NOW())
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 3. Associate game with tags in game_tags table (using UUID foreign keys)
-- ============================================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'time-shooter-2'
  AND t.slug IN ('shooting', 'action', 'fps', '3d', 'strategy', 'skill', 'time-control', 'slow-motion')
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
  'time-shooter-2',
  'TacticalGamer',
  'tactical.gamer@example.com',
  'Time Shooter 2 is absolutely mind-blowing! The time-control mechanic is so well-executed that every firefight feels like a scene from The Matrix. I love how you can freeze time by standing still and carefully plan your next move. Watching bullets hang in midair while you dodge and weave is incredibly satisfying. The minimalist graphics are perfect—they keep you focused on the action without any distractions. Each level presents a new tactical challenge, and I find myself replaying them to find the most efficient solutions. The variety of weapons and the ability to throw objects adds so much creativity to the combat. Whether you''re a fan of strategic shooters or just want to feel like an action hero, Time Shooter 2 delivers an unforgettable experience. Highly recommend this game to anyone looking for something unique in the FPS genre!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

