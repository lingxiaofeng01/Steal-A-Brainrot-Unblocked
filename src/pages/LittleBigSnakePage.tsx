import GameDetailTemplate from '../components/GameDetailTemplate';

export default function LittleBigSnakePage() {
  const game = {
    slug: 'little-big-snake',
    title: 'Little Big Snake',
    subtitle: 'The Most Attractive IO Snake Hunting Game 2025',
    description: 'Battle it out in the most popular multiplayer IO game! Control a snake or beetle, collect food to grow, avoid collisions, and defeat other snakes to dominate the rankings!',
    playUrl: 'https://www.gameflare.com/embed/little-big-snake/',
    thumbnail: '/images/thumbnails/little-big-snake.png',
    rating: 5.0,
    playCount: 8500000,
    tags: ['IO', 'Multiplayer', 'Snake', 'Grow', 'Collect', 'Animal'],
    backgroundColor: 'from-green-400 via-emerald-400 to-teal-300',
  };

  const aboutContent = (
    <>
      <p className="text-lg leading-relaxed mb-4">
        <strong>Little Big Snake</strong> is one of the most popular multiplayer IO games today, bringing a dramatic and tactical hunting experience. Little Big Snake has captivated millions of players with its addictive gameplay and strategic depth. Players will control a snake or beetle in Little Big Snake, collect food to grow in size, avoid collisions with opponents, and find ways to defeat other snakes to dominate the rankings. The core mechanics of Little Big Snake are simple to learn but challenging to master.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Launched as an upgraded version compared to traditional snake games such as Slither.io or Worms Zone, Little Big Snake does not just stop at eating and growing. Little Big Snake adds a series of new features, such as a skill upgrade system, daily tasks, and a diverse item warehouse. This helps Little Big Snake retain players for a long time and creates its appeal. The depth of Little Big Snake's progression system ensures that players always have something new to work towards.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        The highlight of Little Big Snake is the evolution board—a type of skill tree that allows you to permanently upgrade stats such as energy recovery speed, growth speed when eating, and more flexible control ability. As you reach higher levels in Little Big Snake, you will unlock many new skills, applied to all future matches. This permanent progression system in Little Big Snake creates a sense of long-term achievement and growth.
      </p>
      <p className="text-lg leading-relaxed">
        With 8.5 million players and a perfect 5.0 rating, Little Big Snake has proven itself as a top-tier IO game. The competitive nature of Little Big Snake creates intense, thrilling moments as you battle for supremacy. Whether you're a casual player seeking relaxation or a competitive gamer looking for challenges, Little Big Snake offers an experience that's both accessible and deeply engaging.
      </p>
    </>
  );

  const howToPlayContent = (
    <ul className="space-y-2 ml-6">
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Collect Food and Nectar:</strong> They appear scattered on the map, inside insects, or from the bodies of destroyed snakes</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Speed Up and Surround:</strong> Use the speed-up ability to cut off the path or surround opponents to trap them</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Kill Big Bugs:</strong> Giant bugs often drop temporary power-ups, helping you accelerate your growth</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Move:</strong> Use the mouse to navigate the snake or bug</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Accelerate/Fly Up:</strong> Left click to boost your speed</span>
      </li>
    </ul>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { icon: '🎨', title: 'Smooth Graphics', desc: 'Eye-catching colors and smooth animations' },
        { icon: '🎮', title: 'Simple Controls', desc: 'Easy to get used to control mode' },
        { icon: '⚡', title: 'Evolution System', desc: 'Diverse evolution and upgrade system' },
        { icon: '👕', title: 'Customization', desc: 'Many skins and fashion accessories for snake' },
        { icon: '🏆', title: 'Missions & Achievements', desc: 'Complete challenges to receive valuable rewards' },
        { icon: '💰', title: 'Gold Chest', desc: 'Open new gold items and costumes' },
        { icon: '🌍', title: 'Multiplayer Arena', desc: 'Battle with millions of players worldwide' },
        { icon: '🎯', title: 'Leaderboards', desc: 'Compete for top rankings and global recognition' },
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

