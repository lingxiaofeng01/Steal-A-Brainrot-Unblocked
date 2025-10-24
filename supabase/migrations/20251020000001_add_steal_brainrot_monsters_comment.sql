/*
  # Add Steal Brainrot Monsters Game Comment

  ## Overview
  This migration adds an approved comment for Steal Brainrot Monsters game.
  The comment highlights the game's monster collection system and rarity mechanics.

  ## Changes
  - Insert one approved comment for 'steal-brainrot-monsters' game
  - Comment includes rating (5 stars), user email, and agreed terms
*/

-- Insert comment for Steal Brainrot Monsters
INSERT INTO game_comments (game_slug, user_name, user_email, comment_text, rating, status, agreed_terms)
VALUES
  (
    'steal-brainrot-monsters',
    'MonsterCollector',
    'monstercollector@example.com',
    'This monster collection game is incredibly addictive! The rarity system keeps me coming back for more. Love hunting for those Mythic monsters with Gold mutations! The progression feels rewarding and the variety of monsters is impressive. Each one has unique traits that make collecting them so satisfying!',
    5,
    'approved',
    true
  )
ON CONFLICT DO NOTHING;

