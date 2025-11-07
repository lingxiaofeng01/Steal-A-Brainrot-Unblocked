'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function TrafficRallyPage() {
  const game = {
    slug: 'traffic-rally',
    title: 'Traffic Rally',
    subtitle: 'Dramatic 3D Highway Racing - Conquer Crowded Roads at Top Speed',
    description: 'Play Traffic Rally free online! Experience dramatic 3D highway racing where you overcome crowded roads, overtake cars, and reach checkpoints safely. Master speed and handling in this thrilling traffic racing game. No download required!',
    playUrl: 'https://game.azgame.io/traffic-rally/',
    thumbnail: '/images/thumbnails/traffic-rally.png',
    rating: 5.0,
    playCount: 0,
    tags: ['Racing', 'Car', 'Driving', '3D', 'Action', 'Traffic', 'Highway', 'Speed'],
    backgroundColor: 'from-gray-900 via-blue-900 to-black',
  };

  const aboutContent = (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed">
        <strong>Traffic Rally</strong> is a dramatic 3D driving game where you will have to overcome crowded roads, conquer checkpoints, and reach the finish line safely. Not only does it require speed, but <strong>Traffic Rally</strong> also demands flexible handling skills to avoid and overtake cars for maximum points. This free browser-based racing game delivers intense highway action combined with precision driving mechanics.
      </p>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-3xl">🏎️</span>
          What is Traffic Rally?
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Traffic Rally</strong> puts you behind the wheel on a massive four-lane highway running through a glowing city. Each level in <strong>Traffic Rally</strong> presents a new challenge where you must maintain top speed while keeping full control to dodge all obstacles and complete the race. Your score is determined by your speed, number of successful overtakings, and daring moves in opposite lanes.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The more reckless you drive in <strong>Traffic Rally</strong>, the greater the reward, but a single collision can end it all! The game features realistic 3D graphics, reflective lighting, and smooth motion effects that make every race immersive. Accelerating through neon-lit streets in <strong>Traffic Rally</strong> gives you the true thrill of speed and precision driving.
        </p>
        <p className="text-lg leading-relaxed">
          Experience racing in chaotic traffic where each stage brings denser traffic, faster vehicles, and more unpredictable obstacles in <strong>Traffic Rally</strong>. You'll need sharp reflexes, quick decisions, and a steady hand to survive and dominate the highway.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-3xl">🚗</span>
          Choose Your Car and Style in Traffic Rally
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Traffic Rally</strong> offers a wide variety of vehicles, from sleek modern sports cars to powerful classic sedans. Each car in <strong>Traffic Rally</strong> has its own stats, handling, and color, allowing players to express their personal driving style. Whether you prefer speed or stability, there's a perfect car for you in <strong>Traffic Rally</strong>.
        </p>
        <p className="text-lg leading-relaxed">
          As you master your skills in <strong>Traffic Rally</strong>, you'll unlock faster and more powerful cars to dominate even the toughest levels. Every vehicle feels unique, offering different acceleration, top speed, and handling characteristics that change how you approach each race in <strong>Traffic Rally</strong>.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-3xl">🌆</span>
          Graphics and Background
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          The main setting of <strong>Traffic Rally</strong> is a massive highway with four bustling lanes running through a glowing city. The realistic 3D graphics, reflective lighting, and smooth motion effects make every race in <strong>Traffic Rally</strong> incredibly immersive.
        </p>
        <p className="text-lg leading-relaxed">
          Accelerating through neon-lit streets in <strong>Traffic Rally</strong> gives you the true thrill of speed and precision driving. The dynamic vehicles, realistic engine sounds, and collision effects add to the realism, making <strong>Traffic Rally</strong> one of the most visually impressive browser racing games available.
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-4">
      <p className="text-lg leading-relaxed">
        Playing <strong>Traffic Rally</strong> requires quick reflexes and strategic lane changes. Master the controls and understand the scoring mechanics to achieve the highest scores.
      </p>
      
      <div className="bg-white rounded-xl p-6 shadow-md border-2 border-cyan-200">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">🎯 Traffic Rally Controls</h4>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Up Arrow:</strong> Accelerate to top speed in Traffic Rally</li>
          <li><strong>Down Arrow:</strong> Brake or slow down to avoid collisions</li>
          <li><strong>Left Arrow:</strong> Change lanes to the left to overtake cars</li>
          <li><strong>Right Arrow:</strong> Change lanes to the right to dodge obstacles</li>
        </ul>
        <p className="text-gray-700 mt-4 leading-relaxed">
          The controls in <strong>Traffic Rally</strong> are responsive and smooth, making it easy to learn but challenging to master. Precise timing is essential for successful overtaking maneuvers.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md border-2 border-orange-200">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">💡 Scoring System</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          Your score in <strong>Traffic Rally</strong> is determined by three key factors:
        </p>
        <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
          <li><strong>Speed:</strong> Maintain high velocity throughout the race for bonus points</li>
          <li><strong>Overtaking:</strong> Successfully pass other vehicles to increase your score multiplier</li>
          <li><strong>Daring Moves:</strong> Drive in opposite lanes for massive point bonuses (high risk, high reward!)</li>
        </ul>
        <p className="text-gray-700 mt-4 leading-relaxed">
          The more reckless you drive in <strong>Traffic Rally</strong>, the greater the reward, but remember - a single collision can end your run instantly!
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-200">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">🏆 Tips for Success in Traffic Rally</h4>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>Master lane changes:</strong> Practice smooth transitions between lanes to avoid sudden collisions in <strong>Traffic Rally</strong>
          </li>
          <li>
            <strong>Watch traffic patterns:</strong> Observe how vehicles move and anticipate gaps before overtaking
          </li>
          <li>
            <strong>Use opposite lanes strategically:</strong> Only drive against traffic when you have a clear view ahead in <strong>Traffic Rally</strong>
          </li>
          <li>
            <strong>Maintain momentum:</strong> Avoid excessive braking - smooth acceleration is key to high scores
          </li>
          <li>
            <strong>Start conservative:</strong> Learn the traffic patterns on early levels before attempting risky maneuvers in <strong>Traffic Rally</strong>
          </li>
          <li>
            <strong>Unlock better cars:</strong> Progress through levels to access faster vehicles with improved handling
          </li>
          <li>
            <strong>Focus on checkpoints:</strong> Reaching checkpoints safely is more important than maximum speed in <strong>Traffic Rally</strong>
          </li>
        </ul>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { emoji: '🏁', title: 'Realistic 3D Highway Racing', desc: 'Experience dramatic highway racing with realistic 3D graphics, reflective lighting, and smooth motion effects in Traffic Rally' },
        { emoji: '🚗', title: 'Multiple Car Types', desc: 'Choose from sleek sports cars to powerful sedans, each with unique speed, handling, and color options' },
        { emoji: '🎮', title: 'Responsive Controls', desc: 'Enjoy smooth and intuitive control system in Traffic Rally - easy to learn, challenging to master' },
        { emoji: '⚡', title: 'Progressive Difficulty', desc: 'Face increasingly challenging levels with denser traffic, faster vehicles, and unpredictable obstacles' },
        { emoji: '🏆', title: 'Score-Based Gameplay', desc: 'Earn points through speed, overtaking, and daring moves - the more reckless, the higher the reward in Traffic Rally' },
        { emoji: '🌆', title: 'Neon-Lit City Environment', desc: 'Race through a glowing city with four bustling highway lanes and immersive urban atmosphere' },
        { emoji: '🔊', title: 'Immersive Sound Effects', desc: 'Experience realistic engine sounds and collision effects that enhance the racing experience in Traffic Rally' },
        { emoji: '🌐', title: 'Browser-Based Play', desc: 'Play Traffic Rally directly in your browser - no downloads required, completely free and accessible' },
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

