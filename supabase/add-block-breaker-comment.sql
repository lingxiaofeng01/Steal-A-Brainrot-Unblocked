-- ============================================
-- Add Block Breaker Comment to Supabase
-- ============================================
-- 
-- 使用说明：
-- 1. 登录 Supabase Dashboard
-- 2. 选择项目：steal a brainrot (tgoyqxcqpwevgztprqgk)
-- 3. 进入 SQL Editor
-- 4. 复制并执行此脚本
--
-- 注意：本脚本仅添加评论和游戏统计数据
-- 游戏数据已在 src/data/games.ts 中定义
-- ============================================

BEGIN;

-- 1. 添加主题评论
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms
) VALUES (
  'block-breaker',
  'BrickBuster',
  'brickbuster@example.com',
  'Block Breaker is absolutely addictive! The 150 levels keep me engaged for hours. I love how the difficulty gradually increases - it starts easy but gets really challenging. The power-ups like multi-ball and extended paddle are game-changers. The controls are super responsive and the physics feel just right. Perfect for quick gaming sessions or longer play. Highly recommend! 🎯🔥',
  5,
  'approved',
  true
)
ON CONFLICT DO NOTHING;

-- 2. 初始化游戏统计数据
INSERT INTO game_stats (slug, play_count, view_count)
VALUES ('block-breaker', 0, 0)
ON CONFLICT (slug) DO NOTHING;

COMMIT;

-- ============================================
-- 验证安装
-- ============================================

-- 查看评论
SELECT user_name, comment_text, rating, status, created_at
FROM game_comments
WHERE game_slug = 'block-breaker';

-- 查看游戏统计
SELECT * FROM game_stats WHERE slug = 'block-breaker';

-- ============================================
-- 完成！
-- ============================================

