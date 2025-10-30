-- Add Blendrix game to game_stats table
-- Migration created: 2025-10-30

-- Insert game statistics
INSERT INTO game_stats (slug, play_count, view_count, created_at, updated_at)
VALUES (
  'blendrix',
  113,
  0,
  NOW(),
  NOW()
)
ON CONFLICT (slug) DO UPDATE
SET 
  play_count = EXCLUDED.play_count,
  updated_at = NOW();

-- Insert or update tags
INSERT INTO tags (name, slug, created_at)
VALUES 
  ('Puzzle', 'puzzle', NOW()),
  ('Casual', 'casual', NOW()),
  ('Logic', 'logic', NOW()),
  ('Brain Teaser', 'brain-teaser', NOW()),
  ('Strategy', 'strategy', NOW()),
  ('Minimalist', 'minimalist', NOW()),
  ('Kids', 'kids', NOW())
ON CONFLICT (slug) DO NOTHING;

-- Link game to tags (if using the full games schema)
-- Note: This assumes you have a games table and game_tags junction table
-- If not using the full schema, you can skip this section

DO $$
DECLARE
  game_id_var uuid;
BEGIN
  -- Try to get the game ID from the games table
  SELECT id INTO game_id_var FROM games WHERE slug = 'blendrix';
  
  -- If game exists in games table, link it to tags
  IF game_id_var IS NOT NULL THEN
    INSERT INTO game_tags (game_id, tag_id)
    SELECT 
      game_id_var,
      t.id
    FROM tags t
    WHERE t.slug IN ('puzzle', 'casual', 'logic', 'brain-teaser', 'strategy', 'minimalist', 'kids')
    ON CONFLICT (game_id, tag_id) DO NOTHING;
  END IF;
END $$;

-- Add a sample comment for the game
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  comment_text,
  rating,
  status,
  agreed_terms,
  created_at
) VALUES (
  'blendrix',
  'PuzzleMaster',
  'puzzlemaster@example.com',
  'Blendrix is such a beautifully designed puzzle game! The minimalist aesthetic is calming, and the progressive difficulty keeps me engaged. I love how there''s no time pressure - I can really think through each move. The undo feature is a lifesaver when experimenting with different strategies. The special dot types in later levels add great variety. Perfect for both quick sessions and longer puzzle-solving marathons. Highly recommend for anyone who loves logic puzzles! 🧩✨',
  5,
  'approved',
  true,
  NOW() - INTERVAL '2 days'
);

-- Verify the migration
DO $$
BEGIN
  -- Check if game_stats entry exists
  IF EXISTS (SELECT 1 FROM game_stats WHERE slug = 'blendrix') THEN
    RAISE NOTICE '✅ Blendrix game stats added successfully';
  ELSE
    RAISE WARNING '⚠️ Failed to add Blendrix game stats';
  END IF;

  -- Check if tags exist
  IF EXISTS (SELECT 1 FROM tags WHERE slug IN ('puzzle', 'casual', 'logic', 'brain-teaser', 'strategy', 'minimalist', 'kids')) THEN
    RAISE NOTICE '✅ Blendrix tags added successfully';
  ELSE
    RAISE WARNING '⚠️ Failed to add Blendrix tags';
  END IF;

  -- Check if comment exists
  IF EXISTS (SELECT 1 FROM game_comments WHERE game_slug = 'blendrix') THEN
    RAISE NOTICE '✅ Blendrix comment added successfully';
  ELSE
    RAISE WARNING '⚠️ Failed to add Blendrix comment';
  END IF;
END $$;

