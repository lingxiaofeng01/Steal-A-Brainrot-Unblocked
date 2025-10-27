'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function DudeTheftAutoPage() {
  const game = {
    slug: 'dude-theft-auto',
    title: 'Dude Theft Auto',
    subtitle: 'The Ultimate Open-World Sandbox Chaos Experience',
    description: 'Jump into the madness of Dude Theft Auto, an open-world sandbox full of absurd humor, chaos, and endless mischief. Cause trouble and live the dude life!',
    playUrl: 'https://1games.io/game/dude-theft-auto/',
    thumbnail: '/images/thumbnails/dude-theft-auto.webp',
    rating: 4.6,
    playCount: 0,
    tags: ['Action', 'Shooting', 'Simulation', '3D', 'Multiplayer', 'Physics', 'Gun', 'FPS'],
    backgroundColor: 'from-red-400 via-orange-400 to-yellow-400',
  };

  const aboutContent = (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎮 Welcome to the Craziest Sandbox</h3>
        <p className="mb-4">
          <strong>Dude Theft Auto</strong> is a wild simulation action game that drops you into a hilarious open-world playground where chaos is the norm.
          From brawling with strangers and robbing banks to bowling or simply cruising around town, every corner hides ridiculous surprises. Packed with
          crazy physics, tons of weapons, and all sorts of vehicles, it is pure mayhem in a city that feels alive. Whether you cause destruction or chill
          out with mini-games, the choice is yours. Dive in today and start your journey into absolute madness!
        </p>
        <p className="mb-4">
          The sprawling city of <strong>Dude Theft Auto</strong> is filled with unpredictable characters, interactive spots, and endless possibilities
          for entertainment or destruction. Activities range from working as a taxi driver, participating in bowling matches, and pulling off bank heists
          to engaging in outright chaos on the streets. Physics-based mechanics make every encounter dynamic, ensuring no two moments feel the same.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">## Physics-Based Mayhem</h3>
        <p className="mb-4">
          One of the standout features of <strong>Dude Theft Auto</strong> is its physics-based gameplay. Ragdoll physics make every fight, crash, and
          explosion hilariously unpredictable. Watch as characters fly through the air after explosions, vehicles flip and tumble during high-speed chases,
          and objects scatter in all directions during shootouts. The physics system adds a layer of comedy to the chaos, making even the most intense
          moments entertaining.
        </p>
        <p className="mb-4">
          Cars, motorcycles, and even jets expand exploration opportunities, while a variety of weapons add intensity to every mission. Missions delivered
          through your in-game phone keep you engaged, with the police hot on your heels whenever chaos escalates. A perfect blend of absurd humor and
          classic sandbox freedom fuels the experience.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">## Police and Wanted System</h3>
        <p className="mb-4">
          The police in <strong>Dude Theft Auto</strong> are relentless. Cause enough trouble, and you'll find yourself with a wanted level that brings
          increasingly aggressive law enforcement after you. From patrol cars to SWAT teams, the police will stop at nothing to bring you down. Escaping
          requires quick thinking, fast driving, and sometimes a well-placed explosion.
        </p>
        <p className="mb-4">
          The wanted system adds tension and excitement to your criminal activities, making every heist and rampage a thrilling challenge. You'll need to
          master the art of evasion, using the city's layout to your advantage. Hide in alleys, switch vehicles, or simply outrun the cops in high-speed
          chases that will get your heart racing.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">## Weapons Arsenal and Vehicle Collection</h3>
        <p className="mb-4">
          <strong>Dude Theft Auto</strong> offers an impressive arsenal of weapons and vehicles to fuel your chaos. From pistols and shotguns to rocket
          launchers and grenades, you'll find everything you need to cause mayhem. The weapon variety ensures that every confrontation can be approached
          differently, whether you prefer stealth or all-out warfare.
        </p>
        <p className="mb-4">
          The vehicle collection is equally impressive. Drive sports cars at breakneck speeds, cruise in motorcycles through narrow alleys, or take to
          the skies in helicopters and jets. Each vehicle handles differently, adding depth to your exploration and escape strategies. Stealing vehicles
          is as simple as approaching them and pressing the enter key, making it easy to switch rides on the fly.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">## Mini-Games and Side Activities</h3>
        <p className="mb-4">
          Beyond the main chaos, <strong>Dude Theft Auto</strong> is packed with entertaining mini-games and side activities. Try your hand at bowling,
          work as a taxi driver to earn some cash, or participate in street races. These activities provide a nice break from the mayhem while still
          offering rewards and entertainment.
        </p>
        <p className="mb-4">
          The variety ensures that you'll never run out of things to do, whether you're in the mood for destruction or just want to relax with some
          casual fun. Each mini-game is well-designed and adds depth to the overall experience, making the city feel truly alive and full of possibilities.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">## Open-World Freedom</h3>
        <p className="mb-4">
          The true beauty of <strong>Dude Theft Auto</strong> lies in its open-world freedom. There's no linear path to follow—you're free to explore,
          experiment, and create your own fun. Want to be a law-abiding taxi driver? Go for it. Prefer to rob every bank in the city? That's an option too.
          The game never judges your choices, instead rewarding creativity and chaos equally.
        </p>
        <p className="mb-4">
          This freedom is what makes every playthrough unique and endlessly replayable. You can spend hours just exploring the city, discovering hidden
          secrets, and interacting with the quirky characters that populate this absurd world. The sandbox nature of the game means you're only limited
          by your imagination.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">## Multiplayer Mayhem</h3>
        <p className="mb-4">
          While the single-player experience is already packed with content, <strong>Dude Theft Auto</strong> also features multiplayer modes where you
          can team up with friends or compete against them. Coordinate bank heists, engage in massive street battles, or simply cause chaos together.
          The multiplayer aspect adds a whole new dimension to the game, making it even more unpredictable and entertaining.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">## Graphics and Sound Design</h3>
        <p className="mb-4">
          Despite its chaotic nature, <strong>Dude Theft Auto</strong> features colorful 3D graphics that bring the city to life. The art style is
          cartoonish and vibrant, perfectly matching the game's humorous tone. Sound effects are equally impressive, with satisfying weapon sounds,
          realistic vehicle engines, and hilarious character reactions.
        </p>
        <p className="mb-4">
          The audio-visual presentation enhances the overall experience, making every moment feel impactful and engaging. From the roar of engines to
          the explosions and gunfire, every sound is carefully crafted to immerse you in this crazy world. The city itself is beautifully designed,
          with distinct neighborhoods, landmarks, and hidden areas waiting to be discovered. Day and night cycles add variety to the visual experience,
          while weather effects like rain and fog create atmospheric moments during your adventures.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">## Challenges You Will Face</h3>
        <p className="mb-4">
          While <strong>Dude Theft Auto</strong> offers incredible freedom, it also presents numerous challenges that will test your skills. The police
          force becomes increasingly aggressive as your wanted level rises, deploying helicopters, roadblocks, and heavily armed units to stop you.
          Managing your health and ammunition during intense firefights requires strategic thinking and resource management.
        </p>
        <p className="mb-4">
          Some missions have time limits or specific objectives that must be completed without alerting authorities. Stealth becomes crucial in these
          scenarios, requiring you to carefully plan your approach and execute with precision. The game rewards creative problem-solving, allowing you
          to tackle challenges in multiple ways. Whether you prefer brute force or cunning tactics, there's always a path to success.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">## Tips for Maximum Chaos</h3>
        <p className="mb-4">
          To truly master <strong>Dude Theft Auto</strong>, you'll need to learn the ins and outs of the city. Memorize escape routes and safe houses
          where you can lay low when the heat gets too intense. Stock up on weapons and ammunition before attempting major heists or missions. The
          black market offers powerful equipment, but you'll need cash to afford the best gear.
        </p>
        <p className="mb-4">
          Experiment with different vehicle types to find your favorites. Sports cars offer speed but poor handling, while motorcycles provide agility
          at the cost of protection. Helicopters and jets open up vertical gameplay, allowing you to rain chaos from above or make dramatic escapes.
          Don't forget to explore every corner of the map—hidden collectibles, secret areas, and easter eggs reward curious players with unique items
          and bonuses.
        </p>
        <p className="mb-4">
          Building relationships with NPCs can unlock special missions and rewards. Some characters offer unique challenges or access to exclusive
          content. Pay attention to the in-game phone system, as it's your primary source of missions, tips, and communication with other characters.
          Completing side missions not only earns you money and reputation but also helps you understand the game's mechanics and story better.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">## Why Play Dude Theft Auto?</h3>
        <p className="mb-4">
          <strong>Dude Theft Auto</strong> stands out in the crowded sandbox genre by embracing its absurdity while delivering solid gameplay mechanics.
          The physics-based chaos creates memorable moments that you'll want to share with friends. The open-world design encourages exploration and
          experimentation, ensuring that no two playthroughs are exactly alike.
        </p>
        <p className="mb-4">
          The game's accessibility is another major strength. You can jump in for a quick five-minute rampage or spend hours completing missions and
          exploring every corner of the city. The browser-based format means you can play anywhere without downloads or installations. Regular updates
          add new content, keeping the experience fresh and exciting for returning players.
        </p>
        <p className="mb-4">
          Whether you're a fan of action games, sandbox experiences, or just looking for some chaotic fun, <strong>Dude Theft Auto</strong> delivers
          on all fronts. The combination of humor, freedom, and engaging gameplay creates an experience that's both entertaining and endlessly replayable.
          Join millions of players worldwide and discover why this game has become a phenomenon in the online gaming community.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">## Similar Games You Might Enjoy</h3>
        <p className="mb-4">
          If you love <strong>Dude Theft Auto</strong>, you might also enjoy other open-world action games that offer similar freedom and chaos.
          Games like Grand Theft Auto series inspired this title, offering even more expansive worlds and deeper storylines. For lighter, more
          casual experiences, check out other physics-based sandbox games that emphasize fun over realism.
        </p>
        <p className="mb-4">
          Multiplayer-focused titles provide opportunities to team up with friends or compete against other players in various game modes. Racing
          games offer the vehicular mayhem without the criminal elements, while shooting games focus on combat mechanics and tactical gameplay.
          Whatever your preference, the sandbox genre has something for everyone, and <strong>Dude Theft Auto</strong> serves as an excellent
          introduction to this exciting category of games.
        </p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-500">
        <h3 className="text-xl font-bold text-orange-900 mb-4">🎯 Perfect For</h3>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Sandbox Fans:</strong> Unlimited freedom to create your own chaos</li>
          <li><strong>Action Lovers:</strong> Intense combat and explosive gameplay</li>
          <li><strong>Humor Seekers:</strong> Absurd physics and hilarious situations</li>
          <li><strong>Casual Players:</strong> Easy to pick up and play anytime</li>
          <li><strong>Multiplayer Enthusiasts:</strong> Team up or compete with friends</li>
        </ul>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border-l-4 border-cyan-500">
        <h3 className="text-xl font-bold text-cyan-900 mb-4">🎮 Basic Controls</h3>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>WASD or Arrow Keys:</strong> Move your character around the city</li>
          <li><strong>Spacebar:</strong> Jump and climb obstacles</li>
          <li><strong>Mouse:</strong> Look around, aim, and shoot targets</li>
          <li><strong>Click:</strong> Attack and interact with items</li>
          <li><strong>E Key:</strong> Enter and exit vehicles</li>
          <li><strong>R Key:</strong> Reload weapons</li>
          <li><strong>Tab:</strong> Open your in-game phone for missions</li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-purple-900 mb-4">📋 Getting Started</h3>
        <ol className="space-y-3 list-decimal list-inside">
          <li><strong>Explore the City:</strong> Familiarize yourself with the open-world environment</li>
          <li><strong>Try Mini-Games:</strong> Bowling, taxi driving, and more</li>
          <li><strong>Steal Vehicles:</strong> Find and commandeer cars, bikes, and helicopters</li>
          <li><strong>Grab Weapons:</strong> Collect firearms and explosives around the city</li>
          <li><strong>Cause Chaos:</strong> Rob banks, fight NPCs, and evade police</li>
          <li><strong>Complete Missions:</strong> Check your phone for objectives</li>
        </ol>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
        <h3 className="text-xl font-bold text-green-900 mb-4">💡 Pro Tips</h3>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Always Have an Escape Vehicle:</strong> Keep a fast car nearby when causing trouble</li>
          <li><strong>Use the Environment:</strong> Alleys and rooftops are great for evading police</li>
          <li><strong>Experiment with Weapons:</strong> Each weapon has unique properties and uses</li>
          <li><strong>Complete Phone Missions:</strong> Unlock new areas and equipment</li>
          <li><strong>Don't Be Afraid to Fail:</strong> The game is designed for experimentation</li>
          <li><strong>Try Different Playstyles:</strong> From stealthy thief to rampaging maniac</li>
        </ul>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { icon: '🌍', title: 'Open-World Sandbox', desc: 'Explore a massive city filled with chaos and opportunities' },
        { icon: '🎭', title: 'Physics-Based Mayhem', desc: 'Hilarious ragdoll physics and unpredictable interactions' },
        { icon: '🚗', title: 'Diverse Vehicles', desc: 'Cars, motorcycles, helicopters, and jets to steal' },
        { icon: '🔫', title: 'Weapon Arsenal', desc: 'Pistols, shotguns, rocket launchers, and grenades' },
        { icon: '🚨', title: 'Police Chases', desc: 'Intense wanted system with escalating law enforcement' },
        { icon: '🎮', title: 'Mini-Games', desc: 'Bowling, taxi driving, street racing, and more' },
        { icon: '👥', title: 'Multiplayer Mode', desc: 'Team up or compete with friends online' },
        { icon: '🆓', title: 'Free to Play', desc: 'No downloads required—play instantly in your browser' },
      ].map((feature, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow-md border-2 border-orange-200 hover:border-orange-400 transition-colors">
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