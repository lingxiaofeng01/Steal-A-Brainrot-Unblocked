/*
  # Add Obby: Steal the Fugglers Game Comment

  ## Overview
  This migration adds an approved comment for Obby: Steal the Fugglers game.
  The comment highlights the game's collection mechanics and idle gameplay.

  ## Changes
  - Insert one approved comment for 'obby-steal-the-fugglers' game
  - Comment includes rating (5 stars), user email, and agreed terms
*/

-- Insert comment for Obby: Steal the Fugglers
INSERT INTO game_comments (game_slug, user_name, user_email, comment_text, rating, status, agreed_terms)
VALUES
  (
    'obby-steal-the-fugglers',
    'FugglerFanatic',
    'fugglerfan@example.com',
    'What an amazing idle collection game! The Fugglers are so unique and quirky, each one has its own personality. I love how the game rewards you for collecting rare ones. The progression system is perfectly balanced - not too fast, not too slow. Perfect for casual gaming sessions!',
    5,
    'approved',
    true
  )
ON CONFLICT DO NOTHING;

