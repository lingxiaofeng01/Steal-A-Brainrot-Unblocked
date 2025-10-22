'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function PlantsVsBrainrotsPage() {
  const game = {
    slug: 'plants-vs-brainrots',
    title: 'Plants vs Brainrots',
    subtitle: 'Tower Defense Strategy Game - Grow Plants to Defend Against Brainrot Waves!',
    description: 'Plants vs Brainrots is a creative tower defense and gardening simulation game where you plant seeds, nurture plants, and strategically position them to prevent Brainrots from attacking your base. With unique plant mutations, passive income systems, and strategic gameplay, become a gardening master!',
    playUrl: 'https://st.8games.net/7/8g/igra-brejnroty-protiv-rastenij/',
    thumbnail: '/images/thumbnails/plants-vs-brainrots.jpg',
    rating: 4.1,
    playCount: 21567,
    tags: ['Brainrot', 'Strategy', 'Tower Defense', 'Meme', 'Casual', 'Funny'],
    backgroundColor: 'from-green-400 via-emerald-400 to-teal-400',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-purple-900 mb-3">🎮 What is Plants vs Brainrots?</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Plants vs Brainrots is a highly creative tower defense game that combines strategic gardening simulation with hilarious Brainrot meme characters. Your mission is to grow plants, nurture them to full potential, and strategically position them to fend off waves of attacking Brainrots. Each plant has unique stats for damage, seed cost, and growth time. The rarer the plant, the stronger it is, but it takes longer to mature. Plants vs Brainrots offers an engaging blend of strategy and humor!
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-blue-900 mb-3">🌱 Strategic Plant Placement</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          In Plants vs Brainrots, strategic plant placement is crucial to your success. Position plants near the Brainrots' path to maximize damage output. Different plants have varying damage ranges and attack speeds. Cactus deals 10 damage, Strawberry deals 25 damage, while legendary plants like Watermelon deal 750 damage! Plan your garden layout carefully to create an impenetrable defense. Master the art of plant positioning in Plants vs Brainrots to defeat every wave!
        </p>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-pink-900 mb-3">✨ Powerful Mutation System</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Plants vs Brainrots features an exciting mutation system that significantly boosts plant and Brainrot abilities. Plants and Brainrots have chances to gain mutations like Gold (2x), Diamond (3x), Neon (4.5x), or Frozen (4x with slowing effects). A Neon-mutated Watermelon can deal up to 3,375 damage, becoming a devastating weapon! Frozen mutations slow Brainrots, giving other plants more time to attack. Leverage mutations in Plants vs Brainrots to dominate!
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-green-900 mb-3">💰 Passive Income & Resource Management</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          After defeating Brainrots in Plants vs Brainrots, you can sell them for cash or place them in your base to generate passive income. High-income Brainrots like Fluri Flura generate $6/sec, while epic Brainrots like Brr Brr Patapim generate $12/sec! Manage your resources effectively by balancing investments in new plants and saving cash for tougher waves. Neon-mutated Brainrots boost income by 4.5 times, helping you accumulate wealth quickly in Plants vs Brainrots!
        </p>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-yellow-900 mb-3">🌊 Wave-Based Gameplay</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Plants vs Brainrots features wave-based gameplay where Brainrots attack your base in increasingly challenging waves. Each wave brings different rarities and values of Brainrots. Early waves feature common Brainrots, while later waves introduce rare and epic variants. Prepare your defenses between waves by upgrading plants and collecting high-income Brainrots. The difficulty curve in Plants vs Brainrots is well-balanced, providing constant challenges and excitement!
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-indigo-900 mb-3">🎯 Diverse Plant Arsenal</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Plants vs Brainrots offers a diverse arsenal of plants with varying rarity levels and abilities. Start with affordable plants like Cactus ($200) or Strawberry ($1,250) for beginners. Progress to epic plants like Pumpkin ($5,000) and legendary plants like Dragon Fruit ($100,000). Ultimate plants like Mr. Carrot ($50,000,000) deal massive 3,500 damage! Each plant in Plants vs Brainrots has unique characteristics, encouraging strategic experimentation and collection!
        </p>
      </div>

      <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-cyan-900 mb-3">⭐ Why You'll Love Plants vs Brainrots</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Plants vs Brainrots combines classic tower defense mechanics with hilarious Brainrot meme characters and engaging gardening simulation. The game offers endless entertainment with diverse plants, strategic mutations, and passive income systems. Whether you're a casual player seeking relaxation or a competitive gamer chasing high scores, Plants vs Brainrots delivers an experience that's both accessible and deeply engaging. Start playing today and become a gardening master!
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-orange-900 mb-3">🎮 Step 1: Start Your Garden</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Launch Plants vs Brainrots and begin your gardening adventure. You start with initial currency to purchase seeds from the in-game shop. Choose your first plants wisely - affordable options like Cactus ($200) are perfect for beginners. Plan your garden layout and decide where to place your initial defenses. The first wave will arrive soon, so prepare your plants strategically!
        </p>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-red-900 mb-3">🌱 Step 2: Plant Seeds & Nurture Growth</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Purchase seeds and plant them in your garden. Each plant in Plants vs Brainrots has a growth time before it becomes active. Rarer plants take longer to mature but deal significantly more damage. Monitor your plants' growth and watch for mutations that occur during the growing process. Mutations like Gold, Diamond, Neon, or Frozen dramatically boost your plants' effectiveness!
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-green-900 mb-3">🛡️ Step 3: Defend Against Brainrot Waves</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Brainrots attack in waves, and your plants must defend your base. Position plants strategically along the Brainrots' path to maximize damage. Watch your plants attack and defeat incoming Brainrots. Each defeated Brainrot goes to your inventory. The more waves you survive, the stronger the attacks become. Stay alert and adjust your strategy as needed in Plants vs Brainrots!
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-blue-900 mb-3">💰 Step 4: Collect & Manage Resources</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          After defeating Brainrots in Plants vs Brainrots, collect them and decide whether to sell for immediate cash or place them in your base for passive income. High-income Brainrots generate continuous revenue. Manage your currency carefully - balance spending on new plants with saving for emergencies. Use your accumulated wealth to upgrade your garden and purchase stronger plants!
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-purple-900 mb-3">✨ Step 5: Leverage Mutations & Upgrades</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Prioritize using mutated plants in key positions. Neon-mutated plants deal 4.5x damage, while Frozen mutations slow Brainrots. Check your inventory regularly for mutations and strategically deploy them. Upgrade your garden with better plants and more efficient layouts. The mutation system in Plants vs Brainrots is key to dominating challenging waves!
        </p>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-pink-900 mb-3">🏆 Step 6: Become a Gardening Master</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Continue progressing through waves, collecting rare plants, and optimizing your garden layout. Unlock legendary and mythic plants as you accumulate wealth. Master the mutation system and passive income generation. Compete with friends to see who can survive the most waves. Become the ultimate gardening master in Plants vs Brainrots!
        </p>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-lg border-2 border-purple-300">
        <h4 className="text-xl font-bold text-purple-900 mb-2">🎮 Tower Defense Strategy</h4>
        <p className="text-gray-700">Classic tower defense mechanics combined with gardening simulation for unique strategic gameplay.</p>
      </div>

      <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg border-2 border-blue-300">
        <h4 className="text-xl font-bold text-blue-900 mb-2">🌱 Diverse Plant Arsenal</h4>
        <p className="text-gray-700">Collect plants from Rare to Secret rarity, each with unique damage stats and growth times.</p>
      </div>

      <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-lg border-2 border-green-300">
        <h4 className="text-xl font-bold text-green-900 mb-2">✨ Mutation System</h4>
        <p className="text-gray-700">Plants and Brainrots gain mutations like Gold, Diamond, Neon, and Frozen for massive power boosts.</p>
      </div>

      <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
        <h4 className="text-xl font-bold text-yellow-900 mb-2">💰 Passive Income</h4>
        <p className="text-gray-700">Place defeated Brainrots in your base to generate continuous passive income streams.</p>
      </div>

      <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-lg border-2 border-pink-300">
        <h4 className="text-xl font-bold text-pink-900 mb-2">🌊 Wave-Based Challenges</h4>
        <p className="text-gray-700">Face increasingly difficult waves of Brainrots with escalating difficulty and rewards.</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-6 rounded-lg border-2 border-indigo-300">
        <h4 className="text-xl font-bold text-indigo-900 mb-2">🎯 Strategic Placement</h4>
        <p className="text-gray-700">Position plants strategically along Brainrot paths to maximize damage and defense efficiency.</p>
      </div>

      <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 p-6 rounded-lg border-2 border-cyan-300">
        <h4 className="text-xl font-bold text-cyan-900 mb-2">🏆 Progression System</h4>
        <p className="text-gray-700">Unlock legendary and mythic plants as you progress and accumulate wealth in the game.</p>
      </div>

      <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-lg border-2 border-orange-300">
        <h4 className="text-xl font-bold text-orange-900 mb-2">😂 Hilarious Brainrot Characters</h4>
        <p className="text-gray-700">Encounter iconic and funny Brainrot meme characters throughout your gardening adventure.</p>
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
