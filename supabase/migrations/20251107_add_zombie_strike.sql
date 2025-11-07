-- Migration: Add Zombie Strike game
-- Date: 2025-11-07
-- Description: Insert Zombie Strike game, tags, and initial comment

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
  'zombie-strike',
  'Zombie Strike',
  'Survive the Undead Chaos in This Free 3D Pixel Shooter',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/zombie-strike.jpg',
  'https://games.yoplay.io/zombie-strike/?v=1',
  'Zombie Strike drops players into a crumbling world where every echo hints at danger. This free 3D browser shooter mixes pixel charm with grim survival energy. The story opens in broad daylight inside a shattered church — sunlight bleeding through broken windows, dust swirling over fallen pews, and silence thick enough to make you tense. That peace doesn''t last long. A low growl breaks it, and from that moment, survival becomes the only rule. The shooting game helps players get their footing with clear on-screen hints in white text, teaching every move without slowing the pace. The mechanics seem simple at first, but the deeper you go, the more every action, reload, and heartbeat begins to matter. Once the first two zombies fall, the doors to the Gun Shop creak open — and the real hunt begins. At first, the player only wields a red wrench with black bolts — clunky but symbolic, a tool of survival before the storm. After earning your first cash, you can dive into the shop where 30 weapons await — from handguns to assault rifles like the M27. The pace picks up quickly. The moment the first shot rings out, the dead come flooding in — a nonstop rush that pushes both reflexes and focus to the edge. Watch out for the smaller ones; those quick little zombies sprint like flashes of hunger, far swifter and deadlier than the grown ones. Zombie Strike unfolds across four maps — Church (Free), House ($1000), Hospital ($3500), and Sewer ($7000). Each one expands the horror, not just in space but in tension. Players must earn enough money to unlock them, giving each victory real weight.',
  5.0,
  0,
  '2025-11-07',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 2. Ensure all required tags exist in tags table
-- ============================================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('zombie', 'Zombie', NOW()),
  ('shooting', 'Shooting', NOW()),
  ('3d', '3D', NOW()),
  ('survival', 'Survival', NOW()),
  ('action', 'Action', NOW()),
  ('gun', 'Gun', NOW()),
  ('first-person', 'First Person', NOW()),
  ('arcade', 'Arcade', NOW())
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 3. Associate game with tags in game_tags table
-- ============================================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'zombie-strike'
  AND t.slug IN ('zombie', 'shooting', '3d', 'survival', 'action', 'gun', 'first-person', 'arcade')
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
  'zombie-strike',
  'ZombieSurvivor92',
  'zombiesurvivor92@example.com',
  'Zombie Strike is an absolute blast! The pixel graphics give it a unique charm while the 3D gameplay keeps things intense. I love how the game starts simple with just a wrench, but as you earn cash and unlock weapons, it becomes this epic survival experience. The four maps are all so different - the Church is atmospheric, the Hospital is creepy, and the Sewer is brutally challenging with that single narrow path. The weapon variety is incredible - 30 different guns means you can really customize your playstyle. The ammo system adds real tension because you have to watch both your clip and total ammo. Those fast little zombies are terrifying! They sprint at you so quickly that you really need to prioritize them. The armored zombies are tough too, but satisfying to take down with the right weapon. This is easily one of the best free zombie shooters I''ve played in a browser. No downloads, smooth performance, and genuinely fun gameplay. Highly recommend for anyone who loves survival shooters!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

-- ============================================================================
-- Verification queries (commented out - use these to verify the migration)
-- ============================================================================

-- Check if game was added
-- SELECT slug, title, rating FROM games WHERE slug = 'zombie-strike';

-- Check tag associations
-- SELECT t.slug, t.name
-- FROM game_tags gt
-- JOIN tags t ON gt.tag_id = t.id
-- JOIN games g ON gt.game_id = g.id
-- WHERE g.slug = 'zombie-strike';

-- Check comments
-- SELECT user_name, rating, LEFT(comment_text, 100) as preview
-- FROM game_comments
-- WHERE game_slug = 'zombie-strike';


