'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function StealTheItalianBrainrotPage() {
  const game = {
    slug: 'steal-the-italian-brainrot',
    title: 'Steal The Italian Brainrot',
    subtitle: 'The Ultimate Unblocked Game',
    description: 'Steal The Italian Brainrot is an exhilarating meme game where you collect rare Italian brainrot animals, compete with bots, and execute strategic heists to build your fortune.',
    playUrl: 'https://st.8games.net/7/8g/igra-ukradi-italyanskij-brejnrot/',
    thumbnail: 'https://steal-brainrot.io/data/image/game/Steal-The-Italian-Brainrot.png',
    rating: 3.5,
    playCount: 881,
    tags: ['Meme Games', 'Brainrot Games', 'Roblox Games', 'Strategy', 'Multiplayer'],
    backgroundColor: 'from-purple-400 via-pink-400 to-red-400',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>Steal The Italian Brainrot</strong> is an exhilarating meme game that combines humor, strategy, and competitive gameplay in a vibrant world of Italian brainrot animals. Diving into this game is like stepping into a vibrant world where meme culture meets whimsical animal characters. From the moment you enter, you're greeted by a colorful array of Italian brainrot animals, including the quirky Brr Patapim and the hilarious La Vaca Saturnu Saturnita. The competition is fierce, with five bots running alongside you, each behaving like real players, adding a thrilling edge to the gameplay. The primary objective is simple yet captivating: collect the rarest meme animals while accumulating a fortune.
        </p>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          Playing this meme game is an exhilarating experience filled with laughter and strategic challenges. The game begins with a straightforward premise: earn money by purchasing increasingly rare meme animals from the feed. As you buy your first few neuro animals, you quickly realize that the rarer the creature, the greater the profit it generates. The excitement builds as you rush to bring your newly acquired memes back to your base, knowing that other players could snatch them away at any moment. This game features dynamic gameplay where every decision matters and every second counts.
        </p>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          One of the most exhilarating aspects is hacking into other players' bases to steal their collections. The adrenaline rush from successfully executing a heist is unforgettable. Boosters are game-changers, allowing you to speed up your movements, snatch memes directly from opponents, and even increase your luck in finding rare animals. Using rebirths opens the door to mythical beasts, adding a layer of excitement and new challenges to the game. Setting traps and blockades is crucial to safeguarding your collection from rival players.
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          The strategic depth is remarkable. You must balance offense and defense, deciding when to invest in rare animals and when to protect your base. This game rewards players who think ahead and adapt to changing circumstances. The competitive nature means you're constantly challenged by intelligent bots and other players. Learning the patterns and strategies is key to success. Every playthrough offers new opportunities and challenges that keep the experience fresh and engaging.
        </p>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          The game features a diverse roster of Italian brainrot animals, each with unique characteristics and value. Collecting all the animals is a challenging goal that keeps players engaged for hours. The visual design is colorful and charming, with each animal character bringing personality to the experience. The meme culture references add humor and relatability to the gameplay. Whether you're a casual player or a competitive gamer, this unblocked game offers something for everyone who enjoys strategic meme-based entertainment.
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          The economy system is well-balanced and rewarding. Earning money feels satisfying, and spending it on rare animals creates a sense of progression. The trading mechanics add depth to the gameplay. You can negotiate with other players, form temporary alliances, or go solo. The flexibility allows different playstyles to succeed, whether you prefer aggressive heisting or defensive base-building strategies.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          Overall, this is a must-play game for meme lovers and strategy enthusiasts. The combination of humor, strategy, and competition creates a dynamic gaming environment that keeps players engaged. Whether you're a fan of memes or just looking for a fun way to challenge yourself, this unblocked game offers endless entertainment. The community is vibrant and welcoming, making it easy to find friends and rivals. Gather your wits, prepare your strategies, and dive into the world of Italian brainrot animals - you won't regret it!
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <ul className="space-y-4">
      <li className="flex gap-4">
        <span className="text-2xl">🎮</span>
        <div>
          <strong className="text-lg">Start Your Journey:</strong>
          <p className="text-gray-700 mt-2">Begin by entering the vibrant world with your initial capital. Your goal is to purchase rare Italian brainrot animals and build your fortune. Every decision counts as you navigate the competitive landscape.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">💰</span>
        <div>
          <strong className="text-lg">Collect Rare Meme Animals:</strong>
          <p className="text-gray-700 mt-2">Purchase increasingly rare animals from the feed. The rarer the creature, the greater the profit it generates. Timing is crucial - buy low and sell high to maximize your earnings and build your wealth.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">🏃</span>
        <div>
          <strong className="text-lg">Rush Back to Your Base:</strong>
          <p className="text-gray-700 mt-2">Once you've purchased animals, quickly return them to your base. Other players can intercept you, so speed is essential. Keep your eyes open for threats while navigating the game world.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">🔓</span>
        <div>
          <strong className="text-lg">Execute Strategic Heists:</strong>
          <p className="text-gray-700 mt-2">Hack into other players' bases to steal their collections. The adrenaline rush from successfully executing a heist is unforgettable. Plan your attacks carefully and choose your targets wisely.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">⚡</span>
        <div>
          <strong className="text-lg">Use Boosters and Power-ups:</strong>
          <p className="text-gray-700 mt-2">Boosters are game-changers that allow you to speed up movements, snatch memes directly from opponents, and increase your luck. Strategic use of these power-ups can turn the tide of battle in your favor.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">🛡️</span>
        <div>
          <strong className="text-lg">Defend Your Base:</strong>
          <p className="text-gray-700 mt-2">Set traps and blockades to protect your collection. A well-protected base can make all the difference in keeping your hard-earned memes safe from rival players.</p>
        </div>
      </li>
    </ul>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🎭</span>
          <h4 className="text-lg font-bold text-gray-800">Italian Brainrot Animals</h4>
        </div>
        <p className="text-gray-700">Collect unique Italian brainrot animals including Brr Patapim and La Vaca Saturnu Saturnita with distinct personalities</p>
      </div>

      <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🤖</span>
          <h4 className="text-lg font-bold text-gray-800">Intelligent Bot Opponents</h4>
        </div>
        <p className="text-gray-700">Face five competitive bots that behave like real players, providing challenging and unpredictable gameplay</p>
      </div>

      <div className="bg-gradient-to-br from-red-100 to-red-50 p-6 rounded-lg border-l-4 border-red-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">💎</span>
          <h4 className="text-lg font-bold text-gray-800">Rare Animal Collection</h4>
        </div>
        <p className="text-gray-700">Hunt for rare meme animals to maximize profits and build your fortune in this unblocked game</p>
      </div>

      <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🔓</span>
          <h4 className="text-lg font-bold text-gray-800">Heist Mechanics</h4>
        </div>
        <p className="text-gray-700">Hack into other players' bases and steal their collections for thrilling and rewarding gameplay moments</p>
      </div>

      <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">⚡</span>
          <h4 className="text-lg font-bold text-gray-800">Boosters & Power-ups</h4>
        </div>
        <p className="text-gray-700">Use boosters to speed up movements and increase your chances of success in competitive situations</p>
      </div>

      <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🔄</span>
          <h4 className="text-lg font-bold text-gray-800">Rebirth System</h4>
        </div>
        <p className="text-gray-700">Unlock mythical beasts through rebirths for new challenges and exciting rewards</p>
      </div>

      <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🛡️</span>
          <h4 className="text-lg font-bold text-gray-800">Base Defense</h4>
        </div>
        <p className="text-gray-700">Set traps and blockades to protect your collection from rival players and thieves</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🎮</span>
          <h4 className="text-lg font-bold text-gray-800">Multiplayer Competition</h4>
        </div>
        <p className="text-gray-700">Compete with other players in a dynamic, ever-changing gaming environment full of surprises</p>
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