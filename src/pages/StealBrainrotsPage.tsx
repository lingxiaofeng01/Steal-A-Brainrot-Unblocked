'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function StealBrainrotsPage() {
  const game = {
    slug: 'steal-brainrots',
    title: 'Steal Brainrots',
    subtitle: 'Multiplayer Roblox Heist Game - Buy, Steal & Defend Your Meme Empire!',
    description: 'Steal Brainrots is a thrilling multiplayer Roblox heist game where you buy quirky meme characters, steal them from others, and defend your base. Collect high-value Brainrots, protect them from rival players, and build the ultimate meme empire!',
    playUrl: 'https://azgames.io/steal-brainrots/steal-brainrots.embed',
    thumbnail: '/images/thumbnails/steal-brainrots.png',
    rating: 4.6,
    playCount: 102,
    tags: ['Action', 'Puzzle', 'Strategy', 'Collecting', 'Stealth', 'Brainrot', 'Casual', 'Arcade'],
    backgroundColor: 'from-purple-600 via-pink-600 to-red-600',
  };

  const aboutContent = (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          🎮 About Steal Brainrots
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Steal Brainrots</strong> is a new, thrilling multiplayer Roblox heist game where players buy quirky meme characters,
          steal them from others, and defend their base. Aim to rack up massive earnings by collecting high-value Brainrots and protecting
          them from rival players who are always ready to steal them. Play now, steal big, and fill your base with just the rarest memes!
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          🎯 Steal Brainrots Gameplay Overview
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          You start the game with an empty base and some initial cash, so quickly access the conveyor belt to pick some memes to your base
          and wait for them to generate income over time. It's worth noting that the rarer or higher value the Brainrot, the more in-game
          money it produces per second. Here's the meme rarity tier list:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li><strong>Common</strong></li>
          <li><strong>Rare</strong></li>
          <li><strong>Epic</strong></li>
          <li><strong>Legendary</strong></li>
          <li><strong>Mythic</strong></li>
          <li><strong>Divine</strong></li>
          <li><strong>Secret</strong></li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          The big part of the fun? It's about raiding or sneaking into other players' bases to steal their Brainrots. Aim for rare memes
          so that you can boost your earnings so quickly. Once stolen successfully, they transfer to your base and extend your collection.
          But be careful, as other players can also steal Brainrots from your base. Thus, it's important to defend your base effectively.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          📋 How to Play Steal Brainrots Step by Step
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Again, your goal in <strong>Steal Brainrots</strong> is simple: collect and protect Brainrots while stealing others' to expand
          your collection and boost your earnings.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mb-3 mt-4">🎯 Collect Brainrots and Build Your Collection</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          To start, head over to the conveyor belt area, where new Brainrots appear for purchase. Buy some first ones with your initial
          money and let them generate passive income for you automatically. Once you have more budget through incomes collected from your
          own memes, it's time to invest in rarer Brainrots to rack up earnings and keep investing in more expensive characters.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mb-3 mt-4">🛡️ Protect Your Base</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Other players can steal from you when your base isn't locked. So, use your lockdown timer that lasts 60 seconds to make your
          base temporarily safe, especially when you're outside the base. Meanwhile, you can also use weapons, like a hammer, to defend
          the base more effectively.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mb-3 mt-4">💰 Steal from Other Players</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you want to grow your base even faster, try stealing memes from others! Explore nearby bases, look for ones that are unlocked,
          sneak in, grab a meme, and run back to your base. But stay alert; the base owners can easily catch you.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mb-3 mt-4">🔄 Rebirth for Permanent Boosts</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          You can rebirth when you've earned enough money or reached specific milestones. It resets your progress and the Brainrots
          collection but grants permanent boosts and other benefits. This really rewards your long-term progression.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          🌟 Key Features of Steal Brainrots
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>Multiplayer Heist Gameplay:</strong> Compete with other players in real-time to steal and protect Brainrots</li>
          <li><strong>Quirky Meme Characters:</strong> Collect hundreds of unique meme-inspired Brainrot characters with different rarity levels</li>
          <li><strong>Base Building & Defense:</strong> Build and customize your base while defending it from rival thieves</li>
          <li><strong>Passive Income System:</strong> Earn money automatically from your Brainrot collection even when offline</li>
          <li><strong>Rarity Tier System:</strong> From Common to Secret rarity - hunt for the rarest and most valuable memes</li>
          <li><strong>Rebirth Mechanics:</strong> Reset your progress for permanent boosts and long-term advantages</li>
          <li><strong>Strategic Raiding:</strong> Plan your heists carefully to maximize rewards and minimize risks</li>
          <li><strong>Lockdown Protection:</strong> Use 60-second lockdown timers to protect your base when needed</li>
          <li><strong>Weapon System:</strong> Defend your base with weapons like hammers to catch intruders</li>
          <li><strong>Free to Play:</strong> Completely free browser-based game with no downloads required</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          🏆 Who Should Play Steal Brainrots?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Roblox Fans:</strong> Players who love Roblox-style multiplayer games with unique mechanics</li>
          <li><strong>Collectors:</strong> Gamers who enjoy hunting for rare items and building impressive collections</li>
          <li><strong>Strategy Enthusiasts:</strong> Those who appreciate planning raids and managing resources effectively</li>
          <li><strong>Meme Lovers:</strong> Anyone who enjoys internet culture and quirky meme-inspired content</li>
          <li><strong>Idle Game Fans:</strong> Players who like passive income mechanics and long-term progression</li>
          <li><strong>Competitive Players:</strong> Gamers who want to compete with others and dominate leaderboards</li>
          <li><strong>Casual Gamers:</strong> Anyone looking for an accessible yet engaging multiplayer experience</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          💡 Pro Tips & Strategies
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>Focus on Rare Memes First:</strong> Higher rarity Brainrots generate more income per second - prioritize them</li>
          <li><strong>Use Lockdown Wisely:</strong> Activate your 60-second lockdown before going on raids to protect your base</li>
          <li><strong>Scout Before Raiding:</strong> Check if a base is unlocked and assess the risk before attempting a steal</li>
          <li><strong>Invest in Defense:</strong> Keep weapons ready to defend against intruders trying to steal your collection</li>
          <li><strong>Time Your Rebirth:</strong> Don't rebirth too early - maximize your earnings first for better permanent boosts</li>
          <li><strong>Diversify Your Collection:</strong> Collect different types of Brainrots to maximize passive income streams</li>
          <li><strong>Be Quick During Raids:</strong> Speed is essential - grab the meme and escape before the owner catches you</li>
          <li><strong>Upgrade Strategically:</strong> Invest in upgrades that boost income generation and base security</li>
          <li><strong>Play During Peak Hours:</strong> More players online means more raiding opportunities and competition</li>
          <li><strong>Learn from Failed Raids:</strong> Each failed attempt teaches you about base layouts and defense strategies</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          🎮 Why Steal Brainrots Stands Out
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Steal Brainrots</strong> combines the best elements of idle games, collection mechanics, and competitive multiplayer
          into one addictive package. Unlike traditional clicker games, this game adds a thrilling PvP element where you must constantly
          balance offense and defense. The meme-inspired characters add humor and personality, while the rarity system creates a compelling
          progression loop that keeps you coming back for more.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The rebirth system ensures long-term engagement by rewarding dedicated players with permanent advantages. Whether you prefer
          peaceful collection or aggressive raiding, the game accommodates different playstyles while maintaining competitive balance.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          🌐 Similar Games You Might Enjoy
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you love <strong>Steal Brainrots</strong>, check out these other exciting brainrot games:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Steal a Brainrot Unblocked:</strong> The original brainrot stealing adventure with classic 3D gameplay</li>
          <li><strong>Steal Brainrot Monsters:</strong> Face off against monster guardians while collecting rare brainrots</li>
          <li><strong>Steal Brainrot New Animals:</strong> Explore wildlife-themed levels with animal-inspired brainrot characters</li>
          <li><strong>Steal The Italian Brainrot:</strong> Experience Italian-themed gameplay with unique cultural meme elements</li>
          <li><strong>Italian Brainrot Clicker 2:</strong> The ultimate idle clicker game with Italian brainrot memes</li>
          <li><strong>Brainrot Clicker:</strong> Click your way to brainrot glory in this addictive incremental game</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          🎉 Start Your Brainrot Heist Today!
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ready to jump in and build your ultimate meme empire? <strong>Steal Brainrots</strong> offers endless entertainment with its
          unique blend of collection, strategy, and competitive multiplayer gameplay. Collect your favorite Brainrots, steal from rival
          players, defend your base, and dominate the arena!
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Whether you're a casual player looking for fun or a competitive gamer aiming to build the biggest collection, Steal Brainrots
          has something for everyone. The game is completely free to play, requires no downloads, and is unblocked for instant access
          anywhere - at school, work, or home!
        </p>
        <p className="text-gray-700 leading-relaxed font-bold text-lg">
          Play <strong>Steal Brainrots</strong> now and start your journey to becoming the ultimate meme collector and master thief!
          🎮💎🔥
        </p>
      </section>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-800 mb-3">🎮 Game Controls</h3>
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg border-2 border-purple-300">
        <ul className="space-y-2 text-gray-700">
          <li><strong>WASD / Arrow Keys:</strong> Move your character around the map</li>
          <li><strong>Spacebar:</strong> Jump over obstacles</li>
          <li><strong>E Key:</strong> Interact with objects, conveyor belt, and Brainrots</li>
          <li><strong>Mouse:</strong> Click to select and manage your base</li>
          <li><strong>ESC:</strong> Pause game and access settings menu</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">📋 Gameplay Steps</h3>
      <ol className="list-decimal list-inside space-y-3 text-gray-700">
        <li><strong>Start with Initial Cash:</strong> Begin the game with some starting money in your empty base</li>
        <li><strong>Buy Your First Brainrots:</strong> Head to the conveyor belt and purchase your first meme characters</li>
        <li><strong>Generate Passive Income:</strong> Place Brainrots in your base and watch them generate money automatically</li>
        <li><strong>Invest in Rarer Memes:</strong> Use your earnings to buy higher rarity Brainrots for better income</li>
        <li><strong>Raid Other Bases:</strong> Explore nearby player bases and steal their unlocked Brainrots</li>
        <li><strong>Defend Your Base:</strong> Use lockdown timers and weapons to protect your collection from thieves</li>
        <li><strong>Upgrade & Expand:</strong> Continuously improve your base and collection for maximum earnings</li>
        <li><strong>Rebirth for Boosts:</strong> Reset your progress at milestones to gain permanent advantages</li>
      </ol>
    </div>
  );

  const featuresContent = (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border-2 border-purple-300">
          <h4 className="font-bold text-gray-800 mb-2">🎮 Multiplayer Heist Action</h4>
          <p className="text-gray-700 text-sm">Compete with real players in thrilling PvP raids and base defense battles</p>
        </div>
        <div className="bg-gradient-to-br from-pink-50 to-red-50 p-4 rounded-lg border-2 border-pink-300">
          <h4 className="font-bold text-gray-800 mb-2">🎭 Quirky Meme Characters</h4>
          <p className="text-gray-700 text-sm">Collect hundreds of unique Brainrot memes with 7 different rarity tiers</p>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-lg border-2 border-red-300">
          <h4 className="font-bold text-gray-800 mb-2">💰 Passive Income System</h4>
          <p className="text-gray-700 text-sm">Earn money automatically from your Brainrot collection even when offline</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-lg border-2 border-orange-300">
          <h4 className="font-bold text-gray-800 mb-2">🛡️ Base Defense Mechanics</h4>
          <p className="text-gray-700 text-sm">Protect your collection with lockdown timers and defensive weapons</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg border-2 border-blue-300">
          <h4 className="font-bold text-gray-800 mb-2">🔄 Rebirth Progression</h4>
          <p className="text-gray-700 text-sm">Reset for permanent boosts and long-term strategic advantages</p>
        </div>
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg border-2 border-indigo-300">
          <h4 className="font-bold text-gray-800 mb-2">🆓 Free Browser Game</h4>
          <p className="text-gray-700 text-sm">Play instantly with no downloads - unblocked and accessible anywhere</p>
        </div>
      </div>
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

