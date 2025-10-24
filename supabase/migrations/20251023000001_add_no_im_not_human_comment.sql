/*
  # Add No, I'm not a Human Game Comment

  ## Overview
  This migration adds an approved comment for No, I'm not a Human game.
  The comment highlights the game's psychological horror elements and survival mechanics.

  ## Changes
  - Insert one approved comment for 'no-im-not-a-human' game
  - Comment includes rating (5 stars), user email, and agreed terms
*/

-- Insert comment for No, I'm not a Human
INSERT INTO game_comments (game_slug, user_name, user_email, comment_text, rating, status, agreed_terms)
VALUES
  (
    'no-im-not-a-human',
    'HorrorEnthusiast',
    'horrorenthusiast@example.com',
    'Absolutely terrifying psychological horror experience! The atmosphere is incredibly tense and the survival mechanics keep you on edge. The story is gripping and the twist at the end blew my mind. Not for the faint of heart, but if you love horror games, this is a must-play masterpiece!',
    5,
    'approved',
    true
  )
ON CONFLICT DO NOTHING;

