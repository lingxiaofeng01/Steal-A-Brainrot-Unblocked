-- =====================================================
-- A Pretty Odd Bunny: Roast It! 游戏数据迁移
-- 创建时间: 2025-10-30
-- 描述: 添加 A Pretty Odd Bunny: Roast It! 游戏的统计数据、标签和评论
-- =====================================================

-- 1. 插入游戏统计数据
INSERT INTO game_stats (slug, play_count, view_count, created_at, updated_at)
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
INSERT INTO game_tags (game_slug, tag_slug, created_at)
SELECT 'a-pretty-odd-bunny-roast-it', slug, NOW()
FROM tags
WHERE slug IN ('arcade', 'puzzle', 'platform', 'animal', 'bunny', 'funny', 'multiplayer', 'casual')
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

