'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function BlockBreakerPage() {
  const game = {
    slug: 'block-breaker',
    title: 'Block Breaker',
    subtitle: 'Smash Through Colorful Blocks in This Engaging Agility Arcade Challenge',
    description: 'Smash through colorful blocks in Block Breaker, an engaging agility arcade challenge! Test your reflexes and aim for conquering all levels!',
    playUrl: '//html5.gamedistribution.com/rvvASMiM/e8c759ba34bd4b9b9760b77fb04b69d9/index.html?gd_sdk_referrer_url=https%3A%2F%2F1games.io%2Fblock-breaker&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovLzFnYW1lcy5pby9ibG9jay1icmVha2VyIiwicGFyZW50RG9tYWluIjoiMWdhbWVzLmlvIiwidG9wRG9tYWluIjoiMWdhbWVzLmlvIiwiaGFzSW1wcmVzc2lvbiI6ZmFsc2UsImxvYWRlckVuYWJsZWQiOnRydWUsImhvc3QiOiJodG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbSIsInZlcnNpb24iOiIxLjUuMTgifQ%253D%253D',
    thumbnail: '/images/thumbnails/block-breaker.jpeg',
    rating: 4.5,
    playCount: 0,
    tags: ['Arcade', 'Action', 'Skill', 'Casual', 'Block', 'Agility'],
    backgroundColor: 'from-blue-400 via-purple-400 to-pink-400',
  };

  const aboutContent = (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <div>
        <p className="mb-4">
          Block Breaker offers an irresistible challenge for those who love precision and quick reflexes. With a single mission: destroy all the blocks with white balls, you will enter a world where every hit matters. The bricks gradually crumble, but don't be subjective—there are up to 150 levels with increasing difficulty waiting for you. Can you conquer them all and become a master brick breaker? Try it now!
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎮 GRASP BALL-CATCHING GAMEPLAY</h3>
        <p className="mb-4">
          Each level of Block Breaker starts with a colorful tile board and a white ball. The ball gradually destroys the blocks it touches, with the exception of special solid blocks that remain unbroken. You must control the support bar to keep the ball on the screen and use special items to boost your power.
        </p>
        <p className="mb-4">
          This exciting arcade game requires not only dexterity but also smart strategy. Some items help you double the number of balls, while others can extend the bar, giving you an advantage when facing difficult levels. The arrangement of the blocks changes constantly, forcing you to adjust your reflexes and attack angle for maximum effectiveness. Each level is a new challenge, where you have to consider each ball and destroy all the blocks as quickly as possible.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Control Your Pad</h3>
        <p className="mb-4">
          Just hold down and move the mouse to control the support bar. High sensitivity helps you control the ball's direction accurately, creating powerful shots.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🌟 Game Features</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>150 challenging levels with increasing difficulty</li>
          <li>Colorful block designs and smooth animations</li>
          <li>Special power-ups including multi-ball and extended paddle</li>
          <li>Solid blocks that add strategic complexity</li>
          <li>Precise physics-based ball control</li>
          <li>Progressive difficulty curve that keeps you engaged</li>
          <li>Addictive arcade gameplay perfect for quick sessions</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Tips for Success</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Master the Angles:</strong> The position where the ball hits your paddle determines its trajectory. Use the edges for sharp angles and the center for controlled bounces.</li>
          <li><strong>Prioritize Power-Ups:</strong> Catch falling power-ups to gain advantages like extra balls or extended paddles, but don't risk losing the ball to get them.</li>
          <li><strong>Plan Your Shots:</strong> Look ahead at the block formation and aim for strategic positions that will create chain reactions.</li>
          <li><strong>Stay Focused:</strong> As levels progress, the ball speed increases. Maintain concentration and quick reflexes to keep up.</li>
          <li><strong>Use Solid Blocks:</strong> Solid blocks can be used strategically to bounce the ball into hard-to-reach areas.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎨 Visual Design</h3>
        <p className="mb-4">
          Block Breaker features vibrant, colorful graphics that make each level visually appealing. The blocks come in various colors, creating beautiful patterns that are satisfying to destroy. Smooth animations and particle effects celebrate your successes, while the clean interface ensures you can always track the ball's movement clearly.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">⚡ Progressive Challenge</h3>
        <p className="mb-4">
          The game starts with simple block formations to help you learn the mechanics, then gradually introduces more complex patterns and faster ball speeds. Each of the 150 levels presents unique challenges, from tightly packed blocks requiring precision to spread-out formations demanding careful aim. The difficulty curve is perfectly balanced to keep you challenged without becoming frustrating.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🏆 Why Play Block Breaker?</h3>
        <p className="mb-4">
          Block Breaker combines classic brick-breaking gameplay with modern design and engaging mechanics. It's perfect for players who enjoy:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Fast-paced arcade action that tests reflexes</li>
          <li>Strategic gameplay that rewards planning and skill</li>
          <li>Progressive challenges that keep you engaged</li>
          <li>Satisfying physics and visual feedback</li>
          <li>Quick gaming sessions or extended play</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎮 Similar Agility Gameplay</h3>
        <p className="mb-4">
          If you enjoy Block Breaker, you might also like these games that test your reflexes and precision:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Shooter Hero:</strong> Fast-paced shooting action requiring quick reflexes</li>
          <li><strong>Tunnel Ball:</strong> Navigate through challenging tunnels with precise control</li>
          <li><strong>8 Ball Pool Challenge:</strong> Test your aim and strategy in classic pool</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🚀 Start Playing Now</h3>
        <p className="mb-4">
          Ready to test your reflexes and conquer 150 challenging levels? Block Breaker is waiting for you. The game is completely free to play, requires no downloads, and runs smoothly in your browser. Just click play above and start your block-breaking adventure!
        </p>
        <p className="mb-4">
          Whether you're a fan of classic arcade games or looking for a new challenge, Block Breaker delivers engaging gameplay that's easy to learn but hard to master. Can you become the ultimate brick breaker and conquer all 150 levels? There's only one way to find out—start playing now!
        </p>
      </div>
    </div>
  );

  return <GameDetailTemplate game={game} aboutContent={aboutContent} />;
}

