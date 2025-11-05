/*
  # Add Platform Cook Game

  ## Overview
  This migration adds the new game "Platform Cook" to the database with:
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
  'platform-cook',
  'Platform Cook',
  'The Ultimate Reflex-Testing Culinary Challenge - Master the Kitchen Platformer 2025',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/platform-cook.png',
  'https://st.8games.net/11/igra-platforma-s-povarom',
  'Platform Cook is an exciting action platformer game where you control a skilled chef navigating treacherous platforms to collect delicious cakes and serve hungry customers. Test your reflexes, master precise jumps, and survive challenging levels filled with lava pits and flying obstacles in this fast-paced culinary adventure. Platform Cook is an exhilarating action platformer game that combines the thrill of precision jumping with the excitement of culinary challenges. In Platform Cook, you take control of a talented chef character distinguished by their iconic white chef hat, navigating through increasingly difficult levels filled with dangerous obstacles and delicious rewards. This unique game tests your reflexes, strategic thinking, and timing skills as you collect cakes and serve demanding customers across multiple challenging stages. The core gameplay of Platform Cook revolves around two distinct phases: the Lower Floor collection phase and the Upper Floor confrontation phase. On the Lower Floor in Platform Cook, your primary objective is to gather all the cakes and food items scattered across treacherous purple square platforms before the countdown timer expires. Each level in Platform Cook presents a unique layout of platforms, requiring you to plan your route carefully while avoiding deadly lava pits and dodging flying projectiles that can instantly end your run. What makes Platform Cook truly engaging is its risk-reward system. The game features a cookie-shaped progress bar that tracks your collection success, and failing to collect enough food on the Lower Floor has serious consequences. When you advance to the Upper Floor in Platform Cook, you will face hungry customers who expect to be served. If you have not collected sufficient food items during the Lower Floor phase, you will be quickly defeated when confronting these demanding patrons, adding a layer of strategic pressure to every jump and movement you make in Platform Cook. The platforming mechanics in Platform Cook are designed to be intuitive yet challenging. You must master the art of precise jumping across purple square platforms, timing your movements perfectly to avoid touching the scorching lava below. The game physics engine in Platform Cook ensures that every jump feels responsive and fair, rewarding skilled players who can maintain their composure under pressure while navigating through increasingly complex obstacle courses. As you progress through Platform Cook, you will encounter various types of obstacles that test different aspects of your gaming skills. Flying projectiles require quick reflexes and pattern recognition, while the layout of platforms demands strategic route planning. The countdown timer in Platform Cook adds urgency to every decision, forcing you to balance speed with caution as you collect food items and navigate toward the Upper Floor confrontation. The gameplay in Platform Cook is divided into distinct phases that each require different skills and strategies. Understanding these mechanics is crucial for success in Platform Cook and will help you become a master chef platformer. Navigate purple platforms to collect all cakes and food items before the timer runs out. Your progress is tracked by a cookie-shaped bar. Avoid touching the lava pits in Platform Cook at all costs. One touch means instant failure and you will lose a precious life. Dodge flying obstacles in Platform Cook using quick reflexes and pattern recognition to survive each level. Face hungry customers on the Upper Floor in Platform Cook. Insufficient food collection leads to quick defeat in this challenging phase. Platform Cook features countdown timers that add urgency to your collection efforts, forcing strategic decision-making. Mastering Platform Cook requires more than just quick reflexes. Plan your route before rushing in Platform Cook - survey the platform layout and identify the most efficient path to collect all food items. Keep an eye on the countdown timer in Platform Cook and adjust your speed accordingly to ensure you collect everything in time. Practice precise jumping in Platform Cook to land safely on purple platforms without overshooting into lava. Flying obstacles in Platform Cook often follow predictable patterns - study them to find safe windows for movement. In Platform Cook, collecting all food items is crucial for Upper Floor success - do not rush to advance prematurely. Platform Cook features intuitive controls that are easy to learn but challenging to master. Use arrow keys or WASD to move your chef character in Platform Cook, jumping across purple square platforms. Collect every cake and food item on the Lower Floor in Platform Cook before the countdown timer expires. Stay away from lava pits and dodge flying projectiles in Platform Cook to preserve your lives. Watch the cookie-shaped progress bar in Platform Cook to track your collection success. Once you have collected sufficient food in Platform Cook, proceed to face the hungry customers. Successfully complete the Upper Floor confrontation in Platform Cook to advance to the next level. Progress through increasingly difficult levels in Platform Cook, each with unique platform layouts and obstacles. Control the agile Cook character with the iconic white chef hat in Platform Cook, featuring responsive movement and precise jumping mechanics. Experience the innovative Lower Floor and Upper Floor system in Platform Cook, each requiring different strategies and skills to master. Gather delicious cakes and food items throughout each level of Platform Cook, tracked by an intuitive cookie-shaped progress bar. Navigate deadly lava pits and dodge flying projectiles in Platform Cook, testing your reflexes and timing skills at every turn. Race against countdown timers in Platform Cook, adding urgency and excitement to your food collection missions. Advance through increasingly challenging stages in Platform Cook, each with unique platform layouts and obstacle patterns. Platform Cook features simple, responsive controls that are easy to learn but provide depth for skilled platforming gameplay. Enjoy Platform Cook completely free online with no downloads required. Play on PC or mobile browsers anytime, anywhere. Play Platform Cook now and master the ultimate culinary platforming challenge!',
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
  ('puzzle', 'Puzzle', NOW()),
  ('action', 'Action', NOW()),
  ('platformer', 'Platformer', NOW()),
  ('skill', 'Skill', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('cooking', 'Cooking', NOW()),
  ('casual', 'Casual', NOW())
ON CONFLICT (slug) DO NOTHING;

-- 3. 关联游戏和标签
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'platform-cook' AND t.slug IN ('puzzle', 'action', 'platformer', 'skill', 'arcade', 'cooking', 'casual')
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
  'platform-cook',
  'ChefGamer',
  'chefgamer@example.com',
  'Platform Cook is an absolute blast! This game perfectly combines the excitement of platformer action with a unique culinary theme that sets it apart from typical jumping games. From the moment I started playing Platform Cook, I was hooked by its clever two-phase level design and challenging obstacle courses. The Lower Floor collection phase in Platform Cook is where the real strategy comes into play. You need to carefully plan your route across the purple square platforms to collect all the cakes and food items before the timer runs out. The cookie-shaped progress bar is a nice touch that keeps you informed about your collection status. What I love most is how every decision matters - rushing can lead to mistakes, but being too cautious means running out of time! The platforming mechanics in Platform Cook feel incredibly responsive and fair. The jumping physics are spot-on, giving you precise control over your chef character. Landing on those purple platforms requires perfect timing, especially when you are dodging flying projectiles at the same time. The lava pits add real tension - one wrong move and you lose a life, which keeps you focused and engaged throughout each level. The Upper Floor confrontation phase is genius! It creates this amazing risk-reward dynamic where your performance on the Lower Floor directly impacts your success upstairs. If you rushed through and missed food items, you will struggle against the hungry customers. This mechanic encourages thorough exploration and careful collection, adding strategic depth to what could have been just another platformer. I appreciate how Platform Cook gradually increases the difficulty. Early levels help you learn the mechanics with simpler platform layouts, but later stages introduce complex obstacle patterns and tighter time limits that really test your skills. The progression feels natural and rewarding - you can feel yourself improving as you master the timing and develop better route-planning strategies. The visual design is clean and functional. The purple platforms stand out clearly against the background, making it easy to plan your jumps. The lava pits are obviously dangerous, and the flying projectiles are visible enough to dodge with good reflexes. The chef character with the white hat is charming and easy to track during fast-paced action. The countdown timer system adds perfect urgency to Platform Cook. You cannot just take your time exploring - you need to move efficiently while still being careful. This balance between speed and precision is what makes the game so addictive. Every run feels like a race against time where both your reflexes and your planning skills are tested. Pro tips I have learned: Always survey the platform layout before starting your collection run in Platform Cook. Look for the most efficient route that minimizes backtracking. Watch the flying projectile patterns - they usually repeat, so you can time your movements to pass through safely. Do not rush to the Upper Floor until you have collected all food items. The cookie progress bar is your friend - keep checking it! Practice your jump timing on the purple platforms. Learn exactly how far your chef can jump to avoid overshooting into lava. Use the countdown timer strategically - if you have plenty of time, take the safer route even if it is slower. The controls are simple and intuitive. Arrow keys or WASD for movement and jumping work perfectly. The responsive controls mean that when you fail, it is because of your timing or planning, not because the game is unfair. This makes Platform Cook feel challenging but never frustrating. The game works great on both PC and mobile browsers with no downloads needed. I have played Platform Cook during breaks at work and at home, and it runs smoothly on all devices. The quick level format makes it perfect for short gaming sessions or longer practice runs. What really sets Platform Cook apart is how it combines multiple game genres successfully. It has the precision platforming of classic jumping games, the time pressure of arcade games, the strategic planning of puzzle games, and the unique culinary theme that ties everything together. This blend creates a fresh and engaging experience. The difficulty curve is well-balanced. You will die plenty of times while learning the levels, but each death teaches you something about the platform layout, obstacle patterns, or optimal routes. The game rewards both quick reflexes and smart planning, making it accessible to different play styles. The two-phase system keeps gameplay varied. The Lower Floor tests your platforming skills and route optimization, while the Upper Floor adds consequence to your collection performance. This structure prevents the game from becoming repetitive and maintains tension throughout each level. I love how Platform Cook encourages replayability. Even after completing a level, you can go back and try to collect everything faster, find more efficient routes, or challenge yourself to complete it with fewer mistakes. The timer creates natural speedrun potential for competitive players. The risk-reward balance is perfect. You can play it safe and carefully collect every food item, ensuring Upper Floor success but risking timeout. Or you can rush through quickly, gambling that you collected enough to survive the customer confrontation. This choice adds strategic depth to every run. The obstacle variety keeps things interesting. Lava pits test your jumping precision, flying projectiles test your reflexes and pattern recognition, and the platform layouts test your route planning. Each level combines these elements differently, creating unique challenges that require you to adapt your strategy. Platform Cook has that addictive one-more-try quality. When you fail a level, you immediately want to retry because you know exactly what went wrong and how to improve. The quick restart and responsive controls make it easy to jump right back in and apply what you learned. Overall, Platform Cook is a brilliantly designed action platformer that successfully combines culinary theming with challenging gameplay mechanics. The two-phase level structure, responsive controls, strategic depth, and perfect difficulty progression make it a standout game. Whether you love platformers, puzzle games, or just want a fun and challenging experience, Platform Cook delivers! Highly recommended! 👨‍🍳🍰🎮',
  5,
  'approved',
  true,
  NOW()) ON CONFLICT DO NOTHING;

