import { useState } from 'react';
import { Play, Maximize, ExternalLink, Star, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';
import { hasTagPage, getTagSlug } from '../utils/tagUtils';
import GamePreview from '../components/GamePreview';
import StarRating from '../components/StarRating';
import Comments from '../components/Comments';
import NewBadge from '../components/NewBadge';
import { allGames, isRealGame } from '../data/games';

export default function StealBrainrotOnlinePage() {
  const [showGame, setShowGame] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Steal Brainrot Online game data
  const game = {
    title: 'Steal Brainrot Online',
    slug: 'steal-brainrot-online',
    subtitle: 'Multiplayer Brainrot Mayhem!',
    description: 'Join players worldwide in this hilarious multiplayer brainrot adventure! Steal, compete, and cause chaos in this Roblox-inspired online game!',
    playUrl: 'https://now.gg/apps/roblox-corporation/5349/roblox.html',
    thumbnail: '/images/thumbnails/steal-brainrot-online.png',
    rating: 4.3,
    playCount: 12456,
    tags: ['Brainrot', 'Multiplayer', 'Roblox', 'Meme', 'Strategy', 'Casual'],
    backgroundColor: 'from-blue-500 via-cyan-500 to-teal-500'
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-teal-600/20" />

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

        {/* 游戏信息区 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
          <div className="bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8">
              {/* 游戏缩略图 */}
              <div className="md:w-1/3">
                <img
                  src={game.thumbnail}
                  alt={game.title}
                  className="w-full rounded-xl shadow-lg border-4 border-white"
                />
              </div>

              {/* 游戏详情 */}
              <div className="md:w-2/3">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{game.title}</h1>
                <p className="text-xl text-gray-600 mb-4">{game.subtitle}</p>

                <div className="flex items-center gap-4 mb-4">
                  <StarRating rating={game.rating} />
                  <span className="text-gray-600">
                    <Play className="w-4 h-4 inline mr-1" />
                    {game.playCount.toLocaleString()} plays
                  </span>
                </div>

                <p className="text-gray-700 mb-6">{game.description}</p>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2">
                  {game.tags.map((tag, i) => (
                    <a
                      key={i}
                      href={hasTagPage(tag) ? `/tag/${getTagSlug(tag)}` : '#'}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                        hasTagPage(tag)
                          ? 'bg-gray-800 text-white hover:bg-gray-700 cursor-pointer'
                          : 'bg-gray-300 text-gray-600 cursor-default'
                      }`}
                      onClick={(e) => !hasTagPage(tag) && e.preventDefault()}
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 游戏介绍 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About the Game</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Steal Brainrot Online is a multiplayer Roblox-inspired game where you compete with players worldwide! Steal items, complete challenges, and cause hilarious chaos in this meme-filled adventure.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Team up with friends or go solo in this strategic multiplayer experience. With constant updates and new content, there's always something new to discover!
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">How to Play</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold">•</span>
                <span><strong>Move:</strong> Use WASD or arrow keys to navigate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold">•</span>
                <span><strong>Steal:</strong> Click on items to steal them</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold">•</span>
                <span><strong>Compete:</strong> Race against other players</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 font-bold">•</span>
                <span><strong>Win:</strong> Be the first to complete objectives</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Game Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: '🌐', title: 'Multiplayer', desc: 'Play with friends worldwide' },
                { icon: '🎯', title: 'Objectives', desc: 'Complete challenging missions' },
                { icon: '😂', title: 'Meme Content', desc: 'Hilarious brainrot humor' },
                { icon: '🏆', title: 'Compete', desc: 'Climb the leaderboards' },
              ].map((feature, i) => (
                <div key={i} className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-200">
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
        </section>

        {/* 评论区 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
          <Comments gameSlug={game.slug} />
        </section>

        {/* More Games */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              <span className="text-4xl">🎮</span>
              More Games
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {allGames.slice(0, 12).map((g, i) => (
              <a
                key={i}
                href={isRealGame(g) ? `/${g.slug}` : '#'}
                className="group cursor-pointer block"
                onClick={(e) => !isRealGame(g) && e.preventDefault()}
              >
                <div className={`relative aspect-square rounded-xl overflow-hidden border-3 border-gray-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl ${isRealGame(g) ? 'bg-white' : `bg-gradient-to-br ${g.color}`}`}>
                  {isRealGame(g) ? (
                    <>
                      {g.releaseDate && <NewBadge releaseDate={g.releaseDate} />}
                      <img
                        src={g.image}
                        alt={g.name}
                        className="w-full h-full object-cover"
                      />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-3xl md:text-4xl">
                      {g.emoji}
                    </div>
                  )}
                </div>
                <div className="mt-2 text-center">
                  <p className="text-sm font-semibold text-white truncate">{g.name}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}