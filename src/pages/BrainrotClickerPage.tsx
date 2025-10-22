'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function BrainrotClickerPage() {
  const game = {
    slug: 'brainrot-clicker',
    title: 'Brainrot Clicker',
    subtitle: 'Click Your Way to Brainrot Glory!',
    description: 'Experience the ultimate idle clicker game inspired by the viral Italian Brainrot trend! Click endlessly, unlock bizarre AI-generated characters, and build your brainrot empire with strategic upgrades.',
    playUrl: 'https://brainrotclicker.io/italian-brainrot-clicker.embed',
    thumbnail: '/images/thumbnails/brainrot-clicker.webp',
    rating: 4.1,
    playCount: 818682,
    tags: ['Brainrot', 'Clicker', 'Idle', 'Incremental', 'Meme'],
    backgroundColor: 'from-purple-500 via-pink-500 to-rose-500',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>Brainrot Clicker</strong> is the ultimate idle clicking game that brings the viral Italian Brainrot trend to life! This addictive clicker game combines the satisfying mechanics of incremental games with the hilarious charm of AI-generated brainrot characters. In <strong>Brainrot Clicker</strong>, you'll click endlessly to earn brainrot points and unlock a collection of bizarre, absurd characters like Tralalero Tralala (a blue-sneakered shark), Bombardiro Crocodilo (a bomber plane crocodile), and many more. The game delivers an unblocked gaming experience that's perfect for casual players and hardcore clicker enthusiasts alike. Every click in <strong>Brainrot Clicker</strong> brings you closer to unlocking the next hilarious character and expanding your brainrot empire.
        </p>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          The core gameplay of <strong>Brainrot Clicker</strong> is simple yet deeply engaging: click the main character to generate brainrot points, then invest those points in strategic upgrades to multiply your clicking power. <strong>Brainrot Clicker</strong> features an impressive upgrade system with 18 different upgrades divided into two major types. Some upgrades increase your points per click, while others unlock passive income that generates points automatically without any clicking required. The strategic depth of <strong>Brainrot Clicker</strong> means that every upgrade decision matters, and players must carefully plan their progression to maximize efficiency. Whether you prefer active clicking or passive automation, <strong>Brainrot Clicker</strong> accommodates both playstyles perfectly.
        </p>
      </div>

      <div className="bg-gradient-to-r from-rose-50 to-rose-100 border-l-4 border-rose-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          One of the most exciting features of <strong>Brainrot Clicker</strong> is the character collection system. As you progress through <strong>Brainrot Clicker</strong> and reach specific score milestones, you'll unlock new Italian Brainrot characters with unique visual and sound effects. The game currently features 12 collectible characters, each with their own quirky personality and absurd design. Unlocking characters in <strong>Brainrot Clicker</strong> provides both visual rewards and a sense of progression that keeps players motivated. The character designs in <strong>Brainrot Clicker</strong> are inspired by the viral TikTok trend, featuring bizarre combinations like Chimpanzini Bananini (a monkey-fruit hybrid) and Burbaloni Luliloli (a capybara-coconut fusion). Collecting all characters in <strong>Brainrot Clicker</strong> becomes a long-term goal that drives continued engagement.
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>Brainrot Clicker</strong> also features dynamic weather events that unlock as you progress. The weather system in <strong>Brainrot Clicker</strong> adds visual variety and keeps the gameplay fresh throughout your journey. Starting with normal weather, you'll unlock Sunny weather at 10,000 points and Star Rain weather at 100,000 points. These weather effects in <strong>Brainrot Clicker</strong> create a more immersive and visually engaging experience. Additionally, <strong>Brainrot Clicker</strong> includes special events where a golden legendary Brainrot character appears on screen. When you spot this golden character in <strong>Brainrot Clicker</strong>, you must click it quickly to earn a burst of bonus points. This mechanic in <strong>Brainrot Clicker</strong> adds an element of surprise and excitement to the gameplay.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          The upgrade progression in <strong>Brainrot Clicker</strong> is carefully balanced to provide constant rewards and motivation. Early upgrades in <strong>Brainrot Clicker</strong> like Cursor (+1 point per click) and Auto Click (+1 point per second) are affordable and provide immediate benefits. As you progress through <strong>Brainrot Clicker</strong>, you'll unlock more powerful upgrades like Mr Clicker, President Clicker, and King Clicker that dramatically increase your earning potential. The late-game upgrades in <strong>Brainrot Clicker</strong> like Emperor Clicker and Pope Clicker require massive point investments but offer exponential returns. This progression system in <strong>Brainrot Clicker</strong> ensures that players always have something to work toward, whether they're just starting or deep into the game.
        </p>
      </div>

      <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>Brainrot Clicker</strong> is designed to be played both actively and passively, making it perfect for any lifestyle. You can actively click to maximize your earning rate in <strong>Brainrot Clicker</strong>, or you can let the game run in the background while auto-clickers generate points automatically. This flexibility in <strong>Brainrot Clicker</strong> means you can enjoy the game during work breaks, study sessions, or while relaxing at home. The unblocked nature of <strong>Brainrot Clicker</strong> means you can access it from anywhere without restrictions. Whether you're looking for an active gaming experience or a relaxing idle game, <strong>Brainrot Clicker</strong> delivers on both fronts with its engaging mechanics and charming presentation.
        </p>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          The community aspect of <strong>Brainrot Clicker</strong> adds another layer of enjoyment to the game. With over 818,000 plays and a 4.1 rating, <strong>Brainrot Clicker</strong> has attracted a dedicated player base that shares strategies and celebrates milestones. Players of <strong>Brainrot Clicker</strong> often compete for high scores and share their progress on social media. The social features in <strong>Brainrot Clicker</strong> create a sense of community and friendly competition. Whether you're playing solo or comparing your progress with friends, <strong>Brainrot Clicker</strong> provides an engaging experience that keeps you coming back for more. The game's popularity demonstrates that <strong>Brainrot Clicker</strong> has successfully captured the essence of what makes idle clicker games so addictive.
        </p>
      </div>

      <div className="bg-gradient-to-r from-lime-50 to-lime-100 border-l-4 border-lime-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>Brainrot Clicker</strong> stands out in the crowded idle game market by combining proven clicker mechanics with the viral brainrot aesthetic. The game's unique character designs and humor make <strong>Brainrot Clicker</strong> memorable and entertaining. Unlike generic clicker games, <strong>Brainrot Clicker</strong> offers personality and charm that resonates with players who appreciate internet culture and meme humor. The visual design of <strong>Brainrot Clicker</strong> is colorful and engaging, with smooth animations that bring the characters to life. The sound effects in <strong>Brainrot Clicker</strong> add to the comedic value, with each character having unique audio cues. This attention to detail in <strong>Brainrot Clicker</strong> creates a polished and professional gaming experience that rivals commercial titles.
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-700">
          Whether you're a casual player seeking a fun way to pass the time or a dedicated gamer chasing high scores, <strong>Brainrot Clicker</strong> offers an experience that's both accessible and deeply engaging. The game's endless progression system means there's always something new to unlock and achieve in <strong>Brainrot Clicker</strong>. Start playing <strong>Brainrot Clicker</strong> today and join thousands of players worldwide who are clicking their way to brainrot glory! The addictive gameplay loop of <strong>Brainrot Clicker</strong> will keep you entertained for hours, whether you're actively clicking or letting the game run passively. Experience the ultimate idle clicker game with <strong>Brainrot Clicker</strong> and discover why this game has become a favorite among clicker enthusiasts everywhere.
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <ul className="space-y-4">
      <li className="flex gap-4">
        <span className="text-2xl">🖱️</span>
        <div>
          <strong className="text-lg">Click as Fast as You Can:</strong>
          <p className="text-gray-700 mt-2">Start by clicking the main character to earn your first brainrot points. Each click generates one point in Brainrot Clicker. The faster you click, the quicker you'll accumulate points and progress through the game. Clicking is the foundation of Brainrot Clicker, so get comfortable with the clicking rhythm.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">⬆️</span>
        <div>
          <strong className="text-lg">Spend Points on Upgrades:</strong>
          <p className="text-gray-700 mt-2">As your brainrot points accumulate, invest them wisely in upgrades to boost your clicking power. Brainrot Clicker offers 18 different upgrades that increase either your points per click or your passive income per second. Strategic upgrade selection in Brainrot Clicker is key to maximizing your progression speed.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">🎭</span>
        <div>
          <strong className="text-lg">Unlock Characters and Weather Events:</strong>
          <p className="text-gray-700 mt-2">Reach specific score milestones in Brainrot Clicker to unlock new characters and weather effects. Each character in Brainrot Clicker comes with unique visual and sound effects that add personality to your game. Collecting all 12 characters in Brainrot Clicker becomes a rewarding long-term goal.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">✨</span>
        <div>
          <strong className="text-lg">Catch the Golden Brainrot:</strong>
          <p className="text-gray-700 mt-2">Watch for the golden legendary Brainrot character that occasionally appears on screen in Brainrot Clicker. Click it quickly to earn a burst of bonus points before it disappears. This special event in Brainrot Clicker adds excitement and rewards quick reflexes.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">🤖</span>
        <div>
          <strong className="text-lg">Automate Your Clicking:</strong>
          <p className="text-gray-700 mt-2">Purchase auto-clickers in Brainrot Clicker to generate points passively without clicking. This allows you to progress in Brainrot Clicker even when you're not actively playing. The passive income system in Brainrot Clicker is essential for long-term progression.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">🏆</span>
        <div>
          <strong className="text-lg">Compete for High Scores:</strong>
          <p className="text-gray-700 mt-2">Compete with players worldwide in Brainrot Clicker for the highest scores and bragging rights. Track your progress and compare your achievements with friends. The competitive aspect of Brainrot Clicker adds motivation to keep playing and improving.</p>
        </div>
      </li>
    </ul>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🖱️</span>
          <h4 className="text-lg font-bold text-gray-800">Addictive Clicking Mechanics</h4>
        </div>
        <p className="text-gray-700">Simple yet deeply engaging clicking gameplay that keeps you coming back for more</p>
      </div>

      <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">⬆️</span>
          <h4 className="text-lg font-bold text-gray-800">18 Powerful Upgrades</h4>
        </div>
        <p className="text-gray-700">Strategic upgrade system with multiple paths to maximize your earning potential</p>
      </div>

      <div className="bg-gradient-to-br from-rose-100 to-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🎭</span>
          <h4 className="text-lg font-bold text-gray-800">12 Collectible Characters</h4>
        </div>
        <p className="text-gray-700">Unlock bizarre AI-generated brainrot characters with unique designs and animations</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🌤️</span>
          <h4 className="text-lg font-bold text-gray-800">Dynamic Weather Events</h4>
        </div>
        <p className="text-gray-700">Unlock different weather effects as you progress through the game</p>
      </div>

      <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">✨</span>
          <h4 className="text-lg font-bold text-gray-800">Golden Bonus Events</h4>
        </div>
        <p className="text-gray-700">Catch rare golden characters for massive bonus point rewards</p>
      </div>

      <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🤖</span>
          <h4 className="text-lg font-bold text-gray-800">Passive Income System</h4>
        </div>
        <p className="text-gray-700">Automate your earnings with passive income generators for continuous progression</p>
      </div>

      <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">📱</span>
          <h4 className="text-lg font-bold text-gray-800">Unblocked Access</h4>
        </div>
        <p className="text-gray-700">Play anywhere, anytime without restrictions on any device</p>
      </div>

      <div className="bg-gradient-to-br from-lime-100 to-lime-50 p-6 rounded-lg border-l-4 border-lime-500">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🏆</span>
          <h4 className="text-lg font-bold text-gray-800">Competitive Leaderboards</h4>
        </div>
        <p className="text-gray-700">Compete with players worldwide and showcase your achievements</p>
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
