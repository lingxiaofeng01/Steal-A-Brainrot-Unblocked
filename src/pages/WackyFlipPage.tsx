'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function WackyFlipPage() {
  const game = {
    slug: 'wacky-flip',
    title: 'Wacky Flip',
    subtitle: 'Master Extreme Parkour Flipping with Style!',
    description: 'Land epic stunts in Wacky Flip, the extreme parkour flipping game with serious style. Flip hard, score big, and flex your swag in midair!',
    playUrl: 'https://1games.io/game/wacky-flip',
    thumbnail: '/images/thumbnails/wacky-flip.webp',
    rating: 4.6,
    playCount: 16270,
    tags: ['Sports', 'Action', 'Parkour', 'Stunt', 'Skill', 'Physics'],
    backgroundColor: 'from-orange-400 via-red-400 to-pink-400',
  };

  const aboutContent = (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🤸 What is Wacky Flip?</h3>
        <p className="mb-4">
          <strong>Wacky Flip</strong> is an adrenaline-pumping parkour game that challenges you to perform jaw-dropping flips and stunts 
          across various urban environments. With its physics-based gameplay and stylish execution system, every jump becomes an opportunity 
          to showcase your skills and creativity.
        </p>
        <p className="mb-4">
          The game combines precise timing, spatial awareness, and risk-reward mechanics to create an addictive experience where you're 
          constantly pushing the limits of what's possible. Whether you're a casual player looking for quick thrills or a hardcore stunt 
          enthusiast aiming for perfect scores, Wacky Flip delivers non-stop action.
        </p>
        <p>
          From rooftops to ramps, every level presents unique challenges that test your flipping prowess. Master the art of rotation, 
          nail your landings, and build up massive combo scores as you progress through increasingly difficult stages.
        </p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-500">
        <h3 className="text-2xl font-bold text-orange-900 mb-4">🎯 Core Gameplay Mechanics</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Wacky Flip's gameplay revolves around three essential elements: <strong>power control</strong>, <strong>rotation timing</strong>, 
          and <strong>landing precision</strong>. Each jump requires you to carefully adjust your launch angle and power, then execute 
          flips at the perfect moment to maximize your score while ensuring a safe landing.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The physics engine creates realistic momentum and rotation, making every flip feel satisfying and authentic. You'll need to 
          account for gravity, air resistance, and landing surfaces to pull off the most impressive stunts.
        </p>
        <p className="text-gray-700 leading-relaxed">
          As you progress, you'll unlock new environments with different obstacles, heights, and landing zones. Each location demands 
          different strategies and techniques, keeping the gameplay fresh and challenging throughout your journey.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🏆 Scoring System & Combos</h3>
        <p className="mb-4">
          Points in Wacky Flip are awarded based on multiple factors: the number of rotations completed, the difficulty of the stunt, 
          landing accuracy, and style execution. Perfect landings multiply your score, while risky maneuvers earn bonus points.
        </p>
        <p className="mb-4">
          The combo system rewards consecutive successful flips, encouraging you to chain together multiple stunts without failing. 
          The longer your combo streak, the higher your score multiplier climbs, creating intense moments where one mistake can cost 
          you thousands of points.
        </p>
        <p>
          Compete for high scores on global leaderboards, challenge your friends, or simply try to beat your personal best. The scoring 
          system provides endless replayability as you refine your technique and discover new ways to maximize points.
        </p>
      </div>

      <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg border-l-4 border-pink-500">
        <h3 className="text-2xl font-bold text-pink-900 mb-4">🎨 Visual Style & Atmosphere</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Wacky Flip features vibrant, colorful graphics that bring the urban parkour environment to life. The game's art style strikes 
          a perfect balance between realism and stylization, creating a visually appealing world that's both believable and exciting.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Dynamic camera angles capture your stunts from the most dramatic perspectives, while smooth animations make every flip and 
          landing feel fluid and responsive. The visual feedback system clearly communicates your performance, helping you understand 
          what went right or wrong with each attempt.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎮 Progression & Unlockables</h3>
        <p className="mb-4">
          As you master different levels and achieve high scores, you'll unlock new characters, customization options, and special 
          abilities. Each unlock adds new dimensions to the gameplay, allowing you to personalize your experience and develop your 
          own unique playstyle.
        </p>
        <p className="mb-4">
          The progression system is designed to keep you engaged long-term, with both short-term goals (completing individual levels) 
          and long-term objectives (unlocking all content, mastering every stunt) to work towards.
        </p>
        <p>
          Special challenge modes test your skills in specific scenarios, offering unique rewards for those who can overcome the toughest 
          obstacles. These challenges range from time trials to precision landing tests, ensuring there's always something new to attempt.
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">💪 Skill Development</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Wacky Flip rewards practice and dedication. As you play, you'll naturally develop better timing, improved spatial awareness, 
          and a deeper understanding of the physics system. What seems impossible at first becomes second nature with experience.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The game's difficulty curve is carefully balanced to provide a satisfying challenge without becoming frustrating. Early levels 
          teach fundamental techniques, while later stages demand mastery of advanced maneuvers and perfect execution under pressure.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🌟 Why Play Wacky Flip?</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Instant Action:</strong> Jump right in and start flipping within seconds</li>
          <li><strong>Easy to Learn, Hard to Master:</strong> Simple controls with deep skill ceiling</li>
          <li><strong>Addictive Gameplay:</strong> "Just one more try" mentality keeps you coming back</li>
          <li><strong>Satisfying Physics:</strong> Realistic movement and rotation feel great</li>
          <li><strong>Competitive Elements:</strong> Leaderboards and challenges for competitive players</li>
          <li><strong>Regular Updates:</strong> New levels and features added frequently</li>
          <li><strong>Free to Play:</strong> No cost to experience all the core gameplay</li>
          <li><strong>Cross-Platform:</strong> Play on any device with a web browser</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-400">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Pro Tips for Success</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <strong className="text-gray-800">Start Small:</strong>
              <p className="text-gray-700">Master single flips before attempting multiple rotations</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">⏱️</span>
            <div>
              <strong className="text-gray-800">Timing is Everything:</strong>
              <p className="text-gray-700">Click to flip at the peak of your jump for maximum rotation</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <strong className="text-gray-800">Aim for the Landing Zone:</strong>
              <p className="text-gray-700">Always keep your landing target in mind when launching</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🔄</span>
            <div>
              <strong className="text-gray-800">Practice Consistency:</strong>
              <p className="text-gray-700">Focus on landing successfully before going for high scores</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">📈</span>
            <div>
              <strong className="text-gray-800">Build Combos:</strong>
              <p className="text-gray-700">Chain successful flips together for massive score multipliers</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-4 text-gray-700">
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border-l-4 border-cyan-500">
        <h3 className="text-xl font-bold text-cyan-900 mb-4">🎮 Controls</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-2xl">🖱️</span>
            <div>
              <strong className="text-gray-800">Hold Left Mouse Button:</strong>
              <p>Adjust jump power and angle - hold longer for more power</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🚀</span>
            <div>
              <strong className="text-gray-800">Release:</strong>
              <p>Launch your character into the air</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🔄</span>
            <div>
              <strong className="text-gray-800">Click Midair:</strong>
              <p>Start performing flips and rotations</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <strong className="text-gray-800">Click Again:</strong>
              <p>Lock your landing position - timing is crucial!</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-purple-900 mb-4">📋 Step-by-Step Guide</h3>
        <ol className="space-y-3 list-decimal list-inside">
          <li><strong>Position yourself</strong> at the starting point and assess the landing zone</li>
          <li><strong>Hold the mouse button</strong> to charge your jump - watch the power meter</li>
          <li><strong>Release at the right moment</strong> to launch with optimal power and angle</li>
          <li><strong>Click during flight</strong> to initiate your flip rotation</li>
          <li><strong>Time your second click</strong> to stop rotating and prepare for landing</li>
          <li><strong>Stick the landing</strong> in the target zone to score points</li>
          <li><strong>Chain successful flips</strong> to build your combo multiplier</li>
        </ol>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
        <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">⚠️</span>
          Important Tips
        </h4>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Don't over-rotate:</strong> Too many flips can make landing impossible</li>
          <li>• <strong>Watch your trajectory:</strong> Make sure you're heading toward the landing zone</li>
          <li>• <strong>Perfect timing:</strong> Click to lock your landing just before touching down</li>
          <li>• <strong>Practice makes perfect:</strong> Each level has an optimal strategy to discover</li>
        </ul>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { icon: '🤸', title: 'Realistic Physics', desc: 'Authentic parkour movement and rotation mechanics' },
        { icon: '🎯', title: 'Precision Gameplay', desc: 'Master timing and control for perfect landings' },
        { icon: '🏆', title: 'Score System', desc: 'Compete for high scores and combo multipliers' },
        { icon: '🎨', title: 'Vibrant Graphics', desc: 'Colorful urban environments and smooth animations' },
        { icon: '🔓', title: 'Unlockables', desc: 'Earn new characters and customization options' },
        { icon: '📈', title: 'Progressive Difficulty', desc: 'Challenging levels that test your skills' },
        { icon: '🌐', title: 'Browser-Based', desc: 'Play instantly without downloads' },
        { icon: '🆓', title: 'Free to Play', desc: 'Full game experience at no cost' },
      ].map((feature, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow-md border-2 border-orange-200 hover:border-orange-400 transition-colors">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{feature.icon}</span>
            <div>
              <h4 className="font-bold text-gray-800">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          </div>
        </div>
      ))}
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

