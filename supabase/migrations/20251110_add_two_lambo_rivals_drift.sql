-- Migration: Add Two Lambo Rivals Drift game
-- Date: 2025-11-10
-- Description: Insert game record, tags, and initial comment for Two Lambo Rivals Drift

-- ============================================================================
-- 1. Insert game record into games table
-- ============================================================================
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
  'two-lambo-rivals-drift',
  'Two Lambo Rivals Drift',
  'High-Octane Drifting Game - Master the Art of Drift Racing',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/two-lambo-rivals-drift.jpeg',
  '//html5.gamedistribution.com/rvvASMiM/8cfbb6f4272b438fa38cb882cc071091/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2RyaXZlbWFkMy5pby8iLCJwYXJlbnREb21haW4iOiJkcml2ZW1hZDMuaW8iLCJ0b3BEb21haW4iOiJkcml2ZW1hZDMuaW8iLCJoYXNJbXByZXNzaW9uIjp0cnVlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE4In0%253D',
  'Two Lambo Rivals Drift is a high-octane drifting game where you control powerful super-sport cars inspired by famous Italian Lamborghini models. Your main goal is to win intense drag races against rivals and become the ultimate Drift King. This thrilling arcade driving game offers an immersive experience set in a gorgeous Tokyo-inspired city with an atmospheric overcast theme.

Master the art of drifting by skillfully sliding your car across city streets to accumulate drift points. The game challenges you to combine precise steering control with strategic brake usage to initiate perfect drift angles. Chain long drifts together to maximize your score and dominate the leaderboards.

Two Lambo Rivals Drift features two exciting race modes: Drift Mode, where you must achieve the highest drift score before the timer ends, and Drag Race Mode, where you race to the finish line before your opponent. Each mode tests different aspects of your driving skills, ensuring varied and engaging gameplay.

The game showcases four colorful super-sport drift cars, each with unique handling characteristics and visual appeal. Use your race earnings to build a collection of fast cars and customize your favorite Lamborghini-inspired models. The progression system rewards both casual players and dedicated drifting enthusiasts.

Experience stunning graphics with realistic drift physics, tire smoke effects, sparks, and dynamic camera angles that make every drift feel spectacular. Two Lambo Rivals Drift offers both challenging single-player content and competitive two-player modes, perfect for settling debates about who is the better drift racer.

Whether you are looking for quick racing fun or seeking to master advanced drifting techniques, Two Lambo Rivals Drift delivers an exceptional arcade driving experience. The combination of beautiful graphics, responsive controls, rewarding progression, and multiplayer competition makes this game a must-play for racing game fans.',
  5.0,
  0,
  '2025-11-10',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 2. Ensure all required tags exist in tags table
-- ============================================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('racing', 'Racing', NOW()),
  ('driving', 'Driving', NOW()),
  ('drift', 'Drift', NOW()),
  ('car', 'Car', NOW()),
  ('multiplayer', 'Multiplayer', NOW()),
  ('2-player', '2 Player', NOW()),
  ('3d', '3D', NOW()),
  ('action', 'Action', NOW()),
  ('skill', 'Skill', NOW()),
  ('lamborghini', 'Lamborghini', NOW())
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 3. Associate game with tags in game_tags table
-- ============================================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'two-lambo-rivals-drift'
  AND t.slug IN ('racing', 'driving', 'drift', 'car', 'multiplayer', '2-player', '3d', 'action', 'skill', 'lamborghini')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- ============================================================================
-- 4. Add initial themed comment to game_comments table
-- ============================================================================
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
  'two-lambo-rivals-drift',
  'DriftKing_Tokyo',
  'driftking.tokyo@example.com',
  'Two Lambo Rivals Drift is absolutely incredible! The drifting mechanics feel so smooth and realistic. I love how you can chain drifts together for massive score multipliers. The Tokyo-inspired city environment is gorgeous, and the overcast atmosphere really adds to the underground racing vibe. The dual race modes keep things fresh - Drift Mode is perfect for practicing techniques, while Drag Race Mode tests your speed and precision. The Lamborghini-inspired cars are beautifully designed, and collecting new vehicles is super rewarding. The two-player mode is a blast when competing with friends. The controls are responsive, the physics are spot-on, and the visual effects like tire smoke and sparks make every drift feel epic. This is hands down one of the best drifting games I have played. Highly recommend for anyone who loves racing games or wants to master the art of drifting!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

