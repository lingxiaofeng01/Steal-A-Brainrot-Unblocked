/*
  # Add Steal the Brainrot Fish Game Comment

  ## Overview
  This migration adds an approved comment for Steal the Brainrot Fish game.
  The comment highlights the game's underwater theme and fish collection mechanics.

  ## Changes
  - Insert one approved comment for 'steal-the-brainrot-fish' game
  - Comment includes rating (5 stars), user email, and agreed terms
*/

-- Insert comment for Steal the Brainrot Fish
INSERT INTO game_comments (game_slug, user_name, user_email, comment_text, rating, status, agreed_terms)
VALUES
  (
    'steal-the-brainrot-fish',
    'AquaticGamer',
    'aquaticgamer@example.com',
    'Such a relaxing and fun fish collection game! The underwater theme is beautifully done, and each fish has its own unique design. I love building my aquatic empire and watching my fish generate income. The idle mechanics are perfect for playing while doing other things. Highly addictive!',
    5,
    'approved',
    true
  )
ON CONFLICT DO NOTHING;

