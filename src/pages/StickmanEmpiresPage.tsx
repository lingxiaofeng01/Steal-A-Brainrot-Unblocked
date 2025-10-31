'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function StickmanEmpiresPage() {
  const game = {
    slug: 'stickman-empires',
    title: 'Stickman Empires',
    subtitle: 'Build Your Army and Conquer in Epic Tower Defense Battles',
    description: 'Stickman Empires is a strategic tower defense game where you command stickman armies, mine resources, train powerful units, and defend your monument while attacking enemy bases. Experience epic battles with diverse game modes and difficulty levels!',
    playUrl: 'https://games.yoplay.io/stickman-empires/',
    thumbnail: '/images/thumbnails/stickman-empires.png',
    rating: 5.0,
    playCount: 0,
    tags: ['Strategy', 'Tower Defense', 'Stickman', 'War', 'Action', 'Casual', 'Multiplayer', 'Adventure'],
    backgroundColor: 'from-amber-600 via-orange-500 to-red-600',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <span className="text-4xl">⚔️</span>
          Experience the Ultimate Stickman Empire
        </h2>
        <p className="text-lg leading-relaxed">
          <strong>Stickman Empires</strong> is a game in the strategy genre - tower defense, where you transform into a commander, 
          leading the stickman army to participate in epic battles. In <strong>Stickman Empires</strong>, you'll combine resource exploitation, 
          building forces, and coming up with smart strategies to win. Every decision matters as you balance between mining gold, 
          training soldiers, and defending your monument against relentless enemy attacks.
        </p>
      </div>

      <div className="bg-gradient-to-br from-amber-900 to-amber-700 p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
          🎮 Diverse Game Modes for All Levels
        </h3>
        <p className="text-gray-200 mb-3">
          <strong>Stickman Empires</strong> offers many different modes and difficulties to keep you engaged:
        </p>
        <ul className="space-y-2 text-gray-200">
          <li className="flex items-start gap-2">
            <span className="text-xl">📖</span>
            <span><strong>Classic Campaign:</strong> Adventure through many maps, confront increasingly strong enemies in Stickman Empires</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">🏆</span>
            <span><strong>Tournament Mode:</strong> Compete in tactics with other players in Stickman Empires battles</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">♾️</span>
            <span><strong>Endless Deeds:</strong> Waves after waves of enemies appear before you—a challenge indeed for continued survival</span>
          </li>
        </ul>
        <p className="text-gray-200 mt-3">
          Difficulty levels in <strong>Stickman Empires</strong> vary transversely with the player's skill, ranging from Normal to Hard and Insane, 
          to hang heavier levels of drama on each match.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          ⚙️ Gameplay: From Mining to Victory
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Stickman Empires</strong> follows a strategic action chain that keeps you engaged from start to finish:
        </p>
        <ul className="space-y-3 text-lg">
          <li className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">⛏️</span>
            <span><strong>Resource Exploitation:</strong> Send miners to dig gold to sustain the economy in Stickman Empires</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🪖</span>
            <span><strong>Training Soldiers:</strong> From swordsmen, spearmen, and archers to mages and giants - build your ultimate army</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🎯</span>
            <span><strong>Formation Building:</strong> Adjust positions and coordinate troops flexibly to overwhelm the enemy in Stickman Empires</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🏰</span>
            <span><strong>Protect the Monument:</strong> Maintain defense while attacking and destroying the enemy base</span>
          </li>
        </ul>
        <p className="text-lg leading-relaxed mt-4">
          Every strategic decision in <strong>Stickman Empires</strong> can turn the tide of battle, so players need to balance between defense and attack.
        </p>
      </div>

      <div className="bg-gradient-to-br from-red-900 to-red-700 p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
          ✨ Highlights of Stickman Empires
        </h3>
        <ul className="space-y-3 text-gray-200">
          <li className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">⚔️</span>
            <span><strong>Diverse Array of Weapons and Skins:</strong> Unlock legendary swords, formidable armor, and unique appearances for your army</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">📈</span>
            <span><strong>Improved Gameplay:</strong> Much more optimized formations and greater archer accuracy in Stickman Empires</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">💥</span>
            <span><strong>Combat Effects in Full Swing:</strong> Blood, arrows, and smooth movements for added drama in battle</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          💡 Tips for Playing Stickman Empires to Win Quickly
        </h3>
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-green-900 to-green-700 p-5 rounded-xl">
            <h4 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
              💰 Economic Priority
            </h4>
            <p className="text-gray-200">
              Always prioritize building a stable economy before expanding your army in <strong>Stickman Empires</strong>. 
              Without sufficient gold income, you won't be able to sustain your forces during prolonged battles.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-5 rounded-xl">
            <h4 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
              ⚖️ Balanced Formation
            </h4>
            <p className="text-gray-200">
              Combine melee and ranged combat for a balanced formation in <strong>Stickman Empires</strong>. 
              Swordsmen and spearmen protect your archers, while archers deal damage from a safe distance.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900 to-purple-700 p-5 rounded-xl">
            <h4 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
              🎯 Strategic Unit Deployment
            </h4>
            <p className="text-gray-200">
              Use giants and mages at the right time to create breakthroughs in <strong>Stickman Empires</strong>. 
              These powerful units can turn the tide of battle when deployed strategically.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-900 to-orange-700 p-5 rounded-xl">
            <h4 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
              🎮 Direct Control
            </h4>
            <p className="text-gray-200">
              Directly control some units when you need to turn the situation around in <strong>Stickman Empires</strong>. 
              Manual control allows for precise positioning and tactical maneuvers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-4">
      <p className="text-lg leading-relaxed">
        Master the art of war in <strong>Stickman Empires</strong> by following these essential strategies:
      </p>

      <div className="bg-gradient-to-br from-amber-900 to-amber-700 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
          ⛏️ Step 1: Build Your Economy
        </h3>
        <p className="text-gray-200">
          Start by sending miners to collect gold. In <strong>Stickman Empires</strong>, a strong economy is the foundation of victory. 
          The more miners you have, the faster you can train soldiers and upgrade your forces. Balance your spending between 
          immediate military needs and long-term economic growth.
        </p>
      </div>

      <div className="bg-gradient-to-br from-red-900 to-red-700 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
          🪖 Step 2: Train Your Army
        </h3>
        <p className="text-gray-200">
          Recruit different types of units in <strong>Stickman Empires</strong>: swordsmen for frontline defense, 
          spearmen for anti-cavalry, archers for ranged attacks, mages for area damage, and giants for breaking through enemy lines. 
          Each unit type has unique strengths and weaknesses, so build a diverse army.
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
          🎯 Step 3: Position Your Forces
        </h3>
        <p className="text-gray-200">
          Formation is crucial in <strong>Stickman Empires</strong>. Place melee units in front to absorb damage, 
          position archers behind for safe attacks, and keep mages and giants ready for strategic deployment. 
          Adjust your formation based on enemy composition and attack patterns.
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-900 to-green-700 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
          ⚔️ Step 4: Attack and Defend
        </h3>
        <p className="text-gray-200">
          In <strong>Stickman Empires</strong>, you must protect your monument while destroying the enemy base. 
          Send attack waves when you have numerical superiority, but always keep enough defenders at home. 
          Watch for enemy counterattacks and be ready to recall your forces if needed.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          🎮 Game Controls for Stickman Empires
        </h3>
        <ul className="space-y-2 text-lg">
          <li className="flex items-center gap-3">
            <span className="text-2xl">🖱️</span>
            <span><strong>Mouse Click:</strong> Select units, buildings, and issue commands</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">⌨️</span>
            <span><strong>Hotkeys:</strong> Quick access to unit training and upgrades</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl">🎯</span>
            <span><strong>Drag Selection:</strong> Select multiple units for group commands</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-amber-900 to-amber-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
            🎮 Strategic Tower Defense
          </h3>
          <p className="text-gray-200">
            <strong>Stickman Empires</strong> combines classic tower defense with real-time strategy. 
            Build your defenses, train armies, and launch coordinated attacks!
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-900 to-red-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
            ⚔️ Diverse Unit Types
          </h3>
          <p className="text-gray-200">
            Command swordsmen, spearmen, archers, mages, and giants in <strong>Stickman Empires</strong>. 
            Each unit has unique abilities and tactical roles!
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
            🏆 Multiple Game Modes
          </h3>
          <p className="text-gray-200">
            Play Campaign, Tournament, or Endless mode in <strong>Stickman Empires</strong>. 
            Each mode offers unique challenges and rewards!
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
            💎 Upgrade System
          </h3>
          <p className="text-gray-200">
            Unlock legendary weapons, armor, and skins in <strong>Stickman Empires</strong>. 
            Customize your army and enhance their combat effectiveness!
          </p>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl border-4 border-amber-400">
        <p className="text-lg text-gray-800 font-semibold text-center">
          ⚔️ Ready to build your empire and conquer the battlefield? Play <strong>Stickman Empires</strong> now 
          and lead your stickman army to victory! 🎮
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

