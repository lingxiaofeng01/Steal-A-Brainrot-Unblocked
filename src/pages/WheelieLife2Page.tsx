'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function WheelieLife2Page() {
  const game = {
    slug: 'wheelie-life-2',
    title: 'Wheelie Life 2',
    subtitle: 'Master the Art of Wheelies - Ultimate Dirt Bike Stunt Simulator 2025',
    description: 'Wheelie Life 2 is an immersive online stunt game where you control a lightning-fast trial bike along a picturesque coastal road. Master the art of performing perfect wheelies, balance your bike through challenging terrains, and optimize your route to achieve the fastest lap times in this serene yet thrilling driving simulator experience.',
    playUrl: 'https://papas-games.io/wheelie-life-2.embed',
    thumbnail: '/images/thumbnails/wheelie-life-2.jpg',
    rating: 5.0,
    playCount: 0,
    tags: ['Sports', 'Racing', 'Bike', 'Stunt', 'Skill', 'Driving', 'Simulation', 'Arcade'],
    backgroundColor: 'from-blue-500 via-cyan-500 to-teal-400',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-3xl">🏍️</span>
          Experience the Ultimate Wheelie Challenge in Wheelie Life 2
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          <strong>Wheelie Life 2</strong> is an online stunt game where you control a dirt bike, exploring a variety of terrains to balance stunts while trying not to fall backwards. This immersive driving simulator offers players a serene and captivating experience as they take control of lightning-fast trial bikes along a picturesque coastal road. In <strong>Wheelie Life 2</strong>, the sense of solitude and focus creates the perfect environment for mastering the art of wheelies and precision driving.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          The main objective in <strong>Wheelie Life 2</strong> is to memorize the circuit and skillfully optimize your route to achieve the fastest lap time possible. With its laid-back gameplay and focus on precision driving, players can immerse themselves in the joy of performing wheelies and perfecting their skills on the road. Whether you're a casual gamer seeking relaxation or a competitive player aiming for the best lap times, <strong>Wheelie Life 2</strong> offers a delightful and captivating journey on two wheels.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          What makes <strong>Wheelie Life 2</strong> stand out from other bike stunt games is its perfect blend of relaxation and challenge. The game features stunning coastal scenery that creates a peaceful atmosphere, while the demanding wheelie mechanics keep you engaged and focused. Every moment in <strong>Wheelie Life 2</strong> is about finding that perfect balance between speed, control, and style as you navigate through diverse terrains and master increasingly difficult stunts.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          In <strong>Wheelie Life 2</strong>, you'll discover a unique gameplay experience that combines the thrill of motorcycle stunts with the meditative quality of a driving simulator. The game's realistic physics engine ensures that every wheelie feels authentic, requiring precise timing and control. As you progress through <strong>Wheelie Life 2</strong>, you'll develop an intuitive understanding of bike balance, momentum management, and terrain navigation that will help you achieve those coveted perfect runs.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl border-l-4 border-blue-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🌊</span>
          Gameplay—Master the Coastal Circuit
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The core gameplay of <strong>Wheelie Life 2</strong> revolves around mastering the art of the wheelie while navigating a beautiful coastal road. You must maintain perfect balance on your trial bike, adjusting your weight distribution and throttle control to keep the front wheel elevated without tipping backwards. The challenge in <strong>Wheelie Life 2</strong> lies in finding the sweet spot between aggressive acceleration and controlled balance, all while memorizing the circuit layout to optimize your lap times.
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">⚡</span>
            <div>
              <h4 className="font-bold text-gray-800">Realistic Wheelie Physics</h4>
              <p className="text-gray-600">Wheelie Life 2 features authentic bike physics that simulate real trial bike dynamics, making every wheelie feel genuine and rewarding</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🏖️</span>
            <div>
              <h4 className="font-bold text-gray-800">Scenic Coastal Environment</h4>
              <p className="text-gray-600">Ride along a picturesque coastal road in Wheelie Life 2, where stunning ocean views create a serene backdrop for your stunts</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🎯</span>
            <div>
              <h4 className="font-bold text-gray-800">Circuit Memorization Challenge</h4>
              <p className="text-gray-600">Learn every curve and terrain change in Wheelie Life 2 to optimize your route and achieve record lap times</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🏆</span>
            <div>
              <h4 className="font-bold text-gray-800">Time Trial Competition</h4>
              <p className="text-gray-600">Challenge yourself in Wheelie Life 2 to beat your personal best times and master the perfect run</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-100 to-green-100 p-6 rounded-xl border-l-4 border-teal-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🎮</span>
          Controls and Mechanics in Wheelie Life 2
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Wheelie Life 2</strong> features intuitive controls that are easy to learn but challenging to master. The control scheme is designed to give you precise command over your bike's balance and speed, allowing for both casual play and competitive time trials.
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">↑</span>
            <div>
              <h4 className="font-bold text-gray-800">Accelerate</h4>
              <p className="text-gray-600">Use Up Arrow or W to increase throttle and lift the front wheel in Wheelie Life 2</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">↓</span>
            <div>
              <h4 className="font-bold text-gray-800">Brake/Balance</h4>
              <p className="text-gray-600">Use Down Arrow or S to control your speed and prevent tipping backwards</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">→</span>
            <div>
              <h4 className="font-bold text-gray-800">Lean Forward</h4>
              <p className="text-gray-600">Press Right Arrow or D to shift weight forward and control your wheelie angle in Wheelie Life 2</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">←</span>
            <div>
              <h4 className="font-bold text-gray-800">Lean Backward</h4>
              <p className="text-gray-600">Press Left Arrow or A to lean back and maintain your wheelie balance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <p className="text-lg text-gray-700 leading-relaxed">
        <strong>Wheelie Life 2</strong> is designed to be accessible for beginners while offering depth for experienced players. Follow these steps to become a wheelie master in <strong>Wheelie Life 2</strong>:
      </p>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-500">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">📋</span>
          Step-by-Step Guide to Playing Wheelie Life 2
        </h3>
        <ol className="space-y-4 list-decimal list-inside">
          <li className="text-gray-700">
            <strong>Start Your Journey:</strong> Launch <strong>Wheelie Life 2</strong> and familiarize yourself with the coastal circuit layout
          </li>
          <li className="text-gray-700">
            <strong>Master the Wheelie:</strong> Use the Up Arrow to accelerate and lift your front wheel. In <strong>Wheelie Life 2</strong>, finding the right throttle balance is crucial
          </li>
          <li className="text-gray-700">
            <strong>Control Your Balance:</strong> Use Left and Right Arrows to adjust your weight distribution. This is the key to maintaining long wheelies in <strong>Wheelie Life 2</strong>
          </li>
          <li className="text-gray-700">
            <strong>Navigate Terrain Changes:</strong> The coastal road in <strong>Wheelie Life 2</strong> features various terrain types. Adapt your technique for each section
          </li>
          <li className="text-gray-700">
            <strong>Memorize the Circuit:</strong> Learn every curve, hill, and flat section in <strong>Wheelie Life 2</strong> to optimize your route and improve lap times
          </li>
          <li className="text-gray-700">
            <strong>Perfect Your Timing:</strong> Practice in <strong>Wheelie Life 2</strong> to develop muscle memory for the perfect wheelie angle and duration
          </li>
          <li className="text-gray-700">
            <strong>Chase the Best Time:</strong> Compete against your personal best in <strong>Wheelie Life 2</strong> and strive for that perfect lap
          </li>
        </ol>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">💡</span>
          Pro Tips for Mastering Wheelie Life 2
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">✓</span>
            <p className="text-gray-700">
              <strong>Start Slow:</strong> In <strong>Wheelie Life 2</strong>, begin with shorter wheelies to understand the physics before attempting longer stunts
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">✓</span>
            <p className="text-gray-700">
              <strong>Watch Your Speed:</strong> Too much throttle in <strong>Wheelie Life 2</strong> will cause you to flip backwards; find the sweet spot
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">✓</span>
            <p className="text-gray-700">
              <strong>Use Terrain to Your Advantage:</strong> Uphill sections in <strong>Wheelie Life 2</strong> make wheelies easier to maintain
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">✓</span>
            <p className="text-gray-700">
              <strong>Practice Circuit Sections:</strong> Break down the <strong>Wheelie Life 2</strong> circuit into segments and master each one individually
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">✓</span>
            <p className="text-gray-700">
              <strong>Stay Relaxed:</strong> The serene atmosphere of <strong>Wheelie Life 2</strong> is designed to help you focus; don't rush your progress
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">✓</span>
            <p className="text-gray-700">
              <strong>Learn from Mistakes:</strong> Every crash in <strong>Wheelie Life 2</strong> teaches you about balance and timing; use them to improve
            </p>
          </li>
        </ul>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all">
          <div className="text-4xl mb-3">🏍️</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Authentic Trial Bike Physics</h3>
          <p className="text-gray-700">
            <strong>Wheelie Life 2</strong> features a sophisticated physics engine that accurately simulates trial bike dynamics, making every wheelie feel realistic and satisfying.
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-green-50 p-6 rounded-xl border-2 border-teal-200 hover:border-teal-400 transition-all">
          <div className="text-4xl mb-3">🌊</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Beautiful Coastal Setting</h3>
          <p className="text-gray-700">
            Ride along a stunning coastal road in <strong>Wheelie Life 2</strong>, where ocean views and scenic landscapes create a peaceful yet engaging environment.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
          <div className="text-4xl mb-3">⏱️</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Time Trial Mode</h3>
          <p className="text-gray-700">
            Challenge yourself in <strong>Wheelie Life 2</strong> to achieve the fastest lap times by optimizing your route and perfecting your wheelie technique.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200 hover:border-yellow-400 transition-all">
          <div className="text-4xl mb-3">🎮</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Intuitive Controls</h3>
          <p className="text-gray-700">
            <strong>Wheelie Life 2</strong> offers simple arrow key controls that are easy to pick up but provide the precision needed for advanced stunts.
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border-2 border-red-200 hover:border-red-400 transition-all">
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Circuit Mastery System</h3>
          <p className="text-gray-700">
            Learn and memorize the circuit layout in <strong>Wheelie Life 2</strong> to discover optimal routes and achieve record-breaking lap times.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-6 rounded-xl border-2 border-indigo-200 hover:border-indigo-400 transition-all">
          <div className="text-4xl mb-3">🧘</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Relaxing Gameplay</h3>
          <p className="text-gray-700">
            <strong>Wheelie Life 2</strong> combines challenging mechanics with a serene atmosphere, perfect for both casual relaxation and focused practice.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 hover:border-green-400 transition-all">
          <div className="text-4xl mb-3">🏆</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Skill Progression</h3>
          <p className="text-gray-700">
            As you play <strong>Wheelie Life 2</strong>, you'll naturally develop better balance, timing, and circuit knowledge, leading to continuous improvement.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-all">
          <div className="text-4xl mb-3">🌐</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Play Anywhere</h3>
          <p className="text-gray-700">
            <strong>Wheelie Life 2</strong> is free to play online with no downloads required. Enjoy it on PC or mobile browsers anytime, anywhere.
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

