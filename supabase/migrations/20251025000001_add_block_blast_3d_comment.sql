/*
  # Add Block Blast 3D Game Comment

  ## Overview
  This migration adds an approved comment for Block Blast 3D game.
  The comment highlights the game's minimalist design and strategic puzzle mechanics.

  ## Changes
  - Insert one approved comment for 'block-blast-3d' game
  - Comment includes rating (4 stars), user email, and agreed terms
*/

-- Insert comment for Block Blast 3D
INSERT INTO game_comments (game_slug, user_name, user_email, comment_text, rating, status, agreed_terms)
VALUES
  (
    'block-blast-3d',
    'PuzzleMaster3D',
    'puzzlemaster@example.com',
    'Block Blast 3D is a refreshing take on classic block puzzle games! The 3D perspective adds a whole new dimension to the strategy. I love how clean and minimalist the design is - no distractions, just pure puzzle-solving fun. The satisfaction of clearing multiple lines at once is incredibly rewarding. Perfect for training your spatial reasoning skills while having a great time!',
    4,
    'approved',
    true
  )
ON CONFLICT DO NOTHING;

