/*
  # Create Games Schema

  ## Overview
  This migration creates the core database structure for the Steal a Brainrot Unblocked
  game aggregation platform. It supports multiple games with categorization, tagging,
  and search functionality.

  ## Tables Created
  
  ### 1. games
  Main table storing game information
  - `id` (uuid, primary key) - Unique identifier
  - `slug` (text, unique) - URL-friendly identifier
  - `title` (text) - Game title
  - `subtitle` (text, nullable) - Optional subtitle
  - `cover` (text) - Cover image URL
  - `play_url` (text, nullable) - Iframe embeddable URL
  - `description` (text) - Game description
  - `rating` (numeric) - Rating 0-5
  - `play_count` (integer) - Number of plays
  - `duration` (text, nullable) - Estimated play time
  - `released_at` (timestamptz, nullable) - Release date
  - `is_featured` (boolean) - Featured on homepage
  - `is_active` (boolean) - Published status
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. categories
  Game categories for organization
  - `id` (uuid, primary key)
  - `slug` (text, unique)
  - `name` (text)
  - `description` (text, nullable)
  - `icon` (text, nullable) - Icon name from lucide-react

  ### 3. tags
  Tags for detailed game classification
  - `id` (uuid, primary key)
  - `slug` (text, unique)
  - `name` (text)

  ### 4. platforms
  Gaming platforms (WebGL, HTML5, etc.)
  - `id` (uuid, primary key)
  - `slug` (text, unique)
  - `name` (text)

  ### 5. game_categories (junction table)
  Links games to categories (many-to-many)
  
  ### 6. game_tags (junction table)
  Links games to tags (many-to-many)
  
  ### 7. game_platforms (junction table)
  Links games to platforms (many-to-many)

  ### 8. game_seo
  SEO metadata for games
  - `game_id` (uuid, primary key, foreign key)
  - `meta_title` (text, nullable)
  - `meta_description` (text, nullable)
  - `keywords` (text[], nullable)
  - `og_image` (text, nullable)

  ## Security
  - RLS enabled on all tables
  - Public read access for active/published content
  - No write access through RLS (managed via admin interface or API)

  ## Indexes
  - Full-text search indexes on game titles and descriptions
  - Indexes on slugs for fast lookups
  - Indexes on foreign keys for efficient joins
*/

-- Create games table
CREATE TABLE IF NOT EXISTS games (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  subtitle text,
  cover text NOT NULL,
  play_url text,
  description text NOT NULL DEFAULT '',
  rating numeric DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  play_count integer DEFAULT 0,
  duration text,
  released_at timestamptz,
  is_featured boolean DEFAULT false,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  description text,
  icon text,
  created_at timestamptz DEFAULT now()
);

-- Create tags table
CREATE TABLE IF NOT EXISTS tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create platforms table
CREATE TABLE IF NOT EXISTS platforms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create junction tables
CREATE TABLE IF NOT EXISTS game_categories (
  game_id uuid REFERENCES games(id) ON DELETE CASCADE,
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (game_id, category_id)
);

