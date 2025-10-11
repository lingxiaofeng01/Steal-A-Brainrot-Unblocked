import { useState } from 'react';
import { Play, Maximize, ExternalLink, Star, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';
import { hasTagPage, getTagSlug } from '../utils/tagUtils';
import GamePreview from '../components/GamePreview';
import StarRating from '../components/StarRating';
import Comments from '../components/Comments';
import NewBadge from '../components/NewBadge';
import { allGames, isRealGame } from '../data/games';

export default function PlantsVsBrainrotsPage() {
  const [showGame, setShowGame] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const game = {
    title: 'Plants vs Brainrots',
    slug: 'plants-vs-brainrots',
    subtitle: 'Tower Defense Meme Battle!',
    description: 'A unique version of the brainrot world! Control plants and face Brainrots with a mutation system that changes both strength and appearance.',
    playUrl: 'https://st.8games.net/7/8g/igra-ukradi-brejnrot-100-original/',
    thumbnail: '/images/thumbnails/plants-vs-brainrots.jpg',
    rating: 4.1,
    playCount: 40,
    tags: ['Brainrot', 'Strategy', 'Tower Defense', 'Meme', 'Casual', 'Funny'],
    backgroundColor: 'from-green-400 via-emerald-400 to-teal-400'
  };

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
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900">
        <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 relative">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1920&h=1080&fit=crop)',
              filter: 'blur(12px)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-emerald-600/20 to-teal-600/20" />

          <div className="relative z-10 w-full max-w-6xl">
            {!showGame ? (
              <GamePreview
                title={game.title}
                description={game.description}
                thumbnail={game.thumbnail}
                onPlayClick={handlePlayClick}
                backgroundColor={game.backgroundColor}
              />
            ) : (
              <div id="game-container" className="relative bg-black rounded-3xl overflow-hidden border-4 border-cyan-400 shadow-2xl">
                <div className="aspect-video relative">
                  <iframe
                    id="iframehtml5"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="auto"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                    src={game.playUrl}
                  />
                </div>
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <button
                    onClick={handleFullscreen}
                    className="p-3 bg-gray-900/80 hover:bg-gray-800 rounded-lg transition-colors shadow-lg"
                    title="Fullscreen"
                  >
                    <Maximize className="w-5 h-5 text-white" />
                  </button>
                  <a
                    href={game.playUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900/80 hover:bg-gray-800 rounded-lg transition-colors shadow-lg"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white">
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-2xl p-6 border-4 border-cyan-400 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg border-2 border-white">
                    <img
                      src={game.thumbnail}
                      alt={game.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{game.title}</h2>
                  
                  {/* Star Rating */}
                  <div className="mb-4">
                    <StarRating gameSlug={game.slug} />
                  </div>
                  <p className="text-gray-700 text-lg mb-4">{game.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((tag, i) => {
                      const isClickable = hasTagPage(tag);
                      const TagElement = isClickable ? 'a' : 'span';
                      return (
                        <TagElement
                          key={i}
                          {...(isClickable ? { href: `/tag/${getTagSlug(tag)}` } : {})}
                          className={`px-4 py-2 bg-gray-800 text-white font-semibold rounded-full shadow-md hover:bg-gray-700 ${
                            isClickable
                              ? 'hover:bg-cyan-50 hover:border-cyan-500 transition-colors cursor-pointer'
                              : 'opacity-75 cursor-default'
                          }`}
                        >
                          {tag}
                        </TagElement>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-4 mb-6 border-2 border-orange-300">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                More Brainrot Games
              </h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {allGames.slice(0, 12).map((game, i) => (
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
                          className="w-full h-full object-cover"
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

          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-4 mb-6 border-2 border-orange-300">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-3xl">📖</span>
                About Plants vs Brainrots
              </h2>
            </div>

            <div className="prose max-w-none">
              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🧬 Mutations System</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Each mutation has a different multiplier affecting strength or money earned. Some appear randomly, others activate in rare weather events.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                    <h4 className="font-bold text-gray-800 mb-2">🌱 Plants</h4>
                    <p className="text-sm text-gray-700">Increase damage with special effects like freezing</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                    <h4 className="font-bold text-gray-800 mb-2">🧟 Brainrots</h4>
                    <p className="text-sm text-gray-700">Earn money faster, increasing difficulty</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎮 How to Play</h3>
                <div className="space-y-2 text-gray-700">
                  <p>1️⃣ <strong>Choose and Plant</strong> - Select plants strategically</p>
                  <p>2️⃣ <strong>Face Brainrots</strong> - Defend against waves of enemies</p>
                  <p>3️⃣ <strong>Manage Mutations</strong> - Watch for weather events</p>
                  <p>4️⃣ <strong>Collect & Upgrade</strong> - Gather coins and upgrade</p>
                  <p>5️⃣ <strong>Survive</strong> - Last as long as possible!</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">🌿 Top Plants</h3>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p>• Cactus (Rare) - $200 / 10 dmg</p>
                    <p>• Pumpkin (Epic) - $5k / 55 dmg</p>
                    <p>• Dragon Fruit (Legendary) - $100k / 250 dmg</p>
                    <p>• Mr. Carrot (Secret) - $50m / 3.5k dmg</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 border-2 border-red-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">🧟 Top Brainrots</h3>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p>• Noobini Bananini (Rare) - $2/s</p>
                    <p>• Trippi Troppi (Epic) - $15/s</p>
                    <p>• Gangster Footera (Legendary) - $36/s</p>
                    <p>• Matteo (Divine) - $600/s</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">⭐ Why Play?</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Unpredictability</strong> makes it exciting - you never know which mutation appears next! A Frozen plant can save the game, while a Galaxy Brainrot can turn it into a nightmare. The game combines <strong>tactical and luck elements</strong>, making each play unique. Follow weather events for the rarest mutations!
                </p>
              </div>
            </div>
          </section>

          {/* Comments Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <Comments gameSlug={game.slug} />
          </section>
        </div>
      </div>
    </Layout>
  );
}
