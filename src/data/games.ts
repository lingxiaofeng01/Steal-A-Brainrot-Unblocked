export interface GameData {
  name: string;
  image: string;
  slug: string;
  isReal: true;
  releaseDate?: string; // ISO date string (YYYY-MM-DD)
  tags?: string[]; // Game tags for categorization and related games
  rating?: number; // Game rating (0-5)
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
    name: 'Brainrot Clicker',
    image: '/images/thumbnails/brainrot-clicker.webp',
    slug: 'brainrot-clicker',
    isReal: true,
    releaseDate: '2025-01-05',
    tags: ['Brainrot', 'Clicker', 'Idle', 'Incremental', 'Casual'],
    rating: 4.9
  },
  {
    name: 'Brainrot Hook Swing',
    image: '/images/thumbnails/brainrot-hook-swing.jpg',
    slug: 'brainrot-hook-swing',
    isReal: true,
    releaseDate: '2024-12-20',
    tags: ['Brainrot', 'Action', 'Skill', 'Arcade', 'Physics'],
    rating: 4.5
  },
  {
    name: 'Italian Brainrot Baby Clicker',
    image: '/images/thumbnails/italian-brainrot-baby-clicker.jpg',
    slug: 'italian-brainrot-baby-clicker',
    isReal: true,
    releaseDate: '2025-01-08',
    tags: ['Brainrot', 'Clicker', 'Funny', 'Meme', 'Casual'],
    rating: 4.8
  },
  {
    name: 'Steal The Italian Brainrot',
    image: '/images/thumbnails/steal-the-italian-brainrot.png',
    slug: 'steal-the-italian-brainrot',
    isReal: true,
    releaseDate: '2024-12-15',
    tags: ['Brainrot', 'Adventure', 'Strategy', '3D', 'Puzzle'],
    rating: 4.9
  },
  {
    name: 'Obby: My Singing Brainrot',
    image: '/images/thumbnails/obby-my-singing-brainrot.jpg',
    slug: 'obby-my-singing-brainrot',
    isReal: true,
    releaseDate: '2024-12-10',
    tags: ['Brainrot', 'Roblox', 'Music', 'Meme', 'Adventure', 'Parkour'],
    rating: 5.0
  },
  {
    name: 'Steal Brainrot Online',
    image: '/images/thumbnails/steal-brainrot-online.png',
    slug: 'steal-brainrot-online',
    isReal: true,
    releaseDate: '2024-12-01',
    tags: ['Brainrot', 'Multiplayer', 'Roblox', 'Meme', 'Strategy', 'Casual'],
    rating: 4.3
  },
  {
    name: 'Steal Brainrot: New Animals',
    image: '/images/thumbnails/steal-brainrot-new-animals.png',
    slug: 'steal-brainrot-new-animals',
    isReal: true,
    releaseDate: '2025-01-10',
    tags: ['Brainrot', 'Roblox', 'Meme', 'Collection', 'Arcade', 'Casual'],
    rating: 3.5
  },
  {
    name: 'Fix Da Brainrot',
    image: '/images/thumbnails/fix-da-brainrot.jpg',
    slug: 'fix-da-brainrot',
    isReal: true,
    releaseDate: '2024-11-25',
    tags: ['Brainrot', 'Puzzle', 'Casual', 'Brain', 'Relaxing', 'Creative'],
    rating: 5.0
  },
  {
    name: 'Memory Brainrot',
    image: '/images/thumbnails/memory-brainrot.jpg',
    slug: 'memory-brainrot',
    isReal: true,
    releaseDate: '2024-11-20',
    tags: ['Brainrot', 'Memory', 'Puzzle', 'Meme', 'Brain', 'Casual'],
    rating: 5.0
  },
  {
    name: 'Italian Brainrot Clicker 2',
    image: '/images/thumbnails/italian-brainrot-clicker-2.png',
    slug: 'italian-brainrot-clicker-2',
    isReal: true,
    releaseDate: '2025-01-09',
    tags: ['Brainrot', 'Clicker', 'Meme', 'Idle', 'Funny', 'Casual'],
    rating: 4.0
  },
  {
    name: 'Plants vs Brainrots',
    image: '/images/thumbnails/plants-vs-brainrots.jpg',
    slug: 'plants-vs-brainrots',
    isReal: true,
    releaseDate: '2024-11-15',
    tags: ['Brainrot', 'Strategy', 'Tower Defense', 'Meme', 'Casual', 'Funny'],
    rating: 4.1
  },
  {
    name: 'Crazy Cattle 3D',
    image: '/images/thumbnails/crazy-cattle-3d.jpg',
    slug: 'crazy-cattle-3d',
    isReal: true,
    releaseDate: '2025-01-11',
    tags: ['Battle', 'Multiplayer', 'Strategy', 'Casual', 'Funny', '3D', 'Animal'],
    rating: 4.6
  },
];

