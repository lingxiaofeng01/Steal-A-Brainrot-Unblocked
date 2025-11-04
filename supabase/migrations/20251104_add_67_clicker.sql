/*
  # Add 67 Clicker Game

  ## Overview
  This migration adds the new game "67 Clicker" to the database with:
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
  '67-clicker',
  '67 Clicker',
  'Click Your Way to Infinite 67s - The Ultimate Idle Clicker Game',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/67-clicker.webp',
  'https://hotgames.io/67-clicker.embed',
  '67 Clicker is a viral idle clicker game where you tap the giant 67 to earn points, buy upgrades, and build infinite progress. Click faster, upgrade smarter, and climb the leaderboard in this addictive incremental game! 67 Clicker is an entertaining idle game built around the idea of infinite progression. Each click in 67 Clicker earns you "67 points," which can be reinvested into powerful upgrades to boost your earnings and automate your gameplay. The game appeals to both casual players looking for relaxing fun and competitive players chasing the highest scores possible. In 67 Clicker, you will experience the perfect blend of active clicking and passive income generation, making it one of the most addictive clicker games available. Whether you are new to idle games or a seasoned clicker veteran, 67 Clicker offers an engaging experience that keeps you coming back for more. The simple yet deeply satisfying mechanics of 67 Clicker make it accessible to everyone while providing enough depth to keep hardcore players engaged for hours. Unlike many idle clicker games, 67 Clicker combines entertainment with a subtle educational twist. It draws inspiration from math concepts aligned with Common Core State Standards, encouraging logical thinking and problem-solving as players plan their upgrades and optimize their strategy. This makes 67 Clicker not just a fun pastime but also a light mental workout. The educational element of 67 Clicker is seamlessly integrated into the gameplay, so you are learning while having fun without even realizing it. Parents and educators appreciate 67 Clicker for its ability to make math concepts more engaging and accessible. The game design in 67 Clicker encourages players to think strategically about resource allocation and exponential growth, fundamental concepts in mathematics and economics. The core gameplay loop of 67 Clicker is beautifully simple: click the big 67 in the center to collect points, then use those points to buy items that multiply your efficiency. 67 Clicker features several upgrade categories including Cursor (which adds more power to each click), Auto 67 (which generates 67s automatically every second), 67 Farm (which greatly increases production output), and 67 Mine (which offers massive point boosts per upgrade). Each upgrade in 67 Clicker is carefully balanced to provide meaningful progression without overwhelming new players. The upgrade system in 67 Clicker creates a satisfying sense of growth as you watch your numbers climb from single digits to millions and beyond. Strategic players of 67 Clicker will carefully plan their upgrade path to maximize efficiency and reach milestones faster. One of the most appealing aspects of 67 Clicker is its cross-platform accessibility. You can play 67 Clicker seamlessly on desktop, tablet, or mobile devices without any downloads or installations required. The responsive design of 67 Clicker ensures that the game looks great and plays smoothly on any screen size. Whether you are at home on your computer or on the go with your smartphone, 67 Clicker is always ready to provide entertainment. The unblocked nature of 67 Clicker means you can access it from anywhere without restrictions, making it perfect for school breaks, work downtime, or relaxing at home. The game lightweight design ensures that 67 Clicker loads quickly and runs smoothly even on older devices or slower internet connections. The progression system in 67 Clicker is designed to provide constant rewards and motivation. Early upgrades in 67 Clicker are affordable and provide immediate benefits, giving new players a quick sense of accomplishment. As you advance through 67 Clicker, the upgrades become more expensive but offer exponentially greater returns, creating a satisfying sense of power growth. The game balance in 67 Clicker ensures that you always have something to work toward, whether it is the next upgrade tier or a major milestone achievement. Long-term players of 67 Clicker will find that the game continues to offer challenges and goals even after hours of gameplay. The endless nature of 67 Clicker means there is always room to push your numbers higher and optimize your strategy further. 67 Clicker is designed to be played both actively and passively, making it perfect for any lifestyle. You can actively click to maximize your earning rate in 67 Clicker, or you can let the game run in the background while auto-clickers generate points automatically. This flexibility in 67 Clicker means you can enjoy the game during work breaks, study sessions, or while relaxing at home. The passive income system in 67 Clicker is essential for long-term progression, allowing you to make progress even when you are not actively playing. Many players of 67 Clicker enjoy checking back periodically to see how many points they have accumulated and deciding which upgrades to purchase next. The idle mechanics of 67 Clicker make it one of the most accessible and player-friendly clicker games available. The strategic depth of 67 Clicker comes from deciding how to allocate your resources for maximum efficiency. Should you invest in click power upgrades to boost your active earnings in 67 Clicker, or should you focus on automation to build passive income? Each decision you make in 67 Clicker contributes to your long-term efficiency and progression speed. Experienced players of 67 Clicker develop sophisticated strategies for optimizing their upgrade paths and maximizing their point generation. The game rewards both careful planning and experimentation in 67 Clicker, allowing players to discover their own optimal strategies. This strategic element of 67 Clicker adds depth beyond simple clicking, making it engaging for players who enjoy optimization and efficiency challenges. The visual design of 67 Clicker is clean and intuitive, making it easy to understand your progress at a glance. The large, prominent 67 in the center of 67 Clicker is satisfying to click, with responsive feedback that makes each click feel impactful. The upgrade menu in 67 Clicker is well-organized and clearly displays the cost and benefit of each upgrade option. The user interface of 67 Clicker is designed to minimize confusion and maximize enjoyment, allowing players to focus on the core gameplay loop. The polished presentation of 67 Clicker demonstrates attention to detail and a commitment to providing a quality gaming experience. Whether you are playing 67 Clicker for five minutes or five hours, the clean interface ensures a pleasant and engaging experience throughout. Whether you are looking to kill time, challenge your reflexes, or train your brain, 67 Clicker is the ideal game. It is easy to learn, hard to master, and endlessly rewarding as you climb toward infinite upgrades and higher scores. Start playing 67 Clicker today and discover why this simple yet addictive game has captured the attention of clicker enthusiasts worldwide. The combination of accessibility, depth, and polish in 67 Clicker makes it stand out in the crowded idle game market. Join the community of 67 Clicker players who are pushing their numbers to astronomical heights and competing for the top spots on the leaderboard. Experience the ultimate idle clicker game with 67 Clicker and see how high you can climb in this endless journey of progression and optimization.',
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
  ('clicker', 'Clicker', NOW()),
  ('idle', 'Idle', NOW()),
  ('casual', 'Casual', NOW()),
  ('meme', 'Meme', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('incremental', 'Incremental', NOW()),
  ('math', 'Math', NOW())
ON CONFLICT (slug) DO NOTHING;

-- 3. 关联游戏和标签
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = '67-clicker' AND t.slug IN ('clicker', 'idle', 'casual', 'meme', 'arcade', 'incremental', 'math')
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
  '67-clicker',
  'ClickMaster67',
  'clickmaster67@example.com',
  '67 Clicker is absolutely addictive! I started playing this game thinking it would be just another simple clicker, but I was completely wrong. The game has so much depth and strategy hidden beneath its simple exterior. What makes 67 Clicker stand out is the perfect balance between active clicking and passive income generation. You can play it actively by clicking like crazy to maximize your points, or you can set up your auto-clickers and let the game run in the background while you do other things. This flexibility is brilliant! The upgrade system in 67 Clicker is incredibly well-designed. At first, you are just clicking the big 67 to earn points one at a time. But as you start buying upgrades like Cursor, Auto 67, 67 Farm, and 67 Mine, you can feel the exponential growth kicking in. Watching your points per second climb from single digits to thousands and eventually millions is so satisfying! I love how each upgrade tier feels meaningful and impactful. The educational aspect of 67 Clicker is a nice bonus too. Without even realizing it, you are learning about exponential growth, resource allocation, and strategic planning. It is like a fun math lesson disguised as an addictive game. Parents and teachers would definitely approve of this one! The cross-platform accessibility is fantastic. I play 67 Clicker on my desktop during work breaks and on my phone while commuting. The game syncs perfectly across devices, and the responsive design works great on any screen size. No downloads, no installations - just open your browser and start clicking! One thing I really appreciate about 67 Clicker is the clean, intuitive interface. Everything is clearly labeled, and you can see at a glance how much each upgrade costs and what benefit it provides. There is no confusion or clutter - just pure, focused gameplay. The progression curve in 67 Clicker is perfectly tuned. Early upgrades are cheap and give you quick wins, which keeps you motivated. As you progress, the upgrades get more expensive, but they also provide exponentially greater returns. This creates a satisfying rhythm where you are always working toward the next milestone. The strategic depth comes from deciding how to allocate your points. Should I invest in click power to boost my active earnings? Or should I focus on automation to build passive income? There is no single "correct" answer - different strategies work for different playstyles. I have spent hours experimenting with different upgrade paths to find the most efficient route. The idle mechanics are implemented perfectly. Even when I am not actively playing 67 Clicker, my auto-clickers are generating points in the background. Coming back after a few hours to see how many points I have accumulated is always exciting. It is like opening a present! The visual feedback is excellent too. Every click feels responsive and impactful. The numbers tick up smoothly, and the upgrade menu updates in real-time. These small details make the game feel polished and professional. What really keeps me coming back to 67 Clicker is the endless progression. There is always another upgrade to unlock, another milestone to reach, another strategy to try. The game never truly "ends" - you can always push your numbers higher and optimize your efficiency further. I have been playing 67 Clicker for weeks now, and I am still discovering new strategies and optimization techniques. The community of players sharing tips and competing for high scores adds another layer of enjoyment. It is fun to compare your progress with others and see different approaches to the game. The fact that 67 Clicker is completely free and unblocked is amazing. No paywalls, no ads interrupting gameplay, no restrictions. Just pure, addictive clicker fun available anytime, anywhere. Whether you are a casual player looking for a relaxing way to pass time or a hardcore optimizer seeking to maximize efficiency, 67 Clicker has something for everyone. The game is easy to pick up but offers enough depth to keep you engaged for hours, days, or even weeks. If you enjoy idle games, clicker games, or incremental games, you absolutely need to try 67 Clicker. It is one of the best examples of the genre I have ever played. The combination of simple mechanics, strategic depth, educational value, and endless progression makes it a must-play. Start clicking that 67 today and see how high you can climb! Trust me, once you start, you will not want to stop. 67 Clicker is the ultimate idle clicker experience! 🖱️🔢🚀',
  5,
  'approved',
  true,
  NOW()) ON CONFLICT DO NOTHING;

