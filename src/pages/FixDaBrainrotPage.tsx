import { useState } from 'react';
import { Play, Maximize, ExternalLink, Star, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';
import { hasTagPage, getTagSlug } from '../utils/tagUtils';
import GamePreview from '../components/GamePreview';
import StarRating from '../components/StarRating';
import Comments from '../components/Comments';
import NewBadge from '../components/NewBadge';
import { allGames, isRealGame } from '../data/games';

export default function FixDaBrainrotPage() {
  const [showGame, setShowGame] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Fix Da Brainrot game data
  const game = {
    title: 'Fix Da Brainrot',
    slug: 'fix-da-brainrot',
    subtitle: 'Jigsaw Puzzle Adventure!',
    description: 'A jigsaw puzzle game with a unique twist! Assemble torn paper pieces to reveal delightful images. Choose 16 pieces for quick fun or 32 pieces for a brain-teasing challenge!',
    playUrl: 'https://html5.gamedistribution.com/rvvASMiM/22cf952a825b4ee6a39d603588c6d674/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3N0ZWFsLWJyYWlucm90LmlvLyIsInBhcmVudERvbWFpbiI6InN0ZWFsLWJyYWlucm90LmlvIiwidG9wRG9tYWluIjoic3RlYWwtYnJhaW5yb3QuaW8iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9',
    thumbnail: '/images/thumbnails/fix-da-brainrot.jpg',
    rating: 5.0,
    playCount: 124,
    tags: ['Brainrot', 'Puzzle', 'Casual', 'Brain', 'Relaxing', 'Creative'],
    backgroundColor: 'from-yellow-400 via-orange-400 to-red-400'
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
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900">
        {/* Game Display Area */}
        <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8 relative">
          {/* 背景图 */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1920&h=1080&fit=crop)',
              filter: 'blur(12px)',
            }}
          />

          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-rose-600/20" />

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

        {/* Game Info Section - 白色背景 */}
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

          {/* Related Games */}
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

          {/* 游戏详细介绍 */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t-4 border-cyan-400">
            <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl p-4 mb-6 border-2 border-orange-300">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-3xl">📖</span>
                About Fix Da Brainrot
              </h2>
            </div>

            <div className="prose max-w-none">
              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🧩 Game Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fix Da Brainrot is a jigsaw puzzle game that offers a unique twist on the traditional puzzle experience. With its charmingly designed pieces that resemble torn paper, players are invited to embark on a creative journey of assembling delightful images. You can choose your challenge level: opt for 16 pieces for a quick and easy fix, or tackle 32 pieces for a more complex and engaging brain teaser. As you drag, drop, and fit the pieces together, you'll watch the picture slowly come alive, transforming your puzzle-solving efforts into a satisfying experience.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎮 How to Play</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">🎯</span>
                    <div>
                      <h4 className="font-bold text-gray-800">Mission</h4>
                      <p className="text-gray-700">Your mission in Fix Da Brainrot is to assemble the torn pieces into a complete picture. Each completed puzzle reveals a fun and quirky image that adds to the joy of the game.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl flex-shrink-0">🖱️</span>
                    <div>
                      <h4 className="font-bold text-gray-800">Controls</h4>
                      <p className="text-gray-700">Use your mouse or touchpad to drag and drop the pieces. Move the torn pieces around the puzzle area until they snap into their correct positions.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Pro Tips</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">1️⃣</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Start with the Edges</h4>
                        <p className="text-gray-700 text-sm">Begin by locating the edge pieces and assembling the border of the puzzle. This gives you a framework to work within.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">2️⃣</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Group by Color and Pattern</h4>
                        <p className="text-gray-700 text-sm">Group pieces by color and pattern to make it easier to find the right pieces as you progress through the puzzle.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">3️⃣</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Focus on One Section</h4>
                        <p className="text-gray-700 text-sm">Focus on one section of the puzzle at a time. Completing small areas can help you visualize the overall picture better.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">4️⃣</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Rotate if Needed</h4>
                        <p className="text-gray-700 text-sm">Don't forget to rotate pieces if they don't seem to fit. Some pieces may need to be turned to match the surrounding ones.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-pink-200">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">5️⃣</span>
                      <div>
                        <h4 className="font-bold text-gray-800">Take Breaks</h4>
                        <p className="text-gray-700 text-sm">If you get stuck, take a break and come back with fresh eyes. Sometimes, stepping away can help you see the solution more clearly.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🌟 Why Play Fix Da Brainrot?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fix Da Brainrot is not just another puzzle game - it's an engaging experience that combines creativity with cognitive challenge. The quirky art style and the satisfying process of putting together torn paper pieces make it a delightful way to unwind.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're a puzzle enthusiast or just looking for a fun way to pass the time, this game offers a perfect balance of challenge and enjoyment. Plus, the satisfaction of completing each puzzle and revealing a charming image keeps players coming back for more. Join the vibrant community of Fix Da Brainrot enthusiasts and immerse yourself in a world of creativity and fun!
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

