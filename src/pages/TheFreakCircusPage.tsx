'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function TheFreakCircusPage() {
  const game = {
    slug: 'the-freak-circus',
    title: 'The Freak Circus',
    subtitle: '18+ Yandere Visual Novel - A Dark Tale of Obsession',
    description: 'The Freak Circus is a mature visual novel featuring dark themes, yandere characters, and a twisted narrative set in a mysterious circus of horrors.',
    playUrl: 'https://html-classic.itch.zone/html/14081436/index.html',
    thumbnail: '/images/thumbnails/the-freak-circus.jpg',
    rating: 4.9,
    playCount: 2514,
    tags: ['Visual Novel', 'Horror', 'Dark', 'Yandere', 'Dating Sim', 'Creepy'],
    backgroundColor: 'from-red-900 via-purple-900 to-black',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-950 to-purple-950 border-l-4 border-red-600 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-100">
          <strong>The Freak Circus</strong> is a captivating 18+ visual novel that plunges you into a world of mystery, obsession, and dark intrigue. The game presents a unique narrative experience where you encounter two compelling characters: Pierrot, the silent yandere with an all-consuming obsession, and Harlequin, his seductive and dangerous rival. This is not your typical dating simulator—it's a psychological thriller wrapped in the haunting atmosphere of a circus that has arrived in town, bringing with it secrets and terrors that will challenge your perceptions of love and sanity.
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-950 to-red-950 border-l-4 border-purple-600 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-100">
          The story begins innocuously enough—you work at a café, living an ordinary life. But fate has other plans. One fateful day on your way to work, you cross paths with Pierrot, a mysterious figure whose presence will forever change your life. What starts as a chance encounter quickly evolves into an obsession. Pierrot becomes fixated on you, his silent demeanor hiding depths of emotion and intention that are both alluring and terrifying. However, you're not alone in catching his attention. Harlequin, Pierrot's stage rival, decides to join this twisted game, transforming what could have been a simple romance into a dangerous competition—all for you. The tension between these two characters creates a dynamic that keeps you constantly on edge, never quite sure who to trust or what their true intentions might be.
        </p>
      </div>

      <div className="bg-gradient-to-r from-red-950 to-purple-950 border-l-4 border-red-600 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-100">
          What makes The Freak Circus truly special is its commitment to creating an atmosphere of genuine unease and psychological depth. The game doesn't shy away from dark themes—it embraces them. Screen shaking effects, blood, death, and murder are woven into the narrative fabric. There are allusions to cannibalism, abuse, kidnapping, and non-consensual drug use. Strong language permeates the dialogue, and light gore is depicted without censorship. These elements aren't gratuitous; they serve to reinforce the game's core themes of obsession, danger, and the blurred lines between love and madness. The content warnings are there for a reason—this is a game for mature audiences who appreciate psychological horror and complex character dynamics.
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-950 to-red-950 border-l-4 border-purple-600 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-100">
          The visual presentation of The Freak Circus is stunning. The game features original artwork and backgrounds that create an immersive and haunting aesthetic. Every scene is carefully crafted to evoke emotion and tension. The character designs are memorable and distinctive, with Pierrot and Harlequin standing out as particularly well-realized characters. The circus setting itself becomes a character in the narrative, with its mysterious and unsettling atmosphere permeating every interaction. The art style perfectly complements the dark themes, creating a cohesive and compelling visual experience that draws you deeper into the story with each passing moment.
        </p>
      </div>

      <div className="bg-gradient-to-r from-red-950 to-purple-950 border-l-4 border-red-600 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-100">
          The narrative structure of The Freak Circus is designed to keep you engaged and guessing. Currently, the game features one bad ending and three open endings, each providing different perspectives on the twisted relationships at play. The script is still a work in progress, with the developer actively working on expanding the story. After finishing the current version, the narrative continues for one more in-game day, which is still in development. This means the game is constantly evolving, with new content being added regularly. The developer has announced plans for Pierrot's ending, Harlequin's ending, and the protagonist's ending, promising even more depth and complexity to the narrative as development continues.
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-950 to-red-950 border-l-4 border-purple-600 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-100">
          The game supports multiple languages, including English, Portuguese (BR), and Chinese, making it accessible to a global audience. This multilingual support demonstrates the developer's commitment to reaching players worldwide and ensuring that the nuanced dialogue and emotional depth of the narrative can be appreciated regardless of language preference. The translations are handled with care, preserving the original intent and emotional impact of the story. Whether you're playing in your native language or exploring the game in a different tongue, The Freak Circus delivers a consistent and compelling experience.
        </p>
      </div>

      <div className="bg-gradient-to-r from-red-950 to-purple-950 border-l-4 border-red-600 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-100">
          The Freak Circus has garnered significant acclaim from players worldwide, with a rating of 4.9 out of 5 stars from over 2,500 ratings. Players consistently praise the game's writing, character development, and atmospheric presentation. The community has embraced the game enthusiastically, creating fanart, fanfiction, and gameplay videos. The developer actively engages with the community, welcoming feedback and suggestions while maintaining the creative vision of the project. This combination of critical acclaim and community support speaks volumes about the quality and impact of The Freak Circus as a visual novel experience.
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-950 to-red-950 border-l-4 border-purple-600 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-100">
          If you're looking for a visual novel that challenges conventions, explores dark themes with nuance, and delivers compelling character-driven storytelling, The Freak Circus is an absolute must-play. It's a game that will stay with you long after you've finished playing, prompting reflection on themes of obsession, love, and the nature of human connection. The circus has arrived in town—are you ready to uncover its secrets and face the terror it hides?
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <ul className="space-y-4">
      <li className="flex gap-4">
        <span className="text-2xl">🎭</span>
        <div>
          <strong className="text-lg">Meet the Characters:</strong>
          <p className="text-gray-700 mt-2">Begin your journey by encountering Pierrot and Harlequin. Pay attention to their dialogue and actions—they reveal much about their true nature and intentions. Your interactions with them will shape the course of the narrative.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">🔍</span>
        <div>
          <strong className="text-lg">Uncover the Circus Secrets:</strong>
          <p className="text-gray-700 mt-2">Explore the mysterious circus and investigate its dark secrets. The environment holds clues about what's really happening and what the characters truly want. Pay attention to details and environmental storytelling.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">💭</span>
        <div>
          <strong className="text-lg">Make Meaningful Choices:</strong>
          <p className="text-gray-700 mt-2">Your decisions throughout the game will determine which ending you receive. Choose carefully—some choices may seem innocent but have significant consequences. The game rewards thoughtful decision-making.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">⚠️</span>
        <div>
          <strong className="text-lg">Prepare for Dark Content:</strong>
          <p className="text-gray-700 mt-2">This is a mature game with dark themes. Be prepared for psychological horror elements, disturbing imagery, and morally complex situations. The game doesn't hold back in its presentation of difficult subject matter.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">🎬</span>
        <div>
          <strong className="text-lg">Experience Multiple Endings:</strong>
          <p className="text-gray-700 mt-2">Play through the game multiple times to experience different endings. Each playthrough may reveal new information and perspectives on the characters and their motivations.</p>
        </div>
      </li>
    </ul>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-red-900 to-red-950 p-6 rounded-lg border-l-4 border-red-600">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🎭</span>
          <h4 className="text-lg font-bold text-gray-100">Compelling Characters</h4>
        </div>
        <p className="text-gray-300">Pierrot and Harlequin are complex, well-developed characters with depth and nuance that evolve throughout the narrative</p>
      </div>

      <div className="bg-gradient-to-br from-purple-900 to-purple-950 p-6 rounded-lg border-l-4 border-purple-600">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🎨</span>
          <h4 className="text-lg font-bold text-gray-100">Original Artwork</h4>
        </div>
        <p className="text-gray-300">Stunning original artwork and backgrounds create an immersive and haunting visual experience</p>
      </div>

      <div className="bg-gradient-to-br from-red-900 to-red-950 p-6 rounded-lg border-l-4 border-red-600">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🌙</span>
          <h4 className="text-lg font-bold text-gray-100">Dark Atmosphere</h4>
        </div>
        <p className="text-gray-300">A pervasive sense of unease and psychological tension that keeps you engaged throughout the experience</p>
      </div>

      <div className="bg-gradient-to-br from-purple-900 to-purple-950 p-6 rounded-lg border-l-4 border-purple-600">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">📖</span>
          <h4 className="text-lg font-bold text-gray-100">Rich Narrative</h4>
        </div>
        <p className="text-gray-300">A complex and engaging story with multiple endings that reward careful decision-making</p>
      </div>

      <div className="bg-gradient-to-br from-red-900 to-red-950 p-6 rounded-lg border-l-4 border-red-600">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🌍</span>
          <h4 className="text-lg font-bold text-gray-100">Multilingual Support</h4>
        </div>
        <p className="text-gray-300">Available in English, Portuguese (BR), and Chinese for a global audience</p>
      </div>

      <div className="bg-gradient-to-br from-purple-900 to-purple-950 p-6 rounded-lg border-l-4 border-purple-600">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🎬</span>
          <h4 className="text-lg font-bold text-gray-100">Multiple Endings</h4>
        </div>
        <p className="text-gray-300">Experience different story conclusions based on your choices and decisions throughout the game</p>
      </div>

      <div className="bg-gradient-to-br from-red-900 to-red-950 p-6 rounded-lg border-l-4 border-red-600">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">⚡</span>
          <h4 className="text-lg font-bold text-gray-100">Psychological Depth</h4>
        </div>
        <p className="text-gray-300">Explores complex themes of obsession, love, and the nature of human connection</p>
      </div>

      <div className="bg-gradient-to-br from-purple-900 to-purple-950 p-6 rounded-lg border-l-4 border-purple-600">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🎪</span>
          <h4 className="text-lg font-bold text-gray-100">Circus Setting</h4>
        </div>
        <p className="text-gray-300">A mysterious and unsettling circus environment that serves as the perfect backdrop for this dark tale</p>
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

