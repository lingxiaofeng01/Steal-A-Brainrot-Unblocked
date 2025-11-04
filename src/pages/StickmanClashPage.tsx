'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function StickmanClashPage() {
  const game = {
    slug: 'stickman-clash',
    title: 'Stickman Clash',
    subtitle: 'Chaotic and Dramatic Stickman Battle - Multiplayer Fighting Game',
    description: 'Stickman Clash is an action-packed fighting game bursting with excitement, where players become powerful stickman warriors and engage in chaotic yet hilarious battles full of drama. The game offers fast-paced gameplay, realistic physics, and a wide variety of weapons, delivering a unique surprise factor that no other fighting game can match!',
    playUrl: 'https://g2.igroutka.ru/lib/crazy/games/stickman-clash/',
    thumbnail: '/images/thumbnails/stickman-clash.png',
    rating: 5.0,
    playCount: 0,
    tags: ['Battle', 'Action', 'Arcade', 'Fighting', 'Stickman', '2D', '2 Player', '3 Player', 'Multiplayer', 'Physics', 'Casual'],
    backgroundColor: 'from-red-500 via-orange-500 to-yellow-500',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-3xl">🥊</span>
          Chaotic and Dramatic Stickman Battle
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          <strong>Stickman Clash</strong> is an action-packed fighting game bursting with excitement, where players become powerful stickman warriors and engage in chaotic yet hilarious battles full of drama. The game offers fast-paced gameplay, realistic physics, and a wide variety of weapons, delivering a unique surprise factor that no other fighting game can match!
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Experience the thrill of unpredictable combat where every jump, hit, and defense becomes surprisingly fun thanks to the innovative "floppy" physics mechanism. Whether you're battling in the depths of the ocean or in a world of gigantic monsters, each arena brings new challenges and excitement!
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl border-l-4 border-orange-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">⚔️</span>
          Gameplay—When Chaos Becomes Fun
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The "floppy" physics mechanism is the main feature of this game, and it can be considered the source of all the fun. Every jump, hit, or defense phase becomes very surprising and hilarious, making the battle full of surprises and fun.
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🎨</span>
            <div>
              <h4 className="font-bold text-gray-800">Personalize Your Character</h4>
              <p className="text-gray-600">Modify color and face, and select your preferred weapon to create your unique warrior</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🌊</span>
            <div>
              <h4 className="font-bold text-gray-800">Epic Battle Arenas</h4>
              <p className="text-gray-600">Fight in diverse locations from ocean depths to worlds of gigantic monsters</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🔫</span>
            <div>
              <h4 className="font-bold text-gray-800">Amazing Arsenal</h4>
              <p className="text-gray-600">Test out weapons from primitive boxing gloves and katana swords to electric guitars, explosives, and cosmic portal guns!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl border-l-4 border-blue-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🎮</span>
          Game Modes
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span className="text-xl">💀</span>
              Survival Mode
            </h4>
            <p className="text-gray-700">
              Gather your buddies and take part in the fight against the infinite number of monsters. Use bombs wisely to take out multiple enemies at once without harming your allies. Teamwork is essential for survival!
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span className="text-xl">👹</span>
              Boss Fight
            </h4>
            <p className="text-gray-700">
              Confront giant bosses, especially extremely dangerous pickaxe-wielding bosses. It is essential to have accurate dodges and to launch your counterattacks at the precise moments. This is the stage where both your capabilities and teamwork are most clear!
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <p className="text-lg text-gray-700 leading-relaxed">
        <strong>Stickman Clash</strong>'s gameplay is easy to pick up but requires skill and quick reflexes to win. The game supports 1-2 players currently, with 3-4 player support coming in future updates!
      </p>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🎮</span>
          Player 1 Controls
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <span className="font-bold text-purple-600">W</span> - Jump
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <span className="font-bold text-purple-600">A</span> - Move Back
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <span className="font-bold text-purple-600">S</span> - Shield
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <span className="font-bold text-purple-600">D</span> - Move Forward
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl border-l-4 border-green-500">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🎮</span>
          Player 2 Controls
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <span className="font-bold text-green-600">↑</span> - Jump
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <span className="font-bold text-green-600">←</span> - Move Forward
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <span className="font-bold text-green-600">↓</span> - Shield
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <span className="font-bold text-green-600">→</span> - Move Back
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-l-4 border-orange-500">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🎮</span>
          Player 3 Controls (Coming Soon)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <span className="font-bold text-orange-600">I</span> - Jump
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <span className="font-bold text-orange-600">J</span> - Move Forward
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <span className="font-bold text-orange-600">K</span> - Shield
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <span className="font-bold text-orange-600">L</span> - Move Back
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-xl border-l-4 border-yellow-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">💡</span>
          Tips To Win Easily
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-yellow-600 font-bold">•</span>
            <span><strong>Always be on the move</strong> - Static targets are easy prey!</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-600 font-bold">•</span>
            <span><strong>Use the environment to your advantage</strong> - Terrain can be your best friend</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-600 font-bold">•</span>
            <span><strong>Hit it at the right moment</strong> - Timing is everything in combat</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-600 font-bold">•</span>
            <span><strong>Try out different firearms</strong> - Each weapon has unique advantages</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { icon: '🎭', title: 'Hilarious Physics', desc: 'Floppy physics system creates unpredictable and funny moments' },
        { icon: '⚔️', title: 'Diverse Weapons', desc: 'From boxing gloves to portal guns - endless combat possibilities' },
        { icon: '👥', title: 'Multiplayer Battles', desc: 'Fight with friends in 1v1, 2v2, or upcoming 3-4 player modes' },
        { icon: '🌍', title: 'Epic Arenas', desc: 'Battle in unique locations from ocean depths to monster worlds' },
        { icon: '🎨', title: 'Character Customization', desc: 'Personalize your stickman with colors, faces, and weapons' },
        { icon: '💀', title: 'Survival Mode', desc: 'Team up to fight infinite waves of monsters' },
        { icon: '👹', title: 'Boss Battles', desc: 'Face off against giant bosses requiring skill and teamwork' },
        { icon: '🎮', title: 'Easy Controls', desc: 'Simple keyboard controls that anyone can master' },
        { icon: '⚡', title: 'Fast-Paced Action', desc: 'Quick matches full of excitement and surprises' },
        { icon: '🆓', title: 'Free to Play', desc: 'Completely free browser-based game, no downloads required' },
      ].map((feature, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow-md border-2 border-orange-200 hover:border-orange-400 transition-colors">
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

