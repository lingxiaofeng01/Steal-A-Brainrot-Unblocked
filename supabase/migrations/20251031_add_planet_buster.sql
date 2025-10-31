-- Migration: Add Planet Buster game to database
-- Date: 2025-10-31
-- Description: Adds Planet Buster game with tags, categories, and initial comment

-- 1. Insert the game
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
  'planet-buster',
  'Planet Buster',
  'One-Button Cosmic Destruction - Blast Planets and Conquer the Universe',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/planet-buster.jpg',
  'https://planet-buster.1games.io/',
  'Planet Buster introduces one-button cosmic casual chaos! Upgrade missiles, destroy planets, and face explosive boss battles. Join the fun destruction now!',
  4.4,
  393,
  '2025-10-31',
  true,
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
  is_featured = EXCLUDED.is_featured,
  is_active = EXCLUDED.is_active,
  updated_at = now();

-- 2. Insert tags (if they don't exist)
INSERT INTO tags (slug, name) VALUES
  ('casual', 'Casual'),
  ('simulation', 'Simulation'),
  ('1games', '1Games'),
  ('idle', 'Idle'),
  ('weapon', 'Weapon'),
  ('one-button', 'One Button'),
  ('destroy', 'Destroy'),
  ('asteroid', 'Asteroid'),
  ('action', 'Action'),
  ('clicker', 'Clicker')
ON CONFLICT (slug) DO NOTHING;

-- 3. Link game to tags
INSERT INTO game_tags (game_id, tag_id)
SELECT 
  (SELECT id FROM games WHERE slug = 'planet-buster'),
  id
FROM tags
WHERE slug IN ('casual', 'simulation', '1games', 'idle', 'weapon', 'one-button', 'destroy', 'asteroid', 'action', 'clicker')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- 4. Insert categories (if they don't exist)
INSERT INTO categories (slug, name, description, icon) VALUES
  ('casual', 'Casual', 'Casual games for quick fun', 'Gamepad2'),
  ('action', 'Action', 'Fast-paced action games', 'Zap')
ON CONFLICT (slug) DO NOTHING;

-- 5. Link game to categories
INSERT INTO game_categories (game_id, category_id)
SELECT 
  (SELECT id FROM games WHERE slug = 'planet-buster'),
  id
FROM categories
WHERE slug IN ('casual', 'action')
ON CONFLICT (game_id, category_id) DO NOTHING;

-- 6. Add initial comment
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms
) VALUES (
  'planet-buster',
  'CosmicDestroyer',
  'cosmicdestroyer@example.com',
  'Planet Buster is incredibly addictive! The one-button gameplay is so satisfying, and watching planets explode never gets old. The upgrade system keeps me coming back for more. Perfect free online game with no downloads needed!',
  5,
  'approved',
  true
) ON CONFLICT DO NOTHING;

-- 7. Update game SEO metadata
INSERT INTO game_seo (
  game_id,
  meta_title,
  meta_description,
  keywords
) VALUES (
  (SELECT id FROM games WHERE slug = 'planet-buster'),
  'Planet Buster - Play Free One-Button Destruction Game Online | Destroy Planets & Upgrade Missiles',
  'Play Planet Buster free online! One-button cosmic destruction game where you blast planets, upgrade missiles, and face boss battles. Addictive idle clicker with strategic upgrades. No downloads required - start destroying planets now!',
  ARRAY['planet buster', 'planet buster game', 'destroy planets game', 'one button game', 'idle clicker game', 'missile upgrade game', 'casual destruction game', 'asteroid destroyer', 'planet destruction', 'cosmic clicker', 'space idle game', 'unblocked games', 'free online games', 'browser games', '1games.io', 'planet buster unblocked', 'planet buster no download']
) ON CONFLICT (game_id) DO UPDATE SET
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  keywords = EXCLUDED.keywords;

-- Success message
DO $$
BEGIN
  RAISE NOTICE '✅ Planet Buster game added successfully!';
  RAISE NOTICE '   - Game record created';
  RAISE NOTICE '   - 10 tags linked';
  RAISE NOTICE '   - 2 categories linked';
  RAISE NOTICE '   - 1 initial comment added';
  RAISE NOTICE '   - SEO metadata configured';
END $$;

