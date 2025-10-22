import GameDetailTemplate from '../components/GameDetailTemplate';

export default function BroRoyalePage() {
  const game = {
    slug: 'bro-royale',
    title: 'Bro Royale',
    subtitle: 'High-Energy Online Battle Royale Shooter',
    description: 'A high-energy online shooter that throws players into intense battles full of hazards, enemies, and valuable rewards. Survive, collect coins, upgrade your gear, and crush the competition using your squad\'s unique power - the bro force!',
    playUrl: 'https://crazycattle3d.io/bro-royale',
    thumbnail: '/images/thumbnails/bro-royale.png',
    rating: 5.0,
    playCount: 125000,
    tags: ['Battle', 'Shooter', 'Multiplayer', 'Action', 'IO'],
    backgroundColor: 'from-orange-400 via-red-400 to-pink-400',
  };

  const aboutContent = (
    <div className="space-y-4">
      <p className="text-lg leading-relaxed">
        <strong>Bro Royale</strong> is a high-energy online shooter that throws players into intense battles full of hazards, enemies, and valuable rewards. Bro Royale combines the best elements of battle royale shooters with unique squad-based mechanics. Whether going solo or teaming up in Bro Royale, you'll need quick thinking and sharp reflexes to survive each round. Your goal in Bro Royale? Survive, collect coins, upgrade your gear, and crush the competition using your squad's unique power—also known as the bro force.
      </p>
      <p className="text-lg leading-relaxed">
        The gameplay in Bro Royale is fast-paced and action-packed. Whether you're outsmarting opponents in battle royale mode or holding your ground in survival missions, every second in Bro Royale counts. Use the auto-shoot function in Bro Royale to focus on movement and dodging, or switch to manual mode for precision aiming. Power-ups, traps, and enemy ambushes make every encounter in Bro Royale unpredictable—so stay alert, think fast, and always watch your back.
      </p>
      <p className="text-lg leading-relaxed">
        Bro Royale features a unique squad system that sets it apart from other shooters. The bro force mechanic in Bro Royale allows squads to combine their powers for devastating effects. Teamwork is essential in Bro Royale, and coordinating with your squad can mean the difference between victory and defeat. The progression system in Bro Royale rewards both individual skill and team coordination.
      </p>
      <p className="text-lg leading-relaxed">
        With a perfect 5.0 rating, Bro Royale has earned its place as one of the top online shooters. The community in Bro Royale is passionate and competitive, creating an exciting environment for players of all skill levels. Whether you're a casual player looking for fun or a competitive gamer seeking challenges, Bro Royale delivers an exceptional experience.
      </p>
    </div>
  );

  const howToPlayContent = (
    <ul className="space-y-2 ml-6">
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Movement:</strong> Use W, A, S, D keys to control your character's movement across the map</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Shooting:</strong> Press F to toggle auto-fire on/off, or use mouse to aim and shoot manually</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Special Abilities:</strong> Press Spacebar to use special abilities or set traps</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Collect Coins:</strong> Eliminate opponents and collect 30+ coins to complete missions</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Upgrade:</strong> Use collected coins to unlock powerful upgrades for attack, protection, and movement</span>
      </li>
    </ul>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { icon: '⚔️', title: 'Intense Battles', desc: 'Fast-paced combat with hazards and enemies everywhere' },
        { icon: '🎯', title: 'Auto-Shoot Mode', desc: 'Focus on movement while auto-fire handles the shooting' },
        { icon: '💰', title: 'Coin Collection', desc: 'Collect coins to unlock powerful upgrades and abilities' },
        { icon: '🚀', title: 'Bro Force Power', desc: 'Use your squad\'s unique power to dominate the battlefield' },
        { icon: '🛡️', title: 'Upgrade System', desc: 'Enhance attack, protection, and movement abilities' },
        { icon: '🏆', title: 'Battle Royale', desc: 'Compete against other players to be the last one standing' },
        { icon: '👥', title: 'Squad System', desc: 'Team up with friends and coordinate your bro force' },
        { icon: '🎮', title: 'Multiplayer Modes', desc: 'Solo, duo, and squad matches for every playstyle' },
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

