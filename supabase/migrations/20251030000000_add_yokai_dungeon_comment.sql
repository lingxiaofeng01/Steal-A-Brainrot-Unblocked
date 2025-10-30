/*
  # Add Yokai Dungeon Comment

  ## Overview
  This migration adds an initial comment for the Yokai Dungeon game.

  ## Changes
  - Insert one approved comment for yokai-dungeon game
*/

-- Insert comment for Yokai Dungeon
INSERT INTO game_comments (game_slug, user_name, user_email, comment_text, rating, status, agreed_terms)
VALUES
  (
    'yokai-dungeon',
    'YokaiHunter',
    'yokaihunter@example.com',
    'Absolutely love this roguelike puzzle game! The Japanese yokai theme is so unique and the procedurally generated dungeons keep every run fresh. The block-pushing mechanics are simple but require real strategy. Completed my Yokaipedia after 50+ runs and still coming back for more! Perfect blend of puzzle-solving and action. Highly recommend for roguelike fans! 👹🏮',
    5,
    'approved',
    true
  )
ON CONFLICT (id) DO NOTHING;

