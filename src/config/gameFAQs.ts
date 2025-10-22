// Game FAQ configurations for SEO Schema
// Each game can have its own FAQ or use the default one

export interface GameFAQ {
  question: string;
  answer: string;
}

// Default FAQ for games (used when no specific FAQ is defined)
export const DEFAULT_GAME_FAQS: GameFAQ[] = [
  {
    question: 'Is this game really free to play?',
    answer: 'Yes, this game is completely free to play with no hidden costs or premium paywalls. There are no downloads required—simply visit our site and start playing instantly in your browser. No registration, no credit card, no strings attached.',
  },
  {
    question: 'Can I play this game on mobile devices?',
    answer: 'Yes, this game is fully responsive and works on all devices including smartphones, tablets, and desktop computers. Simply open your browser and start playing. The game automatically adapts to your screen size.',
  },
  {
    question: 'Do I need to download anything to play?',
    answer: 'No downloads required! This is a browser-based game that runs directly in your web browser. Just visit our website and click play. It works on any device with a modern web browser.',
  },
  {
    question: 'Is this game unblocked and accessible everywhere?',
    answer: 'Yes, this game is unblocked and can be played from anywhere including schools and workplaces. Since it runs in your browser without requiring downloads or special software, it bypasses most network restrictions.',
  },
  {
    question: 'How do I save my progress?',
    answer: 'Your progress is automatically saved to your browser. When you return to the game, your progress will be restored. Make sure to not clear your browser cache if you want to keep your saved data.',
  },
  {
    question: 'What browsers are supported?',
    answer: 'This game works on all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. We recommend using the latest version of your browser for the best experience.',
  },
];

// Game-specific FAQs
export const GAME_SPECIFIC_FAQS: Record<string, GameFAQ[]> = {
  'steal-a-brainrot-unblocked': [
    {
      question: 'What is Steal a Brainrot Unblocked?',
      answer: 'Steal a Brainrot Unblocked is a fast-paced 3D multiplayer game where you collect meme characters and steal from other players. It combines strategy, reflexes, and explosive sheep mayhem in a barnyard brawl setting.',
    },
    {
      question: 'How do I steal from other players?',
      answer: 'Navigate through the game world and approach other players. Use your special abilities to steal their collected items. The more you steal, the more points you earn. But watch out—other players can steal from you too!',
    },
    {
      question: 'What are meme characters?',
      answer: 'Meme characters are collectible characters based on popular internet memes and brainrot culture. Each character has unique abilities and can be combined with others to create powerful combos.',
    },
    {
      question: 'Is there a multiplayer mode?',
      answer: 'Yes! Steal a Brainrot Unblocked is a fully multiplayer game. You compete against other players in real-time. Form alliances, steal from rivals, and climb the leaderboards.',
    },
    {
      question: 'Can I play solo?',
      answer: 'While the game is multiplayer-focused, you can enjoy single-player challenges and practice modes to improve your skills before competing with other players.',
    },
    {
      question: 'How do I earn more points?',
      answer: 'Earn points by collecting meme characters, stealing from other players, completing challenges, and winning multiplayer matches. The more active you are, the more points you accumulate.',
    },
  ],
  'goodgame-empire': [
    {
      question: 'What is Goodgame Empire?',
      answer: 'Goodgame Empire is a real-time strategy (RTS) game where you build and manage your own medieval empire. Construct buildings, recruit armies, form alliances, and conquer territories to become the ultimate emperor.',
    },
    {
      question: 'How do I build my empire?',
      answer: 'Start by constructing basic buildings like farms and barracks. As you progress, unlock advanced structures that provide economic benefits and military advantages. Manage your resources carefully to expand your empire.',
    },
    {
      question: 'Can I join an alliance?',
      answer: 'Yes! Joining an alliance provides mutual protection, shared resources, and coordinated military campaigns. Alliances can control territories and participate in large-scale wars against other alliances.',
    },
    {
      question: 'What is the combat system like?',
      answer: 'Combat in Goodgame Empire is tactical and strategic. Recruit different unit types, each with unique strengths and weaknesses. Position your units carefully and adapt your strategy based on your opponent\'s moves.',
    },
    {
      question: 'How long does it take to progress?',
      answer: 'Progression is carefully balanced to provide constant achievement. You can make significant progress in a few hours, but reaching the highest levels requires dedication and strategic planning over weeks or months.',
    },
    {
      question: 'Is there PvP combat?',
      answer: 'Yes, Goodgame Empire features extensive PvP combat. You can attack other players\' territories, defend your own, and participate in alliance wars. The game rewards strategic thinking and tactical execution.',
    },
  ],
  'little-big-snake': [
    {
      question: 'What is Little Big Snake?',
      answer: 'Little Big Snake is a multiplayer IO game where you control a snake or beetle, collect food to grow, and compete against other players. The goal is to become the largest creature on the map.',
    },
    {
      question: 'How do I grow my snake?',
      answer: 'Collect food scattered across the map to grow your snake. The more food you eat, the longer and stronger your snake becomes. Avoid colliding with other snakes while hunting for food.',
    },
    {
      question: 'Can I play as different creatures?',
      answer: 'Yes! You can choose to play as a snake or a beetle. Each creature has different abilities and playstyles. Experiment with both to find your preferred way to play.',
    },
    {
      question: 'What happens if I collide with another snake?',
      answer: 'If you collide head-on with another snake, you both take damage. If you hit their body, you bounce off. The game rewards careful navigation and strategic positioning.',
    },
    {
      question: 'How do I climb the rankings?',
      answer: 'Collect as much food as possible and survive longer than other players. Your score is based on your size and survival time. The leaderboard updates in real-time.',
    },
    {
      question: 'Are there power-ups?',
      answer: 'Yes, special power-ups appear on the map that provide temporary advantages like speed boosts, shields, or size increases. Grab them strategically to gain an edge over your opponents.',
    },
  ],
};

