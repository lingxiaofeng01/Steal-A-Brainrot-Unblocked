-- =====================================================
-- Migration: Add Highway Heat Game
-- Date: 2025-11-11
-- Description: Insert Highway Heat game, tags, and comments
-- =====================================================

-- =====================================================
-- 1. Insert Game Record
-- =====================================================
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
  'highway-heat',
  'Highway Heat',
  'The Ultimate Endless Racing Challenge - Survive the Traffic Chaos',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/highway-heat.jpg',
  'https://games.yoplay.io/highway-heat/?v=1',
  'Highway Heat is the purest form of an endless racing game. Face traffic chaos, upgrade your car, and survive based on sheer reflex speed. This isn''t just another endless racer—Highway Heat is a skill challenge designed to test every fiber of your focus and reflexes. Your journey has no boundaries: the asphalt never ends. There''s no finish line to cross, no flashing police lights in your rearview mirror—just the road, the traffic, and your survival instincts.

Setting itself apart with a striking 3D environment, Highway Heat captures everything from the grit of the streets to the sweeping landscapes around you. This online game promises an experience few racing games can truly match. The Highway Heat game combines realistic traffic patterns with heart-pounding speed challenges that will keep you on the edge of your seat.

In Highway Heat, you''ll navigate through dense traffic, weave between vehicles at breakneck speeds, and push your reflexes to the absolute limit. The game features four distinct environments—Village, Winter, Desert, and City—each bringing its own unique atmosphere and challenges. From calm country roads to icy highways and neon-lit streets, every background in Highway Heat shifts the mood and difficulty.

What makes Highway Heat truly addictive is its perfect balance of simplicity and depth. While the controls are straightforward, mastering the rhythm of traffic, timing your overtakes, and managing your speed requires genuine skill. Every crash hurts, every successful dodge feels like victory. Highway Heat doesn''t try to impress with shiny menus or cinematic intros—its strength lies in that addictive simplicity.

The Highway Heat game keeps its controls deceptively simple, but mastering their rhythm is the real challenge. Understanding the controls is essential to survive the endless highway. Use arrow keys or WASD to accelerate, brake, and steer. Press C to switch camera angles and N to activate Nitro boost for short speed bursts.

Highway Heat features 12 unique vehicles ranging from everyday cars and sleek sports models to powerful heavy tractors—each offering a distinct driving feel. Every vehicle has five core stats: top speed, acceleration, handling, braking, and nitro. Upgrade costs range from 600 to 2,000 coins. You can also personalize your ride with custom paint jobs, wheel swaps, and decals to make your car stand out from the crowd.

The game offers four exciting game modes: One Way mode for straightforward one-direction traffic runs, Two Way mode with twice the tension as traffic rushes in both directions, Time Attack mode where every second counts, and Free Ride mode with no pressure or limits—just the open road and the sound of speed.

Highway Heat keeps you coming back with daily login bonuses and a spin-the-wheel mini-game. Each spin offers coins, massive prizes, or even free cars! The game respects player preferences with customizable sound, camera angles, sensitivity, and graphics quality settings. Each mode logs your highest score, displayed beneath a trophy icon, quietly urging you to push further.

Pro tips for Highway Heat: Flow with open spaces—always aim for the most welcoming lane and avoid forcing tight gaps. Prioritize Control and Speed upgrades as these stats will save your life more than cosmetics. Maintain stable speed for better reaction time and don''t overspeed in crowded sections. Use the top-down camera view as the bird''s-eye perspective is essential for reading traffic flow. Brake proactively by slowing down before entering jams or approaching dead ends.

Highway Heat is perfect for players who love endless racing games, high-speed driving challenges, skill-based gameplay, and car customization. Whether you''re a casual player looking for quick thrills or a hardcore racer chasing high scores, Highway Heat delivers pure adrenaline-fueled entertainment. Play Highway Heat now and experience the ultimate endless racing challenge!',
  5.0,
  0,
  '2025-11-11',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 2. Ensure All Tags Exist
-- =====================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('racing', 'Racing', NOW()),
  ('driving', 'Driving', NOW()),
  ('car', 'Car', NOW()),
  ('endless-runner', 'Endless Runner', NOW()),
  ('3d', '3D', NOW()),
  ('speed', 'Speed', NOW()),
  ('skill', 'Skill', NOW()),
  ('survival', 'Survival', NOW()),
  ('casual', 'Casual', NOW()),
  ('action', 'Action', NOW()),
  ('unblocked', 'Unblocked', NOW()),
  ('browser', 'Browser', NOW())
ON CONFLICT (slug) DO NOTHING;

-- =====================================================
-- 3. Associate Game with Tags
-- =====================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'highway-heat'
  AND t.slug IN (
    'racing',
    'driving',
    'car',
    'endless-runner',
    '3d',
    'speed',
    'skill',
    'survival',
    'casual',
    'action',
    'unblocked',
    'browser'
  )
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- =====================================================
-- 4. Add Featured Comment
-- =====================================================
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
  'highway-heat',
  'SpeedDemon_Mike',
  'speedracer.mike@example.com',
  'Highway Heat is absolutely incredible! I''ve been playing endless racing games for years, and this one stands out from the crowd. The traffic patterns feel realistic, the controls are super responsive, and the four different environments keep things fresh. I love how you can upgrade your car''s stats and customize the appearance. The daily rewards system is genius—I spin that wheel every day hoping for a new car! The Two Way mode is insanely challenging, and the Time Attack mode really tests your skills. My favorite feature is the top-down camera view which makes it so much easier to navigate through dense traffic. The nitro boost system is perfectly balanced—not too overpowered but just enough to escape tight situations. I''ve unlocked 8 out of 12 cars so far and each one feels unique. The Winter environment is my favorite with its icy roads and beautiful scenery. If you love high-speed racing and testing your reflexes, Highway Heat is a must-play. Highly recommend this game to anyone looking for an adrenaline rush! 10/10 would crash into traffic again! 🏎️🔥',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

