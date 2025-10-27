-- Migration: Add initial comment for Dude Theft Auto
-- Created: 2025-10-27
-- Description: Adds a themed comment for Dude Theft Auto game

-- Insert initial comment for Dude Theft Auto
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms,
  created_at
)
VALUES (
  'dude-theft-auto',
  'ChaosKing',
  'chaosking@example.com',
  'This game is absolutely insane! The physics are hilarious and the open-world freedom is amazing. I spent hours just causing mayhem and trying different vehicles. The police chases are intense and the variety of weapons keeps things fresh. Best sandbox game I''ve played in a while! 🚗💥',
  5,
  'approved',
  true,
  NOW()
)
ON CONFLICT DO NOTHING;

