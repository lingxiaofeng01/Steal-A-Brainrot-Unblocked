'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function APrettyOddBunnyRoastItPage() {
  const game = {
    slug: 'a-pretty-odd-bunny-roast-it',
    title: 'A Pretty Odd Bunny: Roast It!',
    subtitle: 'Solve Tricky Puzzles and Sneak Past Supervisors in This Hilarious Adventure',
    description: 'Solve tricky puzzles in A Pretty Odd Bunny: Roast It! by sneaking past animals to satisfy your cravings. Stay undetected and enjoy a humorous adventure!',
    playUrl: 'https://snakeiogames.github.io/a_pretty_odd_bunny_roast_it/',
    thumbnail: '/images/thumbnails/a-pretty-odd-bunny-roast-it.png',
    rating: 4.7,
    playCount: 0,
    tags: ['Arcade', 'Puzzle', 'Platform', 'Animal', 'Bunny', 'Funny', 'Multiplayer', 'Casual'],
    backgroundColor: 'from-pink-600 via-purple-500 to-blue-500',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-white">About A Pretty Odd Bunny: Roast It!</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          <strong>A Pretty Odd Bunny: Roast It!</strong> is back, taking brain-busting puzzles and fun confrontations that can't be missed! 
          With unique gameplay and dramatic challenges, this platform game promises to immerse you with no way out. Collect hot dogs, 
          dodge supervisors, and push cookies toward opponents—every moment in this engaging game is all an adventure full of laughter. 
          What are you waiting for? Wear a cool mask, jump right into the match, and show off your top skills!
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4 text-white">Explore Captivating Bunny Worlds</h2>
        <p className="text-lg leading-relaxed text-gray-300 mb-4">
          A Pretty Odd Bunny: Roast It! offers two main game modes: <strong>single-player</strong> and <strong>two-player</strong>. 
          If you loved the original A Pretty Odd Bunny, this version's single-player mode will provide a familiar but challenging experience. 
          Your mission is very simple: sneak past the supervisor, find a way to reach the target, and attack the poor fat pig! 
          You need to take advantage of cunning and observation to overcome prying eyes and achieve absolute victory.
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          Meanwhile, if you like competition, <strong>two-player mode</strong> is the ideal choice to challenge your favorite buddies. 
          More than simply running and jumping, this mode has a series of exciting mini-games: from racing to collect delicious sausages, 
          pushing cookies towards opponents, to intense item collecting stages to win the ultimate loot. Each match has a time element 
          or a certain cut-off point, and whoever has the better record will win gloriously. In particular, all accumulated rewards 
          also give you the opportunity to own funny masks for your bunny.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4 text-white">Key Features</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-300">
          <li><strong>Dual Game Modes:</strong> Enjoy both single-player puzzle challenges and competitive two-player mini-games</li>
          <li><strong>Stealth Gameplay:</strong> Sneak past supervisors and use cunning strategies to reach your targets</li>
          <li><strong>Exciting Mini-Games:</strong> Race to collect sausages, push cookies, and compete in various challenges</li>
          <li><strong>Customization System:</strong> Unlock and collect funny masks for your bunny character</li>
          <li><strong>Progressive Difficulty:</strong> Each level presents new challenges and obstacles to overcome</li>
          <li><strong>Humorous Adventure:</strong> Enjoy a lighthearted story filled with comedy and unexpected moments</li>
          <li><strong>Competitive Gameplay:</strong> Challenge friends in two-player mode with timed competitions</li>
          <li><strong>Reward System:</strong> Earn rewards and unlock new content as you progress</li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4 text-white">Why Play A Pretty Odd Bunny: Roast It?</h2>
        <p className="text-lg leading-relaxed text-gray-300 mb-4">
          This game combines the best elements of puzzle-solving, stealth mechanics, and competitive multiplayer action. 
          Whether you're playing solo or with a friend, every session offers fresh challenges and hilarious moments. 
          The game's unique art style and quirky humor make it stand out from typical platform games.
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          Perfect for players who enjoy brain-teasing puzzles, strategic gameplay, and friendly competition. 
          The variety of game modes ensures you'll never get bored, and the unlockable content provides long-term 
          motivation to keep playing. Whether you're sneaking past guards or racing against friends, 
          A Pretty Odd Bunny: Roast It! delivers non-stop entertainment!
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4 text-white">Game Highlights</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-300">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-cyan-400">🎮 Single-Player Mode</h3>
            <p>Master stealth mechanics, solve puzzles, and outsmart supervisors in challenging levels</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-cyan-400">👥 Two-Player Mode</h3>
            <p>Compete with friends in exciting mini-games and prove who's the ultimate bunny champion</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-cyan-400">🎭 Customization</h3>
            <p>Unlock hilarious masks and customize your bunny's appearance with earned rewards</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-cyan-400">🏆 Competitive Fun</h3>
            <p>Timed challenges and leaderboards keep the competition fierce and engaging</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4 text-white">Tips for Success</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-300">
          <li><strong>Observe Patterns:</strong> Watch supervisor movements carefully before making your move</li>
          <li><strong>Time Your Actions:</strong> Patience is key - wait for the perfect moment to advance</li>
          <li><strong>Practice Mini-Games:</strong> Master each mini-game type to dominate in two-player mode</li>
          <li><strong>Collect Everything:</strong> Don't miss hot dogs and items - they unlock valuable rewards</li>
          <li><strong>Learn from Mistakes:</strong> Each failed attempt teaches you better strategies</li>
          <li><strong>Use Masks Wisely:</strong> Different masks might offer unique advantages</li>
          <li><strong>Challenge Friends:</strong> Two-player mode is more fun with competitive friends</li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4 text-white">Perfect For</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          A Pretty Odd Bunny: Roast It! is ideal for puzzle enthusiasts, platform game fans, and anyone who enjoys 
          competitive multiplayer experiences. The game's accessible controls make it perfect for casual players, 
          while the challenging puzzles and competitive modes provide depth for hardcore gamers. Whether you have 
          5 minutes or an hour, this game adapts to your playtime with quick mini-games or extended puzzle-solving sessions.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4 text-white">Start Your Bunny Adventure Today!</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Ready to embark on this hilarious puzzle adventure? Put on your mask, sharpen your wits, and prepare for 
          brain-teasing challenges and competitive fun. Whether you're sneaking past supervisors in single-player mode 
          or battling friends in two-player competitions, A Pretty Odd Bunny: Roast It! guarantees hours of entertainment. 
          Play now and discover why this quirky bunny game has captured the hearts of puzzle and platform game fans worldwide!
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold mb-4 text-white">How to Play</h2>
      
      <div className="bg-gray-800 p-6 rounded-lg space-y-4">
        <div>
          <h3 className="text-2xl font-bold mb-3 text-cyan-400">🎮 Game Controls</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-bold mb-2 text-white">Single-Player Mode & Player 1:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong>W:</strong> Jump</li>
                <li><strong>A:</strong> Move Left</li>
                <li><strong>S:</strong> Crouch/Move Down</li>
                <li><strong>D:</strong> Move Right</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2 text-white">Player 2 (Two-Player Mode):</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong>↑ (Up Arrow):</strong> Jump</li>
                <li><strong>← (Left Arrow):</strong> Move Left</li>
                <li><strong>↓ (Down Arrow):</strong> Crouch/Move Down</li>
                <li><strong>→ (Right Arrow):</strong> Move Right</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3 text-cyan-400">📋 Gameplay Instructions</h3>
          
          <div className="space-y-3">
            <div>
              <h4 className="text-xl font-bold mb-2 text-white">Single-Player Mode:</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Observe the supervisor's patrol patterns</li>
                <li>Wait for the right moment to move</li>
                <li>Sneak past guards without being detected</li>
                <li>Collect hot dogs along the way</li>
                <li>Reach the target (fat pig) to complete the level</li>
                <li>Unlock new masks with your earned rewards</li>
              </ol>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2 text-white">Two-Player Mode:</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Choose your mini-game challenge</li>
                <li>Race to collect the most sausages</li>
                <li>Push cookies toward your opponent</li>
                <li>Compete in timed item collection challenges</li>
                <li>The player with the best score wins</li>
                <li>Earn rewards to unlock new masks</li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3 text-cyan-400">💡 Pro Tips</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Study supervisor movement patterns before rushing in</li>
            <li>Use obstacles and hiding spots strategically</li>
            <li>In two-player mode, learn each mini-game's mechanics</li>
            <li>Collect all items to maximize your rewards</li>
            <li>Practice makes perfect - don't give up on challenging levels</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold mb-4 text-white">Game Features</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
            🎯 Dual Game Modes
          </h3>
          <p className="text-gray-200">
            Experience both single-player stealth puzzles and competitive two-player mini-games. 
            Each mode offers unique challenges and endless replayability.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-900 to-pink-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
            🕵️ Stealth Mechanics
          </h3>
          <p className="text-gray-200">
            Master the art of sneaking past supervisors. Use timing, observation, and strategy 
            to outsmart guards and reach your objectives undetected.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
            🎮 Exciting Mini-Games
          </h3>
          <p className="text-gray-200">
            Compete in various mini-games including sausage collection races, cookie pushing battles, 
            and timed item challenges. Perfect for competitive play!
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-700 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
            🎭 Customization System
          </h3>
          <p className="text-gray-200">
            Unlock hilarious masks for your bunny character. Earn rewards through gameplay 
            and build your collection of unique cosmetic items.
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

