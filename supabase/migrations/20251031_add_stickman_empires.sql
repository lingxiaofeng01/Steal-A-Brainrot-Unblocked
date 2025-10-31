/*
  # Add Stickman Empires Game

  ## Overview
  This migration adds the new game "Stickman Empires" to the database with:
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
  'stickman-empires',
  'Stickman Empires',
  'Build Your Army and Conquer in Epic Tower Defense Battles',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/stickman-empires.png',
  'https://games.yoplay.io/stickman-empires/',
  'Stickman Empires is a strategic tower defense game where you command stickman armies, mine resources, train powerful units, and defend your monument while attacking enemy bases. Experience epic battles with diverse game modes including Classic Campaign, Tournament Mode, and Endless Deeds. The game offers multiple difficulty levels from Normal to Hard and Insane, providing challenges for all skill levels. In Stickman Empires, you will follow a strategic action chain: send miners to dig gold to sustain your economy, train soldiers from swordsmen and spearmen to archers, mages, and giants, adjust positions and coordinate troops flexibly to overwhelm enemies, and protect your monument while attacking and destroying the enemy base. Every strategic decision can turn the tide of battle, so players need to balance between defense and attack. The game features diverse weapons and skins including legendary swords and formidable armor, improved gameplay with optimized formations and greater archer accuracy, and combat effects in full swing with blood, arrows, and smooth movements for added drama. Master the art of war by prioritizing building a stable economy before expanding your army, combining melee and ranged combat for balanced formations, using giants and mages at the right time to create breakthroughs, and directly controlling units when you need to turn the situation around. Play Stickman Empires now and lead your stickman army to victory in epic tower defense battles!',
  5.0,
  0,
  '2025-10-31',
  true,
  false
)
ON CONFLICT (slug) DO NOTHING;

-- 2. 确保所有需要的标签存在
INSERT INTO tags (slug, name, created_at)
VALUES
  ('strategy', 'Strategy', NOW()),
  ('tower-defense', 'Tower Defense', NOW()),
  ('stickman', 'Stickman', NOW()),
  ('war', 'War', NOW()),
  ('action', 'Action', NOW()),
  ('casual', 'Casual', NOW()),
  ('multiplayer', 'Multiplayer', NOW()),
  ('adventure', 'Adventure', NOW())
ON CONFLICT (slug) DO NOTHING;

-- 3. 关联游戏和标签
INSERT INTO game_tags (game_slug, tag_slug, created_at)
SELECT 'stickman-empires', slug, NOW()
FROM tags
WHERE slug IN ('strategy', 'tower-defense', 'stickman', 'war', 'action', 'casual', 'multiplayer', 'adventure')
ON CONFLICT (game_slug, tag_slug) DO NOTHING;

-- 4. 添加主题评论
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  content,
  rating,
  status,
  agreed_terms,
  created_at,
  updated_at
)
VALUES (
  'stickman-empires',
  'StrategyMaster',
  'strategymaster@example.com',
  'Stickman Empires is hands down one of the best tower defense strategy games I''ve ever played! The depth of strategy is incredible - you really need to think about resource management, unit composition, and timing. I love how the game forces you to balance between building your economy with miners and training your army. The variety of units is fantastic - swordsmen for frontline defense, spearmen for anti-cavalry, archers for ranged attacks, mages for area damage, and giants for breaking through enemy lines. Each unit type has its own strengths and weaknesses, making army composition crucial. The multiple game modes keep things fresh - Classic Campaign is perfect for learning the mechanics, Tournament Mode tests your skills against other players, and Endless Mode is great for pushing your limits. The difficulty progression from Normal to Hard to Insane is well-balanced, providing challenges for both beginners and veterans. What really sets Stickman Empires apart is the strategic depth - positioning your troops correctly, knowing when to attack and when to defend, and managing your resources efficiently all matter. The combat effects are satisfying with smooth animations, blood effects, and arrows flying everywhere. The upgrade system with legendary weapons and armor adds another layer of progression. The improved archer accuracy and optimized formations make the gameplay feel polished. I especially love the direct unit control feature - being able to manually control key units during critical moments can completely turn the tide of battle. The graphics are clean and the stickman art style is charming without being distracting. Highly recommend for anyone who loves strategy, tower defense, or war games! 🎮⚔️🏰',
  5,
  'approved',
  true,
  NOW(),
  NOW()
)
ON CONFLICT DO NOTHING;

