import GameDetailTemplate from '../components/GameDetailTemplate';

export default function GoodgameEmpirePage() {
  const game = {
    slug: 'goodgame-empire',
    title: 'Goodgame Empire',
    subtitle: 'Rise to Power in a World of War and Strategy',
    description: 'Goodgame Empire is a gripping real-time strategy (RTS) game where ambition, cunning, and leadership pave the path to power. Set in a richly detailed medieval world, players begin as lords of a humble castle with the monumental task of transforming it into a thriving kingdom that commands fear and respect across four vast territories.',
    playUrl: 'https://lp.empire.goodgamestudios.com/?lp=bdlp',
    thumbnail: '/images/thumbnails/goodgame-empire.png',
    rating: 4.5,
    playCount: 2500000,
    tags: ['Strategy', 'Battle', 'Multiplayer', 'Building', 'Action'],
    backgroundColor: 'from-amber-500 via-orange-500 to-red-600',
  };

  const aboutContent = (
    <div className="space-y-6">
      {/* 第一段：游戏概述 */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-l-4 border-amber-600">
        <h3 className="text-xl font-bold text-gray-800 mb-3">🏰 What is Goodgame Empire?</h3>
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>Goodgame Empire</strong> is a gripping real-time strategy (RTS) game developed by Goodgame Studios that stands as one of the most engaging browser-based strategy games available today. In <strong>Goodgame Empire</strong>, you begin as a lord of a humble castle with the monumental task of transforming it into a thriving kingdom that commands fear and respect across four vast territories. <strong>Goodgame Empire</strong> combines economic management, military strategy, and diplomatic gameplay to create an immersive experience that appeals to both casual players and hardcore strategy enthusiasts. The game's depth ensures that every decision you make in <strong>Goodgame Empire</strong> impacts your empire's growth and survival. Whether you're constructing new buildings, recruiting troops, or forming alliances, <strong>Goodgame Empire</strong> demands both strategic foresight and quick tactical thinking. The rich medieval world of <strong>Goodgame Empire</strong> provides the perfect backdrop for your journey from a small lord to a powerful emperor commanding vast armies and controlling multiple territories.
        </p>
      </div>

      {/* 第二段：建筑系统 */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-blue-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3">🏗️ Build Your Empire in Goodgame Empire</h3>
        <p className="text-lg leading-relaxed text-gray-700">
          You start small—with a modest castle and limited resources—but your mission is grand. To become a mighty emperor in <strong>Goodgame Empire</strong>, you'll need to construct buildings to support your economy and army. The <strong>building system in Goodgame Empire</strong> is intricate and rewarding. Each structure serves a purpose: <strong>barracks train soldiers</strong>, <strong>farms produce food</strong>, <strong>gold mines generate currency</strong>, and <strong>towers provide defense</strong>. As you progress through <strong>Goodgame Empire</strong>, you unlock new building types that offer advanced capabilities and strategic advantages. The progression system in <strong>Goodgame Empire</strong> is carefully balanced to provide a sense of constant achievement. Whether you're upgrading your castle walls, expanding your territory, or constructing specialized military buildings, every action in <strong>Goodgame Empire</strong> brings you closer to empire domination.
        </p>
      </div>

      {/* 第三段：军事系统 */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3">⚔️ Military Strategy & Combat in Goodgame Empire</h3>
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>Goodgame Empire</strong> features a sophisticated military system where strategy trumps brute force. You can recruit various unit types, each with unique strengths and weaknesses. <strong>Infantry units</strong> form the backbone of your army, <strong>cavalry charges</strong> break enemy lines, <strong>archers rain arrows</strong> from afar, and <strong>siege weapons</strong> demolish fortifications. In <strong>Goodgame Empire</strong>, tactical positioning and unit composition are crucial to victory. The <strong>combat system in Goodgame Empire</strong> rewards players who understand matchups and adapt their strategies. You'll need to scout enemy positions, anticipate their moves, and deploy your forces strategically. The heroes system in <strong>Goodgame Empire</strong> adds another layer of depth—legendary heroes with unique abilities can turn the tide of battle and lead your armies to glory.
        </p>
      </div>

      {/* 第四段：资源管理 */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 border-l-4 border-orange-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3">💰 Resource Management & Economy in Goodgame Empire</h3>
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>Goodgame Empire</strong> features a deep economy system where resource management is essential to success. You must balance <strong>food production</strong> to feed your armies, <strong>gold generation</strong> to fund construction and recruitment, and <strong>wood harvesting</strong> for building materials. The <strong>trading system in Goodgame Empire</strong> allows you to exchange resources with other players, creating a dynamic marketplace. Smart players in <strong>Goodgame Empire</strong> understand that controlling resource production is the key to long-term dominance. You can establish trade routes, negotiate with allies, and even raid enemy resource nodes. The economic depth of <strong>Goodgame Empire</strong> means that every decision—from which buildings to construct to which resources to prioritize—has strategic implications that ripple through your empire.
        </p>
      </div>

      {/* 第五段：联盟系统 */}
      <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-6 border-l-4 border-red-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3">🤝 Alliances & Diplomacy in Goodgame Empire</h3>
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>Goodgame Empire</strong> emphasizes cooperation through its alliance system. Joining an alliance in <strong>Goodgame Empire</strong> provides mutual protection, shared resources, and coordinated military campaigns. Alliances in <strong>Goodgame Empire</strong> can control territories, participate in large-scale wars, and dominate the world map. The diplomatic aspect of <strong>Goodgame Empire</strong> is crucial—forming treaties, negotiating peace, and managing relationships with other alliances shapes the political landscape. Strong alliances in <strong>Goodgame Empire</strong> can achieve what individual players cannot, making teamwork essential for reaching the highest levels of power and prestige.
        </p>
      </div>

      {/* 第六段：世界地图 */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-l-4 border-indigo-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3">🗺️ Vast World & Conquest in Goodgame Empire</h3>
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>Goodgame Empire</strong> features a massive world map filled with opportunities and challenges. The map in <strong>Goodgame Empire</strong> contains multiple territories, each with unique resources and strategic value. Expanding your territory in <strong>Goodgame Empire</strong> requires careful planning and military might. You can conquer neutral territories, raid enemy settlements, or defend your borders against invasion. The world of <strong>Goodgame Empire</strong> is dynamic—territories change hands, alliances rise and fall, and the balance of power constantly shifts. Exploring the map in <strong>Goodgame Empire</strong> reveals hidden treasures, special locations, and opportunities for strategic advantage.
        </p>
      </div>

      {/* 第七段：游戏特色 */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 border-l-4 border-pink-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3">🏆 Why Play Goodgame Empire?</h3>
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>Goodgame Empire</strong> offers an unmatched combination of strategy, community, and long-term progression. The game's <strong>free-to-play model</strong> means you can enjoy <strong>Goodgame Empire</strong> without mandatory spending—progress through skill and strategy. Regular <strong>seasonal events and tournaments in Goodgame Empire</strong> keep the gameplay fresh and competitive. The <strong>global community in Goodgame Empire</strong> spans millions of players worldwide, creating a vibrant, ever-changing world. Whether you're a casual player seeking relaxing strategy gameplay or a hardcore competitor aiming for world domination, <strong>Goodgame Empire</strong> delivers an experience that rewards dedication, strategic thinking, and teamwork. Join the millions who have built their empires in <strong>Goodgame Empire</strong> and discover why this game remains one of the most beloved browser-based strategy games of all time.
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <ul className="space-y-3 ml-6">
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Build Your Economy:</strong> Start by constructing farms, gold mines, and warehouses to generate resources. In Goodgame Empire, a strong economy is the foundation of military power. Upgrade buildings to increase production rates and unlock new structures.
        </div>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Train Your Army:</strong> Recruit and train troops in your barracks. Goodgame Empire offers various unit types—infantry, cavalry, archers, and siege weapons. Each has unique strengths. Balance your army composition based on your strategy and opponents.
        </div>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Expand Territory:</strong> Attack neighboring territories to capture new lands. In Goodgame Empire, territorial expansion provides resources and strategic advantages. Plan your attacks carefully, considering enemy defenses and your army strength.
        </div>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Fortify Your Castle:</strong> Build defensive structures like walls and towers. In Goodgame Empire, a well-defended castle can withstand multiple attacks. Position defenses strategically to maximize their effectiveness.
        </div>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Form Alliances:</strong> Join or create alliances with other players. Goodgame Empire alliances provide mutual defense, shared resources, and coordinated military campaigns. Alliance members can support each other during attacks.
        </div>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Master Strategy:</strong> Success in Goodgame Empire requires planning ahead. Manage your resources wisely, anticipate enemy moves, and adapt your strategy based on the game's evolving landscape. Learn from experienced players and continuously improve.
        </div>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Participate in Events:</strong> Goodgame Empire regularly features special events and tournaments. Participate to earn exclusive rewards and test your skills against top players.
        </div>
      </li>
    </ul>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { icon: '🏰', title: 'Medieval Empire Building', desc: 'Transform your humble castle into a mighty empire with hundreds of building types and upgrades' },
        { icon: '⚔️', title: 'Real-Time Strategy Combat', desc: 'Engage in tactical battles with diverse unit types and strategic positioning' },
        { icon: '🤝', title: 'Alliance System', desc: 'Team up with players for mutual protection, resource sharing, and coordinated conquest' },
        { icon: '🎖️', title: 'Heroes & Knights', desc: 'Lead legendary heroes with unique abilities and special powers to turn the tide of battle' },
        { icon: '🗺️', title: 'Vast World Map', desc: 'Explore a massive world filled with rivals, treasures, and strategic territories to conquer' },
        { icon: '🎯', title: 'Strategic Combat System', desc: 'Master siege warfare, tactical formations, and counter-strategies against diverse opponents' },
        { icon: '💎', title: 'Free to Play Model', desc: 'Build and battle without mandatory spending; progress through skill and strategy' },
        { icon: '🏆', title: 'Seasonal Events & Tournaments', desc: 'Participate in regular events, tournaments, and seasonal challenges for exclusive rewards' },
        { icon: '📊', title: 'Deep Economy System', desc: 'Manage complex resource production, trading, and economic strategies for empire growth' },
        { icon: '🛡️', title: 'Advanced Defense Mechanics', desc: 'Build sophisticated defensive structures and garrison troops to protect your empire' },
        { icon: '🌍', title: 'Global Multiplayer Community', desc: 'Compete with millions of players worldwide in a persistent, ever-changing world' },
        { icon: '⚙️', title: 'Regular Updates & Balance', desc: 'Continuous game updates, new features, and balance changes keep the game fresh and competitive' },
      ].map((feature, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow-md border-2 border-cyan-200">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{feature.icon}</span>
            <div>
              <h4 className="font-bold text-gray-800">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <GameDetailTemplate
      game={game}
      aboutContent={aboutContent}
      howToPlayContent={howToPlayContent}
      featuresContent={featuresContent}
    />
  );
}

