'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function GiantRushPage() {
  const game = {
    slug: 'giant-rush',
    title: 'Giant Rush',
    subtitle: 'The Bold Stickman Race That Turns Every Run into a Fight',
    description: 'Giant Rush throws you straight into a world where running is only half the battle. This 3D action game fuses fast running with one-on-one brawls in a way that feels instantly fun and unpredictable.',
    playUrl: 'https://sloperun.org/giant-rush.embed',
    thumbnail: '/images/thumbnails/giant-rush.png',
    rating: 5.0,
    playCount: 0,
    tags: ['Running', 'Action', '3D', 'Stickman', 'Fighting', 'Casual', 'Skill', 'Single Player', 'Boss Battle', 'Collect', 'Unblocked', 'Browser'],
    backgroundColor: 'from-orange-400 via-red-400 to-pink-400',
  };

  const aboutContent = (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed text-gray-700">
        <strong>Giant Rush</strong> throws you straight into a world where running is only half the battle. First launched in mid-2022 by the creative team at TapNation, this 3D action game fuses fast running with one-on-one brawls in a way that feels instantly fun and unpredictable. Every move counts, every color change matters — and every run could end with a giant waiting for you at the finish line.
      </p>
      
      <p className="text-lg leading-relaxed text-gray-700">
        At first glance, <strong>Giant Rush</strong> feels like a simple race through shifting lanes and bright colors, but the real tension builds as your stickman changes size and power. It's part reflex test, part strategy puzzle, and part showdown that makes each session feel new again. The game combines the addictive nature of endless runners with the strategic depth of color-matching mechanics and the excitement of boss battles.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        What sets <strong>Giant Rush</strong> apart from other running games is its unique blend of mechanics. You're not just running forward mindlessly — you're constantly making split-second decisions about which stickmen to collect, when to change lanes, and how to time your attacks against powerful giants. This combination creates a gameplay loop that's easy to learn but challenging to master, making <strong>Giant Rush</strong> perfect for both casual players and competitive gamers.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        The visual design of <strong>Giant Rush</strong> is vibrant and engaging, with smooth 3D graphics that run seamlessly in your browser. The color-changing mechanics aren't just for show — they're integral to the gameplay, requiring you to stay alert and adapt your strategy on the fly. Each track presents new challenges, and the boss battles at the end of each level provide satisfying climactic moments that test everything you've learned.
      </p>

      <h2 className="text-3xl font-bold mb-4 text-gray-800">Inside the Gameplay</h2>
      
      <p className="text-lg leading-relaxed text-gray-700">
        Each run in <strong>Giant Rush</strong> begins with your stickman dashing down a bright, shifting path. Your goal is simple — grab the stick figures that match your color to grow stronger and faster. Picking the wrong ones will shrink you and slow your run. This core mechanic creates constant tension as you navigate through the colorful lanes.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        As you move ahead in <strong>Giant Rush</strong>, the track changes colors and your stickman changes too, keeping you alert. Quick reactions decide whether you reach the end or fall short. The dynamic color system means you can't just memorize patterns — you need to stay focused and adapt to each new situation as it arises.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        At the finish line, a huge rival waits in <strong>Giant Rush</strong>. The fight is all about timing — watch, dodge, and strike when the chance appears. These boss battles are the culmination of your run, where the size and strength you've built up throughout the level determine your chances of victory. Defeating giants feels incredibly rewarding and pushes you to improve your collection strategy.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        Gems along the way in <strong>Giant Rush</strong> can be spent on outfits and finish moves that make your victories stand out. This progression system adds depth to the game, giving you goals beyond just completing levels. Customizing your stickman with unique gear and special finishing moves adds personality to your gameplay experience.
      </p>

      <h2 className="text-3xl font-bold mb-4 text-gray-800">What Makes Giant Rush Stand Out</h2>

      <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-6 border-l-4 border-orange-500">
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-500 font-bold mr-3">✓</span>
            <span><strong>Simple yet addictive design:</strong> Anyone can start playing Giant Rush instantly, but mastering the rhythm and timing takes real skill and practice.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 font-bold mr-3">✓</span>
            <span><strong>Dynamic visuals:</strong> Smooth 3D effects and changing track colors keep every round of Giant Rush fresh and visually engaging.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 font-bold mr-3">✓</span>
            <span><strong>Customization options:</strong> Use collected gems in Giant Rush to style your fighter with unique gear and special finishing moves.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 font-bold mr-3">✓</span>
            <span><strong>Challenging bosses:</strong> Learn attack patterns in Giant Rush to claim victory against increasingly difficult giant opponents.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 font-bold mr-3">✓</span>
            <span><strong>Progress that feels rewarding:</strong> Each win in Giant Rush pushes you toward a tougher track and stronger rivals, maintaining engagement.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 font-bold mr-3">✓</span>
            <span><strong>Browser-based convenience:</strong> Play Giant Rush unblocked directly in your browser with no downloads or installations required.</span>
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mb-4 mt-8 text-gray-800">Strategic Depth in Giant Rush</h2>

      <p className="text-lg leading-relaxed text-gray-700">
        While <strong>Giant Rush</strong> appears straightforward at first, experienced players discover layers of strategic depth. Knowing when to prioritize growth versus speed, understanding boss attack patterns, and optimizing your gem collection all contribute to higher scores and faster completion times. The game rewards both quick reflexes and smart planning.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        The color-matching mechanic in <strong>Giant Rush</strong> creates interesting risk-reward scenarios. Sometimes the optimal path requires you to temporarily shrink to navigate through a difficult section, then rebuild your size quickly afterward. This strategic element elevates <strong>Giant Rush</strong> beyond simple endless runners and adds replay value as you discover new approaches.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        Boss battles in <strong>Giant Rush</strong> require pattern recognition and timing precision. Each giant has unique attack sequences that you'll need to learn and counter. The satisfaction of perfectly dodging an attack and landing a critical strike makes every victory in <strong>Giant Rush</strong> feel earned and memorable.
      </p>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Quick Control Guide</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-500 font-bold mr-3">→</span>
            <span><strong>A / D or Arrow Keys:</strong> Move left or right in Giant Rush to collect matching stickmen and avoid wrong colors.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 font-bold mr-3">→</span>
            <span><strong>Spacebar:</strong> Attack or finish the giant at the end of each Giant Rush level.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 font-bold mr-3">→</span>
            <span><strong>Gems:</strong> Spend them in the Giant Rush shop for cosmetic upgrades and special finishing moves.</span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold mb-4 text-gray-800">Gameplay Tips for Giant Rush</h3>
      
      <p className="text-lg leading-relaxed text-gray-700">
        <strong>1. Focus on color matching:</strong> In Giant Rush, collecting the right color stickmen is crucial. Always prioritize matching your current color to grow larger and stronger.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        <strong>2. Watch for color transitions:</strong> When the track changes color in Giant Rush, your stickman changes too. Anticipate these shifts and position yourself accordingly.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        <strong>3. Learn boss patterns:</strong> Each giant in Giant Rush has predictable attack patterns. Study them to find the perfect timing for your counterattacks.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        <strong>4. Collect gems strategically:</strong> While gems are valuable in Giant Rush, don't risk your run for them. Prioritize survival and growth first.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        <strong>5. Practice timing:</strong> Success in Giant Rush comes from mastering the timing of lane changes and attacks. Regular practice improves your reflexes.
      </p>
    </div>
  );

  const featuresContent = (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
          <h3 className="text-xl font-bold mb-3 text-gray-800">🎮 Instant Action</h3>
          <p className="text-gray-700">
            Jump into Giant Rush immediately with no downloads or registration. The browser-based gameplay means you can start running and fighting within seconds.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border-2 border-pink-200">
          <h3 className="text-xl font-bold mb-3 text-gray-800">🎨 Vibrant Graphics</h3>
          <p className="text-gray-700">
            Giant Rush features smooth 3D visuals with bright, eye-catching colors that make every run visually exciting and easy to follow.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
          <h3 className="text-xl font-bold mb-3 text-gray-800">⚡ Fast-Paced Gameplay</h3>
          <p className="text-gray-700">
            Each Giant Rush session delivers quick, intense action that's perfect for short gaming breaks or extended play sessions.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200">
          <h3 className="text-xl font-bold mb-3 text-gray-800">🏆 Boss Battles</h3>
          <p className="text-gray-700">
            Face off against powerful giants in Giant Rush, each with unique attack patterns that challenge your skills and timing.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
          <h3 className="text-xl font-bold mb-3 text-gray-800">💎 Progression System</h3>
          <p className="text-gray-700">
            Collect gems in Giant Rush to unlock new outfits and finishing moves, adding personalization to your gameplay experience.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
          <h3 className="text-xl font-bold mb-3 text-gray-800">🎯 Skill-Based Challenge</h3>
          <p className="text-gray-700">
            Giant Rush rewards both quick reflexes and strategic thinking, offering depth that keeps players engaged long-term.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl p-6 border-2 border-orange-300 mt-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Why Play Giant Rush Unblocked?</h3>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          <strong>Giant Rush</strong> unblocked offers the complete gaming experience without restrictions. Whether you're at school, work, or home, you can enjoy this exciting stickman runner without any barriers. The unblocked version of <strong>Giant Rush</strong> maintains all the features of the original game while being accessible from any network.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Playing <strong>Giant Rush</strong> unblocked means you get instant access to all levels, customization options, and boss battles. The game runs smoothly in modern browsers, requiring no special permissions or installations. This makes <strong>Giant Rush</strong> the perfect choice for quick gaming sessions during breaks or extended play when you have more time.
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

