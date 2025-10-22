'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function ObbyMySingingBrainrotPage() {
  const game = {
    slug: 'obby-my-singing-brainrot',
    title: 'Obby: My Singing Brainrot',
    subtitle: 'Musical Parkour Adventure with Meme Animals and Brainrot Humor!',
    description: 'Obby: My Singing Brainrot is an exhilarating Roblox game where meme animals come to life as musicians. Dive into a vibrant world filled with wild adventures and quirky Italian neuro-animal memes. As a Roblox adventurer, you will explore various locations, collect resources, and put on your own musical shows. Each character has a unique sound that contributes to a mesmerizing Brainrot symphony, creating an energetic and exciting atmosphere.',
    playUrl: 'https://st.8games.net/7/8g/igra-obbi-moj-poyushchij-brejnrot-1-3d/',
    thumbnail: '/images/thumbnails/obby-my-singing-brainrot.jpg',
    rating: 5.0,
    playCount: 612,
    tags: ['Roblox', 'Music', 'Meme', 'Adventure', 'Parkour', 'Brainrot'],
    backgroundColor: 'from-pink-400 via-purple-400 to-indigo-400',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-purple-900 mb-3">🎮 What is Obby: My Singing Brainrot?</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Obby: My Singing Brainrot is an exhilarating Roblox game where meme animals come to life as musicians. Dive into a vibrant world filled with wild adventures and quirky Italian neuro-animal memes. As a Roblox adventurer, you will explore various locations, collect resources, and put on your own musical shows. Each character has a unique sound that contributes to a mesmerizing Brainrot symphony, creating an energetic and exciting atmosphere. Gather heroes to enhance your stage performance and earn crystals faster in Obby: My Singing Brainrot!
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-blue-900 mb-3">🎵 Musical Gameplay Experience</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Obby: My Singing Brainrot combines parkour challenges with musical elements to create a unique gaming experience. The fusion of music, memes, and adventure creates an unforgettable journey through Obby: My Singing Brainrot. Players are not only challenged with parkour and resource collection but also immersed in a lively musical atmosphere. With each character contributing to the Brainrot symphony, you'll find yourself enjoying the whimsical journey as you strive to become the ultimate music master in Obby: My Singing Brainrot!
        </p>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-pink-900 mb-3">🏗️ Create Your Character</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Begin your adventure in Obby: My Singing Brainrot by choosing your favorite meme animal character. Customize your character with various skins and accessories to make it uniquely yours. Navigate through different environments in Obby: My Singing Brainrot, each filled with unique challenges and resources. Keep an eye out for hidden areas that contain valuable items and collectibles. Your character choice will influence your gameplay style and musical contributions to the Brainrot symphony!
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-green-900 mb-3">💎 Collecting Resources & Crystals</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          As you explore Obby: My Singing Brainrot, collect crystals scattered throughout the map. These are essential for upgrading your characters and unlocking new abilities in Obby: My Singing Brainrot. Look for collectible items and resources that can help you progress faster. Some may require completing tasks or overcoming obstacles. Discover secret locations that contain extra crystals and resources to accelerate your progress in Obby: My Singing Brainrot!
        </p>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-yellow-900 mb-3">⚡ Thrilling Parkour Challenges</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Engage in thrilling parkour challenges in Obby: My Singing Brainrot where you'll jump across platforms, avoid traps, and test your skills. Completing these courses rewards you with valuable items and crystals. Beware of the Brainrot Guards in Obby: My Singing Brainrot! If they catch you, you'll be sent back to the lobby. Use stealth and agility to evade them and progress through the challenging obstacle courses in Obby: My Singing Brainrot!
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-indigo-900 mb-3">🎤 Hosting Concerts & Performances</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Collect various meme characters to form a band in Obby: My Singing Brainrot. The more diverse your team, the better your concert will sound. Once your band is ready, take them to the stage and start your concert in Obby: My Singing Brainrot. Sing along to the music and show off your skills to earn rewards. Each character's unique sound contributes to the mesmerizing Brainrot symphony that defines Obby: My Singing Brainrot!
        </p>
      </div>

      <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-cyan-900 mb-3">⭐ Why You'll Love Obby: My Singing Brainrot</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Obby: My Singing Brainrot offers an unforgettable gaming experience combining music, memes, and adventure. The unique blend of parkour gameplay with musical elements makes Obby: My Singing Brainrot stand out from other Roblox games. Whether you're a fan of obbies, music games, or brainrot humor, Obby: My Singing Brainrot delivers hours of entertainment. Join the fun and let your creativity shine on stage in Obby: My Singing Brainrot. The charm, humor, and engaging gameplay make it a must-play title!
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-orange-900 mb-3">🎮 Step 1: Create Your Character</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Start your Obby: My Singing Brainrot adventure by choosing your favorite meme animal character. Customize your character with various skins and accessories to make it uniquely yours. Your character selection will determine your appearance and musical contribution to the Brainrot symphony. Take time to explore the customization options available in Obby: My Singing Brainrot to create the perfect character for your adventure!
        </p>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-red-900 mb-3">🏗️ Step 2: Navigate Through Environments</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Navigate through different environments in Obby: My Singing Brainrot, each filled with unique challenges and resources. Explore various locations to discover hidden areas and collectibles. Pay attention to the layout of each environment in Obby: My Singing Brainrot to find the best routes for collecting resources. Understanding the map layout will help you progress more efficiently through Obby: My Singing Brainrot!
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-green-900 mb-3">💎 Step 3: Collect Resources & Crystals</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          As you explore, collect crystals scattered throughout the map in Obby: My Singing Brainrot. These are essential for upgrading your characters and unlocking new abilities. Look for collectible items and resources that can help you progress. Some may require completing tasks or overcoming obstacles. Gather as many resources as possible to enhance your performance in Obby: My Singing Brainrot!
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-blue-900 mb-3">⚡ Step 4: Complete Parkour Challenges</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Engage in thrilling parkour challenges in Obby: My Singing Brainrot where you'll jump across platforms, avoid traps, and test your skills. Completing these courses rewards you with valuable items and crystals. Beware of the Brainrot Guards in Obby: My Singing Brainrot! Use stealth and agility to evade them and progress through the challenging obstacle courses. Master the parkour mechanics to unlock new areas in Obby: My Singing Brainrot!
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-purple-900 mb-3">🎤 Step 5: Form Your Band & Host Concerts</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Collect various meme characters to form a band in Obby: My Singing Brainrot. The more diverse your team, the better your concert will sound. Once your band is ready, take them to the stage and start your concert in Obby: My Singing Brainrot. Sing along to the music and show off your skills to earn rewards. Each character's unique sound contributes to the mesmerizing Brainrot symphony!
        </p>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-pink-900 mb-3">🏆 Step 6: Earn Crystals Faster & Progress</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Reset your progress for bonus multipliers, allowing you to earn crystals more quickly in Obby: My Singing Brainrot. Participate in daily tasks that provide crystal rewards upon completion. Join special in-game events that offer exclusive rewards and increased crystal drops. Discover secret locations that contain extra crystals and resources. Exchange collected items with other players for additional crystals and upgrades in Obby: My Singing Brainrot!
        </p>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-lg border-2 border-purple-300">
        <h4 className="text-xl font-bold text-purple-900 mb-2">🎮 Meme Animal Characters</h4>
        <p className="text-gray-700">Choose from quirky Italian neuro-animal memes and customize your character with various skins and accessories.</p>
      </div>

      <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg border-2 border-blue-300">
        <h4 className="text-xl font-bold text-blue-900 mb-2">🎵 Musical Gameplay</h4>
        <p className="text-gray-700">Enjoy catchy tunes and unique sounds from each character that contribute to the mesmerizing Brainrot symphony.</p>
      </div>

      <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-lg border-2 border-green-300">
        <h4 className="text-xl font-bold text-green-900 mb-2">🏃 Parkour Challenges</h4>
        <p className="text-gray-700">Navigate through thrilling obstacle courses, jump across platforms, and avoid traps to earn rewards.</p>
      </div>

      <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
        <h4 className="text-xl font-bold text-yellow-900 mb-2">💎 Crystal Collection</h4>
        <p className="text-gray-700">Collect crystals throughout the map to upgrade characters and unlock new abilities in the game.</p>
      </div>

      <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-lg border-2 border-pink-300">
        <h4 className="text-xl font-bold text-pink-900 mb-2">🎤 Concert Hosting</h4>
        <p className="text-gray-700">Form a band with diverse meme characters and host concerts to earn rewards and showcase your skills.</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-6 rounded-lg border-2 border-indigo-300">
        <h4 className="text-xl font-bold text-indigo-900 mb-2">🌍 Multiple Environments</h4>
        <p className="text-gray-700">Explore various locations filled with unique challenges, resources, and hidden areas to discover.</p>
      </div>

      <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 p-6 rounded-lg border-2 border-cyan-300">
        <h4 className="text-xl font-bold text-cyan-900 mb-2">😂 Brainrot Humor</h4>
        <p className="text-gray-700">Experience hilarious meme references and quirky humor throughout your Obby: My Singing Brainrot adventure.</p>
      </div>

      <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-lg border-2 border-orange-300">
        <h4 className="text-xl font-bold text-orange-900 mb-2">🎯 Daily Tasks & Events</h4>
        <p className="text-gray-700">Complete daily tasks and join special in-game events for exclusive rewards and increased crystal drops.</p>
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