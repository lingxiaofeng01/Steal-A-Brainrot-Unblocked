'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function ImpossibleCarStuntPage() {
  const game = {
    slug: 'impossible-car-stunt',
    title: 'Impossible Car Stunt',
    subtitle: 'Conquer Sky-High Tracks in the Ultimate Racing Challenge 2025',
    description: 'Welcome to Impossible Car Stunt 2022, the ultimate impossible tracks car racing game where you race super-fast sports cars on massive heights in the sky. Experience real impossible track racing with crazy stunts on ramps, mega jumps, and extreme car driving challenges that will test your skills to the limit.',
    playUrl: 'https://html5.gamedistribution.com/rvvASMiM/fe68fa1a7ec14b579db34bcb6d4e2eac/index.html?gd_sdk_referrer_url=https%3A%2F%2Fgamedistribution.com%2Fgames%2Fimpossible-car-stunt-2022&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2dhbWVkaXN0cmlidXRpb24uY29tL2dhbWVzL2ltcG9zc2libGUtY2FyLXN0dW50LTIwMjIiLCJwYXJlbnREb21haW4iOiJnYW1lZGlzdHJpYnV0aW9uLmNvbSIsInRvcERvbWFpbiI6ImltcG9zc2libGVjYXJzdHVudC5jb20iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9',
    thumbnail: '/images/thumbnails/impossible-car-stunt.jpeg',
    rating: 5.0,
    playCount: 0,
    tags: ['Racing', 'Driving', 'Stunt', 'Car', '3D', 'Skill', 'Sports', 'Arcade'],
    backgroundColor: 'from-orange-500 via-red-500 to-pink-500',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-3xl">🏎️</span>
          Welcome to the World of Impossible Car Stunt Racing
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          <strong>Impossible Car Stunt</strong> is the ultimate impossible tracks car racing game that brings you the most thrilling experience of racing super-fast sports cars on massive heights in the sky. If you are a fast speed racer and have a passion for car racing games, then be ready to experience the real car rally in the mid of the sky with no limits. In <strong>Impossible Car Stunt</strong>, you'll rush like a crazy stunt master while riding the beautifully designed real impossible tracks that challenge your driving skills at every turn.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Welcome to the world of real impossible tracks car racing games where <strong>Impossible Car Stunt</strong> stands out as the premier choice for adrenaline junkies. Enjoy the real impossible track race on the endless extreme impossible tracks in the sky highs. The game features stunning 3D graphics and immersive gameplay that keeps players coming back for more. Every moment in <strong>Impossible Car Stunt</strong> is designed to deliver heart-stopping action as you navigate through treacherous sky-high pathways where one wrong move could send you plummeting to the ground below.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          What makes <strong>Impossible Car Stunt</strong> truly special is its combination of realistic physics and impossible track design. The game challenges you to race super-fast sports cars on tracks suspended high in the sky, featuring mega ramps, sharp turns, and obstacle-filled courses that would be impossible in real life. With its advanced physics engine, every jump, flip, and drift in <strong>Impossible Car Stunt</strong> feels incredibly realistic, making each successful stunt execution deeply satisfying and rewarding for players of all skill levels.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          In <strong>Impossible Car Stunt</strong>, you'll discover a unique gameplay experience that combines the thrill of high-speed racing with gravity-defying stunts. The beautifully designed tracks create an exhilarating environment where skill and precision are your keys to success. As you progress through <strong>Impossible Car Stunt</strong>, you'll master the art of controlling powerful sports cars at breakneck speeds while performing spectacular aerial maneuvers that push the boundaries of what's possible in racing games.
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-l-4 border-orange-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🎮</span>
          Gameplay—Master the Impossible Tracks
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The core gameplay of <strong>Impossible Car Stunt</strong> revolves around racing super-fast sports cars on impossible tracks suspended in the sky. You must maintain perfect control while navigating narrow pathways, executing massive jumps, and performing gravity-defying stunts. The challenge in <strong>Impossible Car Stunt</strong> lies in balancing speed with precision, as you race through increasingly difficult tracks that test your driving skills to the absolute limit.
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🚗</span>
            <div>
              <h4 className="font-bold text-gray-800">Super-Fast Sports Cars</h4>
              <p className="text-gray-600">Drive a fleet of high-performance sports cars in Impossible Car Stunt, each with unique handling characteristics and speed capabilities</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🌌</span>
            <div>
              <h4 className="font-bold text-gray-800">Sky-High Impossible Tracks</h4>
              <p className="text-gray-600">Race on beautifully designed tracks suspended in the sky in Impossible Car Stunt, featuring narrow pathways and extreme heights</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🎯</span>
            <div>
              <h4 className="font-bold text-gray-800">Mega Ramps and Stunts</h4>
              <p className="text-gray-600">Execute spectacular jumps and stunts on massive ramps in Impossible Car Stunt that launch you into the stratosphere</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">⚡</span>
            <div>
              <h4 className="font-bold text-gray-800">Realistic Physics Engine</h4>
              <p className="text-gray-600">Experience authentic car physics in Impossible Car Stunt that makes every stunt feel realistic and rewarding</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-xl border-l-4 border-pink-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🎯</span>
          How to Play Impossible Car Stunt
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Impossible Car Stunt</strong> features intuitive controls that are easy to learn but challenging to master. The control scheme gives you precise command over your vehicle, allowing you to navigate the impossible tracks with skill and precision.
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">W</span>
            <div>
              <h4 className="font-bold text-gray-800">Accelerate</h4>
              <p className="text-gray-600">Press W to accelerate your car and build speed on the impossible tracks in Impossible Car Stunt</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">S</span>
            <div>
              <h4 className="font-bold text-gray-800">Brake/Reverse</h4>
              <p className="text-gray-600">Use S to brake or reverse your vehicle when needed in Impossible Car Stunt</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">A</span>
            <div>
              <h4 className="font-bold text-gray-800">Steer Left</h4>
              <p className="text-gray-600">Press A to steer your car left and navigate sharp turns in Impossible Car Stunt</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0 font-mono bg-gray-200 px-3 py-1 rounded">D</span>
            <div>
              <h4 className="font-bold text-gray-800">Steer Right</h4>
              <p className="text-gray-600">Use D to steer right and maintain control on the impossible tracks in Impossible Car Stunt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl border-l-4 border-blue-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          Stunning 3D Graphics and Visual Design
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Experience beautifully rendered sports cars and meticulously designed sky-high tracks in <strong>Impossible Car Stunt</strong> that create an immersive racing environment. The game's visual quality rivals premium racing titles while remaining optimized for smooth browser gameplay, ensuring you can enjoy the stunning graphics without any performance issues.
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl border-l-4 border-green-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🏁</span>
          Multiple Challenging Tracks
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Race across a variety of impossible tracks in <strong>Impossible Car Stunt</strong>, each presenting unique obstacles and challenges. From narrow pathways suspended in the clouds to massive mega ramps that launch you into the stratosphere, every track in <strong>Impossible Car Stunt</strong> offers a fresh test of your driving skills and courage.
        </p>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🎪</span>
          Diverse Vehicle Selection
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Choose from a fleet of high-performance sports cars in <strong>Impossible Car Stunt</strong>, each with unique handling characteristics, speed capabilities, and visual styling. Whether you prefer sleek racing machines or powerful muscle cars, <strong>Impossible Car Stunt</strong> has a vehicle that matches your driving style perfectly.
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🌐</span>
          No Download Required
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Play <strong>Impossible Car Stunt</strong> instantly in your web browser without any downloads or installations. This HTML5 game is optimized for smooth performance, allowing you to jump straight into the action whenever you want to experience the thrill of impossible track racing.
        </p>
      </div>

      <div className="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-xl border-l-4 border-red-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">✅</span>
          Strategic Checkpoint System
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Strategic checkpoint placement in <strong>Impossible Car Stunt</strong> ensures you can retry challenging sections without starting from the beginning. This feature allows you to practice difficult stunts and perfect your racing lines, making <strong>Impossible Car Stunt</strong> both challenging and fair for players of all skill levels.
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-xl border-l-4 border-indigo-500">
        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          Addictive Gameplay Loop
        </h3>
        <p className="text-gray-700 leading-relaxed">
          The thrill of mastering impossible tracks in <strong>Impossible Car Stunt</strong> creates a uniquely satisfying gaming experience. Each successful stunt execution and course completion builds your confidence, encouraging you to tackle even more challenging tracks. The addictive gameplay loop of <strong>Impossible Car Stunt</strong> keeps you motivated to improve your times, perfect your stunts, and conquer every obstacle in your path.
        </p>
      </div>
    </div>
  );

  const tipsContent = (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-5 rounded-xl border-l-4 border-cyan-500">
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span className="text-xl">🎯</span>
          Start Slow and Build Speed Gradually
        </h4>
        <p className="text-gray-700">
          Don't rush into maximum speed on unfamiliar tracks in <strong>Impossible Car Stunt</strong>. Take time to learn each course's layout, identify key obstacles, and understand where you need to brake or accelerate for optimal performance.
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-teal-100 p-5 rounded-xl border-l-4 border-green-500">
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span className="text-xl">🚀</span>
          Perfect Your Landings
        </h4>
        <p className="text-gray-700">
          When launching off mega ramps in <strong>Impossible Car Stunt</strong>, focus on landing smoothly to maintain momentum. Poor landings can slow you down significantly or even cause you to lose control of your vehicle.
        </p>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-5 rounded-xl border-l-4 border-yellow-500">
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span className="text-xl">💡</span>
          Use Checkpoints Strategically
        </h4>
        <p className="text-gray-700">
          The checkpoint system in <strong>Impossible Car Stunt</strong> is your friend when learning difficult sections. Don't be afraid to replay segments multiple times to master challenging stunts and improve your racing lines.
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-5 rounded-xl border-l-4 border-purple-500">
        <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span className="text-xl">🎪</span>
          Stay Centered on Narrow Tracks
        </h4>
        <p className="text-gray-700">
          Many impossible tracks in <strong>Impossible Car Stunt</strong> feature extremely narrow pathways where even slight steering errors can be fatal. Focus on maintaining precise control and staying centered on the track to avoid falling off.
        </p>
      </div>
    </div>
  );

  return (
    <GameDetailTemplate
      game={game}
      aboutContent={aboutContent}
      featuresContent={featuresContent}
      tipsContent={tipsContent}
    />
  );
}

