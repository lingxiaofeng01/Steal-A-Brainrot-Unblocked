'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function ZombieStrikePage() {
  const game = {
    slug: 'zombie-strike',
    title: 'Zombie Strike',
    subtitle: 'Survive the Undead Chaos in This Free 3D Pixel Shooter',
    description: 'Play Zombie Strike free online! Survive endless zombie waves in this 3D pixel shooter. Unlock 30 weapons, explore 4 maps, and test your reflexes. No download required - play now!',
    playUrl: 'https://games.yoplay.io/zombie-strike/?v=1',
    thumbnail: '/images/thumbnails/zombie-strike.jpg',
    rating: 5.0,
    playCount: 0,
    tags: ['Zombie', 'Shooting', '3D', 'Survival', 'Action', 'Gun', 'First Person', 'Arcade'],
    backgroundColor: 'from-gray-900 via-green-900 to-black',
  };
  const aboutContent = (
    <div className="space-y-6">
      <p className="text-lg leading-relaxed">
        <strong>Zombie Strike</strong> drops players into a crumbling world where every echo hints at danger. This free 3D browser shooter mixes pixel charm with grim survival energy. The story opens in broad daylight inside a shattered church — sunlight bleeding through broken windows, dust swirling over fallen pews, and silence thick enough to make you tense. That peace doesn't last long. A low growl breaks it, and from that moment, survival becomes the only rule.
      </p>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-3xl">🎮</span>
          What is Zombie Strike?
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Zombie Strike</strong> helps players get their footing with clear on-screen hints in white text, teaching every move without slowing the pace. The mechanics seem simple at first, but the deeper you go, the more every action, reload, and heartbeat begins to matter. Once the first two zombies fall, the doors to the Gun Shop creak open — and the real hunt begins.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The shop in <strong>Zombie Strike</strong> offers 30 weapons waiting to be unlocked. At first, the player only wields a red wrench with black bolts — clunky but symbolic, a tool of survival before the storm. After earning your first cash, you can dive into the shop where an arsenal awaits — from handguns to assault rifles like the M27.
        </p>
        <p className="text-lg leading-relaxed">
          The pace picks up quickly in <strong>Zombie Strike</strong>. The moment the first shot rings out, the dead come flooding in — a nonstop rush that pushes both reflexes and focus to the edge. Watch out for the smaller ones; those quick little zombies sprint like flashes of hunger, far swifter and deadlier than the grown ones.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-3xl">🗺️</span>
          Four Unique Maps in Zombie Strike
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          <strong>Zombie Strike</strong> unfolds across four maps — Church (Free), House ($1000), Hospital ($3500), and Sewer ($7000). Each one expands the horror, not just in space but in tension. Players must earn enough money to unlock them, giving each victory real weight. Every map in <strong>Zombie Strike</strong> brings new challenges and atmospheric dread.
        </p>
        <p className="text-lg leading-relaxed">
          From pistols to sniper rifles, <strong>Zombie Strike</strong> offers variety that's pure candy for gun enthusiasts. Each weapon not only changes how you fight but also how you feel the fight. Picking the right gun becomes an art — one that separates survivors from statistics in <strong>Zombie Strike</strong>.
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-4">
      <p className="text-lg leading-relaxed">
        Playing <strong>Zombie Strike</strong> requires quick reflexes and strategic weapon management. Master the controls and understand the mechanics to survive the zombie apocalypse.
      </p>

      <div className="bg-white rounded-xl p-6 shadow-md border-2 border-cyan-200">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">🎯 Zombie Strike Controls</h4>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Move:</strong> WASD or Arrow Keys to navigate through the zombie-infested maps</li>
          <li><strong>Attack/Shoot:</strong> Hold Left Mouse Button to fire your weapon in Zombie Strike</li>
          <li><strong>Open Shop:</strong> Press F to access the weapon shop and upgrade your arsenal</li>
          <li><strong>Reload:</strong> Watch your ammo count and reload strategically in Zombie Strike</li>
          <li><strong>Mouse:</strong> Look around and aim at zombies</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md border-2 border-orange-200">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">💡 Gameplay Mechanics</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          <strong>Zombie Strike</strong> starts you with a basic wrench, but survival demands better firepower. Eliminate zombies to earn cash, then visit the shop to unlock from 30 different weapons. Each gun in <strong>Zombie Strike</strong> has unique stats affecting damage, fire rate, and reload speed.
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          Two numbers flash near your weapon in <strong>Zombie Strike</strong> — the rounds in your current clip and total ammo remaining. Every reload counts, every second of hesitation could mean death. This detail sets the pace of every encounter in <strong>Zombie Strike</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The moment the first shot rings out in <strong>Zombie Strike</strong>, zombies flood in from all directions. Small zombies move incredibly fast, while armored zombies soak up damage. Managing different zombie types is crucial to surviving in <strong>Zombie Strike</strong>.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-200">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">🗺️ Map Progression</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          <strong>Zombie Strike</strong> features four distinct maps, each requiring money to unlock:
        </p>
        <ul className="space-y-2 text-gray-700 ml-4">
          <li><strong>Church (Free):</strong> Your starting point in Zombie Strike — shattered windows and fallen pews</li>
          <li><strong>House ($1000):</strong> Tight corridors and multiple rooms create close-quarters combat</li>
          <li><strong>Hospital ($3500):</strong> Sterile halls echo with groans in this Zombie Strike nightmare</li>
          <li><strong>Sewer ($7000):</strong> The ultimate challenge — one narrow path with nowhere to run</li>
        </ul>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { emoji: '🗺️', title: 'Four Pixel Worlds', desc: 'Zombie Strike unfolds across four unique maps — Church, House, Hospital, and Sewer. Each location expands the horror with new layouts and intensified zombie waves.' },
        { emoji: '🔫', title: '30 Weapon Arsenal', desc: 'From pistols to assault rifles, Zombie Strike offers 30 different weapons. Start with a wrench, progress to handguns, and eventually wield powerful rifles like the M27.' },
        { emoji: '🎯', title: 'Realistic Ammo System', desc: 'Zombie Strike displays clip ammo and total rounds remaining. Every reload matters — timing your reloads poorly means becoming zombie food.' },
        { emoji: '🧟', title: 'Diverse Zombie Types', desc: 'Face multiple zombie variants in Zombie Strike — fast-moving small zombies that sprint at you, standard walkers, and heavily armored zombies that absorb bullets.' },
        { emoji: '🎮', title: 'Browser-Based 3D', desc: 'Play Zombie Strike directly in your browser — no downloads required. The 3D pixel graphics create atmospheric environments while maintaining smooth performance.' },
        { emoji: '💰', title: 'Progression System', desc: 'Earn cash by eliminating zombies in Zombie Strike. Use your earnings to unlock new weapons and maps for better firepower and new battlefields.' },
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

