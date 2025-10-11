import { useState } from 'react';
import { Play, Maximize, ExternalLink, Star, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';
import NewBadge from '../components/NewBadge';
import { allGames, isRealGame } from '../data/games';

interface GameDetailPageProps {
  slug: string;
}

export default function GameDetailPage({ slug }: GameDetailPageProps) {
  const [showGame, setShowGame] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // 占位游戏数据
  const game = {
    title: 'Steal a Brainrot',
    subtitle: 'The Ultimate Unblocked Game',
    description: 'Experience the most addictive unblocked game! Navigate through challenging levels, collect items, and compete with friends.',
    playUrl: 'https://st.8games.net/9/8g/igra-ukradi-brejnrot-original-3d/',
    rating: 4.8,
    playCount: 15234,
    tags: ['3D', 'Multiplayer', 'Idle', 'Unblocked'],
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
        {/* 游戏展示区 - 参考首页设计 */}
        <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 relative">
          {/* 背景图 */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=1080&fit=crop)',
              filter: 'blur(12px)',
            }}
          />

          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-purple-600/20" />

          {/* 游戏卡片 */}
          <div className="relative z-10 w-full max-w-5xl">
            {!showGame ? (
              /* 游戏预览卡片 */
              <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border-4 border-cyan-400">
                {/* 游戏缩略图 */}
                <div className="relative aspect-video bg-gradient-to-br from-cyan-400 via-blue-500 to-red-500">
                  {/* 背景图案 */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '30px 30px'
                    }} />
                  </div>

                  {/* Play按钮 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={handlePlayClick}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative p-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-16 h-16 text-white fill-white" />
                      </div>
                    </button>
                  </div>

                  {/* 游戏Logo */}
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-2 border-white">
                      <div className="text-6xl">🎮</div>
                    </div>
                  </div>
                </div>

                {/* 游戏信息卡片 */}
                <div className="p-6 md:p-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {game.title}
                  </h1>
                  <p className="text-cyan-300 text-lg mb-6">
                    {game.subtitle}
                  </p>

                  {/* 操作按钮 */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <button
                      onClick={handlePlayClick}
                      className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Play className="w-5 h-5" />
                      Play Now
                    </button>
                    <a
                      href={game.playUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      New Tab
                    </a>
                  </div>

                  {/* 底部工具栏 */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-bold">{game.rating}</span>
                        <span className="text-gray-400 text-sm">Rating</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-cyan-400" />
                        <span className="text-white font-bold">128</span>
                        <span className="text-gray-400 text-sm">Reviews</span>
                      </div>
                    </div>
                    <button
                      onClick={handleFullscreen}
                      className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      title="Fullscreen"
                    >
                      <Maximize className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* 游戏播放中 */
              <div id="game-container" className="relative bg-black rounded-3xl overflow-hidden border-4 border-cyan-400 shadow-2xl">
                <div className="aspect-video">
                  <iframe
                    src={game.playUrl}
                    className="w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
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
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center text-5xl shadow-lg">
                    🎮
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{game.title}</h2>
                  <p className="text-gray-700 text-lg mb-4">{game.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-lg shadow-md border-2 border-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
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
                Play Similar Games
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {allGames.slice(0, 12).map((game, i) => (
                <a
                  key={i}
                  href={isRealGame(game) ? `/game/${game.slug}` : '#'}
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
                  {game.title} is an exciting unblocked game that combines strategy, skill, and fun!
                  Navigate through challenging levels, collect power-ups, and compete with players worldwide.
                </p>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">🎮 How to Play</h3>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold">•</span>
                      <span><strong>Movement:</strong> Use Arrow Keys or WASD to move your character</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold">•</span>
                      <span><strong>Action:</strong> Press Space or Click to interact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold">•</span>
                      <span><strong>Pause:</strong> Press ESC to pause the game</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">⭐ Game Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: '🎯', title: 'Challenging Levels', desc: 'Multiple levels with increasing difficulty' },
                      { icon: '🏆', title: 'Achievements', desc: 'Unlock rewards and special items' },
                      { icon: '👥', title: 'Multiplayer', desc: 'Play with friends online' },
                      { icon: '🎨', title: 'Beautiful Graphics', desc: 'Stunning 3D visuals and effects' },
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

          {/* 评论区 */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <div className="bg-gray-100 rounded-2xl p-8 border-2 border-gray-300 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-cyan-500" />
                Player Reviews
              </h2>

              {/* 示例评论 */}
              <div className="space-y-4 mb-6">
                {[
                  { name: 'Alex', rating: 5, comment: 'Amazing game! Super addictive and fun!' },
                  { name: 'Sarah', rating: 5, comment: 'Best unblocked game ever! Love the graphics.' },
                  { name: 'Mike', rating: 4, comment: 'Great gameplay, would recommend to friends!' },
                ].map((review, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-800">{review.name}</span>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>

              {/* 评论输入框 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-gray-800 mb-3">Leave a Review</h3>
                <textarea
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-400 focus:outline-none mb-3"
                  rows={4}
                  placeholder="Share your thoughts about this game..."
                />
                <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors">
                  Post Review
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
