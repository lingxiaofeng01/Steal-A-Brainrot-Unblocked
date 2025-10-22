'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function KartBrosPage() {
  const game = {
    slug: 'kart-bros',
    title: 'Kart Bros',
    subtitle: 'Multiplayer Kart Racing with Hilarious Obstacles and Crazy Powerups!',
    description: 'Kart Bros is a tough multiplayer io kart racing game that takes you to crazy tracks with hilarious obstacles and outrageous powerups. Race against gamers worldwide, dodge traps, and use strange weapons to slow down rivals. Play free in your browser with no downloads or logins required!',
    playUrl: 'https://crazycattle3d.io/kart-bros.embed',
    thumbnail: '/images/thumbnails/kart-bros.webp',
    rating: 4.8,
    playCount: 2500000,
    tags: ['Kart Racing', 'Multiplayer', 'IO Game', 'Action', 'Browser Game'],
    backgroundColor: 'from-orange-400 via-yellow-400 to-red-400',
  };

  const aboutContent = (
    <div className="space-y-6">
      {/* Section 1: What is Kart Bros */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-orange-900 mb-3">🏎️ What is Kart Bros?</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Kart Bros is a tough multiplayer io kart racing game that takes you to crazy tracks with hilarious obstacles and outrageous powerups. This free browser-based racing game combines the thrill of competitive kart racing with the chaos of unpredictable obstacles and powerful weapons. Kart Bros delivers non-stop action and laughter as you compete against players worldwide. No downloads or logins are necessary; simply play Kart Bros right in your browser. Each race in Kart Bros is brief, exciting, and full of surprises, making it ideal for quick gaming sessions. Join millions of players enjoying Kart Bros and experience the ultimate multiplayer kart racing adventure!
        </p>
      </div>

      {/* Section 2: Gameplay & Racing Mechanics */}
      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-yellow-900 mb-3">🏁 Gameplay & Racing Mechanics</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          In Kart Bros, your goal is to outpace your opponents and reach the finish line first while dodging traps and using powerups to gain an edge. The racing mechanics in Kart Bros are simple yet engaging, allowing players of all skill levels to enjoy the game. Master drifting techniques to maintain speed around corners in Kart Bros. Navigate through challenging tracks filled with obstacles like slime puddles and bananas. The gameplay in Kart Bros rewards both speed and strategy, as you must balance aggressive racing with defensive maneuvering. Each track in Kart Bros presents unique challenges and opportunities for victory. The dynamic racing environment keeps every match in Kart Bros fresh and unpredictable.
        </p>
      </div>

      {/* Section 3: Powerups & Weapons System */}
      <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-red-900 mb-3">💥 Powerups & Weapons System</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Grab powerups on the Kart Bros track to hinder other players or increase your own speed. The powerup system in Kart Bros adds strategic depth to every race. Use strange weapons like slime to slow down your rivals in Kart Bros. Collect speed boosts to gain temporary advantages over competitors in Kart Bros. The variety of powerups in Kart Bros ensures that every race feels different and exciting. Strategic powerup usage can turn the tide of any Kart Bros match. Master the timing of powerup deployment to maximize your chances of victory in Kart Bros. The weapon mechanics in Kart Bros encourage both offensive and defensive play styles.
        </p>
      </div>

      {/* Section 4: Obstacles & Track Design */}
      <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-pink-900 mb-3">🌪️ Obstacles & Track Design</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Keep an eye out for challenging obstacles such as slime puddles and bananas throughout Kart Bros tracks. The obstacle design in Kart Bros creates dynamic racing environments that test your reflexes and decision-making. Navigate through hazardous terrain while maintaining your competitive edge in Kart Bros. Each obstacle in Kart Bros serves as both a challenge and an opportunity for tactical advantage. The track design in Kart Bros encourages exploration and experimentation with different racing lines. Avoid obstacles strategically to maintain your position in Kart Bros races. The environmental hazards in Kart Bros add an element of unpredictability to every match.
        </p>
      </div>

      {/* Section 5: Multiplayer Competition & Leaderboards */}
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-purple-900 mb-3">🏆 Multiplayer Competition & Leaderboards</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Race against gamers worldwide in Kart Bros and compete for the top spot on the leaderboard. The multiplayer experience in Kart Bros connects you with players from around the globe. Achieve the top spot on the Kart Bros leaderboard by drifting, dodging, and blasting your way to victory. The competitive nature of Kart Bros drives players to improve their skills and strategies. Climb the rankings in Kart Bros by consistently winning races and outperforming opponents. The global community in Kart Bros creates a vibrant competitive environment. Track your progress and compare your stats with other Kart Bros players on the leaderboards.
        </p>
      </div>

      {/* Section 6: Game Updates & New Content */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-green-900 mb-3">🎮 Game Updates & New Content</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Kart Bros frequently releases new karts, stages, and updates to keep the action interesting and engaging. The developers of Kart Bros are committed to providing fresh content regularly. New karts in Kart Bros offer unique designs and performance characteristics. Explore new stages in Kart Bros with different themes and obstacle layouts. The continuous updates in Kart Bros ensure that the game remains exciting and relevant. Each update in Kart Bros brings balance changes and new features to enhance gameplay. The active development of Kart Bros demonstrates the developers' dedication to player satisfaction.
        </p>
      </div>

      {/* Section 7: Why Kart Bros Stands Out */}
      <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-cyan-900 mb-3">⭐ Why Kart Bros Stands Out</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Kart Bros stands out in the multiplayer racing genre with its unique blend of competitive gameplay and hilarious chaos. The accessibility of Kart Bros makes it perfect for both casual and hardcore gamers. The free-to-play model of Kart Bros removes barriers to entry for new players. The responsive controls in Kart Bros allow for precise maneuvering and skillful play. The vibrant community surrounding Kart Bros creates a welcoming environment for all players. The balance between skill and luck in Kart Bros ensures that every player has a chance to win. Experience the ultimate multiplayer kart racing adventure with Kart Bros today!
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <ul className="space-y-4">
      <li className="flex items-start gap-4">
        <span className="text-3xl">🚀</span>
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Launch a Race Right Away</h4>
          <p className="text-gray-700">No registration is required to play Kart Bros; simply launch the game and start racing immediately. Click the play button to enter a Kart Bros race and begin competing against other players worldwide. The quick start process in Kart Bros ensures you can jump into action within seconds.</p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <span className="text-3xl">⚡</span>
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Master the Controls</h4>
          <p className="text-gray-700">Use Arrow keys or WASD to drive your kart in Kart Bros. The controls are simple and responsive, allowing anyone to hop in and start playing right away. Practice your steering and acceleration to master the Kart Bros controls and improve your racing skills.</p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <span className="text-3xl">💥</span>
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Grab Powerups</h4>
          <p className="text-gray-700">Collect powerups scattered throughout the Kart Bros track to gain advantages. Use the Space bar to activate powerups and weapons in Kart Bros. Strategic powerup usage can turn the tide of any Kart Bros race and lead you to victory.</p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <span className="text-3xl">🛡️</span>
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Avoid Obstacles</h4>
          <p className="text-gray-700">Keep an eye out for challenging obstacles such as slime puddles and bananas in Kart Bros. Navigate around hazards while maintaining your speed and position. Skillful obstacle avoidance in Kart Bros is key to staying ahead of your competitors.</p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <span className="text-3xl">🏁</span>
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Reach the Finish Line</h4>
          <p className="text-gray-700">Your ultimate goal in Kart Bros is to outpace your opponents and reach the finish line first. Use drifting, dodging, and powerups strategically to secure victory in Kart Bros. Each race in Kart Bros is a thrilling competition to determine who is the fastest racer.</p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <span className="text-3xl">🎯</span>
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Climb the Leaderboards</h4>
          <p className="text-gray-700">Achieve the top spot on the Kart Bros leaderboard by consistently winning races. Track your progress and compete with other players to establish your dominance in Kart Bros. The leaderboard system in Kart Bros rewards skilled and dedicated players.</p>
        </div>
      </li>
    </ul>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-500">
        <h4 className="text-xl font-bold text-orange-900 mb-3">🏎️ Multiplayer Racing</h4>
        <p className="text-gray-700">Race against players worldwide in real-time Kart Bros matches. Experience competitive multiplayer racing with dynamic player interactions and strategic gameplay.</p>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border-l-4 border-yellow-500">
        <h4 className="text-xl font-bold text-yellow-900 mb-3">💥 Powerup System</h4>
        <p className="text-gray-700">Collect and use various powerups in Kart Bros to gain advantages. Strategic powerup deployment can turn any race in your favor.</p>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-500">
        <h4 className="text-xl font-bold text-red-900 mb-3">🌪️ Obstacle Challenges</h4>
        <p className="text-gray-700">Navigate through challenging obstacles like slime puddles and bananas in Kart Bros. Test your reflexes and decision-making skills.</p>
      </div>

      <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg border-l-4 border-pink-500">
        <h4 className="text-xl font-bold text-pink-900 mb-3">🎮 Simple Controls</h4>
        <p className="text-gray-700">Easy-to-learn controls using Arrow keys or WASD make Kart Bros accessible to players of all skill levels.</p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
        <h4 className="text-xl font-bold text-purple-900 mb-3">🏆 Leaderboards</h4>
        <p className="text-gray-700">Compete for the top spot on Kart Bros leaderboards and establish your dominance in the racing community.</p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
        <h4 className="text-xl font-bold text-green-900 mb-3">🎨 New Content</h4>
        <p className="text-gray-700">Kart Bros regularly releases new karts, stages, and updates to keep the gameplay fresh and exciting.</p>
      </div>

      <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg border-l-4 border-cyan-500">
        <h4 className="text-xl font-bold text-cyan-900 mb-3">🌐 Browser-Based</h4>
        <p className="text-gray-700">Play Kart Bros directly in your browser with no downloads or installations required. Instant access to multiplayer racing action.</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg border-l-4 border-indigo-500">
        <h4 className="text-xl font-bold text-indigo-900 mb-3">⚡ Fast-Paced Action</h4>
        <p className="text-gray-700">Experience brief, exciting races full of surprises in Kart Bros. Perfect for quick gaming sessions and competitive play.</p>
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
