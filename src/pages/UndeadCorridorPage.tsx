'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function UndeadCorridorPage() {
  const game = {
    slug: 'undead-corridor',
    title: 'Undead Corridor',
    subtitle: 'Fast-Paced Zombie Survival Shooter - Clear Corridors and Survive',
    description: 'Undead Corridor is a fast-paced 2D zombie survival shooter where players fight off hordes of zombies in confined spaces. Defend yourself, upgrade weapons, and survive as long as possible!',
    playUrl: 'https://gamea.azgame.io/undead-corridor/',
    thumbnail: '/images/thumbnails/undead-corridor.png',
    rating: 4.4,
    playCount: 485,
    tags: ['Shooting', 'Horror', 'Zombie', 'Survival', 'Action', '2D', 'Arcade'],
    backgroundColor: 'from-red-900 via-gray-900 to-black',
  };

  const aboutContent = (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed">
        Ready to face endless waves of zombies and clear as many corridors as possible without dying? The key to surviving in this fast-paced, intense game is to upgrade weapons, manage ammo, aim precisely, and avoid getting overwhelmed by increasing numbers of zombies. Try <strong>Undead Corridor</strong>, and do not let the undead get too close and kill you!
      </p>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-3xl">🧟</span>
          Undead Corridor & Fierce Combat Against Undead
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Undead Corridor</strong> is a fast-paced 2D zombie survival shooter where players fight off hordes of zombies in confined spaces like corridors or rooms. During a zombie apocalypse, you, as a lone survivor, are tasked with clearing buildings infested with zombies. Try to defend yourself and stay alive as long as possible by eliminating waves of zombies that approach you quickly.
        </p>
        <p className="text-lg leading-relaxed">
          The game has multiple modes set in different intense environments: <strong>Office</strong>, <strong>Hospital</strong>, <strong>Rooms</strong>, or <strong>Street</strong>, each with its own survival challenges. Clear as many undead as you can to unlock new challenges and earn in-game money to purchase new, powerful weapons for better chances of surviving.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-3xl">⭐</span>
          Key Game Features
        </h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Several game modes</strong> with different survival challenges</li>
          <li><strong>Different zombie types</strong>—some are faster, tougher, or more aggressive</li>
          <li><strong>Lots of weapon options</strong> for purchase and upgrade</li>
          <li><strong>Intense gore effects</strong> and unique ragdoll physics</li>
          <li><strong>Multiple environments</strong>: Office, Hospital, Rooms, Street</li>
          <li><strong>Progressive difficulty</strong> with increasingly challenging waves</li>
        </ul>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-4">
      <p className="text-lg leading-relaxed">
        Begin the mission by selecting a game mode, and you can jump straight into the action.
      </p>
      
      <div className="bg-white rounded-xl p-6 shadow-md border-2 border-cyan-200">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">🎯 Combat Controls</h4>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Click or Tap</strong> - Aim and shoot at zombies</li>
          <li><strong>Spacebar</strong> - Kick to push back zombies</li>
          <li><strong>R Key</strong> - Reload your weapon</li>
          <li><strong>Q Key</strong> - Switch between weapons</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md border-2 border-orange-200">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">💡 Survival Tips</h4>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>Watch ahead and move forward</strong> if needed to see zombies and shoot to eliminate them. Manage your ammo and reload wisely, and switch between weapons to stay safe.
          </li>
          <li>
            <strong>Time your shots precisely</strong> and avoid firing too late, since this can result in the zombie reaching and harming you.
          </li>
          <li>
            <strong>Control the distance</strong>. The closer a zombie gets, the more dangerous it becomes. When they get too close, you may need to shoot rapidly or kick your foot to push them back.
          </li>
          <li>
            <strong>⚠️ Warning:</strong> If zombies touch you, they'll attack and end your game instantly!
          </li>
          <li>
            <strong>Upgrade and switch weapons</strong>. By clearing more corridors and surviving through levels, you'll earn in-game currency, which can be spent on new, better weapons to clear tougher zombies in later missions.
          </li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed font-semibold text-red-700">
        No chances to survive in Undead Corridor if you are too hesitant and let the zombies reach you easily. Try the game and see how many levels or corridors you can play through!
      </p>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { icon: '🎮', title: 'Multiple Game Modes', desc: 'Office, Hospital, Rooms, and Street environments' },
        { icon: '🧟', title: 'Diverse Zombie Types', desc: 'Face fast, tough, and aggressive undead enemies' },
        { icon: '🔫', title: 'Weapon Arsenal', desc: 'Purchase and upgrade powerful weapons' },
        { icon: '💰', title: 'Earn Currency', desc: 'Clear corridors to unlock better equipment' },
        { icon: '🎯', title: 'Precise Combat', desc: 'Aim carefully and manage your ammunition' },
        { icon: '⚡', title: 'Fast-Paced Action', desc: 'Quick reflexes required to survive' },
        { icon: '🩸', title: 'Gore Effects', desc: 'Intense visual effects and ragdoll physics' },
        { icon: '📈', title: 'Progressive Difficulty', desc: 'Increasingly challenging zombie waves' },
      ].map((feature, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow-md border-2 border-red-200 hover:border-red-400 transition-colors">
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

