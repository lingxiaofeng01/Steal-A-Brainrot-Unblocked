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
  'obby-steal-the-fugglers': {
    slug: 'obby-steal-the-fugglers',
    title: 'Obby: Steal the Fugglers',
    sections: {
      overview: {
        heading: 'What is Obby: Steal the Fugglers?',
        emoji: '🎮',
        keywords: ['Obby: Steal the Fugglers', 'idle game', 'collection', 'tycoon', 'casual'],
        content: 'Obby: Steal the Fugglers is an addictive idle-tycoon game that combines the thrill of collecting unique creatures with the satisfying progression of building a financial empire. In this engaging casual game, players embark on a journey to collect as many Fugglers as possible - strange, quirky, and utterly unique creatures that generate passive income. The game offers a perfect blend of relaxation and strategic planning, making it ideal for both casual gamers seeking a low-stress experience and dedicated players aiming to dominate the leaderboards. With its simple yet compelling gameplay loop, Obby: Steal the Fugglers has captivated thousands of players worldwide who enjoy the satisfaction of watching their collection grow and their wealth multiply. The game\'s charm lies in its straightforward mechanics combined with deep progression systems that reward both active play and patient accumulation. Whether you\'re looking for a game to play during short breaks or a long-term project to build your ultimate Fuggler empire, this game delivers an experience that\'s both accessible and deeply rewarding.'
      },
      features: {
        heading: 'Core Gameplay Mechanics',
        emoji: '💰',
        keywords: ['collection', 'passive income', 'progression', 'tycoon'],
        content: 'The core gameplay of Obby: Steal the Fugglers revolves around a beautifully simple yet addictive loop: collect Fugglers to generate money, use that money to buy more Fugglers, and watch your empire grow exponentially. Each Fuggler you collect contributes to your passive income generation, creating a steady stream of revenue that flows even when you\'re not actively playing. The more Fugglers you accumulate, the faster your wealth grows, enabling you to purchase even more creatures and accelerate your progression. This creates a satisfying snowball effect where early investments compound into massive returns over time. The game features an endless supply of Fugglers to collect, ensuring that players always have new goals to pursue and milestones to achieve. The collection system is designed to be both rewarding and strategic, as players must decide when to reinvest their earnings and when to save for larger purchases. The visual feedback of watching your Fuggler count increase and your money per second multiply provides constant positive reinforcement that keeps players engaged and motivated to continue building their empire.'
      },
      gameplay: {
        heading: 'Simple Controls, Deep Strategy',
        emoji: '🎯',
        keywords: ['controls', 'strategy', 'optimization', 'efficiency'],
        content: 'Obby: Steal the Fugglers features incredibly intuitive controls that make the game accessible to players of all ages and skill levels. The entire game can be played with simple clicks or taps, making it perfect for both desktop and mobile play. Despite the simple controls, the game offers surprising strategic depth for players who want to optimize their progression. Smart players will develop strategies for maximizing their income generation, timing their purchases for optimal efficiency, and planning their collection growth to achieve the highest possible returns. The game rewards both active engagement and passive accumulation, allowing players to choose their preferred playstyle. Active players can maximize their earnings by frequently checking in and making strategic purchases, while passive players can enjoy steady progression through automated income generation. The balance between active and passive play makes the game perfect for any schedule, whether you have hours to dedicate or just a few minutes throughout the day. Advanced players can experiment with different collection strategies, testing various approaches to find the most efficient path to wealth and leaderboard dominance.'
      },
      modes: {
        heading: 'Competitive Leaderboards',
        emoji: '🏆',
        keywords: ['leaderboard', 'competition', 'ranking', 'achievement'],
        content: 'One of the most exciting features of Obby: Steal the Fugglers is its competitive leaderboard system that allows players to compare their progress with others from around the world. The leaderboard tracks various metrics including total Fugglers collected, money per second generated, and overall wealth accumulated. Climbing the leaderboard requires a combination of strategic planning, consistent play, and optimization of your collection strategy. Players can see exactly where they rank among the global community, providing motivation to improve and compete for the top positions. The competitive aspect adds significant longevity to the game, as players constantly strive to outperform their rivals and achieve new personal records. Regular leaderboard resets and seasonal competitions keep the competitive scene fresh and give new players opportunities to compete on equal footing. The social aspect of comparing progress with friends and strangers alike creates a sense of community and shared achievement. Whether you\'re aiming for the number one spot or simply trying to beat your friends, the leaderboard system provides clear goals and tangible rewards for your efforts.'
      },
      progression: {
        heading: 'Clear Progression System',
        emoji: '📈',
        keywords: ['progression', 'growth', 'milestones', 'advancement'],
        content: 'The progression system in Obby: Steal the Fugglers is expertly designed to provide constant satisfaction and clear goals at every stage of the game. From your first Fuggler to your thousandth, each addition to your collection feels meaningful and contributes to your overall progress. The game features multiple progression tracks that advance simultaneously: your Fuggler collection grows, your passive income increases, your total wealth accumulates, and your leaderboard ranking improves. This multi-faceted progression ensures that players always have something to work toward and celebrate. Early game progression is rapid and exciting, with frequent purchases and quick growth that hooks players into the core gameplay loop. Mid-game progression introduces larger milestones and more strategic decision-making, as players optimize their collection strategy for maximum efficiency. Late-game progression focuses on prestige, leaderboard competition, and achieving the highest possible income rates. The exponential growth curve is carefully balanced to maintain engagement throughout the entire experience, ensuring that progression never feels too slow or too fast. Visual indicators and achievement notifications celebrate your milestones, providing constant positive feedback that motivates continued play and investment in your Fuggler empire.'
      },
      community: {
        heading: 'Relaxing Yet Engaging Experience',
        emoji: '😌',
        keywords: ['relaxing', 'casual', 'stress-free', 'enjoyable'],
        content: 'Obby: Steal the Fugglers excels at providing a relaxing gaming experience that doesn\'t demand constant attention or create stress. The game\'s low-pressure environment makes it perfect for unwinding after a long day or enjoying during breaks throughout your routine. Unlike competitive action games that require intense focus and quick reflexes, this idle-tycoon game allows you to progress at your own pace without fear of failure or punishment. The passive income generation means your empire continues growing even when you\'re away, eliminating the pressure to play constantly or risk falling behind. The simple, clean interface and pleasant visual design create a calming atmosphere that enhances the relaxing nature of the gameplay. Soothing sound effects and satisfying audio feedback for purchases and milestones add to the overall pleasant experience without becoming overwhelming or annoying. The game respects your time and attention, allowing you to engage as much or as little as you prefer while still making meaningful progress. This flexibility makes it ideal for players with busy schedules who want a game they can enjoy without significant time commitment or stress.'
      },
      whyPlay: {
        heading: 'Why Play Obby: Steal the Fugglers?',
        emoji: '⭐',
        keywords: ['addictive', 'rewarding', 'accessible', 'competitive', 'fun'],
        content: 'Obby: Steal the Fugglers offers a perfect combination of accessibility, depth, and satisfaction that appeals to a wide range of players. The game\'s simple mechanics make it easy to pick up and start playing immediately, while the strategic elements and competitive leaderboards provide long-term engagement for dedicated players. The endless collection system ensures you always have new goals to pursue, while the passive income generation creates a satisfying sense of constant progress and growth. The competitive leaderboards add an exciting social dimension, allowing you to compare your empire with players worldwide and strive for recognition and achievement. The relaxing gameplay makes it perfect for stress relief and casual entertainment, while the optimization opportunities satisfy players who enjoy strategic planning and efficiency. The game runs smoothly on all devices and platforms, ensuring a consistent experience whether you\'re playing on desktop, tablet, or mobile. Regular updates and community events keep the content fresh and provide new challenges for veteran players. Whether you\'re a casual player looking for a fun way to pass time or a competitive gamer seeking leaderboard dominance, Obby: Steal the Fugglers delivers an engaging, rewarding, and thoroughly enjoyable experience that will keep you coming back to grow your Fuggler empire day after day.'
      }
    }
  },
  // 其他游戏配置将在这里添加
};

