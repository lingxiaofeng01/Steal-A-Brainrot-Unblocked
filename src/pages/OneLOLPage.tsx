import GameDetailTemplate from '../components/GameDetailTemplate';

export default function OneLOLPage() {
  const game = {
    slug: '1v1-lol',
    title: '1v1 LOL',
    subtitle: 'The Ultimate Battle Royale Showdown',
    description: 'Join over 80 million players in 1V1.LOL Champions – the fast-paced 3rd-person hero shooter! Build, battle, and become a champion in this intense multiplayer experience.',
    playUrl: 'https://1v1.lol/?mp_assets=https%3A%2F%2Fs2.minijuegosgratis.com%2F&mp_embed=0&mp_game_id=232057&mp_game_uid=1v1-lol&mp_game_url=https%3A%2F%2Fwww.miniplay.com%2Fembed%2F1v1-lol&mp_int=1&mp_locale=en_US&mp_player_type=IFRAME&mp_site_https_url=https%3A%2F%2Fwww.miniplay.com%2F&mp_site_name=miniplay.com&mp_site_url=https%3A%2F%2Fwww.miniplay.com%2F&mp_timezone=Europe%2FMadrid&mp_view_type=',
    thumbnail: '/images/thumbnails/1v1-lol.jpg',
    rating: 4.4,
    playCount: 80000000,
    tags: ['Battle', 'Multiplayer', 'Shooter', 'Building', 'Action'],
    backgroundColor: 'from-blue-400 via-purple-500 to-pink-400',
  };

  const aboutContent = (
    <>
      <p className="text-lg leading-relaxed mb-4">
        Step into <strong>1V1.LOL Champions</strong>, the fast-paced 3rd-person hero shooter that's captivating gamers worldwide. 1V1.LOL is a revolutionary multiplayer shooter that combines the best elements of battle royale, building mechanics, and hero-based gameplay. Dive into intense multiplayer battles in 1V1.LOL where every shot counts and every structure could mean the difference between victory and defeat! With over 80 million players, 1V1.LOL has established itself as one of the most popular online shooters.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        <strong>NEW: BECOME A CHAMPION IN 1V1.LOL!</strong> Choose from a wide roster of unique champions in 1V1.LOL—including enhanced humans, mythical beasts, and powerful machines. Each champion in 1V1.LOL comes with exclusive abilities that turn the tide of battle. The champion system in 1V1.LOL adds depth and strategy to the gameplay, allowing players to find their perfect playstyle. Whether you prefer aggressive warriors, tactical shooters, or support heroes, 1V1.LOL has a champion for you.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        The gameplay in 1V1.LOL is dynamic and engaging. Open LOL Boxes to collect shards, level up your champions, and dominate the battlefield with powerful upgrades. The progression system in 1V1.LOL is rewarding, with constant unlocks and improvements that keep players motivated. Every match in 1V1.LOL offers opportunities to earn rewards and advance your champions.
      </p>
      <p className="text-lg leading-relaxed">
        1V1.LOL features multiple game modes to keep the experience fresh and exciting. From intense 1v1 duels to large-scale battle royale matches, 1V1.LOL offers something for every playstyle. The building mechanics in 1V1.LOL add a unique layer of strategy, allowing skilled players to outmaneuver opponents through creative structure placement. Master the art of building and shooting in 1V1.LOL to become a true champion.
      </p>
    </>
  );

  const howToPlayContent = (
    <ul className="space-y-2 ml-6">
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Choose Your Champion:</strong> Select from a diverse roster of unique heroes with special abilities</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Build Strategically:</strong> Use your building skills to gain tactical advantages and surprise enemies</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Master Combat:</strong> Perfect your shooting and use champion powers to dominate battles</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Collect & Upgrade:</strong> Open LOL Boxes to unlock new champions, weapons, and armor</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Climb the Ranks:</strong> Progress on the Trophy Road and unlock exclusive rewards</span>
      </li>
    </ul>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        {
          icon: '🎮',
          title: 'Multiple Game Modes in 1V1.LOL',
          desc: 'LOL Ball, Zero Builds, Team Dog-tag, Warzone Battle Royale, and more!'
        },
        {
          icon: '🏆',
          title: '1V1 Clash in 1V1.LOL',
          desc: 'Test your skills in head-to-head duels on skill-testing maps'
        },
        {
          icon: '👥',
          title: 'Play with Friends in 1V1.LOL',
          desc: 'Party up in Duos or gather up to 16 players for custom matches'
        },
        {
          icon: '🎨',
          title: 'Collectibles & Seasons in 1V1.LOL',
          desc: 'Exclusive skins, pickaxes, emotes, and limited-time cosmetics'
        },
        {
          icon: '💥',
          title: 'Destructible Environments',
          desc: 'Blow up anything in sight and create your own battlefield in 1V1.LOL'
        },
        {
          icon: '🌍',
          title: 'Massive Multiplayer Community',
          desc: 'Play with millions around the globe or invite friends to your squad'
        },
        {
          icon: '🔄',
          title: 'Daily Changing Content in 1V1.LOL',
          desc: 'Rotating events, promotions, and limited-time game modes'
        },
        {
          icon: '⚡',
          title: 'Fast-Paced Action in 1V1.LOL',
          desc: 'Intense gunfights, clever builds, and pulse-pounding hero action'
        },
        {
          icon: '🏗️',
          title: 'Building Mechanics in 1V1.LOL',
          desc: 'Master the art of building structures for tactical advantages'
        },
        {
          icon: '🎯',
          title: 'Champion Abilities in 1V1.LOL',
          desc: 'Unique powers and abilities for each champion in 1V1.LOL'
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

