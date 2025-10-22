// 游戏内容配置 - 用于生成优化的游戏介绍
export interface GameContentConfig {
  slug: string;
  title: string;
  sections: {
    overview: {
      heading: string;
      emoji: string;
      keywords: string[];
      content: string;
    };
    features: {
      heading: string;
      emoji: string;
      keywords: string[];
      content: string;
    };
    gameplay: {
      heading: string;
      emoji: string;
      keywords: string[];
      content: string;
    };
    modes: {
      heading: string;
      emoji: string;
      keywords: string[];
      content: string;
    };
    progression: {
      heading: string;
      emoji: string;
      keywords: string[];
      content: string;
    };
    community: {
      heading: string;
      emoji: string;
      keywords: string[];
      content: string;
    };
    whyPlay: {
      heading: string;
      emoji: string;
      keywords: string[];
      content: string;
    };
  };
}

export const gameContentConfigs: Record<string, GameContentConfig> = {
  'perfect-orbit': {
    slug: 'perfect-orbit',
    title: 'Perfect Orbit',
    sections: {
      overview: {
        heading: 'What is Perfect Orbit?',
        emoji: '🚀',
        keywords: ['Perfect Orbit', 'arcade', 'sports', 'one-touch', 'timing'],
        content: 'Perfect Orbit is an exciting arcade sports simulation game that combines simplicity with challenging gameplay mechanics. This one-touch sports game challenges players to achieve the perfect shot by tapping or clicking at precisely the right moment. The game\'s premise is straightforward yet addictive: send your ball soaring as far as possible, with the ultimate goal of launching it into outer space! Perfect Orbit offers a unique blend of relaxation and challenge, making it perfect for both casual gamers and those seeking a competitive experience. The game has captivated thousands of players worldwide with its intuitive controls, engaging progression system, and satisfying gameplay loop. Whether you\'re a seasoned gamer or new to arcade games, Perfect Orbit provides an accessible yet deeply engaging experience that rewards skill, timing, and strategic thinking.'
      },
      features: {
        heading: 'Gameplay Mechanics in Perfect Orbit',
        emoji: '⏱️',
        keywords: ['timing', 'precision', 'power bar', 'perfect shot'],
        content: 'The core gameplay of Perfect Orbit revolves around timing and precision. As the power bar moves across the screen, you must tap or click at exactly the right moment when the needle falls into the "Perfect" green zone. Achieving a perfect shot sends your ball flying further, allowing it to break through obstacles and land with a powerful bounce. Each successful shot earns you coins that can be invested in upgrades, creating a rewarding progression system that keeps you coming back for more. The power bar mechanic is elegantly designed, moving at a consistent pace that requires players to develop timing skills and muscle memory. Regular shots still advance your progress, but perfect shots provide significantly greater rewards, encouraging players to master the timing mechanic. The visual and audio feedback for perfect shots is incredibly satisfying, creating a strong positive reinforcement loop that motivates continued play and skill improvement.'
      },
      gameplay: {
        heading: 'Upgrade System & Progression in Perfect Orbit',
        emoji: '📈',
        keywords: ['upgrades', 'strength', 'speed', 'bounce', 'progression'],
        content: 'What makes Perfect Orbit truly special is its upgrade system. By earning coins through longer distances, you can enhance three key stats: strength, speed, and bounce. Strength determines the initial power of your shot, directly affecting how far your ball travels on the first impact. Speed increases the overall velocity and momentum of your ball, allowing it to maintain energy longer and overcome resistance more effectively. Bounce improves the rebound capability, enabling your ball to recover from impacts and continue traveling further. These upgrades are essential for pushing your ball further and eventually reaching the great orbit where it can escape Earth\'s gravity and venture into space. The progression feels meaningful and rewarding, as each upgrade directly impacts your ability to achieve new records and unlock new challenges. Strategic players must balance their upgrade investments, deciding whether to focus on one stat or develop a balanced approach. The exponential growth of upgrade costs encourages long-term engagement and provides clear progression milestones.'
      },
      modes: {
        heading: 'Challenges & Obstacles in Perfect Orbit',
        emoji: '🎯',
        keywords: ['obstacles', 'terrain', 'challenges', 'difficulty'],
        content: 'As you progress through Perfect Orbit, your ball will encounter various obstacles and terrain features. Use your upgraded stats to overcome these challenges. The combination of perfect timing and strategic upgrades is key to advancing through increasingly difficult levels and reaching the great orbit. Each level presents new challenges that require both skill and strategic upgrades to overcome. Early obstacles are simple and forgiving, teaching players the fundamental mechanics. Mid-game obstacles introduce complexity with multiple barriers, varying heights, and environmental hazards. Advanced obstacles present puzzle-like scenarios requiring careful planning and execution. The difficulty progression is expertly balanced, ensuring players always face challenges appropriate to their skill level. Obstacles are designed to be fair and beatable with proper technique and upgrades, never feeling cheap or impossible. The variety of obstacle types keeps gameplay fresh and engaging throughout the entire experience.'
      },
      progression: {
        heading: 'Personal Records & Achievement in Perfect Orbit',
        emoji: '🏅',
        keywords: ['records', 'achievement', 'distance', 'personal best'],
        content: 'Perfect Orbit is more than just a fun sports game; it\'s a challenge to your precision, timing, and endurance. The more you play, the more you\'ll want to enhance your swing, raise your skills, and conquer what seemed to be impossible boundaries. Track your best distances and compete against your own records. The satisfaction of beating your previous best keeps you engaged and motivated to improve your performance. The ultimate goal of reaching the great orbit represents the pinnacle of achievement in Perfect Orbit. This legendary milestone requires mastery of timing, strategic upgrade planning, and consistent execution. Players who achieve this feat unlock special recognition and exclusive rewards. Beyond the great orbit, players can pursue personal records, attempt speedruns, and compete with friends to see who can achieve the highest scores and fastest times. The competitive aspect adds significant longevity to the game, encouraging players to return regularly and continuously improve their performance.'
      },
      community: {
        heading: 'Cross-Platform Experience in Perfect Orbit',
        emoji: '📱',
        keywords: ['cross-platform', 'mobile', 'desktop', 'responsive'],
        content: 'The visual design of Perfect Orbit is clean and intuitive, with a focus on clarity and responsiveness. The game runs smoothly across all devices, from desktop computers to mobile phones, ensuring a consistent experience regardless of your platform. Play Perfect Orbit seamlessly on desktop, tablet, or mobile. The game adapts perfectly to any screen size and input method. The minimalist aesthetic doesn\'t distract from the core gameplay, allowing players to focus entirely on timing and strategy. Sound design complements the visual experience with satisfying audio cues for perfect shots, successful bounces, and milestone achievements. The responsive controls work flawlessly across all input methods, whether using mouse, touchscreen, or keyboard. Cross-platform synchronization allows players to continue their progress seamlessly across different devices, ensuring their upgrades and records are always accessible.'
      },
      whyPlay: {
        heading: 'Why Play Perfect Orbit?',
        emoji: '⭐',
        keywords: ['engaging', 'rewarding', 'fun', 'addictive', 'casual'],
        content: 'Whether you\'re looking for a quick gaming session or an extended play experience, Perfect Orbit delivers engaging gameplay that appeals to players of all skill levels. The game\'s simple controls combined with deep strategic elements create an experience that\'s easy to learn but hard to master. The satisfying feedback from successful shots, combined with the visual progression of your ball traveling further and further, creates an immensely rewarding gameplay loop that keeps players engaged and motivated to improve their performance. Perfect Orbit is ideal for players seeking a casual yet engaging gaming experience that doesn\'t require significant time investment per session. The game respects your time, allowing meaningful progress in short play sessions while rewarding extended engagement. The skill-based progression system ensures that dedicated players can achieve remarkable results through practice and optimization. The competitive leaderboards and achievement systems provide additional motivation for players seeking recognition and bragging rights. Whether you\'re a casual player looking for relaxation or a hardcore gamer pursuing perfection, Perfect Orbit offers something for everyone.'
      }
    }
  },
  // 其他游戏配置将在这里添加
};

