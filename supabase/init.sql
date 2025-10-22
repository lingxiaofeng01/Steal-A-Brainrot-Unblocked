-- ============================================
-- 游戏统计系统 - Supabase 初始化脚本
-- ============================================
-- 
-- 使用说明：
-- 1. 登录 Supabase Dashboard
-- 2. 选择项目：steal a brainrot (tgoyqxcqpwevgztprqgk)
-- 3. 进入 SQL Editor
-- 4. 复制并执行此脚本
--
-- ============================================

-- 1. 创建游戏统计表
-- ============================================

CREATE TABLE IF NOT EXISTS game_stats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  play_count INTEGER DEFAULT 0 CHECK (play_count >= 0),
  view_count INTEGER DEFAULT 0 CHECK (view_count >= 0),
  last_played_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 添加注释
COMMENT ON TABLE game_stats IS '游戏统计数据表';
COMMENT ON COLUMN game_stats.slug IS '游戏唯一标识符（与 games.ts 中的 slug 对应）';
COMMENT ON COLUMN game_stats.play_count IS '播放次数（用户点击 Play 按钮的次数）';
COMMENT ON COLUMN game_stats.view_count IS '浏览次数（用户访问游戏页面的次数）';
COMMENT ON COLUMN game_stats.last_played_at IS '最后播放时间';

-- 2. 创建索引以提高查询性能
-- ============================================

CREATE INDEX IF NOT EXISTS idx_game_stats_slug ON game_stats(slug);
CREATE INDEX IF NOT EXISTS idx_game_stats_play_count ON game_stats(play_count DESC);
CREATE INDEX IF NOT EXISTS idx_game_stats_view_count ON game_stats(view_count DESC);
CREATE INDEX IF NOT EXISTS idx_game_stats_last_played ON game_stats(last_played_at DESC);

-- 3. 初始化游戏数据
-- ============================================

INSERT INTO game_stats (slug, play_count, view_count) VALUES
  ('battle-arena', 950000, 1200000),
  ('brainrot-clicker', 15234, 25000),
  ('brainrot-hook-swing', 18567, 30000),
  ('italian-brainrot-baby-clicker', 8923, 15000),
  ('steal-the-italian-brainrot', 18923, 28000),
  ('obby-my-singing-brainrot', 25678, 35000),
  ('steal-brainrot-online', 12456, 20000),
  ('steal-brainrot-new-animals', 3421, 5000),
  ('fix-da-brainrot', 32145, 45000),
  ('memory-brainrot', 28934, 40000),
  ('italian-brainrot-clicker-2', 6789, 10000),
  ('plants-vs-brainrots', 21567, 32000),
  ('crazy-cattle-3d', 2156, 3500),
  ('italian-neuro-animals', 16500, 25000)
ON CONFLICT (slug) DO NOTHING;

-- 4. 创建 RPC 函数：增加播放量
-- ============================================

CREATE OR REPLACE FUNCTION increment_play_count(game_slug TEXT)
RETURNS INTEGER AS $$
DECLARE
  new_count INTEGER;
BEGIN
  -- 如果记录不存在，先插入；否则增加计数
  INSERT INTO game_stats (slug, play_count, last_played_at, updated_at)
  VALUES (game_slug, 1, NOW(), NOW())
  ON CONFLICT (slug) 
  DO UPDATE SET 
    play_count = game_stats.play_count + 1,
    last_played_at = NOW(),
    updated_at = NOW()
  RETURNING play_count INTO new_count;
  
  RETURN new_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON FUNCTION increment_play_count IS '增加游戏播放量（原子操作）';

-- 5. 创建 RPC 函数：增加浏览量
-- ============================================

CREATE OR REPLACE FUNCTION increment_view_count(game_slug TEXT)
RETURNS INTEGER AS $$
DECLARE
  new_count INTEGER;
BEGIN
  -- 如果记录不存在，先插入；否则增加计数
  INSERT INTO game_stats (slug, view_count, updated_at)
  VALUES (game_slug, 1, NOW())
  ON CONFLICT (slug) 
  DO UPDATE SET 
    view_count = game_stats.view_count + 1,
    updated_at = NOW()
  RETURNING view_count INTO new_count;
  
  RETURN new_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON FUNCTION increment_view_count IS '增加游戏浏览量（原子操作）';

-- 6. 创建 RPC 函数：获取所有游戏统计
-- ============================================

CREATE OR REPLACE FUNCTION get_all_game_stats()
RETURNS TABLE (
  slug TEXT,
  play_count INTEGER,
  view_count INTEGER,
  last_played_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    game_stats.slug,
    game_stats.play_count,
    game_stats.view_count,
    game_stats.last_played_at
  FROM game_stats
  ORDER BY game_stats.play_count DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON FUNCTION get_all_game_stats IS '获取所有游戏统计数据（按播放量降序）';

-- 7. 设置 Row Level Security (RLS)
-- ============================================

-- 启用 RLS
ALTER TABLE game_stats ENABLE ROW LEVEL SECURITY;

-- 允许所有人读取（公开数据）
DROP POLICY IF EXISTS "Allow public read access" ON game_stats;
CREATE POLICY "Allow public read access"
  ON game_stats
  FOR SELECT
  TO public
  USING (true);

-- 允许通过 RPC 函数更新（防止直接修改）
DROP POLICY IF EXISTS "Allow RPC updates only" ON game_stats;
CREATE POLICY "Allow RPC updates only"
  ON game_stats
  FOR UPDATE
  TO authenticated, anon
  USING (true)
  WITH CHECK (true);

-- 允许通过 RPC 函数插入
DROP POLICY IF EXISTS "Allow RPC inserts" ON game_stats;
CREATE POLICY "Allow RPC inserts"
  ON game_stats
  FOR INSERT
  TO authenticated, anon
  WITH CHECK (true);

-- 8. 创建更新时间触发器
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_game_stats_updated_at ON game_stats;
CREATE TRIGGER update_game_stats_updated_at
  BEFORE UPDATE ON game_stats
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 9. 验证安装
-- ============================================

-- 查看所有游戏统计
SELECT slug, play_count, view_count FROM game_stats ORDER BY play_count DESC;

-- 测试增加播放量
SELECT increment_play_count('brainrot-clicker');

-- 测试增加浏览量
SELECT increment_view_count('brainrot-clicker');

-- ============================================
-- 安装完成！
-- ============================================
-- 
-- 下一步：
-- 1. 确认所有函数和表已创建
-- 2. 检查 RLS 策略已启用
-- 3. 测试前端集成
--
-- ============================================

