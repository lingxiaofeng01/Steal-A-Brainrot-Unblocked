import { useState } from 'react';
import { Play, Maximize, ExternalLink, Star, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';
import { hasTagPage, getTagSlug } from '../utils/tagUtils';
import GamePreview from '../components/GamePreview';
import StarRating from '../components/StarRating';
import Comments from '../components/Comments';
import NewBadge from '../components/NewBadge';
import { allGames, isRealGame } from '../data/games';

export default function BrainrotHookSwingPage() {
  const [showGame, setShowGame] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Brainrot Hook Swing game data
  const game = {
    title: 'Brainrot Hook Swing',
    slug: 'brainrot-hook-swing',
    subtitle: 'Swing Through the Chaos!',
    description: 'Master the art of hook swinging in this fast-paced action game! Swing from platform to platform, avoid obstacles, and reach new heights in this addictive brainrot adventure!',
    playUrl: 'https://html5.gamedistribution.com/rvvASMiM/54a667dc8d03480d9191137150cf1f88/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3N0ZWFsLWJyYWlucm90LmlvLyIsInBhcmVudERvbWFpbiI6InN0ZWFsLWJyYWlucm90LmlvIiwidG9wRG9tYWluIjoic3RlYWwtYnJhaW5yb3QuaW8iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9',
    thumbnail: '/images/thumbnails/brainrot-hook-swing.jpg',
    rating: 4.7,
    playCount: 18234,
    tags: ['Brainrot', 'Action', 'Skill', 'Arcade', 'Physics'],
    backgroundColor: 'from-orange-500 via-red-500 to-purple-500'
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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* 游戏展示区 */}
        <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 relative">
          {/* 背景图 */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop)',
              filter: 'blur(12px)',
            }}
          />

          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-600/20 to-purple-600/20" />

          {/* 游戏卡片 */}
          <div className="relative z-10 w-full max-w-6xl">
            {!showGame ? (
              /* 游戏预览卡片 */
              <GamePreview
                title={game.title}
                description={game.description}
                thumbnail={game.thumbnail}
                onPlayClick={handlePlayClick}
                backgroundColor={game.backgroundColor}
              />
            ) : (
              /* 游戏播放中 */
              <div id="game-container" className="relative bg-black rounded-3xl overflow-hidden border-4 border-cyan-400 shadow-2xl">
                <div className="aspect-video relative">
                  <iframe
                    id="game"
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                    seamless
                    scrolling="no"
                    src={game.playUrl}
                    className="absolute inset-0 w-full h-full border-0"
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

        {/* 游戏介绍区 - 白色背景 */}
        <div className="bg-white">
          {/* 游戏标题和标签 */}
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
                              ? 'hover:bg-gray-700 transition-colors cursor-pointer'
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

          {/* 相关游戏区 */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-4 mb-6 border-2 border-orange-300">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                More Action Games
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

          {/* 游戏详情介绍 */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <div className="bg-gradient-to-br from-pink-100 via-blue-100 to-cyan-100 rounded-2xl p-8 border-4 border-cyan-400 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="text-4xl">📖</span>
                About {game.title}
              </h2>

              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Brainrot Hook Swing is an exhilarating action game that tests your reflexes and timing!
                  Use your grappling hook to swing from platform to platform, navigate through challenging
                  obstacles, and reach incredible heights. Perfect your swinging technique and become the
                  ultimate hook master!
                </p>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">🎮 How to Play</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold">•</span>
                      <span><strong>Click/Tap:</strong> Launch your grappling hook to attach to platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold">•</span>
                      <span><strong>Swing:</strong> Build momentum by swinging back and forth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold">•</span>
                      <span><strong>Release:</strong> Let go at the right moment to launch forward</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold">•</span>
                      <span><strong>Avoid:</strong> Don't hit obstacles or fall off the screen!</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">⭐ Game Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: '🪝', title: 'Grappling Hook', desc: 'Master the physics-based hook mechanics' },
                      { icon: '🎯', title: 'Precision Timing', desc: 'Perfect your timing for maximum distance' },
                      { icon: '🏆', title: 'High Scores', desc: 'Compete for the best distance records' },
                      { icon: '🎨', title: 'Colorful Graphics', desc: 'Enjoy vibrant and smooth animations' },
                    ].map((feature, i) => (
                      <div key={i} className="bg-white rounded-xl p-4 shadow-md border-2 border-cyan-200">
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
                </div>
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

