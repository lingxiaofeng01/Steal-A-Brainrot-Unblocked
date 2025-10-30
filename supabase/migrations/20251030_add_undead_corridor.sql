-- =====================================================
-- Undead Corridor 游戏数据迁移
-- 创建时间: 2025-10-30
-- 描述: 添加 Undead Corridor 游戏的统计数据、标签和评论
-- =====================================================

-- 1. 插入游戏统计数据
INSERT INTO game_stats (slug, play_count, view_count, created_at, updated_at)
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
INSERT INTO game_tags (game_slug, tag_slug, created_at)
SELECT 'undead-corridor', slug, NOW()
FROM tags
WHERE slug IN ('shooting', 'horror', 'zombie', 'survival', 'action', '2d', 'arcade')
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

