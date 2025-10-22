import GameDetailTemplate from '../components/GameDetailTemplate';

export default function RocketFortressPage() {
  const game = {
    slug: 'rocket-fortress',
    title: 'Rocket Fortress',
    subtitle: 'Holy War Against the Dark Forces',
    description: 'An engaging RPG clicker game where you play as a warrior carrying holy missiles to fight against demons, hell gates, and giant bosses. Click to shoot missiles, upgrade your power, and withstand increasingly fierce attacks!',
    playUrl: 'https://games.yoplay.io/rocket-fortress/',
    thumbnail: '/images/thumbnails/rocket-fortress.png',
    rating: 5.0,
    playCount: 125000,
    tags: ['RPG', 'Clicker', 'Strategy', 'Action', 'Incremental'],
    backgroundColor: 'from-red-400 via-orange-400 to-yellow-300',
  };

  const aboutContent = (
    <div className="space-y-4">
      <p className="text-lg leading-relaxed">
        <strong>Rocket Fortress</strong> is an engaging RPG clicker game where you play as a warrior carrying holy missiles to fight against demons, hell gates, and giant bosses. Rocket Fortress combines the addictive mechanics of incremental games with intense action gameplay. With simple and strategic gameplay in Rocket Fortress, you will continuously "click" to shoot missiles while upgrading your power to withstand increasingly fierce attacks. The progression system in Rocket Fortress is deeply satisfying and rewarding.
      </p>
      <p className="text-lg leading-relaxed">
        The game evokes extreme excitement as you witness holy missiles tearing apart demons in Rocket Fortress, accompanied by vibrant combat sounds and stunning graphics. In Rocket Fortress, you will fight nonstop in a world invaded by demons and hell gates. The visual effects in Rocket Fortress are spectacular, making every victory feel impactful. The audio design in Rocket Fortress enhances the immersive experience of holy warfare.
      </p>
      <p className="text-lg leading-relaxed">
        Your mission in Rocket Fortress is to launch holy missiles to destroy all enemies before they reach the base. If you fail in Rocket Fortress, you will have to start the level again—but stronger, thanks to the accumulated upgrades. Bosses in Rocket Fortress will appear faster and more aggressively, forcing you to calculate a reasonable upgrade strategy to survive. The difficulty curve in Rocket Fortress is well-balanced, providing constant challenges.
      </p>
      <p className="text-lg leading-relaxed">
        With a perfect 5.0 rating, Rocket Fortress has proven itself as one of the best clicker RPGs available. The community in Rocket Fortress is passionate and supportive. Whether you're a casual player seeking relaxation or a hardcore gamer chasing high scores, Rocket Fortress offers an experience that's both accessible and deeply engaging. The strategic depth in Rocket Fortress ensures that every playthrough feels unique and rewarding.
      </p>
    </div>
  );

  const howToPlayContent = (
    <ul className="space-y-2 ml-6">
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Left Click:</strong> Shoot missiles at demons and enemies</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Spacebar:</strong> Shoot continuously for rapid fire</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Gather Resources:</strong> Collect gold and diamonds to increase your firepower</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Deploy Units:</strong> Free up automatic units to defend while you continue upgrading</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Face Bosses:</strong> Test your skills against hellish bosses and upgrade your abilities</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Upgrade Endlessly:</strong> Every failure is an opportunity to become stronger for the next time</span>
      </li>
    </ul>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { icon: '🚀', title: 'Holy Missiles', desc: 'Launch powerful holy missiles to destroy demons' },
        { icon: '👹', title: 'Epic Boss Battles', desc: 'Face increasingly fierce hellish bosses' },
        { icon: '⚡', title: 'Auto Units', desc: 'Deploy automatic defenders to fight alongside you' },
        { icon: '💎', title: 'Endless Upgrades', desc: 'Upgrade your power infinitely with gold and diamonds' },
        { icon: '🎯', title: 'Strategic Gameplay', desc: 'Calculate upgrade strategies to survive waves' },
        { icon: '🔥', title: 'Stunning Graphics', desc: 'Vibrant combat sounds and stunning visual effects' },
        { icon: '🏆', title: 'Progression System', desc: 'Permanent upgrades that carry over between runs' },
        { icon: '⚔️', title: 'Intense Action', desc: 'Fast-paced combat that tests your reflexes and strategy' },
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

