/*
  # 剩余游戏迁移（已排除 Stickman Clash）
  
  生成时间: 2025-11-04T02:54:34.188Z
  包含 18 个游戏迁移
  
  执行方式：
  1. 打开 Supabase Dashboard SQL Editor
  2. 复制此文件全部内容
  3. 粘贴并执行
*/

-- ============================================================
-- 开始批量迁移
-- ============================================================


-- ============================================================
-- Migration: 20251031_add_planet_buster.sql (planet-buster)
-- ============================================================

-- Migration: Add Planet Buster game to database
-- Date: 2025-10-31
-- Description: Adds Planet Buster game with tags, categories, and initial comment

-- 1. Insert the game
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
  is_featured,
  is_active
) VALUES (
  'planet-buster',
  'Planet Buster',
  'One-Button Cosmic Destruction - Blast Planets and Conquer the Universe',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/planet-buster.jpg',
  'https://planet-buster.1games.io/',
  'Planet Buster introduces one-button cosmic casual chaos! Upgrade missiles, destroy planets, and face explosive boss battles. Join the fun destruction now!',
  4.4,
  393,
  '2025-10-31',
  true,
  true
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  subtitle = EXCLUDED.subtitle,
  cover = EXCLUDED.cover,
  play_url = EXCLUDED.play_url,
  description = EXCLUDED.description,
  rating = EXCLUDED.rating,
  play_count = EXCLUDED.play_count,
  released_at = EXCLUDED.released_at,
  is_featured = EXCLUDED.is_featured,
  is_active = EXCLUDED.is_active,
  updated_at = now();

-- 2. Insert tags (if they don't exist)
INSERT INTO tags (slug, name) VALUES
  ('casual', 'Casual'),
  ('simulation', 'Simulation'),
  ('1games', '1Games'),
  ('idle', 'Idle'),
  ('weapon', 'Weapon'),
  ('one-button', 'One Button'),
  ('destroy', 'Destroy'),
  ('asteroid', 'Asteroid'),
  ('action', 'Action'),
  ('clicker', 'Clicker')
ON CONFLICT (slug) DO NOTHING;

-- 3. Link game to tags
INSERT INTO game_tags (game_id, tag_id)
SELECT 
  (SELECT id FROM games WHERE slug = 'planet-buster'),
  id
FROM tags
WHERE slug IN ('casual', 'simulation', '1games', 'idle', 'weapon', 'one-button', 'destroy', 'asteroid', 'action', 'clicker')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- 4. Insert categories (if they don't exist)
INSERT INTO categories (slug, name, description, icon) VALUES
  ('casual', 'Casual', 'Casual games for quick fun', 'Gamepad2'),
  ('action', 'Action', 'Fast-paced action games', 'Zap')
ON CONFLICT (slug) DO NOTHING;

-- 5. Link game to categories
INSERT INTO game_categories (game_id, category_id)
SELECT 
  (SELECT id FROM games WHERE slug = 'planet-buster'),
  id
FROM categories
WHERE slug IN ('casual', 'action')
ON CONFLICT (game_id, category_id) DO NOTHING;

-- 6. Add initial comment
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms
) VALUES (
  'planet-buster',
  'CosmicDestroyer',
  'cosmicdestroyer@example.com',
  'Planet Buster is incredibly addictive! The one-button gameplay is so satisfying, and watching planets explode never gets old. The upgrade system keeps me coming back for more. Perfect free online game with no downloads needed!',
  5,
  'approved',
  true
) ON CONFLICT DO NOTHING;

-- 7. Update game SEO metadata
INSERT INTO game_seo (
  game_id,
  meta_title,
  meta_description,
  keywords
) VALUES (
  (SELECT id FROM games WHERE slug = 'planet-buster'),
  'Planet Buster - Play Free One-Button Destruction Game Online | Destroy Planets & Upgrade Missiles',
  'Play Planet Buster free online! One-button cosmic destruction game where you blast planets, upgrade missiles, and face boss battles. Addictive idle clicker with strategic upgrades. No downloads required - start destroying planets now!',
  ARRAY['planet buster', 'planet buster game', 'destroy planets game', 'one button game', 'idle clicker game', 'missile upgrade game', 'casual destruction game', 'asteroid destroyer', 'planet destruction', 'cosmic clicker', 'space idle game', 'unblocked games', 'free online games', 'browser games', '1games.io', 'planet buster unblocked', 'planet buster no download']
) ON CONFLICT (game_id) DO UPDATE SET
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords;

-- Success message
DO $$
BEGIN
  RAISE NOTICE '✅ Planet Buster game added successfully!';
  RAISE NOTICE '   - Game record created';
  RAISE NOTICE '   - 10 tags linked';
  RAISE NOTICE '   - 2 categories linked';
  RAISE NOTICE '   - 1 initial comment added';
  RAISE NOTICE '   - SEO metadata configured';
END $$;




-- ============================================================
-- Migration: 20251031_add_stickman_empires.sql (stickman-empires)
-- ============================================================

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
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'stickman-empires' AND t.slug IN ('strategy', 'tower-defense', 'stickman', 'war', 'action', 'casual', 'multiplayer', 'adventure')
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
  'stickman-empires',
  'StrategyMaster',
  'strategymaster@example.com',
  'Stickman Empires is hands down one of the best tower defense strategy games I''ve ever played! The depth of strategy is incredible - you really need to think about resource management, unit composition, and timing. I love how the game forces you to balance between building your economy with miners and training your army. The variety of units is fantastic - swordsmen for frontline defense, spearmen for anti-cavalry, archers for ranged attacks, mages for area damage, and giants for breaking through enemy lines. Each unit type has its own strengths and weaknesses, making army composition crucial. The multiple game modes keep things fresh - Classic Campaign is perfect for learning the mechanics, Tournament Mode tests your skills against other players, and Endless Mode is great for pushing your limits. The difficulty progression from Normal to Hard to Insane is well-balanced, providing challenges for both beginners and veterans. What really sets Stickman Empires apart is the strategic depth - positioning your troops correctly, knowing when to attack and when to defend, and managing your resources efficiently all matter. The combat effects are satisfying with smooth animations, blood effects, and arrows flying everywhere. The upgrade system with legendary weapons and armor adds another layer of progression. The improved archer accuracy and optimized formations make the gameplay feel polished. I especially love the direct unit control feature - being able to manually control key units during critical moments can completely turn the tide of battle. The graphics are clean and the stickman art style is charming without being distracting. Highly recommend for anyone who loves strategy, tower defense, or war games! 🎮⚔️🏰',
  5,
  'approved',
  true,
  NOW()) ON CONFLICT DO NOTHING;




-- ============================================================
-- Migration: 20251031_add_soflo_wheelie_life.sql (soflo-wheelie-life)
-- ============================================================

/*
  # Add SoFlo Wheelie Life Game

  ## Overview
  This migration adds the new game "SoFlo Wheelie Life" to the database with:
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
  'soflo-wheelie-life',
  'SoFlo Wheelie Life',
  'Master Motorcycle Wheelies in South Florida - The Ultimate Wheelie Life Scratch Game',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/soflo-wheelie-life.png',
  'https://scratch.mit.edu/projects/1231016758/embed',
  'SoFlo Wheelie Life is an exciting motorcycle stunt game that lets you perform crazy wheelies directly in your browser, completely free. Created by LucasTheSigmaMogger on the Scratch platform, this wheelie life scratch game quickly won over the hearts of young gamers who love challenges and arcade motorcycle games. In the world of SoFlo Wheelie Life, you will control a motorbike through the vibrant streets of South Florida, avoiding cars and walls, and performing a series of stunts to increase your score. This is the perfect combination of skill, rhythm, and excitement as your multiplier increases. Master various tricks including standing on the saddle for style points, knee drag tricks for multiplier boosts, hand drags to keep the flow, and the extremely risky no-hands wheelie. The game features multiple bikes with different characteristics - light bikes are easy to wheelie but prone to shaking (suitable for beginners), while heavy bikes are stable for long wheelies and big tricks. Play SoFlo Wheelie Life now and experience the thrill of performing perfect wheelies through the streets of South Florida!',
  5.0,
  0,
  '2025-11-01',
  true,
  false
)
ON CONFLICT (slug) DO NOTHING;

-- 2. 确保所有需要的标签存在
INSERT INTO tags (slug, name, created_at)
VALUES
  ('racing', 'Racing', NOW()),
  ('sport', 'Sport', NOW()),
  ('driving', 'Driving', NOW()),
  ('moto', 'Moto', NOW()),
  ('scratch', 'Scratch', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('casual', 'Casual', NOW()),
  ('skill', 'Skill', NOW())
ON CONFLICT (slug) DO NOTHING;

-- 3. 关联游戏和标签
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'soflo-wheelie-life' AND t.slug IN ('racing', 'sport', 'driving', 'moto', 'scratch', 'arcade', 'casual', 'skill')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- 4. 插入游戏统计数据
INSERT INTO game_stats (slug, play_count, view_count, created_at)
VALUES (
  'soflo-wheelie-life',
  0,
  0,
  NOW(),
  NOW()
)
ON CONFLICT (slug)
DO UPDATE SET
  updated_at = NOW();

-- 5. 添加主题评论
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms
)
VALUES (
  'soflo-wheelie-life',
  'WheelieKing',
  'wheelieking@example.com',
  'SoFlo Wheelie Life is absolutely incredible! The motorcycle physics feel so realistic - balancing the wheelie is challenging but super satisfying when you nail it. I love how you can switch between different bikes, each with unique handling. The light bikes are perfect for quick tricks, while the heavy bikes let me hold those long, smooth wheelies through South Florida streets. The trick system is genius - combining knee drags, hand drags, and no-hands wheelies to build up that multiplier is so addictive! The customization options are awesome too - changing helmets and bikes to create my own style without spending money is refreshing. The leaderboard keeps me coming back to beat my friends'' high scores. The Scratch platform makes it super accessible - I can play anywhere without downloads. The endless mode is perfect for practicing and improving my skills. The vibrant South Florida setting looks amazing, and the smooth animations make every trick feel rewarding. This is hands down the best motorcycle wheelie game I''ve played! Highly recommend for anyone who loves skill-based racing games! 🏍️🔥💯',
  5,
  'approved',
  true
)
ON CONFLICT DO NOTHING;




-- ============================================================
-- Migration: 20251030_add_rocket_fortress.sql (rocket-fortress)
-- ============================================================

-- =====================================================
-- Rocket Fortress 游戏数据迁移
-- 创建时间: 2025-10-30
-- 描述: 添加 Rocket Fortress 游戏的统计数据、标签和评论
-- =====================================================

-- 1. 插入游戏统计数据
INSERT INTO game_stats (slug, play_count, view_count, created_at)
VALUES (
  'rocket-fortress',
  2320,
  0,
  NOW(),
  NOW()
)
ON CONFLICT (slug) 
DO UPDATE SET
  play_count = EXCLUDED.play_count,
  updated_at = NOW();

-- 2. 插入游戏标签（如果不存在）
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Clicker', 'clicker', NOW()),
  ('RPG', 'rpg', NOW()),
  ('Action', 'action', NOW()),
  ('Strategy', 'strategy', NOW()),
  ('Casual', 'casual', NOW()),
  ('Shooting', 'shooting', NOW()),
  ('Kids', 'kids', NOW())
ON CONFLICT (slug) DO NOTHING;

-- 3. 关联游戏和标签
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'rocket-fortress' AND t.slug IN ('clicker', 'rpg', 'action', 'strategy', 'casual', 'shooting', 'kids')
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
  'rocket-fortress',
  'MissileCommander',
  'missilecommander@example.com',
  'Rocket Fortress is absolutely addictive! The clicker RPG mechanics are perfectly balanced - clicking to fire missiles feels satisfying, and the upgrade system keeps you coming back for more. I love how you can recruit marines to auto-fire while you focus on strategic upgrades. The demon waves get progressively harder, which makes every upgrade feel meaningful. Boss battles are intense and require good preparation. The cartoonish graphics are vibrant and fun, making the holy war against demons visually appealing. Resource management between missiles and units adds great strategic depth. The game rewards both active clicking and smart upgrade choices. Perfect for casual play or serious grinding sessions. Highly recommend for clicker and RPG fans! 🚀👹💎',
  5,
  'approved',
  true,
  NOW() - INTERVAL '2 days',
  NOW() - INTERVAL '2 days'
)
ON CONFLICT (game_slug, user_email) DO NOTHING;

-- 5. 验证数据插入
DO $$
DECLARE
  stats_count INTEGER;
  tags_count INTEGER;
  comments_count INTEGER;
BEGIN
  -- 检查游戏统计
  SELECT COUNT(*) INTO stats_count
  FROM game_stats
  WHERE slug = 'rocket-fortress';
  
  -- 检查标签关联
  SELECT COUNT(*) INTO tags_count
  FROM game_tags
  WHERE game_slug = 'rocket-fortress';
  
  -- 检查评论
  SELECT COUNT(*) INTO comments_count
  FROM game_comments
  WHERE game_slug = 'rocket-fortress';
  
  -- 输出验证结果
  RAISE NOTICE '✅ Rocket Fortress 数据迁移完成:';
  RAISE NOTICE '   - 游戏统计记录: %', stats_count;
  RAISE NOTICE '   - 标签关联数: %', tags_count;
  RAISE NOTICE '   - 评论数: %', comments_count;
  
  -- 验证是否成功
  IF stats_count = 0 THEN
    RAISE WARNING '⚠️  游戏统计数据未插入成功';
  END IF;
  
  IF tags_count < 7 THEN
    RAISE WARNING '⚠️  标签关联数少于预期 (期望: 7, 实际: %)', tags_count;
  END IF;
  
  IF comments_count = 0 THEN
    RAISE WARNING '⚠️  评论数据未插入成功';
  END IF;
END $$;




-- ============================================================
-- Migration: 20251030_add_undead_corridor.sql (undead-corridor)
-- ============================================================

-- =====================================================
-- Undead Corridor 游戏数据迁移
-- 创建时间: 2025-10-30
-- 描述: 添加 Undead Corridor 游戏的统计数据、标签和评论
-- =====================================================

-- 1. 插入游戏统计数据
INSERT INTO game_stats (slug, play_count, view_count, created_at)
VALUES (
  'undead-corridor',
  485,
  0,
  NOW(),
  NOW()
)
ON CONFLICT (slug) 
DO UPDATE SET
  play_count = EXCLUDED.play_count,
  updated_at = NOW();

-- 2. 插入游戏标签（如果不存在）
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Shooting', 'shooting', NOW()),
  ('Horror', 'horror', NOW()),
  ('Zombie', 'zombie', NOW()),
  ('Survival', 'survival', NOW()),
  ('Action', 'action', NOW()),
  ('2D', '2d', NOW()),
  ('Arcade', 'arcade', NOW())
ON CONFLICT (slug) DO NOTHING;

-- 3. 关联游戏和标签
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'undead-corridor' AND t.slug IN ('shooting', 'horror', 'zombie', 'survival', 'action', '2d', 'arcade')
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
  'undead-corridor',
  'ZombieSlayer88',
  'zombieslayer88@example.com',
  'Undead Corridor is an intense zombie survival shooter that keeps you on the edge of your seat! The confined corridor setting creates incredible tension as waves of undead rush toward you. The weapon upgrade system is well-balanced - you start with basic firearms but can unlock powerful shotguns and rifles as you progress. What I love most is the fast-paced action combined with strategic positioning. You need to manage your ammo carefully and know when to retreat or push forward. The 2D graphics are crisp and the zombie animations are surprisingly detailed. Boss zombies provide epic challenges that test your skills. The arcade-style scoring system adds great replay value as you try to beat your high score. Sound effects are fantastic - the groans of zombies and gunfire create an immersive horror atmosphere. Perfect for quick gaming sessions or extended survival runs. Highly recommended for fans of zombie shooters and arcade action! 🧟‍♂️🔫',
  5,
  'approved',
  true,
  NOW() - INTERVAL '3 days',
  NOW() - INTERVAL '3 days'
)
ON CONFLICT (game_slug, user_email) DO NOTHING;

-- 5. 验证数据插入
DO $$
DECLARE
  stats_count INTEGER;
  tags_count INTEGER;
  comments_count INTEGER;
BEGIN
  -- 检查游戏统计
  SELECT COUNT(*) INTO stats_count
  FROM game_stats
  WHERE slug = 'undead-corridor';
  
  -- 检查标签关联
  SELECT COUNT(*) INTO tags_count
  FROM game_tags
  WHERE game_slug = 'undead-corridor';
  
  -- 检查评论
  SELECT COUNT(*) INTO comments_count
  FROM game_comments
  WHERE game_slug = 'undead-corridor';
  
  -- 输出验证结果
  RAISE NOTICE '✅ Undead Corridor 数据迁移完成:';
  RAISE NOTICE '   - 游戏统计记录: %', stats_count;
  RAISE NOTICE '   - 标签关联数: %', tags_count;
  RAISE NOTICE '   - 评论数: %', comments_count;
  
  -- 验证是否成功
  IF stats_count = 0 THEN
    RAISE WARNING '⚠️  游戏统计数据未插入成功';
  END IF;
  
  IF tags_count < 7 THEN
    RAISE WARNING '⚠️  标签关联数少于预期 (期望: 7, 实际: %)', tags_count;
  END IF;
  
  IF comments_count = 0 THEN
    RAISE WARNING '⚠️  评论数据未插入成功';
  END IF;
END $$;




-- ============================================================
-- Migration: 20251030_add_blendrix.sql (blendrix)
-- ============================================================

-- Add Blendrix game to game_stats table
-- Migration created: 2025-10-30

-- Insert game statistics
INSERT INTO game_stats (slug, play_count, view_count, created_at)
VALUES (
  'blendrix',
  113,
  0,
  NOW(),
  NOW()
)
ON CONFLICT (slug) DO UPDATE
SET 
  play_count = EXCLUDED.play_count,
  updated_at = NOW();

-- Insert or update tags
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Puzzle', 'puzzle', NOW()),
  ('Casual', 'casual', NOW()),
  ('Logic', 'logic', NOW()),
  ('Brain Teaser', 'brain-teaser', NOW()),
  ('Strategy', 'strategy', NOW()),
  ('Minimalist', 'minimalist', NOW()),
  ('Kids', 'kids', NOW())
ON CONFLICT (slug) DO NOTHING;

-- Link game to tags (if using the full games schema)
-- Note: This assumes you have a games table and game_tags junction table
-- If not using the full schema, you can skip this section

DO $$
DECLARE
  game_id_var uuid;
BEGIN
  -- Try to get the game ID from the games table
  SELECT id INTO game_id_var FROM games WHERE slug = 'blendrix';
  
  -- If game exists in games table, link it to tags
  IF game_id_var IS NOT NULL THEN
    INSERT INTO game_tags (game_id, tag_id)
    SELECT 
      game_id_var,
      t.id
    FROM tags t
    WHERE t.slug IN ('puzzle', 'casual', 'logic', 'brain-teaser', 'strategy', 'minimalist', 'kids')
    ON CONFLICT (game_id, tag_id) DO NOTHING;
  END IF;
END $$;

-- Add a sample comment for the game
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
  'blendrix',
  'PuzzleMaster',
  'puzzlemaster@example.com',
  'Blendrix is such a beautifully designed puzzle game! The minimalist aesthetic is calming, and the progressive difficulty keeps me engaged. I love how there''s no time pressure - I can really think through each move. The undo feature is a lifesaver when experimenting with different strategies. The special dot types in later levels add great variety. Perfect for both quick sessions and longer puzzle-solving marathons. Highly recommend for anyone who loves logic puzzles! 🧩✨',
  5,
  'approved',
  true,
  NOW() - INTERVAL '2 days'
);

-- Verify the migration
DO $$
BEGIN
  -- Check if game_stats entry exists
  IF EXISTS (SELECT 1 FROM game_stats WHERE slug = 'blendrix') THEN
    RAISE NOTICE '✅ Blendrix game stats added successfully';
  ELSE
    RAISE WARNING '⚠️ Failed to add Blendrix game stats';
  END IF;

  -- Check if tags exist
  IF EXISTS (SELECT 1 FROM tags WHERE slug IN ('puzzle', 'casual', 'logic', 'brain-teaser', 'strategy', 'minimalist', 'kids')) THEN
    RAISE NOTICE '✅ Blendrix tags added successfully';
  ELSE
    RAISE WARNING '⚠️ Failed to add Blendrix tags';
  END IF;

  -- Check if comment exists
  IF EXISTS (SELECT 1 FROM game_comments WHERE game_slug = 'blendrix') THEN
    RAISE NOTICE '✅ Blendrix comment added successfully';
  ELSE
    RAISE WARNING '⚠️ Failed to add Blendrix comment';
  END IF;
END $$;




-- ============================================================
-- Migration: 20251030_add_steal_brainrots.sql (steal-brainrots)
-- ============================================================

-- =====================================================
-- Steal Brainrots 游戏数据迁移
-- 创建时间: 2025-10-30
-- 描述: 添加 Steal Brainrots 游戏的统计数据、标签和评论
-- =====================================================

-- 1. 插入游戏统计数据
INSERT INTO game_stats (slug, play_count, view_count, created_at)
VALUES (
  'steal-brainrots',
  0,
  0,
  NOW(),
  NOW()
)
ON CONFLICT (slug) 
DO UPDATE SET
  play_count = EXCLUDED.play_count,
  updated_at = NOW();

-- 2. 插入游戏标签（如果不存在）
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Action', 'action', NOW()),
  ('Puzzle', 'puzzle', NOW()),
  ('Strategy', 'strategy', NOW()),
  ('Collecting', 'collecting', NOW()),
  ('Stealth', 'stealth', NOW()),
  ('Brainrot', 'brainrot', NOW()),
  ('Casual', 'casual', NOW()),
  ('Arcade', 'arcade', NOW())
ON CONFLICT (slug) DO NOTHING;

-- 3. 关联游戏和标签
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'steal-brainrots' AND t.slug IN ('action', 'puzzle', 'strategy', 'collecting', 'stealth', 'brainrot', 'casual', 'arcade')
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
  'steal-brainrots',
  'BrainrotCollector',
  'brainrotcollector@example.com',
  'Steal Brainrots is an incredibly addictive collecting game with a unique twist! The concept of stealing and collecting brainrots is both hilarious and engaging. The gameplay combines stealth mechanics with puzzle-solving - you need to carefully plan your moves to avoid detection while maximizing your collection. The strategy element is deeper than it first appears, as different brainrots have different values and some are harder to steal than others. The arcade-style progression keeps you hooked as you unlock new areas and more valuable brainrots. What makes this game special is the perfect balance between casual fun and strategic depth. The controls are intuitive and responsive, making it easy to pick up but challenging to master. The visual style is colorful and quirky, perfectly matching the absurd premise. Sound effects add to the comedic atmosphere. The collecting aspect is very satisfying - watching your brainrot collection grow is genuinely rewarding. Great for both quick sessions and extended play. A must-try for fans of collecting games and brainrot memes! 🧠😂',
  5,
  'approved',
  true,
  NOW() - INTERVAL '2 days',
  NOW() - INTERVAL '2 days'
)
ON CONFLICT (game_slug, user_email) DO NOTHING;

-- 5. 验证数据插入
DO $$
DECLARE
  stats_count INTEGER;
  tags_count INTEGER;
  comments_count INTEGER;
BEGIN
  -- 检查游戏统计
  SELECT COUNT(*) INTO stats_count
  FROM game_stats
  WHERE slug = 'steal-brainrots';
  
  -- 检查标签关联
  SELECT COUNT(*) INTO tags_count
  FROM game_tags
  WHERE game_slug = 'steal-brainrots';
  
  -- 检查评论
  SELECT COUNT(*) INTO comments_count
  FROM game_comments
  WHERE game_slug = 'steal-brainrots';
  
  -- 输出验证结果
  RAISE NOTICE '✅ Steal Brainrots 数据迁移完成:';
  RAISE NOTICE '   - 游戏统计记录: %', stats_count;
  RAISE NOTICE '   - 标签关联数: %', tags_count;
  RAISE NOTICE '   - 评论数: %', comments_count;
  
  -- 验证是否成功
  IF stats_count = 0 THEN
    RAISE WARNING '⚠️  游戏统计数据未插入成功';
  END IF;
  
  IF tags_count < 8 THEN
    RAISE WARNING '⚠️  标签关联数少于预期 (期望: 8, 实际: %)', tags_count;
  END IF;
  
  IF comments_count = 0 THEN
    RAISE WARNING '⚠️  评论数据未插入成功';
  END IF;
END $$;




-- ============================================================
-- Migration: 20251030_add_a_pretty_odd_bunny_roast_it.sql (a-pretty-odd-bunny-roast-it)
-- ============================================================

-- =====================================================
-- A Pretty Odd Bunny: Roast It! 游戏数据迁移
-- 创建时间: 2025-10-30
-- 描述: 添加 A Pretty Odd Bunny: Roast It! 游戏的统计数据、标签和评论
-- =====================================================

-- 1. 插入游戏统计数据
INSERT INTO game_stats (slug, play_count, view_count, created_at)
VALUES (
  'a-pretty-odd-bunny-roast-it',
  0,
  0,
  NOW(),
  NOW()
)
ON CONFLICT (slug) 
DO UPDATE SET
  play_count = EXCLUDED.play_count,
  updated_at = NOW();

-- 2. 插入游戏标签（如果不存在）
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Arcade', 'arcade', NOW()),
  ('Puzzle', 'puzzle', NOW()),
  ('Platform', 'platform', NOW()),
  ('Animal', 'animal', NOW()),
  ('Bunny', 'bunny', NOW()),
  ('Funny', 'funny', NOW()),
  ('Multiplayer', 'multiplayer', NOW()),
  ('Casual', 'casual', NOW())
ON CONFLICT (slug) DO NOTHING;

-- 3. 关联游戏和标签
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'a-pretty-odd-bunny-roast-it' AND t.slug IN ('arcade', 'puzzle', 'platform', 'animal', 'bunny', 'funny', 'multiplayer', 'casual')
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
  'a-pretty-odd-bunny-roast-it',
  'BunnyLover2025',
  'bunnylover2025@example.com',
  'A Pretty Odd Bunny: Roast It! is absolutely hilarious and incredibly fun! This game takes the cute bunny platformer concept and adds a wickedly funny twist. The roasting mechanic is genius - you need to solve puzzles while dealing with the bunny''s sarcastic commentary. The platform gameplay is smooth and responsive, with clever level design that keeps you engaged. What makes this game stand out is the perfect blend of arcade action and puzzle-solving. Each level presents unique challenges that require both quick reflexes and strategic thinking. The multiplayer mode adds even more fun - competing with friends to roast bunnies is surprisingly entertaining! The humor is top-notch, with witty dialogue and absurd situations that will make you laugh out loud. Graphics are charming with a quirky art style that perfectly matches the game''s odd personality. The casual difficulty makes it accessible to everyone, but there''s enough challenge to keep experienced players interested. Sound design is excellent with funny sound effects and upbeat music. Perfect for both solo play and party gaming sessions. A must-play for anyone who enjoys funny games with personality! 🐰🔥😂',
  5,
  'approved',
  true,
  NOW() - INTERVAL '1 day',
  NOW() - INTERVAL '1 day'
)
ON CONFLICT (game_slug, user_email) DO NOTHING;

-- 5. 验证数据插入
DO $$
DECLARE
  stats_count INTEGER;
  tags_count INTEGER;
  comments_count INTEGER;
BEGIN
  -- 检查游戏统计
  SELECT COUNT(*) INTO stats_count
  FROM game_stats
  WHERE slug = 'a-pretty-odd-bunny-roast-it';
  
  -- 检查标签关联
  SELECT COUNT(*) INTO tags_count
  FROM game_tags
  WHERE game_slug = 'a-pretty-odd-bunny-roast-it';
  
  -- 检查评论
  SELECT COUNT(*) INTO comments_count
  FROM game_comments
  WHERE game_slug = 'a-pretty-odd-bunny-roast-it';
  
  -- 输出验证结果
  RAISE NOTICE '✅ A Pretty Odd Bunny: Roast It! 数据迁移完成:';
  RAISE NOTICE '   - 游戏统计记录: %', stats_count;
  RAISE NOTICE '   - 标签关联数: %', tags_count;
  RAISE NOTICE '   - 评论数: %', comments_count;
  
  -- 验证是否成功
  IF stats_count = 0 THEN
    RAISE WARNING '⚠️  游戏统计数据未插入成功';
  END IF;
  
  IF tags_count < 8 THEN
    RAISE WARNING '⚠️  标签关联数少于预期 (期望: 8, 实际: %)', tags_count;
  END IF;
  
  IF comments_count = 0 THEN
    RAISE WARNING '⚠️  评论数据未插入成功';
  END IF;
END $$;




-- ============================================================
-- Migration: 20251030_add_zombotron_re_boot.sql (zombotron-re-boot)
-- ============================================================

-- Add Zombotron Re-Boot game to game_stats table
-- Migration created: 2025-10-30

-- Insert game statistics
INSERT INTO game_stats (slug, play_count, view_count, created_at)
VALUES (
  'zombotron-re-boot',
  0,
  0,
  NOW(),
  NOW()
)
ON CONFLICT (slug) DO UPDATE
SET 
  updated_at = NOW();

-- Insert or update tags
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Action', 'action', NOW()),
  ('Platform', 'platform', NOW()),
  ('2D', '2d', NOW()),
  ('Indie', 'indie', NOW()),
  ('Physics', 'physics', NOW()),
  ('Zombie', 'zombie', NOW()),
  ('Shooting', 'shooting', NOW()),
  ('Adventure', 'adventure', NOW())
ON CONFLICT (slug) DO NOTHING;

-- Link game with tags
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'zombotron-re-boot' AND t.slug IN ('action', 'platform', '2d', 'indie', 'physics', 'zombie', 'shooting', 'adventure')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- Add comment for Zombotron Re-Boot
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms,
  created_at
)
VALUES (
  'zombotron-re-boot',
  'PhysicsDestroyer',
  'physicsdestroyer@example.com',
  'Zombotron Re-Boot is an absolute masterpiece of physics-based action! The destructible environments completely change how you approach combat - instead of just shooting zombies, you can drop entire structures on them, create explosive chain reactions, and use the environment as your ultimate weapon. The variety of weapons keeps things fresh, and the limited ammo system forces you to think strategically about every encounter. I love how you can rescue survivors hidden throughout the levels, and the exploration aspect adds so much replay value. The remastered graphics look fantastic while maintaining that gritty, industrial horror aesthetic. The physics engine is incredibly satisfying - watching buildings collapse and barrels explode never gets old. Boss battles are challenging and require you to master all the game mechanics. This is easily one of the best zombie platformers I have ever played. If you enjoy games like Metal Slug or Contra but with modern physics and destructible environments, this is a must-play!',
  5,
  'approved',
  true) ON CONFLICT DO NOTHING;





-- ============================================================
-- Migration: 20251029_add_crazy_chicken_3d.sql (crazy-chicken-3d)
-- ============================================================

-- Migration: Add Crazy Chicken 3D game
-- Date: 2025-10-29
-- Description: Adds Crazy Chicken 3D game stats, tags, and initial comment

-- Insert game statistics
INSERT INTO game_stats (slug, play_count, view_count, created_at)
VALUES ('crazy-chicken-3d', 0, 0, NOW(), NOW())
ON CONFLICT (slug) DO UPDATE SET updated_at = NOW();

-- Insert or update tags
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Action', 'action', NOW()),
  ('Survival', 'survival', NOW()),
  ('Physics', 'physics', NOW()),
  ('Battle Royale', 'battle-royale', NOW()),
  ('Animal', 'animal', NOW()),
  ('Crazy Cattle 3D', 'crazy-cattle-3d', NOW())
ON CONFLICT (slug) DO NOTHING;

-- Link game with tags
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'crazy-chicken-3d' AND t.slug IN ('action', 'survival', 'physics', 'battle-royale', 'animal', 'crazy-cattle-3d')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- Add initial comment
INSERT INTO game_comments (
  game_slug, 
  user_name, 
  user_email, 
  comment_text, 
  rating, 
  status, 
  agreed_terms, 
  created_at
)
VALUES (
  'crazy-chicken-3d', 
  'ChickenChampion', 
  'chickenchampion@example.com',
  'Crazy Chicken 3D is absolutely hilarious and addictive! The physics-based combat is so satisfying - watching chickens tumble and crash into each other never gets old. I love how each location has its own unique challenges and hazards. The fact that there are no power-ups makes it a true test of skill, which I really appreciate. The controls are simple but mastering the timing and momentum takes practice. I''ve spent hours battling across Ireland, Egypt, and the other locations. The secret levels are a great bonus for dedicated players. The game strikes a perfect balance between casual fun and competitive gameplay. Whether I''m playing for 5 minutes or an hour, it''s always entertaining. Highly recommend for anyone who loves battle royale games with a quirky twist! ⭐⭐⭐⭐⭐', 
  5, 
  'approved', 
  true) ON CONFLICT DO NOTHING;




-- ============================================================
-- Migration: 20251029_add_humans_playground.sql (humans-playground)
-- ============================================================

-- Migration: Add Humans Playground game
-- Date: 2025-10-29
-- Description: Adds Humans Playground game stats, tags, and initial comment

-- Insert game statistics
INSERT INTO game_stats (slug, play_count, view_count, created_at)
VALUES ('humans-playground', 0, 0, NOW(), NOW())
ON CONFLICT (slug) DO UPDATE SET updated_at = NOW();

-- Insert or update tags
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Action', 'action', NOW()),
  ('Adventure', 'adventure', NOW()),
  ('Simulation', 'simulation', NOW()),
  ('Physics', 'physics', NOW()),
  ('Sandbox', 'sandbox', NOW()),
  ('Ragdoll', 'ragdoll', NOW()),
  ('Creation', 'creation', NOW())
ON CONFLICT (slug) DO NOTHING;

-- Link game with tags
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'humans-playground' AND t.slug IN ('action', 'adventure', 'simulation', 'physics', 'sandbox', 'ragdoll', 'creation')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- Add initial comment
INSERT INTO game_comments (
  game_slug, 
  user_name, 
  user_email, 
  comment_text, 
  rating, 
  status, 
  agreed_terms, 
  created_at
)
VALUES (
  'humans-playground', 
  'PhysicsExperimenter', 
  'physicsexperimenter@example.com',
  'Humans Playground is an absolute blast! The physics engine is incredibly realistic and satisfying. I''ve spent hours creating elaborate Rube Goldberg machines and testing different weapon combinations. The ragdoll physics make every experiment hilarious and unpredictable. Building custom robots and watching them battle is endlessly entertaining. The creative freedom is unmatched - you can literally do anything you imagine. Whether you want to create chaos or build intricate contraptions, this game delivers. The variety of tools and items keeps things fresh, and I''m constantly discovering new interactions. Perfect stress relief and creativity outlet. Highly recommended for anyone who loves sandbox games and physics simulations! ⭐⭐⭐⭐⭐', 
  5, 
  'approved', 
  true) ON CONFLICT DO NOTHING;




-- ============================================================
-- Migration: 20251029_add_tung_sahur_clicker.sql (tung-sahur-clicker)
-- ============================================================

-- Migration: Add Tung Sahur Clicker game
-- Date: 2025-10-29
-- Description: Insert game statistics, tags, and initial comment for Tung Sahur Clicker

-- Insert game statistics
INSERT INTO game_stats (slug, play_count, view_count, created_at)
VALUES ('tung-sahur-clicker', 0, 0, NOW(), NOW())
ON CONFLICT (slug) DO UPDATE SET updated_at = NOW();

-- Insert or update tags
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Clicker', 'clicker', NOW()),
  ('Casual', 'casual', NOW()),
  ('Funny', 'funny', NOW()),
  ('Idle', 'idle', NOW()),
  ('One Button', 'one-button', NOW()),
  ('Incremental', 'incremental', NOW()),
  ('Italian Brainrot', 'italian-brainrot', NOW())
ON CONFLICT (slug) DO NOTHING;

-- Link game with tags
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'tung-sahur-clicker' AND t.slug IN ('clicker', 'casual', 'funny', 'idle', 'one-button', 'incremental', 'italian-brainrot')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- Add comment for Tung Sahur Clicker
INSERT INTO game_comments (
  game_slug, user_name, user_email, comment_text, rating, status, agreed_terms, created_at
)
VALUES (
  'tung-sahur-clicker', 
  'ClickMaster88', 
  'clickmaster88@example.com',
  'Tung Sahur Clicker is pure comedic gold! The wooden warrior''s dance moves get more ridiculous with every upgrade, and I can''t stop laughing. The Italian Brainrot humor is on point - it''s absurd, silly, and absolutely addictive. I love how the limelight street corner transforms as you progress, and the 2x multiplier mechanic keeps me engaged during active sessions. The upgrade system is perfectly balanced - there''s always something new to unlock just around the corner. Whether I''m actively clicking or letting it idle, the progression feels rewarding. The skins and weather effects add so much personality to the game. This is easily one of the funniest clickers I''ve played. Highly recommend for anyone who loves idle games with a sense of humor!',
  5, 
  'approved', 
  true) ON CONFLICT DO NOTHING;




-- ============================================================
-- Migration: 20251029_add_fnaf_shooter.sql (fnaf-shooter)
-- ============================================================

-- Add FNaF Shooter game to game_stats table
-- Migration created: 2025-10-29

-- Insert game statistics
INSERT INTO game_stats (slug, play_count, view_count, created_at)
VALUES (
  'fnaf-shooter',
  0,
  0,
  NOW(),
  NOW()
)
ON CONFLICT (slug) DO UPDATE
SET 
  updated_at = NOW();

-- Insert or update tags
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Action', 'action', NOW()),
  ('Horror', 'horror', NOW()),
  ('Shooting', 'shooting', NOW()),
  ('FNAF', 'fnaf', NOW()),
  ('Gun', 'gun', NOW()),
  ('FPS', 'fps', NOW()),
  ('Halloween', 'halloween', NOW())
ON CONFLICT (slug) DO NOTHING;

-- Link game with tags
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'fnaf-shooter' AND t.slug IN ('action', 'horror', 'shooting', 'fnaf', 'gun', 'fps', 'halloween')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- Add comment for FNaF Shooter
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms,
  created_at
)
VALUES (
  'fnaf-shooter',
  'NightGuard',
  'nightguard@example.com',
  'FNaF Shooter is absolutely incredible! Finally, we get to fight back against those creepy animatronics instead of just hiding. The shooting mechanics are smooth and responsive, and the variety of weapons makes each encounter exciting. The atmosphere is perfectly dark and tense, just like the original FNAF games, but now with the added thrill of action-packed combat. I love how you can switch weapons on the fly to adapt to different situations. The energy management system adds a nice strategic element - you can''t just run and gun, you need to be smart about your movements. This is exactly what FNAF fans have been waiting for! Highly recommend for anyone who loves horror shooters or the FNAF franchise. 10/10 would hunt animatronics again!',
  5,
  'approved',
  true) ON CONFLICT DO NOTHING;




-- ============================================================
-- Migration: 20251029_add_cheese_chompers_3d.sql (cheese-chompers-3d)
-- ============================================================

-- Migration: Add Cheese Chompers 3D game
-- Date: 2025-10-29
-- Description: Insert game statistics, tags, and initial comment for Cheese Chompers 3D

-- Insert game statistics
INSERT INTO game_stats (slug, play_count, view_count, created_at)
VALUES ('cheese-chompers-3d', 0, 0, NOW(), NOW())
ON CONFLICT (slug) DO UPDATE SET updated_at = NOW();

-- Insert or update tags
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Action', 'action', NOW()),
  ('Survival', 'survival', NOW()),
  ('Fast-paced', 'fast-paced', NOW()),
  ('Arena', 'arena', NOW()),
  ('Animal', 'animal', NOW()),
  ('3D', '3d', NOW()),
  ('Multiplayer', 'multiplayer', NOW()),
  ('Physics', 'physics', NOW())
ON CONFLICT (slug) DO NOTHING;

-- Link game with tags
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'cheese-chompers-3d' AND t.slug IN ('action', 'survival', 'fast-paced', 'arena', 'animal', '3d', 'multiplayer', 'physics')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- Add comment for Cheese Chompers 3D
INSERT INTO game_comments (
  game_slug, user_name, user_email, comment_text, rating, status, agreed_terms, created_at
)
VALUES (
  'cheese-chompers-3d', 
  'CheeseChampion', 
  'cheesechampion@example.com',
  'Cheese Chompers 3D is absolutely hilarious! The physics-based knockouts are so unpredictable and fun. I love how you can flip in mid-air to gain speed boosts - it adds a real skill element to the chaos. The arena battles are fast-paced and competitive, but even when you lose, the absurd physics keep you laughing. The remastered audio makes every impact feel satisfying. This game perfectly captures the spirit of Crazy Cattle 3D while adding its own unique rat-themed charm. Whether you''re playing casually or trying to master the advanced techniques, there''s always something new to discover. Highly recommend for anyone who loves chaotic multiplayer fun!',
  5, 
  'approved', 
  true) ON CONFLICT DO NOTHING;




-- ============================================================
-- Migration: 20251027_add_dude_theft_auto.sql (dude-theft-auto)
-- ============================================================

-- Migration: Add Dude Theft Auto game
-- Created: 2025-10-27
-- Description: Adds Dude Theft Auto to game_stats table

-- Insert game stats for Dude Theft Auto
INSERT INTO game_stats (slug, play_count, view_count, last_played_at)
VALUES ('dude-theft-auto', 0, 0, NOW())
ON CONFLICT (slug) DO NOTHING;

-- Add game tags
INSERT INTO tags (name, slug, description)
VALUES 
  ('Action', 'action', 'Fast-paced action games'),
  ('Shooting', 'shooting', 'Shooting and combat games'),
  ('Simulation', 'simulation', 'Simulation games'),
  ('3D', '3d', '3D graphics games'),
  ('Multiplayer', 'multiplayer', 'Multiplayer games'),
  ('Physics', 'physics', 'Physics-based games'),
  ('Gun', 'gun', 'Gun-based games'),
  ('FPS', 'fps', 'First-person shooter games')
ON CONFLICT (slug) DO NOTHING;

-- Link game to tags
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'dude-theft-auto' AND t.slug IN ('action', 'shooting', 'simulation', '3d', 'multiplayer', 'physics', 'gun', 'fps')
ON CONFLICT (game_id, tag_id) DO NOTHING;




-- ============================================================
-- Migration: 20251025000004_add_top_speed_racing_3d.sql (top-speed-racing-3d)
-- ============================================================

-- ============================================
-- Add Top Speed Racing 3D Game
-- Date: 2025-10-25
-- ============================================

-- Insert game into game_stats table
INSERT INTO game_stats (slug, play_count, view_count, last_played_at, created_at)
VALUES (
  'top-speed-racing-3d',
  81,
  0,
  NOW(),
  NOW(),
  NOW()
)
ON CONFLICT (slug) DO UPDATE SET
  play_count = EXCLUDED.play_count,
  updated_at = NOW();

-- Insert tags if they don't exist
INSERT INTO tags (slug, name) VALUES
  ('racing', 'Racing'),
  ('3d', '3D'),
  ('car', 'Car'),
  ('speed', 'Speed'),
  ('driving', 'Driving'),
  ('sports', 'Sports')
ON CONFLICT (slug) DO NOTHING;

-- Add a comment for Top Speed Racing 3D
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
  'top-speed-racing-3d',
  'SpeedDemon',
  'speeddemon@racing.com',
  'Top Speed Racing 3D is absolutely incredible! The graphics are stunning, the physics feel realistic, and the car customization is so deep. I have spent hours perfecting my dream car and racing on different tracks. The multiplayer mode is super competitive and the leaderboards keep me coming back. This is hands down the best browser-based racing game I have ever played. The controls are smooth, the tracks are diverse, and every race feels intense. Highly recommend to any racing fan!',
  5,
  'approved',
  true,
  NOW() - INTERVAL '2 days'
);

-- Verify the insertion
SELECT
  slug,
  play_count,
  view_count,
  created_at
FROM game_stats
WHERE slug = 'top-speed-racing-3d';

SELECT
  game_slug,
  user_name,
  comment_text,
  rating,
  status,
  created_at
FROM game_comments
WHERE game_slug = 'top-speed-racing-3d';




-- ============================================================
-- Migration: 20251025000003_add_crazy_animal_city.sql (crazy-animal-city)
-- ============================================================

-- Migration: Add Crazy Animal City game
-- Created: 2025-10-25
-- Description: Adds Crazy Animal City game with tags and initial comment

-- Insert the game
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
  is_featured,
  is_active
) VALUES (
  'crazy-animal-city',
  'Crazy Animal City',
  'Unleash Chaos in the Ultimate 3D Animal Rampage Simulator',
  '/images/thumbnails/crazy-animal-city.webp',
  'https://1games.io/game/crazy-animal-city/',
  'Unleash chaos in Crazy Animal City, a wild 3D sim packed with insane destruction and beastly rage. Smash, roar, and dominate the virtual jungle! Experience the thrill of destruction with powerful animals in a vibrant 3D cityscape. Whether you''re a ferocious lion, a mighty gorilla, or a rampaging elephant, your mission is simple: destroy everything in sight, dominate the urban jungle, and become the ultimate beast of the city! This game combines the thrill of destruction with the freedom of open-world exploration. Smash through buildings, flip cars, terrify citizens, and leave a trail of mayhem wherever you go. With stunning 3D graphics, realistic physics, and addictive gameplay, Crazy Animal City delivers an adrenaline-pumping experience that will keep you coming back for more carnage and chaos. From the moment you step into the city, you''ll feel the raw power of nature unleashed in an urban environment. The game features multiple playable animals, each with unique abilities and destruction styles. Whether you prefer the brute strength of a rhino or the agility of a tiger, there''s an animal that matches your playstyle. The city is your playground, and destruction is your game! Play as lions, gorillas, elephants, tigers, rhinos, and bears—each with unique abilities. Explore a massive open-world city filled with interactive elements and surprises. Advanced physics engine delivers incredibly satisfying and realistic destruction mechanics. Complete challenges to unlock new animals and upgrades. Compete on global leaderboards and share your destruction achievements. Perfect for stress relief and casual gaming sessions.',
  4.6,
  320,
  NOW(),
  false,
  true
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  subtitle = EXCLUDED.subtitle,
  cover = EXCLUDED.cover,
  play_url = EXCLUDED.play_url,
  description = EXCLUDED.description,
  rating = EXCLUDED.rating,
  play_count = EXCLUDED.play_count,
  released_at = EXCLUDED.released_at,
  updated_at = NOW();

-- Insert tags if they don't exist
INSERT INTO tags (slug, name) VALUES
  ('3d', '3D'),
  ('simulation', 'Simulation'),
  ('action', 'Action'),
  ('casual', 'Casual'),
  ('animal', 'Animal'),
  ('city', 'City')
ON CONFLICT (slug) DO NOTHING;

-- Link game to tags
INSERT INTO game_tags (game_id, tag_id)
SELECT 
  (SELECT id FROM games WHERE slug = 'crazy-animal-city'),
  id
FROM tags
WHERE slug IN ('3d', 'simulation', 'action', 'casual', 'animal', 'city')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- Add an initial comment
INSERT INTO game_comments (
  game_id,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms,
  created_at
)
SELECT 
  id,
  'Alex "BeastMaster" Chen',
  'beastmaster@example.com',
  'Crazy Animal City is absolutely INSANE! 🦁💥 I''ve been playing for hours and can''t stop. The destruction physics are so satisfying—watching buildings crumble as my gorilla smashes through them never gets old. Each animal feels completely different to play. The lion is my favorite for its powerful roar that scatters crowds, but the elephant''s charging attack is pure chaos! The city is huge and packed with things to destroy. I love how the environment reacts to your rampage—police cars chasing you, citizens running in panic, and eventually the military shows up. It really makes you feel like an unstoppable force of nature. The graphics are stunning for a browser game, and the controls are super smooth. I''ve unlocked three animals so far and working on getting the rhino next. The challenges are fun and give you goals beyond just random destruction. Highly recommend if you want to blow off some steam or just have a blast causing virtual mayhem! 🎮🔥',
  5,
  'approved',
  true,
  NOW() - INTERVAL '2 hours'
FROM games
WHERE slug = 'crazy-animal-city'
ON CONFLICT DO NOTHING;

-- Verify the insertion
DO $$
DECLARE
  game_count INTEGER;
  tag_count INTEGER;
  comment_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO game_count FROM games WHERE slug = 'crazy-animal-city';
  SELECT COUNT(*) INTO tag_count FROM game_tags WHERE game_id = (SELECT id FROM games WHERE slug = 'crazy-animal-city');
  SELECT COUNT(*) INTO comment_count FROM game_comments WHERE game_id = (SELECT id FROM games WHERE slug = 'crazy-animal-city');
  
  RAISE NOTICE 'Migration completed:';
  RAISE NOTICE '  - Games inserted: %', game_count;
  RAISE NOTICE '  - Tags linked: %', tag_count;
  RAISE NOTICE '  - Comments added: %', comment_count;
  
  IF game_count = 0 THEN
    RAISE EXCEPTION 'Failed to insert game';
  END IF;
  
  IF tag_count < 6 THEN
    RAISE WARNING 'Expected 6 tags, but only % were linked', tag_count;
  END IF;
END $$;




-- ============================================================
-- Migration: 20251025000002_add_spacebar_clicker_3.sql (spacebar-clicker-3)
-- ============================================================

-- Migration: Add Spacebar Clicker 3 game
-- Created: 2025-10-25
-- Description: Adds Spacebar Clicker 3 game with tags and initial comment

-- Insert the game
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
  is_featured,
  is_active
) VALUES (
  'spacebar-clicker-3',
  'Spacebar Clicker 3',
  'Test Your Spacebar Speed - The Ultimate Clicking Challenge!',
  '/images/thumbnails/spacebar-clicker-3.webp',
  'https://1games.io/game/spacebar-clicker-3/',
  'The engaging race of the keys is back in full force with Spacebar Clicker 3! Start the non-stop experience with the superhero speed of your fingertips! Test your clicking speed, compete with friends, and become the ultimate spacebar champion in this addictive clicker game. Choose from multiple time modes (5, 10, 30, or 60 seconds), track your clicks per second (CPS), and compete on global leaderboards. Whether you''re training for esports or just want to test your clicking prowess, Spacebar Clicker 3 provides the perfect platform. With accurate tracking, detailed statistics, and competitive features, you can measure and improve your clicking speed over time. Can you achieve the coveted "Superhuman" rating with over 10 CPS? Or will you push even further to reach "Godlike" status? The game features a clean, distraction-free interface focused on performance, making it perfect for quick gaming sessions or serious training. Regular practice can significantly improve your CPS, developing better finger coordination, faster reflexes, and improved hand-eye coordination. Join thousands of players worldwide in the ultimate test of clicking speed!',
  4.7,
  129,
  '2025-10-25',
  false,
  true
) ON CONFLICT (slug) DO NOTHING;

-- Insert tags if they don't exist
INSERT INTO tags (slug, name) VALUES
  ('clicker', 'Clicker'),
  ('casual', 'Casual'),
  ('skill', 'Skill'),
  ('speed', 'Speed'),
  ('arcade', 'Arcade'),
  ('incremental', 'Incremental')
ON CONFLICT (slug) DO NOTHING;

-- Link game to tags
INSERT INTO game_tags (game_id, tag_id)
SELECT 
  g.id,
  t.id
FROM games g
CROSS JOIN tags t
WHERE g.slug = 'spacebar-clicker-3'
  AND t.slug IN ('clicker', 'casual', 'skill', 'speed', 'arcade', 'incremental')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- Add a sample comment for the game
INSERT INTO game_comments (
  game_slug,
  user_name,
  comment_text,
  rating,
  status,
  user_email,
  agreed_terms
)
VALUES (
  'spacebar-clicker-3',
  'SpeedDemon88',
  'This is the best spacebar clicking test I''ve ever used! I started at 6 CPS and after a week of practice, I''m now hitting 11 CPS consistently. The different time modes are perfect for training - I use the 5-second sprint to warm up, then move to the 30-second challenge for endurance. The real-time CPS counter is super accurate and the performance ratings really motivate you to improve. My friends and I have been competing all week and it''s become our go-to warm-up before gaming sessions. Highly recommend for anyone who wants to improve their clicking speed or just have some competitive fun!',
  5,
  'approved',
  'speeddemon88@example.com',
  true
) ON CONFLICT DO NOTHING;




-- ============================================================
-- 为缺少评论的游戏添加评论
-- ============================================================

-- Blocky Rush 评论
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms,
  created_at
)
VALUES (
  'blocky-rush',
  'SpeedRunner',
  'speedrunner@example.com',
  'Blocky Rush is an incredibly addictive endless runner! The blocky graphics are charming and the gameplay is super smooth. I love how the difficulty ramps up gradually - it keeps you on your toes without being frustrating. The controls are responsive and the obstacles are well-designed. Perfect game for quick sessions or long runs trying to beat your high score. Highly recommend for fans of endless runners!',
  5,
  'approved',
  true,
  NOW()
)
ON CONFLICT DO NOTHING;

-- Crazy Cattle 3D 评论
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms,
  created_at
)
VALUES (
  'crazy-cattle-3d-unblocked',
  'CattleHerder',
  'cattleherder@example.com',
  'Crazy Cattle 3D is hilarious and so much fun! The 3D graphics are great and the cattle physics are absolutely wild. Trying to herd these crazy cows is challenging but rewarding. The game has a great sense of humor and the levels are well-designed. Controls take a bit to get used to but once you master them, it is a blast. Perfect free online game for anyone who wants something unique and entertaining!',
  5,
  'approved',
  true,
  NOW()
)
ON CONFLICT DO NOTHING;


-- ============================================================
-- 批量迁移完成
-- ============================================================
