'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function SmashKartsPage() {
  const game = {
    slug: 'smash-karts',
    title: 'Smash Karts',
    subtitle: 'Chaotic Multiplayer Kart Battles with Explosive Weapons!',
    description: 'Smash Karts is a wild and wacky 3D multiplayer IO kart battle game that takes racing to the next level by arming every kart with explosive weapons! Hop into your kart, collect power-ups, and blast your way to victory in fast-paced arena matches.',
    playUrl: 'https://smashkarts.io/',
    thumbnail: '/images/thumbnails/smash-karts.webp',
    rating: 4.2,
    playCount: 50000000,
    tags: ['Kart Racing', 'Multiplayer', 'Battle Royale', 'Action', 'IO Game'],
    backgroundColor: 'from-orange-400 via-red-400 to-pink-400',
  };

  const aboutContent = (
    <div className="space-y-6">
      {/* Section 1: What is Smash Karts */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-orange-900 mb-3">🎮 What is Smash Karts?</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Smash Karts is an exhilarating multiplayer kart racing game that combines the thrill of high-speed racing with explosive combat mechanics. Unlike traditional kart racing games, Smash Karts puts weapons directly into your hands, transforming every race into an action-packed battle arena. Players compete in real-time matches where strategy, reflexes, and weapon mastery determine victory. The game features vibrant 3D graphics, intuitive controls, and a constantly evolving meta that keeps Smash Karts fresh and exciting for both casual and competitive players.
        </p>
      </div>

      {/* Section 2: Core Gameplay & Weapons */}
      <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-red-900 mb-3">💥 Core Gameplay & Weapons</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          The heart of Smash Karts gameplay revolves around collecting power-ups and using weapons strategically. As you drive around the arena, you'll encounter random power-up boxes containing missiles, mines, machine guns, invincibility shields, and speed boosts. Each weapon in Smash Karts serves a unique purpose—missiles for direct attacks, mines for defensive traps, and machine guns for sustained damage. The dynamic weapon system in Smash Karts ensures that no two matches are identical, as players must adapt their strategies based on available power-ups and opponent positions.
        </p>
      </div>

      {/* Section 3: Arena Design & Maps */}
      <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-pink-900 mb-3">🗺️ Arena Design & Maps</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Smash Karts features multiple uniquely designed arenas, each with distinct layouts and environmental features. From tight corridors that encourage close-quarters combat to open spaces perfect for high-speed chases, every Smash Karts map offers different tactical opportunities. The game regularly introduces new Smash Karts maps with seasonal updates, keeping the gameplay experience fresh and challenging. Environmental obstacles and shortcuts add depth to Smash Karts strategy, rewarding players who master map knowledge and positioning.
        </p>
      </div>

      {/* Section 4: Customization & Progression */}
      <div className="bg-gradient-to-r from-rose-50 to-rose-100 border-l-4 border-rose-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-rose-900 mb-3">🎨 Customization & Progression</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Smash Karts offers extensive customization options to personalize your racing experience. Unlock unique characters, karts, hats, wheels, and skins through gameplay progression and seasonal rewards. The Smash Karts progression system rewards consistent play with coins and gems that can be spent on cosmetics. Character tokens obtained through matches can be used in the Smash Karts prize machine to unlock rare and legendary characters. This deep customization system in Smash Karts allows players to express their individuality while climbing the competitive ranks.
        </p>
      </div>

      {/* Section 5: Multiplayer & Social Features */}
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-amber-900 mb-3">👥 Multiplayer & Social Features</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Smash Karts is built around multiplayer competition, supporting real-time matches with players worldwide. The game features leaderboards where you can track your ranking and compete against friends. Smash Karts matches typically last 3 minutes, providing quick, intense gaming sessions perfect for casual play or competitive grinding. The social features in Smash Karts include friend lists, match history, and seasonal rankings that foster a vibrant community. Whether playing solo or with friends, Smash Karts delivers engaging multiplayer experiences that keep players coming back.
        </p>
      </div>

      {/* Section 6: Seasonal Events & Updates */}
      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-yellow-900 mb-3">🎉 Seasonal Events & Updates</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Smash Karts keeps the experience fresh with regular seasonal events and content updates. The developers introduce themed events during holidays like Halloween and Christmas, featuring exclusive cosmetics and limited-time challenges. Each Smash Karts season brings new maps, characters, and gameplay mechanics that evolve the meta. The commitment to continuous updates in Smash Karts ensures the game remains engaging and competitive. Seasonal passes in Smash Karts offer premium rewards for dedicated players, including exclusive skins and cosmetics unavailable elsewhere.
        </p>
      </div>

      {/* Section 7: Why Smash Karts Stands Out */}
      <div className="bg-gradient-to-r from-lime-50 to-lime-100 border-l-4 border-lime-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-lime-900 mb-3">⭐ Why Smash Karts Stands Out</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Smash Karts revolutionizes the kart racing genre by combining racing mechanics with action-packed combat. Unlike traditional racing games, Smash Karts emphasizes skill-based gameplay where weapon management and positioning matter as much as driving ability. The fast-paced nature of Smash Karts matches creates adrenaline-pumping moments that appeal to both casual and hardcore gamers. The vibrant art style and intuitive controls make Smash Karts accessible to newcomers while offering depth for experienced players. With its unique blend of racing and combat, Smash Karts has become a beloved title in the multiplayer gaming community.
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <ul className="space-y-4">
      <li className="flex items-start gap-4">
        <span className="text-3xl">🎮</span>
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Master the Controls</h4>
          <p className="text-gray-700">Use WASD or Arrow Keys to drive your kart around the arena. Press Spacebar to fire your equipped weapon. The simple control scheme in Smash Karts makes it easy to learn but challenging to master, as you'll need to balance driving, aiming, and positioning simultaneously.</p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <span className="text-3xl">📦</span>
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Collect Power-Up Boxes</h4>
          <p className="text-gray-700">Drive over the glowing power-up boxes scattered throughout the Smash Karts arena to randomly receive weapons and items. Each power-up in Smash Karts serves a different purpose—missiles for offense, mines for defense, and shields for protection. Strategic power-up collection is key to dominating in Smash Karts.</p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <span className="text-3xl">💥</span>
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Blast Your Opponents</h4>
          <p className="text-gray-700">Use your collected weapons to attack other players and score points in Smash Karts. Each hit in Smash Karts contributes to your score and helps you climb the match rankings. Timing and accuracy are crucial in Smash Karts combat—learn to predict opponent movements and lead your shots for maximum effectiveness.</p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <span className="text-3xl">🏆</span>
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Earn XP & Rewards</h4>
          <p className="text-gray-700">Every match in Smash Karts contributes experience points toward your account level. As you level up in Smash Karts, you unlock coins, gems, character tokens, and cosmetic rewards. The progression system in Smash Karts encourages continuous play and provides tangible rewards for your efforts.</p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <span className="text-3xl">🎨</span>
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Customize Your Kart</h4>
          <p className="text-gray-700">Use your earned currency to customize your character and kart in Smash Karts. Unlock unique skins, hats, wheels, and cosmetics to stand out in the arena. The customization options in Smash Karts allow you to create a personalized racing warrior that reflects your style.</p>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <span className="text-3xl">📊</span>
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Climb the Leaderboards</h4>
          <p className="text-gray-700">Compete against players worldwide and climb the Smash Karts leaderboards. Track your stats, win rates, and seasonal rankings to measure your progress. The competitive nature of Smash Karts leaderboards motivates players to improve their skills and dominate the rankings.</p>
        </div>
      </li>
    </ul>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
        <h4 className="text-xl font-bold text-blue-900 mb-3">🎮 Real-Time Multiplayer</h4>
        <p className="text-gray-700">Compete in fast-paced 3-minute matches with players from around the world. Smash Karts real-time multiplayer ensures instant action and competitive gameplay.</p>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
        <h4 className="text-xl font-bold text-purple-900 mb-3">💥 Explosive Weapons</h4>
        <p className="text-gray-700">Collect diverse weapons including missiles, mines, machine guns, and more. Each weapon in Smash Karts offers unique tactical advantages for different situations.</p>
      </div>

      <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg border-l-4 border-pink-500">
        <h4 className="text-xl font-bold text-pink-900 mb-3">🗺️ Multiple Arenas</h4>
        <p className="text-gray-700">Battle across uniquely designed maps with different layouts and strategic opportunities. Smash Karts regularly adds new arenas to keep gameplay fresh.</p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
        <h4 className="text-xl font-bold text-green-900 mb-3">🎨 Deep Customization</h4>
        <p className="text-gray-700">Unlock and customize characters, karts, hats, wheels, and skins. Express your individuality with Smash Karts extensive cosmetic options.</p>
      </div>

      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border-l-4 border-yellow-500">
        <h4 className="text-xl font-bold text-yellow-900 mb-3">📊 Leaderboards & Stats</h4>
        <p className="text-gray-700">Track your ranking, win rates, and seasonal performance. Smash Karts leaderboards foster competitive play and community engagement.</p>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-500">
        <h4 className="text-xl font-bold text-red-900 mb-3">🎉 Seasonal Events</h4>
        <p className="text-gray-700">Participate in themed seasonal events with exclusive rewards and limited-time challenges. Smash Karts seasonal content keeps the game constantly evolving.</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg border-l-4 border-indigo-500">
        <h4 className="text-xl font-bold text-indigo-900 mb-3">⚡ Fast-Paced Action</h4>
        <p className="text-gray-700">Experience intense 3-minute matches filled with explosive combat and high-speed racing. Smash Karts delivers adrenaline-pumping gameplay.</p>
      </div>

      <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg border-l-4 border-cyan-500">
        <h4 className="text-xl font-bold text-cyan-900 mb-3">🏅 Progression System</h4>
        <p className="text-gray-700">Level up through matches to earn coins, gems, and character tokens. Smash Karts progression rewards consistent play with valuable rewards.</p>
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
