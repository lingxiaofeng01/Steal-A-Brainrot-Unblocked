'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function MadTrailsPage() {
  const game = {
    slug: 'mad-trails',
    title: 'Mad Trails',
    subtitle: 'Master Physics-Based Terrain Climbing in This Ultimate Driving Challenge',
    description: 'Mad Trails is the ultimate physics driving test where players master micro-throttle control and soft-wheel dynamics to conquer rugged hills. Unlock crawlers, upgrade torque, and climb to the top in this addictive browser-based racing game.',
    playUrl: 'https://yoplay.io/mad-trails.embed',
    thumbnail: '/images/thumbnails/mad-trails.png',
    rating: 5.0,
    playCount: 0,
    tags: ['Racing', 'Driving', 'Physics', 'Car', 'Action', 'Skill', '3D', 'Casual', 'Arcade', 'Unblocked', 'Browser', 'Adventure', 'Simulation', 'Climbing', 'Upgrade'],
    backgroundColor: 'from-amber-600 via-orange-600 to-red-700',
  };

  const aboutContent = (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <p className="text-lg">
        <strong>Mad Trails</strong> drops players into a rugged world where the road feels alive, shifting under the tyres like a restless creature. Developed by Yoplay.io and released as a browser-based HTML5 title, <strong>Mad Trails</strong> seamlessly blends driving, climbing, and light racing elements into a continuous, forward-moving experience. It is easy to assume it's just another hill climbing game on the surface, but the deeper the player goes, the more the terrain reveals its personality.
      </p>
      
      <p>
        This is a car game experience, available instantly on any device, yet <strong>Mad Trails</strong> behaves with the weight and stretch of a full physics simulator. The car doesn't glide—it bends, sinks, and wiggles. The wheels deform as if made of compressed jelly, gripping onto uneven ground in a way that gives this 3D game its unusual charm. Unlike traditional racing games that prioritize speed, <strong>Mad Trails</strong> rewards patience, precision, and understanding of vehicle physics.
      </p>

      <p>
        The terrain in <strong>Mad Trails</strong> tells its own story. The wheels press into the surface, sometimes sinking, bouncing upward as if the road is breathing beneath the car. When the player pulls off a new trick—like a circular flip or a hard nose hit—<strong>Mad Trails</strong> acknowledges it with a short congratulatory message. The soundscape, though minimal, is perfectly fitting: it's defined by the heavy thump of metal hitting rock, the harsh scraping of impacts, and the brief, satisfying sizzle of sparks when the chassis drags the ground.
      </p>

      <p>
        One of the unique elements that makes <strong>Mad Trails</strong> stand out is the soft-wheel physics system. The deforming wheels define the personality of this driving game's movement. Instead of stiff arcade racing, the vehicle in <strong>Mad Trails</strong> behaves like a flexible creature adapting to every bump. This creates an organic feel where each climb presents unique challenges that require different approaches and strategies.
      </p>

      <p>
        <strong>Mad Trails</strong> features an upgrade system accessed through the white spanner icon. Here, the player can enhance Tires, Hull, Engine, Protection, and Fuel Tank. Each part has its own tier, and each tier demands coins. The upgrades in <strong>Mad Trails</strong> do not feel cosmetic—a stronger engine can pull weight through sharp climbs, tougher tyres dig deeper into unstable ground, and extra protection often decides whether a rough landing is a setback or a total wipeout.
      </p>

      <p>
        The game structure in <strong>Mad Trails</strong> uses a run-based format, but not an endless one. Each level has a finish line and visible progression markers. Momentum is critical in <strong>Mad Trails</strong>: push too hard and the car flips, but hesitate too long and the incline wins. It feels a bit like trying to guide a springy metal toy up a mountain made of rubber. The difficulty grows organically as climbs become higher and sharper, gaps widen, and precision matters more.
      </p>

      <p>
        <strong>Mad Trails</strong> also lands comfortably in the unblocked game category, meaning it's playable on school or work networks that usually block gaming domains. This accessibility makes <strong>Mad Trails</strong> perfect for quick gaming sessions during breaks, while still offering enough depth to keep players engaged for extended periods. The browser-based nature of <strong>Mad Trails</strong> means no downloads or installations are required.
      </p>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6 text-gray-700">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Basic Controls</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-gray-800 mb-2">🚗 Movement Controls</p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>W / ↑</strong> - Accelerate forward</li>
              <li><strong>S / ↓</strong> - Slow down or reverse</li>
              <li><strong>A / ←</strong> - Tilt vehicle left (balance control)</li>
              <li><strong>D / →</strong> - Tilt vehicle right (balance control)</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-gray-800 mb-2">⚙️ Game Features</p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Spanner Icon</strong> - Access upgrade menu</li>
              <li><strong>Soft-Wheel Physics</strong> - Wheels deform on terrain</li>
              <li><strong>Checkpoint System</strong> - Progress markers throughout levels</li>
              <li><strong>Trick Recognition</strong> - Earn bonuses for flips and stunts</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Climbing Techniques in Mad Trails</h3>
        <ol className="space-y-3 list-decimal list-inside text-gray-700">
          <li><strong>Momentum Management</strong> - Build speed on flat sections, conserve it on climbs</li>
          <li><strong>Throttle Control</strong> - Use short acceleration pulses instead of holding full throttle</li>
          <li><strong>Balance Adjustment</strong> - Tilt the vehicle to maintain traction on steep slopes</li>
          <li><strong>Suspension Reading</strong> - Watch how the suspension compresses to predict traction loss</li>
          <li><strong>Strategic Upgrades</strong> - Balance engine power with tire grip for optimal performance</li>
        </ol>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Game Objectives</h3>
        <p className="text-gray-700 mb-3">
          In <strong>Mad Trails</strong>, your primary goal is to navigate through challenging terrain and reach the finish line of each level. The player moves through a sequence of slopes, rocks, narrow platforms, dips, and checkpoints. Success in <strong>Mad Trails</strong> requires mastering the physics-based controls, upgrading your vehicle strategically, and learning to read the terrain ahead.
        </p>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-shadow">
        <div className="text-4xl mb-3">🎯</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">Soft-Wheel Physics System</h3>
        <p className="text-gray-700">
          The deforming wheels in <strong>Mad Trails</strong> define the personality of the game's movement. Instead of stiff arcade racing, the vehicle behaves like a flexible creature adapting to every bump, creating an organic and unpredictable climbing experience.
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-shadow">
        <div className="text-4xl mb-3">⚡</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">Quick Replayable Stages</h3>
        <p className="text-gray-700">
          Runs in <strong>Mad Trails</strong> are quick and failure never feels punishing because restarting is nearly instant. It's easy to jump in, test a new upgrade, and try again, making <strong>Mad Trails</strong> perfect for both short sessions and extended play.
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 hover:shadow-lg transition-shadow">
        <div className="text-4xl mb-3">📈</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">Organic Difficulty Growth</h3>
        <p className="text-gray-700">
          Climbs in <strong>Mad Trails</strong> become progressively higher and sharper as you advance. Gaps widen and precision matters more. The player grows with the terrain in <strong>Mad Trails</strong>, not against it, creating a satisfying learning curve.
        </p>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200 hover:shadow-lg transition-shadow">
        <div className="text-4xl mb-3">🔧</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">Deep Upgrade System</h3>
        <p className="text-gray-700">
          <strong>Mad Trails</strong> features a comprehensive upgrade system for Tires, Hull, Engine, Protection, and Fuel Tank. Each upgrade in <strong>Mad Trails</strong> meaningfully changes vehicle performance, requiring strategic investment decisions.
        </p>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border-2 border-red-200 hover:shadow-lg transition-shadow">
        <div className="text-4xl mb-3">🌍</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">Unblocked Browser Access</h3>
        <p className="text-gray-700">
          <strong>Mad Trails</strong> is playable on school or work networks as an unblocked game. No downloads or installations required—just open your browser and start climbing in <strong>Mad Trails</strong> immediately.
        </p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200 hover:shadow-lg transition-shadow">
        <div className="text-4xl mb-3">🎮</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">Trick Recognition System</h3>
        <p className="text-gray-700">
          When you pull off impressive maneuvers like circular flips or hard nose hits, <strong>Mad Trails</strong> acknowledges your skill with congratulatory messages, adding an extra layer of satisfaction to successful climbs.
        </p>
      </div>

      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border-2 border-cyan-200 hover:shadow-lg transition-shadow">
        <div className="text-4xl mb-3">🏔️</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">Dynamic Terrain Interaction</h3>
        <p className="text-gray-700">
          The terrain in <strong>Mad Trails</strong> feels alive—wheels sink into surfaces, bounce on impact, and create realistic physics interactions. Every climb in <strong>Mad Trails</strong> presents unique challenges based on terrain composition.
        </p>
      </div>
    </div>
  );

  const tipsContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-200">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Pro Tips for Mad Trails</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-2xl mr-3">💡</span>
            <div>
              <strong>Balanced Upgrades:</strong> Start by upgrading tyres and engine evenly in <strong>Mad Trails</strong>. Specialized builds tend to underperform early on when you need versatility.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3">💡</span>
            <div>
              <strong>Throttle Pulsing:</strong> Avoid holding full throttle on steep inclines in <strong>Mad Trails</strong>. Short acceleration pulses keep the vehicle grounded and maintain better traction.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3">💡</span>
            <div>
              <strong>Suspension Monitoring:</strong> Watch the suspension in <strong>Mad Trails</strong>. If it compresses too much on a slope, adjust your tilt angle before accelerating again to prevent wheel spin.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3">💡</span>
            <div>
              <strong>Coin Farming:</strong> Revisit earlier levels in <strong>Mad Trails</strong> to farm coins safely for large upgrades. Mastered levels provide consistent income without risk.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-3">💡</span>
            <div>
              <strong>Terrain Reading:</strong> Learn to read the terrain ahead in <strong>Mad Trails</strong>. Anticipating bumps and dips allows you to adjust speed and angle proactively.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <GameDetailTemplate
      game={game}
      aboutContent={aboutContent}
      howToPlayContent={howToPlayContent}
      featuresContent={featuresContent}
      tipsContent={tipsContent}
    />
  );
}


