// 自动游戏内容生成器 - 根据游戏类型和标签自动生成优化内容

interface GameInfo {
  title: string;
  tags: string[];
  description: string;
}

interface GeneratedContent {
  sections: Array<{
    heading: string;
    emoji: string;
    content: string;
  }>;
}

// 游戏类型到内容模板的映射
const gameTypeTemplates: Record<string, (game: GameInfo) => string[]> = {
  'RPG': (game) => [
    `${game.title} is an immersive RPG experience that combines deep storytelling with engaging gameplay mechanics. In ${game.title}, you embark on an epic adventure filled with challenging quests, powerful enemies, and rewarding progression systems. The world of ${game.title} is richly detailed and expansive, offering countless hours of entertainment for RPG enthusiasts. Whether you're a casual player or a hardcore gamer, ${game.title} delivers an unforgettable experience that keeps you coming back for more.`,
    
    `The character development system in ${game.title} is one of its most compelling features. Create and customize your character to match your playstyle, then watch them grow stronger as you progress through ${game.title}. Unlock new abilities, equip powerful gear, and master various skills in ${game.title}. The progression in ${game.title} is satisfying and rewarding, with constant unlocks and achievements that motivate continued play.`,
    
    `Combat in ${game.title} is dynamic and engaging, requiring both strategy and quick reflexes. Face diverse enemies and challenging bosses in ${game.title} that will test your skills and tactical thinking. The combat system in ${game.title} rewards players who understand enemy patterns and adapt their strategies accordingly. Each encounter in ${game.title} feels unique and memorable.`,
  ],
  
  'Strategy': (game) => [
    `${game.title} is a strategic masterpiece that challenges players to think several steps ahead. In ${game.title}, every decision you make has consequences that ripple through the game world. The strategic depth of ${game.title} appeals to both casual players and hardcore strategists. Whether you're building an empire, commanding armies, or managing resources, ${game.title} offers endless strategic possibilities.`,
    
    `Resource management is crucial in ${game.title}. Balance your economy, military, and development to achieve victory in ${game.title}. The economic system in ${game.title} is complex and rewarding, allowing for multiple paths to success. Smart players in ${game.title} understand that controlling resources is the key to long-term dominance.`,
    
    `The competitive scene in ${game.title} is thriving, with players constantly discovering new strategies and tactics. Compete against other players in ${game.title} and climb the rankings to prove your strategic mastery. The meta-game in ${game.title} is constantly evolving, keeping the experience fresh and exciting.`,
  ],
  
  'Action': (game) => [
    `${game.title} is an action-packed experience that delivers non-stop excitement and adrenaline-pumping gameplay. In ${game.title}, you'll face intense challenges that require quick reflexes and precise timing. The fast-paced nature of ${game.title} keeps players engaged and entertained throughout their gaming session. Whether you're battling enemies or overcoming obstacles, ${game.title} delivers thrilling action at every turn.`,
    
    `The combat mechanics in ${game.title} are smooth and responsive, making every action feel impactful. Master various attack combinations and special moves in ${game.title} to defeat your enemies efficiently. The skill ceiling in ${game.title} is high, rewarding players who invest time in mastering the combat system.`,
    
    `Variety is key in ${game.title}, with diverse enemies, environments, and challenges to keep the experience fresh. Each level in ${game.title} presents new obstacles and enemies to overcome. The level design in ${game.title} is thoughtfully crafted to provide both challenge and enjoyment.`,
  ],
  
  'Multiplayer': (game) => [
    `${game.title} shines in its multiplayer experience, bringing players together from around the world. In ${game.title}, you can compete against or cooperate with other players in various game modes. The multiplayer community in ${game.title} is vibrant and welcoming, making it easy to find matches and make friends. Whether you prefer competitive or cooperative gameplay, ${game.title} has something for everyone.`,
    
    `The matchmaking system in ${game.title} ensures fair and balanced matches for all skill levels. Play with friends or meet new players in ${game.title}'s dynamic multiplayer environment. The social features in ${game.title} encourage teamwork and communication, making every match memorable.`,
    
    `Competitive rankings and leaderboards in ${game.title} add an extra layer of motivation. Climb the ranks in ${game.title} and prove your skills against the best players. The competitive scene in ${game.title} is constantly growing, with regular tournaments and seasonal events.`,
  ],
  
  'Casual': (game) => [
    `${game.title} is the perfect game for relaxing and having fun without stress. In ${game.title}, you can enjoy a laid-back gaming experience at your own pace. The casual nature of ${game.title} makes it accessible to players of all skill levels. Whether you have a few minutes or several hours, ${game.title} adapts to your schedule.`,
    
    `The gameplay in ${game.title} is intuitive and easy to learn, but offers depth for those who want to explore further. Pick up ${game.title} and start playing immediately without complicated tutorials or steep learning curves. The accessibility of ${game.title} makes it perfect for newcomers to gaming.`,
    
    `Enjoy a stress-free gaming experience in ${game.title} where the focus is on fun and entertainment. The relaxing atmosphere of ${game.title} makes it ideal for unwinding after a long day. Take your time in ${game.title} and enjoy the journey at your own pace.`,
  ],
};

export function generateAutoContent(game: GameInfo): GeneratedContent {
  const sections: GeneratedContent['sections'] = [];
  const emojis = ['🎮', '⚡', '🎯', '🏆', '💎', '🌟', '🚀'];
  
  // 确定主要游戏类型
  const primaryType = Object.keys(gameTypeTemplates).find(type =>
    game.tags.some(tag => tag.toLowerCase().includes(type.toLowerCase()))
  ) || 'Action';
  
  const templates = gameTypeTemplates[primaryType] || gameTypeTemplates['Action'];
  const contentPieces = templates(game);
  
  // 生成7个段落
  const headings = [
    `What is ${game.title}?`,
    `Core Features of ${game.title}`,
    `Gameplay & Mechanics in ${game.title}`,
    `Game Modes & Variety in ${game.title}`,
    `Progression & Rewards in ${game.title}`,
    `Community & Social in ${game.title}`,
    `Why Play ${game.title}?`,
  ];
  
  for (let i = 0; i < 7; i++) {
    sections.push({
      heading: headings[i],
      emoji: emojis[i],
      content: contentPieces[i % contentPieces.length] || contentPieces[0],
    });
  }
  
  return { sections };
}

// 为内容添加关键词加粗
export function enhanceContentWithKeywords(
  content: string,
  title: string,
  keywords: string[]
): string {
  let enhanced = content;
  
  // 加粗游戏名称
  enhanced = enhanced.replace(
    new RegExp(`\\b${title}\\b`, 'g'),
    `<strong>${title}</strong>`
  );
  
  // 加粗关键词
  keywords.forEach(keyword => {
    if (keyword !== title && keyword.length > 2) {
      enhanced = enhanced.replace(
        new RegExp(`\\b${keyword}\\b`, 'gi'),
        `<strong>${keyword}</strong>`
      );
    }
  });
  
  return enhanced;
}

