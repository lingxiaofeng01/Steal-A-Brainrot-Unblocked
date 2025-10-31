// SEO配置文件 - 为不同页面提供优化的TDK（Title、Description、Keywords）

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
}

// 网站基础信息
export const SITE_NAME = 'Steal a Brainrot Unblocked';
export const SITE_URL = 'https://www.stealabrainrotunblocked.com'; // 正式域名
export const CURRENT_YEAR = new Date().getFullYear();

// 首页SEO配置
export const HOME_SEO: SEOConfig = {
  title: `Steal a Brainrot Unblocked - Play Free 3D Puzzle Game Online`,
  description: `Play Steal a Brainrot Unblocked - the ultimate 3D puzzle adventure game! Steal a Brainrot is free, unblocked, and accessible anywhere. Challenge your mind with brain-teasing puzzles. No downloads required. Play Steal a Brainrot online now!`,
  keywords: [
    'steal a brainrot unblocked',
    'steal a brainrot',
    'steal a brainrot online',
    'steal a brainrot free',
    'steal a brainrot 3d',
    'brainrot puzzle game',
    'unblocked games',
    'free online games',
    'puzzle games',
    'brain teaser games',
    '3d games',
    'no download games',
    'school games',
    'work games',
    'meme games',
    `online games ${CURRENT_YEAR}`,
  ],
  canonical: SITE_URL,
};

// 分类页面SEO配置
export const CATEGORY_SEO: Record<string, SEOConfig> = {
  all: {
    title: `New Games ${CURRENT_YEAR} - Play Latest Unblocked Games Free`,
    description: `Discover the latest unblocked games of ${CURRENT_YEAR}. Play 100+ new free online games without downloads. Updated daily with the best puzzle, action, and casual games.`,
    keywords: ['new games', 'latest games', 'new unblocked games', 'free new games', `games ${CURRENT_YEAR}`],
    canonical: `${SITE_URL}/all`,
  },
  hot: {
    title: `Hot Games - Most Popular Unblocked Games ${CURRENT_YEAR}`,
    description: `Play the hottest and most popular unblocked games of ${CURRENT_YEAR}. Trending games played by millions. No downloads, instant play!`,
    keywords: ['hot games', 'popular games', 'trending games', 'most played games', 'viral games'],
    canonical: `${SITE_URL}/hot`,
  },
  puzzle: {
    title: `Puzzle Games Unblocked - Free Brain Teasers & Logic Games`,
    description: 'Challenge your mind with 50+ free puzzle games. Brain teasers, logic puzzles, and mind games. Play unblocked at school or work!',
    keywords: ['puzzle games', 'brain teasers', 'logic games', 'mind games', 'thinking games'],
    canonical: `${SITE_URL}/puzzle`,
  },
  '3d': {
    title: `3D Games Unblocked - Play Free 3D Games Online`,
    description: 'Immerse yourself in stunning 3D gaming experiences. Play free 3D games with high-quality graphics. No downloads required!',
    keywords: ['3d games', '3d online games', 'free 3d games', '3d browser games'],
    canonical: `${SITE_URL}/3d`,
  },
  action: {
    title: `Action Games Unblocked - Fast-Paced Free Games`,
    description: 'Fast-paced action games that test your reflexes. Play free action games online without restrictions!',
    keywords: ['action games', 'fast paced games', 'reflex games', 'arcade games'],
    canonical: `${SITE_URL}/action`,
  },
};

