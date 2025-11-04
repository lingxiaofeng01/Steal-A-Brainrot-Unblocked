/*
  # Add Stickman Clash Game

  ## Overview
  This migration adds the new game "Stickman Clash" to the database with:
  - Game record in games table
  - Tags association
  - Initial comment with rating

  ## Changes
  1. Insert game record
  2. Associate game with tags
  3. Add themed comment
*/

-- 1. 插入游戏记录
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
  'stickman-clash',
  'Stickman Clash',
  'Chaotic and Dramatic Stickman Battle - Multiplayer Fighting Game',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/stickman-clash.png',
  'https://g2.igroutka.ru/lib/crazy/games/stickman-clash/',
  'Stickman Clash is an action-packed fighting game bursting with excitement, where players become powerful stickman warriors and engage in chaotic yet hilarious battles full of drama. The game offers fast-paced gameplay, realistic physics, and a wide variety of weapons, delivering a unique surprise factor that no other fighting game can match! The "floppy" physics mechanism is the main feature of this game, and it can be considered the source of all the fun. Every jump, hit, or defense phase becomes very surprising and hilarious, making the battle full of surprises and fun. In the game, you will personalize your character in your chosen style by modifying color and face, and selecting your preferred weapon. Epic battles are looming in places very close to that, in the depths of the ocean or in a world of gigantic monsters! Test out an amazing range of armaments from primitive boxing gloves and exquisite katana swords to rockers electric guitars, explosives, and even cosmic portal guns! Stickman Clash gameplay is easy to pick up but requires skill and quick reflexes to win. The current version of the game supports 1 or 2 players, and the upcoming update will add support for 3-4 players, ensuring even wilder and more thrilling battles! In Survival Mode, gather your buddies and take part in the fight against the infinite number of monsters. Use bombs wisely to take out multiple enemies at once without harming your allies. In Boss Fight mode, confront giant bosses, especially extremely dangerous pickaxe-wielding bosses. It is essential to have accurate dodges and to launch your counterattacks at the precise moments. This is the stage where both your capabilities and teamwork are most clear! Tips to win easily: Always be on the move, use the environment to your advantage, hit it at the right moment, and try out different firearms. Play Stickman Clash now and experience the most chaotic and fun stickman battles ever!',
  5.0,
  0,
  '2025-11-04',
  true,
  false
)
ON CONFLICT (slug) DO NOTHING;

-- 2. 确保所有需要的标签存在
INSERT INTO tags (slug, name, created_at)
VALUES
  ('battle', 'Battle', NOW()),
  ('action', 'Action', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('fighting', 'Fighting', NOW()),
  ('stickman', 'Stickman', NOW()),
  ('2d', '2D', NOW()),
  ('2-player', '2 Player', NOW()),
  ('3-player', '3 Player', NOW()),
  ('multiplayer', 'Multiplayer', NOW()),
  ('physics', 'Physics', NOW()),
  ('casual', 'Casual', NOW())
ON CONFLICT (slug) DO NOTHING;

-- 3. 关联游戏和标签
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'stickman-clash' AND t.slug IN ('battle', 'action', 'arcade', 'fighting', 'stickman', '2d', '2-player', '3-player', 'multiplayer', 'physics', 'casual')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- 4. 添加主题评论
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms,
  created_at)
VALUES (
  'stickman-clash',
  'BattleMaster',
  'battlemaster@example.com',
  'Stickman Clash is absolutely hilarious and incredibly fun! The floppy physics system is pure genius - every battle is unpredictable and full of laugh-out-loud moments. I love how the ragdoll physics makes even simple movements entertaining. The weapon variety is insane! From basic boxing gloves to katana swords, electric guitars, bombs, and even portal guns - each weapon completely changes how you play. My favorite is the portal gun because you can teleport around the arena and surprise your opponents! The multiplayer battles are where this game really shines. Playing with friends in 2v2 mode is chaotic fun, and I can''t wait for the 3-4 player update! The character customization is simple but effective - changing colors and faces lets you create your unique stickman warrior. The battle arenas are creative and diverse. Fighting in the ocean depths with water physics is different from battling in the monster world with giant creatures in the background. Each location adds its own flavor to the combat. Survival Mode is my go-to when I want to team up with friends against endless monster waves. The key is coordinating bomb throws to clear groups without friendly fire - easier said than done with the crazy physics! Boss Fight mode is intense! Those pickaxe-wielding bosses are no joke. You really need to master the dodge timing and find the perfect moment to counterattack. It''s challenging but so satisfying when you finally beat them. The controls are simple (WASD for player 1, arrows for player 2) but mastering the movement with the physics takes practice. Once you get the hang of it, you can pull off some amazing moves! Pro tips: Stay mobile at all times, use the terrain to your advantage (corners and edges can trap opponents), timing your hits is crucial (button mashing won''t work), and experiment with different weapons to find your playstyle. The game runs smoothly in browser, no downloads needed. Perfect for quick gaming sessions at school or work! The graphics are clean and the stickman art style is perfect for this type of game. Overall, Stickman Clash is one of the most entertaining fighting games I''ve played. The combination of physics-based chaos, weapon variety, and multiplayer fun makes it endlessly replayable. Highly recommend for anyone who loves action games, fighting games, or just wants a good laugh! 🥊⚔️🎮',
  5,
  'approved',
  true,
  NOW()) ON CONFLICT DO NOTHING;

