'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function PlatformCookPage() {
  const game = {
    slug: 'platform-cook',
    title: 'Platform Cook',
    subtitle: 'The Ultimate Reflex-Testing Culinary Challenge - Master the Kitchen Platformer 2025',
    description: 'Platform Cook is an exciting action platformer game where you control a skilled chef navigating treacherous platforms to collect delicious cakes and serve hungry customers. Test your reflexes, master precise jumps, and survive challenging levels filled with lava pits and flying obstacles in this fast-paced culinary adventure.',
    playUrl: 'https://st.8games.net/11/igra-platforma-s-povarom',
    thumbnail: '/images/thumbnails/platform-cook.png',
    rating: 5.0,
    playCount: 0,
    tags: ['Puzzle', 'Action', 'Platformer', 'Skill', 'Arcade', 'Cooking', 'Casual'],
    backgroundColor: 'from-orange-500 via-red-500 to-pink-400',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-3xl">👨‍🍳</span>
          Experience the Ultimate Culinary Platformer in Platform Cook
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          <strong>Platform Cook</strong> is an exhilarating action platformer game that combines the thrill of precision jumping with the excitement of culinary challenges. In <strong>Platform Cook</strong>, you take control of a talented chef character distinguished by their iconic white chef's hat, navigating through increasingly difficult levels filled with dangerous obstacles and delicious rewards. This unique game tests your reflexes, strategic thinking, and timing skills as you collect cakes and serve demanding customers across multiple challenging stages.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          The core gameplay of <strong>Platform Cook</strong> revolves around two distinct phases: the Lower Floor collection phase and the Upper Floor confrontation phase. On the Lower Floor in <strong>Platform Cook</strong>, your primary objective is to gather all the cakes and food items scattered across treacherous purple square platforms before the countdown timer expires. Each level in <strong>Platform Cook</strong> presents a unique layout of platforms, requiring you to plan your route carefully while avoiding deadly lava pits and dodging flying projectiles that can instantly end your run.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          What makes <strong>Platform Cook</strong> truly engaging is its risk-reward system. The game features a cookie-shaped progress bar that tracks your collection success, and failing to collect enough food on the Lower Floor has serious consequences. When you advance to the Upper Floor in <strong>Platform Cook</strong>, you'll face hungry customers who expect to be served. If you haven't collected sufficient food items during the Lower Floor phase, you'll be quickly defeated when confronting these demanding patrons, adding a layer of strategic pressure to every jump and movement you make in <strong>Platform Cook</strong>.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          The platforming mechanics in <strong>Platform Cook</strong> are designed to be intuitive yet challenging. You must master the art of precise jumping across purple square platforms, timing your movements perfectly to avoid touching the scorching lava below. The game's physics engine in <strong>Platform Cook</strong> ensures that every jump feels responsive and fair, rewarding skilled players who can maintain their composure under pressure while navigating through increasingly complex obstacle courses.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          As you progress through <strong>Platform Cook</strong>, you'll encounter various types of obstacles that test different aspects of your gaming skills. Flying projectiles require quick reflexes and pattern recognition, while the layout of platforms demands strategic route planning. The countdown timer in <strong>Platform Cook</strong> adds urgency to every decision, forcing you to balance speed with caution as you collect food items and navigate toward the Upper Floor confrontation.
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-l-4 border-orange-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🎮</span>
          Gameplay Mechanics—Master the Kitchen Platforms
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The gameplay in <strong>Platform Cook</strong> is divided into distinct phases that each require different skills and strategies. Understanding these mechanics is crucial for success in <strong>Platform Cook</strong> and will help you become a master chef platformer.
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🍰</span>
            <div>
              <h4 className="font-bold text-gray-800">Lower Floor Collection Phase</h4>
              <p className="text-gray-600">In Platform Cook, navigate purple platforms to collect all cakes and food items before the timer runs out. Your progress is tracked by a cookie-shaped bar.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🔥</span>
            <div>
              <h4 className="font-bold text-gray-800">Deadly Lava Obstacles</h4>
              <p className="text-gray-600">Avoid touching the lava pits in Platform Cook at all costs. One touch means instant failure and you'll lose a precious life.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">💨</span>
            <div>
              <h4 className="font-bold text-gray-800">Flying Projectile Hazards</h4>
              <p className="text-gray-600">Dodge flying obstacles in Platform Cook using quick reflexes and pattern recognition to survive each level.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">👥</span>
            <div>
              <h4 className="font-bold text-gray-800">Upper Floor Customer Confrontation</h4>
              <p className="text-gray-600">Face hungry customers on the Upper Floor in Platform Cook. Insufficient food collection leads to quick defeat in this challenging phase.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">⏱️</span>
            <div>
              <h4 className="font-bold text-gray-800">Time Pressure System</h4>
              <p className="text-gray-600">Platform Cook features countdown timers that add urgency to your collection efforts, forcing strategic decision-making.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-xl border-l-4 border-pink-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🎯</span>
          Strategic Tips for Platform Cook Success
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Mastering <strong>Platform Cook</strong> requires more than just quick reflexes. Here are essential strategies to help you excel in <strong>Platform Cook</strong> and conquer even the most challenging levels.
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">✓</span>
            <p className="text-gray-700">
              <strong>Plan Your Route:</strong> Before rushing in Platform Cook, survey the platform layout and identify the most efficient path to collect all food items.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">✓</span>
            <p className="text-gray-700">
              <strong>Watch the Timer:</strong> Keep an eye on the countdown in Platform Cook and adjust your speed accordingly to ensure you collect everything in time.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">✓</span>
            <p className="text-gray-700">
              <strong>Master Jump Timing:</strong> Practice precise jumping in Platform Cook to land safely on purple platforms without overshooting into lava.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">✓</span>
            <p className="text-gray-700">
              <strong>Learn Projectile Patterns:</strong> Flying obstacles in Platform Cook often follow predictable patterns. Study them to find safe windows for movement.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">✓</span>
            <p className="text-gray-700">
              <strong>Prioritize Collection:</strong> In Platform Cook, collecting all food items is crucial for Upper Floor success. Don't rush to advance prematurely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <p className="text-lg text-gray-700 leading-relaxed">
        <strong>Platform Cook</strong> features intuitive controls that are easy to learn but challenging to master. Follow this comprehensive guide to become a culinary platforming expert in <strong>Platform Cook</strong>:
      </p>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-500">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">📋</span>
          Step-by-Step Guide to Playing Platform Cook
        </h3>
        <ol className="space-y-4 list-decimal list-inside">
          <li className="text-gray-700">
            <strong>Start on the Lower Floor:</strong> Begin each level of <strong>Platform Cook</strong> by assessing the platform layout and identifying all food items to collect
          </li>
          <li className="text-gray-700">
            <strong>Control Your Chef:</strong> Use arrow keys or WASD to move your chef character in <strong>Platform Cook</strong>, jumping across purple square platforms
          </li>
          <li className="text-gray-700">
            <strong>Collect All Food Items:</strong> Gather every cake and food item on the Lower Floor in <strong>Platform Cook</strong> before the countdown timer expires
          </li>
          <li className="text-gray-700">
            <strong>Avoid Deadly Hazards:</strong> Stay away from lava pits and dodge flying projectiles in <strong>Platform Cook</strong> to preserve your lives
          </li>
          <li className="text-gray-700">
            <strong>Monitor Your Progress:</strong> Watch the cookie-shaped progress bar in <strong>Platform Cook</strong> to track your collection success
          </li>
          <li className="text-gray-700">
            <strong>Advance to Upper Floor:</strong> Once you've collected sufficient food in <strong>Platform Cook</strong>, proceed to face the hungry customers
          </li>
          <li className="text-gray-700">
            <strong>Serve the Customers:</strong> Successfully complete the Upper Floor confrontation in <strong>Platform Cook</strong> to advance to the next level
          </li>
          <li className="text-gray-700">
            <strong>Master Each Stage:</strong> Progress through increasingly difficult levels in <strong>Platform Cook</strong>, each with unique platform layouts and obstacles
          </li>
        </ol>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-500">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🎮</span>
          Controls for Platform Cook
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">←→</span>
            <div>
              <h4 className="font-bold text-gray-800">Move Left/Right</h4>
              <p className="text-gray-600">Use Arrow Keys or A/D to move your chef horizontally across platforms in Platform Cook</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">↑</span>
            <div>
              <h4 className="font-bold text-gray-800">Jump</h4>
              <p className="text-gray-600">Press Up Arrow or W to jump across platforms and avoid obstacles in Platform Cook</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">Space</span>
            <div>
              <h4 className="font-bold text-gray-800">Action/Collect</h4>
              <p className="text-gray-600">Use Spacebar to interact with food items and collect cakes in Platform Cook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-200 hover:border-orange-400 transition-all">
          <div className="text-4xl mb-3">👨‍🍳</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Unique Chef Character</h3>
          <p className="text-gray-700">
            Control the agile Cook character with the iconic white chef's hat in <strong>Platform Cook</strong>, featuring responsive movement and precise jumping mechanics.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl border-2 border-pink-200 hover:border-pink-400 transition-all">
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Two-Phase Level Design</h3>
          <p className="text-gray-700">
            Experience the innovative Lower Floor and Upper Floor system in <strong>Platform Cook</strong>, each requiring different strategies and skills to master.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200 hover:border-yellow-400 transition-all">
          <div className="text-4xl mb-3">🍰</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Collectible Food System</h3>
          <p className="text-gray-700">
            Gather delicious cakes and food items throughout each level of <strong>Platform Cook</strong>, tracked by an intuitive cookie-shaped progress bar.
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border-2 border-red-200 hover:border-red-400 transition-all">
          <div className="text-4xl mb-3">🔥</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Challenging Obstacles</h3>
          <p className="text-gray-700">
            Navigate deadly lava pits and dodge flying projectiles in <strong>Platform Cook</strong>, testing your reflexes and timing skills at every turn.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all">
          <div className="text-4xl mb-3">⏱️</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Time-Based Challenges</h3>
          <p className="text-gray-700">
            Race against countdown timers in <strong>Platform Cook</strong>, adding urgency and excitement to your food collection missions.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
          <div className="text-4xl mb-3">🏆</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Progressive Difficulty</h3>
          <p className="text-gray-700">
            Advance through increasingly challenging stages in <strong>Platform Cook</strong>, each with unique platform layouts and obstacle patterns.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 hover:border-green-400 transition-all">
          <div className="text-4xl mb-3">🎮</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Intuitive Controls</h3>
          <p className="text-gray-700">
            <strong>Platform Cook</strong> features simple, responsive controls that are easy to learn but provide depth for skilled platforming gameplay.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-all">
          <div className="text-4xl mb-3">🌐</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Play Anywhere Free</h3>
          <p className="text-gray-700">
            Enjoy <strong>Platform Cook</strong> completely free online with no downloads required. Play on PC or mobile browsers anytime, anywhere.
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

