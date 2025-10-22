'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Maximize, ExternalLink, Star, MessageCircle } from 'lucide-react';
import GamePreview from '../components/GamePreview';
import StarRating from '../components/StarRating';
import NewBadge from '../components/NewBadge';
import Comments from '../components/Comments';
import { isRealGame } from '../data/games';
import { getAllGames, getRelatedGames } from '../utils/gameUtils';
import { HOME_PAGE_FAQS } from '../config/gameFAQs';
import { generateFAQSchema } from '../config/seo';

export default function HomePage() {
  const [showGame, setShowGame] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Inject FAQ Schema for SEO
  useEffect(() => {
    if (typeof document === 'undefined') return;

    try {
      const schema = generateFAQSchema(HOME_PAGE_FAQS);

      let scriptElement = document.querySelector('script[type="application/ld+json"][data-faq="true"]');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        scriptElement.setAttribute('data-faq', 'true');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schema);
    } catch (error) {
      console.error('Error injecting FAQ schema:', error);
    }
  }, []);

  const gameData = {
    slug: 'steal-a-brainrot-unblocked',
    title: 'Steal A Brainrot Unblocked',
    description: "Steal A Brainrot Unblocked isn't just another quirky indie game—it's a full-on barnyard brawl of brains, reflexes, and explosive sheep mayhem. This fast-paced survival ...",
    thumbnail: '/images/thumbnails/steal-a-brainrot-unblocked.webp',
    playUrl: 'https://st.8games.net/9/8g/igra-ukradi-brejnrot-original-3d/',
    backgroundColor: 'from-orange-400 via-orange-300 to-orange-200',
    tags: ['3D', 'Multiplayer', 'Idle', 'Unblocked', 'Brainrot', 'Strategy']
  };

  const gameUrl = gameData.playUrl;

  const handlePlayClick = () => {
    setShowGame(true);
  };

  const handleFullscreen = () => {
    const container = document.getElementById('game-container');
    if (!document.fullscreenElement && container) {
      container.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <>
      {/* Full Screen Game Hero */}
      <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 relative bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Blurred Background - Gaming themed - 优化版本 */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 hero-background blur-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=1080&fit=crop&q=75)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            contentVisibility: 'auto',
            willChange: 'transform',
          }}
          role="presentation"
          aria-hidden="true"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-purple-600/20" />

        {/* Game Card */}
        <div className="relative z-10 w-full max-w-6xl">
          {!showGame ? (
            /* Game Preview Card */
            <div>
              <GamePreview
                title={gameData.title}
                description={gameData.description}
                thumbnail={gameData.thumbnail}
                onPlayClick={handlePlayClick}
                backgroundColor={gameData.backgroundColor}
              />
            </div>
          ) : (
            /* Game Player */
            <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border-4 border-cyan-400">
              <div id="game-container" className="relative aspect-video bg-black">
                <iframe
                  src={gameUrl}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Steal a Brainrot Unblocked"
                />
              </div>

              {/* Bottom Bar */}
              <div className="bg-gray-800/95 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                    <Star className="w-5 h-5 text-gray-500 fill-gray-500" />
                  </div>
                  <span className="text-white font-bold text-lg">3.5</span>
                </div>

                <div className="flex gap-3">
                  <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors" title="Comments">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={handleFullscreen}
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                    title="Fullscreen"
                  >
                    <Maximize className="w-5 h-5 text-white" />
                  </button>
                  <a
                    href={gameUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Section - Below the fold */}
      <div className="bg-white">
        {/* Game Title & Description */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-br from-orange-200 via-amber-100 to-orange-200 rounded-2xl p-8 shadow-lg border-4 border-cyan-400">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="/images/thumbnails/steal-a-brainrot-unblocked.webp"
                    alt="Steal a Brainrot Unblocked - Free Online Multiplayer Game"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    quality={80}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                  Steal a Brainrot Unblocked | Play Online for Free
                </h1>
                <div className="mb-4">
                  <StarRating gameSlug={gameData.slug} />
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dive into the chaotic, fun-filled world of Steal a Brainrot! Collect viral meme characters,
                  build your empire, and steal from other players in this ultimate 3D idle heist adventure.
                  Originally a hit on Roblox, now available unblocked in your browser - no downloads required!
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold">3D Game</span>
                  <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">Multiplayer</span>
                  <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-semibold">Idle Game</span>
                  <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-semibold">Unblocked</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Games Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
          <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-4 mb-6 border-2 border-orange-300">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span className="text-3xl">🎯</span>
              Play Similar Games
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {getRelatedGames(gameData.slug, gameData.tags, 12).map((game, i) => (
              <a
                key={i}
                href={isRealGame(game) ? `/${game.slug}` : '#'}
                className="group cursor-pointer block"
                onClick={(e) => !isRealGame(game) && e.preventDefault()}
              >
                <div className={`relative aspect-square rounded-xl overflow-hidden border-3 border-gray-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl ${isRealGame(game) ? 'bg-white' : `bg-gradient-to-br ${game.color}`}`}>
                  {isRealGame(game) ? (
                    <>
                      {game.releaseDate && <NewBadge releaseDate={game.releaseDate} />}
                      <Image
                        src={game.image}
                        alt={game.name}
                        width={150}
                        height={150}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        quality={70}
                      />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl md:text-5xl">
                      {game.emoji}
                    </div>
                  )}
                </div>
                <p className="text-center text-sm font-semibold text-gray-700 mt-2 truncate">{game.name}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Game Details Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
          <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              About Steal a Brainrot Unblocked
            </h2>

            <div className="prose max-w-none text-gray-700 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">What is Steal a Brainrot Unblocked?</h3>
                <p className="leading-relaxed">
                  <strong>Steal a Brainrot Unblocked</strong> is an innovative 3D idle heist game that brings the viral sensation from Roblox directly to your browser. This unblocked version of Steal a Brainrot allows you to play anywhere, anytime, without any restrictions or downloads required. In this chaotic multiplayer world, your main objective is to collect as many Brainrot meme characters as possible to generate massive passive income streams. Each character, from the charming <strong>Tralalero Tralala</strong> to the chaotic <strong>Capuchino Assassino</strong>, automatically generates money for you as long as they are in your base, creating a continuous revenue system even when you're offline.
                </p>
                <p className="leading-relaxed mt-4">
                  <strong>Steal a Brainrot</strong> combines the addictive mechanics of idle games with the competitive thrill of multiplayer gameplay. Unlike traditional idle games, this unblocked game adds a unique stealing mechanic where you can raid other players' bases to steal their valuable Brainrot characters. The game's popularity has skyrocketed due to its hilarious meme characters, engaging gameplay loop, and the perfect balance between passive income generation and active player interaction. Whether you're looking for a casual idle game to play at school or work, or a competitive multiplayer experience, Steal a Brainrot Unblocked delivers on all fronts.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">How to Play Steal a Brainrot Unblocked</h3>
                <p className="leading-relaxed mb-4">
                  Getting started with Steal a Brainrot Unblocked is incredibly simple. Since this is an unblocked game, you can jump right in without any installation or registration. The gameplay loop is intuitive yet deeply engaging, making it perfect for both casual players and hardcore gamers. Your journey in Steal a Brainrot begins with a simple premise: collect Brainrot characters to generate passive income, then use that income to buy more characters and expand your collection.
                </p>
                <div className="bg-white rounded-xl p-6 border-2 border-cyan-400 mb-4">
                  <h4 className="font-bold text-lg mb-3">🎮 Basic Controls for Steal a Brainrot:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="px-3 py-1 bg-cyan-500 text-white rounded font-mono text-sm font-bold">WASD</span>
                      <span><strong>Movement:</strong> Use these keys to navigate around the map in Steal a Brainrot Unblocked. Explore different areas to find new characters and discover hidden opportunities.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="px-3 py-1 bg-cyan-500 text-white rounded font-mono text-sm font-bold">E</span>
                      <span><strong>Interact:</strong> Press E to buy new Brainrot characters from the belt or pick up stolen characters from other players' bases. This is the core action in Steal a Brainrot.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="px-3 py-1 bg-cyan-500 text-white rounded font-mono text-sm font-bold">Mouse</span>
                      <span><strong>Camera Control:</strong> Use your mouse to rotate the camera and get a better view of your surroundings in this 3D unblocked game.</span>
                    </li>
                  </ul>
                </div>
                <p className="leading-relaxed">
                  The strategy in Steal a Brainrot Unblocked involves deciding which characters to collect, when to upgrade your base defense, and when to raid other players. Early game focuses on building your initial collection, while mid-game involves strategic stealing and base defense upgrades. Advanced players master the art of timing their raids to maximize profits while minimizing losses from other players' attacks.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Key Features of Steal a Brainrot Unblocked</h3>
                <p className="leading-relaxed mb-4">
                  Steal a Brainrot Unblocked stands out in the crowded idle game market with its unique combination of features. This unblocked game offers a perfect blend of passive income mechanics, competitive multiplayer elements, and hilarious meme culture that keeps players coming back for more.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                    <h4 className="font-bold text-lg mb-2">💰 Passive Income System</h4>
                    <p>In Steal a Brainrot, your collected characters work for you automatically, creating a steady stream of money even when you're not actively playing. This core feature of the unblocked game allows you to progress while offline, making it perfect for busy players who want to enjoy an idle game without constant engagement.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                    <h4 className="font-bold text-lg mb-2">🌟 7 Rarity Tiers</h4>
                    <p>Steal a Brainrot features seven distinct rarity levels: Common, Rare, Epic, Legendary, Mythic, Brainrot God, and Secret. Each tier in this unblocked game offers exponentially higher income potential. Collecting higher rarity Brainrot characters is the key to dominating the game and achieving massive wealth.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-orange-300">
                    <h4 className="font-bold text-lg mb-2">🎯 Stealing Mechanic</h4>
                    <p>What makes Steal a Brainrot Unblocked truly unique is the ability to raid other players' bases and steal their prized Brainrot characters. This competitive element adds thrilling PvP gameplay to the idle game formula. High risk, high reward raids keep the game exciting and unpredictable.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                    <h4 className="font-bold text-lg mb-2">🛡️ Base Defense System</h4>
                    <p>Protect your valuable Brainrot collection from other players trying to steal from you. In Steal a Brainrot, strategic base defense upgrades are crucial. Invest in defensive structures to safeguard your wealth and maintain your position on the leaderboard in this unblocked game.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                    <h4 className="font-bold text-lg mb-2">🎨 Hilarious Meme Characters</h4>
                    <p>Steal a Brainrot Unblocked features dozens of viral meme characters that bring humor and personality to the game. From Tralalero Tralala to Capuchino Assassino, each character has unique charm. Collecting these meme characters is not just profitable—it's entertaining!</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-indigo-300">
                    <h4 className="font-bold text-lg mb-2">📱 Cross-Platform Unblocked Access</h4>
                    <p>Play Steal a Brainrot Unblocked anywhere—at school, work, or home. This unblocked game works on any device with a browser. No downloads, no installations, no restrictions. Pure gaming freedom with Steal a Brainrot.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Popular Brainrot Characters in Steal a Brainrot Unblocked</h3>
                <p className="leading-relaxed mb-4">
                  One of the main reasons Steal a Brainrot Unblocked has become so popular is its collection of hilarious and memorable meme characters. Each character in this unblocked game has unique income potential and personality. Building your collection of Brainrot characters is the core gameplay loop that keeps players engaged. Here are some of the most sought-after characters in Steal a Brainrot:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {[
                    { name: 'Tralalero Tralala', emoji: '🎪' },
                    { name: 'Capuchino Assassino', emoji: '☕' },
                    { name: 'Las Capuchinas', emoji: '👗' },
                    { name: 'Boneca Ambalabu', emoji: '🎀' },
                    { name: 'Bananita Dolphinita', emoji: '🐬' },
                    { name: 'Perochello Lemonchello', emoji: '🍋' },
                    { name: 'Tirilikalika', emoji: '🎵' },
                    { name: 'And Many More!', emoji: '✨' },
                  ].map((char, i) => (
                    <div key={i} className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-3 text-center border-2 border-purple-300">
                      <div className="text-3xl mb-1">{char.emoji}</div>
                      <div className="font-semibold text-sm">{char.name}</div>
                    </div>
                  ))}
                </div>
                <p className="leading-relaxed">
                  Each character in Steal a Brainrot Unblocked brings its own charm and income potential. The rarity of each character determines how much passive income they generate. Legendary and Mythic tier characters are highly sought after in this unblocked game, as they provide massive income boosts. The humor and personality of these Brainrot characters make collecting them addictive and entertaining, transforming Steal a Brainrot from a simple idle game into a cultural phenomenon.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Frequently Asked Questions About Steal a Brainrot Unblocked</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-cyan-400">
                    <h4 className="font-bold text-lg mb-2">Is Steal a Brainrot Unblocked really free to play?</h4>
                    <p>Absolutely! Steal a Brainrot Unblocked is completely free with no hidden costs or premium paywalls. There are no downloads required—simply visit our site and start playing this unblocked game instantly in your browser. No registration, no credit card, no strings attached. This is the true unblocked version of Steal a Brainrot.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                    <h4 className="font-bold text-lg mb-2">Can I play Steal a Brainrot Unblocked at school or work?</h4>
                    <p>Yes! This is the unblocked version of Steal a Brainrot, specifically designed to be accessible from anywhere without restrictions. Whether you're at school, work, or any location with internet access, you can play Steal a Brainrot Unblocked without worrying about network filters or firewalls. The unblocked nature of this game makes it perfect for quick gaming sessions during breaks.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                    <h4 className="font-bold text-lg mb-2">How do I steal from other players in Steal a Brainrot?</h4>
                    <p>Raiding other players is one of the most exciting features of Steal a Brainrot Unblocked. Navigate to another player's base using the map, press E to grab their Brainrot characters, then run it back to your spawn zone to complete the theft. Be strategic—other players can defend their bases, so timing and planning are crucial in Steal a Brainrot.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-400">
                    <h4 className="font-bold text-lg mb-2">What makes Steal a Brainrot Unblocked different from other idle games?</h4>
                    <p>Steal a Brainrot Unblocked combines the addictive passive income mechanics of idle games with competitive multiplayer PvP gameplay. Unlike traditional idle games, this unblocked game lets you raid other players' bases and steal their characters. The hilarious meme characters, strategic depth, and the ability to play anywhere make Steal a Brainrot Unblocked unique in the gaming landscape.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-orange-400">
                    <h4 className="font-bold text-lg mb-2">Do I need to download anything to play Steal a Brainrot Unblocked?</h4>
                    <p>No downloads required! Steal a Brainrot Unblocked is a browser-based unblocked game that runs directly in your web browser. Simply click play and start enjoying Steal a Brainrot instantly. This makes it perfect for playing on school computers, work devices, or any device where you can't install software.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-red-400">
                    <h4 className="font-bold text-lg mb-2">Is Steal a Brainrot Unblocked safe to play?</h4>
                    <p>Yes, Steal a Brainrot Unblocked is completely safe. This unblocked game contains no malware, viruses, or harmful content. We prioritize player safety and security. The game is designed for all ages and provides a fun, secure gaming experience. Play Steal a Brainrot Unblocked with confidence.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Why Play Steal a Brainrot Unblocked?</h3>
                <p className="leading-relaxed mb-4">
                  Steal a Brainrot Unblocked has captured the hearts of millions of players worldwide. Here's why this unblocked game stands out:
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <strong>Completely Free & Unblocked:</strong> Play Steal a Brainrot Unblocked without any restrictions. No paywalls, no ads interrupting gameplay, just pure gaming fun. This unblocked version is accessible from anywhere.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <strong>Addictive Gameplay Loop:</strong> Steal a Brainrot combines the best of idle games with competitive multiplayer. The passive income system keeps you engaged even when you're not actively playing, while the stealing mechanic adds thrilling PvP moments.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <strong>Hilarious Meme Culture:</strong> Steal a Brainrot Unblocked features dozens of viral meme characters that bring humor and personality to the game. Collecting these characters is entertaining and rewarding.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <strong>Strategic Depth:</strong> While Steal a Brainrot is easy to learn, it offers significant strategic depth. Decide which characters to collect, when to upgrade defenses, and when to raid other players. Every decision matters in this unblocked game.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <strong>Play Anywhere, Anytime:</strong> Steal a Brainrot Unblocked works on any device with a browser. Play at school, work, home, or on the go. No downloads, no installations—just instant gaming access to this unblocked game.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <strong>Active Community:</strong> Join thousands of players enjoying Steal a Brainrot Unblocked. Compete on leaderboards, share strategies, and experience the vibrant community around this unblocked game.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <strong>Regular Updates:</strong> Steal a Brainrot Unblocked is constantly evolving with new characters, features, and balance changes. The developers actively listen to the community and improve the unblocked game regularly.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Get Started with Steal a Brainrot Unblocked Today</h2>
                <p className="leading-relaxed">
                  Ready to join the Steal a Brainrot Unblocked phenomenon? There's never been a better time to start. This unblocked game is free, accessible, and incredibly fun. Whether you're looking for a casual idle game to play during breaks or a competitive multiplayer experience, Steal a Brainrot Unblocked delivers on all fronts. Click the play button above and start your journey to becoming a Brainrot empire builder. Collect characters, generate passive income, raid other players, and dominate the leaderboards in Steal a Brainrot Unblocked. The unblocked version is waiting for you—no downloads, no restrictions, just pure gaming enjoyment. Start playing Steal a Brainrot Unblocked now and experience why millions of players worldwide are obsessed with this unblocked game!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
          <Comments gameSlug="steal-a-brainrot-unblocked" />
        </section>

        {/* More Games Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
          <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-4 mb-6 border-2 border-orange-300">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span className="text-3xl">🎮</span>
              All Free Games For You
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {getAllGames(24).map((game, i) => (
              <a
                key={i}
                href={isRealGame(game) ? `/${game.slug}` : '#'}
                className="group cursor-pointer block"
                onClick={(e) => !isRealGame(game) && e.preventDefault()}
              >
                <div className={`relative aspect-square rounded-xl overflow-hidden border-3 border-gray-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl ${isRealGame(game) ? 'bg-white' : `bg-gradient-to-br ${game.color}`}`}>
                  {isRealGame(game) ? (
                    <>
                      {game.releaseDate && <NewBadge releaseDate={game.releaseDate} />}
                      <Image
                        src={game.image}
                        alt={`Play ${game.name} - Free Online Game | Unblocked`}
                        width={150}
                        height={150}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        quality={70}
                      />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl md:text-5xl">
                      {game.emoji}
                    </div>
                  )}
                </div>
                <p className="text-center text-sm font-semibold text-gray-700 mt-2 truncate">{game.name}</p>
              </a>
            ))}
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-8">
            <a
              href="/all"
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-cyan-300"
            >
              View More Games →
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