// 标签页面SEO配置
export const TAG_SEO: Record<string, SEOConfig> = {
  brainrot: {
    title: `Brainrot Games - Play Free Brainrot Meme Games Online`,
    description: 'Play the best brainrot games online! Viral meme games, brainrot clicker, and more. Free to play, no downloads. Join the brainrot revolution!',
    keywords: ['brainrot games', 'brainrot memes', 'brainrot clicker', 'meme games', 'viral games'],
    canonical: `${SITE_URL}/tag/brainrot`,
  },
  clicker: {
    title: `Clicker Games - Free Idle Clicker Games Unblocked`,
    description: 'Addictive clicker and idle games. Click your way to glory! Free clicker games with upgrades, achievements, and prestige systems.',
    keywords: ['clicker games', 'idle games', 'incremental games', 'clicking games', 'idle clicker'],
    canonical: `${SITE_URL}/tag/clicker`,
  },
  casual: {
    title: `Casual Games - Easy & Fun Free Games Online`,
    description: 'Relax with casual games perfect for quick breaks. Easy to learn, fun to play. Free casual games for everyone!',
    keywords: ['casual games', 'easy games', 'relaxing games', 'simple games', 'fun games'],
    canonical: `${SITE_URL}/tag/casual`,
  },
  meme: {
    title: `Meme Games - Play Viral Meme Games Free Online`,
    description: 'Play hilarious meme games based on viral internet culture. Brainrot, dank memes, and more. Free to play!',
    keywords: ['meme games', 'viral games', 'internet culture games', 'funny games', 'dank memes'],
    canonical: `${SITE_URL}/tag/meme`,
  },
  roblox: {
    title: `Roblox-Style Games - Play Free Roblox-Inspired Games`,
    description: 'Enjoy Roblox-style games in your browser. No downloads needed. Play free games inspired by Roblox!',
    keywords: ['roblox games', 'roblox style', 'roblox inspired', 'block games', 'multiplayer games'],
    canonical: `${SITE_URL}/tag/roblox`,
  },
  puzzle: {
    title: `Puzzle Games - Brain Teasers & Logic Puzzles Free`,
    description: 'Solve challenging puzzles and brain teasers. Free puzzle games for all skill levels. Train your brain!',
    keywords: ['puzzle games', 'brain puzzles', 'logic puzzles', 'puzzle solving', 'brain training'],
    canonical: `${SITE_URL}/tag/puzzle`,
  },
  idle: {
    title: `Idle Games - Free Incremental & Idle Clicker Games`,
    description: 'Play idle games that progress even when you\'re away. Free incremental games with auto-progression!',
    keywords: ['idle games', 'incremental games', 'passive games', 'auto clicker', 'idle progression'],
    canonical: `${SITE_URL}/tag/idle`,
  },
  funny: {
    title: `Funny Games - Hilarious Free Games Online`,
    description: 'Laugh out loud with funny games! Hilarious gameplay, silly characters, and comedic adventures. Free to play!',
    keywords: ['funny games', 'hilarious games', 'comedy games', 'silly games', 'humor games'],
    canonical: `${SITE_URL}/tag/funny`,
  },
  strategy: {
    title: `Strategy Games - Free Tactical & Strategy Games`,
    description: 'Test your strategic thinking with free strategy games. Plan, build, and conquer in tactical gameplay!',
    keywords: ['strategy games', 'tactical games', 'planning games', 'strategic thinking', 'war games'],
    canonical: `${SITE_URL}/tag/strategy`,
  },
  adventure: {
    title: `Adventure Games - Free Online Adventure Games`,
    description: 'Embark on epic adventures! Explore, discover, and conquer in free adventure games online!',
    keywords: ['adventure games', 'exploration games', 'quest games', 'journey games', 'adventure online'],
    canonical: `${SITE_URL}/tag/adventure`,
  },
  brain: {
    title: `Brain Games - Free Mind & Memory Games Online`,
    description: 'Train your brain with free brain games. Improve memory, focus, and cognitive skills through fun gameplay!',
    keywords: ['brain games', 'memory games', 'mind games', 'cognitive games', 'brain training'],
    canonical: `${SITE_URL}/tag/brain`,
  },
  arcade: {
    title: `Arcade Games - Classic & Modern Arcade Games Free`,
    description: 'Play classic and modern arcade games online. Fast-paced action, high scores, and endless fun!',
    keywords: ['arcade games', 'classic arcade', 'retro games', 'arcade online', 'high score games'],
    canonical: `${SITE_URL}/tag/arcade`,
  },
  action: {
    title: `Action Games - Fast-Paced Free Games Online`,
    description: 'Experience fast-paced action games that test your reflexes. Play free action games online without restrictions!',
    keywords: ['action games', 'fast paced games', 'reflex games', 'action online'],
    canonical: `${SITE_URL}/tag/action`,
  },
  multiplayer: {
    title: `Multiplayer Games - Play Free Multiplayer Games Online`,
    description: 'Play multiplayer games with friends and players worldwide. Compete, cooperate, and have fun in free multiplayer games!',
    keywords: ['multiplayer games', 'online multiplayer', 'multiplayer online games', 'co-op games'],
    canonical: `${SITE_URL}/tag/multiplayer`,
  },
  battle: {
    title: `Battle Games - Free Battle & Combat Games Online`,
    description: 'Engage in epic battles and combat games. Fight against enemies and other players in free battle games!',
    keywords: ['battle games', 'combat games', 'fighting games', 'battle online'],
    canonical: `${SITE_URL}/tag/battle`,
  },
  racing: {
    title: `Racing Games - Free Racing & Driving Games Online`,
    description: 'Race against opponents in fast-paced racing games. Drive, compete, and win in free racing games!',
    keywords: ['racing games', 'driving games', 'car games', 'racing online'],
    canonical: `${SITE_URL}/tag/racing`,
  },
  sport: {
    title: `Sport Games - Free Sports & Athletic Games Online`,
    description: 'Play exciting sport games online! From racing to extreme sports, compete and win in free sports games!',
    keywords: ['sport games', 'sports games', 'athletic games', 'sports online', 'competitive sports'],
    canonical: `${SITE_URL}/tag/sport`,
  },
  io: {
    title: `IO Games - Free Multiplayer IO Games Online`,
    description: 'Play competitive IO games with players worldwide. Battle in real-time multiplayer IO games!',
    keywords: ['io games', 'multiplayer io', 'io multiplayer games', 'competitive games'],
    canonical: `${SITE_URL}/tag/io`,
  },
  shooter: {
    title: `Shooter Games - Free Shooting Games Online`,
    description: 'Experience thrilling shooter games with action-packed gameplay. Play free shooting games online!',
    keywords: ['shooter games', 'shooting games', 'gun games', 'fps games'],
    canonical: `${SITE_URL}/tag/shooter`,
  },
  building: {
    title: `Building Games - Free Building & Construction Games`,
    description: 'Create and build in free building games. Construct structures, manage resources, and expand your creations!',
    keywords: ['building games', 'construction games', 'builder games', 'sandbox games'],
    canonical: `${SITE_URL}/tag/building`,
  },
  '3d': {
    title: `3D Games - Free 3D Games & Experiences Online`,
    description: 'Immerse yourself in stunning 3D games with high-quality graphics. Play free 3D games online!',
    keywords: ['3d games', '3d online games', 'free 3d games', '3d browser games'],
    canonical: `${SITE_URL}/tag/3d`,
  },
  horror: {
    title: `Horror Games - Scary Free Horror Games Online`,
    description: 'Experience terrifying horror games that will keep you on the edge of your seat. Play free horror games online!',
    keywords: ['horror games', 'scary games', 'creepy games', 'horror online', 'survival horror'],
    canonical: `${SITE_URL}/tag/horror`,
  },
  zombie: {
    title: `Zombie Games - Free Zombie Survival Games Online`,
    description: 'Fight off hordes of zombies in thrilling zombie survival games. Play free zombie games online!',
    keywords: ['zombie games', 'zombie survival', 'zombie shooter', 'undead games', 'zombie apocalypse'],
    canonical: `${SITE_URL}/tag/zombie`,
  },
  survival: {
    title: `Survival Games - Free Survival & Adventure Games`,
    description: 'Test your survival skills in challenging survival games. Gather resources, fight enemies, and stay alive!',
    keywords: ['survival games', 'survival online', 'survival adventure', 'survival horror', 'survival shooter'],
    canonical: `${SITE_URL}/tag/survival`,
  },
  '2d': {
    title: `2D Games - Classic 2D Games & Platformers Free`,
    description: 'Enjoy classic 2D games with retro-style graphics and engaging gameplay. Play free 2D games online!',
    keywords: ['2d games', '2d platformers', 'retro games', '2d online games', 'classic 2d'],
    canonical: `${SITE_URL}/tag/2d`,
  },
};

