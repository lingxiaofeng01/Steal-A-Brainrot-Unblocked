'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function ZombotronReBootPage() {
  const game = {
    slug: 'zombotron-re-boot',
    title: 'Zombotron Re-Boot',
    subtitle: 'Survive the Planet of Metal and Flesh - Blast Through Zombie Caverns',
    description: 'Zombotron Re-Boot throws you into a gritty, abandoned world crawling with undead horrors and corrupted machines. As Blaze Rush, rely on weapons, wits, and physics-based carnage to carve a path through chaotic missions!',
    playUrl: 'https://gamequestfree.github.io/zombotron-re-boot/',
    thumbnail: '/images/thumbnails/zombotron-re-boot.webp',
    rating: 4.4,
    playCount: 0,
    tags: ['Action', 'Platform', '2D', 'Indie', 'Physics', 'Zombie', 'Shooting', 'Adventure'],
    backgroundColor: 'from-gray-800 via-red-700 to-orange-600',
  };

  const aboutContent = (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🧟 SURVIVE THE PLANET OF METAL AND FLESH</h3>
        <p className="mb-4">
          <strong>Zombotron Re-Boot</strong> throws you into a gritty, abandoned world crawling with undead horrors and corrupted machines. 
          As Blaze Rush, you will rely on weapons, wits, and physics-based carnage to carve a path through chaotic missions. With destructible 
          terrain and unpredictable enemy encounters, every level demands calculated mayhem. This creative platform game combines intense action 
          with strategic gameplay, where the environment itself becomes your weapon.
        </p>
        <p className="mb-4">
          The game takes place on a mysterious alien planet where metal structures and organic decay have merged into a nightmarish landscape. 
          Abandoned facilities, collapsing caverns, and zombie-infested corridors await your exploration. Every corner hides danger, but also 
          opportunities for those brave enough to venture deeper. The remastered classic brings enhanced graphics, improved physics, and more 
          explosive gameplay than ever before.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎮 HOW ZOMBOTRON RE-BOOT PLAYS</h3>
        <p className="mb-4">
          In <strong>Zombotron Re-Boot</strong>, your goal is simple: blast your way through zombie caverns and collapsing facilities. You need 
          to roam around, jump, and shoot while exploring multi-level stages full of danger. Physics plays a big role—explosions, crumbling 
          structures, and falling objects can kill enemies or crush you if you are not careful. The thrill lies in timing your attacks and using 
          chaos as a weapon.
        </p>
        <p className="mb-4">
          Weapons range from pistols to machine guns and energy blasters, with limited ammo pushing you to swap often. Every encounter feels 
          unique thanks to smart enemy behavior and traps. Hard-to-reach corners hide collectibles and survivors, and you can win some battles 
          more easily by luring enemies into explosive setups. Strategic gunplay and exploration fuel the momentum in this remastered classic.
        </p>
        <p className="mb-4">
          The game features a sophisticated physics engine that makes every interaction feel realistic and impactful. Barrels explode with 
          devastating force, platforms collapse under weight, and debris can be used tactically to eliminate multiple enemies at once. This 
          dynamic environment creates endless possibilities for creative problem-solving and spectacular chain reactions.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">💥 PHYSICS-BASED DESTRUCTION</h3>
        <p className="mb-4">
          What sets Zombotron Re-Boot apart is its emphasis on environmental destruction. Unlike traditional platformers where the environment 
          is static, here everything can be destroyed, moved, or manipulated. Shoot support beams to bring down entire structures on your enemies. 
          Roll explosive barrels into groups of zombies for massive damage. Use falling debris to create barriers or clear paths.
        </p>
        <p className="mb-4">
          The physics system is not just a gimmick—it's integral to gameplay strategy. Smart players will learn to read the environment, 
          identifying weak points in structures and planning their attacks accordingly. Sometimes the best approach is not to shoot enemies 
          directly, but to manipulate the environment to do the work for you. This adds a puzzle-solving element to the intense action.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🔫 DIVERSE WEAPON ARSENAL</h3>
        <p className="mb-4">
          Your survival depends on mastering a variety of weapons, each with unique characteristics and tactical applications. Start with basic 
          pistols and gradually unlock more powerful firearms including shotguns, assault rifles, plasma weapons, and experimental energy blasters. 
          Each weapon has different damage output, fire rate, accuracy, and ammo capacity, requiring you to adapt your playstyle.
        </p>
        <p className="mb-4">
          Ammunition management is crucial—you cannot rely on a single weapon throughout the game. Scavenge ammo from defeated enemies, explore 
          hidden areas for weapon caches, and make every shot count. The limited ammo system encourages tactical thinking and rewards players 
          who can efficiently switch between weapons based on the situation.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🗺️ EXPLORATION AND SECRETS</h3>
        <p className="mb-4">
          Zombotron Re-Boot rewards thorough exploration with hidden survivors, weapon upgrades, and secret areas. Multi-level stages feature 
          branching paths, vertical exploration, and cleverly hidden rooms that require platforming skills to reach. Some areas are only accessible 
          by destroying specific structures or solving environmental puzzles.
        </p>
        <p className="mb-4">
          Rescued survivors provide valuable resources, story context, and sometimes unlock new abilities or weapon modifications. Collectibles 
          scattered throughout levels reveal the dark history of the planet and the fate of previous expeditions. Completionists will find plenty 
          of reasons to replay levels and discover everything the game has to offer.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">👾 INTELLIGENT ENEMY AI</h3>
        <p className="mb-4">
          The undead and corrupted machines you face are not mindless targets. Zombies exhibit varied behavior patterns—some shamble slowly but 
          attack in groups, others move quickly and ambush from unexpected angles. Mechanical enemies use cover, flank your position, and coordinate 
          attacks. Boss encounters require pattern recognition and strategic use of the environment.
        </p>
        <p className="mb-4">
          Enemy variety keeps combat fresh throughout the campaign. You will face standard zombies, armored variants, explosive suicide units, 
          flying drones, turrets, and massive boss creatures. Each enemy type requires different tactics, forcing you to constantly adapt and 
          think on your feet. The game never lets you get comfortable with a single strategy.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎨 ATMOSPHERIC VISUALS AND SOUND</h3>
        <p className="mb-4">
          The remastered graphics bring the alien world to life with detailed environments, atmospheric lighting, and smooth animations. The art 
          style perfectly captures the gritty, industrial horror aesthetic with rusted metal, organic decay, and ominous shadows. Particle effects 
          for explosions, weapon fire, and environmental destruction add visual impact to every action.
        </p>
        <p className="mb-4">
          Sound design enhances the immersive experience with haunting ambient music, realistic weapon sounds, and chilling enemy audio cues. 
          The creaking of unstable structures warns of impending collapse, distant zombie groans alert you to nearby threats, and the satisfying 
          crunch of physics-based destruction rewards your tactical demolition.
        </p>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">✨ GAME FEATURES</h3>
        <ul className="space-y-3 list-disc list-inside">
          <li><strong>Physics-Based Gameplay:</strong> Use destructible environments, explosive barrels, and collapsing structures as weapons. Create devastating chain reactions to eliminate multiple enemies.</li>
          <li><strong>Diverse Weapon Arsenal:</strong> Unlock and master pistols, shotguns, machine guns, plasma weapons, and energy blasters. Each weapon has unique characteristics and tactical applications.</li>
          <li><strong>Strategic Combat:</strong> Limited ammo forces tactical thinking. Lure enemies into traps, use environmental hazards, and make every shot count to survive.</li>
          <li><strong>Multi-Level Exploration:</strong> Navigate complex stages with vertical platforming, branching paths, and hidden areas. Discover secrets and rescue survivors for rewards.</li>
          <li><strong>Intelligent Enemy AI:</strong> Face varied zombie types and corrupted machines with different behavior patterns. Adapt your strategy to counter each threat.</li>
          <li><strong>Boss Battles:</strong> Confront massive boss creatures that require pattern recognition, environmental manipulation, and all your combat skills.</li>
          <li><strong>Collectibles and Upgrades:</strong> Find hidden weapon upgrades, ammo caches, and survivors. Unlock new abilities and enhance your arsenal.</li>
          <li><strong>Atmospheric World:</strong> Explore abandoned facilities, zombie caverns, and collapsing structures in a gritty alien world where metal and flesh have merged.</li>
          <li><strong>Remastered Classic:</strong> Enhanced graphics, improved physics engine, and refined gameplay mechanics bring this cult classic to modern standards.</li>
          <li><strong>Replay Value:</strong> Multiple difficulty levels, hidden secrets, and achievement challenges encourage repeated playthroughs.</li>
        </ul>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎮 HOW TO PLAY ZOMBOTRON RE-BOOT</h3>

        <h4 className="text-xl font-bold text-gray-800 mb-3 mt-6">Controls Guide</h4>
        <ul className="space-y-2 list-disc list-inside mb-6">
          <li><strong>Move:</strong> Use A and D keys or Left/Right arrow keys to move your character horizontally</li>
          <li><strong>Jump:</strong> Press Spacebar to jump over obstacles and reach higher platforms</li>
          <li><strong>Interact:</strong> Press E key to interact with objects, rescue survivors, and activate mechanisms</li>
          <li><strong>Aim and Shoot:</strong> Use your mouse to aim and click to fire your equipped weapon</li>
          <li><strong>Switch Weapons:</strong> Use number keys or scroll wheel to cycle through your available weapons</li>
          <li><strong>Reload:</strong> Press R to reload your current weapon when ammo runs low</li>
        </ul>

        <h4 className="text-xl font-bold text-gray-800 mb-3 mt-6">Gameplay Tips to Dominate All Adventures</h4>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Use Falling Debris:</strong> Shoot support structures to drop heavy objects on enemies. This eliminates multiple targets without wasting ammo.</li>
          <li><strong>Lure Enemies Near Barrels:</strong> Position yourself so zombies gather near explosive barrels, then shoot the barrel for maximum damage.</li>
          <li><strong>Conserve Ammo:</strong> Finish off wounded enemies with melee attacks or environmental kills rather than wasting bullets.</li>
          <li><strong>Watch Ceilings:</strong> Hidden hazards can drop without warning. Look up frequently to spot unstable structures and hanging threats.</li>
          <li><strong>Explore Thoroughly:</strong> Search every corner to find hidden survivors, weapon upgrades, and ammo caches. Exploration is rewarded.</li>
          <li><strong>Master Physics:</strong> Learn how objects interact. Heavy items can be pushed onto enemies, and explosions create chain reactions.</li>
          <li><strong>Manage Your Arsenal:</strong> Keep different weapon types ready. Use shotguns for close combat, rifles for distance, and energy weapons for armored foes.</li>
          <li><strong>Listen for Audio Cues:</strong> Enemy sounds and environmental creaking provide early warnings. Use headphones for the best experience.</li>
          <li><strong>Take Cover:</strong> Use destructible cover strategically. It won't last forever, but it can save you in intense firefights.</li>
          <li><strong>Plan Your Route:</strong> Study level layouts before rushing in. Identify choke points, escape routes, and environmental hazards.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 ADVANCED STRATEGIES</h3>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Chain Reactions:</strong> Set up multiple explosive barrels in sequence for devastating area-of-effect damage.</li>
          <li><strong>Vertical Advantage:</strong> Use platforms to gain high ground. Enemies have difficulty reaching elevated positions.</li>
          <li><strong>Ammo Conservation:</strong> Prioritize environmental kills over direct shooting when possible to preserve ammunition for tough encounters.</li>
          <li><strong>Enemy Prioritization:</strong> Eliminate ranged enemies and explosive units first to reduce incoming damage.</li>
          <li><strong>Rescue Timing:</strong> Save survivors when the area is clear to avoid putting them in danger during combat.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎮 SIMILAR CREATIVE PLATFORM PLAYGROUNDS</h3>
        <p className="mb-4">
          If you enjoy the physics-based action and exploration of Zombotron Re-Boot, check out these similar games:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Switchblade:</strong> Fast-paced action platformer with weapon variety and intense combat</li>
          <li><strong>Fall Flat Battle:</strong> Physics-based multiplayer mayhem with destructible environments</li>
          <li><strong>Öoo:</strong> Minimalist platformer with creative physics puzzles and challenging gameplay</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">❓ FREQUENTLY ASKED QUESTIONS</h3>
        
        <h4 className="text-lg font-bold text-gray-800 mb-2 mt-4">Is Zombotron Re-Boot free to play?</h4>
        <p className="mb-4">
          Yes! Zombotron Re-Boot is completely free to play online. No downloads, installations, or payments required. Just click play and start your adventure.
        </p>

        <h4 className="text-lg font-bold text-gray-800 mb-2 mt-4">Can I play Zombotron Re-Boot on mobile devices?</h4>
        <p className="mb-4">
          The game is optimized for desktop browsers with keyboard and mouse controls. Mobile support may be limited due to the precise aiming and complex controls required.
        </p>

        <h4 className="text-lg font-bold text-gray-800 mb-2 mt-4">How do I save my progress?</h4>
        <p className="mb-4">
          The game typically auto-saves your progress at checkpoints. Make sure to allow browser cookies and local storage for the save system to work properly.
        </p>

        <h4 className="text-lg font-bold text-gray-800 mb-2 mt-4">What makes Zombotron Re-Boot different from other zombie games?</h4>
        <p className="mb-4">
          The physics-based gameplay sets it apart. Instead of just shooting zombies, you can manipulate the environment, create chain reactions, and use destructible terrain as a weapon. This adds strategic depth beyond typical zombie shooters.
        </p>

        <h4 className="text-lg font-bold text-gray-800 mb-2 mt-4">Are there difficulty settings?</h4>
        <p className="mb-4">
          The game features progressive difficulty that increases as you advance through levels. Early stages teach mechanics while later levels demand mastery of all systems.
        </p>
      </div>
    </div>
  );

  return (
    <GameDetailTemplate
      game={game}
      aboutContent={aboutContent}
      featuresContent={featuresContent}
      howToPlayContent={howToPlayContent}
    />
  );
}

