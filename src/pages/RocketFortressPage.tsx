'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function RocketFortressPage() {
  const game = {
    slug: 'rocket-fortress',
    title: 'Rocket Fortress',
    subtitle: 'Launch Holy Missiles and Build Your Army to Defeat Demonic Forces',
    description: 'Rocket Fortress is an engaging clicker RPG where you use holy missiles and units to fight demons, portals, and bosses. Upgrade your firepower and army over time to defeat the forces of darkness!',
    playUrl: 'https://gamea.azgame.io/rocket-fortress/',
    thumbnail: '/images/thumbnails/rocket-fortress.png',
    rating: 4.2,
    playCount: 2320,
    tags: ['Clicker', 'RPG', 'Action', 'Strategy', 'Casual', 'Shooting', 'Kids'],
    backgroundColor: 'from-red-600 via-orange-500 to-yellow-500',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <span className="text-4xl">🚀</span>
          Rocket Fortress: A World of Epic Battle Against Demons
        </h2>
        <p className="text-lg leading-relaxed">
          In <strong>Rocket Fortress</strong>, you play as a missile-wielding hero, confronting waves of demons and demonic portals.
          The mission is simple: rocket your holy missiles at them to clear stages, defeat bosses, and grow stronger over time through upgrades.
          Be ready to face increasingly tougher demons, portals, and bosses, which demand better upgrades, more powerful units, and stronger missiles.
        </p>
      </div>

      <div className="bg-gradient-to-br from-red-900 to-red-700 p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
          ⚔️ Epic Demon Battles
        </h3>
        <p className="text-gray-200">
          You fail the mission and have to restart the stage if you can't destroy all the demons before they reach your base.
          Often, faster and tougher bosses can quickly approach you, ending your attempt if you're not well-prepared.
          The key is to upgrade your missiles or rockets and units quickly enough to handle stronger waves and tougher bosses.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          ✨ Gameplay Highlights
        </h3>
        <ul className="space-y-3 text-lg">
          <li className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🎮</span>
            <span><strong>Dynamic Clicker RPG Gameplay:</strong> Tap or click to fire holy missiles and pick upgrade options to enhance your arsenal</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">👹</span>
            <span><strong>Face Massive Demon Waves:</strong> Battle against portals and increasingly dangerous bosses that test your strategic skills</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🪖</span>
            <span><strong>Recruit Marines and Units:</strong> Build your squad to launch automatic attacks and support your holy missile strikes</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">⬆️</span>
            <span><strong>Missile and Unit Upgrades:</strong> Upgrades are key to survival and progress - invest in better launchers and more powerful missiles</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🎨</span>
            <span><strong>Vivid Cartoonish Visuals:</strong> Enjoy vibrant graphics and colorful animations that bring the demon battles to life</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-orange-900 to-orange-700 p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
          💎 Resource Management
        </h3>
        <p className="text-gray-200">
          You get resources, such as in-game diamonds and coins, by taking down enemies.
          Spend your earned resources wisely to buy upgrades that improve launchers, increase damage, and unlock more powerful missiles.
          Also, recruit marines and build your squad to auto-fire and support your attacks.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          🎯 Strategic Progression
        </h3>
        <p className="text-lg leading-relaxed">
          Once you've progressed enough, you'll face stronger bosses or portals that test how powerful your upgraded arsenal is.
          If you fail a stage, simply retry with more powerful upgrades. The game rewards patience and strategic thinking -
          knowing when to upgrade your missiles versus recruiting more units can make the difference between victory and defeat.
        </p>
      </div>

      <div className="bg-gradient-to-br from-yellow-900 to-yellow-700 p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
          🏆 Boss Battles
        </h3>
        <p className="text-gray-200">
          Face off against massive demon bosses that require all your firepower and strategic upgrades.
          These epic encounters will test your preparation and quick reflexes.
          Defeat them to unlock new stages and earn valuable resources for even more powerful upgrades!
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-4">
      <p className="text-lg leading-relaxed">
        Your main goal is to eliminate waves of demons, tear their portals, and defeat all tough bosses.
        Here's how to master <strong>Rocket Fortress</strong>:
      </p>

      <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
          🚀 Launch Missiles
        </h3>
        <p className="text-gray-200">
          You start the game with basic missiles; use what you have to start destroying demons and portals.
          Tap or click to launch your holy missiles at enemies. Each tap or click contributes to damage.
          The more you click, the faster you can eliminate threats!
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
          ⬆️ Upgrade Missiles and Units
        </h3>
        <p className="text-gray-200">
          Spend your earned resources to buy upgrades that improve launchers, increase damage, and unlock more powerful missiles.
          Also, recruit marines and build your squad to auto-fire and support your attacks.
          Balance your upgrades between missile power and unit recruitment for optimal performance.
        </p>
      </div>

      <div className="bg-gradient-to-br from-red-900 to-red-700 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
          👹 Face Tougher Demonic Enemies
        </h3>
        <p className="text-gray-200">
          Once you've progressed enough, you'll face stronger bosses or portals that test how powerful your upgraded arsenal is.
          If you fail a stage, simply retry with more powerful upgrades.
          Learn enemy patterns and prepare your defenses accordingly!
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          🎮 Game Controls
        </h3>
        <ul className="space-y-2 text-lg">
          <li className="flex items-center gap-3">
            <span className="text-2xl">🖱️</span>
            <span><strong>Click the left mouse button</strong> to fire holy missiles</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">⌨️</span>
            <span><strong>Press SPACE</strong> to fire missiles (alternative control)</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">💰</span>
            <span><strong>Click upgrade buttons</strong> to spend resources and improve your arsenal</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-red-900 to-red-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
            🎯 Addictive Clicker Mechanics
          </h3>
          <p className="text-gray-200">
            Simple yet engaging tap-to-fire gameplay that's easy to learn but challenging to master.
            Perfect for quick gaming sessions or extended play!
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
            ⚔️ Strategic Upgrade System
          </h3>
          <p className="text-gray-200">
            Choose wisely between missile upgrades and unit recruitment.
            Your strategic decisions determine your success against tougher enemies!
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-900 to-yellow-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
            🪖 Auto-Attack Units
          </h3>
          <p className="text-gray-200">
            Recruit marines and other units that automatically fire at enemies,
            allowing you to focus on strategic upgrades and boss battles!
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
            👹 Epic Boss Encounters
          </h3>
          <p className="text-gray-200">
            Face increasingly powerful demon bosses that require all your firepower.
            Each victory brings greater rewards and unlocks new challenges!
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
            🎨 Vibrant Graphics
          </h3>
          <p className="text-gray-200">
            Enjoy colorful, cartoonish visuals with smooth animations that make every missile launch satisfying!
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
            🏆 Progressive Difficulty
          </h3>
          <p className="text-gray-200">
            Start with basic enemies and gradually face tougher challenges.
            The difficulty curve keeps you engaged and motivated to upgrade!
          </p>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl border-4 border-red-400">
        <p className="text-lg text-gray-800 font-semibold text-center">
          🚀 Ready to step into the world full of demonic forces? Play <strong>Rocket Fortress</strong> now,
          launch holy missiles, upgrade, and unleash even more chaos to beat as many stages as possible! 🎮
        </p>
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

