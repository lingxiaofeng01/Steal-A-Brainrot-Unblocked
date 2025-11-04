/*
  # Add Bike Xtreme Game

  ## Overview
  This migration adds the new game "Bike Xtreme" to the database with:
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
  'bike-xtreme',
  'Bike Xtreme',
  'Master the Ultimate Mountain Bike Challenge - Extreme 2D Racing Game',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/bike-xtreme.webp',
  'https://game.azgame.io/bike-xtreme/',
  'Bike Xtreme is an intense 2D mountain bike game where you conquer steep hills, tricky terrains, and dangerous slopes using skill, speed, and perfect balance to reach the finish line. Experience realistic physics simulation and dynamic terrains in this challenging yet rewarding gameplay adventure! Bike Xtreme is a challenging side-scrolling cycling game where your mission is to guide a skilled biker across unpredictable mountain trails. The gameplay is simple but demanding — one wrong move, and your biker will crash. With minimalist 2D graphics, black hill silhouettes, and smooth animations, Bike Xtreme focuses purely on skill and reaction. Each level introduces new terrain and obstacles, keeping you engaged from start to finish. In Bike Xtreme, you will experience the thrill of navigating through lush jungles, rocky cliffs, and steep mountain passes. The game features realistic physics simulation that makes every jump, landing, and wheelie feel authentic. Whether you are a casual player looking for quick gaming sessions or a hardcore gamer seeking to master every track, Bike Xtreme delivers an addictive experience that will keep you coming back for more. What sets Bike Xtreme apart from other bike racing games is its perfect balance between accessibility and challenge. The controls are intuitive enough for beginners to pick up quickly, yet the game offers enough depth to satisfy experienced players. Each course in Bike Xtreme is handcrafted with unique layouts, ramps, and surprises, ensuring no two rides feel the same. The goal in Bike Xtreme is to reach the end of each course without crashing while maintaining balance on rough terrain. You must control your acceleration and body tilt carefully to keep the bike upright and moving forward. Timing and rhythm are key in Bike Xtreme. Over-accelerate, and you will flip over. Go too slow, and you will not clear steep slopes. Mastering this balance is what makes Bike Xtreme so addictive. Controls: Space to start the game, Up Arrow to accelerate, Down Arrow to decelerate or brake, Right Arrow to lean forward for a front wheelie, Left Arrow to lean backward for a rear wheelie. Timing and rhythm are key. Over-accelerate, and you will flip over. Go too slow, and you will not clear steep slopes. Mastering this balance is what makes Bike Xtreme so addictive. Tips to master Bike Xtreme: Maintain balance - do not rely solely on speed, control your tilt for smoother landings. Slow down on steep slopes - precision matters more than acceleration. Use momentum wisely - build up speed before climbing tall hills. Practice makes perfect - learn how your bike reacts on each surface for consistent performance. Study the terrain - look ahead to anticipate upcoming obstacles and plan your moves. Bike Xtreme is free to play and requires no downloads. You can enjoy it directly from your web browser on PC or mobile, making it perfect for quick gaming sessions anytime, anywhere. It is not just about racing — it is about endurance, precision, and mastering the art of balance. Play Bike Xtreme now and conquer the ultimate mountain bike challenge!',
  5.0,
  0,
  '2025-11-04',
  true,
  false
)
ON CONFLICT (slug) DO NOTHING;

-- 2. 确保所有需要的标签存在
INSERT INTO tags (slug, name, created_at)
VALUES
  ('sports', 'Sports', NOW()),
  ('driving', 'Driving', NOW()),
  ('racing', 'Racing', NOW()),
  ('action', 'Action', NOW()),
  ('casual', 'Casual', NOW()),
  ('physics', 'Physics', NOW()),
  ('2d', '2D', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('skill', 'Skill', NOW())
ON CONFLICT (slug) DO NOTHING;

-- 3. 关联游戏和标签
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'bike-xtreme' AND t.slug IN ('sports', 'driving', 'racing', 'action', 'casual', 'physics', '2d', 'arcade', 'skill')
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
  created_at)
VALUES (
  'bike-xtreme',
  'MountainRider',
  'mountainrider@example.com',
  'Bike Xtreme is hands down one of the most addictive bike racing games I have ever played! The physics engine is incredibly realistic - every jump, landing, and wheelie feels authentic and responsive. I love how the game perfectly balances simplicity with challenge. The controls are super intuitive (just arrow keys), but mastering the balance and timing takes real skill. The first few levels seem easy, but as you progress, the difficulty ramps up significantly. Each track in Bike Xtreme is uniquely designed with different terrains - from lush jungle trails to rocky mountain cliffs. The variety keeps the gameplay fresh and exciting. I especially love the steep downhill sections where you need to carefully control your speed to avoid flipping over! The minimalist 2D graphics with black hill silhouettes are perfect for this game. They keep the focus on the gameplay without unnecessary distractions. The smooth animations make every movement feel fluid and natural. What makes Bike Xtreme so addictive is the "one more try" factor. When you crash (and you will crash a lot at first), you immediately want to retry because you know exactly what you did wrong. The learning curve is satisfying - you can feel yourself improving with each attempt. The physics-based gameplay is the real star here. You need to understand momentum, weight distribution, and timing. Building up speed before a big hill, leaning back on steep descents, and using wheelies to clear obstacles - it all requires practice and precision. Pro tips I have learned: Always maintain balance over speed - going slower but staying upright is better than rushing and crashing. Lean backward when going downhill to prevent front flips. Use momentum strategically - accelerate before climbing hills but brake before steep drops. Practice wheelies in easier sections to master the timing. Look ahead to anticipate obstacles and plan your approach. The game is perfect for quick gaming sessions. You can play a few levels during a break, or spend hours trying to perfect your runs. No downloads needed - just open your browser and start playing! I also appreciate that Bike Xtreme works great on both PC and mobile browsers. The controls adapt well to different devices, making it accessible anywhere. The progressive difficulty is well-designed. Early levels teach you the basics, while later levels introduce more complex terrain combinations that really test your skills. Each new level feels like a fresh challenge. The stunt system adds an extra layer of fun. Performing wheelies and flips while maintaining balance gives you style points and makes you feel like a pro rider. It is risky but rewarding! Overall, Bike Xtreme delivers exactly what it promises - an intense, skill-based mountain biking experience that is easy to learn but hard to master. The realistic physics, varied terrains, and addictive gameplay make it a must-play for anyone who loves racing games, sports games, or skill-based challenges. Whether you are a casual player looking for fun or a hardcore gamer seeking to master every track, Bike Xtreme has something for everyone. Highly recommended! 🚴🏔️🎮',
  5,
  'approved',
  true,
  NOW()) ON CONFLICT DO NOTHING;

