import { useState } from 'react';
import { Maximize, ExternalLink } from 'lucide-react';
import Layout from '../components/Layout';
import { hasTagPage, getTagSlug } from '../utils/tagUtils';
import GamePreview from '../components/GamePreview';
import { allGames, isRealGame } from '../data/games';
import NewBadge from '../components/NewBadge';
import StarRating from '../components/StarRating';
import Comments from '../components/Comments';

export default function CrazyCattle3DPage() {
  const [showGame, setShowGame] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Crazy Cattle 3D 游戏数据
  const game = {
    slug: 'crazy-cattle-3d',
    title: 'Crazy Cattle 3D',
    subtitle: 'Woolly Chaos Meets Tactical Survival',
    description: 'Battle it out as an explosive sheep in this hilarious multiplayer arena! Master momentum, timing, and strategy across stunning maps from Ireland to Iceland. Fast-paced woolly warfare awaits!',
    playUrl: '/game/crazy-cattle-3d/',
    thumbnail: '/images/thumbnails/crazy-cattle-3d.jpg',
    rating: 4.6,
    playCount: 2253,
    tags: ['Battle', 'Multiplayer', 'Strategy', 'Casual', 'Funny', '3D', 'Animal'],
    backgroundColor: 'from-green-400 via-emerald-300 to-teal-200',
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
              backgroundImage: 'url(https://images.unsplash.com/photo-1560807707-8cc77767d783?w=1920&h=1080&fit=crop)',
              filter: 'blur(12px)',
            }}
          />

          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-emerald-600/20 to-teal-600/20" />

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
                    id="game-frame"
                    src={game.playUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="fullscreen"
                    allowFullScreen
                    title={game.title}
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

        {/* Game Info Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{game.title}</h1>
            <h2 className="text-2xl text-gray-600 mb-6">{game.subtitle}</h2>
            
            {/* Star Rating */}
            <div className="mb-4">
              <StarRating gameSlug={game.slug} />
            </div>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">{game.description}</p>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🐑 Game Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Unique Gameplay:</strong> Play as an explosive sheep in fast-paced battle royale action</li>
                <li><strong>Stunning Maps:</strong> Battle across Ireland's meadows, Iceland's volcanoes, and New Zealand's peaks</li>
                <li><strong>Strategic Depth:</strong> Master momentum, collision timing, and terrain advantages</li>
                <li><strong>Quick Matches:</strong> Sessions under 30 minutes - perfect for casual or competitive play</li>
                <li><strong>Cross-Platform:</strong> Play on desktop (WASD/Arrow keys) or mobile (touch controls)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🎮 How to Play</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Desktop Controls:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <strong>WASD/Arrow Keys:</strong> Move</li>
                    <li>• <strong>Spacebar/Left Click:</strong> Charge</li>
                    <li>• <strong>E Key:</strong> Jump</li>
                    <li>• <strong>Q Key:</strong> Special Attack</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Mobile Controls:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <strong>Touch & Drag:</strong> Move</li>
                    <li>• <strong>Tap & Hold:</strong> Charge</li>
                    <li>• <strong>Jump Button:</strong> Jump</li>
                    <li>• <strong>Special Button:</strong> Special Move</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Pro Tips</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Build momentum by rolling downhill - speed is your best weapon!</li>
                <li>Time your collisions perfectly to send enemies flying</li>
                <li>Stay aware of terrain and opponent positions</li>
                <li>Save special moves for critical moments</li>
                <li>Learn to predict enemy movement patterns</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <h3 className="text-xl font-bold text-gray-800 w-full mb-2">Tags:</h3>
              {game.tags.map((tag, i) => {
                const isClickable = hasTagPage(tag);
                const TagElement = isClickable ? 'a' : 'span';
                return (
                  <TagElement
                    key={i}
                    {...(isClickable ? { href: `/tag/${getTagSlug(tag)}` } : {})}
                    className={`px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow-md ${
                      isClickable
                        ? 'hover:from-cyan-400 hover:to-blue-400 transition-colors cursor-pointer'
                        : 'opacity-75 cursor-default'
                    }`}
                  >
                    {tag}
                  </TagElement>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">🎯 Why Play Crazy Cattle 3D?</h3>
              <p className="text-gray-700 leading-relaxed">
                Created by a passionate indie developer, Crazy Cattle 3D combines hilarious cartoon chaos with surprisingly deep tactical gameplay. 
                Join a vibrant community of players competing for leaderboard glory while sharing laughs and epic moments. 
                Whether you're here to master the battlefield or just watch sheep knock each other across mountains, 
                this game delivers an unforgettable woolly warfare experience!
              </p>
            </div>
          </div>
        </section>

        {/* 评论区 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Comments gameSlug={game.slug} />
        </section>

        {/* More Games Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">More Games You'll Love</h2>
            <p className="text-gray-400">Discover more exciting games</p>
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
                <p className="text-center text-sm font-semibold text-white mt-2 truncate">
                  {game.name}
                </p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

