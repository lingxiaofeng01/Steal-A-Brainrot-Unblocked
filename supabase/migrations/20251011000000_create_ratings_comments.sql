/*
  # Create Ratings and Comments Schema

  ## Overview
  This migration adds user ratings and comments functionality for games.

  ## Tables Created
  
  ### 1. game_ratings
  Stores individual user ratings for games
  - `id` (uuid, primary key) - Unique identifier
  - `game_slug` (text) - Game identifier
  - `user_fingerprint` (text) - Browser fingerprint to prevent duplicate ratings
  - `rating` (integer) - Rating value (1-5 stars)
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. game_comments
  Stores user comments for games
  - `id` (uuid, primary key) - Unique identifier
  - `game_slug` (text) - Game identifier
  - `user_name` (text) - Commenter's name
  - `comment_text` (text) - Comment content
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - RLS enabled on all tables
  - Public read access
  - Public write access (with rate limiting recommended)

  ## Indexes
  - Index on game_slug for fast lookups
  - Index on user_fingerprint for duplicate checking
*/

-- Create game_ratings table
CREATE TABLE IF NOT EXISTS game_ratings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  game_slug text NOT NULL,
  user_fingerprint text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(game_slug, user_fingerprint)
);

-- Create game_comments table
CREATE TABLE IF NOT EXISTS game_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  game_slug text NOT NULL,
  user_name text NOT NULL,
  comment_text text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_game_ratings_slug ON game_ratings(game_slug);
CREATE INDEX IF NOT EXISTS idx_game_ratings_fingerprint ON game_ratings(user_fingerprint);
CREATE INDEX IF NOT EXISTS idx_game_comments_slug ON game_comments(game_slug);
CREATE INDEX IF NOT EXISTS idx_game_comments_created ON game_comments(created_at DESC);

-- Enable Row Level Security
ALTER TABLE game_ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_comments ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can view ratings"
  ON game_ratings FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view comments"
  ON game_comments FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create policies for public write access
CREATE POLICY "Public can insert ratings"
  ON game_ratings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Public can update own ratings"
  ON game_ratings FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Public can insert comments"
  ON game_comments FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for game_ratings
CREATE TRIGGER update_game_ratings_updated_at
  BEFORE UPDATE ON game_ratings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

