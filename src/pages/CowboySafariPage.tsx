'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function CowboySafariPage() {
  const game = {
    slug: 'cowboy-safari',
    title: 'Cowboy Safari',
    subtitle: 'Lasso Wild Animals and Build Your Ultimate Safari Zoo Empire',
    description: 'Cowboy Safari is a wild adventure game where you transform into a cowboy with a lasso in hand, rushing into a speed race in the middle of nature. Hunt, tame, and ride wild animals across grasslands, jungles, and rugged mountains while building your own animal sanctuary.',
    playUrl: 'https://gamea.azgame.io/cowboy-safari/',
    thumbnail: '/images/thumbnails/cowboy-safari.png',
    rating: 5.0,
    playCount: 0,
    tags: ['Running', 'Adventure', 'Casual', 'Arcade', 'Animal', 'Strategy', 'Simulation'],
    backgroundColor: 'from-amber-500 via-orange-500 to-yellow-500',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-3xl">🤠</span>
          Welcome to the Wild World of Cowboy Safari
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          <strong>Cowboy Safari</strong> is a wild adventure game where you transform into a cowboy with a lasso in hand, rushing into a speed race in the middle of nature. The game brings a feeling of both adventure and strategy when you have to hunt, tame and ride wild animals in the grasslands, jungles or rugged mountains. And at the same time, you can also build your own animal sanctuary. In <strong>Cowboy Safari</strong>, every moment is filled with excitement as you chase down exotic creatures and master the art of animal taming in the untamed wilderness.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Welcome to the ultimate safari experience where <strong>Cowboy Safari</strong> combines endless running mechanics with farm management simulation. The gameplay of <strong>Cowboy Safari</strong> is a unique blend that challenges you to throw your lasso to catch free-running animals across diverse biomes. Each species has its own behavior: some run fast, some get angry easily, or fly high. Once tamed in <strong>Cowboy Safari</strong>, they will be transferred to your zoo, where you can upgrade their barns, increase your passive income, and unlock new areas with rare species such as zebras, elephants, lions, buffaloes, and many others.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          What makes <strong>Cowboy Safari</strong> truly special is its innovative mission system and upgrade mechanics. The game features a comprehensive quest system where you can complete up to 3 missions simultaneously, earning rewards ranging from 50-150 gold in the Savannah, 300-450 gold in the Jungle, and 900-1350 gold in the Mountain regions. With perfect playthrough execution in <strong>Cowboy Safari</strong>, you can earn over 4,000 gold by completing multiple missions simultaneously, allowing you to rapidly expand your animal empire and unlock premium features.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          In <strong>Cowboy Safari</strong>, you'll discover an addictive gameplay loop that keeps you coming back for more. The enclosure upgrade system allows each animal species to have their enclosure upgraded individually up to 8 levels. Levels 1-3 in <strong>Cowboy Safari</strong> increase riding time before animals get angry, Level 4 boosts passive income by 50%, Levels 5-6 unlock special skills like speed boosts and barrel-breaking abilities, while Levels 7-8 increase your chance to find rare variants. This deep progression system ensures that every session in <strong>Cowboy Safari</strong> brings meaningful advancement and new strategic possibilities.
        </p>
      </div>

      <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl border-l-4 border-amber-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🎮</span>
          Gameplay—Master the Art of Animal Taming
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The core gameplay of <strong>Cowboy Safari</strong> revolves around hunting, taming, and riding wild animals while managing your growing safari zoo. You start your journey by throwing a lasso to catch free-running animals, each with unique behaviors and characteristics. The challenge in <strong>Cowboy Safari</strong> lies in timing your lasso throws perfectly, managing animal temperaments, and strategically upgrading your enclosures to maximize income and unlock new abilities.
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🦓</span>
            <div>
              <h4 className="font-bold text-gray-800">Diverse Animal Species</h4>
              <p className="text-gray-600">Hunt and tame buffalo, zebras, ostriches, elephants, lions, and the premium Cash Cow in Cowboy Safari, each with unique behaviors and abilities</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🌍</span>
            <div>
              <h4 className="font-bold text-gray-800">Three Unique Biomes</h4>
              <p className="text-gray-600">Explore the Savannah, Jungle, and Mountain regions in Cowboy Safari, each offering different animals and reward tiers</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🎯</span>
            <div>
              <h4 className="font-bold text-gray-800">Mission System</h4>
              <p className="text-gray-600">Complete up to 3 simultaneous missions in Cowboy Safari, including special boss missions for each animal species</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">⚡</span>
            <div>
              <h4 className="font-bold text-gray-800">8-Level Upgrade System</h4>
              <p className="text-gray-600">Upgrade each animal enclosure in Cowboy Safari to unlock riding time extensions, income boosts, and special abilities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl border-l-4 border-green-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🎯</span>
          How to Play Cowboy Safari
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Cowboy Safari</strong> features intuitive controls that are easy to learn but offer deep strategic gameplay. Master the timing of your lasso throws, manage your animal roster, and build the ultimate safari empire.
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">🖱️</span>
            <div>
              <h4 className="font-bold text-gray-800">Throw Lasso</h4>
              <p className="text-gray-600">Click or tap to throw your lasso and catch wild animals in Cowboy Safari - timing is crucial for success</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">⏰</span>
            <div>
              <h4 className="font-bold text-gray-800">Time Your Jumps</h4>
              <p className="text-gray-600">Each animal has a tolerance limit in Cowboy Safari - jump to the next animal before they get angry</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">🏗️</span>
            <div>
              <h4 className="font-bold text-gray-800">Manage Your Zoo</h4>
              <p className="text-gray-600">Upgrade enclosures and manage your animal collection in Cowboy Safari to maximize passive income</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">📋</span>
            <div>
              <h4 className="font-bold text-gray-800">Complete Missions</h4>
              <p className="text-gray-600">Track and complete up to 3 missions simultaneously in Cowboy Safari for maximum gold rewards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl border-l-4 border-blue-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          Featured Animals with Unique Abilities
        </h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Cowboy Safari</strong> features a diverse roster of animals, each with distinct characteristics. Buffalo are easy to control and powerful, ideal for beginners. Zebras are fast but difficult to balance. Ostriches break crates extremely fast when upgraded in <strong>Cowboy Safari</strong>. Elephants are strong and durable but move slower. Lions are aggressive and fast, perfect for experienced players. The premium Cash Cow doubles your zoo income, making it the most valuable animal in <strong>Cowboy Safari</strong>.
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          Progressive Upgrade System
        </h3>
        <p className="text-gray-700 leading-relaxed">
          The 8-level enclosure upgrade system in <strong>Cowboy Safari</strong> provides deep progression mechanics. Early levels (1-3) extend riding time before animals get angry, giving you more control. Level 4 in <strong>Cowboy Safari</strong> increases passive income by 50%, significantly boosting your gold generation. Levels 5-6 unlock game-changing special skills like speed boosts and the ability to break reward barrels. Finally, Levels 7-8 in <strong>Cowboy Safari</strong> increase your chance to find rare variants, adding collection value to your safari empire.
        </p>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🎪</span>
          Rewarding Mission System
        </h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Cowboy Safari</strong> features a comprehensive mission system with up to 3 simultaneous missions. Area rewards scale with difficulty: Savannah offers 50-150 gold, Jungle provides 300-450 gold, and Mountain regions reward 900-1350 gold per mission in <strong>Cowboy Safari</strong>. Boss missions for each animal species require animals upgraded to at least level 4 or 5, offering substantial rewards. With perfect execution in <strong>Cowboy Safari</strong>, you can earn over 4,000 gold in a single playthrough by completing multiple missions simultaneously.
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl border-l-4 border-green-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🌐</span>
          Play Cowboy Safari Online
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Experience <strong>Cowboy Safari Online</strong> with expanded features including online mode where players can compete for scores, share their zoo, or participate in global hunting events. New rankings are added each week in <strong>Cowboy Safari Online</strong>, allowing you to show off your driving and management skills to the community. Play directly on your browser without any downloads required.
        </p>
      </div>

      <div className="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-xl border-l-4 border-red-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">✅</span>
          Strategic Depth and Replayability
        </h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Cowboy Safari</strong> offers incredible strategic depth through its combination of hunting mechanics, zoo management, and upgrade systems. Every decision matters—from which animals to prioritize taming, to how you allocate your gold for enclosure upgrades. The game's replayability in <strong>Cowboy Safari</strong> comes from the pursuit of rare animal variants, completing all boss missions, and optimizing your gold-earning strategies to build the ultimate safari empire.
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-xl border-l-4 border-indigo-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🎨</span>
          Charming Visual Design
        </h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Cowboy Safari</strong> features charming, colorful graphics that bring the safari world to life. Each biome in <strong>Cowboy Safari</strong> has distinct visual themes—from the golden grasslands of the Savannah to the lush greenery of the Jungle and the rocky peaks of the Mountains. The animal animations are smooth and expressive, making every catch and ride in <strong>Cowboy Safari</strong> visually satisfying and engaging for players of all ages.
        </p>
      </div>
    </div>
  );

  const tipsContent = (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-5 rounded-xl border-l-4 border-cyan-500">
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span className="text-xl">🎯</span>
          Time Your Lasso Throws Perfectly
        </h4>
        <p className="text-gray-700">
          Don't jump early in <strong>Cowboy Safari</strong>—wait until you're in lasso range to ensure an accurate catch. Each animal has its own tolerance limit, so jump before they get angry to maintain your momentum and avoid losing progress.
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-teal-100 p-5 rounded-xl border-l-4 border-green-500">
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span className="text-xl">🚀</span>
          Always Hunt New Species
        </h4>
        <p className="text-gray-700">
          Each tamed species in <strong>Cowboy Safari</strong> increases your zoo income. Prioritize catching new animals over repeatedly riding the same species to maximize your passive gold generation and unlock new gameplay possibilities.
        </p>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-5 rounded-xl border-l-4 border-yellow-500">
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span className="text-xl">💡</span>
          Focus on Improving Profits
        </h4>
        <p className="text-gray-700">
          Investing wisely in enclosure upgrades in <strong>Cowboy Safari</strong> will help you progress faster. Prioritize Level 4 upgrades for the 50% income boost, then work toward Levels 5-6 for special abilities that make hunting more efficient.
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-5 rounded-xl border-l-4 border-purple-500">
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span className="text-xl">🎪</span>
          Arrange Tasks Properly
        </h4>
        <p className="text-gray-700">
          Complete multiple tasks in one turn in <strong>Cowboy Safari</strong> to maximize rewards. Plan your hunting routes to accomplish several missions simultaneously, potentially earning over 4,000 gold in a perfect playthrough.
        </p>
      </div>
    </div>
  );

  return (
    <GameDetailTemplate
      game={game}
      aboutContent={aboutContent}
      featuresContent={featuresContent}
      tipsContent={tipsContent}
    />
  );
}

