'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function CounterCraftSniperPage() {
  const game = {
    slug: 'counter-craft-sniper',
    title: 'Counter Craft Sniper',
    subtitle: 'Defend the City from Minecraft-Style Zombie Invasion',
    description: 'Counter Craft Sniper is a thrilling first-person shooter that combines tactical sniping with blocky Minecraft-style enemies. Defend the city from waves of zombies, creepers, and skeletons!',
    playUrl: 'https://games.builds.gamepix.com/2TCNCE/34TTAyMIepyTZezGFj2ZtT6cQ0U/index.html?sid=e4515&lang=zh&namespace=counter-craft-sniper',
    thumbnail: '/images/thumbnails/counter-craft-sniper.webp',
    rating: 5.0,
    playCount: 0,
    tags: ['Shooting', 'Action', 'FPS', '3D', 'Sniper', 'Minecraft', 'Zombie', 'Combat'],
    backgroundColor: 'from-green-600 via-emerald-500 to-teal-400',
  };

  const aboutContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">About Counter Craft Sniper</h2>
      
      <p className="text-lg leading-relaxed text-gray-700">
        <strong>Counter Craft Sniper</strong> is a fast-paced first-person shooter that combines the intensity of tactical sniping with the blocky charm of Minecraft-style enemies. Step into the boots of an elite sniper assigned to defend a city overrun by hostile mobs—creepers, skeletons, and zombies. Your mission in <strong>Counter Craft Sniper</strong>: eliminate every threat before the invasion spreads across the streets.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        From rooftops and elevated positions, you'll have a clear view of the battlefield in <strong>Counter Craft Sniper</strong>. Precision and timing are key—missing a shot could mean letting a zombie reach the civilians below. Stay calm, keep your crosshairs steady, and deliver clean headshots to keep the chaos under control. The game's realistic ballistics and smooth shooting mechanics make every shot count.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        As waves of enemies swarm the city in <strong>Counter Craft Sniper</strong>, you'll need to adapt quickly. Some mobs move fast, while others explode or attack from afar. Your sniper rifle, grenades, and melee attacks are your main line of defense, so use every tool wisely to survive. The combination of strategic positioning and quick reflexes creates an addictive gameplay loop that keeps you coming back for more.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        What sets <strong>Counter Craft Sniper</strong> apart is its unique blend of tactical FPS gameplay with the familiar blocky aesthetic of Minecraft. The voxel-based graphics create a distinctive visual style that's both nostalgic and fresh. Whether you're a fan of precision shooting games or Minecraft-inspired adventures, <strong>Counter Craft Sniper</strong> delivers an experience that satisfies both cravings.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        The game features multiple urban environments to defend, each with its own strategic vantage points and challenges. From downtown skyscrapers to suburban neighborhoods, every location in <strong>Counter Craft Sniper</strong> requires different tactics and approaches. Master the art of long-range combat while managing your ammunition and staying alert for surprise attacks.
      </p>

      <p className="text-lg leading-relaxed text-gray-700">
        <strong>Counter Craft Sniper</strong> isn't just about shooting—it's about survival strategy. You'll need to prioritize targets, manage resources, and make split-second decisions under pressure. The escalating difficulty ensures that even experienced players will find themselves challenged as enemy waves become more aggressive and unpredictable.
      </p>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">How to Play Counter Craft Sniper</h2>
      
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Controls</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg font-bold min-w-[80px] text-center">WASD</span>
              <span className="text-gray-700 flex-1">Move your character around the battlefield</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg font-bold min-w-[80px] text-center">LMB</span>
              <span className="text-gray-700 flex-1">Shoot your weapon</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg font-bold min-w-[80px] text-center">RMB</span>
              <span className="text-gray-700 flex-1">Aim down sights / Toggle flashlight</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg font-bold min-w-[80px] text-center">R</span>
              <span className="text-gray-700 flex-1">Reload your weapon</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg font-bold min-w-[80px] text-center">F</span>
              <span className="text-gray-700 flex-1">Use items and interact</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg font-bold min-w-[80px] text-center">G</span>
              <span className="text-gray-700 flex-1">Throw grenade</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg font-bold min-w-[80px] text-center">H</span>
              <span className="text-gray-700 flex-1">Melee attack</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg font-bold min-w-[80px] text-center">C</span>
              <span className="text-gray-700 flex-1">Crouch for stealth</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg font-bold min-w-[80px] text-center">Space</span>
              <span className="text-gray-700 flex-1">Jump over obstacles</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg font-bold min-w-[80px] text-center">Shift</span>
              <span className="text-gray-700 flex-1">Sprint for quick movement</span>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3">
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg font-bold min-w-[80px] text-center">1-9</span>
            <span className="text-gray-700 flex-1">Select different weapons from your arsenal</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-lg font-bold min-w-[80px] text-center">TAB</span>
            <span className="text-gray-700 flex-1">Pause the game and access menu</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Gameplay Tips for Counter Craft Sniper</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-xl">🎯</span>
            <span><strong>Stay on high ground</strong> for a better sniping angle in <strong>Counter Craft Sniper</strong>. Elevated positions give you tactical advantage and wider field of view.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-xl">💀</span>
            <span><strong>Aim for headshots</strong> to eliminate enemies faster and conserve ammunition. Precision is rewarded in <strong>Counter Craft Sniper</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-xl">💣</span>
            <span><strong>Use grenades strategically</strong> to handle clustered mobs efficiently. Save them for overwhelming situations in <strong>Counter Craft Sniper</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-xl">🔫</span>
            <span><strong>Manage your ammo carefully</strong> during long battles. Reload during safe moments and switch weapons when needed in <strong>Counter Craft Sniper</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-xl">👁️</span>
            <span><strong>Watch for enemy patterns</strong> and learn their movement behaviors. Different mob types require different strategies in <strong>Counter Craft Sniper</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-xl">⚡</span>
            <span><strong>Prioritize dangerous targets</strong> like creepers that can explode and cause massive damage in <strong>Counter Craft Sniper</strong>.</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Game Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-green-200 hover:border-green-400 transition-all">
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">Intense FPS Gameplay</h3>
          <p className="text-gray-700">Experience fast-paced first-person shooter action with <strong>Counter Craft Sniper</strong>'s smooth controls and realistic ballistics. Every shot matters in this tactical combat game.</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-green-200 hover:border-green-400 transition-all">
          <div className="text-4xl mb-3">🧱</div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">Minecraft-Style Visuals</h3>
          <p className="text-gray-700"><strong>Counter Craft Sniper</strong> features distinctive blocky graphics inspired by Minecraft, creating a unique visual style that combines nostalgia with modern FPS mechanics.</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-green-200 hover:border-green-400 transition-all">
          <div className="text-4xl mb-3">🧟</div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">Diverse Enemy Types</h3>
          <p className="text-gray-700">Face various hostile mobs in <strong>Counter Craft Sniper</strong> including zombies, skeletons, and explosive creepers. Each enemy type requires different tactics to defeat.</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-green-200 hover:border-green-400 transition-all">
          <div className="text-4xl mb-3">🔫</div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">Multiple Weapons</h3>
          <p className="text-gray-700">Utilize a variety of weapons in <strong>Counter Craft Sniper</strong> including sniper rifles, grenades, and melee attacks. Switch between weapons to adapt to different combat situations.</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-green-200 hover:border-green-400 transition-all">
          <div className="text-4xl mb-3">🏙️</div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">Urban Battlefields</h3>
          <p className="text-gray-700">Defend multiple city locations in <strong>Counter Craft Sniper</strong>, each with unique strategic vantage points. Master different environments from rooftops to street level.</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-green-200 hover:border-green-400 transition-all">
          <div className="text-4xl mb-3">⚡</div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">Wave-Based Survival</h3>
          <p className="text-gray-700"><strong>Counter Craft Sniper</strong> features escalating difficulty with increasingly challenging enemy waves. Test your skills as the invasion intensifies.</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-green-200 hover:border-green-400 transition-all">
          <div className="text-4xl mb-3">🎮</div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">Smooth Controls</h3>
          <p className="text-gray-700">Enjoy responsive and intuitive controls in <strong>Counter Craft Sniper</strong> that make precision shooting accessible while maintaining depth for skilled players.</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-green-200 hover:border-green-400 transition-all">
          <div className="text-4xl mb-3">🆓</div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">Free to Play</h3>
          <p className="text-gray-700">Play <strong>Counter Craft Sniper</strong> completely free in your browser. No downloads, no installations—just pure shooting action whenever you want.</p>
        </div>
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

