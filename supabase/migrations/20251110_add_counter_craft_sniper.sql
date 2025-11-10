-- Migration: Add Counter Craft Sniper game
-- Created: 2025-11-10
-- Description: Adds Counter Craft Sniper game with tags, associations, and initial comment

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
  'counter-craft-sniper',
  'Counter Craft Sniper',
  'Defend the City from Minecraft-Style Zombie Invasion',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/counter-craft-sniper.webp',
  'https://games.builds.gamepix.com/2TCNCE/34TTAyMIepyTZezGFj2ZtT6cQ0U/index.html?sid=e4515&lang=zh&namespace=counter-craft-sniper',
  'Counter Craft Sniper is a thrilling first-person shooter that combines tactical sniping with blocky Minecraft-style enemies. Step into the boots of an elite sniper assigned to defend a city overrun by hostile mobs—creepers, skeletons, and zombies. Your mission: eliminate every threat before the invasion spreads across the streets.

From rooftops and elevated positions, you''ll have a clear view of the battlefield. Precision and timing are key—missing a shot could mean letting a zombie reach the civilians below. Stay calm, keep your crosshairs steady, and deliver clean headshots to keep the chaos under control. The game''s realistic ballistics and smooth shooting mechanics make every shot count.

As waves of enemies swarm the city, you''ll need to adapt quickly. Some mobs move fast, while others explode or attack from afar. Your sniper rifle, grenades, and melee attacks are your main line of defense, so use every tool wisely to survive. The combination of strategic positioning and quick reflexes creates an addictive gameplay loop.

What sets Counter Craft Sniper apart is its unique blend of tactical FPS gameplay with the familiar blocky aesthetic of Minecraft. The voxel-based graphics create a distinctive visual style that''s both nostalgic and fresh. Whether you''re a fan of precision shooting games or Minecraft-inspired adventures, Counter Craft Sniper delivers an experience that satisfies both cravings.

The game features multiple urban environments to defend, each with its own strategic vantage points and challenges. From downtown skyscrapers to suburban neighborhoods, every location requires different tactics and approaches. Master the art of long-range combat while managing your ammunition and staying alert for surprise attacks.

Counter Craft Sniper isn''t just about shooting—it''s about survival strategy. You''ll need to prioritize targets, manage resources, and make split-second decisions under pressure. The escalating difficulty ensures that even experienced players will find themselves challenged as enemy waves become more aggressive and unpredictable.

Game Features:
• Intense FPS gameplay with smooth controls and realistic ballistics
• Minecraft-style blocky graphics with distinctive visual style
• Diverse enemy types including zombies, skeletons, and explosive creepers
• Multiple weapons including sniper rifles, grenades, and melee attacks
• Urban battlefields with strategic vantage points
• Wave-based survival with escalating difficulty
• Free to play in your browser with no downloads required

Controls:
WASD - Move, LMB - Shoot, RMB - Aim/Flashlight, R - Reload, F - Use item, G - Throw grenade, H - Melee attack, C - Crouch, Space - Jump, Shift - Run, 1-9 - Select weapon, TAB - Pause',
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
  ('shooting', 'Shooting', NOW()),
  ('action', 'Action', NOW()),
  ('fps', 'FPS', NOW()),
  ('3d', '3D', NOW()),
  ('sniper', 'Sniper', NOW()),
  ('minecraft', 'Minecraft', NOW()),
  ('zombie', 'Zombie', NOW()),
  ('combat', 'Combat', NOW())
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 3. Associate game with tags in game_tags table
-- =====================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'counter-craft-sniper'
  AND t.slug IN ('shooting', 'action', 'fps', '3d', 'sniper', 'minecraft', 'zombie', 'combat')
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
  'counter-craft-sniper',
  'SniperPro88',
  'sniperpro88@example.com',
  'Counter Craft Sniper is absolutely incredible! The combination of tactical FPS gameplay with Minecraft-style graphics is genius. I love how every shot requires precision and timing - you really feel like an elite sniper defending the city. The variety of enemies keeps things interesting, especially when creepers start rushing at you and you have to prioritize targets quickly. The controls are smooth and responsive, making headshots super satisfying. The wave-based survival mode gets intense as difficulty ramps up. I''ve been playing for hours and can''t stop! The urban environments are well-designed with great vantage points. Highly recommend for anyone who loves sniping games or Minecraft aesthetics. This is easily one of the best free browser FPS games I''ve played!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

