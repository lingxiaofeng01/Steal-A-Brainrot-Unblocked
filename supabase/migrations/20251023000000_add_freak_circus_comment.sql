/*
  # Add The Freak Circus Game Comment

  ## Overview
  This migration adds an approved comment for The Freak Circus game.
  The comment highlights the game's unique visual novel experience and dark atmosphere.

  ## Changes
  - Insert one approved comment for 'the-freak-circus' game
  - Comment includes rating (5 stars), user email, and agreed terms
*/

-- Insert comment for The Freak Circus
INSERT INTO game_comments (game_slug, user_name, user_email, comment_text, rating, status, agreed_terms)
VALUES
  (
    'the-freak-circus',
    'VisualNovelFan',
    'visualnovelfan@example.com',
    'Absolutely captivating visual novel! The dark atmosphere and character development are incredible. The story twists kept me engaged throughout. A masterpiece of psychological storytelling with stunning artwork. Highly recommend for fans of mature visual novels!',
    5,
    'approved',
    true
  )
ON CONFLICT DO NOTHING;

