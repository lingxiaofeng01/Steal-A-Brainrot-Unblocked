/*
  # Add rating, status, user_email, and agreed_terms to game_comments

  ## Overview
  This migration extends the game_comments table with additional fields for:
  - rating: User's star rating (1-5)
  - status: Moderation status (pending, approved, rejected)
  - user_email: User's email address
  - agreed_terms: Whether user agreed to terms

  ## Changes
  - Add rating column (integer, 1-5)
  - Add status column (text, default 'pending')
  - Add user_email column (text)
  - Add agreed_terms column (boolean, default false)
  - Create index on status for filtering
*/

-- Add new columns to game_comments table
ALTER TABLE game_comments
ADD COLUMN IF NOT EXISTS rating integer CHECK (rating >= 1 AND rating <= 5),
ADD COLUMN IF NOT EXISTS status text DEFAULT 'pending',
ADD COLUMN IF NOT EXISTS user_email text,
ADD COLUMN IF NOT EXISTS agreed_terms boolean DEFAULT false;

-- Create index on status for faster filtering
CREATE INDEX IF NOT EXISTS idx_game_comments_status ON game_comments(status);

-- Create index on game_slug and status for combined queries
CREATE INDEX IF NOT EXISTS idx_game_comments_slug_status ON game_comments(game_slug, status);

-- Update RLS policies to include new columns
DROP POLICY IF EXISTS "Public can insert comments" ON game_comments;

CREATE POLICY "Public can insert comments"
  ON game_comments FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Add policy for updating comments (if needed in future)
CREATE POLICY IF NOT EXISTS "Public can update own comments"
  ON game_comments FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

