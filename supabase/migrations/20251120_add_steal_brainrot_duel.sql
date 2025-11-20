-- Migration: Add Steal Brainrot Duel game
-- Date: 2025-11-20
-- Description: Adds Steal Brainrot Duel game with tags, associations, and initial comment

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
  'steal-brainrot-duel',
  'Steal Brainrot Duel',
  'The Ultimate Meme Collection Battle Game - Loot, Defend & Dominate',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/steal-brainrot-duel.jpg',
  'https://html5.gamedistribution.com/rvvASMiM/31628f3b940847189cb0cea3d943abe0/index.html?gd_sdk_referrer_url=https%3A%2F%2Fpapas-games.io%2Fsteal-brainrot-duel&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3BhcGFzLWdhbWVzLmlvL3N0ZWFsLWJyYWlucm90LWR1ZWwiLCJwYXJlbnREb21haW4iOiJwYXBhcy1nYW1lcy5pbyIsInRvcERvbWFpbiI6InBhcGFzLWdhbWVzLmlvIiwiaGFzSW1wcmVzc2lvbiI6dHJ1ZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9',
  'Steal Brainrot Duel is an intense competitive looting and collecting game where you collect hilarious brainrot meme characters, generate money, and dominate the leaderboard through strategic raids and defense. Step into the chaotic, meme-filled world where strategy and timing are everything. Your core objective is to collect the top-tier brainrot characters, generate money through them, and ultimately dominate the leaderboard by building the most valuable collection and mastering the attack and defense strategy. The gameplay revolves around a thrilling loop of acquiring and defending your precious meme characters. Collect hilarious meme-inspired characters such as the beginner hero Noobini Pizzanini or rare and legendary favorites like Tralalero Tralala and Graipussi Medussi. With over 30 unlockable characters, each with different rarities and bonuses, you can generate cash and money over time. You can buy characters as they pass by or, more excitingly, steal them from other players through skillful looting! Defense is crucial - your base, where you store the characters, must be protected. Invest in security measures, upgrades, and traps because other players will also try to steal your characters. If you get caught stealing, the base owner can knock you down! Game modes include Solo play, where you hunt the best, steal from rivals, and defend your base, or a fun 2 Player Local mode where you compete for rare creatures and execute counter-raids. You can also customize your avatar with hats, glasses, wings, and pets. Master the perfect balance between raiding, defending, and resource management in this addictive meme collection battle game!',
  5.0,
  0,
  '2025-11-20',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 2. Ensure all required tags exist in tags table
-- ============================================================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('multiplayer', 'Multiplayer', NOW()),
  ('2-player', '2 Player', NOW()),
  ('action', 'Action', NOW()),
  ('casual', 'Casual', NOW()),
  ('meme', 'Meme', NOW()),
  ('brainrot', 'Brainrot', NOW()),
  ('strategy', 'Strategy', NOW()),
  ('competitive', 'Competitive', NOW()),
  ('looting', 'Looting', NOW()),
  ('defense', 'Defense', NOW()),
  ('simulator', 'Simulator', NOW()),
  ('unblocked', 'Unblocked', NOW()),
  ('browser', 'Browser', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('pvp', 'PvP', NOW())
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- 3. Associate game with tags in game_tags table
-- ============================================================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'steal-brainrot-duel'
  AND t.slug IN (
    'multiplayer',
    '2-player',
    'action',
    'casual',
    'meme',
    'brainrot',
    'strategy',
    'competitive',
    'looting',
    'defense',
    'simulator',
    'unblocked',
    'browser',
    'arcade',
    'pvp'
  )
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- ============================================================================
-- 4. Add initial comment to game_comments table
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
  'steal-brainrot-duel',
  'MemeCollector_Pro',
  'memecollector@example.com',
  'Steal Brainrot Duel is absolutely hilarious and addictive! The concept of collecting meme characters like Tralalero Tralala and Graipussi Medussi is genius. I love the competitive raiding system where you have to balance between stealing from other players and defending your own base. The 2-player local mode is perfect for playing with friends - we spent hours trying to steal each other''s rare characters! The passive income system keeps you engaged even when you''re not actively raiding. The character customization with hats, glasses, and wings adds a nice personal touch. Defense mechanics are well-designed - setting traps and upgrading security feels rewarding. The risk-reward balance is perfect - do you go for that legendary character and risk getting caught, or play it safe? Highly recommend this game to anyone who loves competitive collection games with a meme twist. 5 stars!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

-- ============================================================================
-- Migration completed successfully
-- ============================================================================

