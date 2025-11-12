import GameDetailTemplate from '../components/GameDetailTemplate';

export default function StickmanArmyTeamBattlePage() {
  const game = {
    slug: 'stickman-army-team-battle',
    title: 'Stickman Army: Team Battle',
    subtitle: 'The Ultimate Real-Time Strategy Battle Game 2025',
    description: 'Stickman Army: Team Battle is an intense real-time strategy game that combines lane-based defense and attack tactics with simple yet engaging Stickman characters. Build your ultimate squad, upgrade weapons, and dominate the battlefield in this action-packed tactical combat experience.',
    playUrl: 'https://narrow-one.github.io/n6/stickman-army-team-battle/',
    thumbnail: '/images/thumbnails/stickman-army-team-battle.png',
    rating: 5.0,
    playCount: 0,
    tags: ['Stickman', 'Action', 'Strategy', 'Battle', 'War', 'Multiplayer', 'Fighting', 'Skill', 'Casual', 'Unblocked', 'Browser', '2D', 'Arcade', 'Defense', 'RPG'],
    backgroundColor: 'from-red-400 via-orange-400 to-yellow-300',
  };

  const aboutContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">About Stickman Army: Team Battle</h2>
      
      <p className="text-lg leading-relaxed text-gray-700">
        <strong>Stickman Army: Team Battle</strong> is a captivating real-time strategy game that brings together the best elements of lane-based defense, tactical combat, and RPG progression. In this thrilling Stickman Army experience, you command the Red Team against the formidable Black Team (CPU) in intense battlefield confrontations. The game masterfully combines simple Stickman graphics with deep strategic gameplay, making Stickman Army: Team Battle accessible to newcomers while offering enough depth to challenge veteran strategy gamers.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        What sets Stickman Army: Team Battle apart from other strategy games is its perfect balance between automatic combat mechanics and player-controlled tactical decisions. Your Stickman Army units fight automatically on a 2D battlefield, but success depends entirely on your strategic choices: which units to deploy, when to upgrade weapons, and how to position your forces for maximum effectiveness. Every battle in Stickman Army: Team Battle is a test of your tactical thinking and resource management skills.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        The game features a comprehensive upgrade system where you can enhance your Stickman Army with various weapons including pistols, shotguns, rifles, grenades, and melee weapons like swords. Each weapon type in Stickman Army: Team Battle serves a unique tactical purpose, allowing you to customize your squad composition based on the enemy's defensive setup. The wrench icon represents defensive and repair capabilities, adding another layer of strategic depth to your Stickman Army management.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        Set in vibrant outdoor environments reminiscent of tropical or rural battlefields, Stickman Army: Team Battle creates an immersive combat atmosphere with its cartoonish art style. The visual design features red soil, lush trees, and rolling hills that serve as the backdrop for your epic Stickman Army battles. Despite the simple Stickman character design, each unit is highly recognizable through color coding, equipment, and special symbols like the yellow Clover emblem on shield-bearing defenders.
      </p>

      <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-800">Game Modes & Campaign Structure</h3>
      
      <p className="text-lg leading-relaxed text-gray-700">
        Stickman Army: Team Battle offers an extensive campaign mode divided into multiple levels, each marked by a red flag objective. As you progress through the Stickman Army campaign, you'll face increasingly challenging enemy formations that require adaptive strategies and upgraded units. The level-based progression system ensures that Stickman Army: Team Battle remains engaging throughout your entire playthrough, constantly introducing new tactical challenges and enemy types.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        The combat system in Stickman Army: Team Battle is designed for clarity and strategic visibility. Health bars displayed above each Stickman's head allow you to monitor battle progress in real-time, while damage numbers (-15, -8, -3) and healing indicators (+60 HP) appear prominently on screen. This transparent feedback system makes it easy to evaluate the effectiveness of your Stickman Army tactics and adjust your strategy mid-battle.
      </p>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">How to Play Stickman Army: Team Battle</h2>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">🎮 Basic Controls & Mechanics</h3>
        
        <div className="space-y-4 text-gray-700">
          <p className="text-lg leading-relaxed">
            <strong>Unit Deployment:</strong> Click or tap on unit icons to deploy Stickman Army soldiers onto the battlefield. Each unit type has a specific cost and cooldown timer, requiring careful resource management in Stickman Army: Team Battle.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>Automatic Combat:</strong> Once deployed, your Stickman Army units automatically engage enemies within range. The semi-automatic combat system in Stickman Army: Team Battle allows you to focus on strategic decisions rather than micromanagement.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>Weapon Upgrades:</strong> Use earned resources to upgrade your Stickman Army arsenal. Access the upgrade menu to enhance pistols, shotguns, rifles, grenades, and swords, making your units more effective in Stickman Army: Team Battle combat.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>Defense & Repair:</strong> Utilize wrench icons to repair damaged structures and strengthen defensive positions. Proper use of defensive tools is crucial for victory in Stickman Army: Team Battle's tougher levels.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200 mt-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">⚔️ Team Composition Strategy</h3>
        
        <div className="space-y-4 text-gray-700">
          <p className="text-lg leading-relaxed">
            <strong>Red Team (Player):</strong> Your Stickman Army forces are identified by red coloring. Build a balanced squad in Stickman Army: Team Battle by mixing ranged attackers, melee fighters, and support units for optimal battlefield performance.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>Black Team (CPU):</strong> Enemy forces appear in black and often employ defensive tactics with shields and fortified positions. Study enemy patterns in Stickman Army: Team Battle to develop effective counter-strategies.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>Clover Units:</strong> Special black Stickman defenders with large shields and yellow Clover symbols represent high-defense units. These require concentrated firepower or flanking maneuvers to defeat in Stickman Army: Team Battle.
          </p>

          <p className="text-lg leading-relaxed">
            <strong>Level Progression:</strong> Advance through Stickman Army: Team Battle's campaign by capturing red flag objectives. Each level completion unlocks new units, weapons, and tactical options for your Stickman Army.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200 mt-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">💡 Advanced Tactics</h3>
        
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <p className="text-lg leading-relaxed">
              <strong>Focus Fire:</strong> Concentrate your Stickman Army's attacks on high-value targets like enemy commanders or shield units to break through defensive lines in Stickman Army: Team Battle.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">⚡</span>
            <p className="text-lg leading-relaxed">
              <strong>Resource Management:</strong> Balance spending between unit deployment and weapon upgrades. Effective resource allocation is key to building a powerful Stickman Army in Team Battle.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🛡️</span>
            <p className="text-lg leading-relaxed">
              <strong>Defensive Positioning:</strong> Use terrain and defensive structures to your advantage. Proper positioning can multiply your Stickman Army's effectiveness in Team Battle scenarios.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🔄</span>
            <p className="text-lg leading-relaxed">
              <strong>Adaptive Strategy:</strong> Monitor health bars and damage numbers to adjust your Stickman Army tactics in real-time during Team Battle engagements.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Key Features of Stickman Army: Team Battle</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { 
            icon: '⚔️', 
            title: 'Real-Time Strategy Combat', 
            desc: 'Experience intense lane-based battles where your Stickman Army fights automatically while you make crucial tactical decisions in Team Battle mode' 
          },
          { 
            icon: '🎖️', 
            title: 'Comprehensive Upgrade System', 
            desc: 'Enhance your Stickman Army with diverse weapons including pistols, shotguns, rifles, grenades, and swords in Team Battle progression' 
          },
          { 
            icon: '🏆', 
            title: 'Campaign Mode with Multiple Levels', 
            desc: 'Progress through an extensive Stickman Army campaign in Team Battle, each level offering unique challenges and red flag objectives' 
          },
          { 
            icon: '👥', 
            title: 'Red vs Black Team Warfare', 
            desc: 'Command the Red Team against AI-controlled Black forces in strategic Stickman Army Team Battle confrontations' 
          },
          { 
            icon: '💪', 
            title: 'Character Leveling & Skills', 
            desc: 'Level up your Stickman Army units to increase their combat effectiveness and unlock new abilities in Team Battle' 
          },
          { 
            icon: '🎨', 
            title: 'Vibrant Cartoon Graphics', 
            desc: 'Enjoy colorful outdoor battlefields with tropical themes and clear visual feedback in Stickman Army: Team Battle' 
          },
          { 
            icon: '🛡️', 
            title: 'Special Defense Units', 
            desc: 'Face challenging Clover shield units and develop counter-tactics for your Stickman Army in Team Battle scenarios' 
          },
          { 
            icon: '📊', 
            title: 'Transparent Combat Feedback', 
            desc: 'Monitor health bars, damage numbers, and healing effects to optimize your Stickman Army strategy in Team Battle' 
          },
        ].map((feature, i) => (
          <div key={i} className="bg-white rounded-xl p-4 shadow-md border-2 border-red-200 hover:border-red-400 transition-colors">
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

      <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-6 border-2 border-red-300 mt-8">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">🎯 Why Play Stickman Army: Team Battle?</h3>
        
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Stickman Army: Team Battle stands out as the perfect choice for strategy game enthusiasts who appreciate accessible gameplay combined with tactical depth. Whether you're a casual gamer looking for entertaining Stickman Army battles or a hardcore strategist seeking challenging Team Battle scenarios, this game delivers an exceptional experience. The combination of automatic combat mechanics and strategic decision-making in Stickman Army: Team Battle creates a unique gameplay loop that's both relaxing and mentally engaging.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          The game's unblocked browser-based format means you can enjoy Stickman Army: Team Battle anytime, anywhere, without downloads or installations. Jump into intense Stickman Army warfare during breaks, compete for high scores, and master the art of tactical combat in Team Battle mode. With its charming cartoon aesthetics, deep upgrade systems, and satisfying progression, Stickman Army: Team Battle offers endless hours of strategic entertainment that will keep you coming back for more epic battles!
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

