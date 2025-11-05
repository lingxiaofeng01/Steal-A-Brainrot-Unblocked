/*
  # Add Wheelie Life 2 Game

  ## Overview
  This migration adds the new game "Wheelie Life 2" to the database with:
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
  'wheelie-life-2',
  'Wheelie Life 2',
  'Master the Art of Wheelies - Ultimate Dirt Bike Stunt Simulator 2025',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/wheelie-life-2.jpg',
  'https://papas-games.io/wheelie-life-2.embed',
  'Wheelie Life 2 is an immersive online stunt game where you control a lightning-fast trial bike along a picturesque coastal road. Master the art of performing perfect wheelies, balance your bike through challenging terrains, and optimize your route to achieve the fastest lap times in this serene yet thrilling driving simulator experience. Wheelie Life 2 is an online stunt game where you control a dirt bike, exploring a variety of terrains to balance stunts while trying not to fall backwards. This immersive driving simulator offers players a serene and captivating experience as they take control of lightning-fast trial bikes along a picturesque coastal road. In Wheelie Life 2, the sense of solitude and focus creates the perfect environment for mastering the art of wheelies and precision driving. The main objective in Wheelie Life 2 is to memorize the circuit and skillfully optimize your route to achieve the fastest lap time possible. With its laid-back gameplay and focus on precision driving, players can immerse themselves in the joy of performing wheelies and perfecting their skills on the road. Whether you are a casual gamer seeking relaxation or a competitive player aiming for the best lap times, Wheelie Life 2 offers a delightful and captivating journey on two wheels. What makes Wheelie Life 2 stand out from other bike stunt games is its perfect blend of relaxation and challenge. The game features stunning coastal scenery that creates a peaceful atmosphere, while the demanding wheelie mechanics keep you engaged and focused. Every moment in Wheelie Life 2 is about finding that perfect balance between speed, control, and style as you navigate through diverse terrains and master increasingly difficult stunts. In Wheelie Life 2, you will discover a unique gameplay experience that combines the thrill of motorcycle stunts with the meditative quality of a driving simulator. The game features realistic physics engine that ensures every wheelie feels authentic, requiring precise timing and control. As you progress through Wheelie Life 2, you will develop an intuitive understanding of bike balance, momentum management, and terrain navigation that will help you achieve those coveted perfect runs. The core gameplay of Wheelie Life 2 revolves around mastering the art of the wheelie while navigating a beautiful coastal road. You must maintain perfect balance on your trial bike, adjusting your weight distribution and throttle control to keep the front wheel elevated without tipping backwards. The challenge in Wheelie Life 2 lies in finding the sweet spot between aggressive acceleration and controlled balance, all while memorizing the circuit layout to optimize your lap times. Controls: Use Up Arrow or W to accelerate and lift the front wheel, Down Arrow or S to brake and control balance, Right Arrow or D to lean forward and control wheelie angle, Left Arrow or A to lean backward and maintain wheelie balance. Wheelie Life 2 is designed to be accessible for beginners while offering depth for experienced players. Start with shorter wheelies to understand the physics before attempting longer stunts. Watch your speed - too much throttle will cause you to flip backwards. Use terrain to your advantage - uphill sections make wheelies easier to maintain. Practice circuit sections individually to master each segment. Stay relaxed and learn from every mistake to improve your technique. Tips for mastering Wheelie Life 2: Start slow with shorter wheelies to understand the physics. Watch your speed and find the throttle sweet spot. Use uphill terrain to your advantage for easier wheelie maintenance. Break down the circuit into segments and master each one. Stay relaxed and use the serene atmosphere to focus. Learn from every crash to improve your balance and timing. Wheelie Life 2 features authentic trial bike physics that accurately simulate real bike dynamics, making every wheelie feel realistic and satisfying. Ride along a stunning coastal road where ocean views and scenic landscapes create a peaceful yet engaging environment. Challenge yourself in time trial mode to achieve the fastest lap times by optimizing your route and perfecting your wheelie technique. The game offers intuitive arrow key controls that are easy to pick up but provide the precision needed for advanced stunts. Learn and memorize the circuit layout to discover optimal routes and achieve record-breaking lap times. Wheelie Life 2 combines challenging mechanics with a serene atmosphere, perfect for both casual relaxation and focused practice. As you play, you will naturally develop better balance, timing, and circuit knowledge, leading to continuous improvement. Wheelie Life 2 is free to play online with no downloads required. Enjoy it on PC or mobile browsers anytime, anywhere. Play Wheelie Life 2 now and master the ultimate wheelie challenge!',
  5.0,
  0,
  '2025-11-05',
  true,
  false
)
ON CONFLICT (slug) DO NOTHING;

-- 2. 确保所有需要的标签存在
INSERT INTO tags (slug, name, created_at)
VALUES
  ('sports', 'Sports', NOW()),
  ('racing', 'Racing', NOW()),
  ('bike', 'Bike', NOW()),
  ('stunt', 'Stunt', NOW()),
  ('skill', 'Skill', NOW()),
  ('driving', 'Driving', NOW()),
  ('simulation', 'Simulation', NOW()),
  ('arcade', 'Arcade', NOW())
ON CONFLICT (slug) DO NOTHING;

-- 3. 关联游戏和标签
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'wheelie-life-2' AND t.slug IN ('sports', 'racing', 'bike', 'stunt', 'skill', 'driving', 'simulation', 'arcade')
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
  'wheelie-life-2',
  'CoastalRider',
  'coastalrider@example.com',
  'Wheelie Life 2 is an absolute gem of a bike stunt game! The moment I started playing, I was captivated by the beautiful coastal setting and the serene atmosphere. Unlike other high-intensity racing games, Wheelie Life 2 offers a perfect blend of relaxation and challenge that keeps me coming back for more. The physics engine in Wheelie Life 2 is incredibly realistic. Every wheelie feels authentic and requires precise timing and control. You really need to understand the balance between throttle control and weight distribution to maintain those perfect wheelies without tipping backwards. It is challenging but so rewarding when you nail a long wheelie section! What I love most about Wheelie Life 2 is the circuit memorization aspect. The coastal road layout is beautifully designed with various terrain changes - flat sections, uphill climbs, downhill runs, and tricky curves. Learning the optimal route and perfecting your technique for each section is incredibly satisfying. The time trial mode adds a competitive edge that motivates you to keep improving. The controls in Wheelie Life 2 are simple yet precise. Arrow keys or WASD give you full control over acceleration, braking, and weight distribution. It is easy to pick up for beginners, but mastering the advanced techniques takes real skill and practice. I appreciate how accessible the game is while still offering depth for experienced players. The visual design is stunning! The coastal scenery with ocean views creates such a peaceful backdrop for your stunts. The graphics are clean and smooth, focusing on the gameplay without unnecessary distractions. The animations are fluid, making every movement feel natural and responsive. I especially love how Wheelie Life 2 creates this meditative gaming experience. The serene coastal atmosphere combined with the focused challenge of maintaining wheelies puts you in a flow state. It is perfect for unwinding after a stressful day while still engaging your mind and reflexes. The progression system is well-designed. As you play more, you naturally develop better muscle memory for the perfect wheelie angle, learn the circuit layout, and discover optimal routes. You can feel yourself improving with each session, which is incredibly motivating. The game rewards both patience and skill. Pro tips I have discovered: Start with shorter wheelies to build confidence and understand the physics. Watch your throttle - too much acceleration will flip you backwards instantly. Use uphill sections strategically as they make wheelies easier to maintain. Break the circuit into segments and practice each one individually. Stay relaxed and use the peaceful atmosphere to maintain focus. Learn from every crash - they teach you about balance points and timing. Look ahead to anticipate terrain changes and adjust your technique accordingly. The time trial aspect adds great replay value. Competing against your personal best times pushes you to optimize every section of the circuit. Finding those extra seconds through better wheelie technique and route optimization is addictive! I also love that Wheelie Life 2 works perfectly on both PC and mobile browsers. No downloads needed - just open the game and start playing. The controls adapt well to different devices, making it accessible anywhere. The game strikes a perfect balance between being a relaxing driving simulator and a challenging skill-based stunt game. You can play casually to enjoy the coastal scenery and practice wheelies, or push yourself competitively to achieve record lap times. The variety in terrain keeps gameplay fresh. Each section of the coastal circuit presents unique challenges - maintaining wheelies on flat roads, using momentum on uphill climbs, controlling speed on downhill sections, and navigating curves while balanced. It all requires different techniques and keeps you engaged. The physics-based gameplay is the real star. Understanding how your bike reacts to different inputs, learning momentum management, and mastering the balance point for perfect wheelies - it all comes together in a deeply satisfying gameplay loop. Wheelie Life 2 has become my go-to game for both relaxation and skill practice. The serene coastal setting calms my mind while the challenging wheelie mechanics keep my reflexes sharp. It is the perfect combination of zen and excitement. Whether you are a casual player looking for a peaceful gaming experience or a competitive player seeking to master every aspect of wheelie technique and circuit optimization, Wheelie Life 2 delivers on all fronts. The game is accessible, beautiful, challenging, and endlessly replayable. Overall, Wheelie Life 2 is a masterfully crafted bike stunt simulator that offers something unique in the racing game genre. The combination of realistic physics, stunning coastal scenery, intuitive controls, and the perfect balance of relaxation and challenge makes it a must-play. Highly recommended for anyone who loves bike games, stunt games, racing games, or skill-based challenges! 🏍️🌊🎮',
  5,
  'approved',
  true,
  NOW()) ON CONFLICT DO NOTHING;

