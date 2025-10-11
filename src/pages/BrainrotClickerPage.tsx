import GameDetailTemplate from '../components/GameDetailTemplate';

export default function BrainrotClickerPage() {
  const game = {
    slug: 'brainrot-clicker',
    title: 'Brainrot Clicker',
    subtitle: 'The Ultimate Idle Clicker Game',
    description: 'Click your way to brainrot glory! An addictive idle clicker game where every click counts. Build your empire, unlock upgrades, and watch your numbers grow exponentially!',
    playUrl: 'https://1games.io/game/italian-brainrot-clicker/',
    thumbnail: '/images/thumbnails/brainrot-clicker.webp',
    rating: 4.9,
    playCount: 28456,
    tags: ['Brainrot', 'Clicker', 'Idle', 'Incremental', 'Casual'],
    backgroundColor: 'from-purple-400 via-pink-400 to-rose-300',
  };

  const aboutContent = (
    <p className="text-lg leading-relaxed">
      Brainrot Clicker is the ultimate idle clicking game that will keep you entertained for hours!
      Start with simple clicks and watch as your brainrot empire grows exponentially. Unlock powerful
      upgrades, automate your clicking, and compete with players worldwide for the highest scores!
    </p>
  );

  const howToPlayContent = (
    <ul className="space-y-2 ml-6">
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Click:</strong> Click the main button to generate brainrot points</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Upgrade:</strong> Spend points to unlock powerful upgrades and multipliers</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Automate:</strong> Purchase auto-clickers to generate points passively</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Prestige:</strong> Reset your progress for permanent bonuses</span>
      </li>
    </ul>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { icon: '🚀', title: 'Exponential Growth', desc: 'Watch your numbers skyrocket with each upgrade' },
        { icon: '🎯', title: 'Achievements', desc: 'Unlock dozens of achievements and rewards' },
        { icon: '⚡', title: 'Auto-Clickers', desc: 'Automate your clicking for passive income' },
        { icon: '💎', title: 'Prestige System', desc: 'Reset for powerful permanent bonuses' },
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
