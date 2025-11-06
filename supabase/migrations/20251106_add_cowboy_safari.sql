-- Migration: Add Cowboy Safari game
-- Date: 2025-11-06
-- Description: Insert game record, tags, and initial comment for Cowboy Safari

-- 1. Insert game record into games table
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
  'cowboy-safari',
  'Cowboy Safari',
  'Lasso Wild Animals and Build Your Ultimate Safari Zoo Empire',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/cowboy-safari.png',
  'https://gamea.azgame.io/cowboy-safari/',
  'Cowboy Safari is a wild adventure game where you transform into a cowboy with a lasso in hand, rushing into a speed race in the middle of nature. The game brings a feeling of both adventure and strategy when you have to hunt, tame and ride wild animals in the grasslands, jungles or rugged mountains. And at the same time, you can also build your own animal sanctuary. The gameplay of Cowboy Safari is a unique blend of endless running and farm management simulation. You start your journey by throwing a lasso to catch free-running animals. Each species has its own behavior: some run fast, some get angry easily or fly high. Once tamed, they will be transferred to your zoo, where you can upgrade their barns, increase your passive income, and unlock new areas with rare species such as zebras, elephants, lions, buffaloes, and many others. The game features a comprehensive quest system where you can complete up to 3 missions simultaneously, earning rewards ranging from 50-150 gold in the Savannah, 300-450 gold in the Jungle, and 900-1350 gold in the Mountain regions. With perfect playthrough execution, you can earn over 4,000 gold by completing multiple missions simultaneously. The enclosure upgrade system allows each animal species to have their enclosure upgraded individually up to 8 levels. Levels 1-3 increase riding time before animals get angry, Level 4 boosts passive income by 50%, Levels 5-6 unlock special skills like speed boosts and barrel-breaking abilities, while Levels 7-8 increase your chance to find rare variants. Featured animals include Buffalo (easy to control, powerful, ideal for beginners), Zebra (fast but difficult to balance), Ostrich (breaks crates extremely fast when upgraded), Elephant (strong and durable but moves slower), Lion (aggressive and fast, for experienced players), and the premium Cash Cow that doubles your zoo income. Cowboy Safari Online expands the original experience with an online mode where players can compete for scores, share their zoo, or participate in global hunting events with new rankings added each week.',
  5.0,
  0,
  '2025-11-06',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- 2. Ensure all required tags exist in tags table
INSERT INTO tags (slug, name, created_at)
VALUES
  ('running', 'Running', NOW()),
  ('adventure', 'Adventure', NOW()),
  ('casual', 'Casual', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('animal', 'Animal', NOW()),
  ('strategy', 'Strategy', NOW()),
  ('simulation', 'Simulation', NOW())
ON CONFLICT (slug) DO NOTHING;

-- 3. Associate game with tags in game_tags table
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'cowboy-safari'
  AND t.slug IN ('running', 'adventure', 'casual', 'arcade', 'animal', 'strategy', 'simulation')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- 4. Add initial comment for the game
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
  'cowboy-safari',
  'WildWestRanger',
  'wildwestranger@example.com',
  'Cowboy Safari is an absolute gem! The combination of endless running and zoo management is genius. I love how each animal has its own personality - the zebras are super fast but tricky to control, while the buffalo are perfect for beginners. The upgrade system is incredibly deep with 8 levels for each enclosure, and unlocking special abilities at higher levels keeps me motivated to keep playing. The mission system is brilliant - being able to complete 3 missions at once means I can rack up gold quickly if I plan my routes well. I managed to earn over 3,500 gold in one perfect run! The different biomes (Savannah, Jungle, Mountain) each have their own unique animals and challenges. The Cash Cow is totally worth saving up for - it doubles your passive income which is a game-changer. The lasso mechanics feel great and timing your jumps before animals get angry adds real tension. Graphics are charming and colorful, and the online mode with weekly rankings gives it great replay value. If you enjoy games like Rodeo Stampede or Crossy Road but want more strategic depth, Cowboy Safari is perfect. Highly recommend to anyone who loves animal collection games with progression systems!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

-- Verification queries (commented out for production)
-- SELECT slug, title, rating FROM games WHERE slug = 'cowboy-safari';
-- SELECT t.slug, t.name FROM game_tags gt JOIN tags t ON gt.tag_id = t.id JOIN games g ON gt.game_id = g.id WHERE g.slug = 'cowboy-safari';
-- SELECT user_name, rating, LEFT(comment_text, 50) as preview FROM game_comments WHERE game_slug = 'cowboy-safari';

