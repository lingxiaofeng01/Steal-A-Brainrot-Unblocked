'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function StealTheBrainrotFishPage() {
  const game = {
    slug: 'steal-the-brainrot-fish',
    title: 'Steal the Brainrot Fish',
    subtitle: 'Build Your Underwater Empire of Viral Fish!',
    description: 'Welcome to the chaotic, viral world of Steal the Brainrot Fish! This game is a hilarious and action-packed adventure where you build an underwater empire of fish that generate wealth. But you\'re not alone—other players can sneak into your pond and steal your prized fish. This game is a blend of collection, strategy, and pure, unhinged fun.',
    playUrl: 'https://st.8games.net/7/8g/igra-ukradi-brejnrot-rybu/',
    thumbnail: '/images/thumbnails/steal-the-brainrot-fish.png',
    rating: 4.8,
    playCount: 125000,
    tags: ['Brainrot', 'Casual', 'Multiplayer', 'Collection', 'Strategy', 'Funny'],
    backgroundColor: 'from-blue-400 via-cyan-400 to-teal-400',
  };

  const aboutContent = (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed">
        <strong>Steal the Brainrot Fish!</strong> is not your typical fishing game—it's a wild, competitive adventure where you collect rare viral fish characters to build your underwater fortune. Each fish generates passive income, but the real excitement comes from the ability to raid other players' ponds and steal their most valuable catches!
      </p>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3">🐟 What Makes This Game Special?</h3>
        <p className="text-gray-700 mb-4">
          In Steal the Brainrot Fish, you're not just collecting fish—you're building an empire! The game features a unique collection system where rarer fish generate more wealth. But watch out: other players can invade your pond and steal your prized possessions. This creates a dynamic, competitive environment where strategy meets chaos.
        </p>
        <p className="text-gray-700">
          The game's viral fish characters are inspired by internet memes and brainrot culture, making each catch feel like a piece of digital history. From common guppies to legendary mythical creatures, every fish has its own personality and value.
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3">💰 Build Your Fortune</h3>
        <p className="text-gray-700 mb-4">
          Your objective is simple: become the ultimate "Fish King" by collecting the rarest and most valuable fish. Each fish you own generates passive income over time, allowing you to purchase even more powerful fish or upgrade your pond's defenses.
        </p>
        <p className="text-gray-700">
          The rarer the fish, the more money it generates. Legendary fish can earn you millions per second, but they're also the most coveted targets for other players. You'll need to balance offense and defense—stealing from others while protecting your own collection.
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3">🎯 Competitive Gameplay</h3>
        <p className="text-gray-700 mb-4">
          Stealing is at the core of this game's mechanics. You can raid other players' ponds to steal their fish, but they can do the same to you! This creates an exciting cat-and-mouse dynamic where you're constantly strategizing about when to attack and when to defend.
        </p>
        <p className="text-gray-700">
          Use unique trolling gear and tools to prank your friends and rivals. Unlock powerful skills that give you an edge in every match. The competitive play keeps you on your toes as you climb the leaderboards and establish your dominance.
        </p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3">🌊 Viral Fish Collection</h3>
        <p className="text-gray-700 mb-4">
          The game features a wide array of viral fish characters, each with unique designs inspired by internet culture and memes. From derpy goldfish to majestic sea dragons, every fish tells a story and adds personality to your pond.
        </p>
        <p className="text-gray-700">
          Collecting rare fish isn't just about the money—it's about prestige. Show off your collection to other players and prove you're the ultimate fish collector. Some fish are so rare that only a handful of players in the world own them!
        </p>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-lg border-l-4 border-red-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3">🎮 Easy to Learn, Hard to Master</h3>
        <p className="text-gray-700 mb-4">
          The controls are straightforward and intuitive, making it easy for anyone to jump in and start playing. Navigate your pond, manage your fish, and raid other players with simple clicks and taps.
        </p>
        <p className="text-gray-700">
          However, mastering the game requires strategic thinking. You'll need to decide when to invest in new fish, when to upgrade your defenses, and when to go on the offensive. The best players balance all these elements to dominate the competition.
        </p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-6 rounded-lg border-l-4 border-indigo-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3">🏆 Become the Fish King</h3>
        <p className="text-gray-700 mb-4">
          Your ultimate goal is to become the "Fish King"—the player with the most valuable and extensive fish collection. This title isn't just about having the most fish; it's about having the rarest and most powerful ones.
        </p>
        <p className="text-gray-700">
          Compete on global leaderboards, participate in special events, and unlock exclusive fish that can only be obtained through skill and dedication. The path to becoming Fish King is challenging, but the rewards are worth it!
        </p>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3">🎪 Unhinged Fun and Chaos</h3>
        <p className="text-gray-700 mb-4">
          At its core, Steal the Brainrot Fish is about having fun in the most chaotic way possible. The game doesn't take itself too seriously, embracing the absurdity of internet culture and meme humor.
        </p>
        <p className="text-gray-700">
          Whether you're trolling your friends with silly pranks, stealing a legendary fish at the last second, or watching your carefully built empire crumble as raiders invade, every moment is filled with laughter and excitement. This is brainrot gaming at its finest!
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border-l-4 border-cyan-500">
        <h4 className="text-xl font-bold text-cyan-900 mb-3">🎣 Step 1: Start Your Collection</h4>
        <p className="text-gray-700">
          Begin by purchasing your first fish using the starting currency. Each fish generates passive income, so the more fish you have, the faster you earn money. Start with common fish and work your way up to rarer, more valuable species.
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
        <h4 className="text-xl font-bold text-purple-900 mb-3">💎 Step 2: Upgrade and Expand</h4>
        <p className="text-gray-700">
          Use your earnings to buy better fish and upgrade your pond. Rarer fish generate significantly more income, allowing you to expand your empire faster. Invest wisely to maximize your profits and climb the leaderboards.
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
        <h4 className="text-xl font-bold text-green-900 mb-3">🎯 Step 3: Raid Other Players</h4>
        <p className="text-gray-700">
          Once you've built up your collection, it's time to go on the offensive! Raid other players' ponds to steal their fish. Use trolling gear and special tools to increase your chances of success. The rarer the fish, the bigger the reward!
        </p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-500">
        <h4 className="text-xl font-bold text-orange-900 mb-3">🛡️ Step 4: Defend Your Pond</h4>
        <p className="text-gray-700">
          Don't forget to protect your own fish! Other players will try to steal from you, so invest in defenses and security measures. The best players balance offense and defense to maintain their empire while expanding it.
        </p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-6 rounded-lg border-l-4 border-indigo-500">
        <h4 className="text-xl font-bold text-indigo-900 mb-3">🏆 Step 5: Dominate the Leaderboards</h4>
        <p className="text-gray-700">
          Compete with players worldwide to become the ultimate Fish King. Participate in events, unlock exclusive fish, and showcase your collection. The more you play, the more powerful you become!
        </p>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h4 className="text-xl font-bold text-yellow-900 mb-3">🎮 Controls</h4>
        <p className="text-gray-700">
          The game features straightforward controls that make it easy to navigate your pond and raid others. Simply click or tap to interact with fish, purchase upgrades, and execute raids. The intuitive interface ensures you can focus on strategy rather than struggling with controls.
        </p>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🐟</span>
          <h4 className="text-lg font-bold text-gray-800">Unique Fish Collection</h4>
        </div>
        <p className="text-gray-700">A wide array of viral fish characters inspired by internet memes and brainrot culture</p>
      </div>

      <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🎯</span>
          <h4 className="text-lg font-bold text-gray-800">Competitive Stealing</h4>
        </div>
        <p className="text-gray-700">Raid other players' ponds and steal their prized fish in this dynamic PvP environment</p>
      </div>

      <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🛠️</span>
          <h4 className="text-lg font-bold text-gray-800">Trolling Gear</h4>
        </div>
        <p className="text-gray-700">Use unique trolling gear and tools to prank your friends and gain advantages</p>
      </div>

      <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">💰</span>
          <h4 className="text-lg font-bold text-gray-800">Passive Income System</h4>
        </div>
        <p className="text-gray-700">Build your fortune with fish that generate wealth automatically over time</p>
      </div>

      <div className="bg-gradient-to-br from-red-100 to-red-50 p-6 rounded-lg border-l-4 border-red-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">⚔️</span>
          <h4 className="text-lg font-bold text-gray-800">Skills and Tools</h4>
        </div>
        <p className="text-gray-700">Unlock powerful skills and tools to dominate every match and outsmart opponents</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🏆</span>
          <h4 className="text-lg font-bold text-gray-800">Leaderboard Competition</h4>
        </div>
        <p className="text-gray-700">Compete globally to become the ultimate Fish King and showcase your collection</p>
      </div>

      <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🎮</span>
          <h4 className="text-lg font-bold text-gray-800">Easy Controls</h4>
        </div>
        <p className="text-gray-700">Straightforward controls make it easy to navigate and play, perfect for all skill levels</p>
      </div>

      <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🎪</span>
          <h4 className="text-lg font-bold text-gray-800">Unhinged Fun</h4>
        </div>
        <p className="text-gray-700">Pure chaotic entertainment that embraces internet culture and meme humor</p>
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

