import { useState } from 'react';
import { Play, Maximize, ExternalLink, Star, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';
import { hasTagPage, getTagSlug } from '../utils/tagUtils';
import GamePreview from '../components/GamePreview';
import StarRating from '../components/StarRating';
import Comments from '../components/Comments';
import NewBadge from '../components/NewBadge';
import { allGames, isRealGame } from '../data/games';

export default function ItalianBrainrotClicker2Page() {
  const [showGame, setShowGame] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const game = {
    title: 'Italian Brainrot Clicker 2',
    slug: 'italian-brainrot-clicker-2',
    subtitle: 'The Meme Madness Continues!',
    description: 'The sequel to the hilarious clicker game! Meet quirky characters like Tralalero Tralala, Bombardino Crocodilo, and Tung Tung Tung Sahur in this chaotic meme-ized world.',
    playUrl: 'https://game.azgame.io/italian-brainrot-clicker-2/',
    thumbnail: '/images/thumbnails/italian-brainrot-clicker-2.png',
    rating: 4.0,
    playCount: 2,
    tags: ['Brainrot', 'Clicker', 'Meme', 'Idle', 'Funny', 'Casual'],
    backgroundColor: 'from-red-400 via-pink-400 to-rose-400'
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
      <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-800 to-red-900">
        <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 relative">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&h=1080&fit=crop)',
              filter: 'blur(12px)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-600/20 via-pink-600/20 to-red-600/20" />

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
                About Italian Brainrot Clicker 2
              </h2>
            </div>

            <div className="prose max-w-none">
              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎮 The Appeal</h3>
                <p className="text-gray-700 leading-relaxed">
                  Italian Brainrot Clicker 2 offers a light, humorous, yet extremely addictive entertainment experience. Each click generates Brainrot points to unlock meme characters and upgrade powers. From the <strong>tralalero tralala</strong> rhythm to the <strong>Tung Tung Tung Sahur</strong> chants!
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 How to Play</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">👆 Starting from the First Click</h4>
                    <p className="text-gray-700">Just click or tap on the character to earn points. The faster you click, the more Brainrot points you gain!</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">⬆️ Upgrade System</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li><strong>Manual upgrade:</strong> +points per click</li>
                      <li><strong>Auto upgrade:</strong> Generate points passively</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
                    <p className="font-bold text-gray-800 mb-2">💰 Examples:</p>
                    <p className="text-sm text-gray-700">• Cursor: +1/click (50 pts) • Auto Click: +1/sec (125 pts) • Trallerro Farm: +6/sec (1,100 pts)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-xl p-6 mb-6 border-2 border-pink-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎭 12 Unlockable Characters</h3>
                <p className="text-gray-700 leading-relaxed">
                  From Nike-wearing Trallerro Trallala to Chimpanzini Bananini, each character has unique sound effects. Unlock them at milestones like <strong>50,000–1,000,000 Brainrots</strong>!
                </p>
              </div>

              <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border-2 border-rose-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">⭐ Why Play?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✨ Brilliant graphics with hilarious meme sounds</li>
                  <li>🎮 Simple yet deep clicker mechanics</li>
                  <li>⚡ Fast and satisfying leveling up</li>
                  <li>🇮🇹 Experience unique Italian meme culture</li>
                </ul>
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
