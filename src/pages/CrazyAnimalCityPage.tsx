'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function CrazyAnimalCityPage() {
  const game = {
    slug: 'crazy-animal-city',
    title: 'Crazy Animal City',
    subtitle: 'Unleash Chaos in the Ultimate 3D Animal Rampage Simulator',
    description: 'Unleash chaos in Crazy Animal City, a wild 3D sim packed with insane destruction and beastly rage. Smash, roar, and dominate the virtual jungle!',
    playUrl: 'https://1games.io/game/crazy-animal-city/',
    thumbnail: '/images/thumbnails/crazy-animal-city.webp',
    rating: 4.6,
    playCount: 320,
    tags: ['3D', 'Simulation', 'Action', 'Casual', 'Animal', 'City'],
    backgroundColor: 'from-orange-400 via-red-400 to-pink-400',
  };

  const aboutContent = (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🦁 Welcome to Crazy Animal City</h3>
        <p className="mb-4">
          <strong>Crazy Animal City</strong> is not your average simulation game—it's a full-blown rampage experience where you take control of 
          powerful animals and unleash absolute chaos across a vibrant 3D cityscape. Whether you're a ferocious lion, a mighty gorilla, or a 
          rampaging elephant, your mission is simple: destroy everything in sight, dominate the urban jungle, and become the ultimate beast of 
          the city!
        </p>
        <p className="mb-4">
          This game combines the thrill of destruction with the freedom of open-world exploration. Smash through buildings, flip cars, terrify 
          citizens, and leave a trail of mayhem wherever you go. With stunning 3D graphics, realistic physics, and addictive gameplay, Crazy 
          Animal City delivers an adrenaline-pumping experience that will keep you coming back for more carnage and chaos.
        </p>
        <p className="mb-4">
          From the moment you step into the city, you'll feel the raw power of nature unleashed in an urban environment. The game features 
          multiple playable animals, each with unique abilities and destruction styles. Whether you prefer the brute strength of a rhino or 
          the agility of a tiger, there's an animal that matches your playstyle. The city is your playground, and destruction is your game!
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎮 Gameplay That Roars with Excitement</h3>
        <p className="mb-4">
          <strong>Crazy Animal City</strong> offers an open-world sandbox experience where you're free to explore, destroy, and dominate at your 
          own pace. The game doesn't hold your hand—it throws you into the chaos and lets you create your own path of destruction. Every building 
          can be demolished, every vehicle can be crushed, and every obstacle can be overcome with sheer animal power.
        </p>
        <p className="mb-4">
          The controls are intuitive and responsive, making it easy to navigate the city and unleash devastating attacks. Use your animal's 
          special abilities to maximize destruction—charge through walls, leap onto rooftops, or use your roar to scatter crowds. The physics 
          engine ensures that every impact feels satisfying, with realistic destruction effects that make you feel the weight of your actions.
        </p>
        <p className="mb-4">
          As you progress through the game, you'll unlock new animals and abilities, each offering fresh ways to cause mayhem. Complete 
          challenges to earn rewards, discover hidden areas of the city, and compete for high scores on global leaderboards. The game 
          constantly rewards exploration and creativity, encouraging you to find new and exciting ways to wreak havoc.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🏙️ A Living, Breathing City to Destroy</h3>
        <p className="mb-4">
          The city in <strong>Crazy Animal City</strong> is more than just a backdrop—it's a dynamic environment filled with interactive 
          elements and surprises. From bustling downtown districts to quiet residential neighborhoods, every area offers unique destruction 
          opportunities. Watch as citizens flee in terror, police cars chase you down, and the military eventually gets involved to stop 
          your rampage.
        </p>
        <p className="mb-4">
          The game features day and night cycles, weather effects, and environmental hazards that add variety to your destructive adventures. 
          Smash through a construction site during a thunderstorm, or terrorize a park on a sunny afternoon. The city reacts to your presence, 
          with emergency services responding to your chaos and the environment changing based on your actions.
        </p>
        <p className="mb-4">
          Hidden throughout the city are collectibles, power-ups, and secret areas that reward thorough exploration. Find special items to 
          boost your animal's abilities, discover shortcuts through the urban landscape, and unlock bonus content that enhances your gameplay 
          experience. The city is packed with content, ensuring that every playthrough offers something new to discover.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🦍 Multiple Animals, Endless Destruction</h3>
        <p className="mb-4">
          One of the standout features of <strong>Crazy Animal City</strong> is its diverse roster of playable animals. Each creature brings 
          its own unique playstyle and abilities to the table:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li><strong>Lion:</strong> The king of beasts with powerful melee attacks and a terrifying roar that sends enemies running</li>
          <li><strong>Gorilla:</strong> Incredible strength for throwing vehicles and climbing buildings with ease</li>
          <li><strong>Elephant:</strong> Massive size and unstoppable charging attacks that demolish everything in your path</li>
          <li><strong>Tiger:</strong> Lightning-fast speed and agility for quick strikes and parkour-style movement</li>
          <li><strong>Rhino:</strong> Armored tank with devastating charge attacks and high durability</li>
          <li><strong>Bear:</strong> Balanced stats with powerful swipes and the ability to stand on hind legs for extra reach</li>
        </ul>
        <p className="mb-4">
          Each animal can be upgraded and customized as you progress, allowing you to enhance their abilities and unlock new moves. Experiment 
          with different animals to find your favorite, or master them all to become the ultimate city destroyer. The variety ensures that the 
          gameplay never gets stale, with each animal offering a completely different experience.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">💥 Destruction Physics That Feel Real</h3>
        <p className="mb-4">
          The destruction in <strong>Crazy Animal City</strong> isn't just for show—it's powered by an advanced physics engine that makes 
          every impact feel authentic and satisfying. Buildings crumble realistically, vehicles flip and explode, and debris scatters in 
          all directions. The game's attention to detail in its destruction mechanics sets it apart from other rampage simulators.
        </p>
        <p className="mb-4">
          Watch as skyscrapers collapse floor by floor, bridges buckle under your weight, and entire city blocks transform into rubble. 
          The environmental destruction is persistent, meaning the damage you cause remains visible throughout your playthrough. Return to 
          areas you've already destroyed to see the lasting impact of your rampage, creating a visual record of your path of chaos.
        </p>
        <p className="mb-4">
          The physics system also affects gameplay strategy. Use falling debris to your advantage, create barriers with destroyed vehicles, 
          or collapse buildings onto pursuing enemies. The dynamic destruction opens up creative possibilities for how you approach each 
          situation, rewarding players who think tactically about their mayhem.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Challenges and Objectives</h3>
        <p className="mb-4">
          While <strong>Crazy Animal City</strong> excels as a sandbox destruction game, it also offers structured challenges and objectives 
          for players who want more direction. Complete missions to unlock new animals, earn currency for upgrades, and climb the global 
          leaderboards. Challenges range from timed destruction goals to specific target elimination, keeping the gameplay varied and engaging.
        </p>
        <p className="mb-4">
          Daily and weekly challenges provide fresh content and rewards, encouraging you to return regularly and test your skills in new ways. 
          Compete with friends and players worldwide to see who can cause the most destruction in the shortest time, or who can complete 
          challenges with the highest score. The competitive elements add longevity to the game without detracting from the core sandbox experience.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🌟 Why Crazy Animal City Stands Out</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-bold text-orange-900 mb-2">🎨 Stunning 3D Graphics</h4>
            <p className="text-gray-700 text-sm">
              Beautiful, detailed environments with realistic lighting and particle effects that bring the city to life
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-bold text-red-900 mb-2">💪 Satisfying Destruction</h4>
            <p className="text-gray-700 text-sm">
              Advanced physics engine delivers incredibly satisfying and realistic destruction mechanics
            </p>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg">
            <h4 className="font-bold text-pink-900 mb-2">🦁 Diverse Animal Roster</h4>
            <p className="text-gray-700 text-sm">
              Multiple playable animals, each with unique abilities and playstyles to master
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-purple-900 mb-2">🏙️ Open World Freedom</h4>
            <p className="text-gray-700 text-sm">
              Explore a massive city with no restrictions—go anywhere and destroy everything
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-2">🎮 Intuitive Controls</h4>
            <p className="text-gray-700 text-sm">
              Easy to learn but hard to master, with responsive controls that feel great
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-900 mb-2">🏆 Competitive Features</h4>
            <p className="text-gray-700 text-sm">
              Global leaderboards, challenges, and achievements to keep you coming back
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎪 Perfect for Stress Relief</h3>
        <p className="mb-4">
          Beyond its entertainment value, <strong>Crazy Animal City</strong> serves as an excellent stress relief tool. There's something 
          incredibly cathartic about unleashing your inner beast and causing virtual mayhem without consequences. The game provides a safe 
          outlet for frustration and tension, allowing you to blow off steam in the most spectacular way possible.
        </p>
        <p className="mb-4">
          The casual nature of the gameplay means you can jump in for a quick five-minute rampage or settle in for an extended destruction 
          session. There's no pressure to perform perfectly or follow strict rules—just pure, unadulterated chaos at your fingertips. It's 
          the perfect game to unwind after a long day or to simply have some mindless fun.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🚀 Regular Updates and New Content</h3>
        <p className="mb-4">
          The developers of <strong>Crazy Animal City</strong> are committed to keeping the game fresh with regular updates. New animals, 
          city areas, challenges, and features are added frequently, ensuring that there's always something new to discover. The active 
          development and community engagement mean that player feedback is heard and implemented, making the game better with each update.
        </p>
        <p className="mb-4">
          Seasonal events and limited-time content provide exclusive rewards and unique gameplay experiences. Whether it's a holiday-themed 
          rampage or a special challenge event, there's always a reason to return to Crazy Animal City and see what's new. The game's 
          longevity is ensured through this commitment to ongoing content and improvements.
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-lg border-l-4 border-orange-500">
        <h3 className="text-xl font-bold text-orange-900 mb-4">🎯 Pro Tips for Maximum Destruction</h3>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Chain Destruction:</strong> Create combos by destroying multiple objects in quick succession for bonus points</li>
          <li><strong>Use the Environment:</strong> Knock down structures onto enemies or use vehicles as projectiles</li>
          <li><strong>Master Each Animal:</strong> Learn the unique abilities of each creature to maximize your effectiveness</li>
          <li><strong>Explore Thoroughly:</strong> Hidden collectibles and power-ups are scattered throughout the city</li>
          <li><strong>Complete Challenges:</strong> Focus on objectives to unlock new content and upgrades faster</li>
          <li><strong>Experiment with Tactics:</strong> Try different approaches to find the most satisfying destruction methods</li>
        </ul>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-xl font-bold text-blue-900 mb-4">🎮 Controls</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">Desktop Controls:</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>Arrow Keys / WASD:</strong> Move your animal around the city</li>
              <li><strong>Spacebar:</strong> Jump over obstacles and onto buildings</li>
              <li><strong>Left Mouse Button:</strong> Attack and destroy objects</li>
              <li><strong>Right Mouse Button:</strong> Use special ability (varies by animal)</li>
              <li><strong>Shift:</strong> Sprint for faster movement</li>
              <li><strong>E:</strong> Interact with special objects</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">Mobile Controls:</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>Virtual Joystick:</strong> Move your animal</li>
              <li><strong>Jump Button:</strong> Leap and climb</li>
              <li><strong>Attack Button:</strong> Destroy everything</li>
              <li><strong>Special Button:</strong> Activate unique abilities</li>
              <li><strong>Sprint Toggle:</strong> Move faster</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-purple-900 mb-4">📋 Getting Started</h3>
        <ol className="space-y-3 list-decimal list-inside">
          <li><strong>Choose Your Animal:</strong> Select from the available animals (unlock more as you progress)</li>
          <li><strong>Enter the City:</strong> Spawn into the urban environment ready for destruction</li>
          <li><strong>Start Destroying:</strong> Attack buildings, vehicles, and anything else you see</li>
          <li><strong>Complete Objectives:</strong> Follow on-screen prompts to complete challenges (optional)</li>
          <li><strong>Avoid Capture:</strong> Watch out for police and military forces trying to stop you</li>
          <li><strong>Collect Power-ups:</strong> Grab special items to enhance your abilities</li>
          <li><strong>Unlock Content:</strong> Earn points to unlock new animals and upgrades</li>
        </ol>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { icon: '🦁', title: 'Multiple Animals', desc: 'Play as lions, gorillas, elephants, and more!' },
        { icon: '🏙️', title: 'Open World City', desc: 'Massive urban environment to explore and destroy' },
        { icon: '💥', title: 'Realistic Physics', desc: 'Advanced destruction mechanics that feel authentic' },
        { icon: '🎮', title: 'Easy Controls', desc: 'Intuitive gameplay suitable for all skill levels' },
        { icon: '🏆', title: 'Challenges & Rewards', desc: 'Complete objectives to unlock new content' },
        { icon: '🌟', title: 'Stunning Graphics', desc: 'Beautiful 3D visuals with detailed environments' },
        { icon: '🎯', title: 'Global Leaderboards', desc: 'Compete with players worldwide' },
        { icon: '🆓', title: 'Free to Play', desc: 'No cost, no downloads—play instantly in your browser' },
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

