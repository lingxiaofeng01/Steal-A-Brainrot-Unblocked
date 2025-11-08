'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function DancingBeatPage() {
  const game = {
    slug: 'dancing-beat',
    title: 'Dancing Beat',
    subtitle: 'Master Rhythm and Timing in This Addictive Music Ball Game',
    description: 'Dancing Beat is an exciting rhythm-based music game where you guide a ball through colorful mazes by clicking in sync with the beat. Test your timing, reflexes, and musical intuition across multiple themed worlds. Play Dancing Beat free online now!',
    playUrl: 'https://azgames.io/dancing-beat.embed',
    thumbnail: '/images/thumbnails/dancing-beat.png',
    rating: 5.0,
    playCount: 0,
    tags: ['Music', 'Rhythm', 'Casual', 'Skill', 'Arcade', 'Kids', 'Timing', 'Ball'],
    backgroundColor: 'from-purple-400 via-pink-400 to-red-400',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Dancing Beat - Master Rhythm and Timing in the Ultimate Music Ball Game</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Fans of music games will absolutely love <strong>Dancing Beat</strong>! This captivating rhythm-based game combines colorful visuals, catchy soundtracks, and challenging gameplay to create an unforgettable gaming experience. Set in vibrant worlds filled with sharp turns and dynamic paths, <strong>Dancing Beat</strong> challenges your skills, reflexes, and musical timing through dozens of exciting levels and unique track layouts.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          In <strong>Dancing Beat</strong>, you control an automatically-moving ball that rolls through intricate mazes. Your mission is simple yet addictive: click or tap in perfect sync with the music to guide the ball safely to the end of each level. The game tests your ability to feel the rhythm, anticipate turns, and react with split-second precision. One mistimed click and your ball falls off the path, forcing you to restart and try again.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          What makes <strong>Dancing Beat</strong> truly special is its seamless integration of music and gameplay. Every level features a unique soundtrack that dictates the pace and rhythm of your movements. As you progress through the game, you'll unlock stunning themed worlds including tropical islands, scorching deserts, lush jungles, and frozen winter landscapes. Each environment brings its own visual style, musical theme, and increasing difficulty that will keep you engaged for hours.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Whether you're a casual gamer looking for a fun way to pass time or a rhythm game enthusiast seeking a new challenge, <strong>Dancing Beat</strong> delivers an immersive experience that combines music, timing, and skill. Play <strong>Dancing Beat</strong> online for free and discover why thousands of players are hooked on this addictive rhythm adventure!
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Game Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-purple-700">🎵 Rhythm-Based Gameplay</h3>
            <p className="text-gray-700">
              Every movement in <strong>Dancing Beat</strong> is synchronized with the music. Click to the beat and guide your ball through challenging mazes where timing is everything.
            </p>
          </div>
          <div className="bg-white/50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-pink-700">🌍 Multiple Themed Worlds</h3>
            <p className="text-gray-700">
              Explore diverse environments including tropical islands, desert landscapes, jungle paths, and winter wonderlands. Each world features unique visuals and soundtracks.
            </p>
          </div>
          <div className="bg-white/50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-red-700">🎯 Progressive Difficulty</h3>
            <p className="text-gray-700">
              Start with simple paths and gradually face more complex mazes. <strong>Dancing Beat</strong> offers the perfect difficulty curve for players of all skill levels.
            </p>
          </div>
          <div className="bg-white/50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-orange-700">🎨 Colorful Graphics</h3>
            <p className="text-gray-700">
              Enjoy vibrant, eye-catching visuals that create an immersive gaming atmosphere. The colorful design enhances the musical experience.
            </p>
          </div>
          <div className="bg-white/50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-blue-700">🎼 Catchy Soundtracks</h3>
            <p className="text-gray-700">
              Each level in <strong>Dancing Beat</strong> features carefully selected music that perfectly complements the gameplay and keeps you engaged.
            </p>
          </div>
          <div className="bg-white/50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-green-700">🏆 Unlockable Content</h3>
            <p className="text-gray-700">
              Complete levels to unlock new worlds, themes, and musical tracks. There's always something new to discover in <strong>Dancing Beat</strong>.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Themed Worlds in Dancing Beat</h2>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-green-800">🏝️ Tropical Island Paradise</h3>
            <p className="text-gray-700">
              Begin your <strong>Dancing Beat</strong> journey on a beautiful tropical island with palm trees, crystal-clear waters, and upbeat island music. This starter world introduces you to the basic mechanics with gentle curves and straightforward paths.
            </p>
          </div>
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-orange-800">🏜️ Desert Dunes Adventure</h3>
            <p className="text-gray-700">
              Navigate through scorching desert landscapes in <strong>Dancing Beat</strong> where the paths become trickier and the tempo picks up. Golden sands and exotic rhythms create an exciting mid-game challenge.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-200 to-emerald-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-emerald-800">🌴 Jungle Expedition</h3>
            <p className="text-gray-700">
              Venture into the lush jungle where <strong>Dancing Beat</strong> tests your skills with complex paths, faster beats, and more demanding timing requirements. The tropical soundtrack intensifies the experience.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-cyan-800">❄️ Winter Wonderland</h3>
            <p className="text-gray-700">
              Master the ultimate challenge in the frozen winter world of <strong>Dancing Beat</strong>. Icy paths, rapid tempo changes, and intricate mazes await only the most skilled rhythm gamers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">How to Play Dancing Beat</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Playing <strong>Dancing Beat</strong> is easy to learn but challenging to master. The game combines simple one-click controls with rhythm-based timing to create engaging gameplay that anyone can enjoy. Here's everything you need to know to start your musical journey:
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-3 text-purple-700">🎮 Basic Controls</h3>
        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          <ul className="space-y-2 text-gray-700">
            <li><strong>• Click/Tap:</strong> Press anywhere on the screen or click your mouse to make the ball turn or change direction</li>
            <li><strong>• Timing:</strong> Click in sync with the music beat for perfect turns</li>
            <li><strong>• Sound:</strong> Play <strong>Dancing Beat</strong> with sound ON to hear the rhythm and time your clicks perfectly</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-3 text-pink-700">🎯 Gameplay Mechanics</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          In <strong>Dancing Beat</strong>, your ball moves automatically along the path. Your job is to observe the maze layout, listen carefully to the music, and click at precisely the right moment to navigate turns and obstacles:
        </p>
        <div className="space-y-3">
          <div className="bg-pink-50 p-3 rounded-lg">
            <h4 className="font-bold mb-2 text-pink-800">Step 1: Observe the Path</h4>
            <p className="text-gray-700">
              When you start a level in <strong>Dancing Beat</strong>, take a moment to observe the path ahead. Notice where the turns are and anticipate the rhythm pattern.
            </p>
          </div>
          <div className="bg-pink-50 p-3 rounded-lg">
            <h4 className="font-bold mb-2 text-pink-800">Step 2: Listen to the Beat</h4>
            <p className="text-gray-700">
              The music in <strong>Dancing Beat</strong> is your guide. Each beat corresponds to a potential turn or action. Feel the rhythm and let it guide your timing.
            </p>
          </div>
          <div className="bg-pink-50 p-3 rounded-lg">
            <h4 className="font-bold mb-2 text-pink-800">Step 3: Click in Sync</h4>
            <p className="text-gray-700">
              Click or tap exactly when the ball reaches a turn. Perfect timing keeps you on track, while mistimed clicks cause the ball to fall off the path in <strong>Dancing Beat</strong>.
            </p>
          </div>
          <div className="bg-pink-50 p-3 rounded-lg">
            <h4 className="font-bold mb-2 text-pink-800">Step 4: Reach the Finish</h4>
            <p className="text-gray-700">
              Navigate through the entire maze without falling to complete the level. Each successful completion unlocks new challenges in <strong>Dancing Beat</strong>.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-3 text-red-700">⚠️ Avoid Falling Off</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          The biggest challenge in <strong>Dancing Beat</strong> is maintaining perfect timing. If you click too early or too late, your ball will miss the turn and fall off the path. When this happens, you'll need to restart the level from the beginning. Stay focused, keep the rhythm, and don't let the pressure break your concentration!
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-3 text-orange-700">🎵 Pro Tips for Dancing Beat</h3>
        <div className="bg-orange-50 p-4 rounded-lg">
          <ul className="space-y-2 text-gray-700">
            <li><strong>• Always play with sound:</strong> The music is essential for timing in <strong>Dancing Beat</strong></li>
            <li><strong>• Focus on the rhythm:</strong> Don't just watch the path—feel the beat and let it guide you</li>
            <li><strong>• Practice makes perfect:</strong> Early levels help you develop timing skills for harder challenges</li>
            <li><strong>• Stay calm:</strong> Rushing leads to mistakes. Keep a steady rhythm throughout each level</li>
            <li><strong>• Learn the patterns:</strong> Each world in <strong>Dancing Beat</strong> has unique rhythm patterns to master</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Play Dancing Beat?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Dancing Beat</strong> stands out as one of the most engaging rhythm games available online. Here's why players around the world are falling in love with this musical adventure:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-purple-800">✨ Perfect for All Ages</h3>
            <p className="text-gray-700">
              <strong>Dancing Beat</strong> is suitable for kids and adults alike. The simple controls make it accessible, while the challenging levels keep experienced gamers engaged.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-red-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-pink-800">🎮 Free to Play</h3>
            <p className="text-gray-700">
              Enjoy <strong>Dancing Beat</strong> completely free online with no downloads, installations, or hidden costs. Just click and start playing instantly!
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-100 to-orange-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-red-800">🧠 Improves Timing Skills</h3>
            <p className="text-gray-700">
              Playing <strong>Dancing Beat</strong> regularly helps develop better hand-eye coordination, rhythm recognition, and reaction speed.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2 text-orange-800">😌 Relaxing Yet Challenging</h3>
            <p className="text-gray-700">
              <strong>Dancing Beat</strong> offers the perfect balance of relaxation and challenge. The music soothes while the gameplay stimulates your mind.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Start Your Rhythm Journey Today</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ready to test your timing and musical skills? <strong>Dancing Beat</strong> awaits! Click the play button above to start your adventure through colorful worlds filled with catchy music and exciting challenges. Whether you have five minutes or five hours, <strong>Dancing Beat</strong> provides endless entertainment that's always just one click away.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Join thousands of players worldwide who have discovered the joy of <strong>Dancing Beat</strong>. Master the rhythm, conquer all the worlds, and prove you have what it takes to become a true rhythm gaming champion. The beat is calling—will you answer?
        </p>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-2">🎵 Play Dancing Beat Now! 🎵</h3>
          <p className="text-lg">
            Experience the ultimate rhythm-based music game. Free, fun, and addictive—start playing <strong>Dancing Beat</strong> today!
          </p>
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

