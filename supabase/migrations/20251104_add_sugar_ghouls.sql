-- Migration: Add Sugar Ghouls game
-- Date: 2025-11-04
-- Description: Adds Sugar Ghouls game with tags, associations, and initial comment

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
  'sugar-ghouls',
  'Sugar Ghouls',
  'The Ultimate Halloween Candy Adventure',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/sugar-ghouls.png',
  'https://wordhurdle.co/sugar-ghouls.embed',
  'Sugar Ghouls is a thrilling multiplayer action game that combines Halloween-themed obstacles with candy-fueled chaos. Play as Ghostkid, a mischievous spirit on a quest for the best candy in town, while battling sugar-crazed ghouls and navigating through haunted levels filled with exciting challenges.

Sugar Ghouls is a multiplayer action game that serves not only as entertainment but also as an adventurous experience where players actively participate in the action. In Sugar Ghouls, players dive into a beautifully crafted 3D world full of Halloween-themed obstacles and candy-fueled chaos, creating an immersive playground for thrill-seekers.

The character you control in Sugar Ghouls is Ghostkid, a naughty spirit who has wandered off in search of the best candy in town. What starts as a simple candy-matching adventure quickly transforms into an exciting challenge as Ghostkid finds himself trapped in a world where candy-loving monsters protect their treasures with fierce determination and won''t let go easily.

Your goal in Sugar Ghouls is to escape and be the one on top by performing running, jumping, and fighting maneuvers. Along the way, you''ll collect rare treats and dodge scary creatures that inhabit this haunted realm. The game combines traditional platformer mechanics with modern 3D action elements, creating smooth and fast-paced gameplay that keeps players engaged.

What makes Sugar Ghouls stand out is its perfect blend of Halloween atmosphere, vibrant visuals, catchy tunes, and multiplayer chaos. Every jump, stomp, and candy grab brings you closer to victory—if you can withstand the line of sugar-crazed ghouls that hinder your path in this thrilling adventure.

Sugar Ghouls captures every bit of the quality of a regular Halloween night with its vibrant visuals, catchy tunes, and the chaos of multiplayer action. The game features stunning 3D graphics, diverse enemy types including chomping goblins, slime pools, and fireball pumpkins, and an engaging collectible system with candy and special Ghoul Bars hidden throughout levels.

Play Sugar Ghouls now and experience the ultimate Halloween candy adventure. Guide Ghostkid through haunted levels, collect rare treats, battle sugar-crazed ghouls, and compete with friends in this thrilling multiplayer action game that brings the spirit of Halloween to life!',
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
  ('action', 'Action', NOW()),
  ('adventure', 'Adventure', NOW()),
  ('platform', 'Platform', NOW()),
  ('halloween', 'Halloween', NOW()),
  ('multiplayer', 'Multiplayer', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('casual', 'Casual', NOW()),
  ('3d', '3D', NOW())
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 3. Associate game with tags in game_tags table (using UUID foreign keys)
-- ============================================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'sugar-ghouls'
  AND t.slug IN (
    'action',
    'adventure',
    'platform',
    'halloween',
    'multiplayer',
    'arcade',
    'casual',
    '3d'
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
  'sugar-ghouls',
  'HalloweenFan2024',
  'halloweenfan@example.com',
  'Sugar Ghouls is the perfect Halloween game! The atmosphere is absolutely fantastic with its spooky yet fun visuals and catchy Halloween soundtrack. Playing as Ghostkid is so much fun - the character controls are smooth and responsive, making all the jumping and fighting feel really satisfying. I love how the game combines platforming with action elements, and the enemy variety keeps things interesting. Those chomping goblins and fireball pumpkins are no joke! The multiplayer mode is where Sugar Ghouls really shines - competing with friends to collect the most candy before time runs out creates such intense and hilarious moments. The Ghoul Bars hidden throughout levels add great replay value as you explore every corner looking for secrets. The 3D graphics are beautiful and the Halloween theme is executed perfectly - it really captures that trick-or-treating excitement. Whether you''re a Halloween enthusiast or just love good platformers, Sugar Ghouls delivers an amazing experience. The difficulty balance is spot-on, challenging but never frustrating. Highly recommend for anyone looking for a festive, action-packed adventure!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

