'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function BikeXtremePage() {
  const game = {
    slug: 'bike-xtreme',
    title: 'Bike Xtreme',
    subtitle: 'Master the Ultimate Mountain Bike Challenge - Extreme 2D Racing Game',
    description: 'Bike Xtreme is an intense 2D mountain bike game where you conquer steep hills, tricky terrains, and dangerous slopes using skill, speed, and perfect balance to reach the finish line. Experience realistic physics simulation and dynamic terrains in this challenging yet rewarding gameplay adventure!',
    playUrl: 'https://game.azgame.io/bike-xtreme/',
    thumbnail: '/images/thumbnails/bike-xtreme.webp',
    rating: 5.0,
    playCount: 0,
    tags: ['Sports', 'Driving', 'Racing', 'Action', 'Casual', 'Physics', '2D', 'Arcade', 'Skill'],
    backgroundColor: 'from-green-500 via-lime-500 to-emerald-500',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-3xl">🚴</span>
          Conquer Extreme Mountain Trails in Bike Xtreme
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          <strong>Bike Xtreme</strong> is a challenging side-scrolling cycling game where your mission is to guide a skilled biker across unpredictable mountain trails. The gameplay is simple but demanding — one wrong move, and your biker will crash. With minimalist 2D graphics, black hill silhouettes, and smooth animations, <strong>Bike Xtreme</strong> focuses purely on skill and reaction. Each level introduces new terrain and obstacles, keeping you engaged from start to finish.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          In <strong>Bike Xtreme</strong>, you'll experience the thrill of navigating through lush jungles, rocky cliffs, and steep mountain passes. The game's realistic physics simulation makes every jump, landing, and wheelie feel authentic. Whether you're a casual player looking for quick gaming sessions or a hardcore gamer seeking to master every track, <strong>Bike Xtreme</strong> delivers an addictive experience that will keep you coming back for more.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          What sets <strong>Bike Xtreme</strong> apart from other bike racing games is its perfect balance between accessibility and challenge. The controls are intuitive enough for beginners to pick up quickly, yet the game offers enough depth to satisfy experienced players. Each course in <strong>Bike Xtreme</strong> is handcrafted with unique layouts, ramps, and surprises, ensuring no two rides feel the same.
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-lime-100 p-6 rounded-xl border-l-4 border-green-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🏔️</span>
          Gameplay—Master the Art of Balance
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The goal in <strong>Bike Xtreme</strong> is to reach the end of each course without crashing while maintaining balance on rough terrain. You must control your acceleration and body tilt carefully to keep the bike upright and moving forward. Timing and rhythm are key in <strong>Bike Xtreme</strong>. Over-accelerate, and you'll flip over. Go too slow, and you won't clear steep slopes. Mastering this balance is what makes <strong>Bike Xtreme</strong> so addictive.
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">⚡</span>
            <div>
              <h4 className="font-bold text-gray-800">Realistic Physics Simulation</h4>
              <p className="text-gray-600">Experience true-to-life biking dynamics in Bike Xtreme — every hill, jump, and drop demands precision and skill</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🌄</span>
            <div>
              <h4 className="font-bold text-gray-800">Dynamic Terrains</h4>
              <p className="text-gray-600">From lush jungles to rocky cliffs, Bike Xtreme offers varied environments that constantly test your adaptability</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🎯</span>
            <div>
              <h4 className="font-bold text-gray-800">Unique Level Design</h4>
              <p className="text-gray-600">Each track in Bike Xtreme is handcrafted with its own layout, ramps, and surprises</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🏆</span>
            <div>
              <h4 className="font-bold text-gray-800">Challenging Yet Rewarding</h4>
              <p className="text-gray-600">As you advance in Bike Xtreme, the difficulty increases, giving you a true sense of accomplishment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl border-l-4 border-blue-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🎮</span>
          Controls and Mechanics
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Bike Xtreme</strong> features simple yet precise controls that give you full command over your bike. The control scheme is designed to be intuitive while offering the depth needed for advanced techniques.
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">SPACE</span>
            <div>
              <h4 className="font-bold text-gray-800">Start the Game</h4>
              <p className="text-gray-600">Press Space to begin your Bike Xtreme adventure</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">↑</span>
            <div>
              <h4 className="font-bold text-gray-800">Accelerate</h4>
              <p className="text-gray-600">Use Up Arrow to speed up and gain momentum in Bike Xtreme</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">↓</span>
            <div>
              <h4 className="font-bold text-gray-800">Decelerate/Brake</h4>
              <p className="text-gray-600">Use Down Arrow to slow down or brake when needed</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">→</span>
            <div>
              <h4 className="font-bold text-gray-800">Lean Forward</h4>
              <p className="text-gray-600">Press Right Arrow to lean forward for a front wheelie in Bike Xtreme</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">←</span>
            <div>
              <h4 className="font-bold text-gray-800">Lean Backward</h4>
              <p className="text-gray-600">Press Left Arrow to lean backward for a rear wheelie</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <p className="text-lg text-gray-700 leading-relaxed">
        <strong>Bike Xtreme</strong> is easy to learn but challenging to master. Follow these steps to become a pro rider in <strong>Bike Xtreme</strong>:
      </p>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-500">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">📋</span>
          Step-by-Step Guide to Playing Bike Xtreme
        </h3>
        <ol className="space-y-4 list-decimal list-inside">
          <li className="text-gray-700">
            <strong>Start Your Engine:</strong> Press the Space bar to launch into your first <strong>Bike Xtreme</strong> challenge
          </li>
          <li className="text-gray-700">
            <strong>Control Your Speed:</strong> Use the Up Arrow to accelerate and Down Arrow to brake. In <strong>Bike Xtreme</strong>, speed management is crucial for success
          </li>
          <li className="text-gray-700">
            <strong>Master the Balance:</strong> Use Left and Right Arrows to adjust your bike's tilt. This is essential in <strong>Bike Xtreme</strong> for landing jumps and navigating steep slopes
          </li>
          <li className="text-gray-700">
            <strong>Navigate Obstacles:</strong> Each level in <strong>Bike Xtreme</strong> presents unique challenges. Study the terrain ahead and plan your approach
          </li>
          <li className="text-gray-700">
            <strong>Perform Stunts:</strong> Use wheelies and flips to showcase your mastery in <strong>Bike Xtreme</strong> while maintaining balance for style points
          </li>
          <li className="text-gray-700">
            <strong>Reach the Finish:</strong> Complete each course without crashing to unlock new levels in <strong>Bike Xtreme</strong>
          </li>
        </ol>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">💡</span>
          Pro Tips for Mastering Bike Xtreme
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">✓</span>
            <p className="text-gray-700">
              <strong>Maintain Balance:</strong> In <strong>Bike Xtreme</strong>, don't rely solely on speed; control your tilt for smoother landings
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">✓</span>
            <p className="text-gray-700">
              <strong>Slow Down on Steep Slopes:</strong> Precision matters more than acceleration in tricky sections of <strong>Bike Xtreme</strong>
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">✓</span>
            <p className="text-gray-700">
              <strong>Use Momentum Wisely:</strong> Build up speed before climbing tall hills in <strong>Bike Xtreme</strong>
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">✓</span>
            <p className="text-gray-700">
              <strong>Practice Makes Perfect:</strong> Learn how your bike reacts on each surface in <strong>Bike Xtreme</strong> for consistent performance
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">✓</span>
            <p className="text-gray-700">
              <strong>Study the Terrain:</strong> Look ahead in <strong>Bike Xtreme</strong> to anticipate upcoming obstacles and plan your moves
            </p>
          </li>
        </ul>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 hover:border-green-400 transition-all">
          <div className="text-4xl mb-3">⚡</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Realistic Physics Engine</h3>
          <p className="text-gray-700">
            <strong>Bike Xtreme</strong> features a sophisticated physics engine that simulates real mountain biking dynamics. Every jump, landing, and wheelie feels authentic and responsive.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all">
          <div className="text-4xl mb-3">🌍</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Diverse Environments</h3>
          <p className="text-gray-700">
            Explore varied terrains in <strong>Bike Xtreme</strong> from lush jungles to rocky mountain cliffs, each with unique challenges and visual aesthetics.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Handcrafted Levels</h3>
          <p className="text-gray-700">
            Each track in <strong>Bike Xtreme</strong> is carefully designed with unique layouts, obstacles, and surprises to keep gameplay fresh and exciting.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200 hover:border-yellow-400 transition-all">
          <div className="text-4xl mb-3">🎮</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Intuitive Controls</h3>
          <p className="text-gray-700">
            <strong>Bike Xtreme</strong> offers simple arrow key controls that are easy to learn but provide the depth needed for advanced techniques and stunts.
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border-2 border-red-200 hover:border-red-400 transition-all">
          <div className="text-4xl mb-3">🏆</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Progressive Difficulty</h3>
          <p className="text-gray-700">
            As you advance through <strong>Bike Xtreme</strong>, levels become increasingly challenging, providing a satisfying sense of progression and achievement.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-6 rounded-xl border-2 border-indigo-200 hover:border-indigo-400 transition-all">
          <div className="text-4xl mb-3">🎨</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Minimalist Graphics</h3>
          <p className="text-gray-700">
            <strong>Bike Xtreme</strong> features clean 2D graphics with smooth animations that focus on gameplay without unnecessary distractions.
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border-2 border-teal-200 hover:border-teal-400 transition-all">
          <div className="text-4xl mb-3">🚀</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Stunt System</h3>
          <p className="text-gray-700">
            Perform wheelies, flips, and other tricks in <strong>Bike Xtreme</strong> to showcase your skills while maintaining perfect balance.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-all">
          <div className="text-4xl mb-3">🌐</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Play Anywhere</h3>
          <p className="text-gray-700">
            <strong>Bike Xtreme</strong> is free to play online with no downloads required. Enjoy it on PC or mobile browsers anytime, anywhere.
          </p>
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

