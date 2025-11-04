-- ============================================
-- Steal Brainrots 游戏评论和统计数据初始化
-- ============================================
-- 
-- 用途：为 Steal Brainrots 游戏添加初始评论和统计数据
-- 
-- 使用方法：
-- 1. 登录 Supabase Dashboard (https://app.supabase.com)
-- 2. 选择项目：steal a brainrot (tgoyqxcqpwevgztprqgk)
-- 3. 进入 SQL Editor
-- 4. 复制此文件内容并执行
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
  'steal-brainrots',
  'MemeCollector',
  'memecollector@example.com',
  'Steal Brainrots is absolutely amazing! The multiplayer heist gameplay is so addictive - I love raiding other players'' bases and stealing their rare memes. The rarity system from Common to Secret keeps me grinding for hours. The lockdown timer adds real strategy to defending your base. Best Roblox-style game I''ve played! The passive income system is genius - my Mythic Brainrots generate tons of cash even when I''m offline. Highly recommend for anyone who loves collection games and competitive PvP! 🎮💎🔥',
  5,
  'approved',
  true
)
ON CONFLICT DO NOTHING;

-- 2. 初始化游戏统计数据
INSERT INTO game_stats (slug, play_count, view_count)
VALUES ('steal-brainrots', 102, 0)
ON CONFLICT (slug) DO NOTHING;

COMMIT;

-- ============================================
-- 验证安装
-- ============================================

-- 查看评论
SELECT user_name, comment_text, rating, status, created_at
FROM game_comments
WHERE game_slug = 'steal-brainrots';

-- 查看游戏统计
SELECT * FROM game_stats WHERE slug = 'steal-brainrots';

-- ============================================
-- 完成！
-- ============================================

-- 预期结果：
-- ✅ 1 条评论已添加（MemeCollector，5星评分）
-- ✅ 游戏统计已初始化（play_count: 102, view_count: 0）

