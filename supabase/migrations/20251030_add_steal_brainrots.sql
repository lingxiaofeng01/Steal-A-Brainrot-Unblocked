-- =====================================================
-- Steal Brainrots 游戏数据迁移
-- 创建时间: 2025-10-30
-- 描述: 添加 Steal Brainrots 游戏的统计数据、标签和评论
-- =====================================================

-- 1. 插入游戏统计数据
INSERT INTO game_stats (slug, play_count, view_count, created_at, updated_at)
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
INSERT INTO game_tags (game_slug, tag_slug, created_at)
SELECT 'steal-brainrots', slug, NOW()
FROM tags
WHERE slug IN ('action', 'puzzle', 'strategy', 'collecting', 'stealth', 'brainrot', 'casual', 'arcade')
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

