'use client';

import GameDetailTemplate from '../components/GameDetailTemplate';

export default function NoImNotAHumanPage() {
  const game = {
    slug: 'no-im-not-a-human',
    title: 'No, I\'m not a Human',
    subtitle: 'Psychological Horror - Survive the Rising Sun',
    description: 'A first-person survival horror game where you must distinguish real humans from mysterious Visitors trying to infiltrate your shelter as the sun\'s temperature rises.',
    playUrl: 'https://d.ulyagames.com/games/no-im-not-a-human/',
    thumbnail: '/images/thumbnails/no-im-not-a-human.png',
    rating: 4.7,
    playCount: 850,
    tags: ['Horror', 'Survival', 'Puzzle', 'Psychological', 'First-Person', 'Point and Click'],
    backgroundColor: 'from-orange-900 via-red-900 to-black',
  };

  const aboutContent = (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-950 to-red-950 border-l-4 border-orange-600 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-100">
          <strong>No, I'm not a Human</strong> is a gripping first-person survival horror game developed by Trioskaz and published by Critical Reflex. Set in a post-Soviet Russian village, the game presents a unique and terrifying premise: the sun's temperature is rising to catastrophic levels, and you must provide shelter to those seeking refuge. But here's the twist—not everyone seeking shelter is human. Some are Visitors, mysterious creatures that crawl out from underground with unclear and sinister intentions. Your task is to distinguish the real humans from the imposters, provide shelter to the former, and eliminate the latter before they can harm your guests or escape.
        </p>
      </div>

      <div className="bg-gradient-to-r from-red-950 to-orange-950 border-l-4 border-red-600 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-100">
          The game's premise is deceptively simple but profoundly unsettling. Each day, you receive information about specific signs that distinguish Visitors from humans. These signs include perfectly white teeth, dirty fingernails, bloodshot eyes, hairless armpits, black patches in aura photos, insects inside ears, and bleeding gums. Armed with this knowledge, you must examine each guest who arrives at your door, looking for these telltale signs. The tension builds as you realize that making the wrong decision—letting a Visitor in or eliminating an innocent human—has severe consequences. If you fail to eliminate the Visitors, they will kill your human guests. Meanwhile, FEMA (or EMERCOM in the original Russian) periodically visits your house, taking guests away. The balance between survival and morality becomes increasingly precarious as the game progresses.
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-950 to-red-950 border-l-4 border-orange-600 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-100">
          What makes No, I'm not a Human truly exceptional is its atmosphere of psychological dread. The game doesn't rely on jump scares or gore to frighten you—instead, it creates an overwhelming sense of paranoia and uncertainty. Every guest could be a threat. Every decision carries weight. The rising sun becomes a metaphor for the encroaching danger, a constant reminder that time is running out. The game's visual presentation, with its post-Soviet aesthetic and unsettling character designs, reinforces this atmosphere. The Visitors are designed to be subtly wrong, triggering an instinctive sense of unease even before you identify their specific signs. This psychological horror approach makes the game far more effective than traditional jump-scare mechanics.
        </p>
      </div>

      <div className="bg-gradient-to-r from-red-950 to-orange-950 border-l-4 border-red-600 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-100">
          The gameplay mechanics are elegantly designed to support the game's themes. During the day, you examine guests in a dialog interface, checking for the signs you've been told about. An energy bar tracks how many signs you can inspect each day—some consumable items restore energy for additional checks, while others deplete it, allowing you to end the day early and go to bed. This resource management element adds another layer of strategy to your decisions. At night, you choose which guests to let in and can check the windows to observe the surroundings. The game's pacing alternates between tense examination phases and eerie nighttime segments, creating a rhythm that keeps you constantly engaged and anxious about what might happen next.
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-950 to-red-950 border-l-4 border-orange-600 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-100">
          The game features multiple endings, each reflecting the consequences of your choices throughout the game. These endings range from tragic to ambiguous, with no clear "good" ending available. This design choice reinforces the game's themes of moral ambiguity and the impossibility of perfect solutions in impossible situations. The game was first released as part of the "Violent Horror Stories" anthology on Steam on August 7, 2024, and a more polished demo was released separately on June 8, 2025. The developers have continued to refine and improve the game based on player feedback, demonstrating their commitment to delivering the best possible experience.
        </p>
      </div>

      <div className="bg-gradient-to-r from-red-950 to-orange-950 border-l-4 border-red-600 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-100">
          The setting of No, I'm not a Human is particularly significant. The game takes place in post-Soviet Russia, specifically in a village that resembles Sebezh, Russia. This setting grounds the game in a specific cultural and historical context, adding authenticity and depth to the experience. The developers have carefully researched the location, incorporating real architectural elements and cultural details into the game world. This attention to detail extends to the game's mechanics—FEMA in the original Russian version is EMERCOM, a real organization similar to FEMA but with a significant military component. These details create a sense of verisimilitude that makes the game's horror feel more immediate and real.
        </p>
      </div>

      <div className="bg-gradient-to-r from-orange-950 to-red-950 border-l-4 border-orange-600 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-100">
          No, I'm not a Human has garnered significant acclaim from horror enthusiasts and critics alike. The game's unique premise, atmospheric presentation, and psychological depth have resonated with players worldwide. The community has embraced the game enthusiastically, creating fan theories, speedruns, and detailed analyses of the game's mechanics and lore. The developers actively engage with the community, welcoming feedback and suggestions while maintaining the creative vision of the project. This combination of critical acclaim and community support speaks volumes about the quality and impact of No, I'm not a Human as a horror experience.
        </p>
      </div>

      <div className="bg-gradient-to-r from-red-950 to-orange-950 border-l-4 border-red-600 p-6 rounded-lg">
        <p className="text-lg leading-relaxed text-gray-100">
          If you're looking for a horror game that challenges your perceptions, creates genuine psychological tension, and delivers a unique and memorable experience, No, I'm not a Human is an absolute must-play. It's a game that will stay with you long after you've finished playing, prompting reflection on themes of identity, survival, and the nature of humanity itself. The sun is rising, and the Visitors are coming—are you ready to face them?
        </p>
      </div>
    </div>
  );

  const howToPlayContent = (
    <ul className="space-y-4">
      <li className="flex gap-4">
        <span className="text-2xl">☀️</span>
        <div>
          <strong className="text-lg">Understand the Daily Cycle:</strong>
          <p className="text-gray-700 mt-2">Each day begins with information about specific signs that distinguish Visitors from humans. Pay close attention to these signs—they change daily and are crucial to your survival. The sun rises, guests arrive, and you must make life-or-death decisions.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">🔍</span>
        <div>
          <strong className="text-lg">Examine Guests Carefully:</strong>
          <p className="text-gray-700 mt-2">During the day, examine each guest in the dialog interface, checking for the signs you've been told about. Your energy bar limits how many signs you can check, so prioritize wisely. Look for perfectly white teeth, dirty fingernails, bloodshot eyes, hairless armpits, and other telltale signs.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">🏠</span>
        <div>
          <strong className="text-lg">Make Critical Decisions:</strong>
          <p className="text-gray-700 mt-2">After detecting signs, you can point a gun at the guest or hear them out. Choose carefully—eliminating an innocent human has consequences, but letting a Visitor in is even worse. Your decisions shape the narrative and determine which ending you receive.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">🌙</span>
        <div>
          <strong className="text-lg">Survive the Night:</strong>
          <p className="text-gray-700 mt-2">At night, choose which guests to let into your shelter. Check the windows to observe the surroundings and watch for danger. Manage your resources carefully—some consumable items restore energy, while others deplete it. Balance your actions to survive until dawn.</p>
        </div>
      </li>
      <li className="flex gap-4">
        <span className="text-2xl">⚖️</span>
        <div>
          <strong className="text-lg">Navigate Moral Ambiguity:</strong>
          <p className="text-gray-700 mt-2">Remember that there are no perfect solutions. FEMA will take guests away, Visitors will try to infiltrate, and your choices will have lasting consequences. Embrace the moral complexity and see where your decisions lead you.</p>
        </div>
      </li>
    </ul>
  );

  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gradient-to-br from-orange-900 to-red-900 p-6 rounded-lg border border-orange-700">
        <h3 className="text-xl font-bold text-orange-200 mb-3">🎮 Unique Premise</h3>
        <p className="text-gray-200">Distinguish humans from mysterious Visitors in a rising sun scenario with life-or-death consequences.</p>
      </div>
      <div className="bg-gradient-to-br from-red-900 to-orange-900 p-6 rounded-lg border border-red-700">
        <h3 className="text-xl font-bold text-red-200 mb-3">🧠 Psychological Horror</h3>
        <p className="text-gray-200">Experience genuine psychological tension through atmosphere and moral ambiguity rather than jump scares.</p>
      </div>
      <div className="bg-gradient-to-br from-orange-900 to-red-900 p-6 rounded-lg border border-orange-700">
        <h3 className="text-xl font-bold text-orange-200 mb-3">🌍 Authentic Setting</h3>
        <p className="text-gray-200">Immerse yourself in post-Soviet Russia with carefully researched locations and cultural details.</p>
      </div>
      <div className="bg-gradient-to-br from-red-900 to-orange-900 p-6 rounded-lg border border-red-700">
        <h3 className="text-xl font-bold text-red-200 mb-3">🎯 Multiple Endings</h3>
        <p className="text-gray-200">Experience different endings based on your choices, each reflecting the consequences of your decisions.</p>
      </div>
      <div className="bg-gradient-to-br from-orange-900 to-red-900 p-6 rounded-lg border border-orange-700">
        <h3 className="text-xl font-bold text-orange-200 mb-3">⚡ Resource Management</h3>
        <p className="text-gray-200">Manage your energy bar and consumable items strategically to maximize your chances of survival.</p>
      </div>
      <div className="bg-gradient-to-br from-red-900 to-orange-900 p-6 rounded-lg border border-red-700">
        <h3 className="text-xl font-bold text-red-200 mb-3">🎨 Atmospheric Design</h3>
        <p className="text-gray-200">Enjoy carefully crafted visuals and sound design that create an overwhelming sense of dread and paranoia.</p>
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

