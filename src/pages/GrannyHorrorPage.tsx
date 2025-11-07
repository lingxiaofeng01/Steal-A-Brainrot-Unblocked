'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function GrannyHorrorPage() {
  const game = {
    slug: 'granny-horror',
    title: 'Granny Horror',
    subtitle: 'Escape Granny\'s Eerie House in Silence - A True Horror Experience',
    description: 'Step into Granny Horror\'s eerie house and try to escape in silence. Every sound can give you away. A true horror experience that tests your nerves and wits in this intense survival game!',
    playUrl: 'https://games.yoplay.io/granny-horror/?v=1',
    thumbnail: '/images/thumbnails/granny-horror.webp',
    rating: 5.0,
    playCount: 0,
    tags: ['Horror', 'Survival', '3D', 'Escape', 'Adventure', 'Action', 'Single Player'],
    backgroundColor: 'from-gray-900 via-red-900 to-black',
  };

  const aboutContent = (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed">
        There's something timeless about fear that creeps slowly instead of jumping out. <strong>Granny Horror</strong> captures exactly that — a quiet, suffocating kind of terror that doesn't need blood to make your pulse race. Created by team Yoplay.io and released in 2025, this online HTML5 survival horror lets players step into a nightmare where silence is survival. Despite being a free browser game, <strong>Granny Horror</strong> delivers tension as intense as any high-end horror release.
      </p>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-3xl">🏚️</span>
          What is the Granny Horror Game?
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          The player wakes up in a dark, locked room with only a faint flashlight on a dusty table. Their head aches, their heart pounds, and somewhere in the shadows, she waits — Granny. The goal is simple: escape her house within five days. The catch? She hears everything. Every floorboard creak, every object dropped can summon her in seconds.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          In <strong>Granny Horror</strong>, scattered items hold your way out — keys, codes, batteries, even a car engine. These are randomly placed in each game, making every attempt feel like a new nightmare. One mistake, one trap triggered, and you lose a day. Lose all five, and Granny wins. The <strong>Granny Horror</strong> experience is about patience, strategy, and nerve control.
        </p>
        <p className="text-lg leading-relaxed">
          Each sound you make feels like rolling the dice with death. The <strong>Granny Horror</strong> game turns the simplest sounds into danger and silence into your last bit of safety. It's the kind of fear that doesn't scream — it waits, it breathes, it listens.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-3xl">🎮</span>
          Granny Horror Gameplay Mechanics
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Granny Horror</strong> is more than a simple hide-and-seek game. It's a chess match with death where every move counts. The house is filled with secrets, traps, and multiple escape routes. Players must explore carefully, collect items, solve puzzles, and avoid making noise that alerts Granny to their location.
        </p>
        <p className="text-lg leading-relaxed">
          The main door, the old car in the garage, even the playhouse out back — each one hides a possible way out in <strong>Granny Horror</strong>. But freedom doesn't come easy. It takes sharp instincts, steady nerves, and a touch of cunning to outsmart the old woman with the razor-sharp hearing. The <strong>Granny Horror</strong> atmosphere keeps you on edge throughout the entire experience.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-3xl">⭐</span>
          Key Features of Granny Horror Unblocked Game
        </h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>A True Test of Nerves</strong> — Every moment in <strong>Granny Horror</strong> feels like walking barefoot on shattered glass</li>
          <li><strong>Realistic 3D Horror Atmosphere</strong> — Grounded visuals with muted colors and rough, lifelike textures</li>
          <li><strong>Multiple Escape Routes</strong> — Main door, garage car, playhouse, and more hidden paths</li>
          <li><strong>Sound-Based Detection</strong> — Granny hears everything; silence is your weapon</li>
          <li><strong>Random Item Placement</strong> — Every playthrough of <strong>Granny Horror</strong> feels unique and unpredictable</li>
          <li><strong>Five-Day Survival Challenge</strong> — Limited attempts make every decision critical</li>
          <li><strong>No Jump Scares</strong> — Pure psychological tension and atmospheric horror</li>
          <li><strong>Free Browser Game</strong> — Play <strong>Granny Horror</strong> online without downloads</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-3xl">🎨</span>
          Realistic 3D Horror Atmosphere in Granny Horror Free Online
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          Most horror games drown their scenes in an overwhelming, blood-red hue — but not the <strong>Granny Horror</strong> game. Here, the visuals stay grounded and disturbingly real, from the muted colors to the rough, lifelike textures.
        </p>
        <p className="text-lg leading-relaxed">
          Players can almost feel the darkness pressing in, the faint flicker of the flashlight, and the long, narrow corridors stretching endlessly ahead in <strong>Granny Horror</strong>. Everything blends to create a chilling atmosphere that strikes both the eyes and the mind, leaving an eerie afterimage long after the 3D game is over.
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-4">
      <p className="text-lg leading-relaxed">
        Playing <strong>Granny Horror</strong> requires careful movement and strategic thinking. Every action has consequences, and noise management is crucial for survival.
      </p>
      
      <div className="bg-white rounded-xl p-6 shadow-md border-2 border-cyan-200">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">🎯 Granny Horror Controls</h4>
        <ul className="space-y-2 text-gray-700">
          <li><strong>WASD Keys</strong> - Move around the house</li>
          <li><strong>C Key</strong> - Crouch or stand to reduce noise</li>
          <li><strong>R Key</strong> - Hide in closets, under beds, or in safe spots</li>
          <li><strong>E Key</strong> - Interact with objects, doors, and items</li>
          <li><strong>Space Bar</strong> - Drop items (be careful with noise!)</li>
          <li><strong>Left Click</strong> - Fire or spray (when equipped with weapons)</li>
          <li><strong>Mouse</strong> - Look around and aim</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md border-2 border-orange-200">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">💡 Tips to Survive the Granny Horror Nightmare</h4>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>Noise is your enemy and your ally</strong> — Make a sound in one room and slip away in another. Granny will follow the noise in <strong>Granny Horror</strong>, giving you time to escape.
          </li>
          <li>
            <strong>Don't hide too soon</strong> — If Granny sees you duck into a spot in <strong>Granny Horror</strong>, she'll check it immediately. Wait until she's distracted or in another room.
          </li>
          <li>
            <strong>Drop items softly</strong> — Furniture and shelves can muffle noise if you're careful. Use the environment to your advantage in <strong>Granny Horror</strong>.
          </li>
          <li>
            <strong>Pay attention to the floor</strong> — Avoid creaky boards in <strong>Granny Horror</strong>; they'll betray your steps and alert Granny to your location.
          </li>
          <li>
            <strong>Run, but think</strong> — Granny can't match your speed in <strong>Granny Horror</strong>, but she's always close behind. Shut doors to delay her and buy a few precious seconds.
          </li>
          <li>
            <strong>Memorize item locations</strong> — Keys, tools, and escape items spawn randomly, but learning common spots helps in <strong>Granny Horror</strong>.
          </li>
          <li>
            <strong>Use the five days wisely</strong> — Each failed escape costs you a day. Plan your route and gather items systematically in <strong>Granny Horror</strong>.
          </li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed font-semibold text-red-700">
        ⚠️ Warning: Granny hears the noise and is looking for you. Be careful in the <strong>Granny Horror</strong> game. One wrong move and she'll find you!
      </p>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { emoji: '🔇', title: 'Sound-Based Stealth', desc: 'Every footstep, door creak, and dropped item alerts Granny in Granny Horror' },
        { emoji: '🗝️', title: 'Multiple Escape Routes', desc: 'Find keys, fix the car, or discover hidden exits in Granny Horror' },
        { emoji: '🎲', title: 'Random Item Placement', desc: 'Each playthrough of Granny Horror offers a unique challenge' },
        { emoji: '⏰', title: 'Five-Day Time Limit', desc: 'Limited attempts create intense pressure in Granny Horror' },
        { emoji: '🏚️', title: 'Atmospheric Horror', desc: 'Realistic 3D graphics and eerie sound design in Granny Horror' },
        { emoji: '🧩', title: 'Puzzle Elements', desc: 'Solve environmental puzzles to unlock escape routes in Granny Horror' },
        { emoji: '🎮', title: 'Free Browser Game', desc: 'Play Granny Horror online without downloads or installations' },
        { emoji: '👵', title: 'Intelligent AI', desc: 'Granny learns your patterns and adapts her search in Granny Horror' },
      ].map((feature, index) => (
        <div key={index} className="bg-white rounded-xl p-5 shadow-md border-2 border-gray-200 hover:border-cyan-400 transition-all">
          <div className="text-4xl mb-3">{feature.emoji}</div>
          <h4 className="font-bold text-gray-800 mb-2 text-lg">{feature.title}</h4>
          <p className="text-gray-600">{feature.desc}</p>
        </div>
      ))}
    </div>
  );

  const additionalSections = [
    {
      title: 'Comparing Granny Horror with Other Horror Games',
      emoji: '🎮',
      content: (
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            Compared to jump-scare titles like Bloodmoney or other horror games, <strong>Granny Horror</strong> plays the long game. It doesn't chase with chaos; it stalks with patience. The fear isn't just about what you see — it's about what you hear, what you imagine, and what you might trigger by mistake in <strong>Granny Horror</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Granny Horror</strong> is closer to a chess match with death than a simple hide-and-seek. Unlike action-heavy horror games, <strong>Granny Horror</strong> rewards patience, planning, and careful observation. The psychological tension builds slowly, creating a more immersive and memorable horror experience.
          </p>
          <p className="text-lg leading-relaxed">
            While games like Five Nights at Freddy's rely on jump scares and limited movement, <strong>Granny Horror</strong> gives you freedom to explore while maintaining constant tension. Every room you enter, every item you pick up in <strong>Granny Horror</strong> could be the key to your escape or your downfall.
          </p>
        </div>
      ),
    },
    {
      title: 'Why Play Granny Horror?',
      emoji: '🌟',
      content: (
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            <strong>Granny Horror</strong> is perfect for players who love the slow burn of suspense rather than cheap jump scares. It's a game that truly gets under your skin, creating an atmosphere of dread that lingers long after you stop playing.
          </p>
          <p className="text-lg leading-relaxed">
            The <strong>Granny Horror</strong> experience offers high replayability thanks to random item placement and multiple escape routes. Each attempt feels fresh, and learning Granny's patterns becomes a game within the game. The five-day limit adds urgency without feeling unfair.
          </p>
          <p className="text-lg leading-relaxed">
            As a free browser game, <strong>Granny Horror</strong> is accessible to everyone. No downloads, no installations — just pure horror gaming whenever you want. The HTML5 technology ensures smooth performance across different devices, making <strong>Granny Horror</strong> playable anywhere.
          </p>
        </div>
      ),
    },
  ];

  return (
    <GameDetailTemplate
      game={game}
      aboutContent={aboutContent}
      howToPlayContent={howToPlayContent}
      featuresContent={featuresContent}
      additionalSections={additionalSections}
    />
  );
}

