'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function SofloWheelieLifePage() {
  const game = {
    slug: 'soflo-wheelie-life',
    title: 'Soflo Wheelie Life',
    subtitle: 'Experience the Ultimate Motorcycle Wheelie Challenge',
    description: 'Soflo Wheelie Life is an exciting motorcycle stunt game that lets you perform crazy wheelies directly in your browser, completely free. Master the art of balance and tricks!',
    playUrl: 'https://scratch.mit.edu/projects/1231016758/embed',
    thumbnail: '/images/thumbnails/soflo-wheelie-life.png',
    rating: 5.0,
    playCount: 0,
    tags: ['Racing', 'Sport', 'Driving', 'Moto', 'Scratch', 'Arcade', 'Casual', 'Skill'],
    backgroundColor: 'from-orange-500 via-yellow-400 to-amber-300',
  };

  const aboutContent = (
    <>
      <p className="text-lg leading-relaxed">
        <strong>Soflo Wheelie Life</strong> is an exciting game that lets you perform crazy wheelies directly in your browser, completely free. Created by LucasTheSigmaMogger on the Scratch platform, the game was released on October 20, 2025, quickly winning over the hearts of young gamers who love challenges and arcade motorcycle games.
      </p>
      <p className="text-lg leading-relaxed">
        In the world of <strong>Soflo Wheelie Life</strong>, you will control a motorbike through the vibrant streets of South Florida, avoiding cars and walls, and performing a series of stunts to increase your score. This is the perfect combination of skill, rhythm, and excitement as your multiplier increases.
      </p>
      <p className="text-lg leading-relaxed">
        <strong>Soflo Wheelie Life</strong> offers an endless mode where you can challenge yourself without time limits. The game focuses purely on skill - lift the front wheel, keep your balance, and perform tricks to accumulate points. Hit a bike or a wall and you'll crash, but you can restart immediately to beat your high score.
      </p>
      <p className="text-lg leading-relaxed">
        The game features multiple bikes with different characteristics - light bikes are easy to wheelie but prone to shaking (suitable for beginners), while heavy bikes are stable for long wheelies and big tricks. You can change helmets with the G key and switch between bikes with the F key, all without spending any money.
      </p>
      <p className="text-lg leading-relaxed">
        <strong>Soflo Wheelie Life</strong> includes a leaderboard system that promotes competition between friends and the community. Your high scores are based on distance, smoothness, and trick chains. The game has no shop to buy from - it's all about pure skill and practice.
      </p>
      <p className="text-lg leading-relaxed">
        Master various tricks in <strong>Soflo Wheelie Life</strong> including standing on the saddle for style points, knee drag tricks for multiplier boosts, hand drags to keep the flow, and the extremely risky no-hands wheelie. Each trick adds to your score and increases your multiplier.
      </p>
      <p className="text-lg leading-relaxed">
        The controls in <strong>Soflo Wheelie Life</strong> are intuitive and responsive. Use D/W/↑ to accelerate and lift the front wheel, A/S/↓ to brake or lean back, and D/→ to lean forward to land. The game rewards smooth control and perfect timing.
      </p>
      <p className="text-lg leading-relaxed">
        <strong>Soflo Wheelie Life</strong> features vibrant graphics depicting the streets of South Florida. The game's visual style is colorful and engaging, making each wheelie session feel fresh and exciting. The smooth animations make every trick feel satisfying to pull off.
      </p>
      <p className="text-lg leading-relaxed">
        Whether you're a motorcycle enthusiast or just looking for a fun skill-based game, <strong>Soflo Wheelie Life</strong> delivers an addictive gameplay experience. The game's simple concept combined with deep skill mechanics makes it easy to learn but hard to master.
      </p>
      <p className="text-lg leading-relaxed">
        Play <strong>Soflo Wheelie Life</strong> now and experience the thrill of performing perfect wheelies through the streets of South Florida. Challenge your friends, climb the leaderboard, and become the ultimate wheelie master in this exciting Scratch game!
      </p>
    </>
  );

  const howToPlayContent = (
    <>
      <h3 className="text-xl font-bold text-gray-800 mb-2">Basic Rules</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
        <li>This game has no levels or time limits; it's all based on skill</li>
        <li>Lift the front wheel and keep your balance to accumulate points</li>
        <li>Perform a series of tricks to increase your multiplier</li>
        <li>Hit a bike or a wall = crash, but you can restart immediately</li>
        <li>Race for high scores, compare records, and challenge friends</li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Controls</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
        <li><strong>D / W / ↑:</strong> Accelerate and lift the front wheel</li>
        <li><strong>A / S / ↓:</strong> Brake or lean back</li>
        <li><strong>D / →:</strong> Lean forward to land</li>
        <li><strong>W:</strong> Stand on the saddle to score style</li>
        <li><strong>S:</strong> Knee drag trick for multiplier</li>
        <li><strong>E:</strong> Hand drag to keep the flow</li>
        <li><strong>R:</strong> No-hands wheelie, extremely risky</li>
        <li><strong>F:</strong> Switch between bikes</li>
        <li><strong>G:</strong> Change helmet, create style</li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Pro Tips</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Start gently and brake moderately when the bike wobbles</li>
        <li>Combine tricks to increase the multiplier quickly</li>
        <li>Light bikes are easier to wheelie but harder to control</li>
        <li>Heavy bikes are more stable for long wheelies</li>
        <li>Practice timing your tricks for maximum score</li>
      </ul>
    </>
  );

  const featuresContent = (
    <>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Free Browser-Based Gameplay:</strong> Play Soflo Wheelie Life directly in your browser without downloads</li>
        <li><strong>Multiple Bikes:</strong> Choose from light bikes (easy to wheelie) or heavy bikes (stable for long tricks)</li>
        <li><strong>Customization Options:</strong> Change helmets and bikes to create your unique style</li>
        <li><strong>Trick System:</strong> Perform various tricks including stand wheelies, knee drags, hand drags, and no-hands wheelies</li>
        <li><strong>Multiplier Mechanics:</strong> Chain tricks together to increase your score multiplier</li>
        <li><strong>Endless Mode:</strong> No time limits or levels - pure skill-based gameplay</li>
        <li><strong>Leaderboard System:</strong> Compete with friends and the community for high scores</li>
        <li><strong>No Microtransactions:</strong> All bikes and helmets are free - no shop required</li>
        <li><strong>Vibrant Graphics:</strong> Colorful South Florida street environment</li>
        <li><strong>Instant Restart:</strong> Crash and restart immediately to keep improving</li>
        <li><strong>Scratch Platform:</strong> Created on Scratch by LucasTheSigmaMogger</li>
        <li><strong>Skill-Based Scoring:</strong> High scores based on distance, smoothness, and trick chains</li>
      </ul>
    </>
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