// 游戏详情页SEO生成函数
export function generateGameSEO(
  gameTitle: string,
  gameDescription: string,
  gameTags: string[],
  gameSlug: string
): SEOConfig {
  return {
    title: `${gameTitle} - Play Free Online Unblocked Game`,
    description: `${gameDescription} Play ${gameTitle} free online without downloads. Unblocked at school and work. Start playing now!`,
    keywords: [
      gameTitle.toLowerCase(),
      `${gameTitle.toLowerCase()} unblocked`,
      `play ${gameTitle.toLowerCase()}`,
      `${gameTitle.toLowerCase()} online`,
      `${gameTitle.toLowerCase()} free`,
      ...gameTags.map(tag => tag.toLowerCase()),
      'unblocked games',
      'free online games',
    ],
    canonical: `${SITE_URL}/${gameSlug}`,
  };
}

// 关于我们页面SEO
export const ABOUT_SEO: SEOConfig = {
  title: `About Us - ${SITE_NAME} | Free Unblocked Games Platform`,
  description: `Learn about ${SITE_NAME}, your trusted source for free unblocked games. Discover our mission to provide accessible gaming for everyone, anywhere.`,
  keywords: ['about us', 'unblocked games platform', 'free games website', 'gaming platform'],
};

// 隐私政策页面SEO
export const PRIVACY_SEO: SEOConfig = {
  title: `Privacy Policy - ${SITE_NAME}`,
  description: `Read our privacy policy to understand how ${SITE_NAME} protects your data and privacy while you enjoy free online games.`,
  keywords: ['privacy policy', 'data protection', 'user privacy'],
};

