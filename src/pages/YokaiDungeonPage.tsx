'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function YokaiDungeonPage() {
  const game = {
    slug: 'yokai-dungeon',
    title: 'Yokai Dungeon',
    subtitle: 'Enter the Lantern-Cursed Labyrinth - A Roguelike Puzzle Adventure',
    description: 'Yokai Dungeon is an action-puzzle roguelike filled with spooky spirits and fast dashes. Defeat yokai and unlock pixel-powered adventures in shifting mazes where monsters wait around every shrine and corner!',
    playUrl: 'https://playgroundfree.github.io/yokai-dungeon/',
    thumbnail: '/images/thumbnails/yokai-dungeon.png',
    rating: 4.5,
    playCount: 0,
    tags: ['Puzzle', 'Strategy', 'Escape', 'Monster', 'Collecting', 'Halloween', 'Maze', 'Roguelike', 'Action'],
    backgroundColor: 'from-orange-600 via-red-600 to-purple-900',
  };

  const aboutContent = (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          🏮 YOKAI DUNGEON: ENTER THE LANTERN-CURSED LABYRINTH
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Under flickering lanterns and haunted drums, <strong>Yokai Dungeon</strong> lights up the puzzle genre with spooky brilliance. 
          Japanese folklore takes a wild twist as you slip into shifting mazes where monsters wait around every shrine and corner. 
          No run repeats, and no push goes unpunished. A new kind of dungeon-crawling tension emerges—equal parts myth, maze, and monster. 
          Step into the mist and let the dungeon unfold—if you dare to escape its trickery!
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          👹 GAMEPLAY: LEGENDS STIR BENEATH THE FESTIVAL
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ancient spirits in <strong>Yokai Dungeon</strong> disrupt the peaceful Lantern Festival as a storm of yokai breaks through shrine gates. 
          In this dungeon of shadows and symbols, Tanuki and his spirited friends need to recover sacred light while navigating haunted halls. 
          Each area hides a darker mystery, as glowing demon icons lead toward cursed bosses fueled by forgotten myths and ghostly wrath.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Rooms shift with every step, with enemies lurking in dynamic arenas built on strategy and instinct. 
          <strong>Push blocks to crush creatures</strong>, collect coins, and dodge cursed terrain through six randomized dungeon zones. 
          Unleash character stats and special items to overcome sharper enemies and trickier layouts. 
          Every push becomes a gamble—will it be escape or destruction? That choice belongs to you, room by room.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          🎮 KEY FEATURES
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Roguelike Randomization:</strong> Every dungeon run is unique with procedurally generated mazes and enemy placements</li>
          <li><strong>Strategic Block Pushing:</strong> Use environmental blocks to crush yokai and solve puzzles</li>
          <li><strong>Six Dungeon Zones:</strong> Explore diverse haunted areas, each with unique challenges and bosses</li>
          <li><strong>Character Progression:</strong> Unlock heroes and upgrade stats to tackle tougher challenges</li>
          <li><strong>Yokaipedia Collection:</strong> Complete your archive of Japanese folklore monsters</li>
          <li><strong>Japanese Folklore Theme:</strong> Immerse yourself in authentic yokai mythology and festival atmosphere</li>
          <li><strong>Pixel Art Graphics:</strong> Enjoy charming retro-style visuals with modern gameplay mechanics</li>
          <li><strong>Boss Battles:</strong> Face cursed bosses powered by forgotten myths and ghostly wrath</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          🎯 WHO SHOULD PLAY YOKAI DUNGEON?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Dungeon Runners:</strong> Players who crave randomized mazes and unpredictable monster placement every single run</li>
          <li><strong>Puzzle Tacticians:</strong> Strategists who calculate block movements for maximum effect under tricky troubles</li>
          <li><strong>Collectors:</strong> Completionists aiming to unlock every hero and complete the full Yokaipedia archive</li>
          <li><strong>Roguelike Fans:</strong> Gamers who love the challenge of procedurally generated dungeons and permadeath mechanics</li>
          <li><strong>Japanese Culture Enthusiasts:</strong> Players interested in yokai mythology and traditional festival themes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          🌟 WHY YOKAI DUNGEON STANDS OUT
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Yokai Dungeon</strong> combines the best elements of puzzle games, roguelikes, and Japanese folklore into a unique experience. 
          Unlike traditional dungeon crawlers, every decision matters—from which block to push to which path to take. 
          The game's procedural generation ensures that no two runs are ever the same, keeping the gameplay fresh and challenging.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The authentic Japanese yokai theme sets it apart from generic dungeon games. Each monster is inspired by real folklore, 
          and the Lantern Festival setting creates an atmospheric backdrop that's both beautiful and eerie. 
          The pixel art style pays homage to classic games while delivering smooth, modern gameplay mechanics.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Whether you're a puzzle enthusiast, a roguelike veteran, or someone who appreciates Japanese culture, 
          <strong>Yokai Dungeon</strong> offers a compelling blend of strategy, action, and mythology that will keep you coming back for more runs.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          🎃 SIMILAR PUZZLE-THEMED ESCAPE CHALLENGES
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you enjoy <strong>Yokai Dungeon</strong>, you might also like these puzzle and strategy games:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Tricky Castle:</strong> Another puzzle game with strategic block manipulation</li>
          <li><strong>Fireboy and Watergirl 5:</strong> Cooperative puzzle-solving with elemental mechanics</li>
          <li><strong>MiSide:</strong> Psychological puzzle adventure with mysterious elements</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          💡 TIPS FOR SUCCESS
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Plan Your Moves:</strong> Think several steps ahead before pushing blocks—you can't undo mistakes</li>
          <li><strong>Learn Enemy Patterns:</strong> Each yokai has unique behaviors; study them to predict their movements</li>
          <li><strong>Collect Everything:</strong> Coins and items are crucial for character upgrades between runs</li>
          <li><strong>Experiment with Characters:</strong> Different heroes have unique abilities that suit different playstyles</li>
          <li><strong>Don't Rush:</strong> Take your time to analyze each room before making your move</li>
          <li><strong>Complete the Yokaipedia:</strong> Encountering all yokai types unlocks valuable insights and bonuses</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-cyan-400 pb-2">
          🔥 START YOUR YOKAI ADVENTURE TODAY!
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ready to face the spirits of Japanese folklore? <strong>Yokai Dungeon</strong> awaits with its shifting mazes, 
          strategic puzzles, and haunting atmosphere. Every run is a new challenge, every yokai a new mystery to uncover. 
          Will you master the lantern-cursed labyrinth and restore peace to the festival?
        </p>
        <p className="text-gray-700 leading-relaxed font-bold">
          Play <strong>Yokai Dungeon</strong> now—completely free, no downloads required, and unblocked for instant access!
        </p>
      </section>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-800 mb-3">🎮 Controls to Navigate the Night</h3>
      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg border-2 border-orange-300">
        <ul className="space-y-2 text-gray-700">
          <li><strong>Arrow Keys:</strong> Move your character in the chosen direction (Up, Down, Left, Right)</li>
          <li><strong>Spacebar:</strong> Push a block in front of you to crush enemies or solve puzzles</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">📋 How to Play</h3>
      <ol className="list-decimal list-inside space-y-3 text-gray-700">
        <li><strong>Navigate the Maze:</strong> Use arrow keys to move through the dungeon's shifting corridors</li>
        <li><strong>Push Blocks Strategically:</strong> Press spacebar to push blocks into yokai, crushing them instantly</li>
        <li><strong>Avoid Cursed Terrain:</strong> Watch out for dangerous floor tiles and enemy attack patterns</li>
        <li><strong>Collect Coins:</strong> Gather currency to unlock upgrades and new characters between runs</li>
        <li><strong>Defeat Bosses:</strong> Face powerful cursed yokai at the end of each dungeon zone</li>
        <li><strong>Complete Zones:</strong> Progress through all six randomized dungeon areas</li>
        <li><strong>Unlock Characters:</strong> Discover new heroes with unique abilities and stats</li>
        <li><strong>Fill the Yokaipedia:</strong> Encounter and catalog all yokai types for completion bonuses</li>
      </ol>

      <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">⚡ Pro Strategies</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Corner yokai against walls before pushing blocks for guaranteed hits</li>
        <li>Use blocks as temporary shields while planning your next move</li>
        <li>Memorize boss patterns to avoid damage and find attack windows</li>
        <li>Prioritize character upgrades that match your playstyle</li>
        <li>Explore every corner of each room to find hidden coins and items</li>
      </ul>
    </div>
  );

  const featuresContent = (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-lg border-2 border-orange-300">
          <h4 className="font-bold text-gray-800 mb-2">🎲 Roguelike Elements</h4>
          <p className="text-gray-700 text-sm">Procedurally generated dungeons ensure every run is unique and challenging</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border-2 border-purple-300">
          <h4 className="font-bold text-gray-800 mb-2">🧩 Strategic Puzzles</h4>
          <p className="text-gray-700 text-sm">Think carefully about block placement and movement to overcome obstacles</p>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-lg border-2 border-red-300">
          <h4 className="font-bold text-gray-800 mb-2">👹 Authentic Yokai</h4>
          <p className="text-gray-700 text-sm">Encounter monsters from real Japanese folklore and mythology</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-lg border-2 border-yellow-300">
          <h4 className="font-bold text-gray-800 mb-2">🎨 Pixel Art Style</h4>
          <p className="text-gray-700 text-sm">Charming retro graphics with smooth modern gameplay mechanics</p>
        </div>
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg border-2 border-indigo-300">
          <h4 className="font-bold text-gray-800 mb-2">🏆 Character Progression</h4>
          <p className="text-gray-700 text-sm">Unlock and upgrade multiple heroes with unique abilities</p>
        </div>
        <div className="bg-gradient-to-br from-pink-50 to-red-50 p-4 rounded-lg border-2 border-pink-300">
          <h4 className="font-bold text-gray-800 mb-2">📚 Yokaipedia Collection</h4>
          <p className="text-gray-700 text-sm">Complete your monster encyclopedia for bonuses and achievements</p>
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

