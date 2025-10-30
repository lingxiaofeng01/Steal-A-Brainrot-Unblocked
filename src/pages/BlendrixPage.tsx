'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function BlendrixPage() {
  const game = {
    slug: 'blendrix',
    title: 'Blendrix',
    subtitle: 'Connect Colored Dots and Unify the Grid in This Minimalist Puzzle Challenge',
    description: 'Blendrix is a minimalist puzzle game that challenges your logical reasoning, focus, and patience. Connect colored dots to transform the entire grid into one unified color through increasingly complex levels.',
    playUrl: 'https://gamea.azgame.io/blendrix/',
    thumbnail: '/images/thumbnails/blendrix.png',
    rating: 4.2,
    playCount: 113,
    tags: ['Puzzle', 'Casual', 'Logic', 'Brain Teaser', 'Strategy', 'Minimalist', 'Kids'],
    backgroundColor: 'from-purple-500 via-pink-400 to-rose-400',
  };

  const aboutContent = (
    <>
      <p className="text-lg leading-relaxed">
        <strong>Blendrix</strong> is a captivating minimalist puzzle game that puts your logical reasoning, focus, and patience to the ultimate test. In this beautifully designed color-matching challenge, your mission is simple yet increasingly complex: connect and transform every dot on the grid into the same color. With dozens of unique levels, each presenting fresh layouts and new mechanics, Blendrix delivers a puzzle experience that's both relaxing and mentally stimulating.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">🎮 What is Blendrix?</h2>
      <p className="leading-relaxed">
        Blendrix is a minimalist puzzle game focused on connecting colored dots to make them all one unified color. The game includes dozens of levels, each presenting a unique grid of colored dots arranged in layouts that vary in shape and size. This design ensures that every level delivers a fresh challenge, making sure no two stages ever feel the same.
      </p>
      <p className="leading-relaxed mt-4">
        As you progress through the game, new levels introduce new dot types with unique behaviors, such as directional dots, that bring fresh twists and deeper strategy to your puzzle solving. The first levels are often easy, featuring basic dot connections designed to introduce key mechanics. But be ready—things get tougher as you advance, with trickier layouts and more dot types appearing in higher levels.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">🧩 How to Play Blendrix</h2>
      <p className="leading-relaxed">
        Your goal in Blendrix is to link dots of the same color by drawing lines between them. You complete a level and unlock the next one when the whole grid fills with dots of a single color. Here's how to master the game:
      </p>

      <div className="bg-white rounded-xl p-6 my-6 border-2 border-purple-300">
        <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Core Gameplay Mechanics</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">1. Draw Lines to Connect Dots</h4>
            <p className="text-gray-700">
              Click and drag to draw a line connecting dots of the same color. Dots in between instantly change color as part of the connection. Remember this crucial rule: you can only draw a line between two same-colored dots if the dots in between are all of just one other color.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-2">2. Continue Connecting Until Unified</h4>
            <p className="text-gray-700">
              Keep recoloring the dots by drawing lines, gradually making all dots a single unified color to complete the level. There's no time limit, so don't rush. Instead, plan your moves strategically to finish each level with as few lines drawn as possible.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-2">3. Use Undo When Needed</h4>
            <p className="text-gray-700">
              If you make a mistake, use the undo feature to backtrack step by step, instead of restarting the level. This makes experimenting with different connection patterns much smoother and simpler.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">⭐ Game Features</h2>
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <span className="text-2xl">🎨</span>
            Minimalist Design
          </h3>
          <p className="text-gray-700">
            Clean, beautiful interface with smooth animations and calming color palettes that make puzzle-solving a visual pleasure.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border-2 border-pink-300">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <span className="text-2xl">🧠</span>
            Progressive Difficulty
          </h3>
          <p className="text-gray-700">
            Start with simple connections and gradually face more complex grids with unique dot types and challenging layouts.
          </p>
        </div>

        <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-xl p-6 border-2 border-rose-300">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            Dozens of Unique Levels
          </h3>
          <p className="text-gray-700">
            Each level features a unique grid layout with varying shapes and sizes, ensuring fresh challenges throughout your journey.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-2 border-orange-300">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <span className="text-2xl">🔄</span>
            Undo Feature
          </h3>
          <p className="text-gray-700">
            Experiment freely with the undo button—backtrack step by step without restarting, making strategy exploration smooth.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-xl p-6 border-2 border-yellow-300">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <span className="text-2xl">⏱️</span>
            No Time Pressure
          </h3>
          <p className="text-gray-700">
            Take your time to think and plan your moves. No timers or rush—just pure logical puzzle-solving at your own pace.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-xl p-6 border-2 border-green-300">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <span className="text-2xl">🎲</span>
            Special Dot Types
          </h3>
          <p className="text-gray-700">
            Discover directional dots and other unique mechanics that add strategic depth and variety to later levels.
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-cyan-300">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <span className="text-2xl">🎮</span>
            Intuitive Controls
          </h3>
          <p className="text-gray-700">
            Simple click-and-drag mechanics make the game accessible to players of all ages and skill levels.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-300">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <span className="text-2xl">🧘</span>
            Relaxing Yet Challenging
          </h3>
          <p className="text-gray-700">
            Perfect balance of calming gameplay and brain-teasing puzzles that keep you engaged without stress.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">💡 Tips and Strategies</h2>
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300 my-6">
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-xl">🎯</span>
            <span><strong>Plan Ahead:</strong> Before making your first move, analyze the entire grid to identify the most efficient connection sequence.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🔍</span>
            <span><strong>Start from Corners:</strong> Often, connecting dots from the edges or corners first can simplify the rest of the puzzle.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🎨</span>
            <span><strong>Color Priority:</strong> Identify which color appears most frequently and consider making it your target unified color.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🔄</span>
            <span><strong>Use Undo Liberally:</strong> Don't be afraid to experiment—the undo feature lets you try different approaches without penalty.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🧩</span>
            <span><strong>Minimize Moves:</strong> Challenge yourself to complete levels with the fewest possible connections for maximum satisfaction.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">⚡</span>
            <span><strong>Learn Special Dots:</strong> Pay attention to how directional and special dots behave to use them effectively in your strategy.</span>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">🎯 Why Play Blendrix?</h2>
      <p className="leading-relaxed">
        Blendrix is not just another puzzle game—it's a carefully crafted experience that combines elegant minimalist design with genuinely challenging gameplay. Whether you're looking for a quick mental workout during a break or a longer puzzle-solving session, Blendrix adapts to your pace. The game's progressive difficulty ensures that beginners can learn the mechanics comfortably while experienced puzzle enthusiasts will find plenty of brain-teasing challenges in the later levels.
      </p>
      <p className="leading-relaxed mt-4">
        The absence of time limits creates a stress-free environment where you can focus purely on logical thinking and strategy. The satisfying feeling of watching the grid transform into a single unified color, combined with the smooth animations and beautiful color schemes, makes every completed level a rewarding experience.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">🌟 Perfect For</h2>
      <div className="grid md:grid-cols-3 gap-4 my-6">
        <div className="bg-white rounded-xl p-4 border-2 border-purple-300 text-center">
          <div className="text-3xl mb-2">🧠</div>
          <h3 className="font-bold text-gray-800 mb-2">Puzzle Lovers</h3>
          <p className="text-sm text-gray-700">Fans of logic puzzles and brain teasers</p>
        </div>
        <div className="bg-white rounded-xl p-4 border-2 border-pink-300 text-center">
          <div className="text-3xl mb-2">😌</div>
          <h3 className="font-bold text-gray-800 mb-2">Casual Gamers</h3>
          <p className="text-sm text-gray-700">Perfect for relaxing gaming sessions</p>
        </div>
        <div className="bg-white rounded-xl p-4 border-2 border-rose-300 text-center">
          <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
          <h3 className="font-bold text-gray-800 mb-2">All Ages</h3>
          <p className="text-sm text-gray-700">Family-friendly gameplay for everyone</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-rose-100 rounded-xl p-6 border-2 border-purple-400 mt-8">
        <p className="text-lg font-semibold text-gray-800 text-center">
          🎮 Ready to test your logical thinking? Play Blendrix now on Azgames.io and conquer all the colorful puzzle challenges! Think fast, connect smart, and unify the grid in this addictive minimalist puzzle adventure! 🌈✨
        </p>
      </div>
    </>
  );

  const howToPlayContent = (
    <div className="space-y-4">
      <p className="leading-relaxed">
        <strong>Controls:</strong> Click or tap and drag between dots to draw lines.
      </p>
      <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-300">
        <h3 className="font-bold text-gray-800 mb-3">🎮 Step-by-Step Guide:</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Observe the grid and identify dots of the same color</li>
          <li>Click and drag to connect two dots of the same color</li>
          <li>Watch as the dots in between change to match the connection</li>
          <li>Continue connecting until all dots are the same color</li>
          <li>Use the undo button if you need to try a different approach</li>
          <li>Complete the level and move on to the next challenge!</li>
        </ol>
      </div>
    </div>
  );

  return <GameDetailTemplate game={game} aboutContent={aboutContent} howToPlayContent={howToPlayContent} />;
}

