/*
  # Add 'Block' Tag

  ## Overview
  This migration adds the 'block' tag to the tags table.
  This tag is used for block-based puzzle and building games.

  ## Changes
  - Insert 'block' tag into tags table
*/

-- Insert 'block' tag
INSERT INTO tags (slug, name)
VALUES ('block', 'Block')
ON CONFLICT (slug) DO NOTHING;

