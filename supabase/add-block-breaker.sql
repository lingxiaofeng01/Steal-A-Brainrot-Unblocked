-- ============================================
-- Add Block Breaker Game to Supabase
-- ============================================
-- 
-- 使用说明：
-- 1. 登录 Supabase Dashboard
-- 2. 选择项目：steal a brainrot (tgoyqxcqpwevgztprqgk)
-- 3. 进入 SQL Editor
-- 4. 复制并执行此脚本
--
-- ============================================

BEGIN;

-- 1. 插入游戏数据
INSERT INTO games (
  slug, 
  title, 
  cover, 
  play_url, 
  description, 
  rating, 
  play_count, 
  released_at, 
  is_active,
  is_featured
) VALUES (
  'block-breaker',
  'Block Breaker',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/block-breaker.jpeg',
  '//html5.gamedistribution.com/rvvASMiM/e8c759ba34bd4b9b9760b77fb04b69d9/index.html?gd_sdk_referrer_url=https%3A%2F%2F1games.io%2Fblock-breaker&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovLzFnYW1lcy5pby9ibG9jay1icmVha2VyIiwicGFyZW50RG9tYWluIjoiMWdhbWVzLmlvIiwidG9wRG9tYWluIjoiMWdhbWVzLmlvIiwiaGFzSW1wcmVzc2lvbiI6ZmFsc2UsImxvYWRlckVuYWJsZWQiOnRydWUsImhvc3QiOiJodG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbSIsInZlcnNpb24iOiIxLjUuMTgifQ%253D%253D',
  'Block Breaker is an exciting arcade game that tests your reflexes and precision. Break through colorful blocks, master challenging levels, and aim for the highest score in this addictive brick-breaking adventure!',
  4.5,
  0,
  '2025-10-27',
  true,
  false
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  cover = EXCLUDED.cover,
  play_url = EXCLUDED.play_url,
  description = EXCLUDED.description,
  rating = EXCLUDED.rating,
  released_at = EXCLUDED.released_at,
  is_active = EXCLUDED.is_active,
  is_featured = EXCLUDED.is_featured;

-- 2. 获取游戏 ID
DO $$
DECLARE
  game_id_var UUID;
  tag_id_var UUID;
BEGIN
  -- 获取游戏 ID
  SELECT id INTO game_id_var FROM games WHERE slug = 'block-breaker';

  -- 3. 创建或获取标签并关联
  -- Arcade
  INSERT INTO tags (name, slug) VALUES ('Arcade', 'arcade') 
  ON CONFLICT (slug) DO NOTHING;
  SELECT id INTO tag_id_var FROM tags WHERE slug = 'arcade';
  INSERT INTO game_tags (game_id, tag_id) VALUES (game_id_var, tag_id_var)
  ON CONFLICT (game_id, tag_id) DO NOTHING;

  -- Action
  INSERT INTO tags (name, slug) VALUES ('Action', 'action') 
  ON CONFLICT (slug) DO NOTHING;
  SELECT id INTO tag_id_var FROM tags WHERE slug = 'action';
  INSERT INTO game_tags (game_id, tag_id) VALUES (game_id_var, tag_id_var)
  ON CONFLICT (game_id, tag_id) DO NOTHING;

  -- Skill
  INSERT INTO tags (name, slug) VALUES ('Skill', 'skill') 
  ON CONFLICT (slug) DO NOTHING;
  SELECT id INTO tag_id_var FROM tags WHERE slug = 'skill';
  INSERT INTO game_tags (game_id, tag_id) VALUES (game_id_var, tag_id_var)
  ON CONFLICT (game_id, tag_id) DO NOTHING;

  -- Casual
  INSERT INTO tags (name, slug) VALUES ('Casual', 'casual') 
  ON CONFLICT (slug) DO NOTHING;
  SELECT id INTO tag_id_var FROM tags WHERE slug = 'casual';
  INSERT INTO game_tags (game_id, tag_id) VALUES (game_id_var, tag_id_var)
  ON CONFLICT (game_id, tag_id) DO NOTHING;

  -- Block
  INSERT INTO tags (name, slug) VALUES ('Block', 'block') 
  ON CONFLICT (slug) DO NOTHING;
  SELECT id INTO tag_id_var FROM tags WHERE slug = 'block';
  INSERT INTO game_tags (game_id, tag_id) VALUES (game_id_var, tag_id_var)
  ON CONFLICT (game_id, tag_id) DO NOTHING;

  -- Agility
  INSERT INTO tags (name, slug) VALUES ('Agility', 'agility') 
  ON CONFLICT (slug) DO NOTHING;
  SELECT id INTO tag_id_var FROM tags WHERE slug = 'agility';
  INSERT INTO game_tags (game_id, tag_id) VALUES (game_id_var, tag_id_var)
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
    created_at
  ) VALUES (
    'block-breaker',
    'BrickBuster',
    'brickbuster@example.com',
    'Block Breaker is absolutely addictive! The 150 levels keep me engaged for hours. I love how the difficulty gradually increases - it starts easy but gets really challenging. The power-ups like multi-ball and extended paddle are game-changers. The controls are super responsive and the physics feel just right. Perfect for quick gaming sessions or longer play. Highly recommend! 🎯🔥',
    5,
    'approved',
    true,
    NOW()
  );

  -- 5. 初始化游戏统计数据
  INSERT INTO game_stats (slug, play_count, view_count)
  VALUES ('block-breaker', 0, 0)
  ON CONFLICT (slug) DO NOTHING;

END $$;

COMMIT;

-- ============================================
-- 验证安装
-- ============================================

-- 查看游戏数据
SELECT id, slug, title, rating, released_at FROM games WHERE slug = 'block-breaker';

-- 查看关联的标签
SELECT t.name 
FROM tags t
JOIN game_tags gt ON t.id = gt.tag_id
JOIN games g ON gt.game_id = g.id
WHERE g.slug = 'block-breaker';

-- 查看评论
SELECT user_name, comment_text, rating, status
FROM game_comments
WHERE game_slug = 'block-breaker';

-- 查看游戏统计
SELECT * FROM game_stats WHERE slug = 'block-breaker';

-- ============================================
-- 完成！
-- ============================================

