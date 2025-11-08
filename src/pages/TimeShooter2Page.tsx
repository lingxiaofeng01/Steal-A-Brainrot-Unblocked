'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function TimeShooter2Page() {
  const game = {
    slug: 'time-shooter-2',
    title: 'Time Shooter 2',
    subtitle: 'Master Time Control in This Epic Slow-Motion FPS Battle',
    description: 'Time Shooter 2 is an intense first-person shooter that combines strategy, precision, and slow-motion combat. Inspired by SuperHot, this action-packed game challenges your reflexes and tactical thinking as time freezes when you stand still—and only flows when you move. Every step and shot counts in this unique world of frozen chaos.',
    playUrl: 'https://html5.gamedistribution.com/rvvASMiM/62a72f2da7cb4b609579a47653546e6a/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2hvdGdhbWVzLmlvLyIsInBhcmVudERvbWFpbiI6ImhvdGdhbWVzLmlvIiwidG9wRG9tYWluIjoiaG90Z2FtZXMuaW8iLCJoYXNJbXByZXNzaW9uIjp0cnVlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE4In0%253D',
    thumbnail: '/images/thumbnails/time-shooter-2.webp',
    rating: 5.0,
    playCount: 0,
    tags: ['Shooting', 'Action', 'FPS', '3D', 'Strategy', 'Skill', 'Time Control', 'Slow Motion'],
    backgroundColor: 'from-red-500 via-orange-500 to-yellow-500',
  };

  const aboutContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">About Time Shooter 2</h2>
      
      <p className="text-gray-700 leading-relaxed">
        <strong>Time Shooter 2</strong> is an intense first-person shooter that combines strategy, precision, and slow-motion combat. Inspired by SuperHot, this action-packed game challenges your reflexes and tactical thinking as time freezes when you stand still—and only flows when you move. Every step and shot counts in this unique world of frozen chaos.
      </p>

      <p className="text-gray-700 leading-relaxed">
        In <strong>Time Shooter 2</strong>, you control both space and time. The rule is simple: time only moves when you move. This allows you to plan your actions, anticipate enemy attacks, and react with perfect timing. You'll face armed opponents scattered across futuristic levels—some equipped with pistols, others with rifles or melee weapons. Every object can be turned into a weapon, giving you endless creative ways to eliminate threats.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Watch bullets hang in midair, analyze their trajectory, and decide your next move. Should you dodge, shoot, or throw something nearby? It's all up to your timing and awareness. <strong>Time Shooter 2</strong> transforms every encounter into a strategic puzzle where patience and precision are your greatest assets.
      </p>

      <p className="text-gray-700 leading-relaxed">
        The game features minimalist visuals with a striking color palette that emphasizes the slow-motion mechanics. Enemies shatter into polygons when defeated, creating a satisfying visual feedback loop. Each level in <strong>Time Shooter 2</strong> presents new challenges, from tight corridors to open arenas, forcing you to adapt your tactics constantly.
      </p>

      <p className="text-gray-700 leading-relaxed">
        What makes <strong>Time Shooter 2</strong> truly special is its accessibility combined with depth. Anyone can understand the core mechanic within seconds, but mastering the game requires practice, spatial awareness, and quick decision-making. Whether you're dodging a hail of bullets or planning a multi-kill combo, every moment feels cinematic and empowering.
      </p>

      <p className="text-gray-700 leading-relaxed">
        The game also includes temporary power-ups that can be unlocked by watching ads, such as invulnerability shields or unlimited ammunition. These boosts add variety to your playstyle and help you overcome particularly challenging sections. However, the true satisfaction in <strong>Time Shooter 2</strong> comes from mastering the time-control mechanics and clearing levels through pure skill.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Game Mechanics and Physics</h3>
      
      <p className="text-gray-700 leading-relaxed">
        The physics engine in <strong>Time Shooter 2</strong> is finely tuned to create realistic bullet trajectories and object interactions. When you throw a weapon or object, it follows a natural arc that you can predict and use to your advantage. Bullets travel in straight lines, allowing you to calculate safe zones and plan your movements accordingly.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Enemy AI in <strong>Time Shooter 2</strong> is designed to be challenging but fair. Opponents will aim at your last known position, giving you opportunities to outmaneuver them. Some enemies are more aggressive, rushing toward you with melee weapons, while others prefer to keep their distance and shoot from cover. Understanding these behavior patterns is key to success.
      </p>

      <p className="text-gray-700 leading-relaxed">
        The level design in <strong>Time Shooter 2</strong> encourages experimentation. You'll find various objects scattered throughout each stage—bottles, tools, weapons—all of which can be picked up and thrown. Sometimes the best strategy is to disarm an enemy by throwing an object at them, then using their own weapon against them.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Visual and Audio Design</h3>
      
      <p className="text-gray-700 leading-relaxed">
        <strong>Time Shooter 2</strong> features a minimalist art style that puts gameplay first. The clean geometric shapes and bold colors make it easy to identify threats and objects at a glance. The slow-motion effect is enhanced by subtle visual cues, such as motion blur and particle effects, that emphasize the passage of time.
      </p>

      <p className="text-gray-700 leading-relaxed">
        The sound design complements the visual style perfectly. Gunshots echo with satisfying weight, and the shattering of defeated enemies creates a rhythmic feedback loop. The audio cues in <strong>Time Shooter 2</strong> also help you track enemy positions, making sound an important tactical tool.
      </p>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">How to Play Time Shooter 2</h2>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Basic Controls</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="font-bold mr-3 text-orange-600">🖱️ Mouse Movement:</span>
            <span>Look around and aim at enemies. Time flows when you move your mouse.</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-3 text-orange-600">WASD Keys:</span>
            <span>Move forward, backward, left, and right. Movement causes time to flow.</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-3 text-orange-600">Left Click:</span>
            <span>Shoot your weapon or throw objects at enemies.</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-3 text-orange-600">Right Click:</span>
            <span>Pick up weapons and objects from the environment.</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-3 text-orange-600">Stand Still:</span>
            <span>Freeze time completely to analyze the situation and plan your next move.</span>
          </li>
        </ul>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg mt-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Gameplay Strategy</h3>
        <ol className="space-y-3 text-gray-700 list-decimal list-inside">
          <li><strong>Observe First:</strong> When entering a new area in <strong>Time Shooter 2</strong>, stand still to freeze time and survey all enemy positions.</li>
          <li><strong>Plan Your Route:</strong> Identify cover points and safe paths before making your move.</li>
          <li><strong>Watch Bullet Trajectories:</strong> When enemies shoot, you can see the bullets in slow motion. Calculate safe zones to dodge.</li>
          <li><strong>Use the Environment:</strong> Pick up and throw objects to disarm or eliminate enemies from a distance.</li>
          <li><strong>Prioritize Threats:</strong> Take down enemies with long-range weapons first, as they pose the greatest danger.</li>
          <li><strong>Stay Mobile:</strong> Don't stay in one place too long. Keep moving to avoid getting surrounded in <strong>Time Shooter 2</strong>.</li>
          <li><strong>Conserve Ammo:</strong> Ammunition is limited. Make every shot count or use thrown objects when possible.</li>
        </ol>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg mt-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Advanced Techniques</h3>
        <ul className="space-y-3 text-gray-700">
          <li><strong>Bullet Dodging:</strong> Move perpendicular to incoming bullets for the safest dodge in <strong>Time Shooter 2</strong>.</li>
          <li><strong>Weapon Switching:</strong> Pick up better weapons from defeated enemies to increase your firepower.</li>
          <li><strong>Object Throwing:</strong> Thrown objects can stun enemies, giving you time to close the distance or escape.</li>
          <li><strong>Corner Peeking:</strong> Use corners to limit enemy line of sight while you pick them off one by one.</li>
          <li><strong>Multi-Kill Combos:</strong> Line up shots to eliminate multiple enemies with a single bullet path.</li>
        </ul>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Game Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-3 text-orange-600">⏱️ Unique Time Control</h3>
          <p className="text-gray-700">
            <strong>Time Shooter 2</strong> features innovative time-control mechanics where time only moves when you move. This creates a strategic gameplay experience unlike any other FPS.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-3 text-orange-600">🎯 Strategic Combat</h3>
          <p className="text-gray-700">
            Every encounter in <strong>Time Shooter 2</strong> is a tactical puzzle. Plan your moves, anticipate enemy actions, and execute with precision.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-3 text-orange-600">🎨 Minimalist Visuals</h3>
          <p className="text-gray-700">
            Clean geometric art style with bold colors makes <strong>Time Shooter 2</strong> easy to read and visually striking.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-3 text-orange-600">🔫 Varied Weapons</h3>
          <p className="text-gray-700">
            Use pistols, rifles, shotguns, and even thrown objects. Every weapon in <strong>Time Shooter 2</strong> has unique characteristics.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-3 text-orange-600">🏆 Challenging Levels</h3>
          <p className="text-gray-700">
            Progress through increasingly difficult stages in <strong>Time Shooter 2</strong>, each with unique layouts and enemy configurations.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-3 text-orange-600">💪 Power-Up System</h3>
          <p className="text-gray-700">
            Unlock temporary boosts like invulnerability and unlimited ammo to overcome tough challenges in <strong>Time Shooter 2</strong>.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-3 text-orange-600">🎮 Easy to Learn</h3>
          <p className="text-gray-700">
            Simple controls and intuitive mechanics make <strong>Time Shooter 2</strong> accessible to players of all skill levels.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-3 text-orange-600">🌟 Satisfying Feedback</h3>
          <p className="text-gray-700">
            Enemies shatter into polygons, creating a rewarding visual and audio experience in <strong>Time Shooter 2</strong>.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6 mt-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Why Play Time Shooter 2?</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Time Shooter 2</strong> offers a unique blend of action and strategy that sets it apart from traditional FPS games. The time-control mechanic transforms every firefight into a cerebral challenge where quick thinking and spatial awareness are just as important as fast reflexes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Whether you're a fan of tactical shooters or just looking for something different, <strong>Time Shooter 2</strong> delivers an experience that's both accessible and deeply satisfying. The minimalist aesthetic keeps you focused on the gameplay, while the slow-motion mechanics create cinematic moments that make you feel like an action movie hero.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Best of all, <strong>Time Shooter 2</strong> is completely free to play in your browser. No downloads, no installations—just pure, unfiltered tactical action. Jump in now and discover why <strong>Time Shooter 2</strong> has become a favorite among FPS enthusiasts worldwide!
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

