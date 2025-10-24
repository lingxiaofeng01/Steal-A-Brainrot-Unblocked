import GameDetailTemplate from '../components/GameDetailTemplate';

export default function TakeCareOfShadowMilkPage() {
  const game = {
    slug: 'take-care-of-shadow-milk',
    title: 'Take Care Of Shadow Milk',
    subtitle: 'The Ultimate Virtual Pet Simulator - Cookie Run Edition',
    description: 'Meet Shadow Milk Cookie—not as the eerie figure from Cookie Run: Kingdom, but a cute, quirky virtual pet that you should take care of. Want a new casual cozy game? It\'s time to give Take Care of Shadow Milk a try; spend a few minutes with him, have fun, and enjoy relaxing moments.',
    playUrl: 'https://scratch.mit.edu/projects/1206876997/embed',
    thumbnail: '/images/thumbnails/take-care-of-shadow-milk.png',
    rating: 4.5,
    playCount: 593,
    tags: ['Scratch', 'Simulation', 'Pet', 'Casual', 'Virtual Pet', 'Cookie Run'],
    backgroundColor: 'from-purple-400 via-pink-400 to-indigo-400',
  };

  const aboutContent = (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🍪 What is Take Care of Shadow Milk?</h3>
        <p className="mb-4">
          Take Care of Shadow Milk is a fun, casual <strong>virtual pet simulator</strong> developed on the Scratch platform. 
          Initially released around August 2025, it has quickly gained popularity on the TikTok platform, capturing the hearts 
          of Cookie Run fans and virtual pet enthusiasts alike.
        </p>
        <p className="mb-4">
          The game centers around <strong>Shadow Milk Cookie</strong>, a beloved character from Cookie Run: Kingdom. Your major 
          goal is to interact with him through activities like feeding, bathing, playing with, and more—or, well, you can choose 
          to play pranks; it's up to you! There are no strict rules or consequences; Shadow Milk Cookie simply responds to the 
          way you care for him.
        </p>
        <p>
          He's happy when you treat him well, so care for his <strong>health, energy, hunger, and hygiene</strong>. This charming 
          virtual pet game offers a relaxing escape where you can bond with Shadow Milk Cookie through simple yet engaging interactions.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎮 Game Features & Highlights</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Simple, Relaxing Gameplay:</strong> Doesn't demand too much time—perfect for quick breaks or casual gaming sessions</li>
          <li><strong>Emotional Bonding:</strong> Players form a genuine bond with their Shadow Milk through basic interactions like feeding, cleaning, playing, and keeping it happy</li>
          <li><strong>Reactive Character:</strong> Shadow Milk reacts to players' actions with different facial expressions and sound effects, making every interaction feel meaningful</li>
          <li><strong>Cute, Quirky Design:</strong> Features an adorable main character with minimalist visual graphics that are easy on the eyes</li>
          <li><strong>No Pressure Gameplay:</strong> No winning, ending, or losing—just cozy vibes and the character's emotional feedback</li>
          <li><strong>Fan-Made Love:</strong> Created by passionate Cookie Run fans for the community</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🏠 Two Rooms to Explore</h3>
        <p className="mb-4">
          The game includes <strong>two rooms</strong>: the main room and the bedroom, where you take care of Shadow Milk's needs. 
          Each room serves different purposes:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Main Room:</strong> Where most activities happen—feeding, playing, and general interaction</li>
          <li><strong>Bedroom:</strong> A cozy space for Shadow Milk to rest and recover energy</li>
        </ul>
        <p className="mt-4">
          Navigate between these rooms to ensure all of Shadow Milk's needs are met throughout the day!
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">💖 Why Take Care of Shadow Milk is Hugely Popular</h3>
        <p className="mb-4">
          Since its release, Take Care of Shadow Milk has become a viral sensation, especially on TikTok. Here's why players 
          can't get enough of this adorable virtual pet:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Nostalgia Factor:</strong> Brings back memories of classic virtual pet games like Tamagotchi</li>
          <li><strong>Cookie Run Connection:</strong> Appeals to the massive Cookie Run: Kingdom fanbase</li>
          <li><strong>Stress Relief:</strong> Provides a calming, therapeutic gaming experience</li>
          <li><strong>Social Sharing:</strong> Players love sharing their Shadow Milk's reactions on social media</li>
          <li><strong>Accessibility:</strong> Free to play, browser-based, and requires no downloads</li>
          <li><strong>Quick Sessions:</strong> Perfect for short gaming breaks throughout the day</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Game Developer & Platform</h3>
        <p className="mb-4">
          <strong>Developer:</strong> GPE_sb3 (a talented Scratch community creator)
        </p>
        <p className="mb-4">
          <strong>Platform:</strong> Scratch - a free programming language and online community where you can create your own 
          interactive stories, games, and animations. Scratch is developed by the MIT Media Lab and is designed to help young 
          people learn to think creatively, reason systematically, and work collaboratively.
        </p>
        <p>
          The Scratch platform makes Take Care of Shadow Milk accessible to everyone with a web browser, ensuring that players 
          worldwide can enjoy this delightful virtual pet experience without any barriers.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🌟 Perfect For</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Cookie Run: Kingdom fans who want to interact with Shadow Milk Cookie in a new way</li>
          <li>Virtual pet enthusiasts looking for a modern take on classic pet simulators</li>
          <li>Casual gamers seeking relaxing, low-pressure gameplay</li>
          <li>Players who enjoy character-driven experiences with emotional feedback</li>
          <li>Anyone looking for a cute, stress-free gaming break</li>
          <li>Fans of Scratch games and community-created content</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-300">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">⚠️ Important Note</h3>
        <p className="mb-3">
          <strong>Is this an official Cookie Run game?</strong>
        </p>
        <p>
          No. Take Care of Shadow Milk is a <strong>fan-made project</strong> centered around Shadow Milk Cookie, a character 
          from the official Cookie Run: Kingdom game. It is not affiliated with Devsisters or any official Cookie Run organizations. 
          This is an independent creation made by fans, for fans, celebrating the beloved character in a new interactive format.
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <div className="space-y-6 text-gray-700 leading-relaxed">
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎮 How to Take Care of Your Own Shadow Milk</h3>
        <p className="mb-4">
          It's super simple and easy to interact with and care for Shadow Milk Cookie. Most actions are done by clicking or 
          tapping. The game includes two rooms: the main room and the bedroom, where you take care of his needs, like hunger, 
          energy, mood, and health.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">💚 Keep Shadow Milk Cookie Happy</h3>
        <p className="mb-4">
          You need to pay close attention to <strong>4 icons</strong> that present his status:
        </p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>
            <strong>⚡ Energy:</strong> When Shadow Milk gets tired, take him to the bedroom to rest. A well-rested cookie is a happy cookie!
          </li>
          <li>
            <strong>🛁 Hygiene:</strong> Keep Shadow Milk clean by giving him regular baths. Nobody likes a dirty cookie!
          </li>
          <li>
            <strong>🍪 Hunger:</strong> Feed Shadow Milk when he's hungry. Choose from various food options to keep him satisfied.
          </li>
          <li>
            <strong>😊 Mood:</strong> Play with Shadow Milk, give him attention, and interact positively to maintain his happiness.
          </li>
        </ul>
        <p className="mt-4">
          <strong>When the icon turns red</strong>, it's time to take action! Help him rest (to recover energy), clean up, eat, 
          or play to keep him happy and healthy. The game provides clear visual feedback, so you'll always know what Shadow Milk needs.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">⚠️ Avoid Neglect</h3>
        <p className="mb-4">
          Shadow Milk can quickly become sad or even angry if ignored for too long. You will see:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>His health drop significantly</li>
          <li>Happiness decrease rapidly</li>
          <li>Negative facial expressions and reactions</li>
          <li>Sad or crying animations</li>
        </ul>
        <p className="mt-4">
          <strong>But don't worry!</strong> Shadow Milk can quickly become happy again if you take better care of him. He's 
          sensitive, but he forgives fast! This forgiving nature makes the game accessible and enjoyable for all players, 
          regardless of how much time they can dedicate to it.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Basic Controls & Interactions</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Click/Tap:</strong> Primary interaction method for all activities</li>
          <li><strong>Feed:</strong> Click on food items to feed Shadow Milk</li>
          <li><strong>Bathe:</strong> Click on the bath icon to clean Shadow Milk</li>
          <li><strong>Play:</strong> Click on toys or games to play with Shadow Milk</li>
          <li><strong>Rest:</strong> Move Shadow Milk to the bedroom when he needs sleep</li>
          <li><strong>Room Navigation:</strong> Click on room icons to switch between main room and bedroom</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Pro Tips for Best Care</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Check on Shadow Milk regularly to prevent any stats from dropping too low</li>
          <li>Balance all four needs—don't focus on just one aspect</li>
          <li>Experiment with different foods and activities to see Shadow Milk's reactions</li>
          <li>Pay attention to his facial expressions for clues about what he needs</li>
          <li>Don't let him cry too much—it affects his overall happiness</li>
          <li>Visit both rooms regularly to keep the environment fresh</li>
        </ul>
      </div>
    </div>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { icon: '🍪', title: 'Virtual Pet Care', desc: 'Feed, bathe, and nurture Shadow Milk Cookie' },
        { icon: '😊', title: 'Emotional Reactions', desc: 'Watch Shadow Milk respond with unique expressions' },
        { icon: '🏠', title: 'Two Rooms', desc: 'Main room and bedroom for different activities' },
        { icon: '💖', title: 'No Pressure', desc: 'Casual gameplay with no strict rules or time limits' },
        { icon: '🎨', title: 'Cute Graphics', desc: 'Minimalist design with adorable character art' },
        { icon: '🎮', title: 'Easy Controls', desc: 'Simple click/tap interface for all ages' },
        { icon: '🔄', title: 'Forgiving System', desc: 'Shadow Milk forgives quickly if neglected' },
        { icon: '🌟', title: 'Free to Play', desc: 'Completely free browser-based game' },
      ].map((feature, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow-md border-2 border-purple-200">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{feature.icon}</span>
            <div>
              <h4 className="font-bold text-gray-800">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          </div>
        </div>
      ))}
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

