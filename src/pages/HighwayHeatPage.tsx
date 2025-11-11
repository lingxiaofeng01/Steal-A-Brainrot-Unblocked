'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function HighwayHeatPage() {
  const game = {
    slug: 'highway-heat',
    title: 'Highway Heat',
    subtitle: 'The Ultimate Endless Racing Challenge - Survive the Traffic Chaos',
    description: 'Highway Heat is the purest form of an endless racing game. Face traffic chaos, upgrade your car, and survive based on sheer reflex speed. Experience the adrenaline rush of high-speed driving in this addictive 3D racing game!',
    playUrl: 'https://games.yoplay.io/highway-heat/?v=1',
    thumbnail: '/images/thumbnails/highway-heat.jpg',
    rating: 5.0,
    playCount: 0,
    tags: ['Racing', 'Driving', 'Car', 'Endless Runner', '3D', 'Speed', 'Skill', 'Survival', 'Casual', 'Action', 'Unblocked', 'Browser'],
    backgroundColor: 'from-orange-500 via-red-500 to-pink-500',
  };

  const aboutContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">About Highway Heat</h2>
      
      <p className="text-gray-700 leading-relaxed">
        <strong>Highway Heat</strong> is the 2025 adrenaline shot that delivers pure, unforgiving racing action. This isn't just another endless racer—<strong>Highway Heat</strong> is a skill challenge designed to test every fiber of your focus and reflexes. Your journey has no boundaries: the asphalt never ends in <strong>Highway Heat</strong>. There's no finish line to cross, no flashing police lights in your rearview mirror—just the road, the traffic, and your survival instincts.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Setting itself apart with a striking 3D environment, <strong>Highway Heat</strong> captures everything from the grit of the streets to the sweeping landscapes around you. This online game promises an experience few racing games can truly match. The <strong>Highway Heat</strong> game combines realistic traffic patterns with heart-pounding speed challenges that will keep you on the edge of your seat.
      </p>

      <p className="text-gray-700 leading-relaxed">
        In <strong>Highway Heat</strong>, you'll navigate through dense traffic, weave between vehicles at breakneck speeds, and push your reflexes to the absolute limit. The game features four distinct environments—Village, Winter, Desert, and City—each bringing its own unique atmosphere and challenges. From calm country roads to icy highways and neon-lit streets, every background in <strong>Highway Heat</strong> shifts the mood and difficulty.
      </p>

      <p className="text-gray-700 leading-relaxed">
        What makes <strong>Highway Heat</strong> truly addictive is its perfect balance of simplicity and depth. While the controls are straightforward, mastering the rhythm of traffic, timing your overtakes, and managing your speed requires genuine skill. Every crash hurts, every successful dodge feels like victory. <strong>Highway Heat</strong> doesn't try to impress with shiny menus or cinematic intros—its strength lies in that addictive simplicity.
      </p>

      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-2 border-orange-300 my-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Why Play Highway Heat?</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 mr-2">🏎️</span>
            <span><strong>Endless Racing Action:</strong> No finish lines, just pure survival driving in Highway Heat</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-2">🎮</span>
            <span><strong>Skill-Based Gameplay:</strong> Highway Heat rewards reflexes and strategic thinking</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-2">🚗</span>
            <span><strong>12 Unique Vehicles:</strong> Unlock and upgrade cars in Highway Heat</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-2">🌍</span>
            <span><strong>4 Diverse Environments:</strong> Race through different worlds in Highway Heat</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">How to Play Highway Heat</h2>
      
      <p className="text-gray-700 leading-relaxed">
        The <strong>Highway Heat</strong> game keeps its controls deceptively simple, but mastering their rhythm is the real challenge. Understanding the controls is essential to survive the endless highway in <strong>Highway Heat</strong>.
      </p>

      <div className="bg-white p-6 rounded-xl border-2 border-gray-300 my-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Highway Heat Controls</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="bg-orange-500 text-white px-4 py-2 rounded font-bold">↑ / W</div>
            <span className="text-gray-700">Accelerate</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="bg-orange-500 text-white px-4 py-2 rounded font-bold">↓ / S</div>
            <span className="text-gray-700">Slow Down / Brake</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="bg-orange-500 text-white px-4 py-2 rounded font-bold">← / A</div>
            <span className="text-gray-700">Steer Left</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="bg-orange-500 text-white px-4 py-2 rounded font-bold">→ / D</div>
            <span className="text-gray-700">Steer Right</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="bg-orange-500 text-white px-4 py-2 rounded font-bold">C</div>
            <span className="text-gray-700">Switch Camera Angles</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="bg-orange-500 text-white px-4 py-2 rounded font-bold">N</div>
            <span className="text-gray-700">Activate Nitro Boost</span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed">
        Memorizing the keys is just the beginning in <strong>Highway Heat</strong>. The psychological challenge lies in feeling the perfect moment to deploy them. Managing the throttle, weaving through dense traffic, and slamming the brakes at the edge of disaster—all these actions transform a basic drive into a tense, dramatic symphony of reflexes in <strong>Highway Heat</strong>.
      </p>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-2 border-yellow-300 my-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Highway Heat Game Modes</h3>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">🛣️ One Way Mode</h4>
            <p className="text-gray-700">A straightforward run through one-direction traffic in Highway Heat—it's all about focus and reflexes.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">🔄 Two Way Mode</h4>
            <p className="text-gray-700">Twice the tension in Highway Heat, as traffic rushes in both directions.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">⏱️ Time Attack Mode</h4>
            <p className="text-gray-700">A race against the clock in Highway Heat—every second counts.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">🌟 Free Ride Mode</h4>
            <p className="text-gray-700">No pressure, no limits in Highway Heat—just the open road and the sound of speed.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Highway Heat Features</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-300">
          <div className="text-3xl mb-3">🎁</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Daily Rewards System</h3>
          <p className="text-gray-700">
            <strong>Highway Heat</strong> keeps you coming back with daily login bonuses and a spin-the-wheel mini-game. Each spin in <strong>Highway Heat</strong> offers coins, massive prizes, or even free cars!
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-300">
          <div className="text-3xl mb-3">⚙️</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Car Customization & Upgrades</h3>
          <p className="text-gray-700">
            Every vehicle in <strong>Highway Heat</strong> has five core stats: top speed, acceleration, handling, braking, and nitro. Upgrade costs range from 600 to 2,000 coins in <strong>Highway Heat</strong>.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-300">
          <div className="text-3xl mb-3">🎨</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Visual Customization</h3>
          <p className="text-gray-700">
            Personalize your ride in <strong>Highway Heat</strong> with custom paint jobs, wheel swaps, and decals. Make your car stand out from the crowd in <strong>Highway Heat</strong>!
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-300">
          <div className="text-3xl mb-3">🌍</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Four Unique Environments</h3>
          <p className="text-gray-700">
            Race through Village, Winter, Desert, and City environments in <strong>Highway Heat</strong>. Each world brings its own mood and challenge to <strong>Highway Heat</strong>.
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-300">
          <div className="text-3xl mb-3">🎮</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Flexible Settings</h3>
          <p className="text-gray-700">
            <strong>Highway Heat</strong> respects player preferences with customizable sound, camera angles, sensitivity, and graphics quality. Reset to defaults anytime in <strong>Highway Heat</strong>.
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border-2 border-red-300">
          <div className="text-3xl mb-3">🏆</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Score Tracking</h3>
          <p className="text-gray-700">
            Each mode in <strong>Highway Heat</strong> logs your highest score, displayed beneath a trophy icon, quietly urging you to push further in <strong>Highway Heat</strong>.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border-2 border-indigo-300">
          <div className="text-3xl mb-3">🚗</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">12 Unique Vehicles</h3>
          <p className="text-gray-700">
            <strong>Highway Heat</strong> features 12 unique vehicles ranging from everyday cars and sleek sports models to powerful heavy tractors—each offering a distinct driving feel.
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border-2 border-teal-300">
          <div className="text-3xl mb-3">💨</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Nitro Boost System</h3>
          <p className="text-gray-700">
            Activate short speed bursts with the Nitro system in <strong>Highway Heat</strong>. Perfect for escaping tight situations or setting new distance records in <strong>Highway Heat</strong>!
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-100 via-red-100 to-pink-100 p-6 rounded-xl border-2 border-orange-400 mt-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Pro Tips for Highway Heat</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 font-bold mr-2">1.</span>
            <span><strong>Flow with open spaces</strong> in Highway Heat—always aim for the most welcoming lane and avoid forcing tight gaps.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 font-bold mr-2">2.</span>
            <span><strong>Prioritize Control and Speed upgrades</strong> in Highway Heat—these stats will save your life more than cosmetics.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 font-bold mr-2">3.</span>
            <span><strong>Maintain stable speed</strong> in Highway Heat for better reaction time—don't overspeed in crowded sections.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 font-bold mr-2">4.</span>
            <span><strong>Use top-down camera view</strong> in Highway Heat—the bird's-eye perspective is essential for reading traffic flow.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 font-bold mr-2">5.</span>
            <span><strong>Brake proactively</strong> in Highway Heat—slow down before entering jams or approaching dead ends.</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 font-bold mr-2">6.</span>
            <span><strong>Practice with each camera angle</strong> in Highway Heat for 10 minutes to find your perfect view.</span>
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
    />
  );
}

