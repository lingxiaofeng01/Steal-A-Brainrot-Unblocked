import GameDetailTemplate from '../components/GameDetailTemplate';

export default function CrazySheep3DPage() {
  const game = {
    slug: 'crazy-sheep-3d',
    title: 'Crazy Sheep 3D',
    subtitle: 'The Wildest Sheep Adventure Yet!',
    description: 'Get ready to bounce, dash, and baa your way through the most hilarious farmyard adventure with Crazy Sheep 3D! As the newest addition to the beloved Crazy Animal 3D franchise, Crazy Sheep 3D brings charming sheep antics to life with vibrant 3D graphics, intuitive gameplay, and endless opportunities for woolly chaos.',
    playUrl: 'https://nealfun.app/game/crazycattle3d/v11',
    thumbnail: '/images/thumbnails/crazy-sheep-3d.png',
    rating: 4.1,
    playCount: 5200,
    tags: ['3D', 'Action', 'Adventure', 'Casual', 'Animal'],
    backgroundColor: 'from-green-400 via-emerald-400 to-teal-300',
  };

  const aboutContent = (
    <div className="space-y-4">
      <p className="text-lg leading-relaxed">
        <strong>Crazy Sheep 3D</strong> is an exhilarating 3D action-adventure game that brings adorable sheep characters to life in a vibrant, colorful world. Developed as part of the beloved Crazy Animal 3D franchise, Crazy Sheep 3D combines charming visuals, intuitive gameplay mechanics, and endless entertainment. The game drops you into a world full of mischievous sheep with big personalities and even bigger adventures, where every moment is filled with excitement and laughter.
      </p>
      <p className="text-lg leading-relaxed">
        In Crazy Sheep 3D, you'll choose your favorite fluffy hero from a roster of unique characters—like Woolly, Fluff, or Rambo—each offering distinct abilities and hilarious animations. Every sheep in Crazy Sheep 3D has its own personality and special moves, making character selection a crucial part of your strategy. The charm of Crazy Sheep 3D lies not just in its gameplay but in the personality and humor that each character brings to the experience.
      </p>
      <p className="text-lg leading-relaxed">
        The world of Crazy Sheep 3D is incredibly diverse and engaging. From serene meadows and rugged mountain slopes to bustling farmyards and mysterious forests, every environment in Crazy Sheep 3D is a new playground filled with surprises, challenges, and hidden secrets. The level design in Crazy Sheep 3D is thoughtfully crafted to provide both casual fun and challenging gameplay for experienced players.
      </p>
      <p className="text-lg leading-relaxed">
        Gameplay in Crazy Sheep 3D revolves around navigating tricky terrain, dodging farmyard hazards, and collecting valuable items. As you progress through Crazy Sheep 3D, you'll encounter increasingly complex obstacles and enemies. The physics-based gameplay in Crazy Sheep 3D creates unpredictable and hilarious moments that keep players coming back for more.
      </p>
      <p className="text-lg leading-relaxed">
        Whether you're sprinting past predators or bouncing through tricky obstacle courses, Crazy Sheep 3D delivers non-stop fun and laughter! The game's difficulty curve in Crazy Sheep 3D is well-balanced, starting easy for newcomers while offering genuine challenges for veterans. Whether you're a casual gamer or a die-hard fan of adorable animal games, this wild sheep romp is guaranteed to steal your heart.
      </p>
      <p className="text-lg leading-relaxed">
        Crazy Sheep 3D stands out in the crowded gaming market by combining quality gameplay with genuine charm. The game's appeal transcends age groups—children love the cute sheep characters, while adults appreciate the clever level design and satisfying mechanics. Crazy Sheep 3D proves that a game doesn't need complex systems to be engaging; sometimes, all you need is a great idea executed well.
      </p>
    </div>
  );

  const howToPlayContent = (
    <ul className="space-y-3 ml-6">
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Choose Your Sheep Character:</strong> In Crazy Sheep 3D, pick from a roster of unique sheep characters, each with their own strengths and special moves. Each sheep in Crazy Sheep 3D has different speed, jumping ability, and special powers. Experiment with different characters to find your favorite playstyle in Crazy Sheep 3D.
        </div>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Master the Controls:</strong> Use WASD or Arrow Keys to move your sheep around the environment in Crazy Sheep 3D. Press Spacebar to jump and reach higher platforms. The controls in Crazy Sheep 3D are responsive and intuitive, allowing for precise movement and timing.
        </div>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Collect Items & Complete Missions:</strong> Gather golden bells, find wool bundles, and complete missions to rack up points and unlock new levels in Crazy Sheep 3D. Each collectible in Crazy Sheep 3D contributes to your score and progression. Hidden items in Crazy Sheep 3D reward exploration and careful observation.
        </div>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Survive the Farm Hazards:</strong> Dodge hazards like roaming tractors, angry roosters, and sneaky foxes while completing your objectives in Crazy Sheep 3D. The obstacles in Crazy Sheep 3D are designed to be challenging but fair. Learning enemy patterns in Crazy Sheep 3D is key to success.
        </div>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Unlock Special Abilities:</strong> As you progress through Crazy Sheep 3D, unlock and use unique moves with special key combos to overcome challenges. Power-ups in Crazy Sheep 3D provide temporary advantages like speed boosts or invincibility. Strategic use of power-ups in Crazy Sheep 3D can turn difficult situations around.
        </div>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <div>
          <strong>Progress Through Levels:</strong> Crazy Sheep 3D features multiple levels with increasing difficulty. Each level in Crazy Sheep 3D introduces new mechanics and challenges. Mastering earlier levels in Crazy Sheep 3D prepares you for the tougher challenges ahead.
        </div>
      </li>
    </ul>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { icon: '🐑', title: 'Adorable Sheep Characters', desc: 'Each sheep in Crazy Sheep 3D is packed with quirky charm and distinct abilities' },
        { icon: '🎮', title: 'Engaging 3D Gameplay', desc: 'Crazy Sheep 3D is easy to learn but challenging to master with smooth, responsive controls' },
        { icon: '🌄', title: 'Diverse Game Worlds', desc: 'Explore meadows, mountains, farms, and enchanted forests in Crazy Sheep 3D' },
        { icon: '⚡', title: 'Progressive Difficulty', desc: 'Face increasingly tricky challenges in Crazy Sheep 3D that demand sharp reflexes' },
        { icon: '🎁', title: 'Collectibles & Power-ups', desc: 'Snag hidden items in Crazy Sheep 3D to enhance your sheep\'s powers and abilities' },
        { icon: '🎨', title: 'Bright Visuals', desc: 'Colorful 3D graphics in Crazy Sheep 3D make the world vibrant and engaging' },
        { icon: '😂', title: 'Hilarious Moments', desc: 'Laugh-out-loud physics and unpredictable action in Crazy Sheep 3D' },
        { icon: '👥', title: 'Multiplayer Fun', desc: 'Test your sheep skills against friends in multiplayer mode in Crazy Sheep 3D' },
        { icon: '🏆', title: 'Achievement System', desc: 'Unlock achievements and badges as you progress through Crazy Sheep 3D' },
        { icon: '🎯', title: 'Challenging Levels', desc: 'Crazy Sheep 3D features dozens of carefully designed levels with unique challenges' },
        { icon: '🔄', title: 'Replay Value', desc: 'Crazy Sheep 3D encourages replaying levels to beat your high scores' },
        { icon: '📱', title: 'Cross-Platform Play', desc: 'Play Crazy Sheep 3D on desktop, tablet, or mobile devices seamlessly' },
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

