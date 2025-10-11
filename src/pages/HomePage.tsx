import { useState } from 'react';
import { Play, Maximize, ExternalLink, Star, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';
import GamePreview from '../components/GamePreview';
import NewBadge from '../components/NewBadge';
import { isRealGame } from '../data/games';
import { getAllGames } from '../utils/gameUtils';

export default function HomePage() {
  const [showGame, setShowGame] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const gameData = {
    title: 'Steal A Brainrot Unblocked',
    description: "Steal A Brainrot Unblocked isn't just another quirky indie game—it's a full-on barnyard brawl of brains, reflexes, and explosive sheep mayhem. This fast-paced survival ...",
    thumbnail: '/images/thumbnails/steal-a-brainrot-unblocked.webp',
    playUrl: 'https://st.8games.net/9/8g/igra-ukradi-brejnrot-original-3d/',
    backgroundColor: 'from-orange-400 via-orange-300 to-orange-200'
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
    <Layout>
      {/* Full Screen Game Hero */}
      <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 relative bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Blurred Background - Gaming themed */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=1080&fit=crop)',
            filter: 'blur(12px)',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-purple-600/20" />

        {/* Game Card */}
        <div className="relative z-10 w-full max-w-6xl">
          {!showGame ? (
            /* Game Preview Card */
            <GamePreview
              title={gameData.title}
              description={gameData.description}
              thumbnail={gameData.thumbnail}
              onPlayClick={handlePlayClick}
              backgroundColor={gameData.backgroundColor}
            />
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
                  <img
                    src="/images/thumbnails/steal-a-brainrot-unblocked.webp"
                    alt="Steal a Brainrot Unblocked"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                  Steal a Brainrot Unblocked | Play Online for Free
                </h1>
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
            {getAllGames().map((game, i) => (
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
                      <img
                        src={game.image}
                        alt={game.name}
                        className="w-full h-full object-contain"
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
                <h3 className="text-2xl font-bold text-gray-800 mb-3">What is Steal a Brainrot?</h3>
                <p className="leading-relaxed">
                  Steal a Brainrot is an innovative 3D idle heist game originally from Roblox, now available unblocked
                  in your browser. In this chaotic multiplayer world, your main objective is to collect as many Brainrot
                  meme characters as possible to generate massive passive income. Each character, from the charming
                  <strong> Tralalero Tralala</strong> to the chaotic <strong>Capuchino Assassino</strong>, automatically
                  generates money for you as long as they are in your base.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">How to Play</h3>
                <div className="bg-white rounded-xl p-6 border-2 border-cyan-400">
                  <h4 className="font-bold text-lg mb-3">🎮 Controls:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="px-3 py-1 bg-cyan-500 text-white rounded font-mono text-sm font-bold">WASD</span>
                      <span>Move around the map</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="px-3 py-1 bg-cyan-500 text-white rounded font-mono text-sm font-bold">E</span>
                      <span>Interact - Buy new Brainrot from the belt or pick up stolen characters</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Game Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                    <h4 className="font-bold text-lg mb-2">💰 Passive Income System</h4>
                    <p>Your Brainrots work for you, creating a steady stream of money even when you're not playing.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                    <h4 className="font-bold text-lg mb-2">🌟 7 Rarity Tiers</h4>
                    <p>Common, Rare, Epic, Legendary, Mythic, Brainrot God, and Secret. Higher rarity = more income!</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-orange-300">
                    <h4 className="font-bold text-lg mb-2">🎯 Stealing Mechanic</h4>
                    <p>Raid other players' bases and steal their prized Brainrots. High risk, high reward!</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                    <h4 className="font-bold text-lg mb-2">🛡️ Base Defense</h4>
                    <p>Protect your valuable collection from other players trying to steal from you.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Popular Characters</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-cyan-400">
                    <h4 className="font-bold text-lg mb-2">Is Steal a Brainrot free to play?</h4>
                    <p>Yes! Completely free with no downloads required. Play directly in your browser.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
                    <h4 className="font-bold text-lg mb-2">Can I play at school or work?</h4>
                    <p>Yes! This is the unblocked version, accessible from anywhere without restrictions.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400">
                    <h4 className="font-bold text-lg mb-2">How do I steal from other players?</h4>
                    <p>Navigate to another player's base, press E to grab their Brainrot, then run it back to your spawn zone!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <MessageCircle className="w-8 h-8 text-cyan-500" />
              Comments & Reviews
            </h2>

            <div className="space-y-4 mb-6">
              {/* Sample Comments */}
              {[
                { name: 'Player123', rating: 5, comment: 'This game is so addictive! Love collecting all the Brainrots!', time: '2 hours ago' },
                { name: 'GamerPro', rating: 4, comment: 'Great unblocked version. Works perfectly at school!', time: '5 hours ago' },
                { name: 'BrainrotFan', rating: 5, comment: 'The stealing mechanic is so fun! Best idle game ever!', time: '1 day ago' },
              ].map((review, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border-2 border-gray-200">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-bold text-gray-800">{review.name}</div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className={`w-4 h-4 ${j < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.time}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-cyan-400">
              <h3 className="font-bold text-lg mb-3">Leave a Comment</h3>
              <textarea
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-400 focus:outline-none mb-3"
                rows={4}
                placeholder="Share your thoughts about the game..."
              />
              <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors">
                Post Comment
              </button>
            </div>
          </div>
        </section>

        {/* More Games Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
          <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-4 mb-6 border-2 border-orange-300">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span className="text-3xl">🎮</span>
              All Free Games For You
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
            {[
              { emoji: '🎮', name: 'Action Game', color: 'from-red-400 to-orange-400' },
              { emoji: '🎯', name: 'Puzzle Game', color: 'from-blue-400 to-cyan-400' },
              { emoji: '🎪', name: 'Adventure', color: 'from-purple-400 to-pink-400' },
              { emoji: '🎨', name: 'Creative', color: 'from-green-400 to-emerald-400' },
              { emoji: '🎭', name: 'Strategy', color: 'from-yellow-400 to-orange-400' },
              { emoji: '🎬', name: 'Simulation', color: 'from-pink-400 to-rose-400' },
              { emoji: '🎤', name: 'Music', color: 'from-indigo-400 to-purple-400' },
              { emoji: '🎸', name: 'Rhythm', color: 'from-cyan-400 to-blue-400' },
              { emoji: '🎹', name: 'Arcade', color: 'from-teal-400 to-green-400' },
              { emoji: '🎺', name: 'Racing', color: 'from-red-400 to-pink-400' },
              { emoji: '🎻', name: 'RPG', color: 'from-violet-400 to-purple-400' },
              { emoji: '🥁', name: 'Sports', color: 'from-amber-400 to-yellow-400' },
              { emoji: '🎲', name: 'Board Game', color: 'from-blue-400 to-indigo-400' },
              { emoji: '🎰', name: 'Casino', color: 'from-orange-400 to-red-400' },
              { emoji: '🎳', name: 'Bowling', color: 'from-green-400 to-teal-400' },
              { emoji: '🎱', name: 'Pool', color: 'from-gray-600 to-gray-800' },
              { emoji: '⚽', name: 'Soccer', color: 'from-green-500 to-emerald-500' },
              { emoji: '🏀', name: 'Basketball', color: 'from-orange-500 to-red-500' },
              { emoji: '🏈', name: 'Football', color: 'from-brown-500 to-orange-600' },
              { emoji: '⚾', name: 'Baseball', color: 'from-blue-500 to-red-500' },
              { emoji: '🎾', name: 'Tennis', color: 'from-yellow-400 to-green-400' },
              { emoji: '🏐', name: 'Volleyball', color: 'from-blue-400 to-white' },
              { emoji: '🏉', name: 'Rugby', color: 'from-red-600 to-brown-600' },
              { emoji: '🎣', name: 'Fishing', color: 'from-blue-300 to-cyan-400' },
            ].map((game, i) => (
              <div
                key={i}
                className="group cursor-pointer"
              >
                <div className={`aspect-square rounded-xl overflow-hidden border-3 border-gray-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl bg-gradient-to-br ${game.color}`}>
                  <div className="w-full h-full flex items-center justify-center text-3xl md:text-4xl">
                    {game.emoji}
                  </div>
                </div>
                <p className="text-center text-xs md:text-sm font-semibold text-gray-700 mt-2 truncate">{game.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
              SEE ALL
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
