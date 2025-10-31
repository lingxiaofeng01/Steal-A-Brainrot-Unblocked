'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function PlanetBusterPage() {
  const game = {
    slug: 'planet-buster',
    title: 'Planet Buster',
    subtitle: 'One-Button Cosmic Destruction - Blast Planets and Conquer the Universe',
    description: 'Planet Buster introduces one-button cosmic casual chaos! Upgrade missiles, destroy planets, and face explosive boss battles. Join the fun destruction now!',
    playUrl: 'https://planet-buster.1games.io/',
    thumbnail: '/images/thumbnails/planet-buster.jpg',
    rating: 4.4,
    playCount: 393,
    tags: ['Casual', 'Simulation', '1Games', 'Idle', 'Weapon', 'One Button', 'Destroy', 'Asteroid', 'Action', 'Clicker'],
    backgroundColor: 'from-purple-600 via-indigo-600 to-blue-600',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🌌 Planet Buster: A Creative Destruction Playground</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Welcome to <strong>Planet Buster</strong>, a marvelous casual game where destruction meets simplicity! In this addictive one-button experience, players witness planets crumble layer by layer under a relentless storm of missiles. The <strong>Planet Buster</strong> game features a steady progression system that keeps the pace exciting, filled with powerful upgrades, unique planet textures, and challenging boss encounters. All in-game experiences push your destructive potential further as you master the art of planetary annihilation.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mt-4">
          The clean interface and rhythmic pacing of <strong>Planet Buster</strong> turn each level into a visual spectacle of endless satisfaction. Whether you're a casual gamer looking for quick entertainment or a dedicated player seeking to maximize your destruction efficiency, <strong>Planet Buster</strong> delivers an engaging experience that combines strategic upgrades with satisfying visual feedback. Start blasting and reshape the universe in this cosmic adventure!
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border-2 border-purple-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">🎯 Gameplay Breakdown</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Each round of <strong>Planet Buster</strong> begins with a rotating asteroid waiting to be shattered. Missiles automatically launch from your base, steadily chipping away at each surface layer until the core detonates in a radiant blast. Every destroyed planet in <strong>Planet Buster</strong> rewards you with currency, which is used to enhance missile power and unlock faster destroy attack rates.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          As new planets appear in <strong>Planet Buster</strong>, durability rises, introducing tougher defenses and unique compositions. Boss planets arrive periodically, bringing reinforced crusts that challenge your precision and patience. Strategic upgrades become vital to sustaining progress in <strong>Planet Buster</strong>, while gravity influences the missile's arc, adding tactical depth to every strike.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The <strong>Planet Buster</strong> progression system ensures that every session feels rewarding. As you accumulate resources, you'll unlock new missile types, increase your firing rate, and discover special abilities that make planetary destruction even more spectacular. The game's balance between idle progression and active clicking creates a perfect blend of relaxation and engagement.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">🚀 Advanced Strategies for Planet Buster</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Mastering <strong>Planet Buster</strong> requires understanding the upgrade economy. Focus your initial investments on power and spawn rate upgrades before branching into specialized enhancements. In <strong>Planet Buster</strong>, timing your clicks during boss battles can significantly accelerate destruction, especially when targeting weak layers revealed through strategic observation.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The gravity system in <strong>Planet Buster</strong> adds a layer of complexity that skilled players can exploit. By adjusting gravity settings, you can control missile trajectories to hit multiple weak points simultaneously. This technique becomes crucial in later stages of <strong>Planet Buster</strong> where boss planets feature complex defensive patterns.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Don't overlook the offline progression feature in <strong>Planet Buster</strong>. Even when you're away, your missiles continue their relentless assault, earning you coins that accumulate for your next session. This makes <strong>Planet Buster</strong> perfect for both active play sessions and passive progression, ensuring you're always making progress toward cosmic domination.
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">💥 Why Planet Buster Stands Out</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Planet Buster</strong> distinguishes itself in the crowded casual gaming market through its perfect balance of simplicity and depth. The one-button control scheme makes <strong>Planet Buster</strong> accessible to players of all skill levels, while the strategic upgrade system provides depth for those seeking optimization challenges. The visual feedback in <strong>Planet Buster</strong> is particularly satisfying, with each planetary explosion delivering a rewarding burst of color and particles.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The variety of planets in <strong>Planet Buster</strong> keeps gameplay fresh across extended sessions. From rocky asteroids to crystalline spheres, each planet type presents unique visual characteristics and destruction patterns. Boss encounters in <strong>Planet Buster</strong> introduce additional challenge layers, requiring players to adapt their strategies and upgrade priorities.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Community feedback has consistently praised <strong>Planet Buster</strong> for its addictive gameplay loop and satisfying progression. The game's developers continue to support <strong>Planet Buster</strong> with regular updates, introducing new planet types, upgrade options, and special events that keep the experience fresh for long-term players.
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">🎮 Planet Buster Community and Updates</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The <strong>Planet Buster</strong> community has grown rapidly since launch, with players sharing strategies, upgrade paths, and achievement milestones. Online forums dedicated to <strong>Planet Buster</strong> feature detailed guides on optimal upgrade sequences and boss battle tactics. Many players have created video content showcasing advanced <strong>Planet Buster</strong> techniques and speedrun attempts.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Regular updates to <strong>Planet Buster</strong> introduce seasonal events and limited-time challenges. These events often feature exclusive planet types and special rewards that enhance the core <strong>Planet Buster</strong> experience. The development team actively engages with the community, incorporating player feedback into future updates and balancing adjustments.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Whether you're playing <strong>Planet Buster</strong> for five minutes or five hours, the game adapts to your playstyle. The combination of idle mechanics and active engagement makes <strong>Planet Buster</strong> perfect for quick breaks or extended gaming sessions. Join millions of players worldwide who have discovered the addictive joy of planetary destruction in <strong>Planet Buster</strong>!
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-4">
      <div className="bg-white rounded-xl p-5 shadow-md border-2 border-purple-200">
        <h4 className="font-bold text-gray-800 mb-2 text-lg">🖱️ Simple Controls</h4>
        <p className="text-gray-700">
          Click on the planet to accelerate missile fire and increase destruction speed. The one-button control scheme makes <strong>Planet Buster</strong> incredibly easy to learn but challenging to master.
        </p>
      </div>
      <div className="bg-white rounded-xl p-5 shadow-md border-2 border-purple-200">
        <h4 className="font-bold text-gray-800 mb-2 text-lg">⚡ Upgrade Strategy</h4>
        <p className="text-gray-700">
          Focus upgrades on power and spawn rate before others. In <strong>Planet Buster</strong>, strategic resource allocation is key to progressing through tougher planets efficiently.
        </p>
      </div>
      <div className="bg-white rounded-xl p-5 shadow-md border-2 border-purple-200">
        <h4 className="font-bold text-gray-800 mb-2 text-lg">🎯 Boss Battle Tips</h4>
        <p className="text-gray-700">
          Click consistently to boost missile speed during boss fights. Watch timing carefully to trigger explosions at weak layers for maximum damage in <strong>Planet Buster</strong>.
        </p>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { icon: '💪', title: 'Power Upgrades', desc: 'Strengthen missiles for heavier impact and faster planet destruction' },
        { icon: '🚀', title: 'Spawn Rate Boosts', desc: 'Drop more bombs per second for massive combos and chain reactions' },
        { icon: '🌍', title: 'Gravity Adjustments', desc: 'Change how bombs fall and explode strategically for optimal damage' },
        { icon: '🎯', title: 'Accuracy Control', desc: 'Tighten precision to make each hit more effective against tough planets' },
        { icon: '💰', title: 'Offline Progression', desc: 'Earn coins automatically while away from the game' },
        { icon: '👾', title: 'Boss Battles', desc: 'Face challenging boss planets with unique defensive patterns' },
        { icon: '🎨', title: 'Visual Variety', desc: 'Destroy planets with unique textures and explosion effects' },
        { icon: '📈', title: 'Progressive Difficulty', desc: 'Experience steadily increasing challenges that test your skills' },
      ].map((feature, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow-md border-2 border-purple-200 hover:border-purple-400 transition-colors">
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

