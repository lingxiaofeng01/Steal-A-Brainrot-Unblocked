'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function TungSahurClickerPage() {
  const game = {
    slug: 'tung-sahur-clicker',
    title: 'Tung Sahur Clicker',
    subtitle: 'Wake the Wooden Warrior Before Dawn - Click Like Crazy in This Hilarious Italian Brainrot Idle Adventure',
    description: 'Tung Sahur Clicker is a hilarious idle clicker set in the quirky Italian Brainrot universe. Players make Tung Tung Tung Sahur dance his way to coin riches at a vibrant street corner filled with limelight. With every click, laughter and coins stack up. Jump into this funny clicker adventure now and race for the top of the leaderboard!',
    playUrl: 'https://1games.io/game/tung-sahur-clicker/',
    thumbnail: '/images/thumbnails/tung-sahur-clicker.webp',
    rating: 4.4,
    playCount: 0,
    tags: ['Clicker', 'Casual', 'Funny', 'Idle', 'One Button', 'Incremental', 'Italian Brainrot'],
    backgroundColor: 'from-orange-500 via-yellow-500 to-amber-500',
  };

  const aboutContent = (
    <div className="space-y-6">
      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🥁 CASUAL CLICKER FUN IN ITALIAN BRAINROT STYLE</h3>
        <p className="text-gray-700 leading-relaxed">
          Tung Sahur Clicker is a hilarious idle clicker set in the quirky Italian Brainrot universe. Players make Tung Tung Tung Sahur dance his way to coin riches at a vibrant street corner filled with limelight. With every click, laughter and coins stack up. This funny clicker adventure combines addictive incremental gameplay with the absurd humor that defines the Italian Brainrot series. Whether you're a casual player looking for quick entertainment or a dedicated clicker enthusiast chasing leaderboard glory, Tung Sahur Clicker delivers endless laughs and satisfying progression.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🎮 GAMEPLAY: GROW YOUR MEME EMPIRE</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Tung Sahur Clicker primarily involves tapping the screen to earn coins, while Tung Sahur performs his unique dance moves. Coins collected fuel the purchase of hilarious upgrades tied to the character's amusing antics. The more you click, the faster you grow. This simple yet addictive loop keeps players engaged for hours as they watch their coin empire expand.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Upgrades unlock new skins, weather effects, and boost your coin earnings through multipliers. The game rewards consistent clicking and strategic upgrade choices to maximize progress. Each new unlock adds fresh visual and comedic elements, keeping the gameplay lively and addictive. The limelight street corner becomes more vibrant with each milestone, creating a sense of accomplishment that drives players to keep clicking.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🪵 THE WOODEN WARRIOR'S DANCE</h3>
        <p className="text-gray-700 leading-relaxed">
          At the heart of Tung Sahur Clicker is the titular wooden warrior himself - Tung Tung Tung Sahur. This quirky character performs increasingly elaborate dance moves as you click, creating a mesmerizing visual spectacle. His stick-in-hand, trunk-and-all appearance adds to the absurd charm that makes this game so memorable. Watch as he grooves to the rhythm of your clicks, transforming a simple street corner into a full-blown performance stage.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">💰 UNLOCK TUNG TUNG TUNG SAHUR CONCEPT IN UPGRADES</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Upgrades in this idle game revolve around Tung Sahur's silly daily activities, each boosting coin earnings or adding amusing animations. These quirky enhancements increase your income and keep the game visually fresh, encouraging players to click more and unlock everything. From morning routines to nighttime shenanigans, each upgrade tells a story about this wooden warrior's eccentric lifestyle.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The upgrade system is designed to provide constant rewards, with new unlocks available at regular intervals. This creates a satisfying progression curve that keeps players motivated. Whether you're unlocking a new dance move, a weather effect, or a coin multiplier, each upgrade feels meaningful and adds to the overall experience.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🌟 LIMELIGHT STREET CORNER MECHANICS</h3>
        <p className="text-gray-700 leading-relaxed">
          The limelight street corner serves as your stage for coin-earning glory. Click manually to activate the 2x multiplier, doubling your earnings during active play sessions. This mechanic rewards engaged players while still allowing idle progression when you're away. The street corner transforms as you progress, with new visual elements appearing to celebrate your achievements.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🎨 SKINS AND WEATHER EFFECTS</h3>
        <p className="text-gray-700 leading-relaxed">
          Unlock new skins to customize Tung Sahur's appearance, from traditional wooden warrior outfits to absurd modern costumes. Weather effects add atmospheric variety to your street corner, with rain, snow, sunshine, and more creating different moods. These cosmetic unlocks provide visual goals beyond pure coin accumulation, giving completionists plenty to chase.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🏆 RACE FOR THE LEADERBOARD</h3>
        <p className="text-gray-700 leading-relaxed">
          Compete with players worldwide to see who can amass the most coins and climb the leaderboard. This competitive element adds replay value and motivates players to optimize their clicking strategies. Check your ranking regularly and push for higher positions by maximizing your upgrades and clicking efficiency.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🎭 ITALIAN BRAINROT UNIVERSE CONNECTION</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Tung Sahur Clicker is part of the beloved Italian Brainrot series, known for its absurd humor and quirky characters. Fans of other games in the series will recognize the signature comedic style and meme-worthy moments. The game references other Italian Brainrot titles, creating a connected universe that rewards longtime fans.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This connection to the broader Italian Brainrot world adds depth to the experience, making Tung Sahur Clicker more than just a standalone clicker game. It's a celebration of the entire series' unique brand of humor and creativity.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🎯 WHY PLAY TUNG SAHUR CLICKER?</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Tung Sahur Clicker offers the perfect blend of casual accessibility and addictive progression. The simple one-button gameplay makes it easy to pick up, while the deep upgrade system provides long-term goals. The hilarious animations and Italian Brainrot humor ensure you'll be laughing throughout your clicking journey.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Whether you're looking for a quick distraction during breaks or a long-term idle game to check in on daily, Tung Sahur Clicker delivers. The combination of satisfying clicking mechanics, visual progression, and absurd comedy creates an experience that's hard to put down. Join the wooden warrior on his street corner and start your coin empire today!
        </p>
      </section>
    </div>
  );

  const featuresContent = (
    <div className="space-y-4">
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li><strong className="text-gray-800">Hilarious Idle Clicker Gameplay:</strong> Simple one-button mechanics with deep progression systems</li>
        <li><strong className="text-gray-800">Quirky Wooden Warrior Character:</strong> Watch Tung Sahur perform unique dance moves with every click</li>
        <li><strong className="text-gray-800">Italian Brainrot Universe:</strong> Part of the beloved series known for absurd humor and meme culture</li>
        <li><strong className="text-gray-800">Limelight Street Corner Stage:</strong> Transform your performance space with upgrades and unlocks</li>
        <li><strong className="text-gray-800">2x Multiplier Mechanic:</strong> Activate manual clicking bonuses for faster coin accumulation</li>
        <li><strong className="text-gray-800">Extensive Upgrade System:</strong> Unlock silly daily activities that boost earnings and add animations</li>
        <li><strong className="text-gray-800">Customizable Skins:</strong> Dress Tung Sahur in various outfits from traditional to absurd</li>
        <li><strong className="text-gray-800">Dynamic Weather Effects:</strong> Unlock atmospheric changes that transform your street corner</li>
        <li><strong className="text-gray-800">Global Leaderboards:</strong> Compete with players worldwide for coin supremacy</li>
        <li><strong className="text-gray-800">Idle Progression:</strong> Earn coins even when you're away from the game</li>
        <li><strong className="text-gray-800">Constant Visual Rewards:</strong> New animations and effects unlock at regular intervals</li>
        <li><strong className="text-gray-800">Meme-Worthy Moments:</strong> Capture and share hilarious screenshots of Tung Sahur's antics</li>
      </ul>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <section>
        <h3 className="text-xl font-bold mb-3 text-gray-800">🎮 Basic Controls</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong className="text-gray-800">Click/Tap:</strong> Click anywhere on the screen or press the spacebar to earn coins</li>
          <li><strong className="text-gray-800">Shop Access:</strong> Use coins to buy upgrades in the shop menu</li>
          <li><strong className="text-gray-800">Manual Clicking:</strong> Click manually to activate the 2x multiplier in the limelight street corner</li>
          <li><strong className="text-gray-800">Unlock Milestones:</strong> Reach coin thresholds to unlock new skins and weather effects</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-3 text-gray-800">💡 Gameplay Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong className="text-gray-800">Prioritize Multipliers:</strong> Focus on upgrades that increase your coin-per-click rate early on</li>
          <li><strong className="text-gray-800">Balance Active and Idle:</strong> Combine manual clicking sessions with idle progression for optimal growth</li>
          <li><strong className="text-gray-800">Unlock Systematically:</strong> Work through upgrades in order to maximize efficiency</li>
          <li><strong className="text-gray-800">Use the 2x Multiplier:</strong> Take advantage of manual clicking bonuses during active play</li>
          <li><strong className="text-gray-800">Check In Regularly:</strong> Return to the game frequently to collect idle earnings and reinvest</li>
          <li><strong className="text-gray-800">Complete Milestones:</strong> Aim for milestone rewards that unlock new content</li>
          <li><strong className="text-gray-800">Experiment with Skins:</strong> Try different visual combinations to keep the experience fresh</li>
          <li><strong className="text-gray-800">Watch for Patterns:</strong> Learn Tung Sahur's dance patterns to time your clicks optimally</li>
          <li><strong className="text-gray-800">Save for Big Upgrades:</strong> Sometimes it's worth saving coins for expensive upgrades with better returns</li>
          <li><strong className="text-gray-800">Enjoy the Humor:</strong> Don't rush - take time to appreciate the absurd animations and comedy</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-3 text-gray-800">🏆 Winning Strategies</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong className="text-gray-800">Early Game:</strong> Focus on cheap upgrades that provide immediate returns</li>
          <li><strong className="text-gray-800">Mid Game:</strong> Balance between multipliers and idle income generators</li>
          <li><strong className="text-gray-800">Late Game:</strong> Invest in expensive upgrades that provide exponential growth</li>
          <li><strong className="text-gray-800">Leaderboard Climbing:</strong> Optimize your upgrade path and maximize active clicking time</li>
          <li><strong className="text-gray-800">Completionist Route:</strong> Systematically unlock all skins and weather effects for 100% completion</li>
        </ul>
      </section>
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

