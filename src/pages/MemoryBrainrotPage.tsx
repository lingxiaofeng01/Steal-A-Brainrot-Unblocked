'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function MemoryBrainrotPage() {
  const game = {
    slug: 'memory-brainrot',
    title: 'Memory Brainrot',
    subtitle: 'Boost Your Brain with Meme Power - Flip Cards and Match Iconic Brainrot Characters!',
    description: 'Memory Brainrot is an engaging memory matching game featuring iconic characters from the Italian Brainrot meme universe. Flip cards, match pairs, and train your memory while enjoying vibrant cartoon visuals and chaotic meme fun. With two difficulty levels and dozens of legendary meme heroes to discover, this brain-boosting game is both entertaining and hilarious!',
    playUrl: 'https://html5.gamedistribution.com/0eec782d61e6449ab2e3ecc02272bcad/?utm_source=italian-brainrot.io&utm_medium=brainrot-memory&utm_campaign=block-and-redirect',
    thumbnail: '/images/thumbnails/memory-brainrot.jpg',
    rating: 5.0,
    playCount: 28934,
    tags: ['Brainrot', 'Memory', 'Puzzle', 'Meme', 'Brain', 'Casual'],
    backgroundColor: 'from-pink-400 via-purple-400 to-indigo-400',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-purple-900 mb-3">🎮 What is Memory Brainrot?</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Memory Brainrot is an exciting memory matching game that combines classic card-flipping gameplay with the hilarious Italian Brainrot meme universe. Flip cards to reveal iconic meme characters and match pairs while enjoying vibrant cartoon visuals. This brain-boosting memory game challenges your cognitive abilities while keeping you entertained with chaotic meme fun. Perfect for players of all ages, Memory Brainrot offers endless entertainment and mental stimulation!
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-blue-900 mb-3">🧠 Memory Matching Gameplay</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Memory Brainrot features intuitive card-flipping mechanics that make the game easy to learn but challenging to master. Flip two cards at a time to reveal the meme characters hidden beneath. If the cards match, they stay flipped and you earn points. If they don't match, they flip back over and you try again. The goal is to match all pairs in the fewest moves possible. This engaging gameplay trains your memory and concentration skills!
        </p>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-pink-900 mb-3">🎨 Iconic Brainrot Characters</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Memory Brainrot features dozens of legendary meme heroes from the Italian Brainrot universe. Each character brings unique personality and humor to the game. Discover familiar faces and new meme characters as you progress through different levels. The vibrant cartoon visuals and colorful character designs make the game visually appealing and entertaining. Collect all the iconic Brainrot characters and become a true meme master!
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-green-900 mb-3">⚙️ Multiple Difficulty Levels</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Memory Brainrot offers multiple difficulty levels to suit different skill levels and preferences. Start with easier levels featuring fewer cards for a relaxing gaming experience. Progress to harder levels with more cards for a challenging brain workout. Each difficulty level presents new challenges and requires better memory skills. Whether you're a casual player or a memory master, Memory Brainrot has the perfect difficulty level for you!
        </p>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-yellow-900 mb-3">🧩 Brain Training Benefits</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Playing Memory Brainrot offers numerous cognitive benefits beyond entertainment. The game helps improve memory retention, concentration, and mental agility. Regular memory training enhances your ability to recall information and recognize patterns. Memory Brainrot provides a fun and engaging way to exercise your brain while enjoying hilarious meme content. Boost your cognitive abilities while having fun with iconic Brainrot characters!
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-indigo-900 mb-3">🎯 Colorful Vibrant Visuals</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Memory Brainrot features a vibrant cartoon world with colorful visuals that bring the meme universe to life. The bright colors and playful character designs create an engaging and visually appealing gaming experience. Each card flip reveals beautifully illustrated meme characters that add personality to the gameplay. The colorful aesthetic makes Memory Brainrot enjoyable for players of all ages and keeps you entertained throughout your gaming session!
        </p>
      </div>

      <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-cyan-900 mb-3">⭐ Why You'll Love Memory Brainrot</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Memory Brainrot combines classic memory game mechanics with hilarious meme content and vibrant visuals. The game offers endless entertainment with multiple difficulty levels and dozens of meme characters to discover. Whether you're looking for a quick mental break or an extended gaming session, Memory Brainrot delivers hours of fun. Start playing today and experience the perfect blend of brain training and meme madness!
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-orange-900 mb-3">🎮 Step 1: Start the Game</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Launch Memory Brainrot and select your preferred difficulty level. Choose from easy, medium, or hard modes depending on your memory skills and available time. Each difficulty level features a different number of cards and meme characters. Select the difficulty that matches your current mood and challenge preference. Once selected, the game board will appear with all cards face-down!
        </p>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-red-900 mb-3">🧩 Step 2: Flip Your First Card</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Click on any card on the game board to flip it over and reveal the meme character hidden beneath. Take a moment to remember the character and its position on the board. The card will stay flipped briefly, giving you time to memorize its location. This first card is your starting point for finding matching pairs throughout the game!
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-green-900 mb-3">🎯 Step 3: Find the Matching Pair</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Click on a second card to reveal another meme character. If the two cards match, they stay flipped and you earn points. If they don't match, both cards flip back over and you try again. Use your memory to remember where each character is located on the board. The more you play, the better you'll become at remembering card positions!
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-blue-900 mb-3">🔍 Step 4: Use Memory Strategy</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Develop a memory strategy by systematically exploring the board and remembering card positions. Create mental maps of where each character is located. Pay attention to patterns and try to match pairs efficiently. The fewer moves you make, the higher your score. Advanced players can challenge themselves to complete levels in record time!
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-purple-900 mb-3">⚡ Step 5: Complete All Pairs</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Continue flipping cards and matching pairs until you've matched all the meme characters on the board. Each successful match brings you closer to completing the level. The game tracks your progress and displays your score. Complete all pairs to finish the level and unlock the next challenge!
        </p>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-pink-900 mb-3">🏆 Step 6: Progress to Next Level</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          After completing a level, you'll receive your final score and can choose to play again or progress to the next difficulty level. Each new level introduces more cards and meme characters, providing fresh challenges. Try to beat your previous scores and improve your memory skills. Unlock all levels and become a Memory Brainrot champion!
        </p>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-lg border-2 border-purple-300">
        <h4 className="text-xl font-bold text-purple-900 mb-2">🎮 Classic Memory Gameplay</h4>
        <p className="text-gray-700">Traditional card-flipping mechanics combined with modern meme characters for engaging memory training.</p>
      </div>

      <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg border-2 border-blue-300">
        <h4 className="text-xl font-bold text-blue-900 mb-2">🧠 Multiple Difficulty Levels</h4>
        <p className="text-gray-700">Choose from easy, medium, and hard modes to match your memory skills and challenge preferences.</p>
      </div>

      <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-lg border-2 border-green-300">
        <h4 className="text-xl font-bold text-green-900 mb-2">🎨 Iconic Meme Characters</h4>
        <p className="text-gray-700">Discover dozens of legendary heroes from the Italian Brainrot meme universe with unique personalities.</p>
      </div>

      <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
        <h4 className="text-xl font-bold text-yellow-900 mb-2">🌈 Vibrant Visuals</h4>
        <p className="text-gray-700">Colorful cartoon world with beautiful character designs that bring the meme universe to life.</p>
      </div>

      <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-lg border-2 border-pink-300">
        <h4 className="text-xl font-bold text-pink-900 mb-2">📱 Mobile Friendly</h4>
        <p className="text-gray-700">Fully responsive design that works seamlessly on smartphones, tablets, and desktop computers.</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-6 rounded-lg border-2 border-indigo-300">
        <h4 className="text-xl font-bold text-indigo-900 mb-2">🧩 Brain Training</h4>
        <p className="text-gray-700">Improves memory retention, concentration, and mental agility through engaging gameplay.</p>
      </div>

      <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 p-6 rounded-lg border-2 border-cyan-300">
        <h4 className="text-xl font-bold text-cyan-900 mb-2">🎯 Score Tracking</h4>
        <p className="text-gray-700">Track your progress and compete with yourself to beat previous scores and improve performance.</p>
      </div>

      <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-lg border-2 border-orange-300">
        <h4 className="text-xl font-bold text-orange-900 mb-2">✨ Free to Play</h4>
        <p className="text-gray-700">Completely free memory game with no downloads, registrations, or hidden costs required.</p>
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
