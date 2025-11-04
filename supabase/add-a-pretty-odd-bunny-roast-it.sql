-- ============================================
-- A Pretty Odd Bunny: Roast It! - Supabase 初始化脚本
-- ============================================
-- 
-- 游戏信息：
-- 名称：A Pretty Odd Bunny: Roast It!
-- Slug：a-pretty-odd-bunny-roast-it
-- 发布日期：2025-10-30
-- 评分：4.7/5
-- 
-- 使用说明：
-- 1. 登录 Supabase Dashboard
-- 2. 选择项目：steal a brainrot (tgoyqxcqpwevgztprqgk)
-- 3. 进入 SQL Editor
-- 4. 复制并执行此脚本
--
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
  'a-pretty-odd-bunny-roast-it',
  'PuzzleMaster',
  'puzzlemaster@example.com',
  'A Pretty Odd Bunny: Roast It! is absolutely hilarious and addictive! The stealth puzzles are challenging but fair, and the two-player mode is perfect for competing with friends. I love collecting hot dogs while sneaking past supervisors - it never gets old! The mask customization system adds great replay value. The mini-games in two-player mode are super fun, especially the cookie pushing battles. Controls are responsive and the humor is on point. Highly recommend for puzzle and platform game fans! 🐰🌭🎮',
  5,
  'approved',
  true
)
ON CONFLICT DO NOTHING;

-- 2. 初始化游戏统计数据
INSERT INTO game_stats (slug, play_count, view_count)
VALUES ('a-pretty-odd-bunny-roast-it', 0, 0)
ON CONFLICT (slug) DO NOTHING;

COMMIT;

-- ============================================
-- 验证安装
-- ============================================

-- 查看评论
SELECT user_name, comment_text, rating, status, created_at
FROM game_comments
WHERE game_slug = 'a-pretty-odd-bunny-roast-it';

-- 查看游戏统计
SELECT * FROM game_stats WHERE slug = 'a-pretty-odd-bunny-roast-it';

-- ============================================
-- 完成！
-- ============================================

-- 预期结果：
-- ✅ 1 条评论已添加（PuzzleMaster，5星评分）
-- ✅ 游戏统计已初始化（play_count: 0, view_count: 0）

