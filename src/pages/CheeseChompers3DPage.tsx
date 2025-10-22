import GameDetailTemplate from '../components/GameDetailTemplate';

export default function CheeseChompers3DPage() {
  const game = {
    slug: 'cheese-chompers-3d',
    title: 'Cheese Chompers 3D',
    subtitle: 'A Riotous Battle for Cheesy Supremacy',
    description: 'Dive into the chaotic arena! An uproariously fun, physics-driven knockout extravaganza where mischievous rats vie for cheesy glory. Master the art of smash, flip, and chomp!',
    playUrl: 'https://nealfun.app/game/cheesechompers3d/',
    thumbnail: '/images/thumbnails/cheese-chompers-3d.png',
    rating: 5.0,
    playCount: 1,
    tags: ['Battle', 'Multiplayer', 'Casual', 'Funny', '3D', 'Animal'],
    backgroundColor: 'from-yellow-400 via-orange-400 to-red-400',
  };

  const aboutContent = (
    <div className="space-y-4">
      <p className="text-lg leading-relaxed">
        <strong>Cheese Chompers 3D</strong> is an uproariously fun, physics-driven knockout extravaganza that catapults players into a lively battlefield where mischievous rats vie for cheesy glory. Cheese Chompers 3D is part of the beloved Crazy Animal 3D franchise, bringing the same charm and humor to the arena. This high-energy, multiplayer brawler in Cheese Chompers 3D blends intuitive controls, unpredictable mayhem, and side-splitting moments, making it a must-play for casual gamers and competitive thrill-seekers alike.
      </p>
      <p className="text-lg leading-relaxed">
        In Cheese Chompers 3D, your goal is to outwit and outlast your rivals by knocking them off the platform in a whirlwind of furry chaos. Take control of quirky rats in Cheese Chompers 3D and unleash perfectly timed bumps, flips, and smashes to send opponents soaring. The game's dynamic physics engine in Cheese Chompers 3D guarantees every match brims with hilarious bounces, wild tumbles, and unexpected collisions. The physics-based gameplay in Cheese Chompers 3D creates genuinely funny moments that keep players coming back.
      </p>
      <p className="text-lg leading-relaxed">
        Victory in Cheese Chompers 3D demands sharp timing and a knack for navigating the arena's delightful unpredictability—one wrong move in Cheese Chompers 3D, and you're spiraling out in a comedic blur! Transform your rodent into a one-of-a-kind cheese-chasing champion with an array of unlockable customization options in Cheese Chompers 3D. The customization system in Cheese Chompers 3D allows you to express your personality and style.
      </p>
      <p className="text-lg leading-relaxed">
        With a perfect 5.0 rating, Cheese Chompers 3D has earned its place as one of the best multiplayer brawlers. The community in Cheese Chompers 3D is fun and welcoming, creating a vibrant gaming environment. Whether you're playing solo or with friends, Cheese Chompers 3D delivers an experience that's both hilarious and competitive. The game's charm and humor make Cheese Chompers 3D a standout title in the gaming landscape.
      </p>
    </div>
  );

  const howToPlayContent = (
    <ul className="space-y-2 ml-6">
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Move:</strong> Use arrow keys or WASD to control your rat's movement</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Bump:</strong> Execute devastating bumps to knock opponents off the platform</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Flip:</strong> Master perfectly timed flips to send rivals soaring</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>Survive:</strong> Be the last rat standing to claim cheesy victory!</span>
      </li>
    </ul>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { icon: '⚡', title: 'Physics-Fueled Madness', desc: 'Revel in uncontrollable, laugh-out-loud moments' },
        { icon: '🎮', title: 'Seamless Controls', desc: 'Easy to learn, yet challenging to master' },
        { icon: '🎨', title: 'Epic Customization', desc: 'Unlock eccentric skins, hats, and outfits' },
        { icon: '🏆', title: 'Lightning-Fast Rounds', desc: 'Quick, addictive matches for non-stop fun' },
        { icon: '🐭', title: 'Quirky Rat Characters', desc: 'Play as adorable and hilarious mischievous rats' },
        { icon: '🎯', title: 'Multiplayer Battles', desc: 'Compete against players worldwide in real-time' },
        { icon: '🌍', title: 'Global Leaderboards', desc: 'Climb the ranks and compete for top positions' },
        { icon: '😂', title: 'Hilarious Gameplay', desc: 'Unpredictable physics create genuinely funny moments' },
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

