-- =====================================================
-- Rocket Fortress 游戏数据迁移
-- 创建时间: 2025-10-30
-- 描述: 添加 Rocket Fortress 游戏的统计数据、标签和评论
-- =====================================================

-- 1. 插入游戏统计数据
INSERT INTO game_stats (slug, play_count, view_count, created_at, updated_at)
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
INSERT INTO game_tags (game_slug, tag_slug, created_at)
SELECT 'rocket-fortress', slug, NOW()
FROM tags
WHERE slug IN ('clicker', 'rpg', 'action', 'strategy', 'casual', 'shooting', 'kids')
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
  'rocket-fortress',
  'MissileCommander',
  'missilecommander@example.com',
  'Rocket Fortress is absolutely addictive! The clicker RPG mechanics are perfectly balanced - clicking to fire missiles feels satisfying, and the upgrade system keeps you coming back for more. I love how you can recruit marines to auto-fire while you focus on strategic upgrades. The demon waves get progressively harder, which makes every upgrade feel meaningful. Boss battles are intense and require good preparation. The cartoonish graphics are vibrant and fun, making the holy war against demons visually appealing. Resource management between missiles and units adds great strategic depth. The game rewards both active clicking and smart upgrade choices. Perfect for casual play or serious grinding sessions. Highly recommend for clicker and RPG fans! 🚀👹💎',
  5,
  'approved',
  true,
  NOW() - INTERVAL ''2 days'',
  NOW() - INTERVAL ''2 days''
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

