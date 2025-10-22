-- 插入首页三条预设评论
-- 这个脚本应该在 20251022000000_add_rating_status_to_comments.sql 之后执行

-- 首先删除旧的首页评论（如果存在）
DELETE FROM game_comments 
WHERE game_slug = 'steal-a-brainrot-unblocked' 
AND user_name IN ('Player123', 'GamerPro', 'BrainrotFan');

-- 插入三条预设评论
INSERT INTO game_comments (game_slug, user_name, user_email, comment_text, rating, status, agreed_terms)
VALUES
  (
    'steal-a-brainrot-unblocked',
    'Player123',
    'player123@example.com',
    'This game is so addictive! Love collecting all the Brainrots! The unblocked version works perfectly at school and work!',
    5,
    'approved',
    true
  ),
  (
    'steal-a-brainrot-unblocked',
    'GamerPro',
    'gamerpro@example.com',
    'Great free online game! No downloads required, instant play. Works perfectly at school! Best unblocked game I''ve found!',
    4,
    'approved',
    true
  ),
  (
    'steal-a-brainrot-unblocked',
    'BrainrotFan',
    'brainrotfan@example.com',
    'The stealing mechanic is so fun! Best idle game ever! Free to play, no downloads, instant play - exactly what I needed!',
    5,
    'approved',
    true
  );

-- 验证插入结果
SELECT COUNT(*) as total_comments, 
       COUNT(CASE WHEN status = 'approved' THEN 1 END) as approved_comments
FROM game_comments 
WHERE game_slug = 'steal-a-brainrot-unblocked';

