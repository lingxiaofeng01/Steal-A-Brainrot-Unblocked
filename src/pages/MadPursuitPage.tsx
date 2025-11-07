'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function MadPursuitPage() {
  const game = {
    slug: 'mad-pursuit',
    title: 'Mad Pursuit',
    subtitle: 'High-Speed Police Chase Game - Drive, Drift, and Escape',
    description: 'Play Mad Pursuit free online! Experience intense police chases, collect coins, unlock 50 cars, and compete on global leaderboards. No download required - start your escape now!',
    playUrl: 'https://games.yoplay.io/mad-pursuit/?v=1',
    thumbnail: '/images/thumbnails/mad-pursuit.jpg',
    rating: 5.0,
    playCount: 0,
    tags: ['Racing', 'Car', 'Driving', '3D', 'Action', 'Skill', 'Endless Runner', 'Police Chase'],
    backgroundColor: 'from-gray-900 via-red-900 to-black',
  };

  const aboutContent = (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed">
        <strong>Mad Pursuit</strong> is a high-speed police chase game where you drive, drift, and escape while collecting coins to unlock powerful cars and upgrades. This free browser-based racing game delivers intense survival gameplay combined with skill challenges and endless runner mechanics. Developed by Yoplay.io, <strong>Mad Pursuit</strong> supports online play directly on PC and web browsers, completely free and unblocked.
      </p>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-3xl">🚗</span>
          What is Mad Pursuit?
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Mad Pursuit</strong> puts you in the role of a daring driver being chased by the police, trying to escape through various cities, industrial zones, racetracks, and even weather stations in outer space. The game belongs to the driving, skill challenge, and endless runner genres, combining car chase and coin collect gameplay. Players must avoid obstacles, collect coins, complete missions, and survive as long as possible.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The highlight of <strong>Mad Pursuit</strong> comes from its speed, warm-tone graphics, and vivid lighting effects. The game features daily, weekly, and monthly leaderboards, allowing players to compete for global scores. With 50 customizable cars and multiple game modes, <strong>Mad Pursuit</strong> offers endless replayability and excitement.
        </p>
        <p className="text-lg leading-relaxed">
          Every chase in <strong>Mad Pursuit</strong> tests your reflexes and driving skills. The police cars appear quickly and in large numbers, making escape challenging. Master the art of drifting, find shortcuts, and use boost power strategically to stay ahead of the law in <strong>Mad Pursuit</strong>.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-3xl">🎮</span>
          Game Modes in Mad Pursuit
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Mad Pursuit</strong> features four distinct game modes, each offering unique challenges and objectives:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg ml-4">
          <li><strong>Survival Mode:</strong> Survive a series of pursuits on crowded roads filled with obstacles like buildings, trash bins, and gas stations in <strong>Mad Pursuit</strong></li>
          <li><strong>Racing Mode:</strong> Become a real racer, competing in speed against other opponents, completing the race without having to escape</li>
          <li><strong>Getaway Driver Mode:</strong> Escort a criminal to glowing blue escape gates while police cars and helicopters constantly chase you in <strong>Mad Pursuit</strong></li>
          <li><strong>Zones Mode:</strong> Takes place on a weather station in outer space with dim light and mysterious atmosphere, where police cars shoot energy bombs</li>
        </ul>
        <p className="text-lg leading-relaxed mt-4">
          Each mode in <strong>Mad Pursuit</strong> has gradually increasing difficulty. The deeper you go, the more levels you face, testing your true limits. There are a total of 182 stars to conquer across all modes in <strong>Mad Pursuit</strong>.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-3xl">🏎️</span>
          50 Cars to Unlock in Mad Pursuit
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Mad Pursuit</strong> offers 50 cars with different stats: Speed, Health, and Handling. Players can also paint their cars in basic colors such as white, blue, yellow, or red. Each car has a default SPX (Speed Performance Index) of 100%, allowing players to easily compare performance before upgrading.
        </p>
        <p className="text-lg leading-relaxed">
          From the free Stationer to the powerful Bad Karma costing 15,000 coins, <strong>Mad Pursuit</strong> provides a wide variety of vehicles to suit every playstyle. Unlock new cars by collecting coins during gameplay, and customize them to create your perfect escape vehicle in <strong>Mad Pursuit</strong>.
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-4">
      <p className="text-lg leading-relaxed">
        Playing <strong>Mad Pursuit</strong> requires quick reflexes and strategic driving. Master the controls and understand the mechanics to escape the police successfully.
      </p>
      
      <div className="bg-white rounded-xl p-6 shadow-md border-2 border-cyan-200">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">🎯 Mad Pursuit Controls</h4>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Steer:</strong> Left / Right Arrow Keys to navigate through traffic</li>
          <li><strong>Throttle:</strong> Up Arrow to accelerate in Mad Pursuit</li>
          <li><strong>Brake / Reverse:</strong> Down Arrow to slow down or reverse</li>
          <li><strong>Handbrake:</strong> Left Shift for sharp drifts and turns</li>
          <li><strong>Boost:</strong> Space Bar to activate speed boost</li>
          <li><strong>Change Camera:</strong> C key to switch between 4 camera angles</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md border-2 border-orange-200">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">💡 Gameplay Mechanics</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          In <strong>Mad Pursuit</strong>, players must avoid obstacles, collect coins, complete missions, and escape from the police for as long as possible. The in-game currency is coins, displayed at the top right corner of the screen. Use coins to unlock new cars and upgrades.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Upgrade items appear in gift boxes collected during gameplay in <strong>Mad Pursuit</strong>, allowing the car to triple in size for a few seconds or activate a special boost. These power-ups can be the difference between escape and capture.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The SPX (Speed Performance Index) represents the overall performance of a car in <strong>Mad Pursuit</strong>, calculated as a percentage. SPX reflects the vehicle's top speed, acceleration, handling, and boost power, helping you choose the right car for each mission.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-200">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">🏆 Tips for Success</h4>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>Explore the map:</strong> Get familiar with the roads, terrain, and curves to handle the car more smoothly in <strong>Mad Pursuit</strong>
          </li>
          <li>
            <strong>Practice drifting:</strong> Avoid crashing into other vehicles, as collisions give police a chance to catch up in <strong>Mad Pursuit</strong>
          </li>
          <li>
            <strong>Collect coins strategically:</strong> Seize opportunities to collect coins and items to unlock or upgrade your cars
          </li>
          <li>
            <strong>Keep distance:</strong> Slow down when necessary to dodge obstacles and maintain control in <strong>Mad Pursuit</strong>
          </li>
          <li>
            <strong>Find shortcuts:</strong> Some roads have hidden paths to escape faster from the police
          </li>
          <li>
            <strong>Stay calm:</strong> When being chased, drive steadily and avoid panicking to make better decisions in <strong>Mad Pursuit</strong>
          </li>
          <li>
            <strong>Change camera angles:</strong> Use the high-angle camera for overview, switch to frontal camera when blocked by obstacles
          </li>
        </ul>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { emoji: '🚓', title: 'Intense Police Chases', desc: 'Experience high-speed pursuits with police cars and helicopters constantly on your tail in Mad Pursuit' },
        { emoji: '🏎️', title: '50 Customizable Cars', desc: 'Unlock and customize 50 different vehicles with unique stats for Speed, Health, and Handling' },
        { emoji: '🎮', title: 'Four Game Modes', desc: 'Play Survival, Racing, Getaway Driver, and Zones modes, each with unique challenges and 182 stars to collect' },
        { emoji: '🪙', title: 'Coin Collection System', desc: 'Collect coins during gameplay to unlock new cars and upgrades in Mad Pursuit' },
        { emoji: '🏆', title: 'Global Leaderboards', desc: 'Compete on daily, weekly, and monthly leaderboards to prove your skills in Mad Pursuit' },
        { emoji: '🎨', title: 'Warm-Tone Graphics', desc: 'Enjoy vibrant red, yellow, and orange graphics with vivid lighting effects creating a fiery atmosphere' },
        { emoji: '🎵', title: 'Intense Soundtrack', desc: 'Experience energetic music and realistic sound effects from helicopters, sirens, and crashes' },
        { emoji: '🌐', title: 'Browser-Based Play', desc: 'Play Mad Pursuit directly in your browser - no downloads required, completely free and unblocked' },
      ].map((feature, index) => (
        <div key={index} className="bg-white rounded-xl p-5 shadow-md border-2 border-gray-200 hover:border-cyan-400 transition-all">
          <div className="text-4xl mb-3">{feature.emoji}</div>
          <h4 className="font-bold text-gray-800 mb-2 text-lg">{feature.title}</h4>
          <p className="text-gray-600">{feature.desc}</p>
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

