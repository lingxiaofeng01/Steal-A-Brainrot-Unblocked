'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function OneVsOneLolPage() {
  const game = {
    slug: '1v1-lol',
    title: '1v1 LOL',
    subtitle: 'The Ultimate 3rd-Person Hero Shooter Battle Royale!',
    description: 'Join over 80 million players in 1v1 LOL Champions, the fast-paced 3rd-person hero shooter with intense multiplayer battles. Choose unique champions with exclusive abilities, build strategically, and dominate the battlefield in this ultimate battle royale experience.',
    playUrl: 'https://1v1.lol/?mp_assets=https%3A%2F%2Fs2.minijuegosgratis.com%2F&mp_embed=0&mp_game_id=232057&mp_game_uid=1v1-lol&mp_game_url=https%3A%2F%2Fwww.miniplay.com%2Fembed%2F1v1-lol&mp_int=1&mp_locale=en_US&mp_player_type=IFRAME&mp_site_https_url=https%3A%2F%2Fwww.miniplay.com%2F&mp_site_name=miniplay.com&mp_site_url=https%3A%2F%2Fwww.miniplay.com%2F&mp_timezone=Europe%2FMadrid&mp_view_type=',
    thumbnail: '/images/thumbnails/1v1-lol.jpg',
    rating: 4.4,
    playCount: 80000000,
    tags: ['Hero Shooter', 'Battle Royale', 'Multiplayer', 'PvP', 'Competitive'],
    backgroundColor: 'from-blue-400 via-purple-400 to-pink-400',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>1v1 LOL Champions</strong> is a fast-paced 3rd-person hero shooter that's captivating gamers worldwide with intense multiplayer battles where every shot counts. Join over 80 million players in <strong>1v1 LOL</strong>, where you can dive into intense multiplayer battles and compete against players globally. In <strong>1v1 LOL</strong>, every structure could mean the difference between victory and defeat, making strategic gameplay essential. <strong>1v1 LOL Champions</strong> combines shooting mechanics with building skills, creating a unique gameplay experience that rewards both tactical thinking and quick reflexes. The game has become a global phenomenon, attracting millions of players who love competitive gaming and creative building strategies.
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>1v1 LOL</strong> features a wide roster of unique champions, each with exclusive abilities that turn the tide of battle. Choose from enhanced humans, mythical beasts, and powerful machines in <strong>1v1 LOL</strong>, each bringing unique playstyles to the battlefield. In <strong>1v1 LOL Champions</strong>, you can customize your experience with your favorite champions, weapons, and armor to match your preferred playstyle. Open LOL Boxes to collect shards and level up your champions in <strong>1v1 LOL</strong>, unlocking powerful upgrades that dominate the battlefield. The champion system in <strong>1v1 LOL</strong> ensures that every player can find a character that matches their preferred gameplay style, whether you prefer aggressive rushing or tactical positioning.
        </p>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>1v1 LOL</strong> offers daily changing content with rotating events, promotions, and limited-time game modes that keep the experience fresh and exciting. Never play the same game twice in <strong>1v1 LOL Champions</strong> with modes like LOL Ball (4v4 chaos where holding the ball longest secures the win), Zero Builds (pure shooting and champion powers, no building required), and 4v4 Team Dog-tag (eliminate enemies and collect tags to score). Warzone Battle Royale in <strong>1v1 LOL</strong> offers a classic BR experience with no early advantage, ensuring fair competition for all players. The variety of game modes in <strong>1v1 LOL</strong> means there's always something new to experience, keeping players engaged and entertained for hours.
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>1v1 LOL Clash</strong> unleashes your competitive edge with head-to-head duels on skill-testing maps where you can prove your mastery. Test your skills in <strong>1v1 LOL</strong> against other players in intense one-on-one battles that reward precision and strategy. The competitive nature of <strong>1v1 LOL Clash</strong> attracts serious gamers who want to test their abilities against the best players worldwide. Building skills and shooting accuracy are equally important in <strong>1v1 LOL</strong>, creating a balanced competitive environment. Whether you're a casual player or a competitive esports enthusiast, <strong>1v1 LOL</strong> offers the perfect arena to showcase your skills and climb the ranks.
        </p>
      </div>

      <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>1v1 LOL</strong> features destructible environments where you can blow up anything in sight, adding a dynamic element to every match. Play with millions around the globe in <strong>1v1 LOL</strong> or invite friends to your squad for custom matches in Duos Mode or gather up to 16 players for epic team battles. The social features of <strong>1v1 LOL</strong> make it perfect for playing with friends, whether you're in it for friendly chaos or serious competitive action. Party up in <strong>1v1 LOL</strong> and experience endless online fun with customizable game modes that cater to every playstyle. The community aspect of <strong>1v1 LOL</strong> has created a vibrant ecosystem where players can connect, compete, and collaborate.
        </p>
      </div>

      <div className="bg-gradient-to-r from-violet-50 to-violet-100 border-l-4 border-violet-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>1v1 LOL</strong> offers exclusive collectibles and seasonal passes with cosmetics that let you show off your style. Unlock exclusive champion and weapon skins in <strong>1v1 LOL</strong>, stylish pickaxes, emotes, and stickers to personalize your experience. Limited-time cosmetics in every Season Pass of <strong>1v1 LOL</strong> give players exclusive rewards for their dedication and skill. The cosmetic system in <strong>1v1 LOL</strong> allows players to express their individuality while maintaining fair gameplay where cosmetics don't provide competitive advantages. Climb the Trophy Road in <strong>1v1 LOL</strong>, unlock new gear, and enhance your loadout with perks from LOL Boxes to become a true champion.
        </p>
      </div>

      <div className="bg-gradient-to-r from-rose-50 to-rose-100 border-l-4 border-rose-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>1v1 LOL Champions</strong> stands out as the ultimate destination for players seeking thrilling gunfights, clever builds, and pulse-pounding hero action. Whether you're in it for glory, creativity, or chaos, <strong>1v1 LOL</strong> delivers an unmatched gaming experience that keeps millions of players coming back daily. The combination of shooting mechanics, building strategies, and hero abilities in <strong>1v1 LOL</strong> creates a unique gameplay loop that's both accessible to newcomers and challenging for veterans. Gear up for thrilling gunfights in <strong>1v1 LOL</strong>, master clever building strategies, and take over the battlefield. Jump into <strong>1v1 LOL Champions</strong> today, build up your skills, take over the competition, and become the next champion in this global phenomenon!
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <ul className="space-y-4">
      <li className="flex gap-4">
        <span className="text-2xl">🎮</span>
        <div>
          <strong className="text-lg">Choose Your Champion:</strong>
          <p className="text-gray-700 mt-2">Select from a wide roster of unique champions in 1v1 LOL, each with exclusive abilities that turn the tide of battle. Choose from enhanced humans, mythical beasts, and powerful machines in 1v1 LOL Champions, each bringing unique playstyles to the battlefield.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">🏗️</span>
        <div>
          <strong className="text-lg">Master Building and Shooting:</strong>
          <p className="text-gray-700 mt-2">Use your building skills to gain tactical advantages or surprise your enemies in 1v1 LOL. Your creativity is your greatest weapon in 1v1 LOL Champions, where building and shooting are equally important for success.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">📦</span>
        <div>
          <strong className="text-lg">Open LOL Boxes and Level Up:</strong>
          <p className="text-gray-700 mt-2">Open LOL Boxes to collect shards and level up your champions in 1v1 LOL, unlocking powerful upgrades that dominate the battlefield. Customize your experience with your favorite champions, weapons, and armor in 1v1 LOL.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">🎯</span>
        <div>
          <strong className="text-lg">Compete in Multiple Game Modes:</strong>
          <p className="text-gray-700 mt-2">Never play the same game twice in 1v1 LOL Champions with rotating events and limited-time game modes. Try LOL Ball, Zero Builds, Team Dog-tag, Warzone Battle Royale, and 1v1 Clash in 1v1 LOL.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">👥</span>
        <div>
          <strong className="text-lg">Play with Friends:</strong>
          <p className="text-gray-700 mt-2">Party up in Duos Mode or gather up to 16 players for custom matches in 1v1 LOL. Play with millions around the globe or invite friends to your squad for endless online fun in 1v1 LOL Champions.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">🏆</span>
        <div>
          <strong className="text-lg">Climb the Trophy Road:</strong>
          <p className="text-gray-700 mt-2">Climb the ranks on the Trophy Road in 1v1 LOL, unlock new gear, and enhance your loadout with perks from LOL Boxes. Become a true champion in 1v1 LOL by mastering all game modes and perfecting your skills.</p>
        </div>
      </li>
    </ul>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🎮</span>
          <h4 className="text-lg font-bold text-gray-800">Hero Shooter Gameplay</h4>
        </div>
        <p className="text-gray-700">Fast-paced 3rd-person hero shooter with intense multiplayer battles</p>
      </div>

      <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🏗️</span>
          <h4 className="text-lg font-bold text-gray-800">Building & Shooting</h4>
        </div>
        <p className="text-gray-700">Combine strategic building with precise shooting mechanics</p>
      </div>

      <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🎭</span>
          <h4 className="text-lg font-bold text-gray-800">Unique Champions</h4>
        </div>
        <p className="text-gray-700">Choose from diverse champions with exclusive abilities</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🎯</span>
          <h4 className="text-lg font-bold text-gray-800">Multiple Game Modes</h4>
        </div>
        <p className="text-gray-700">LOL Ball, Zero Builds, Team Dog-tag, Warzone, and 1v1 Clash</p>
      </div>

      <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">💥</span>
          <h4 className="text-lg font-bold text-gray-800">Destructible Environments</h4>
        </div>
        <p className="text-gray-700">Blow up anything in sight for dynamic gameplay</p>
      </div>

      <div className="bg-gradient-to-br from-violet-100 to-violet-50 p-6 rounded-lg border-l-4 border-violet-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">👥</span>
          <h4 className="text-lg font-bold text-gray-800">Social Features</h4>
        </div>
        <p className="text-gray-700">Play with friends in Duos or up to 16-player custom matches</p>
      </div>

      <div className="bg-gradient-to-br from-rose-100 to-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🎁</span>
          <h4 className="text-lg font-bold text-gray-800">Cosmetics & Rewards</h4>
        </div>
        <p className="text-gray-700">Exclusive skins, emotes, and seasonal pass rewards</p>
      </div>

      <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🌍</span>
          <h4 className="text-lg font-bold text-gray-800">Global Community</h4>
        </div>
        <p className="text-gray-700">Join 80 million players worldwide in competitive battles</p>
      </div>
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
