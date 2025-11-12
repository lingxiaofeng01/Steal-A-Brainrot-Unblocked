'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function DriftFuryPage() {
  const game = {
    slug: 'drift-fury',
    title: 'Drift Fury',
    subtitle: 'Master the Art of Drifting in This Ultimate 3D Racing Experience',
    description: 'Drift Fury is the ultimate speed racing game that delivers an exhilarating visual feast for drift enthusiasts. Experience the thrill of driving supercars through stunning natural landscapes while mastering advanced drifting techniques.',
    playUrl: 'https://html5.gamemonetize.co/79uga2q05rkfv5vl6mt8ptr2bu5aduv3/',
    thumbnail: '/images/thumbnails/drift-fury.jpg',
    rating: 5.0,
    playCount: 0,
    tags: ['Racing', 'Driving', '3D', 'Drift', 'Car', 'Sports', 'Skill', 'Action', 'Casual', 'Unblocked', 'Browser', 'Arcade', 'Speed', 'Simulation', 'Adventure'],
    backgroundColor: 'from-orange-600 via-red-600 to-purple-700',
  };

  const aboutContent = (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <p className="text-lg">
        <strong>Drift Fury</strong> is a speed racing game that will satisfy your visual feast, where players can relive the dream of "driving a supercar" that they have nurtured since childhood. Developed by FreezeNova, <strong>Drift Fury</strong> offers an engaging experience thanks to its realistic physics design, detailed 3D environment, and smart reward system. This browser-based racing game combines the thrill of high-speed driving with the technical precision required for perfect drifting.
      </p>
      
      <p>
        One of the unique elements that makes <strong>Drift Fury</strong> stand out is the combination of speed and natural scenery. Instead of dry metal tracks, you will be able to slide your wheels through winding curves located between pine forests, hills, and misty fog. This makes each drift more poetic while helping to reduce the boredom that often appears in repetitive racing games. The game's stunning 3D graphics create an immersive environment where every corner presents a new visual challenge.
      </p>

      <p>
        The highlight of <strong>Drift Fury</strong> is the drift chain reward mechanism called the "Triple Drift Bonus" system. If you maintain the drifting technique for long enough without losing control, a combo bar will pop up that allows you to multiply your score by three. This forces players to manage risk – should you stop drifting to be safe, or continue drifting and risk crashing into the curb? The decision-making aspect adds strategic depth to what might otherwise be a simple racing game.
      </p>

      <p>
        Unlike many racing games that focus purely on acceleration, <strong>Drift Fury</strong> evaluates the skill of keeping the car balanced when cornering. Good players know when to use the brakes, when to use nitro, and especially know how to "let go" to drift smoothly instead of forcing the car to slide too much. The physics engine in <strong>Drift Fury</strong> rewards finesse over brute force, making it a game that's easy to pick up but challenging to master.
      </p>

      <p>
        <strong>Drift Fury</strong> features a supercar warehouse that doesn't use real car names, but the designs are clearly inspired by legendary car lines such as BMW i8, McLaren P1, and Lamborghini Huracan. Interestingly, each car not only changes its appearance but also has different control parameters and physical reactions, forcing players to adapt their driving style instead of just collecting cars for beauty. This variety ensures that <strong>Drift Fury</strong> remains fresh and challenging even after hours of gameplay.
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
              <li><strong>S / ↓</strong> - Brake / Reverse</li>
              <li><strong>A / ←</strong> - Steer left</li>
              <li><strong>D / →</strong> - Steer right</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-semibold text-gray-800 mb-2">⚡ Special Actions</p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Spacebar</strong> - Handbrake (initiate drift)</li>
              <li><strong>Shift</strong> - Nitro boost</li>
              <li><strong>C</strong> - Switch camera view</li>
              <li><strong>R</strong> - Reset car position</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Drifting Techniques in Drift Fury</h3>
        <ol className="space-y-3 list-decimal list-inside text-gray-700">
          <li><strong>Entry Speed</strong> - Approach corners at moderate speed, not maximum velocity</li>
          <li><strong>Initiate Drift</strong> - Tap the handbrake (Spacebar) while turning into the corner</li>
          <li><strong>Counter-Steer</strong> - Steer in the opposite direction to maintain the drift angle</li>
          <li><strong>Throttle Control</strong> - Modulate acceleration to extend or tighten the drift</li>
          <li><strong>Exit Clean</strong> - Straighten the wheel and apply nitro as you exit the corner</li>
        </ol>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Game Objectives</h3>
        <p className="text-gray-700 mb-3">
          In <strong>Drift Fury</strong>, your primary goal is to achieve the highest score possible by chaining together perfect drifts. The longer you maintain a drift without crashing, the higher your combo multiplier climbs. Master the art of drifting to unlock new vehicles and dominate the leaderboards.
        </p>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-shadow">
        <div className="text-4xl mb-3">🏎️</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">Realistic Physics Engine</h3>
        <p className="text-gray-700">
          <strong>Drift Fury</strong> features an advanced physics system that accurately simulates weight transfer, tire grip, and momentum. Every drift feels authentic and responsive, rewarding skilled players who understand vehicle dynamics.
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-shadow">
        <div className="text-4xl mb-3">🌲</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">Stunning Natural Environments</h3>
        <p className="text-gray-700">
          Race through breathtaking landscapes featuring pine forests, mountain passes, and misty valleys. The scenic routes in <strong>Drift Fury</strong> provide a refreshing alternative to traditional urban racing tracks.
        </p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-200 hover:shadow-lg transition-shadow">
        <div className="text-4xl mb-3">⚡</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">Triple Drift Bonus System</h3>
        <p className="text-gray-700">
          Chain your drifts together to activate the Triple Drift Bonus, multiplying your score by 3x. This risk-reward mechanic in <strong>Drift Fury</strong> encourages aggressive yet controlled driving.
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200 hover:shadow-lg transition-shadow">
        <div className="text-4xl mb-3">🚗</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">Diverse Supercar Collection</h3>
        <p className="text-gray-700">
          Unlock and drive vehicles inspired by iconic supercars like the BMW i8, McLaren P1, and Lamborghini Huracan. Each car in <strong>Drift Fury</strong> has unique handling characteristics and performance stats.
        </p>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border-2 border-yellow-200 hover:shadow-lg transition-shadow">
        <div className="text-4xl mb-3">🎮</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">Multiple Game Modes</h3>
        <p className="text-gray-700">
          Experience <strong>Drift Fury</strong> through Drift Mode for free practice, Race Mode for competitive 10-race tournaments, and complete 20 challenging achievements to unlock exclusive content.
        </p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border-2 border-indigo-200 hover:shadow-lg transition-shadow">
        <div className="text-4xl mb-3">🏆</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">Achievement System</h3>
        <p className="text-gray-700">
          Complete 20 challenging missions in <strong>Drift Fury</strong> to unlock the ultimate prize: the Lamborghini Huracan supercar. This long-term progression system keeps players engaged for hours.
        </p>
      </div>

      <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border-2 border-rose-200 hover:shadow-lg transition-shadow">
        <div className="text-4xl mb-3">📱</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">Browser-Based Accessibility</h3>
        <p className="text-gray-700">
          Play <strong>Drift Fury</strong> instantly in your browser without downloads or installations. The game is optimized for smooth performance across desktop and laptop computers.
        </p>
      </div>

      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border-2 border-teal-200 hover:shadow-lg transition-shadow">
        <div className="text-4xl mb-3">🎯</div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">Skill-Based Progression</h3>
        <p className="text-gray-700">
          <strong>Drift Fury</strong> rewards player skill over random chance. Master the timing, learn the tracks, and perfect your technique to climb the rankings and achieve legendary drift status.
        </p>
      </div>
    </div>
  );

  const gameModesContent = (
    <div className="space-y-6 text-gray-700">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">🎯 Drift Mode</h3>
        <p className="mb-3">
          In Drift Mode, <strong>Drift Fury</strong> gives you complete freedom to practice your drifting skills without time pressure or opponents. This mode is ideal for learning the tracks, experimenting with different vehicles, and perfecting your drift chains. Focus on achieving high scores through the Triple Drift Bonus system and mastering every corner of the scenic routes.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>No time limits or race pressure</li>
          <li>Perfect for practicing drift techniques</li>
          <li>Experiment with all unlocked vehicles</li>
          <li>Focus on maximizing combo multipliers</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">🏁 Race Mode</h3>
        <p className="mb-3">
          Race Mode in <strong>Drift Fury</strong> features 10 head-to-head races where you must balance speed with drifting skill. You'll compete against AI opponents who won't hesitate to take the lead if you crash or lose momentum. This mode tests your ability to drift efficiently while maintaining competitive racing lines and staying ahead of the pack.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>10 competitive races against AI opponents</li>
          <li>Balance drifting with maintaining lead position</li>
          <li>Strategic use of nitro boosts is crucial</li>
          <li>Unlock rewards by winning races</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">🏆 Achievements System</h3>
        <p className="mb-3">
          <strong>Drift Fury</strong> includes 20 challenging achievements that test every aspect of your driving skills. From completing perfect drift chains to winning races without using nitro, these missions provide long-term goals and unlock exclusive content. The ultimate reward is the Lamborghini Huracan supercar, reserved only for the most dedicated players.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>20 unique achievement challenges</li>
          <li>Unlock the legendary Lamborghini Huracan</li>
          <li>Earn special vehicle skins and upgrades</li>
          <li>Track your progress across all game modes</li>
        </ul>
      </div>
    </div>
  );

  const tipsContent = (
    <div className="space-y-6 text-gray-700">
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border-2 border-yellow-200">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">💡 Pro Drifting Tips for Drift Fury</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">⚡ Use Nitro at the Right Time</h4>
            <p>
              In <strong>Drift Fury</strong>, timing your nitro boost is crucial. Don't use nitro immediately when entering a corner – instead, release it when exiting the drift to maintain your combo and increase speed appropriately. This technique helps you chain drifts together while building momentum for the next section.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">📷 Switch Cameras Continuously</h4>
            <p>
              Press the C key to cycle through different camera perspectives in <strong>Drift Fury</strong>. Each viewpoint gives a different feeling of the road's curves. Use the third-person perspective to learn the map layout, then switch to a closer angle for precise drift control during competitive runs.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">🎯 Don't Overuse the Handbrake</h4>
            <p>
              The handbrake in <strong>Drift Fury</strong> helps you make sharp turns, but if used at the wrong time, it will cause the car to skid uncontrollably. Combine "release the throttle + steer" to drift more naturally on gentle curves, saving the handbrake for tight hairpin turns.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">🏎️ Learn Each Car's Characteristics</h4>
            <p>
              Every vehicle in <strong>Drift Fury</strong> handles differently. Lighter cars are more responsive but less stable, while heavier supercars require more planning but maintain better control at high speeds. Spend time in Drift Mode learning each car's unique physics before taking them into Race Mode.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">🔄 Master the Drift Chain</h4>
            <p>
              The key to high scores in <strong>Drift Fury</strong> is maintaining drift chains. Plan your racing line to connect multiple corners into one continuous drift sequence. The longer you maintain the drift without breaking the combo, the higher your multiplier climbs, potentially reaching the coveted 3x bonus.
            </p>
          </div>
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
      additionalSections={[
        { title: 'Game Modes', content: gameModesContent },
        { title: 'Winning Strategies', content: tipsContent },
      ]}
    />
  );
}

