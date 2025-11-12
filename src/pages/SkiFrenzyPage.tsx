'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function SkiFrenzyPage() {
  const game = {
    slug: 'ski-frenzy',
    title: 'Ski Frenzy',
    subtitle: 'Endless 3D Skiing Adventure with Animals, Stunts, and Avalanches',
    description: 'Race down snowy slopes in Ski Frenzy, an endless 3D skiing adventure filled with animals, stunts, and avalanches. Fast, unpredictable, and full of thrill. Play Ski Frenzy unblocked for free!',
    playUrl: 'https://yoplay.io/ski-frenzy.embed',
    thumbnail: '/images/thumbnails/ski-frenzy.jpg',
    rating: 5.0,
    playCount: 0,
    tags: ['Sports', 'Skiing', 'Action', 'Arcade', '3D', 'Endless Runner', 'Casual', 'Adventure', 'Animals', 'Skill', 'Challenge', 'Unblocked', 'Browser', 'Single Player', 'Pixel'],
    backgroundColor: 'from-blue-300 via-cyan-200 to-white',
  };

  const aboutContent = (
    <>
      <p className="text-lg leading-relaxed">
        When the mountain wakes up angry, there's no time to think. In <strong>Ski Frenzy</strong>, a sleepy skier named Evan (or Evana) finds himself ripped from the comfort of his warm blanket and thrown into chaos. One second, it's peace and snowflakes, the next—an avalanche roars behind, and the only way out is down. <strong>Ski Frenzy</strong> isn't just another endless runner—it's a test of instinct, rhythm, and nerve.
      </p>
      
      <p className="text-lg leading-relaxed">
        Every slope in <strong>Ski Frenzy</strong> feels alive, every second a heartbeat closer to survival. This fast-paced survival game combines stunning 3D pixel visuals with unpredictable terrain that keeps players on edge. <strong>Ski Frenzy</strong> delivers an adrenaline-pumping experience where quick reflexes and smart decisions mean the difference between glory and defeat.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">⛷️ What Makes Ski Frenzy Special?</h3>
      <p className="text-lg leading-relaxed">
        <strong>Ski Frenzy</strong> stands out from typical endless runners by introducing animal companions that become survival tools. Unlike static ski games, the terrain in <strong>Ski Frenzy</strong> bends and twists unpredictably, forcing quick reflexes and smart reactions. The constant chase from the avalanche turns even quiet moments into adrenaline spikes in <strong>Ski Frenzy</strong>.
      </p>

      <p className="text-lg leading-relaxed">
        Few games turn nature into such a creative mechanic. Penguins, eagles, Yetis—they're not just background creatures in <strong>Ski Frenzy</strong>. They're survival tools. Every collectable brings its own twist to survival—a burst of speed, the power to crush obstacles, or a fleeting moment of flight. Yet the real reward in <strong>Ski Frenzy</strong> is that pulse of adrenaline: the rush when a loyal penguin suddenly doubles your score, or when a mighty Yeti storms in to smash through danger at the last, breathless second.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">🗺️ Expansive World Maps in Ski Frenzy</h3>
      <p className="text-lg leading-relaxed">
        The mountain world in <strong>Ski Frenzy</strong> opens gradually, revealing diverse environments that reshape how the snow feels under your board. From Penguin Peaks to Jurassic Lark, Twister Canyon, and Monster Mountain, each location in <strong>Ski Frenzy</strong> offers unique challenges:
      </p>

      <ul className="list-disc list-inside space-y-2 text-lg ml-4">
        <li><strong>Penguin Peaks:</strong> The starting zone in <strong>Ski Frenzy</strong> where you learn the basics with friendly penguin companions</li>
        <li><strong>Jurassic Lark:</strong> Ancient terrain with prehistoric surprises waiting in <strong>Ski Frenzy</strong></li>
        <li><strong>Twister Canyon:</strong> Treacherous winds and sharp turns test your skills in <strong>Ski Frenzy</strong></li>
        <li><strong>Monster Mountain:</strong> The ultimate challenge where only the bravest survive in <strong>Ski Frenzy</strong></li>
        <li><strong>Lunar Lookout:</strong> Beyond Earth's pull, where gravity itself becomes part of the challenge in <strong>Ski Frenzy</strong></li>
      </ul>

      <p className="text-lg leading-relaxed mt-4">
        The coins hoarded on the slopes in <strong>Ski Frenzy</strong> are your direct access pass to a rich customization vault. Those earnings unlock far more than just new, unfamiliar maps; they grant stylish snowmobiles, specialized jetpacks, and the coveted rare skis in <strong>Ski Frenzy</strong>. Some of these prized unlocks even arrive bundled with a companion—a genuine aesthetic win, because let's be honest, absolutely nothing surpasses the joy of carving downhill in stylish pairs in <strong>Ski Frenzy</strong>.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">🎨 Immersive 3D Pixel Visuals</h3>
      <p className="text-lg leading-relaxed">
        The <strong>Ski Frenzy</strong> game world unfolds like a perfectly crafted miniature Earth, rendered in a vivid, crisp canvas of basic whites and brilliant blues. Once players acclimate to this clean, spare aesthetic in <strong>Ski Frenzy</strong>, they find themselves in a deceptively calm state of flow—a feeling that makes it nearly impossible to disengage.
      </p>

      <p className="text-lg leading-relaxed">
        <strong>Ski Frenzy</strong> radiates a brightness and lighthearted simplicity, yet remains entirely capable of making the rider's heart hammer against their chest the moment that terrifying avalanche begins its relentless rumble behind them. The 3D pixel art style in <strong>Ski Frenzy</strong> gives the game a unique charm that appeals to both casual and hardcore gamers.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">🐧 Animal Companions with Personality</h3>
      <p className="text-lg leading-relaxed">
        Animals in <strong>Ski Frenzy</strong> become unexpected allies. A penguin can turn into a living snowboard in <strong>Ski Frenzy</strong>, an eagle offers a few seconds of freedom above the chaos, and the mighty Yeti crushes through rocks like they're made of paper. Mastering when to ride them in <strong>Ski Frenzy</strong> becomes the difference between glory and defeat.
      </p>

      <p className="text-lg leading-relaxed">
        Each animal companion in <strong>Ski Frenzy</strong> brings unique abilities that can save your run. The penguin doubles or triples your score multiplier, the eagle lets you soar over dangerous obstacles, and the Yeti provides unstoppable power to smash through barriers in <strong>Ski Frenzy</strong>. Learning to use these companions strategically is key to mastering <strong>Ski Frenzy</strong>.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">🎯 Skill-Based Scoring and Stunts</h3>
      <p className="text-lg leading-relaxed">
        Points in <strong>Ski Frenzy</strong> don't just come from distance—they come from nerve. Perfect spins, clean flips, and risky jumps multiply your score in <strong>Ski Frenzy</strong>. The reward system favors boldness but punishes recklessness—miss a landing in <strong>Ski Frenzy</strong>, and all that flash turns into a face full of snow.
      </p>

      <p className="text-lg leading-relaxed">
        Each run in <strong>Ski Frenzy</strong> is a mix of panic and beauty—sharp turns, wild flips, and the echo of snow beneath your feet. The more you play <strong>Ski Frenzy</strong>, the more your reflexes sharpen, until movement feels like muscle memory. Rope sliding is one of the interesting points of <strong>Ski Frenzy</strong> that adds variety to the gameplay.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">🏔️ Why Ski Frenzy Stands Out</h3>
      <p className="text-lg leading-relaxed">
        <strong>Ski Frenzy</strong> doesn't ask players to win—it asks them to endure. Beneath the playful visuals and silly animal rides lies a rhythm that rewards focus, timing, and guts in <strong>Ski Frenzy</strong>. Every tumble teaches a lesson, and every leap sharpens instinct.
      </p>

      <p className="text-lg leading-relaxed">
        Beneath the rush of snow and chaos, <strong>Ski Frenzy</strong> reminds us that even in freefall, there's a strange kind of beauty in survival. The game is completely unblocked and free to play in your browser—no downloads, no sign-ups, just pure skiing action in <strong>Ski Frenzy</strong>. Perfect for quick breaks or extended gaming sessions.
      </p>
    </>
  );

  const howToPlayContent = (
    <>
      <p className="text-lg leading-relaxed mb-4">
        The controls in <strong>Ski Frenzy</strong> are simple but mastering them takes practice. Land wrong, and the avalanche won't forgive you in <strong>Ski Frenzy</strong>. Crashing slows the pace, but there's always a chance to recover before the snow swallows you whole.
      </p>

      <div className="bg-white/50 rounded-xl p-6 mb-4">
        <h4 className="text-xl font-bold text-gray-800 mb-3">⌨️ Keyboard Controls</h4>
        <ul className="space-y-2 text-lg">
          <li><strong>Left/Right Arrow Keys:</strong> Move your skier left or right to avoid obstacles in <strong>Ski Frenzy</strong></li>
          <li><strong>Spacebar:</strong> Jump over gaps and obstacles in <strong>Ski Frenzy</strong></li>
          <li><strong>Shift Key:</strong> Hold to perform acrobatic stunts and flips in <strong>Ski Frenzy</strong></li>
          <li><strong>Z Key:</strong> Activate special skills of support animals in <strong>Ski Frenzy</strong></li>
        </ul>
      </div>

      <div className="bg-white/50 rounded-xl p-6 mb-4">
        <h4 className="text-xl font-bold text-gray-800 mb-3">🎮 Gameplay Mechanics</h4>
        <p className="text-lg leading-relaxed mb-3">
          In <strong>Ski Frenzy</strong>, your goal is to ski as far as possible while staying ahead of the avalanche. Collect coins, grab power-ups, and use animal companions to boost your score and survival chances in <strong>Ski Frenzy</strong>.
        </p>
        <ul className="space-y-2 text-lg">
          <li><strong>Collect Coins:</strong> Gather coins to unlock new maps, skis, and companions in <strong>Ski Frenzy</strong></li>
          <li><strong>Grab Power-ups:</strong> Coin Magnets, Super Blue Boosts, and Emergency Jetpacks can save your run in <strong>Ski Frenzy</strong></li>
          <li><strong>Perform Stunts:</strong> Execute flips and spins for bonus points in <strong>Ski Frenzy</strong></li>
          <li><strong>Use Animals Wisely:</strong> Each animal companion has unique abilities in <strong>Ski Frenzy</strong></li>
        </ul>
      </div>

      <div className="bg-white/50 rounded-xl p-6">
        <h4 className="text-xl font-bold text-gray-800 mb-3">🎯 Difficulty Modes</h4>
        <p className="text-lg leading-relaxed">
          <strong>Ski Frenzy</strong> offers two difficulty modes to match your skill level:
        </p>
        <ul className="space-y-2 text-lg mt-3">
          <li><strong>Casual Mode:</strong> Perfect for learning the slopes and getting comfortable with the controls in <strong>Ski Frenzy</strong></li>
          <li><strong>Frantic Mode:</strong> Pure chaos, best for confident riders seeking the ultimate challenge in <strong>Ski Frenzy</strong></li>
        </ul>
      </div>
    </>
  );

  const featuresContent = (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/50 rounded-xl p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-3">⚡ Thrilling Endless Runner Adventure</h4>
          <p className="text-lg leading-relaxed">
            Every slope in <strong>Ski Frenzy</strong> hides its own rhythm. Unlike static ski games, the terrain here bends and twists unpredictably, forcing quick reflexes and smart reactions in <strong>Ski Frenzy</strong>.
          </p>
        </div>

        <div className="bg-white/50 rounded-xl p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-3">🐾 Unique Animal Companions</h4>
          <p className="text-lg leading-relaxed">
            Penguins, eagles, and Yetis aren't just decorations in <strong>Ski Frenzy</strong>—they're essential survival tools with unique abilities that can turn a failed run into a record-breaking success.
          </p>
        </div>

        <div className="bg-white/50 rounded-xl p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-3">🗺️ Multiple World Maps</h4>
          <p className="text-lg leading-relaxed">
            From Penguin Peaks to Lunar Lookout, each map in <strong>Ski Frenzy</strong> offers unique challenges and visual styles that keep the gameplay fresh and exciting.
          </p>
        </div>

        <div className="bg-white/50 rounded-xl p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-3">🎨 Beautiful 3D Pixel Graphics</h4>
          <p className="text-lg leading-relaxed">
            <strong>Ski Frenzy</strong> features crisp, vibrant 3D pixel art that creates a unique visual style—bright and cheerful yet capable of intense moments.
          </p>
        </div>

        <div className="bg-white/50 rounded-xl p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-3">🏆 Skill-Based Scoring System</h4>
          <p className="text-lg leading-relaxed">
            Master stunts, perfect your landings, and chain combos in <strong>Ski Frenzy</strong> to achieve high scores. Boldness is rewarded, but recklessness is punished.
          </p>
        </div>

        <div className="bg-white/50 rounded-xl p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-3">🎁 Rich Customization Options</h4>
          <p className="text-lg leading-relaxed">
            Unlock stylish snowmobiles, specialized jetpacks, rare skis, and companion bundles in <strong>Ski Frenzy</strong> using coins collected during your runs.
          </p>
        </div>

        <div className="bg-white/50 rounded-xl p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-3">💨 Power-ups and Boosters</h4>
          <p className="text-lg leading-relaxed">
            Coin Magnets, Super Blue Boosts, and Emergency Jetpacks in <strong>Ski Frenzy</strong> can transform a near-disaster into an unexpected record-breaking run.
          </p>
        </div>

        <div className="bg-white/50 rounded-xl p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-3">🌐 Play Unblocked Anywhere</h4>
          <p className="text-lg leading-relaxed">
            <strong>Ski Frenzy</strong> is completely free and unblocked—play directly in your browser without downloads, perfect for school or work breaks.
          </p>
        </div>
      </div>
    </>
  );

  const tipsContent = (
    <>
      <div className="bg-white/50 rounded-xl p-6 mb-4">
        <h4 className="text-xl font-bold text-gray-800 mb-3">🐧 Use Penguins Smartly</h4>
        <p className="text-lg leading-relaxed">
          Penguins are your best multiplier tools in <strong>Ski Frenzy</strong>—grab them for double or even triple score gains. Don't pass up penguin opportunities!
        </p>
      </div>

      <div className="bg-white/50 rounded-xl p-6 mb-4">
        <h4 className="text-xl font-bold text-gray-800 mb-3">⚡ Keep Momentum Alive</h4>
        <p className="text-lg leading-relaxed">
          Don't let crashes slow you down too often in <strong>Ski Frenzy</strong>; the avalanche closes in fast. Recover quickly and maintain your speed.
        </p>
      </div>

      <div className="bg-white/50 rounded-xl p-6 mb-4">
        <h4 className="text-xl font-bold text-gray-800 mb-3">🎯 Collect Power-ups</h4>
        <p className="text-lg leading-relaxed">
          You cannot ignore the power-ups in <strong>Ski Frenzy</strong>. Treat them as non-negotiable lifeline resources that can instantly rescue a near-disastrous failure.
        </p>
      </div>

      <div className="bg-white/50 rounded-xl p-6 mb-4">
        <h4 className="text-xl font-bold text-gray-800 mb-3">🤸 Chain Stunts Carefully</h4>
        <p className="text-lg leading-relaxed">
          Acrobatic points are tempting in <strong>Ski Frenzy</strong>, but a bad landing ends the run—balance ambition with timing for maximum success.
        </p>
      </div>

      <div className="bg-white/50 rounded-xl p-6">
        <h4 className="text-xl font-bold text-gray-800 mb-3">🎮 Experiment with Difficulty Modes</h4>
        <p className="text-lg leading-relaxed">
          "Casual" mode in <strong>Ski Frenzy</strong> lets you learn the slopes; "Frantic" is pure chaos, best for confident riders ready for the ultimate challenge.
        </p>
      </div>
    </>
  );

  return (
    <GameDetailTemplate
      game={game}
      aboutContent={aboutContent}
      howToPlayContent={howToPlayContent}
      featuresContent={featuresContent}
      tipsContent={tipsContent}
    />
  );
}

