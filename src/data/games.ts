export interface GameData {
  name: string;
  image: string;
  slug: string;
  isReal: true;
  url?: string; // Game iframe URL
  releaseDate?: string; // ISO date string (YYYY-MM-DD)
  tags?: string[]; // Game tags for categorization and related games
  rating?: number; // Game rating (0-5)
  playCount?: number; // Play count / views for hot games ranking
}

export interface PlaceholderGame {
  emoji: string;
  name: string;
  color: string;
}

export type Game = GameData | PlaceholderGame;

// Helper function to check if a game is a real game
export function isRealGame(game: Game): game is GameData {
  return 'isReal' in game && game.isReal === true;
}

// All games data with release dates, tags, and ratings
export const allGames: Game[] = [
  {
    name: 'Rocket Fortress',
    image: '/images/thumbnails/rocket-fortress.png',
    slug: 'rocket-fortress',
    isReal: true,
    url: 'https://gamea.azgame.io/rocket-fortress/',
    releaseDate: '2025-10-30',
    tags: ['Clicker', 'RPG', 'Action', 'Strategy', 'Casual', 'Shooting', 'Kids'],
    rating: 4.2,
    playCount: 2320
  },
  {
    name: 'Undead Corridor',
    image: '/images/thumbnails/undead-corridor.png',
    slug: 'undead-corridor',
    isReal: true,
    url: 'https://gamea.azgame.io/undead-corridor/',
    releaseDate: '2025-10-30',
    tags: ['Shooting', 'Horror', 'Zombie', 'Survival', 'Action', '2D', 'Arcade'],
    rating: 4.4,
    playCount: 485
  },
  {
    name: 'Blendrix',
    image: '/images/thumbnails/blendrix.png',
    slug: 'blendrix',
    isReal: true,
    url: 'https://gamea.azgame.io/blendrix/',
    releaseDate: '2025-10-30',
    tags: ['Puzzle', 'Casual', 'Logic', 'Brain Teaser', 'Strategy', 'Minimalist', 'Kids'],
    rating: 4.2,
    playCount: 113
  },
  {
    name: 'Steal Brainrots',
    image: '/images/thumbnails/steal-brainrots.png',
    slug: 'steal-brainrots',
    isReal: true,
    url: 'https://azgames.io/steal-brainrots/steal-brainrots.embed',
    releaseDate: '2025-10-30',
    tags: ['Action', 'Puzzle', 'Strategy', 'Collecting', 'Stealth', 'Brainrot', 'Casual', 'Arcade'],
    rating: 4.7,
    playCount: 0
  },
  {
    name: 'Yokai Dungeon',
    image: '/images/thumbnails/yokai-dungeon.png',
    slug: 'yokai-dungeon',
    isReal: true,
    url: 'https://playgroundfree.github.io/yokai-dungeon/',
    releaseDate: '2025-10-30',
    tags: ['Puzzle', 'Strategy', 'Escape', 'Monster', 'Collecting', 'Halloween', 'Maze', 'Roguelike', 'Action'],
    rating: 4.5,
    playCount: 0
  },
  {
    name: 'A Pretty Odd Bunny: Roast It!',
    image: '/images/thumbnails/a-pretty-odd-bunny-roast-it.png',
    slug: 'a-pretty-odd-bunny-roast-it',
    isReal: true,
    url: 'https://snakeiogames.github.io/a_pretty_odd_bunny_roast_it/',
    releaseDate: '2025-10-30',
    tags: ['Arcade', 'Puzzle', 'Platform', 'Animal', 'Bunny', 'Funny', 'Multiplayer', 'Casual'],
    rating: 4.7,
    playCount: 0
  },
  {
    name: 'Zombotron Re-Boot',
    image: '/images/thumbnails/zombotron-re-boot.webp',
    slug: 'zombotron-re-boot',
    isReal: true,
    url: 'https://gamequestfree.github.io/zombotron-re-boot/',
    releaseDate: '2025-10-30',
    tags: ['Action', 'Platform', '2D', 'Indie', 'Physics', 'Zombie', 'Shooting', 'Adventure'],
    rating: 4.4,
    playCount: 0
  },
  {
    name: 'Crazy Chicken 3D',
    image: '/images/thumbnails/crazy-chicken-3d.webp',
    slug: 'crazy-chicken-3d',
    isReal: true,
    url: 'https://1games.io/game/crazy-chicken-3d/',
    releaseDate: '2025-10-29',
    tags: ['Action', 'Survival', 'Physics', 'Battle Royale', 'Animal', 'Crazy Cattle 3D'],
    rating: 4.3,
    playCount: 0
  },
  {
    name: 'Humans Playground',
    image: '/images/thumbnails/humans-playground.jpg',
    slug: 'humans-playground',
    isReal: true,
    url: 'https://html5.gamedistribution.com/4eacf9fb9012479194568af9a7e0417c/?gd_sdk_referrer_url=https://1games.io/humans-playground',
    releaseDate: '2025-10-29',
    tags: ['Action', 'Adventure', 'Simulation', 'Physics', 'Sandbox', 'Ragdoll', 'Creation'],
    rating: 4.1,
    playCount: 0
  },
  {
    name: 'Tung Sahur Clicker',
    image: '/images/thumbnails/tung-sahur-clicker.webp',
    slug: 'tung-sahur-clicker',
    isReal: true,
    url: 'https://1games.io/game/tung-sahur-clicker/',
    releaseDate: '2025-10-29',
    tags: ['Clicker', 'Casual', 'Funny', 'Idle', 'One Button', 'Incremental', 'Italian Brainrot'],
    rating: 4.4,
    playCount: 0
  },
  {
    name: 'Cheese Chompers 3D',
    image: '/images/thumbnails/cheese-chompers-3d.webp',
    slug: 'cheese-chompers-3d',
    isReal: true,
    url: 'https://epicfreegames78.github.io/cheese-chompers-3d/',
    releaseDate: '2025-10-29',
    tags: ['Action', 'Survival', 'Fast-paced', 'Arena', 'Animal', '3D', 'Multiplayer', 'Physics'],
    rating: 4.4,
    playCount: 0
  },
  {
    name: 'FNaF Shooter',
    image: '/images/thumbnails/fnaf-shooter.webp',
    slug: 'fnaf-shooter',
    isReal: true,
    url: 'https://html5.gamedistribution.com/eb8346d4739e40eda6e4196dfc9166b7/?gd_sdk_referrer_url=https://1games.io/fnaf-shooter',
    releaseDate: '2025-10-29',
    tags: ['Action', 'Horror', 'Shooting', 'FNAF', 'Gun', 'FPS', 'Halloween'],
    rating: 4.6,
    playCount: 0
  },
  {
    name: 'Dude Theft Auto',
    image: '/images/thumbnails/dude-theft-auto.webp',
    slug: 'dude-theft-auto',
    isReal: true,
    url: 'https://1games.io/game/dude-theft-auto/',
    releaseDate: '2025-10-27',
    tags: ['Action', 'Shooting', 'Simulation', '3D', 'Multiplayer', 'Physics', 'Gun', 'FPS'],
    rating: 4.6,
    playCount: 0
  },
  {
    name: 'Block Breaker',
    image: '/images/thumbnails/block-breaker.jpeg',
    slug: 'block-breaker',
    isReal: true,
    url: '//html5.gamedistribution.com/rvvASMiM/e8c759ba34bd4b9b9760b77fb04b69d9/index.html?gd_sdk_referrer_url=https%3A%2F%2F1games.io%2Fblock-breaker&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovLzFnYW1lcy5pby9ibG9jay1icmVha2VyIiwicGFyZW50RG9tYWluIjoiMWdhbWVzLmlvIiwidG9wRG9tYWluIjoiMWdhbWVzLmlvIiwiaGFzSW1wcmVzc2lvbiI6ZmFsc2UsImxvYWRlckVuYWJsZWQiOnRydWUsImhvc3QiOiJodG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbSIsInZlcnNpb24iOiIxLjUuMTgifQ%253D%253D',
    releaseDate: '2025-10-27',
    tags: ['Arcade', 'Action', 'Skill', 'Casual', 'Block', 'Agility'],
    rating: 4.5,
    playCount: 0
  },
  {
    name: 'Colorbox Mustard',
    image: '/images/thumbnails/colorbox-mustard.webp',
    slug: 'colorbox-mustard',
    isReal: true,
    url: 'https://kdata1.com/2024/10/colorbox-mustard/',
    releaseDate: '2025-10-25',
    tags: ['Music', 'Creative', 'Casual', 'Rhythm', 'Art', 'Sound'],
    rating: 4.8,
    playCount: 0
  },
  {
    name: 'Top Speed Racing 3D',
    image: '/images/thumbnails/top-speed-racing-3d.webp',
    slug: 'top-speed-racing-3d',
    isReal: true,
    url: 'https://gamesonline86.github.io/top-speed-racing-3d/',
    releaseDate: '2025-10-25',
    tags: ['Racing', '3D', 'Car', 'Speed', 'Driving', 'Sports'],
    rating: 4.9,
    playCount: 81
  },
  {
    name: 'Crazy Animal City',
    image: '/images/thumbnails/crazy-animal-city.webp',
    slug: 'crazy-animal-city',
    isReal: true,
    url: 'https://1games.io/game/crazy-animal-city/',
    releaseDate: '2025-10-25',
    tags: ['3D', 'Simulation', 'Action', 'Casual', 'Animal', 'City'],
    rating: 4.6,
    playCount: 320
  },
  {
    name: 'Spacebar Clicker 3',
    image: '/images/thumbnails/spacebar-clicker-3.webp',
    slug: 'spacebar-clicker-3',
    isReal: true,
    url: 'https://1games.io/game/spacebar-clicker-3/',
    releaseDate: '2025-10-25',
    tags: ['Clicker', 'Casual', 'Skill', 'Speed', 'Arcade', 'Incremental'],
    rating: 4.7,
    playCount: 129
  },
  {
    name: 'Block Blast 3D',
    image: '/images/thumbnails/block-blast-3d.webp',
    slug: 'block-blast-3d',
    isReal: true,
    url: 'https://1games.io/game/block-blast-3d/',
    releaseDate: '2025-10-25',
    tags: ['Puzzle', '3D', 'Block', 'Strategy', 'Casual', 'Brain'],
    rating: 4.3,
    playCount: 850
  },
  {
    name: 'Wacky Flip',
    image: '/images/thumbnails/wacky-flip.webp',
    slug: 'wacky-flip',
    isReal: true,
    url: 'https://1games.io/game/wacky-flip',
    releaseDate: '2025-10-24',
    tags: ['Sports', 'Action', 'Parkour', 'Stunt', 'Skill', 'Physics'],
    rating: 4.6,
    playCount: 16270
  },
  {
    name: 'Take Care Of Shadow Milk',
    image: '/images/thumbnails/take-care-of-shadow-milk.png',
    slug: 'take-care-of-shadow-milk',
    isReal: true,
    url: 'https://scratch.mit.edu/projects/1206876997/embed',
    releaseDate: '2025-10-24',
    tags: ['Scratch', 'Simulation', 'Pet', 'Casual', 'Virtual Pet', 'Cookie Run'],
    rating: 4.5,
    playCount: 593
  },
  {
    name: 'Steal the cool Brainrot Sprunki',
    image: '/images/thumbnails/steal-the-cool-brainrot-sprunki.jpeg',
    slug: 'steal-the-cool-brainrot-sprunki',
    isReal: true,
    url: 'https://st.8games.net/7/8g/igra-ukradi-krutykh-brejnrot-sprunki/',
    releaseDate: '2025-10-24',
    tags: ['Idle', 'Casual', 'Collection', 'Tycoon', 'Clicker', 'Incremental'],
    rating: 4.7,
    playCount: 1500
  },
  {
    name: 'Obby: Steal the Fugglers',
    image: '/images/thumbnails/obby-steal-the-fugglers.jpeg',
    slug: 'obby-steal-the-fugglers',
    isReal: true,
    url: 'https://st.8games.net/9/8g/igra-obbi-ukradi-fugglerov/',
    releaseDate: '2025-10-24',
    tags: ['Idle', 'Casual', 'Collection', 'Tycoon', 'Clicker', 'Funny'],
    rating: 4.6,
    playCount: 1200
  },
  {
    name: 'Steal Brainrot Monsters',
    image: '/images/thumbnails/steal-brainrot-monsters.jpeg',
    slug: 'steal-brainrot-monsters',
    isReal: true,
    url: 'https://st.8games.net/7/8g/igra-ukradi-brejnrot-monstrov/',
    releaseDate: '2025-10-20',
    tags: ['Idle', 'Strategy', 'Casual', 'Multiplayer', 'Brainrot', 'Collection'],
    rating: 4.5,
    playCount: 150000
  },
  {
    name: 'Goodgame Empire',
    image: '/images/thumbnails/goodgame-empire.png',
    slug: 'goodgame-empire',
    isReal: true,
    url: 'https://www.gameflare.com/embed/goodgame-empire/',
    releaseDate: '2025-01-25',
    tags: ['Strategy', 'Battle', 'Multiplayer', 'Building', 'Action'],
    rating: 4.5,
    playCount: 2500000
  },
  {
    name: 'Perfect Orbit',
    image: '/images/thumbnails/perfect-orbit.png',
    slug: 'perfect-orbit',
    isReal: true,
    url: 'https://games.yoplay.io/perfect-orbit/',
    releaseDate: '2025-01-25',
    tags: ['Sports', 'Arcade', 'Casual', 'Simulation', 'One-Touch', 'Skill'],
    rating: 5.0,
    playCount: 125000
  },
  {
    name: 'Italian Neuro Animals',
    image: '/images/thumbnails/italian-neuro-animals.webp',
    slug: 'italian-neuro-animals',
    isReal: true,
    url: 'https://st.8games.net/7/8g/igra-italyanskie-nejro-zhivotnye-plejgraund/',
    releaseDate: '2025-01-23',
    tags: ['Sandbox', 'Physics Game', 'Multiplayer', 'Action', 'Funny'],
    rating: 4.5,
    playCount: 2100000
  },
  {
    name: 'Crazy Sprunki 3D',
    image: '/images/thumbnails/crazy-sprunki-3d.webp',
    slug: 'crazy-sprunki-3d',
    isReal: true,
    url: 'https://www.gameflare.com/embed/crazy-sprunki-3d/',
    releaseDate: '2025-01-22',
    tags: ['3D', 'Battle', 'Multiplayer', 'Action', 'Funny', 'Casual'],
    rating: 4.0,
    playCount: 850000
  },
  {
    name: 'Kart Bros',
    image: '/images/thumbnails/kart-bros.webp',
    slug: 'kart-bros',
    isReal: true,
    url: 'https://www.gameflare.com/embed/kart-bros/',
    releaseDate: '2025-01-21',
    tags: ['Racing', 'Multiplayer', 'IO', 'Action', 'Battle'],
    rating: 4.8,
    playCount: 8500000
  },
  {
    name: 'Smash Karts',
    image: '/images/thumbnails/smash-karts.webp',
    slug: 'smash-karts',
    isReal: true,
    url: 'https://www.gameflare.com/embed/smash-karts/',
    releaseDate: '2025-01-13',
    tags: ['Battle', 'Multiplayer', 'Racing', 'Action', 'IO'],
    rating: 4.2,
    playCount: 5000000
  },
  {
    name: '1v1 LOL',
    image: '/images/thumbnails/1v1-lol.jpg',
    slug: '1v1-lol',
    isReal: true,
    url: 'https://www.gameflare.com/embed/1v1-lol/',
    releaseDate: '2025-01-12',
    tags: ['Battle', 'Multiplayer', 'Shooter', 'Building', 'Action'],
    rating: 4.4,
    playCount: 80000000
  },
  {
    name: 'Bro Royale',
    image: '/images/thumbnails/bro-royale.png',
    slug: 'bro-royale',
    isReal: true,
    url: 'https://www.gameflare.com/embed/bro-royale/',
    releaseDate: '2025-01-20',
    tags: ['Battle', 'Shooter', 'Multiplayer', 'Action', 'IO'],
    rating: 5.0,
    playCount: 125000
  },
  {
    name: 'Brainrot Clicker',
    image: '/images/thumbnails/brainrot-clicker.webp',
    slug: 'brainrot-clicker',
    isReal: true,
    url: 'https://www.gameflare.com/embed/brainrot-clicker/',
    releaseDate: '2025-01-05',
    tags: ['Brainrot', 'Clicker', 'Idle', 'Incremental', 'Casual'],
    rating: 4.9,
    playCount: 15234
  },
  {
    name: 'Brainrot Hook Swing',
    image: '/images/thumbnails/brainrot-hook-swing.jpg',
    slug: 'brainrot-hook-swing',
    isReal: true,
    url: 'https://www.gameflare.com/embed/brainrot-hook-swing/',
    releaseDate: '2024-12-20',
    tags: ['Brainrot', 'Action', 'Skill', 'Arcade', 'Physics'],
    rating: 4.5,
    playCount: 18567
  },
  {
    name: 'Italian Brainrot Baby Clicker',
    image: '/images/thumbnails/italian-brainrot-baby-clicker.jpg',
    slug: 'italian-brainrot-baby-clicker',
    isReal: true,
    url: 'https://www.gameflare.com/embed/italian-brainrot-baby-clicker/',
    releaseDate: '2025-01-08',
    tags: ['Brainrot', 'Clicker', 'Funny', 'Meme', 'Casual'],
    rating: 4.8,
    playCount: 8923
  },
  {
    name: 'Steal The Italian Brainrot',
    image: '/images/thumbnails/steal-the-italian-brainrot.png',
    slug: 'steal-the-italian-brainrot',
    isReal: true,
    url: 'https://now.gg/apps/roblox-corporation/5349/roblox.html',
    releaseDate: '2024-12-15',
    tags: ['Brainrot', 'Adventure', 'Strategy', '3D', 'Puzzle'],
    rating: 4.9,
    playCount: 18923
  },
  {
    name: 'Obby: My Singing Brainrot',
    image: '/images/thumbnails/obby-my-singing-brainrot.jpg',
    slug: 'obby-my-singing-brainrot',
    isReal: true,
    url: 'https://st.8games.net/7/8g/igra-obbi-moj-poyushchij-brejnrot-1-3d/',
    releaseDate: '2024-12-10',
    tags: ['Roblox', 'Music', 'Meme', 'Adventure', 'Parkour', 'Brainrot'],
    rating: 5.0,
    playCount: 850000
  },
  {
    name: 'Steal Brainrot Online',
    image: '/images/thumbnails/steal-brainrot-online.png',
    slug: 'steal-brainrot-online',
    isReal: true,
    url: 'https://www.roblox.com/games/start?placeId=987654321',
    releaseDate: '2024-12-01',
    tags: ['Brainrot', 'Multiplayer', 'Roblox', 'Meme', 'Strategy', 'Casual'],
    rating: 4.3,
    playCount: 12456
  },
  {
    name: 'Steal Brainrot: New Animals',
    image: '/images/thumbnails/steal-brainrot-new-animals.png',
    slug: 'steal-brainrot-new-animals',
    isReal: true,
    url: 'https://www.roblox.com/games/start?placeId=456789123',
    releaseDate: '2025-01-10',
    tags: ['Brainrot', 'Roblox', 'Meme', 'Collection', 'Arcade', 'Casual'],
    rating: 3.5,
    playCount: 3421
  },
  {
    name: 'Memory Brainrot',
    image: '/images/thumbnails/memory-brainrot.jpg',
    slug: 'memory-brainrot',
    isReal: true,
    url: 'https://html5.gamedistribution.com/0eec782d61e6449ab2e3ecc02272bcad/?utm_source=italian-brainrot.io&utm_medium=brainrot-memory&utm_campaign=block-and-redirect',
    releaseDate: '2024-11-20',
    tags: ['Brainrot', 'Memory', 'Puzzle', 'Meme', 'Brain', 'Casual'],
    rating: 5.0,
    playCount: 28934
  },
  {
    name: 'Italian Brainrot Clicker 2',
    image: '/images/thumbnails/italian-brainrot-clicker-2.png',
    slug: 'italian-brainrot-clicker-2',
    isReal: true,
    url: 'https://www.gameflare.com/embed/italian-brainrot-clicker-2/',
    releaseDate: '2025-01-09',
    tags: ['Brainrot', 'Clicker', 'Meme', 'Idle', 'Funny', 'Casual'],
    rating: 4.0,
    playCount: 6789
  },
  {
    name: 'Plants vs Brainrots',
    image: '/images/thumbnails/plants-vs-brainrots.jpg',
    slug: 'plants-vs-brainrots',
    isReal: true,
    url: 'https://st.8games.net/7/8g/igra-brejnroty-protiv-rastenij/',
    releaseDate: '2024-11-15',
    tags: ['Brainrot', 'Strategy', 'Tower Defense', 'Meme', 'Casual', 'Funny'],
    rating: 4.1,
    playCount: 21567
  },
  {
    name: 'Crazy Cattle 3D',
    image: '/images/thumbnails/crazy-cattle-3d.jpg',
    slug: 'crazy-cattle-3d',
    isReal: true,
    url: 'https://www.gameflare.com/embed/crazy-cattle-3d/',
    releaseDate: '2025-01-11',
    tags: ['Battle', 'Multiplayer', 'Strategy', 'Casual', 'Funny', '3D', 'Animal'],
    rating: 4.6,
    playCount: 2156
  },
  {
    name: 'Crazy Cattle 3D Unblocked',
    image: '/images/thumbnails/crazy-cattle-3d-unblocked.png',
    slug: 'crazy-cattle-3d-unblocked',
    isReal: true,
    url: 'https://crazycattle3d.io/game/crazycattle3d/v8/',
    releaseDate: '2024-11-20',
    tags: ['Brainrot', 'Battle Royale', 'Physics', 'Meme', 'Casual', 'Funny'],
    rating: 4.6,
    playCount: 850000
  },
  {
    name: 'Las Sis (Steal a Brainrot)',
    image: '/images/thumbnails/las-sis-steal-brainrot.jpg',
    slug: 'las-sis-steal-brainrot',
    isReal: true,
    url: 'https://www.roblox.com/games/start?placeId=789123456',
    releaseDate: '2025-01-20',
    tags: ['Roblox', 'Meme', 'Brainrot', 'Casual'],
    rating: 4.7,
    playCount: 4303
  },
  {
    name: 'Little Big Snake',
    image: '/images/thumbnails/little-big-snake.png',
    slug: 'little-big-snake',
    isReal: true,
    url: 'https://www.gameflare.com/embed/little-big-snake/',
    releaseDate: '2025-01-21',
    tags: ['IO', 'Multiplayer', 'Snake', 'Grow', 'Collect', 'Animal'],
    rating: 5.0,
    playCount: 8500000
  },
  {
    name: 'Cheese Chompers 3D',
    image: '/images/thumbnails/cheese-chompers-3d.png',
    slug: 'cheese-chompers-3d',
    isReal: true,
    url: 'https://www.gameflare.com/embed/cheese-chompers-3d/',
    releaseDate: '2025-01-21',
    tags: ['Battle', 'Multiplayer', 'Casual', 'Funny', '3D', 'Animal'],
    rating: 5.0,
    playCount: 1
  },
  {
    name: 'Crazy Sheep 3D',
    image: '/images/thumbnails/crazy-sheep-3d.png',
    slug: 'crazy-sheep-3d',
    isReal: true,
    url: 'https://www.gameflare.com/embed/crazy-sheep-3d/',
    releaseDate: '2025-01-22',
    tags: ['3D', 'Action', 'Adventure', 'Casual', 'Animal'],
    rating: 4.1,
    playCount: 45000
  },
  {
    name: 'Rocket Fortress',
    image: '/images/thumbnails/rocket-fortress.png',
    slug: 'rocket-fortress',
    isReal: true,
    url: 'https://www.gameflare.com/embed/rocket-fortress/',
    releaseDate: '2025-01-22',
    tags: ['RPG', 'Clicker', 'Strategy', 'Action', 'Incremental'],
    rating: 5.0,
    playCount: 125000
  },
  {
    name: 'Fix Da Brainrot',
    image: '/images/thumbnails/fix-da-brainrot.jpg',
    slug: 'fix-da-brainrot',
    isReal: true,
    url: 'https://storage.y8.com/y8-studio/html5/jdchanda/fix_da_brainrot/?key=y8&value=default',
    releaseDate: '2025-01-22',
    tags: ['Puzzle', 'Jigsaw', 'Brain Game', 'Casual', 'HTML5'],
    rating: 4.6,
    playCount: 1200000
  },
  {
    name: 'Blocky Rush',
    image: '/images/thumbnails/blocky-rush.png',
    slug: 'blocky-rush',
    isReal: true,
    url: 'https://yoplay.io/blocky-rush.embed',
    releaseDate: '2024-12-15',
    tags: ['Puzzle', 'Block', 'Casual', 'Brain Game', 'Logic', 'Free'],
    rating: 4.2,
    playCount: 750000
  },
  {
    name: 'The Freak Circus',
    image: '/images/thumbnails/the-freak-circus.jpg',
    slug: 'the-freak-circus',
    isReal: true,
    url: 'https://html-classic.itch.zone/html/14081436/index.html',
    releaseDate: '2025-10-23',
    tags: ['Visual Novel', 'Horror', 'Dark', 'Yandere', 'Dating Sim', 'Creepy'],
    rating: 4.9,
    playCount: 2514000
  },
  {
    name: 'No, I\'m not a Human',
    image: '/images/thumbnails/no-im-not-a-human.png',
    slug: 'no-im-not-a-human',
    isReal: true,
    url: 'https://d.ulyagames.com/games/no-im-not-a-human/',
    releaseDate: '2025-10-23',
    tags: ['Horror', 'Survival', 'Puzzle', 'Psychological', 'First-Person', 'Point and Click'],
    rating: 4.7,
    playCount: 850000
  },
  {
    name: 'Steal the Brainrot Fish',
    image: '/images/thumbnails/steal-the-brainrot-fish.png',
    slug: 'steal-the-brainrot-fish',
    isReal: true,
    url: 'https://st.8games.net/7/8g/igra-ukradi-brejnrot-rybu/',
    releaseDate: '2025-10-24',
    tags: ['Brainrot', 'Casual', 'Multiplayer', 'Collection', 'Strategy', 'Funny'],
    rating: 4.8,
    playCount: 125000
  },
];

