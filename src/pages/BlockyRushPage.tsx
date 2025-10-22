'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function BlockyRushPage() {
  const game = {
    slug: 'blocky-rush',
    title: 'Blocky Rush',
    subtitle: 'Brain-Teasing Block Puzzle Game - Stack Blocks and Clear Rows!',
    description: 'Blocky Rush is a free 2D block-stacking puzzle game with cute cartoon graphics and strategic gameplay. Drop colorful blocks, complete rows, and unlock power-ups in this addictive brain game!',
    playUrl: 'https://yoplay.io/blocky-rush.embed',
    thumbnail: '/images/thumbnails/blocky-rush.png',
    rating: 4.2,
    playCount: 750000,
    tags: ['Puzzle', 'Block', 'Casual', 'Brain Game', 'Logic', 'Free'],
    backgroundColor: 'from-blue-400 via-purple-400 to-pink-400',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-purple-900 mb-3">🎮 What is Blocky Rush?</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Blocky Rush is a revolutionary 2D block-stacking puzzle game that combines brain-teasing gameplay with adorable cartoon-style graphics. Developed by the Yoplay.io team, this free HTML5 browser game challenges players to stack colorful blocks strategically and complete rows to clear the board. Blocky Rush delivers a perfect balance of relaxation and mental stimulation, making it ideal for puzzle enthusiasts of all ages. The game's unique mechanics and charming design have made Blocky Rush a favorite among casual gamers worldwide!
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-blue-900 mb-3">🧩 Block-Stacking Mechanics</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          In Blocky Rush, players control colorful rectangular blocks by moving them horizontally across the game board. The core objective is to align blocks to form complete filled rows, which then disappear to make space for remaining blocks. Unlike traditional Tetris-style games, Blocky Rush doesn't require color matching—just focus on filling rows completely! The playing field gradually lowers, creating increasing pressure and challenging your speed and logical thinking. Each completed row in Blocky Rush increases your score and unlocks additional rewards!
        </p>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-pink-900 mb-3">⚡ Power-Up System</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Blocky Rush features three main power-ups to help players overcome challenging situations. The Cloud icon (unlocked at rank 1) strikes with lightning to destroy a chosen block for 40 diamonds. The Hugging Blocky icon (rank 2) removes all blocks of the same color for 90 diamonds. The Hammer icon (rank 2) smashes any single block to create space for 120 diamonds. When danger approaches—your board is almost full and the monster at the top is ready to devour blocks—these power-ups in Blocky Rush start shaking and glowing, reminding you to use them strategically!
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-green-900 mb-3">🎯 Combo System & Special Effects</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Blocky Rush rewards strategic play with an exciting combo system. When you fill consecutive empty spaces twice in a row, a purple lightning block appears and Blocky Rush displays "x2 Combo" on screen. Completing rows containing lightning blocks automatically strikes adjacent rows, destroying them and creating extra space. Chain reactions in Blocky Rush are crucial for scoring bonus points and progressing through levels. The game also features special effects that trigger when you achieve combo x2, x3, or x4, providing encouraging visual feedback and rewarding your strategic block placement!
        </p>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-yellow-900 mb-3">🎨 Themes & Visual Design</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Each new level in Blocky Rush refreshes the background colors and scenery, switching between day and night themes to keep the experience visually engaging. The game features adorable artwork with harmonious and eye-catching colors that appeal to players of all ages. Blocky Rush's cute cat mascot provides helpful tips and encouragement throughout your gaming session. The soundtrack ranges from soft and calming to suspenseful, perfectly matching the gameplay's pace. This attention to visual and audio design makes Blocky Rush not just fun to play, but also pleasant to experience!
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-indigo-900 mb-3">🏆 Progression & Rewards</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Blocky Rush features a comprehensive progression system that keeps players engaged and motivated. Completing rows in Blocky Rush helps you score points and unlock progress toward stylish outfits, including cute cat costumes and seasonal-themed looks. The ranking system in Blocky Rush unlocks new power-ups as you advance, providing tangible rewards for your skill development. Each level presents fresh challenges with newly arranged blocks, preventing repetition and maintaining the game's appeal. The combination of cosmetic rewards and gameplay progression makes Blocky Rush endlessly replayable!
        </p>
      </div>

      <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-cyan-900 mb-3">⭐ Why You'll Love Blocky Rush</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Blocky Rush offers the perfect puzzle gaming experience for casual players seeking both relaxation and mental challenge. The game's brain-teasing mechanics promote focus, timing, and spatial awareness while remaining accessible to players of all skill levels. Blocky Rush is completely free to play with no downloads required—just click and start playing instantly in your browser. Whether you're looking for a quick gaming session during a break or an extended puzzle-solving adventure, Blocky Rush delivers engaging gameplay that keeps you coming back for more. Join millions of players enjoying Blocky Rush today!
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-orange-900 mb-3">🎮 Step 1: Understand the Basics</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Launch Blocky Rush and listen to the cute cat mascot's important reminder: "Just remember: no color matching needed!" This is the key to understanding Blocky Rush. Unlike traditional block games, you don't need to match colors—just focus on filling complete rows. The game board displays colorful rectangular blocks that fall from above. Your goal in Blocky Rush is simple: align blocks to form complete filled rows!
        </p>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-red-900 mb-3">🧩 Step 2: Move and Position Blocks</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Control blocks in Blocky Rush by moving them horizontally across the game board. Use your mouse or keyboard to position each block strategically before it lands. In Blocky Rush, careful positioning is crucial—think ahead about where each block will land and how it will interact with existing blocks. Don't rush your moves; take a moment to plan your next action for maximum efficiency in Blocky Rush!
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-green-900 mb-3">✨ Step 3: Complete Rows & Score Points</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          When you align blocks to form a complete filled row in Blocky Rush, that row automatically disappears, clearing space for remaining blocks. Each completed row increases your score and contributes to your progression. In Blocky Rush, completing rows is the primary way to prevent the board from filling up. The more rows you complete, the higher your score and the further you progress in Blocky Rush!
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-blue-900 mb-3">⚡ Step 4: Trigger Combos & Chain Reactions</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Master the combo system in Blocky Rush by filling consecutive empty spaces twice in a row. This triggers a purple lightning block that automatically strikes adjacent rows when you complete a row containing it. Chain reactions in Blocky Rush are essential for scoring bonus points and clearing multiple rows at once. Practice creating combos to maximize your score and progress faster in Blocky Rush!
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-purple-900 mb-3">🎯 Step 5: Use Power-Ups Strategically</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          When danger approaches in Blocky Rush—your board is almost full—use power-ups strategically to clear space. The Cloud icon destroys chosen blocks, the Hugging Blocky removes same-colored blocks, and the Hammer smashes individual blocks. In Blocky Rush, timing your power-up usage is crucial. Don't waste them early; save them for critical moments when your board is nearly full and you need emergency space!
        </p>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-pink-900 mb-3">🏆 Step 6: Survive & Achieve High Scores</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          The ultimate goal in Blocky Rush is to survive as long as possible and achieve the highest score. The playing field gradually lowers, increasing pressure and challenging your speed and logical thinking. In Blocky Rush, prevention is key—always clean rows uniformly and avoid creating isolated gaps. Keep playing Blocky Rush to improve your skills, unlock new outfits, and dominate the leaderboards!
        </p>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-lg border-2 border-purple-300">
        <h4 className="text-xl font-bold text-purple-900 mb-2">🧩 Block-Stacking Puzzle</h4>
        <p className="text-gray-700">Strategic block placement without color matching requirements—focus on filling complete rows!</p>
      </div>

      <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg border-2 border-blue-300">
        <h4 className="text-xl font-bold text-blue-900 mb-2">🎨 Cute Cartoon Graphics</h4>
        <p className="text-gray-700">Adorable artwork with harmonious colors and a helpful cat mascot guide your gaming experience.</p>
      </div>

      <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-lg border-2 border-green-300">
        <h4 className="text-xl font-bold text-green-900 mb-2">⚡ Power-Up System</h4>
        <p className="text-gray-700">Three unique power-ups help you overcome challenging situations and clear difficult boards.</p>
      </div>

      <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
        <h4 className="text-xl font-bold text-yellow-900 mb-2">🎯 Combo Mechanics</h4>
        <p className="text-gray-700">Chain reactions and special effects reward strategic play with bonus points and extra space.</p>
      </div>

      <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-lg border-2 border-pink-300">
        <h4 className="text-xl font-bold text-pink-900 mb-2">🌙 Dynamic Themes</h4>
        <p className="text-gray-700">Day and night themes refresh with each level, keeping the visual experience engaging and fresh.</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-6 rounded-lg border-2 border-indigo-300">
        <h4 className="text-xl font-bold text-indigo-900 mb-2">🏆 Progression System</h4>
        <p className="text-gray-700">Unlock new power-ups, cosmetic outfits, and seasonal-themed looks as you advance through ranks.</p>
      </div>

      <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 p-6 rounded-lg border-2 border-cyan-300">
        <h4 className="text-xl font-bold text-cyan-900 mb-2">🎮 100% Free to Play</h4>
        <p className="text-gray-700">No downloads required—play instantly in your browser on PC or mobile devices.</p>
      </div>

      <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-lg border-2 border-orange-300">
        <h4 className="text-xl font-bold text-orange-900 mb-2">🧠 Brain-Teasing Challenge</h4>
        <p className="text-gray-700">Promotes focus, timing, and spatial awareness while remaining accessible to all skill levels.</p>
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