CREATE TABLE IF NOT EXISTS game_tags (
  game_id uuid REFERENCES games(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (game_id, tag_id)
);

CREATE TABLE IF NOT EXISTS game_platforms (
  game_id uuid REFERENCES games(id) ON DELETE CASCADE,
  platform_id uuid REFERENCES platforms(id) ON DELETE CASCADE,
  PRIMARY KEY (game_id, platform_id)
);

-- Create SEO metadata table
CREATE TABLE IF NOT EXISTS game_seo (
  game_id uuid PRIMARY KEY REFERENCES games(id) ON DELETE CASCADE,
  meta_title text,
  meta_description text,
  keywords text[],
  og_image text
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_games_slug ON games(slug);
CREATE INDEX IF NOT EXISTS idx_games_is_active ON games(is_active);
CREATE INDEX IF NOT EXISTS idx_games_is_featured ON games(is_featured);
CREATE INDEX IF NOT EXISTS idx_games_created_at ON games(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_games_rating ON games(rating DESC);
CREATE INDEX IF NOT EXISTS idx_games_play_count ON games(play_count DESC);

CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_tags_slug ON tags(slug);
CREATE INDEX IF NOT EXISTS idx_platforms_slug ON platforms(slug);

-- Full-text search indexes
CREATE INDEX IF NOT EXISTS idx_games_title_search ON games USING gin(to_tsvector('english', title));
CREATE INDEX IF NOT EXISTS idx_games_description_search ON games USING gin(to_tsvector('english', description));

-- Enable Row Level Security
ALTER TABLE games ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE platforms ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_platforms ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_seo ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Public read access for active content
CREATE POLICY "Public can view active games"
  ON games FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Public can view all categories"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view all tags"
  ON tags FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view all platforms"
  ON platforms FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view game categories"
  ON game_categories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view game tags"
  ON game_tags FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view game platforms"
  ON game_platforms FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view game SEO"
  ON game_seo FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert initial data for MVP

-- Insert platforms
INSERT INTO platforms (slug, name) VALUES
  ('webgl', 'WebGL'),
  ('html5', 'HTML5')
ON CONFLICT (slug) DO NOTHING;

-- Insert categories
INSERT INTO categories (slug, name, description, icon) VALUES
  ('puzzle', 'Puzzle', 'Brain-teasing puzzle games', 'Puzzle'),
  ('3d', '3D Games', 'Immersive 3D gaming experiences', 'Box'),
  ('unblocked', 'Unblocked', 'Games accessible anywhere', 'Unlock'),
  ('action', 'Action', 'Fast-paced action games', 'Zap')
ON CONFLICT (slug) DO NOTHING;

-- Insert tags
INSERT INTO tags (slug, name) VALUES
  ('puzzle', 'Puzzle'),
  ('3d', '3D'),
  ('unblocked', 'Unblocked'),
  ('brain-teaser', 'Brain Teaser'),
  ('strategy', 'Strategy'),
  ('casual', 'Casual')
ON CONFLICT (slug) DO NOTHING;

-- Insert the main game: Steal a Brainrot Unblocked
INSERT INTO games (
  slug, 
  title, 
  subtitle,
  cover, 
  play_url, 
  description,
  rating,
  play_count,
  duration,
  is_featured,
  is_active
) VALUES (
  'steal-a-brainrot-unblocked',
  'Steal a Brainrot Unblocked',
  'The Ultimate Brain-Teasing 3D Adventure',
  'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://st.8games.net/9/8g/igra-ukradi-brejnrot-original-3d/',
  'Experience the ultimate brain-teasing adventure in this immersive 3D puzzle game. Navigate through challenging levels, solve intricate puzzles, and test your strategic thinking. This unblocked version is accessible anywhere, providing endless entertainment and mental stimulation. Perfect for puzzle enthusiasts and casual gamers alike.',
  4.5,
  0,
  '10-15 min',
  true,
  true
) ON CONFLICT (slug) DO NOTHING;

-- Link game to categories
INSERT INTO game_categories (game_id, category_id)
SELECT g.id, c.id FROM games g, categories c
WHERE g.slug = 'steal-a-brainrot-unblocked' 
  AND c.slug IN ('puzzle', '3d', 'unblocked')
ON CONFLICT DO NOTHING;

-- Link game to tags
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id FROM games g, tags t
WHERE g.slug = 'steal-a-brainrot-unblocked' 
  AND t.slug IN ('puzzle', '3d', 'unblocked', 'brain-teaser', 'casual')
ON CONFLICT DO NOTHING;

-- Link game to platforms
INSERT INTO game_platforms (game_id, platform_id)
SELECT g.id, p.id FROM games g, platforms p
WHERE g.slug = 'steal-a-brainrot-unblocked' 
  AND p.slug IN ('webgl', 'html5')
ON CONFLICT DO NOTHING;

-- Insert SEO data
INSERT INTO game_seo (game_id, meta_title, meta_description, keywords, og_image)
SELECT 
  g.id,
  'Steal a Brainrot Unblocked - Play Free 3D Puzzle Game Online',
  'Play Steal a Brainrot Unblocked for free! Challenge your mind with this immersive 3D puzzle game. Accessible anywhere, no downloads required.',
  ARRAY['steal a brainrot', 'unblocked games', 'puzzle games', '3d games', 'brain teaser', 'free online games'],
  'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200'
FROM games g
WHERE g.slug = 'steal-a-brainrot-unblocked'
ON CONFLICT (game_id) DO NOTHING;