-- Migration: Add Crazy Animal City game
-- Created: 2025-10-25
-- Description: Adds Crazy Animal City game with tags and initial comment

-- Insert the game
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
  is_featured,
  is_active
) VALUES (
  'crazy-animal-city',
  'Crazy Animal City',
  'Unleash Chaos in the Ultimate 3D Animal Rampage Simulator',
  '/images/thumbnails/crazy-animal-city.webp',
  'https://1games.io/game/crazy-animal-city/',
  'Unleash chaos in Crazy Animal City, a wild 3D sim packed with insane destruction and beastly rage. Smash, roar, and dominate the virtual jungle! Experience the thrill of destruction with powerful animals in a vibrant 3D cityscape. Whether you''re a ferocious lion, a mighty gorilla, or a rampaging elephant, your mission is simple: destroy everything in sight, dominate the urban jungle, and become the ultimate beast of the city! This game combines the thrill of destruction with the freedom of open-world exploration. Smash through buildings, flip cars, terrify citizens, and leave a trail of mayhem wherever you go. With stunning 3D graphics, realistic physics, and addictive gameplay, Crazy Animal City delivers an adrenaline-pumping experience that will keep you coming back for more carnage and chaos. From the moment you step into the city, you''ll feel the raw power of nature unleashed in an urban environment. The game features multiple playable animals, each with unique abilities and destruction styles. Whether you prefer the brute strength of a rhino or the agility of a tiger, there''s an animal that matches your playstyle. The city is your playground, and destruction is your game! Play as lions, gorillas, elephants, tigers, rhinos, and bears—each with unique abilities. Explore a massive open-world city filled with interactive elements and surprises. Advanced physics engine delivers incredibly satisfying and realistic destruction mechanics. Complete challenges to unlock new animals and upgrades. Compete on global leaderboards and share your destruction achievements. Perfect for stress relief and casual gaming sessions.',
  4.6,
  320,
  NOW(),
  false,
  true
) ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  subtitle = EXCLUDED.subtitle,
  cover = EXCLUDED.cover,
  play_url = EXCLUDED.play_url,
  description = EXCLUDED.description,
  rating = EXCLUDED.rating,
  play_count = EXCLUDED.play_count,
  released_at = EXCLUDED.released_at,
  updated_at = NOW();

-- Insert tags if they don't exist
INSERT INTO tags (slug, name) VALUES
  ('3d', '3D'),
  ('simulation', 'Simulation'),
  ('action', 'Action'),
  ('casual', 'Casual'),
  ('animal', 'Animal'),
  ('city', 'City')
ON CONFLICT (slug) DO NOTHING;

-- Link game to tags
INSERT INTO game_tags (game_id, tag_id)
SELECT 
  (SELECT id FROM games WHERE slug = 'crazy-animal-city'),
  id
FROM tags
WHERE slug IN ('3d', 'simulation', 'action', 'casual', 'animal', 'city')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- Add an initial comment
INSERT INTO game_comments (
  game_id,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms,
  created_at
)
SELECT 
  id,
  'Alex "BeastMaster" Chen',
  'beastmaster@example.com',
  'Crazy Animal City is absolutely INSANE! 🦁💥 I''ve been playing for hours and can''t stop. The destruction physics are so satisfying—watching buildings crumble as my gorilla smashes through them never gets old. Each animal feels completely different to play. The lion is my favorite for its powerful roar that scatters crowds, but the elephant''s charging attack is pure chaos! The city is huge and packed with things to destroy. I love how the environment reacts to your rampage—police cars chasing you, citizens running in panic, and eventually the military shows up. It really makes you feel like an unstoppable force of nature. The graphics are stunning for a browser game, and the controls are super smooth. I''ve unlocked three animals so far and working on getting the rhino next. The challenges are fun and give you goals beyond just random destruction. Highly recommend if you want to blow off some steam or just have a blast causing virtual mayhem! 🎮🔥',
  5,
  'approved',
  true,
  NOW() - INTERVAL '2 hours'
FROM games
WHERE slug = 'crazy-animal-city'
ON CONFLICT DO NOTHING;

-- Verify the insertion
DO $$
DECLARE
  game_count INTEGER;
  tag_count INTEGER;
  comment_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO game_count FROM games WHERE slug = 'crazy-animal-city';
  SELECT COUNT(*) INTO tag_count FROM game_tags WHERE game_id = (SELECT id FROM games WHERE slug = 'crazy-animal-city');
  SELECT COUNT(*) INTO comment_count FROM game_comments WHERE game_id = (SELECT id FROM games WHERE slug = 'crazy-animal-city');
  
  RAISE NOTICE 'Migration completed:';
  RAISE NOTICE '  - Games inserted: %', game_count;
  RAISE NOTICE '  - Tags linked: %', tag_count;
  RAISE NOTICE '  - Comments added: %', comment_count;
  
  IF game_count = 0 THEN
    RAISE EXCEPTION 'Failed to insert game';
  END IF;
  
  IF tag_count < 6 THEN
    RAISE WARNING 'Expected 6 tags, but only % were linked', tag_count;
  END IF;
END $$;

