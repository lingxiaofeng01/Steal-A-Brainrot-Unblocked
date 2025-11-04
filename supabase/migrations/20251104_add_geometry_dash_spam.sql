-- Migration: Add Geometry Dash Spam game
-- Created: 2025-11-04
-- Description: Adds Geometry Dash Spam game with tags and initial comment

-- =============================================
-- 1. Insert game record into games table
-- =============================================
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
  is_active,
  is_featured
) VALUES (
  'geometry-dash-spam',
  'Geometry Dash Spam',
  'Master the Ultimate Wave Spam Challenge - Train Your CPS to Perfection',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/geometry-dash-spam.webp',
  'https://files.twoplayergames.org/files/games/g1/geometry-vibes-v11/index.html',
  'Geometry Dash Spam is a specialized training tool for Geometry Dash players, designed to sharpen click speed (CPS—Clicks Per Second) and reflexes, especially in Wave mode. Unlike traditional Geometry Dash gameplay, this version demands players to click continuously at extremely high speeds (up to 50–100 CPS) to weave through narrow, intricate obstacles.

This intense training mode has become essential for players looking to master the most challenging levels in Geometry Dash Spam. The game pushes your clicking abilities to the absolute limit, requiring precision timing combined with lightning-fast reflexes. Whether you''re preparing for extreme demons or just want to improve your overall Geometry Dash skills, Geometry Dash Spam provides the perfect practice environment.

The Geometry Dash Spam experience is built around the Wave game mode, where players control a small triangle that moves up and down along the vertical axis. Each click instantly switches the Wave''s direction, and the objective is to keep the Wave from touching obstacles like spikes, walls, and tight corridors by clicking at precisely the right moments.

Key Features:
• Extreme CPS Training: Specialized levels designed to push your clicking speed to 50-100 CPS
• Wave Mode Mastery: Focus exclusively on Wave mode mechanics through dedicated practice
• 15 Progressive Levels: Meticulously crafted levels scaling from easy to brain-melting difficulty
• Precision Timing Challenges: Navigate through narrow, intricate obstacles demanding perfect timing
• Rhythm-Based Gameplay: Sync your clicks with the music for optimal performance
• Skill Development System: Structured approach to improving from basic clicking to advanced spam techniques
• Muscle Memory Training: Build instinctive reactions through repetitive practice
• Unblocked Access: Play anywhere, anytime with full unblocked access

Gameplay Mechanics:
Wave Mode controls a small triangle moving up and down. Each click or tap instantly switches the Wave''s direction. The objective is to keep the Wave from touching obstacles by clicking at precisely the right moments.

Key factors to master include Click Speed (CPS) - the faster you click, the more flexible the Wave moves. Accuracy is crucial - click too slowly and you crash, click too quickly without rhythm and you lose control. Rhythm synchronization with music or fixed patterns is essential for success.

Techniques to Become a Top Wave Spammer:
• Jitter Click: Rapid finger shaking to achieve 10-15 CPS
• Butterfly Click: Alternating two fingers to reach 15-25 CPS
• Drag Click: Advanced technique for even higher CPS rates
• Strategic Level Progression: Start with accuracy, gradually increase speed
• Mental Mastery: Maintain controlled spamming with rhythm, stay calm under pressure

The Final Challenge features 15 meticulously crafted levels requiring patience, technique, and determination. This brutal but rewarding gauntlet will test everything you''ve learned and prepare you for the most extreme challenges in the main Geometry Dash game.',
  5.0,
  0,
  '2025-11-04',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;

-- =============================================
-- 2. Ensure all required tags exist
-- =============================================
INSERT INTO tags (slug, name, created_at)
VALUES
  ('action', 'Action', NOW()),
  ('arcade', 'Arcade', NOW()),
  ('skill', 'Skill', NOW()),
  ('rhythm', 'Rhythm', NOW()),
  ('platformer', 'Platformer', NOW()),
  ('casual', 'Casual', NOW()),
  ('timing', 'Timing', NOW())
ON CONFLICT (slug) DO NOTHING;

-- =============================================
-- 3. Link game to tags via game_tags table
-- =============================================
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'geometry-dash-spam'
  AND t.slug IN ('action', 'arcade', 'skill', 'rhythm', 'platformer', 'casual', 'timing')
ON CONFLICT (game_id, tag_id) DO NOTHING;

-- =============================================
-- 4. Add initial themed comment
-- =============================================
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
  'geometry-dash-spam',
  'WaveSpamMaster',
  'wavespam@example.com',
  'Geometry Dash Spam is absolutely insane! I''ve been playing Geometry Dash for years, but this training tool took my Wave skills to a whole new level. When I first started, I could barely maintain 15 CPS, but after practicing with these 15 progressively harder levels, I''m now consistently hitting 40-50 CPS on the hardest sections.

The level design is brilliant - each stage introduces new patterns and obstacles that force you to adapt your clicking technique. The early levels teach you the fundamentals of controlled spamming, while the later levels are absolutely brutal and will test every ounce of skill you''ve developed.

What I love most about Geometry Dash Spam is how it builds muscle memory. After spending hours on these training levels, I went back to the main game and suddenly extreme demons felt so much more manageable. The tight corridors and spam sections that used to destroy me are now almost second nature.

The rhythm-based gameplay is also fantastic - syncing your clicks with the music creates this amazing flow state where you''re not even thinking, just reacting. It''s incredibly satisfying when you finally nail a section that''s been giving you trouble for hours.

If you''re serious about improving your Geometry Dash skills, especially in Wave mode, this is an absolute must-play. Just be prepared for a serious challenge - these 15 levels will push you to your absolute limits!',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;

