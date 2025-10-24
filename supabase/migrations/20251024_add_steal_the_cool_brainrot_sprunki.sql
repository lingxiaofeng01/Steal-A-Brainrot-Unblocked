-- Add Steal the cool Brainrot Sprunki game
-- Migration created: 2025-10-24

-- Insert the game
INSERT INTO games (
  slug, 
  title, 
  cover, 
  play_url, 
  description,
  rating,
  play_count,
  released_at,
  is_active
) VALUES (
  'steal-the-cool-brainrot-sprunki',
  'Steal the cool Brainrot Sprunki',
  'https://example.com/images/thumbnails/steal-the-cool-brainrot-sprunki.jpeg',
  'https://st.8games.net/7/8g/igra-ukradi-krutykh-brejnrot-sprunki/',
  'In Steal the cool Brainrot Sprunki, you enter a world where financial dominance is decided by the brainrot creatures you collect. This idle game is all about building an empire and becoming the ultimate king of the Sprunks. You will collect these unique creatures, each contributing to your ever-growing income. The more you collect, the closer you get to true wealth.',
  4.7,
  1500,
  '2025-10-24',
  true
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  cover = EXCLUDED.cover,
  play_url = EXCLUDED.play_url,
  description = EXCLUDED.description,
  rating = EXCLUDED.rating,
  play_count = EXCLUDED.play_count,
  released_at = EXCLUDED.released_at,
  is_active = EXCLUDED.is_active,
  updated_at = now();

-- Ensure tags exist
INSERT INTO tags (slug, name) VALUES
  ('idle', 'Idle'),
  ('casual', 'Casual'),
  ('collection', 'Collection'),
  ('tycoon', 'Tycoon'),
  ('clicker', 'Clicker'),
  ('incremental', 'Incremental')
ON CONFLICT (slug) DO NOTHING;

-- Link game to tags
INSERT INTO game_tags (game_id, tag_id)
SELECT 
  g.id,
  t.id
FROM games g
CROSS JOIN tags t
WHERE g.slug = 'steal-the-cool-brainrot-sprunki'
  AND t.slug IN ('idle', 'casual', 'collection', 'tycoon', 'clicker', 'incremental')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- Add a sample comment for the game
INSERT INTO game_comments (
  game_slug,
  user_name,
  comment_text,
  rating,
  status,
  user_email,
  agreed_terms
)
SELECT
  'steal-the-cool-brainrot-sprunki',
  'SprunkiKing',
  'This is the most addictive idle game I''ve ever played! The Sprunki collection system is so satisfying, and watching my income grow exponentially is incredibly rewarding. The variety of Sprunks keeps me coming back for more. Highly recommend for anyone who loves incremental games!',
  5,
  'approved',
  'sprunkiking@example.com',
  true
WHERE NOT EXISTS (
  SELECT 1 FROM game_comments
  WHERE game_slug = 'steal-the-cool-brainrot-sprunki'
  AND user_name = 'SprunkiKing'
);

