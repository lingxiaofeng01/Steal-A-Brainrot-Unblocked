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
];

