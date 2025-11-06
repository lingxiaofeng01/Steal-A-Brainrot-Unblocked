-- Migration: Add Impossible Car Stunt game
-- Date: 2025-11-06
-- Description: Insert game record, tags, and initial comment for Impossible Car Stunt

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
  'impossible-car-stunt',
  'Impossible Car Stunt',
  'Conquer Sky-High Tracks in the Ultimate Racing Challenge 2025',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/impossible-car-stunt.jpeg',
  'https://html5.gamedistribution.com/rvvASMiM/fe68fa1a7ec14b579db34bcb6d4e2eac/index.html?gd_sdk_referrer_url=https%3A%2F%2Fgamedistribution.com%2Fgames%2Fimpossible-car-stunt-2022&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2dhbWVkaXN0cmlidXRpb24uY29tL2dhbWVzL2ltcG9zc2libGUtY2FyLXN0dW50LTIwMjIiLCJwYXJlbnREb21haW4iOiJnYW1lZGlzdHJpYnV0aW9uLmNvbSIsInRvcERvbWFpbiI6ImltcG9zc2libGVjYXJzdHVudC5jb20iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9',
  'Welcome to Impossible Car Stunt 2022, the ultimate impossible tracks car racing game where you race super-fast sports cars on massive heights in the sky. Experience real impossible track racing with crazy stunts on ramps, mega jumps, and extreme car driving challenges that will test your skills to the limit. If you are a fast speed racer and have a passion for car racing games, then be ready to experience the real car rally in the mid of the sky with no limits. Rush like a crazy stunt master while riding the beautifully designed real impossible tracks. Enjoy the real impossible track race on the endless extreme impossible tracks in the sky highs. The game features stunning 3D graphics and immersive gameplay that keeps players coming back for more. Navigate through treacherous sky-high pathways where one wrong move could send you plummeting to the ground below. Master the art of controlling powerful sports cars at breakneck speeds while performing spectacular aerial maneuvers that push the boundaries of what''s possible in racing games. Choose from a fleet of high-performance sports cars, each with unique handling characteristics and speed capabilities. Race across a variety of impossible tracks, each presenting unique obstacles and challenges. From narrow pathways suspended in the clouds to massive mega ramps that launch you into the stratosphere, every track offers a fresh test of your driving skills. The realistic physics engine ensures that every jump, flip, and drift feels incredibly authentic, making each successful stunt execution deeply satisfying. Strategic checkpoint placement ensures you can retry challenging sections without starting from the beginning, making the game both challenging and fair for players of all skill levels.',
  5.0,
  0,
  '2025-11-06',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- 2. Ensure all required tags exist in tags table
INSERT INTO tags (slug, name, created_at)
VALUES
  ('racing', 'Racing', NOW()),
  ('driving', 'Driving', NOW()),
  ('stunt', 'Stunt', NOW()),
  ('car', 'Car', NOW()),
  ('3d', '3D', NOW()),
  ('skill', 'Skill', NOW()),
  ('sports', 'Sports', NOW()),
  ('arcade', 'Arcade', NOW())
ON CONFLICT (slug) DO NOTHING;

-- 3. Associate game with tags in game_tags table
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'impossible-car-stunt'
  AND t.slug IN ('racing', 'driving', 'stunt', 'car', '3d', 'skill', 'sports', 'arcade')
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
  'impossible-car-stunt',
  'SpeedDemon88',
  'speeddemon88@example.com',
  'Impossible Car Stunt is absolutely insane! The sky-high tracks are breathtaking and terrifying at the same time. I love how the physics feel so realistic - every jump and landing requires perfect timing. The mega ramps are my favorite part - launching into the air and pulling off crazy stunts never gets old. The variety of sports cars is amazing, each one handles differently which keeps the gameplay fresh. The checkpoint system is a lifesaver when you''re learning the trickier sections. This is hands down one of the best impossible track racing games I''ve ever played. The 3D graphics are stunning and the tracks are beautifully designed. If you love high-speed racing and gravity-defying stunts, you absolutely need to try Impossible Car Stunt!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

-- Verification queries (commented out for production)
-- SELECT slug, title, rating FROM games WHERE slug = 'impossible-car-stunt';
-- SELECT t.slug, t.name FROM game_tags gt JOIN tags t ON gt.tag_id = t.id JOIN games g ON gt.game_id = g.id WHERE g.slug = 'impossible-car-stunt';
-- SELECT user_name, rating, LEFT(comment_text, 50) as preview FROM game_comments WHERE game_slug = 'impossible-car-stunt';