// 使用条款页面SEO
export const TERMS_SEO: SEOConfig = {
  title: `Terms of Service - ${SITE_NAME}`,
  description: `Review the terms of service for using ${SITE_NAME}. Understand your rights and responsibilities while playing free online games.`,
  keywords: ['terms of service', 'terms and conditions', 'user agreement'],
};

// 联系我们页面SEO
export const CONTACT_SEO: SEOConfig = {
  title: `Contact Us - ${SITE_NAME} | Get in Touch`,
  description: `Contact ${SITE_NAME} for support, feedback, or partnership inquiries. We're here to help with your gaming experience!`,
  keywords: ['contact us', 'support', 'feedback', 'get in touch'],
};

// 生成面包屑导航的结构化数据
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// 生成游戏列表的结构化数据
export function generateGameListSchema(games: Array<{ name: string; description: string; image: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: games.map((game, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'VideoGame',
        name: game.name,
        description: game.description,
        image: game.image,
        url: game.url,
      },
    })),
  };
}

// 生成 FAQ 页面的结构化数据
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// H标签层级指南（注释）
/*
SEO最佳实践 - H标签层级结构：

1. 每个页面只有一个H1标签（通常是页面主标题）
2. H标签应该按层级顺序使用（H1 -> H2 -> H3 -> H4）
3. 不要跳过层级（例如从H2直接到H4）
4. H标签应该包含相关关键词，但要自然
5. H标签应该准确描述其下方的内容

推荐结构：
- H1: 页面主标题（游戏名称、分类名称等）
- H2: 主要章节标题（关于游戏、如何玩、游戏特色等）
- H3: 子章节标题（具体功能、详细说明等）
- H4: 更细节的标题（如果需要）

示例：
<h1>Brainrot Clicker - Play Free Online</h1>
  <h2>About Brainrot Clicker</h2>
    <h3>What is Brainrot Clicker?</h3>
    <h3>Why Play Brainrot Clicker?</h3>
  <h2>How to Play</h2>
    <h3>Controls</h3>
    <h3>Tips & Tricks</h3>
  <h2>Game Features</h2>
    <h3>Upgrades System</h3>
    <h3>Achievements</h3>
*/

