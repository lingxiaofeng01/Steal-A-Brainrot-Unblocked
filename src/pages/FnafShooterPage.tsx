'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function FnafShooterPage() {
  const game = {
    slug: 'fnaf-shooter',
    title: 'FNaF Shooter',
    subtitle: 'Turn the Hunt on Animatronics - Fight Back in This Thrilling FPS',
    description: 'Step into the thrilling world of FNaF Shooter! Armed and ready, face the animatronics head-on and shoot like a pro in this fascinating shooter experience!',
    playUrl: 'https://html5.gamedistribution.com/eb8346d4739e40eda6e4196dfc9166b7/?gd_sdk_referrer_url=https://1games.io/fnaf-shooter',
    thumbnail: '/images/thumbnails/fnaf-shooter.webp',
    rating: 4.6,
    playCount: 0,
    tags: ['Action', 'Horror', 'Shooting', 'FNAF', 'Gun', 'FPS', 'Halloween'],
    backgroundColor: 'from-purple-600 via-red-600 to-orange-600',
  };

  const aboutContent = (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 TURN THE HUNT ON ANIMATRONICS</h3>
        <p className="mb-4">
          <strong>FNaF Shooter</strong> will take you into battle with the terrifying animatronics of the FNaF universe. However, you will no longer be
          passive with security cameras and afraid of sudden intrusions. In this game, you are the one hunting these horror creatures and destroying them
          with the most advanced guns. Your weapon system, with full ammunition, is ready for you to use as much as you want. Explore these dark environments
          and destroy all enemies to return peace to the virtual toy factory!
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🔫 READY, SET, AND SHOOT!</h3>
        <p className="mb-4">
          <strong>FNaF Shooter</strong> is a thrilling FPS game that delivers a highly immersive and realistic action experience. You will take control of
          your character, exploring dark corners and open areas to hunt down animatronic enemies. Players can switch between different weapons during combat,
          allowing for smarter decisions depending on the threat and location.
        </p>
        <p className="mb-4">
          Each round comes with a set number of animatronics you must eliminate before your energy bar runs out. Strategic movement and smart shooting are
          key to survival. Keep a safe distance when possible, land accurate hits, and protect your squad from unexpected attacks to complete your mission.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎮 Master Your Shooting Skills</h3>
        <p className="mb-4">
          Since it's impossible to know where enemies will appear, you have to look around at all times. As soon as you detect the object, immediately attack
          it until it completely crumbles. Change weapons to optimize the time it takes to deal with opponents.
        </p>
      </div>

    </div>
  );

  const featuresContent = (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">✨ GAME FEATURES</h3>
        <ul className="space-y-3 list-disc list-inside">
          <li><strong>Intense FPS Action:</strong> Experience heart-pounding first-person shooter gameplay as you hunt down terrifying animatronics in dark, atmospheric environments.</li>
          <li><strong>Multiple Weapons:</strong> Switch between various firearms to adapt your strategy. Each weapon has unique characteristics perfect for different combat situations.</li>
          <li><strong>Strategic Combat:</strong> Plan your movements carefully, maintain safe distances, and make every shot count to survive against waves of animatronic enemies.</li>
          <li><strong>Immersive Environments:</strong> Explore dark corridors, open areas, and hidden corners of the virtual toy factory while staying alert for sudden attacks.</li>
          <li><strong>Energy Management:</strong> Complete your objectives before your energy bar depletes. Time management is crucial for mission success.</li>
          <li><strong>FNAF Universe:</strong> Face iconic animatronic characters from the Five Nights at Freddy's universe in this action-packed shooter adaptation.</li>
          <li><strong>Unlimited Ammunition:</strong> Focus on your shooting skills without worrying about running out of ammo. Your arsenal is fully stocked and ready.</li>
          <li><strong>Progressive Difficulty:</strong> Each round presents new challenges with varying numbers of enemies and increasingly complex scenarios.</li>
        </ul>
      </div>

    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎮 HOW TO PLAY FNAF SHOOTER</h3>

        <h4 className="text-xl font-bold text-gray-800 mb-3 mt-6">Controls</h4>
        <ul className="space-y-2 list-disc list-inside mb-6">
          <li><strong>Movement:</strong> Use the arrow keys or WASD keys to move your character around the environment</li>
          <li><strong>Aim:</strong> Move your mouse to aim at targets and look around</li>
          <li><strong>Shoot:</strong> Click the left mouse button to fire your weapon</li>
          <li><strong>Change Weapon:</strong> Roll the mouse wheel up or down to switch between available weapons</li>
          <li><strong>Action:</strong> Click to interact with objects or perform special actions</li>
        </ul>

        <h4 className="text-xl font-bold text-gray-800 mb-3 mt-6">Gameplay Tips</h4>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Stay Alert:</strong> Animatronics can appear from any direction. Constantly scan your surroundings to avoid being caught off guard.</li>
          <li><strong>Choose Your Weapon Wisely:</strong> Different weapons are effective at different ranges. Use powerful weapons for close encounters and precise weapons for distant targets.</li>
          <li><strong>Manage Your Energy:</strong> Keep an eye on your energy bar. Complete objectives quickly but don't rush into dangerous situations.</li>
          <li><strong>Aim for Headshots:</strong> Precise shots to critical areas will eliminate enemies faster, saving you time and energy.</li>
          <li><strong>Use Cover:</strong> When possible, use environmental objects as cover to protect yourself from enemy attacks.</li>
          <li><strong>Listen Carefully:</strong> Audio cues can alert you to nearby animatronics before they appear on screen.</li>
          <li><strong>Practice Makes Perfect:</strong> Learn enemy patterns and spawn locations to improve your reaction time and accuracy.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 GAME OBJECTIVES</h3>
        <p className="mb-4">
          Your primary mission in <strong>FNaF Shooter</strong> is to eliminate all animatronic enemies in each round before your energy depletes. Each level
          presents a specific number of targets you must destroy. Success requires a combination of quick reflexes, strategic thinking, and precise shooting skills.
        </p>
        <p className="mb-4">
          As you progress through the game, you'll face increasingly challenging scenarios with more enemies, tougher animatronics, and complex environments.
          Adapt your tactics, master different weapons, and prove yourself as the ultimate animatronic hunter!
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 WHY PLAY FNAF SHOOTER?</h3>
        <p className="mb-4">
          <strong>FNaF Shooter</strong> offers a unique twist on the classic Five Nights at Freddy's formula. Instead of hiding and surviving, you take the
          offensive role, actively hunting down the animatronics that once hunted you. This role reversal creates an empowering and thrilling experience for
          FNAF fans and FPS enthusiasts alike.
        </p>
        <p className="mb-4">
          The game combines the horror atmosphere of FNAF with fast-paced shooter mechanics, creating an adrenaline-pumping experience that keeps you on the
          edge of your seat. Whether you're a longtime FNAF fan or new to the franchise, <strong>FNaF Shooter</strong> delivers intense action and satisfying gameplay.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎮 SIMILAR GAMES</h3>
        <p className="mb-3">If you enjoy FNaF Shooter, you might also like these action-packed titles:</p>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Bullet Force:</strong> A modern FPS with realistic graphics and intense multiplayer battles</li>
          <li><strong>Gun Mayhem Redux:</strong> Fast-paced shooting action with various weapons and game modes</li>
          <li><strong>Sniper Shooter 2:</strong> Test your precision and patience in this tactical sniper game</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">❓ FREQUENTLY ASKED QUESTIONS</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Is FNaF Shooter free to play?</h4>
            <p>Yes! FNaF Shooter is completely free to play online. No downloads or installations required - just click and start playing immediately in your browser.</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-2">Can I play FNaF Shooter on mobile?</h4>
            <p>FNaF Shooter is optimized for desktop browsers with mouse and keyboard controls. For the best experience, we recommend playing on a computer.</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-2">Do I need to download anything to play?</h4>
            <p>No downloads necessary! FNaF Shooter runs directly in your web browser using HTML5 technology.</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-2">What makes FNaF Shooter different from other FNAF games?</h4>
            <p>Unlike traditional FNAF games where you're hiding and surviving, FNaF Shooter puts you in an active combat role. You hunt the animatronics with various weapons, creating a more action-oriented experience.</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-2">How do I get better at FNaF Shooter?</h4>
            <p>Practice your aim, learn enemy spawn patterns, manage your energy wisely, and experiment with different weapons to find your preferred playstyle. The more you play, the better you'll become at predicting and eliminating threats.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🚀 START YOUR HUNT TODAY!</h3>
        <p className="mb-4">
          Ready to face the animatronics head-on? <strong>FNaF Shooter</strong> awaits! Load your weapons, steel your nerves, and prepare for the ultimate
          showdown in this thrilling FPS experience. The factory needs a hero - will you answer the call?
        </p>
        <p className="mb-4">
          Play <strong>FNaF Shooter</strong> now and prove you have what it takes to survive and conquer in this intense action shooter. Good luck, hunter!
        </p>
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

