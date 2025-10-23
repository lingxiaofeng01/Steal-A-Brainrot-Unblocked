-- ============================================
-- 同步所有游戏到 Supabase
-- ============================================
-- 
-- 使用说明：
-- 1. 登录 Supabase Dashboard
-- 2. 选择项目：steal a brainrot (tgoyqxcqpwevgztprqgk)
-- 3. 进入 SQL Editor
-- 4. 复制并执行此脚本
--
-- ============================================

-- 删除不存在的游戏
DELETE FROM games WHERE slug = 'steal-a-brainrot-unblocked';

-- 插入或更新所有游戏
INSERT INTO games (slug, title, cover, play_url, description, rating, play_count, released_at, is_active) VALUES
  ('goodgame-empire', 'Goodgame Empire', '/images/thumbnails/goodgame-empire.png', 'https://www.gameflare.com/embed/goodgame-empire/', 'Goodgame Empire - An exciting unblocked game. Play now!', 4.5, 2500000, '2025-01-25', true),
  ('perfect-orbit', 'Perfect Orbit', '/images/thumbnails/perfect-orbit.png', 'https://games.yoplay.io/perfect-orbit/', 'Perfect Orbit - An exciting unblocked game. Play now!', 5.0, 125000, '2025-01-25', true),
  ('italian-neuro-animals', 'Italian Neuro Animals', '/images/thumbnails/italian-neuro-animals.webp', 'https://st.8games.net/7/8g/igra-italyanskie-nejro-zhivotnye-plejgraund/', 'Italian Neuro Animals - An exciting unblocked game. Play now!', 4.5, 2100000, '2025-01-23', true),
  ('crazy-sprunki-3d', 'Crazy Sprunki 3D', '/images/thumbnails/crazy-sprunki-3d.webp', 'https://www.gameflare.com/embed/crazy-sprunki-3d/', 'Crazy Sprunki 3D - An exciting unblocked game. Play now!', 4.0, 850000, '2025-01-22', true),
  ('kart-bros', 'Kart Bros', '/images/thumbnails/kart-bros.webp', 'https://www.gameflare.com/embed/kart-bros/', 'Kart Bros - An exciting unblocked game. Play now!', 4.8, 8500000, '2025-01-21', true),
  ('smash-karts', 'Smash Karts', '/images/thumbnails/smash-karts.webp', 'https://www.gameflare.com/embed/smash-karts/', 'Smash Karts - An exciting unblocked game. Play now!', 4.2, 5000000, '2025-01-13', true),
  ('1v1-lol', '1v1 LOL', '/images/thumbnails/1v1-lol.jpg', 'https://www.gameflare.com/embed/1v1-lol/', '1v1 LOL - An exciting unblocked game. Play now!', 4.4, 80000000, '2025-01-12', true),
  ('bro-royale', 'Bro Royale', '/images/thumbnails/bro-royale.png', 'https://www.gameflare.com/embed/bro-royale/', 'Bro Royale - An exciting unblocked game. Play now!', 5.0, 125000, '2025-01-20', true),
  ('brainrot-clicker', 'Brainrot Clicker', '/images/thumbnails/brainrot-clicker.webp', 'https://www.gameflare.com/embed/brainrot-clicker/', 'Brainrot Clicker - An exciting unblocked game. Play now!', 4.9, 15234, '2025-01-05', true),
  ('brainrot-hook-swing', 'Brainrot Hook Swing', '/images/thumbnails/brainrot-hook-swing.jpg', 'https://www.gameflare.com/embed/brainrot-hook-swing/', 'Brainrot Hook Swing - An exciting unblocked game. Play now!', 4.5, 18567, '2024-12-20', true),
  ('italian-brainrot-baby-clicker', 'Italian Brainrot Baby Clicker', '/images/thumbnails/italian-brainrot-baby-clicker.jpg', 'https://www.gameflare.com/embed/italian-brainrot-baby-clicker/', 'Italian Brainrot Baby Clicker - An exciting unblocked game. Play now!', 4.8, 8923, '2025-01-08', true),
  ('steal-the-italian-brainrot', 'Steal The Italian Brainrot', '/images/thumbnails/steal-the-italian-brainrot.png', 'https://now.gg/apps/roblox-corporation/5349/roblox.html', 'Steal The Italian Brainrot - An exciting unblocked game. Play now!', 4.9, 18923, '2024-12-15', true),
  ('obby-my-singing-brainrot', 'Obby: My Singing Brainrot', '/images/thumbnails/obby-my-singing-brainrot.jpg', 'https://st.8games.net/7/8g/igra-obbi-moj-poyushchij-brejnrot-1-3d/', 'Obby: My Singing Brainrot - An exciting unblocked game. Play now!', 5.0, 850000, '2024-12-10', true),
  ('steal-brainrot-online', 'Steal Brainrot Online', '/images/thumbnails/steal-brainrot-online.png', 'https://www.roblox.com/games/start?placeId=987654321', 'Steal Brainrot Online - An exciting unblocked game. Play now!', 4.3, 12456, '2024-12-01', true),
  ('steal-brainrot-new-animals', 'Steal Brainrot: New Animals', '/images/thumbnails/steal-brainrot-new-animals.png', 'https://www.roblox.com/games/start?placeId=456789123', 'Steal Brainrot: New Animals - An exciting unblocked game. Play now!', 3.5, 3421, '2025-01-10', true),
  ('memory-brainrot', 'Memory Brainrot', '/images/thumbnails/memory-brainrot.jpg', 'https://html5.gamedistribution.com/0eec782d61e6449ab2e3ecc02272bcad/?utm_source=italian-brainrot.io&utm_medium=brainrot-memory&utm_campaign=block-and-redirect', 'Memory Brainrot - An exciting unblocked game. Play now!', 5.0, 28934, '2024-11-20', true),
  ('italian-brainrot-clicker-2', 'Italian Brainrot Clicker 2', '/images/thumbnails/italian-brainrot-clicker-2.png', 'https://www.gameflare.com/embed/italian-brainrot-clicker-2/', 'Italian Brainrot Clicker 2 - An exciting unblocked game. Play now!', 4.0, 6789, '2025-01-09', true),
  ('plants-vs-brainrots', 'Plants vs Brainrots', '/images/thumbnails/plants-vs-brainrots.jpg', 'https://st.8games.net/7/8g/igra-brejnroty-protiv-rastenij/', 'Plants vs Brainrots - An exciting unblocked game. Play now!', 4.1, 21567, '2024-11-15', true),
  ('crazy-cattle-3d', 'Crazy Cattle 3D', '/images/thumbnails/crazy-cattle-3d.jpg', 'https://www.gameflare.com/embed/crazy-cattle-3d/', 'Crazy Cattle 3D - An exciting unblocked game. Play now!', 4.6, 2156, '2025-01-11', true),
  ('crazy-cattle-3d-unblocked', 'Crazy Cattle 3D Unblocked', '/images/thumbnails/crazy-cattle-3d-unblocked.png', 'https://crazycattle3d.io/game/crazycattle3d/v8/', 'Crazy Cattle 3D Unblocked - An exciting unblocked game. Play now!', 4.6, 850000, '2024-11-20', true),
  ('las-sis-steal-brainrot', 'Las Sis (Steal a Brainrot)', '/images/thumbnails/las-sis-steal-brainrot.jpg', 'https://www.roblox.com/games/start?placeId=789123456', 'Las Sis (Steal a Brainrot) - An exciting unblocked game. Play now!', 4.7, 4303, '2025-01-20', true),
  ('little-big-snake', 'Little Big Snake', '/images/thumbnails/little-big-snake.png', 'https://www.gameflare.com/embed/little-big-snake/', 'Little Big Snake - An exciting unblocked game. Play now!', 5.0, 8500000, '2025-01-21', true),
  ('cheese-chompers-3d', 'Cheese Chompers 3D', '/images/thumbnails/cheese-chompers-3d.png', 'https://www.gameflare.com/embed/cheese-chompers-3d/', 'Cheese Chompers 3D - An exciting unblocked game. Play now!', 5.0, 1, '2025-01-21', true),
  ('crazy-sheep-3d', 'Crazy Sheep 3D', '/images/thumbnails/crazy-sheep-3d.png', 'https://www.gameflare.com/embed/crazy-sheep-3d/', 'Crazy Sheep 3D - An exciting unblocked game. Play now!', 4.1, 45000, '2025-01-22', true),
  ('rocket-fortress', 'Rocket Fortress', '/images/thumbnails/rocket-fortress.png', 'https://www.gameflare.com/embed/rocket-fortress/', 'Rocket Fortress - An exciting unblocked game. Play now!', 5.0, 125000, '2025-01-22', true),
  ('fix-da-brainrot', 'Fix Da Brainrot', '/images/thumbnails/fix-da-brainrot.jpg', 'https://storage.y8.com/y8-studio/html5/jdchanda/fix_da_brainrot/?key=y8&value=default', 'Fix Da Brainrot - An exciting unblocked game. Play now!', 4.6, 1200000, '2025-01-22', true),
  ('blocky-rush', 'Blocky Rush', '/images/thumbnails/blocky-rush.png', 'https://yoplay.io/blocky-rush.embed', 'Blocky Rush - An exciting unblocked game. Play now!', 4.2, 750000, '2024-12-15', true),
  ('the-freak-circus', 'The Freak Circus', '/images/thumbnails/the-freak-circus.jpg', 'https://html-classic.itch.zone/html/14081436/index.html', 'The Freak Circus - An exciting unblocked game. Play now!', 4.9, 2514000, '2025-10-23', true),
  ('no-im-not-a-human', 'No, I\'m not a Human', '/images/thumbnails/no-im-not-a-human.png', 'https://d.ulyagames.com/games/no-im-not-a-human/', 'No, I\'m not a Human - Psychological horror survival game. Play now!', 4.7, 850000, '2025-10-23', true)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  cover = EXCLUDED.cover,
  play_url = EXCLUDED.play_url,
  description = EXCLUDED.description,
  rating = EXCLUDED.rating,
  play_count = EXCLUDED.play_count,
  released_at = EXCLUDED.released_at,
  is_active = EXCLUDED.is_active,
  updated_at = NOW();

-- 验证同步结果
SELECT COUNT(*) as total_games FROM games WHERE is_active = true;
SELECT slug, title, play_count FROM games WHERE is_active = true ORDER BY play_count DESC LIMIT 10;

