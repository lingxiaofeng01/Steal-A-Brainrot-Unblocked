'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function HumansPlaygroundPage() {
  const game = {
    slug: 'humans-playground',
    title: 'Humans Playground',
    subtitle: 'Unleash Creativity or Chaos in a Stunning Sandbox Playground - Experiment, Build, and Let Your Wild Ideas Run Free',
    description: 'Unleash creativity or chaos in Humans Playground, a stunning sandbox playground. Experiment, build, and let your wild ideas run free! Become the "fate designer" of little characters and control them in this spontaneous adventure with limitless creative freedom.',
    playUrl: 'https://html5.gamedistribution.com/4eacf9fb9012479194568af9a7e0417c/?gd_sdk_referrer_url=https://1games.io/humans-playground',
    thumbnail: '/images/thumbnails/humans-playground.jpg',
    rating: 4.1,
    playCount: 0,
    tags: ['Action', 'Adventure', 'Simulation', 'Physics', 'Sandbox', 'Ragdoll', 'Creation'],
    backgroundColor: 'from-red-500 via-orange-500 to-yellow-500',
  };

  const aboutContent = (
    <div className="space-y-6">
      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🎮 UNLEASH CREATIVITY OR CHAOS IN A STUNNING SANDBOX</h3>
        <p className="text-gray-700 leading-relaxed">
          Humans Playground offers a huge open space where you can create, destroy, and test your craziest ideas. Become the "fate designer" of the little characters and control them here! Immerse yourself in this spontaneous adventure and discover limitless creative freedom! This physics-based sandbox game puts you in complete control of every aspect of the game world, allowing you to experiment with complex interactions and create unique scenarios that range from enjoyable performances to intense physics tests.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🔬 COMPLETE CONTROL OVER THE GAME WORLD</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          At the core of Humans Playground is the ability to completely control every aspect of the game world. You can drop characters into the environment, experiment with physics through complex interactions, and create unique scenarios. From enjoyable performances to intense physics tests, the game offers a diverse experience that is never boring.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The ragdoll physics system creates realistic and often hilarious reactions to your experiments. Watch as characters respond to gravity, momentum, and force in unpredictable ways. This dynamic physics engine ensures that no two experiments are ever exactly the same, providing endless entertainment and discovery.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🛠️ DOZENS OF UNIQUE ITEMS AND TOOLS</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          With dozens of unique items and tools, you can use everything from guns and bombs to mechanical machines to create impressive performances. Combine them at will to create breathtaking interactions or simply cause fun chaos. Your creativity is the only limit! The extensive arsenal includes weapons, explosives, vehicles, mechanical parts, and environmental hazards.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Each tool has its own unique properties and interactions with the physics system. Experiment with different combinations to discover new and exciting results. The game encourages experimentation and rewards creative thinking with spectacular visual feedback.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">💥 WEAPONS AND TRAPS</h3>
        <p className="text-gray-700 leading-relaxed">
          The game features an extensive collection of weapons and traps that allow you to create elaborate scenarios. From simple firearms to complex explosive devices, each weapon behaves realistically according to the physics engine. Set up chain reactions, create domino effects, or simply test the limits of destruction. The variety ensures that you'll always have new ways to experiment and play.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🚗 VEHICLES AND MACHINES</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Build and control various vehicles and mechanical contraptions. From simple cars to complex machinery, the game's physics system allows for realistic vehicle behavior and interactions. Create races, crashes, or elaborate Rube Goldberg machines. The mechanical systems are detailed enough to support serious engineering projects while remaining accessible for casual experimentation.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Combine vehicles with other elements to create unique scenarios. Watch as cars interact with explosives, characters react to moving vehicles, and complex machines perform their intended functions. The possibilities are truly endless.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🎨 CREATIVE BUILDING AND CONSTRUCTION</h3>
        <p className="text-gray-700 leading-relaxed">
          Beyond destruction, Humans Playground offers robust building capabilities. Construct elaborate structures, design complex mechanisms, and create your own custom scenarios. The building tools are intuitive yet powerful, allowing both beginners and experienced players to bring their visions to life. Share your creations with the community or challenge yourself to build increasingly complex designs.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🧪 PHYSICS EXPERIMENTATION</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          The advanced physics engine is the heart of Humans Playground. Every object, character, and interaction follows realistic physical laws, creating authentic and often surprising results. Test theories, create experiments, and discover the limits of the physics system. The game serves as both entertainment and an educational tool for understanding basic physics principles.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Gravity, momentum, force, friction, and collision all play crucial roles in how objects interact. Master these principles to create more sophisticated experiments and scenarios. The physics system is detailed enough to support serious experimentation while remaining fun and accessible.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">👥 RAGDOLL CHARACTERS</h3>
        <p className="text-gray-700 leading-relaxed">
          The ragdoll characters are the stars of your experiments. Watch as they react realistically to every force and interaction. Their flexible physics-based bodies create endless entertainment as they tumble, fall, and respond to your creations. Each character can be customized and positioned precisely, allowing for detailed scenario creation.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🌟 LIMITLESS CREATIVE FREEDOM</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Humans Playground imposes no restrictions on your creativity. There are no objectives to complete, no scores to beat, and no wrong ways to play. The game is your canvas, and you are the artist. Whether you want to create beautiful mechanical symphonies or chaotic destruction, the choice is entirely yours.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This freedom extends to every aspect of the game. Experiment with different combinations, test wild theories, and push the boundaries of what's possible. The game rewards curiosity and creativity, making every session a unique experience.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-3 text-gray-800">🎯 WHY PLAY HUMANS PLAYGROUND?</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Humans Playground offers a unique gaming experience that combines creativity, physics, and unlimited freedom. Whether you're a creative builder, a physics enthusiast, or someone who just wants to cause some fun chaos, this game has something for everyone. The intuitive controls make it easy to start experimenting immediately, while the depth of the physics system provides endless opportunities for discovery.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Join millions of players worldwide who have discovered the joy of unlimited creative freedom. Build, destroy, experiment, and create in this stunning sandbox playground. Your imagination is the only limit!
        </p>
      </section>
    </div>
  );

  const featuresContent = (
    <div className="space-y-4">
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li><strong className="text-gray-800">Huge Open Sandbox Environment:</strong> Massive playground with unlimited creative possibilities</li>
        <li><strong className="text-gray-800">Advanced Ragdoll Physics:</strong> Realistic character physics with authentic reactions</li>
        <li><strong className="text-gray-800">Dozens of Unique Tools:</strong> Weapons, explosives, vehicles, and mechanical parts</li>
        <li><strong className="text-gray-800">Complete Creative Freedom:</strong> No objectives, no restrictions, just pure creativity</li>
        <li><strong className="text-gray-800">Realistic Physics Engine:</strong> Authentic gravity, momentum, and collision systems</li>
        <li><strong className="text-gray-800">Building and Construction:</strong> Create elaborate structures and mechanisms</li>
        <li><strong className="text-gray-800">Vehicle Systems:</strong> Cars, machines, and complex contraptions</li>
        <li><strong className="text-gray-800">Weapons Arsenal:</strong> Extensive collection of firearms and explosives</li>
        <li><strong className="text-gray-800">Trap Systems:</strong> Create elaborate chain reactions and domino effects</li>
        <li><strong className="text-gray-800">Customizable Characters:</strong> Position and customize ragdoll characters</li>
        <li><strong className="text-gray-800">Intuitive Controls:</strong> Easy to learn, deep to master</li>
        <li><strong className="text-gray-800">Endless Experimentation:</strong> Discover new interactions and combinations</li>
        <li><strong className="text-gray-800">Community Sharing:</strong> Share your creations with other players</li>
        <li><strong className="text-gray-800">Regular Updates:</strong> New tools and features added frequently</li>
      </ul>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6">
      <section>
        <h3 className="text-xl font-bold mb-3 text-gray-800">🎮 Basic Controls</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong className="text-gray-800">Mouse:</strong> Click and drag to place objects and interact with the environment</li>
          <li><strong className="text-gray-800">Left Click:</strong> Select and place items from your inventory</li>
          <li><strong className="text-gray-800">Right Click:</strong> Remove or delete objects</li>
          <li><strong className="text-gray-800">Scroll Wheel:</strong> Zoom in and out of the playground</li>
          <li><strong className="text-gray-800">Keyboard Shortcuts:</strong> Quick access to frequently used tools</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-3 text-gray-800">💡 Getting Started Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong className="text-gray-800">Start Simple:</strong> Begin with basic objects to understand the physics</li>
          <li><strong className="text-gray-800">Experiment Freely:</strong> Don't be afraid to try wild combinations</li>
          <li><strong className="text-gray-800">Learn the Tools:</strong> Familiarize yourself with each item's properties</li>
          <li><strong className="text-gray-800">Build Gradually:</strong> Start with simple structures before attempting complex builds</li>
          <li><strong className="text-gray-800">Save Your Work:</strong> Save interesting creations to revisit later</li>
          <li><strong className="text-gray-800">Watch Physics:</strong> Observe how objects interact to improve your designs</li>
          <li><strong className="text-gray-800">Use Precision:</strong> Take advantage of precise placement for detailed work</li>
          <li><strong className="text-gray-800">Combine Elements:</strong> Mix different tools for unique results</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-3 text-gray-800">🏆 Advanced Techniques</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong className="text-gray-800">Chain Reactions:</strong> Create elaborate sequences of events</li>
          <li><strong className="text-gray-800">Mechanical Systems:</strong> Build working machines and contraptions</li>
          <li><strong className="text-gray-800">Physics Puzzles:</strong> Challenge yourself with self-imposed objectives</li>
          <li><strong className="text-gray-800">Artistic Builds:</strong> Create visually impressive structures</li>
          <li><strong className="text-gray-800">Stress Testing:</strong> Push the physics engine to its limits</li>
          <li><strong className="text-gray-800">Scenario Creation:</strong> Design complete scenes and stories</li>
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

