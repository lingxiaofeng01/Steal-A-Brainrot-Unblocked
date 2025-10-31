/*
  # Add Soflo Wheelie Life Game

  ## Overview
  This migration adds the new game "Soflo Wheelie Life" to the database with:
  - Game record in games table
  - Tags association
  - Initial comment with rating

  ## Changes
  1. Insert game record
  2. Associate game with tags
  3. Add themed comment
*/

-- 1. 插入游戏记录
INSERT INTO games (
  slug,
  title,
  subtitle,
  cover,
  play_url,
  description,
  rating,
  play_count,
  released_at,
  is_active,
  is_featured
) VALUES (
  'soflo-wheelie-life',
  'Soflo Wheelie Life',
  'Experience the Ultimate Motorcycle Wheelie Challenge',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/soflo-wheelie-life.png',
  'https://scratch.mit.edu/projects/1231016758/embed',
  'Soflo Wheelie Life is an exciting motorcycle stunt game that lets you perform crazy wheelies directly in your browser, completely free. Created by LucasTheSigmaMogger on the Scratch platform, the game was released on October 20, 2025, quickly winning over the hearts of young gamers who love challenges and arcade motorcycle games. In the world of Soflo Wheelie Life, you will control a motorbike through the vibrant streets of South Florida, avoiding cars and walls, and performing a series of stunts to increase your score. This is the perfect combination of skill, rhythm, and excitement as your multiplier increases. Master various tricks including standing on the saddle for style points, knee drag tricks for multiplier boosts, hand drags to keep the flow, and the extremely risky no-hands wheelie. The game features multiple bikes with different characteristics - light bikes are easy to wheelie but prone to shaking (suitable for beginners), while heavy bikes are stable for long wheelies and big tricks. Play Soflo Wheelie Life now and experience the thrill of performing perfect wheelies through the streets of South Florida!',
  5.0,
  0,
  '2025-10-31',
  true,
  false
)
ON CONFLICT (slug) DO NOTHING;

-- 2. 确保所有需要的标签存在
INSERT INTO tags (slug, name, created_at)
VALUES
  ('racing', 'Racing', NOW()),
  ('sport', 'Sport', NOW()),
  ('driving', 'Driving', NOW()),
  ('moto', 'Moto', NOW()),
  ('scratch', 'Scratch', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('casual', 'Casual', NOW()),
  ('skill', 'Skill', NOW())
ON CONFLICT (slug) DO NOTHING;

-- 3. 关联游戏和标签
INSERT INTO game_tags (game_slug, tag_slug, created_at)
SELECT 'soflo-wheelie-life', slug, NOW()
FROM tags
WHERE slug IN ('racing', 'sport', 'driving', 'moto', 'scratch', 'arcade', 'casual', 'skill')
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
  'soflo-wheelie-life',
  'WheelieKing',
  'wheelieking@example.com',
  'Soflo Wheelie Life is absolutely incredible! The motorcycle physics feel so realistic - balancing the wheelie is challenging but super satisfying when you nail it. I love how you can switch between different bikes, each with unique handling. The light bikes are perfect for quick tricks, while the heavy bikes let me hold those long, smooth wheelies through South Florida streets. The trick system is genius - combining knee drags, hand drags, and no-hands wheelies to build up that multiplier is so addictive! The customization options are awesome too - changing helmets and bikes to create my own style without spending money is refreshing. The leaderboard keeps me coming back to beat my friends'' high scores. The Scratch platform makes it super accessible - I can play anywhere without downloads. The endless mode is perfect for practicing and improving my skills. The vibrant South Florida setting looks amazing, and the smooth animations make every trick feel rewarding. This is hands down the best motorcycle wheelie game I''ve played! Highly recommend for anyone who loves skill-based racing games! 🏍️🔥💯',
  5,
  'approved',
  true,
  NOW(),
  NOW()
)
ON CONFLICT DO NOTHING;

