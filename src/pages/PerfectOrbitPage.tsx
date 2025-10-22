import GameDetailTemplate from '../components/GameDetailTemplate';

export default function PerfectOrbitPage() {
  const game = {
    slug: 'perfect-orbit',
    title: 'Perfect Orbit',
    subtitle: 'A Fun One-Touch Sports Simulation Game',
    description: 'Perfect Orbit is an exciting arcade sports game where players tap or click the screen to make the ideal shot, sending the ball soaring as far as possible—even into outer space! The game is quite challenging and relaxing at the same time, as you need to have perfect timing to get the "perfect" shot.',
    playUrl: 'https://games.yoplay.io/perfect-orbit/',
    thumbnail: '/images/thumbnails/perfect-orbit.png',
    rating: 5.0,
    playCount: 125000,
    tags: ['Sports', 'Arcade', 'Casual', 'Simulation', 'One-Touch', 'Skill'],
    backgroundColor: 'from-blue-500 via-purple-500 to-pink-400',
  };

  const aboutContent = (
    <div className="space-y-4">
      <p className="text-lg leading-relaxed">
        <strong>Perfect Orbit</strong> is an exciting arcade sports simulation game that combines simplicity with challenging gameplay mechanics. This one-touch sports game challenges players to achieve the perfect shot by tapping or clicking at precisely the right moment. The game's premise is straightforward yet addictive: send your ball soaring as far as possible, with the ultimate goal of launching it into outer space! Perfect Orbit offers a unique blend of relaxation and challenge, making it perfect for both casual gamers and those seeking a competitive experience. Whether you're playing during a quick break or settling in for an extended gaming session, Perfect Orbit adapts to your playstyle and keeps you entertained with its engaging mechanics and rewarding progression system.
      </p>
      <p className="text-lg leading-relaxed">
        The core gameplay of Perfect Orbit revolves around timing and precision. As the power bar moves across the screen, you must tap or click at exactly the right moment when the needle falls into the "Perfect" green zone. Achieving a perfect shot sends your ball flying further, allowing it to break through obstacles and land with a powerful bounce. Each successful shot earns you coins that can be invested in upgrades, creating a rewarding progression system that keeps you coming back for more. The timing mechanic is intuitive yet challenging, requiring players to develop muscle memory and anticipation skills. The visual feedback is immediate and satisfying, with the ball responding dynamically to your perfectly-timed shots, creating a sense of accomplishment with every successful strike.
      </p>
      <p className="text-lg leading-relaxed">
        What makes Perfect Orbit truly special is its comprehensive upgrade system. By earning coins through longer distances, you can enhance three key stats: strength, speed, and bounce. Strength determines how much power your shot generates, directly affecting the initial velocity of your ball. Speed increases the overall momentum and acceleration of your ball as it travels, allowing it to maintain velocity longer and overcome obstacles more effectively. Bounce improves the rebound capability of your ball, enabling it to recover from impacts and continue traveling further. These upgrades are essential for pushing your ball further and eventually reaching the great orbit where it can escape Earth's gravity and venture into space. The progression feels meaningful and rewarding, as each upgrade directly impacts your ability to achieve new records and unlock new challenges. Strategic players must decide which stats to prioritize based on their playstyle and the specific challenges they face.
      </p>
      <p className="text-lg leading-relaxed">
        Perfect Orbit is more than just a fun sports game; it's a challenge to your precision, timing, and endurance. The more you play, the more you'll want to enhance your swing, raise your skills, and conquer what seemed to be impossible boundaries. Whether you're looking for a quick gaming session or an extended play experience, Perfect Orbit delivers engaging gameplay that appeals to players of all skill levels. The game's simple controls combined with deep strategic elements create an experience that's easy to learn but hard to master. Beginners can enjoy casual play and gradual progression, while experienced players can pursue optimization strategies and attempt to achieve perfect scores. The difficulty curve is well-balanced, introducing new obstacles and challenges gradually to keep the experience fresh and engaging throughout your journey.
      </p>
      <p className="text-lg leading-relaxed">
        The visual design of Perfect Orbit is clean and intuitive, with a focus on clarity and responsiveness. The game runs smoothly across all devices, from desktop computers to mobile phones, ensuring a consistent experience regardless of your platform. The satisfying feedback from successful shots, combined with the visual progression of your ball traveling further and further, creates an immensely rewarding gameplay loop that keeps players engaged and motivated to improve their performance. The minimalist aesthetic doesn't distract from the core gameplay, allowing players to focus entirely on timing and strategy. Sound design complements the visual experience with satisfying audio cues for perfect shots, successful bounces, and milestone achievements, enhancing the overall sense of accomplishment.
      </p>
      <p className="text-lg leading-relaxed">
        As you progress through Perfect Orbit, you'll encounter increasingly complex obstacles and terrain variations that test your skills and strategic thinking. Early levels introduce basic mechanics and simple obstacles, allowing you to master the fundamental timing required for success. Mid-game levels introduce multiple obstacles, varying terrain heights, and environmental challenges that require more sophisticated shot planning. Advanced levels present complex puzzle-like scenarios where you must carefully plan your trajectory, consider bounce angles, and time your shots perfectly to navigate through intricate obstacle courses. Each level is designed to be challenging yet achievable, encouraging players to persist and improve their skills. The sense of progression is constant, with new challenges appearing regularly to maintain engagement and prevent the gameplay from becoming stale or repetitive.
      </p>
      <p className="text-lg leading-relaxed">
        The ultimate goal of Perfect Orbit is to reach the great orbit, a legendary achievement where your ball escapes Earth's gravity and ventures into space. This milestone represents the pinnacle of skill and strategy in the game, requiring perfect execution, optimal upgrades, and flawless timing. The journey to the great orbit is long and challenging, but incredibly rewarding. Players who achieve this feat unlock special recognition, exclusive rewards, and the satisfaction of conquering one of gaming's most challenging objectives. Beyond reaching the great orbit, players can continue to pursue personal records, attempt speedruns, and compete with friends to see who can achieve the highest scores and fastest times. The competitive aspect adds longevity to the game, encouraging players to return regularly and continuously improve their performance.
      </p>
    </div>
  );

  const howToPlayContent = (
    <ul className="space-y-3 ml-6">
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Perfect Timing is Everything:</strong> Watch as the power bar moves across the screen. Your goal is to tap or click at the exact moment when the needle falls into the green "Perfect" zone. Timing is crucial—a perfect shot sends your ball flying much further than a regular shot, allowing you to break through obstacles and achieve greater distances.
        </div>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Earn Coins and Bonuses:</strong> The further your ball travels, the more coins you earn. These coins are your currency for upgrading your stats. Longer distances also increase your bonus percentage, making it even more rewarding to push your ball further. Every shot is an opportunity to earn more and progress faster.
        </div>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Upgrade Your Stats Strategically:</strong> Use your earned coins to upgrade three key attributes: Strength (increases power), Speed (increases velocity), and Bounce (improves rebound). Each upgrade directly impacts your ball's performance, allowing you to achieve new personal records and reach previously impossible distances.
        </div>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Navigate Obstacles and Terrain:</strong> As you progress, your ball will encounter various obstacles and terrain features. Use your upgraded stats to overcome these challenges. The combination of perfect timing and strategic upgrades is key to advancing through increasingly difficult levels and reaching the great orbit.
        </div>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Reach the Great Orbit:</strong> The ultimate goal is to launch your ball into outer space by reaching the great orbit. This requires a combination of perfect shots, strategic upgrades, and consistent practice. Once you achieve this milestone, you'll unlock new challenges and opportunities to push your skills even further.
        </div>
      </li>
    </ul>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        {
          icon: '🎮',
          title: 'One-Touch Simple Controls',
          desc: 'Perfect Orbit features incredibly simple controls—just tap or click to shoot. No complex button combinations or learning curves required.'
        },
        {
          icon: '⏱️',
          title: 'Precision Timing Mechanics',
          desc: 'Master the art of perfect timing. The power bar system rewards players who can hit the green zone consistently for maximum distance.'
        },
        {
          icon: '💰',
          title: 'Rewarding Coin System',
          desc: 'Earn coins based on distance traveled. Use these coins to upgrade your strength, speed, and bounce for continuous progression.'
        },
        {
          icon: '📈',
          title: 'Progressive Upgrade System',
          desc: 'Invest in three key stats strategically. Each upgrade directly impacts your performance and unlocks new possibilities for distance records.'
        },
        {
          icon: '🚀',
          title: 'Space Exploration Goal',
          desc: 'Work towards the ultimate objective: launching your ball into outer space. The great orbit awaits those with skill and determination.'
        },
        {
          icon: '🎯',
          title: 'Challenging Obstacles',
          desc: 'Navigate through various obstacles and terrain features. Each level presents new challenges that require both skill and strategic upgrades.'
        },
        {
          icon: '📱',
          title: 'Cross-Platform Compatibility',
          desc: 'Play Perfect Orbit seamlessly on desktop, tablet, or mobile. The game adapts perfectly to any screen size and input method.'
        },
        {
          icon: '🏅',
          title: 'Personal Record Tracking',
          desc: 'Track your best distances and compete against your own records. The satisfaction of beating your previous best keeps you engaged.'
        },
      ].map((feature, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow-md border-2 border-cyan-200">
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

