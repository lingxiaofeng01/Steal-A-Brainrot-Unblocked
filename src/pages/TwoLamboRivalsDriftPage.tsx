'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function TwoLamboRivalsDriftPage() {
  const game = {
    slug: 'two-lambo-rivals-drift',
    title: 'Two Lambo Rivals Drift',
    subtitle: 'High-Octane Drifting Game - Master the Art of Drift Racing',
    description: 'Two Lambo Rivals Drift is a high-octane drifting game where you control powerful super-sport cars inspired by famous Italian models. Win intense drag races against rivals to become the Drift King in this thrilling driving experience.',
    playUrl: '//html5.gamedistribution.com/rvvASMiM/8cfbb6f4272b438fa38cb882cc071091/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2RyaXZlbWFkMy5pby8iLCJwYXJlbnREb21haW4iOiJkcml2ZW1hZDMuaW8iLCJ0b3BEb21haW4iOiJkcml2ZW1hZDMuaW8iLCJoYXNJbXByZXNzaW9uIjp0cnVlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE4In0%253D',
    thumbnail: '/images/thumbnails/two-lambo-rivals-drift.jpeg',
    rating: 5.0,
    playCount: 0,
    tags: ['Racing', 'Driving', 'Drift', 'Car', 'Multiplayer', '2 Player', '3D', 'Action', 'Skill', 'Lamborghini'],
    backgroundColor: 'from-orange-500 via-red-500 to-yellow-500',
  };

  const aboutContent = (
    <>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Two Lambo Rivals Drift - The Ultimate Drifting Experience</h1>
      
      <p className="text-lg leading-relaxed mb-4">
        <strong>Two Lambo Rivals Drift</strong> is a high-octane drifting game that puts you behind the wheel of powerful super-sport cars inspired by famous Italian Lamborghini models. Your main goal in Two Lambo Rivals Drift is to win intense drag races against rivals and become the ultimate Drift King. This game offers a thrilling driving experience set in a gorgeous Tokyo-inspired city with an overcast atmospheric theme that enhances the racing excitement.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        In Two Lambo Rivals Drift, your primary objective is to skillfully slide your car across the city streets to accumulate drift points. The game challenges you to master the art of drifting by combining precise steering control with strategic brake usage. Two Lambo Rivals Drift features stunning graphics that showcase four colorful super-sport drift cars, each with unique handling characteristics and visual appeal.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        The gameplay mechanics in Two Lambo Rivals Drift are designed to be accessible yet challenging. You must drift across the city to maximize your score within the given time limit. The key to success in Two Lambo Rivals Drift is using short bursts of brake combined with turning to initiate a wider drift angle. Chaining long drifts together is essential for achieving high scores and dominating the leaderboards in Two Lambo Rivals Drift.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-800">Compete in Two Exciting Race Modes</h2>
      
      <p className="text-lg leading-relaxed mb-4">
        Two Lambo Rivals Drift offers two distinct race modes that test different aspects of your driving skills. You must adapt your driving style between these two types of races to achieve victory. The game's dual-mode system ensures that Two Lambo Rivals Drift remains fresh and challenging throughout your gaming session.
      </p>

      <div className="bg-white/50 rounded-lg p-6 mb-4">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🏁 Drift Mode</h3>
        <p className="text-lg leading-relaxed">
          In Drift Mode, your objective in Two Lambo Rivals Drift is to accumulate the highest drift score before the timer runs out. This mode emphasizes style, precision, and consistency. You'll need to maintain long drift chains, hit perfect angles, and maximize your point multipliers. Two Lambo Rivals Drift rewards players who can maintain control while pushing their cars to the limit.
        </p>
      </div>

      <div className="bg-white/50 rounded-lg p-6 mb-4">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🚗 Drag Race Mode</h3>
        <p className="text-lg leading-relaxed">
          Drag Race Mode in Two Lambo Rivals Drift focuses on pure speed and racing skill. You need to reach the finish line before your opponent while navigating through the city streets. This mode tests your ability to find the fastest racing line, execute perfect drifts around corners, and maintain maximum speed. Two Lambo Rivals Drift's drag racing challenges your reflexes and strategic thinking.
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-800">Customize Your Legacy</h2>
      
      <p className="text-lg leading-relaxed mb-4">
        One of the most exciting features of Two Lambo Rivals Drift is the ability to build your own collection of fast cars. You must use your earnings from races to unlock and customize your favorite Lamborghini-inspired models. Each car in Two Lambo Rivals Drift has unique performance characteristics, allowing you to find the perfect vehicle that matches your driving style.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        The progression system in Two Lambo Rivals Drift is rewarding and motivating. You can buy new cars with the rewards earned from each race, whether you're competing in drift challenges or drag races. As you collect more vehicles in Two Lambo Rivals Drift, you'll discover different handling dynamics and visual styles that keep the gameplay experience diverse and engaging.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-800">Master the Art of Drifting</h2>
      
      <p className="text-lg leading-relaxed mb-4">
        Success in Two Lambo Rivals Drift requires mastering several advanced drifting techniques. The game rewards players who understand the physics of drifting and can execute precise maneuvers consistently. Two Lambo Rivals Drift's control system is designed to be intuitive while offering depth for skilled players to explore.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        To excel at Two Lambo Rivals Drift, you need to learn how to initiate drifts at the optimal moment, maintain the perfect drift angle, and chain multiple drifts together for maximum points. The game's scoring system in Two Lambo Rivals Drift rewards both speed and style, encouraging players to find the perfect balance between aggressive driving and controlled precision.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-800">Stunning Visual Design</h2>
      
      <p className="text-lg leading-relaxed mb-4">
        Two Lambo Rivals Drift features a gorgeous Tokyo-inspired city environment with an atmospheric overcast theme. The visual design creates an immersive racing experience that captures the essence of underground street racing culture. The city in Two Lambo Rivals Drift is filled with detailed buildings, realistic lighting effects, and dynamic weather conditions that enhance the overall atmosphere.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        The four colorful super-sport drift cars in Two Lambo Rivals Drift are beautifully rendered with attention to detail. Each vehicle showcases the iconic design elements of Lamborghini models while adding unique color schemes and customization options. The visual feedback during drifts in Two Lambo Rivals Drift includes tire smoke effects, sparks, and dynamic camera angles that make every drift feel spectacular.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-800">Single-Player and Multiplayer Modes</h2>
      
      <p className="text-lg leading-relaxed mb-4">
        Two Lambo Rivals Drift offers both challenging single-player content and competitive two-player modes. In single-player mode, you can practice your drifting skills, unlock new cars, and master each track at your own pace. The AI opponents in Two Lambo Rivals Drift provide a fair challenge that scales with your skill level.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        The two-player competitive mode in Two Lambo Rivals Drift allows you to challenge friends in head-to-head drift battles and drag races. This mode brings an extra layer of excitement as you compete directly against another human player. Two Lambo Rivals Drift's multiplayer experience is perfect for settling debates about who's the better drift racer.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-800">Why Play Two Lambo Rivals Drift?</h2>
      
      <p className="text-lg leading-relaxed mb-4">
        Two Lambo Rivals Drift stands out as an exceptional arcade driving game that combines accessible gameplay with deep mechanics. Whether you're a casual player looking for quick racing fun or a dedicated drifting enthusiast seeking to master every technique, Two Lambo Rivals Drift delivers an engaging experience. The game's combination of beautiful graphics, responsive controls, and rewarding progression makes Two Lambo Rivals Drift a must-play for racing game fans.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        The variety of game modes in Two Lambo Rivals Drift ensures that you'll always have new challenges to tackle. From perfecting your drift scores to winning intense drag races, Two Lambo Rivals Drift keeps you coming back for more. The car collection system adds long-term goals that motivate continued play, while the competitive multiplayer mode provides endless replayability.
      </p>
    </>
  );

  const howToPlayContent = (
    <>
      <div className="bg-white/50 rounded-lg p-6 mb-4">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🎮 Player 1 Controls</h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>W</strong> - Accelerate forward</li>
          <li><strong>A</strong> - Steer left</li>
          <li><strong>S</strong> - Brake / Reverse</li>
          <li><strong>D</strong> - Steer right</li>
        </ul>
        <p className="mt-3 text-lg">
          Use the WASD keys to control your Lamborghini in Two Lambo Rivals Drift. Combine steering with braking to initiate powerful drifts.
        </p>
      </div>

      <div className="bg-white/50 rounded-lg p-6 mb-4">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🎮 Player 2 Controls</h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>↑ (Up Arrow)</strong> - Accelerate forward</li>
          <li><strong>← (Left Arrow)</strong> - Steer left</li>
          <li><strong>↓ (Down Arrow)</strong> - Brake / Reverse</li>
          <li><strong>→ (Right Arrow)</strong> - Steer right</li>
        </ul>
        <p className="mt-3 text-lg">
          Player 2 uses the Arrow Keys to drive their car in Two Lambo Rivals Drift's multiplayer mode.
        </p>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-6 border-l-4 border-orange-500">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">💡 Pro Drifting Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Use short brake taps while turning to initiate drifts in Two Lambo Rivals Drift</li>
          <li>Chain multiple drifts together for score multipliers</li>
          <li>Find the perfect balance between drift angle and speed</li>
          <li>Learn each track's layout to plan your drift lines in advance</li>
          <li>In Drag Race mode, focus on maintaining speed through corners</li>
          <li>Experiment with different cars to find your preferred handling style</li>
        </ul>
      </div>
    </>
  );

  const featuresContent = (
    <ul className="list-disc list-inside space-y-3 text-lg">
      <li className="leading-relaxed">
        <strong>Four Stunning Lamborghini-Inspired Cars</strong> - Collect and drive beautifully designed super-sport vehicles in Two Lambo Rivals Drift
      </li>
      <li className="leading-relaxed">
        <strong>Dual Race Modes</strong> - Master both Drift Mode and Drag Race Mode for complete racing dominance
      </li>
      <li className="leading-relaxed">
        <strong>Tokyo-Inspired City Environment</strong> - Race through gorgeous urban streets with atmospheric overcast weather
      </li>
      <li className="leading-relaxed">
        <strong>Single-Player and 2-Player Modes</strong> - Challenge AI opponents or compete head-to-head with friends
      </li>
      <li className="leading-relaxed">
        <strong>Car Collection System</strong> - Earn rewards and unlock new vehicles to expand your garage
      </li>
      <li className="leading-relaxed">
        <strong>Realistic Drift Physics</strong> - Experience authentic drifting mechanics with responsive controls
      </li>
      <li className="leading-relaxed">
        <strong>Score-Based Progression</strong> - Chain drifts and compete for high scores on the leaderboards
      </li>
      <li className="leading-relaxed">
        <strong>Stunning Visual Effects</strong> - Enjoy tire smoke, sparks, and dynamic camera angles during intense drifts
      </li>
    </ul>
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

