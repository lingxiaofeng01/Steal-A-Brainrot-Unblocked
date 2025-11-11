import GameDetailTemplate from '../components/GameDetailTemplate';

export default function WhiteHorizonPage() {
  const game = {
    slug: 'white-horizon',
    title: 'White Horizon',
    subtitle: 'Master the Art of Skiing in This Rhythm-Based Mountain Adventure',
    description: 'White Horizon transforms skiing into a mesmerizing blend of rhythm and precision. Glide through dynamic weather conditions, unlock unique skiers, and master the delicate balance on endless snow-covered slopes in this captivating browser game.',
    playUrl: 'https://yoplay.io/white-horizon.embed',
    thumbnail: '/images/thumbnails/white-horizon.jpg',
    rating: 5.0,
    playCount: 0,
    tags: ['Skiing', 'Sports', 'Skill', '3D', 'Physics', 'Casual', 'Single Player', 'Challenge', 'Endless Runner', 'Action', 'Unblocked', 'Browser'],
    backgroundColor: 'from-blue-200 via-cyan-100 to-white',
  };

  const aboutContent = (
    <>
      <p className="text-lg leading-relaxed">
        <strong>White Horizon</strong> is not your typical high-speed racing game. Instead, it offers a unique skiing experience that emphasizes rhythm, timing, and environmental awareness. Set against breathtaking mountain landscapes, <strong>White Horizon</strong> invites players to glide through shifting weather patterns while maintaining perfect balance on endless snow-covered slopes.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        The game begins in serene silence—only the whisper of wind and the crunch of snow beneath your skis. Each slope appears gentle at first glance, but the terrain quickly reveals its true nature with sudden folds and unexpected drops. This is where <strong>White Horizon</strong> truly comes alive, creating moments of controlled panic followed by the deep satisfaction of landing perfectly.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        Unlike traditional skiing games that focus purely on speed, <strong>White Horizon</strong> rewards patience and precision. The mountain doesn't care how fast you descend—it cares about how steady you remain. Every jump, every flip, and every landing contributes to your overall score, making each run a unique performance of skill and timing.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        The visual design of <strong>White Horizon</strong> creates an immersive atmosphere that changes throughout your journey. Morning runs feature pale golden light and gentle breezes, while nighttime descents transform the landscape into a mysterious realm where snow glows faintly under moonlight. Rain adds another layer of challenge, making jumps feel heavier and requiring adjusted timing.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        What sets <strong>White Horizon</strong> apart is its physics engine. Every movement feels authentic—the weight of your skier, the resistance of snow, the arc of each jump. The game doesn't just simulate skiing; it captures the essence of the sport, making you feel every subtle shift in momentum and balance.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        As you progress through <strong>White Horizon</strong>, you'll unlock new skiers, each with unique characteristics that affect gameplay. Some excel at jumps, others at tricks, and some help you navigate challenging terrain more easily. This progression system keeps the experience fresh and encourages experimentation with different playstyles.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        The level design in <strong>White Horizon</strong> follows a carefully crafted difficulty curve. You start from Level 1 and advance steadily, with each level presenting specific goals such as traveling certain distances, catching llamas, or performing tricks. Achieving all objectives earns three stars, providing clear targets for improvement.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        <strong>White Horizon</strong> also features a comprehensive upgrade system. Coins collected during runs can be spent in the workshop to improve your equipment, making turns smoother and landings more forgiving. This creates a satisfying loop of play, earn, upgrade, and improve that keeps players engaged for hours.
      </p>
    </>
  );

  const howToPlayContent = (
    <>
      <p className="text-lg leading-relaxed">
        <strong>White Horizon</strong> uses an elegantly simple control scheme that belies its depth. The entire game is controlled with just the spacebar, making it accessible to players of all skill levels while maintaining a high skill ceiling for those seeking mastery.
      </p>
      <div className="bg-white/50 rounded-xl p-6 my-4 border-2 border-cyan-300">
        <h3 className="text-xl font-bold text-gray-800 mb-3">🎮 Controls</h3>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Spacebar (Tap):</strong> Perform a quick jump to clear obstacles</li>
          <li><strong>Spacebar (Hold):</strong> Execute flips mid-air for bonus points</li>
          <li><strong>Timing:</strong> Release at the right moment to land safely</li>
        </ul>
      </div>
      <p className="text-lg leading-relaxed mt-4">
        When you first start <strong>White Horizon</strong>, a brief tutorial guides you through the fundamentals. You'll learn to jump over rocks, glide through valleys, and collect coins scattered across the slopes. These early runs feel forgiving, allowing you to build confidence before the terrain becomes more demanding.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        After each run in <strong>White Horizon</strong>, the game tracks your performance across multiple metrics: distance covered, trick score, coins earned, llamas caught, chasms cleared, and goals achieved. These statistics aren't just numbers—they represent your growing mastery of the mountain's rhythm.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        The key to success in <strong>White Horizon</strong> is understanding that the spacebar controls rhythm, not just reaction. Feel the flow of the terrain before pressing the key. Flip only when the slope provides adequate space, as tricks earn more points but severely punish overconfidence.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        Weather conditions in <strong>White Horizon</strong> significantly impact gameplay. Rain shortens jump distances, requiring earlier takeoffs. Darkness obscures terrain features, demanding memorization and anticipation. Adapting to these changing conditions is essential for consistent high scores.
      </p>
    </>
  );

  const featuresContent = (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white/50 rounded-xl p-6 border-2 border-cyan-300">
          <h3 className="text-xl font-bold text-gray-800 mb-3">🌤️ Dynamic Weather System</h3>
          <p className="text-gray-700">
            <strong>White Horizon</strong> features a living world where weather patterns constantly evolve. Experience morning light, nighttime mystery, and challenging rain conditions that fundamentally change how you approach each run.
          </p>
        </div>
        <div className="bg-white/50 rounded-xl p-6 border-2 border-cyan-300">
          <h3 className="text-xl font-bold text-gray-800 mb-3">⚖️ Realistic Physics Engine</h3>
          <p className="text-gray-700">
            Every movement in <strong>White Horizon</strong> feels authentic. The physics system accurately simulates weight, momentum, and snow resistance, creating an immersive skiing experience that rewards skillful play.
          </p>
        </div>
        <div className="bg-white/50 rounded-xl p-6 border-2 border-cyan-300">
          <h3 className="text-xl font-bold text-gray-800 mb-3">🎿 Unlockable Skiers</h3>
          <p className="text-gray-700">
            Progress through <strong>White Horizon</strong> to unlock diverse skiers, each with unique abilities. Some excel at jumps, others at tricks, providing strategic variety and encouraging different playstyles.
          </p>
        </div>
        <div className="bg-white/50 rounded-xl p-6 border-2 border-cyan-300">
          <h3 className="text-xl font-bold text-gray-800 mb-3">📊 Progressive Level System</h3>
          <p className="text-gray-700">
            <strong>White Horizon</strong> offers carefully designed levels with specific objectives. Complete goals to earn stars and unlock new challenges, creating a satisfying sense of progression.
          </p>
        </div>
        <div className="bg-white/50 rounded-xl p-6 border-2 border-cyan-300">
          <h3 className="text-xl font-bold text-gray-800 mb-3">🛠️ Equipment Upgrades</h3>
          <p className="text-gray-700">
            Spend coins earned in <strong>White Horizon</strong> to upgrade your equipment in the workshop. Improve turn responsiveness and landing stability to tackle increasingly difficult slopes.
          </p>
        </div>
        <div className="bg-white/50 rounded-xl p-6 border-2 border-cyan-300">
          <h3 className="text-xl font-bold text-gray-800 mb-3">🎯 Skill-Based Gameplay</h3>
          <p className="text-gray-700">
            <strong>White Horizon</strong> rewards precision over speed. Master the rhythm of the mountain, time your jumps perfectly, and execute flawless tricks to achieve the highest scores.
          </p>
        </div>
        <div className="bg-white/50 rounded-xl p-6 border-2 border-cyan-300">
          <h3 className="text-xl font-bold text-gray-800 mb-3">🦙 Collectible Elements</h3>
          <p className="text-gray-700">
            Catch llamas and collect coins throughout your runs in <strong>White Horizon</strong>. These collectibles not only boost your score but often indicate safer paths through treacherous terrain.
          </p>
        </div>
        <div className="bg-white/50 rounded-xl p-6 border-2 border-cyan-300">
          <h3 className="text-xl font-bold text-gray-800 mb-3">🌐 Browser-Based Accessibility</h3>
          <p className="text-gray-700">
            Play <strong>White Horizon</strong> directly in your browser without downloads. The game runs smoothly on most devices, offering unblocked access to this captivating skiing adventure.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-6 border-2 border-cyan-400">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Pro Tips for White Horizon</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <strong>Master the Rhythm:</strong> In <strong>White Horizon</strong>, the spacebar controls rhythm, not just reaction. Feel the terrain's flow before making your move.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🌧️</span>
            <div>
              <strong>Adapt to Weather:</strong> Rain in <strong>White Horizon</strong> shortens jumps, while darkness hides terrain features. Adjust your strategy accordingly.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">💰</span>
            <div>
              <strong>Invest Wisely:</strong> Spend coins earned in <strong>White Horizon</strong> on meaningful upgrades that smooth out turns and improve landing stability.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🦙</span>
            <div>
              <strong>Follow the Llamas:</strong> In <strong>White Horizon</strong>, llamas often mark safer paths or hint at upcoming jumps. Pay attention to their placement.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🎪</span>
            <div>
              <strong>Practice Patience:</strong> <strong>White Horizon</strong> rewards controlled, deliberate play over reckless speed. Take time to learn each slope's unique rhythm.
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-8 bg-white/50 rounded-xl p-6 border-2 border-cyan-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🆚 White Horizon vs Similar Games</h3>
        <p className="text-lg leading-relaxed text-gray-700">
          While games like <strong>Snow Road 3D</strong> focus on pure speed and <strong>Escape Road Winter</strong> emphasizes puzzle-like precision, <strong>White Horizon</strong> occupies a unique middle ground. It's quieter and more deliberate than typical endless runners, prioritizing rhythm and control over frantic reactions.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          Where <strong>Snow Road 3D</strong> makes your pulse race, <strong>White Horizon</strong> encourages you to slow down just enough to feel every small success. The snow feels alive, the movement organic, and the overall experience more meditative than most skiing games.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          <strong>White Horizon</strong> stands out by making you chase rhythm rather than finish lines. It's less about survival and more about finding perfect control within constant motion, creating a uniquely satisfying gameplay loop.
        </p>
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6 border-2 border-cyan-400">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">❓ Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Is White Horizon free to play?</h4>
            <p className="text-gray-700">
              Yes! <strong>White Horizon</strong> is completely free and runs directly in your browser as an HTML5 game. No downloads or installations required.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Can I select any level in White Horizon?</h4>
            <p className="text-gray-700">
              No. <strong>White Horizon</strong> uses a progressive unlock system. You must complete each level's goals to advance to the next, ensuring a balanced difficulty curve.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">How do I perform tricks in White Horizon?</h4>
            <p className="text-gray-700">
              Press and hold the spacebar while airborne in <strong>White Horizon</strong>. The longer you hold, the more complex the flip—but also the riskier the landing.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">What makes White Horizon different from other skiing games?</h4>
            <p className="text-gray-700">
              <strong>White Horizon</strong> emphasizes rhythm and precision over pure speed. Its dynamic weather system, realistic physics, and meditative gameplay create a unique experience that rewards patience and skill.
            </p>
          </div>
        </div>
      </div>

      <p className="text-lg leading-relaxed mt-8 text-gray-700">
        <strong>White Horizon</strong> offers a refreshing take on skiing games, combining stunning visuals, realistic physics, and deeply satisfying gameplay mechanics. Whether you're seeking a relaxing experience or a challenging test of skill, <strong>White Horizon</strong> delivers an unforgettable journey down endless snow-covered slopes. Start your adventure today and discover why <strong>White Horizon</strong> has captivated players worldwide!
      </p>
    </>
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