// HomePage FAQ
export const HOME_PAGE_FAQS: GameFAQ[] = [
  {
    question: 'Is Steal a Brainrot Unblocked really free to play?',
    answer: 'Absolutely! Steal a Brainrot Unblocked is completely free with no hidden costs or premium paywalls. There are no downloads required—simply visit our site and start playing this unblocked game instantly in your browser. No registration, no credit card, no strings attached. This is the true unblocked version of Steal a Brainrot.',
  },
  {
    question: 'Can I play Steal a Brainrot Unblocked at school or work?',
    answer: 'Yes! This is the unblocked version of Steal a Brainrot, specifically designed to be accessible from anywhere without restrictions. Whether you\'re at school, work, or any location with internet access, you can play Steal a Brainrot Unblocked without worrying about network filters or firewalls. The unblocked nature of this game makes it perfect for quick gaming sessions during breaks.',
  },
  {
    question: 'How do I steal from other players in Steal a Brainrot?',
    answer: 'Raiding other players is one of the most exciting features of Steal a Brainrot Unblocked. Navigate to another player\'s base using the map, press E to grab their Brainrot characters, then run it back to your spawn zone to complete the theft. Be strategic—other players can defend their bases, so timing and planning are crucial in Steal a Brainrot.',
  },
  {
    question: 'What makes Steal a Brainrot Unblocked different from other idle games?',
    answer: 'Steal a Brainrot Unblocked combines the addictive passive income mechanics of idle games with competitive multiplayer PvP gameplay. Unlike traditional idle games, this unblocked game lets you raid other players\' bases and steal their characters. The hilarious meme characters, strategic depth, and the ability to play anywhere make Steal a Brainrot Unblocked unique in the gaming landscape.',
  },
  {
    question: 'Do I need to download anything to play Steal a Brainrot Unblocked?',
    answer: 'No downloads required! Steal a Brainrot Unblocked is a browser-based unblocked game that runs directly in your web browser. Simply click play and start enjoying Steal a Brainrot instantly. This makes it perfect for playing on school computers, work devices, or any device where you can\'t install software.',
  },
  {
    question: 'Is Steal a Brainrot Unblocked safe to play?',
    answer: 'Yes, Steal a Brainrot Unblocked is completely safe. This unblocked game contains no malware, viruses, or harmful content. We prioritize player safety and security. The game is designed for all ages and provides a fun, secure gaming experience. Play Steal a Brainrot Unblocked with confidence.',
  },
];

// Get FAQ for a specific game
export function getGameFAQs(gameSlug: string): GameFAQ[] {
  return GAME_SPECIFIC_FAQS[gameSlug] || DEFAULT_GAME_FAQS;
}

